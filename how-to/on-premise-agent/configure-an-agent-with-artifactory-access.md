# Configure an agent with Artifactory access

Artifactory serves as a source of LST artifacts for Moderne. This integration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify LST artifacts that have not yet been encrypted and transmitted to Moderne in near real-time.

This guide will walk you through how to configure the Moderne agent to connect to your Artifactory instance to retrieve LST artifacts.

{% hint style="info" %}
If you're wanting to configure Artifactory to support recipe artifacts, please see [this guide](/how-to/on-premise-agent/configuring-artifactory-with-recipes.md) instead.
{% endhint %}

#### Prerequisites

* You will need a username and password for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured

## Configuring the Moderne agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to get LST artifacts from your Artifactory instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](/how-to/agent-configuration.md).

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}

**Variables:**

* `MODERNE_AGENT_ARTIFACTORY_{index}_URL` – _The URL of your Artifactory instance._
* `MODERNE_AGENT_ARTIFACTORY_{index}_USERNAME` – _The username used to connect to your Artifactory instance. This user _must_ have permission to run AQL queries._
* `MODERNE_AGENT_ARTIFACTORY_{index}_PASSWORD` – _The password used to connect to your Artifactory instance._
* `MODERNE_AGENT_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `MODERNE_AGENT_ARTIFACTORY_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}

**Arguments:**

* `--moderne.agent.artifactory[{index}].url` – _The URL of your Artifactory instance._
* `--moderne.agent.artifactory[{index}].username` – _The username used to connect to your Artifactory instance. This user _must_ have permission to run AQL queries._
* `--moderne.agent.artifactory[{index}].password` – _The password used to connect to your Artifactory instance._
* `--moderne.agent.artifactory[{index}].astQueryFilters[{index}]` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `--moderne.agent.artifactory[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
