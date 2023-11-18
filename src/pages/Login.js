import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      console.log('Received token:', token);
      console.log(data);
      localStorage.setItem('token', data.auth_token);
      localStorage.setItem('userId', data.userId);
      navigate('/home');
    } else {
      console.error('Login failed');
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url(/Images/LoginPage6.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="login-container" style={backgroundStyle}>
      <div className="login-header">
        <h1 style={{ fontSize: '140px', color: 'black', margin: '0', fontFamily: 'Staatliches' }}>Within</h1>
        <h2 style={{ fontSize: '60px', color: 'black', margin: '0', fontFamily: 'Staatliches' }}>Welcome Back to Your Inner Strength</h2>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <button className="login-button">
        <Link to="/within" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
      </button>
    </div>
  );
}

export default Login;



