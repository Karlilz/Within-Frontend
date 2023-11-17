// import React, { useEffect, useState } from 'react';
// import { Form, useLoaderData } from 'react-router-dom';
// import axios from 'axios';


// const JournalEdit = () => {
//   const data = useLoaderData();
//   const [journalEntry, setJournalEntry] = useState({});
//   const URL = process.env.REACT_APP_URL;


//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const getData = async () => {
//       const response = await axios.get(`${URL}journalentries/${data.id}/`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       setJournalEntry(response.data);
//     };
//     getData();
//   }, [data.id]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post(
//         `${URL}updatejournalentry/${data.id}/`,
//         {
//           notes: e.target.notes.value,
//           board: e.target.board.value,
//         },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       console.log('Journal Entry Updated:', response.data);
//     } catch (error) {
//       console.error('Error updating journal entry:', error);
//     }
//   };


//   return (
//     <div>
//       <h2>Edit Journal Entry: {journalEntry.title}</h2>
//       <Form onSubmit={handleSubmit}>
//         <input type="text" name="title" placeholder="Title" defaultValue={journalEntry.title} />
//         <textarea name="content" placeholder="Content" defaultValue={journalEntry.content}></textarea>
//         <button type="submit">Update</button>
//       </Form>
//     </div>
//   );
// };


// export default JournalEdit;



