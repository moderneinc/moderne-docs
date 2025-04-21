import { useState, useEffect } from 'react';

function useOrgServiceValidation(fields, enabled, orgServiceConfigDefinition, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);

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
          'Organizations Service Configuration': true
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
        'Organizations Service Configuration': isValid
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
    if (data?.triggerValidation?.['Organizations Service Configuration']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      updateData({
        ...data,
        triggerValidation: {
          ...data.triggerValidation,
          'Organizations Service Configuration': false
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