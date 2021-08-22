import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  //   const increaseCountby5 = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount((prevCount) => prevCount + 1);
  //     }
  //   };

  return (
    <div>
      <h3>Count :- {count}</h3>
      <br></br>
      {/* Don't do this because it's not safe */}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button> */}

      {/* Do this instead */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default HookCounter2;
