import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

// Multi-step forms (wizard forms)

export default function WizardForms() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && (
        <Home
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <About
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 3 && <Contact formData={formData} setFormData={setFormData} />}
    </>
  );
}
