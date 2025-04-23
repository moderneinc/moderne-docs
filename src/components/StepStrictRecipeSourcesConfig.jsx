import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';
import useStrictRecipeSourcesValidation from './useStrictRecipeSourcesValidation';
import styles from './styles/StepStrictRecipeSourcesConfig.module.css';

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
    <div className={styles.container}>
      <div className={styles.enableSection}>
        <label className={styles.enableCheckbox}>
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Add {strictRecipeSourcesConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className={styles.infoText}>
            Some organizations want recipe artifacts to only come from locations configured in the Moderne agent. 
            If you want to configure that, please enable this step.

            For more information on these variables and how to configure them, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources">strict recipe sources documentation</a>.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className={styles.sectionTitle}>{strictRecipeSourcesConfigDefinition.label}</div>
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
    </div>
  );
}