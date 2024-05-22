import React from "react";
import styles from "./styles/ProblemText.module.css";

function ProblemText(props) {
  return (
    <div className={styles.text}>
      {props.text}

      {props.isCorrect ? <div className={styles.isCorrect}></div> : ""}
      {props.isCorrect ? console.log(props.isCorrect) : ""}
    </div>
  );
}

export default ProblemText;
