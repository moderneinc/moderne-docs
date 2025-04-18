import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import generalConfigDefinition from './generalConfigDefinition';

export default function StepGeneralConfig({ data, updateData }) {
  const [fields, setFields] = useState(data.generalConfig?.fields || {});
  
  // Initialize fields with defaults from definition
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
    }
  }, []);

  // Update parent when fields change
  useEffect(() => {
    updateData({
      generalConfig: {
        fields
      }
    });
  }, [fields]);

  const handleFieldChange = (fieldKey, value) => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        value
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
        
        return (
          <ConfigField
            key={field.key}
            field={field}
            value={fieldValue}
            onChange={(value) => handleFieldChange(field.key, value)}
            onEnvToggle={() => handleEnvToggle(field.key)}
            useAsEnv={useAsEnv}
            hasError={false}
            name={field.key}
          />
        );
      })}

      <style jsx>{`
        .general-config {
          margin-bottom: 2rem;
        }
        h3 {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}