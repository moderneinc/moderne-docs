// useArtifactoryLSTValidation.js

import { useState, useEffect } from 'react';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';

function useArtifactoryLSTValidation(fields, enabled, data, updateData) {
  const [validationAttempted, setValidationAttempted] = useState(true);
  
  // Get the label from the config definition
  const configLabel = artifactoryLSTConfigDefinition.label;

  const validateAndUpdate = (fieldValues = fields, isEnabled = enabled) => {
    // If the step is disabled, always consider it valid
    if (!isEnabled) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
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
    
    // Special validation: Check if any field has a value
    const hasAnyValue = Object.values(fieldValues).some(fieldData => 
      fieldData.value && fieldData.value.toString().trim() !== ''
    );
    
    // If no values at all, it's valid (all fields optional)
    if (!hasAnyValue) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
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
    
    // If any values, then all required fields must be filled
    let isValid = true;
    let missingFields = [];
    
    artifactoryLSTConfigDefinition.fields.forEach(field => {
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
      artifactoryLSTConfig: {
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

    console.log("Validation result:", isValid, "Missing fields:", missingFields);
    return isValid;
  };

  const hasFieldError = (fieldKey) => {
    // If step is disabled, no fields have errors
    if (!enabled || !validationAttempted) return false;
    
    // Get all fields that have values
    const hasAnyValue = Object.values(fields).some(fieldData => 
      fieldData.value && fieldData.value.toString().trim() !== ''
    );
    
    // If no fields have values, no errors
    if (!hasAnyValue) return false;
    
    // If any field has a value, check if this field is required and empty
    const field = artifactoryLSTConfigDefinition.fields.find(f => f.key === fieldKey);
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

export default useArtifactoryLSTValidation;