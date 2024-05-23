import React from "react";
import styles from "./styles/ProblemText.module.css";

function ProblemText(props) {
  return (
    <>
      <div className={styles.problemTextContainer}>
        <div>
          {props.isCorrect ? <div className={styles.isCorrect}></div> : ""}
          {props.isCorrect ? console.log(props.isCorrect) : ""}
        </div>
        <pre
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></pre>
      </div>
    </>
  );
}

export default ProblemText;
