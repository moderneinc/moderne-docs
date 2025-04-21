/**
 * Org Service Configuration Definitions
 * Contains configuration for configuring an organization service
 */

const orgServiceConfigDefinition = {
  label: 'Organizations Service Configuration',
  enabled: false,
  fields: [
    { 
      label: 'Organization Service URL', 
      key: 'orgServiceUrl', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_SERVICE_URL',
      description: 'The URL of your GraphQL service that provides organization information.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Update Interval Seconds', 
      key: 'updateInterval', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS',
      description: 'Specifies how often to request your organization information.',
      required: false,
      type: 'text',
      defaultValue: '600'
    },
    { 
      label: 'Skip SSL Verification', 
      key: 'skipSSL', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL',
      description: 'Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to true if you use a self-signed SSL/TLS certificate.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    },
  ]
};

export default orgServiceConfigDefinition;