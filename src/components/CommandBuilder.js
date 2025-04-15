import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const options = [
  {
    label: 'Uses GitHub',
    value: '--github-auth',
    id: 'github',
    hasExtraFields: true,
    canRepeat: true,
    fields: [
      {
        label: 'Client ID',
        key: 'clientId',
        javaCliKey: 'moderne.agent.github[${i}].clientId',
        dockerCliKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_ID',
      },
      {
        label: 'Client Secret',
        key: 'clientSecret',
        javaCliKey: 'moderne.agent.github[${i}].clientSecret',
        dockerCliKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET',
      },
      {
        label: 'URL',
        key: 'url',
        javaCliKey: 'moderne.agent.github[${i}].url',
        dockerCliKey: 'MODERNE_AGENT_GITHUB_${i}_URL',
      },
    ]
    
  },
  {
    label: 'Uses Bitbucket',
    value: '--bitbucket-auth',
    id: 'bitbucket',
    hasExtraFields: true,
    canRepeat: true,
    fields: [
      {
        label: 'Client ID',
        key: 'clientId',
        javaCliKey: 'moderne.agent.bitbucket[${i}].clientId',
        dockerCliKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_ID',
      },
      {
        label: 'Client Secret',
        key: 'clientSecret',
        javaCliKey: 'moderne.agent.bitbucket[${i}].clientSecret',
        dockerCliKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_SECRET',
      },
      {
        label: 'URL',
        key: 'url',
        javaCliKey: 'moderne.agent.bitbucket[${i}].url',
        dockerCliKey: 'MODERNE_AGENT_BITBUCKET_${i}_URL',
      },
    ]
  },
];


export default function CommandBuilder() {
  const [cliType, setCliType] = useState('docker'); // or 'java'
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [providerData, setProviderData] = useState({});
  const [copied, setCopied] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleCheckboxChange = (opt) => {
    const isSelected = selectedOptions.includes(opt.value);
    const updated = isSelected
      ? selectedOptions.filter((val) => val !== opt.value)
      : [...selectedOptions, opt.value];

    setSelectedOptions(updated);

    if (!isSelected && opt.hasExtraFields && opt.canRepeat) {
      setProviderData((prev) => ({
        ...prev,
        [opt.id]: { count: 1, inputs: {} },
      }));
    } else if (isSelected && opt.hasExtraFields) {
      setProviderData((prev) => {
        const next = { ...prev };
        delete next[opt.id];
        return next;
      });
    }
  };

  const handleFieldChange = (providerId, fieldKey, index, value) => {
    setProviderData((prev) => ({
      ...prev,
      [providerId]: {
        ...prev[providerId],
        inputs: {
          ...prev[providerId]?.inputs,
          [`${fieldKey}_${index}`]: value,
        },
      },
    }));
  };

  const setProviderCount = (providerId, count) => {
    setProviderData((prev) => ({
      ...prev,
      [providerId]: {
        ...prev[providerId],
        count,
      },
    }));
  };

  const buildCommand = () => {
    let cmd = cliType === 'java'
      ? `mycli ${selectedOptions.filter(opt => !opt.includes('--auth')).join(' ')}`
      : `docker run myimage`;
  
    options.forEach((opt) => {
      if (selectedOptions.includes(opt.value) && opt.hasExtraFields && opt.canRepeat) {
        const data = providerData[opt.id];
        if (!data) return;
  
        for (let i = 0; i < data.count; i++) {
          opt.fields.forEach((field) => {
            const val = data.inputs[`${field.key}_${i}`];
            if (val) {
              const keyTemplate =
                cliType === 'java' ? field.javaCliKey : field.dockerCliKey;
              const resolvedKey = keyTemplate.replace('${i}', i);
  
              if (cliType === 'java') {
                cmd += ` --${resolvedKey}=${val}`;
              } else if (cliType === 'docker') {
                cmd += ` -e ${resolvedKey}=${val}`;
              }
            }
          });
        }
      }
    });
  
    return cmd;
  };
  
  
  const command = buildCommand();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
      }}
    >
      <h3>Build Your CLI Command</h3>
      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '8px',
          backgroundColor: 'var(--ifm-background-surface-color)',
        }}
      >
        <fieldset style={{ border: 'none', padding: 0 }}>
          <legend style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Select Output Type
          </legend>
          <label>
            <input
              type="radio"
              value="docker"
              checked={cliType === 'docker'}
              onChange={() => setCliType('docker')}
            />
            {' '}OCI Container
          </label>
          <label style={{ marginRight: '1.5rem' }}>
            <input
              type="radio"
              value="java"
              checked={cliType === 'java'}
              onChange={() => setCliType('java')}
            />
            {' '}Executable JAR
          </label>
        </fieldset>
      </div>

      <div>
        {options.map((opt) => (
          <div key={opt.value} style={{ marginBottom: '1rem' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(opt.value)}
                onChange={() => handleCheckboxChange(opt)}
              />
              {' '}{opt.label}
            </label>

            {selectedOptions.includes(opt.value) && opt.hasExtraFields && opt.canRepeat && (
              <div style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                <label>
                  Number of {opt.label} Configs:{' '}
                  <input
                    type="number"
                    min={1}
                    value={providerData[opt.id]?.count || 1}
                    onChange={(e) => setProviderCount(opt.id, parseInt(e.target.value || '1', 10))}
                    style={{ width: '60px' }}
                  />
                </label>
                {[...Array(providerData[opt.id]?.count || 1)].map((_, index) => (
                  <div key={index} style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
                    <strong>{opt.label} #{index + 1}</strong>
                    {opt.fields.map((field) => (
                      <div key={field.key} style={{ marginBottom: '0.5rem' }}>
                        <label>
                          {field.label}:{' '}
                          <input
                            type="text"
                            value={providerData[opt.id]?.inputs?.[`${field.key}_${index}`] || ''}
                            onChange={(e) =>
                              handleFieldChange(opt.id, field.key, index, e.target.value)
                            }
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <code
          style={{
            display: 'block',
            backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
            color: isDark ? '#ffffff' : '#000000',
            padding: '0.75rem',
            borderRadius: '4px',
            wordBreak: 'break-word',
            fontFamily: 'monospace',
          }}
        >
          {command}
        </code>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.75rem' }}>
          <button onClick={copyToClipboard} className="button button--primary">
            Copy Command
          </button>
          {copied && (
            <span style={{ marginLeft: '1rem', color: 'green', fontWeight: 'bold' }}>
              ✅ Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
