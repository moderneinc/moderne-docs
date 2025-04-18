import React from 'react';
import ProviderInstance from './ProviderInstance';

/**
 * Renders a provider section with all its instances
 */
function ProviderSection({
  providerType,
  providerConfig,
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
    <div className="provider-section">
      <label className="provider-checkbox">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
        />{' '}
        {providerConfig.label}
      </label>

      {selected && (
        <div className="provider-configs">
          <label className="instance-count">
            Number of {providerConfig.label} Configs:{' '}
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => onCountChange(providerType, parseInt(e.target.value || '1', 10))}
              style={{ width: '60px' }}
            />
          </label>

          {Array.from({ length: count }).map((_, index) => (
            <ProviderInstance
              key={`${providerType}-instance-${index}`}
              providerType={providerType}
              providerConfig={providerConfig}
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
        .provider-section {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
        .provider-checkbox {
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .provider-configs {
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

export default ProviderSection;