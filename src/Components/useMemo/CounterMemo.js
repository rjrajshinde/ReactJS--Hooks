import React, { useState, useMemo } from "react";

function CounterMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const handleCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    var i = 0;
    while (i < 200000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={handleCounter1}>Counter1 - {counter1}</button>
      <br></br>
      <button onClick={handleCounter2}>Counter2 - {counter2}</button>
    </>
  );
}

export default CounterMemo;
