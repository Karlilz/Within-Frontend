// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const AuthenticatedNavbar = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <nav>
//         <Link to="/goal">
//           <button>Goals</button>
//         </Link>

//         <Link to="/journal">
//           <button>Journal Entries</button>
//         </Link>

//         <Link to="/progress">
//           <button>Progress</button>
//         </Link>

//         <Link to="/profile">
//             <button>Profile</button>
//         </Link>

//         <button onClick={logout}>Log Out</button>
//       </nav>
//     </div>
//   );
// };

// const Navbar = () => {
//   return localStorage.getItem('token') ? <AuthenticatedNavbar /> : null;
// };

// export default Navbar;
