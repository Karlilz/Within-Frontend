import React from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JournalModal = ({
  showModal,
  closeModal,
  title,
  handleTitleChange,
  content,
  handleContentChange,
  date,
  handleDateChange,
  handleSaveEntry,
}) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Journal Entry Modal"
    >
      <h2>Create a Journal Entry</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <DatePicker
          placeholderText="Select Date"
          selected={date}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <button onClick={handleSaveEntry}>Add Entry</button>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default JournalModal;
