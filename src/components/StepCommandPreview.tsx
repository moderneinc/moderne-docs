import React, { useState, useEffect } from 'react';
import { generateCommand } from './commandGenerationUtils';
import styles from './styles/StepCommandPreview.module.css';
import { FormData, CommandType, OSType } from './types';

interface StepCommandPreviewProps {
  data: FormData;
  updateData?: (data: FormData) => void;
}

export default function StepCommandPreview({ data }: StepCommandPreviewProps): JSX.Element {
  // Command type selection
  const [commandType, setCommandType] = useState<CommandType>('docker');
  // OS type selection
  const [osType, setOSType] = useState<OSType>('unix');
  // Command text state
  const [commandText, setCommandText] = useState<string>('');
  
  useEffect(() => {
    // Generate formatted command using the updated utility
    const formattedCommand = generateCommand(data, commandType, osType);
    setCommandText(formattedCommand);
  }, [commandType, osType, data]);

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
      <h4 className={styles.sectionHeader}>Command Format</h4>
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
      
      <h4 className={styles.sectionHeader}>Operating System</h4>
      <div className={styles.formatSelector}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="os-type"
            value="unix"
            checked={osType === 'unix'}
            onChange={() => setOSType('unix')}
          />
          macOS/Linux
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="os-type"
            value="windows"
            checked={osType === 'windows'}
            onChange={() => setOSType('windows')}
          />
          Windows
        </label>
      </div>
      
      <h4 className={styles.sectionHeader}>Generated Command</h4>
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