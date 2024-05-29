import React from "react";
import styles from "./styles/ProblemTitle.module.css";
import flowerpot from "./imgs/flowerpot.png";

function ProblemTitle(props) {
  return (
    <div className={styles.TitieContainer}>
      <div className={styles.TitleText}>{props.text}</div>
      <img src={flowerpot} className={styles.TitleIcon}></img>
    </div>
  );
}

export default ProblemTitle;
