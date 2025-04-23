import React, { useState, useEffect } from 'react';
import mavenRepositoryConfigDefinition from './mavenRepositoryConfigDefinition';
import useMavenRepositoryValidation from './useMavenRepositoryValidation';
import MavenRepositoryInstance from './MavenRepositoryInstance';

export default function StepMavenRepositoryConfig({ data = {}, updateData }) {
  const [enabled, setEnabled] = useState(data?.mavenRepositoryConfig?.enabled || false);
  const [instances, setInstances] = useState(data?.mavenRepositoryConfig?.instances || []);
  const [count, setCount] = useState(data?.mavenRepositoryConfig?.count || 1);

  const { validateAndUpdate, hasFieldError } = useMavenRepositoryValidation(
    enabled,
    instances,
    count,
    data,
    updateData
  );

  useEffect(() => {
    if (instances.length === 0) {
      const defaultInstances = Array.from({ length: count }, (_, index) => 
        createDefaultInstance(index)
      );
      
      setInstances(defaultInstances);
      
      updateData({
        ...data,
        mavenRepositoryConfig: {
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

  const createDefaultInstance = (index) => {
    const instance = {};
    mavenRepositoryConfigDefinition.fields.forEach(field => {
      let defaultValue = field.defaultValue || '';
      
      instance[field.key] = {
        value: defaultValue,
        asEnv: false,
        envKey: field.envKey.replace('${i}', index)
      };
    });
    return instance;
  };

  useEffect(() => {
    if (data?.mavenRepositoryConfig) {
      updateData({
        ...data,
        mavenRepositoryConfig: {
          ...data.mavenRepositoryConfig,
          enabled
        }
      });
    }
  }, [enabled]);

  const handleCountChange = (newCount) => {
    newCount = Math.max(1, newCount);
    
    let newInstances = [...instances];
    
    if (newCount > count) {
      for (let i = count; i < newCount; i++) {
        newInstances.push(createDefaultInstance(i));
      }
    } else if (newCount < count) {
      newInstances = newInstances.slice(0, newCount);
    }
    
    setCount(newCount);
    setInstances(newInstances);
    
    updateData({
      ...data,
      mavenRepositoryConfig: {
        ...data.mavenRepositoryConfig,
        count: newCount,
        instances: newInstances
      }
    });
  };

  const handleFieldChange = (instanceIndex, fieldKey, value) => {
    const newInstances = [...instances];
    
    if (!newInstances[instanceIndex]) {
      newInstances[instanceIndex] = createDefaultInstance(instanceIndex);
    }
    
    const field = mavenRepositoryConfigDefinition.fields.find(f => f.key === fieldKey);
    
    newInstances[instanceIndex] = {
      ...newInstances[instanceIndex],
      [fieldKey]: {
        ...newInstances[instanceIndex][fieldKey],
        value: field.type === 'array' ? (Array.isArray(value) ? value : [value]) : value,
        envKey: field.type === 'array' 
          ? field.envKey.replace('${i}', instanceIndex)
          : field.envKey.replace(/\${i}/g, instanceIndex)
      }
    };
    
    setInstances(newInstances);
    validateAndUpdate(newInstances, enabled);
  };

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
    <div className="maven-repository-config">
      <div className="enable-section">
        <label className="enable-checkbox">
          <input
            type="checkbox"
            checked={enabled}
            onChange={toggleEnabled}
          />{' '}
          Use {mavenRepositoryConfigDefinition.label}
        </label>
        
        {!enabled && (
          <p className="info-text">
            In order for Moderne to retrieve your Lossless Semantic Tree (LST) or recipe artifacts, 
            the agent needs to be configured to talk to your Maven-formatted artifact repositories. 
            This connection also allows Moderne to lookup dependency versions to determine if a 
            new version is available.
          </p>
        )}
      </div>
      
      {enabled && (
        <>
          <div className="sectionTitle">{mavenRepositoryConfigDefinition.label}</div>
          
          <label className="instance-count">
            Number of Maven Repository Configs:{' '}
            <input
              type="number"
              min={1}
              value={count}
              onChange={(e) => handleCountChange(parseInt(e.target.value || '1', 10))}
              style={{ width: '60px' }}
            />
          </label>
          
          {Array.from({ length: count }).map((_, index) => (
            <MavenRepositoryInstance
              key={`maven-repository-instance-${index}`}
              index={index}
              instance={instances[index] || {}}
              configDefinition={mavenRepositoryConfigDefinition}
              onFieldChange={handleFieldChange}
              onEnvToggle={handleEnvToggle}
              hasFieldError={hasFieldError}
            />
          ))}
        </>
      )}
      
      <style jsx>{`
        .maven-repository-config {
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