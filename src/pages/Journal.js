// // // import React, { useState, useEffect } from 'react';
// // // import DatePicker from 'react-datepicker';
// // // import 'react-datepicker/dist/react-datepicker.css';
// // // import { Form, useLoaderData, Link, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';

// // // const Journal = () => {
// // //   const data = useLoaderData();
// // //   const navigate = useNavigate();
// // //   const [journalEntry, setJournalEntry] = useState({});
// // //   const [selectedDate, setSelectedDate] = useState(null);

// // //   useEffect(() => {
// // //     // Fetch initial data or perform any other setup
// // //   }, []);

// // //   const handleDateChange = (date) => {
// // //     setSelectedDate(date);
// // //   };

// // //   const handleAddEntry = async (e) => {
// // //     e.preventDefault();
// // //     const token = localStorage.getItem('token');
// // //     try {
// // //       const response = await axios.post(
// // //         `${process.env.REACT_APP_URL}createjournalentry/`,
// // //         {
// // //           title: e.target.title.value,
// // //           content: e.target.content.value,
// // //           date: selectedDate,
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization: `Token ${token}`,
// // //           },
// // //         }
// // //       );
// // //       console.log('Journal Entry Added:', response.data);
// // //       navigate('/journal'); 
// // //     } catch (error) {
// // //       console.error('Error adding journal entry:', error);
// // //     }
// // //   };

// // //   const handleEditEntry = async (e) => {
// // //     e.preventDefault();
// // //     const token = localStorage.getItem('token');
// // //     try {
// // //       const response = await axios.post(
// // //         `${process.env.REACT_APP_URL}updatejournalentry/${data.id}/`,
// // //         {
// // //           title: e.target.title.value,
// // //           content: e.target.content.value,
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization: `Token ${token}`,
// // //           },
// // //         }
// // //       );
// // //       console.log('Journal Entry Updated:', response.data);
// // //       navigate(`/journal/${data.id}`); // Redirect to journal entry show page after updating
// // //     } catch (error) {
// // //       console.error('Error updating journal entry:', error);
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     const token = localStorage.getItem('token');
// // //     try {
// // //       await axios.delete(`${process.env.REACT_APP_URL}deletejournalentry/${data.id}/`, {
// // //         headers: {
// // //           Authorization: `Token ${token}`,
// // //         },
// // //       });
// // //       console.log('Journal Entry Deleted');
// // //       navigate('/journal'); 
// // //     } catch (error) {
// // //       console.error('Error deleting journal entry:', error);
// // //     }
// // //   };

// // //   const containerStyle = {
// // //     maxWidth: '600px',
// // //     margin: '0 auto',
// // //     padding: '20px',
// // //     backgroundColor: '#f8f8f8',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// // //   };

// // //   const formGroupStyle = {
// // //     marginBottom: '15px',
// // //   };

// // //   const labelStyle = {
// // //     display: 'block',
// // //     marginBottom: '5px',
// // //   };

// // //   const inputStyle = {
// // //     width: '100%',
// // //     padding: '10px',
// // //     border: '1px solid #ccc',
// // //     borderRadius: '5px',
// // //     boxSizing: 'border-box',
// // //     marginTop: '5px',
// // //     transition: 'border-color 0.3s ease-in-out',
// // //   };

// // //   const inputFocusStyle = {
// // //     borderColor: '#3498db',
// // //   };

// // //   const buttonStyle = {
// // //     backgroundColor: '#black',
// // //     color: '#black',
// // //     padding: '10px 15px',
// // //     border: 'black',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     transition: 'background-color 0.3s ease-in-out',
// // //   };

// // //   const buttonHoverStyle = {
// // //     backgroundColor: '#000000',
// // //   };

// // //   const navStyle = {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     background: 'black',
// // //     padding: '10px',
// // //     marginBottom: '80px',
// // //     position: 'relative',
// // //   };

// // //   const h1Style = {
// // //     fontFamily: 'Staatliches',
// // //     fontSize: '80px',
// // //     color: 'white',
// // //     position: 'absolute',
// // //     left: '20px',
// // //     top: '-15%',
// // //     transform: 'translateY(-50%)',
// // //     zIndex: 1,
// // //   };

// // //   const h2Style ={
// // //     fontFamily: 'Staatliches'
// // //   }

// // //   const centeredNavStyle = {
// // //     flex: 1,
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   };

// // //   const navItemStyle = {
// // //     margin: '0 45px',
// // //   };

