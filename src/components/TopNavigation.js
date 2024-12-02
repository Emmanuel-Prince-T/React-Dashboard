import React from 'react';
import './TopNavigation.css';

function TopNavigation() {
  return (
    <header className="top-navigation">
      <input type="text" placeholder="Tap here to search" />
      <div className="icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default TopNavigation;
