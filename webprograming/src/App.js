import React from "react";
import Today from "./hwiwon/page/Today";
import Problem1 from "./hwiwon/page/Problem1.jsx";
import Problem2 from "./hwiwon/page/Problem2.jsx";
import styles from "./globalStyles.css";
import Test from "./hwiwon/page/Test";
import Problem3 from "./hwiwon/page/Problem3.jsx";

function App() {
  return (
    <div className="App">
      <Today></Today>
      <Problem1></Problem1>
      {/* <Problem2></Problem2> */}
      <Problem3></Problem3>
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
