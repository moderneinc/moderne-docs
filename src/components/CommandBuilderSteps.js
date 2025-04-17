import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import StepSCMConfig from './StepSCMConfig';
import StepCommandPreview from './StepCommandPreview';
import StepGeneralConfig from './StepGeneralConfig';

const steps = [
  { label: 'General Config', component: StepGeneralConfig },
  { label: 'SCM Configuration', component: StepSCMConfig },
  { label: 'Command Preview', component: StepCommandPreview },
];

export default function CommandBuilderSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // master shared state
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const CurrentComponent = steps[currentStep].component;

  // Check if current step allows proceeding to next step
  const canProceed = () => {
    if (currentStep === 0) {
      // For General Config step, check required fields
      const generalConfig = formData.generalConfig || {};
      const fields = generalConfig.fields || {};
      
      // Check required fields
      const apiGatewayField = fields.apiGatewayRSocketUri || {};
      const cryptoKeyField = fields.cryptoSymmetricKey || {};
      
      if (!apiGatewayField.value || !cryptoKeyField.value) {
        return false;
      }
    }
    
    return true;
  };

  const goNext = () => {
    if (canProceed()) {
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };
  
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const updateData = (updates) => {
    setFormData((prev) => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
      }}
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
          disabled={currentStep === 0} 
          className="button button--secondary"
          aria-label="Go to previous step"
        >
          ← Back
        </button>
        <button 
          onClick={goNext} 
          disabled={currentStep === steps.length - 1 || !canProceed()}
          className="button button--primary"
          aria-label={currentStep === steps.length - 1 ? "Finish" : "Go to next step"}
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next →'}
        </button>
      </div>
      
      <style jsx>{`
        .steps-progress {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .step-indicator {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--ifm-color-emphasis-200);
          color: var(--ifm-color-emphasis-900);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 8px;
        }

        .step-indicator.active {
          background-color: var(--ifm-color-primary);
          color: white;
        }
      `}</style>
    </div>
  );
}