import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default Counter;

// The two code snippets you provided differ in how they update the `counter` state variable. Let's break down the differences between the two:

// **First Code Snippet:**

// ```jsx
// const addValue = () => {
//   //counter = counter + 1
//   setCounter(prevCounter => prevCounter + 1)
//   setCounter(prevCounter => prevCounter + 1 )
//   setCounter(prevCounter => prevCounter + 1)
//   setCounter(prevCounter => prevCounter + 1)
// }
// ```

// In the first code snippet, each `setCounter` call uses a function as its argument. Specifically, it uses an arrow function that takes `prevCounter` as a parameter and returns the updated value by adding 1 to it. This is a correct and recommended way to update state in React when the new state depends on the previous state. It ensures that the state updates are applied sequentially and correctly.

// **Second Code Snippet:**

// ```jsx
// const addValue = () => {
//   //counter = counter + 1
//   setCounter(prevCounter + 1)
//   setCounter(prevCounter + 1)
//   setCounter(prevCounter + 1)
//   setCounter(prevCounter + 1)
// }
// ```

// In the second code snippet, each `setCounter` call attempts to update the state by directly adding 1 to `prevCounter`. However, this approach has a potential issue. When you call `setCounter(prevCounter + 1)`, it doesn't provide a function to calculate the next state based on the previous state. Instead, it treats `prevCounter + 1` as the new state value. This can lead to unexpected behavior, especially when updates are asynchronous, as React may batch or optimize state updates.

// To summarize:

// - The first code snippet is the recommended way to update state in React when the new state depends on the previous state. It uses a function as an argument for `setCounter`, ensuring correct sequential updates.

// - The second code snippet directly increments `prevCounter` without using a function as an argument for `setCounter`. While it may work in some cases, it's not the recommended approach and can lead to unexpected behavior, especially in more complex scenarios.

// In most cases, it's best to follow the pattern used in the first code snippet to ensure predictable and reliable state updates in React components.
