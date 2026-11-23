import React, { useState, useEffect } from 'react';

// React Machine Coding Challenge
// Build a timer application with these controls:

// ✅ Start: Begin counting from zero, increasing every second.
// ⏸️ Pause: Freeze the current count.
// ▶️ Resume: Continue from the paused count.
// 🛑 Stop: Clear the timer and reset the count to zero.

const TimerWithPause = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  // const [start, setStart] = useState(false);
  const [status, setStatus] = useState('stopped');

  const handleStart = () => {
    setStatus('running');
    // setStart(true);
  };

  useEffect(() => {
    if (status !== 'running') return;

    let counter;
    // if (start) {
    counter = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    // }
    return () => clearInterval(counter);
  }, [status]);

  const handleStop = () => {
    // setStart(false);
    setStatus('stopped');
    setCount(initialCount);
  };

  const handlePause = () => {
    // setStart(false);
    setStatus('paused');
  };

  const handleResume = () => {
    // setStart(true);
    setStatus('running');
  };

  return (
    <div>
      <h3>TimerWithPause - {count}</h3>
      <button onClick={handleStart} disabled={status === 'running'}>
        ✅ Start
      </button>
      <button onClick={handlePause} disabled={status === 'paused'}>
        ⏸️ Pause
      </button>
      <button onClick={handleResume} disabled={status === 'running'}>
        ▶️ Resume
      </button>
      <button onClick={handleStop} disabled={status === 'stopped'}>
        🛑 Stop
      </button>
    </div>
  );
};
export default TimerWithPause;
