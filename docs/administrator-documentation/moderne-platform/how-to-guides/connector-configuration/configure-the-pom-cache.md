---
title: Configure the POM cache
sidebar_label: POM cache configuration
description: How to configure the Moderne Connector's POM cache for Maven repository lookups.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure the POM cache

Moderne Platform services do not talk to your Maven repositories directly. When a service needs a file from a repository that is only reachable inside your network, the request is tunneled through the Moderne Connector, which adds the credentials you configured and makes the call on the service's behalf. Two things drive most of that traffic:

* **Recipe loading.** Before a recipe can be installed, the Platform walks the recipe artifact's POM dependency graph against your [recipe marketplace repositories](./configure-recipe-marketplace-repositories.md) to assemble its classpath.
* **Recipe execution.** Recipes that upgrade dependencies read `maven-metadata.xml` to determine which versions your repositories actually serve, so a run over many repositories requests the same metadata many times.

Both paths fetch the same small set of files repeatedly, so the Connector can cache them and serve repeat lookups locally instead of calling your artifact repository again. Only `.pom` files and `maven-metadata.xml` are cached — JARs and other artifacts always stream straight through.

Caching is disabled by default. Set the cache type to `IN_MEMORY` to cache within a single Connector instance, or to `REDIS` to share one cache across multiple Connector replicas. If the Connector cannot initialize the Redis connection, it logs the failure and runs without a cache.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                       | Required                                  | Default | Description                                                                                                                                                         |
|-----------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_TYPE`            | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. If unset, no caching is performed.                                |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_POMTTL`          | `false`                                   | `60m`   | How long cached `.pom` files should live in the POM cache. Specified as a duration (e.g., `60m`, `2h`).                                                             |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_METADATATTL`     | `false`                                   | `10m`   | How long cached `maven-metadata.xml` files should live in the POM cache. This defaults lower than `pom-ttl` because metadata changes as new versions are published. |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                   |         | **Deprecated** -- use `moderne.connector.recipe.pom-cache.pom-ttl` instead. If set, this value in minutes is used as the `.pom` TTL.                                |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                                                                                      |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                                                                                              |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                   |         | The username needed to authenticate to the Redis instance.                                                                                                          |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                   |         | The password needed to authenticate with the Redis instance.                                                                                                        |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.                                                                                |
| `MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                   | 0       | The Redis DB index.                                                                                                                                                 |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_RECIPE_POMCACHE_TYPE=REDIS \
-e MODERNE_CONNECTOR_RECIPE_POMCACHE_REDIS_HOST=localhost \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                            | Required                                  | Default | Description                                                                                                                                                         |
|----------------------------------------------------------|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.connector.recipe.pom-cache.type`              | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. If unset, no caching is performed.                                |
| `--moderne.connector.recipe.pom-cache.pom-ttl`           | `false`                                   | `60m`   | How long cached `.pom` files should live in the POM cache. Specified as a duration (e.g., `60m`, `2h`).                                                             |
| `--moderne.connector.recipe.pom-cache.metadata-ttl`      | `false`                                   | `10m`   | How long cached `maven-metadata.xml` files should live in the POM cache. This defaults lower than `pom-ttl` because metadata changes as new versions are published. |
| `--moderne.connector.recipe.pom-cache.entry-ttl-minutes` | `false`                                   |         | **Deprecated** -- use `moderne.connector.recipe.pom-cache.pom-ttl` instead. If set, this value in minutes is used as the `.pom` TTL.                                |
| `--moderne.connector.recipe.pom-cache.redis.host`        | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                                                                                      |
| `--moderne.connector.recipe.pom-cache.redis.port`        | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                                                                                              |
| `--moderne.connector.recipe.pom-cache.redis.username`    | `false`                                   |         | The username needed to authenticate to the Redis instance.                                                                                                          |
| `--moderne.connector.recipe.pom-cache.redis.password`    | `false`                                   |         | The password needed to authenticate with the Redis instance.                                                                                                        |
| `--moderne.connector.recipe.pom-cache.redis.ssl`         | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.                                                                                |
| `--moderne.connector.recipe.pom-cache.redis.database`    | `false`                                   | 0       | The Redis DB index.                                                                                                                                                 |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.recipe.pom-cache.type=REDIS \
--moderne.connector.recipe.pom-cache.redis.host=localhost \
# ... Additional arguments
```
</TabItem>

</Tabs>
