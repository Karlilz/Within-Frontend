// CSS
import React from 'react';
import { Form, useLoaderData, Link } from 'react-router-dom';

const JournalNew = () => {
  const data = useLoaderData();

  return (
    <div className="journal-new-container">
      <h1>Create a Journal Entry</h1>
      <h2>Reflect, Believe, Achieve</h2>

      <Form action="/createjournalentry" method="post">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" placeholder="Enter your title" />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea name="content" placeholder="Write your content"></textarea>
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
