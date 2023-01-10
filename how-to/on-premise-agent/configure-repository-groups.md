---
description: >-
  Tenant-defined repository groups. Configure repository groups that will be
  available to all users.
---

# Configure Repository groups

This guide will walk you through configuring global repository groups with the on-premise agent

#### Step 1 - Create repository\_groups.json file

1. [Create](../../references/managing-repository-groups.md#how-to-create-a-repository-group) and [export](../../references/managing-repository-groups.md#how-to-export-repository-groups-json) repository groups from the Moderne application.&#x20;
2.  Gather configuration from your team members and construct a `repository_groups.json` file:

    ```json
    {  
      "Default": {
        "name": "Default",
        "description": null,
        "repositories": [
          {
            "origin": "github.com",
            "path": "Netflix/astyanax",
            "branch": "master",
          },
          {
            "origin": "github.com",
            "path": "Netflix/curator",
            "branch": "master",
          }
        ]
      },
      "Servo": {
        "name": "Servo",
        "description": "servo clone",
        "repositories": [
          {
            "origin": "bitbucket.moderne.ninja:7999",
            "path": "mod/servo",
            "branch": "master",
          }
        ]
      }
    }
    ```

#### Step 2 - Configure the Moderne Agent arguments

{% tabs %}
{% tab title="OCI Container" %}
Provide the path to the repository group for your container.&#x20;

* `MODERNE_AGENT_REPOSITORY_GROUP_FILE_PATH` - Application id configured in the previous step
* Note: You must have the file containing the repository groups config mounted.

Example&#x20;

```
docker run \
...
-e MODERNE_AGENT_REPOSITORY_GROUP_FILE_PATH=/app/repository_groups.json \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
* `moderne.agent.repositoryGroupFilePath` - Application id configured in the previous step

Example

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.repositoryGroupFilePath=/app/repository_groups.json \
...
```
{% endtab %}
{% endtabs %}

