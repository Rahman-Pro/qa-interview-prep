import React from 'react';

export function StatsGrid({ total, done, left, avgScore }) {
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-n">{total}</div>
        <div className="stat-l">Total</div>
      </div>
      <div className="stat">
        <div className="stat-n">{done}</div>
        <div className="stat-l">Practiced</div>
      </div>
      <div className="stat">
        <div className="stat-n">{left}</div>
        <div className="stat-l">Remaining</div>
      </div>
      <div className="stat">
        <div className="stat-n">{avgScore}</div>
        <div className="stat-l">Avg Score</div>
      </div>
    </div>
  );
}
