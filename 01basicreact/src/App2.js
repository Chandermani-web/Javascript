import React from 'react';

function App2() {
  return (
    <div className="container">
      <h2>Login</h2>
      <label>
        <input type="text" placeholder="Enter your username" required />
      </label>
      <br /><br />
      <label>
        <input type="password" placeholder="Enter Password" required />
      </label>
      <p>If you have not any account, then</p>
      <a href="/">Signup</a>
    </div>
  );
}

export default App2;