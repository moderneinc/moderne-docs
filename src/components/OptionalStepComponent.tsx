import React, { useState, useEffect } from 'react';
import styles from './styles/OptionalStepComponent.module.css';
import ConfigField from './ConfigField';
import { 
  Field, 
  FieldData, 
  Instance, 
  ConfigDefinition, 
  FormData 
} from './types';

interface ValidationHookResult {
  validateAndUpdate: (...args: any[]) => boolean;
  hasFieldError: (instanceIndex: number | string, fieldKey?: string) => boolean;
}

type InstanceComponentProps = {
  index: number;
  instance: Instance;
  configDefinition: ConfigDefinition;
  onFieldChange: (index: number, fieldKey: string, value: string | string[] | boolean) => void;
  onEnvToggle: (index: number, fieldKey: string) => void;
  hasFieldError: (index: number, fieldKey: string) => boolean;
};

interface OptionalStepComponentProps {
  configKey: string;                                               // Key for the config in data (e.g., 'orgServiceConfig')
  configDefinition: ConfigDefinition;                              // Configuration definition
  data: FormData;                                                  // Current form data
  updateData: (data: FormData) => void;                            // Function to update data
  validationHook: (...args: any[]) => ValidationHookResult;        // Validation hook
  hasInstances?: boolean;                                          // Whether this config uses instances
  infoText?: React.ReactNode;                                      // Text to show when disabled
  instanceComponent?: React.ComponentType<InstanceComponentProps>;                     // Component to render for instances
}

