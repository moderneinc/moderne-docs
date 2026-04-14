---
sidebar_label: All Connector variables
description: A reference manual that contains all Connector configuration variables.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/agent-variables" />

# All Connector configuration variables

:::info
As of SaaS v2, Connector configuration uses new canonical property names documented below. The legacy `moderne.agent.*` property names (and their `MODERNE_AGENT_*` environment variable equivalents) are still accepted and automatically mapped to their canonical equivalents at startup. New deployments should use the canonical names shown here.
:::

This document includes all of the variables you can configure the Moderne Connector to run with. Your configuration will only use some of these.

## Core variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                      | Required | Default                | Description                                                                                                                                                    |
|----------------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI`           | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                               |
| `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`            | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                     |
| `MODERNE_CONNECTOR_NICKNAME`                       | `true`   |                        | A name used to identify your Connector in the SaaS Connector dashboard UI.                                                                                     |
| `MODERNE_CONNECTOR_TOKEN`                          | `true`   |                        | The Moderne SaaS Connector connection token, provided by Moderne.                                                                                              |
| `MODERNE_SCM_DEFAULTCOMMITOPTIONS_{index}`         | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`.             |
| `MODERNE_AUTHORIZATION_ACCESSTOKENS_MAXEXPIRYDAYS` | `false`  |                        | The maximum number of days a personal access token can be configured to expire in. When set, users cannot create tokens with an expiry date beyond this limit. |

**Example:**

```bash
docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN=yourToken \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                        | Required | Default                | Description                                                                                                                                                    |
|------------------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.connector.apiGatewayRsocketUri`           | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                               |
| `--moderne.connector.crypto.symmetricKey`            | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                     |
| `--moderne.connector.nickname`                       | `true`   |                        | A name used to identify your Connector in the SaaS Connector dashboard UI.                                                                                     |
| `--moderne.connector.token`                          | `true`   |                        | The Moderne SaaS Connector connection token, provided by Moderne.                                                                                              |
| `--moderne.scm.defaultCommitOptions[{index}]`        | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`.             |
| `--moderne.authorization.accessTokens.maxExpiryDays` | `false`  |                        | The maximum number of days a personal access token can be configured to expire in. When set, users cannot create tokens with an expiry date beyond this limit. |

**Example:**

```bash
java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.crypto.symmetricKey=yourSymmetricKey \
--moderne.connector.nickname=prod-1 \
--moderne.connector.token=yourToken \
--moderne.scm.defaultCommitOptions[0]=PullRequest \
--moderne.scm.defaultCommitOptions[1]=ForkAndPullRequest \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Azure variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                        | Required                                         | Default | Description                                                                                                                                                                  |
|------------------------------------------------------|--------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_SCM_AZUREDEVOPS_{index}_OAUTH_CLIENTID`     | `true`                                           |         | The client ID of the registered OAuth app.                                                                                                                                   |
| `MODERNE_SCM_AZUREDEVOPS_{index}_OAUTH_CLIENTSECRET` | `true`                                           |         | The client secret of the registered OAuth app.                                                                                                                               |
| `MODERNE_SCM_AZUREDEVOPS_{index}_OAUTH_TENANTID`     | `true`                                           |         | The Azure tenant ID of the registered OAuth app.                                                                                                                             |
| `MODERNE_SCM_AZUREDEVOPS_{index}_SKIPSSL`            | `false`                                          | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_SCM_AZUREDEVOPS_{index}_SSH_PRIVATEKEY`     | `false`                                          |         | The SSH private key used to establish a SSH connection with Azure DevOps.                                                                                                    |
| `MODERNE_SCM_AZUREDEVOPS_{index}_SSH_PASSPHRASE`     | `true` (If the SSH key is specified + encrypted) |         | The passphrase used to encrypt the SSH private key                                                                                                                           |
| `MODERNE_SCM_AZUREDEVOPS_{index}_SSH_SSHFILENAME`    | `true` (If the SSH key is specified)             |         | The file name of the private key, which the Connector will store locally.                                                                                                    |
| `MODERNE_SCM_AZUREDEVOPS_{index}_SSH_USER`           | `true` (If the SSH key is specified)             |         | The username used for SSH communication with Azure DevOps.                                                                                                                   |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_CLIENTID=4affd674-286d-423f-b643-7ffe4dec0f53 \
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_TENANTID=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                           | Required                                         | Default | Description                                                                                                                                                                  |
|---------------------------------------------------------|--------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.scm.azureDevops[{index}].oauth.clientId`     | `true`                                           |         | The client ID of the registered OAuth app.                                                                                                                                   |
| `--moderne.scm.azureDevops[{index}].oauth.clientSecret` | `true`                                           |         | The client secret of the registered OAuth app.                                                                                                                               |
| `--moderne.scm.azureDevops[{index}].oauth.tenantId`     | `true`                                           |         | The Azure tenant ID of the registered OAuth app.                                                                                                                             |
| `--moderne.scm.azureDevops[{index}].skipSsl`            | `false`                                          | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.scm.azureDevops[{index}].ssh.privateKey`     | `false`                                          |         | The SSH private key used to establish a SSH connection with Azure DevOps.                                                                                                    |
| `--moderne.scm.azureDevops[{index}].ssh.passphrase`     | `true` (If the SSH key is specified + encrypted) |         | The passphrase used to encrypt the SSH private key                                                                                                                           |
| `--moderne.scm.azureDevops[{index}].ssh.sshFileName`    | `true` (If the SSH key is specified)             |         | The file name of the private key, which the Connector will store locally.                                                                                                    |
| `--moderne.scm.azureDevops[{index}].ssh.user`           | `true` (If the SSH key is specified)             |         | The username used for SSH communication with Azure DevOps.                                                                                                                   |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.azureDevops[0].oauth.clientId=4affd674-286d-423f-b643-7ffe4dec0f53 \
--moderne.scm.azureDevops[0].oauth.clientSecret=yourClientSecret \
--moderne.scm.azureDevops[0].oauth.tenantId=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Bitbucket Cloud variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                             | Required | Default | Description                                            |
|-------------------------------------------|----------|---------|--------------------------------------------------------|
| `MODERNE_SCM_BITBUCKETCLOUD_OAUTH_KEY`    | `true`   |         | The key specified in your Bitbucket OAuth consumer.    |
| `MODERNE_SCM_BITBUCKETCLOUD_OAUTH_SECRET` | `true`   |         | The secret specified in your Bitbucket OAuth consumer. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_BITBUCKETCLOUD_OAUTH_KEY=yourOAuthKey \
-e MODERNE_SCM_BITBUCKETCLOUD_OAUTH_SECRET=yourSecretKey \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                              | Required | Default | Description                                            |
|--------------------------------------------|----------|---------|--------------------------------------------------------|
| `--moderne.scm.bitbucketCloud.oauthKey`    | `true`   |         | The key specified in your Bitbucket OAuth consumer.    |
| `--moderne.scm.bitbucketCloud.oauthSecret` | `true`   |         | The secret specified in your Bitbucket OAuth consumer. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.bitbucketCloud.oauthKey=yourOAuthKey \
--moderne.scm.bitbucketCloud.oauthSecret=yourSecretKey \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Bitbucket Data Center variables

