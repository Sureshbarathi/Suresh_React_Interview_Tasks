import React from 'react';

const ChildComponent = ({ sendData }) => {
  return (
    <div>
      <h3>Child component</h3>
      <button onClick={() => sendData('Hello from Child!')}>
        Send to Parent
      </button>
    </div>
  );
};
export default ChildComponent;
