import React from "react";

const Today = (props) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = today.getDay();

  // const hours = today.getHours();
  // const minutes = today.getMinutes();
  // const seconds = today.getSeconds();

  return (
    <div>
      <h1>현재 시간 : {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default Today;
