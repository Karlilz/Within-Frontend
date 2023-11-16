import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // const response = await fetch(URL + 'token/signup/', {
    const response = await fetch("http://localhost:8000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log("Signup successful");
      navigate("/login");
    } else {
      const errorData = await response.json();
      console.error(errorData);
    }
  };

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
      <form onSubmit={handleSignup} className="signup-form">
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

      <button>
          <Link to="/within" style={{ textDecoration: 'none', color:'white' }}>Back</Link>
        </button>
    </div>
  );
}

export default SignupPage;
