import React from 'react';

export function Header({ totalQuestions, searchInput, setSearchInput, theme, toggleTheme, onOpenExam }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span>🧪</span>
          <h1>QA Interview Prep Console</h1>
          <span className="badge">{totalQuestions} Q&A</span>
        </div>
        <div className="header-actions">
          <button className="btn-exam" onClick={onOpenExam}>
            🎧 10-Q Audio Exam
          </button>
          <input
            type="text"
            id="searchInput"
            placeholder="Search questions... (Ctrl+K)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="btn-icon" onClick={toggleTheme} title="Toggle Dark/Light Mode">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
