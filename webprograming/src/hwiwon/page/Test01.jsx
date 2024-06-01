import React, { useState, useEffect } from "react";
import Test02 from "./Test02";

function Test01() {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleButtonClicked = () => {
    setIsCorrect(true);
  };

  useEffect(() => {
    console.log("부모 컴포넌트 리렌더링");
  }, [isCorrect]); // useEffect 의 의존성 배열에 isCorrect 추가

  return (
    <>
      <Test02 text={isCorrect} />
      <div>부모 컴포넌트: {isCorrect ? "참" : "거짓"}</div>
      <button onClick={handleButtonClicked}>클릭</button>
    </>
  );
}

export default Test01;
