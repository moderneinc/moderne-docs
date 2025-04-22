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
      envKey: 'MODERNE_AGENT_ARTIFACTORY_${i}_URL',
      description: 'The URL of your Artifactory instance.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Username', 
      key: 'username', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_${i}_USERNAME',
      description: 'The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Password', 
      key: 'password', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_${i}_PASSWORD',
      description: 'The password used to connect to your Artifactory instance.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'AST Query Filters', 
      key: 'astQueryFilters', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_${i}_ASTQUERYFILTERS_${i}',
      description: 'The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an AND.',
      required: true,
      type: 'array',
      defaultValue: ''
    },
    { 
      label: 'Skip SSL Verification', 
      key: 'skipSSL', 
      envKey: 'MODERNE_AGENT_ARTIFACTORY_${i}_SKIPSSL',
      description: 'Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    }
  ]
};

export default artifactoryLSTConfigDefinition;