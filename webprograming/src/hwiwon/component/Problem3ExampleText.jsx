import React from "react";
import styles from "./styles/Problem3ExampleText.module.css";

function Problem3ExampleText(props) {
  return (
    <div
      className={styles.exampleContainer}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
}

export default Problem3ExampleText;
