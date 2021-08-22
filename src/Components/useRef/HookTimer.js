import React, { useState, useEffect } from "react";

//to solve this problem we have to use the useRef hook
// to get the access of interval method outside the useEffect method

//go to HookTimerUseRef.js file
function HookTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h3>timer - {timer}</h3>
      {/* here we can't access the interval variable outside the setInterval method */}
      {/* <button onClick={() => clearInterval(interval)}>Stop</button> */}
    </>
  );
}

export default HookTimer;