:::info
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
:::

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                   | Required                                     | Default | Description                                                                                                                                                               |
|-----------------------------------------------------------------|----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_URI`                   | `true`                                       |         | The fully-qualified URI of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                                    |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_PRIVATEKEY`            | `conditional`                                |         | (OAuth1.0a only) The private key you configured for this Bitbucket instance.                                                                                              |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_OAUTH_KEY`             | `conditional`                                |         | (OAuth2 only) The client id for the Application Link that you configured for this Bitbucket instance.                                                                     |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_OAUTH_SECRET`          | `conditional`                                |         | (OAuth2 only) The client secret for the Application Link that you configured for this Bitbucket instance.                                                                 |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_ALTERNATEURIS_{index}` | `false`                                      |         | The list of alternative fully-qualified URIs of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                               |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SKIPSSL`               | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SSH_PRIVATEKEY`        | `false`                                      |         | The SSH private key used to establish a SSH connection with Bitbucket.                                                                                                    |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SSH_PASSPHRASE`        | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                       |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SSH_SSHFILENAME`       | `true` (If the SSH private key is specified) |         | The file name of the private key, which the Connector will store locally.                                                                                                 |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SSH_USER`              | `true` (If the SSH private key is specified) |         | The username used for SSH communication with Bitbucket.                                                                                                                   |
| `MODERNE_SCM_BITBUCKETDATACENTER_{index}_SSH_PORT`              | `true` (If the SSH private key is specified) | `7999`  | The port used to communicate via SSH with Bitbucket.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_BITBUCKETDATACENTER_0_OAUTH_KEY=yourClientId \
-e MODERNE_SCM_BITBUCKETDATACENTER_0_OAUTH_SECRET=yourClientSecret \
-e MODERNE_SCM_BITBUCKETDATACENTER_0_URI=https://bitbucket.myorg.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                       | Required                                     | Default | Description                                                                                                                                                               |
|---------------------------------------------------------------------|----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.scm.bitbucketDatacenter[{index}].uri`                    | `true`                                       |         | The fully-qualified URI of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                                    |
| `--moderne.scm.bitbucketDatacenter[{index}].privateKey`             | `conditional`                                |         | (OAuth1.0a only) The private key you configured for this Bitbucket instance.                                                                                              |
| `--moderne.scm.bitbucketDatacenter[{index}].oauth.key`              | `conditional`                                |         | (OAuth2 only) The client id for the Application Link that you configured for this Bitbucket instance.                                                                     |
| `--moderne.scm.bitbucketDatacenter[{index}].oauth.secret`           | `conditional`                                |         | (OAuth2 only) The client secret for the Application Link that you configured for this Bitbucket instance.                                                                 |
| `--moderne.scm.bitbucketDatacenter[{index}].alternateUris[{index}]` | `false`                                      |         | The list of alternative fully-qualified URIs of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                               |
| `--moderne.scm.bitbucketDatacenter[{index}].skipSsl`                | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.scm.bitbucketDatacenter[{index}].ssh.privateKey`         | `false`                                      |         | The SSH private key used to establish a SSH connection with Bitbucket.                                                                                                    |
| `--moderne.scm.bitbucketDatacenter[{index}].ssh.passphrase`         | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                       |
| `--moderne.scm.bitbucketDatacenter[{index}].ssh.sshFileName`        | `true` (If the SSH private key is specified) |         | The file name of the private key, which the Connector will store locally.                                                                                                 |
| `--moderne.scm.bitbucketDatacenter[{index}].ssh.user`               | `true` (If the SSH private key is specified) |         | The username used for SSH communication with Bitbucket.                                                                                                                   |
| `--moderne.scm.bitbucketDatacenter[{index}].ssh.port`               | `true` (If the SSH private key is specified) | `7999`  | The port used to communicate via SSH with Bitbucket.                                                                                                                      |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.bitbucketDatacenter[0].oauth.key=yourClientId \
--moderne.scm.bitbucketDatacenter[0].oauth.secret=yourClientSecret \
--moderne.scm.bitbucketDatacenter[0].uri=https://bitbucket.myorg.com \
# ... Additional arguments
```
</TabItem>
</Tabs>

## GitHub variables

:::info
You can configure multiple GitHub OAuth apps by including multiple entries, each with a different `{index}`.
:::

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                | Required                                     | Default         | Description                                                                                                                                                                                                                      |
|--------------------------------------------------------------|----------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_SCM_GITHUB_{index}_OAUTH_CLIENTID`                  | `true`                                       |                 | The client id configured in GitHub.                                                                                                                                                                                              |
| `MODERNE_SCM_GITHUB_{index}_OAUTH_CLIENTSECRET`              | `true`                                       |                 | The client secret configured in GitHub.                                                                                                                                                                                          |
| `MODERNE_SCM_GITHUB_{index}_URI`                             | `true`                                       |                 | The fully-qualified hostname of the running GitHub instance.                                                                                                                                                                     |
| `MODERNE_SCM_GITHUB_{index}_ALTERNATEURIS_{index}`           | `false`                                      |                 | The list of alternative fully-qualified URIs of the running GitHub instance.                                                                                                                                                     |
| `MODERNE_SCM_GITHUB_{index}_SKIPSSL`                         | `false`                                      | `false`         | Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                           |
| `MODERNE_SCM_GITHUB_{index}_ALLOWABLE_ORGANIZATIONS_{index}` | `false`                                      | See description | Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line. |
| `MODERNE_SCM_GITHUB_{index}_OAUTH_INCLUDEPRIVATEREPOS`       | `false`                                      | See description | By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`.                                         |
| `MODERNE_SCM_GITHUB_{index}_SSH_PRIVATEKEY`                  | `false`                                      |                 | (Optional) The SSH private key used to establish a SSH connection with GitHub.                                                                                                                                                   |
| `MODERNE_SCM_GITHUB_{index}_SSH_PASSPHRASE`                  | `true` (If the SSH private key is specified) |                 | The passphrase used to encrypt the SSH private key.                                                                                                                                                                              |
| `MODERNE_SCM_GITHUB_{index}_SSH_SSHFILENAME`                 | `true` (If the SSH private key is specified) |                 | The file name of the private key, which the Connector will store locally.                                                                                                                                                        |
| `MODERNE_SCM_GITHUB_{index}_SSH_USER`                        | `true` (If the SSH private key is specified) |                 | The username used for SSH communication with GitHub.                                                                                                                                                                             |
| `MODERNE_SCM_GITHUB_{index}_SSH_PORT`                        | `false`                                      | `7999`          | The port used to communicate via SSH with GitHub.                                                                                                                                                                                |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                   | Required                                     | Default         | Description                                                                                                                                                                                                                      |
|-----------------------------------------------------------------|----------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.scm.github[{index}].oauth.clientId`                  | `true`                                       |                 | The client id configured in GitHub.                                                                                                                                                                                              |
| `--moderne.scm.github[{index}].oauth.clientSecret`              | `true`                                       |                 | The client secret configured in GitHub.                                                                                                                                                                                          |
| `--moderne.scm.github[{index}].uri`                             | `true`                                       |                 | The fully-qualified hostname of the running GitHub instance.                                                                                                                                                                     |
| `--moderne.scm.github[{index}].alternateUris[{index}]`          | `false`                                      |                 | The list of alternative fully-qualified URIs of the running GitHub instance.                                                                                                                                                     |
| `--moderne.scm.github[{index}].skipSsl`                         | `false`                                      | `false`         | Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                           |
| `--moderne.scm.github[{index}].allowableOrganizations[{index}]` | `false`                                      | See description | Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line. |
| `--moderne.scm.github[{index}].oauth.includePrivateRepos`       | `false`                                      | See description | By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`.                                         |
| `--moderne.scm.github[{index}].ssh.privateKey`                  | `false`                                      |                 | (Optional) The SSH private key used to establish a SSH connection with GitHub.                                                                                                                                                   |
| `--moderne.scm.github[{index}].ssh.passphrase`                  | `true` (If the SSH private key is specified) |                 | The passphrase used to encrypt the SSH private key.                                                                                                                                                                              |
| `--moderne.scm.github[{index}].ssh.sshFileName`                 | `true` (If the SSH private key is specified) |                 | The file name of the private key, which the Connector will store locally.                                                                                                                                                        |
| `--moderne.scm.github[{index}].ssh.user`                        | `true` (If the SSH private key is specified) |                 | The username used for SSH communication with GitHub.                                                                                                                                                                             |
| `--moderne.scm.github[{index}].ssh.port`                        | `false`                                      | `7999`          | The port used to communicate via SSH with GitHub.                                                                                                                                                                                |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.github[0].oauth.clientId=yourClientId \
--moderne.scm.github[0].oauth.clientSecret=yourClientSecret \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments
```
</TabItem>
</Tabs>

