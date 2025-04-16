import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import StepSCMConfig from './StepSCMConfig';
import StepCommandPreview from './StepCommandPreview';

const steps = [
  { label: 'SCM Configuration', component: StepSCMConfig },
  { label: 'Command Preview', component: StepCommandPreview },
];

export default function CommandBuilderSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // master shared state
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const CurrentComponent = steps[currentStep].component;

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

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
      <h3>Step {currentStep + 1}: {steps[currentStep].label}</h3>
      <CurrentComponent
        data={formData}
        updateData={(updates) => setFormData((prev) => ({ ...prev, ...updates }))}
      />

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={goBack} disabled={currentStep === 0} className="button button--secondary">
          ← Back
        </button>
        <button onClick={goNext} disabled={currentStep === steps.length - 1} className="button button--primary">
          {currentStep === steps.length - 1 ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
