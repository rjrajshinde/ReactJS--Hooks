import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    console.log("mouse");
    setX(e.x);
    setY(e.y);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", getMousePosition);

    //it's basically a cleanup code it work as componentWillUnmount()
    //when we toggle the display then it remove the eventlistener
    return () => {
      console.log("remove the eventlistener");
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []); //this empty array tells that useEffect is not depend on any other component or value it simply only call once at initially

  return (
    <>
      Using Hooks
      <div>
        X- {x} Y- {y}
      </div>
    </>
  );
}

export default HookMouse;
