// NO CSS
// import React from 'react';
// import { Form, useLoaderData } from 'react-router-dom';

// const JournalNew = () => {
//   // Assuming you fetch some data using useLoaderData
//   const data = useLoaderData();

//   return (
//     <div>
//       <h1>Create a Journal Entry</h1>
//       <h2></h2>
//       <Form action="/createjournalentry" method="post">
//         <input type="text" name="title" placeholder="Title" />
//         <textarea name="content" placeholder="Content"></textarea>

//         <select name="confidenceLevel">
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
        
//         <button type="submit">Add Journal Entry</button>
//       </Form>
//     </div>
//   );
// };

// export default JournalNew;

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
        {/* <div className="form-group">
          <label>Confidence Level:</label>
          <select name="confidenceLevel">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div> */}
        <button type="submit">Add Journal Entry</button>
      </Form>

      <button>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
      </button>
    </div>
  );
};

export default JournalNew;
