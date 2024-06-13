// src/components/Question1.js
import React, { useState } from 'react';
import { numberToHanja } from '../utils';

const Question1 = () => {
  const question = `${numberToHanja(9)}${numberToHanja(10)}${numberToHanja(9)} - ${numberToHanja(8)}${numberToHanja(10)}${numberToHanja(8)} + ${numberToHanja(4)}${numberToHanja(10)}${numberToHanja(9)}`;
  const answer = 99 - 88 + 49;

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

export default Question1;
