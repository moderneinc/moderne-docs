import { useState, useEffect } from 'react';
import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';

function useStrictRecipeSourcesValidation(fields, enabled, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);
  
  // Get the label from the config definition
  const configLabel = strictRecipeSourcesConfigDefinition.label;

  const validateAndUpdate = (fieldValues = fields, isEnabled = enabled) => {
    // If the step is disabled, always consider it valid
    if (!isEnabled) {
      updateData({
        ...data,
        strictRecipeSourcesConfig: {
          enabled: isEnabled,
          fields: fieldValues,
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
    
    strictRecipeSourcesConfigDefinition.fields.forEach(field => {
      if (field.required) {
        const fieldData = fieldValues[field.key];
        const isEmpty = !fieldData?.value || fieldData.value.toString().trim() === '';
        if (isEmpty) {
          isValid = false;
          missingFields.push(field.label);
        }
      }
    });

    // Update parent with validation result
    updateData({
      ...data,
      strictRecipeSourcesConfig: {
        enabled: isEnabled,
        fields: fieldValues,
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

  const hasFieldError = (fieldKey) => {
    // If step is disabled, no fields have errors
    if (!enabled || !validationAttempted) return false;

    const field = strictRecipeSourcesConfigDefinition.fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;

    const fieldData = fields[field.key];
    return !fieldData?.value || fieldData.value.toString().trim() === '';
  };

  // Run validation whenever fields or enabled state change
  useEffect(() => {
    validateAndUpdate();
  }, [fields, enabled]);

  // Handle validation trigger from parent
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

export default useStrictRecipeSourcesValidation;