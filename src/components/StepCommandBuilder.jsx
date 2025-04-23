import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import ConfigStep from './ConfigStep';
import SCMProviderSection from './SCMProviderSection';
import StepCommandPreview from './StepCommandPreview';
import { wizardSteps } from './configSchema';
import styles from './styles/StepCommandBuilder.module.css';

// Local storage key for saving wizard state
const STORAGE_KEY = 'moderne_agent_config_wizard_state';

// Component mapping for resolving step components
const componentMap = {
  'ConfigStep': ConfigStep,
  'SCMStep': SCMProviderSection,
  'CommandPreview': StepCommandPreview
};

export default function StepCommandBuilder() {
  // Initialize the form with React Hook Form
  const methods = useForm({
    mode: 'onChange',
    defaultValues: loadFromLocalStorage() || {}
  });
  
  const { watch, reset, handleSubmit, formState } = methods;
  const formValues = watch();
  
  // Track current step state
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        return parsedState.currentStep || 0;
      }
    }
    return 0;
  });
  
  // Get current step definition
  const currentStepDef = wizardSteps[currentStep];
  
  // Dynamically resolve the component for this step
  const StepComponent = componentMap[currentStepDef.component];
  
  // Save form state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(formValues).length > 0) {
      const stateToSave = {
        currentStep,
        formValues
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [currentStep, formValues]);
  
  // Load data from localStorage
  function loadFromLocalStorage() {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        return parsedState.formValues;
      }
    }
    return null;
  }
  
  // Navigate to next step
  const goNext = () => {
    // Check if the current step is valid before proceeding
    const currentStepKey = currentStepDef.section?.configKey;
    const isOptionalStep = currentStepDef.section?.optional;
    
    // Optional steps that are disabled are always valid
    const isOptionalStepDisabled = isOptionalStep && 
      !formValues[currentStepKey]?.enabled;
    
    // Either the step passes validation or it's a disabled optional step
    const isStepValid = !formState.errors[currentStepKey] || isOptionalStepDisabled;
    
    if (isStepValid) {
      setCurrentStep((s) => Math.min(s + 1, wizardSteps.length - 1));
    }
  };
  
  // Navigate to previous step
  const goBack = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  };
  
  // Navigate directly to a specific step
  const goToStep = (stepIndex) => {
    // Can only navigate to steps we've already visited or the next immediate step
    if (stepIndex <= currentStep + 1) {
      // For navigating forward, validate the current step
      if (stepIndex > currentStep) {
        const currentStepKey = currentStepDef.section?.configKey;
        const isOptionalStep = currentStepDef.section?.optional;
        const isOptionalStepDisabled = isOptionalStep && 
          !formValues[currentStepKey]?.enabled;
        
        if (formState.errors[currentStepKey] && !isOptionalStepDisabled) {
          return; // Don't navigate forward if validation fails
        }
      }
      
      setCurrentStep(stepIndex);
    }
  };
  
  // Reset the form and clear localStorage
  const resetForm = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      setCurrentStep(0);
      reset({}); // Reset react-hook-form state with empty values
    }
  };
  
  // Check if the next button should be disabled
  const isNextDisabled = () => {
    // Always disabled on the last step
    if (currentStep === wizardSteps.length - 1) return true;
    
    const currentStepKey = currentStepDef.section?.configKey;
    const isOptionalStep = currentStepDef.section?.optional;
    
    // Optional steps that are disabled are always valid
    const isOptionalStepDisabled = isOptionalStep && 
      !formValues[currentStepKey]?.enabled;
    
    // Check for errors in the current step
    const hasErrors = formState.errors[currentStepKey];
    
    return hasErrors && !isOptionalStepDisabled;
  };
  
  // Handle final form submission
  const onSubmit = (data) => {
    // This could be used for submitting the final configuration if needed
    console.log('Form submitted with values:', data);
  };
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className={styles.stepsProgress} aria-label="Progress" role="progressbar" 
              aria-valuenow={currentStep + 1} aria-valuemin="1" aria-valuemax={wizardSteps.length}>
            {wizardSteps.map((step, idx) => (
              <div 
                key={step.label} 
                className={`${styles.stepIndicator} ${idx <= currentStep ? styles.active : ''} ${idx <= currentStep + 1 ? styles.clickable : ''}`}
                aria-current={idx === currentStep ? 'step' : null}
                onClick={() => goToStep(idx)}
                title={idx <= currentStep + 1 ? `Go to ${step.label}` : 'Complete previous steps first'}
                tabIndex={idx <= currentStep + 1 ? 0 : -1}
                role="button"
                aria-disabled={idx > currentStep + 1}
                onKeyDown={(e) => e.key === 'Enter' && goToStep(idx)}
              >
                {idx + 1}
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Step {currentStep + 1}: {currentStepDef.label}</h3>
            <button 
              type="button"
              onClick={resetForm} 
              className="button button--sm button--outline button--danger"
              title="Clear saved data and start over"
            >
              Reset Form
            </button>
          </div>
          
          {/* Render the component for this step */}
          {StepComponent && (
            currentStepDef.component === "CommandPreview" ? (
              <StepCommandPreview />
            ) : (
              <StepComponent
                configDefinition={currentStepDef.section}
                stepKey={currentStepDef.section?.configKey}
              />
            )
          )}

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              type="button"
              onClick={goBack} 
              disabled={currentStep === 0} 
              className="button button--secondary"
              aria-label="Go to previous step"
            >
              ← Back
            </button>
            <button 
              type="button"
              onClick={goNext} 
              disabled={isNextDisabled()}
              className="button button--primary"
              aria-label={currentStep === wizardSteps.length - 1 ? "Finish" : "Go to next step"}
            >
              {currentStep === wizardSteps.length - 1 ? 'Finish' : 'Next →'}
            </button>
          </div>
        </div>
        
        {/* React Hook Form DevTools - will only appear in development */}
        {process.env.NODE_ENV !== 'production' && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
}