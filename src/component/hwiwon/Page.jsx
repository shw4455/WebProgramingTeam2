import React from "react";
import styles from "./page/styles/globalStyles.module.css";
import Problem1 from "./page/Problem1.jsx";
import Problem2 from "./page/Problem2.jsx";
import Problem3Example from "./page/Problem3Example.jsx";
import Problem3 from "./page/Problem3.jsx";
import Problem4 from "./page/Problem4.jsx";
import ProblemContainer from "./page/ProblemContainer.jsx";

function Page() {
  return (
    <div className="App">
      <ProblemContainer>
        <Problem1></Problem1>
        <Problem2></Problem2>
        <Problem3Example></Problem3Example>
        <Problem3></Problem3>
        <Problem4></Problem4>
      </ProblemContainer>
    </div>
  );
}

export default Page;
