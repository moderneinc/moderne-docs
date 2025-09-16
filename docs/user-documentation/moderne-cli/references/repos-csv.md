---
sidebar_label: Creating a repos.csv file
description: How to create a repos.csv file that defines your repositories and, potentially, an organizational hierarchy for them.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating a repos.csv file

The `repos.csv` file is a central configuration file that defines your repositories and their organizational structure. This file is commonly used for:

1. **Mass ingestion** - Where you create this file and then use it to build LSTs for all of your repositories and publish them to your artifact repository
2. **Moderne Platform org hierarchy** - Where you provide this file to the Moderne agent that is then used to create organizations in the platform
3. **Moderne DX org hierarchy** - Where you provide this file to Moderne DX to create an organizational hierarchy there
4. **Local operations** - Where you provide the CLI with this file so you can clone repositories or their LSTs to your local machine for things like recipe running or creating a `repos-lock.csv` file to share with others

This doc will provide you with everything you need to know about creating and using this file.

:::tip
After creating your `repos.csv` file and running initial setup commands, the Moderne CLI will generate a [`repos-lock.csv` file](../how-to-guides/repos-lock-csv.md) that captures the exact state of your repositories. This lock file can be shared with team members to ensure everyone has an identical setup.
:::

## Supported columns

| Column name       | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cloneUrl          | `true`   | The URL of the repository that should be ingested. <br /><br />Example: `git@github.com:google/guava.git` or `https://github.com/openrewrite/rewrite`                                                                                                                                                                                                                                                                           |
| branch            | `true`   | The branch of the repository that should be checked out.<br /><br />Example: `main`                                                      |
| origin            | `true`   | The host domain of the repository including any context root used by the server.<br /><br />Example: `github.com`, `gitlab.com`, `bitbucket.org`, `mycompany.com/bitbucket`                        |
| path              | `true`   | The organization and repository name portion of the clone URL. This is typically the remainder of the cloneUrl after `origin` minus any leading symbols and trailing `.git`. For SSH style URLs, the path is the portion after the `:`. <br /><br />Example: `moderne-inc/moderne-docs`, `openrewrite/rewrite`, `businessunit/teamA/subteamB/app` |
| alternateCloneUrl | `false`  | If the `cloneUrl` doesn't work, then we will attempt to clone from this URL. This is commonly filled out if you want to provide both an HTTP link and an SSH link for a repository.                                                                                                                                                                                                                                             |
| changeset         | `false`  | If provided, this will check out the repository at this specific commit SHA. <br /><br />Example: `aa5f25ac0031`                                                                                                                                                                                                                                                            |
| gradleArgs        | `false`  | Build arguments that are added to the end of the Gradle command line when building LSTs.<br /><br />Example: `-Dmyprop=myvalue`                                                                                                                                                                                                                                                                                                 |
| java              | `false`  | Configures the JDK to use during LST generation.<br /><br />Example: `17` or `17-tem` or `17.0.6-tem`                                                                                                                                                                                                                                                                                                                           |
| jvmopts           | `false`  | JVM options added to tools building LSTs. Must be configured before you can run the build command if non-standard VM options are required.<br /><br />Example: `-Xmx4G`                                                                                                                                                                                                                                                         |
| mavenArgs         | `false`  | Build arguments are added to the end of the Maven command line when building LSTs.<br /><br />Example: `-Pfast`                                                                                                                                                                                                                                                                                                                 |
| org*              | `false`  | If you want to configure an organizational hierarchy, you can provide one or more organization columns. Each column will specify an organization the repository should be part of. The column name should be `org` plus a number such as: `org1,org2,org3`. There is no limit for how many orgs you can define.<br /><br />Example: `openrewrite`                                                                               |

### A note on cloneUrl, origin, and path

While the `cloneUrl` and `alternateCloneUrl` are used for specific operations like cloning the repository for LST builds or committing changes after a recipe run, the Moderne platform uses a combination of `origin`, `path` and `branch` to uniquely identify a specific repository.  In general, all repositoring coming from the same SCM server should have the same `origin`, and the `path` and `branch` will differ.  The combination of `origin`, `path`, and `branch` should uniquely identify a row in your `repos.csv`.

Different source control management (SCM) providers present these origin and path differently in their cloneUrls, so it's not possible to infer these values from the cloneUrl alone.  You might also be running your SCM behind a reverse proxy or context root that complicates this.  For this reason, we require that you explicitly provide all of these values for each row.  Here's a guide for finding the origin and path for common SCM providers:

