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
        description: 'Application (client) ID for your Azure DevOps OAuth app.'
      },
      { 
        label: 'Client Secret',
        key: 'clientSecret',
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTSECRET',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'Secret key for your Azure DevOps OAuth app authentication.'
      },
      { 
        label: 'OAuth Tenant ID',
        key: 'oauthTenantId',
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_TENANTID',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'Directory (tenant) ID for your Azure Active Directory.'
      },
      { 
        label: 'Skip SSL Verification',
        key: 'skipSSL',
        envKey: 'MODERNE_AGENT_AZUREDEVOPS_${i}_SKIPSSL',
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disable SSL verification (not recommended for production).'
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
  bitbucketCloud: {
    label: 'Bitbucket Cloud',
    fields: [
      { 
        label: 'Private Key',
        key: 'privateKey',
        envKey: 'MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The key specified in your Bitbucket OAuth consumer.'
      },
      { 
        label: 'Client Secret',
        key: 'clientSecret',
        envKey: 'MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The secret specified in your Bitbucket OAuth consumer.'
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
        label: 'URL',
        key: 'url',
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
        required: false,
        type: 'array',
        defaultValue: '',
        description: 'The list of alternative fully-qualified URL of the running Bitbucket instance. For example: https://bitbucket.myorg.com.'
      },
      { 
        label: 'Skip SSL Verification',
        key: 'skipSSL',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SKIPSSL',
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.'
      },
      { 
        label: 'SSH Private Key',
        key: 'sshPrivateKey',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SSH_PRIVATEKEY',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The SSH private key used to establish a SSH connection with Bitbucket.'
      },
      { 
        label: 'SSH Passphrase',
        key: 'sshPassphrase',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SSH_PASSPHRASE',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>'
      },
      { 
        label: 'SSH Filename',
        key: 'sshFilename',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SSH_SSHFILENAME',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The file name of the private key, which the agent will store locally. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH User',
        key: 'sshUser',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SSH_USER',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The username used for SSH communication with Bitbucket. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH Port',
        key: 'sshPort',
        envKey: 'MODERNE_AGENT_BITBUCKET_${i}_SSH_PORT',
        required: false,
        type: 'text',
        defaultValue: '7999',
        description: 'The port used to communicate via SSH with Bitbucket. <strong>This is required if the private key is specified.</strong>'
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
        description: 'The client id configured in GitHub.'
      },
      { 
        label: 'Client Secret',
        key: 'clientSecret',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The client secret configured in GitHub.'
      },
      { 
        label: 'URL',
        key: 'url',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_URL',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The fully-qualified hostname of the running GitHub instance.'
      },
      { 
        label: 'Skip SSL Verification',
        key: 'skipSSL',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SKIPSSL',
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.'
      },
      { 
        label: 'Allowable Organizations',
        key: 'allowableOrganizations',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_ALLOWABLE_ORGANIZATIONS_${i}',
        required: false,
        type: 'array',
        defaultValue: '',
        description: 'Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to.'
      },
      { 
        label: 'Include Private Repositories',
        key: 'includePrivateRepos',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_OAUTH_INCLUDEPRIVATEREPOS',
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to true.'
      },
      { 
        label: 'SSH Private Key',
        key: 'sshPrivateKey',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SSH_PRIVATEKEY',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The SSH private key used to establish a SSH connection with GitHub.'
      },
      { 
        label: 'SSH Passphrase',
        key: 'sshPassphrase',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SSH_PASSPHRASE',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>'
      },
      { 
        label: 'SSH Filename',
        key: 'sshFilename',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SSH_SSHFILENAME',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The file name of the private key, which the agent will store locally. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH User',
        key: 'sshUser',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SSH_USER',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The username used for SSH communication with GitHub. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH Port',
        key: 'sshPort',
        envKey: 'MODERNE_AGENT_GITHUB_${i}_SSH_PORT',
        required: false,
        type: 'text',
        defaultValue: '7999',
        description: 'The port used to communicate via SSH with GitHub. <strong>This is required if the private key is specified.</strong>'
      },
    ],
  },
  gitlab: {
    label: 'GitLab',
    fields: [
      { 
        label: 'Client ID',
        key: 'clientId',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_OAUTH_CLIENTID',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The application id configured in GitLab.'
      },
      { 
        label: 'Client Secret',
        key: 'clientSecret',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_OAUTH_CLIENTSECRET',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The client secret configured in GitLab.'
      },
      { 
        label: 'URL',
        key: 'url',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_URL',
        required: true,
        type: 'text',
        defaultValue: '',
        description: 'The fully-qualified hostname of the running GitLab instance.'
      },
      { 
        label: 'Skip SSL Verification',
        key: 'skipSSL',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SKIPSSL',
        required: false,
        type: 'boolean',
        defaultValue: 'false',
        description: 'Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.'
      },
      { 
        label: 'SSH Private Key',
        key: 'sshPrivateKey',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SSH_PRIVATEKEY',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The SSH private key used to establish a SSH connection with GitLab.'
      },
      { 
        label: 'SSH Passphrase',
        key: 'sshPassphrase',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SSH_PASSPHRASE',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>'
      },
      { 
        label: 'SSH Filename',
        key: 'sshFilename',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SSH_SSHFILENAME',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The file name of the private key, which the agent will store locally. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH User',
        key: 'sshUser',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SSH_USER',
        required: false,
        type: 'text',
        defaultValue: '',
        description: 'The username used for SSH communication with GitLab. <strong>This is required if the private key is specified.</strong>'
      },
      { 
        label: 'SSH Port',
        key: 'sshPort',
        envKey: 'MODERNE_AGENT_GITLAB_${i}_SSH_PORT',
        required: false,
        type: 'text',
        defaultValue: '7999',
        description: 'The port used to communicate via SSH with GitLab. <strong>This is required if the private key is specified.</strong>'
      },
    ],
  },
};

export default scmProviderDefinitions;