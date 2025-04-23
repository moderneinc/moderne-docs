/**
 * Utility functions for generating agent configuration commands
 */

import { configSections } from "./configSchema";

/**
 * Generates a Docker command from the form data
 * @param {Object} formData - The compiled form data from all steps
 * @returns {string} - The complete Docker command
 */
export function generateDockerCommand(formData) {
  const envVars = [];
  const secretsDeclarations = [];

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

  // Process SCM providers
  const providers = formData.providers || [];
  const providerConfigs = formData.providerConfigs || {};

  providers.forEach((provider, index) => {
    const providerDef = configSections.scmConfig.providers[provider];
    const config = providerConfigs[provider] || {};

    providerDef.fields.forEach((field) => {
      const fieldValue = config[field.key];
      if (fieldValue) {
        const envKey = field.envKey.replace("{index}", index);

        if (config[`${field.key}_useAsEnv`]) {
          secretsDeclarations.push(`export ${envKey}=...`);
          envVars.push(`-e ${envKey}`);
        } else {
          envVars.push(`-e ${envKey}=${fieldValue}`);
        }
      }
    });
  });

  // Process Artifactory LST config
  if (formData.artifactoryLSTConfig?.enabled) {
    const artifactoryFields = formData.artifactoryLSTConfig.fields || {};
    configSections.artifactoryLSTConfig.fields.forEach((field) => {
      const fieldData = artifactoryFields[field.key];
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

  // Process Maven Repository config
  if (formData.mavenRepositoryConfig?.enabled) {
    const mavenFields = formData.mavenRepositoryConfig.fields || {};
    configSections.mavenRepositoryConfig.fields.forEach((field) => {
      const fieldData = mavenFields[field.key];
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
 * @param {Object} formData - The compiled form data from all steps
 * @returns {string} - The complete JAR command
 */
export function generateJarCommand(formData) {
  const args = [];
  const secretsDeclarations = [];

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
  const providers = formData.providers || [];
  const providerConfigs = formData.providerConfigs || {};

  providers.forEach((provider, index) => {
    const providerDef = configSections.scmConfig.providers[provider];
    const config = providerConfigs[provider] || {};

    providerDef.fields.forEach((field) => {
      const fieldValue = config[field.key];
      if (fieldValue) {
        const envKey = field.envKey.replace("{index}", index);
        const argKey = envKey
          .toLowerCase()
          .replace(/_/g, ".")
          .replace(/\[/g, ".")
          .replace(/\]/g, "");

        if (config[`${field.key}_useAsEnv`]) {
          secretsDeclarations.push(`export ${envKey}=...`);
        } else {
          args.push(`--${argKey}=${fieldValue}`);
        }
      }
    });
  });

  // Process other configurations similarly to the Docker command
  // Artifactory LST, Maven Repository, Organization Service, etc.

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
 * @param {string} agentType - "oci-container" or "executable-jar"
 * @param {Object} formData - The compiled form data
 * @returns {string} - The command string
 */
export function generateCommand(agentType, formData) {
  if (agentType === "executable-jar") {
    return generateJarCommand(formData);
  } else {
    return generateDockerCommand(formData);
  }
}
