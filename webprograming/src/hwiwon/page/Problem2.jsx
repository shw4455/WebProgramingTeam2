import React, { useState, useEffect } from "react";
import styles from "./styles/problem2.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import clockImg from "./img/clock.jpg";
import hArrowImg from "./img/hours-arrow.png";
import mArrowImg from "./img/minute-arrow.png";
import pivotMArrow from "./img/pivot-minute-arrow.png";
import pivotHArrow from "./img/pivot-hours-arrow.png";

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

  const [clockTime, setClockTime] = useState({ hours: "", minutes: "" });

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setClockTime({ ...clockTime, [id]: value });
    console.log("clockTime : ", clockTime);

    // console.log("todayHours", todayHours);
    // console.log("time.hours", time.hours);
    // console.log("todayMinutes", todayMinutes);
    // console.log("time.minutes", time.minutes);

    if (todayHours === clockTime.hours && todayMinutes === clockTime.minutes) {
      setIsCorret(true);
      // console.log("isCorrect", isCorrect);
    } else {
      setIsCorret(false);
      // console.log("isCorrect", isCorrect);
    }
  };

  const clockArrows = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  // const clockArrows = [];
  // for (let i = 0; i < 12; i++) {
  //   clockArrows.push({ id: i + 1 });
  // }

  const handleHArrowClicked = (event) => {
    const time = event.target.id;
    console.log("handleHArrowClicked time : ", time);

    setClockTime({ ...clockTime, hours: time });
    console.log("clockTime : ", clockTime);
  };

  const handleMArrowClicked = (event) => {
    const time = event.target.id * 5;
    console.log("handleMArrowClicked time : ", time);

    setClockTime({ ...clockTime, minutes: time });
    console.log("clockTime : ", clockTime);
  };
  return (
    <>
      <ProblemContainer>
        <ProblemText
          text="현재 시각을 적고, 오른쪽 시계 안에 <b style='color:red;'>시침</b>시침, <b style='color:red;'>분침</b>으로 시간을 그려보세요."
          isCorrect={isCorrect}
        ></ProblemText>
        <div id={styles.problemContainer}>
          <div id={styles.timeSelectAlignContainer}>
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
                <div>
                  <input
                    id="hours"
                    value={clockTime.hours}
                    onChange={handleInputChange}
                  />
                  시
                  <input
                    id="minutes"
                    value={clockTime.minutes}
                    onChange={handleInputChange}
                  />
                  분
                </div>
              </div>
              <div></div>
            </div>
            <div id={styles.timeImgContainer}>
              <img className={styles.arrowImg} src={hArrowImg}></img>
              <div className={styles.arrowText}>시침</div>
              <img className={styles.arrowImg} src={mArrowImg}></img>
              <div className={styles.arrowText}>분침</div>
            </div>
          </div>
          <div id={styles.timeImageContainer}>
            <img id={styles.timeImage} src={clockImg} alt=""></img>
            <div id={styles.clockPivot}>
              {clockArrows.map((arrow) => (
                <div
                  id={arrow.id}
                  className={styles.clockArrowContainer}
                  style={{
                    transform: `rotate(${arrow.id * 30}deg)`,
                  }}
                >
                  <img
                    id={arrow.id}
                    className={styles.clockMinuteArrow}
                    src={pivotMArrow}
                    onClick={handleMArrowClicked}
                  ></img>
                </div>
              ))}
              {clockArrows.map((arrow) => (
                <div
                  id={arrow.id}
                  className={styles.clockArrowContainer}
                  style={{
                    transform: `rotate(${arrow.id * 30}deg)`,
                  }}
                >
                  <img
                    id={arrow.id}
                    className={styles.clockHoursArrow}
                    src={pivotHArrow}
                    onClick={handleHArrowClicked}
                  ></img>
                </div>
              ))}
              {/* <div className={styles.clockArrowContainer}>
              <img className={styles.clockMinuteArrow} src={pivotMArrow}></img> */}
            </div>
          </div>
        </div>
      </ProblemContainer>
    </>
  );
}

export default Problem2;
