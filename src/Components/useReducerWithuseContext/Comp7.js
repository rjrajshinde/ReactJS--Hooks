import React, { useContext } from "react";
import { CountContext } from "./Comp1";

function Comp7() {
  const countContext = useContext(CountContext);
  return (
    <>
      Comp7 - {countContext.count}
      <button onClick={() => countContext.dispatch("increase")}>
        Increase
      </button>
      <button onClick={() => countContext.dispatch("reset")}>Reset</button>
      <button onClick={() => countContext.dispatch("decrease")}>
        Decrease
      </button>
    </>
  );
}

export default Comp7;
