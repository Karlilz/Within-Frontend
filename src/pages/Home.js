// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import affirmations from '../components/affirmations.js';

// const Home = () => {
//   const [currentAffirmation, setCurrentAffirmation] = useState('');

//   useEffect(() => {
//     const updateAffirmation = () => {
//       const randomIndex = Math.floor(Math.random() * affirmations.length);
//       setCurrentAffirmation(affirmations[randomIndex]);
//     };

//     updateAffirmation();

//     const intervalId = setInterval(updateAffirmation, 6000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const affirmationStyle = {
//     fontFamily: 'Staatliches',
//     fontSize: '90px',
//     color: 'pink',
//     textAlign: 'center'
//   };

//   // Additional styles for horizontal navigation
//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: '#333', // Background color for the navigation bar
//     padding: '10px', // Add padding for better aesthetics
//     marginBottom: '90px', // Increase marginBottom to move the nav bar further up
//   };

//   const navItemStyle = {
//     margin: '0 40px', // Adjust spacing between navigation items
//   };

//   const navLinkStyle = {
//     color: 'white', // Text color for navigation links
//     textDecoration: 'none',
//     fontSize: '20px', // Adjust the font size of the links
//   };

//   // Adjustments for h1 and nav positions
//   const h1Style = {
//     fontFamily: 'Staatliches',
//     fontSize: '80px',
//     color: 'black',
//     marginTop: '0', // Set margin-top to 0 to move the h1 higher up
//   };

//   return (
//     <div>
//       <h1 style={h1Style}>Within</h1>

//       <nav style={navStyle}>
//         <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <li style={navItemStyle}>
//             <Link to="/journal" style={navLinkStyle}>Journal Entries</Link>
//           </li>
//           <li style={navItemStyle}>
//             <Link to="/goals" style={navLinkStyle}>Goals</Link>
//           </li>
//           {/* <li style={navItemStyle}>
//             <Link to="/progress" style={navLinkStyle}>Progress</Link>
//           </li> */}
//           <li style={navItemStyle}>
//             <Link to="/profile" style={navLinkStyle}>Profile</Link>
//           </li>
//           <li style={navItemStyle}>
//             <Link to="/logout" style={navLinkStyle}>Logout</Link>
//           </li>
//         </ul>
//       </nav>

//       <p style={affirmationStyle}>{currentAffirmation}</p>
//     </div>
//   );
// }

// export default Home;


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
    fontSize: '90px',
    color: 'pink',
    textAlign: 'center'
  };

  // Additional styles for horizontal navigation
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333', // Background color for the navigation bar
    padding: '10px', // Add padding for better aesthetics
    marginBottom: '80px', // Increase marginBottom to move the nav bar further up
  };

  const navItemStyle = {
    margin: '0 15px', // Adjust spacing between navigation items
  };

  const navLinkStyle = {
    color: 'white', // Text color for navigation links
    textDecoration: 'none',
    fontSize: '18px', // Adjust the font size of the links
  };

  // Adjustments for h1 and nav positions
  const h1Style = {
    fontFamily: 'Staatliches',
    fontSize: '80px',
    color: 'black',
    marginTop: '20px', // Increase marginTop to move the h1 down
  };
  const backgroundStyle = {
    backgroundImage: 'url(/Images/HomePage1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom', // Set to 'right bottom'
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <h1 style={h1Style}>Within</h1>

      <nav style={navStyle}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <li style={navItemStyle}>
            <Link to="/journal" style={navLinkStyle}>Journal Entries</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/goal" style={navLinkStyle}>Goals</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/profile" style={navLinkStyle}>Profile</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/logout" style={navLinkStyle}>Logout</Link>
          </li>
        </ul>
      </nav>

      <p style={affirmationStyle}>{currentAffirmation}</p>
    </div>
  );
}

export default Home;
