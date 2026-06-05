---
sidebar_label: SaaS v2 property mapping
description: A full property-by-property reference mapping every Moderne Agent (v1) configuration property to its Moderne Connector (v2) equivalent.
---

# Agent to Connector property mapping

This reference lists every Moderne Agent (v1) property and its Moderne Connector (v2) equivalent. Properties with no v2 equivalent are called out as **Removed** with a short note.

Most customers will not need to consult this table directly — the Connector ships with an [auto-migration tool](./saas-v2-migration.md#migration-aid) that converts an existing `moderne.agent.*` config into the canonical `moderne.connector.*` form on startup. Use this reference to spot-check the auto-migrated output, to debug a property that did not behave as expected, or to look up a single mapping by hand.

For the broader migration walkthrough, see [Migrating to SaaS v2](./saas-v2-migration.md).

## Core connection

| Agent                                                                         | Connector                                                                           |
|:------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|
| `moderne.agent.token=...`                                                     | `moderne.connector.token=...`                                                       |
| `moderne.agent.api-gateway-rsocket-uri=https://api.TENANT.moderne.io/rsocket` | `moderne.connector.api-gateway-rsocket-uri=https://api.TENANT.moderne.io/connector` |
| `moderne.agent.nickname=...`                                                  | `moderne.connector.nickname=...`                                                    |
| `moderne.agent.crypto.symmetric-key=...`                                      | `moderne.connector.crypto.symmetric-key=...`                                        |
| `moderne.agent.api-gateway.proxy.host=...`                                    | `moderne.connector.api-gateway.proxy.host=...`                                      |
| `moderne.agent.api-gateway.proxy.port=...`                                    | `moderne.connector.api-gateway.proxy.port=...`                                      |

## Removed (no replacement)

| Agent property                                           | Notes                                                                                                                                                                                                   |
|:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.agent.api-gateway.bearer-token=...`             | Gateway auth now uses the rsocket URI credentials.                                                                                                                                                      |
| `moderne.agent.download-parallelism=...`                 | Now per-source `moderne.organization.sources.<type>[M].poll.{artifactory,maven}[N].download-parallelism`, plus global cap `moderne.connector.organization.download-parallelism`.                        |
| `moderne.agent.artifact-index-interval-seconds=...`      | Now per-source `moderne.organization.sources.<type>[M].poll.{artifactory,maven}[N].interval` (ISO-8601 `Duration` like `PT10M`). A post-processor auto-fans the legacy global value out to each source. |
| `moderne.agent.organization.dev-center=...`              | Replaced by DevCenter recipes.                                                                                                                                                                          |
| `moderne.agent.organization.update-interval-seconds=...` | Cadence is per-source now.                                                                                                                                                                              |
| `moderne.agent.visualization.use-only-configured=...`    | Feature removed.                                                                                                                                                                                        |
| `moderne.agent.recipe.use-only-configured=...`           | Feature removed. All configured repositories are always used. Only if no repositories are configured do we use publicly-available repositories.                                                         |
| `moderne.agent.admin.block-admin-data-table-access=...`  | Feature removed.                                                                                                                                                                                        |
| `moderne.agent.nuget[N].*`                               | Replaced by `moderne.recipe.marketplace.repositories.nuget[N]`.                                                                                                                                         |

## Organization sources (`repos.csv`)

| Agent                                                             | Connector                                                                                                                                                                                                            |
|:------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.agent.organization.repos-csv=https://internal/repos.csv` | `moderne.organization.sources.http[0].uri=https://internal/repos.csv` or `moderne.organization.sources.file[0].path=/var/moderne/repos.csv` or `moderne.organization.sources.s3[0].uri=s3://my-bucket/repos-lock.csv` |
| `moderne.agent.organization.service.url=...`                      | There is currently no support for an organization service.                                                                                                                                                           |
| `moderne.agent.s3[N].bucket-uri=s3://bucket/prefix`               | `moderne.organization.sources.s3[N].uri=s3://bucket/prefix/repos-lock.csv` (post-processor appends `/repos-lock.csv` automatically)                                                                                  |
| `moderne.agent.s3[N].region=...`                                  | `moderne.organization.sources.s3[N].region=...`                                                                                                                                                                      |
| `moderne.agent.s3[N].endpoint-url=...`                            | `moderne.organization.sources.s3[N].endpoint-url=...`                                                                                                                                                                |
| `moderne.agent.s3[N].access-key=...`                              | `moderne.organization.sources.s3[N].access-key=...`                                                                                                                                                                  |
| `moderne.agent.s3[N].secret-key=...`                              | `moderne.organization.sources.s3[N].secret-key=...`                                                                                                                                                                  |
| `moderne.agent.s3[N].profile=...`                                 | `moderne.organization.sources.s3[N].profile=...`                                                                                                                                                                     |
| `moderne.agent.s3[N].skip-ssl=false`                              | `moderne.organization.sources.s3[N].skip-ssl=false`                                                                                                                                                                  |

## Artifactory LST polling

`moderne.agent.artifactory[*]` causes a hard fail at startup. Each entry must be attached to the specific organization source whose `repos.csv` file it enriches. `<type>` is `http`, `s3`, or `file`.

| Agent                                                                         | Connector                                                                                                   |
|:------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|
| `moderne.agent.artifactory[N].url=...`                                        | `moderne.organization.sources.<type>[M].poll.artifactory[N].uri=...`                                        |
| `moderne.agent.artifactory[N].username=...`                                   | `moderne.organization.sources.<type>[M].poll.artifactory[N].username=...`                                   |
| `moderne.agent.artifactory[N].password=...`                                   | `moderne.organization.sources.<type>[M].poll.artifactory[N].password=...`                                   |
| `moderne.agent.artifactory[N].bearer-token=...`                               | `moderne.organization.sources.<type>[M].poll.artifactory[N].bearer-token=...`                               |
| `moderne.agent.artifactory[N].proxy.host=...`                                 | `moderne.organization.sources.<type>[M].poll.artifactory[N].proxy.host=...`                                 |
| `moderne.agent.artifactory[N].proxy.port=...`                                 | `moderne.organization.sources.<type>[M].poll.artifactory[N].proxy.port=...`                                 |
| `moderne.agent.artifactory[N].ast-query-filters[K]='"repo":{"$match":"..."}'` | `moderne.organization.sources.<type>[M].poll.artifactory[N].lst-query-filters[K]='"repo":{"$match":"..."}'` |
| `moderne.agent.artifactory[N].skip-ssl=false`                                 | `moderne.organization.sources.<type>[M].poll.artifactory[N].skip-ssl=false`                                 |
| `moderne.agent.artifactory[N].skip-validate-connectivity=false`               | `moderne.organization.sources.<type>[M].poll.artifactory[N].skip-validate-connectivity=false`               |
| `moderne.agent.artifactory[N].connect-timeout=PT30S`                          | `moderne.organization.sources.<type>[M].poll.artifactory[N].connect-timeout=PT30S`                          |
| `moderne.agent.artifactory[N].read-timeout=PT60S`                             | `moderne.organization.sources.<type>[M].poll.artifactory[N].read-timeout=PT60S`                             |
| (n/a — global on Agent)                                                       | `moderne.organization.sources.<type>[M].poll.artifactory[N].interval=PT10M`                                 |
| (n/a — global on Agent)                                                       | `moderne.organization.sources.<type>[M].poll.artifactory[N].download-parallelism=4`                         |

## Maven LST polling

Same per-source rule as Artifactory.

| Agent                                                               | Connector                                                                                         |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|
| `moderne.agent.maven[N].url=...`                                    | `moderne.organization.sources.<type>[M].poll.maven[N].uri=...`                                    |
| `moderne.agent.maven[N].username=...`                               | `moderne.organization.sources.<type>[M].poll.maven[N].username=...`                               |
| `moderne.agent.maven[N].password=...`                               | `moderne.organization.sources.<type>[M].poll.maven[N].password=...`                               |
| `moderne.agent.maven[N].proxy.host=...`                             | `moderne.organization.sources.<type>[M].poll.maven[N].proxy.host=...`                             |
| `moderne.agent.maven[N].proxy.port=...`                             | `moderne.organization.sources.<type>[M].poll.maven[N].proxy.port=...`                             |
| `moderne.agent.maven[N].local-repository=/home/app/.moderne-custom` | `moderne.organization.sources.<type>[M].poll.maven[N].local-repository=/home/app/.moderne-custom` |
| `moderne.agent.maven[N].skip-ssl=false`                             | `moderne.organization.sources.<type>[M].poll.maven[N].skip-ssl=false`                             |
| `moderne.agent.maven[N].skip-validate-connectivity=false`           | `moderne.organization.sources.<type>[M].poll.maven[N].skip-validate-connectivity=false`           |
| `moderne.agent.maven[N].releases=true`                              | `moderne.organization.sources.<type>[M].poll.maven[N].releases=true`                              |
| `moderne.agent.maven[N].snapshots=true`                             | `moderne.organization.sources.<type>[M].poll.maven[N].snapshots=true`                             |
| `moderne.agent.maven[N].connect-timeout=PT30S`                      | `moderne.organization.sources.<type>[M].poll.maven[N].connect-timeout=PT30S`                      |
| `moderne.agent.maven[N].read-timeout=PT60S`                         | `moderne.organization.sources.<type>[M].poll.maven[N].read-timeout=PT60S`                         |
| `moderne.agent.maven[N].alternate-urls[K]=...`                      | **Removed.** Add another `moderne.organization.sources.<type>[M].poll.maven[N]` entry.            |
| `moderne.agent.maven[N].ast-source=true`                            | **Removed.** Polling presence is the signal — anything under `poll.maven[*]` is an LST source.    |
| `moderne.agent.maven[N].recipe-source=true`                         | **Removed.** Recipe-artifact repos go under `moderne.recipe.marketplace.repositories.maven[*]`.   |
| (n/a — global on Agent)                                             | `moderne.organization.sources.<type>[M].poll.maven[N].interval=PT10M`                             |
| (n/a — global on Agent)                                             | `moderne.organization.sources.<type>[M].poll.maven[N].download-parallelism=4`                     |

## SCM — GitHub

| Agent                                                       | Connector                                                    |
|:------------------------------------------------------------|:-------------------------------------------------------------|
| `moderne.agent.github[N].url=https://github.com`            | `moderne.scm.github[N].uri=https://github.com`               |
| `moderne.agent.github[N].oauth.client-id=...`               | `moderne.scm.github[N].oauth.client-id=...`                  |
| `moderne.agent.github[N].oauth.client-secret=...`           | `moderne.scm.github[N].oauth.client-secret=...`              |
| `moderne.agent.github[N].oauth.include-private-repos=false` | `moderne.scm.github[N].oauth.include-private-repos=false`    |
| `moderne.agent.github[N].proxy.host=...`                    | `moderne.scm.github[N].proxy.host=...`                       |
| `moderne.agent.github[N].proxy.port=...`                    | `moderne.scm.github[N].proxy.port=...`                       |
| `moderne.agent.github[N].skip-ssl=false`                    | `moderne.scm.github[N].skip-ssl=false`                       |
| `moderne.agent.github[N].skip-validate-connectivity=false`  | `moderne.scm.github[N].skip-validate-connectivity=false`     |
| `moderne.agent.github[N].allowable-organizations[M]=...`    | `moderne.scm.github[N].allowable-organizations[M]=...`       |
| `moderne.agent.github[N].alternate-urls[M]=...`             | **Removed.** Add another `moderne.scm.github[N]` entry.      |
| `moderne.agent.github[N].ssh.private-key=...`               | **Removed.** SSH cloning is no longer supported in the SaaS. |
| `moderne.agent.github[N].ssh.passphrase=...`                | **Removed.**                                                 |
| `moderne.agent.github[N].ssh.ssh-file-name=...`             | **Removed.**                                                 |
| `moderne.agent.github[N].ssh.user=...`                      | **Removed.**                                                 |
| `moderne.agent.github[N].ssh.port=...`                      | **Removed.**                                                 |

## SCM — GitLab

| Agent                                                      | Connector                                                |
|:-----------------------------------------------------------|:---------------------------------------------------------|
| `moderne.agent.gitlab[N].url=https://gitlab.example.com`   | `moderne.scm.gitlab[N].uri=https://gitlab.example.com`   |
| `moderne.agent.gitlab[N].oauth.client-id=...`              | `moderne.scm.gitlab[N].oauth.client-id=...`              |
| `moderne.agent.gitlab[N].oauth.client-secret=...`          | `moderne.scm.gitlab[N].oauth.client-secret=...`          |
| `moderne.agent.gitlab[N].proxy.host=...`                   | `moderne.scm.gitlab[N].proxy.host=...`                   |
| `moderne.agent.gitlab[N].proxy.port=...`                   | `moderne.scm.gitlab[N].proxy.port=...`                   |
| `moderne.agent.gitlab[N].skip-ssl=false`                   | `moderne.scm.gitlab[N].skip-ssl=false`                   |
| `moderne.agent.gitlab[N].skip-validate-connectivity=false` | `moderne.scm.gitlab[N].skip-validate-connectivity=false` |
| `moderne.agent.gitlab[N].alternate-urls[M]=...`            | **Removed.**                                             |
| `moderne.agent.gitlab[N].ssh.*`                            | **Removed.**                                             |

## SCM — Bitbucket Data Center

`moderne.agent.bitbucket` migrates to `moderne.scm.bitbucket-datacenter`.

| Agent                                                          | Connector                                                               |
|:---------------------------------------------------------------|:------------------------------------------------------------------------|
| `moderne.agent.bitbucket[N].url=https://bitbucket.example.com` | `moderne.scm.bitbucket-datacenter[N].uri=https://bitbucket.example.com` |
| `moderne.agent.bitbucket[N].private-key=...` (OAuth 1.0)       | `moderne.scm.bitbucket-datacenter[N].private-key=...`                   |
| `moderne.agent.bitbucket[N].oauth.key=...` (OAuth 2.0)         | `moderne.scm.bitbucket-datacenter[N].oauth.key=...`                     |
| `moderne.agent.bitbucket[N].oauth.secret=...`                  | `moderne.scm.bitbucket-datacenter[N].oauth.secret=...`                  |
| `moderne.agent.bitbucket[N].proxy.host=...`                    | `moderne.scm.bitbucket-datacenter[N].proxy.host=...`                    |
| `moderne.agent.bitbucket[N].proxy.port=...`                    | `moderne.scm.bitbucket-datacenter[N].proxy.port=...`                    |
| `moderne.agent.bitbucket[N].skip-ssl=false`                    | `moderne.scm.bitbucket-datacenter[N].skip-ssl=false`                    |
| `moderne.agent.bitbucket[N].skip-validate-connectivity=false`  | `moderne.scm.bitbucket-datacenter[N].skip-validate-connectivity=false`  |
| `moderne.agent.bitbucket[N].alternate-urls[M]=...`             | **Removed.**                                                            |
| `moderne.agent.bitbucket[N].ssh.*`                             | **Removed.**                                                            |
| `moderne.agent.bitbucket[N].connect-timeout=PT30S`             | **Removed.**                                                            |
| `moderne.agent.bitbucket[N].read-timeout=PT60S`                | **Removed.**                                                            |

## SCM — Bitbucket Cloud (singleton)

Base URL is hardcoded to `https://bitbucket.org` in both — not configurable.

| Agent                                                            | Connector                                                      |
|:-----------------------------------------------------------------|:---------------------------------------------------------------|
| `moderne.agent.bitbucket-cloud.oauth.key=...`                    | `moderne.scm.bitbucket-cloud.oauth.key=...`                    |
| `moderne.agent.bitbucket-cloud.oauth.secret=...`                 | `moderne.scm.bitbucket-cloud.oauth.secret=...`                 |
| `moderne.agent.bitbucket-cloud.proxy.host=...`                   | `moderne.scm.bitbucket-cloud.proxy.host=...`                   |
| `moderne.agent.bitbucket-cloud.proxy.port=...`                   | `moderne.scm.bitbucket-cloud.proxy.port=...`                   |
| `moderne.agent.bitbucket-cloud.skip-validate-connectivity=false` | `moderne.scm.bitbucket-cloud.skip-validate-connectivity=false` |
| `moderne.agent.bitbucket-cloud.alternate-urls[M]=...`            | **Removed.**                                                   |

## SCM — Azure DevOps

`moderne.agent.azure-dev-ops` migrates to `moderne.scm.azure-devops`. Base URL is hardcoded to `https://dev.azure.com` in both.

| Agent                                                             | Connector                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------|
| `moderne.agent.azure-dev-ops[N].oauth.client-id=...`              | `moderne.scm.azure-devops[N].oauth.client-id=...`              |
| `moderne.agent.azure-dev-ops[N].oauth.client-secret=...`          | `moderne.scm.azure-devops[N].oauth.client-secret=...`          |
| `moderne.agent.azure-dev-ops[N].oauth.tenant-id=...`              | `moderne.scm.azure-devops[N].oauth.tenant-id=...`              |
| `moderne.agent.azure-dev-ops[N].proxy.host=...`                   | `moderne.scm.azure-devops[N].proxy.host=...`                   |
| `moderne.agent.azure-dev-ops[N].proxy.port=...`                   | `moderne.scm.azure-devops[N].proxy.port=...`                   |
| `moderne.agent.azure-dev-ops[N].skip-validate-connectivity=false` | `moderne.scm.azure-devops[N].skip-validate-connectivity=false` |
| `moderne.agent.azure-dev-ops[N].alternate-urls[M]=...`            | **Removed.**                                                   |
| `moderne.agent.azure-dev-ops[N].ssh.*`                            | **Removed.**                                                   |

## Default commit options

| Agent                                         | Connector                                   |
|:----------------------------------------------|:--------------------------------------------|
| `moderne.agent.default-commit-options[N]=...` | `moderne.scm.default-commit-options[N]=...` |

## LLM → Moddy

`provider` becomes the discriminator (consumed, not emitted). `OPEN_AI` → `openai`, `ANTHROPIC` → `anthropic`, `GEMINI` → `gemini`, `MISTRAL` → `mistral`. `admin-only` stays top-level; everything else is provider-scoped, so multiple providers can be configured at once.

| Agent                                                | Connector                                               |
|:-----------------------------------------------------|:--------------------------------------------------------|
| `moderne.agent.llm.provider=OPEN_AI`                 | (discriminator — not emitted)                           |
| `moderne.agent.llm.url=https://api.openai.com/v1`    | `moderne.moddy.openai.uri=https://api.openai.com/v1`    |
| `moderne.agent.llm.api-key=...`                      | `moderne.moddy.openai.api-key=...`                      |
| `moderne.agent.llm.model=...`                        | `moderne.moddy.openai.model=...`                        |
| `moderne.agent.llm.proxy.host=...`                   | `moderne.moddy.openai.proxy.host=...`                   |
| `moderne.agent.llm.proxy.port=...`                   | `moderne.moddy.openai.proxy.port=...`                   |
| `moderne.agent.llm.skip-ssl=false`                   | `moderne.moddy.openai.skip-ssl=false`                   |
| `moderne.agent.llm.skip-validate-connectivity=false` | `moderne.moddy.openai.skip-validate-connectivity=false` |
| `moderne.agent.llm.admin-only=true`                  | `moderne.moddy.admin-only=true`                         |

## Recipe marketplace — PyPI

| Agent                                                    | Connector                                                                          |
|:---------------------------------------------------------|:-----------------------------------------------------------------------------------|
| `moderne.agent.pypi[N].url=...`                          | `moderne.recipe.marketplace.repositories.pypi[N].uri=...`                          |
| `moderne.agent.pypi[N].username=...`                     | `moderne.recipe.marketplace.repositories.pypi[N].username=...`                     |
| `moderne.agent.pypi[N].password=...`                     | `moderne.recipe.marketplace.repositories.pypi[N].password=...`                     |
| `moderne.agent.pypi[N].proxy.host=...`                   | `moderne.recipe.marketplace.repositories.pypi[N].proxy.host=...`                   |
| `moderne.agent.pypi[N].proxy.port=...`                   | `moderne.recipe.marketplace.repositories.pypi[N].proxy.port=...`                   |
| `moderne.agent.pypi[N].skip-ssl=false`                   | `moderne.recipe.marketplace.repositories.pypi[N].skip-ssl=false`                   |
| `moderne.agent.pypi[N].skip-validate-connectivity=false` | `moderne.recipe.marketplace.repositories.pypi[N].skip-validate-connectivity=false` |
| `moderne.agent.pypi[N].connect-timeout=PT30S`            | `moderne.recipe.marketplace.repositories.pypi[N].connect-timeout=PT30S`            |
| `moderne.agent.pypi[N].read-timeout=PT60S`               | `moderne.recipe.marketplace.repositories.pypi[N].read-timeout=PT60S`               |

## Recipe / POM cache

| Agent                                                                       | Connector                                                                                        |
|:----------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
| `moderne.agent.recipe.pom-cache.type=REDIS`                                 | `moderne.connector.recipe.pom-cache.type=REDIS`                                                  |
| `moderne.agent.recipe.pom-cache.redis.host=...`                             | `moderne.connector.recipe.pom-cache.redis.host=...`                                              |
| `moderne.agent.recipe.pom-cache.redis.port=6379`                            | `moderne.connector.recipe.pom-cache.redis.port=6379`                                             |
| `moderne.agent.recipe.pom-cache.redis.username=...`                         | `moderne.connector.recipe.pom-cache.redis.username=...`                                          |
| `moderne.agent.recipe.pom-cache.redis.password=...`                         | `moderne.connector.recipe.pom-cache.redis.password=...`                                          |
| `moderne.agent.recipe.pom-cache.redis.ssl=false`                            | `moderne.connector.recipe.pom-cache.redis.ssl=false`                                             |
| `moderne.agent.recipe.pom-cache.redis.database=0`                           | `moderne.connector.recipe.pom-cache.redis.database=0`                                            |
| `moderne.agent.recipe.pom-cache.pom-ttl=PT24H`                              | `moderne.connector.recipe.pom-cache.pom-ttl=PT24H`                                               |
| `moderne.agent.recipe.pom-cache.metadata-ttl=PT1H`                          | `moderne.connector.recipe.pom-cache.metadata-ttl=PT1H`                                           |
| `moderne.agent.recipe.pom-cache.entry-ttl-minutes=60` (deprecated on Agent) | `moderne.connector.recipe.pom-cache.entry-ttl-minutes=60` (still accepted, but prefer `pom-ttl`) |

## HTTP tools

| Agent                                                         | Connector                                                         |
|:--------------------------------------------------------------|:------------------------------------------------------------------|
| `moderne.agent.http-tool[N].url=...`                          | `moderne.connector.http-tool[N].uri=...`                          |
| `moderne.agent.http-tool[N].username=...`                     | `moderne.connector.http-tool[N].username=...`                     |
| `moderne.agent.http-tool[N].password=...`                     | `moderne.connector.http-tool[N].password=...`                     |
| `moderne.agent.http-tool[N].bearer-token=...`                 | `moderne.connector.http-tool[N].bearer-token=...`                 |
| `moderne.agent.http-tool[N].proxy.host=...`                   | `moderne.connector.http-tool[N].proxy.host=...`                   |
| `moderne.agent.http-tool[N].proxy.port=...`                   | `moderne.connector.http-tool[N].proxy.port=...`                   |
| `moderne.agent.http-tool[N].skip-ssl=false`                   | `moderne.connector.http-tool[N].skip-ssl=false`                   |
| `moderne.agent.http-tool[N].skip-validate-connectivity=false` | `moderne.connector.http-tool[N].skip-validate-connectivity=false` |
| `moderne.agent.http-tool[N].connect-timeout=PT30S`            | `moderne.connector.http-tool[N].connect-timeout=PT30S`            |
| `moderne.agent.http-tool[N].read-timeout=PT60S`               | `moderne.connector.http-tool[N].read-timeout=PT60S`               |

## UI

| Agent                                                        | Connector                                              |
|:-------------------------------------------------------------|:-------------------------------------------------------|
| `moderne.agent.ui.more-help[N].label=Docs`                   | `moderne.ui.more-help[N].label=Docs`                   |
| `moderne.agent.ui.more-help[N].url=https://docs.example.com` | `moderne.ui.more-help[N].uri=https://docs.example.com` |

## CLI download instructions

| Agent                                                                 | Connector                                                          |
|:----------------------------------------------------------------------|:-------------------------------------------------------------------|
| `moderne.agent.cli.download-instructions.label=Internal CLI`          | `moderne.ui.cli-download-instructions.label=Internal CLI`          |
| `moderne.agent.cli.download-instructions.url=https://cli.example.com` | `moderne.ui.cli-download-instructions.uri=https://cli.example.com` |

## Personal access tokens

| Agent                                                     | Connector                                                |
|:----------------------------------------------------------|:---------------------------------------------------------|
| `moderne.agent.personal-access-tokens.max-expiry-days=90` | `moderne.authorization.access-tokens.max-expiry-days=90` |
