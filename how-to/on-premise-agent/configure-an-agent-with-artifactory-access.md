# Configure an agent with Artifactory access

Configuring your Moderne Agent instance with Artifactory is a prerequisite for viewing recipe results within the Moderne application.\


This guide will walk you through configuring the Moderne on-premise agent connection to Artifactory.

**Prerequisites**

* Username and password for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured

Please note that the commands and options below omit standard options documented at [standard-configuration.md](standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which is indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple Artifactory servers by including multiple entries with different indices. Within a given Artifactory server configuration, you can configure mulitple AST query filters by including multiple entries with difference indices.

* `MODERNE_AGENT_ARTIFACTORY_0_URL` - Artifactory URL
* `MODERNE_AGENT_ARTIFACTORY_0_USERNAME` - username used to connect to Artifactory, requires permission to run AQL queries
* `MODERNE_AGENT_ARTIFACTORY_0_PASSWORD` - password used to connect to Artifactory
* `MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0` - AQL query fragment used to select AST artifacts to send to Moderne



Example

```
docker run \
...
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple Artifactory servers by including multiple entries with different indices. Within a given Artifactory server configuration, you can configure mulitple AST query filters by including multiple entries with difference indices.



* `--moderne.agent.artifactory[0].url` - Artifactory URL
* `--moderne.agent.artifactory[0].username` - username used to connect to Artifactory, requires permission to run AQL queries
* `--moderne.agent.artifactory[0].password` - password used to connect to Artifactory
* `--moderne.agent.artifactory[0].astQueryFilters[0]` - AQL query fragment used to select AST artifacts to send to Moderne



Example

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
...
```
{% endtab %}
{% endtabs %}
