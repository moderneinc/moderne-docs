# Configure an agent with Bitbucket Cloud access

In order to view recipe results and commit changes from a recipe back to Bitbucket, you'll need to create an application link in Bitbucket and configure the Moderne agent with the appropriate variables.

To assist with that, this guide will:

* [Walk you through how to configure your Bitbucket Cloud instance to support the agent](configure-bitbucket-cloud-to-agent.md#step-1-create-a-bitbucket-oauth-consumer)
* [Provide you with a list of necessary variables the agent needs to communicate with your Bitbucket instance](configure-bitbucket-cloud-to-agent.md#step-2-configure-the-moderne-agent)

#### Prerequisites

* You will need access to create a Bitbucket OAuth Consumer

## Bitbucket configuration

### Step 1: Create a Bitbucket OAuth Consumer

Follow [this Atlassian guide](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/) to create an OAuth Consumer.

Once that's done, configure the callback URL to point at your Moderne tenant:

![](../../../../.gitbook/assets/callback.png)

The consumer should have these permissions:

![](../../../../.gitbook/assets/bitbucket-permissions.png)

* Projects - Read
* Repositories - Write
* Pull requests - Write

Once your consumer has been created, you should see a `key` and a `secret`:

<figure><img src="../../../../.gitbook/assets/key-secret.png" alt=""><figcaption></figcaption></figure>

Please save those for use in [Step 2](configure-bitbucket-cloud-to-agent.md#step-2-configure-the-moderne-agent).

## Agent configuration

### Step 2: Configure the Moderne agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your Bitbucket instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](../agent-configuration.md).

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY` – _The key specified in your Bitbucket OAuth consumer._
* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET` – _The secret specified in your Bitbucket OAuth consumer._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY=yourOAuthKey \
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET=yourSecretKey \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.bitbucket.cloud.oauthKey` – _The key specified in your Bitbucket OAuth consumer._
* `--moderne.agent.bitbucket.cloud.oauthSecret` – _The secret specified in your Bitbucket OAuth consumer._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.bitbucket.cloud.oauthKey=yourOAuthKey \
--moderne.agent.bitbucket.cloud.oauthSecret=yourSecretKey \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
