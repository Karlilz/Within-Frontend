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
    opacity: 0, // Set initial opacity to 0 for the fade-in effect
    animation: 'fadeIn 1s forwards', // Use the 'fadeIn' animation for 2 seconds
  };

  // Additional styles for horizontal navigation
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
    top: '-15%', // Adjusted top position
    transform: 'translateY(-50%)', // Center vertically using translateY
    zIndex: 1, // Ensure the h1 is above other elements
  };

  const centeredNavStyle = {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    justifyContent: 'flex-end', // Change to 'flex-end' to align items to the right
    alignItems: 'center',
  };

  const navItemStyle = {
    margin: '0 45px',
    marginLeft: '20px', // Add margin to create space between items
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '30px',
    fontFamily: 'Staatliches',
  };

  const containerStyle = {
    background: 'black',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
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
            {/* <li style={navItemStyle}>
              <Link to="/profile" style={navLinkStyle}>Profile</Link>
            </li> */}
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
