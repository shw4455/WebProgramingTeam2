import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const images = [
  "https://media.istockphoto.com/id/183326451/ko/%EC%82%AC%EC%A7%84/savoy-%EC%96%91%EB%B0%B0%EC%B6%94.webp?b=1&s=170667a&w=0&k=20&c=ywYg6qLKvxevN4IhksEK4QlfATbvu1EPkAry04RyEDs=",
  "https://media.istockphoto.com/id/136540710/ko/%EC%82%AC%EC%A7%84/%EC%A0%81%EC%96%91%EB%B0%B0%EC%B6%94.webp?b=1&s=170667a&w=0&k=20&c=6SFzL-x_q5JkkYv-XS2S76qA6pfflRW59KSbQE8_sU8=",
  "https://media.istockphoto.com/id/624925456/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EC%96%91%EB%B0%B0%EC%B6%94-%ED%9D%B0%EC%83%89-%EB%B0%94%ED%83%95%EC%97%90-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD.webp?b=1&s=170667a&w=0&k=20&c=y2OeRxsQm4HTEcOXRbVtXUj6DleqpUhinodhPQdPxws=",
  "https://media.istockphoto.com/id/153491286/ko/%EC%82%AC%EC%A7%84/%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%83%81%EC%B6%94%EA%B0%80.webp?b=1&s=170667a&w=0&k=20&c=spychF5abVtHDk0MCvTspvto0peq5zWQxhsbF_OQUQQ=",
  "https://media.istockphoto.com/id/183373912/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EC%83%81%EC%B6%94%EA%B0%80-%EC%9E%8E.webp?b=1&s=170667a&w=0&k=20&c=gJ-pIVFHPedLtn4ifnZ7iWN8t-EC5IgJuLfXO3KFnEU=",
  "https://media.istockphoto.com/id/1251650095/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%93%9C-%EC%83%90%EB%9F%AC%EB%93%9C-%EC%96%91%EC%83%81%EC%B6%94.webp?b=1&s=170667a&w=0&k=20&c=XCV0oIHmscCVly4mjjR9oRhdlrbbVvgFxEcxgviOqQc=",
  "https://media.istockphoto.com/id/1620074979/ko/%EC%82%AC%EC%A7%84/%EB%B3%B4%EB%9D%BC%EC%83%89-%EB%B0%B0%EC%B6%94%EB%8A%94-%ED%9D%B0%EC%83%89-%EB%B0%94%ED%83%95%EC%97%90-%EB%B6%84%EB%A6%AC%EB%90%98%EC%96%B4-%EC%9E%88%EB%8B%A4.webp?b=1&s=170667a&w=0&k=20&c=0Z2Xnnb5H7kGFM3YJ23eWg5K9NR0nsSz47TAcd2VVgs=",
  "https://media.istockphoto.com/id/154959876/ko/%EC%82%AC%EC%A7%84/%EB%B9%84%ED%8A%B8%EC%99%80-%EB%AC%B4%EC%9A%B0-%EC%83%90%EB%9F%AC%EB%93%9C.jpg?s=612x612&w=0&k=20&c=x2u744-YKm1fcILqeTk5PALTzPjKEE8A2pOUXiiY0ug=",
  "https://media.istockphoto.com/id/512209486/ko/%EC%82%AC%EC%A7%84/escarole-%EC%97%94%EB%8B%A4%EC%9D%B4%EB%B8%8C.webp?b=1&s=170667a&w=0&k=20&c=qyeo-kkyXyJOGTlLnhCsIGGwE02zvLg8G_fgloP30uQ=",
  "https://media.istockphoto.com/id/121308630/ko/%EC%82%AC%EC%A7%84/%EC%9D%B4%ED%83%88%EB%A6%AC%EC%96%B4%EC%96%B4-%EB%A0%88%EB%94%94%EC%B9%98%EC%98%A4.webp?b=1&s=170667a&w=0&k=20&c=TACrqr9XPhe9NQORBR052WEUiLDmrIYY_rjL7ndvJPg=",
  "https://media.istockphoto.com/id/1492106890/ko/%EC%82%AC%EC%A7%84/%EA%B1%B4%EA%B0%95%ED%95%9C-%EC%8B%9D%EB%8B%A8%EC%9D%98-%ED%95%84%EC%88%98-%EC%95%BC%EC%B1%84%EB%A1%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%EC%A1%B0%EB%A6%AC-%EC%9E%AC%EB%A3%8C-%EB%A1%9C%EB%A9%94%EC%9D%B8%EA%B3%BC-%ED%94%84%EB%A6%B4%EC%95%84%EC%9D%B4%EC%8A%A4.webp?b=1&s=170667a&w=0&k=20&c=vttUBD5FFhEL_baVsn5l5XLtry0L7vF-21J8lR5VLCk=",
  "https://media.istockphoto.com/id/584879308/ko/%EC%82%AC%EC%A7%84/%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%BC%80%EC%9D%BC.webp?b=1&s=170667a&w=0&k=20&c=BJXmWpRZwY_eXBNyGBHa6Urqh6jOrpTxOVNaWjZflhE=",
];

