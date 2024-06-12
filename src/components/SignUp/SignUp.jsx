// SignUp.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.scss';
import PageHeader from '../PageHeader/PageHeader';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/login'); // Redirect to login page after successful sign-up
      } else {
        setError('An error occurred during sign-up');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <PageHeader />
      <div className="signup__container">
        <img
          src={backArrow}
          alt="Go back"
          onClick={handleBack}
          className="back-arrow"
        />
        <h2 className="signup__title">Sign Up</h2>
        <form onSubmit={handleSignUp} className="signup__form">
          <div className="signup__form-group">
            <label htmlFor="username" className="signup__label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup__input"
              required
            />
          </div>
          <div className="signup__form-group">
            <label htmlFor="password" className="signup__label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup__input"
              required
            />
          </div>
          {error && <p className="signup__error-message">{error}</p>}
          <button type="submit" className="signup__signup-button">Sign Up</button>
        </form>
        <p className="signup__login-prompt">
          Already have an account? <Link to="/login" className="signup__login-link">Login</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
