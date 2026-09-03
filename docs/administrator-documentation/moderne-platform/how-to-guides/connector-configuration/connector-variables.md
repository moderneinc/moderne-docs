---
title: All Connector configuration variables
sidebar_label: All Connector variables
description: A reference manual that contains all Connector configuration variables.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# All Connector configuration variables

:::info
As of SaaS v2, Connector configuration uses new canonical property names documented below. The legacy `moderne.agent.*` property names (and their `MODERNE_AGENT_*` environment variable equivalents) are still accepted and automatically mapped to their canonical equivalents at startup. New deployments should use the canonical names shown here.
:::

This document includes all of the variables you can configure the Moderne Connector to run with. Your configuration will only use some of these.

## Core variables

Properties are listed by their canonical name. For how to supply each one as an environment variable or a JAR argument, please see [Property naming](./connector-property-naming.md).

| Property                                              | Required | Default                | Description                                                                                                                                                                                                      |
|-------------------------------------------------------|----------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.connector.api-gateway-rsocket-uri`           | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                                                                                 |
| `moderne.connector.crypto.symmetric-key`              | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                                                                       |
| `moderne.connector.nickname`                          | `true`   |                        | A name used to identify your Connector in the SaaS Connector dashboard UI.                                                                                                                                       |
| `moderne.connector.token`                             | `true`   |                        | The Moderne SaaS Connector connection token, provided by Moderne.                                                                                                                                                |
| `moderne.scm.default-commit-options[{index}]`         | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`, `None`. Use `None` on its own to disable committing entirely. |
| `moderne.authorization.access-tokens.max-expiry-days` | `false`  |                        | The maximum number of days a personal access token can be configured to expire in. When set, users cannot create tokens with an expiry date beyond this limit.                                                   |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN=yourToken \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
--moderne.connector.api-gateway-rsocket-uri=https://api.tenant.moderne.io/connector \
--moderne.connector.crypto.symmetric-key=yourSymmetricKey \
--moderne.connector.nickname=prod-1 \
--moderne.connector.token=yourToken \
--moderne.scm.default-commit-options[0]=PullRequest \
--moderne.scm.default-commit-options[1]=ForkAndPullRequest \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Azure variables

| Property                                                | Required | Default | Description                                                                                                                       |
|---------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| `moderne.scm.azure-devops[{index}].oauth.client-id`     | `true`   |         | The client ID of the registered OAuth app.                                                                                        |
| `moderne.scm.azure-devops[{index}].oauth.client-secret` | `true`   |         | The client secret of the registered OAuth app.                                                                                    |
| `moderne.scm.azure-devops[{index}].oauth.tenant-id`     | `true`   |         | The Azure tenant ID of the registered OAuth app.                                                                                  |
| `moderne.scm.azure-devops[{index}].proxy.host`          | `false`  |         | The hostname of a proxy server to use for connections to this Azure DevOps instance. If specified, `proxy.port` must also be set. |
| `moderne.scm.azure-devops[{index}].proxy.port`          | `false`  |         | The port of the proxy server to use for connections to this Azure DevOps instance. If specified, `proxy.host` must also be set.   |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_CLIENTID=4affd674-286d-423f-b643-7ffe4dec0f53 \
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_AZUREDEVOPS_0_OAUTH_TENANTID=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.azure-devops[0].oauth.client-id=4affd674-286d-423f-b643-7ffe4dec0f53 \
--moderne.scm.azure-devops[0].oauth.client-secret=yourClientSecret \
--moderne.scm.azure-devops[0].oauth.tenant-id=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Bitbucket Cloud variables