| SCM Provider | Protocol | Example cloneUrl | Example Origin | Example Path | Notes |
|--------------|----------|------------------|----------------|--------------|-------|
| GitHub | HTTPS | `https://github.com/organization/repo.git` | `github.com` | `organization/repo` |  |
| GitHub | SSH   | `git@github.com:organization/repo.git` | `github.com` | `organization/repo` |  |
| GitLab | HTTPS | `https://gitlab.com/groupa/groupb/groupc/repo.git` | `gitlab.com` | `groupa/groupb/groupc/repo` | GitLab allows for deeply nested folders to organize your repositories.  The `path` should include the full set of folders. |
| GitLab | SSH   | `git@gitlab.com:groupa/groupb/groupc/repo.git`    | `gitlab.com` | `groupa/groupb/groupc/repo` | GitLab allows for deeply nested folders to organize your repositories.  The `path` should include the full set of folders. |
| Bitbucket Cloud | HTTPS | `https://bitbucket.org/organization/repo.git` | `bitbucket.org` | `organization/repo` |  |
| Bitbucket Cloud | SSH   | `git@bitbucket.org:organization/repo.git` | `bitbucket.org` | `organization/repo` |  |
| Bitbucket Server | HTTPS | `https://mycompany.com/bitbucket/scm/organization/repo.git` | `mycompany.com/bitbucket` | `organization/repo` | Bitbucket Server adds `/scm/` to HTTPS cloneUrls, but this shouldn't be included in the `path`. <br/><br/>As a self-hosted option, Bitbucket Server might be served with a context root that should be included as part of the `origin`. |
| Bitbucket Server | SSH   | `ssh://mycompany.com:9999/bitbucket/organization/repo.git` | `mycompany.com/bitbucket` | `organization/repo` | As a self-hosted option, Bitbucket Server might be served with a context root and SSH cloneUrls can support this using the `ssh://` syntax. The protocol and port should not be included as part of the `origin` or `path`. |
| Azure DevOps | HTTPS | `https://dev.azure.com/organization/project/_git/repo` | `dev.azure.com` | `organization/project/repo` | Azure DevOps adds `/_git/` to HTTPS cloneUrls which should be excluded from the `path`. |
| Azure DevOps | SSH   | `git@ssh.dev.azure.com:v3/organization/project/repo` | `dev.azure.com` | `organization/project/repo` | Azure DevOps adds `:v3/` to SSH cloneUrls which should be excluded from the `path`. |

For self-hosted providers or providers behind a custom domain, you'll need to identify any context root and include that in the `origin` and not the `path`.

### Using alternateCloneUrl to support multiple protocols

We encourage you to provide both `cloneUrl` and `alternateCloneUrl` to provide both your primary protocol (HTTPS or SSH) as well as the second protocol for maximum flexibility. In situations where your organization allows read access over one protocol but only allows commits through a different protocol, this will allow the Moderne platform to present a single repository but correctly support both workflows.

## Generating this file

To kick-start a `repos.csv` file, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)". Repo fetchers are scripts that generate a CSV file of all of your repositories by making API calls to your source code manager.

## Defining an organizational hierarchy

Org hierarchy is best explained with an example. Consider an organization that consists of two teams and two directors:

```
All
├── Director A
|       └── Team 1
|       └── Team 2
├── Director B

```

The following CSV file would represent this organizational structure:

```bash showLineNumbers
cloneUrl,branch,org1,org2,org3
"https://github.com/apache/maven-doxia","master","Team 1","Director A","ALL"
"https://github.com/Netflix/photon","main","Team 2","Director A","ALL"
"https://github.com/Netflix/ribbon","master","Director A","ALL"
"https://github.com/apache/maven-doxia","master","Director B","ALL"
```

In the above file, we define 5 organizations (ALL, Director A, Director B, Team 1, and Team 2) and 3 repositories. Notice that one repository can be defined multiple times if you want two distinct organizations to have access to it.

Also note that organizations on the left are children of organizations on the right. For instance, `Team 1` is a child of `Director A` which is a child of `ALL`.

:::tip
Comma-separated files (CSV) are best manipulated using a dedicated editor such as Microsoft Excel, Google Sheets, or Apple Numbers. Here is what the above CSV would look like on Apple Numbers:

<figure>
  ![](./assets/numbers-csv-screenshot.png)
  <figcaption></figcaption>
</figure>
:::

## Formatting details

* A single row may not have more columns than what is defined in the first row.
* A single repository may be associated with multiple organizations by being referenced in multiple rows. In the above example, `maven-doxia` is associated with both `Director B` and `Team 1`.
* You can add empty orgs to the beginning, middle, or end of a row to make them line up as desired (although you don't need to).
* You can choose to surround elements with quotes or not depending on your preference – just keep in mind general CSV formatting rules.
* You can order columns in any way.

<figure>
  ![](./assets/repos-csv-example.png)
  <figcaption>_An example demonstrating various orgs lining up with blanks in between_.</figcaption>
</figure>
