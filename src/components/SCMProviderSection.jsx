import React from 'react';
import SCMProviderInstance from './SCMProviderInstance';
import styles from './styles/SCMProviderSection.module.css';

/**
 * Renders an SCM provider section with all its instances
 */
function SCMProviderSection({
  scmProviderType,
  scmProviderConfig,
  selected,
  instances,
  count,
  onToggle,
  onCountChange,
  onFieldChange,
  onEnvToggle,
  hasFieldError
}) {
  return (
    <div className={styles.section}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
        />{' '}
        {scmProviderConfig.label}
      </label>

      {selected && (
        <div className={styles.configs}>
          <label className={styles.instanceCount}>
            Number of {scmProviderConfig.label} Configs:{' '}
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => onCountChange(scmProviderType, parseInt(e.target.value || '1', 10))}
              style={{ width: '60px' }}
            />
          </label>

          {Array.from({ length: count }).map((_, index) => (
            <SCMProviderInstance
              key={`${scmProviderType}-instance-${index}`}
              scmProviderType={scmProviderType}
              scmProviderConfig={scmProviderConfig}
              index={index}
              instance={instances[index] || {}}
              onFieldChange={onFieldChange}
              onEnvToggle={onEnvToggle}
              hasFieldError={hasFieldError}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SCMProviderSection;