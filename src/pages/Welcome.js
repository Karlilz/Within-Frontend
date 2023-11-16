// CSS
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    const backgroundStyle = {
      backgroundImage: 'url(/Images/WithinWelcome3.png)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    return (
      <div style={backgroundStyle}>
        <header style={{ textAlign: 'center', fontFamily: 'Staatliches' }}>
            <h1 style={{ fontSize: '140px', color: 'white', margin: '0' }}>Within</h1>
            <h2 style={{ fontSize: '60px', color: 'white', margin: '0' }}>Ignite the Possible</h2>
        </header>
        <div className="button-container">
          <Link to="/login" className="welcome-button">
            Login
          </Link>
          <Link to="/signup" className="welcome-button">
            Signup
          </Link>
        </div>
      </div>
    );
  };

export default WelcomePage;

  

