import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import orgServiceConfigDefinition from './orgServiceConfigDefinitions';
import useOrgServiceValidation from './useOrgServiceValidation';

export default function StepOrgServiceConfig({ data = {}, updateData }) {
  // Initialize enabled state from data or default to false
  const [enabled, setEnabled] = useState(data?.orgServiceConfig?.enabled || false);
  const [fields, setFields] = useState(data?.orgServiceConfig?.fields || {});

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useOrgServiceValidation(
    fields,
    enabled,
    orgServiceConfigDefinition,
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
    <div className="org-service-config">
      <div className="enable-section">
        <label className="enable-checkbox">
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Add {orgServiceConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className="info-text">
            If you've configured an Organizations service, you will need to enable this so the agent can know about it.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className="sectionTitle">{orgServiceConfigDefinition.label}</div>
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
      
      <style jsx>{`
        .org-service-config {
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