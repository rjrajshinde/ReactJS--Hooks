import React, { useState } from "react";

// increase counter functionlity using useState

function HookCounter() {
  const [count, increaseCount] = useState(0); //this 0 is the initial value of count

  return (
    <div>
      <h3>Count:- {count}</h3>
      <button onClick={() => increaseCount(count + 1)}>Add</button>
    </div>
  );
}

export default HookCounter;