## GitLab variables

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                      | Required                                     | Default | Description                                                                                                                                                            |
|----------------------------------------------------|----------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_SCM_GITLAB_{index}_OAUTH_CLIENTID`        | `true`                                       |         | The application id configured in GitLab.                                                                                                                               |
| `MODERNE_SCM_GITLAB_{index}_OAUTH_CLIENTSECRET`    | `true`                                       |         | The secret configured in GitLab.                                                                                                                                       |
| `MODERNE_SCM_GITLAB_{index}_URI`                   | `true`                                       |         | The fully-qualified hostname of your GitLab instance.                                                                                                                  |
| `MODERNE_SCM_GITLAB_{index}_ALTERNATEURIS_{index}` | `false`                                      |         | The list of alternative fully-qualified URIs of the running GitLab instance.                                                                                           |
| `MODERNE_SCM_GITLAB_{index}_SKIPSSL`               | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_SCM_GITLAB_{index}_SSH_PRIVATEKEY`        | `false`                                      |         | The SSH private key used to establish a SSH connection with GitLab.                                                                                                    |
| `MODERNE_SCM_GITLAB_{index}_SSH_PASSPHRASE`        | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                    |
| `MODERNE_SCM_GITLAB_{index}_SSH_SSHFILENAME`       | `true` (If the SSH private key is specified) |         | The file name of the private key, which the Connector will store locally.                                                                                              |
| `MODERNE_SCM_GITLAB_{index}_SSH_USER`              | `true` (If the SSH private key is specified) |         | The username used for SSH communication with GitLab.                                                                                                                   |
| `MODERNE_SCM_GITLAB_{index}_SSH_PORT`              | `false`                                      | `7999`  | The port used to communicate via SSH with GitLab.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_GITLAB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_SCM_GITLAB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_GITLAB_0_URI=https://your-gitlab.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                          | Required                                     | Default | Description                                                                                                                                                            |
|--------------------------------------------------------|----------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.scm.gitlab[{index}].oauth.clientId`         | `true`                                       |         | The application id configured in GitLab.                                                                                                                               |
| `--moderne.scm.gitlab[{index}].oauth.clientSecret`     | `true`                                       |         | The secret configured in GitLab.                                                                                                                                       |
| `--moderne.scm.gitlab[{index}].uri`                    | `true`                                       |         | The fully-qualified hostname of your GitLab instance.                                                                                                                  |
| `--moderne.scm.gitlab[{index}].alternateUris[{index}]` | `false`                                      |         | The list of alternative fully-qualified URIs of the running GitLab instance.                                                                                           |
| `--moderne.scm.gitlab[{index}].skipSsl`                | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.scm.gitlab[{index}].ssh.privateKey`         | `false`                                      |         | The SSH private key used to establish a SSH connection with GitLab.                                                                                                    |
| `--moderne.scm.gitlab[{index}].ssh.passphrase`         | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                    |
| `--moderne.scm.gitlab[{index}].ssh.sshFileName`        | `true` (If the SSH private key is specified) |         | The file name of the private key, which the Connector will store locally.                                                                                              |
| `--moderne.scm.gitlab[{index}].ssh.user`               | `true` (If the SSH private key is specified) |         | The username used for SSH communication with GitLab.                                                                                                                   |
| `--moderne.scm.gitlab[{index}].ssh.port`               | `false`                                      | `7999`  | The port used to communicate via SSH with GitLab.                                                                                                                      |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.gitlab[0].oauth.clientId=yourClientId \
--moderne.scm.gitlab[0].oauth.clientSecret=yourClientSecret \
--moderne.scm.gitlab[0].uri=https://your-gitlab.com \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Organization hierarchy variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Environment Variable                              | Required | Default | Description                                                                                                                                                                        |
|---------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_0_REPOSCSV` | `false`  |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_SOURCES_0_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                         | Required | Default | Description                                                                                                                                                                        |
|-------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.sources[0].repos-csv` | `false`  |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.sources[0].repos-csv=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Maven repository variables

