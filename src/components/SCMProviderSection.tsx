import React from 'react';
import SCMProviderInstance from './SCMProviderInstance';
import styles from './styles/SCMProviderSection.module.css';
import { ConfigDefinition, Instance } from './types';

interface SCMProviderSectionProps {
  scmProviderType: string;
  scmProviderConfig: ConfigDefinition;
  selected: boolean;
  instances: Instance[];
  count: number;
  onToggle: (scmProviderType: string) => void;
  onCountChange: (scmProviderType: string, count: number) => void;
  onFieldChange: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string, 
    value: string | string[] | boolean
  ) => void;
  onEnvToggle: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string
  ) => void;
  hasFieldError: (
    scmProviderType: string, 
    index: number, 
    fieldKey: string
  ) => boolean;
}

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
}: SCMProviderSectionProps) {
  return (
    <div className={styles.section}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggle(scmProviderType)}
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
              onChange={(e) => onCountChange(
                scmProviderType, 
                parseInt(e.target.value || '1', 10)
              )}
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