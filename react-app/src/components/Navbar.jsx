import React from 'react';

export function Navbar({ sections, activeSection, setActiveSection }) {
  return (
    <nav className="nav-bar">
      <button
        className={`nav-btn ${activeSection === 'all' ? 'active' : ''}`}
        onClick={() => setActiveSection('all')}
      >
        📋 All
      </button>
      {sections.map((sec) => (
        <button
          key={sec.id}
          className={`nav-btn ${activeSection === sec.id ? 'active' : ''}`}
          onClick={() => setActiveSection(sec.id)}
        >
          {sec.icon} {sec.title.split(' ')[0]}
        </button>
      ))}
    </nav>
  );
}
