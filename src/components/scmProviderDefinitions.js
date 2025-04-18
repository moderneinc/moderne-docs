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
      { 
        label: 'SSH Private Key', 
        key: 'sshPrivateKey', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_PRIVATEKEY', 
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The SSH private key used to establish a SSH connection with Azure DevOps.'
      },
      { 
        label: 'SSH Passphrase', 
        key: 'sshPassphrase', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_PASSPHRASE', 
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>'
      },
      { 
        label: 'SSH Filename', 
        key: 'sshFilename', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_SSHFILENAME', 
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The file name of the private key, which the agent will store locally. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH User', 
        key: 'sshUser', 
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_USER', 
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The username used for SSH communication with Azure DevOps. <strong>This is required if the private key is specified.</strong>'
      },
    ],
  },
  bitbucketDC: {
    label: 'Bitbucket Data Center',
    fields: [
      { 
        label: 'Private Key', 
        key: 'privateKey', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_PRIVATEKEY', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The private key you configured for this Bitbucket instance.'
      },
      { 
        label: 'Client Secret', 
        key: 'clientSecret', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_URL', 
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The fully-qualified URL of the running Bitbucket instance. For example: <em>https://bitbucket.myorg.com</em>.'
      },
      { 
        label: 'Alternate URLs', 
        key: 'alternateUrls', 
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_ALTERNATEURLS_${i}',
        type: 'text',
        defaultValue: 'https://bitbucket.org',
        description: 'The list of alternative fully-qualified URL of the running Bitbucket instance. For example: https://bitbucket.myorg.com.'
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
};

export default scmProviderDefinitions;