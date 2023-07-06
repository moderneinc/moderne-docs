# Configure an agent with strict recipe sources

The Moderne SaaS is configured to use the following Maven repositories to load recipe artifacts from in the event the agent has not been configured with any recipe sources or if a recipe artifact cannot be sourced from what is configured. (Requires agent version `0.118.0` or greater)&#x20;

```xml
<repository>
  <id>maven-central-explicit</id>
  <url>https://repo1.maven.org/maven2</url>
  <snapshots>
    <enabled>false</enabled>
  </snapshots>
  <releases>
    <enabled>true</enabled>
  </releases>
</repository>
<repository>
  <id>oss-snapshots</id>
  <url>https://oss.sonatype.org/content/repositories/snapshots</url>
  <snapshots>
    <enabled>true</enabled>
  </snapshots>
  <releases>
    <enabled>false</enabled>
  </releases>
</repository>
<repository>
  <id>artifact-registry</id>
  <url>https://us-west1-maven.pkg.dev/moderne-dev/moderne-recipe</url>
  <releases>
    <enabled>true</enabled>
  </releases>
  <snapshots>
    <enabled>true</enabled>
  </snapshots>
</repository>
<repository>
  <id>jitpack</id>
  <url>https://jitpack.io</url>
  <releases>
    <enabled>true</enabled>
  </releases>
</repository>
```

This fallback behavior can be disabled using recipe configuration. If any agent is configured with this setting then recipes will only be sourced by what the agent defines.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_RECIPE_USEONLYCONFIGURED` – Only use the recipe sources configured in the agent.
* `MODERNE_AGENT_RECIPE_POMCACHE_TYPE` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `MODERNE_AGENT_RECIPE_POMCACHE_ENTRYTTLMINUTES` – _(Optional) How long entries should live in the POM cache._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USERNAME` – _(Optional) The username needed to authenticate to the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWORD` – _(Optional) The password needed to authenticate with the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_SSL` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE` – _(Optional) The Redis DB index._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.recipe.useOnlyConfigured` – Only use the recipe sources configured in the agent.
* `--moderne.agent.recipe.pomCache.type` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `--moderne.agent.recipe.pomCache.entryTtlMinutes` – _(Optional) How long entries should live in the POM cache._
* `--moderne.agent.recipe.pomCache.redis.host` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.port` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.username` – _(Optional) The username needed to authenticate to the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.password` – _(Optional) The password needed to authenticate with the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.ssl` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `--moderne.agent.recipe.pomCache.redis.database` – _(Optional) The Redis DB index._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.recipe.useOnlyConfigured=true \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
