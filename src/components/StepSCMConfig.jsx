import React, { useState, useEffect } from 'react';
import scmProviderDefinitions from './SCMProviderDefinitions';
import SCMProviderSection from './SCMProviderSection';
import useSCMValidation from './useSCMValidation';

/**
 * SCM Configuration Step Component
 */
export default function StepSCMConfig({ data, updateData }) {
  // Initialize state from parent data or default values
  const [scmProviders, setScmProviders] = useState(data.providers || []);
  const [scmProviderConfigs, setScmProviderConfigs] = useState(data.providerConfigs || {});
  
  // Use custom validation hook
  const { validateAndUpdate, hasFieldError } = useSCMValidation(
    scmProviders, 
    scmProviderConfigs,
    scmProviderDefinitions,
    data,
    updateData
  );
  
  // Update parent state when local state changes
  useEffect(() => {
    validateAndUpdate();
  }, [scmProviders, scmProviderConfigs]);

  // Add or remove an SCM provider
  const toggleSCMProvider = (id) => {
    const newProviders = scmProviders.includes(id)
      ? scmProviders.filter(p => p !== id)
      : [...scmProviders, id];
      
    let newConfigs = {...scmProviderConfigs};
    
    if (scmProviders.includes(id)) {
      // Remove this provider
      delete newConfigs[id];
    } else {
      // Add this provider with default 1 instance
      newConfigs[id] = {
        count: 1,
        instances: [createDefaultSCMInstance(id, 0)]
      };
    }
    
    setScmProviders(newProviders);
    setScmProviderConfigs(newConfigs);
  };

  // Create a default instance with default values from definitions
  const createDefaultSCMInstance = (scmProviderId, index) => {
    const instance = {};
    scmProviderDefinitions[scmProviderId].fields.forEach(field => {
      // Get the default value from the field definition
      let defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index)
      };
    });
    return instance;
  };

  // Update the number of instances for an SCM provider
  const setSCMProviderCount = (scmProviderId, count) => {
    count = Math.max(1, count); // Ensure at least 1
    
    const currentCount = scmProviderConfigs[scmProviderId]?.count || 1;
    const currentInstances = [...(scmProviderConfigs[scmProviderId]?.instances || [])];
    
    let newInstances = [...currentInstances];
    
    // Add more instances if needed
    if (count > currentCount) {
      for (let i = currentCount; i < count; i++) {
        newInstances.push(createDefaultSCMInstance(scmProviderId, i));
      }
    } 
    // Remove excess instances if count decreased
    else if (count < currentCount) {
      newInstances = newInstances.slice(0, count);
    }
    
    const newConfigs = {
      ...scmProviderConfigs,
      [scmProviderId]: {
        count,
        instances: newInstances
      }
    };
    
    setScmProviderConfigs(newConfigs);
  };

  // Update a specific field value
  const handleSCMInputChange = (scmProviderId, instanceIndex, fieldKey, value) => {
    const instances = [...(scmProviderConfigs[scmProviderId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultSCMInstance(scmProviderId, instanceIndex);
    }
    
    const field = scmProviderDefinitions[scmProviderId].fields.find(f => f.key === fieldKey);
    
    instances[instanceIndex] = {
      ...instances[instanceIndex],
      [fieldKey]: {
        ...instances[instanceIndex][fieldKey],
        value: field.type === 'array' ? (Array.isArray(value) ? value : [value]) : value
      }
    };
    
    const newConfigs = {
      ...scmProviderConfigs,
      [scmProviderId]: {
        ...scmProviderConfigs[scmProviderId],
        instances
      }
    };
    
    setScmProviderConfigs(newConfigs);
  };

  // Toggle environment variable usage
  const handleSCMEnvToggle = (scmProviderId, instanceIndex, fieldKey) => {
    const instances = [...(scmProviderConfigs[scmProviderId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultSCMInstance(scmProviderId, instanceIndex);
    }
    
    instances[instanceIndex] = {
      ...instances[instanceIndex],
      [fieldKey]: {
        ...instances[instanceIndex][fieldKey],
        asEnv: !instances[instanceIndex][fieldKey]?.asEnv
      }
    };
    
    const newConfigs = {
      ...scmProviderConfigs,
      [scmProviderId]: {
        ...scmProviderConfigs[scmProviderId],
        instances
      }
    };
    
    setScmProviderConfigs(newConfigs);
  };

  return (
    <div className="scm-config">
      <p>Select which SCM providers you want to configure:</p>
      
      {Object.entries(scmProviderDefinitions).map(([id, config]) => (
        <SCMProviderSection
          key={id}
          scmProviderType={id}
          scmProviderConfig={config}
          selected={scmProviders.includes(id)}
          instances={scmProviderConfigs[id]?.instances || []}
          count={scmProviderConfigs[id]?.count || 1}
          onToggle={() => toggleSCMProvider(id)}
          onCountChange={setSCMProviderCount}
          onFieldChange={handleSCMInputChange}
          onEnvToggle={handleSCMEnvToggle}
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