// NO CSS
// import React, { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';

// function Login() {
//   const URL = process.env.REACT_APP_URL;
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('username', username); 
//     formData.append('password', password);

//     try {
//       const response = await fetch("http://localhost:8000/login/", {
//     //   const response = await fetch(URL + 'token/login/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const token = data.token;
//         // Store the token in a secure way, such as in a state or a cookie.
//         console.log('Received token:', token);
//         console.log(data);
//         localStorage.setItem('token', data.auth_token);
//         navigate('/sessions');
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleSignUpClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <div>
//       <h2>Welcome Back!</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Log In</button>
//       </form>
//       <div>
//         Don't have an account? <button onClick={handleSignUpClick}>Sign Up</button>
//       </div>
//     </div>
//   );
// }

// export default Login;


// CSS
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log('Received token:', token);
        console.log(data);
        localStorage.setItem('token', data.auth_token);
        navigate('/sessions');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Within</h1>
        <h2>Welcome Back!</h2>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
      <div>
        Don't have an account? <button onClick={handleSignUpClick} className="login-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;

