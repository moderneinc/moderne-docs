import { useState, useEffect } from 'react';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';
import { 
  FormData, 
  Instance, 
  ConfigDefinition,
  ValidationHookResult 
} from './types';

function useArtifactoryLSTValidation(
  enabled: boolean,
  instances: Instance[],
  count: number,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);
  
  const configDef = artifactoryLSTConfigDefinition as ConfigDefinition;
  const configLabel = configDef.label;

  const validateAndUpdate = (...args: any[]): boolean => {
    // Extract arguments based on expected types
    const currentInstances = args.length > 0 && Array.isArray(args[0]) ? args[0] : instances;
    const isEnabled = args.length > 1 && typeof args[1] === 'boolean' ? args[1] : enabled;
    
    // If disabled, always valid
    if (!isEnabled) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
          enabled: isEnabled,
          instances: currentInstances,
          count
        },
        validation: { 
          valid: true, 
          missingFields: [] 
        }
      });
      return true;
    }
    
    // Otherwise validate required fields
    let isValid = true;
    const missingFields: string[] = [];
    
    // Check each instance
    for (let i = 0; i < count; i++) {
      const instance = currentInstances[i];
      if (!instance) continue;
      
      configDef.fields.forEach(field => {
        if (field.required) {
          const fieldData = instance[field.key];
          const isEmpty = !fieldData?.value || fieldData.value.toString().trim() === '';
          if (isEmpty) {
            isValid = false;
            missingFields.push(`Instance #${i+1} ${field.label}`);
          }
        }
      });
    }

    updateData({
      ...data,
      artifactoryLSTConfig: {
        enabled: isEnabled,
        instances: currentInstances,
        count
      },
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });

    return isValid;
  };

  const hasFieldError = (instanceIndex: number, fieldKey?: string): boolean => {
    if (!enabled || !validationAttempted || !fieldKey) return false;

    const instance = instances[instanceIndex];
    if (!instance) return false;

    const field = configDef.fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;

    const fieldData = instance[field.key];
    return !fieldData?.value || fieldData.value.toString().trim() === '';
  };

  // Run validation on changes
  useEffect(() => {
    validateAndUpdate();
  }, [instances, enabled, count]);

  // Handle validation trigger
  useEffect(() => {
    if (data?.triggerValidation?.[configLabel]) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      updateData({
        ...data,
        triggerValidation: {
          ...data.triggerValidation,
          [configLabel]: false
        }
      });
    }
  }, [data?.triggerValidation]);

  return {
    validationAttempted,
    setValidationAttempted,
    validateAndUpdate,
    hasFieldError
  };
}

export default useArtifactoryLSTValidation;