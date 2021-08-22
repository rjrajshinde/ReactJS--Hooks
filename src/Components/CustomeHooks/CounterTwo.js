import React, { useState } from "react";
import useCounter from "./Hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <>
      <h3>Count2 - {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
}

export default CounterTwo;
