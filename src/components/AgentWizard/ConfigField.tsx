import React from 'react';
import ArrayField from './ArrayField';
import styles from './ConfigField.module.css';

/**
 * Renders a configuration field based on its type
 */
function ConfigField({ 
  field, 
  value, 
  onChange, 
  onEnvToggle, 
  useAsEnv, 
  hasError, 
  name 
}) {
  const renderFieldInput = () => {
    if (field.type === 'array') {
      return (
        <ArrayField
          field={field}
          value={value}
          onChange={onChange}
        />
      );
    } else if (field.type === 'boolean') {
      return (
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value="true"
              checked={value === 'true'}
              onChange={() => onChange('true')}
            />{' '}
            True
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value="false"
              checked={value === 'false'}
              onChange={() => onChange('false')}
            />{' '}
            False
          </label>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${styles.fieldInput}`}
          placeholder={field.defaultValue || ''}
          aria-required={field.required}
          aria-invalid={hasError}
        />
      );
    }
  };

  return (
    <div className={styles.fieldItem}>
      <label className={styles.fieldLabel}>
        {field.label}
        {field.required && <span className={styles.requiredMark}>*</span>}
      </label>
      
      {field.description && (
        <div 
          className={styles.fieldDescription} 
          dangerouslySetInnerHTML={{ __html: field.description }}
        />
      )}
      
      {renderFieldInput()}
      
      {hasError && (
        <div className={styles.fieldError}>This field is required</div>
      )}
      
      <label className={styles.envToggle}>
        <input
          type="checkbox"
          checked={useAsEnv}
          onChange={onEnvToggle}
        />{' '}
        Use an exported environment variable
      </label>
    </div>
  );
}

export default ConfigField;