You can configure multiple Maven repositories by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                     | Required | Default                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------------------------------------------------------|----------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_URI`             | `true`   |                                 | The URI of your Maven repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_LOCALREPOSITORY` | `false`  | `~/.moderne-maven/maven{index}` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the Connector is being run and **not** on the Maven instance. Only used when `ASTSOURCE` is `true`. If not specified, a unique path is automatically generated based on the configuration index. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_USERNAME`        | `false`  | `null`                          | The username used to resolve artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_PASSWORD`        | `false`  | `null`                          | The password used to resolve artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RELEASES`        | `false`  | `true`                          | Specifies whether or not this repository should be searched for releases.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SNAPSHOTS`       | `false`  | `true`                          | Specifies whether or not this repository should be searched for snapshots.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_ASTSOURCE`       | `false`  | `true`                          | Specifies whether or not this repository should be searched for LST artifacts (Note: LSTs used to be called ASTs).                                                                                                                                                                                                                                                                                                                                                                      |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RECIPESOURCE`    | `false`  | `true`                          | Specifies whether or not this repository should be searched for recipe jars.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SKIPSSL`         | `false`  | `false`                         | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                                                                                                                                                                                                                                                                             |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_CONNECTTIMEOUT`  | `false`  | `30s`                           | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                                                                                                                                                                                                                                                                |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_READTIMEOUT`     | `false`  | `60s`                           | Timeout for reading the response body from the Maven repository. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                                                                                                                                                                                                                                                           |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                        | Required | Default                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|----------------------------------------------------------------------|----------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.poll.maven[{index}].uri`             | `true`   |                                 | The URI of your Maven repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--moderne.organization.indexer.poll.maven[{index}].localRepository` | `false`  | `~/.moderne-maven/maven{index}` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the Connector is being run and **not** on the Maven instance. Only used when `astSource` is `true`. If not specified, a unique path is automatically generated based on the configuration index. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. |
| `--moderne.organization.indexer.poll.maven[{index}].username`        | `false`  | `null`                          | The username used to resolve artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--moderne.organization.indexer.poll.maven[{index}].password`        | `false`  | `null`                          | The password used to resolve artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--moderne.organization.indexer.poll.maven[{index}].releases`        | `false`  | `true`                          | Specifies whether or not this repository should be searched for releases.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--moderne.organization.indexer.poll.maven[{index}].snapshots`       | `false`  | `true`                          | Specifies whether or not this repository should be searched for snapshots.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--moderne.organization.indexer.poll.maven[{index}].astSource`       | `false`  | `true`                          | Specifies whether or not this repository should be searched for LST artifacts (Note: LSTs used to be called ASTs).                                                                                                                                                                                                                                                                                                                                                                      |
| `--moderne.organization.indexer.poll.maven[{index}].recipeSource`    | `false`  | `true`                          | Specifies whether or not this repository should be searched for recipe jars.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--moderne.organization.indexer.poll.maven[{index}].skipSsl`         | `false`  | `false`                         | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                                                                                                                                                                                                                                                                             |
| `--moderne.organization.indexer.poll.maven[{index}].connectTimeout`  | `false`  | `30s`                           | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                                                                                                                                                                                                                                                                |
| `--moderne.organization.indexer.poll.maven[{index}].readTimeout`     | `false`  | `60s`                           | Timeout for reading the response body from the Maven repository. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                                                                                                                                                                                                                                                           |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.organization.indexer.poll.maven[0].username=admin \
--moderne.organization.indexer.poll.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory repository variables

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                                   | Required | Default | Description                                                                                                                                                                                      |
|---------------------------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_URI`                     | `true`   |         | The URI of your Artifactory instance.                                                                                                                                                            |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_USERNAME`                | `true`   |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                                                                    |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_PASSWORD`                | `true`   |         | The password used to connect to your Artifactory instance.                                                                                                                                       |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_LSTQUERYFILTERS_{index}` | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                     |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the Connector to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_CONNECTTIMEOUT`          | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                         |
| `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_{index}_READTIMEOUT`             | `false`  | `60s`   | Timeout for reading the response body from the Artifactory instance. Specified as a duration (e.g., `60s`, `5m`).                                                                                |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                                       | Required | Default | Description                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.poll.artifactory[{index}].uri`                      | `true`   |         | The URI of your Artifactory instance.                                                                                                                                                            |
| `--moderne.organization.indexer.poll.artifactory[{index}].username`                 | `true`   |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                                                                    |
| `--moderne.organization.indexer.poll.artifactory[{index}].password`                 | `true`   |         | The password used to connect to your Artifactory instance.                                                                                                                                       |
| `--moderne.organization.indexer.poll.artifactory[{index}].lstQueryFilters[{index}]` | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                     |
| `--moderne.organization.indexer.poll.artifactory[{index}].skipSsl`                  | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the Connector to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.organization.indexer.poll.artifactory[{index}].connectTimeout`           | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                         |
| `--moderne.organization.indexer.poll.artifactory[{index}].readTimeout`              | `false`  | `60s`   | Timeout for reading the response body from the Artifactory instance. Specified as a duration (e.g., `60s`, `5m`).                                                                                |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.indexer.poll.artifactory[0].username=admin \
--moderne.organization.indexer.poll.artifactory[0].password=password \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory recipe variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                  | Required | Default | Description                                                                                                                                                                 |
|----------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_URI`          | `true`   |         | The URI of your Maven repository.                                                                                                                                           |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_ASTSOURCE`    | `true`   | `true`  | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                        |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_USERNAME`     | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_PASSWORD`     | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RELEASES`     | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SNAPSHOTS`    | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RECIPESOURCE` | `false`  | `true`  | Specifies whether or not this repository should be searched for recipe jars.                                                                                                |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SKIPSSL`      | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../creating-a-devcenter-recipe.md), you will need to ensure that you have exactly one Maven repository configured with `RECIPESOURCE` set to `true`. (It is fine to have this same Maven repository configured in multiple Connectors.)
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_ASTSOURCE=false \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                     | Required | Default | Description                                                                                                                                                                 |
|-------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.poll.maven[{index}].uri`          | `true`   |         | The URI of your Maven repository.                                                                                                                                           |
| `--moderne.organization.indexer.poll.maven[{index}].astSource`    | `true`   | `true`  | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                        |
| `--moderne.organization.indexer.poll.maven[{index}].username`     | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `--moderne.organization.indexer.poll.maven[{index}].password`     | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `--moderne.organization.indexer.poll.maven[{index}].releases`     | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `--moderne.organization.indexer.poll.maven[{index}].snapshots`    | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |
| `--moderne.organization.indexer.poll.maven[{index}].recipeSource` | `false`  | `true`  | Specifies whether or not this repository should be searched for recipe jars.                                                                                                |
| `--moderne.organization.indexer.poll.maven[{index}].skipSsl`      | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../creating-a-devcenter-recipe.md), you will need to ensure that you have exactly one Maven repository configured with `recipeSource` set to `true`. (It is fine to have this same Maven repository configured in multiple Connectors.)
:::

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.organization.indexer.poll.maven[0].astSource=false \
--moderne.organization.indexer.poll.maven[0].username=admin \
--moderne.organization.indexer.poll.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## S3 bucket variables

