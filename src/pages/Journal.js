// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Form, useLoaderData, Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

// const Journal = () => {
//   const data = useLoaderData();
//   const navigate = useHistory();
//   const [journalEntry, setJournalEntry] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     // Fetch initial data or perform any other setup
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleAddEntry = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_URL}createjournalentry/`,
//         {
//           title: e.target.title.value,
//           content: e.target.content.value,
//           date: selectedDate,
//         },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       console.log('Journal Entry Added:', response.data);
//       history.push('/journal'); 
//     } catch (error) {
//       console.error('Error adding journal entry:', error);
//     }
//   };

//   const handleEditEntry = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_URL}updatejournalentry/${data.id}/`,
//         {
//           title: e.target.title.value,
//           content: e.target.content.value,
//         },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       console.log('Journal Entry Updated:', response.data);
//       history.push(`/journal/${data.id}`); // Redirect to journal entry show page after updating
//     } catch (error) {
//       console.error('Error updating journal entry:', error);
//     }
//   };

//   const handleDelete = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`${process.env.REACT_APP_URL}deletejournalentry/${data.id}/`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       console.log('Journal Entry Deleted');
//       navigate('/journal'); 
//     } catch (error) {
//       console.error('Error deleting journal entry:', error);
//     }
//   };

//   const containerStyle = {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     backgroundColor: '#f8f8f8',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const formGroupStyle = {
//     marginBottom: '15px',
//   };

//   const labelStyle = {
//     display: 'block',
//     marginBottom: '5px',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     boxSizing: 'border-box',
//     marginTop: '5px',
//     transition: 'border-color 0.3s ease-in-out',
//   };

//   const inputFocusStyle = {
//     borderColor: '#3498db',
//   };

//   const buttonStyle = {
//     backgroundColor: '#black',
//     color: '#black',
//     padding: '10px 15px',
//     border: 'black',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease-in-out',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#000000',
//   };

//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: 'black',
//     padding: '10px',
//     marginBottom: '80px',
//     position: 'relative',
//   };

//   const h1Style = {
//     fontFamily: 'Staatliches',
//     fontSize: '80px',
//     color: 'white',
//     position: 'absolute',
//     left: '20px',
//     top: '-15%',
//     transform: 'translateY(-50%)',
//     zIndex: 1,
//   };

//   const h2Style ={
//     fontFamily: 'Staatliches'
//   }

//   const centeredNavStyle = {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const navItemStyle = {
//     margin: '0 45px',
//   };

//   const navLinkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '30px',
//     fontFamily: 'Staatliches',
//   };
//   return (
//     <div style={containerStyle}>
// <nav style={navStyle}>
//         <Link to="/home" style={{ textDecoration: 'none' }}>
//           <h1 style={h1Style}>Within</h1>
//         </Link>
//         <div style={centeredNavStyle}>
//           <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <li style={navItemStyle}>
//               <Link to="/journal" style={navLinkStyle}>Journal Entries</Link>
//             </li>
//             <li style={navItemStyle}>
//               <Link to="/goal" style={navLinkStyle}>Goals</Link>
//             </li>
//             <li style={navItemStyle}>
//               <Link to="/profile" style={navLinkStyle}>Profile</Link>
//             </li>
//             <li style={navItemStyle}>
//               <Link to="/logout" style={navLinkStyle}>Logout</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Form onSubmit={data.id ? handleEditEntry : handleAddEntry}>
//         {/* ... (your form fields for title, content, and date) */}

//         <button type="submit" style={buttonStyle}>
//           {data.id ? 'Update Journal Entry' : 'Add Journal Entry'}
//         </button>
//       </Form>

//       {data.id && (
//         <Form onSubmit={handleDelete} style={{ display: 'inline-block' }}>
//           <button type="submit" style={buttonStyle}>
//             DELETE
//           </button>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default Journal;
