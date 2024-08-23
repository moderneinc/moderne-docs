# How to clone and synchronize organizations

If you've configured organizations in Moderne, you may find it useful to use the CLI to clone or synchronize them to your local machine.

There are a few reasons why you may want to do this:

* You may want to perform a bulk clone of all the repositories in an organization so that you can run and apply recipes on them
* You may want to ensure that all of the repositories are synchronized with what's in Moderne so you can download the LSTs from Moderne without having to do a local build
* You may want to analyze the impact of some changes across an organization

To help you with all of these, this guide will walk you through everything you need to know to clone and synchronize organizations to your local machine. 

## Prerequisites

This guide assumes that you have already [configured the CLI](/user-documentation/moderne-cli/getting-started/cli-intro.md) and connected it to a Moderne instance which has organizations configured in some way.

## Clone command

The [mod git clone moderne](/user-documentation/moderne-cli/cli-reference.md#mod-git-clone-moderne) command will clone the repositories in the specified organization to your local machine. It will then check out the branch and changeset of the LST that Moderne currently knows about for said repository. This ensures that a subsequent `mod build` will be able to download the LST from Moderne – so you don't have to spend the time building each repository locally.

By default, this command will do a **full clone** of **all** of the repositories in the organization. If you only want to run recipes and don't care about the code, you should do a [metadata only clone](#metadata-only-clone) instead. We also offer [other options](#options) for reducing the scope of this command to meet your needs.

Regardless of what options you provide, the base clone command requires two parameters: 

1. A path to the directory that all of the projects will be cloned into
2. The name of the organization you want to clone

Below is an example of how this looks:

```bash
mod git clone moderne clone/into/path "Some Moderne Organization Name"
```

{% hint style="info" %}
The `mod git clone moderne` command **does not** build or download the LSTs for each of the repositories. If you want to run recipes against them, you will need to run the [mod build](/user-documentation/moderne-cli/cli-reference.md#mod-build) command.
{% endhint %}

### Metadata only clone

If you are only interested in running recipes on LSTs (i.e., you don't care about the code or applying recipe changes to said code), you should do a metadata only clone:

```bash
mod git clone moderne clone/into/path "Some Moderne Organization Name" --metadata-only
```

This will significantly increase the speed of the clone command as it only pulls down metadata for each repository. When you go to run `mod build` after this command, this metadata will be used to download the pre-built LST for reach repository.

Please note, though, that if there is no pre-built LST for a repository, you will **not** be able to build that repository and recipe runs will skip over said repository.

If you've performed a metadata only clone and then decided you actually needed the full code, you can [run a command to convert the metadata only clone to a full clone](#convert-a-metadata-only-clone-into-a-full-clone).

### Options

If you want to change what the `mod git clone moderne` command does, you can do so by passing in one or more of the following options:

* `--filter` : This is equivalent to the `git clone --filter` option. [Read more](https://git-scm.com/docs/git-clone/en#Documentation/git-clone.txt-code--filtercodeemltfilter-specgtem).
* `--depth` : This is the equivalent to the `git clone --depth` option. [Read more](https://git-scm.com/docs/git-clone/en#Documentation/git-clone.txt-code--depthcodeemltdepthgtem).
* `--single-branch` : Only clone the branch Moderne knows for this repository.
* `--limit` : Only clone the first "n" repositories. We'd recommend _not_ using this unless you're debugging something.
* `--metadata` or `--metadata-only` : Make a [metadata only clone of the repositories](#metadata-only-clone).

### Directory structure

Repositories are cloned into directories based on their path. What this path looks like depends on what SCM the code is stored in. For instance, in GitHub the code path looks like: `organization/repository` or `openrewrite/rewrite-spring`. On the other hand, GitLab has more segmented paths such as: `parent-group/child-group/repository`.

Below you can see what this structure would look like if you cloned the `Default` organization in [app.moderne.io](https://app.moderne.io/marketplace) into the `default-org` directory:

```bash
.
└── default-org
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

### Organization context

Behind the scenes, `mod git clone moderne` creates a file that stores organizational metadata that will be used by other commands. This file contains things like a list of repositories that don't have LSTs or what the DevCenter configuration looks like.

If you cloned an organization into the `default-org` directory, this file would be found at: `default-org/.moderne/organization.yml`.

Currently, `mod git sync moderne` and `mod devcenter run` require this organizational context.

## Sync command

The [mod git sync moderne](/user-documentation/moderne-cli/cli-reference.md#mod-git-sync-moderne) command has two main uses: 

1. To update your currently-cloned organization's repositories and metadata with any changes (e.g., updated changeset, added/removed repositories, DevCenter configuration)
2. To convert a metadata-only clone into a full clone for the purposes of applying recipe run results

{% hint style="warning" %}
It's possible for repositories to be removed from an organization between when you first ran the [clone command](#clone-command) and when you go to sync the organization. If that happens, the `mod git sync moderne` command will **delete** your local copy of these repositories. 

Please ensure that you are okay with that prior to running this command.
{% endhint %}

### Update organization

To update your organization's repositories and metadata, please run the following command:

```bash
mod git sync moderne path/to/cloned/organization
```

This command expects that you've previously run the [clone command](#clone-command) with the same path as it makes use of the [organizational context](#organization-context) created by said command.

### Update organization for metadata only clones

If you originally did a [metadata only clone](#metadata-only-clone), you can update just the metadata by providing the sync command with the `--metadata-only` option:

```bash
mod git sync moderne path/to/cloned/organization --metadata-only
```

### Convert a metadata only clone into a full clone

If you've performed a [metadata only clone](#metadata-only-clone) and then decided you want the code for the repositories to be downloaded, too (so you can build the repositories locally or apply recipe changes) – you can use the `mod git sync moderne` command to convert some or all of your metadata only clones into a full clone:

#### If you want to convert all of your metadata clones into full clones

```bash
mod git sync moderne path/to/cloned/organization
```

#### If you want to convert only the metadata clones that have recipe results

```bash
mod git sync path/to/cloned/organization --last-recipe-run
```

OR

```bash
mod git sync path/to/cloned/organization --recipe-run <id>
```

## Full example

Below is an example of how you might use all of these commands in practice:

```bash
# Do a metadata clone all of the repos in the OpenRewrite organization
# to the working/dir directory.
mod git clone moderne working/dir "OpenRewrite" --metadata

# Build all of the repositories - which means downloading the LSTs from
# Moderne since only metadata was cloned.
mod build working/dir

# Run the Spring Boot Upgrade on the cloned LSTs
mod run working/dir --recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_3

# Look for the repositories that had results and do a full clone
# of those repositories so we can apply the recipe results to them.
mod git sync moderne working/dir --last-recipe-run

# Apply the changes made by the Spring Boot Upgrade recipe.
mod git apply working/dir --last-recipe-run
```