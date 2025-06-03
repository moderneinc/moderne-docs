---
sidebar_label: Organizations source migration guide
description: How to migrate repos.csv from an Organizations service to DX.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization source migration

In order to simplify Moderne's operational complexity, we decided that configuring organizational hierarchies should only require creating a file and giving it to Moderne DX (either via direct access or via an unauthenticated HTTP/S endpoint), rather than running a dedicated endpoint for organizational hierarchy via an Organizations service.

While you can still [run an Organizations service](./dx-org-service.md) to restrict access to various repositories/organizations, the functionality around org hierarchies is being moved to DX.

This guide will walk you through everything you need to know to migrate this functionality to Moderne DX.

## Migration instructions

At a high-level, the migration process is as follows:

1. Create the new files.
2. Configure DX to use them.
3. (Optionally) If you don't plan on using an Organizations service anymore, remove it from your system.

### 1. Create the new files and put them somewhere DX can access

1. Copy the `devcenter.json` file from your Organization service and put it somewhere where DX can access. This could mean putting this file on the same file system that DX has access to – or it could mean putting it behind an unauthenticated HTTP/S endpoint.
2. Follow [our guide for creating a repos.csv file](../../references/repos-csv.md). Alternatively, if your Organization service already uses a `repos.csv`, you may copy that file directly and put it somewhere where DX can access (either by putting it on a file system DX has access to or by putting the file behind an unauthenticated HTTP/S endpoint that DX can call).

### 2. Configure DX to use the new variables 

Update the relevant variables in your DX deployment so that DX knows where these files are.

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                 | Required | Default | Description                                                                                                                                                                                      |
|-----------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_REPOSCSV`            | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`.               |
| `MODERNE_DX_ORGANIZATION_DEVCENTERJSON`       | `false`  |         | The path of your `devcenter.json` file that provides the DevCenter configurations. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/devcenter.json`. |
| `MODERNE_DX_ORGANIZATION_SYNCINTERVALSECONDS` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `--moderne.dx.organization.url`.                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                   | Required | Default | Description                                                                                                                                                                                      |
|-------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.organization.reposCsv`            | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`.               |
| `--moderne.dx.organization.devCenterJson`       | `false`  |         | The path of your `devcenter.json` file that provides the DevCenter configurations. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/devcenter.json`. |
| `--moderne.dx.organization.syncIntervalSeconds` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `--moderne.dx.organization.url`.                                                                      |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```
</TabItem>
</Tabs>

