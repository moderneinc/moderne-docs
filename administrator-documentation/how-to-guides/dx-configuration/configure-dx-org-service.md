# Configure the Organizations service with Moderne DX

In order for Moderne to obtain information about your organizational structure, you will need to configure the Moderne DX service to point to your [Organizations service](../../references/architecture/organizations-service.md). This guide will explain how to do that.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_ORGANIZATION_URL` – _The URL of your GraphQL service that provides organization information._
* `MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `MODERNE_DX_ORGANIZATION_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.organization.url` – _The URL of your GraphQL service that provides organization information._
* `--moderne.dx.organization.updateIntervalSeconds` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `--moderne.dx.organization.skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
