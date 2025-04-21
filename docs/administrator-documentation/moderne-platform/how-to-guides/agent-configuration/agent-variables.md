---
sidebar_label: All agent variables
description: A reference manual that contains all agent configuration variables.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# All agent configuration variables

This document includes all of the variables you can configure the Moderne agent to run with. Your configuration will only use some of these.

## Core variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                | Required   | Default                | Description                                                                                                                                                                                                 |
|----------------------------------------------|------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_APIGATEWAYRSOCKETURI`         | `true`     |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                                                                            |
| `MODERNE_AGENT_CRYPTO_SYMMETRICKEY`          | `true`     |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                                                                  |
| `MODERNE_AGENT_NICKNAME`                     | `true`     |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                                                                          |
| `MODERNE_AGENT_TOKEN`                        | `true`     |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                                                                               |
| `MODERNE_AGENT_DOWNLOADPARALLELISM`          | `false`    | 2 threads              | How many threads are used to download LSTs.                                                                                                                                                                 |
| `MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS` | `false`    | 120 seconds            | How frequently LSTs will be indexed.                                                                                                                                                                        |
| `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}` | `false`    | All options available. | Use to restrict which commit options are available in Moderne (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                   | Required   | Default                | Description                                                                                                                                                                                                 |
|-------------------------------------------------|------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.apiGatewayRsocketUri`          | `true`     |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                                                                            |
| `--moderne.agent.crypto.symmetricKey`           | `true`     |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                                                                  |
| `--moderne.agent.nickname`                      | `true`     |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                                                                          |
| `--moderne.agent.token`                         | `true`     |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                                                                               |
| `--moderne.agent.downloadParallelism`           | `false`    | 2 threads              | How many threads are used to download LSTs.                                                                                                                                                                 |
| `--moderne.agent.artifactIndexIntervalSeconds`  | `false`    | 120 seconds            | How frequently LSTs will be indexed.                                                                                                                                                                        |
| `--moderne.agent.defaultCommitOptions[{index}]` | `false`    | All options available. | Use to restrict which commit options are available in Moderne (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.defaultCommitOptions[0]=PullRequest \
--moderne.agent.defaultCommitOptions[1]=ForkAndPullRequest \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Azure variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                          | Required                                         | Default | Description                                                                                                                                                                  |
|--------------------------------------------------------|--------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_CLIENTID`     | `true`                                           |         | The client ID of the registered OAuth app.                                                                                                                                   |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_CLIENTSECRET` | `true`                                           |         | The client secret of the registered OAuth app.                                                                                                                               |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_TENANTID`     | `true`                                           |         | The Azure tenant ID of the registered OAuth app.                                                                                                                             |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_SKIPSSL`            | `false`                                          | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_PRIVATEKEY`     | `false`                                          |         | The SSH private key used to establish a SSH connection with Azure DevOps.                                                                                                    |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_PASSPHRASE`     | `true` (If the SSH key is specified + encrypted) |         | The passphrase used to encrypt the SSH private key                                                                                                                           |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_SSHFILENAME`    | `true` (If the SSH key is specified)             |         | The file name of the private key, which the agent will store locally.                                                                                                        |
| `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_USER`           | `true` (If the SSH key is specified)             |         | The username used for SSH communication with Azure DevOps.                                                                                                                   |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_CLIENTID=4affd674-286d-423f-b643-7ffe4dec0f53 \
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_TENANTID=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                             | Required                                         | Default | Description                                                                                                                                                                  |
|-----------------------------------------------------------|--------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.azuredevops[{index}].oauth.clientId`     | `true`                                           |         | The client ID of the registered OAuth app.                                                                                                                                   |
| `--moderne.agent.azuredevops[{index}].oauth.clientSecret` | `true`                                           |         | The client secret of the registered OAuth app.                                                                                                                               |
| `--moderne.agent.azuredevops[{index}].oauth.tenantId`     | `true`                                           |         | The Azure tenant ID of the registered OAuth app.                                                                                                                             |
| `--moderne.agent.azuredevops[{index}].skipSsl`            | `false`                                          | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.agent.azuredevops[{index}].ssh.privateKey`     | `false`                                          |         | The SSH private key used to establish a SSH connection with Azure DevOps.                                                                                                    |
| `--moderne.agent.azuredevops[{index}].ssh.passphrase`     | `true` (If the SSH key is specified + encrypted) |         | The passphrase used to encrypt the SSH private key                                                                                                                           |
| `--moderne.agent.azuredevops[{index}].ssh.sshFileName`    | `true` (If the SSH key is specified)             |         | The file name of the private key, which the agent will store locally.                                                                                                        |
| `--moderne.agent.azuredevops[{index}].ssh.user`           | `true` (If the SSH key is specified)             |         | The username used for SSH communication with Azure DevOps.                                                                                                                   |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.azuredevops[0].oauth.clientId=4affd674-286d-423f-b643-7ffe4dec0f53 \
--moderne.agent.azuredevops[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.azuredevops[0].oauth.tenantId=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Bitbucket Cloud variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                 | Required | Default | Description                                            |
|-----------------------------------------------|----------|---------|--------------------------------------------------------|
| `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY`     | `true`   |         | The key specified in your Bitbucket OAuth consumer.    |
| `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET`  | `true`   |         | The secret specified in your Bitbucket OAuth consumer. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY=yourOAuthKey \
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET=yourSecretKey \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                 | Required | Default | Description                                            |
|-----------------------------------------------|----------|---------|--------------------------------------------------------|
| `--moderne.agent.bitbucket.cloud.oauthKey`    | `true`   |         | The key specified in your Bitbucket OAuth consumer.    |
| `--moderne.agent.bitbucket.cloud.oauthSecret` | `true`   |         | The secret specified in your Bitbucket OAuth consumer. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.bitbucket.cloud.oauthKey=yourOAuthKey \
--moderne.agent.bitbucket.cloud.oauthSecret=yourSecretKey \
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

**Variables:**

| Variable Name                                           | Required                                      | Default | Description                                                                                                                                                               |
|---------------------------------------------------------|-----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY`            | `true`                                        |         | The private key you configured for this Bitbucket instance.                                                                                                               |
| `MODERNE_AGENT_BITBUCKET_{index}_URL`                   | `true`                                        |         | The fully-qualified URL of the running Bitbucket instance. For example:  `https://bitbucket.myorg.com`.                                                                   |
| `MODERNE_AGENT_BITBUCKET_{index}_ALTERNATEURLS_{index}` | `false`                                       |         | The list of alternative fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                |
| `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL`               | `false`                                       | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PRIVATEKEY`        | `false`                                       |         | The SSH private key used to establish a SSH connection with Bitbucket.                                                                                                    |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PASSPHRASE`        | `true` (If the SSH private key is specified)  |         | The file name of the private key, which the agent will store locally.                                                                                                     |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_SSHFILENAME`       | `true` (If the SSH private key is specified)  |         | The file name of the private key, which the agent will store locally.                                                                                                     |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_USER`              | `true` (If the SSH private key is specified)  |         | The username used for SSH communication with Bitbucket.                                                                                                                   |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PORT`              | `true` (If the SSH private key is specified)  | `7999`  | The port used to communicate via SSH with Bitbucket.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_0_PRIVATEKEY=yourPrivateKey \
-e MODERNE_AGENT_BITBUCKET_0_URL=https://bitbucket.myorg.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                               | Required                                      | Default | Description                                                                                                                                                               |
|-------------------------------------------------------------|-----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.bitbucket[{index}].privateKey`             | `true`                                        |         | The private key you configured for this Bitbucket instance.                                                                                                               |
| `--moderne.agent.bitbucket[{index}].url`                    | `true`                                        |         | The fully-qualified URL of the running Bitbucket instance. For example:  `https://bitbucket.myorg.com`.                                                                   |
| `--moderne.agent.bitbucket[{index}].alternateUrls[{index}]` | `false`                                       |         | The list of alternative fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                |
| `--moderne.agent.bitbucket[{index}].skipSsl`                | `false`                                       | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.agent.bitbucket[{index}].ssh.privateKey`         | `false`                                       |         | The SSH private key used to establish a SSH connection with Bitbucket.                                                                                                    |
| `--moderne.agent.bitbucket[{index}].ssh.passphrase`         | `true` (If the SSH private key is specified)  |         | The file name of the private key, which the agent will store locally.                                                                                                     |
| `--moderne.agent.bitbucket[{index}].ssh.sshFileName`        | `true` (If the SSH private key is specified)  |         | The file name of the private key, which the agent will store locally.                                                                                                     |
| `--moderne.agent.bitbucket[{index}].ssh.user`               | `true` (If the SSH private key is specified)  |         | The username used for SSH communication with Bitbucket.                                                                                                                   |
| `--moderne.agent.bitbucket[{index}].ssh.port`               | `true` (If the SSH private key is specified)  | `7999`  | The port used to communicate via SSH with Bitbucket.                                                                                                                      |


**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.bitbucket[0].privateKey=yourPrivateKey \
--moderne.agent.bitbucket[0].url=https://bitbucket.myorg.com \
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

**Variables:**

| Variable Name                                                  | Required                                     | Default         | Description                                                                                                                                                                                                                      |
|----------------------------------------------------------------|----------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTID`                  | `true`                                       |                 | The client id configured in GitHub.                                                                                                                                                                                              |
| `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTSECRET`              | `true`                                       |                 | The client secret configured in GitHub.                                                                                                                                                                                          |
| `MODERNE_AGENT_GITHUB_{index}_URL`                             | `true`                                       |                 | The fully-qualified hostname of the running GitHub instance.                                                                                                                                                                     |
| `MODERNE_AGENT_GITHUB_{index}_ALTERNATEURLS_{index}`           | `false`                                      |                 | The list of alternative fully-qualified URL of the running GitHub instance.                                                                                                                                                      |
| `MODERNE_AGENT_GITHUB_{index}_SKIPSSL`                         | `false`                                      | `false`         | Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                           |
| `MODERNE_AGENT_GITHUB_{index}_ALLOWABLE_ORGANIZATIONS_{index}` | `false`                                      | See description | Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line. |
| `MODERNE_AGENT_GITHUB_{index}_OAUTH_INCLUDEPRIVATEREPOS`       | `false`                                      | See description | By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`.                                         |
| `MODERNE_AGENT_GITHUB_{index}_SSH_PRIVATEKEY`                  | `false`                                      |                 | (Optional) The SSH private key used to establish a SSH connection with GitHub.                                                                                                                                                   |
| `MODERNE_AGENT_GITHUB_{index}_SSH_PASSPHRASE`                  | `true` (If the SSH private key is specified) |                 | The passphrase used to encrypt the SSH private key.                                                                                                                                                                              |
| `MODERNE_AGENT_GITHUB_{index}_SSH_SSHFILENAME`                 | `true` (If the SSH private key is specified) |                 | The file name of the private key, which the agent will store locally.                                                                                                                                                            |
| `MODERNE_AGENT_GITHUB_{index}_SSH_USER`                        | `true` (If the SSH private key is specified) |                 | The username used for SSH communication with GitHub.                                                                                                                                                                             |
| `MODERNE_AGENT_GITHUB_{index}_SSH_PORT`                        | `false`                                      | `7999`          | The port used to communicate via SSH with GitHub.                                                                                                                                                                                |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                     | Required                                     | Default         | Description                                                                                                                                                                                                                      |
|-------------------------------------------------------------------|----------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.github[{index}].oauth.clientId`                  | `true`                                       |                 | The client id configured in GitHub.                                                                                                                                                                                              |
| `--moderne.agent.github[{index}].oauth.clientSecret`              | `true`                                       |                 | The client secret configured in GitHub.                                                                                                                                                                                          |
| `--moderne.agent.github[{index}].url`                             | `true`                                       |                 | The fully-qualified hostname of the running GitHub instance.                                                                                                                                                                     |
| `--moderne.agent.github[{index}].alternateUrls[{index}]`          | `false`                                      |                 | The list of alternative fully-qualified URL of the running GitHub instance.                                                                                                                                                      |
| `--moderne.agent.github[{index}].skipSsl`                         | `false`                                      | `false`         | Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                           |
| `--moderne.agent.github[{index}].allowableOrganizations[{index}]` | `false`                                      | See description | Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line. |
| `--moderne.agent.github[{index}].oauth.includePrivateRepos`       | `false`                                      | See description | By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`.                                         |
| `--moderne.agent.github[{index}].ssh.privateKey`                  | `false`                                      |                 | (Optional) The SSH private key used to establish a SSH connection with GitHub.                                                                                                                                                   |
| `--moderne.agent.github[{index}].ssh.passphrase`                  | `true` (If the SSH private key is specified) |                 | The passphrase used to encrypt the SSH private key.                                                                                                                                                                              |
| `--moderne.agent.github[{index}].ssh.sshFileName`                 | `true` (If the SSH private key is specified) |                 | The file name of the private key, which the agent will store locally.                                                                                                                                                            |
| `--moderne.agent.github[{index}].ssh.user`                        | `true` (If the SSH private key is specified) |                 | The username used for SSH communication with GitHub.                                                                                                                                                                             |
| `--moderne.agent.github[{index}].ssh.port`                        | `false`                                      | `7999`          | The port used to communicate via SSH with GitHub.                                                                                                                                                                                |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments
```
</TabItem>
</Tabs>

## GitLab variables

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                        | Required                                     | Default | Description                                                                                                                                                            |
|------------------------------------------------------|----------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTID`        | `true`                                       |         | The application id configured in GitLab.                                                                                                                               |
| `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTSECRET`    | `true`                                       |         | The secret configured in GitLab.                                                                                                                                       |
| `MODERNE_AGENT_GITLAB_{index}_URL`                   | `true`                                       |         | The fully-qualified hostname of your GitLab instance.                                                                                                                  |
| `MODERNE_AGENT_GITLAB_{index}_ALTERNATEURLS_{index}` | `false`                                      |         | The list of alternative fully-qualified URL of the running GitLab instance.                                                                                            |
| `MODERNE_AGENT_GITLAB_{index}_SKIPSSL`               | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_AGENT_GITLAB_{index}_SSH_PRIVATEKEY`        | `false`                                      |         | The SSH private key used to establish a SSH connection with GitLab.                                                                                                    |
| `MODERNE_AGENT_GITLAB_{index}_SSH_PASSPHRASE`        | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                    |
| `MODERNE_AGENT_GITLAB_{index}_SSH_SSHFILENAME`       | `true` (If the SSH private key is specified) |         | The file name of the private key, which the agent will store locally.                                                                                                  |
| `MODERNE_AGENT_GITLAB_{index}_SSH_USER`              | `true` (If the SSH private key is specified) |         | The username used for SSH communication with GitLab.                                                                                                                   |
| `MODERNE_AGENT_GITLAB_{index}_SSH_PORT`              | `false`                                      | `7999`  | The port used to communicate via SSH with GitLab.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITLAB_0_URL=https://your-gitlab.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                              | Required                                     | Default | Description                                                                                                                                                            |
|------------------------------------------------------------|----------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.gitlab[{index}].oauth.clientId`           | `true`                                       |         | The application id configured in GitLab.                                                                                                                               |
| `--moderne.agent.gitlab[{index}].oauth.clientSecret`       | `true`                                       |         | The secret configured in GitLab.                                                                                                                                       |
| `--moderne.agent.gitlab[{index}].url`                      | `true`                                       |         | The fully-qualified hostname of your GitLab instance.                                                                                                                  |
| `--moderne.agent.gitlab[{index}].alternateUrls[{index}]`   | `false`                                      |         | The list of alternative fully-qualified URL of the running GitLab instance.                                                                                            |
| `--moderne.agent.gitlab[{index}].skipSsl`                  | `false`                                      | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.agent.gitlab[{index}].ssh.privateKey`           | `false`                                      |         | The SSH private key used to establish a SSH connection with GitLab.                                                                                                    |
| `--moderne.agent.gitlab[{index}].ssh.passphrase`           | `true` (If the SSH private key is specified) |         | The passphrase used to encrypt the SSH private key.                                                                                                                    |
| `--moderne.agent.gitlab[{index}].ssh.sshFileName`          | `true` (If the SSH private key is specified) |         | The file name of the private key, which the agent will store locally.                                                                                                  |
| `--moderne.agent.gitlab[{index}].ssh.user`                 | `true` (If the SSH private key is specified) |         | The username used for SSH communication with GitLab.                                                                                                                   |
| `--moderne.agent.gitlab[{index}].ssh.port`                 | `false`                                      | `7999`  | The port used to communicate via SSH with GitLab.                                                                                                                      |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.gitlab[0].oauth.clientId=yourClientId \
--moderne.agent.gitlab[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.gitlab[0].url=https://your-gitlab.com \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Organizations service variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`                     | `true`   |         | The URL of your GraphQL service that provides organization information.                                                                                                              |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS` | `false`  | `600`   | Specifies how often to request your organization information.                                                                                                                        |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS=600 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.service.url`                   | `true`   |         | The URL of your GraphQL service that provides organization information.                                                                                                              |
| `--moderne.agent.organization.service.updateIntervalSeconds` | `false`  | `600`   | Specifies how often to request your organization information.                                                                                                                        |
| `--moderne.agent.organization.service.skipSsl`               | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.service.url=http://localhost:8091 \
--moderne.agent.organization.service.updateIntervalSeconds=600 \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Maven repository variables

You can configure multiple Maven repositories by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                 | Required                                              | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|-------------------------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_MAVEN_{index}_URL`             | `true`                                                |                    | The URL of your Maven repository.                                                                                                                                     |
| `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` | `true`                                                | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `MODERNE_AGENT_MAVEN_{index}_USERNAME`        | `false`                                               | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_PASSWORD`        | `false`                                               | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_RELEASES`        | `false`                                               | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `MODERNE_AGENT_MAVEN_{index}_SNAPSHOTS`       | `false`                                               | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `MODERNE_AGENT_MAVEN_{index}_ASTSOURCE`       | `false`                                               | `true`             | Specifies whether or not this repository should be searched for LST artifacts (Note: LSTs used to be called ASTs).                                                    |
| `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE`    | `false`                                               | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `MODERNE_AGENT_MAVEN_{index}_SKIPSSL`         | `false` | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    | Required                                              | Default            | Description                                                                                                                                                           |
|--------------------------------------------------|-------------------------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`--moderne.agent.maven[{index}].url`              | `true`                                                |                    | The URL of your Maven repository.                                                                                                                                     |
| `--moderne.agent.maven[{index}].localRepository` | `true`                                                | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `--moderne.agent.maven[{index}].username`        | `false`                                               | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].password`        | `false`                                               | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].releases`        | `false`                                               | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `--moderne.agent.maven[{index}].snapshots`       | `false`                                               | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `--moderne.agent.maven[{index}].astSource`       | `false`                                               | `true`             | Specifies whether or not this repository should be searched for LST artifacts (Note: LSTs used to be called ASTs).                                                    |
| `--moderne.agent.maven[{index}].recipeSource`    | `false`                                               | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `--moderne.agent.maven[{index}].skipSsl`         | `false` | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                            |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne-agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory repository variables

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                               | Required                                       | Default | Description                                                                                                                                  |
|-------------------------------------------------------------|------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ARTIFACTORY_{index}_URL`                     | `true`                                         |         | The URL of your Artifactory instance.                                                                                                        |
| `MODERNE_AGENT_ARTIFACTORY_{index}_USERNAME`                | `true`                                         |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                |
| `MODERNE_AGENT_ARTIFACTORY_{index}_PASSWORD`                | `true`                                         |         | The password used to connect to your Artifactory instance.                                                                                   |
| `MODERNE_AGENT_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}` | `true`                                         |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`. |
| `MODERNE_AGENT_ARTIFACTORY_{index}_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance.  This must be set to `true` if you use a self-signed SSL/TLS certificate.  |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                   | Required | Default | Description                                                                                                                                  |
|-----------------------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.artifactory[{index}].url`                      | `true`   |         | The URL of your Artifactory instance.                                                                                                        |
| `--moderne.agent.artifactory[{index}].username`                 | `true`   |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                |
| `--moderne.agent.artifactory[{index}].password`                 | `true`   |         | The password used to connect to your Artifactory instance.                                                                                   |
| `--moderne.agent.artifactory[{index}].astQueryFilters[{index}]` | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`. |
| `--moderne.agent.artifactory[{index}].skipSsl`                  | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory recipe variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                 | Required | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_MAVEN_{index}_URL`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `MODERNE_AGENT_MAVEN_{index}_ASTSOURCE`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                                                    |
| `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `MODERNE_AGENT_MAVEN_{index}_USERNAME`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_PASSWORD`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_RELEASES`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `MODERNE_AGENT_MAVEN_{index}_SNAPSHOTS`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `MODERNE_AGENT_MAVEN_{index}_SKIPSSL`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `RECIPESOURCE` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_ASTSOURCE=false \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    | Required | Default            | Description                                                                                                                                                           |
|--------------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.maven[{index}].url`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `--moderne.agent.maven[{index}].astSource`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                                                    |
| `--moderne.agent.maven[{index}].localRepository` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `--moderne.agent.maven[{index}].username`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].password`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].releases`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `--moderne.agent.maven[{index}].snapshots`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `--moderne.agent.maven[{index}].recipeSource`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `--moderne.agent.maven[{index}].skipSsl`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `recipeSource` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)
:::

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].astSource=false \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Strict recipe sources variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                   | Required                                  | Default | Description                                                                                       |
|-------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_RECIPE_USEONLYCONFIGURED`        | `true`                                    |         | Only use the recipe sources configured in the agent.                                              |
| `MODERNE_AGENT_RECIPE_POMCACHE_TYPE`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `MODERNE_AGENT_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                   |         | How long entries should live in the POM cache.                                                    |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is `REDIS`) |         | The port number of the Redis instance.                                                            |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                   |         | The Redis DB index.                                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required                                  | Default | Description                                                                                       |
|---------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `--moderne.agent.recipe.useOnlyConfigured`        | `true`                                    |         | Only use the recipe sources configured in the agent.                                              |
| `--moderne.agent.recipe.pomCache.type`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `--moderne.agent.recipe.pomCache.entryTtlMinutes` | `false`                                   |         | How long entries should live in the POM cache.                                                    |
| `--moderne.agent.recipe.pomCache.redis.host`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `--moderne.agent.recipe.pomCache.redis.port`      | `true` (If the POM cache type is `REDIS`) |         | The port number of the Redis instance.                                                            |
| `--moderne.agent.recipe.pomCache.redis.username`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `--moderne.agent.recipe.pomCache.redis.password`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `--moderne.agent.recipe.pomCache.redis.ssl`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `--moderne.agent.recipe.pomCache.redis.database`  | `false`                                   |         | The Redis DB index.                                                                               |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.recipe.useOnlyConfigured=true \
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

**Variables:**

| Variable Name                                    | Required | Default | Description                                                                                                                                                               |
|--------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_VISUALIZATION_USEONLYCONFIGURED` | `true`   | `false` | Only use the visualization sources configured in the agent.                                                                                                               |
| `MODERNE_AGENT_PYPI_{index}_URL`                 | `true`   |         | The URL of your PyPI package index.                                                                                                                                       |
| `MODERNE_AGENT_PYPI_{index}_USERNAME`            | `false`  | `null`  | The username used to access the index.                                                                                                                                    |
| `MODERNE_AGENT_PYPI_{index}_PASSWORD`            | `false`  | `null`  | The password used to access the index.                                                                                                                                    |
| `MODERNE_AGENT_PYPI_{index}_SKIPSSL`             | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_VISUALIZATION_USEONLYCONFIGURED=true \
-e MODERNE_AGENT_PYPI_0_URL=https://pypi.example.com/simple \
-e MODERNE_AGENT_PYPI_0_USERNAME=admin \
-e MODERNE_AGENT_PYPI_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                       | Required | Default | Description                                                                                                                                                               |
|-----------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.visualization.useOnlyConfigured`  | `true`   | `false` | Only use the visualization sources configured in the agent.                                                                                                               |
| `--moderne.agent.pypi[{index}].url`                 | `true`   |         | The URL of your PyPI package index.                                                                                                                                       |
| `--moderne.agent.pypi[{index}].username`            | `false`  | `null`  | The username used to access the index.                                                                                                                                    |
| `--moderne.agent.pypi[{index}].password`            | `false`  | `null`  | The password used to access the index.                                                                                                                                    |
| `--moderne.agent.pypi[{index}].skipSsl`             | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.visualization.useOnlyConfigured=true \
--moderne.agent.pypi[0].url=https://pypi.example.com/simple \
--moderne.agent.pypi[0].username=admin \
--moderne.agent.pypi[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## HTTP proxy variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                         | Required | Default | Description                                 |
|---------------------------------------|----------|---------|---------------------------------------------|
| `MODERNE_AGENT_APIGATEWAY_PROXY_HOST` | `false`  |         | Host (without scheme) for the proxy server. |
| `MODERNE_AGENT_APIGATEWAY_PROXY_PORT` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_APIGATEWAY_PROXY_HOST=proxy.mycompany.com \
-e MODERNE_AGENT_APIGATEWAY_PROXY_PORT=8179 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                           | Required | Default | Description                                 |
|-----------------------------------------|----------|---------|---------------------------------------------|
| `--moderne.agent.apiGateway.proxy.host` | `false`  |         | Host (without scheme) for the proxy server. |
| `--moderne.agent.apiGateway.proxy.port` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.apiGateway.proxy.host=proxy.mycompany.com \
--moderne.agent.apiGateway.proxy.port=8179 \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Generic HTTP tool variables

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                             | Required | Default | Description                                                                                                                                                                                                             |
|-----------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_HTTPTOOL_{index}_URL`                      | `true`   |         | Fully qualified URL to your HTTP tool.                                                                                                                                                                                  |
| `MODERNE_AGENT_HTTPTOOL_{index}_USERNAME`                 | `false`  |         | Username used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `MODERNE_AGENT_HTTPTOOL_{index}_PASSWORD`                 | `false`  |         | Password used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `MODERNE_AGENT_HTTPTOOL_{index}_BEARERTOKEN`              | `false`  |         | Bearer token used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `MODERNE_AGENT_HTTPTOOL_{index}_SKIPSSL`                  | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                        |
| `MODERNE_AGENT_HTTPTOOL_{index}_SKIPVALIDATECONNECTIVITY` | `false`  | `false` | By default, on agent startup, we will validate that we can connect to this HTTP tool, and fail to start up the agent if we cannot. Set this to `true` to skip this validation.                                          |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_HTTPTOOL_0_URL=https://launchdarkly.mycompany.com \
-e MODERNE_AGENT_HTTPTOOL_0_USERNAME=myUser \
-e MODERNE_AGENT_HTTPTOOL_0_PASSWORD=${SECRET_NAME} \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                                                             |
|--------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.httpTool[{index}].url`                      | `true`   |         | Fully qualified URL to your HTTP tool.                                                                                                                                                                                  |
| `--moderne.agent.httpTool[{index}].username`                 | `false`  |         | Username used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `--moderne.agent.httpTool[{index}].password`                 | `false`  |         | Password used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearerToken` must not be provided.    |
| `--moderne.agent.httpTool[{index}].bearerToken`              | `false`  |         | Bearer token used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `--moderne.agent.httpTool[{index}].skipSsl`                  | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                        |
| `--moderne.agent.httpTool[{index}].skipValidateConnectivity` | `false`  | `false` | By default, on agent startup, we will validate that we can connect to this HTTP tool, and fail to start up the agent if we cannot. Set this to `true` to skip this validation.                                          |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.httpTool[0].url=https://launchdarkly.mycompany.com \
--moderne.agent.httpTool[0].username=myUser \
--moderne.agent.httpTool[0].password=${SECRET_NAME} \
# ... Additional arguments
```
</TabItem>
</Tabs>
