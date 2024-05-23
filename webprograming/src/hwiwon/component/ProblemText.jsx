import React from "react";
import styles from "./styles/ProblemText.module.css";

function ProblemText(props) {
  return (
    <>
      <pre
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></pre>
      <div>
        {props.isCorrect ? <div className={styles.isCorrect}></div> : ""}
        {props.isCorrect ? console.log(props.isCorrect) : ""}
      </div>
    </>
  );
}

export default ProblemText;
