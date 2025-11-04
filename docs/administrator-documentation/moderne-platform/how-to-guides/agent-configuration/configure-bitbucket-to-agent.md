---
sidebar_label: Bitbucket Data center configuration
description: How to configure the Moderne agent to communicate with Bitbucket Data Center.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with Bitbucket Data Center access

In order to view recipe results and commit changes from a recipe back to Bitbucket, you'll need to create an application link in Bitbucket and configure the Moderne agent with the appropriate variables.

To assist with that, this guide will:

* [Walk you through how to configure your Bitbucket server or Bitbucket Data Center instance to support the agent](#step-1-generate-a-public-and-private-key-for-bitbucket)
* [Provide you with a list of necessary variables the agent needs to communicate with your Bitbucket instance](#step-4-configure-the-moderne-agent)

#### Prerequisites

* You will need administrator access to your Bitbucket on-premise instance

## Bitbucket OAuth2 configuration

### Step 1: Create an OAuth connection

1. Go to the Administration page in your Bitbucket instance
2. Select _Application Links_ from the _System_ section
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _External application_
5. Ensure that the _Direction_ is set to _Incoming_
5. Click _Continue_

6. Define a new Incoming Application with the following settings:

    | Field                   | Value                                        |
    | ----------------------- | -------------------------------------------- |
    | Name                    | `Moderne`                                    |
    | Redirect URL            | `https://your-domain.moderne.io`             |
    | Application Permissions | Repositories - Read<br> Repositories - Write |

6. Click _Save_ to complete the Application Link creation
7. Copy the "Client ID" and "Client Secret" to use in the next step


<details>
<summary>OAuth1.0a (deprecated)</summary>

#### Generate a public and private key for Bitbucket

This key will be used by the Moderne agent to talk to Bitbucket.

```bash
openssl genrsa -out bitbucket_privatekey.pem 1024
openssl req -newkey rsa:1024 -x509 -key bitbucket_privatekey.pem -out bitbucket_publickey.cer -days 365
openssl pkcs8 -topk8 -nocrypt -in bitbucket_privatekey.pem -out bitbucket_privatekey.pcks8
openssl x509 -pubkey -noout -in bitbucket_publickey.cer  > bitbucket_publickey.pem
```

#### Create an Application Link in Bitbucket

1. Go to the Administration page in your Bitbucket instance
2. Select _Application Links_ from the _System_ section
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _Atlassian product_ (this looks weird, but this is the [documented path](https://confluence.atlassian.com/bitbucketserver/link-to-other-applications-1018764620.html) for external applications to integrate)
5. Enter the URL for your Moderne instances as the _Application URL_:
    <figure>
        ![](./assets/agent-bitbucket-create-link.png)
        <figcaption>_Create link_</figcaption>
    </figure>
6. Click _Continue_
7.  Define a new Incoming Application with the following settings:

    | Field                 | Value                            |
    | --------------------- | -------------------------------- |
    | Application Name      | `Moderne`                        |
    | Application Type      | Generic Application              |
    | Service Provider Name | `moderne`                        |
    | Consumer key          | `OauthKey`                       |
    | Request token URL     | `https://your-domain.moderne.io` |
    | Access token URL      | `https://your-domain.moderne.io` |
    | Authorize URL         | `https://your-domain.moderne.io` |
    | Create incoming link  | ✅                                |
8. Click _Continue_
9.  Complete the Incoming Link configuration:

    | Field         | Value                                                        |
    | ------------- | ------------------------------------------------------------ |
    | Consumer Key  | `OauthKey`                                                   |
    | Consumer Name | `Moderne`                                                    |
    | Public Key    | Paste the public key (`bitbucket_publickey.pem`) from step 1 |
10. Click _Continue_ to complete the Application Link creation
</details>

## Agent configuration

### Step 2: Configure the Moderne agent

In order for the Moderne agent to work with your Bitbucket instance, it will need to be provided with the information you generated in [Step 1](#step-1-create-an-oauth-connection).

:::info
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
:::

To enable OAuth2 support for the Bitbucket instance within the Moderne agent, we will want to configure the properties `MODERNE_AGENT_BITBUCKET_{index}_OAUTH_KEY` with our "Client ID" and `MODERNE_AGENT_BITBUCKET_{index}_OAUTH_SECRET` with our "Client Secret" from Step 1.

<details>
<summary>OAuth1.0a (deprecated)</summary>

#### Configure the Bitbucket private key for the Moderne agent

For OAuth1.0a, we need to convert the private key was generated in the Step 1 - OAuth1.0a section to a single-line string.

If you're using Bash or another shell, you can obtain the single-line string by copying the results of the following command. You'll then take the output and set the content to the property `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY`:

```bash
cat bitbucket_privatekey.pcks8 | sed '1d;$d' | tr -d '\n'
```

If you're not using a shell, please follow these instructions instead:

1. Open up the `bitbucket_privatekey.pcks8` key in a text editor
2. Remove the first and last line (header and footer) of the private key
   * The first line should be: `-----BEGIN PRIVATE KEY-----`
   * The last line should be: `-----END PRIVATE KEY-----`
3. Remove all newline and return characters
4. Copy the contents of the file as a single-line string. This will be used in the property `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY`.
</details>

### Moderne Agent Bitbucket properties

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your Bitbucket instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

:::info
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
:::

<Tabs>
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                           | Required                                      | Default | Description                                                                                                                                                               |
|---------------------------------------------------------|-----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY`            | `conditional`                                 |         | (OAuth1.0a only) The private key you configured for this Bitbucket instance.                                                                                              |
| `MODERNE_AGENT_BITBUCKET_{index}_OAUTH_KEY`             | `conditional`                                 |         | (OAuth2 only) The client id for the Application Link that you configured for this Bitbucket instance.                                                                     |
| `MODERNE_AGENT_BITBUCKET_{index}_OAUTH_SECRET`          | `conditional`                                 |         | (OAuth2 only) The client secret for the Application Link that you configured for this Bitbucket instance.                                                                 |
| `MODERNE_AGENT_BITBUCKET_{index}_URL`                   | `true`                                        |         | The fully-qualified URL of the running Bitbucket instance. For example:  `https://bitbucket.myorg.com`.                                                                   |
| `MODERNE_AGENT_BITBUCKET_{index}_ALTERNATEURLS_{index}` | `false`                                       |         | The list of alternative fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                |
| `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL`               | `false`                                       | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PRIVATEKEY`        | `false`                                       |         | The SSH private key used to establish a SSH connection with Bitbucket.                                                                                                    |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PASSPHRASE`        | `true` (If the SSH private key is specified)  |         | The passphrase used to encrypt the SSH private key. This is required if the private key is specified and encrypted.                                                       |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_SSHFILENAME`       | `true` (If the SSH private key is specified)  |         | The file name of the private key, which the agent will store locally.                                                                                                     |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_USER`              | `true` (If the SSH private key is specified)  |         | The username used for SSH communication with Bitbucket.                                                                                                                   |
| `MODERNE_AGENT_BITBUCKET_{index}_SSH_PORT`              | `true` (If the SSH private key is specified)  | `7999`  | The port used to communicate via SSH with Bitbucket.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_0_OAUTH_KEY=yourClientId \
-e MODERNE_AGENT_BITBUCKET_0_OAUTH_SECRET=yourClientSecret \
-e MODERNE_AGENT_BITBUCKET_0_URL=https://bitbucket.myorg.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                               | Required                                      | Default | Description                                                                                                                                                               |
|-------------------------------------------------------------|-----------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.bitbucket[{index}].privateKey`             | `conditional`                                 |         | (OAuth1.0a only) The private key you configured for this Bitbucket.                                                                                                       |
| `--moderne.agent.bitbucket[{index}].oauth.key`              | `conditional`                                 |         | (OAuth2 only) The client id for the Application Link that you configured for this Bitbucket instance.                                                                     |
| `--moderne.agent.bitbucket[{index}].oauth.secret`           | `conditional`                                 |         | (OAuth2 only) The client secret for the Application Link that you configured for this Bitbucket instance.                                                                 |
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
--moderne.agent.bitbucket[0].oauth.key=yourClientId \
--moderne.agent.bitbucket[0].oauth.secret=yourClientSecret \
--moderne.agent.bitbucket[0].url=https://bitbucket.myorg.com \
# ... Additional arguments
```
</TabItem>
</Tabs>
