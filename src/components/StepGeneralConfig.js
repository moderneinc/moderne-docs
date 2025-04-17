import React, { useState, useEffect } from 'react';

const generalOptions = [
  { 
    label: 'API Gateway RSocket URI', 
    key: 'apiGatewayRSocketUri', 
    envKey: 'MODERNE_AGENT_APIGATEWAYRSOCKETURI',
    description: 'The URI used to connect to the Moderne API, provided by Moderne.',
    required: true
  },
  { 
    label: 'Crypto Symmetric Key', 
    key: 'cryptoSymmetricKey', 
    envKey: 'MODERNE_AGENT_CRYPTO_SYMMETRICKEY',
    description: 'A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.',
    required: true
  },
  { 
    label: 'Agent Nickname', 
    key: 'agentNickname', 
    envKey: 'MODERNE_AGENT_NICKNAME',
    description: 'A name used to identify your agent in the SaaS agent dashboard UI.',
    required: true
  },
  { 
    label: 'Agent Token', 
    key: 'agentToken', 
    envKey: 'MODERNE_AGENT_TOKEN',
    description: 'The Moderne SaaS agent connection token, provided by Moderne.',
    required: true
  },
  { 
    label: 'Download Parallelism', 
    key: 'downloadParallelism', 
    envKey: 'MODERNE_AGENT_DOWNLOADPARALLELISM',
    description: 'How many threads are used to download LSTs. Defaults to 2 threads.',
    required: false
  },
  { 
    label: 'Artifact Index Interval Seconds', 
    key: 'artifactIndexInterval', 
    envKey: 'MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS	',
    description: 'How frequently LSTs will be indexed. Defaults to 120 seconds.',
    required: false
  }
];

const availableCommitOptions = [
  { label: 'Direct', value: 'Direct' },
  { label: 'Branch', value: 'Branch' },
  { label: 'Fork', value: 'Fork' },
  { label: 'Pull Request', value: 'PullRequest' },
  { label: 'Fork and Pull Request', value: 'ForkAndPullRequest' },  
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
  const [validationAttempted, setValidationAttempted] = useState(true); // Start with validation on
  
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
  
  // Run initial validation when component mounts
  useEffect(() => {
    validateAndUpdate();
  }, []);
  
  // Update parent state when local state changes
  useEffect(() => {
    validateAndUpdate();
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
        <p>Use to restrict which commit options are available on a tenant level (if the organizations service doesn't return any). By default, all options are available.</p>
        
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