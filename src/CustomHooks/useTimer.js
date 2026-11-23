import React, { useState, useEffect } from 'react';

const useTimer = (totalTime) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalTime);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return totalTime;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, totalTime]);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
    setSeconds(totalTime);
  };

  return {
    isRunning,
    start,
    stop,
    seconds,
  };
};
export default useTimer;
