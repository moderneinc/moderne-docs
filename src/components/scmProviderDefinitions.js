/**
 * SCM Provider Definitions
 * Contains configuration for all supported SCM providers
 */

const scmProviderDefinitions = {
  azure: {
    label: 'Azure DevOps',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTID', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'Application (client) ID for your Azure DevOps OAuth app'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTSECRET', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'Secret key for your Azure DevOps OAuth app authentication'
      },
      { 
        label: 'OAuth Tenant ID', 
        key: 'oauthTenantId', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_TENANTID', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'Directory (tenant) ID for your Azure Active Directory'
      },
      { 
        label: 'Skip SSL Verification', 
        key: 'skipSSL', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SKIPSSL', 
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disable SSL verification (not recommended for production)'
      },
    ],
  },
  github: {
    label: 'GitHub',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_ID', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'OAuth App Client ID from your GitHub organization settings'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'OAuth App Client Secret from your GitHub organization settings'
      },
      { 
        label: 'URL', 
        key: 'url', 
        envKey: 'MODERNE_AGENT_GITHUB_${i}_URL',
        type: 'text',
        defaultValue: 'https://github.com',
        description: 'GitHub instance URL (leave empty for github.com)'
      },
    ],
  },
  bitbucket: {
    label: 'Bitbucket',
    fields: [
      { 
        label: 'Client ID', 
        key: 'clientId', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_ID', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'OAuth Consumer Key from your Bitbucket workspace settings'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_CLIENT_SECRET', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'OAuth Consumer Secret from your Bitbucket workspace settings'
      },
      { 
        label: 'URL', 
        key: 'url', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_URL',
        type: 'text',
        defaultValue: 'https://bitbucket.org',
        description: 'Bitbucket instance URL (leave empty for bitbucket.org)'
      },
    ],
  },
};

export default scmProviderDefinitions;