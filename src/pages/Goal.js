import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const URL = "http://localhost:3000/";

const Goal = () => {
  const [newGoal, setNewGoal] = useState('');
  const [newDueDate, setNewDueDate] = useState(null);
  const [goals, setGoals] = useState([]);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editedGoalText, setEditedGoalText] = useState('');
  const [editedDueDate, setEditedDueDate] = useState(null);

  const handleInputChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleDueDateChange = (date) => {
    setNewDueDate(date);
  };

  const handleAddGoal = async () => {
    if (newGoal.trim() !== '') {
      try {
        const response = await fetch(URL + 'goals', {
          method: 'POST',
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: newGoal,
            dueDate: newDueDate,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add goal');
        }

        const newGoalItem = await response.json();
        setGoals([...goals, newGoalItem]);
        setNewGoal('');
        setNewDueDate(null);
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
    setEditedGoalText(goalToEdit.content);
    setEditedDueDate(goalToEdit.dueDate ? new Date(goalToEdit.dueDate) : null);
  };

  const handleSaveEditedGoal = async () => {
    try {
      const response = await fetch(URL + `goals/${editingGoalId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedGoalText,
          dueDate: editedDueDate,
          goal: "Updated Goal Description",
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
    console.log("goalId: ", goalId)
    try {
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
        console.log(goalsData)
      } catch (error) {
        console.error('Error fetching goals:', error.message);
      }
    };

    fetchGoals();
  }, []);

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333', 
    padding: '10px', 
    marginBottom: '80px', 
  };

  const navItemStyle = {
    margin: '0 15px', 
  };

  const navLinkStyle = {
    color: 'white', 
    textDecoration: 'none',
    fontSize: '18px', 
  };

  const h1Style = {
    fontFamily: 'Staatliches',
    fontSize: '80px',
    color: 'black',
    marginTop: '20px', 
  };

  return (
    <div>
      <h1 style={h1Style}>Within</h1>

      <nav style={navStyle}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <li style={navItemStyle}>
            <Link to="/home" style={navLinkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/journal" style={navLinkStyle}>Journal Entries</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/profile" style={navLinkStyle}>Profile</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/logout" style={navLinkStyle}>Logout</Link>
          </li>
        </ul>
      </nav>

      <h2>Create a New Goal</h2>
      <div>
        <input
          placeholder='Goal'
          type="text"
          id="newGoal"
          value={newGoal}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <DatePicker
          placeholderText="Select Due Date"
          selected={newDueDate}
          onChange={handleDueDateChange}
          dateFormat="MM/dd/yyyy"
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
                  <DatePicker
                    placeholderText="Select Due Date"
                    selected={editedDueDate}
                    onChange={(date) => setEditedDueDate(date)}
                    dateFormat="MM/dd/yyyy"
                  />
                  <button onClick={handleSaveEditedGoal}>Save</button>
                </>
              ) : (
                <>
                  {goal.content}
                  <button onClick={() => handleEditGoal(goal.id)}>Edit</button>
                  <button onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Goal;

