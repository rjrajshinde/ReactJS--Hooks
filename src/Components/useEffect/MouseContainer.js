import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState();

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      <br></br>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
