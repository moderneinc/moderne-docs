import { 
  FormData, 
  FieldData, 
  CommandType,
  OSType,
} from './types';

/**
 * Transforms an environment variable key to Java argument format
 * @param {string} envKey - The environment variable key
 * @returns {string} The formatted Java key
 */
export const transformToJavaFormat = (envKey: string): string => {
  // Example: MODERNE_AGENT_GITHUB_0_URL → moderne.agent.github[0].url
  let javaKey = envKey.toLowerCase();

  // Replace ${i} placeholders if present
  javaKey = javaKey.replace(/\${i}/g, '0');
  
  // Replace underscores with dots
  javaKey = javaKey.replace(/_/g, '.');
  
  // Handle array indices - match patterns like .0. or .1.
  javaKey = javaKey.replace(/\.(\d+)\./g, (_match, digit) => {
    return `[${digit}].`;
  });
  
  // Handle the last index if it ends with a digit
  javaKey = javaKey.replace(/\.(\d+)$/, (_match, digit) => {
    return `[${digit}]`;
  });
  
  return javaKey;
};

/**
 * Process a single field and add to command arguments
 * @param {FieldData} config - Field configuration
 * @param {string[]} exportLines - Array to collect export lines
 * @param {string[]} cmdArgs - Array to collect command arguments
 * @param {CommandType} commandType - Docker or Java
 */
