import React, { useState } from 'react';
import { QuestionCard } from './QuestionCard';

export function QuestionList({ sections, activeSection, searchFilter, scores, onPractice }) {
  const [closedSections, setClosedSections] = useState({});

  const toggleSection = (id) => {
    setClosedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterQuestions = (questions) => {
    if (!searchFilter.trim()) return questions;
    const term = searchFilter.toLowerCase();
    return questions.filter((q) =>
      q.q.toLowerCase().includes(term) || q.a.toLowerCase().includes(term)
    );
  };

  return (
    <div className="container">
      {sections.map((sec) => {
        if (activeSection !== 'all' && activeSection !== sec.id) return null;
        const matchingQuestions = filterQuestions(sec.questions);
        if (matchingQuestions.length === 0 && searchFilter.trim()) return null;

        const isClosed = closedSections[sec.id];

        return (
          <div key={sec.id} className={`section ${isClosed ? 'closed' : ''}`}>
            <div className="sec-header" onClick={() => toggleSection(sec.id)}>
              <span>{sec.icon}</span>
              <h2 className="sec-title">{sec.title}</h2>
              <span className="sec-badge">{sec.questions.length} Q</span>
              <span className="sec-arrow">▼</span>
            </div>
            {!isClosed && (
              <div className="sec-body">
                {matchingQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    score={scores[q.id]}
                    onPractice={onPractice}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
