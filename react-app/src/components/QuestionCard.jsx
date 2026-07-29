import React, { useState } from 'react';

export function QuestionCard({ question, score, onPractice }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(`Q: ${question.q}\nA: ${question.a}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {}
  };

  return (
    <div className={`card ${isOpen ? 'open' : ''} ${score !== undefined ? 'done' : ''}`} id={`q-${question.id}`}>
      <div className="card-head" onClick={() => setIsOpen(!isOpen)}>
        <span className="card-num">Q{question.id}</span>
        <span className="card-q">{question.q}</span>
        <span className={`card-diff ${question.diff}`}>{question.diff}</span>
        <span className="card-arrow">▶</span>
      </div>
      <div className="card-body">
        <div className="ans-label">✅ PERFECT REFERENCE ANSWER</div>
        <div className="ans-text">{question.a}</div>
        {question.tip && (
          <div className="tip">
            <b>💡 Tip:</b> {question.tip}
          </div>
        )}
        <div className="card-btns">
          <button className="btn-s btn-p" onClick={(e) => { e.stopPropagation(); onPractice(question); }}>
            🎯 Practice
          </button>
          {score !== undefined && (
            <button className="btn-s btn-sc" onClick={(e) => { e.stopPropagation(); onPractice(question); }}>
              ⭐ {score}/10
            </button>
          )}
          <button className="btn-s" onClick={handleCopy}>
            {copied ? '✅ Copied!' : '📋 Copy Q&A'}
          </button>
        </div>
      </div>
    </div>
  );
}
