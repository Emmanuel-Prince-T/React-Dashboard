import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Tap here to search" />
      <div className="icons">
        <div className="notifications">🔔</div>
        <div className="messages">📩</div>
      </div>
    </div>
  );
}

export default Header;
