import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import affirmations from './components/affirmations'; // Update the path accordingly

const Home = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState('');

  useEffect(() => {
    // Function to update the current affirmation every 5 seconds
    const updateAffirmation = () => {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      setCurrentAffirmation(affirmations[randomIndex]);
    };

    // Set an interval to update the affirmation every 5 seconds
    const intervalId = setInterval(updateAffirmation, 5000);

    // Initial update when the component mounts
    updateAffirmation();

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Welcome to Your Confidence App!</h1>
      <p>
        This is a place where you can boost your confidence, set goals, track your progress, and more.
      </p>
      
      {/* Display the current affirmation */}
      {currentAffirmation && (
        <div>
          <h2>Affirmation of the Moment</h2>
          <p>{currentAffirmation}</p>
        </div>
      )}

      {/* Quick links to other sections of the app */}
      <div>
        <Link to="/journal">Go to Journal</Link>
        <Link to="/goals">Go to Goals</Link>
        <Link to="/progress">Go to Progress</Link>
      </div>

      {/* Featured content or motivational quotes */}
      <div>
        <h2>Featured Content</h2>
        <p>Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.</p>
      </div>
    </div>
  );
};

export default Home;





// import React, { useState } from 'react';
// import affirmations from './path-to-your-affirmations-file'; // Update the path

// const Home = () => {
//   const [randomAffirmation, setRandomAffirmation] = useState('');

//   const getRandomAffirmation = () => {
//     const randomIndex = Math.floor(Math.random() * affirmations.length);
//     setRandomAffirmation(affirmations[randomIndex]);
//   };

//   // Call this function to set a random affirmation when the component mounts
//   // You can also trigger it based on user interactions or at specific intervals
//   getRandomAffirmation();

//   return (
//     <div>
//       <h1>Your Home Page</h1>
//       <p>{randomAffirmation}</p>
//     </div>
//   );
// };

// export default Home;
