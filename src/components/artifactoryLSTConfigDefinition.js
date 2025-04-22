/**
 * Artifactory LST Configuration Definitions
 * Contains configuration for Artifactory LST settings
 */

const artifactoryLSTConfigDefinition = {
  label: 'Artifactory LST Storage',
  fields: [
    { 
      label: 'Artifactory URL', 
      key: 'artifactoryUrl', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_URL',
      description: 'The URL of your Artifactory instance.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Repository Name', 
      key: 'repositoryName', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_REPOSITORY',
      description: 'The name of the repository where LSTs are stored.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Username', 
      key: 'username', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_USERNAME',
      description: 'Username for authentication with Artifactory.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'API Key', 
      key: 'apiKey', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_APIKEY',
      description: 'API key for authentication with Artifactory.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Skip SSL Verification', 
      key: 'skipSSL', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_SKIPSSL',
      description: 'Disable SSL verification for Artifactory connections.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    }
  ]
};

export default artifactoryLSTConfigDefinition;