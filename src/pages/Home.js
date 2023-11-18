import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import affirmations from '../components/affirmations.js';

const Home = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState('');

  useEffect(() => {
    const updateAffirmation = () => {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      setCurrentAffirmation(affirmations[randomIndex]);
    };

    updateAffirmation();

    const intervalId = setInterval(updateAffirmation, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const affirmationStyle = {
    fontFamily: 'Staatliches',
    fontSize: '120px',
    color: 'white',
    textAlign: 'center',
    opacity: 0, 
    animation: 'fadeIn 1s forwards', 
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'black',
    padding: '10px',
    marginBottom: '80px',
    position: 'relative',
  };

  const h1Style = {
    fontFamily: 'Staatliches',
    fontSize: '80px',
    color: 'white',
    position: 'absolute',
    left: '20px',
    top: '-15%', 
    transform: 'translateY(-50%)', 
    zIndex: 1, 
  };

  const centeredNavStyle = {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    justifyContent: 'flex-end', 
    alignItems: 'center',
  };

  const navItemStyle = {
    margin: '0 45px',
    marginLeft: '20px', 
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '30px',
    fontFamily: 'Staatliches',
  };

  const containerStyle = {
    background: 'black',
    minHeight: '100vh', 
  };

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <h1 style={h1Style}>Within</h1>
        </Link>
        <div style={centeredNavStyle}>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <li style={navItemStyle}>
              <Link to="/journal" style={navLinkStyle}>Mood Journal</Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/goal" style={navLinkStyle}>Goals</Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/logout" style={navLinkStyle}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      <p style={affirmationStyle}>{currentAffirmation}</p>
    </div>
  );
}

export default Home;
