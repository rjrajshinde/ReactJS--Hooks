import React, { useState, useEffect } from "react";

function HookAutoCounter() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(changeCount, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default HookAutoCounter;
