---
sidebar_label: Organizations source migration guide
description: How to migrate repos.csv from an Organizations service to the agent.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization source migration

In order to simplify Moderne's operational complexity, we decided that configuring organizational hierarchies should only require creating a file and giving it to the Moderne agent (either via direct access or via an unauthenticated HTTP/S endpoint), rather than running a dedicated endpoint for organization hierarchy via an Organizations service.

While you can still [run an Organizations service](../org-service.md) to restrict access to various repositories/organizations or to customize commit messages by repository, the functionality around org hierarchies is being moved to the Agent.

This guide will walk you through everything you need to know to migrate this functionality to the Moderne Agent.

## Migration instructions

At a high-level, the migration process is as follows:

1. Remove any outdated configuration related to the org hierarchies or DevCenters from your Agent
2. Configure the Agent to use `repos.csv` and `devcenter.json`
   * If copying from a previous `repos.csv` file, you may need to make some minor changes to your `repos.csv` file.
3. Ensure that your agent is using at least version `0.221.0` (to get the latest variable names included in this doc)
4. (Optionally) If you don't plan on using an Organizations service anymore, remove it from your system.

### 1. Remove any old configuration variables from your Agent

Make sure that the following configurations are not included in your Agent run command:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                                              |
|------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH`             |
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMITOPTIONSPATH`        |
| `MODERNE_AGENT_ORGANIZATION_FILE_IDMAPPINGPATH`            |
| `MODERNE_AGENT_ORGANIZATION_FILE_DEVCENTERPATH`            |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATEINTERVALSECONDS` |

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                |
|--------------------------------------------------------------|
| `--moderne.agent.organization.file.reposCsvPath`             |
| `--moderne.agent.organization.commitOptionsPath`             |
| `--moderne.agent.organization.idMappingPath`                 |
| `--moderne.agent.organization.devCenterPath`                 |
| `--moderne.agent.organization.service.updateIntervalSeconds` |

</TabItem>
</Tabs>

### 2. Create the new files and put them somewhere the Agent can access

1. Copy the `devcenter.json` file from your Organization service and put it somewhere where your Agent can access. This could mean putting this file on the same file system that Agent has access to – or it could mean putting it behind an unauthenticated HTTP/S endpoint.
2. Follow [our guide for creating a repos.csv file](../../../references/repos-csv.md). Alternatively, if your Organization service already uses a `repos.csv`, you may copy that file directly and put it somewhere where your Agent can access (either by putting it on a file system the agent has access to or by putting the file behind an unauthenticated HTTP/S endpoint that the agent can call).
   * **Note**: There are a couple of changes you should be aware of if you previously used an Organization service. We've [documented those at the bottom of this doc](#notable-changes-from-the-previous-organization-service).

### 3. Configure the Agent to use the new variables 

Update the relevant variables in your Agent deployment so that your Agent knows where these files are.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment Variables:**

| Environment Variable                               | Default | Description                                                                                                                                                                                           |
|----------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_REPOSCSV`              |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`.                    |
| `MODERNE_AGENT_ORGANIZATION_DEVCENTER`             |         | The path of your `devcenter.json` file that provides the DevCenter configurations. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/devcenter.json`.      |
| `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}`       | `false` | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. Defaults to allowing access to all commit options. |
| `MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS` | `600`   | Specifies how often to request your organization information.                                                                                                                                         |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_AGENT_ORGANIZATION_DEVCENTER=/Users/MY_USER/Documents/devcenter.json \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
-e MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS=600 \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                        | Default | Description                                                                                                                                                                                           |
|------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.reposCsv`              |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`.                    |
| `--moderne.agent.organization.devCenter`             |         | The path of your `devcenter.json` file that provides the DevCenter configurations. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/devcenter.json`.      |
| `--moderne.agent.defaultCommitOptions[{index}]`      | `false` | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. Defaults to allowing access to all commit options. |
| `--moderne.agent.organization.updateIntervalSeconds` | `600`   | Specifies how often to request your organization information.                                                                                                                                         |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.agent.organization.devCenter=/Users/MY_USER/Documents/devcenter.json \
--moderne.agent.defaultCommitOptions[0]=PullRequest \
--moderne.agent.defaultCommitOptions[1]=ForkAndPullRequest \
--moderne.agent.organization.updateIntervalSeconds=600 \
# ... Additional arguments
```

</TabItem>
</Tabs>

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

These are the IDs you'd then use in your `devcenter.json` file if you wanted to create DevCenters. These are also the IDs you can use with the CLI when you run commands like: `mod git clone moderne <path> <moderne org id>`. 

Note that above command also allows you to clone orgs with just the name instead of the ID – but if multiple organizations share the same name it will then ask you to pick which one you want.

### Commit option changes

It's no longer possible to define [commit options](./agent-config.md#step-3-configure-the-agent-with-the-core-variablesarguments) on a per-org basis. Instead, you must define what commit options you want available [in your agent](./agent-config.md#step-3-configure-the-agent-with-the-core-variablesarguments) and those commit options will be shared between all organizations.
