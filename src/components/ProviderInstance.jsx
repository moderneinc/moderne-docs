import React from 'react';
import ConfigField from './ConfigField';

/**
 * Renders a single instance of a provider configuration
 */
function ProviderInstance({ 
  providerType, 
  providerConfig, 
  index, 
  instance, 
  onFieldChange, 
  onEnvToggle, 
  hasFieldError 
}) {
  const handleInputChange = (fieldKey, value) => {
    onFieldChange(providerType, index, fieldKey, value);
  };

  const handleEnvToggle = (fieldKey) => {
    onEnvToggle(providerType, index, fieldKey);
  };

  return (
    <div className="provider-instance">
      <h4>{providerConfig.label} #{index + 1}</h4>
      
      {providerConfig.fields.map((field) => {
        const fieldConfig = instance[field.key] || {};
        const fieldValue = fieldConfig.value || (field.type === 'boolean' ? 'false' : '');
        const useAsEnv = fieldConfig.asEnv || false;
        const showError = hasFieldError(providerType, index, field.key);
        
        return (
          <ConfigField
            key={`${providerType}-${index}-${field.key}`}
            field={field}
            value={fieldValue}
            onChange={(value) => handleInputChange(field.key, value)}
            onEnvToggle={() => handleEnvToggle(field.key)}
            useAsEnv={useAsEnv}
            hasError={showError}
            name={`${providerType}-${index}-${field.key}`}
          />
        );
      })}

      <style jsx>{`
        .provider-instance {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default ProviderInstance;