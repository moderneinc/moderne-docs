import React, { useState, useEffect } from 'react';
import ConfigField from './ConfigField';
import generalConfigDefinition from './generalConfigDefinition';
import useGeneralValidation from './useGeneralValidation';
import styles from './styles/StepGeneralConfig.module.css';
import { FormData, FieldData, ConfigDefinition, Instance } from './types';

// Define commit option type
interface CommitOption {
  label: string;
  value: string;
}

// Define common commit options
const COMMIT_OPTIONS: CommitOption[] = [
  { label: 'Direct', value: 'Direct' },
  { label: 'Branch', value: 'Branch' },
  { label: 'Fork', value: 'Fork' },
  { label: 'Pull Request', value: 'PullRequest' },
  { label: 'Fork and Pull Request', value: 'ForkAndPullRequest' },  
];

interface StepGeneralConfigProps {
  data?: FormData;
  updateData: (data: FormData) => void;
}

export default function StepGeneralConfig({ 
  data = {}, 
  updateData 
}: StepGeneralConfigProps): JSX.Element {
  const [fields, setFields] = useState<Record<string, FieldData>>(data?.generalConfig?.fields || {});
  const [commitOptions, setCommitOptions] = useState<string[]>(data?.generalConfig?.commitOptions || []);

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useGeneralValidation(
    fields,
    generalConfigDefinition as ConfigDefinition,
    data,
    updateData
  );

  // Initialize fields with defaults and run initial validation
  useEffect(() => {
    if (Object.keys(fields).length === 0) {
      const defaultFields: Record<string, FieldData> = {};
      const configDef = generalConfigDefinition as ConfigDefinition;
      
      configDef.fields.forEach(field => {
        defaultFields[field.key] = {
          value: field.defaultValue || '',
          asEnv: false,
          envKey: field.envKey
        };
      });
      setFields(defaultFields);
      
      // Initial update to parent with validation
      const missingFields = configDef.fields
        .filter(f => f.required)
        .map(f => f.label);
        
      updateData({
        ...data,
        generalConfig: {
          fields: defaultFields,
          commitOptions: commitOptions
        },
        validation: {
          valid: false,
          missingFields: missingFields
        }
      });
    }
  }, []);

  // Update parent data whenever fields or commitOptions change
  useEffect(() => {
    if (data.generalConfig) {
      updateData({
        ...data,
        generalConfig: {
          ...data.generalConfig,
          fields,
          commitOptions
        }
      });
    }
  }, [fields, commitOptions]);

  const handleFieldChange = (fieldKey: string, value: string | string[] | boolean): void => {
    const configDef = generalConfigDefinition as ConfigDefinition;
    const fieldConfig = configDef.fields.find(f => f.key === fieldKey);
    const envKey = fieldConfig?.envKey || '';
    
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        value,
        envKey
      }
    }));
  };

  const handleEnvToggle = (fieldKey: string): void => {
    setFields(prev => ({
      ...prev,
      [fieldKey]: {
        ...prev[fieldKey],
        asEnv: !prev[fieldKey]?.asEnv
      }
    }));
  };

  // Handle toggling a commit option
  const toggleCommitOption = (optionValue: string): void => {
    setCommitOptions(prev => {
      return prev.includes(optionValue)
        ? prev.filter(opt => opt !== optionValue)
        : [...prev, optionValue];
    });
  };

  const configDef = generalConfigDefinition as ConfigDefinition;

  return (
    <div className={styles.container}>
      <h3>{configDef.label}</h3>

      <p>
        All agents must be configured with the variables listed below.
        For more information on the agent and additional context around
        the variables, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration">agent configuration documentation</a>.
      </p>
      
      {configDef.fields.map((field) => {
        const fieldData = fields[field.key] || ({} as Instance);
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
      
      <div className={styles.commitOptionsSection}>
        <h4>Default Commit Options</h4>
        <p>Use to restrict which commit options are available in Moderne (if the organizations service doesn't return any). <br/> <strong>If you don't check any, it defaults to making all commit options available.</strong></p>
        
        <div className={styles.commitOptionsList}>
          {COMMIT_OPTIONS.map((option) => (
            <label key={option.value} className={styles.commitOptionLabel}>
              <input
                type="checkbox"
                checked={commitOptions.includes(option.value)}
                onChange={() => toggleCommitOption(option.value)}
              />{' '}
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}