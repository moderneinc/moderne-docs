---
sidebar_label: Moddy configuration
description: How to configure the Moderne Connector with support for Moddy, Moderne's multi-repo AI agent.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configure-an-agent-with-llm-for-moddy" />

# Configure a Connector with Moddy support

This guide will walk you through how to configure the Moderne Connector to enable support for [Moddy](https://www.moderne.ai/blog/introducing-moderne-multi-repo-ai-agent-for-transforming-code-at-scale), Moderne's multi-repo AI agent. Moddy employs a bring-your-own model (BYOM) approach, which allows you to connect any large language model (LLM) that has been approved for use within your company.

## Prerequisites

* You will need an API key from your chosen LLM provider (OpenAI, Anthropic, Google, or Mistral)

## Supported LLM providers

The Moderne Connector currently supports the following LLM providers:

| Provider      | Model Used            | API Endpoint                                       |
|---------------|-----------------------|----------------------------------------------------|
| OpenAI        | gpt-4o                | `https://api.openai.com/v1`                        |
| Anthropic     | Claude 3.5 Sonnet     | `https://api.anthropic.com/v1`                     |
| Google Gemini | Gemini 2.5 Flash-Lite | `https://generativelanguage.googleapis.com/v1beta` |
| Mistral       | Mistral Small Latest  | `https://api.mistral.ai/v1`                        |

If you need a model or LLM provider that isn't listed here, please contact Moderne support.

## Configuring the Moderne Connector

The following table contains all of the variables/arguments you need to add to your Moderne Connector run command in order to enable Moddy. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./agent-config.md).

Variables are nested under the specific provider you are configuring. Replace `{PROVIDER}` with one of: `OPENAI`, `ANTHROPIC`, `GEMINI`, `MISTRAL` (for environment variables) or `{provider}` with one of: `openai`, `anthropic`, `gemini`, `mistral` (for JAR arguments).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                         | Required | Default | Description                                                                                                                                                                                  |
|---------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_MODDY_{PROVIDER}_APIKEY`     | `true`   |         | The API key for the specified LLM provider. Replace `{PROVIDER}` with `OPENAI`, `ANTHROPIC`, `GEMINI`, or `MISTRAL`.                                                                         |
| `MODERNE_MODDY_{PROVIDER}_MODEL`      | `false`  |         | Optional model name override for the LLM provider.                                                                                                                                           |
| `MODERNE_MODDY_{PROVIDER}_URI`        | `false`  |         | Optional URI override for the LLM API endpoint. If not specified, the default endpoint for the provider is used (see table above). Useful for routing requests through a custom API gateway. |
| `MODERNE_MODDY_{PROVIDER}_PROXY_HOST` | `false`  |         | The hostname of a proxy server used to reach the LLM API. If specified, `PROXY_PORT` must also be set.                                                                                       |
| `MODERNE_MODDY_{PROVIDER}_PROXY_PORT` | `false`  |         | The port of the proxy server used to reach the LLM API. If specified, `PROXY_HOST` must also be set.                                                                                         |
| `MODERNE_MODDY_ADMINONLY`             | `false`  | `false` | If `true`, only admins will see Moddy in the UI and be able to chat with Moddy.                                                                                                              |

**Example:**

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

docker run \
# ... other configuration ...
-e MODERNE_MODDY_ANTHROPIC_APIKEY \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                           | Required | Default | Description                                                                                                                                                                                  |
|-----------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.moddy.{provider}.apiKey`     | `true`   |         | The API key for the specified LLM provider. Replace `{provider}` with `openai`, `anthropic`, `gemini`, or `mistral`.                                                                         |
| `--moderne.moddy.{provider}.model`      | `false`  |         | Optional model name override for the LLM provider.                                                                                                                                           |
| `--moderne.moddy.{provider}.uri`        | `false`  |         | Optional URI override for the LLM API endpoint. If not specified, the default endpoint for the provider is used (see table above). Useful for routing requests through a custom API gateway. |
| `--moderne.moddy.{provider}.proxy.host` | `false`  |         | The hostname of a proxy server used to reach the LLM API. If specified, `proxy.port` must also be set.                                                                                       |
| `--moderne.moddy.{provider}.proxy.port` | `false`  |         | The port of the proxy server used to reach the LLM API. If specified, `proxy.host` must also be set.                                                                                         |
| `--moderne.moddy.adminOnly`             | `false`  | `false` | If `true`, only admins will see Moddy in the UI and be able to chat with Moddy.                                                                                                              |