| Property                                   | Required | Default | Description                                                                                                                          |
|--------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.scm.bitbucket-cloud.oauth.key`    | `true`   |         | The key specified in your Bitbucket OAuth consumer.                                                                                  |
| `moderne.scm.bitbucket-cloud.oauth.secret` | `true`   |         | The secret specified in your Bitbucket OAuth consumer.                                                                               |
| `moderne.scm.bitbucket-cloud.proxy.host`   | `false`  |         | The hostname of a proxy server to use for connections to this Bitbucket Cloud instance. If specified, `proxy.port` must also be set. |
| `moderne.scm.bitbucket-cloud.proxy.port`   | `false`  |         | The port of the proxy server to use for connections to this Bitbucket Cloud instance. If specified, `proxy.host` must also be set.   |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_BITBUCKETCLOUD_OAUTH_KEY=yourOAuthKey \
-e MODERNE_SCM_BITBUCKETCLOUD_OAUTH_SECRET=yourSecretKey \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.bitbucket-cloud.oauth.key=yourOAuthKey \
--moderne.scm.bitbucket-cloud.oauth.secret=yourSecretKey \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Bitbucket Data Center variables

:::info
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
:::

| Property                                                 | Required      | Default | Description                                                                                                                                                               |
|----------------------------------------------------------|---------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.scm.bitbucket-datacenter[{index}].uri`          | `true`        |         | The fully-qualified URI of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`.                                                                    |
| `moderne.scm.bitbucket-datacenter[{index}].private-key`  | `conditional` |         | (OAuth1.0a only) The private key you configured for this Bitbucket instance.                                                                                              |
| `moderne.scm.bitbucket-datacenter[{index}].oauth.key`    | `conditional` |         | (OAuth2 only) The client id for the Application Link that you configured for this Bitbucket instance.                                                                     |
| `moderne.scm.bitbucket-datacenter[{index}].oauth.secret` | `conditional` |         | (OAuth2 only) The client secret for the Application Link that you configured for this Bitbucket instance.                                                                 |
| `moderne.scm.bitbucket-datacenter[{index}].skip-ssl`     | `false`       | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `moderne.scm.bitbucket-datacenter[{index}].proxy.host`   | `false`       |         | The hostname of a proxy server to use for connections to this Bitbucket Data Center instance. If specified, `proxy.port` must also be set.                                |
| `moderne.scm.bitbucket-datacenter[{index}].proxy.port`   | `false`       |         | The port of the proxy server to use for connections to this Bitbucket Data Center instance. If specified, `proxy.host` must also be set.                                  |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_BITBUCKETDATACENTER_0_OAUTH_KEY=yourClientId \
-e MODERNE_SCM_BITBUCKETDATACENTER_0_OAUTH_SECRET=yourClientSecret \
-e MODERNE_SCM_BITBUCKETDATACENTER_0_URI=https://bitbucket.myorg.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.bitbucket-datacenter[0].oauth.key=yourClientId \
--moderne.scm.bitbucket-datacenter[0].oauth.secret=yourClientSecret \
--moderne.scm.bitbucket-datacenter[0].uri=https://bitbucket.myorg.com \
# ... Additional arguments
```
</TabItem>

</Tabs>

## GitHub variables

:::info
You can configure multiple GitHub OAuth apps by including multiple entries, each with a different `{index}`.
:::

| Property                                                       | Required | Default         | Description                                                                                                                                                                                                                      |
|----------------------------------------------------------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.scm.github[{index}].oauth.client-id`                  | `true`   |                 | The client id configured in GitHub.                                                                                                                                                                                              |
| `moderne.scm.github[{index}].oauth.client-secret`              | `true`   |                 | The client secret configured in GitHub.                                                                                                                                                                                          |
| `moderne.scm.github[{index}].uri`                              | `true`   |                 | The fully-qualified hostname of the running GitHub instance.                                                                                                                                                                     |
| `moderne.scm.github[{index}].skip-ssl`                         | `false`  | `false`         | Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                           |
| `moderne.scm.github[{index}].allowable-organizations[{index}]` | `false`  | See description | Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line. |
| `moderne.scm.github[{index}].oauth.include-private-repos`      | `false`  | See description | By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`.                                         |
| `moderne.scm.github[{index}].proxy.host`                       | `false`  |                 | The hostname of a proxy server to use for connections to this GitHub instance. If specified, `proxy.port` must also be set.                                                                                                      |
| `moderne.scm.github[{index}].proxy.port`                       | `false`  |                 | The port of the proxy server to use for connections to this GitHub instance. If specified, `proxy.host` must also be set.                                                                                                        |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLEORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLEORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.github[0].oauth.client-id=yourClientId \
--moderne.scm.github[0].oauth.client-secret=yourClientSecret \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowable-organizations[0]=moderne \
--moderne.scm.github[0].allowable-organizations[1]=openrewrite \
--moderne.scm.github[0].oauth.include-private-repos=true \
# ... Additional arguments
```
</TabItem>

</Tabs>

## GitLab variables

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

| Property                                          | Required | Default | Description                                                                                                                                                            |
|---------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.scm.gitlab[{index}].oauth.client-id`     | `true`   |         | The application id configured in GitLab.                                                                                                                               |
| `moderne.scm.gitlab[{index}].oauth.client-secret` | `true`   |         | The secret configured in GitLab.                                                                                                                                       |
| `moderne.scm.gitlab[{index}].uri`                 | `true`   |         | The fully-qualified hostname of your GitLab instance.                                                                                                                  |
| `moderne.scm.gitlab[{index}].skip-ssl`            | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `moderne.scm.gitlab[{index}].proxy.host`          | `false`  |         | The hostname of a proxy server to use for connections to this GitLab instance. If specified, `proxy.port` must also be set.                                            |
| `moderne.scm.gitlab[{index}].proxy.port`          | `false`  |         | The port of the proxy server to use for connections to this GitLab instance. If specified, `proxy.host` must also be set.                                              |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_SCM_GITLAB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_SCM_GITLAB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_SCM_GITLAB_0_URI=https://your-gitlab.com \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.scm.gitlab[0].oauth.client-id=yourClientId \
--moderne.scm.gitlab[0].oauth.client-secret=yourClientSecret \
--moderne.scm.gitlab[0].uri=https://your-gitlab.com \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Organization hierarchy variables

