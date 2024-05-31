import React from "react";
import Today from "./hwiwon/page/Today";
import Problem1 from "./hwiwon/page/Problem1.jsx";
import Problem2 from "./hwiwon/page/Problem2.jsx";
import styles from "./globalStyles.css";
// import Test from "./hwiwon/page/Test";
import Problem3Example from "./hwiwon/page/Problem3Example.jsx";
import Problem3 from "./hwiwon/page/Problem3.jsx";
import ProblemContainer from "./hwiwon/page/ProblemContainer.jsx";
import ProblemTitle from "./hwiwon/component/ProblemTitle.jsx";
import Problem4 from "./hwiwon/page/Problem4.jsx";

function App() {
  return (
    <div className="App">
      <ProblemContainer>
        {/* <Today></Today> */}
        {/* <Problem1></Problem1> */}
        {/* <Problem2></Problem2> */}
        {/* <Problem3></Problem3> */}
        {/* <Problem3Example></Problem3Example> */}
        <Problem4></Problem4>
      </ProblemContainer>
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
