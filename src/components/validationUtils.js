import { useEffect, useState } from "react";

/**
 * Shared validation utilities for configuration fields
 */

/**
 * Validates a single field based on its configuration and value
 * @param {Object} field - The field configuration object
 * @param {any} value - The field value to validate
 * @returns {string|null} - Error message or null if valid
 */
export function validateField(field, value) {
  // Required field validation
  if (field.required && (!value || value.toString().trim() === "")) {
    return "This field is required";
  }

  // Custom validator if provided
  if (field.validator && value) {
    return field.validator(value);
  }

  return null;
}

/**
 * Validates all fields in a section
 * @param {Array} fields - Array of field configurations
 * @param {Object} values - Object containing field values
 * @returns {Object} - Validation result with valid status and error messages
 */
export function validateSection(fieldsDefinition, fieldsData) {
  let isValid = true;
  let missingFields = [];
  let errors = {};

  fieldsDefinition.forEach((field) => {
    if (field.required) {
      const fieldData = fieldsData[field.key];
      const isEmpty =
        !fieldData?.value || fieldData.value.toString().trim() === "";

      if (isEmpty) {
        isValid = false;
        missingFields.push(field.label);
        errors[field.key] = "This field is required";
      }
    }
  });

  return {
    valid: isValid,
    missingFields,
    errors,
  };
}

/**
 * Hook factory for creating validation hooks for different configuration sections
 * @param {string} sectionName - The name of the section being validated
 * @returns {Function} - A custom React hook for the specified section
 */
export function createValidationHook(sectionName) {
  return function useConfigValidation(
    fields,
    configDefinition,
    data,
    updateData
  ) {
    const [validationAttempted, setValidationAttempted] = useState(true);

    const validateAndUpdate = () => {
      const validationResult = validateSection(configDefinition.fields, fields);

      // Update parent with both the section config validation and overall step validation
      updateData({
        ...data,
        [configDefinition.configKey]: {
          fields,
          validation: {
            valid: validationResult.valid,
            missingFields: validationResult.missingFields,
          },
        },
        validation: {
          valid: validationResult.valid,
          missingFields: validationResult.missingFields,
        },
      });

      return validationResult.valid;
    };

    const hasFieldError = (fieldKey) => {
      if (!validationAttempted) return false;

      const field = configDefinition.fields.find((f) => f.key === fieldKey);
      if (!field || !field.required) return false;

      const fieldData = fields[field.key];
      return !fieldData?.value || fieldData.value.toString().trim() === "";
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
      if (data?.triggerValidation?.[sectionName]) {
        setValidationAttempted(true);
        validateAndUpdate();

        updateData({
          ...data,
          triggerValidation: {
            ...data.triggerValidation,
            [sectionName]: false,
          },
        });
      }
    }, [data?.triggerValidation]);

    return {
      validationAttempted,
      setValidationAttempted,
      validateAndUpdate,
      hasFieldError,
    };
  };
}
