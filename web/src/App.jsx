import React, { useState } from 'react';
import './App.css';
import Modal from './Modal'; // Import the Modal component

function toggleColor(event) {
  const button = event.target;
  button.classList.toggle("clicked");
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="Davinson">
          <h1>Davinson</h1>
        </div>
        <div className="EngProCheck">
          <h1></h1>
          <h1><span className='highlight'>English</span> Pronounciation Checker</h1>
        </div>
      </div>
      <div className="content">
        <div className="LetsLearn">
            <h1>Let's Learn <span className='highlight'>English</span> Pronounciation</h1>
        </div>
        <div className="Input">
          <h1>Input text to learn</h1>
        </div>
        <div className="InputBox">
          <input type="text" className="textInput" placeholder="Enter text here" />
        </div>
        <div className="ListenButt">
          <button>Listen</button>
        </div>
        <div className="TryIt">
          <h1>Try It</h1>
        </div>
        <div className="Record">
          <div className="InputBox">
            <h1 className="TextResult">Your result will show here.</h1>
            <div className="RecordButt" onClick={toggleColor}></div>
          </div>
        </div>
        <div className="CompareButt">
          <button onClick={openModal}>Compare</button> {/* Add onClick to open the modal */}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Render the modal */}
      </div>
    </div>
  );
}

export default App;
