# Higher Order Components (HOCs) in React

Higher Order Components (HOCs) are a powerful pattern in React that allows you to reuse component logic. They are functions that take a component and return a new component with additional functionality or props. HOCs enable you to abstract and share behavior among components without duplicating code.

Certainly! Here's an example of a Higher Order Component using functional components and hooks in React:

```jsx
import React, { useEffect } from "react";

// Higher Order Component
const withLogger = (WrappedComponent) => {
  // Functional component with hooks
  return function WithLoggerComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted.`);

      return () => {
        console.log(`Component ${WrappedComponent.name} is unmounted.`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Component that uses the HOC
const MyComponent = () => {
  return <div>My Component</div>;
};

// Applying the HOC to MyComponent
const MyComponentWithLogger = withLogger(MyComponent);

// Now, use MyComponentWithLogger wherever you need the logging behavior

// Example usage in another component or file
const App = () => {
  return (
    <div>
      <MyComponentWithLogger />
    </div>
  );
};
```

In this example, the `withLogger` HOC is implemented as a function that returns a new functional component (`WithLoggerComponent`). The functional component uses the `useEffect` hook to handle the logging behavior on mount and unmount. The original `MyComponent` is then wrapped with the `withLogger` HOC to create `MyComponentWithLogger`. This way, the logging functionality is applied to `MyComponentWithLogger`, and you can use it in your app.

HOCs are a great way to enhance and share functionality across components, and they can be used with both class components and functional components in React.

## Custom Hooks in React

Custom hooks are a way to reuse stateful logic in functional components in React. They are functions that can use React hooks internally and allow you to extract and share logic across multiple components. Custom hooks typically start with the word "use" to follow the convention.

Here's an example of a custom hook that manages a simple counter:

```jsx
import { useState } from "react";

// Custom hook for managing a counter
const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return {
    count,
    increment,
    decrement,
  };
};

// Component using the custom hook
const CounterComponent = () => {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
```

In this example, the `useCounter` custom hook initializes state using `useState` and provides functions to increment and decrement the count. The `CounterComponent` then uses this custom hook to manage its state and render the UI.

Custom hooks are a powerful way to encapsulate and share complex logic, making your code more modular and reusable. They follow the same rules as regular hooks in terms of not calling hooks conditionally or within loops, ensuring a consistent and reliable component lifecycle.
