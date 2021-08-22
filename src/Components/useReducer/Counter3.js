import React, { useReducer } from "react";

//here we can just use the useReducer for 2 times to separate the counters
//in this case we don't have to define another counter or we don't have to write another switch cases with different cases
//it provides a code reusability

//compare this code with the counter2.js
const initialValue = {
  Counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, Counter: state.Counter + action.value };
    case "decrease":
      return { ...state, Counter: state.Counter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <h2>First Counter - {count.Counter}</h2>
        {/* we can change the value as much you want to increase or decrease the counter by that value*/}
        <button onClick={() => dispatch({ type: "increase", value: 5 })}>
          Increase by 5
        </button>
        <button onClick={() => dispatch({ type: "increase", value: 1 })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "decrease", value: 5 })}>
          Decrease by 5
        </button>
      </div>
      <div>
        <h2>Second Counter - {count2.Counter}</h2>
        {/* we can change the value as much you want to increase or decrease the counter by that value*/}
        <button onClick={() => dispatch2({ type: "increase", value: 5 })}>
          Increase by 5
        </button>
        <button onClick={() => dispatch2({ type: "increase", value: 1 })}>
          Increase
        </button>
        <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch2({ type: "decrease", value: 1 })}>
          Decrease
        </button>
        <button onClick={() => dispatch2({ type: "decrease", value: 5 })}>
          Decrease by 5
        </button>
      </div>
    </>
  );
}

export default Counter3;
