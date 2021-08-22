import React, { useReducer } from "react";

// useReducer with state as a object
//this are the changes you have to do when we define the state as a object
//you can compare this to Counter.js
//with state as a object it is very easier to add the counter, add initial values like this as compare to the state as a integer
const initialValue = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrease":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increaseSecond":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decreaseSecond":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <h2>First Counter - {count.firstCounter}</h2>
        {/* we can change the value as much you want to increase or decrease the counter by that value*/}
        <button onClick={() => dispatch({ type: "increase", value: 5 })}>
          Increase by 5
        </button>
        <button onClick={() => dispatch({ type: "increase", value: 1 })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "decrease", value: 5 })}>
          Decrease by 5
        </button>
      </div>
      <div>
        <h2>Second Counter - {count.secondCounter}</h2>
        {/* we can change the value as much you want to increase or decrease the counter by that value*/}
        <button onClick={() => dispatch({ type: "increaseSecond", value: 5 })}>
          Increase by 5
        </button>
        <button onClick={() => dispatch({ type: "increaseSecond", value: 1 })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decreaseSecond", value: 1 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "decreaseSecond", value: 5 })}>
          Decrease by 5
        </button>
      </div>
    </>
  );
}

export default Counter2;
