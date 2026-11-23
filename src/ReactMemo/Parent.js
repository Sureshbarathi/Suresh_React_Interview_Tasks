import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>React.memo</h3>
      <button onClick={handleClick}>{count}</button>
      <Child />
    </div>
  );
};
export default Parent;
