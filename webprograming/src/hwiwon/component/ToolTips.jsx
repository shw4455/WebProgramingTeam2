import React from "react";
import styles from "./styles/ToolTips.module.css";

function ToolTips(props) {
  return <div  className={styles.toolTipsText} dangerouslySetInnerHTML={{ __html: props.text }}></div>;
}

export default ToolTips;