const VegetableGrid = () => {
  const [selectedImage, setSelectedImage] = useState(-1);
  const [shapes, setShapes] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  //const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    if (selectedImage === index) {
      // 이미 선택된 이미지를 다시 클릭한 경우
      return;
    }

    const newShapes = [...shapes];
    newShapes[selectedImage] = "square"; // 모든 이미지를 네모로 초기화
    newShapes[index] = "square"; // 선택한 이미지의 모양을 원으로 변경
    setShapes(newShapes);
    setSelectedImage(index); // 선택된 이미지 업데이트
    setPopupOpen(true); // 팝업 열기
    //setCurrentIndex(index); // 현재 클릭된 이미지 인덱스 설정
  };

  // 팝업에서 선탣한 도형을 설정하는 함수
  const handleShapeSelect = (shape) => {
    const newShapes = [...shapes];
    newShapes[selectedImage] = shape; // 선택한 도형으로 변경
    setShapes(newShapes);
    setPopupOpen(false); // 선택 후 팝업 닫기
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const GridContainer = {
    display: "grid",
    flexwrap: "wrap",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    padding: "1px",
    width: isMobile ? "300px" : "600px",
    height: isMobile ? "450px" : "800px",
  };

  return (
    <div style={GridContainer}>
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            cursor: "pointer",
            border:
              index === selectedImage ? "2px solid blue" : "2px solid black", // 선택된 이미지면 파란색 테두리, 아니면 검은색 테두리
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          onClick={() => handleImageClick(index)} // 이미지 클릭 시 handleImageClick 함수 호출
        >
          {shapes[index] && ( // shapes[index]가 존재할 때만 네모 모양을 표시
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {shapes[index] === "circle" && ( // 선택된 이미지 일 때만 표시
                <span
                  style={{
                    backgroundColor: "rgba(0,255,255,0.7)",
                    padding: "4px",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                ></span>
              )}
              {shapes[index] === "triangle" && (
                <span
                  style={{
                    backgroundColor: "rgba(0,255,255,0.7)",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    width: "100px",
                    height: "100px",
                  }}
                ></span>
              )}
              {shapes[index] === "square" && ( // 네모 모양일 때 설정
                <div
                  style={{
                    border: "10px solid pink", // 빨간색 배경
                    width: "100px", // 너비 100px
                    height: "100px", // 높이 100px
                  }}
                ></div>
              )}
            </div>
          )}
          <img
            src={src}
            alt={`img-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "2px solid #000",
              boxSizing: "border-box",
              padding: "10px",
            }}
          />
        </div>
      ))}
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
          <button
            style={{
              width: "100px",
              height: "100px",
              textAlign: "center",
              fontSize: "24px",
              borderRadius: "50%",
            }}
            onClick={() => handleShapeSelect("circle")}
          >
            원
          </button>
          <button
            style={{
              width: "100px",
              height: "100px",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            onClick={() => handleShapeSelect("triangle")}
          >
            세모
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default VegetableGrid;
