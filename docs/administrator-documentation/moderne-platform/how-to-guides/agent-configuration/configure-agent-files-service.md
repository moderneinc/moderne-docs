import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure the agent with file sources

In order for Moderne to obtain information about your organizational structure, you will need to create some configuration files and direct the Moderne agent to said files. This guide will explain how to do both of those things.

## repos.csv

This is a **required** file, which outlines the repositories and the organizations which they are associated with.
When provided your organization details, they must be provided in a CSV file with the following format:

| cloneUrl      | branch   | org1    | org2        | org3 |
|---------------|----------|---------|-------------|------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | main | Open Source | ALL | |
| `https://github.com/Netflix/spectator-go` | main | Netflix | Open Source | ALL |

The organizations under `org1`, `org2`, `org3`, etc. represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.

The above example would be used to generate an organizational listing of the following:

* ALL
    * Open Source
        * `https://github.com/openrewrite/rewrite-recipe-bom:main`
        * Netflix
            * `https://github.com/Netflix/spectator-go:main`

To generate this `repos.csv`, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)".

## commitOptions.txt

This is an optional file, which allows for custom commit options for individual repositories. When no commit options are provided for a specific repositories we will fall back the default commit options which are specified in the [agent configuration](agent-variables.md#all-agent-configuration-variables) or all commit options if no default are provided.
If you want to provide specific commit options for specific repositories, these can be provided in a text file with the following format:
```text
My Organzation ID 1=Branch,PullRequest
My Organzation ID 2=Branch,Direct,PullRequest
```

## idMapping.txt

This is an optional file, which set an organization name. By default, an organization name is the same as its ID, these organization IDs are provided in the repos.csv.
These can be overwritten by provided a text file with the following format:
```text
My Organzation ID 1=Some name
My Organzation ID 2=Some name 2
```

A use case for using the `idMapping.txt`, is that there are 2 organizations under different parent organizations that should have the same name. This cannot be achieved using the IDs, because IDs must be unique, but this can be achieved using the `idMapping.txt`
For example, given this organizational listing:
* ALL
    * Some Department
        * Java Repositories Some Department
    * Some Other Department
        * Java Repositories Some Other Department

We could update it to:
* ALL
  * Some Department
    * Java Repositories
  * Some Other Department
      * Java Repositories

With at `idMapping.txt` like this: 
```text
Java Repositories Some Department=Java Repositories
Java Repositories Some Other Department=Java Repositories
```

## devCenter.json

This is an optional file, which is used to generate the DevCenter. For more details about [configuring your DevCenter please reference this guide](../dev-center.md#step-3-create-and-configure-the-devcenter).
The provided [devCenter.json should follow the structure of this file](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/devcenter.json).

## Agent Configurations

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                                       | Required | Default                                    | Description                                                                                          |
|-----------------------------------------------------|----------|--------------------------------------------|------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH`      | `true`   |                                            | File path to the CSV file which outlines your organization structure                                 |
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMITOPTIONSPATH` | `false`  | All options available.                     | File path a text file which set commit options for specific repositories                             |
| `MODERNE_AGENT_ORGANIZATION_FILE_IDMAPPINGPATH`     | `false`  | Organization use provided ID as their name | File path to a text which overrides any organization name to a different name then the provided ID |
| `MODERNE_AGENT_ORGANIZATION_FILE_DEVCENTERPATH`     | `false`  | A default Devcenter is provided            | File path to a JSON file which outlines the DevCenter for specific organizations                     |

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

| Argument Name                                         | Required | Default                                    | Description                                                                                          |
|-------------------------------------------------------|----------|--------------------------------------------|------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.file.reposCsvPath`      | `true`   |                                            | File path to the CSV file which outlines your organization structure                                 |
| `--moderne.agent.organization.file.commitOptionsPath` | `false`  | All options available.                     | File path a text file which sets commit options for specific repositories                            |
| `--moderne.agent.organization.file.idMappingPath`     | `false`  | Organization use provided ID as their name | File path to a text which overrides any organizations name to a different name then the provided ID |
| `--moderne.agent.organization.file.devCenterPath`     | `false`  | A default Devcenter is provided            | File path to a JSON file which outlines the DevCenter for specific organizations                     |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.file.reposCsvPath=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```

</TabItem>
</Tabs>

