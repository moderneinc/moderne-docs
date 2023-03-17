# Configure Organizations service

Configure the [Organizations service](../../references/organizations-service.md) to provide organizational insight to the Moderne platform.

{% tabs %}
{% tab title="OCI Container" %}
Provide the path to the repository group for your container.

* `MODERNE_AGENT_ORGANIZATION_URL` - URL of the GraphQL service. e.g.
* `MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS` - (optional) Defaults to 600 (10 minutes)

Example

```
docker run \
...
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
* `moderne.agent.organization.url` - URL of the GraphQL service.
* `moderne.agent.organization.updateIntervalSeconds` - (optional) Defaults to 600 (10 minutes)

Example

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
...
```
{% endtab %}
{% endtabs %}
