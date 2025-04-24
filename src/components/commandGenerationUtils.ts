/**
 * Utility functions for generating agent configuration commands
 */

import { configSections } from "./configSchema";

interface FieldData {
  value?: string;
  useAsEnv?: boolean;
}

interface ProviderConfig {
  [key: string]: any;
}

interface FormData {
  generalConfig?: {
    fields?: {
      [key: string]: FieldData;
    };
  };
  scmConfig?: {
    providers?: Array<{ value: string }>;
    configs?: {
      [providerType: string]: {
        [instanceIndex: string]: {
          [fieldKey: string]: any;
        };
      };
    };
  };
  artifactoryLSTConfig?: {
    enabled?: boolean;
    fields?: {
      [key: string]: FieldData;
    };
    instances?: Array<{
      [key: string]: any;
    }>;
  };
  mavenRepositoryConfig?: {
    enabled?: boolean;
    fields?: {
      [key: string]: FieldData;
    };
    instances?: Array<{
      [key: string]: any;
    }>;
  };
  orgServiceConfig?: {
    enabled?: boolean;
    fields?: {
      [key: string]: FieldData;
    };
  };
  strictRecipeSourcesConfig?: {
    enabled?: boolean;
    fields?: {
      [key: string]: FieldData;
    };
  };
}

/**
 * Generates a Docker command from the form data
 * @param formData - The compiled form data from all steps
 * @returns - The complete Docker command
 */
export function generateDockerCommand(formData: FormData): string {
  const envVars: string[] = [];
  const secretsDeclarations: string[] = [];

  // Process general configuration
  const generalConfig = formData.generalConfig?.fields || {};
  Object.entries(generalConfig).forEach(([key, fieldData]) => {
    const field = configSections.generalConfig.fields.find(
      (f) => f.key === key
    );
    if (field && fieldData.value) {
      if (fieldData.useAsEnv) {
        secretsDeclarations.push(`export ${field.envKey}=...`);
        envVars.push(`-e ${field.envKey}`);
      } else {
        envVars.push(`-e ${field.envKey}=${fieldData.value}`);
      }
    }
  });

  // Process SCM providers - Fixed to correctly access data from scmConfig
  const scmProviders = formData.scmConfig?.providers || [];
  const scmConfigs = formData.scmConfig?.configs || {};

  scmProviders.forEach((provider) => {
    const providerType = provider.value;
    const providerDef = configSections.scmConfig.providers[providerType];

    if (!providerDef) return;

    // Get all instances of this provider type
    const providerInstances = scmConfigs[providerType] || {};

    // Process each instance
    Object.keys(providerInstances).forEach((index) => {
      const instance = providerInstances[index];

      if (!instance) return;

      // Process each field in the provider definition
      providerDef.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", index);

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
            envVars.push(`-e ${envKey}`);
          } else {
            envVars.push(`-e ${envKey}=${fieldValue}`);
          }
        }
      });
    });
  });

  // Process Artifactory LST instances
  if (
    formData.artifactoryLSTConfig?.enabled &&
    formData.artifactoryLSTConfig.instances
  ) {
    const artifactoryInstances = formData.artifactoryLSTConfig.instances || [];

    artifactoryInstances.forEach((instance, index) => {
      if (!instance) return;

      configSections.artifactoryLSTConfig.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", String(index));

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
            envVars.push(`-e ${envKey}`);
          } else {
            envVars.push(`-e ${envKey}=${fieldValue}`);
          }
        }
      });
    });
  }

  // Process Maven Repository instances
  if (
    formData.mavenRepositoryConfig?.enabled &&
    formData.mavenRepositoryConfig.instances
  ) {
    const mavenInstances = formData.mavenRepositoryConfig.instances || [];

    mavenInstances.forEach((instance, index) => {
      if (!instance) return;

      configSections.mavenRepositoryConfig.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", String(index));

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
            envVars.push(`-e ${envKey}`);
          } else {
            envVars.push(`-e ${envKey}=${fieldValue}`);
          }
        }
      });
    });
  }

  // Process Organization Service config
  if (formData.orgServiceConfig?.enabled) {
    const orgFields = formData.orgServiceConfig.fields || {};
    configSections.orgServiceConfig.fields.forEach((field) => {
      const fieldData = orgFields[field.key];
      if (fieldData?.value) {
        if (fieldData.useAsEnv) {
          secretsDeclarations.push(`export ${field.envKey}=...`);
          envVars.push(`-e ${field.envKey}`);
        } else {
          envVars.push(`-e ${field.envKey}=${fieldData.value}`);
        }
      }
    });
  }

  // Process Strict Recipe Sources config
  if (formData.strictRecipeSourcesConfig?.enabled) {
    const strictFields = formData.strictRecipeSourcesConfig.fields || {};
    configSections.strictRecipeSourcesConfig.fields.forEach((field) => {
      const fieldData = strictFields[field.key];
      if (fieldData?.value) {
        if (fieldData.useAsEnv) {
          secretsDeclarations.push(`export ${field.envKey}=...`);
          envVars.push(`-e ${field.envKey}`);
        } else {
          envVars.push(`-e ${field.envKey}=${fieldData.value}`);
        }
      }
    });
  }

  // Build the final command
  let command = "";

  if (secretsDeclarations.length > 0) {
    command +=
      "# Please note that if you create environment variables for secrets, you still need to let Docker\n";
    command +=
      "# know that these variables exist by including it via: `-e ENV_VAR_NAME`.\n";
    command += secretsDeclarations.join("\n");
    command += "\n\n";
  }

  command += "docker run \\\n";
  command += envVars.map((v) => v + " \\").join("\n");
  command += "\n-p 8080:8080\nmoderne-agent:latest";

  return command;
}