| Property                                                  | Required | Default | Description                                                                                                                                                                                                |
|-----------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.organization.sources.file[{index}].path`         | `false`  |         | The path to a local `repos.csv` file, relative to the Connector's permanent directory (`moderne.storage.permanent-dir`).                                                                                 |
| `moderne.organization.sources.http[{index}].uri`          | `false`  |         | The URL of an HTTP(S) endpoint serving your `repos.csv` file (e.g., `https://<internal-endpoint>/repos.csv`).                                                                                              |
| `moderne.organization.sources.http[{index}].username`     | `false`  |         | Username for basic auth against the HTTP endpoint. Mutually exclusive with `bearer-token`.                                                                                                                  |
| `moderne.organization.sources.http[{index}].password`     | `false`  |         | Password for basic auth against the HTTP endpoint. Mutually exclusive with `bearer-token`.                                                                                                                  |
| `moderne.organization.sources.http[{index}].bearer-token` | `false`  |         | Bearer token for the HTTP endpoint. Mutually exclusive with `username`/`password`.                                                                                                                         |
| `moderne.organization.sources.http[{index}].proxy.host`   | `false`  |         | The hostname of a proxy server to use for connections to the HTTP endpoint. If specified, `proxy.port` must also be set.                                                                                   |
| `moderne.organization.sources.http[{index}].proxy.port`   | `false`  |         | The port of the proxy server to use for connections to the HTTP endpoint. If specified, `proxy.host` must also be set.                                                                                     |
| `moderne.organization.sources.s3[{index}].uri`            | `false`  |         | The S3 URI of a CSV object (e.g., `s3://my-bucket/repos-lock.csv`). For the full set of S3 auth/region/endpoint arguments, please see [S3 organization source](./configure-a-connector-with-s3-access.md). |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example using a local file:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_FILE_0_PATH=repos.csv \
# ... Additional variables
```

**Example using an HTTP URL:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_URI=https://internal.example.com/repos.csv \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example using a local file:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.file[0].path=repos.csv \
# ... Additional arguments
```

**Example using an HTTP URL:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.http[0].uri=https://internal.example.com/repos.csv \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Organization sync variables

These variables control how often the Connector re-fetches each `repos.csv` source and the global concurrency for LST download, encryption, and upload operations. Both are optional.

| Property                                              | Required | Default                         | Description                                                                                                                                                             |
|-------------------------------------------------------|----------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.connector.organization.interval`             | `false`  | `10m`                           | How often the Connector re-fetches each source `repos.csv` and re-runs enrichment. Applies to both LOCK and POLLING modes. Specified as a duration (e.g., `10m`, `1h`). |
| `moderne.connector.organization.download-parallelism` | `false`  | `max(4, availableProcessors())` | Global cap on concurrent LST download, encrypt, and upload operations across all configured sources.                                                                    |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_ORGANIZATION_INTERVAL=5m \
-e MODERNE_CONNECTOR_ORGANIZATION_DOWNLOADPARALLELISM=8 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.organization.interval=5m \
--moderne.connector.organization.download-parallelism=8 \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Maven repository variables

You can configure multiple Maven repositories by including multiple entries, each with a different `{index}`.

| Property                                                                              | Required | Default            | Description                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------|----------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.organization.sources.http[0].poll.maven[{index}].uri`                        | `true`   |                    | The URI of your Maven repository.                                                                                                                                                                                                                                                                                                                    |
| `moderne.organization.sources.http[0].poll.maven[{index}].local-repository`           | `false`  | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the Connector is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. |
| `moderne.organization.sources.http[0].poll.maven[{index}].username`                   | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                                                                                                                                                                                                              |
| `moderne.organization.sources.http[0].poll.maven[{index}].password`                   | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                                                                                                                                                                                                              |
| `moderne.organization.sources.http[0].poll.maven[{index}].releases`                   | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                                                                                                                                                                                                            |
| `moderne.organization.sources.http[0].poll.maven[{index}].snapshots`                  | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                                                                                                                                                                                                           |
| `moderne.organization.sources.http[0].poll.maven[{index}].skip-ssl`                   | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                                                                                                                                          |
| `moderne.organization.sources.http[0].poll.maven[{index}].skip-validate-connectivity` | `false`  | `false`            | By default, on Connector startup, we will validate that we can connect to this Maven repository, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                                                                                                                                        |
| `moderne.organization.sources.http[0].poll.maven[{index}].proxy.host`                 | `false`  |                    | The hostname of a proxy server to use for connections to this Maven repository.                                                                                                                                                                                                                                                                      |
| `moderne.organization.sources.http[0].poll.maven[{index}].proxy.port`                 | `false`  |                    | The port of the proxy server to use for connections to this Maven repository.                                                                                                                                                                                                                                                                        |
| `moderne.organization.sources.http[0].poll.maven[{index}].connect-timeout`            | `false`  | `30s`              | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                                                                                                                             |
| `moderne.organization.sources.http[0].poll.maven[{index}].read-timeout`               | `false`  | `60s`              | Timeout for reading the response body from the Maven repository. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                                                                                                                        |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_MAVEN_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.http[0].poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.organization.sources.http[0].poll.maven[0].username=admin \
--moderne.organization.sources.http[0].poll.maven[0].password=password \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Artifactory repository variables

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

