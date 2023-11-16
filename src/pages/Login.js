import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log('Received token:', token);
        console.log(data);
        localStorage.setItem('token', data.auth_token);
        navigate('/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const backgroundStyle = {
    backgroundImage: 'url(/Images/LoginPage4.png)',
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
        {/* <h1>Within</h1> */}
        <h1>Welcome Back!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <button>
        <Link to="/within" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
      </button>
    </div>
  );
}

export default Login;
