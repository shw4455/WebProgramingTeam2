// src/App.js
import React from 'react';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Math Quiz</h1>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
    </div>
  );
};

export default App;
