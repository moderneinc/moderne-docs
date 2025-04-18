import React, { useState, useEffect } from 'react';

const scmOptions = {
  azure: {
    label: 'Azure DevOps',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTID', 
        required: true,
        type: 'text',
        description: 'Application (client) ID for your Azure DevOps OAuth app'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTSECRET', 
        required: true,
        type: 'text',
        description: 'Secret key for your Azure DevOps OAuth app authentication'
      },
      { 
        label: 'OAuth Tenant ID', 
        key: 'oauthTenantId', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_TENANTID', 
        required: true,
        type: 'text',
        description: 'Directory (tenant) ID for your Azure Active Directory'
      },
      { 
        label: 'Skip SSL Verification', 
        key: 'skipSSL', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SKIPSSL', 
        required: false,
        type: 'boolean',
        description: 'Disable SSL verification (not recommended for production)'
      },
    ],
  },
  github: {
    label: 'GitHub',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_ID', 
        required: true,
        type: 'text',
        description: 'OAuth App Client ID from your GitHub organization settings'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET', 
        required: true,
        type: 'text',
        description: 'OAuth App Client Secret from your GitHub organization settings'
      },
      { 
        label: 'URL', 
        key: 'url', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_URL',
        type: 'text',
        description: 'GitHub instance URL (leave empty for github.com)'
      },
    ],
  },
  bitbucket: {
    label: 'Bitbucket',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_ID', 
        required: true,
        type: 'text',
        description: 'OAuth Consumer Key from your Bitbucket workspace settings'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_SECRET', 
        required: true,
        type: 'text',
        description: 'OAuth Consumer Secret from your Bitbucket workspace settings'
      },
      { 
        label: 'URL', 
        key: 'url', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_URL',
        type: 'text',
        description: 'Bitbucket instance URL (leave empty for bitbucket.org)'
      },
    ],
  },
};

