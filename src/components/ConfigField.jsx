import React from 'react';

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
  // Render different input types based on field type
  const renderFieldInput = () => {
    if (field.type === 'boolean') {
      return (
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name={name}
              value="true"
              checked={value === 'true'}
              onChange={() => onChange('true')}
            />{' '}
            True
          </label>
          <label className="radio-label">
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
          className={`field-input ${hasError ? 'field-input-error' : ''}`}
          placeholder={field.defaultValue || ''}
          aria-required={field.required}
          aria-invalid={hasError}
        />
      );
    }
  };

  return (
    <div className="field-item">
      <label className="field-label">
        {field.label}
        {field.required && <span className="required-mark">*</span>}
      </label>
      
      {field.description && (
        <div className="field-description">{field.description}</div>
      )}
      
      {renderFieldInput()}
      
      {hasError && (
        <div className="field-error">This field is required</div>
      )}
      
      <label className="env-toggle">
        <input
          type="checkbox"
          checked={useAsEnv}
          onChange={onEnvToggle}
        />{' '}
        Use as environment variable
      </label>

      <style jsx>{`
        .field-item {
          margin-bottom: 1rem;
        }
        .field-label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .required-mark {
          color: var(--ifm-color-danger);
          margin-left: 0.25rem;
        }
        .field-description {
          font-size: 0.85rem;
          color: var(--ifm-color-emphasis-600);
          margin-bottom: 0.5rem;
        }
        .field-input {
          width: 100%;
          max-width: 400px;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: 4px;
        }
        .field-input-error {
          border-color: var(--ifm-color-danger);
        }
        .field-error {
          color: var(--ifm-color-danger);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        .env-toggle {
          font-size: 0.85rem;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
        }
        .radio-group {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .radio-label {
          display: flex;
          align-items: center;
        }
        .radio-label input {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default ConfigField;