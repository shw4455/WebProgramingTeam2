import React, { useState } from "react";

const CoinNumber = () => {
  const [tenWon, setTenWon] = useState(0);
  const [fiftyWon, setFiftyWon] = useState("");
  const [hundredWon, setHundredWon] = useState("");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://media.istockphoto.com/id/1303051753/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-10%EC%9B%90-%EB%8F%99%EC%A0%84-%EB%B0%B1%EC%83%89-%EA%B3%A0%EB%A6%BD%EB%90%9C-%EB%B0%B0%EA%B2%BD.webp?b=1&s=170667a&w=0&k=20&c=RDs3QsGzJejl5wyWO_AOCUEV9byCO-8r5IEQ8SeJ13Y="
            style={{ width: 120, height: 100 }}
          ></img>
          <h2 style={{ display: "flex" }}>
            <input
              type="number"
              value={tenWon}
              onChange={(e) => setTenWon(e.target.value)}
              placeholder="개수 입력"
              style={{
                width: "100px",
                fontSize: "1.2rem",
                textAlign: "center",
                marginTop: "10px",
                border: "none",
              }}
            />
            개
          </h2>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1306995418/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-50%EC%9B%90-%EB%8F%99%EC%A0%84-%ED%95%98%EC%96%80-%EA%B3%A0%EB%A6%BD%EB%90%9C-%EB%B0%B0%EA%B2%BD.webp?b=1&s=170667a&w=0&k=20&c=VBIVDiUtj005q_MQYQuOdY2pbSPCVGcd-W6O9MmKUgo="
            style={{ width: 120, height: 95 }}
          ></img>
          <h2 style={{ display: "flex" }}>
            <input
              type="number"
              value={tenWon}
              onChange={(e) => setFiftyWon(e.target.value)}
              placeholder="개수 입력"
              style={{
                width: "100px",
                fontSize: "1.2rem",
                textAlign: "center",
                marginTop: "10px",
                border: "none",
              }}
            />
            개
          </h2>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1306349321/ko/%EC%82%AC%EC%A7%84/%EC%9C%A0%EA%B3%A0%EC%8A%AC%EB%9D%BC%EB%B9%84%EC%95%84-%EB%B0%B1-%EB%94%94%EB%82%98%EB%A5%B4-%EB%8F%99%EC%A0%84-%EC%97%90-%ED%9D%B0%EC%83%89-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%B0%EA%B2%BD.jpg?s=612x612&w=0&k=20&c=9K-IomhT_5BCpI2fLvz_Uxx6ACN0HMuZMTixkz2pMuo="
            style={{ width: 120, height: 95 }}
          ></img>
          <h2 style={{ display: "flex" }}>
            <input
              type="number"
              value={tenWon}
              onChange={(e) => setHundredWon(e.target.value)}
              placeholder="개수 입력"
              style={{
                width: "100px",
                fontSize: "1.2rem",
                textAlign: "center",
                marginTop: "10px",
                border: "none",
              }}
            />
            개
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CoinNumber;
