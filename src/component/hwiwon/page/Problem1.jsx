import React, { useEffect, useState } from "react";
import styles from "./styles/problem1.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";

function Problem1(props) {
  const today = new Date();

  const todayYear = today.getFullYear().toString();
  const todayMonth = (today.getMonth() + 1).toString();
  const todayDay = today.getDate().toString();

  console.log("todayYear, Month, Day : ", todayYear, todayMonth, todayDay);

  const [userInput, setUserInput] = useState({ year: "", month: "", day: "" });

  const [isCorrect, setIsCorret] = useState(false);

  useEffect(() => {
    checkDateMatch();
  }, [userInput]);

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log("value : ", value);

    setUserInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log("userInput : ", userInput);
  };

  const checkDateMatch = () => {
    const userYear = userInput.year;
    const userMonth = userInput.month;
    const userDay = userInput.day;

    if (
      userYear === todayYear &&
      userMonth === todayMonth &&
      userDay === todayDay
    ) {
      setIsCorret(true);
    } else {
      setIsCorret(false);
    }
  };

  return (
    <ProblemContainer>
      <div className={styles.problem}>
        <ProblemText
          text="오늘의 날짜를 적고 날씨에 동그라미를 하세요."
          isCorrect={isCorrect}
        />
        <div className={styles.problemContainer}>
          <input
            className={styles.input}
            id="year"
            value={userInput.year}
            onChange={handleInputChange}
          />
          년
          <input
            className={styles.input}
            id="month"
            value={userInput.month}
            onChange={handleInputChange}
          />
          월
          <input
            className={styles.input}
            id="day"
            value={userInput.day}
            onChange={handleInputChange}
          />
          일
        </div>
      </div>
    </ProblemContainer>
  );
}

export default Problem1;
