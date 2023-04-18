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
2. Provide an application name and redirect URI. The redirect URI will be in this format: `https://<tenantname>.moderne.io`:
   *

       <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 8.59.50 AM.png" alt=""><figcaption></figcaption></figure>
3. Pick the following scopes:
   *

       <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 7.52.35 AM.png" alt=""><figcaption></figcaption></figure>
4. Click the Save application button
5. Copy the `Application ID` and `Secret` from this page; they will be used as arguments for the Moderne Agent:
   *

       <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 8.03.35 AM.png" alt=""><figcaption></figcaption></figure>

## Agent configuration

### Step 2: Configure the Moderne Agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your GitLab instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](../agent-configuration.md).

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTID` – _The application id configured in GitLab._
* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTSECRET` – _The secret configured in GitLab._
* `MODERNE_AGENT_GITLAB_{index}_URL` – _The fully-qualified hostname of your GitLab instance._
* `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to true if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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
* `--moderne.agent.gitlab[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to true if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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
