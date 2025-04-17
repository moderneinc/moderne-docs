import React, { useState, useEffect } from 'react';

const fields = [
  { label: 'Api Gateway Socket URI', key: 'apiGatewaySocketUri', envKey: 'MODERNE_AGENT_APIGATEWAYRSOCKETURI', required: true },
  { label: 'Crypto Symmetric Key', key: 'cryptoSymmetricKey', envKey: 'MODERNE_AGENT_CRYPTO_SYMMETRICKEY', required: true },
  { key: 'NICKNAME', required: true },
  { key: 'TOKEN', required: true },
  { key: 'DOWNLOADPARALLELISM', required: false },
  { key: 'ARTIFACTINDEXINTERVALSECONDS', required: false },
  { key: 'DEFAULTCOMMITOPTIONS_0', required: false },
];

export default function StepGeneralConfig({ data = {}, updateData }) {
  const [inputs, setInputs] = useState(data.inputs || {});

  useEffect(() => {
    updateData({ inputs });
  }, [inputs, updateData]);

  const handleInputChange = (key, value) => {
    setInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        value,
      },
    }));
  };

  const toggleEnv = (key) => {
    setInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        asEnv: !prev[key]?.asEnv,
      },
    }));
  };

  return (
    <div>
      <h3>General Configuration</h3>
      {fields.map(({ key, required }) => {
        const val = inputs[key]?.value || '';
        const asEnv = inputs[key]?.asEnv || false;

        return (
          <div key={key} style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>
              {key}
              {required && <span style={{ color: 'red' }}> *</span>}
            </label>
            <input
              type="text"
              value={val}
              onChange={(e) => handleInputChange(key, e.target.value)}
              required={required}
              style={{
                width: '100%',
                maxWidth: '400px',
                border: required && !val ? '1px solid red' : '1px solid #ccc',
              }}
            />
            <label style={{ fontSize: '0.85rem', display: 'block', marginTop: '0.25rem' }}>
              <input
                type="checkbox"
                checked={asEnv}
                onChange={() => toggleEnv(key)}
              />{' '}
              Use as environment variable
            </label>
          </div>
        );
      })}
    </div>
  );
}
