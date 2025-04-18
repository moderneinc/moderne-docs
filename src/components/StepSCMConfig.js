import React, { useState, useEffect } from 'react';
import scmProviderDefinitions from './scmProviderDefinitions';
import ProviderSection from './ProviderSection';
import useSCMValidation from './useSCMValidation';

/**
 * SCM Configuration Step Component
 */
export default function StepSCMConfig({ data, updateData }) {
  // Initialize state from parent data or default values
  const [providers, setProviders] = useState(data.providers || []);
  const [providerConfigs, setProviderConfigs] = useState(data.providerConfigs || {});
  
  // Use custom validation hook
  const { validateAndUpdate, hasFieldError } = useSCMValidation(
    providers, 
    providerConfigs,
    scmProviderDefinitions,
    data,
    updateData
  );
  
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
    scmProviderDefinitions[providerId].fields.forEach(field => {
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

  return (
    <div className="scm-config">
      <p>Select which SCM providers you want to configure:</p>
      
      {Object.entries(scmProviderDefinitions).map(([id, config]) => (
        <ProviderSection
          key={id}
          providerType={id}
          providerConfig={config}
          selected={providers.includes(id)}
          instances={providerConfigs[id]?.instances || []}
          count={providerConfigs[id]?.count || 1}
          onToggle={() => toggleProvider(id)}
          onCountChange={setProviderCount}
          onFieldChange={handleInputChange}
          onEnvToggle={handleEnvToggle}
          hasFieldError={hasFieldError}
        />
      ))}
      
      <style jsx>{`
        .scm-config p {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}