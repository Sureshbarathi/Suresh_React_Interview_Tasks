import React, { useState, useEffect } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const handlerTimer = () => {
    setStartTimer(true);
  };

  useEffect(() => {
    let timer;
    if (startTimer) {
      console.log('Timer started');
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev === 6) {
            clearInterval(timer);
            setStartTimer(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTimer]);
  return (
    <div>
      <h3>Parent Timer Component</h3>
      <span>Count - {count}</span> <br />
      <ChildComponent startTimer={handlerTimer} />
    </div>
  );
};
export default ParentComponent;
