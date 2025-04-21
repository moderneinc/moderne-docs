/**
 * Transforms an environment variable key to Java argument format
 * @param {string} envKey - The environment variable key
 * @returns {string} The formatted Java key
 */
export const transformToJavaFormat = (envKey) => {
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
  
  return javaKey;
};

/**
 * Process a single field and add to command arguments
 * @param {Object} config - Field configuration
 * @param {Array} exportLines - Array to collect export lines
 * @param {Array} cmdArgs - Array to collect command arguments
 * @param {string} commandType - Docker or Java
 */
const processField = (config, exportLines, cmdArgs, commandType) => {
  if (!config || !config.value) return;
  
  const { value, asEnv, envKey } = config;
  
  if (asEnv) {
    // Add to exports
    exportLines.push(`export ${envKey}=${value}`);
    
    if (commandType === 'docker') {
      cmdArgs.push(`-e ${envKey}`);
    }
  } else {
    if (commandType === 'docker') {
      cmdArgs.push(`-e ${envKey}=${value}`);
    } else {
      const javaKey = transformToJavaFormat(envKey);
      cmdArgs.push(`--${javaKey}=${value}`);
    }
  }
};

/**
 * Process an array field
 * @param {Array} values - Array of values
 * @param {string} envKeyPattern - Environment key with ${i} placeholder
 * @param {boolean} asEnv - Whether to use as environment variable
 * @param {Array} exportLines - Array to collect export lines
 * @param {Array} cmdArgs - Array to collect command arguments
 * @param {string} commandType - Docker or Java
 */
const processArrayField = (values, envKeyPattern, asEnv, exportLines, cmdArgs, commandType) => {
  if (!Array.isArray(values) || values.length === 0) return;
  
  values.forEach((item, index) => {
    const arrayEnvKey = envKeyPattern.replace(/\${i}/g, index);
    
    if (asEnv) {
      exportLines.push(`export ${arrayEnvKey}=${item}`);
      if (commandType === 'docker') {
        cmdArgs.push(`-e ${arrayEnvKey}`);
      }
    } else {
      if (commandType === 'docker') {
        cmdArgs.push(`-e ${arrayEnvKey}=${item}`);
      } else {
        const javaKey = transformToJavaFormat(arrayEnvKey);
        cmdArgs.push(`--${javaKey}=${item}`);
      }
    }
  });
};

/**
 * Process a section of fields
 * @param {Object} fieldsObject - Object containing field configs
 * @param {Array} exportLines - Array to collect export lines
 * @param {Array} cmdArgs - Array to collect command arguments
 * @param {string} commandType - Docker or Java
 */
const processFieldsSection = (fieldsObject, exportLines, cmdArgs, commandType) => {
  if (!fieldsObject) return;
  
  Object.entries(fieldsObject).forEach(([key, config]) => {
    if (Array.isArray(config.value)) {
      processArrayField(
        config.value, 
        config.envKey, 
        config.asEnv, 
        exportLines, 
        cmdArgs, 
        commandType
      );
    } else {
      processField(config, exportLines, cmdArgs, commandType);
    }
  });
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
    processFieldsSection(generalConfig.fields, exportLines, cmdArgs, commandType);
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
  
  // Process SCM providers configurations
  providers.forEach(providerId => {
    const config = providerConfigs[providerId];
    if (!config) return;
    
    const { instances = [] } = config;
    
    instances.forEach((instance, instanceIndex) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([fieldKey, fieldData]) => {
        if (!fieldData || !fieldData.value) return;
        
        // Handle array fields differently
        if (Array.isArray(fieldData.value)) {
          processArrayField(
            fieldData.value, 
            fieldData.envKey, 
            fieldData.asEnv, 
            exportLines, 
            cmdArgs, 
            commandType
          );
        } else {
          processField(fieldData, exportLines, cmdArgs, commandType);
        }
      });
    });
  });

  // Process organization service configuration
  if (data?.orgServiceConfig?.enabled && data.orgServiceConfig.fields) {
    processFieldsSection(data.orgServiceConfig.fields, exportLines, cmdArgs, commandType);
  }

  // Process strict recipe sources configuration
  if (data?.strictRecipeSourcesConfig?.enabled && data.strictRecipeSourcesConfig.fields) {
    processFieldsSection(data.strictRecipeSourcesConfig.fields, exportLines, cmdArgs, commandType);
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
  
  return command;
};