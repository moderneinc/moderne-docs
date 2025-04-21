import React, { useState, useEffect } from 'react';
import { generateCommand } from './commandGenerationUtils';

export default function StepCommandPreview({ data }) {
  // Add command type selection
  const [commandType, setCommandType] = useState('docker');
  // Generate command whenever data or command type changes
  const [commandText, setCommandText] = useState('');
  
  useEffect(() => {
    // Use the extracted utility function
    setCommandText(generateCommand(data, commandType));
  }, [commandType, data]);

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
          aria-label="Copy command to clipboard"
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