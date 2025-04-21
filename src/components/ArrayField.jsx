import React from 'react';

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
    <div className="array-field">
      {values.map((item, index) => (
        <div key={index} className="array-field-item">
          <input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            placeholder={field.defaultValue}
          />
          <button 
            type="button" 
            onClick={() => handleRemoveItem(index)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={handleAddItem}
        className="add-button"
      >
        Add Item
      </button>

      <style jsx>{`
        .array-field {
          margin-bottom: 1rem;
        }
        .array-field-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .array-field-item input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: 4px;
        }
        .remove-button {
          padding: 0.5rem;
          color: var(--ifm-color-danger);
          border: 1px solid var(--ifm-color-danger);
          background: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .add-button {
          padding: 0.5rem 1rem;
          color: var(--ifm-color-primary);
          border: 1px solid var(--ifm-color-primary);
          background: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default ArrayField;