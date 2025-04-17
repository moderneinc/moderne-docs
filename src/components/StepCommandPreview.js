import React, { useState, useEffect } from 'react';

export default function StepCommandPreview({ data }) {
  // Get data from previous steps
  const { providers = [], providerConfigs = {} } = data || {};
  const generalData = data.generalConfig || {};
  
  // Add command type selection
  const [commandType, setCommandType] = useState('docker');

  // Generate command whenever data or command type changes
  const [commandText, setCommandText] = useState('');
  
  useEffect(() => {
    generateCommand();
  }, [commandType, data]);
  
  const generateCommand = () => {
    const exportLines = [];
    const cmdArgs = [];
    
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
            // Always add exports for environment variables
            exportLines.push(`export ${envKey}=${value}`);
            
            if (commandType === 'docker') {
              // For Docker, pass env var by name
              cmdArgs.push(`-e ${envKey}`);
            } else {
              // For Java, don't include in command line args
              // (it will use the exported env var)
            }
          } else {
            if (commandType === 'docker') {
              // For Docker, pass as direct env var
              cmdArgs.push(`-e ${envKey}=${value}`);
            } else {
              // For Java, transform to Java format
              const javaArg = transformToJavaFormat(envKey, value, index);
              cmdArgs.push(javaArg);
            }
          }
        });
      });
    });
    
    // Process general config
    if (generalData && generalData.entries) {
      generalData.entries.forEach(entry => {
        if (!entry || !entry.value) return;
        
        const { key, value, asEnv } = entry;
        
        if (asEnv) {
          exportLines.push(`export ${key}=${value}`);
          if (commandType === 'docker') {
            cmdArgs.push(`-e ${key}`);
          }
        } else {
          if (commandType === 'docker') {
            cmdArgs.push(`-e ${key}=${value}`);
          } else {
            // For Java, transform general config keys too
            const javaKey = key.toLowerCase().replace(/_/g, '.');
            cmdArgs.push(`--${javaKey}=${value}`);
          }
        }
      });
    }
    
    // Build the command string
    let command = '';
    
    // Add export lines if any
    if (exportLines.length > 0) {
      command += exportLines.join('\n') + '\n\n';
    }
    
    // Add the command based on type
    if (commandType === 'docker') {
      command += `docker run ${cmdArgs.join(' ')} -p 8080:8080 moderne-agent:latest`;
    } else {
      command += `java -jar moderne-agent-{version}.jar ${cmdArgs.join(' ')}`;
    }
    
    setCommandText(command);
  };
  
  // Convert env var key format to Java argument format
  const transformToJavaFormat = (envKey, value, index) => {
    // Example: MODERNE_AGENT_GITHUB_0_URL → moderne.agent.github[0].url
    let javaKey = envKey.toLowerCase();
    
    // Replace underscores with dots
    javaKey = javaKey.replace(/_/g, '.');
    
    // Find the index position (should be right before the field name)
    const indexPosition = javaKey.lastIndexOf('.' + index + '.');
    
    if (indexPosition !== -1) {
      // Replace .0. with [0].
      javaKey = javaKey.substring(0, indexPosition) + 
                '[' + index + ']' + 
                javaKey.substring(indexPosition + 3);
    }
    
    return `--${javaKey}=${value}`;
  };

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
      <h4>Command Format</h4>
      <div className="format-selector">
        <label className="radio-label">
          <input
            type="radio"
            name="command-type"
            value="docker"
            checked={commandType === 'docker'}
            onChange={() => setCommandType('docker')}
          />
          Docker
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="command-type"
            value="java"
            checked={commandType === 'java'}
            onChange={() => setCommandType('java')}
          />
          Java
        </label>
      </div>
      
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
      </div>
      
      <style jsx>{`
        .command-preview {
          margin-top: 1rem;
        }
        
        .format-selector {
          margin-bottom: 1rem;
        }
        
        .radio-label {
          margin-right: 1.5rem;
          display: inline-flex;
          align-items: center;
        }
        
        .radio-label input {
          margin-right: 0.5rem;
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