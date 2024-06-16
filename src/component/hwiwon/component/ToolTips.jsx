import React from "react";
import styles from "./styles/ToolTips.module.css";
import check from "./imgs/check.png";

function ToolTips(props) {
  return (
    <div className={styles.ToolTipsContainer}>
      <img src={check} className={styles.ToolTipsIcon}></img>
      <div
        className={styles.toolTipsText}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
    </div>
  );
}

export default ToolTips;
