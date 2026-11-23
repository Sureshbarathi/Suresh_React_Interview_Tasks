import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
    case 'Reset':
      return initialState;
    default:
      return state;
  }
}

const UseReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>UseReducer Count {state.count}</h3>
      <button onClick={() => dispatch({ type: 'Increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>
  );
};
export default UseReducerCount;
