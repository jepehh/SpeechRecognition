import React from 'react';
import './Modal.css'; // Import CSS styles for the modal

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Comparison Result</h2>
          <p>Your Input</p>
          <div className="container"></div>
          <p>Your Result</p>
          <div className="container-2"></div>
          <button onClick={onClose} className='close-btn'>Close Result</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
