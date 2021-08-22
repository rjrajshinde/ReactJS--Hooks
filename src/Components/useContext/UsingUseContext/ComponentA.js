import React from "react";
import ComponentB from "./ComponentB";

export const userContext = React.createContext();
export const passwordContext = React.createContext();

function ComponentA() {
  return (
    <>
      <h2>ComponentA</h2>
      <userContext.Provider value={"Raj"}>
        <passwordContext.Provider value={"kingjoker"}>
          <ComponentB></ComponentB>
        </passwordContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default ComponentA;
