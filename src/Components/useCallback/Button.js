import React from "react";

function Button({ func, children }) {
  console.log(`Rendering Button - ${children}`);
  return <button onClick={func}>{children}</button>;
}

export default React.memo(Button);
