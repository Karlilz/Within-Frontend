import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/signup', {
    // const response = await fetch('https://within.onrender.com', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
      navigate('/login');
    } else {
      alert('Sign up Failed!');
    }
  }

    const backgroundStyle = {
    backgroundImage: 'url(/Images/SignupPage4.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="signup-container" style={backgroundStyle}>
      <form onSubmit={signUp} className="signup-form">
        <h1 style={{ fontSize: '140px', color: 'black', margin: '0', fontFamily: 'Staatliches' }}>Within</h1>
        <h2 style={{ fontSize: '60px', color: 'black', margin: '0', fontFamily: 'Staatliches' }}>Unleash Your Inner Confidence</h2>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <button className="signup-button">
          <Link to="/within" style={{ textDecoration: 'none', color:'white', backgroundColor:'black' }}>Back</Link>
        </button>
    </div>
  );
}

export default Signup;
