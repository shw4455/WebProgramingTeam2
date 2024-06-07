import React from "react";
import VegetableGrid from "./VegetableGrid";

const A_Stage_3_31 = () => {
  // 1. 제목 및 소제목 넣기
  // 2. 해당 문제 안에 배추 그림 넣기
  // 3. 열맞춰서 박스 안에 그림 그려넣기
  return (
    <div>
      <div className="maintitle-container" style={{ marginBottom: "100px" }}>
        <div style={{ display: "flex" }}>
          <img
            src="https://media.istockphoto.com/id/1560187332/ko/%EC%82%AC%EC%A7%84/%EA%BD%83-%EB%83%84%EB%B9%84%EC%97%90-%EB%82%98%EB%AD%87%EC%9E%8E%EA%B3%BC-%EC%8B%9D%EB%AC%BC-%EC%A0%95%EC%9B%90-%EA%B0%80%EA%BE%B8%EA%B8%B0-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4-3d-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%A7%8C%ED%99%94-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A7%91-%EC%8B%9D%EB%AC%BC-%EC%8B%A4%EB%82%B4-%EC%8B%9D%EB%AC%BC-3d-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=2DfzIZ39pAOQa_jJ88W-UNptsG5gQv4yR8NKJ9SNFL0="
            width={60}
            height={60}
          ></img>
          <h2 style={{ backgroundColor: "beige" }}>
            쌈 채소 기억하기
          </h2>
        </div>
        <h1
          style={{
            marginLeft: "50px",
            fontWeight: "lighter",
            fontSize: "28px",
          }}
        >
          다음 쌈채소들 중 '적'색 쌈채소에는 동그라미 표시를 하고, '청'색 쌈채소에는 세모 표시를 하세요.
          또, 앞서 기억해 둔 쌈채소세에는 네모 표시를 하세요.
        </h1>
      </div>
      <div>
        <VegetableGrid />
      </div>
    </div>
  );
};

export default A_Stage_3_31;
