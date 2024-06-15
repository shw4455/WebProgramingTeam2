import React from 'react';
import './HanjaTable.css';

const HanjaTable = () => {
  const hanjaNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

  return (
    <div>
      <h1>다음 보기는 숫자를 한문으로 표기한 것입니다.</h1>
      <h1>예시를 보며 계산 문제를 풀어보세요.</h1>
      <table>
        <thead>
          <tr>
            <th>보기</th>
            {Array.from({ length: 10 }, (_, i) => (
              <th key={i + 1}>{i + 1}</th>
            ))} 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>한자</td>
            {hanjaNumbers.map((hanja, index) => (
              <td key={index}>{hanja}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HanjaTable;
