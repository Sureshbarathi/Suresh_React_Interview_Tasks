import React, { useState } from 'react';

const ShowHidePassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <h3>ShowHidePassword</h3>
      <input
        value={password}
        type="password"
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};
export default ShowHidePassword;
