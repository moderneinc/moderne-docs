---
sidebar_label: Organizations service configuration
description: How to configure the Moderne agent to access your Organizations service.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure the agent with the Organizations service

If you've created an [Organizations service](../organizations-service.md) to store your organizational structure, you will need to configure the Moderne agent to point to your service. This guide will walk you through how to do that.

:::tip
We'd actually recommend you [use a file-based system for configuring your organizational structure](./configure-agent-files-service.md) instead of creating an Organizations service.

If you'd like to migrate from a traditional Organizations service to a file-based one, please check out our [file-based structure migration guide](./migrate-from-an-organization-service-files-on-the-agent.md)
:::

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`                     | `true`   |         | The URL of your GraphQL service that provides organization information.                                                                                                              |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS` | `false`  | `600`   | Specifies how often to request your organization information.                                                                                                                        |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS=600 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.service.url`                   | `true`   |         | The URL of your GraphQL service that provides organization information.                                                                                                              |
| `--moderne.agent.organization.service.updateIntervalSeconds` | `false`  | `600`   | Specifies how often to request your organization information.                                                                                                                        |
| `--moderne.agent.organization.service.skipSsl`               | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.service.url=http://localhost:8091 \
--moderne.agent.organization.service.updateIntervalSeconds=600 \
# ... Additional arguments
```
</TabItem>
</Tabs>
