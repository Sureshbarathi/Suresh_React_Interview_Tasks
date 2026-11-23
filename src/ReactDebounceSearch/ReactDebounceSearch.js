import React, { useState, useCallback } from 'react';

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const ReactDebounceSearch = () => {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback(
    debounce((value) => {
      console.log('API call for', value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <div>
      <h3>ReactDebounceSearch</h3>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};
export default ReactDebounceSearch;
