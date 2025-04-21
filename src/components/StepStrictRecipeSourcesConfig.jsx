import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';
import useStrictRecipeSourcesValidation from './useStrictRecipeSourcesValidation';

export default function StepStrictRecipeSourcesConfig({ data = {}, updateData }) {
  // Initialize enabled state from data or default to false
  const [enabled, setEnabled] = useState(data?.strictRecipeSourcesConfig?.enabled || false);
  const [fields, setFields] = useState(data?.strictRecipeSourcesConfig?.fields || {});

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useStrictRecipeSourcesValidation(
    fields,
    enabled,
    data,
    updateData
  );

  // Initialize fields with defaults
  useEffect(() => {
    if (Object.keys(fields).length === 0) {
      const defaultFields = {};
      strictRecipeSourcesConfigDefinition.fields.forEach(field => {
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
        strictRecipeSourcesConfig: {
          enabled,
          fields: defaultFields,
          validation: {
            valid: true, // Initially valid because step is disabled by default
            missingFields: []
          }
        },
        validation: {
          ...data?.validation,
          'Strict Recipe Sources Configuration': true
        }
      });
    }
  }, []);

  // Update parent when enabled state changes
  useEffect(() => {
    if (data?.strictRecipeSourcesConfig) {
      updateData({
        ...data,
        strictRecipeSourcesConfig: {
          ...data.strictRecipeSourcesConfig,
          enabled
        }
      });
    }
  }, [enabled]);

  const handleFieldChange = (fieldKey, value) => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        value,
        envKey: strictRecipeSourcesConfigDefinition.fields.find(f => f.key === fieldKey)?.envKey
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

  const toggleEnabled = () => {
    setEnabled(prev => !prev);
  };

  return (
    <div className="strict-recipe-sources-config">
      <div className="enable-section">
        <label className="enable-checkbox">
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Enable {strictRecipeSourcesConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className="info-text">
            This configuration is optional. Enable it if you need to restrict recipe sources.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className="sectionTitle">{strictRecipeSourcesConfigDefinition.label}</div>
          <p>Configure your recipe sources service connection settings.</p>
          
          {strictRecipeSourcesConfigDefinition.fields.map((field) => {
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
        </>
      )}
      
      <style jsx>{`
        .strict-recipe-sources-config {
          margin-bottom: 1.5rem;
        }
        
        .enable-section {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background-color: var(--ifm-color-emphasis-100);
          border-radius: 4px;
        }
        
        .enable-checkbox {
          font-weight: bold;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .info-text {
          margin-top: 0.5rem;
          margin-bottom: 0;
          color: var(--ifm-color-emphasis-700);
        }
        
        .sectionTitle {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 1rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
      `}</style>
    </div>
  );
}