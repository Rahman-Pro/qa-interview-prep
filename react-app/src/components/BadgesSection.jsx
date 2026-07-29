import React, { useState, useEffect } from 'react';
import { BADGES } from '../data/questionsData';

export function BadgesSection({ scores, allQuestions }) {
  const [earnedBadges, setEarnedBadges] = useState({});
  const [popupBadge, setPopupBadge] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('qa_badges') || '{}');
      setEarnedBadges(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    const nextEarned = { ...earnedBadges };
    let newlyUnlocked = null;

    BADGES.forEach((b) => {
      let isUnlocked = false;
      try { isUnlocked = b.check(scores, allQuestions); } catch (e) {}
      if (isUnlocked && !nextEarned[b.id]) {
        nextEarned[b.id] = true;
        newlyUnlocked = b;
      }
    });

    if (newlyUnlocked) {
      setEarnedBadges(nextEarned);
      try { localStorage.setItem('qa_badges', JSON.stringify(nextEarned)); } catch (e) {}
      setPopupBadge(newlyUnlocked);
      setTimeout(() => setPopupBadge(null), 5000);
    }
  }, [scores, allQuestions]);

  const totalEarnedCount = BADGES.filter((b) => {
    try { return b.check(scores, allQuestions); } catch (e) { return false; }
  }).length;

  return (
    <>
      <div className="badges-section">
        <div className="badges-header">
          <span>🏆 Badges & Achievements</span>
          <span className="badges-count">{totalEarnedCount}/{BADGES.length} earned</span>
        </div>
        <div className="badges-list">
          {BADGES.map((b) => {
            let isUnlocked = false;
            try { isUnlocked = b.check(scores, allQuestions); } catch (e) {}
            return (
              <span
                key={b.id}
                className={`badge-item ${isUnlocked ? 'earned' : 'locked'}`}
                title={b.desc}
              >
                <span className="badge-icon">{isUnlocked ? b.icon : '🔒'}</span>
                {b.name}
              </span>
            );
          })}
        </div>
      </div>

      {popupBadge && (
        <div className="badge-popup show">
          <div className="badge-popup-content">
            <div className="badge-popup-icon">{popupBadge.icon}</div>
            <div className="badge-popup-title">🎉 Badge Earned!</div>
            <div className="badge-popup-name">{popupBadge.name}</div>
            <div className="badge-popup-desc">{popupBadge.desc}</div>
            <button className="badge-popup-btn" onClick={() => setPopupBadge(null)}>
              Nice! 👍
            </button>
          </div>
        </div>
      )}
    </>
  );
}
