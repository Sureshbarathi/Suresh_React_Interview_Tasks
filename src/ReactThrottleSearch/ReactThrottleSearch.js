import React, { useState, useCallback, useEffect } from 'react';

function throttle(callback, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      callback(...args);
      lastTime = now;
    }
  };
}

const ReactThrottleSearch = () => {
  // const [search, setSearch] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      console.log('Scroll API call');

      setScrollPosition(window.scrollY);
    }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // const handleSearch = useCallback(
  //   throttle((value) => {
  //     console.log('API call for', value);
  //   }, 500),
  //   []
  // );

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setSearch(value);
  //   handleSearch(value);
  // };

  return (
    <div>
      {/* <h3>ReactThrottleSearch</h3> */}

      <div style={{ height: '200vh', padding: '20px' }}>
        <h2>React Throttle Scroll</h2>

        <h3>Scroll Position: {scrollPosition}px</h3>

        <p>Scroll down to test throttling.</p>
      </div>

      {/* <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      /> */}
    </div>
  );
};

export default ReactThrottleSearch;
