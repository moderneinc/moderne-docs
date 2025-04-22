import React from 'react';
import ConfigField from './ConfigField';

/**
 * Renders a single instance of an Artifactory LST configuration
 */
function ArtifactoryLSTInstance({ 
  index, 
  instance, 
  configDefinition,
  onFieldChange, 
  onEnvToggle, 
  hasFieldError 
}) {
  const handleInputChange = (fieldKey, value) => {
    onFieldChange(index, fieldKey, value);
  };

  const handleEnvToggle = (fieldKey) => {
    onEnvToggle(index, fieldKey);
  };

  return (
    <div className="artifactory-lst-instance">
      <h4>{configDefinition.label} #{index + 1}</h4>
      
      {configDefinition.fields.map((field) => {
        const fieldConfig = instance[field.key] || {};
        const fieldValue = fieldConfig.value || (field.type === 'boolean' ? 'false' : '');
        const useAsEnv = fieldConfig.asEnv || false;
        const showError = hasFieldError(index, field.key);
        
        return (
          <ConfigField
            key={`artifactory-${index}-${field.key}`}
            field={field}
            value={fieldValue}
            onChange={(value) => handleInputChange(field.key, value)}
            onEnvToggle={() => handleEnvToggle(field.key)}
            useAsEnv={useAsEnv}
            hasError={showError}
            name={`artifactory-${index}-${field.key}`}
          />
        );
      })}

      <style jsx>{`
        .artifactory-lst-instance {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default ArtifactoryLSTInstance;