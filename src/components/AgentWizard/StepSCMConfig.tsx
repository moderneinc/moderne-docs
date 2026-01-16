import React, { useState, useEffect } from 'react';
import scmProviderDefinitions from './scmProviderDefinitions';
import SCMProviderSection from './SCMProviderSection';
import useSCMValidation from './useSCMValidation';
import styles from './StepSCMConfig.module.css';
import { FormData, Instance, ConfigDefinition } from './types';

// Type for SCM provider configurations
interface SCMProviderConfig {
  count: number;
  instances: Instance[];
}

interface SCMProviderConfigs {
  [providerId: string]: SCMProviderConfig;
}

interface SCMProviderDefinitions {
  [providerId: string]: ConfigDefinition;
}

interface StepSCMConfigProps {
  data: FormData;
  updateData: (data: FormData) => void;
}

/**
 * SCM Configuration Step Component
 */
export default function StepSCMConfig({ data, updateData }: StepSCMConfigProps): JSX.Element {
  // Initialize state from parent data or default values
  const [scmProviders, setScmProviders] = useState<string[]>(data.providers || []);
  const [scmProviderConfigs, setScmProviderConfigs] = useState<SCMProviderConfigs>(() => {
    if (data.providerConfigs) {
      const convertedConfigs: SCMProviderConfigs = {};
      Object.entries(data.providerConfigs).forEach(([providerId, config]) => {
        convertedConfigs[providerId] = {
          count: config.instances.length,
          instances: config.instances
        };
      });
      return convertedConfigs;
    }
    return {};
  });
  
  // Use custom validation hook
  const { validateAndUpdate, hasFieldError } = useSCMValidation(
    scmProviders, 
    scmProviderConfigs,
    scmProviderDefinitions as SCMProviderDefinitions,
    data,
    updateData
  );
  
  // Update parent state when local state changes
  useEffect(() => {
    validateAndUpdate();
  }, [scmProviders, scmProviderConfigs]);

  // Add or remove an SCM provider
  const toggleSCMProvider = (id: string): void => {
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
  const createDefaultSCMInstance = (scmProviderId: string, index: number): Instance => {
    const instance: Instance = {};
    const providerDef = scmProviderDefinitions[scmProviderId] as ConfigDefinition;
    
    providerDef.fields.forEach(field => {
      let defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index.toString())
      };
    });
    return instance;
  };

  // Update the number of instances for an SCM provider
  const setSCMProviderCount = (scmProviderId: string, count: number): void => {
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
  const handleSCMInputChange = (
    scmProviderId: string, 
    instanceIndex: number, 
    fieldKey: string, 
    value: string | string[] | boolean
  ): void => {
    const instances = [...(scmProviderConfigs[scmProviderId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultSCMInstance(scmProviderId, instanceIndex);
    }
    
    const providerDef = scmProviderDefinitions[scmProviderId] as ConfigDefinition;
    const field = providerDef.fields.find(f => f.key === fieldKey);
    
    if (!field) return;
    
    const updatedInstance = {
      ...instances[instanceIndex]
    };
    
    updatedInstance[fieldKey] = {
      ...updatedInstance[fieldKey],
      value: field.type === 'array' 
        ? (Array.isArray(value) ? value : [value as string]) 
        : value
    };
    
    instances[instanceIndex] = updatedInstance;
    
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
  const handleSCMEnvToggle = (scmProviderId: string, instanceIndex: number, fieldKey: string): void => {
    const instances = [...(scmProviderConfigs[scmProviderId]?.instances || [])];
    
    if (!instances[instanceIndex]) {
      instances[instanceIndex] = createDefaultSCMInstance(scmProviderId, instanceIndex);
    }
    
    const updatedInstance = {
      ...instances[instanceIndex]
    };
    
    updatedInstance[fieldKey] = {
      ...updatedInstance[fieldKey],
      asEnv: !updatedInstance[fieldKey]?.asEnv
    };
    
    instances[instanceIndex] = updatedInstance;
    
    const newConfigs = {
      ...scmProviderConfigs,
      [scmProviderId]: {
        ...scmProviderConfigs[scmProviderId],
        instances
      }
    };
    
    setScmProviderConfigs(newConfigs);
  };

  const handleFieldError = (scmProviderType: string, index: number, fieldKey: string): boolean => {
    return hasFieldError(index, fieldKey);
  };

  return (
    <div className={styles.container}>
      <p>
        Connecting the agent to your SCM enables Moderne to display recipe results in the UI and 
        commit changes from recipes back to your SCM (in the form of PRs, forks, commits, etc).

        For more information on the variables or how to configure your SCM, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration/#step-4-configure-the-agent-to-work-with-your-scms">SCM configuration documentation</a>.
      </p>
      
      {Object.entries(scmProviderDefinitions).map(([id, config]) => (
        <SCMProviderSection
          key={id}
          scmProviderType={id}
          scmProviderConfig={config as ConfigDefinition}
          selected={scmProviders.includes(id)}
          instances={scmProviderConfigs[id]?.instances || []}
          count={scmProviderConfigs[id]?.count || 1}
          onToggle={() => toggleSCMProvider(id)}
          onCountChange={setSCMProviderCount}
          onFieldChange={handleSCMInputChange}
          onEnvToggle={handleSCMEnvToggle}
          hasFieldError={handleFieldError}
        />
      ))}
    </div>
  );
}