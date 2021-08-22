import React, { useState, useEffect, useRef } from "react";

//to solve this problem we have to use the useRef hook
// to get the access of interval method outside the useEffect method

function HookTimerUseRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    //here we use useRef variable and assign the setInterval to useRef Variable
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <h3>timer - {timer}</h3>
      {/* here we can't access the interval variable outside the setInterval method */}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </>
  );
}

export default HookTimerUseRef;
