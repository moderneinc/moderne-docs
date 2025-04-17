import React from 'react';

export default function StepCommandPreview({ data }) {
  // Get data from previous steps
  const { providers = [], providerConfigs = {} } = data || {};
  const generalData = data.generalConfig || {};

  const exportLines = [];
  const dockerArgs = [];

  // Process SCM providers configurations
  providers.forEach(providerId => {
    const config = providerConfigs[providerId];
    if (!config) return;
    
    const { instances = [] } = config;
    
    instances.forEach((instance, index) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([fieldKey, fieldData]) => {
        if (!fieldData || !fieldData.value) return;
        
        const { value, asEnv, envKey } = fieldData;
        
        if (asEnv) {
          // Add as environment variable export
          exportLines.push(`export ${envKey}=${value}`);
          // Pass just the env var name to Docker
          dockerArgs.push(`-e ${envKey}`);
        } else {
          // Add direct environment variable to Docker command
          dockerArgs.push(`-e ${envKey}=${value}`);
        }
      });
    });
  });

  // Process general configuration (if available)
  if (generalData && generalData.entries) {
    generalData.entries.forEach(entry => {
      if (!entry || !entry.value) return;
      
      const { key, value, asEnv } = entry;
      
      if (asEnv) {
        // Add as environment variable export
        exportLines.push(`export ${key}=${value}`);
        // Pass just the env var name to Docker
        dockerArgs.push(`-e ${key}`);
      } else {
        // Add direct environment variable to Docker command
        dockerArgs.push(`-e ${key}=${value}`);
      }
    });
  }

  // Build the full command
  let commandText = '';
  
  // Add export lines if any
  if (exportLines.length > 0) {
    commandText += exportLines.join('\n') + '\n\n';
  }
  
  // Add docker run command
  commandText += `docker run moderne/agent ${dockerArgs.join(' ')}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commandText).then(
      () => {
        const button = document.getElementById('copy-button');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      },
      (err) => console.error('Could not copy text: ', err)
    );
  };

  return (
    <div className="command-preview">
      <h4>Generated Command</h4>
      <div className="command-container">
        <pre className="command-code">
          {commandText}
        </pre>
        <button
          id="copy-button"
          className="copy-button button button--primary button--sm"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      
      <div className="command-help">
        <p>
          Run this command to start the Moderne Agent with your configuration.
        </p>
        <ul>
          <li>For environment variables: Values are exported at the top and passed to Docker</li>
          <li>For direct values: Values are passed directly to Docker as environment variables</li>
        </ul>
      </div>
      
      <style jsx>{`
        .command-preview {
          margin-top: 1rem;
        }
        
        .command-container {
          position: relative;
          margin: 1rem 0;
        }
        
        .command-code {
          background: var(--ifm-code-background);
          color: var(--ifm-code-color);
          padding: 1rem;
          border-radius: 5px;
          white-space: pre-wrap;
          overflow-x: auto;
          word-break: break-word;
          margin: 0;
        }
        
        .copy-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }
        
        .command-help {
          font-size: 0.9rem;
          color: var(--ifm-color-emphasis-700);
        }
        
        .command-help ul {
          padding-left: 1.5rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}