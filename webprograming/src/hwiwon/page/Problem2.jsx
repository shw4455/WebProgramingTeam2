import React, { useState, useEffect } from "react";
import styles from "./styles/problem2.module.css";
import ProblemText from "../component/ProblemText";
import clockImg from "./img/clock.jpg";

function Problem2(props) {
  const [selectedAMPM, setSelectedAMPM] = useState("am"); // 초기 상태 (오전)

  useEffect(() => {
    console.log("handleRadioChange, selectedAMPM :", selectedAMPM);

    // 선택된 라벨 찾기
    const selectedLabel = document.querySelector(
      `label[for="${selectedAMPM}"]`
    );
    console.log(selectedLabel);

    // 전체 selected-label 클래스 제거 (선택된 상태 유지를 위해 선택 해제 시 필요)
    const labels = document.querySelectorAll(`.${styles.ampmRadioLabel}`);
    console.log(labels);
    labels.forEach((label) =>
      label.classList.remove(styles.ampmRadioLabelSelected)
    );

    // 선택된 라벨에 클래스 추가
    if (selectedLabel) {
      selectedLabel.classList.add(styles.ampmRadioLabelSelected);
    }
  }, [selectedAMPM]);

  const handleRadioChange = (event) => {
    setSelectedAMPM(event.target.value);
  };

  return (
    <>
      <div id={styles.problemContainer}>
        <div id={styles.timeSelectContainer}>
          <div id={styles.ampmContainer}>
            <div id={styles.radioContainer}>
              <input
                id="am"
                className={styles.ampmRadioBtn}
                type="radio"
                name="ampm"
                value="am"
                checked={selectedAMPM === "am"}
                onChange={handleRadioChange}
              />
              <label htmlFor="am" className={styles.ampmRadioLabel}>
                오전
              </label>
              <input
                id="pm"
                className={styles.ampmRadioBtn}
                type="radio"
                name="ampm"
                value="pm"
                checked={selectedAMPM === "pm"}
                onChange={handleRadioChange}
              />
              <label htmlFor="pm" className={styles.ampmRadioLabel}>
                오후
              </label>
            </div>
          </div>
          <div id={styles.timeContainer}></div>
        </div>
        <img id={styles.timeImageContainer} src={clockImg} alt=""></img>
        <div id=""></div>
        <div id=""></div>
      </div>
    </>
  );
}

export default Problem2;