// // //   const navLinkStyle = {
// // //     color: 'white',
// // //     textDecoration: 'none',
// // //     fontSize: '30px',
// // //     fontFamily: 'Staatliches',
// // //   };
// // //   return (
// // //     <div style={containerStyle}>
// // // <nav style={navStyle}>
// // //         <Link to="/home" style={{ textDecoration: 'none' }}>
// // //           <h1 style={h1Style}>Within</h1>
// // //         </Link>
// // //         <div style={centeredNavStyle}>
// // //           <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// // //             <li style={navItemStyle}>
// // //               <Link to="/journal" style={navLinkStyle}>Journal Entries</Link>
// // //             </li>
// // //             <li style={navItemStyle}>
// // //               <Link to="/goal" style={navLinkStyle}>Goals</Link>
// // //             </li>
// // //             <li style={navItemStyle}>
// // //               <Link to="/profile" style={navLinkStyle}>Profile</Link>
// // //             </li>
// // //             <li style={navItemStyle}>
// // //               <Link to="/logout" style={navLinkStyle}>Logout</Link>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </nav>

// // //       <Form onSubmit={data.id ? handleEditEntry : handleAddEntry}>
// // //   {/* Title Field */}
// // //   <label htmlFor="title">Title:</label>
// // //   <input
// // //     type="text"
// // //     id="title"
// // //     name="title"
// // //     value={data.title}
// // //     onChange={(e) => handleChange(e)}
// // //     required
// // //   />

// // //   {/* Content Field */}
// // //   <label htmlFor="content">Content:</label>
// // //   <textarea
// // //     id="content"
// // //     name="content"
// // //     value={data.content}
// // //     onChange={(e) => handleChange(e)}
// // //     required
// // //   ></textarea>

// // //   {/* Date Field */}
// // //   <label htmlFor="date">Date:</label>
// // //   <input
// // //     type="date"
// // //     id="date"
// // //     name="date"
// // //     value={data.date}
// // //     onChange={(e) => handleChange(e)}
// // //     required
// // //   />

// // //   {/* Submit Button */}
// // //   <button type="submit">
// // //     {data.id ? 'Edit Entry' : 'Add Entry'}
// // //   </button>
// // // </Form>

// // //       {/* <Form onSubmit={data.id ? handleEditEntry : handleAddEntry}>
// // //         {/* ... (your form fields for title, content, and date) */}

// // //         <button type="submit" style={buttonStyle}>
// // //           {data.id ? 'Update Journal Entry' : 'Add Journal Entry'}
// // //         </button>
// // //       </Form> */}

// // //       {data.id && (
// // //         <Form onSubmit={handleDelete} style={{ display: 'inline-block' }}>
// // //           <button type="submit" style={buttonStyle}>
// // //             DELETE
// // //           </button>
// // //         </Form>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Journal;


