import React, { useState } from "react";
import styles from "./styles/problem3.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import ToolTips from "../component/ToolTips";
// import Problem3ExampleText from "../component/Problem3ExampleText";

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
    "물파스",
    "아세톤",
    "밀가루",
    "고무줄",
    "눈",
    "고추",
    "양파",
    "올리브유",
    "칼",
  ];

  const handleInputChange = (event) => {
    const key = event.target.getAttribute("data-key");
    console.log("key", key);
    const useInputText = event.target.value;

    setUserInput({ ...userInput, [key]: useInputText });

    console.log("userInput", userInput);

    if (
      userInput[0] === blankAnswers[0] &&
      userInput[1] === blankAnswers[1] &&
      userInput[2] === blankAnswers[2] &&
      userInput[3] === blankAnswers[3] &&
      userInput[4] === blankAnswers[4] &&
      userInput[5] === blankAnswers[5] &&
      userInput[6] === blankAnswers[6] &&
      userInput[7] === blankAnswers[7] &&
      userInput[8] === blankAnswers[8]
    ) {
      console.log("정답!");
      setIsCorret(true);
    } else {
      console.log("땡!");
      setIsCorret(false);
    }
  };

  return (
    <>
      <ProblemContainer>
        <ProblemText
          text={`앞서 기억해 둔 <b style='color:red;'>생활정보</b>의 빈칸을 채워보세요.`}
          isCorrect={isCorrect}
        ></ProblemText>
        <div className={styles.exampleContainer}>
          <div className={styles.blankContainer}>
            <div> 옷에 묻은 볼펜 자국은</div>
            <input data-key="0" type="text" onChange={handleInputChange} />
            <div>나</div>
            <input data-key="1" type="text" onChange={handleInputChange} />
            <div>으로 지운다.</div>
          </div>
          <div className={styles.blankContainer}>
            <div> 바닥에 흘린 기름은</div>
            <input data-key="2" type="text" onChange={handleInputChange} />
            <div>를 뿌린 후 닦아낸다.</div>
          </div>
          <div className={styles.blankContainer}>
            <div> 잘 열리지 않는 병뚜껑은 뚜껑에 </div>
            <input data-key="3" type="text" onChange={handleInputChange} />
            <div>을 감싼 후 연다.</div>
          </div>
          <div className={styles.blankContainer}>
            <input data-key="4" type="text" onChange={handleInputChange} />
            <div>을 자극하는 채소(</div>
            <input data-key="5" type="text" onChange={handleInputChange} />
            <div>, </div>
            <input data-key="6" type="text" onChange={handleInputChange} />
            <div>) 는</div>
            <input data-key="7" type="text" onChange={handleInputChange} />
            <div>를 바른 후</div>
            <input data-key="8" type="text" onChange={handleInputChange} />
            <div>로 썬다.</div>
          </div>
        </div>
        <ToolTips text="<b style='color:red;'>생활정보</b>를 기억해 주세요."></ToolTips>
      </ProblemContainer>
    </>
  );
}

export default Problem3;
