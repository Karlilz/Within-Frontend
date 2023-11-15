import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';

const JournalNew = () => {
  // Assuming you fetch some data using useLoaderData
  const data = useLoaderData();

  return (
    <div>
      <h2>Create a New Journal Entry</h2>
      <Form action="/createjournalentry" method="post">
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content"></textarea>

        <select name="confidenceLevel">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        
        <button type="submit">Add Journal Entry</button>
      </Form>
    </div>
  );
};

export default JournalNew;
