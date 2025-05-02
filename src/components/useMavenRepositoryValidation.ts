import { useState, useEffect } from 'react';
import mavenRepositoryConfigDefinition from './mavenRepositoryConfigDefinition';
import { 
  FormData, 
  Instance, 
  ConfigDefinition, 
  ValidationHookResult 
} from './types';

function useMavenRepositoryValidation(
  enabled: boolean,
  instances: Instance[],
  count: number,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);
  
  const configDef = mavenRepositoryConfigDefinition as ConfigDefinition;
  const configLabel = configDef.label;

  const validateAndUpdate = (currentInstances: Instance[] = instances, isEnabled: boolean = enabled): boolean => {
    if (!isEnabled) {
      updateData({
        ...data,
        mavenRepositoryConfig: {
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
    
    let isValid = true;
    const missingFields: string[] = [];
    
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
      mavenRepositoryConfig: {
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
    if (field.type === 'boolean') return false;
    
    return !fieldData?.value || fieldData.value.toString().trim() === '';
  };

  useEffect(() => {
    validateAndUpdate();
  }, [instances, enabled, count]);

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

export default useMavenRepositoryValidation;