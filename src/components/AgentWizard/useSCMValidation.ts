import { useState, useEffect } from 'react';
import { 
  FormData, 
  ConfigDefinition, 
  ValidationHookResult 
} from './types';

interface SCMProviderConfig {
  instances: Array<Record<string, any>>;
  count?: number;
}

interface SCMProviderConfigs {
  [providerId: string]: SCMProviderConfig;
}

interface SCMProviderDefinitions {
  [providerId: string]: ConfigDefinition;
}

/**
 * Custom hook for SCM configuration validation
 */
function useSCMValidation(
  providers: string[],
  providerConfigs: SCMProviderConfigs,
  scmOptions: SCMProviderDefinitions,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  const [validationAttempted, setValidationAttempted] = useState<boolean>(true);

  // Validate all fields and update parent with validation state
  const validateAndUpdate = (): boolean => {
    // No providers selected is always valid
    if (providers.length === 0) {
      updateData({
        ...data,
        providers,
        providerConfigs,
        validation: { 
          valid: true,
          missingFields: []
        }
      });
      return true;
    }
    
    // Validate each selected SCM provider
    let isValid = true;
    const missingFields: string[] = [];
    
    for (const scmProviderId of providers) {
      const config = providerConfigs[scmProviderId];
      if (!config) {
        isValid = false;
        continue;
      }
      
      const { instances = [] } = config;
      
      // Check each instance
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];
        if (!instance) continue;
        
        // Check required fields based on provider config
        scmOptions[scmProviderId].fields.forEach(field => {
          if (field.required) {
            const fieldData = instance[field.key];
            if (!fieldData || (field.type !== 'boolean' && (!fieldData.value || String(fieldData.value).trim() === ''))) {
              isValid = false;
              missingFields.push(`${scmProviderId} #${i+1} ${field.label}`);
            }
          }
        });
      }
    }
    
    // Update parent with validation result
    updateData({
      ...data,
      providers,
      providerConfigs,
      validation: { 
        valid: isValid, 
        missingFields 
      }
    });
    
    return isValid;
  };

  // Check if a field has an error
  const hasFieldError = (instanceIndexOrSCMProvider: string | number, fieldKeyOrInstanceIndex?: string | number, fieldKey?: string): boolean => {
    // Handle different call patterns:
    // If called with 3 parameters: (scmProviderId, instanceIndex, fieldKey)
    if (typeof instanceIndexOrSCMProvider === 'string' && typeof fieldKeyOrInstanceIndex === 'number' && typeof fieldKey === 'string') {
      const scmProviderId = instanceIndexOrSCMProvider;
      const instanceIndex = fieldKeyOrInstanceIndex;
      
      if (!validationAttempted) return false;
      
      const providerOptions = scmOptions[scmProviderId];
      if (!providerOptions) return false;
      
      const field = providerOptions.fields.find(f => f.key === fieldKey);
      if (!field || !field.required) return false;
      
      const instance = providerConfigs[scmProviderId]?.instances?.[instanceIndex];
      if (!instance) return false;
      
      const fieldData = instance[fieldKey];
      // Boolean fields are always valid (they default to false)
      if (field.type === 'boolean') return false;
      
      return !fieldData?.value || String(fieldData.value).trim() === '';
    }
    
    // Default case - not enough info to validate
    return false;
  };

  // Run initial validation on mount
  useEffect(() => {
    validateAndUpdate();
  }, []);

  // Handle validation trigger from parent
  useEffect(() => {
    if (data.triggerValidation?.['SCM Configuration']) {
      setValidationAttempted(true);
      validateAndUpdate();
      
      // Reset the trigger
      updateData({
        ...data,
        triggerValidation: {
          ...data.triggerValidation,
          'SCM Configuration': false
        }
      });
    }
  }, [data.triggerValidation]);

  return {
    validationAttempted,
    setValidationAttempted,
    validateAndUpdate,
    hasFieldError
  };
}

export default useSCMValidation;