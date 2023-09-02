import { useState } from "react";

const UseState = () => {
  // Declare a state variable "count" and a function "setCount" to update it.
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
