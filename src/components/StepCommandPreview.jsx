import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { generateCommand } from './commandGenerationUtils';
import styles from './styles/StepCommandPreview.module.css';

export default function StepCommandPreview({ stepKey }) {
  const { watch } = useFormContext();
  const formValues = watch();
  
  // Add command type selection
  const [agentType, setAgentType] = useState('oci-container');
  // Generate command whenever data or agent type changes
  const [commandText, setCommandText] = useState('');
  
  useEffect(() => {
    // Use the enhanced utility function with form values
    setCommandText(generateCommand(agentType, formValues));
  }, [agentType, formValues]);

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
    <div className={styles.container}>
      <h4>Agent Type</h4>
      <div className={styles.formatSelector}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="agent-type"
            value="oci-container"
            checked={agentType === 'oci-container'}
            onChange={() => setAgentType('oci-container')}
          />
          OCI Container (Docker)
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="agent-type"
            value="executable-jar"
            checked={agentType === 'executable-jar'}
            onChange={() => setAgentType('executable-jar')}
          />
          Executable JAR
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
          Make sure to replace any placeholder values with your actual credentials.
        </p>
      </div>
    </div>
  );
}