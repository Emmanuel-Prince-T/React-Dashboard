import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import './MainContent.css';

const lineData = [
  { day: 'Mon', value: 250 },
  { day: 'Tue', value: 260 },
  { day: 'Wed', value: 270 },
  { day: 'Thu', value: 290 },
  { day: 'Fri', value: 310 },
  { day: 'Sat', value: 320 },
  { day: 'Sun', value: 350 }
];

const pieData = [
  { name: 'Result Achieved', value: 78, color: '#6b6fc6' },
  { name: 'In the Process', value: 22, color: '#383c54' }
];

function MainContent() {
  return (
    <main className="main-content">
      <section className="summary-cards">
        <div className="card total-finance">
          <h3>Total Finance</h3>
          <p>9,900k</p>
          <div className="growth">+70%</div>
        </div>
        <div className="card total-expense">
          <h3>Total Expense</h3>
          <p>8,240k</p>
          <div className="growth">+80%</div>
        </div>
      </section>

      <section className="chart-section">
        <div className="line-chart">
          <h4>Monday, 28 December 2021</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="day" stroke="#b0b0c3" />
              <YAxis stroke="#b0b0c3" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="value" stroke="#6b6fc6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="progress-circle">
          <h4>Your Finance Target</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={450}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend layout="horizontal" align="center" verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="project-finance">
        <h4>Projects Finance</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Progress</th>
              <th>Achieved</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Darby Day</td>
              <td>Meet the target</td>
              <td>$145,000</td>
              <td>Financial Officer</td>
            </tr>
            <tr>
              <td>Holt Diven</td>
              <td>Ongoing</td>
              <td>$299,000</td>
              <td>Project Manager</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default MainContent;
