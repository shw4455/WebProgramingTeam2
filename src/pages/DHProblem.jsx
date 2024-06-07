import React, { useEffect, useState } from "react";
import A_Stage_2_61 from "../component/donghyun/A_Stage_2_61";
import A_Stage_3_31 from "../component/donghyun/A_Stage_3_31";


const DHProblem = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const MainContainer = {
    display: "flex",
    justifyContent: "center",
    height: "50vh",
    width: "70%",
    gap: isMobile ? "20px" : "200px",
    flexDirection : isMobile ? "column" : "row"
  }

  return (
    <div
      style={MainContainer}
      className="mediaController"
    >
      <A_Stage_2_61 />
      <A_Stage_3_31 />  
    </div>
  );
};

export default DHProblem;
