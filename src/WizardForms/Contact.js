import React, { useState } from 'react';

function Contact({ formData, setFormData }) {
  const [error, setError] = useState('');

  const submit = () => {
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }

    alert('Submitted Successfully');
  };

  return (
    <>
      <input
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      <p>{error}</p>

      <button onClick={submit}>Submit</button>
    </>
  );
}
export default Contact;
