import React, { useState } from 'react';

const Counter = () => {
  const [countData, setCountData] = useState(1);

  const handleIncrement = () => {
    // setCountData(countData + 1);
    // setCountData(countData + 1);
    // setCountData(countData + 1);

    setCountData((prev) => prev + 1);
    // setCountData((prev) => prev + 1);
    // setCountData((prev) => prev + 1);

    console.log(countData);
  };

  const handleDecrement = () => {
    // setCountData(countData - 1);
    // setCountData(countData - 1);
    // setCountData(countData - 1);

    setCountData((prev) => prev - 1);
    // setCountData((prev) => prev - 1);
    // setCountData((prev) => prev - 1);
    console.log('decrement');
  };
  return (
    <div>
      <h3>Counter - {countData}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
export default Counter;
