// import React, { useState } from 'react';

// const GoalNew = () => {
//   const [newGoal, setNewGoal] = useState('');
//   const [goals, setGoals] = useState([]);

//   const handleInputChange = (e) => {
//     setNewGoal(e.target.value);
//   };

//   const handleAddGoal = () => {
//     if (newGoal.trim() !== '') {
//       const newGoalItem = { id: Date.now(), text: newGoal };
//       setGoals([...goals, newGoalItem]);
//       setNewGoal('');
//     } else {
//       console.error('Please enter a valid goal.');
//     }
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
//       <ul>
//         {goals.map((goal) => (
//           <li key={goal.id}>
//             {goal.text}
//             <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GoalNew;


import React, { useState } from 'react';

const Goal = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editedGoalText, setEditedGoalText] = useState('');

  const handleInputChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      const newGoalItem = { id: Date.now(), text: newGoal };
      setGoals([...goals, newGoalItem]);
      setNewGoal('');
    } else {
      console.error('Please enter a valid goal.');
    }
  };

  const handleEditGoal = (goalId) => {
    setEditingGoalId(goalId);
    const goalToEdit = goals.find((goal) => goal.id === goalId);
    setEditedGoalText(goalToEdit.text);
  };

  const handleSaveEditedGoal = () => {
    const updatedGoals = goals.map((goal) =>
      goal.id === editingGoalId ? { ...goal, text: editedGoalText } : goal
    );
    setGoals(updatedGoals);
    setEditingGoalId(null);
  };

  const handleDeleteGoal = (goalId) => {
    const updatedGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(updatedGoals);
  };

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
    </div>
  );
};

export default Goal;
