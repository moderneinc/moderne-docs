---
sidebar_label: Strict recipe source configuration
description: How to configure the Moderne agent to have strict recipe sources.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with strict recipe sources

The Moderne SaaS is configured to use the following Maven repositories to load recipe artifacts from in the event the agent has not been configured with any recipe sources or if a recipe artifact cannot be sourced from what is configured. (Requires agent version `0.118.0` or greater)

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

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                   | Required                                  | Default | Description                                                                                       |
|-------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_RECIPE_USEONLYCONFIGURED`        | `true`                                    |         | Only use the recipe sources configured in the agent.                                              |
| `MODERNE_AGENT_RECIPE_POMCACHE_TYPE`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `MODERNE_AGENT_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                   |         | How long entries should live in the POM cache.                                                    |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is `REDIS`) |         | The port number of the Redis instance.                                                            |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                   |         | The Redis DB index.                                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required                                  | Default | Description                                                                                       |
|---------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `--moderne.agent.recipe.useOnlyConfigured`        | `true`                                    |         | Only use the recipe sources configured in the agent.                                              |
| `--moderne.agent.recipe.pomCache.type`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `--moderne.agent.recipe.pomCache.entryTtlMinutes` | `false`                                   |         | How long entries should live in the POM cache.                                                    |
| `--moderne.agent.recipe.pomCache.redis.host`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `--moderne.agent.recipe.pomCache.redis.port`      | `true` (If the POM cache type is `REDIS`) |         | The port number of the Redis instance.                                                            |
| `--moderne.agent.recipe.pomCache.redis.username`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `--moderne.agent.recipe.pomCache.redis.password`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `--moderne.agent.recipe.pomCache.redis.ssl`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `--moderne.agent.recipe.pomCache.redis.database`  | `false`                                   |         | The Redis DB index.                                                                               |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.recipe.useOnlyConfigured=true \
# ... Additional arguments
```
</TabItem>
</Tabs>
