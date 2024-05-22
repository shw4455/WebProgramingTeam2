import React, { useState, useEffect } from "react";
import styles from "./styles/problem2.module.css";
import ProblemText from "../component/ProblemText";
import clockImg from "./img/clock.jpg";

function Problem2(props) {
  const [isCorrect, setIsCorret] = useState(false);

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

  const today = new Date();

  const todayHours = today.getHours().toString();
  const todayMinutes = today.getMinutes().toString();

  const [time, setTime] = useState({ hours: "", minutes: "" });

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setTime({ ...time, [id]: value });
    console.log("time : ", time);

    // console.log("todayHours", todayHours);
    // console.log("time.hours", time.hours);
    // console.log("todayMinutes", todayMinutes);
    // console.log("time.minutes", time.minutes);

    if (todayHours === time.hours && todayMinutes === time.minutes) {
      setIsCorret(true);
      // console.log("isCorrect", isCorrect);
    } else {
      setIsCorret(false);
      // console.log("isCorrect", isCorrect);
    }
  };

  return (
    <>
      <ProblemText
        text="현재 시각을 적고, 오른쪽 시계 안에 시침, 분침으로 시간을 그려보세요"
        isCorrect={isCorrect}
      ></ProblemText>
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
              <label for="am" className={styles.ampmRadioLabel}>
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
              <label for="pm" className={styles.ampmRadioLabel}>
                오후
              </label>
            </div>
          </div>
          <div id={styles.timeContainer}>
            <div id={styles.timeAlignContainer}>
              <input
                id="hours"
                value={time.hours}
                onChange={handleInputChange}
              />
              시
              <input
                id="minutes"
                value={time.minutes}
                onChange={handleInputChange}
              />
              분
            </div>
          </div>
        </div>
        <img id={styles.timeImageContainer} src={clockImg} alt=""></img>
        <div id=""></div>
        <div id=""></div>
      </div>
    </>
  );
}

export default Problem2;
