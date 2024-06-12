// Login.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Simulating login with username and password
      // You may replace this with actual login logic
      if (username && password) {
        // Redirect to the user's page (/username)
        navigate(`/${username}`);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="login__container">
      <img
        src={backArrow}
        alt="Go back"
        onClick={handleBack}
        className="back-arrow"
      />
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleLogin} className="login__form">
        <div className="login__form-group">
          <label htmlFor="username" className="login__label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login__input"
            required
          />
        </div>
        <div className="login__form-group">
          <label htmlFor="password" className="login__label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
            required
          />
        </div>
        {error && <p className="login__error-message">{error}</p>}
        <button type="submit" className="login__login-button">Login</button>
      </form>
      <p className="login__signup-prompt">
        Don't have an account? <Link to="/signup" className="login__signup-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
