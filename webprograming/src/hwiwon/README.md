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

[x] 컴포넌트 사이에 요소 넣는 법
<ProblemContainer>

  <!-- 다른 컴포넌트 -->
</ProblemContainer>

function ProblemContainer(props) {
return (

 <div>
{props.children}
</div>
)
}
처럼 해주면 된다

[x] span 태그는 기본적으로 인라인 요소이기에 margin 속성을 사용할 수 없다

- 그 외 안되는 속성은?

[] <input key="1" type="text" />처럼, key를 통해, event.target.key를 통한 접근은 불가능한지
[] key와 id, name의 차이
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

[] CSSS 파일 이름 맞춰주기

[] 함수 안과 바깥에 선언하는것 어떤 차이가 있는가

해보고 싶은 것
[] ProblemText.jsx > isCorrect 클래스 > width, height, top, left를 CSS 변수를 사용해서 수정하기 좋게 변경하기

[] 43bc997ff57031d7b4ddf5eeac8b09e72dba6db8 커밋, 커밋 이름, 시침 분침 이미지 생성으로
커밋 명 변경하기

[] https://velog.io/@wonder1247/inline%EC%9A%94%EC%86%8C%EC%99%80-block%EC%9A%94%EC%86%8C%EC%97%90-margin-%EC%A0%81%EC%9A%A9#%EB%B8%94%EB%A1%9D%EC%9A%94%EC%86%8C%EC%9D%98-%EB%A7%88%EC%A7%84%EC%83%81%EC%87%84margin-collapsing

[] css.module에서는 > 등과 같은 결합자 사용이 안된다

개선 방안
[x] min-width를 주어, UI 깨짐을 방지
[] ampmContainer 내부에 display grid 요소를 추가해서 UI 개선
[x] input 입력시 스페이스바 불러야 상태가 입력되는 현상
리액트의 비동기 동작으로 인한 현상
useEffect로 의존성 변수를 두고, 이후 정답체크를 해주면 된다

[] iscorrect useState 이외에 다른 방법으로 구현 > 정답 이후, iscorrect 상태 변경으로 인한, 정답 초기화(리렌더링)

[] blank 입력칸의 크기를 지정할 수 있도록
어디부터 다시 시작을 해야하나

[x] 시계 클릭하고 나면, 선택된 요소는 남아있도록
처음에는 useEffect를 사용해서 만들어주려고 했으나
과도한 사용 및 가독성 저하 때문에 다른 방법을 생각해 보다가
잘 안되어서 useEffect로 다시 만들게 되었고
자바 스크립트 코드를 이용해서 인라인 스타일을 직접적으로 바꿔주게 되면
css hover 기능과 충돌하여 올바르게 동작하지 않았기 때문에
인라인 스타일을 변경해 주는 대신 csx 스타일 클래스를 추가하고 삭제해 주는 방식으로 구현했다

1. inline 요소는 margin, top, bottom이 적용되지 않는다

[] width: auto가 적용되지 않은 이유
https://yeko90.tistory.com/entry/css-%EA%B8%B0%EC%B4%88-width-auto-%EC%99%80-width-100-%EC%B0%A8%EC%9D%B4

오류
[x] console.log가 2번 출력 되는 것
strictmode가 검사를 위해 2번 렌더링 하기 때문, 지워주면 해결된다
