import React from 'react';
import ConfigField from './ConfigField';
import styles from './SCMProviderInstance.module.css';
import { Field, ConfigDefinition, Instance } from './types';

interface SCMProviderInstanceProps {
  scmProviderType: string;
  scmProviderConfig: ConfigDefinition;
  index: number;
  instance: Instance;
  onFieldChange: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string, 
    value: string | string[] | boolean
  ) => void;
  onEnvToggle: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string
  ) => void;
  hasFieldError: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string
  ) => boolean;
}

/**
 * Renders a single instance of an SCM provider configuration
 */
function SCMProviderInstance({ 
  scmProviderType, 
  scmProviderConfig, 
  index, 
  instance, 
  onFieldChange, 
  onEnvToggle, 
  hasFieldError 
}: SCMProviderInstanceProps) {
  const handleInputChange = (fieldKey: string, value: string | string[] | boolean): void => {
    onFieldChange(scmProviderType, index, fieldKey, value);
  };

  const handleEnvToggle = (fieldKey: string): void => {
    onEnvToggle(scmProviderType, index, fieldKey);
  };

  return (
    <div className={styles.instance}>
      <h4>{scmProviderConfig.label} #{index + 1}</h4>
      
      {scmProviderConfig.fields.map((field: Field) => {
        const fieldConfig = instance[field.key] || ({} as Instance);
        const fieldValue = fieldConfig.value !== undefined 
          ? fieldConfig.value 
          : (field.type === 'boolean' ? 'false' : '');
        const useAsEnv = fieldConfig.asEnv || false;
        const showError = hasFieldError(scmProviderType, index, field.key);
        
        return (
          <ConfigField
            key={`${scmProviderType}-${index}-${field.key}`}
            field={field}
            value={fieldValue}
            onChange={(value) => handleInputChange(field.key, value)}
            onEnvToggle={() => handleEnvToggle(field.key)}
            useAsEnv={useAsEnv}
            hasError={showError}
            name={`${scmProviderType}-${index}-${field.key}`}
          />
        );
      })}
    </div>
  );
}

export default SCMProviderInstance;