import React, { useContext } from "react";
import { userContext, passwordContext } from "./ComponentA";

// useContext initial methods are same as the simple context
function ComponentD() {
  const user = useContext(userContext);
  const password = useContext(passwordContext);
  return (
    <>
      <h2>
        ComponentD with user-{user} and password-{password}
      </h2>
    </>
  );
}

export default ComponentD;
