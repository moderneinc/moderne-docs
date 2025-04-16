import React, { useState, useEffect } from 'react';

export default function StepSCMConfig({ data, updateData }) {
  const [providers, setProviders] = useState(data.providers || []);

  useEffect(() => {
    updateData({ providers });
  }, [providers]);

  const toggleProvider = (id) => {
    setProviders((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <p>Select which SCM providers you want to configure:</p>
      <label>
        <input
          type="checkbox"
          checked={providers.includes('github')}
          onChange={() => toggleProvider('github')}
        />
        {' '}GitHub
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={providers.includes('bitbucket')}
          onChange={() => toggleProvider('bitbucket')}
        />
        {' '}Bitbucket
      </label>
    </div>
  );
}
