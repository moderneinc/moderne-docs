import React from 'react';
import styles from './styles/ArrayField.module.css';

function ArrayField({ field, value = [], onChange }) {
  // Ensure value is always an array
  const values = Array.isArray(value) ? value : value ? [value] : [];

  const handleAddItem = () => {
    onChange([...values, '']);
  };

  const handleRemoveItem = (index) => {
    const newValues = values.filter((_, idx) => idx !== index);
    onChange(newValues);
  };

  const handleItemChange = (index, newValue) => {
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