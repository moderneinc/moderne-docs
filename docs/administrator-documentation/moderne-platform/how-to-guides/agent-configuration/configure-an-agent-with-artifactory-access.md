---
sidebar_label: Artifactory LST configuration
description: How to configure the Moderne agent to retrieve LST artifacts from Artifactory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with Artifactory access: LSTs

Artifactory serves as a source of LST artifacts for Moderne. This integration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify LST artifacts that have not yet been encrypted and transmitted to Moderne in near real-time.

This guide will walk you through how to configure the Moderne agent to connect to your Artifactory instance to retrieve LST artifacts.

:::info
If you're wanting to configure Artifactory to support recipe artifacts, please see [this guide](./configuring-artifactory-with-recipes.md) instead.
:::

#### Prerequisites

* You will need a username and password for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured

## Configuring the Moderne agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to get LST artifacts from your Artifactory instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                               | Required                                       | Default | Description                                                                                                                                  |
|-------------------------------------------------------------|------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ARTIFACTORY_{index}_URL`                     | `true`                                         |         | The URL of your Artifactory instance.                                                                                                        |
| `MODERNE_AGENT_ARTIFACTORY_{index}_USERNAME`                | `true`                                         |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                |
| `MODERNE_AGENT_ARTIFACTORY_{index}_PASSWORD`                | `true`                                         |         | The password used to connect to your Artifactory instance.                                                                                   |
| `MODERNE_AGENT_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}` | `true`                                         |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`. |
| `MODERNE_AGENT_ARTIFACTORY_{index}_SKIPSSL`                 | `true` (If you use a self-signed SSL/TLS cert) | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance.                          |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                   | Required                                       | Default | Description                                                                                                                                  |
|-----------------------------------------------------------------|------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.artifactory[{index}].url`                      | `true`                                         |         | The URL of your Artifactory instance.                                                                                                        |
| `--moderne.agent.artifactory[{index}].username`                 | `true`                                         |         | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                |
| `--moderne.agent.artifactory[{index}].password`                 | `true`                                         |         | The password used to connect to your Artifactory instance.                                                                                   |
| `--moderne.agent.artifactory[{index}].astQueryFilters[{index}]` | `true`                                         |         | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`. |
| `--moderne.agent.artifactory[{index}].skipSsl`                  | `true` (If you use a self-signed SSL/TLS cert) | `false` | Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance.                          |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
</TabItem>
</Tabs>
