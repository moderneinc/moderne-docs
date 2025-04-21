/**
 * Strict Recipe Sources Configuration Definitions
 * Contains configuration for controlling recipe sources
 */

const strictRecipeSourcesConfigDefinition = {
  label: 'Strict Recipe Sources Configuration',
  fields: [
    { 
      label: 'Recipe Sources URL', 
      key: 'recipeSourcesUrl', 
      envKey: 'MODERNE_AGENT_RECIPE_SOURCES_SERVICE_URL',
      description: 'The URL of your GraphQL service that provides recipe sources information.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Update Interval Seconds', 
      key: 'updateInterval', 
      envKey: 'MODERNE_AGENT_RECIPE_SOURCES_UPDATE_INTERVAL_SECONDS',
      description: 'Specifies how often to request your recipe sources information.',
      required: false,
      type: 'text',
      defaultValue: '600'
    },
    { 
      label: 'Skip SSL Verification', 
      key: 'skipSSL', 
      envKey: 'MODERNE_AGENT_RECIPE_SOURCES_SKIPSSL',
      description: 'Specifies whether or not to skip SSL validation for HTTP connections to this Recipe Sources service instance. This must be set to true if you use a self-signed SSL/TLS certificate.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    },
  ]
};

export default strictRecipeSourcesConfigDefinition;