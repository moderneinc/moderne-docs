import React, { useState, useEffect } from 'react';

// Define the general configuration options
const generalOptions = [
  { 
    label: 'API Gateway RSocket URI', 
    key: 'apiGatewayRSocketUri', 
    envKey: 'MODERNE_AGENT_APIGATEWAYRSOCKETURI',
    description: 'URL for the RSocket connection to the Moderne platform',
    required: true
  },
  { 
    label: 'Crypto Symmetric Key', 
    key: 'cryptoSymmetricKey', 
    envKey: 'MODERNE_AGENT_CRYPTO_SYMMETRICKEY',
    description: 'Encryption key for secure communications',
    required: true
  },
  { 
    label: 'Agent Nickname', 
    key: 'nickname', 
    envKey: 'MODERNE_AGENT_NICKNAME',
    description: 'Name used to identify this agent instance'
  },
  { 
    label: 'Authentication Token', 
    key: 'token', 
    envKey: 'MODERNE_AGENT_TOKEN',
    description: 'Token used for authenticating with the Moderne platform'
  }
];

// Define commit options that can be selected
const availableCommitOptions = [
  { label: 'Pull Request', value: 'PullRequest' },
  { label: 'Fork and Pull Request', value: 'ForkAndPullRequest' },
  { label: 'Direct Commit', value: 'DirectCommit' },
  { label: 'Branch', value: 'Branch' }
];

export default function StepGeneralConfig({ data, updateData }) {
  // Initialize state from parent data or default values
  const [generalConfig, setGeneralConfig] = useState(() => {
    // Get saved values if they exist
    const savedFields = data.generalConfig?.fields || {};
    const savedCommitOptions = data.generalConfig?.commitOptions || [];
    
    const fieldValues = {};
    
    // Initialize fields with saved values or create defaults
    generalOptions.forEach(option => {
      const saved = savedFields[option.key] || {};
      
      fieldValues[option.key] = {
        value: saved.value || '',
        asEnv: saved.asEnv !== undefined ? saved.asEnv : false,
        envKey: option.envKey
      };
    });
    
    return {
      fields: fieldValues,
      commitOptions: savedCommitOptions
    };
  });
  
  // Track validation state
  const [validationAttempted, setValidationAttempted] = useState(false);
  
  // Validate and update parent
  const validateAndUpdate = () => {
    let isValid = true;
    let missingFields = [];
    
    // Check all required fields
    generalOptions.forEach(option => {
      if (option.required) {
        const field = generalConfig.fields[option.key];
        if (!field || !field.value || field.value.trim() === '') {
          isValid = false;
          missingFields.push(option.label);
        }
      }
    });
    
    // Update parent with validation info
    updateData({
      generalConfig,
      validation: {
        valid: isValid,
        missingFields
      }
    });
    
    return isValid;
  };
  
  // Update parent state when local state changes
  useEffect(() => {
    if (validationAttempted) {
      validateAndUpdate();
    } else {
      // Just update the data without validation info
      updateData({
        generalConfig
      });
    }
  }, [generalConfig]);

  // Handle input changes for text fields
  const handleInputChange = (key, value) => {
    setGeneralConfig(prev => ({
      ...prev,
      fields: {
        ...prev.fields,
        [key]: {
          ...prev.fields[key],
          value
        }
      }
    }));
  };

  // Toggle environment variable option
  const handleEnvToggle = (key) => {
    setGeneralConfig(prev => ({
      ...prev,
      fields: {
        ...prev.fields,
        [key]: {
          ...prev.fields[key],
          asEnv: !prev.fields[key].asEnv
        }
      }
    }));
  };
  
  // Handle commit options changes
  const handleCommitOptionToggle = (value) => {
    setGeneralConfig(prev => {
      const currentOptions = [...prev.commitOptions];
      
      if (currentOptions.includes(value)) {
        // Remove the option if already selected
        return {
          ...prev,
          commitOptions: currentOptions.filter(option => option !== value)
        };
      } else {
        // Add the option if not already selected
        return {
          ...prev,
          commitOptions: [...currentOptions, value]
        };
      }
    });
  };

  // Check if a field has an error
  const hasFieldError = (key) => {
    if (!validationAttempted) return false;
    
    const option = generalOptions.find(opt => opt.key === key);
    if (!option || !option.required) return false;
    
    const field = generalConfig.fields[key];
    return !field || !field.value || field.value.trim() === '';
  };

  // Respond to validation trigger from parent
  useEffect(() => {
    if (data.triggerValidation?.['General Config']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      // Reset the trigger
      updateData({
        triggerValidation: {
          ...data.triggerValidation,
          'General Config': false
        }
      });
    }
  }, [data.triggerValidation]);

  return (
    <div className="general-config">
      <section className="config-section">
        <h4>Agent Configuration</h4>
        <p>Configure the core settings for your Moderne Agent</p>
        
        {generalOptions.map(option => {
          const field = generalConfig.fields[option.key] || {};
          const showError = hasFieldError(option.key);
          
          return (
            <div key={option.key} className="field-item">
              <label className="field-label">
                {option.label}
                {option.required && <span className="required-mark">*</span>}
              </label>
              
              {option.description && (
                <div className="field-description">{option.description}</div>
              )}
              
              <input
                type="text"
                value={field.value || ''}
                onChange={(e) => handleInputChange(option.key, e.target.value)}
                className={`field-input ${showError ? 'field-input-error' : ''}`}
                aria-required={option.required}
                aria-invalid={showError}
              />
              
              {showError && (
                <div className="field-error">This field is required</div>
              )}
              
              <label className="env-toggle">
                <input
                  type="checkbox"
                  checked={field.asEnv || false}
                  onChange={() => handleEnvToggle(option.key)}
                />{' '}
                Use as environment variable
              </label>
            </div>
          );
        })}
      </section>
      
      <section className="config-section">
        <h4>Default Commit Options</h4>
        <p>Select how you want changes to be committed by default</p>
        
        <div className="commit-options">
          {availableCommitOptions.map((option) => (
            <label key={option.value} className="option-checkbox">
              <input
                type="checkbox"
                checked={generalConfig.commitOptions.includes(option.value)}
                onChange={() => handleCommitOptionToggle(option.value)}
              />{' '}
              {option.label}
            </label>
          ))}
        </div>
      </section>
      
      <style jsx>{`
        .general-config {
          margin-bottom: 2rem;
        }
        
        .config-section {
          margin-bottom: 2rem;
        }
        
        .config-section h4 {
          margin-bottom: 0.5rem;
        }
        
        .config-section p {
          margin-bottom: 1.5rem;
          color: var(--ifm-color-emphasis-700);
        }
        
        .field-item {
          margin-bottom: 1.5rem;
        }
        
        .field-label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .required-mark {
          color: var(--ifm-color-danger);
          margin-left: 0.25rem;
        }
        
        .field-description {
          font-size: 0.85rem;
          color: var(--ifm-color-emphasis-600);
          margin-bottom: 0.5rem;
        }
        
        .field-input {
          width: 100%;
          max-width: 500px;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: 4px;
        }
        
        .field-input-error {
          border-color: var(--ifm-color-danger);
        }
        
        .field-error {
          color: var(--ifm-color-danger);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        
        .env-toggle {
          font-size: 0.85rem;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
        }
        
        .commit-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .option-checkbox {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}