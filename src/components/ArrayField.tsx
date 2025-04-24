import React from "react";
import styles from "./styles/ArrayField.module.css";
import { ArrayFieldProps } from "./types";

const ArrayField: React.FC<ArrayFieldProps> = ({
  label,
  values = [],
  onChange,
  name,
  hasError,
  errorMessage,
}) => {
  // Ensure values is always an array
  const itemValues = Array.isArray(values) ? values : values ? [values] : [];

  const handleAddItem = () => {
    onChange([...itemValues, ""]);
  };

  const handleRemoveItem = (index: number) => {
    const newValues = itemValues.filter((_, idx) => idx !== index);
    onChange(newValues);
  };

  const handleItemChange = (index: number, newValue: string) => {
    const newValues = [...itemValues];
    newValues[index] = newValue;
    onChange(newValues);
  };

  return (
    <div className={styles.arrayField}>
      <label htmlFor={name} className={styles.arrayFieldLabel}>
        {label}
        {hasError && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>

      {itemValues.map((item, index) => (
        <div key={index} className={styles.arrayFieldItem}>
          <input
            type="text"
            id={index === 0 ? name : `${name}-${index}`}
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            className={hasError ? styles.inputError : ""}
            aria-invalid={hasError}
            aria-errormessage={hasError ? `${name}-error` : undefined}
          />
          <button
            type="button"
            onClick={() => handleRemoveItem(index)}
            className={styles.removeButton}
            aria-label={`Remove item ${index + 1}`}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddItem}
        className={styles.addButton}
      >
        Add Item
      </button>
    </div>
  );
};

export default ArrayField;
