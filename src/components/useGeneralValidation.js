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

    updateData({
      ...data,
      generalConfig: {
        fields,
        validation: {
          valid: isValid,
          missingFields
        }
      },
      validation: {
        ...data?.validation,
        'General Configuration': isValid
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

  // Run validation when fields change
  useEffect(() => {
    validateAndUpdate();
  }, [fields]);

  // Handle validation trigger from parent
  useEffect(() => {
    if (data?.triggerValidation?.['General Configuration']) {
      setValidationAttempted(true);
      validateAndUpdate();
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