import React, { useState, useEffect } from 'react';
import { generateCommand } from './commandGenerationUtils';
import styles from './styles/StepCommandPreview.module.css';
import { FormData, CommandType } from './types';

interface StepCommandPreviewProps {
  data: FormData;
  updateData?: (data: FormData) => void;
}

export default function StepCommandPreview({ data }: StepCommandPreviewProps): JSX.Element {
  // Add command type selection
  const [commandType, setCommandType] = useState<CommandType>('docker');
  // Generate command whenever data or command type changes
  const [commandText, setCommandText] = useState<string>('');
  
  useEffect(() => {
    // Use the extracted utility function
    setCommandText(generateCommand(data, commandType));
  }, [commandType, data]);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(commandText).then(
      () => {
        const button = document.getElementById('copy-button');
        if (button) {
          const originalText = button.textContent || '';
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      },
      (err) => console.error('Could not copy text: ', err)
    );
  };

  return (
    <div className={styles.container}>
      <h4>Command Format</h4>
      <div className={styles.formatSelector}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="command-type"
            value="docker"
            checked={commandType === 'docker'}
            onChange={() => setCommandType('docker')}
          />
          Docker
        </label>
        <label className={styles.radioLabel}>
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
      <div className={styles.commandContainer}>
        <pre className={styles.commandCode}>
          {commandText}
        </pre>
        <button
          id="copy-button"
          className={`${styles.copyButton} button button--primary button--sm`}
          onClick={copyToClipboard}
          aria-label="Copy command to clipboard"
        >
          Copy
        </button>
      </div>
      
      <div className={styles.commandHelp}>
        <p>
          Run this command to start the Moderne Agent with your configuration.
        </p>
      </div>
    </div>
  );
}