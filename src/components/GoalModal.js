import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GoalModal = ({
  showModal,
  closeModal,
  goalText,
  handleInputChange,
  dueDate,
  handleDueDateChange,
  handleSaveGoal,
}) => {
  return (
    showModal && (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <h2>Create a New Goal</h2>
          <input
            placeholder='Goal'
            type="text"
            value={goalText}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', padding: '8px', fontSize: '18px' }}
          />
          <DatePicker
            placeholderText="Select Due Date"
            selected={dueDate}
            onChange={handleDueDateChange}
            dateFormat="MM/dd/yyyy"
            style={{ marginBottom: '10px', padding: '8px', fontSize: '18px' }}
          />
          <button onClick={handleSaveGoal}>Add Goal</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default GoalModal;