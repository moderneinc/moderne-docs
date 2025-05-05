---
sidebar_label: Migrating to file-based organizations
description: How to migrate from an Organization service to a file-based organizational structure.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to migrate from an Organization service to a file-based organizational structure

If you've decided that you no longer want to run an [Organization service](./configure-organizations-service.md) and, instead, you'd like to configure your organizations with files, then please follow along with this guide.

## Step 1: Ensure that you have the expected files

### `repos.csv` (required)

The first thing the agent needs is knowledge of how your organizations are structured. To provide it with that information, you will need to create a `repos.csv` file that outlines your organizational structure. If you previously [created your Organization service using our template](https://github.com/moderneinc/moderne-organizations), please use your existing `repos.csv` file.
	
If you do not have a `repos.csv` file, please follow the setup instructions in our [configuring the agent with file sources guide](./configure-agent-files-service.md#reposcsv-required).

### `devCenter.json` (optional)

If you want to create DevCenters, you will need to provide the agent a `devCenter.json` file. This file contains a list of DevCenters and their associated organizations. This file should follow the same format as [the one in our moderne-organization example repository](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/resources/devcenter.json#L3).

If you [created your Organization service using our template repository](https://github.com/moderneinc/moderne-organizations), you most likely already have a `devCenter.json` file which matches the expected format. If not, you will need to generate a file which matches the above format.

### `id-mapping.txt` (optional)

The `id-mapping.txt` file is an optional file that is only beneficial if you want to have multiple organizations with the same display name. If you are not in that situation, feel free to skip this section. 
	
If you [created your Organizational service using our template](https://github.com/moderneinc/moderne-organizations), and you are already using this feature, then you should already have an `id-mapping.txt` file that you can use here. If you don't have one, please [follow the setup instructions in our configuring the agent with files guide](./configure-agent-files-service.md#idmappingtxt-optional).

### `commitOptions.txt` (optional)

This is an optional file which allows you to configure custom commit options for individual repositories. By commit options, we mean the various ways that code can be committed such as only allowing pull requests for code changes –– or allowing people to commit directly to main.

If you don't provide this file, we'll fall back to the default commit options [you specified in your agent configuration](./agent-variables.md) (if you configured that). If you didn't configure that, then we will assume that you want all commit options available to every repository.

If you [created your Organizational service using our template](https://github.com/moderneinc/moderne-organizations) and you are already using this feature, then you should use your existing `commitOptions.txt` file. If you don't have one, please [follow the setup instructions in our configuring the agent with files guide](./configure-agent-files-service.md#commitoptionstxt-optional)

## Step 2: Update the agent to point to the files

After you have created or collected the above files please put them in a location where your agent has access to. Next, please update your agent run command and add the following variables:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Argument Name                                       | Required | Description                                                                                                  |
|-----------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH`      | `true`   | The file path to a CSV file which outlines your organization structure.                                      |
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMITOPTIONSPATH` | `false`  | The file path a text file which sets commit options for specific repositories.                               |
| `MODERNE_AGENT_ORGANIZATION_FILE_IDMAPPINGPATH`     | `false`  | The file path to a text file which overrides any organization name to a different name than the provided ID. |
| `MODERNE_AGENT_ORGANIZATION_FILE_DEVCENTERPATH`     | `false`  | The file path to a JSON file which outlines the DevCenter for specific organizations.                        |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH=/Users/MY_USER/Documents/repos.csv \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                         | Required | Description                                                                                                  |
|-------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.file.reposCsvPath`      | `true`   | The file path to a CSV file which outlines your organization structure.                                      |
| `--moderne.agent.organization.file.commitOptionsPath` | `false`  | The file path a text file which sets commit options for specific repositories.                               |
| `--moderne.agent.organization.file.idMappingPath`     | `false`  | The file path to a text file which overrides any organization name to a different name than the provided ID. |
| `--moderne.agent.organization.file.devCenterPath`     | `false`  | The file path to a JSON file which outlines the DevCenter for specific organizations.                        |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.file.reposCsvPath=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Step 3: Ensure the agent does not have Organization service variables

Lastly, please make sure that the following configurations are not included in your agent run command: 

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Argument Name                                                |
|--------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`                     |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS` |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL`                 |

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                |
|--------------------------------------------------------------|
| `--moderne.agent.organization.service.url`                   |
| `--moderne.agent.organization.service.updateIntervalSeconds` |
| `--moderne.agent.organization.service.skipSsl`               |

</TabItem>
</Tabs>

