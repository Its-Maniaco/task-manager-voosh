import React from 'react';
import './App.css';
import Login from './components/login';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="logo">🗓️</div>
        <div className="nav-links">
          <button className="nav-button">Login</button>
          <button className="nav-button">Signup</button>
        </div>
      </div>
      <Login />
    </div>
  );
};

export default App;
