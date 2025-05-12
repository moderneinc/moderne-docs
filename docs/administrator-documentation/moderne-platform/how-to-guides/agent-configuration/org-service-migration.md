---
sidebar_label: Migrating out of the organizations service
description: How to ensure a smooth migration out of the organizations service.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization Service Migration

## What was the Organization Service?

The Organization Service was an optional component deployed in customer environments to provide dynamic organizational hierarchies.

To simplify Moderne’s operational complexity, it was decided to sunset the Organization Service and replace it with a file-based mechanism managed directly by the Moderne Agent. This change streamlines customer deployments by reducing the number of moving parts and eliminates the need for an additional network hop whenever organizational data is accessed.

## Migration instructions

To migrate from the old organization service to the new file-based configuration, you'll need to:

1. Remove any configuration related to the Organization Service from your Agent
2. Configure the Agent to use `repos.csv` and `devcenter.json`
   * If copying from a previous `repos.csv` file, you may need to make some minor changes to your `repos.csv` file.
3. Remove the organization service from your system
4. Ensure that your agent is using at least version `0.221.0` (to get the latest variable names included in this doc)

### 1. Remove any configuration related to the Organization Service from your Agent

Make sure that the following configurations are not included in your Agent run command:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                                       |
|-----------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`            |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL`        |
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH`      | 
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMITOPTIONSPATH` | 
| `MODERNE_AGENT_ORGANIZATION_FILE_IDMAPPINGPATH`     | 
| `MODERNE_AGENT_ORGANIZATION_FILE_DEVCENTERPATH`     | 
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATEINTERVALSECONDS` |

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    |
|--------------------------------------------------|
| `--moderne.agent.organization.service.url`       |
| `--moderne.agent.organization.service.skipSsl`   |
| `--moderne.agent.organization.file.reposCsvPath` | 
| `--moderne.agent.organization.commitOptionsPath` | 
| `--moderne.agent.organization.idMappingPath`     | 
| `--moderne.agent.organization.devCenterPath`     | 
| `--moderne.agent.organization.service.updateIntervalSeconds` |

</TabItem>
</Tabs>

### 2. Configure the Agent to use `repos.csv` and `devcenter.json`

1. Copy the `devcenter.json` file from your Organization Service and put it somewhere where your Agent can access.
2. Follow [the organizational hierarchy configuration instructions](./configure-organizations-hierarchy.md) to generate a `repos.csv`. Alternatively, if your Organization Service already uses a `repos.csv`, you may copy that file directly and put it somewhere where your Agent can access.
   * **Note**: There are a couple of changes you should be aware of if you previously used an Organization Service. We've [documented those at the bottom of this doc](#notable-changes-from-the-previous-organization-service).
3. Update the relevant variables in your Agent deployment so that your Agent knows where these files are.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment Variables:**

| Environment Variable                                       | Default | Description |
|------------------------------------------------------------|---------|-------------|
| `MODERNE_AGENT_ORGANIZATION_REPOSCSV`                      |         | The path of your `repos.csv` file that provides organization information. |
| `MODERNE_AGENT_ORGANIZATION_DEVCENTER`                     |         | The path of your `devcenter.json` file that provides the DevCenter configurations. |
| `MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS` | `600`   | Specifies how often to request your organization information. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_AGENT_ORGANIZATION_DEVCENTER=/Users/MY_USER/Documents/devcenter.json \
-e MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS=600 \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                | Default | Description |
|--------------------------------------------------------------|---------|-------------|
| `--moderne.agent.organization.reposCsv`                      |         | The path of your `repos.csv` file that provides organization information. |
| `--moderne.agent.organization.devCenter`                     |         | The path of your `devcenter.json` file that provides the DevCenter configurations. |
| `--moderne.agent.organization.updateIntervalSeconds` | `600`   | Specifies how often to request your organization information. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.agent.organization.devCenter=/Users/MY_USER/Documents/devcenter.json \
--moderne.agent.organization.updateIntervalSeconds=600 \
# ... Additional arguments
```

</TabItem>
</Tabs>


:::tip
The Agent is able to fetch your `repos.csv` from an unauthenticated HTTP/HTTPS endpoint. To specify an endpoint instead
of a local file, use a URI instead of a local file.
:::

### 3. Remove the organization service from your system

This step will depend on your specific deployment topology. 

## Notable changes from the previous Organization Service

### Organization ID changes

It's no longer possible to customize ID names via an `id-mapping.txt` file. Organization IDs are, instead, entirely generated from the organization names. For instance, if you have a `repos.csv` file that looks like this:

```bash
cloneUrl,branch,org1,org2,org3,org4
<url>,<branch>,Team,Director,VP,ALL
```

Then four organizations will be produced. The IDs for these organizations will be:

1. `ALL/VP/Director/Team`
2. `ALL/VP/Director`
3. `ALL/VP`
4. `ALL`

These are the IDs you'd then use in your `devcenter.json` file if you wanted to create Dev Centers. These are also the IDs you can use with the CLI when you run commands like: `mod git clone moderne <path> <moderne org id>`. 

Note that above command also allows you to clone orgs with just the name instead of the ID – but if multiple organizations share the same name it will then ask you to pick which one you want.

### Commit option changes

It's no longer possible to define [commit options](./agent-config.md#step-3-configure-the-agent-with-the-core-variablesarguments) on a per-org basis. Instead, you must define what commit options you want available [in your agent](./agent-config.md#step-3-configure-the-agent-with-the-core-variablesarguments) and those commit options will be shared between all organizations.
