import React, { useState, useEffect } from "react";

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

  const handleImageClick = (index) => {
    if (index === selectedImage) {
      selectedImage(-1); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
    } else {
      setSelectedImage(index); // 새로운 이미지를 클릭하면 해당 이미지를 선택
    }
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
        gridTemplateColumns: "repeat(3,1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        padding: "1px",
        width: isMobile ? "300px" : "600px",
        height: isMobile ? "450px" : "800px"
  }

  return (
    <div
      style={GridContainer}
    >
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            cursor: "pointer",
            border:
              index === selectedImage ? "1px solid blue" : "1px solid black", // 선택된 이미지면 파란색 테두리, 아니면 검은색 테두리
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          onClick={() => handleImageClick(index)} // 이미지 클릭 시 handleImageClick 함수 호출
        >
          {index === selectedImage && ( // 선택된 이미지 일 때만 표시
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
              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)", // 반투명 흰색 배경
                  padding: "4px",
                  borderRadius: "50%", // 원형으로 모양을 만듬
                }}
              ></span>
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
    </div>
  );
};

export default VegetableGrid;
