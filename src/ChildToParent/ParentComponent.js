import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h3>Parent to Child data transfer - {message}</h3>
      <ChildComponent sendData={handleMessage} />
    </div>
  );
};
export default ParentComponent;
