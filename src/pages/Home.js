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

  return (
    <div>
    <h1>Within</h1>
      <nav>
        <ul>
          <li>
            <Link to="/journal">Journal Entires</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
          {/* <li>
            <Link to="/progress">Progress</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <p>{currentAffirmation}</p>
    </div>
  );
};

export default Home;
