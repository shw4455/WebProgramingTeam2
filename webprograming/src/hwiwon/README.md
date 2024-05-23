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

[x] Problem2에서 const labels = document.querySelectorAll(".ampmRadioLabel");가 안되던 이유가 무엇인가

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

[x] dangerouslySetInnerHTML을 사용한 방법
이 방법은 XSS(교차 사이트 스크립팅) 공격에 취약할 수 있으므로, 입력 데이터가 신뢰할 수 있는 경우에만 사용하는 것이 좋습니다.

=> 안전한가?, 정적이고, 사용자가 설정할 수 없는데 안전하지않을까
[] array.map
아래 코드가 안되는 이유 => JSX를 반환하는 부분이 없기 때문에
{clockArrows.map((arrow) => {

<div>{arrow.id}</div>;
})}

return을 넣어주거나
{clockArrows.map((arrow) => {
return <div>{arrow.id}</div>;
})}
key를 지정해주거나
{clockArrows.map((arrow) => (

<div key={arrow.id}>{arrow.id}</div>
))}

React에서 JSX 코드를 작성할 때는 블록 안에 있는 표현식을 반환하지 않아도 됩니다

[] array, object 관련 함수 한 번 훑기
[] spread syntax?

해보고 싶은 것
[] ProblemText.jsx > isCorrect 클래스 > width, height, top, left를 CSS 변수를 사용해서 수정하기 좋게 변경하기

[] 43bc997ff57031d7b4ddf5eeac8b09e72dba6db8 커밋, 커밋 이름, 시침 분침 이미지 생성으로
커밋 명 변경하기

개선 방안
[] min-width를 주어, UI 깨짐을 방지
[] ampmContainer 내부에 display grid 요소를 추가해서 UI 개선

어디부터 다시 시작을 해야하나
[] CSS의 position: absolute 배치 기준
position: absolute 속성은 CSS에서 요소를 일반 문서 흐름에서 제거하고 가장 가까운 위치 조상(position이 static이 아닌 부모 요소)에 상대적으로 위치시킵니다
이에 대한 테스트 및 이해