| Property                                                                                    | Required | Default | Description                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.organization.sources.http[0].poll.artifactory[{index}].uri`                        | `true`   |         | The URL of your Artifactory instance.                                                                                                                                                                                                                |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].username`                   | `false`  |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                            |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].password`                   | `false`  |         | The password used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                                                                               |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].bearer-token`               | `false`  |         | The bearer token (access token) used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used. If `bearer-token` is specified, username and password must not be provided. |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].lst-query-filters[{index}]` | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                                                                         |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].skip-ssl`                   | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the Connector to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                     |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].skip-validate-connectivity` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this Artifactory instance, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                                    |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].proxy.host`                 | `false`  |         | The hostname of a proxy server to use for connections to this Artifactory instance.                                                                                                                                                                  |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].proxy.port`                 | `false`  |         | The port of the proxy server to use for connections to this Artifactory instance.                                                                                                                                                                    |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].connect-timeout`            | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                             |
| `moderne.organization.sources.http[0].poll.artifactory[{index}].read-timeout`               | `false`  | `60s`   | Timeout for reading the response body from the Artifactory instance. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                    |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.http[0].poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.sources.http[0].poll.artifactory[0].username=admin \
--moderne.organization.sources.http[0].poll.artifactory[0].password=password \
--moderne.organization.sources.http[0].poll.artifactory[0].lst-query-filters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.organization.sources.http[0].poll.artifactory[0].lst-query-filters[1]='"repo":{"$eq":"example-maven"}' \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe marketplace Maven variables

Recipe marketplace repositories are configured under the `moderne.recipe.marketplace.repositories` namespace. You can configure multiple Maven repositories by including multiple entries, each with a different `{index}`.

