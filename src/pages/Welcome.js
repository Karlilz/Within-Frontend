// NO CSS
// import React from 'react';
// import { Link } from 'react-router-dom';

// const WelcomePage = () => {
//   return (
//     <div className="welcome-container">
//       <header>
//         <h1>Within</h1>
//         <h2>Ignite the Possible</h2>
//       </header>
//       <div className="button-container">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>
//         <Link to="/signup">
//           <button>Signup</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


// CSS
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    const backgroundStyle = {
      backgroundImage: 'url(/Images/WithinWelcome2.png)', 
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
        <header>
          <h1>Within</h1>
          <h2>Ignite the Possible</h2>
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

  

