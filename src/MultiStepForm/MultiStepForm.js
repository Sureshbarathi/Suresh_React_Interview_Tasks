import React, { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
      }

      if (!/^\d{6}$/.test(formData.postalCode)) {
        newErrors.postalCode = 'Enter a valid 6-digit postal code';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-container">
        <h2>Form Submitted Successfully!</h2>
        <p>Thank you, {formData.name}.</p>
        <button onClick={() => window.location.reload()}>Start Again</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Multi-Step Form</h2>

      <p className="step-text">Step {step} of 3</p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <div>
          <h3>Personal Details</h3>

          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Address Details</h3>

          <label>City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
          {errors.city && <p className="error">{errors.city}</p>}

          <label>Postal Code</label>
          <input
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter 6-digit postal code"
            inputMode="numeric"
            maxLength={6}
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Review Your Details</h3>

          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>City: {formData.city}</p>
          <p>Postal Code: {formData.postalCode}</p>
        </div>
      )}

      <div className="buttons">
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}

        {step < 3 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
