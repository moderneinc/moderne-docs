import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import generalConfigDefinition from './generalConfigDefinition';
import useGeneralValidation from './useGeneralValidation';

export default function StepGeneralConfig({ data = {}, updateData }) {
  const [fields, setFields] = useState(data?.generalConfig?.fields || {});

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useGeneralValidation(
    fields,
    generalConfigDefinition,
    data,
    updateData
  );

  // Initialize fields with defaults and run initial validation
  useEffect(() => {
    if (Object.keys(fields).length === 0) {
      const defaultFields = {};
      generalConfigDefinition.fields.forEach(field => {
        defaultFields[field.key] = {
          value: field.defaultValue || '',
          asEnv: false,
          envKey: field.envKey
        };
      });
      setFields(defaultFields);
      
      // Initial update to parent with validation
      updateData({
        ...data,
        generalConfig: {
          fields: defaultFields,
          validation: {
            valid: false,
            missingFields: generalConfigDefinition.fields
              .filter(f => f.required)
              .map(f => f.label)
          }
        },
        validation: {
          ...data?.validation,
          'General Configuration': false
        }
      });
    }
  }, []);

  const handleFieldChange = (fieldKey, value) => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        value,
        envKey: generalConfigDefinition.fields.find(f => f.key === fieldKey)?.envKey
      }
    }));
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

  return (
    <div className="general-config">
      <h3>{generalConfigDefinition.label}</h3>
      
      {generalConfigDefinition.fields.map((field) => {
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
    </div>
  );
}