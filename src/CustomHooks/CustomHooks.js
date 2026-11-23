import React from 'react';
import useCounter from './useCounter';
import useInput from './useInput';
import useFetch from './useFetch';
import useTimer from './useTimer';

const CustomHooks = () => {
  const { count, increment, decrement } = useCounter();

  const { value, onChange } = useInput('');

  const users = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log(users);

  const TOTAL_TIME = 5;
  const {
    isRunning,
    start,
    stop,
    seconds,
  } = useTimer(TOTAL_TIME);

  return (
    <div>
      <h3>Custom Hooks</h3>
      <h4>0. useTimer Hook</h4>
      <main>
    <p>useTimer custom hook</p>
    <p>{isRunning ? seconds : "No Timer Running"}</p>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
  </main>
      <h4>1. Counter Hook</h4>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <h4>2. Input Hook</h4>
      <input type="text" value={value} onChange={onChange} />
      <br />
      <h4>3. Fetch Hook</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CustomHooks;
