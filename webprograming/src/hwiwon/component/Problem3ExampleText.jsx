import React from "react";
import styles from "./styles/Problem3ExampleText.module.css";

function Problem3ExampleText(props) {
  return (
    <li
      className={styles.exampleContainer}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></li>
  );
}

export default Problem3ExampleText;
