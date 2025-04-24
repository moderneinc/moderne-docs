/**
 * SCM Provider Definitions
 * Contains configuration for all supported SCM providers
 */
import { SCMProviderDefinitions } from "./types";

const scmProviderDefinitions: SCMProviderDefinitions = {
  azure: {
    label: "Azure DevOps",
    fields: [
      {
        label: "Client ID",
        key: "clientId",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTID",
        required: true,
        type: "text",
        defaultValue: "",
        description: "Application (client) ID for your Azure DevOps OAuth app.",
      },
      {
        label: "Client Secret",
        key: "clientSecret",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_CLIENTSECRET",
        required: true,
        type: "text",
        defaultValue: "",
        description:
          "Secret key for your Azure DevOps OAuth app authentication.",
      },
      {
        label: "OAuth Tenant ID",
        key: "oauthTenantId",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_OAUTH_TENANTID",
        required: true,
        type: "text",
        defaultValue: "",
        description: "Directory (tenant) ID for your Azure Active Directory.",
      },
      {
        label: "Skip SSL Verification",
        key: "skipSSL",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SKIPSSL",
        required: false,
        type: "boolean",
        defaultValue: "false",
        description:
          "Disable SSL verification (not recommended for production).",
      },
      {
        label: "SSH Private Key",
        key: "sshPrivateKey",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_PRIVATEKEY",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The SSH private key used to establish a SSH connection with Azure DevOps.",
      },
      {
        label: "SSH Passphrase",
        key: "sshPassphrase",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_PASSPHRASE",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>",
      },
      {
        label: "SSH Filename",
        key: "sshFilename",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_FILENAME",
        required: false,
        type: "text",
        defaultValue: "id_rsa",
        description:
          "The filename to use for the SSH key when it's written to disk. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Host",
        key: "sshHost",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_HOST",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The host to use for SSH connections. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Port",
        key: "sshPort",
        envKey: "MODERNE_AGENT_AZUREDEVOPS_${i}_SSH_PORT",
        required: false,
        type: "text",
        defaultValue: "22",
        description:
          "The port used to communicate via SSH with Azure DevOps. <strong>This is required if the private key is specified.</strong>",
      },
    ],
  },
  bitbucket: {
    label: "Bitbucket",
    fields: [
      {
        label: "Client ID",
        key: "clientId",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_OAUTH_CLIENTID",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The client id configured in Bitbucket.",
      },
      {
        label: "Client Secret",
        key: "clientSecret",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_OAUTH_CLIENTSECRET",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The client secret configured in Bitbucket.",
      },
      {
        label: "URL",
        key: "url",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_URL",
        required: true,
        type: "text",
        defaultValue: "",
        description:
          "The fully-qualified URL of the running Bitbucket instance. For example: <em>https://bitbucket.myorg.com</em>.",
      },
      {
        label: "Alternate URLs",
        key: "alternateUrls",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_ALTERNATEURLS_${i}",
        required: false,
        type: "array",
        defaultValue: "",
        description:
          "The list of alternative fully-qualified URL of the running Bitbucket instance. For example: https://bitbucket.myorg.com.",
      },
      {
        label: "Skip SSL Verification",
        key: "skipSSL",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SKIPSSL",
        required: false,
        type: "boolean",
        defaultValue: "false",
        description:
          "Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.",
      },
      {
        label: "SSH Private Key",
        key: "sshPrivateKey",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SSH_PRIVATEKEY",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The SSH private key used to establish a SSH connection with Bitbucket.",
      },
      {
        label: "SSH Passphrase",
        key: "sshPassphrase",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SSH_PASSPHRASE",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>",
      },
      {
        label: "SSH Filename",
        key: "sshFilename",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SSH_FILENAME",
        required: false,
        type: "text",
        defaultValue: "id_rsa",
        description:
          "The filename to use for the SSH key when it's written to disk. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Host",
        key: "sshHost",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SSH_HOST",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The host to use for SSH connections. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Port",
        key: "sshPort",
        envKey: "MODERNE_AGENT_BITBUCKET_${i}_SSH_PORT",
        required: false,
        type: "text",
        defaultValue: "7999",
        description:
          "The port used to communicate via SSH with Bitbucket. <strong>This is required if the private key is specified.</strong>",
      },
    ],
  },
  github: {
    label: "GitHub",
    fields: [
      {
        label: "Client ID",
        key: "clientId",
        envKey: "MODERNE_AGENT_GITHUB_${i}_CLIENT_ID",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The client id configured in GitHub.",
      },
      {
        label: "Client Secret",
        key: "clientSecret",
        envKey: "MODERNE_AGENT_GITHUB_${i}_CLIENT_SECRET",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The client secret configured in GitHub.",
      },
      {
        label: "URL",
        key: "url",
        envKey: "MODERNE_AGENT_GITHUB_${i}_URL",
        required: true,
        type: "text",
        defaultValue: "",
        description:
          "The fully-qualified hostname of the running GitHub instance.",
      },
      {
        label: "Skip SSL Verification",
        key: "skipSSL",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SKIPSSL",
        required: false,
        type: "boolean",
        defaultValue: "false",
        description:
          "Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.",
      },
      {
        label: "Allowable Organizations",
        key: "allowableOrganizations",
        envKey: "MODERNE_AGENT_GITHUB_${i}_ALLOWABLE_ORGANIZATIONS_${i}",
        required: false,
        type: "array",
        defaultValue: "",
        description:
          "Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to.",
      },
      {
        label: "Include Private Repositories",
        key: "includePrivateRepos",
        envKey: "MODERNE_AGENT_GITHUB_${i}_OAUTH_INCLUDEPRIVATEREPOS",
        required: false,
        type: "boolean",
        defaultValue: "false",
        description:
          "Allows access to private repositories. If this is set to true, you will need to add specific permissions to your OAuth app, see <a href='https://docs.moderne.io/administrator-documentation/moderne-platform/references/github-permissions'>GitHub permissions</a>.",
      },
      {
        label: "SSH Private Key",
        key: "sshPrivateKey",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SSH_PRIVATEKEY",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The SSH private key used to establish a SSH connection with GitHub.",
      },
      {
        label: "SSH Passphrase",
        key: "sshPassphrase",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SSH_PASSPHRASE",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>",
      },
      {
        label: "SSH Filename",
        key: "sshFilename",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SSH_FILENAME",
        required: false,
        type: "text",
        defaultValue: "id_rsa",
        description:
          "The filename to use for the SSH key when it's written to disk. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Host",
        key: "sshHost",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SSH_HOST",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The host to use for SSH connections. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Port",
        key: "sshPort",
        envKey: "MODERNE_AGENT_GITHUB_${i}_SSH_PORT",
        required: false,
        type: "text",
        defaultValue: "22",
        description:
          "The port used to communicate via SSH with GitHub. <strong>This is required if the private key is specified.</strong>",
      },
    ],
  },
  gitlab: {
    label: "GitLab",
    fields: [
      {
        label: "Client ID",
        key: "clientId",
        envKey: "MODERNE_AGENT_GITLAB_${i}_OAUTH_CLIENTID",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The application id configured in GitLab.",
      },
      {
        label: "Client Secret",
        key: "clientSecret",
        envKey: "MODERNE_AGENT_GITLAB_${i}_OAUTH_CLIENTSECRET",
        required: true,
        type: "text",
        defaultValue: "",
        description: "The client secret configured in GitLab.",
      },
      {
        label: "URL",
        key: "url",
        envKey: "MODERNE_AGENT_GITLAB_${i}_URL",
        required: true,
        type: "text",
        defaultValue: "",
        description:
          "The fully-qualified hostname of the running GitLab instance.",
      },
      {
        label: "Skip SSL Verification",
        key: "skipSSL",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SKIPSSL",
        required: false,
        type: "boolean",
        defaultValue: "false",
        description:
          "Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.",
      },
      {
        label: "SSH Private Key",
        key: "sshPrivateKey",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SSH_PRIVATEKEY",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The SSH private key used to establish a SSH connection with GitLab.",
      },
      {
        label: "SSH Passphrase",
        key: "sshPassphrase",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SSH_PASSPHRASE",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The passphrase used to encrypt the SSH private key. <strong>This is required if the private key is specified and encrypted.</strong>",
      },
      {
        label: "SSH Filename",
        key: "sshFilename",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SSH_FILENAME",
        required: false,
        type: "text",
        defaultValue: "id_rsa",
        description:
          "The filename to use for the SSH key when it's written to disk. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Host",
        key: "sshHost",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SSH_HOST",
        required: false,
        type: "text",
        defaultValue: "",
        description:
          "The host to use for SSH connections. <strong>This is required if the private key is specified.</strong>",
      },
      {
        label: "SSH Port",
        key: "sshPort",
        envKey: "MODERNE_AGENT_GITLAB_${i}_SSH_PORT",
        required: false,
        type: "text",
        defaultValue: "7999",
        description:
          "The port used to communicate via SSH with GitLab. <strong>This is required if the private key is specified.</strong>",
      },
    ],
  },
};

export { scmProviderDefinitions };
export default scmProviderDefinitions;
