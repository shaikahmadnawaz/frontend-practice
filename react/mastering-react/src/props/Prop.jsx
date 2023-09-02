// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Hello from ParentComponent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
