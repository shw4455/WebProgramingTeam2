// src/components/Question2.js
import React, { useState } from 'react';
import { numberToHanja } from '../utils';

const Question2 = () => {
  const question = `${numberToHanja(1)}${numberToHanja(4)} + ${numberToHanja(5)}${numberToHanja(2)} - ${numberToHanja(3)}${numberToHanja(8)}`;
  const answer = 14 + 52 - 38;

  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    if (parseInt(userAnswer, 10) === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <p>{question}</p>
      <input 
        type="text" 
        value={userAnswer} 
        onChange={(e) => setUserAnswer(e.target.value)} 
        placeholder="답을 입력하세요" 
      />
      <button onClick={checkAnswer}>제출</button>
      {isCorrect && <p>정답입니다!</p>}
    </div>
  );
};

export default Question2;
