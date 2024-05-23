import React from "react";
import styles from "./styles/problem3.module.css";
import ProblemText from "../component/ProblemText";
import Problem3ExampleText from "../component/Problem3ExampleText";
import ToolTips from "../component/ToolTips";

function Problem3(props) {
  return (
    <>
      <ProblemText
        text={`앞서 기억해 둔 <b style='color:red;'>생활정보</b>의 빈칸을 채워보세요.`}
      ></ProblemText>
      <div className={styles.exampleContainer}>
        <div className={styles.blankContainer}>
          <div> 옷에 묻은 볼펜 자국은</div>
          <input type="text" />
          <div>나</div>
          <input type="text" />
          <div>으로 지운다.</div>
        </div>
      </div>
      <ToolTips text="<b style='color:red;'>생활정보</b>를 기억해 주세요."></ToolTips>
    </>
  );
}

export default Problem3;
