import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleSwitch;
