import React, { useReducer } from "react";

const initialState = 0;
//reducer function handles all the functionality on state
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //this dispatch method is used to handle the action that we are going to send to the reducer function
  return (
    <>
      <h3>{count}</h3>
      {/* here we send the action through dispatch method to the reducer function */}
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
    </>
  );
}

export default Counter;
