---
sidebar_label: Creating a repos.csv file
description: How to create a repos.csv file that defines your repositories and, potentially, an organizational hierarchy for them.
---

# Creating a repos.csv file

Whether you are configuring mass ingestion of repositories into Moderne or you are defining an organizational hierarchy, you will need to create a `repos.csv` file. 

This doc will provide you with everything you need to know about creating and using this file.

## Supported columns

<details>
<summary>
List of all of the supported columns:
</summary>

| Column name | Required | Description                                                                                                                                                                                                                                            | Example                                                                      |
|-------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| cloneUrl    | `true`   | The URL of the repository that should be ingested.                                                                                                                                                                                                     | `git@github.com:google/guava.git` or `https://github.com/openrewrite/rewrite` |
| branch      | Required for the agent but not required for mass ingestion  | The branch of the above repository that should be ingested.                                                                                                          | `main`                                                                        |
| changeset   | `false`  | If provided, this will check out the repository at this specific commit SHA.                                                                                                                                                                           | `aa5f25ac0031`                                                                |
| java        | `false`  | Configures the JDK to use.                                                                                                                                                                                                                             | `17` or `17-tem` or `17.0.6-tem`                                              |
| jvmopts     | `false`  | JVM options added to tools building LSTs. Must be configured before you can run the build command if non-standard VM options are required.                                                                                                             | `-Xmx4G`                                                                      |
| mavenArgs   | `false`  | Build arguments are added to the end of the Maven command line when building LSTs.                                                                                                                                                                     | `-Pfast`                                                                     |
| gradleArgs  | `false`  | Build arguments that are added to the end of the Gradle command line when building LSTs.                                                                                                                                                               | `-Dmyprop=myvalue`                                                            |
| org*        | `false`  | If you want to configure an organizational hierarchy, you can provide one or more organization columns. Each column will specify an organization the repository should be part of. The column name should be `org` plus a number such as: `org1,org2,org3`.  | `openrewrite`                                                           |
</details>

## Generating this file

To kick-start a `repos.csv` file, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)". Repo fetchers are scripts that generate a CSV file of all of your repositories by making API calls to your source code manager.

## Organizational hierarchy configuration example

The organizations under `org1`, `org2`, `org3`, etc. represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.

| cloneUrl      | branch   | org1    | org2        | org3 |
|---------------|----------|---------|-------------|------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | main | Open Source | ALL | |
| `https://github.com/Netflix/spectator-go` | main | Netflix | Open Source | ALL |

The above example would be used in Moderne DX to generate an organizational listing of the following:

* ALL
  * Open Source
    * `https://github.com/openrewrite/rewrite-recipe-bom:main`
  * Netflix
    * `https://github.com/Netflix/spectator-go:main`

## Full example

Here is a full example of what the first two rows might look like if you defined all of the columns:

```csv
cloneUrl,branch,changeset,java,jvmOpts,mavenArgs,gradleArgs,org1,org2,org3
https://github.com/openrewrite/rewrite-recipe-bom,main,aa5f25ac0031,17-tem,-Xmx4G,-Pfast,-Dmyprop=myvalue,Team 1, Director 1, ALL
```

Formatted in a table:

| cloneUrl                                            | branch | changeset      | java     | jvmOpts   | mavenArgs   | gradleArgs         | org1     | org2         | org3   |
|-----------------------------------------------------|--------|----------------|----------|-----------|-------------|--------------------|----------|--------------|--------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | `main` | `aa5f25ac0031` | `17-tem` | `-Xmx4G`  | `-Pfast`    | `-Dmyprop=myvalue` | `Team 1` | `Director 1` | `ALL`  |