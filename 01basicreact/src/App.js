import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App2 from './App2';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<App2 />} />
    </Routes>
  );
}

function Signup() {
  return (
    <div className="container">
      <h2>Signup/Registration</h2>
      <label>
        <input type="text" placeholder="Enter your username" required />
      </label>
      <br /><br />
      <label>
        <input type="password" placeholder="Enter Password" required />
      </label>
      <p>If you have already an account, then</p>
      <a href="/login">Login</a>
    </div>
  );
}

export default App;