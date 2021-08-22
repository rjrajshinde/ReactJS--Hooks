import React, { useState } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

function TitleCount2() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <h3>Count - {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default TitleCount2;
