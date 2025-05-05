---
sidebar_label: PyPI visualizations configuration
description: How to configure the Moderne agent to retrieve visualization artifacts from your PyPI repository.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with PyPI access: visualizations

In order for Moderne to retrieve your visualization artifacts from your PyPI repository, you will need to configure the agent and run it in a specific environment. This guide will walk you through how to configure the agent to achieve this.

**Note**: This feature is experimental. Running the agent in an unsupported environment (read: os, python version) may break deployed visualizations.

## Publishing visualizations

Visualization artifacts published to the configured PyPI index can be deployed to Moderne if there is an agent configured with access.

## Configuring the Moderne agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to get visualization artifacts from your PyPI package index. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

You can configure multiple PyPI indexes by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                    | Required | Default | Description                                                                                                                                                               |
|--------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_VISUALIZATION_USEONLYCONFIGURED`  | `true`   | `false` | Only use the visualization sources configured in the agent.                                                                                                               |
| `MODERNE_AGENT_PYPI_{index}_URL`                 | `true`   |         | The URL of your PyPI package index.                                                                                                                                       |
| `MODERNE_AGENT_PYPI_{index}_USERNAME`            | `false`  | `null`  | The username used to access the index.                                                                                                                                    |
| `MODERNE_AGENT_PYPI_{index}_PASSWORD`            | `false`  | `null`  | The password used to access the index.                                                                                                                                    |
| `MODERNE_AGENT_PYPI_{index}_SKIPSSL`             | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_VISUALIZATION_USEONLYCONFIGURED=true \
-e MODERNE_AGENT_PYPI_0_URL=https://pypi.example.com/simple \
-e MODERNE_AGENT_PYPI_0_USERNAME=admin \
-e MODERNE_AGENT_PYPI_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                       | Required | Default | Description                                                                                                                                                               |
|-----------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.visualization.useOnlyConfigured`   | `true`   | `false` | Only use the visualization sources configured in the agent.                                                                                                               |
| `--moderne.agent.pypi[{index}].url`                 | `true`   |         | The URL of your PyPI package index.                                                                                                                                       |
| `--moderne.agent.pypi[{index}].username`            | `false`  | `null`  | The username used to access the index.                                                                                                                                    |
| `--moderne.agent.pypi[{index}].password`            | `false`  | `null`  | The password used to access the index.                                                                                                                                    |
| `--moderne.agent.pypi[{index}].skipSsl`             | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.visualization.useOnlyConfigured=true \
--moderne.agent.pypi[0].url=https://pypi.example.com/simple \
--moderne.agent.pypi[0].username=admin \
--moderne.agent.pypi[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## The agent environment

To install pip packages from the secure environment the agent runs in we need to first install the packages on the agent and then move the packages to the SaaS. To achieve this the environments that the agent and the SaaS run in must be in sync.
You will need to ensure that the environment the agent runs in is set up in a way that the python packages downloaded on the agent will also work on the SaaS. This means:

* Linux (ubuntu:22.04 is tested)
* `/bin/sh` shell with
  * Python version 3.11 available under the `python3` command
  * Pip and virtualenv (venv) installed. Alias not required (called via `python3 -m pip/venv`)
* A temporary directory will be used to download pip packages too. This uses the location defined in `java.io.tmpdir`. This location needs to be writable.
* The temporary directory has enough space to download the required packages.

:::note

This is not required if you do not wish to install visualizations from your own PyPi package index and have `moderne.agent.visualization.useOnlyConfigured` set to `false`

:::
