import React from 'react';
import '../styles/login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="#">Signup</a>
        </div>
        <button className="google-login-button">Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
