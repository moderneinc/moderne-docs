// StepArtifactoryLSTConfig.jsx

import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';
import useArtifactoryLSTValidation from './useArtifactoryLSTValidation';

export default function StepArtifactoryLSTConfig({ data = {}, updateData }) {
  // Initialize enabled state from data or default to false
  const [enabled, setEnabled] = useState(data?.artifactoryLSTConfig?.enabled || false);
  const [fields, setFields] = useState(data?.artifactoryLSTConfig?.fields || {});

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useArtifactoryLSTValidation(
    fields,
    enabled,
    data,
    updateData
  );

  // Initialize fields with defaults
  useEffect(() => {
    if (Object.keys(fields).length === 0) {
      const defaultFields = {};
      artifactoryLSTConfigDefinition.fields.forEach(field => {
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
        artifactoryLSTConfig: {
          enabled,
          fields: defaultFields,
          validation: {
            valid: true,
            missingFields: []
          }
        },
        validation: {
          ...data?.validation,
          [artifactoryLSTConfigDefinition.label]: true
        }
      });
    }
  }, []);

  // Update parent when enabled state changes
  useEffect(() => {
    if (data?.artifactoryLSTConfig) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
          ...data.artifactoryLSTConfig,
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
        envKey: artifactoryLSTConfigDefinition.fields.find(f => f.key === fieldKey)?.envKey
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
    <div className="artifactory-lst-config">
      <div className="enable-section">
        <label className="enable-checkbox">
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Use {artifactoryLSTConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className="info-text">
            This configuration is optional. Enable it if you want to use Artifactory as an LST source.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className="sectionTitle">{artifactoryLSTConfigDefinition.label}</div>
          <p className="special-validation-info">
            Note: You can leave all fields empty, but if you fill in any field, 
            all required fields must be completed.
          </p>
          
          {artifactoryLSTConfigDefinition.fields.map((field) => {
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
        .artifactory-lst-config {
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
        
        .special-validation-info {
          margin-top: 0.5rem;
          padding: 0.75rem;
          background-color: var(--ifm-color-info-lightest);
          border-left: 3px solid var(--ifm-color-info);
          border-radius: 0 4px 4px 0;
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