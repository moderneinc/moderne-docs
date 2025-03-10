import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure the agent with file sources

In order for Moderne to obtain information about your organizational structure, you will need to configure the Moderne
agent to have access to the required files. This guide will explain how to do that.

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

## Generating repos.csv
When provided your organization details, they must be provided in a CSV file with the following format:

| cloneUrl      | branch   | org1    | org2        | org3 |
|---------------|----------|---------|-------------|------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | main | Open Source | ALL | |
| `https://github.com/Netflix/spectator-go` | main | Netflix | Open Source | ALL |

The organizations under `org1`, `org2`, `org3`, etc. represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.

The above example would be used in Moderne DX to generate an organizational listing of the following:

* ALL
    * Open Source
        * `https://github.com/openrewrite/rewrite-recipe-bom:main`
    * Netflix
        * `https://github.com/Netflix/spectator-go:main`

To generate this `repos.csv`, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)".

## Generating commitOptions.txt
If you want to provide specific commit options for specific repositories, these can be provided in a text file with the following format:
```text
My_Organzation_ID_1=Branch,PullRequest
My_Organzation_ID_2=Branch,Direct,PullRequest
```

Any organization not listed in this file will fall back to either default commit options.

## Generating idMapping.txt
By default an organization name is the same as its ID, if you want to change an organization name, these can be provided in a text file with the following format:
```text
My_Organzation_ID_1=My_Organzation_Name_1
My_Organzation_ID_2=My_Organzation_Name_2
```

## Generating devCenter.json
The provided devCenter.json should follow the structure of this [file](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/devcenter.json).
For more details about configuring your DevCenter please reference this [guide](../dev-center.md#step-3-create-and-configure-the-devcenter).  
