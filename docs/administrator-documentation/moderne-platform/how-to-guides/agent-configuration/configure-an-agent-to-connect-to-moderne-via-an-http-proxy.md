---
sidebar_label: HTTP proxy configuration
description: How to configure the Moderne agent to connect to Moderne via an HTTP proxy.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent to connect to Moderne via an HTTP proxy

If your organization requires an HTTP proxy in order to be able to access the public internet, you can configure this proxy for communication between the Moderne Agent and the Moderne API Gateway.

This proxy will be used for egress, and then the API gateway will establish the Layer 7 connection with the Moderne Agent through which all further communication will pass.

<figure>
  ![](./assets/http-proxy.png)
  <figcaption></figcaption>
</figure>

## HTTP CONNECT proxy

If your organization uses an HTTP CONNECT proxy for outbound traffic, configure the agent with the proxy host and port. The following variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                         | Required | Default | Description                                 |
|---------------------------------------|----------|---------|---------------------------------------------|
| `MODERNE_AGENT_APIGATEWAY_PROXY_HOST` | `false`  |         | Host (without scheme) for the proxy server. |
| `MODERNE_AGENT_APIGATEWAY_PROXY_PORT` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_APIGATEWAY_PROXY_HOST=proxy.mycompany.com \
-e MODERNE_AGENT_APIGATEWAY_PROXY_PORT=8179 \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                           | Required | Default | Description                                 |
|-----------------------------------------|----------|---------|---------------------------------------------|
| `--moderne.agent.apiGateway.proxy.host` | `false`  |         | Host (without scheme) for the proxy server. |
| `--moderne.agent.apiGateway.proxy.port` | `false`  |         | Port for the proxy server.                  |

:::info
If you include either a host or port, you must include both.
:::

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.apiGateway.proxy.host=proxy.mycompany.com \
--moderne.agent.apiGateway.proxy.port=8179 \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Reverse proxy with bearer token authentication

If your organization uses a reverse proxy that sits in front of the Moderne API gateway and requires bearer token authentication on incoming requests, you can configure the agent to send an `Authorization: Bearer <token>` header on the WebSocket upgrade request.

In this setup, `MODERNE_AGENT_APIGATEWAYRSOCKETURI` points directly at your reverse proxy URL, and the bearer token authenticates the agent to the proxy.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                          | Required | Default | Description                                                                      |
|----------------------------------------|----------|---------|----------------------------------------------------------------------------------|
| `MODERNE_AGENT_APIGATEWAY_BEARERTOKEN` | `false`  |         | Bearer token sent as an `Authorization` header on the WebSocket upgrade request. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=wss://your-reverse-proxy.mycompany.com/rsocket \
-e MODERNE_AGENT_APIGATEWAY_BEARERTOKEN=your-bearer-token \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                            | Required | Default | Description                                                                      |
|------------------------------------------|----------|---------|----------------------------------------------------------------------------------|
| `--moderne.agent.apiGateway.bearerToken` | `false`  |         | Bearer token sent as an `Authorization` header on the WebSocket upgrade request. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.apiGatewayRsocketUri=wss://your-reverse-proxy.mycompany.com/rsocket \
--moderne.agent.apiGateway.bearerToken=your-bearer-token \
# ... Additional arguments
```

</TabItem>
</Tabs>
