import { useState, useEffect } from 'react';
import mavenRepositoryConfigDefinition from './mavenRepositoryConfigDefinition';

function useMavenRepositoryValidation(enabled, instances, count, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);
  
  const configLabel = mavenRepositoryConfigDefinition.label;

  const validateAndUpdate = (currentInstances = instances, isEnabled = enabled) => {
    if (!isEnabled) {
      updateData({
        ...data,
        mavenRepositoryConfig: {
          enabled: isEnabled,
          instances: currentInstances,
          count,
          validation: {
            valid: true,
            missingFields: []
          }
        },
        validation: { 
          valid: true, 
          missingFields: [] 
        }
      });
      return true;
    }
    
    let isValid = true;
    let missingFields = [];
    
    for (let i = 0; i < count; i++) {
      const instance = currentInstances[i];
      if (!instance) continue;
      
      mavenRepositoryConfigDefinition.fields.forEach(field => {
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
        count,
        validation: {
          valid: isValid,
          missingFields
        }
      },
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });

    return isValid;
  };

  const hasFieldError = (instanceIndex, fieldKey) => {
    if (!enabled || !validationAttempted) return false;

    const instance = instances[instanceIndex];
    if (!instance) return false;

    const field = mavenRepositoryConfigDefinition.fields.find(f => f.key === fieldKey);
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