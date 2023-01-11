# Configure an agent with Bitbucket Cloud access

Configuring your Moderne Agent instance with Bitbucket Cloud is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.

This guide will walk you through configuring a new Application Link within your Bitbucket Server or Bitbucket Data Center instance.

#### Prerequisites

* Ability to create a Bitbucket OAuth Consumer.

### Step 1: Create a Bitbucket OAuth Consumer

Follow [this Atlassian guide](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/) to create an OAuth Consumer.

Configure the callback URL to point at your tenant:

![](<../../.gitbook/assets/image (9).png>)

The consumer should have these permissions:

![](<../../.gitbook/assets/image (1) (5).png>)

* Projects - Read
* Repositories - Write
* Pull requests - Write.

Take note of the key and secret on the newly formed consumer:

<figure><img src="../../.gitbook/assets/image (6) (3).png" alt=""><figcaption></figcaption></figure>

## Argument configuration

Please note that the commands and options below omit standard options documented at [standard-configuration.md](standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which is indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY` - From the Bitbucket OAuth consumer.
* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET` - From the Bitbucket OAuth consumer.

Example using Docker (note that host and private-key are fake):

```
docker run \
...
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY=ABCDE \
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET=SECRET \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.bitbucket[{index}].private-key` - Private key configured in previous step
* `moderne.agent.bitbucket[{index}].url` - fully-qualified URL of running bucketbucket instance. example: `https://bitbucket.org`
* `moderne.agent.bitbucket[{index}].skipSsl` - skip SSL validation for HTTP connections to this Bitbucket instance (defaults to false)

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host and private-key are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.bitbucket[0].private-key=ABCDE \
--moderne.agent.bitbucket[0].url=https://bitbucket.myorg.com \
--moderne.agent.bitbucket[1].private-key=FGHIJ \
--moderne.agent.bitbucket[1].url=http://bitbucket2.myorg.com \
...
```
{% endtab %}
{% endtabs %}
