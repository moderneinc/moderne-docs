import { useState, useEffect } from 'react';
import orgServiceConfigDefinition from './orgServiceConfigDefinition';

function useOrgServiceValidation(fields, enabled, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);
  
  // Get the label from the config definition
  const configLabel = orgServiceConfigDefinition.label;

  const validateAndUpdate = () => {
    // If the step is disabled, always consider it valid
    if (!enabled) {
      updateData({
        ...data,
        orgServiceConfig: {
          enabled,
          fields,
          validation: {
            valid: true,
            missingFields: []
          }
        },
        validation: {
          ...data?.validation,
          [configLabel]: true
        }
      });
      return true;
    }
    
    // Otherwise validate required fields
    let isValid = true;
    let missingFields = [];
    
    orgServiceConfigDefinition.fields.forEach(field => {
      if (field.required) {
        const fieldData = fields[field.key];
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
      orgServiceConfig: {
        enabled,
        fields,
        validation: {
          valid: isValid,
          missingFields
        }
      },
      validation: {
        ...data?.validation,
        [configLabel]: isValid
      }
    });

    return isValid;
  };

  const hasFieldError = (fieldKey) => {
    // If step is disabled, no fields have errors
    if (!enabled || !validationAttempted) return false;

    const field = orgServiceConfigDefinition.fields.find(f => f.key === fieldKey);
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

export default useOrgServiceValidation;