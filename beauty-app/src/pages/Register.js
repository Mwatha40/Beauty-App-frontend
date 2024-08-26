import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be 8-12 characters long, include at least one symbol and one number.');
      return;
    }
    // Handling of the registration logic 
    console.log('Register:', { email, password });
    setError(''); // Clear error after successful registration
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
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

        <p className="privacy-policy">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>

        <button type="submit" className="register-button">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
