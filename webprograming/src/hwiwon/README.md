할 일
[x]
onClick = {() => handleWeatherClick(weather.id)}와
onClick = {handleWeatherClick(weather.id)}의 차이

onClick = {() => handleWeatherClick(weather.id)}의 경우
새로운 익명의 함수가 생성되고, 이 함수가 이벤트 핸들러로 전달
함수를 호출하는 형태가 아닌 함수 자체를 전달하여 원하는 시점에 실행되도록
매번 렌더링될 때마다 새로운 함수가 생성되기 때문에 상태나 프롭스의 변화에 영향을 받지 않고도 항상 최신 값을 유지

onClick = {handleWeatherClick(weather.id)}의 경우 반환값이 onClick으로 간다 => onClick이라는 상태값을 변환 => 무한 렌더링

그럼 onClick={handleWeatherClick}과 같은 방식은 안되는지?
=> 매개변수가 있는 함수는 onClick = {() => handleWeatherClick(weather.id)}처럼 해주면 된다

[] Problem2에서 const labels = document.querySelectorAll(".ampmRadioLabel");가 안되던 이유가 무엇인가

    const labels = document.querySelectorAll(".ampmRadioLabel");
    console.log(labels);
    labels.forEach((label) => label.classList.remove("ampmRadioLabelSelected"));

    는 안되고

    const labels = document.querySelectorAll(`.${styles.ampmRadioLabel}`);
    console.log(labels);
    labels.forEach((label) =>
      label.classList.remove(styles.ampmRadioLabelSelected)
    );
    는 된다

    먼저
    const labels = document.querySelectorAll(".ampmRadioLabel");
    const labels = document.querySelectorAll(`.${styles.ampmRadioLabel}`);
    위에 처럼 구현하면, ampmRadioLabel 자체로 입력이 되고
    아래처럼 구현하면, ampmRadioLabel__xxxxx의 형태로 입력되게 된다

    css.module을 사용하면 styles.className이 className__xxxxx으로 변환되는데

    그 상태에서 document.querySelectorAll(".ampmRadioLabel");로 해주니까 className__xxxxx이 아닌, className으로 입력되서 매핑이 안되었던 것

    document.querySelectorAll(`.${styles.ampmRadioLabel}`);으로 입력하면 className__xxxxx으로 변환되어 입력되어 돌아가는 것


[] spread syntax

해보고 싶은 것
[] ProblemText.jsx > isCorrect 클래스 > width, height, top, left를 CSS 변수를 사용해서 수정하기 좋게 변경하기

[] min-width를 주어, UI 깨짐을 방지
