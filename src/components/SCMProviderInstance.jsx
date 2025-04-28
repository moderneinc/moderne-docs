import React from 'react';
import ConfigField from './ConfigField';
import styles from './styles/SCMProviderInstance.module.css';

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
}) {
  const handleInputChange = (fieldKey, value) => {
    onFieldChange(scmProviderType, index, fieldKey, value);
  };

  const handleEnvToggle = (fieldKey) => {
    onEnvToggle(scmProviderType, index, fieldKey);
  };

  return (
    <div className={styles.instance}>
      <h4>{scmProviderConfig.label} #{index + 1}</h4>
      
      {scmProviderConfig.fields.map((field) => {
        const fieldConfig = instance[field.key] || {};
        const fieldValue = fieldConfig.value || (field.type === 'boolean' ? 'false' : '');
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