import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="user-card">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="user-avatar"
          />
          <div>
            <h4 className="user-name">Emmy Damson</h4>
            <p className="user-role">CEO</p>
          </div>
        </div>
        <div className="user-actions">
          <button className="action-btn">💬</button>
          <button className="action-btn">📞</button>
          <button className="action-btn">📧</button>
        </div>
      </div>

      <div className="about-card">
        <h4>About</h4>
        <p>
          Organized activities to make money and sell goods and services for a
          profit.
        </p>
        <div className="contact-list">
          <div className="contact-item">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="contact-avatar"
            />
            <div>
              <p>Jonie Juger</p>
              <span>Project Manager</span>
            </div>
          </div>
          <div className="contact-item">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="contact-avatar"
            />
            <div>
              <p>Sarah Hosten</p>
              <span>Graphic Designer</span>
            </div>
          </div>
          <div className="contact-item">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="contact-avatar"
            />
            <div>
              <p>Deckard Anne</p>
              <span>Financial Treasurer</span>
            </div>
          </div>
        </div>
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

export default RightSidebar;
