import React from 'react';

const ChildComponent = ({ startTimer }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={startTimer}>Child Click</button>
    </div>
  );
};
export default ChildComponent;
