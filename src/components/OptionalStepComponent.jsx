import styles from './styles/OptionalStepComponent.module.css';

/**
 * A component that wraps optional configuration sections
 * Allows users to enable/disable the section
 */
export default function OptionalStepComponent({
  title,
  description,
  isEnabled,
  onToggle,
  children
}) {
  return (
    <div className={styles.container}>
      <div className={styles.enableSection}>
        <label className={styles.enableCheckbox}>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => onToggle(!isEnabled)}
          />{' '}
          {title}
        </label>
        
        {!isEnabled && description && (
          <p className={styles.infoText}>{description}</p>
        )}
      </div>
      
      {isEnabled && (
        <div className={styles.contentSection}>
          {children}
        </div>
      )}
    </div>
  );
}