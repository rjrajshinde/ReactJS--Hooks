import React, { useState, useEffect } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect runs after every time the component renders
  // useEffect used instead of componentDidMount(), componentDidUnmount(), componentDidUpdate()
  useEffect(() => {
    console.log("update");
    document.title = `You Clicked ${count} times`;
  }, [count]); //here useEffect calls after every time when the count is changed its called conditionally run effect

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count} Times
      </button>
    </div>
  );
}

export default HookCounter1;