// // import React, { useState, useEffect } from 'react';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';
// // import { Form, useLoaderData, Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Journal = () => {
// //   const data = useLoaderData();
// //   const navigate = useNavigate();
// //   const [journalEntry, setJournalEntry] = useState({});
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   useEffect(() => {
// //     // Fetch initial data or perform any other setup
// //   }, []);

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setJournalEntry((prevEntry) => ({
// //       ...prevEntry,
// //       [name]: value,
// //     }));
// //   };

// //   const handleAddEntry = async (e) => {
// //     e.preventDefault();
// //     const token = localStorage.getItem('token');
// //     try {
// //       const response = await axios.post(
// //         `${process.env.REACT_APP_URL}createjournalentry/`,
// //         {
// //           title: e.target.title.value,
// //           content: e.target.content.value,
// //           date: selectedDate,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Token ${token}`,
// //           },
// //         }
// //       );
// //       console.log('Journal Entry Added:', response.data);
// //       navigate('/journal');
// //     } catch (error) {
// //       console.error('Error adding journal entry:', error);
// //     }
// //   };

// //   const handleEditEntry = async (e) => {
// //     e.preventDefault();
// //     const token = localStorage.getItem('token');
// //     try {
// //       const response = await axios.post(
// //         `${process.env.REACT_APP_URL}updatejournalentry/${data.id}/`,
// //         {
// //           title: e.target.title.value,
// //           content: e.target.content.value,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Token ${token}`,
// //           },
// //         }
// //       );
// //       console.log('Journal Entry Updated:', response.data);
// //       navigate(`/journal/${data.id}`);
// //     } catch (error) {
// //       console.error('Error updating journal entry:', error);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     const token = localStorage.getItem('token');
// //     try {
// //       await axios.delete(`${process.env.REACT_APP_URL}deletejournalentry/${data.id}/`, {
// //         headers: {
// //           Authorization: `Token ${token}`,
// //         },
// //       });
// //       console.log('Journal Entry Deleted');
// //       navigate('/journal');
// //     } catch (error) {
// //       console.error('Error deleting journal entry:', error);
// //     }
// //   };

// //   const containerStyle = {
// //     maxWidth: '600px',
// //     margin: '0 auto',
// //     padding: '20px',
// //     backgroundColor: '#f8f8f8',
// //     borderRadius: '8px',
// //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// //   };

// //   const formGroupStyle = {
// //     marginBottom: '15px',
// //   };

// //   const labelStyle = {
// //     display: 'block',
// //     marginBottom: '5px',
// //   };

// //   const inputStyle = {
// //     width: '100%',
// //     padding: '10px',
// //     border: '1px solid #ccc',
// //     borderRadius: '5px',
// //     boxSizing: 'border-box',
// //     marginTop: '5px',
// //     transition: 'border-color 0.3s ease-in-out',
// //   };

// //   const inputFocusStyle = {
// //     borderColor: '#3498db',
// //   };

// //   const buttonStyle = {
// //     backgroundColor: '#000000',
// //     color: 'white',
// //     padding: '10px 15px',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease-in-out',
// //   };

// //   const buttonHoverStyle = {
// //     backgroundColor: '#000000',
// //   };

// //   const navStyle = {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     background: 'black',
// //     padding: '10px',
// //     marginBottom: '80px',
// //     position: 'relative',
// //   };

// //   const h1Style = {
// //     fontFamily: 'Staatliches',
// //     fontSize: '80px',
// //     color: 'white',
// //     position: 'absolute',
// //     left: '20px',
// //     top: '-15%',
// //     transform: 'translateY(-50%)',
// //     zIndex: 1,
// //   };

// //   const h2Style = {
// //     fontFamily: 'Staatliches',
// //   };

// //   const centeredNavStyle = {
// //     flex: 1,
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   };

// //   const navItemStyle = {
// //     margin: '0 45px',
// //   };

// //   const navLinkStyle = {
// //     color: 'white',
// //     textDecoration: 'none',
// //     fontSize: '30px',
// //     fontFamily: 'Staatliches',
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <nav style={navStyle}>
// //         <Link to="/home" style={{ textDecoration: 'none' }}>
// //           <h1 style={h1Style}>Within</h1>
// //         </Link>
// //         <div style={centeredNavStyle}>
// //           <ul
// //             style={{
// //               listStyleType: 'none',
// //               padding: 0,
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             }}
// //           >
// //             <li style={navItemStyle}>
// //               <Link to="/journal" style={navLinkStyle}>
// //                 Journal Entries
// //               </Link>
// //             </li>
// //             <li style={navItemStyle}>
// //               <Link to="/goal" style={navLinkStyle}>
// //                 Goals
// //               </Link>
// //             </li>
// //             <li style={navItemStyle}>
// //               <Link to="/profile" style={navLinkStyle}>
// //                 Profile
// //               </Link>
// //             </li>
// //             <li style={navItemStyle}>
// //               <Link to="/logout" style={navLinkStyle}>
// //                 Logout
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </nav>

// //       <Form onSubmit={data.id ? handleEditEntry : handleAddEntry}>
// //         {/* Title Field */}
// //         <label htmlFor="title">Title:</label>
// //         <input
// //           type="text"
// //           id="title"
// //           name="title"
// //           value={journalEntry.title}
// //           onChange={(e) => handleChange(e)}
// //           required
// //         />

// //         {/* Content Field */}
// //         <label htmlFor="content">Content:</label>
// //         <textarea
// //           id="content"
// //           name="content"
// //           value={journalEntry.content}
// //           onChange={(e) => handleChange(e)}
// //           required
// //         ></textarea>

// //         {/* Date Field */}
// //         <label htmlFor="date">Date:</label>
// //         <input
// //           type="date"
// //           id="date"
// //           name="date"
// //           value={selectedDate}
// //           onChange={(e) => handleDateChange(e)}
// //           required
// //         />

// //         {/* Submit Button */}
// //         <button type="submit" style={buttonStyle}>
// //           {data.id ? 'Edit Entry' : 'Add Entry'}
// //         </button>
// //       </Form>

// //       {data.id && (
// //         <Form onSubmit={handleDelete} style={{ display: 'inline-block' }}>
// //           <button type="submit" style={buttonStyle}>
// //             DELETE
// //           </button>
// //         </Form>
// //       )}
// //     </div>
// //   );
// // };

// // export default Journal;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// const URL = "http://localhost:3000/";

// const Journal = () => {
//   const [newJournal, setNewJournal] = useState(null);
//   const [journals, setJournals] = useState([]);
// //   const [editingGoalId, setEditingGoalId] = useState(null);
// //   const [editedGoalText, setEditedGoalText] = useState('');
// //   const [editedDueDate, setEditedDueDate] = useState(null);

//   const handleInputChange = (e) => {
//     setNewJournal(e.target.value);
//   };

//   const handleDueDateChange = (date) => {
//     setNewDueDate(date);
//   };

//   const handleAddJournal = async () => {
//     if (newJournal.trim() !== '') {
//       try {
//         const response = await fetch(URL + 'journal', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Token ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             title: newTitle,
//             content: newJournal,
//             date: date,
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to add new journal');
//         }

//         const newGoalItem = await response.json();
//         setGoals([...goals, newGoalItem]);
//         setNewGoal('');
//         setNewDueDate(null);
//       } catch (error) {
//         console.error('Error adding goal:', error.message);
//       }
//     } else {
//       console.error('Please enter a valid goal.');
//     }
//   };

//   const handleEditGoal = (goalId) => {
//     setEditingGoalId(goalId);
//     // const goalToEdit = goals.find((goal) => goal.id === goalId);
//     const goalToEdit = goals.find((goal) => goal._id === goalId);
//     setEditedGoalText(goalToEdit.content);
//     setEditedDueDate(goalToEdit.dueDate ? new Date(goalToEdit.dueDate) : null);
//   };

//   const handleSaveEditedGoal = async () => {
//     try {
//       const response = await fetch(URL + `goals/${editingGoalId}/`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Token ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           content: editedGoalText,
//           dueDate: editedDueDate,
//           // goal: "Updated Goal Description",
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save edited goal');
//       }

//       const updatedGoal = await response.json();
//       const updatedGoals = goals.map((goal) =>
//         goal.id === editingGoalId ? updatedGoal : goal
//       );
//       setGoals(updatedGoals);
//       setEditingGoalId(null);
//     } catch (error) {
//       console.error('Error saving edited goal:', error.message);
//     }
//   };

//   const handleDeleteGoal = async (goalId) => {
//     console.log("goalId: ", goalId)
//     try {
//       const response = await fetch(URL + `goals/${goalId}/`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Token ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete goal');
//       }

//       const updatedGoals = goals.filter((goal) => goal.id !== goalId);
//       setGoals(updatedGoals);
//     } catch (error) {
//       console.error('Error deleting goal:', error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchGoals = async () => {
//       try {
//         const response = await fetch(URL + 'goals/', {
//           headers: {
//             'Authorization': `Token ${localStorage.getItem('token')}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch goals');
//         }

//         const goalsData = await response.json();
//         setGoals(goalsData);
//         console.log(goalsData)
//       } catch (error) {
//         console.error('Error fetching goals:', error.message);
//       }
//     };

//     fetchGoals();
//   }, []);

//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: '#333', 
//     padding: '10px', 
//     marginBottom: '80px', 
//   };

//   const navItemStyle = {
//     margin: '0 15px', 
//   };

//   const navLinkStyle = {
//     color: 'white', 
//     textDecoration: 'none',
//     fontSize: '18px', 
//   };

//   const h1Style = {
//     fontFamily: 'Staatliches',
//     fontSize: '80px',
//     color: 'black',
//     marginTop: '20px', 
//   };

//   return (
//     <div>
//       <h1 style={h1Style}>Within</h1>

//       <nav style={navStyle}>
//         <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <li style={navItemStyle}>
//             <Link to="/home" style={navLinkStyle}>Home</Link>
//           </li>
//           <li style={navItemStyle}>
//             <Link to="/journal" style={navLinkStyle}>Mood Journal</Link>
//           </li>
//           <li style={navItemStyle}>
//             <Link to="/profile" style={navLinkStyle}>Profile</Link>
//           </li>
//           <li style={navItemStyle}>
//             <Link to="/logout" style={navLinkStyle}>Logout</Link>
//           </li>
//         </ul>
//       </nav>

//       <h2>Create a New Goal</h2>
//       <div>
//         <input
//           placeholder='Goal'
//           type="text"
//           id="newGoal"
//           value={newGoal}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <DatePicker
//           placeholderText="Select Due Date"
//           selected={newDueDate}
//           onChange={handleDueDateChange}
//           dateFormat="MM/dd/yyyy"
//         />
//       </div>
//       <button onClick={handleAddGoal}>Add Goal</button>

//       <h2 style={{textDecoration:'underline'}}>Goal List</h2>
//       {goals.length === 0 ? (
//         <p>No Goals Added Yet</p>
//       ) : (
//         <ul>
//           {goals.map((goal) => (
//             <li key={goal.id}>
//               {editingGoalId === goal.id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editedGoalText}
//                     onChange={(e) => setEditedGoalText(e.target.value)}
//                   />
//                   <DatePicker
//                     placeholderText="Select Due Date"
//                     selected={editedDueDate}
//                     onChange={(date) => setEditedDueDate(date)}
//                     dateFormat="MM/dd/yyyy"
//                   />
//                   <button onClick={handleSaveEditedGoal}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   {goal.content}
//                   <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
//                   <button onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Journal;

