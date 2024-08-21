# Clone and synchronize organizations with Moderne

The Moderne CLI allows users to clone and synchronize organizations known to your Moderne instance.
It is assumed that the CLI is connected to a Moderne instance which has organizations configured.

## Clone
First you will clone an organization onto your local disk with the following command:

```bash
mod git clone moderne clone_into "OpenRewrite"
```

This command consists of:
- `mod git clone moderne` - the command
- `clone_into` - the working directory into which the organization will be cloned
- `"OpenRewrite"` - the name of the organization in your Moderne instance that will be cloned

The default behaviour of the clone command is to do a full clone of all the repositories in an organization.
This is the equivalent of what `git clone` would do for each of the repositories. 
Followed by checking out the commit (and branch) of the latest LST present in your Moderne instance.

{% hint style="info" %}
The **mod git clone moderne** command does not load LSTs and a subsequent **mod build** command is required to be able to run recipes.
{% endhint %}

### Options
You can pass the following clone options into the clone command

- `--filter` - This is the equivalent to the `git clone --filter` option. [Read more](https://git-scm.com/docs/git-clone/en#Documentation/git-clone.txt-code--filtercodeemltfilter-specgtem)
- `--depth` - This is the equivalent to the `git clone --depth` option. [Read more](https://git-scm.com/docs/git-clone/en#Documentation/git-clone.txt-code--depthcodeemltdepthgtem)
- `--single-branch` - Only clone the branch Moderne knows for this repository
- `--limit` - Only clone the first n repositories. Usage is not recommended outside of debugging purposes.
- `--metadata` or `--metadata-only` - Make a [metadata only clone](#metadata-only-clone)

### Directory structure

Repositories are cloned into directories by their path. What the path looks like depends on the SCM the code is stored in. For instance in GitHub the code path looks like `organization/repository` or `openrewrite/rewrite-spring` while in GitLab it can have more path segments `parent-group/child-group/repository`.

As an example, the structure for the `Default` organization on our app-tenant looks like this:
```
.
└── clone_into
    ├── Netflix
    │   ├── ndbench
    │   ├── photon
    │   └── ribbon
    ├── apache
    │   └── maven-doxia
    ├── aws
    │   └── amazon-documentdb-jdbc-driver
    ├── awslabs
    │   └── aws-saas-boost
    ├── finos
    │   ├── messageml-utils
    │   ├── spring-bot
    │   ├── symphony-bdk-java
    │   └── symphony-wdk
    ├── openrewrite
    │   ├── rewrite-recipe-bom
    │   └── rewrite-sql
    └── spring-projects
        ├── spring-data-commons
        └── spring-petclinic
```

### Metadata only clone
If you are only interested in running recipes on LSTs you can use a metadata only clone. This will only download limited metadata for each repository to be used by the `mod build` command to download the correct LST.

This type of clone is much faster than a full clone, but has the downside that it does not allow applying recipe results. 
If you find yourself in a situation that you changed your mind and you do want to apply results you need to [convert a metadata clone into a full clone](#convert-a-metadata-only-clone-into-a-full-clone)

## Organization context
Aside from repositories, `mod git clone moderne` also stores the organization context to file. The `clone_into/.moderne/organization.yml` file contains information about the cloned organization that can be used by subsequent commands. 
Currently `mod git sync moderne` and `mod devcenter run` make use of this organization context.

## Sync
To update your organization with any new commits ingested into Moderne, or to update the [organization context](#organization-context) you can use the following command:

```bash
mod git sync moderne clone_into
```

This command consists of:
- `mod git sync moderne` - the command
- `clone_into` - the working directory into which the organization will be cloned

This command only works in a directory that has an [organization context](#organization-context) which is the result of a [clone](#clone) command. 
It can be used to update a full or metadata only clone or even to [convert a metadata clone into a full clone](#convert-a-metadata-only-clone-into-a-full-clone)

{% hint style="warning" %}
Because it is possible for repositories to have been removed from the organization, the **mod git sync moderne** command also deletes repositories from disk.
{% endhint %}

### Options
- `--last-recipe-run` or `--recipe-run <id>` - Only update repositories that had (search or fix) results in the selected recipe run
- `--metadata` or `--metadata-only` - Make a [metadata only clone](#metadata-only-clone) (only supported if the original clone was metadata only)

### Convert a metadata only clone into a full clone
Recipe results cannot be applied to a metadata only clone. If you do want to apply results you can use the `mod git sync moderne` command to turn your metadata only clone into a full clone simply by ommiting the `--metadata[-only]` option.

### Example

```bash
mod git clone moderne clone_into "OpenRewrite" --metadata
mod build clone_into
mod run clone_into --recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_3
mod git sync moderne clone_into --last-recipe-run
mod git apply clone_into --last-recipe-run
```