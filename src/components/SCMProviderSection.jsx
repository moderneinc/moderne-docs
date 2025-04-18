import React from 'react';
import SCMProviderInstance from './SCMProviderInstance';

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
    <div className="scm-provider-section">
      <label className="scm-provider-checkbox">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
        />{' '}
        {scmProviderConfig.label}
      </label>

      {selected && (
        <div className="scm-provider-configs">
          <label className="instance-count">
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

      <style jsx>{`
        .scm-provider-section {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
        .scm-provider-checkbox {
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .scm-provider-configs {
          padding-left: 1.5rem;
          margin-top: 0.75rem;
        }
        .instance-count {
          display: block;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}

export default SCMProviderSection;