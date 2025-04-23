import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import orgServiceConfigDefinition from './orgServiceConfigDefinition';
import useOrgServiceValidation from './useOrgServiceValidation';
import styles from './styles/StepOrgServiceConfig.module.css';

export default function StepOrgServiceConfig({ data = {}, updateData }) {
  // Initialize enabled state from data or default to false
  const [enabled, setEnabled] = useState(data?.orgServiceConfig?.enabled || false);
  const [fields, setFields] = useState(data?.orgServiceConfig?.fields || {});

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useOrgServiceValidation(
    fields,
    enabled,
    data,
    updateData
  );

  // Initialize fields with defaults
  useEffect(() => {
    if (Object.keys(fields).length === 0) {
      const defaultFields = {};
      orgServiceConfigDefinition.fields.forEach(field => {
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
        orgServiceConfig: {
          enabled,
          fields: defaultFields,
          validation: {
            valid: true, // Initially valid because step is disabled by default
            missingFields: []
          }
        },
        validation: {
          ...data?.validation,
          'Organizations Service Configuration': true
        }
      });
    }
  }, []);

  // Update parent when enabled state changes
  useEffect(() => {
    if (data?.orgServiceConfig) {
      updateData({
        ...data,
        orgServiceConfig: {
          ...data.orgServiceConfig,
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
        envKey: orgServiceConfigDefinition.fields.find(f => f.key === fieldKey)?.envKey
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
          Add {orgServiceConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className={styles.infoText}>
            If you've <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/organizations-service">configured an Organizations service</a>, 
            you will need to enable this so the agent can know about it.

            For more information on these variables and how to configure them, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration#step-6-optionally-configure-the-organizations-service">Organizations service configuration documentation</a>.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className={styles.sectionTitle}>{orgServiceConfigDefinition.label}</div>
          <p>Configure your organization service connection settings.</p>
          
          {orgServiceConfigDefinition.fields.map((field) => {
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