export default function StepSCMConfig({ data, updateData }) {
  // Initialize state from parent data or default values
  const [providers, setProviders] = useState(data.providers || []);
  const [providerConfigs, setProviderConfigs] = useState(data.providerConfigs || {});
  const [validationAttempted, setValidationAttempted] = useState(true); // Start with validation on
  
  // Validate all fields and update parent with validation state
  const validateAndUpdate = (newProviders, newConfigs) => {
    const currentProviders = newProviders || providers;
    const currentConfigs = newConfigs || providerConfigs;
    
    // No providers selected is always valid
    if (currentProviders.length === 0) {
      updateData({
        providers: currentProviders,
        providerConfigs: currentConfigs,
        validation: { valid: true }
      });
      return true;
    }
    
    // Validate each selected provider
    let isValid = true;
    let missingFields = [];
    
    for (const providerId of currentProviders) {
      const config = currentConfigs[providerId];
      if (!config) {
        isValid = false;
        continue;
      }
      
      const { instances = [] } = config;
      
      // Check each instance
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];
        if (!instance) continue;
        
        // Check required fields based on provider config
        scmOptions[providerId].fields.forEach(field => {
          if (field.required) {
            const fieldData = instance[field.key];
            if (!fieldData || (field.type !== 'boolean' && (!fieldData.value || fieldData.value.trim() === ''))) {
              isValid = false;
              missingFields.push(`${providerId} #${i+1} ${field.label}`);
            }
          }
        });
      }
    }
    
    // Update parent with validation result
    updateData({
      providers: currentProviders,
      providerConfigs: currentConfigs,
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
  }, [providers, providerConfigs]);

  // Add or remove a provider
  const toggleProvider = (id) => {
    const newProviders = providers.includes(id)
      ? providers.filter(p => p !== id)
      : [...providers, id];
      
    let newConfigs = {...providerConfigs};
    
    if (providers.includes(id)) {
      // Remove this provider
      delete newConfigs[id];
    } else {
      // Add this provider with default 1 instance
      newConfigs[id] = {
        count: 1,
        instances: [createDefaultInstance(id, 0)]
      };
    }
    
    setProviders(newProviders);
    setProviderConfigs(newConfigs);
  };

  // Create a default instance with empty values
  const createDefaultInstance = (providerId, index) => {
    const instance = {};
    scmOptions[providerId].fields.forEach(field => {
      let defaultValue = '';
      // Set appropriate default for each field type
      if (field.type === 'boolean') {
        defaultValue = 'false';
      }
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index)
      };
    });
    return instance;
  };

  // Update the number of instances for a provider
  const setProviderCount = (providerId, count) => {
    count = Math.max(1, count); // Ensure at least 1
    
    const currentCount = providerConfigs[providerId]?.count || 1;
    const currentInstances = [...(providerConfigs[providerId]?.instances || [])];
    
    let newInstances = [...currentInstances];
    
    // Add more instances if needed
    if (count > currentCount) {
      for (let i = currentCount; i < count; i++) {
        newInstances.push(createDefaultInstance(providerId, i));
      }
    } 
    // Remove excess instances if count decreased
    else if (count < currentCount) {
      newInstances = newInstances.slice(0, count);
    }
    
    const newConfigs = {
      ...providerConfigs,
      [providerId]: {
        count,
        instances: newInstances
      }
    };
    
    setProviderConfigs(newConfigs);
  };

  // Update a specific field value
  const handleInputChange = (providerId, instanceIndex, fieldKey, value) => {
    const instances = [...(providerConfigs[providerId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultInstance(providerId, instanceIndex);
    }
    
    instances[instanceIndex] = {
      ...instances[instanceIndex],
      [fieldKey]: {
        ...instances[instanceIndex][fieldKey],
        value
      }
    };
    
    const newConfigs = {
      ...providerConfigs,
      [providerId]: {
        ...providerConfigs[providerId],
        instances
      }
    };
    
    setProviderConfigs(newConfigs);
  };

  // Toggle environment variable usage
  const handleEnvToggle = (providerId, instanceIndex, fieldKey) => {
    const instances = [...(providerConfigs[providerId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultInstance(providerId, instanceIndex);
    }
    
    instances[instanceIndex] = {
      ...instances[instanceIndex],
      [fieldKey]: {
        ...instances[instanceIndex][fieldKey],
        asEnv: !instances[instanceIndex][fieldKey]?.asEnv
      }
    };
    
    const newConfigs = {
      ...providerConfigs,
      [providerId]: {
        ...providerConfigs[providerId],
        instances
      }
    };
    
    setProviderConfigs(newConfigs);
  };

  // Check if a field has an error
  const hasFieldError = (providerId, instanceIndex, fieldKey) => {
    if (!validationAttempted) return false;
    
    const field = scmOptions[providerId].fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;
    
    const instance = providerConfigs[providerId]?.instances?.[instanceIndex];
    if (!instance) return false;
    
    const fieldData = instance[fieldKey];
    // Boolean fields are always valid (they default to false)
    if (field.type === 'boolean') return false;
    
    return !fieldData?.value || fieldData.value.trim() === '';
  };

  // Handle validation trigger from parent
  useEffect(() => {
    if (data.triggerValidation?.['SCM Configuration']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      // Reset the trigger
      updateData({
        triggerValidation: {
          ...data.triggerValidation,
          'SCM Configuration': false
        }
      });
    }
  }, [data.triggerValidation]);

  // Render different input types based on field type
  const renderFieldInput = (field, providerId, instanceIndex, instance) => {
    const fieldConfig = instance[field.key] || {};
    const fieldValue = fieldConfig.value || '';
    const useAsEnv = fieldConfig.asEnv || false;
    const showError = hasFieldError(providerId, instanceIndex, field.key);

    if (field.type === 'boolean') {
      return (
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name={`${providerId}-${instanceIndex}-${field.key}`}
              value="true"
              checked={fieldValue === 'true'}
              onChange={() => handleInputChange(providerId, instanceIndex, field.key, 'true')}
            />{' '}
            True
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name={`${providerId}-${instanceIndex}-${field.key}`}
              value="false"
              checked={fieldValue === 'false'}
              onChange={() => handleInputChange(providerId, instanceIndex, field.key, 'false')}
            />{' '}
            False
          </label>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          value={fieldValue}
          onChange={(e) => handleInputChange(providerId, instanceIndex, field.key, e.target.value)}
          className={`field-input ${showError ? 'field-input-error' : ''}`}
          aria-required={field.required}
          aria-invalid={showError}
        />
      );
    }
  };

  return (
    <div className="scm-config">
      <p>Select which SCM providers you want to configure:</p>
      
      {Object.entries(scmOptions).map(([id, config]) => (
        <div key={id} className="provider-section">
          <label className="provider-checkbox">
            <input
              type="checkbox"
              checked={providers.includes(id)}
              onChange={() => toggleProvider(id)}
            />{' '}
            {config.label}
          </label>

          {providers.includes(id) && (
            <div className="provider-configs">
              <label className="instance-count">
                Number of {config.label} Configs:{' '}
                <input
                  type="number"
                  min={1}
                  value={providerConfigs[id]?.count || 1}
                  onChange={(e) => setProviderCount(id, parseInt(e.target.value || '1', 10))}
                  style={{ width: '60px' }}
                />
              </label>

              {Array.from({ length: providerConfigs[id]?.count || 1 }).map((_, index) => {
                const instance = providerConfigs[id]?.instances?.[index] || {};
                
                return (
                  <div key={`${id}-config-${index}`} className="provider-instance">
                    <h4>{config.label} #{index + 1}</h4>
                    
                    {config.fields.map((field) => {
                      const fieldConfig = instance[field.key] || {};
                      const useAsEnv = fieldConfig.asEnv || false;
                      const showError = hasFieldError(id, index, field.key);
                      
                      return (
                        <div key={`${id}-${index}-${field.key}`} className="field-item">
                          <label className="field-label">
                            {field.label}
                            {field.required && <span className="required-mark">*</span>}
                          </label>
                          
                          {field.description && (
                            <div className="field-description">{field.description}</div>
                          )}
                          
                          {renderFieldInput(field, id, index, instance)}
                          
                          {showError && (
                            <div className="field-error">This field is required</div>
                          )}
                          
                          <label className="env-toggle">
                            <input
                              type="checkbox"
                              checked={useAsEnv}
                              onChange={() => handleEnvToggle(id, index, field.key)}
                            />{' '}
                            Environment variable
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
      
      <style jsx>{`
        .scm-config p {
          margin-bottom: 1rem;
        }
        .provider-section {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
        .provider-checkbox {
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .provider-configs {
          padding-left: 1.5rem;
          margin-top: 0.75rem;
        }
        .instance-count {
          display: block;
          margin-bottom: 1rem;
        }
        .provider-instance {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: 4px;
        }
        .field-item {
          margin-bottom: 1rem;
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
          max-width: 400px;
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
        .radio-group {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .radio-label {
          display: flex;
          align-items: center;
        }
        .radio-label input {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
}