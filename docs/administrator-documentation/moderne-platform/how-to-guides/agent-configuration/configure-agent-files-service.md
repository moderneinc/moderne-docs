---
sidebar_label: File-based organizational configuration
description: How to configure the Moderne agent to use files for organizational structure. 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to configure the Moderne agent to use files for organizational structure

In order for Moderne to obtain information about your organizational structure and their related permissions, you will either need to [create a dedicated Organizations service](./configure-organizations-service.md) or you will need to create some configuration files and direct the Moderne agent to said files.

We'd recommend the file-based approach as it's a lot simpler to maintain due to the fact you don't have to run and maintain multiple services.

This guide will walk you through everything you need to know to set this up.

## Configuration files

The first thing you will need to do is to create one or more files that the agent will use to determine the structure of your organizations and their permissions. Let's walk through each of these.

### `repos.csv` (required)

This is a **required** file which lets the agent know what repositories should be associated with what organizations. This file must be a CSV file that follows this format of: `cloneUrl`, `branch`, and then a list of one or more organizations – with each column being named org + a number (e.g., `org1`, `org2`). The organization on the left is a child of the organization on its right.

Let's take a look at an example of what this might look like:

| cloneUrl      | branch   | org1          | org2             | org3 |
|---------------|----------|---------------|------------------|------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | main | Open Source   | ALL    |     |
| `https://github.com/Netflix/spectator-go` | main | Netflix - ALL | Open Source      | ALL |
| `https://github.com/Netflix/spectator-go` | main | Netflix - GO  | Open Source - GO | ALL |

The organizations under `org1`, `org2`, and `org3` represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.

The above example would generate an organizational structure like this:

```text
* ALL
    * Open Source
        * https://github.com/openrewrite/rewrite-recipe-bom:main
        * Netflix - ALL
            * https://github.com/Netflix/spectator-go:main
    * Open Source - GO
        * Netflix - GO
            * https://github.com/Netflix/spectator-go:main
```

To generate this `repos.csv` file, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)" – which are scripts we've created to automate grabbing a list of repositories from various SCMs.

### `commitOptions.txt` (optional)

This is an optional file which allows you to configure custom commit options for individual organizations. By commit options, we mean the various ways that code can be committed such as only allowing pull requests for code changes –– or allowing people to commit directly to main.

If you don't provide this file, we'll fall back to the default commit options [you specified in your agent configuration](./agent-variables.md) (if you configured that). If you didn't configure that, then we will assume that you want all commit options available to every repository. 

For more information on commit options and how to configure this file, please see our [Moderne organizations example repository](https://github.com/moderneinc/moderne-organizations/tree/main?tab=readme-ov-file#commit-options).

Below you can find an example of what this file might look like:

```text title="commitOptions.txt"
Open Source=Branch,PullRequest
Netflix - ALL=Branch,Direct,PullRequest
```

### `idMapping.txt` (optional)

This is an optional file which is only useful if you want to have multiple organizations with the same name. For instance, maybe you want to have an "Open Source" and a "Private Source" organization, and then you want to have a "Netflix" organization with different repositories in each of those. If that's not something that applies to you, please skip this section.

By default, the ID for an organization is the name you provided in the `repos.csv` file. In [our repos.csv example](#reposcsv-required), the names/IDs of the organizations are: `ALL`, `Open Source`, `Netflix - GO`, `Netflix - ALL`, etc.

If you wanted to make it so `Netflix - GO` and `Netflix - ALL` were called `Netflix` in the UI under their respective parent organizations, you would need to create an `idMapping.txt` file that looks like:

```text title="idMapping.txt"
Netflix - GO=Netflix
Netflix - ALL=Netflix
```

The above `idMapping.txt` file with the previously referenced `repos.csv` would generate an organizational structure which looks like this:

```text
* ALL
    * Open Source
        * https://github.com/openrewrite/rewrite-recipe-bom:main
        * Netflix
            * https://github.com/Netflix/spectator-go:main
    * Open Source - GO
        * Netflix
            * https://github.com/Netflix/spectator-go:main
```


### `devCenter.json` (optional)

This is an optional file which is used to generate DevCenters. For more details about configuring your DevCenter and what this file should look like [please see our creating a DevCenter guide](../dev-center.md#step-1-create-a-devcenterjson-file).

The provided `devCenter.json` should follow the same structure as [our Organizations service example repository](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/devcenter.json).

## Agent configuration

With the files created, you will then need to let the agent know about them. To do so, you will need to provide the following variables in your agent startup command:

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