/**
 * Generates a JAR command from the form data
 * @param formData - The compiled form data from all steps
 * @returns - The complete JAR command
 */
export function generateJarCommand(formData: FormData): string {
  const args: string[] = [];
  const secretsDeclarations: string[] = [];

  // Process general configuration
  const generalConfig = formData.generalConfig?.fields || {};
  Object.entries(generalConfig).forEach(([key, fieldData]) => {
    const field = configSections.generalConfig.fields.find(
      (f) => f.key === key
    );
    if (field && fieldData.value) {
      const argKey = field.envKey.toLowerCase().replace(/_/g, ".");

      if (fieldData.useAsEnv) {
        secretsDeclarations.push(`export ${field.envKey}=...`);
      } else {
        args.push(`--${argKey}=${fieldData.value}`);
      }
    }
  });

  // Process SCM providers
  const scmProviders = formData.scmConfig?.providers || [];
  const scmConfigs = formData.scmConfig?.configs || {};

  scmProviders.forEach((provider) => {
    const providerType = provider.value;
    const providerDef = configSections.scmConfig.providers[providerType];

    if (!providerDef) return;

    // Get all instances of this provider type
    const providerInstances = scmConfigs[providerType] || {};

    // Process each instance
    Object.keys(providerInstances).forEach((index) => {
      const instance = providerInstances[index];

      if (!instance) return;

      // Process each field in the provider definition
      providerDef.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", index);
          const argKey = envKey
            .toLowerCase()
            .replace(/_/g, ".")
            .replace(/\${i}/g, index);

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
          } else {
            args.push(`--${argKey}=${fieldValue}`);
          }
        }
      });
    });
  });

  // Process Artifactory LST instances
  if (
    formData.artifactoryLSTConfig?.enabled &&
    formData.artifactoryLSTConfig.instances
  ) {
    const artifactoryInstances = formData.artifactoryLSTConfig.instances || [];

    artifactoryInstances.forEach((instance, index) => {
      if (!instance) return;

      configSections.artifactoryLSTConfig.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", String(index));
          const argKey = envKey
            .toLowerCase()
            .replace(/_/g, ".")
            .replace(/\${i}/g, String(index));

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
          } else {
            args.push(`--${argKey}=${fieldValue}`);
          }
        }
      });
    });
  }

  // Process Maven Repository instances
  if (
    formData.mavenRepositoryConfig?.enabled &&
    formData.mavenRepositoryConfig.instances
  ) {
    const mavenInstances = formData.mavenRepositoryConfig.instances || [];

    mavenInstances.forEach((instance, index) => {
      if (!instance) return;

      configSections.mavenRepositoryConfig.fields.forEach((field) => {
        const fieldValue = instance[field.key];
        const useAsEnv = instance[`${field.key}_useAsEnv`];

        if (fieldValue) {
          // Replace ${i} in the envKey with the actual index
          const envKey = field.envKey.replace("${i}", String(index));
          const argKey = envKey
            .toLowerCase()
            .replace(/_/g, ".")
            .replace(/\${i}/g, String(index));

          if (useAsEnv) {
            secretsDeclarations.push(`export ${envKey}=...`);
          } else {
            args.push(`--${argKey}=${fieldValue}`);
          }
        }
      });
    });
  }

  // Process Organization Service config
  if (formData.orgServiceConfig?.enabled) {
    const orgFields = formData.orgServiceConfig.fields || {};
    configSections.orgServiceConfig.fields.forEach((field) => {
      const fieldData = orgFields[field.key];
      if (fieldData?.value) {
        const argKey = field.envKey.toLowerCase().replace(/_/g, ".");

        if (fieldData.useAsEnv) {
          secretsDeclarations.push(`export ${field.envKey}=...`);
        } else {
          args.push(`--${argKey}=${fieldData.value}`);
        }
      }
    });
  }

  // Process Strict Recipe Sources config
  if (formData.strictRecipeSourcesConfig?.enabled) {
    const strictFields = formData.strictRecipeSourcesConfig.fields || {};
    configSections.strictRecipeSourcesConfig.fields.forEach((field) => {
      const fieldData = strictFields[field.key];
      if (fieldData?.value) {
        const argKey = field.envKey.toLowerCase().replace(/_/g, ".");

        if (fieldData.useAsEnv) {
          secretsDeclarations.push(`export ${field.envKey}=...`);
        } else {
          args.push(`--${argKey}=${fieldData.value}`);
        }
      }
    });
  }

  // Build the final command
  let command = "";

  if (secretsDeclarations.length > 0) {
    command +=
      "# Exporting environment variables with the exact same structure as the parameter in the Java command\n";
    command +=
      "# makes it so you no longer need to include them in the below Java command.\n";
    command += secretsDeclarations.join("\n");
    command += "\n\n";
  }

  command += "java -jar moderne-agent-{version}.jar \\\n";
  command += args.map((a) => a + " \\").join("\n");

  return command;
}

/**
 * Returns the appropriate command string based on agent type
 * @param agentType - "oci-container" or "executable-jar"
 * @param formData - The compiled form data
 * @returns - The command string
 */
export function generateCommand(
  agentType: "oci-container" | "executable-jar",
  formData: FormData
): string {
  if (agentType === "executable-jar") {
    return generateJarCommand(formData);
  } else {
    return generateDockerCommand(formData);
  }
}
