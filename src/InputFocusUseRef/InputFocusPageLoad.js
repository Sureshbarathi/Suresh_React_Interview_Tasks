import React, { useRef, useEffect } from 'react';

const InputFocusPageLoad = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h3>Input Focus while Page Loads</h3>
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default InputFocusPageLoad;
