import { useState, useEffect } from 'react';
import { 
  FormData, 
  FieldData, 
  ConfigDefinition, 
  ValidationHookResult 
} from './types';

function useGeneralValidation(
  fields: Record<string, FieldData>,
  generalConfigDefinition: ConfigDefinition,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);

  const validateAndUpdate = (...args: any[]): boolean => {
    // Determine if called with field values or not
    const fieldValues = args.length > 0 && args[0] ? args[0] : fields;
    
    let isValid = true;
    const missingFields: string[] = [];
    
    generalConfigDefinition.fields.forEach(field => {
      if (field.required) {
        const fieldData = fieldValues[field.key];
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
        fields: fieldValues,
        commitOptions: data.generalConfig?.commitOptions || []
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

  const hasFieldError = (fieldKey: string | number): boolean => {
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
    if (data?.triggerValidation?.['Core Variables']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      updateData({
        ...data,
        triggerValidation: {
          ...data.triggerValidation,
          'Core Variables': false
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