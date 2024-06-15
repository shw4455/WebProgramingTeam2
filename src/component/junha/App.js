// src/App.js
import React from 'react';
import HanjaTable from './components/HanjaTable';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import './App.css';

const App = () => {
  return (
    <div className="App"> 
     <HanjaTable />
      
      <h1>예시: 二十三 + 四十五 = ?</h1>
      <h1> 23 + 45 = 68</h1>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      
    </div>
  );
};

export default App;

