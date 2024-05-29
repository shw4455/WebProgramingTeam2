import React from "react";
import styles from "./styles/problem3Example.module.css";
import ProblemText from "../component/ProblemText";
import Problem3ExampleText from "../component/Problem3ExampleText";
import ToolTips from "../component/ToolTips";
import ProblemContainer from "../component/ProblemContainer";
import ProblemTitle from "../component/ProblemTitle";

function Problem3Example(props) {
  return (
    <>
    
      <ProblemContainer>
      <ProblemTitle text="생활정보 기억하기"/>
        <ProblemText
          text={`다음은 알아두면 유용한 <b style='color:red;'>생활정보</b>입니다.
소리내어 읽어보세요.`}
        ></ProblemText>
        <div className={styles.exampleContainer}>
          <Problem3ExampleText text="옷에 묻은 볼펜자국은 <b>물파스</b>나 <b>아세톤</b>으로 지운다." />
          <Problem3ExampleText text="바닥에 흘린 기름은 <b>밀가루</b>를 뿌린 후 닦아낸다." />
          <Problem3ExampleText text="잘 열리지 않는 병뚜껑은 뚜껑에 <b>고무줄</b>을 감싼 후 연다." />
          <Problem3ExampleText text="<b>눈</b>을 자극하는 채소(<b>고추, 양파</b>)는 <b>올리브유</b>를 바른 <b>칼</b>로 썬다." />
        </div>
        <ToolTips text="<b style='color:red;'>생활정보</b>를 기억해 주세요."></ToolTips>
      </ProblemContainer>
    </>
  );
}

export default Problem3Example;
