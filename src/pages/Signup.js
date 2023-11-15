// NO CSS
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function SignupPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
// //  const response = await fetch(URL + 'token/signup/', {
//     const response = await fetch("http://localhost:8000/signup/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       console.log("Signup successful");
//       navigate("/login"); 
//     } else {
//       const errorData = await response.json();
//       console.error(errorData);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSignup}>
//         <h1>Within</h1>
//         <h2>Unleash Your Inner Confidence: Your Journey Starts Here</h2>
//         <input
//           type="username"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;



// CSS 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h1>Within</h1>
        <h2>Unleash Your Inner Confidence: Your Journey Starts Here</h2>
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
    </div>
  );
}

export default SignupPage;