You can configure multiple S3 buckets by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                 | Required                                                 | Default | Description                                                                                                                |
|---------------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_URI`         | `true`                                                   |         | The S3 bucket URI. Must start with `s3://` (e.g., `s3://my-bucket-name`).                                                  |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_ENDPOINTURL` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3. |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_REGION`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`).                                                            |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_ACCESSKEY`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                  |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_SECRETKEY`   | `false` (Required if using access key)                   |         | The AWS secret key for authentication.                                                                                     |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_PROFILE`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                           |
| `MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_{index}_SKIPSSL`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                             |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_0_URI=s3://my-lst-bucket \
-e MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_0_REGION=us-east-1 \
-e MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_0_ACCESSKEY=AKIAIOSFODNN7EXAMPLE \
-e MODERNE_ORGANIZATION_INDEXER_SOURCES_S3_0_SECRETKEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                    | Required                                                 | Default | Description                                                                                                                |
|------------------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.sources.s3[{index}].uri`         | `true`                                                   |         | The S3 bucket URI. Must start with `s3://` (e.g., `s3://my-bucket-name`).                                                  |
| `--moderne.organization.indexer.sources.s3[{index}].endpointUrl` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3. |
| `--moderne.organization.indexer.sources.s3[{index}].region`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`).                                                            |
| `--moderne.organization.indexer.sources.s3[{index}].accessKey`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                  |
| `--moderne.organization.indexer.sources.s3[{index}].secretKey`   | `false` (Required if using access key)                   |         | The AWS secret key for authentication.                                                                                     |
| `--moderne.organization.indexer.sources.s3[{index}].profile`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                           |
| `--moderne.organization.indexer.sources.s3[{index}].skipSsl`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                             |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.sources.s3[0].uri=s3://my-lst-bucket \
--moderne.organization.indexer.sources.s3[0].region=us-east-1 \
--moderne.organization.indexer.sources.s3[0].accessKey=AKIAIOSFODNN7EXAMPLE \
--moderne.organization.indexer.sources.s3[0].secretKey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Recipe POM cache variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                       | Required                                  | Default | Description                                                                                       |
|-----------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_TYPE`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                   | 60      | How long entries should live in the POM cache.                                                    |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                            |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                   | 0       | The Redis DB index.                                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_RECIPE_POMCACHE_TYPE=REDIS \
-e MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_HOST=localhost \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                         | Required                                  | Default | Description                                                                                       |
|-------------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `--moderne.connector.recipe.pomCache.type`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `--moderne.connector.recipe.pomCache.entryTtlMinutes` | `false`                                   | 60      | How long entries should live in the POM cache.                                                    |
| `--moderne.connector.recipe.pomCache.redis.host`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `--moderne.connector.recipe.pomCache.redis.port`      | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                            |
| `--moderne.connector.recipe.pomCache.redis.username`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `--moderne.connector.recipe.pomCache.redis.password`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `--moderne.connector.recipe.pomCache.redis.ssl`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `--moderne.connector.recipe.pomCache.redis.database`  | `false`                                   | 0       | The Redis DB index.                                                                               |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.recipe.pomCache.type=REDIS \
--moderne.connector.recipe.pomCache.redis.host=localhost \
# ... Additional arguments
```
</TabItem>
</Tabs>

## PyPI variables

:::info
You can configure multiple PyPI package indexes by including multiple entries, each with a different `{index}`.
:::

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                         | Required | Default | Description                                                                                                                                                                   |
|-----------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_URI`            | `true`   |         | The URI of your PyPI package index.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_USERNAME`       | `false`  | `null`  | The username used to access the index.                                                                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PASSWORD`       | `false`  | `null`  | The password used to access the index.                                                                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_SKIPSSL`        | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_CONNECTTIMEOUT` | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                      |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_READTIMEOUT`    | `false`  | `60s`   | Timeout for reading the response body from the PyPI package index. Specified as a duration (e.g., `60s`, `5m`).                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_URI=https://pypi.example.com/simple \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                            | Required | Default | Description                                                                                                                                                                   |
|--------------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.pypi[{index}].uri`            | `true`   |         | The URI of your PyPI package index.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].username`       | `false`  | `null`  | The username used to access the index.                                                                                                                                        |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].password`       | `false`  | `null`  | The password used to access the index.                                                                                                                                        |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].skipSsl`        | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].connectTimeout` | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                      |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].readTimeout`    | `false`  | `60s`   | Timeout for reading the response body from the PyPI package index. Specified as a duration (e.g., `60s`, `5m`).                                                               |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.pypi[0].uri=https://pypi.example.com/simple \
--moderne.recipe.marketplace.repositories.pypi[0].username=admin \
--moderne.recipe.marketplace.repositories.pypi[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## HTTP proxy variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                             | Required | Default | Description                                 |
|-------------------------------------------|----------|---------|---------------------------------------------|
| `MODERNE_CONNECTOR_APIGATEWAY_PROXY_HOST` | `false`  |         | Host (without scheme) for the proxy server. |
| `MODERNE_CONNECTOR_APIGATEWAY_PROXY_PORT` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_APIGATEWAY_PROXY_HOST=proxy.mycompany.com \
-e MODERNE_CONNECTOR_APIGATEWAY_PROXY_PORT=8179 \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                               | Required | Default | Description                                 |
|---------------------------------------------|----------|---------|---------------------------------------------|
| `--moderne.connector.apiGateway.proxy.host` | `false`  |         | Host (without scheme) for the proxy server. |
| `--moderne.connector.apiGateway.proxy.port` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.apiGateway.proxy.host=proxy.mycompany.com \
--moderne.connector.apiGateway.proxy.port=8179 \
# ... Additional arguments
```

