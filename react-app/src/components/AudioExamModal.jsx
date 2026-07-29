import React, { useState, useEffect } from 'react';
import { calcScore } from '../data/questionsData';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

export function AudioExamModal({ allQuestions, onClose }) {
  const [step, setStep] = useState('setup'); // 'setup', 'active', 'report'
  const [mode, setMode] = useState('random'); // 'random' or 'custom'
  const [customText, setCustomText] = useState('');
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spokenAnswer, setSpokenAnswer] = useState('');
  const [results, setResults] = useState([]);

  const { speak, cancel: cancelTTS, isSpeaking } = useSpeechSynthesis();
  const { startListening, stopListening, isListening, transcript, resetTranscript, statusMessage } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setSpokenAnswer((prev) => (prev ? prev + ' ' + transcript : transcript));
    }
  }, [transcript]);

  const handleStartExam = () => {
    let selected = [];
    if (mode === 'random') {
      const copy = [...allQuestions];
      copy.sort(() => 0.5 - Math.random());
      selected = copy.slice(0, 10);
    } else {
      const lines = customText.trim().split('\n').filter((l) => l.trim().length > 0);
      if (lines.length === 0) {
        alert('Please enter at least 1 custom question or select 10 Random Questions mode.');
        return;
      }
      selected = lines.slice(0, 10).map((line, idx) => {
        const cleanLine = line.replace(/^(\d+[\.\)]|Q\d+:?)\s*/i, '').trim();
        const matched = allQuestions.find(
          (q) => q.q.toLowerCase().includes(cleanLine.toLowerCase()) || cleanLine.toLowerCase().includes(q.q.toLowerCase())
        );
        if (matched) return matched;
        return {
          id: `C${idx + 1}`,
          q: cleanLine,
          a: 'General QA technical best practice expected.',
          keywords: cleanLine.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 3).slice(0, 5),
          diff: 'medium'
        };
      });
    }

    setExamQuestions(selected);
    setCurrentIndex(0);
    setResults([]);
    setStep('active');
    startQuestion(selected[0]);
  };

  const startQuestion = (qObj) => {
    setSpokenAnswer('');
    resetTranscript();
    stopListening();

    speak(qObj.q, () => {
      // Auto start microphone when interviewer finishes speaking
      startListening();
    });
  };

  const handleRepeatQuestion = () => {
    if (examQuestions[currentIndex]) {
      stopListening();
      speak(examQuestions[currentIndex].q, () => {
        startListening();
      });
    }
  };

  const handleToggleMic = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmitQuestion = () => {
    cancelTTS();
    stopListening();

    const qObj = examQuestions[currentIndex];
    const userText = spokenAnswer.trim();
    const evalRes = calcScore(userText, qObj);

    const newResult = {
      q: qObj.q,
      ref: qObj.a,
      user: userText || '(No spoken answer recorded)',
      score: evalRes.s,
      yes: evalRes.yes,
      no: evalRes.no
    };

    const nextResults = [...results, newResult];
    setResults(nextResults);

    if (currentIndex + 1 < examQuestions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      startQuestion(examQuestions[nextIdx]);
    } else {
      setStep('report');
    }
  };

  const handleClose = () => {
    cancelTTS();
    stopListening();
    onClose();
  };

  const totalPoints = results.reduce((acc, cur) => acc + cur.score, 0);
  const grandTotal = results.length > 0 ? Math.round((totalPoints / (results.length * 10)) * 100) : 0;

  return (
    <div className="modal-bg show">
      <div className="modal exam-modal">
        {step === 'setup' && (
          <div>
            <div className="modal-head">
              <span className="modal-badge">🎧 AUDIO INTERVIEW EXAM</span>
              <button className="modal-x" onClick={handleClose}>&#x2715;</button>
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
              10-Question Voice Interview
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text2)', marginBottom: '20px' }}>
              The AI interviewer will read 10 questions aloud to test your hearing & oral presentation. Speak your answers directly into your microphone, and get instant detailed marks!
            </p>

            <div className="exam-setup-options">
              <div
                className={`exam-option-card ${mode === 'random' ? 'selected' : ''}`}
                onClick={() => setMode('random')}
              >
                <div className="exam-option-icon">🎲</div>
                <div className="exam-option-title">10 Random Questions</div>
                <div className="exam-option-desc">Auto-selects 10 random questions across all QA & SDET categories.</div>
              </div>

              <div
                className={`exam-option-card ${mode === 'custom' ? 'selected' : ''}`}
                onClick={() => setMode('custom')}
              >
                <div className="exam-option-icon">📝</div>
                <div className="exam-option-title">Custom 10 Questions</div>
                <div className="exam-option-desc">Provide your own 10 questions (existing or brand new custom list).</div>
              </div>
            </div>

            {mode === 'custom' && (
              <div className="custom-q-box">
                <label>Enter 10 Questions (1 per line):</label>
                <textarea
                  className="custom-q-ta"
                  placeholder="1. What is Page Object Model in Selenium?&#10;2. How do you handle dynamic wait in Pytest?&#10;3. Explain CI/CD pipeline stages..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                />
              </div>
            )}

            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <button type="button" className="auth-btn" style={{ padding: '14px 28px', width: 'auto' }} onClick={handleStartExam}>
                🚀 Start Audio Interview
              </button>
            </div>
          </div>
        )}

        {step === 'active' && examQuestions[currentIndex] && (
          <div>
            <div className="modal-head">
              <span className="modal-badge">Q{currentIndex + 1} of {examQuestions.length}</span>
              <button className="modal-x" onClick={handleClose}>&#x2715;</button>
            </div>

            <div className="exam-progress-bar">
              <div
                className="exam-progress-fill"
                style={{ width: `${Math.round(((currentIndex + 1) / examQuestions.length) * 100)}%` }}
              ></div>
            </div>

            <div className="audio-speaker-box">
              <div className="audio-status">
                <span>🗣️</span>
                <span>{isSpeaking ? 'AI Interviewer Speaking...' : 'Listening to your answer...'}</span>
                {isSpeaking && (
                  <div className="sound-wave">
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                    <div className="wave-bar"></div>
                  </div>
                )}
              </div>
              <button type="button" className="btn-speak-again" onClick={handleRepeatQuestion}>
                🔊 Repeat Q
              </button>
            </div>

            <div className="modal-q" style={{ fontSize: '1.15rem', minHeight: '60px' }}>
              {examQuestions[currentIndex].q}
            </div>

            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)' }}>🎙️ YOUR SPOKEN RESPONSE:</span>
              <span style={{ fontSize: '0.75rem', color: isListening ? 'var(--green)' : 'var(--text2)', fontWeight: 600 }}>
                {isListening ? '● Listening Live...' : '○ Mic Paused'}
              </span>
            </div>

            <textarea
              className="modal-ta"
              placeholder="Listening to your microphone... (or type your response if mic is disabled)"
              value={spokenAnswer}
              onChange={(e) => setSpokenAnswer(e.target.value)}
              style={{ minHeight: '130px' }}
            />

            <div className="modal-btns">
              <button
                type="button"
                className={`btn-voice ${isListening ? 'rec' : ''}`}
                onClick={handleToggleMic}
              >
                <span>🎙️</span> <span>{isListening ? 'Stop Mic' : 'Start Mic'}</span>
              </button>
              <button type="button" className="btn-go" onClick={handleSubmitQuestion}>
                ✅ Submit & Next Question ➡️
              </button>
            </div>
            <div className="v-status">{statusMessage}</div>
          </div>
        )}

        {step === 'report' && (
          <div>
            <div className="modal-head">
              <span className="modal-badge" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>
                🏆 EXAMINATION REPORT
              </span>
              <button className="modal-x" onClick={handleClose}>&#x2715;</button>
            </div>

            <div className="score-card-summary">
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text2)', textTransform: 'uppercase' }}>
                Overall Interview Score
              </div>
              <div
                className="exam-score-big"
                style={{
                  color: grandTotal >= 85 ? 'var(--green)' : grandTotal >= 70 ? 'var(--accent)' : grandTotal >= 50 ? 'var(--yellow)' : 'var(--red)'
                }}
              >
                {grandTotal} / 100
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '6px' }}>
                {grandTotal >= 85
                  ? '🌟 Excellent! Outstanding Audio Interview Performance!'
                  : grandTotal >= 70
                  ? '👍 Good Job! Solid QA technical hearing answer!'
                  : grandTotal >= 50
                  ? '⚠️ Moderate. Practice speaking more technical keywords.'
                  : '🎯 Needs Practice. Review the reference answers and speak clearly.'}
              </div>
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
              Detailed Question-by-Question Marking:
            </h3>
            <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '6px' }}>
              {results.map((r, i) => {
                const scoreColor = r.score >= 8 ? 'var(--green)' : r.score >= 5 ? 'var(--yellow)' : 'var(--red)';
                return (
                  <div key={i} className="exam-q-report">
                    <div className="exam-q-report-head">
                      <span>Q{i + 1}. {r.q}</span>
                      <span style={{ color: scoreColor, fontWeight: 800 }}>{r.score} / 10 pts</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text)', marginBottom: '4px' }}>
                      <b>🗣️ Spoken:</b> {r.user}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--green)' }}>
                      <b>✓ Covered:</b> {r.yes.join(', ') || 'None'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="r-btns" style={{ marginTop: '20px' }}>
              <button type="button" className="btn-retry" onClick={() => setStep('setup')}>
                🔄 Take Another Exam
              </button>
              <button type="button" className="btn-next" onClick={handleClose}>
                Done 👍
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