export default function OptionalStepComponent({
  configKey,
  configDefinition,
  data,
  updateData,
  validationHook,
  hasInstances = false,
  infoText,
  instanceComponent
}: OptionalStepComponentProps) {
  // State
  const [enabled, setEnabled] = useState<boolean>(data?.[configKey]?.enabled || false);
  const [fields, setFields] = useState<Record<string, FieldData>>(data?.[configKey]?.fields || {});
  const [instances, setInstances] = useState<Instance[]>(data?.[configKey]?.instances || []);
  const [count, setCount] = useState<number>(data?.[configKey]?.count || 1);

  // Get validation functions
  const hookArgs = hasInstances 
    ? [enabled, instances, count, data, updateData]
    : [fields, enabled, data, updateData];
    
  const { validateAndUpdate, hasFieldError } = validationHook(...hookArgs);

  // Create default instance
  const createDefaultInstance = (index: number): Instance => {
    const instance: Instance = {};
    configDefinition.fields.forEach((field: Field) => {
      const defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index.toString())
      };
    });
    return instance;
  };

  // Initialize fields or instances
  useEffect(() => {
    if (hasInstances) {
      if (instances.length === 0) {
        const defaultInstances = Array.from(
          { length: count }, 
          (_, index) => createDefaultInstance(index)
        );
        
        setInstances(defaultInstances);
        
        updateData({
          ...data,
          [configKey]: {
            enabled,
            instances: defaultInstances,
            count,
            validation: {
              valid: true,
              missingFields: []
            }
          },
          validation: {
            valid: true,
            missingFields: []
          }
        });
      }
    } else {
      if (Object.keys(fields).length === 0) {
        const defaultFields: Record<string, FieldData> = {};
        configDefinition.fields.forEach((field: Field) => {
          defaultFields[field.key] = {
            value: field.defaultValue || '',
            asEnv: false,
            envKey: field.envKey
          };
        });
        
        setFields(defaultFields);
        
        updateData({
          ...data,
          [configKey]: {
            enabled,
            fields: defaultFields,
            validation: {
              valid: true,
              missingFields: []
            }
          },
          validation: {
            valid: true,
            missingFields: []
          }
        });
      }
    }
  }, []);

  // Update parent when enabled changes
  useEffect(() => {
    if (data?.[configKey]) {
      updateData({
        ...data,
        [configKey]: {
          ...data[configKey],
          enabled
        }
      });
    }
  }, [enabled]);

  // Field handlers for non-instance config
  const handleFieldChange = (fieldKey: string, value: string | string[] | boolean): void => {
    const fieldConfig = configDefinition.fields.find(f => f.key === fieldKey);
    const envKey = fieldConfig?.envKey || '';
    
    const newFields = {
      ...fields,
      [fieldKey]: {
        ...fields[fieldKey],
        value,
        envKey
      }
    };
    
    setFields(newFields);
    validateAndUpdate(newFields, enabled);
  };

  const handleEnvToggle = (fieldKey: string): void => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        asEnv: !prev[fieldKey]?.asEnv
      }
    }));
  };

  // Instance handlers
  const handleCountChange = (newCount: number): void => {
    newCount = Math.max(1, newCount);
    
    let newInstances = [...instances];
    
    if (newCount > count) {
      for (let i = count; i < newCount; i++) {
        newInstances.push(createDefaultInstance(i));
      }
    } else if (newCount < count) {
      newInstances = newInstances.slice(0, newCount);
    }
    
    setCount(newCount);
    setInstances(newInstances);
    
    updateData({
      ...data,
      [configKey]: {
        ...data[configKey],
        count: newCount,
        instances: newInstances
      }
    });
  };

  const handleInstanceFieldChange = (instanceIndex: number, fieldKey: string, value: string | string[] | boolean): void => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    const field = configDefinition.fields.find(f => f.key === fieldKey);
    
    if (!field) return;
    
    const updatedInstance = {
      ...newInstances[instanceIndex]
    };
    
    updatedInstance[fieldKey] = {
      ...updatedInstance[fieldKey],
      value: field.type === 'array' 
        ? (Array.isArray(value) ? value : [value as string]) 
        : value
    };
    
    newInstances[instanceIndex] = updatedInstance;
    setInstances(newInstances);
    validateAndUpdate(newInstances, enabled);
  };

  const handleInstanceEnvToggle = (instanceIndex: number, fieldKey: string): void => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    const updatedInstance = {
      ...newInstances[instanceIndex]
    };
    
    updatedInstance[fieldKey] = {
      ...updatedInstance[fieldKey],
      asEnv: !updatedInstance[fieldKey]?.asEnv
    };
    
    newInstances[instanceIndex] = updatedInstance;
    setInstances(newInstances);
  };

  return (
    <div className={styles.container}>
      <div className={styles.enableSection}>
        <label className={styles.enableCheckbox}>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />{' '}
          Use {configDefinition.label}
        </label>
        
        {!enabled && infoText && (
          <p className={styles.infoText}>{infoText}</p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className={styles.sectionTitle}>{configDefinition.label}</div>
          
          {hasInstances ? (
            <>
              <label className={styles.instanceCount}>
                Number of {configDefinition.label} Configs:{' '}
                <input
                  type="number"
                  min={1}
                  value={count}
                  onChange={(e) => handleCountChange(parseInt(e.target.value || '1', 10))}
                  style={{ width: '60px' }}
                />
              </label>
              
              {Array.from({ length: count }).map((_, index) => {
                const InstanceComponent = instanceComponent;
                return (
                  <InstanceComponent
                    key={`${configKey}-instance-${index}`}
                    index={index}
                    instance={instances[index] || {}}
                    configDefinition={configDefinition}
                    onFieldChange={handleInstanceFieldChange}
                    onEnvToggle={handleInstanceEnvToggle}
                    hasFieldError={hasFieldError}
                  />
                );
              })}
            </>
          ) : (
            <>
              <p>Configure your {configDefinition.label.toLowerCase()} settings.</p>
              
              {configDefinition.fields.map((field) => {
                const fieldData = fields[field.key] || ({} as Instance);
                const fieldValue = fieldData.value || field.defaultValue || '';
                const useAsEnv = fieldData.asEnv || false;
                const showError = hasFieldError(field.key);
                
                return (
                  <ConfigField
                    key={field.key}
                    field={field}
                    value={fieldValue}
                    onChange={(value) => handleFieldChange(field.key, value)}
                    onEnvToggle={() => handleEnvToggle(field.key)}
                    useAsEnv={useAsEnv}
                    hasError={showError}
                    name={field.key}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}