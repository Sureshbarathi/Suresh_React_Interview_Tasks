import React, { useRef } from 'react';
import InputFocusPageLoad from './InputFocusPageLoad';

const InputFocusButtonClick = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>Input Focuss when Button Clicked</h3>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
      <InputFocusPageLoad />
    </div>
  );
};
export default InputFocusButtonClick;
