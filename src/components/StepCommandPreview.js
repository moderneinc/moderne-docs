import React from 'react';

export default function StepCommandPreview({ data }) {
  const buildCommand = () => {
    // Basic example — expand this logic based on real needs
    const parts = ['docker run myimage'];
    if (data.providers?.includes('github')) {
      parts.push('-e MODERNE_AGENT_GITHUB_CLIENT_ID=my-id');
    }
    if (data.providers?.includes('bitbucket')) {
      parts.push('-e MODERNE_AGENT_BITBUCKET_CLIENT_ID=my-id');
    }
    return parts.join(' ');
  };

  return (
    <div>
      <h4>Generated Command</h4>
      <pre
        style={{
          background: '#2d2d2d',
          color: 'white',
          padding: '1rem',
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {buildCommand()}
      </pre>
    </div>
  );
}
