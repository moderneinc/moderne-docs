import React, { useState, useEffect } from 'react';
import styles from './styles/OptionalStepComponent.module.css';
import ConfigField from './ConfigField';

export default function OptionalStepComponent({
  configKey,           // Key for the config in data (e.g., 'orgServiceConfig')
  configDefinition,    // Configuration definition
  data,                // Current form data
  updateData,          // Function to update data
  validationHook,      // Validation hook
  hasInstances = false, // Whether this config uses instances
  infoText,            // Text to show when disabled
  instanceComponent    // Component to render for instances
}) {
  // State
  const [enabled, setEnabled] = useState(data?.[configKey]?.enabled || false);
  const [fields, setFields] = useState(data?.[configKey]?.fields || {});
  const [instances, setInstances] = useState(data?.[configKey]?.instances || []);
  const [count, setCount] = useState(data?.[configKey]?.count || 1);

  // Get validation functions
  const hookArgs = hasInstances 
    ? [enabled, instances, count, data, updateData]
    : [fields, enabled, data, updateData];
    
  const { validateAndUpdate, hasFieldError } = validationHook(...hookArgs);

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
        const defaultFields = {};
        configDefinition.fields.forEach(field => {
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

  // Create default instance
  const createDefaultInstance = (index) => {
    const instance = {};
    configDefinition.fields.forEach(field => {
      let defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index)
      };
    });
    return instance;
  };

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
  const handleFieldChange = (fieldKey, value) => {
    const newFields = {
      ...fields,
      [fieldKey]: {
        ...fields[fieldKey],
        value,
        envKey: configDefinition.fields.find(f => f.key === fieldKey)?.envKey
      }
    };
    
    setFields(newFields);
    validateAndUpdate(newFields, enabled);
  };

  const handleEnvToggle = (fieldKey) => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        asEnv: !prev[fieldKey]?.asEnv
      }
    }));
  };

  // Instance handlers
  const handleCountChange = (newCount) => {
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

  const handleInstanceFieldChange = (instanceIndex, fieldKey, value) => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    const field = configDefinition.fields.find(f => f.key === fieldKey);
    
    newInstances[instanceIndex] = {
      ...newInstances[instanceIndex],
      [fieldKey]: {
        ...newInstances[instanceIndex][fieldKey],
        value: field.type === 'array' ? (Array.isArray(value) ? value : [value]) : value
      }
    };
    
    setInstances(newInstances);
    validateAndUpdate(newInstances, enabled);
  };

  const handleInstanceEnvToggle = (instanceIndex, fieldKey) => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    newInstances[instanceIndex] = {
      ...newInstances[instanceIndex],
      [fieldKey]: {
        ...newInstances[instanceIndex][fieldKey],
        asEnv: !newInstances[instanceIndex][fieldKey]?.asEnv
      }
    };
    
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
                const fieldData = fields[field.key] || {};
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