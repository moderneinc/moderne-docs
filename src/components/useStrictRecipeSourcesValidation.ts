import { useState, useEffect } from 'react';
import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';
import { 
  FormData, 
  FieldData, 
  ConfigDefinition, 
  ValidationHookResult 
} from './types';

function useStrictRecipeSourcesValidation(
  fields: Record<string, FieldData>,
  enabled: boolean,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);
  
  // Get the label from the config definition
  const configDef = strictRecipeSourcesConfigDefinition as ConfigDefinition;
  const configLabel = configDef.label;

  const validateAndUpdate = (...args: any[]): boolean => {
    // Extract arguments
    const fieldValues = args.length > 0 && args[0] ? args[0] : fields;
    const isEnabled = args.length > 1 ? args[1] : enabled;
    
    // If the step is disabled, always consider it valid
    if (!isEnabled) {
      updateData({
        ...data,
        strictRecipeSourcesConfig: {
          enabled: isEnabled,
          fields: fieldValues
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
    
    configDef.fields.forEach(field => {
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
        fields: fieldValues
      },
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });

    return isValid;
  };

  const hasFieldError = (fieldKey: string | number): boolean => {
    // If step is disabled, no fields have errors
    if (!enabled || !validationAttempted) return false;

    const field = configDef.fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;

    const fieldData = fields[field.key as string];
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