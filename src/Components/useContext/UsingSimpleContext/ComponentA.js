import React from "react";
import ComponentB from "./ComponentB";

export const userContext = React.createContext();
export const passwordContext = React.createContext();

function ComponentA() {
  return (
    <>
      <h1>ComponentA</h1>
      <userContext.Provider value={"raj"}>
        <passwordContext.Provider value={"kingjoker"}>
          <ComponentB />
        </passwordContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default ComponentA;
