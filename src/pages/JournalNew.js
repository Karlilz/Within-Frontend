// CSS - WITH DATEPICKER
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

  return (
    <div className="journal-new-container">
      <h1>Create a Journal Entry</h1>
      <h2>Reflect, Believe, Achieve</h2>

      <Form action="/createjournalentry" method="post">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" placeholder="Journal Entry Title" />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea name="content" placeholder="Empower Your Thoughts Here..."></textarea>
        </div>

        <div className="form-group">
          <label>Date:</label>
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
