import { useState, useEffect } from 'react';

function useGeneralValidation(fields, generalConfigDefinition, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);

  const validateAndUpdate = () => {
    let isValid = true;
    let missingFields = [];
    
    generalConfigDefinition.fields.forEach(field => {
      if (field.required) {
        const fieldData = fields[field.key];
        const isEmpty = !fieldData?.value || fieldData.value.toString().trim() === '';
        if (isEmpty) {
          isValid = false;
          missingFields.push(field.label);
        }
      }
    });

    // Update parent with both the general config validation and overall step validation
    updateData({
      ...data,
      generalConfig: {
        fields,
        validation: {
          valid: isValid,
          missingFields
        }
      },
      // This matches the SCM validation structure exactly
      providers: data?.providers || [],
      providerConfigs: data?.providerConfigs || {},
      validation: {
        valid: isValid,
        missingFields
      }
    });

    return isValid;
  };

  const hasFieldError = (fieldKey) => {
    if (!validationAttempted) return false;

    const field = generalConfigDefinition.fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;

    const fieldData = fields[field.key];
    return !fieldData?.value || fieldData.value.toString().trim() === '';
  };

  // Run validation on mount
  useEffect(() => {
    validateAndUpdate();
  }, []);

  // Run validation when fields change
  useEffect(() => {
    validateAndUpdate();
  }, [fields]);

  // Handle validation trigger from parent
  useEffect(() => {
    if (data?.triggerValidation?.['General Configuration']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      updateData({
        ...data,
        triggerValidation: {
          ...data.triggerValidation,
          'General Configuration': false
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

export default useGeneralValidation;