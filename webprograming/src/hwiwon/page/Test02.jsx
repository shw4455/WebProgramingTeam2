import React, { useState, useEffect } from "react";
import Test01 from "./Test01";

function Test02(props) {
  useEffect(() => {
    console.log("자식 컴포넌트 리렌더링");
  });
  return (
    <>
      <div>자식 컴포넌트 : {props.text ? "참" : "거짓"}</div>
    </>
  );
}

export default Test02;
