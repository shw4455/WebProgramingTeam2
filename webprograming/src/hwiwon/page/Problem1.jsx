import React, { useState } from "react";
import styles from "./styles/problem1.module.css";
import ProblemText from "../component/ProblemText";

function Problem1(props) {
  const today = new Date();

  const todayYear = today.getFullYear().toString();
  const todayMonth = (today.getMonth() + 1).toString();
  const todayDay = today.getDate().toString();

  const [userInput, setUserInput] = useState({ year: "", month: "", day: "" });

  const [isCorrect, setIsCorret] = useState(false);

  const handleInputChange = (event) => {
    // target에서 name과 value 값을 받아오기
    const id = event.target.id;
    const value = event.target.value;

    // 얕은 복사 이후 올바른 key에 value 넣기
    setUserInput({ ...userInput, [id]: value });
    // setUserInput({ ...userInput, id: value }); // 처럼 쓰게 되면, id라는 새로운 키값을 만들게 된다
    console.log("userInput : ", userInput);
  };

  const checkDateMatch = () => {
    const userYear = userInput.year;
    const userMonth = userInput.month;
    const userDay = userInput.day;

    // console.log(typeof todayYear, todayYear, typeof userYear, userYear);
    if (
      userYear === todayYear &&
      userMonth === todayMonth &&
      userDay === todayDay
    ) {
      console.log("정답");
      setIsCorret(true);
    } else {
      console.log("오류");
      setIsCorret(false);
    }
  };

  return (
    <div className={styles.problem}>
      <ProblemText
        text="오늘의 날짜를 적고 날씨에 동그라미를 하세요."
        isCorrect={isCorrect}
      />
      <div className={styles.problemContainer}>
        <input id="year" value={userInput.year} onChange={handleInputChange} />
        년
        <input
          id="month"
          value={userInput.month}
          onChange={handleInputChange}
        />
        월
        <input id="day" value={userInput.day} onChange={handleInputChange} />일
        <button onClick={checkDateMatch}>날짜 확인</button>
      </div>
    </div>
  );
}

export default Problem1;
