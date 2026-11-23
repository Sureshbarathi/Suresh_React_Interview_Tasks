import React, { useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? 'app dark' : 'app light'}>
      <h3>{isDark ? 'Dark Mode' : 'Light Mode'}</h3>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};
export default DarkModeToggle;