</TabItem>
</Tabs>

## UI customization variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                              | Required | Default | Description                                                                                                                                                                                                                |
|--------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_UI_MOREHELP_0_LABEL`              | `false`  | `null`  | Custom label for first link under the 'Need more help?' menu. If populated, the URI property must also be populated. Maximum of 3 help items supported.                                                                    |
| `MODERNE_UI_MOREHELP_0_URI`                | `false`  | `null`  | The URI for the first custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `MODERNE_UI_MOREHELP_1_LABEL`              | `false`  | `null`  | Custom label for second link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                      |
| `MODERNE_UI_MOREHELP_1_URI`                | `false`  | `null`  | The URI for the second custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                    |
| `MODERNE_UI_MOREHELP_2_LABEL`              | `false`  | `null`  | Custom label for third link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                       |
| `MODERNE_UI_MOREHELP_2_URI`                | `false`  | `null`  | The URI for the third custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_LABEL` | `false`  | `null`  | CLI download instructions label to show in the platform UI. Overrides the default display of the CLI tools menu presented in the Moderne platform's user interface. If populated, the URI property must also be populated. |
| `MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_URI`   | `false`  | `null`  | The URI of the instructions documentation. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_UI_MOREHELP_0_LABEL="Getting started" \
-e MODERNE_UI_MOREHELP_0_URI="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
-e MODERNE_UI_MOREHELP_1_LABEL="How to guides" \
-e MODERNE_UI_MOREHELP_1_URI="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
-e MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_LABEL="Download CLI Tools" \
-e MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_URI="https://docs.example.com/moderne-cli-setup" \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                | Required | Default | Description                                                                                                                                                                                                                |
|----------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.ui.moreHelp[0].label`             | `false`  | `null`  | Custom label for first link under the 'Need more help?' menu. If populated, the URI property must also be populated. Maximum of 3 help items supported.                                                                    |
| `--moderne.ui.moreHelp[0].uri`               | `false`  | `null`  | The URI for the first custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `--moderne.ui.moreHelp[1].label`             | `false`  | `null`  | Custom label for second link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                      |
| `--moderne.ui.moreHelp[1].uri`               | `false`  | `null`  | The URI for the second custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                    |
| `--moderne.ui.moreHelp[2].label`             | `false`  | `null`  | Custom label for third link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                       |
| `--moderne.ui.moreHelp[2].uri`               | `false`  | `null`  | The URI for the third custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `--moderne.ui.cliDownloadInstructions.label` | `false`  | `null`  | CLI download instructions label to show in the platform UI. Overrides the default display of the CLI tools menu presented in the Moderne platform's user interface. If populated, the URI property must also be populated. |
| `--moderne.ui.cliDownloadInstructions.uri`   | `false`  | `null`  | The URI of the instructions documentation. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                      |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.ui.moreHelp[0].label="Getting started" \
--moderne.ui.moreHelp[0].uri="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
--moderne.ui.moreHelp[1].label="How to guides" \
--moderne.ui.moreHelp[1].uri="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
--moderne.ui.cliDownloadInstructions.label="Download CLI Tools" \
--moderne.ui.cliDownloadInstructions.uri="https://docs.example.com/moderne-cli-setup" \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Generic HTTP tool variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                 | Required | Default | Description                                                                                                                                                                                                             |
|---------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_URI`                      | `true`   |         | Fully qualified URI to your HTTP tool.                                                                                                                                                                                  |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_USERNAME`                 | `false`  |         | Username used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_PASSWORD`                 | `false`  |         | Password used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_BEARERTOKEN`              | `false`  |         | Bearer token used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_SKIPSSL`                  | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                        |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_SKIPVALIDATECONNECTIVITY` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this HTTP tool, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                  |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_CONNECTTIMEOUT`           | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                |
| `MODERNE_CONNECTOR_HTTPTOOL_{index}_READTIMEOUT`              | `false`  | `60s`   | Timeout for reading the response body from the HTTP tool. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                  |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_HTTPTOOL_0_URI=https://launchdarkly.mycompany.com \
-e MODERNE_CONNECTOR_HTTPTOOL_0_USERNAME=myUser \
-e MODERNE_CONNECTOR_HTTPTOOL_0_PASSWORD=${SECRET_NAME} \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                    | Required | Default | Description                                                                                                                                                                                                             |
|------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.connector.httpTool[{index}].uri`                      | `true`   |         | Fully qualified URI to your HTTP tool.                                                                                                                                                                                  |
| `--moderne.connector.httpTool[{index}].username`                 | `false`  |         | Username used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `--moderne.connector.httpTool[{index}].password`                 | `false`  |         | Password used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `--moderne.connector.httpTool[{index}].bearerToken`              | `false`  |         | Bearer token used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `--moderne.connector.httpTool[{index}].skipSsl`                  | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                        |
| `--moderne.connector.httpTool[{index}].skipValidateConnectivity` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this HTTP tool, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                  |
| `--moderne.connector.httpTool[{index}].connectTimeout`           | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                |
| `--moderne.connector.httpTool[{index}].readTimeout`              | `false`  | `60s`   | Timeout for reading the response body from the HTTP tool. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                  |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.httpTool[0].uri=https://launchdarkly.mycompany.com \
--moderne.connector.httpTool[0].username=myUser \
--moderne.connector.httpTool[0].password=${SECRET_NAME} \
# ... Additional arguments
```
</TabItem>
</Tabs>

