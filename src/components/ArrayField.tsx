import React from 'react';
import styles from './styles/ArrayField.module.css';
import { Field } from './types';

interface ArrayFieldProps {
  field: Field;
  value?: string | string[];
  onChange: (values: string[]) => void;
}

const ArrayField: React.FunctionComponent<ArrayFieldProps> = ({ field, value = [], onChange }) => {
  // Ensure value is always an array
  const values: string[] = Array.isArray(value) ? value : value ? [value] : [];

  const handleAddItem = (): void => {
    onChange([...values, '']);
  };

  const handleRemoveItem = (index: number): void => {
    const newValues = values.filter((_, idx) => idx !== index);
    onChange(newValues);
  };

  const handleItemChange = (index: number, newValue: string): void => {
    const newValues = [...values];
    newValues[index] = newValue;
    onChange(newValues);
  };

  return (
    <div className={styles.arrayField}>
      {values.map((item, index) => (
        <div key={index} className={styles.arrayFieldItem}>
          <input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            placeholder={field.defaultValue}
          />
          <button 
            type="button" 
            onClick={() => handleRemoveItem(index)}
            className={styles.removeButton}
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
}

export default ArrayField;