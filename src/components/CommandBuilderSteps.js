import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import StepSCMConfig from './StepSCMConfig';
import StepCommandPreview from './StepCommandPreview';
import StepGeneralConfig from './StepGeneralConfig';

const steps = [
  { label: 'General config', component: StepGeneralConfig },
  { label: 'SCM Configuration', component: StepSCMConfig },
  { label: 'Command Preview', component: StepCommandPreview },
];

export default function CommandBuilderSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const CurrentComponent = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const updateData = (updates) => setFormData((prev) => ({ ...prev, ...updates }));

  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
      }}
      aria-live="polite"
    >
      {/* Progress indicator */}
      <div className="steps-progress" aria-label="Progress" role="progressbar" 
           aria-valuenow={currentStep + 1} aria-valuemin="1" aria-valuemax={steps.length}>
        {steps.map((step, idx) => (
          <div key={step.label} 
               className={`step-indicator ${idx <= currentStep ? 'active' : ''}`}
               aria-current={idx === currentStep ? 'step' : null}>
            {idx + 1}
          </div>
        ))}
      </div>
      
      <h3>Step {currentStep + 1}: {steps[currentStep].label}</h3>
      <CurrentComponent
        data={formData}
        updateData={updateData}
      />

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <button 
          onClick={goBack} 
          disabled={isFirstStep} 
          className="button button--secondary"
          aria-label="Go to previous step"
        >
          ← Back
        </button>
        <button 
          onClick={goNext} 
          disabled={isLastStep} 
          className="button button--primary"
          aria-label={isLastStep ? "Finish" : "Go to next step"}
        >
          {isLastStep ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  );
}