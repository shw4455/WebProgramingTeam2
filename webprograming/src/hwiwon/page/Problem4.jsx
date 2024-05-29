import React, { useState } from "react";
// import styles from "./styles/Problem4.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import ToolTips from "../component/ToolTips";
import ProblemTitle from "../component/ProblemTitle";
import styles from "./styles/problem4.module.css";

function Problem4(props) {
  return (
    <ProblemContainer>
      <ProblemTitle text="생활정보 기억하기" />
      <div className={styles.ImgContainer}></div>
      <div>
        <div className={styles.BlankContainer}>
          1. 닭 :
          <input
          
            // id="year"
            // value={userInput.year}
            // onChange={handleInputChange}
          />개
          2. 안경 :
          <input
            // id="year"
            // value={userInput.year}
            // onChange={handleInputChange}
          />개
          3. 자전거 :
          <input
            // id="year"
            // value={userInput.year}
            // onChange={handleInputChange}
          />개
        </div>
      </div>
    </ProblemContainer>
  );
}

export default Problem4;
