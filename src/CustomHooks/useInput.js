import React, { useState } from 'react';

function useInput(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
}
export default useInput;
