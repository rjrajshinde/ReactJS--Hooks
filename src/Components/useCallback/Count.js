import React from "react";

function Count({ text, count }) {
  console.log(`Count - ${text}`);
  return (
    <>
      <h3>
        {text} - {count}
      </h3>
    </>
  );
}

export default React.memo(Count);
