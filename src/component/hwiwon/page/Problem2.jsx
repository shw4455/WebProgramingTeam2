import React, { useState, useEffect } from "react";
import styles from "./styles/problem2.module.css";
import ProblemText from "../component/ProblemText";
import ProblemContainer from "../component/ProblemContainer";
import clockImg from "./img/clock.jpg";
import hArrowImg from "./img/hours-arrow.png";
import mArrowImg from "./img/minute-arrow.png";
import pivotMArrow from "./img/pivot-minute-arrow.png";
import pivotHArrow from "./img/pivot-hours-arrow.png";
import ProblemTitle from "../component/ProblemTitle";

function Problem2(props) {
  const [isCorrect, setIsCorret] = useState(false);

  const [selectedAMPM, setSelectedAMPM] = useState("am");

  useEffect(() => {
    const selectedLabel = document.querySelector(
      `label[for ="${selectedAMPM}"]`
    );
    console.log("selectedLabel : ", selectedLabel);
    const labels = document.querySelectorAll(`.${styles.ampmRadioLabel}`);
    labels.forEach((label) =>
      label.classList.remove(styles.ampmRadioLabelSelected)
    );

    console.log("labels : ", labels);
    console.log("selectedAMPM : ", selectedAMPM);

    if (selectedLabel) {
      selectedLabel.classList.add(styles.ampmRadioLabelSelected);
    }
  }, [selectedAMPM]);

  const handleRadioChange = (event) => {
    setSelectedAMPM(event.target.value);

    console.log("event.target : ", event.target);
  };

  const today = new Date();

  const todayHours = today.getHours().toString();
  const todayMinutes = today.getMinutes().toString();

  console.log("todayHours, Minutes : ", todayHours, todayMinutes);

  const [clockTime, setClockTime] = useState({ hours: "", minutes: "" });

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setClockTime({ ...clockTime, [id]: value });

    if (todayHours === clockTime.hours && todayMinutes === clockTime.minutes) {
      setIsCorret(true);
    } else {
      setIsCorret(false);
    }
  };

  const clockHArrows = [
    { id: 12 },
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

  const clockMArrows = [
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

  const [prevHArrow, setPrevHArrow] = useState(null);
  const [currHArrow, setCurrHArrow] = useState(null);

  const handleHArrowClicked = (event) => {
    const time = event.target.id;
    const newCurrHArrow = event.target;
    console.log("prevHArrow : ", prevHArrow);
    console.log("currHArrow : ", currHArrow);
    if (prevHArrow) {
      prevHArrow.classList.remove(styles.show);
    }

    newCurrHArrow.classList.add(styles.show);

    setClockTime({ ...clockTime, hours: time });
    setPrevHArrow(currHArrow);
    setCurrHArrow(newCurrHArrow);
  };

  useEffect(() => {
    if (prevHArrow) {
      prevHArrow.classList.remove(styles.show);
    }
  }, [prevHArrow]);

  const [prevMArrow, setPrevMArrow] = useState(null);
  const [currMArrow, setCurrMArrow] = useState(null);

  const handleMArrowClicked = (event) => {
    const time = event.target.id * 5;
    const newCurrMArrow = event.target;
    console.log("prevMArrow : ", prevMArrow);
    console.log("currMArrow : ", currMArrow);

    newCurrMArrow.classList.add(styles.show);

    // 상태값 업데이트
    setClockTime({ ...clockTime, minutes: time });
    setPrevMArrow(currMArrow);
    setCurrMArrow(newCurrMArrow);

    if (prevMArrow) {
      prevMArrow.classList.remove(styles.show);
    }
  };

  useEffect(() => {
    if (prevMArrow) {
      prevMArrow.classList.remove(styles.show);
    }
  }, [prevMArrow]);

  return (
    <>
      <ProblemContainer>
        <ProblemText
          text="현재 시각을 적고, 오른쪽 시계 안에 <b style='color:red;'>시침</b>, <b style='color:red;'>분침</b>으로 시간을 그려보세요."
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
                  <label for="pm" className={styles.ampmRadioLabel}>
                    오후
                  </label>
                </div>
              </div>
              <div id={styles.timeContainer}>
                <div>
                  <input
                    className={styles.input}
                    id="hours"
                    value={clockTime.hours}
                    onChange={handleInputChange}
                  />
                  시
                  <input
                    className={styles.input}
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
              {clockMArrows.map((arrow) => (
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
              {clockHArrows.map((arrow) => (
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
            </div>
          </div>
        </div>
      </ProblemContainer>
    </>
  );
}

export default Problem2;
