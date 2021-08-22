import React from "react";
import { userContext, passwordContext } from "./ComponentA";

function ComponentD() {
  return (
    <>
      <h1>ComponentD</h1>
      <userContext.Consumer>
        {(user) => {
          return (
            <passwordContext.Consumer>
              {(password) => {
                return (
                  <h2>
                    user is {user} and password is {password}
                  </h2>
                );
              }}
            </passwordContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </>
  );
}

export default ComponentD;
