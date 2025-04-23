import ConfigField from './ConfigField';
import styles from './styles/SCMProviderInstance.module.css';

/**
 * Renders a single instance of an SCM provider configuration
 */
function SCMProviderInstance({ 
  scmProviderType, 
  scmProviderConfig, 
  index, 
  instance = {}, 
  onFieldChange, 
  onEnvToggle, 
  hasFieldError 
}) {
  // Handle field change
  const handleFieldChange = (fieldKey, value) => {
    // Call the parent's onFieldChange
    onFieldChange(fieldKey, value);
  };
  
  // Handle env toggle
  const handleEnvToggle = (fieldKey) => {
    onEnvToggle(fieldKey);
  };

  return (
    <div className={styles.instance}>
      <h4>{scmProviderConfig.label} #{index + 1}</h4>
      
      {scmProviderConfig.fields.map((field) => (
        <ConfigField
          key={`${scmProviderType}-${index}-${field.key}`}
          field={field}
          value={instance[field.key] || ''}
          onChange={(value) => handleFieldChange(field.key, value)}
          onEnvToggle={() => handleEnvToggle(field.key)}
          useAsEnv={instance[`${field.key}_useAsEnv`] || false}
          hasError={hasFieldError(field.key)}
          name={`${scmProviderType}-${index}-${field.key}`}
        />
      ))}
    </div>
  );
}

export default SCMProviderInstance;