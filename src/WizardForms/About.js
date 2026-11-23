import React, { useState } from 'react';

function About({ formData, setFormData, nextStep }) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.age) {
      setError('Age is required');
      return;
    }

    setError('');
    nextStep();
  };

  return (
    <>
      <input
        value={formData.age}
        onChange={(e) =>
          setFormData({
            ...formData,
            age: e.target.value,
          })
        }
      />

      <p>{error}</p>

      <button onClick={handleNext}>Next</button>
    </>
  );
}
export default About;
