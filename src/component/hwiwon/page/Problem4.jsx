import React, { useEffect, useState } from "react";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import ToolTips from "../component/ToolTips";
import ProblemTitle from "../component/ProblemTitle";
import styles from "./styles/problem4.module.css";
import chickenImg from "./img/chicken.png";
import bicycleImg from "./img/bicycle.png";
import glassesImg from "./img/glasses.png";

function Problem4(props) {
  const [isCorrect, setIsCorret] = useState(false);

  function generateRandomArray(length, maxValue) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * maxValue) + 1);
    }
    return array;
  }

  function countNumbers(array) {
    const counts = {};
    for (const num of array) {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
    return counts;
  }

  const [userInput, setUserInput] = useState({
    chicken: 0,
    glasses: 0,
    bicycle: 0,
  });

  // var userInput = {
  //   chicken: 0,
  //   glasses: 0,
  //   bicycle: 0,
  // };

  const handleInputChange = (event) => {
    const id = event.target.id;
    // const value = event.target.value.parseInt();
    const value = parseInt(event.target.value);
    // const valueInt = value.parseInt(value);

    setUserInput({ ...userInput, [id]: value });

    checkDataMatch();
  };

  const checkDataMatch = () => {
    const chicken = imgAnswers["1"];
    const glasses = imgAnswers["2"];
    const bicycle = imgAnswers["3"];

    // console.log('imgAnswers["1"]) :', typeof imgAnswers["1"]);
    // console.log('imgAnswers["2"]) :', typeof imgAnswers["2"]);
    // console.log('imgAnswers["3"]) :', typeof imgAnswers["3"]);

    // console.log("userInput.chicken : ", typeof userInput.chicken);
    // console.log("userInput.glasses : ", typeof userInput.glasses);
    // console.log("userInput.bicycle : ", typeof userInput.bicycle);

    if (
      chicken === userInput.chicken &&
      glasses === userInput.glasses &&
      bicycle === userInput.bicycle
    ) {
      setIsCorret(true);
    } else {
      setIsCorret(false);
    }
  };

  // useEffect(() => {
  //   console.log("컴포넌트 리렌더링");
  // });

  const [imgNumbers, setImgNumbers] = useState(generateRandomArray(16, 3));

  // useState를 사용함으로서 정답을 고정
  const [imgAnswers, setImgAnswers] = useState(countNumbers(imgNumbers));

  console.log("imgAnswers : ", imgAnswers);

  useEffect(() => {
    checkDataMatch();
  }, [userInput]);

  return (
    <ProblemContainer>
      <ProblemTitle text="모양 개수 세기" />
      <ProblemText
        text="다음의 여러 가지 모양들 중, 각 모양의 개수를 세어 적어보세요."
        isCorrect={isCorrect}
      />
      <div className={styles.ImgContainer}>
        <section className={styles.gallery}>
          <ul className={styles.galleryUl}>
            <li className={styles.galleryLl}>
              {imgNumbers.map((index) => {
                if (index === 1) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={chickenImg}
                      alt="img"
                    ></img>
                  );
                } else if (index === 2) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={bicycleImg}
                      alt="img"
                    ></img>
                  );
                } else if (index === 3) {
                  return (
                    <img
                      className={styles.galleryImg}
                      src={glassesImg}
                      alt="img"
                    ></img>
                  );
                }
              })}
            </li>
          </ul>
        </section>
      </div>
      <div>
        <div className={styles.BlankContainer}>
          1. 닭 :
          <input
            className={styles.blank}
            id="chicken"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개 2. 안경 :
          <input
            className={styles.blank}
            id="glasses"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개 3. 자전거 :
          <input
            className={styles.blank}
            id="bicycle"
            value={userInput.year}
            onChange={handleInputChange}
          />
          개
        </div>
      </div>
    </ProblemContainer>
  );
}

export default Problem4;
