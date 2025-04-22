import React, { useState, useEffect } from 'react';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';
import useArtifactoryLSTValidation from './useArtifactoryLSTValidation';
import ArtifactoryLSTInstance from './ArtifactoryLSTInstance';

export default function StepArtifactoryLSTConfig({ data = {}, updateData }) {
  // Initialize enabled state from data or default to false
  const [enabled, setEnabled] = useState(data?.artifactoryLSTConfig?.enabled || false);
  const [instances, setInstances] = useState(data?.artifactoryLSTConfig?.instances || []);
  const [count, setCount] = useState(data?.artifactoryLSTConfig?.count || 1);

  // Use validation hook
  const { validateAndUpdate, hasFieldError } = useArtifactoryLSTValidation(
    enabled,
    instances,
    count,
    data,
    updateData
  );

  // Initialize instances with defaults if empty
  useEffect(() => {
    if (instances.length === 0) {
      const defaultInstances = Array.from({ length: count }, (_, index) => 
        createDefaultInstance(index)
      );
      
      setInstances(defaultInstances);
      
      // Initial update to parent
      updateData({
        ...data,
        artifactoryLSTConfig: {
          enabled,
          instances: defaultInstances,
          count,
          validation: {
            valid: true,
            missingFields: []
          }
        },
        validation: {
          valid: true,
          missingFields: []
        }
      });
    }
  }, []);

  // Create a default instance
  const createDefaultInstance = (index) => {
    const instance = {};
    artifactoryLSTConfigDefinition.fields.forEach(field => {
      let defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace(/\${i}/g, index)
      };
    });
    return instance;
  };

  // Update parent when enabled state changes
  useEffect(() => {
    if (data?.artifactoryLSTConfig) {
      updateData({
        ...data,
        artifactoryLSTConfig: {
          ...data.artifactoryLSTConfig,
          enabled
        }
      });
    }
  }, [enabled]);

  // Update count of instances
  const handleCountChange = (newCount) => {
    newCount = Math.max(1, newCount);
    
    let newInstances = [...instances];
    
    // Add more instances if needed
    if (newCount > count) {
      for (let i = count; i < newCount; i++) {
        newInstances.push(createDefaultInstance(i));
      }
    } 
    // Remove excess instances if count decreased
    else if (newCount < count) {
      newInstances = newInstances.slice(0, newCount);
    }
    
    setCount(newCount);
    setInstances(newInstances);
    
    // Update parent
    updateData({
      ...data,
      artifactoryLSTConfig: {
        ...data.artifactoryLSTConfig,
        count: newCount,
        instances: newInstances
      }
    });
  };

  // Update a specific field
  const handleFieldChange = (instanceIndex, fieldKey, value) => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    const field = artifactoryLSTConfigDefinition.fields.find(f => f.key === fieldKey);
    
    newInstances[instanceIndex] = {
      ...newInstances[instanceIndex],
      [fieldKey]: {
        ...newInstances[instanceIndex][fieldKey],
        value: field.type === 'array' ? (Array.isArray(value) ? value : [value]) : value
      }
    };
    
    setInstances(newInstances);
    validateAndUpdate(newInstances, enabled);
  };

  // Toggle environment variable usage
  const handleEnvToggle = (instanceIndex, fieldKey) => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    newInstances[instanceIndex] = {
      ...newInstances[instanceIndex],
      [fieldKey]: {
        ...newInstances[instanceIndex][fieldKey],
        asEnv: !newInstances[instanceIndex][fieldKey]?.asEnv
      }
    };
    
    setInstances(newInstances);
  };

  const toggleEnabled = () => {
    setEnabled(prev => !prev);
  };

  return (
    <div className="artifactory-lst-config">
      <div className="enable-section">
        <label className="enable-checkbox">
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Use {artifactoryLSTConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className="info-text">
          If you want to use Artifactory to store your LST artifacts, enable this step. 
          This will allow you to use AQL queries to fetch the LSTs – which will result 
          in a noticeable speed improvement.

          For more information, please see <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access">our documentation</a>
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className="sectionTitle">{artifactoryLSTConfigDefinition.label}</div>
          
          <label className="instance-count">
            Number of Artifactory Configurations:{' '}
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => handleCountChange(parseInt(e.target.value || '1', 10))}
              style={{ width: '60px' }}
            />
          </label>
          
          {Array.from({ length: count }).map((_, index) => (
            <ArtifactoryLSTInstance
              key={`artifactory-instance-${index}`}
              index={index}
              instance={instances[index] || {}}
              configDefinition={artifactoryLSTConfigDefinition}
              onFieldChange={handleFieldChange}
              onEnvToggle={handleEnvToggle}
              hasFieldError={hasFieldError}
            />
          ))}
        </>
      )}
      
      <style jsx>{`
        .artifactory-lst-config {
          margin-bottom: 1.5rem;
        }
        
        .enable-section {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background-color: var(--ifm-color-emphasis-100);
          border-radius: 4px;
        }
        
        .enable-checkbox {
          font-weight: bold;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .info-text {
          margin-top: 0.5rem;
          margin-bottom: 0;
          color: var(--ifm-color-emphasis-700);
        }
        
        .sectionTitle {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 1rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
        }
        
        .instance-count {
          display: block;
          margin-bottom: 1rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}