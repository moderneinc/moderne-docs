---
sidebar_label: Artifactory LST configuration
description: How to configure the Moderne Connector to retrieve LST artifacts from Artifactory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access" />

# Configure a Connector with Artifactory access: LSTs

This guide explains how to configure the Moderne Connector to talk to your Artifactory instance so the Connector can discover and download your LST artifacts.

When your [repository CSV](./connector-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts) does not include `publishUri` values, the Connector uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to discover LST locations in near real-time — within a minute or two of publishing. Even when your CSV already includes `publishUri` values, the credentials you configure here are still used to fetch LSTs from Artifactory.

:::info
If you're wanting to configure repositories for recipe artifacts, please see [Recipe marketplace repositories](./configure-recipe-marketplace-repositories.md) instead.
:::

## Prerequisites

* You will need credentials for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured. This can be either:
  * A username and password combination, or
  * A bearer token (access token)

## Configuring the Moderne Connector

The following table contains all of the variables/arguments you need to add to your Moderne Connector run command in order for it to get LST artifacts from your Artifactory instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

:::info
The Artifactory poll repos below nest under an HTTP organization source (`moderne.organization.sources.http[0]`). That source's `uri` field — pointing at your `repos.csv` / `repos-lock.csv` — must also be set (see [step 5 of the Configuring the Moderne Connector guide](./connector-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts)), otherwise the Connector fails to start with a validation error on the missing URI.
:::

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                                      | Required | Default | Description                                                                                                                                                                                                                                          |
|------------------------------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_URI`                      | `true`   |         | The URL of your Artifactory instance.                                                                                                                                                                                                                |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_USERNAME`                 | `false`  |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                            |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_PASSWORD`                 | `false`  |         | The password used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                                                                               |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_BEARERTOKEN`              | `false`  |         | The bearer token (access token) used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_LSTQUERYFILTERS_{index}`  | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                                                                         |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_SKIPSSL`                  | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the Connector to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                     |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_SKIPVALIDATECONNECTIVITY` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this Artifactory instance, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                                    |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_PROXY_HOST`               | `false`  |         | The hostname of a proxy server to use for connections to this Artifactory instance.                                                                                                                                                                  |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_PROXY_PORT`               | `false`  |         | The port of the proxy server to use for connections to this Artifactory instance.                                                                                                                                                                    |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_CONNECTTIMEOUT`           | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                             |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_0_POLL_ARTIFACTORY_{index}_READTIMEOUT`              | `false`  | `60s`   | Timeout for reading the response body from the Artifactory instance. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                    |

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

**Arguments:**

| Argument Name                                                                         | Required | Default | Description                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].uri`                      | `true`   |         | The URL of your Artifactory instance.                                                                                                                                                                                                                |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].username`                 | `false`  |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                            |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].password`                 | `false`  |         | The password used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used.                                                                                               |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].bearerToken`              | `false`  |         | The bearer token (access token) used to connect to your Artifactory instance. <br/><br/>**Note:** Only one of basic auth (username+password) or bearer token can be used. If `bearerToken` is specified, username and password must not be provided. |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].lstQueryFilters[{index}]` | `true`   |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                                                                         |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].skipSsl`                  | `false`  | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the Connector to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                                     |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].skipValidateConnectivity` | `false`  | `false` | By default, on Connector startup, we will validate that we can connect to this Artifactory instance, and fail to start up the Connector if we cannot. Set this to `true` to skip this validation.                                                    |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].proxy.host`               | `false`  |         | The hostname of a proxy server to use for connections to this Artifactory instance.                                                                                                                                                                  |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].proxy.port`               | `false`  |         | The port of the proxy server to use for connections to this Artifactory instance.                                                                                                                                                                    |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].connectTimeout`           | `false`  | `30s`   | Timeout for the connection to be established (and the first data received). Specified as a duration (e.g., `30s`, `1m`).                                                                                                                             |
| `--moderne.organization.sources.http[0].poll.artifactory[{index}].readTimeout`              | `false`  | `60s`   | Timeout for reading the response body from the Artifactory instance. Specified as a duration (e.g., `60s`, `5m`).                                                                                                                                    |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.http[0].poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.sources.http[0].poll.artifactory[0].username=admin \
--moderne.organization.sources.http[0].poll.artifactory[0].password=password \
--moderne.organization.sources.http[0].poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.organization.sources.http[0].poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
</TabItem>
</Tabs>
