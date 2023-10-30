# Configure an agent with GitHub

In order to view recipe results and commit changes from a recipe back to GitHub, you'll need to create a GitHub OAuth app and configure the Moderne agent with the appropriate variables.

To assist with that, this guide will:

* [Walk you through how to create a GitHub OAuth application](configure-an-agent-with-github.md#step-1-create-an-oauth-application)
* [Provide you with a list of necessary variables the agent needs to communicate with your GitHub instance](configure-an-agent-with-github.md#step-2-configure-the-moderne-agent)

{% hint style="info" %}
[Why an OAuth app and not a GitHub app?](../../references/github-permissions.md#github-oauth-applications-vs-github-applications)
{% endhint %}

#### Prerequisites

* You will need administrator access to your organization's GitHub account

## GitHub configuration

### Step 1: Create an OAuth application

1. Navigate to the settings page for your organization: `https://github.com/organizations/<YOUR_ORG>/settings/applications`
2. Expand `Developer settings` on the bottom left of the page:
   * ![](<../../../../.gitbook/assets/Screen Shot 2022-05-19 at 12.56.51 PM.png>)
3. Click the `New OAuth App` button in the upper right of your screen.
4. Supply the required fields and register the application (See [examples](configure-an-agent-with-github.md#example-values) below):
   * ![](<../../../../.gitbook/assets/Screen Shot 2022-05-19 at 1.01.11 PM.png>)
5. On your newly created application click the `Generate a new client secret` button:
   * ![](<../../../../.gitbook/assets/Screen Shot 2022-05-19 at 1.17.35 PM (1).png>)
6. Copy the `Client ID` and `Client secret` from this page; they will be used as [arguments for the Moderne Agent](configure-an-agent-with-github.md#step-2-configure-the-moderne-agent).

#### Example values

| Field                      | Example                    |
| -------------------------- | -------------------------- |
| Application Name           | `Moderne SaaS`             |
| Homepage URL               | `https://myorg.moderne.io` |
| Authorization callback URL | `https://myorg.moderne.io` |

## Agent configuration

### Step 2: Configure the Moderne Agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your GitHub instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](../agent-configuration.md).

{% hint style="info" %}
You can configure multiple GitHub OAuth apps by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTID` – _The client id configured in GitHub._
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTSECRET` – _The client secret configured in GitHub._
* `MODERNE_AGENT_GITHUB_{index}_URL` – _The fully-qualified hostname of the running GitHub instance._
* `MODERNE_AGENT_GITHUB_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `MODERNE_AGENT_GITHUB_{index}_ALLOWABLE_ORGANIZATIONS_{index}` – _(Optional) Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line._
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_INCLUDEPRIVATEREPOS` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with GitHub._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PASSPHRASE` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_GITHUB_{index}_SSH_SSHFILENAME` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_GITHUB_{index}_SSH_USER` – **(Required if the SSH private key is specified)** _The username used for SSH communication with GitHub._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PORT` – _(Optional) The port used to communicate via SSH with GitHub. Defaults to `7999`._

**Example:**

```shell
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
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.github[{index}].oauth.clientId` – _The client id configured in GitHub._
* `--moderne.agent.github[{index}].oauth.clientSecret` – _The client secret configured in GitHub._
* `--moderne.agent.github[{index}].url` – _The fully-qualified hostname of the running GitHub instance._
* `--moderne.agent.github[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `--moderne.agent.github[{index}].allowableOrganizations[{index}]` – _(Optional) Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line._
* `--moderne_agent_github[{index}].oauth.includePrivateRepos` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `--moderne.agent.github[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with GitHub._
* `--moderne.agent.github[{index}].ssh.passphrase` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `--moderne.agent.github[{index}].ssh.sshFileName` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `--moderne.agent.github[{index}].ssh.user` – **(Required if the SSH private key is specified)** _The username used for SSH communication with GitHub._
* `--moderne.agent.github[{index}].ssh.port` – _(Optional) The port used to communicate via SSH with GitHub. Defaults to `7999`._

**Example:**

```shell
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
{% endtab %}
{% endtabs %}
