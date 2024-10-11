# Configure an agent with GitLab

In order to view recipe results and commit changes from a recipe back to GitLab, you'll need to create a GitLab OAuth app and configure the Moderne agent with the appropriate variables.

To assist with that, this guide will:

* [Walk you through how to create a GitLab OAuth application](configure-an-agent-with-gitlab.md#step-1-create-an-oauth-application)
* [Provide you with a list of necessary variables the agent needs to communicate with your GitLab instance](configure-an-agent-with-gitlab.md#step-2-configure-the-moderne-agent)

#### Prerequisites

* You will need administrator access to your organization's GitLab account

## GitLab configuration

### Step 1: Create an OAuth application

1. Navigate to the Applications page for your organization: `https://gitlab.com/groups/<yourorg>/-/settings/applications`
2.  Provide an application name and redirect URI. The redirect URI will be in this format: `https://<tenantname>.moderne.io`:

    ![](/.gitbook/assets/Screenshot%202022-12-27%20at%208.59.50%20AM.png)

3.  Pick the following scopes:

    ![](/.gitbook/assets/Screenshot%202022-12-27%20at%207.52.35%20AM.png)

4. Click the Save application button
5.  Copy the `Application ID` and `Secret` from this page; they will be used as arguments for the Moderne Agent:

    ![](/.gitbook/assets/Screenshot%202022-12-27%20at%208.03.35%20AM.png)   

## Agent configuration

### Step 2: Configure the Moderne Agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your GitLab instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](agent-configuration.md).

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTID` – _The application id configured in GitLab._
* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTSECRET` – _The secret configured in GitLab._
* `MODERNE_AGENT_GITLAB_{index}_URL` – _The fully-qualified hostname of your GitLab instance._
* `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with GitLab._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PASSPHRASE` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_GITLAB_{index}_SSH_SSHFILENAME` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_GITLAB_{index}_SSH_USER` – **(Required if the SSH private key is specified)** _The username used for SSH communication with GitLab._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PORT` – _(Optional) The port used to communicate via SSH with GitLab. Defaults to `7999`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITLAB_0_URL=https://your-gitlab.com \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.gitlab[{index}].oauth.clientId` – _The application id configured in GitLab._
* `--moderne.agent.gitlab[{index}].oauth.clientSecret` – _The secret configured in GitLab._
* `--moderne.agent.gitlab[{index}].url` – _The fully-qualified hostname of your GitLab instance._
* `--moderne.agent.gitlab[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.agent.gitlab[{index}].oauth.includePrivateRepos` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `--moderne.agent.gitlab[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with GitLab._
* `--moderne.agent.gitlab[{index}].ssh.passphrase` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `--moderne.agent.gitlab[{index}].ssh.sshFileName` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `--moderne.agent.gitlab[{index}].ssh.user` – **(Required if the SSH private key is specified)** _The username used for SSH communication with GitLab._
* `--moderne.agent.gitlab[{index}].ssh.port` – _(Optional) The port used to communicate via SSH with GitLab. Defaults to `7999`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.gitlab[0].oauth.clientId=yourClientId \
--moderne.agent.gitlab[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.gitlab[0].url=https://your-gitlab.com \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
