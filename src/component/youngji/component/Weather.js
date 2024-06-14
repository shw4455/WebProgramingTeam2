import React,{ useState } from "react";

function Weather (props) {

    const image=[
        './weather.png'
    ]
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    
    // 동그라미를 클릭할 때 위치를 설정하는 함수
    const handleCircleClick = (event) => {
        // 클릭한 위치에 따라 동그라미 위치 업데이트
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        setCirclePosition({ x, y });
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={image} alt='날씨사진' onClick={handleCircleClick} />
            <div style={{ position: 'absolute', top: circlePosition.y, left: circlePosition.x }}>
                <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid red',
                    boxSizing: 'border-box',
                    position: 'relative',
                    top: '-5px',
                    left: '-5px',
                }}></div>
            </div>
        </div>
    );
}

    
    


export default Weather;
