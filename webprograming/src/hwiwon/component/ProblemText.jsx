import React from "react";
import styles from "./styles/ProblemText.module.css";

function ProblemText(props) {
  return (
    <pre className={styles.text}>
      {props.text}

      {props.isCorrect ? <div className={styles.isCorrect}></div> : ""}
      {props.isCorrect ? console.log(props.isCorrect) : ""}
    </pre>
  );
}

export default ProblemText;
