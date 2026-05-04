---
sidebar_label: POM cache configuration
description: How to configure the Moderne Connector's POM cache for recipe resolution.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources" />

# Configure the POM cache

When the Moderne Connector resolves a recipe artifact, it walks the artifact's POM dependency graph against your [recipe marketplace repositories](./configure-recipe-marketplace-repositories.md). To avoid re-fetching the same POMs on every resolution, the Connector caches them.

By default the cache lives in memory. For larger deployments — especially when running multiple Connector replicas — you can switch to a shared Redis cache so that POM lookups are reused across replicas.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                       | Required                                  | Default | Description                                                                                       |
|-----------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_TYPE`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                   | 60      | How long entries should live in the POM cache.                                                    |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                            |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                   | 0       | The Redis DB index.                                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                         | Required                                  | Default | Description                                                                                       |
|-------------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `--moderne.connector.recipe.pomCache.type`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `--moderne.connector.recipe.pomCache.entryTtlMinutes` | `false`                                   | 60      | How long entries should live in the POM cache.                                                    |
| `--moderne.connector.recipe.pomCache.redis.host`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `--moderne.connector.recipe.pomCache.redis.port`      | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                            |
| `--moderne.connector.recipe.pomCache.redis.username`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                        |
| `--moderne.connector.recipe.pomCache.redis.password`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                      |
| `--moderne.connector.recipe.pomCache.redis.ssl`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `--moderne.connector.recipe.pomCache.redis.database`  | `false`                                   | 0       | The Redis DB index.                                                                               |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
# ... Additional arguments
```
</TabItem>
</Tabs>
