// src/components/Login.js
import React, { useState } from 'react'; 
import { loginUser } from '../Api';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      console.log('Login successful:', response);
      window.location.href = '/dashboard'; // Redirect to dashboard after successful login
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Username or email address <span>*</span></label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="password">Password <span>*</span></label>
        <div className="password-container">
          <input 
            type={showPassword ? "text" : "password"} 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/forgot-password">Lost your password?</a>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

        <button type="submit" className="login-button">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
