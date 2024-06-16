import React, { useEffect, useState } from "react";
import styles from "./styles/problem3.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import ToolTips from "../component/ToolTips";
import ProblemTitle from "../component/ProblemTitle";

function Problem3(props) {
  const [isCorrect, setIsCorret] = useState(false);

  const [userInput, setUserInput] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const blankAnswers = [
    ["물파스", 3],
    ["아세톤", 3],
    ["밀가루", 3],
    ["고무줄", 3],
    ["눈", 1],
    ["고추", 2],
    ["양파", 2],
    ["올리브유", 4],
    ["칼", 1],
  ];

  console.log(
    "blankAnswers : ",
    blankAnswers[0][0],
    blankAnswers[1][0],
    blankAnswers[2][0],
    blankAnswers[3][0],
    blankAnswers[4][0],
    blankAnswers[5][0],
    blankAnswers[6][0],
    blankAnswers[7][0],
    blankAnswers[8][0]
  );

  const handleInputChange = (event) => {
    const key = event.target.getAttribute("data-key");
    const useInputText = event.target.value;

    setUserInput({ ...userInput, [key]: useInputText });
  };

  const checkDataMatch = () => {
    if (
      userInput[0] === blankAnswers[0][0] &&
      userInput[1] === blankAnswers[1][0] &&
      userInput[2] === blankAnswers[2][0] &&
      userInput[3] === blankAnswers[3][0] &&
      userInput[4] === blankAnswers[4][0] &&
      userInput[5] === blankAnswers[5][0] &&
      userInput[6] === blankAnswers[6][0] &&
      userInput[7] === blankAnswers[7][0] &&
      userInput[8] === blankAnswers[8][0]
    ) {
      setIsCorret(true);
    } else {
      setIsCorret(false);
    }
  };

  useEffect(() => {
    checkDataMatch();
  }, [userInput]);
  return (
    <>
      <ProblemContainer>
        <ProblemTitle text="생활정보 기억하기" />
        <ProblemText
          text={`앞서 기억해 둔 <b style='color:red;'>생활정보</b>의 빈칸을 채워보세요.`}
          isCorrect={isCorrect}
        ></ProblemText>
        <div className={styles.exampleContainer}>
          <div className={styles.blankContainer}>
            <div> 옷에 묻은 볼펜 자국은</div>
            <input
              className={styles.input}
              data-key="0"
              style={{ width: `${blankAnswers[0][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>나</div>
            <input
              className={styles.input}
              data-key="1"
              type="text"
              style={{ width: `${blankAnswers[1][1]}rem` }}
              onChange={handleInputChange}
            />
            <div>으로 지운다.</div>
          </div>
          <div className={styles.blankContainer}>
            <div> 바닥에 흘린 기름은</div>
            <input
              className={styles.input}
              data-key="2"
              style={{ width: `${blankAnswers[2][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>를 뿌린 후 닦아낸다.</div>
          </div>
          <div className={styles.blankContainer}>
            <div> 잘 열리지 않는 병뚜껑은 뚜껑에 </div>
            <input
              className={styles.input}
              data-key="3"
              style={{ width: `${blankAnswers[3][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>을 감싼 후 연다.</div>
          </div>
          <div className={styles.blankContainer}>
            <input
              className={styles.input}
              data-key="4"
              style={{ width: `${blankAnswers[4][1]}rem ` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>을 자극하는 채소(</div>
            <input
              className={styles.input}
              data-key="5"
              style={{ width: `${blankAnswers[5][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>, </div>
            <input
              className={styles.input}
              data-key="6"
              style={{ width: `${blankAnswers[6][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>) 는 </div>
            <input
              className={styles.input}
              data-key="7"
              style={{ width: `${blankAnswers[7][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <div>를 바른 후</div>
            <input
              className={styles.input}
              data-key="8"
              style={{ width: `${blankAnswers[8][1]}rem` }}
              type="text"
              onChange={handleInputChange}
            />
            <>로 썬다.</>
          </div>
        </div>
        <ToolTips text="<b style='color:red;'>생활정보</b>를 기억해 주세요."></ToolTips>
      </ProblemContainer>
    </>
  );
}

export default Problem3;
