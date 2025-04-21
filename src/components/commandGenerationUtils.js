/**
 * Transforms an environment variable key to Java argument format
 * @param {string} envKey - The environment variable key
 * @param {string} value - The value to set
 * @param {number} index - The instance index
 * @returns {string} The formatted Java argument
 */
export const transformToJavaFormat = (envKey, value, index) => {
  // Example: MODERNE_AGENT_GITHUB_0_URL → moderne.agent.github[0].url
  let javaKey = envKey.toLowerCase();

  // Replace ${i} placeholders if present
  javaKey = javaKey.replace(/\${i}/g, '0');
  
  // Replace underscores with dots
  javaKey = javaKey.replace(/_/g, '.');
  
  // Handle array indices - match patterns like .0. or .1.
  javaKey = javaKey.replace(/\.(\d+)\./g, (match, digit) => {
    return `[${digit}].`;
  });
  
  // Handle the last index if it ends with a digit
  javaKey = javaKey.replace(/\.(\d+)$/, (match, digit) => {
    return `[${digit}]`;
  });
  
  return `--${javaKey}=${value}`;
};

/**
 * Generates command string based on configuration
 * @param {Object} data - The form data
 * @param {string} commandType - The command type (docker or java)
 * @returns {string} The generated command
 */
export const generateCommand = (data, commandType) => {
  const exportLines = [];
  const cmdArgs = [];
  
  const { providers = [], providerConfigs = {} } = data || {};
  const generalConfig = data.generalConfig || {};
  
  // Process general configuration
  if (generalConfig && generalConfig.fields) {
    Object.entries(generalConfig.fields).forEach(([key, config]) => {
      if (!config || !config.value) return;
      
      const { value, asEnv, envKey } = config;
      
      if (asEnv) {
        // Always add exports for environment variables
        exportLines.push(`export ${envKey}=${value}`);
        
        if (commandType === 'docker') {
          // For Docker, pass env var by name
          cmdArgs.push(`-e ${envKey}`);
        }
      } else {
        if (commandType === 'docker') {
          // For Docker, pass as direct env var
          cmdArgs.push(`-e ${envKey}=${value}`);
        } else {
          // For Java, transform to Java format
          const javaKey = envKey.toLowerCase().replace(/_/g, '.');
          cmdArgs.push(`--${javaKey}=${value}`);
        }
      }
    });
  }
  
  // Process commit options
  if (generalConfig && generalConfig.commitOptions && generalConfig.commitOptions.length > 0) {
    generalConfig.commitOptions.forEach((option, index) => {
      const envKey = `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_${index}`;
      
      if (commandType === 'docker') {
        cmdArgs.push(`-e ${envKey}=${option}`);
      } else {
        const javaKey = `moderne.agent.defaultCommitOptions[${index}]`;
        cmdArgs.push(`--${javaKey}=${option}`);
      }
    });
  }
  
  // Process organization service configuration
  if (data?.orgServiceConfig?.enabled && data.orgServiceConfig.fields) {
    const orgServiceFields = data.orgServiceConfig.fields;
    
    Object.entries(orgServiceFields).forEach(([key, config]) => {
      if (!config || !config.value) return;
      
      const { value, asEnv, envKey } = config;
      
      if (asEnv) {
        // Always add exports for environment variables
        exportLines.push(`export ${envKey}=${value}`);
        
        if (commandType === 'docker') {
          // For Docker, pass env var by name
          cmdArgs.push(`-e ${envKey}`);
        }
      } else {
        if (commandType === 'docker') {
          // For Docker, pass as direct env var
          cmdArgs.push(`-e ${envKey}=${value}`);
        } else {
          // For Java, transform to Java format
          const javaKey = envKey.toLowerCase().replace(/_/g, '.');
          cmdArgs.push(`--${javaKey}=${value}`);
        }
      }
    });
  }
  
  // Process SCM providers configurations
  providers.forEach(providerId => {
    const config = providerConfigs[providerId];
    if (!config) return;
    
    const { instances = [] } = config;
    
    instances.forEach((instance, instanceIndex) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([fieldKey, fieldData]) => {
        if (!fieldData || !fieldData.value) return;
        
        const { value, asEnv, envKey } = fieldData;
        
        // Handle array fields differently
        if (Array.isArray(value)) {
          value.forEach((item, arrayIndex) => {
            const arrayEnvKey = envKey.replace(/\${i}/g, arrayIndex);
            if (asEnv) {
              exportLines.push(`export ${arrayEnvKey}=${item}`);
              if (commandType === 'docker') {
                cmdArgs.push(`-e ${arrayEnvKey}`);
              }
            } else {
              if (commandType === 'docker') {
                cmdArgs.push(`-e ${arrayEnvKey}=${item}`);
              } else {
                const javaArg = transformToJavaFormat(arrayEnvKey, item, instanceIndex);
                cmdArgs.push(javaArg);
              }
            }
          });
        } else {
          // Handle non-array fields as before
          if (asEnv) {
            exportLines.push(`export ${envKey}=${value}`);
            if (commandType === 'docker') {
              cmdArgs.push(`-e ${envKey}`);
            }
          } else {
            if (commandType === 'docker') {
              cmdArgs.push(`-e ${envKey}=${value}`);
            } else {
              const javaArg = transformToJavaFormat(envKey, value, instanceIndex);
              cmdArgs.push(javaArg);
            }
          }
        }
      });
    });
  });
  
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
  
  return command;
};