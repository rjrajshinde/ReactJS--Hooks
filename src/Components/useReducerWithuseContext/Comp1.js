import React, { useReducer } from "react";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";

//here we are using useContext to send the dispatch and count state to another component
//from those component we can handle the count value with the help of useContext

const initialState = 0;
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

export const CountContext = React.createContext();

function Comp1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <h3>{count}</h3>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Comp4></Comp4>
    </CountContext.Provider>
  );
}

export default Comp1;
