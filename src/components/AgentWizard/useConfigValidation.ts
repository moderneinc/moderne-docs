import { useState, useEffect } from 'react';
import { 
  FormData, 
  FieldData, 
  Instance, 
  ConfigDefinition, 
  ValidationHookResult 
} from './types';

/**
 * A generic configuration validation hook that can handle both instance-based 
 * and flat field-based configurations.
 * 
 * @param configDef The configuration definition with fields to validate
 * @param configKey The key for storing this config in the form data
 * @param hasInstances Whether this config uses multiple instances
 * @param data Current form data
 * @param updateData Function to update form data
 * @param instancesData Data for instance-based config (instances, enabled, count)
 * @param fieldsData Data for field-based config (fields, enabled)
 * @returns Validation hook result with functions for validation
 */
function useConfigValidation(
  configDef: ConfigDefinition,
  configKey: string,
  hasInstances: boolean,
  data: FormData,
  updateData: (data: FormData) => void,
  instancesData?: {
    instances: Instance[],
    enabled: boolean,
    count: number
  },
  fieldsData?: {
    fields: Record<string, FieldData>,
    enabled: boolean
  }
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);
  const configLabel = configDef.label;

  // Validation for instance-based config
  const validateInstances = (
    instances: Instance[], 
    isEnabled: boolean, 
    count: number
  ): boolean => {
    if (!isEnabled) {
      updateData({
        ...data,
        [configKey]: {
          enabled: isEnabled,
          instances,
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
      const instance = instances[i];
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
      [configKey]: {
        enabled: isEnabled,
        instances,
        count
      },
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });

    return isValid;
  };

  // Validation for flat field-based config
  const validateFields = (
    fields: Record<string, FieldData>, 
    isEnabled: boolean
  ): boolean => {
    if (!isEnabled) {
      updateData({
        ...data,
        [configKey]: {
          enabled: isEnabled,
          fields
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
    
    configDef.fields.forEach(field => {
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
      [configKey]: {
        enabled: isEnabled,
        fields
      },
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });

    return isValid;
  };

  // Unified validation function that handles both cases
  const validateAndUpdate = (...args: any[]): boolean => {
    if (hasInstances && instancesData) {
      // Extract arguments for instance-based validation
      const currentInstances = args.length > 0 && Array.isArray(args[0]) ? args[0] : instancesData.instances;
      const isEnabled = args.length > 1 && typeof args[1] === 'boolean' ? args[1] : instancesData.enabled;
      
      return validateInstances(currentInstances, isEnabled, instancesData.count);
    } 
    else if (fieldsData) {
      // Extract arguments for field-based validation
      const currentFields = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) 
        ? args[0] 
        : fieldsData.fields;
      const isEnabled = args.length > 1 && typeof args[1] === 'boolean' ? args[1] : fieldsData.enabled;
      
      return validateFields(currentFields, isEnabled);
    }
    
    return false;
  };

  // Field error detection
  const hasFieldError = (instanceIndexOrFieldKey: number | string, fieldKey?: string): boolean => {
    if (hasInstances && instancesData) {
      if (!instancesData.enabled || !validationAttempted || !fieldKey) return false;

      const instanceIndex = instanceIndexOrFieldKey as number;
      const instance = instancesData.instances[instanceIndex];
      if (!instance) return false;

      const field = configDef.fields.find(f => f.key === fieldKey);
      if (!field || !field.required) return false;
      
      const fieldData = instance[field.key];
      return !fieldData?.value || fieldData.value.toString().trim() === '';
    } 
    else if (fieldsData) {
      if (!fieldsData.enabled || !validationAttempted) return false;

      const fieldKeyToCheck = instanceIndexOrFieldKey as string;
      const field = configDef.fields.find(f => f.key === fieldKeyToCheck);
      if (!field || !field.required) return false;

      const fieldData = fieldsData.fields[fieldKeyToCheck];
      return !fieldData?.value || fieldData.value.toString().trim() === '';
    }

    return false;
  };

  // Run validation on changes
  useEffect(() => {
    validateAndUpdate();
  }, [
    hasInstances ? instancesData?.instances : fieldsData?.fields, 
    hasInstances ? instancesData?.enabled : fieldsData?.enabled,
    hasInstances ? instancesData?.count : undefined
  ]);

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

export default useConfigValidation;