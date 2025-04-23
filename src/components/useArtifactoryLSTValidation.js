import { useState, useEffect } from 'react';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';

function useArtifactoryLSTValidation(enabled, instances, count, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);
  const configLabel = artifactoryLSTConfigDefinition.label;

  const validateAndUpdate = (currentInstances = instances, isEnabled = enabled) => {
    // If disabled, always valid
    if (!isEnabled) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
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
    
    // Otherwise validate required fields
    let isValid = true;
    let missingFields = [];
    
    // Check each instance
    for (let i = 0; i < count; i++) {
      const instance = currentInstances[i];
      if (!instance) continue;
      
      artifactoryLSTConfigDefinition.fields.forEach(field => {
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

    const field = artifactoryLSTConfigDefinition.fields.find(f => f.key === fieldKey);
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