const processField = (
  config: FieldData | undefined, 
  exportLines: string[], 
  cmdArgs: string[], 
  commandType: CommandType
): void => {
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
 * @param {string[]} values - Array of values
 * @param {string} envKeyPattern - Environment key with ${i} placeholder
 * @param {boolean} asEnv - Whether to use as environment variable
 * @param {string[]} exportLines - Array to collect export lines
 * @param {string[]} cmdArgs - Array to collect command arguments
 * @param {CommandType} commandType - Docker or Java
 */
const processArrayField = (
  values: string[], 
  envKeyPattern: string, 
  asEnv: boolean | undefined, 
  exportLines: string[], 
  cmdArgs: string[], 
  commandType: CommandType
): void => {
  if (!Array.isArray(values) || values.length === 0) return;
  
  values.forEach((item, index) => {
    const arrayEnvKey = envKeyPattern.replace(/\${i}/g, index.toString());
    
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
 * @param {Record<string, FieldData>} fieldsObject - Object containing field configs
 * @param {string[]} exportLines - Array to collect export lines
 * @param {string[]} cmdArgs - Array to collect command arguments
 * @param {CommandType} commandType - Docker or Java
 */
const processFieldsSection = (
  fieldsObject: Record<string, FieldData> | undefined, 
  exportLines: string[], 
  cmdArgs: string[], 
  commandType: CommandType
): void => {
  if (!fieldsObject) return;
  
  Object.entries(fieldsObject).forEach(([key, config]) => {
    if (Array.isArray(config.value)) {
      processArrayField(
        config.value as string[], 
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
 * @param {FormData} data - The form data
 * @param {CommandType} commandType - The command type (docker or java)
 * @param {OSType} osType - Unix or Windows
 * @returns {string} The generated command
 */
export const generateCommand = (
  data: FormData | undefined, 
  commandType: CommandType,
  osType: OSType = 'unix'
): string => {
  const exportLines: string[] = [];
  const cmdArgs: string[] = [];
  
  const { providers = [], providerConfigs = {} } = data || {};
  const generalConfig = data?.generalConfig || {};
  
  // START: STEP PROCESSING SECTION - ADD NEW STEPS HERE

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
    
    instances.forEach((instance) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([_fieldKey, fieldData]) => {
        if (!fieldData || !fieldData.value) return;
        
        // Handle array fields differently
        if (Array.isArray(fieldData.value)) {
          processArrayField(
            fieldData.value as string[], 
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

  // Process Artifactory LST configuration
  if (data?.artifactoryLSTConfig?.enabled && data.artifactoryLSTConfig.instances) {
    const instances = data.artifactoryLSTConfig.instances;
        
    instances.forEach((instance) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([_fieldKey, fieldData]) => {        
        if (!fieldData || !fieldData.value) return;
        
        // Handle array fields differently
        if (Array.isArray(fieldData.value)) {
          processArrayField(
            fieldData.value as string[], 
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
  }

  // Process Maven repository configuration
  if (data?.mavenRepositoryConfig?.enabled && data.mavenRepositoryConfig.instances) {
    const instances = data.mavenRepositoryConfig.instances;
        
    instances.forEach((instance) => {
      if (!instance) return;
      
      Object.entries(instance).forEach(([_fieldKey, fieldData]) => {        
        if (!fieldData || !fieldData.value) return;
        
        processField(fieldData, exportLines, cmdArgs, commandType);
      });
    });
  }

  // Process organization service configuration
  if (data?.orgServiceConfig?.enabled && data?.orgServiceConfig.fields) {
    processFieldsSection(data.orgServiceConfig.fields, exportLines, cmdArgs, commandType);
  }

  // Process strict recipe sources configuration
  if (data?.strictRecipeSourcesConfig?.enabled && data?.strictRecipeSourcesConfig.fields) {
    processFieldsSection(data.strictRecipeSourcesConfig.fields, exportLines, cmdArgs, commandType);
  }

  // Process organization hierarchy and dev center configuration
  if (data?.orgHierarchyAndDevCenterConfig?.enabled && data?.orgHierarchyAndDevCenterConfig.fields) {
    processFieldsSection(data.orgHierarchyAndDevCenterConfig.fields, exportLines, cmdArgs, commandType);
  }

  // END: STEP PROCESSING SECTION
  
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
  
  // Format the command based on OS type
  return formatCommand(command, commandType, osType);
};

/**
 * Formats a command string for better readability based on OS type
 * @param {string} command - The command to format
 * @param {CommandType} commandType - Docker or Java
 * @param {OSType} osType - Unix or Windows
 * @returns {string} Formatted command
 */
export const formatCommand = (
  command: string,
  commandType: CommandType,
  osType: OSType = 'unix'
): string => {
  const lineContinuation = osType === 'unix' ? '\\' : '^';
  
  // Handle the exports section and command section separately
  const parts = command.split('\n\n');
  
  if (parts.length < 2) {
    // If there's only one part (no exports), format just the command
    return formatCommandPart(parts[0], commandType, lineContinuation);
  }
  
  // Format exports if using Windows style
  let exportsSection = parts[0];
  if (osType === 'windows') {
    // Optionally convert to Windows set commands
    exportsSection = exportsSection.replace(/^export /gm, 'set ');
  }
  
  // Format the command part
  const commandSection = formatCommandPart(parts[1], commandType, lineContinuation);
  
  return exportsSection + '\n\n' + commandSection;
};

/**
 * Formats just the command part (not exports)
 * @param {string} commandPart - The command part to format
 * @param {CommandType} commandType - Docker or Java
 * @param {string} continuation - Line continuation character
 * @returns {string} Formatted command part
 */
const formatCommandPart = (
  commandPart: string,
  commandType: CommandType,
  continuation: string
): string => {
  if (commandType === 'docker') {
    // Format Docker command
    return commandPart.replace(/\s-([a-zA-Z])\s/g, ` ${continuation}\n  -$1 `);
  } else {
    // Format Java command
    // Check if we have a java -jar command
    if (commandPart.startsWith('java -jar')) {
      // Find if we have parameters
      if (commandPart.includes('--')) {
        // Get the base command (java -jar moderne-agent-{version}.jar)
        const jarPattern = /java -jar [^\s]+/;
        const match = commandPart.match(jarPattern);
        
        if (match) {
          const baseCommand = match[0];
          // Get everything after the jar file name
          const rest = commandPart.substring(baseCommand.length).trim();
          
          // Format parameters with line continuations
          const formattedParams = rest.replace(/\s+(--[a-zA-Z0-9.-]+)/g, ` ${continuation}\n  $1`);
          
          // If there are parameters, add a continuation after the base command
          if (formattedParams.length > 0) {
            return `${baseCommand} ${continuation}\n  ${formattedParams.trim()}`;
          } else {
            return baseCommand;
          }
        }
      }
    }
    
    // Default fallback if pattern matching fails
    return commandPart;
  }
};