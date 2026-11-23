---
title: Restrict recipe network access with a Connector
sidebar_label: Recipe network access
description: Block recipes from reaching any host that is not configured on your Connector.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restrict recipe network access with a Connector

A recipe is code, and it can make network calls while it runs. For example, a recipe that upgrades dependencies looks up versions in a package registry. If your security policy requires it, you can block recipes from reaching any host that is not configured on your Connector.

In this guide, we will walk you through how recipes reach the network, how to turn on the restriction, and how to find a host you still need to configure.

## How recipes reach the network

Every recipe run on the Moderne Platform is cut off from the network. Its only way out is a proxy that Moderne runs next to it.

The proxy decides where each request goes:

* A request to a URL that starts with the URL of a tool configured on your Connector goes through your Connector.
* A request to any other URL goes straight to its destination. This is the default.

Recipes do not need to do anything special to use the proxy. Every recipe run gets the standard proxy settings:

* Java code gets the `http.proxyHost`, `http.proxyPort`, `https.proxyHost`, and `https.proxyPort` system properties. OpenRewrite's `HttpSender` uses them, and so does any Java HTTP client that reads them.
* Command line tools that the run starts, such as npm, pip, and git, get the `HTTP_PROXY` and `HTTPS_PROXY` environment variables.

:::info
Connections that do not go through the proxy fail. This includes raw socket connections and DNS lookups. If you write recipes that call other services, use `HttpSender`.
:::

## Blocking hosts you have not configured

To refuse every request that no Connector tool matches, set `moderne.platform.egress.direct-access` to `deny`.

| Value             | A request that no Connector tool matches |
|-------------------|------------------------------------------|
| `allow` (default) | Goes straight to its destination.        |
| `deny`            | Is refused.                              |

You will need Connector version 0.151.379 or later. Older Connectors ignore this setting.

:::note
This setting only restricts the requests recipes make while they run. Your Connector's own connections are not affected, such as reading LSTs from your Artifactory or calling your SCM.
:::

Before you turn it on, make sure your recipes can still reach your repositories through a [configured Connector tool](#what-counts-as-a-connector-tool).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                          | Required | Default | Description                                                                        |
|----------------------------------------|----------|---------|------------------------------------------------------------------------------------|
| `MODERNE_PLATFORM_EGRESS_DIRECTACCESS` | `false`  | `allow` | Set to `deny` to refuse recipe requests to any URL that no Connector tool matches. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_PLATFORM_EGRESS_DIRECTACCESS=deny \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                             | Required | Default | Description                                                                        |
|-------------------------------------------|----------|---------|------------------------------------------------------------------------------------|
| `--moderne.platform.egress.direct-access` | `false`  | `allow` | Set to `deny` to refuse recipe requests to any URL that no Connector tool matches. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.platform.egress.direct-access=deny \
# ... Additional arguments
```
</TabItem>

</Tabs>

### What counts as a Connector tool

Every URL you configure on your Connector counts as a tool:

| Connector configuration                                                                     | Examples                                             |
|---------------------------------------------------------------------------------------------|------------------------------------------------------|
| LST sources                                                                                 | Artifactory, Maven repository, S3 bucket             |
| [Recipe sources](./configure-recipe-marketplace-repositories.md)                            | Maven, npm, NuGet, PyPI, and Go repositories         |
| SCMs                                                                                        | GitHub, GitLab, Bitbucket, Azure DevOps              |
| Organization sources                                                                        | An HTTP `repos.csv` source, an organizations service |
| [Generic HTTP tools](./configure-a-connector-with-generic-http-tools-for-use-in-recipes.md) | Any internal service your recipes call               |
| [Moddy LLM providers](./configure-a-connector-with-llm-for-moddy.md)                        | Your LLM endpoint                                    |

A request matches a tool when its URL starts with the tool's URL. For example, a tool configured as `https://artifactory.example.com/artifactory/lst-repo` does not match a request to `https://artifactory.example.com/artifactory/maven-virtual`.

Recipes that resolve dependencies, such as a recipe that upgrades a dependency version, request the Maven, npm, or PyPI repositories your projects use. Check that each of those repository URLs starts with the URL of a configured tool. If one does not, add it as a [generic HTTP tool](./configure-a-connector-with-generic-http-tools-for-use-in-recipes.md).

### What stays reachable

Recipes can still reach the following hosts when the setting is `deny`. The platform needs them to run recipes.

* Your tenant's Moderne API gateway.
* Moderne's monitoring endpoints.
* The Code Genome Project (`artifacts.codegenomeproject.org`), where the platform downloads the Moderne CLI that runs your recipes.

Recipes can reach the Code Genome Project too. When it redirects a `GET` or `HEAD` request to another public host, the proxy follows the redirect. It removes any credentials from the request first.

### Using more than one Connector

The setting applies to your whole tenant. If any connected Connector sets `deny`, every recipe run is restricted.

If that Connector disconnects while a Connector without `deny` stays connected, the restriction lifts. To keep it in place, set `deny` on every Connector.

## Checking that the restriction works

After you set `deny`, you should run two recipes:

1. A recipe that calls a host you have not configured, such as `https://example.com`. Its request should fail with a `403 Forbidden` response.
2. A recipe that uses your repositories, such as one that upgrades a dependency version. It should produce the same results as before.

## Finding a host you still need to configure

A refused request gets a `403 Forbidden` response with this message:

```
Egress to https://example.com denied: no connector tool matches this URL and moderne.platform.egress.direct-access is deny.
```

The response also has a `Proxy-Status` header that names `moderne-egress` as the proxy that refused it.

If a recipe fails after you turn on `deny`, look for this message in its error output. Then configure a Connector tool for the host it names.
