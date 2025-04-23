import React from 'react';
import ConfigField from './ConfigField';

function MavenRepositoryInstance({ 
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
    <div className="maven-repository-instance">
      <h4>{configDefinition.label} #{index + 1}</h4>
      
      {configDefinition.fields.map((field) => {
        const fieldConfig = instance[field.key] || {};
        const fieldValue = fieldConfig.value || (field.type === 'boolean' ? 'false' : '');
        const useAsEnv = fieldConfig.asEnv || false;
        const showError = hasFieldError(index, field.key);
        
        return (
          <ConfigField
            key={`maven-repository-${index}-${field.key}`}
            field={field}
            value={fieldValue}
            onChange={(value) => handleInputChange(field.key, value)}
            onEnvToggle={() => handleEnvToggle(field.key)}
            useAsEnv={useAsEnv}
            hasError={showError}
            name={`maven-repository-${index}-${field.key}`}
          />
        );
      })}

      <style jsx>{`
        .maven-repository-instance {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border: 1px solid var(--ifm-color-emphasis-200);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default MavenRepositoryInstance;