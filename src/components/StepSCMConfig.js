import React, { useState, useEffect } from 'react';

const scmOptions = {
  github: {
    label: 'GitHub',
    fields: [
      { label: 'Client ID', key: 'clientId', envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_ID', required: true },
      { label: 'Client Secret', key: 'clientSecret', envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET', required: true },
      { label: 'URL', key: 'url', envKey: 'MODERNE_AGENT_GITHUB_${i}_URL' },
    ],
  },
  bitbucket: {
    label: 'Bitbucket',
    fields: [
      { label: 'Client ID', key: 'clientId', envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_ID', required: true },
      { label: 'Client Secret', key: 'clientSecret', envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_SECRET', required: true },
      { label: 'URL', key: 'url', envKey: 'MODERNE_AGENT_BITBUCKET_${i}_URL' },
    ],
  },
};

export default function StepSCMConfig({ data, updateData }) {
  // Initialize state from parent data or default values
  const [providers, setProviders] = useState(data.providers || []);
  const [providerConfigs, setProviderConfigs] = useState(data.providerConfigs || {});
  
  // Update parent state when local state changes
  useEffect(() => {
    updateData({ 
      providers, 
      providerConfigs 
    });
  }, [providers, providerConfigs, updateData]);

  // Add or remove a provider
  const toggleProvider = (id) => {
    setProviders(prev => {
      if (prev.includes(id)) {
        // Remove this provider
        const newProviders = prev.filter(p => p !== id);
        
        // Also clean up configs for this provider
        setProviderConfigs(prevConfigs => {
          const newConfigs = {...prevConfigs};
          delete newConfigs[id];
          return newConfigs;
        });
        
        return newProviders;
      } else {
        // Add this provider with default 1 instance
        setProviderConfigs(prevConfigs => ({
          ...prevConfigs,
          [id]: {
            count: 1,
            instances: [createDefaultInstance(id, 0)]
          }
        }));
        
        return [...prev, id];
      }
    });
  };

  // Create a default instance with empty values
  const createDefaultInstance = (providerId, index) => {
    const instance = {};
    scmOptions[providerId].fields.forEach(field => {
      instance[field.key] = {
        value: '',
        asEnv: false,
        envKey: field.envKey.replace('${i}', index)
      };
    });
    return instance;
  };

  // Update the number of instances for a provider
  const setProviderCount = (providerId, count) => {
    count = Math.max(1, count); // Ensure at least 1
    
    setProviderConfigs(prevConfigs => {
      const currentCount = prevConfigs[providerId]?.count || 1;
      const currentInstances = prevConfigs[providerId]?.instances || [];
      
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
      
      return {
        ...prevConfigs,
        [providerId]: {
          count,
          instances: newInstances
        }
      };
    });
  };

  // Update a specific field value
  const handleInputChange = (providerId, instanceIndex, fieldKey, value) => {
    setProviderConfigs(prevConfigs => {
      const newConfigs = {...prevConfigs};
      const instances = [...(newConfigs[providerId]?.instances || [])];
      
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
      
      newConfigs[providerId] = {
        ...newConfigs[providerId],
        instances
      };
      
      return newConfigs;
    });
  };

  // Toggle environment variable usage
  const handleEnvToggle = (providerId, instanceIndex, fieldKey) => {
    setProviderConfigs(prevConfigs => {
      const newConfigs = {...prevConfigs};
      const instances = [...(newConfigs[providerId]?.instances || [])];
      
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
      
      newConfigs[providerId] = {
        ...newConfigs[providerId],
        instances
      };
      
      return newConfigs;
    });
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
                      const fieldValue = fieldConfig.value || '';
                      const useAsEnv = fieldConfig.asEnv || false;
                      // Still calculate envKey for internal use, but don't display it
                      const envKey = field.envKey.replace('${i}', index);
                      
                      return (
                        <div key={`${id}-${index}-${field.key}`} className="field-item">
                          <label>
                            {field.label}
                            {field.required && <span className="required"> *</span>}
                          </label>
                          
                          <input
                            type="text"
                            value={fieldValue}
                            onChange={(e) => 
                              handleInputChange(id, index, field.key, e.target.value)
                            }
                            style={{ width: '100%', maxWidth: '400px' }}
                          />
                          
                          <label className="env-toggle">
                            <input
                              type="checkbox"
                              checked={useAsEnv}
                              onChange={() => handleEnvToggle(id, index, field.key)}
                            />{' '}
                            Use as environment variable
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
        .field-item label {
          display: block;
          margin-bottom: 0.25rem;
        }
        .env-toggle {
          font-size: 0.85rem;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
        }
        .required {
          color: var(--ifm-color-danger);
        }
      `}</style>
    </div>
  );
}