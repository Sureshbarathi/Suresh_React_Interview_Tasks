import React from 'react';

const SibilingOne = ({ setMessage }) => {
  return (
    <div>
      <h3>Sibiling One</h3>
      <button onClick={() => setMessage('Im from Sibiling One')}>Click</button>
    </div>
  );
};
export default SibilingOne;
