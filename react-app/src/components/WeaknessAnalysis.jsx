import React, { useState } from 'react';

export function WeaknessAnalysis({ sections, scores }) {
  const [isOpen, setIsOpen] = useState(true);

  const totalScored = Object.keys(scores).length;

  if (totalScored === 0) {
    return (
      <div className="weakness-section">
        <div className="weakness-header" onClick={() => setIsOpen(!isOpen)}>
          <span>📊 Topic Performance Analysis</span>
          <span className="weakness-arrow" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>▼</span>
        </div>
        {isOpen && (
          <div className="weakness-body">
            <div className="weakness-tip">💡 Start practicing QA questions to visualize your performance map!</div>
          </div>
        )}
      </div>
    );
  }

  const sectionScores = sections.map((sec) => {
    let secTotal = 0;
    let secCount = 0;
    sec.questions.forEach((q) => {
      if (scores[q.id] !== undefined) {
        secTotal += scores[q.id];
        secCount++;
      }
    });

    const pct = secCount > 0 ? Math.round((secTotal / (secCount * 10)) * 100) : 0;
    return {
      id: sec.id,
      icon: sec.icon,
      title: sec.title.split(' ').slice(0, 2).join(' '),
      pct: pct,
      count: secCount,
      total: sec.questions.length
    };
  });

  const unpracticed = sectionScores.filter((s) => s.count === 0);
  const weakest = [...sectionScores].sort((a, b) => a.pct - b.pct).find((s) => s.count > 0 && s.pct < 80);

  let tipText = '';
  if (unpracticed.length > 0) {
    tipText = `💡 Recommended Next Section: ${unpracticed.slice(0, 3).map((u) => u.icon + ' ' + u.title).join(', ')}`;
  } else if (weakest) {
    tipText = `🎯 Focus Improvement: Boost score on ${weakest.icon} ${weakest.title} (currently at ${weakest.pct}%)`;
  } else {
    tipText = '🌟 Excellent Work! You have attained 80%+ mastery across all topics!';
  }

  return (
    <div className={`weakness-section ${isOpen ? '' : 'closed'}`}>
      <div className="weakness-header" onClick={() => setIsOpen(!isOpen)}>
        <span>📊 Topic Performance Analysis</span>
        <span className="weakness-arrow">▼</span>
      </div>
      <div className="weakness-body">
        <div className="weakness-bars">
          {sectionScores.map((s) => {
            let level = 'poor';
            let status = '🎯';
            if (s.count === 0) { level = 'poor'; status = '➖'; }
            else if (s.pct >= 80) { level = 'excellent'; status = '✓'; }
            else if (s.pct >= 60) { level = 'good'; status = '👍'; }
            else if (s.pct >= 40) { level = 'average'; status = '⚠️'; }

            return (
              <div key={s.id} className="w-row">
                <span className="w-label">{s.icon} {s.title}</span>
                <div className="w-bar-bg">
                  <div className={`w-bar-fill ${level}`} style={{ width: `${s.count > 0 ? s.pct : 0}%` }}></div>
                </div>
                <span className={`w-pct ${level}`}>{s.count > 0 ? `${s.pct}%` : '--'}</span>
                <span className="w-status">{status}</span>
              </div>
            );
          })}
        </div>
        <div className="weakness-tip">{tipText}</div>
      </div>
    </div>
  );
}
