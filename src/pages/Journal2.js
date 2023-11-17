import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URL = "http://localhost:3000/";

const Journal2 = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newDate, setNewDate] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedDate, setEditedDate] = useState(null);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleDateChange = (date) => {
    setNewDate(date);
  };

  const handleAddEntry = async () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      try {
        const response = await fetch(URL + 'journal', {
          method: 'POST',
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: newTitle,
            content: newContent,
            date: newDate,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add journal entry');
        }

        const newEntry = await response.json();
        setJournalEntries([...journalEntries, newEntry]);
        setNewTitle('');
        setNewContent('');
        setNewDate(null);
      } catch (error) {
        console.error('Error adding journal entry:', error.message);
      }
    } else {
      console.error('Please enter a valid title and content.');
    }
  };

  const handleEditEntry = (entryId) => {
    setEditingEntryId(entryId);
    const entryToEdit = journalEntries.find((entry) => entry._id === entryId);
    setEditedTitle(entryToEdit.title);
    setEditedContent(entryToEdit.content);
    setEditedDate(entryToEdit.date ? new Date(entryToEdit.date) : null);
  };

  const handleSaveEditedEntry = async () => {
    try {
      const response = await fetch(URL + `journal/${editingEntryId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
          date: editedDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save edited journal entry');
      }

      const updatedEntry = await response.json();
      const updatedEntries = journalEntries.map((entry) =>
        entry._id === editingEntryId ? updatedEntry : entry
      );
      setJournalEntries(updatedEntries);
      setEditingEntryId(null);
    } catch (error) {
      console.error('Error saving edited journal entry:', error.message);
    }
  };

  const handleDeleteEntry = async (entryId) => {
    try {
      const response = await fetch(URL + `journal/${entryId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete journal entry');
      }

      const updatedEntries = journalEntries.filter((entry) => entry._id !== entryId);
      setJournalEntries(updatedEntries);
    } catch (error) {
      console.error('Error deleting journal entry:', error.message);
    }
  };

  useEffect(() => {
    const fetchJournalEntries = async () => {
      try {
        const response = await fetch(URL + 'journal/', {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch journal entries');
        }

        const entriesData = await response.json();
        setJournalEntries(entriesData);
      } catch (error) {
        console.error('Error fetching journal entries:', error.message);
      }
    };

    fetchJournalEntries();
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
      {/* <h1 style={h1Style}>Within</h1>

      <nav style={navStyle}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <li style={navItemStyle}>
            <Link to="/home" style={navLinkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/journal" style={navLinkStyle}>Mood Journal</Link>
          </li>
          {/* <li style={navItemStyle}>
            <Link to="/profile" style={navLinkStyle}>Profile</Link>
          </li> */}
          {/* <li style={navItemStyle}>
            <Link to="/logout" style={navLinkStyle}>Logout</Link>
          </li>
        </ul>
      </nav> */} */}

      return (
        <div style={containerStyle}>
          <nav style={navStyle}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <h1 style={h1Style}>Within</h1>
            </Link>
            <div style={centeredNavStyle}>
              <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <li style={navItemStyle}>
                  <Link to="/journal" style={navLinkStyle}>Mood Journal</Link>
                </li>
                <li style={navItemStyle}>
                  <Link to="/goal" style={navLinkStyle}>Goals</Link>
                </li>
                {/* <li style={navItemStyle}>
                  <Link to="/profile" style={navLinkStyle}>Profile</Link>
                </li> */}
                <li style={navItemStyle}>
                  <Link to="/logout" style={navLinkStyle}>Logout</Link>
                </li>
              </ul>
            </div>
          </nav>

      <h2>Create a New Journal Entry</h2>
      <div>
        <input
          placeholder='Title'
          type="text"
          id="newTitle"
          value={newTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <textarea
          placeholder='Content'
          id="newContent"
          value={newContent}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <DatePicker
          placeholderText="Select Date"
          selected={newDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <button onClick={handleAddEntry}>Add Entry</button>

      <h2 style={{ textDecoration: 'underline' }}>Journal Entry List</h2>
      {journalEntries.length === 0 ? (
        <p>No Entries Added Yet</p>
      ) : (
        <ul>
          {journalEntries.map((entry) => (
            <li key={entry._id}>
              {editingEntryId === entry._id ? (
                <>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <DatePicker
                    placeholderText="Select Date"
                    selected={editedDate}
                    onChange={(date) => setEditedDate(date)}
                    dateFormat="MM/dd/yyyy"
                  />
                  <button onClick={handleSaveEditedEntry}>Save</button>
                </>
              ) : (
                <>
                  <strong>{entry.title}</strong>
                  <p>{entry.content}</p>
                  <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
                  <button onClick={() => handleEditEntry(entry._id)}>Edit</button>
                  <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
  

export default Journal2;
