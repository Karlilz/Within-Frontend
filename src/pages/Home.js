import React, { useState, useEffect } from 'react';
import affirmations from './components/affirmations'; // Update the path accordingly

const Home = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState('');

  useEffect(() => {
    const updateAffirmation = () => {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      setCurrentAffirmation(affirmations[randomIndex]);
    };

    const intervalId = setInterval(updateAffirmation, 10000);

    updateAffirmation();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Within</h1>

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
