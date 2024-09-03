// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../Api'; 
import './Register.css'; 

const Register = () => {
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');


  const validatePassword = (password) => {
  const passwordRegex = /^(?=.[0-9])(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,12}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be 8-12 characters long, include at least one symbol and one number.');
      return;
    }

    try {
      const response = await registerUser({ username, email, password});
      console.log(response)
      if (response.access_token !== 'undefined') {
        setSuccess('User registered successfully!');
        setError('');
      } else {
        setError(response.data.error || 'Registration failed.');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <label htmlFor="email">username <span>*</span></label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <label htmlFor="email">Email address <span>*</span></label>
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

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p className="privacy-policy">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>

        <button type="submit" className="register-button" >REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
