import React, { useContext } from "react";
import { CountContext } from "./Comp1";

function Comp5() {
  const countContext = useContext(CountContext);
  return (
    <>
      Comp5 - {countContext.count}
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

export default Comp5;