| Property                                                            | Required | Default | Description                                                                                                                                                                 |
|---------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.maven[{index}].uri`        | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `moderne.recipe.marketplace.repositories.maven[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `moderne.recipe.marketplace.repositories.maven[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `moderne.recipe.marketplace.repositories.maven[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this repository.                                                                                                                    |
| `moderne.recipe.marketplace.repositories.maven[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this repository.                                                                                                                    |
| `moderne.recipe.marketplace.repositories.maven[{index}].skip-ssl`   | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `moderne.recipe.marketplace.repositories.maven[{index}].releases`   | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `moderne.recipe.marketplace.repositories.maven[{index}].snapshots`  | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.recipe.marketplace.repositories.maven[0].username=admin \
--moderne.recipe.marketplace.repositories.maven[0].password=password \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe marketplace NPM variables

NPM repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearer-token`), but not both at the same time. You can configure multiple NPM registries by including multiple entries, each with a different `{index}`.

| Property                                                            | Required | Default | Description                                                                                                                                                             |
|---------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.npm[{index}].uri`          | `true`   |         | The URL of your NPM registry.                                                                                                                                           |
| `moderne.recipe.marketplace.repositories.npm[{index}].username`     | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearer-token`.                                                                                          |
| `moderne.recipe.marketplace.repositories.npm[{index}].password`     | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearer-token`.                                                                                          |
| `moderne.recipe.marketplace.repositories.npm[{index}].bearer-token` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                                |
| `moderne.recipe.marketplace.repositories.npm[{index}].proxy.host`   | `false`  | `null`  | The host of an HTTP proxy used to reach this registry.                                                                                                                  |
| `moderne.recipe.marketplace.repositories.npm[{index}].proxy.port`   | `false`  | `null`  | The port of an HTTP proxy used to reach this registry.                                                                                                                  |
| `moderne.recipe.marketplace.repositories.npm[{index}].skip-ssl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NPM registry. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_URI=https://myartifactory.example.com/artifactory/api/npm/npm-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_BEARERTOKEN=... \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.npm[0].uri=https://myartifactory.example.com/artifactory/api/npm/npm-local \
--moderne.recipe.marketplace.repositories.npm[0].bearer-token=... \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe marketplace NuGet variables

NuGet repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearer-token`), but not both at the same time. You can configure multiple NuGet feeds by including multiple entries, each with a different `{index}`.

| Property                                                              | Required | Default | Description                                                                                                                                                           |
|-----------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.nuget[{index}].uri`          | `true`   |         | The URL of your NuGet feed.                                                                                                                                           |
| `moderne.recipe.marketplace.repositories.nuget[{index}].username`     | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearer-token`.                                                                                        |
| `moderne.recipe.marketplace.repositories.nuget[{index}].password`     | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearer-token`.                                                                                        |
| `moderne.recipe.marketplace.repositories.nuget[{index}].bearer-token` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                              |
| `moderne.recipe.marketplace.repositories.nuget[{index}].proxy.host`   | `false`  | `null`  | The host of an HTTP proxy used to reach this feed.                                                                                                                    |
| `moderne.recipe.marketplace.repositories.nuget[{index}].proxy.port`   | `false`  | `null`  | The port of an HTTP proxy used to reach this feed.                                                                                                                    |
| `moderne.recipe.marketplace.repositories.nuget[{index}].skip-ssl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NuGet feed. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_URI=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_BEARERTOKEN=... \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.nuget[0].uri=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
--moderne.recipe.marketplace.repositories.nuget[0].bearer-token=... \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe marketplace PyPI variables

You can configure multiple PyPI indexes by including multiple entries, each with a different `{index}`.

| Property                                                           | Required | Default | Description                                                                                                                                                           |
|--------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.pypi[{index}].uri`        | `true`   |         | The URL of your PyPI index.                                                                                                                                           |
| `moderne.recipe.marketplace.repositories.pypi[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                               |
| `moderne.recipe.marketplace.repositories.pypi[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                               |
| `moderne.recipe.marketplace.repositories.pypi[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this index.                                                                                                                   |
| `moderne.recipe.marketplace.repositories.pypi[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this index.                                                                                                                   |
| `moderne.recipe.marketplace.repositories.pypi[{index}].skip-ssl`   | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_URI=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.pypi[0].uri=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
--moderne.recipe.marketplace.repositories.pypi[0].username=admin \
--moderne.recipe.marketplace.repositories.pypi[0].password=password \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe marketplace Go variables

Go recipe modules are resolved through a Go module proxy. Go module proxies authenticate with basic auth only - there is no separate bearer-token field. Supply your credentials as `USERNAME` + `PASSWORD` (for Artifactory, use your username and identity token as the password). If your proxy authenticates with a token alone, put the token in `PASSWORD` and set `USERNAME` to any non-empty placeholder that your proxy ignores (for example, `__token__`). You can configure multiple Go module proxies by including multiple entries, each with a different `{index}`.

| Property                                                       | Required | Default | Description                                                                                                                                                                |
|----------------------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.go[{index}].uri`      | `true`   |         | The URL of your Go module proxy.                                                                                                                                           |
| `moderne.recipe.marketplace.repositories.go[{index}].username` | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                    |
| `moderne.recipe.marketplace.repositories.go[{index}].password` | `false`  | `null`  | The password used to resolve artifacts. For Artifactory, use your identity token as the password.                                                                          |
| `moderne.recipe.marketplace.repositories.go[{index}].skip-ssl` | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Go module proxy. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_URI=https://myartifactory.example.com/artifactory/api/go/go-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_PASSWORD=identityToken \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.go[0].uri=https://myartifactory.example.com/artifactory/api/go/go-local \
--moderne.recipe.marketplace.repositories.go[0].username=admin \
--moderne.recipe.marketplace.repositories.go[0].password=identityToken \
# ... Additional arguments
```
</TabItem>

</Tabs>

:::info[Go authenticates with basic auth, not native bearer tokens]
Go does not support native bearer authentication for dependency resolution, so a bearer or access token must be supplied as the `PASSWORD` (for Artifactory, the identity token) rather than as a bearer token. A `..._BEARERTOKEN` field (`MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_{index}_BEARERTOKEN` or `--moderne.recipe.marketplace.repositories.go[{index}].bearer-token`) may still bind, but it is ignored. Authenticate with `USERNAME`/`PASSWORD` as described above.
:::

## S3 bucket variables

You can configure multiple S3 buckets by including multiple entries, each with a different `{index}`.

| Property                                                | Required                                                 | Default | Description                                                                                                                |
|---------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| `moderne.organization.sources.s3[{index}].uri`          | `true`                                                   |         | The S3 bucket URI. Must start with `s3://` (e.g., `s3://my-bucket-name`).                                                  |
| `moderne.organization.sources.s3[{index}].endpoint-url` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3. |
| `moderne.organization.sources.s3[{index}].region`       | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`).                                                            |
| `moderne.organization.sources.s3[{index}].access-key`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                  |
| `moderne.organization.sources.s3[{index}].secret-key`   | `false` (Required if using access key)                   |         | The AWS secret key for authentication.                                                                                     |
| `moderne.organization.sources.s3[{index}].profile`      | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                           |
| `moderne.organization.sources.s3[{index}].skip-ssl`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                             |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-lst-bucket \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_REGION=us-east-1 \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_ACCESSKEY=AKIAIOSFODNN7EXAMPLE \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_SECRETKEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-lst-bucket \
--moderne.organization.sources.s3[0].region=us-east-1 \
--moderne.organization.sources.s3[0].access-key=AKIAIOSFODNN7EXAMPLE \
--moderne.organization.sources.s3[0].secret-key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Google Cloud Storage bucket variables

You can configure multiple Cloud Storage buckets by including multiple entries, each with a different `{index}`. For a full walkthrough, including the permissions the Connector needs, please see the [Google Cloud Storage organization source guide](./configure-a-connector-with-gcs-access.md).

| Property                                                     | Required                                                        | Default | Description                                                                                         |
|--------------------------------------------------------------|-----------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| `moderne.organization.sources.gcs[{index}].uri`              | `true`                                                          |         | The Cloud Storage URI of the CSV object (e.g., `gs://my-bucket/repos-lock.csv`).                    |
| `moderne.organization.sources.gcs[{index}].credentials-json` | `false` (Required if not using Application Default Credentials) |         | The contents of a service account key file.                                                         |
| `moderne.organization.sources.gcs[{index}].project`          | `false`                                                         |         | The project to bill requests to. Only needed for requester-pays buckets.                            |
| `moderne.organization.sources.gcs[{index}].endpoint-url`     | `false`                                                         |         | Overrides the default `storage.googleapis.com` endpoint (e.g., a Private Service Connect endpoint). |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_GCS_0_URI=gs://my-lst-bucket/repos-lock.csv \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.gcs[0].uri=gs://my-lst-bucket/repos-lock.csv \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Recipe POM cache variables

| Property                                               | Required                                  | Default | Description                                                                                                                                                        |
|--------------------------------------------------------|-------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.connector.recipe.pom-cache.type`              | `false`                                   |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. If unset, no caching is performed.                               |
| `moderne.connector.recipe.pom-cache.pom-ttl`           | `false`                                   | `60m`   | How long cached `.pom` files should live in the POM cache. Specified as a duration (e.g., `60m`, `2h`).                                                            |
| `moderne.connector.recipe.pom-cache.metadata-ttl`      | `false`                                   | `10m`   | How long cached `maven-metadata.xml` files should live in the POM cache. This defaults lower than `pom-ttl` because metadata changes as new versions are published. |
| `moderne.connector.recipe.pom-cache.entry-ttl-minutes` | `false`                                   |         | **Deprecated** -- use `moderne.connector.recipe.pom-cache.pom-ttl` instead. If set, this value in minutes is used as the `.pom` TTL.                              |
| `moderne.connector.recipe.pom-cache.redis.host`        | `true` (If the POM cache type is `REDIS`) |         | The URL of the Redis instance.                                                                                                                                     |
| `moderne.connector.recipe.pom-cache.redis.port`        | `true` (If the POM cache type is `REDIS`) | 6379    | The port number of the Redis instance.                                                                                                                             |
| `moderne.connector.recipe.pom-cache.redis.username`    | `false`                                   |         | The username needed to authenticate to the Redis instance.                                                                                                         |
| `moderne.connector.recipe.pom-cache.redis.password`    | `false`                                   |         | The password needed to authenticate with the Redis instance.                                                                                                       |
| `moderne.connector.recipe.pom-cache.redis.ssl`         | `false`                                   | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.                                                                               |
| `moderne.connector.recipe.pom-cache.redis.database`    | `false`                                   | 0       | The Redis DB index.                                                                                                                                                |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

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

## HTTP proxy variables

| Property                                   | Required | Default | Description                                 |
|--------------------------------------------|----------|---------|---------------------------------------------|
| `moderne.connector.api-gateway.proxy.host` | `false`  |         | Host (without scheme) for the proxy server. |
| `moderne.connector.api-gateway.proxy.port` | `false`  |         | Port for the proxy server.                  |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_APIGATEWAY_PROXY_HOST=proxy.mycompany.com \
-e MODERNE_CONNECTOR_APIGATEWAY_PROXY_PORT=8179 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.api-gateway.proxy.host=proxy.mycompany.com \
--moderne.connector.api-gateway.proxy.port=8179 \
# ... Additional arguments
```
</TabItem>

</Tabs>

## UI customization variables

| Property                                     | Required | Default | Description                                                                                                                                                                                                                |
|----------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.ui.more-help[0].label`              | `false`  | `null`  | Custom label for first link under the 'Need more help?' menu. If populated, the URI property must also be populated. Maximum of 3 help items supported.                                                                    |
| `moderne.ui.more-help[0].uri`                | `false`  | `null`  | The URI for the first custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `moderne.ui.more-help[1].label`              | `false`  | `null`  | Custom label for second link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                      |
| `moderne.ui.more-help[1].uri`                | `false`  | `null`  | The URI for the second custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                    |
| `moderne.ui.more-help[2].label`              | `false`  | `null`  | Custom label for third link under the 'Need more help?' menu. If populated, the URI property must also be populated.                                                                                                       |
| `moderne.ui.more-help[2].uri`                | `false`  | `null`  | The URI for the third custom help resource. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                     |
| `moderne.ui.cli-download-instructions.label` | `false`  | `null`  | CLI download instructions label to show in the platform UI. Overrides the default display of the CLI tools menu presented in the Moderne platform's user interface. If populated, the URI property must also be populated. |
| `moderne.ui.cli-download-instructions.uri`   | `false`  | `null`  | The URI of the instructions documentation. Must be a fully qualified URI that is accessible to users of the platform.                                                                                                      |
| `moderne.ui.login-text`                      | `false`  | `null`  | Custom text shown on the Moderne login screen. Useful for tenant-specific welcome messages or compliance notices.                                                                                                          |
| `moderne.ui.login-links[{index}].label`      | `false`  | `null`  | Custom label for a link shown on the login screen. If populated, the URI property at the same index must also be populated.                                                                                                |
| `moderne.ui.login-links[{index}].uri`        | `false`  | `null`  | The URI for a custom login-screen link. Must be a fully qualified URI.                                                                                                                                                     |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_UI_MOREHELP_0_LABEL="Getting started" \
-e MODERNE_UI_MOREHELP_0_URI="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
-e MODERNE_UI_MOREHELP_1_LABEL="How to guides" \
-e MODERNE_UI_MOREHELP_1_URI="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
-e MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_LABEL="Download CLI Tools" \
-e MODERNE_UI_CLIDOWNLOADINSTRUCTIONS_URI="https://docs.example.com/moderne-cli-setup" \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.ui.more-help[0].label="Getting started" \
--moderne.ui.more-help[0].uri="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
--moderne.ui.more-help[1].label="How to guides" \
--moderne.ui.more-help[1].uri="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
--moderne.ui.cli-download-instructions.label="Download CLI Tools" \
--moderne.ui.cli-download-instructions.uri="https://docs.example.com/moderne-cli-setup" \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Generic HTTP tool variables

| Property                                                          | Required | Default | Description                                                                                                                                                                                                             |
|-------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.connector.http-tool[{index}].uri`                        | `true`   |         | Fully qualified URI to your HTTP tool.                                                                                                                                                                                  |
| `moderne.connector.http-tool[{index}].username`                   | `false`  |         | Username used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearer-token` must not be provided.    |
| `moderne.connector.http-tool[{index}].password`                   | `false`  |         | Password used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, `bearer-token` must not be provided.    |
| `moderne.connector.http-tool[{index}].bearer-token`               | `false`  |         | Bearer token used to authenticate to HTTP tool. <br/><br/>**Note:** Only one of basic auth (username+password) and bearer token can be used. If `bearer-token` is specified, username and password must not be provided. |
| `moderne.connector.http-tool[{index}].skip-ssl`                   | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                        |
| `moderne.connector.http-tool[{index}].skip-validate-connectivity` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this HTTP tool, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                  |
| `moderne.connector.http-tool[{index}].proxy.host`                 | `false`  |         | The hostname of a proxy server to use for connections to this HTTP tool.                                                                                                                                                |
| `moderne.connector.http-tool[{index}].proxy.port`                 | `false`  |         | The port of the proxy server to use for connections to this HTTP tool.                                                                                                                                                  |
| `moderne.connector.http-tool[{index}].connect-timeout`            | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                |
| `moderne.connector.http-tool[{index}].read-timeout`               | `false`  | `60s`   | Timeout for reading the response body from the HTTP tool. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                  |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CONNECTOR_HTTPTOOL_0_URI=https://launchdarkly.mycompany.com \
-e MODERNE_CONNECTOR_HTTPTOOL_0_USERNAME=myUser \
-e MODERNE_CONNECTOR_HTTPTOOL_0_PASSWORD=${SECRET_NAME} \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.connector.http-tool[0].uri=https://launchdarkly.mycompany.com \
--moderne.connector.http-tool[0].username=myUser \
--moderne.connector.http-tool[0].password=${SECRET_NAME} \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Moddy LLM variables

Variables for enabling [Moddy](./configure-a-connector-with-llm-for-moddy.md), Moderne's multi-repo AI agent. Variables are nested under the specific provider you are configuring. Replace `{PROVIDER}` with one of `OPENAI`, `ANTHROPIC`, `GEMINI`, or `MISTRAL` (for environment variables) or `{provider}` with one of `openai`, `anthropic`, `gemini`, or `mistral` (for JAR arguments).

| Property                              | Required | Default | Description                                                                                                                                                                |
|---------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.moddy.{provider}.api-key`    | `true`   |         | The API key for the specified LLM provider. Replace `{provider}` with `openai`, `anthropic`, `gemini`, or `mistral`.                                                       |
| `moderne.moddy.{provider}.model`      | `false`  |         | Optional model name override for the LLM provider.                                                                                                                         |
| `moderne.moddy.{provider}.uri`        | `false`  |         | Optional URI override for the LLM API endpoint. If not specified, the default endpoint for the provider is used. Useful for routing requests through a custom API gateway. |
| `moderne.moddy.{provider}.proxy.host` | `false`  |         | The hostname of a proxy server used to reach the LLM API. If specified, `proxy.port` must also be set.                                                                     |
| `moderne.moddy.{provider}.proxy.port` | `false`  |         | The port of the proxy server used to reach the LLM API. If specified, `proxy.host` must also be set.                                                                       |
| `moderne.moddy.admin-only`            | `false`  | `false` | If `true`, only admins will see Moddy in the UI and be able to chat with Moddy.                                                                                            |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_MODDY_ANTHROPIC_APIKEY=${ANTHROPIC_API_KEY} \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.moddy.anthropic.api-key=${ANTHROPIC_API_KEY} \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Storage variables

Filesystem location used by the Connector for its working state. Mount a persistent volume here so the state survives Connector restarts.

| Property                        | Required | Default                   | Description                                                                                                                                                                                                                                                                       |
|---------------------------------|----------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.storage.permanent-dir` | `false`  | `./working-set/permanent` | Filesystem path where the Connector stores working files: any file-based `repos.csv` you point at it, in-progress checkpoints used to resume after a restart, a cached copy of the last enrichment result, and any Maven repository indexes it builds. The path must be writable. |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_STORAGE_PERMANENTDIR=/var/moderne/permanent \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.storage.permanent-dir=/var/moderne/permanent \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Changelog variables

Variables for enabling the [Changelog feature](../../../../user-documentation/moderne-platform/getting-started/changelog.md), which surfaces pull requests, commits, and check results across your SCMs in a single Moderne view. Configure credentials for each SCM provider you want included.

| Property                                             | Required | Default         | Description                                                                                                                                                                                |
|------------------------------------------------------|----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `moderne.changelog.github.app-id`                    | `false`  |                 | GitHub App ID used to post Changelog updates.                                                                                                                                              |
| `moderne.changelog.github.private-key`               | `false`  |                 | GitHub App private key. Accepts a literal key, or `file:/path/to/key.pem` to read from disk.                                                                                               |
| `moderne.changelog.github.webhook-secret`            | `false`  |                 | Shared secret configured on the GitHub App webhook.                                                                                                                                        |
| `moderne.changelog.github.origins[{index}]`          | `false`  | `github.com`    | Hostname(s) this GitHub App serves. Set to your GitHub Enterprise hostname if self-hosted.                                                                                                 |
| `moderne.changelog.github.installations.{org}`       | `false`  |                 | Map of organization name to GitHub App installation ID. Find the ID at `https://github.com/organizations/<org>/settings/installations` -- click the app, then copy the number from the URL. |
| `moderne.changelog.gitlab.token`                     | `false`  |                 | GitLab access token used to post Changelog updates.                                                                                                                                        |
| `moderne.changelog.gitlab.origins[{index}]`          | `false`  | `gitlab.com`    | Hostname(s) of your GitLab instance(s). Set to your self-hosted hostname if you are not on GitLab.com.                                                                                     |
| `moderne.changelog.bitbucket.token`                  | `false`  |                 | Bitbucket Data Center HTTP access token used to post Changelog updates.                                                                                                                    |
| `moderne.changelog.bitbucket.origins[{index}]`       | `false`  |                 | Hostname(s) of your Bitbucket Data Center install(s). No default -- must be set if Bitbucket Data Center is configured.                                                                     |
| `moderne.changelog.bitbucket-cloud.token`            | `false`  |                 | Bitbucket Cloud app password or access token used to post Changelog updates.                                                                                                               |
| `moderne.changelog.bitbucket-cloud.origins[{index}]` | `false`  | `bitbucket.org` | Hostname(s) for Bitbucket Cloud.                                                                                                                                                           |
| `moderne.changelog.azure-devops.token`               | `false`  |                 | Azure DevOps personal access token used to post Changelog updates.                                                                                                                         |
| `moderne.changelog.azure-devops.origins[{index}]`    | `false`  | `dev.azure.com` | Hostname(s) of your Azure DevOps instance(s). Set to your hostname if using Azure DevOps Server on-prem.                                                                                   |

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CHANGELOG_GITHUB_APPID=123456 \
-e MODERNE_CHANGELOG_GITHUB_PRIVATEKEY=file:/secrets/github-moderne-changelog.pem \
-e MODERNE_CHANGELOG_GITHUB_INSTALLATIONS_ORG1=12345678 \
-e MODERNE_CHANGELOG_GITHUB_INSTALLATIONS_ORG2=87654321 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.changelog.github.app-id=123456 \
--moderne.changelog.github.private-key=file:/secrets/github-moderne-changelog.pem \
--moderne.changelog.github.installations.org1=12345678 \
--moderne.changelog.github.installations.org2=87654321 \
# ... Additional arguments
```
</TabItem>

</Tabs>

