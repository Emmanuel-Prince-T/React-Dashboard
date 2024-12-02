import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li className="nav-item active">Dashboard</li>
          <li className="nav-item">Documents</li>
          <li className="nav-item">Payments</li>
          <li className="nav-item">Calendar</li>
          <li className="nav-item">Profile</li>
        </ul>
      </nav>

      <div className="sidebar-options">
        <button className="option-button">Dark Mode</button>
        <button className="option-button">Settings</button>
        <button className="logout-button">Logout</button>
      </div>

      <div className="upgrade-card">
        <div className="upgrade-content">
          <div className="compass-icon">🧭</div>
          <div>
            <h4>Upgrade to Pro</h4>
            <p>Check your magic on this Pro Dashboard</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
