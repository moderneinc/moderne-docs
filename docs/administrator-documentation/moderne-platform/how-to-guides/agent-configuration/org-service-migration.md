---
sidebar_label: Migrating out of the organizations service
description: How to ensure a smooth migration out of the organizations service
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization Service Migration

## What was the Organization Service?

The Organization Service was an optional component deployed in customer environments to provide dynamic organizational hierarchies.

To simplify Moderne’s operational complexity, it was decided to sunset the Organization Service and replace it with a file-based mechanism managed directly by the Agent. This change streamlines customer deployments by reducing the number of moving parts and eliminates the need for an additional network hop whenever organizational data is accessed.

## Migration instructions

To migrate from the old organization service to the new `repos.csv`-based configuration, you'll need to:

1. Remove any configuration related to the Organization Service from your Agent
2. Configure the Agent to use `repos.csv` and `devcenter.json`
3. Remove the organization service from your system

### 1. Remove any configuration related to the Organization Service from your Agent

Make sure that the following configurations are not included in your Agent run command:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                                                |
|--------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`                     |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS` |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIP_SSL`                |
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOS_CSV_PATH`             | 
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMIT_OPTIONS_PATH`        | 
| `MODERNE_AGENT_ORGANIZATION_FILE_ID_MAPPING_PATH`            | 
| `MODERNE_AGENT_ORGANIZATION_FILE_DEV_CENTER_PATH`            | 

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                |
|--------------------------------------------------------------|
| `--moderne.agent.organization.service.url`                   |
| `--moderne.agent.organization.service.updateIntervalSeconds` |
| `--moderne.agent.organization.service.skipSsl`               |
| `--moderne.agent.organization.file.reposCsvPath`             | 
| `--moderne.agent.organization.commitOptionsPath`             | 
| `--moderne.agent.organization.idMappingPath`                 | 
| `--moderne.agent.organization.devCenterPath`                 | 

</TabItem>
</Tabs>

### 2. Configure the Agent to use `repos.csv` and `devcenter.json`

1. Copy the `devcenter.json` file from your Organization Service and make it accessible to where your Agent is deployed
2. Follow [the instructions](agent-configuration/organizations-hierarchy.md) to generate a `repos.csv` based on your organization hierarchy and similarly place it on your agent. Alternatively, if your Organization Service already uses a `repos.csv`, you may copy that file directly.
3. Update the relevant variables in your Agent deployment.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                          |
|----------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_REPOSCSV`  |
| `MODERNE_AGENT_ORGANIZATION_DEVCENTER` |


**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_AGENT_ORGANIZATION_DEVCENTER=/Users/MY_USER/Documents/devcenter.json \
# ... Additional variables
```


</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                            |
|------------------------------------------|
| `--moderne.agent.organization.reposCsv`  |
| `--moderne.agent.organization.devCenter` |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.agent.organization.devCenter=/Users/MY_USER/Documents/devcenter.json \
# ... Additional arguments
```



</TabItem>
</Tabs>


:::tip
The Agent is able to fetch your `repos.csv` from an unauthenticated HTTP/HTTPS endpoint. To specify an endpoint instead of a local file, use a URI instead of a local file. 
:::


### 3. Remove the organization service from your system

This step will depend on your specific deployment topology. 

