import React, { useState } from 'react';
import SibilingOne from './SibilingOne';
import SibilingTwo from './SibilingTwo';

const ParentComponent = () => {
  const [message, setMessage] = useState('');
  return (
    <div>
      <h3>Data sharing between sibilings</h3>
      <SibilingOne setMessage={setMessage} />
      <SibilingTwo message={message} />
    </div>
  );
};
export default ParentComponent;
