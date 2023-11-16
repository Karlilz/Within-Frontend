//  NO BACKEND CONNECTION
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Goal = () => {
//   const [newGoal, setNewGoal] = useState('');
//   const [goals, setGoals] = useState([]);
//   const [editingGoalId, setEditingGoalId] = useState(null);
//   const [editedGoalText, setEditedGoalText] = useState('');

//   const handleInputChange = (e) => {
//     setNewGoal(e.target.value);
//   };

//   // ADD POST REQUEST TO API - BACKEND
//   // FETCH / AXIOS
//   const handleAddGoal = () => {
//     if (newGoal.trim() !== '') {
//       const newGoalItem = { id: Date.now(), text: newGoal };
//       setGoals([...goals, newGoalItem]);
//       setNewGoal('');
//     } else {
//       console.error('Please enter a valid goal.');
//     }
//   };

//   const handleEditGoal = (goalId) => {
//     setEditingGoalId(goalId);
//     const goalToEdit = goals.find((goal) => goal.id === goalId);
//     setEditedGoalText(goalToEdit.text);
//   };

//   const handleSaveEditedGoal = () => {
//     const updatedGoals = goals.map((goal) =>
//       goal.id === editingGoalId ? { ...goal, text: editedGoalText } : goal
//     );
//     setGoals(updatedGoals);
//     setEditingGoalId(null);
//   };

//   const handleDeleteGoal = (goalId) => {
//     const updatedGoals = goals.filter((goal) => goal.id !== goalId);
//     setGoals(updatedGoals);
//   };

//   return (
//     <div>
//       <h2>Create a New Goal</h2>
//       <div>
//         <label htmlFor="newGoal">Goal:</label>
//         <input
//           type="text"
//           id="newGoal"
//           value={newGoal}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button onClick={handleAddGoal}>Add Goal</button>

//       <h2>Goal List</h2>
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
//                   <button onClick={handleSaveEditedGoal}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   {goal.text}
//                   <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
//                   <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

//     <button>
//         <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
//       </button>
//     </div>
//   );
// };

// export default Goal;


// WITH FETCH REQUESTS 
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// const URL = "http://localhost:3000/"

// const Goal = () => {
//   const [newGoal, setNewGoal] = useState('');
//   const [goals, setGoals] = useState([]);
//   const [editingGoalId, setEditingGoalId] = useState(null);
//   const [editedGoalText, setEditedGoalText] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setNewGoal(e.target.value);
//   };

//   const handleAddGoal = async () => {
//     if (newGoal.trim() !== '') {
//       try {
//         // Make a POST request to create a new goal
//         const response = await fetch(URL + 'goals', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Token ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ text: newGoal }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to add goal');
//         }

//         const newGoalItem = await response.json();
//         setGoals([...goals, newGoalItem]);
//         setNewGoal('');
//       } catch (error) {
//         console.error('Error adding goal:', error.message);
//       }
//     } else {
//       console.error('Please enter a valid goal.');
//     }
//   };

//   const handleEditGoal = (goalId) => {
//     setEditingGoalId(goalId);
//     const goalToEdit = goals.find((goal) => goal.id === goalId);
//     setEditedGoalText(goalToEdit.text);
//   };

//   const handleSaveEditedGoal = async () => {
//     try {
//       // Make a PUT request to update the edited goal
//       const response = await fetch(URL + `goals/${editingGoalId}/`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Token ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: editedGoalText }),
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
//     try {
//       // Make a DELETE request to remove the goal
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
//     // Fetch the existing goals when the component mounts
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
//       } catch (error) {
//         console.error('Error fetching goals:', error.message);
//       }
//     };

//     fetchGoals();
//   }, []);

//   return (
//     <div>
//       <h2>Create a New Goal</h2>
//       <div>
//         <label htmlFor="newGoal">Goal:</label>
//         <input
//           type="text"
//           id="newGoal"
//           value={newGoal}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button onClick={handleAddGoal}>Add Goal</button>

//       <h2>Goal List</h2>
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
//                   <button onClick={handleSaveEditedGoal}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   {goal.text}
//                   <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
//                   <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

//       <button>
//         <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
//           Home
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default Goal;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const URL = "http://localhost:3000/"

const Goal = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editedGoalText, setEditedGoalText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleAddGoal = async () => {
    if (newGoal.trim() !== '') {
      try {
        // Make a POST request to create a new goal
        const response = await fetch(URL + 'goals', {
          method: 'POST',
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: newGoal,
            dueDate: /* Your dueDate value here */
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add goal');
        }

        const newGoalItem = await response.json();
        setGoals([...goals, newGoalItem]);
        setNewGoal('');
      } catch (error) {
        console.error('Error adding goal:', error.message);
      }
    } else {
      console.error('Please enter a valid goal.');
    }
  };

  const handleEditGoal = (goalId) => {
    setEditingGoalId(goalId);
    const goalToEdit = goals.find((goal) => goal.id === goalId);
    setEditedGoalText(goalToEdit.text);
  };

  const handleSaveEditedGoal = async () => {
    try {
      // Make a PUT request to update the edited goal
      const response = await fetch(URL + `goals/${editingGoalId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: editedGoalText,
          goal: /* Your goal value here */
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save edited goal');
      }

      const updatedGoal = await response.json();
      const updatedGoals = goals.map((goal) =>
        goal.id === editingGoalId ? updatedGoal : goal
      );
      setGoals(updatedGoals);
      setEditingGoalId(null);
    } catch (error) {
      console.error('Error saving edited goal:', error.message);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      // Make a DELETE request to remove the goal
      const response = await fetch(URL + `goals/${goalId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete goal');
      }

      const updatedGoals = goals.filter((goal) => goal.id !== goalId);
      setGoals(updatedGoals);
    } catch (error) {
      console.error('Error deleting goal:', error.message);
    }
  };

  useEffect(() => {
    // Fetch the existing goals when the component mounts
    const fetchGoals = async () => {
      try {
        const response = await fetch(URL + 'goals/', {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch goals');
        }

        const goalsData = await response.json();
        setGoals(goalsData);
      } catch (error) {
        console.error('Error fetching goals:', error.message);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <h2>Create a New Goal</h2>
      <div>
        <label htmlFor="newGoal">Goal:</label>
        <input
          type="text"
          id="newGoal"
          value={newGoal}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddGoal}>Add Goal</button>

      <h2>Goal List</h2>
      {goals.length === 0 ? (
        <p>No Goals Added Yet</p>
      ) : (
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              {editingGoalId === goal.id ? (
                <>
                  <input
                    type="text"
                    value={editedGoalText}
                    onChange={(e) => setEditedGoalText(e.target.value)}
                  />
                  <button onClick={handleSaveEditedGoal}>Save</button>
                </>
              ) : (
                <>
                  {goal.text}
                  <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
                  <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      <button>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Link>
      </button>
    </div>
  );
};

export default Goal;
