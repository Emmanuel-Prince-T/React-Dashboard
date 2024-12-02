import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './Dashboard.css';

const lineData = [
  { name: 'Mon', value: 250 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 350 },
  { name: 'Thu', value: 200 },
  { name: 'Fri', value: 290 },
  { name: 'Sat', value: 310 },
  { name: 'Sun', value: 270 },
];

const pieData = [
  { name: 'Achieved', value: 78 },
  { name: 'In Process', value: 22 },
];

const COLORS = ['#9b59b6', '#4caf50'];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Dashboard</h3>
        <nav>
          <a href="#">Documents</a>
          <a href="#">Payments</a>
          <a href="#">Calendar</a>
          <a href="#">Profile</a>
        </nav>
        <div className="sidebar-actions">
          <button>Darkmode</button>
          <button>Settings</button>
        </div>
        <button className="logout">Logout</button>
        <div className="upgrade">
          <p>Upgrade to Pro</p>
          <p>Check your magic on this Pro Dashboard</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="stats">
          <div className="card total-finance">
            <h3>Total Finance</h3>
            <p>9,900k</p>
          </div>
          <div className="card total-expense">
            <h3>Total Expense</h3>
            <p>8,240k</p>
          </div>
        </div>
        <div className="charts">
          <div className="card line-chart">
            <h3>Finance Progress</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#9b59b6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card pie-chart">
            <h3>Your Finance Target</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              <p>
                <span className="dot achieved"></span> Result Achieved
              </p>
              <p>
                <span className="dot in-process"></span> In Process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/100"
            alt="Emmy Damson"
            className="profile-picture"
          />
          <h3>Emmy Damson</h3>
          <p>CEO</p>
          <div className="about">
            <p>Organized activities to make money and sell goods and services.</p>
            <div className="team">
              <p>Jonie Juger - Project Manager</p>
              <p>Sarah Hosten - Graphic Designer</p>
              <p>Deckard Anne - Financial Treasurer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
