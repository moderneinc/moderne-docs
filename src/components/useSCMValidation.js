import { useState, useEffect } from 'react';

/**
 * Custom hook for SCM configuration validation
 */
function useSCMValidation(providers, providerConfigs, scmOptions, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);

  // Validate all fields and update parent with validation state
  const validateAndUpdate = () => {
    // No providers selected is always valid
    if (providers.length === 0) {
      updateData({
        providers,
        providerConfigs,
        validation: { valid: true }
      });
      return true;
    }
    
    // Validate each selected SCM provider
    let isValid = true;
    let missingFields = [];
    
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
            if (!fieldData || (field.type !== 'boolean' && (!fieldData.value || fieldData.value.trim() === ''))) {
              isValid = false;
              missingFields.push(`${scmProviderId} #${i+1} ${field.label}`);
            }
          }
        });
      }
    }
    
    // Update parent with validation result
    updateData({
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
  const hasFieldError = (scmProviderId, instanceIndex, fieldKey) => {
    if (!validationAttempted) return false;
    
    const field = scmOptions[scmProviderId].fields.find(f => f.key === fieldKey);
    if (!field || !field.required) return false;
    
    const instance = providerConfigs[scmProviderId]?.instances?.[instanceIndex];
    if (!instance) return false;
    
    const fieldData = instance[fieldKey];
    // Boolean fields are always valid (they default to false)
    if (field.type === 'boolean') return false;
    
    return !fieldData?.value || fieldData.value.trim() === '';
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