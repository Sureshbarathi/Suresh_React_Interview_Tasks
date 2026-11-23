import React, { useState } from 'react';

function Home({ formData, setFormData, nextStep }) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    setError('');
    nextStep();
  };

  return (
    <>
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <p>{error}</p>

      <button onClick={handleNext}>Next</button>
    </>
  );
}
export default Home;
