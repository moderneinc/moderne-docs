import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles/StepCommandBuilder.module.css';

import StepSCMConfig from './StepSCMConfig';
import StepCommandPreview from './StepCommandPreview';
import StepGeneralConfig from './StepGeneralConfig';
import StepStrictRecipeSourcesConfig from './StepStrictRecipeSourcesConfig';
import StepArtifactoryLSTConfig from './StepArtifactoryLSTConfig';
import StepMavenRepositoryConfig from './StepMavenRepositoryConfig';
import { FormData, ValidationResult } from './types';

// Define the interface for step configuration
interface Step {
  label: string;
  component: React.ComponentType<{
    data: FormData;
    updateData: (updates: FormData) => void;
  }>;
  configKey?: string;
  optional?: boolean;
  docsLink?: string;
}

// Define the validation state interface
interface ValidationState {
  [key: string]: ValidationResult;
}

const steps: Step[] = [
  { 
    label: 'Core Variables', 
    component: StepGeneralConfig,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration'
  },
  { 
    label: 'SCM Configuration', 
    component: StepSCMConfig,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration/#step-4-configure-the-agent-to-work-with-your-scms'
  },
  { 
    label: 'Artifactory LST Storage', 
    component: StepArtifactoryLSTConfig,
    configKey: 'artifactoryLSTConfig',
    optional: true,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access'
  },
  { 
    label: 'Maven Repository Config', 
    component: StepMavenRepositoryConfig,
    configKey: 'mavenRepositoryConfig',
    optional: true,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration#step-5-configure-the-agent-to-connect-to-your-artifact-repositories'
  },
  { 
    label: 'Strict Recipe Sources', 
    component: StepStrictRecipeSourcesConfig,
    configKey: 'strictRecipeSourcesConfig',
    optional: true,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources'
  },
  { 
    label: 'Command Preview', 
    component: StepCommandPreview,
    docsLink: 'https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration#step-9-run-the-agent'
  },
];

export default function StepCommandBuilder(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({}); // master shared state
  const [validationState, setValidationState] = useState<ValidationState>({});
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
  const validateCurrentStep = (): boolean => {
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

  const goNext = (): void => {
    // Only proceed if validation passes
    if (validateCurrentStep()) {
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };
  
  const goBack = (): void => setCurrentStep((s) => Math.max(s - 1, 0));

  const updateData = (updates: FormData): void => {
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
  const isNextDisabled = (): boolean => {
    // Always disabled on the last step
    if (currentStep === steps.length - 1) return true;
    
    const currentStepData = steps[currentStep];
    const currentStepLabel = currentStepData.label;
    
    if (currentStepData.optional && currentStepData.configKey) {
      const configEnabled = formData[currentStepData.configKey]?.enabled;
      
      if (configEnabled && validationState[currentStepLabel]?.valid === false) {
        return true;
      }
    } else {
      const currentStepValidation = validationState[currentStepLabel];
      if (currentStepValidation && currentStepValidation.valid === false) {
        return true;
      }
    }
    
    return false;
  };

  // Navigate to a specific step
  const navigateToStep = (stepIndex: number): void => {
    // Optionally, you could add validation before allowing navigation
    // For now, allow direct navigation to any step
    setCurrentStep(stepIndex);
  };

  // Determine if a step can be clicked (you can customize this logic)
  const isStepClickable = (stepIndex: number): boolean => {
    // For example, you might want to prevent clicks on future steps
    // unless previous ones are completed. This is optional.
    return true; // Allow clicking on all steps
  };

  return (
    <div className={styles.formContainer}>
      {/* Progress indicator */}
      <div className={styles.stepsProgress} aria-label="Progress" role="progressbar" 
           aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length}>
        {steps.map((step, idx) => (
          <div 
            key={step.label} 
            className={`${styles.stepIndicator} ${idx <= currentStep ? styles.active : ''} ${!isStepClickable(idx) ? styles.disabled : ''}`}
            aria-current={idx === currentStep ? 'step' : undefined}
            onClick={() => navigateToStep(idx)}
            role="button"
            tabIndex={isStepClickable(idx) ? 0 : -1}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && isStepClickable(idx)) {
                e.preventDefault(); // Prevent default space bar scrolling
                navigateToStep(idx);
              }
            }}
            aria-label={`Go to step ${idx + 1}: ${step.label}`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      
      <h3 className={styles.stepHeader}>
        Step {currentStep + 1}: {steps[currentStep].label}
        {steps[currentStep].docsLink && (
          <a 
            href={steps[currentStep].docsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.docsLink}
            aria-label={`View documentation for ${steps[currentStep].label}`}
            title="View documentation"
          >
            <span className={styles.docsIcon}>?</span>
          </a>
        )}
      </h3>
      <CurrentComponent
        data={formData}
        updateData={updateData}
      />

      <div className={styles.navigationContainer}>
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
    </div>
  );
}