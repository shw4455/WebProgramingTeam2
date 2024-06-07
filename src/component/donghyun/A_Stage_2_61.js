import React from "react";
import CoinNumber from "./CoinNumber";

const A_Stage_2_61 = () => {
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
            주어진 동전으로 금액 만들기
          </h2>
        </div>
        <h1
          style={{
            marginLeft: "50px",
            fontWeight: "lighter",
            fontSize: "32px",
          }}
        >
          '10원, 50원, 100원' 동전을 이용하여 제시된 금액이 되려면 각각 몇 개씩
          필요한지 적어보세요.
        </h1>
      </div>

      <div>
        <div>
          <div style={{display: "flex", marginLeft:"50px"}}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FQgtslJsa3BcsZMe9NpBCgjrfKKuzVLUUw&s"
            style={{width:30, height:30, marginTop:"20px"}}
            ></img>
            <h2>동전 11개로 530원 만들기</h2>
          </div>
            <CoinNumber />
        </div>
        <div>
          <div style={{display: "flex", marginLeft:"50px"}}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FQgtslJsa3BcsZMe9NpBCgjrfKKuzVLUUw&s"
            style={{width:30, height:30, marginTop:"20px"}}
            ></img>
            <h2>동전 9개로 620원 만들기</h2>
          </div>
            <CoinNumber />
        </div>
        <div>
          <div style={{display: "flex", marginLeft:"50px"}}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FQgtslJsa3BcsZMe9NpBCgjrfKKuzVLUUw&s"
            style={{width:30, height:30, marginTop:"20px"}}
            ></img>
            <h2>동전 7개로 200원 만들기</h2>
          </div>
            <CoinNumber />
        </div>
        <div>
          <div style={{display: "flex", marginLeft:"50px"}}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FQgtslJsa3BcsZMe9NpBCgjrfKKuzVLUUw&s"
            style={{width:30, height:30, marginTop:"20px"}}
            ></img>
            <h2>동전 10개로 510원 만들기</h2>
          </div>
            <CoinNumber />
        </div>
      </div>
    </div>
  );
};

export default A_Stage_2_61;
