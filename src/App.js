import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content-area">
        <TopNavigation />
        <MainContent />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
