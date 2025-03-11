---
sidebar_label: Migrating off of an Organization Service
description: How to migrate off of an Organization to provide the organization details from the Agent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from an Organization Service to the organization details as files on the Agent

If you are migrating off of an Organization to provide your organization details as files on your Agent, this guide
will walk you through the steps.
You will first need to identify and generate the files which apply to your setup.

### repos.csv (required)

You must provide a `repos.csv`, this file outlines your organization structure. If you created
your [organization using the template](https://github.com/moderneinc/moderne-organizations), use your existing
`repos.csv`.
If you do not have a `repos.csv`, follow
these [setup instructions to generate one](configure-agent-files-service.md#reposcsv).

### DevCenter.json (optional)

If you are using the DevCenter you will need to provide a devCenter. This file contains a list of devCenters and the
associated organization, here is
a [reference to the expected format](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/resources/devcenter.json#L3).
If you created your [organization using the template](https://github.com/moderneinc/moderne-organizations), you most
likely already have a devCenter.json which matches the expected format. If not you will need to generate a file
which match the above format.

### idMapping.txt (optional)

Many setups don't use the id mapping, this is used if multiple organizations with the same display name, if you are not
using this feature do not provide this file. If you created
your [organization using the template](https://github.com/moderneinc/moderne-organizations) and you are using this
feature use your existing `id-mapping.txt`.
If you do not have an `id-mapping.txt`, follow
these [setup instructions to generate one](configure-agent-files-service.md#idmappingtxt).

### commitOptions.txt (optional)

Many setups don't use the commit options, this allows for organizations to have a different set of commit options to be
available to users, if you are not using this feature do not provide this file. If you created
your [organization using the template](https://github.com/moderneinc/moderne-organizations) and you are using this
feature use your existing `commitOptions.txt`.
If you do not have a `commitOptions.txt`, follow
these [setup instructions to generate one](configure-agent-files-service.md#commitoptionstxt).

## Updating your Agent

After you have identified and collected the required files, put them in a location where your Agent has access to said
files. Update the associated configurations with the associated file paths.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Argument Name                                       | Required | Default                                    | Description                                                                                        |
|-----------------------------------------------------|----------|--------------------------------------------|----------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_FILE_REPOSCSVPATH`      | `true`   |                                            | File path to the CSV file which outlines your organization structure                               |
| `MODERNE_AGENT_ORGANIZATION_FILE_COMMITOPTIONSPATH` | `false`  | All options available.                     | File path a text file which sets commit options for specific repositories                           |
| `MODERNE_AGENT_ORGANIZATION_FILE_IDMAPPINGPATH`     | `false`  | Organization use provided ID as their name | File path to a text which overrides any organization name to a different name then the provided ID |
| `MODERNE_AGENT_ORGANIZATION_FILE_DEVCENTERPATH`     | `false`  | A default Devcenter is provided            | File path to a JSON file which outlines the DevCenter for specific organizations                   |

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                         | Required | Default                                    | Description                                                                                         |
|-------------------------------------------------------|----------|--------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.file.reposCsvPath`      | `true`   |                                            | File path to the CSV file which outlines your organization structure                                |
| `--moderne.agent.organization.file.commitOptionsPath` | `false`  | All options available.                     | File path a text file which sets commit options for specific repositories                           |
| `--moderne.agent.organization.file.idMappingPath`     | `false`  | Organization use provided ID as their name | File path to a text which overrides any organizations name to a different name than the provided ID |
| `--moderne.agent.organization.file.devCenterPath`     | `false`  | A default Devcenter is provided            | File path to a JSON file which outlines the DevCenter for specific organizations                    |

</TabItem>
</Tabs>

Make sure that the following configurations are not provided

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

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

