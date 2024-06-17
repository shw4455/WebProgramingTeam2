import React,{ useState } from "react";

function Weather (props) {

    const image=[
        './weather.png'
    ]
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    
    const handleCircleClick = (event) => {
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
