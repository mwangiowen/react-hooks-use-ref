import React, { useState } from "react";

function CounterRef() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>Increment</button>

      <p>Count: {count}</p>
    </div>
  );
}

export default CounterRef;
