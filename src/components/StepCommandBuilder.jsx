import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import StepSCMConfig from './StepSCMConfig';
import StepCommandPreview from './StepCommandPreview';
import StepGeneralConfig from './StepGeneralConfig';
import StepStrictRecipeSourcesConfig from './StepStrictRecipeSourcesConfig';
import StepArtifactoryLSTConfig from './StepArtifactoryLSTConfig';
import StepOrgServiceConfig from './StepOrgServiceConfig';

const steps = [
  // { 
  //   label: 'Core Variables', 
  //   component: StepGeneralConfig 
  // },
  { 
    label: 'SCM Configuration', 
    component: StepSCMConfig 
  },
  { 
    label: 'Artifactory LST', 
    component: StepArtifactoryLSTConfig,
    configKey: 'artifactoryLSTConfig',
    optional: true
  },
  { 
    label: 'Organization Service', 
    component: StepOrgServiceConfig,
    configKey: 'orgServiceConfig',
    optional: true
  },
  { 
    label: 'Strict Recipe Sources', 
    component: StepStrictRecipeSourcesConfig,
    configKey: 'strictRecipeSourcesConfig',
    optional: true
  },
  { 
    label: 'Command Preview', 
    component: StepCommandPreview 
  },
];

export default function StepCommandBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // master shared state
  const [validationState, setValidationState] = useState({});
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const CurrentComponent = steps[currentStep].component;
  
  // Trigger initial validation when the step changes
  useEffect(() => {
    // Trigger validation for the current step
    setFormData(prev => ({
      ...prev,
      triggerValidation: {
        ...prev.triggerValidation,
        [steps[currentStep].label]: true
      }
    }));
  }, [currentStep]);

  // Trigger validation in the current step component
  const validateCurrentStep = () => {
    // Set a flag for the current component to perform validation
    setFormData(prev => ({
      ...prev,
      triggerValidation: {
        ...prev.triggerValidation,
        [steps[currentStep].label]: true
      }
    }));
    
    // Return the current validation state for this step
    return validationState[steps[currentStep].label]?.valid !== false;
  };

  const goNext = () => {
    // Only proceed if validation passes
    if (validateCurrentStep()) {
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };
  
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const updateData = (updates) => {
    // Extract validation info if provided by the component
    const validation = updates.validation;
    if (validation) {
      setValidationState(prev => ({
        ...prev,
        [steps[currentStep].label]: validation
      }));
      
      // Remove validation from the updates to keep formData clean
      delete updates.validation;
    }
    
    // Update the main form data
    setFormData((prev) => ({
      ...prev,
      ...updates
    }));
  };

  // Determine if the Next button should be disabled
  // Add this debugging to the isNextDisabled function
  const isNextDisabled = () => {
    // Always disabled on the last step
    if (currentStep === steps.length - 1) return true;
    
    const currentStepData = steps[currentStep];
    const currentStepLabel = currentStepData.label;
    
    // Debug logging
    console.log("Current step:", currentStepLabel);
    console.log("Validation state:", validationState[currentStepLabel]);
    console.log("Is optional:", currentStepData.optional);
    
    if (currentStepData.optional && currentStepData.configKey) {
      const configEnabled = formData[currentStepData.configKey]?.enabled;
      console.log("Config enabled:", configEnabled);
      console.log("Validation valid:", validationState[currentStepLabel]?.valid);
      
      if (configEnabled && validationState[currentStepLabel]?.valid === false) {
        console.log("Disabling Next button due to invalid optional step");
        return true;
      }
    } else {
      const currentStepValidation = validationState[currentStepLabel];
      if (currentStepValidation && currentStepValidation.valid === false) {
        console.log("Disabling Next button due to invalid required step");
        return true;
      }
    }
    
    return false;
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
          disabled={isNextDisabled()}
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