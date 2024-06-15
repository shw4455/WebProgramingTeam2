import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import A_Stage_2_61 from "../component/donghyun/A_Stage_2_61";
import A_Stage_3_31 from "../component/donghyun/A_Stage_3_31";

const DHProblem = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MainContainer = {
    height: "50vh",
    width: "70%",
    gap: isMobile ? "20px" : "200px",
  };

  const flexContainer = {
    display: "flex",
    justifyContent: "center",
    gap: isMobile ? "20px" : "200px",
    flexDirection: isMobile ? "column" : "row",
  }

  const navigateToMainPage = () => {
    navigate("/");
  };

  return (
    <div style={MainContainer}>
       <button style={{width:100, height: 50, borderRadius: "10%", fontSize: "24px", backgroundColor:"#FFC107"}} onClick={navigateToMainPage}>home</button>
      <div style={flexContainer} className="mediaController">
        <A_Stage_2_61 />
        <A_Stage_3_31 />
      </div>
    </div>
  
  );
};

export default DHProblem;