**Example:**

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

java -jar connector-{version}.jar \
# ... other configuration ...
--moderne.moddy.anthropic.apiKey=$MODERNE_MODDY_ANTHROPIC_APIKEY \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

## Provider-specific examples

### OpenAI

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_MODDY_OPENAI_APIKEY=...

docker run \
# ... other required agent configuration ...
-e MODERNE_MODDY_OPENAI_APIKEY \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_MODDY_OPENAI_APIKEY=...

java -jar connector-{version}.jar \
# ... other required agent configuration ...
--moderne.moddy.openai.apiKey=$MODERNE_MODDY_OPENAI_APIKEY \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

### Anthropic (Claude)

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

docker run \
# ... other required agent configuration ...
-e MODERNE_MODDY_ANTHROPIC_APIKEY \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

java -jar connector-{version}.jar \
# ... other required agent configuration ...
--moderne.moddy.anthropic.apiKey=$MODERNE_MODDY_ANTHROPIC_APIKEY \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

### Google Gemini

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_MODDY_GEMINI_APIKEY=...

docker run \
# ... other required agent configuration ...
-e MODERNE_MODDY_GEMINI_APIKEY \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_MODDY_GEMINI_APIKEY=...

java -jar connector-{version}.jar \
# ... other required agent configuration ...
--moderne.moddy.gemini.apiKey=$MODERNE_MODDY_GEMINI_APIKEY \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

### Mistral

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_MODDY_MISTRAL_APIKEY=...

docker run \
# ... other required agent configuration ...
-e MODERNE_MODDY_MISTRAL_APIKEY \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_MODDY_MISTRAL_APIKEY=...

java -jar connector-{version}.jar \
# ... other required agent configuration ...
--moderne.moddy.mistral.apiKey=$MODERNE_MODDY_MISTRAL_APIKEY \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

## Proxy configuration

If your organization requires LLM API access to go through a proxy, you can configure the proxy host and port per provider. Both must be specified together.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

docker run \
# ... other required agent configuration ...
-e MODERNE_MODDY_ANTHROPIC_APIKEY \
-e MODERNE_MODDY_ANTHROPIC_PROXY_HOST=proxy.company.com \
-e MODERNE_MODDY_ANTHROPIC_PROXY_PORT=8080 \
# ... rest of configuration ...
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

java -jar connector-{version}.jar \
# ... other required agent configuration ...
--moderne.moddy.anthropic.apiKey=$MODERNE_MODDY_ANTHROPIC_APIKEY \
--moderne.moddy.anthropic.proxy.host=proxy.company.com \
--moderne.moddy.anthropic.proxy.port=8080 \
# ... rest of configuration ...
```

</TabItem>
</Tabs>

## Complete example with multiple configurations

Here's a complete example showing a Connector configured with GitHub, Artifactory, and Moddy support:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_MODDY_ANTHROPIC_APIKEY \
-p 8080:8080 \
moderne-connector:latest
```

</TabItem>
<TabItem value="executable-jar" label="Executable JAR">

```bash
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_MODDY_ANTHROPIC_APIKEY=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
--moderne.connector.organization.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.connector.organization.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.moddy.anthropic.apiKey=$MODERNE_MODDY_ANTHROPIC_APIKEY
```

</TabItem>
</Tabs>

## Verifying the configuration

After starting the Connector with the new configuration, "Moddy" will be displayed in the navigation bar in the Moderne SaaS UI:

<figure>
  ![moddy-nav-bar.png](assets/moddy-nav-bar.png)
  <figcaption>"Moddy" displayed in the nav bar</figcaption>
</figure>

You can then click "Moddy" and begin asking it questions about your codebase.
