import React, { useEffect, useRef } from "react";

// useRef gives access to the dom functionality into the functions
function FocusInput() {
  //create a variable using useRef
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("useffect");
  }, []);

  return (
    <>
      {/* use for any tag that you want to perform some actions on  */}
      <input ref={inputRef} type="text" />
    </>
  );
}

export default FocusInput;
