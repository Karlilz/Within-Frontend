import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, useLoaderData, Link } from 'react-router-dom';

const JournalNew = () => {
  const data = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Additional styles for horizontal navigation
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333', // Background color for the navigation bar
    padding: '10px', // Add padding for better aesthetics
    marginBottom: '80px', // Increase marginBottom to move the nav bar further up
  };

  const navItemStyle = {
    margin: '0 15px', // Adjust spacing between navigation items
  };

  const navLinkStyle = {
    color: 'white', // Text color for navigation links
    textDecoration: 'none',
    fontSize: '18px', // Adjust the font size of the links
  };

  // Adjustments for h1 and nav positions
  const h1Style = {
    // textAlign: 'center',
    fontSize: '80px',
    color: 'black',
    margin: '0',
    marginTop: '20px', // Increase marginTop to move the h1 down
    fontFamily: 'Staatliches',
  };

  const h2Style = {
    textAlign: 'center',
    fontSize: '60px',
    color: 'black',
    margin: '0',
    fontFamily: 'Staatliches',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="journal-new-container">
      <h1 style={h1Style}>Within</h1>
      <nav style={navStyle}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <li style={navItemStyle}>
            <Link to="/home" style={navLinkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/goal" style={navLinkStyle}>Goals</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/profile" style={navLinkStyle}>Profile</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/logout" style={navLinkStyle}>Logout</Link>
          </li>
        </ul>
      </nav>
      <h2 style={h2Style}>Journal Your Way: Dream, Believe, Achieve</h2>

      <Form action="/createjournalentry" method="post">
        <div className="form-group">
          {/* <label>Title:</label> */}
          <input type="text" name="title" placeholder="Journal Entry Title" />
        </div>
        <div className="form-group">
          {/* <label>Content:</label> */}
          <textarea name="content" placeholder="Empower Your Thoughts Here..."></textarea>
        </div>

        <div className="form-group">
          {/* <label>Date:</label> */}
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a Date"
          />
        </div>
  
        <button type="submit">Add Journal Entry</button>
      </Form>

      <button>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      </button>
    </div>
  );
};

export default JournalNew;
