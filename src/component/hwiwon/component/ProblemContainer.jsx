import React from "react";
import styles from "./styles/ProblemContainer.module.css";

function ProblemContainer(props) {
  return <div className={styles.ProblemContainer}>{props.children}</div>;
}

export default ProblemContainer;
