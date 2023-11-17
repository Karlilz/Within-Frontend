// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);

//   const fetchUserData = async () => {
//     try {
//       // Replace 'apiEndpoint' with your actual API endpoint
//       const response = await fetch('apiEndpoint');
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []); // Empty dependency array means it only runs once, similar to componentDidMount

//   return (
//     <div>
//       <h2>User Profile</h2>

//       {userData ? (
//         <div>
//         <h3>Journal Entries</h3>
//           {/* <h3>{user.username}'s Journal Entries</h3> */}
//           <ul>
//             {userData.journalEntries.map((entry, index) => (
//               <li key={index}>{entry}</li>
//             ))}
//           </ul>

//           <h3>Goals</h3>
//           {/* <h3>{user.username}'s Goals</h3> */}
//           <ul>
//             {userData.goals.map((goal, index) => (
//               <li key={index}>{goal}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         null
//       )}

//       <button>
//         <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
//           Home
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default Profile;
