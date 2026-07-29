import React, { useState, useEffect } from 'react';
import { calcScore } from '../data/questionsData';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

export function PracticeModal({ question, onClose, onSaveScore, onNext }) {
  const [answerText, setAnswerText] = useState('');
  const [result, setResult] = useState(null);
  const [step, setStep] = useState('practice'); // 'practice' or 'result'

  const {
    startListening,
    stopListening,
    isListening,
    transcript,
    statusMessage
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setAnswerText((prev) => (prev ? prev + ' ' + transcript : transcript));
    }
  }, [transcript]);

  if (!question) return null;

  const handleToggleVoice = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmit = () => {
    stopListening();
    const txt = answerText.trim();
    if (!txt) return;

    const res = calcScore(txt, question);
    setResult(res);
    onSaveScore(question.id, res.s);
    setStep('result');
  };

  const handleRetry = () => {
    setStep('practice');
    setAnswerText('');
    setResult(null);
  };

  return (
    <div className="modal-bg show">
      <div className="modal">
        {step === 'practice' ? (
          <div>
            <div className="modal-head">
              <span className="modal-badge">Q{question.id}</span>
              <button className="modal-x" onClick={onClose}>&#x2715;</button>
            </div>
            <div className="modal-q">{question.q}</div>
            <div className="modal-hint">🔒 Answer hidden — speak or write what you remember!</div>
            <textarea
              className="modal-ta"
              placeholder="Type your answer here or click Voice to speak..."
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
            />
            <div className="modal-btns">
              <button
                type="button"
                className={`btn-voice ${isListening ? 'rec' : ''}`}
                onClick={handleToggleVoice}
              >
                <span>🎙️</span> <span>{isListening ? 'Stop Mic' : 'Voice Mic'}</span>
              </button>
              <button type="button" className="btn-go" onClick={handleSubmit}>
                ✅ Check Answer
              </button>
            </div>
            <div className="v-status">{statusMessage}</div>
          </div>
        ) : (
          <div>
            <div className="modal-head">
              <span className="modal-badge">Q{question.id}</span>
              <button className="modal-x" onClick={onClose}>&#x2715;</button>
            </div>
            <div className="score-sec">
              <div className={`score-c ${result?.rat?.c || 'poor'}`}>
                <span className="score-n">{result?.s}</span>
                <span className="score-o">/10</span>
              </div>
              <div className="score-r">{result?.rat?.t}</div>
            </div>

            <div className="r-block">
              <div className="r-label">📝 Your Answer:</div>
              <div className="r-text">{answerText}</div>
            </div>

            <div className="r-block">
              <div className="r-label">✅ Matched Keywords:</div>
              <div className="kw-list">
                {result?.yes?.length > 0 ? (
                  result.yes.map((kw, i) => (
                    <span key={i} className="kw yes">✓ {kw}</span>
                  ))
                ) : (
                  <span style={{ color: 'var(--text2)', fontSize: '0.75rem' }}>No matched keywords</span>
                )}
              </div>
            </div>

            <div className="r-block">
              <div className="r-label">❌ Missed Keywords:</div>
              <div className="kw-list">
                {result?.no?.length > 0 ? (
                  result.no.map((kw, i) => (
                    <span key={i} className="kw no">✗ {kw}</span>
                  ))
                ) : (
                  <span style={{ color: 'var(--green)', fontSize: '0.75rem' }}>100% keywords covered!</span>
                )}
              </div>
            </div>

            <div className="r-block r-correct">
              <div className="r-label">💡 Perfect Reference Answer:</div>
              <div className="r-text">{question.a}</div>
            </div>

            {question.tip && (
              <div className="r-tip">
                <b>💡 Tip:</b> {question.tip}
              </div>
            )}

            <div className="r-btns">
              <button type="button" className="btn-retry" onClick={handleRetry}>
                🔄 Try Again
              </button>
              <button type="button" className="btn-next" onClick={onNext}>
                ➡️ Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
