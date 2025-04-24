import { FC } from "react";
import ArrayField from "./ArrayField";
import styles from "./styles/ConfigField.module.css";
import { ConfigFieldProps } from "./types";

/**
 * Renders a configuration field based on its type
 * Enhanced to work better with React Hook Form error handling
 */
const ConfigField: FC<ConfigFieldProps> = ({
  field,
  value,
  onChange,
  onEnvToggle,
  useAsEnv,
  hasError,
  errorMessage,
  name,
}) => {
  const renderFieldInput = () => {
    if (field.type === "array") {
      return (
        <ArrayField
          label={field.label}
          values={
            typeof value === "string" ? [value] : (value as string[]) || []
          }
          onChange={(values) => {
            // Convert array values to string value expected by parent component
            onChange(values.join(","));
          }}
          name={name}
          hasError={hasError}
          errorMessage={errorMessage}
        />
      );
    } else if (field.type === "boolean") {
      return (
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value="true"
              checked={value === "true"}
              onChange={() => onChange("true")}
            />{" "}
            True
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value="false"
              checked={value === "false"}
              onChange={() => onChange("false")}
            />{" "}
            False
          </label>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${styles.fieldInput} ${
            hasError ? styles.fieldInputError : ""
          }`}
          placeholder={field.defaultValue || ""}
          aria-required={field.required}
          aria-invalid={hasError}
          id={name}
        />
      );
    }
  };

  // Don't add a label if field type is array since ArrayField component adds its own
  const shouldRenderLabel = field.type !== "array";

  return (
    <div className={styles.fieldItem}>
      {shouldRenderLabel && (
        <label className={styles.fieldLabel} htmlFor={name}>
          {field.label}
          {field.required && <span className={styles.requiredMark}>*</span>}
        </label>
      )}

      {field.description && (
        <div
          className={styles.fieldDescription}
          // Using a safer approach by directly rendering HTML
          // Note: field.description should be sanitized before passing to this component
          dangerouslySetInnerHTML={{ __html: field.description }}
        />
      )}

      {renderFieldInput()}

      {hasError && field.type !== "array" && (
        <div className={styles.fieldError} id={`${name}-error`}>
          {errorMessage || "This field is required"}
        </div>
      )}

      {onEnvToggle && (
        <label className={styles.envToggle}>
          <input
            type="checkbox"
            checked={useAsEnv}
            onChange={onEnvToggle}
            id={`${name}-env-toggle`}
          />{" "}
          Use an exported environment variable
        </label>
      )}
    </div>
  );
};

export default ConfigField;
