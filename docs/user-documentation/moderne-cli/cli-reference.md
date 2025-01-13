# Moderne CLI reference

## Table of contents

* [**mod**](#mod)
* [**mod afterburner**](#mod-afterburner)
* [**mod audit**](#mod-audit)
* [**mod audit builds**](#mod-audit-builds)
* [**mod audit builds list**](#mod-audit-builds-list)
* [**mod audit runs**](#mod-audit-runs)
* [**mod audit runs list**](#mod-audit-runs-list)
* [**mod build**](#mod-build)
* [**mod clean**](#mod-clean)
* [**mod clean builds**](#mod-clean-builds)
* [**mod clean runs**](#mod-clean-runs)
* [**mod config**](#mod-config)
* [**mod config build**](#mod-config-build)
* [**mod config build active-styles**](#mod-config-build-active-styles)
* [**mod config build active-styles delete**](#mod-config-build-active-styles-delete)
* [**mod config build active-styles edit**](#mod-config-build-active-styles-edit)
* [**mod config build active-styles show**](#mod-config-build-active-styles-show)
* [**mod config build bazel**](#mod-config-build-bazel)
* [**mod config build bazel arguments**](#mod-config-build-bazel-arguments)
* [**mod config build bazel arguments delete**](#mod-config-build-bazel-arguments-delete)
* [**mod config build bazel arguments edit**](#mod-config-build-bazel-arguments-edit)
* [**mod config build bazel arguments show**](#mod-config-build-bazel-arguments-show)
* [**mod config build bazel executable**](#mod-config-build-bazel-executable)
* [**mod config build bazel executable delete**](#mod-config-build-bazel-executable-delete)
* [**mod config build bazel executable edit**](#mod-config-build-bazel-executable-edit)
* [**mod config build bazel executable show**](#mod-config-build-bazel-executable-show)
* [**mod config build bazel timeout**](#mod-config-build-bazel-timeout)
* [**mod config build bazel timeout delete**](#mod-config-build-bazel-timeout-delete)
* [**mod config build bazel timeout edit**](#mod-config-build-bazel-timeout-edit)
* [**mod config build bazel timeout show**](#mod-config-build-bazel-timeout-show)
* [**mod config build dotnet**](#mod-config-build-dotnet)
* [**mod config build dotnet timeout**](#mod-config-build-dotnet-timeout)
* [**mod config build dotnet timeout delete**](#mod-config-build-dotnet-timeout-delete)
* [**mod config build dotnet timeout edit**](#mod-config-build-dotnet-timeout-edit)
* [**mod config build dotnet timeout show**](#mod-config-build-dotnet-timeout-show)
* [**mod config build gradle**](#mod-config-build-gradle)
* [**mod config build gradle arguments**](#mod-config-build-gradle-arguments)
* [**mod config build gradle arguments delete**](#mod-config-build-gradle-arguments-delete)
* [**mod config build gradle arguments edit**](#mod-config-build-gradle-arguments-edit)
* [**mod config build gradle arguments show**](#mod-config-build-gradle-arguments-show)
* ~~[**mod config build gradle root**](#mod-config-build-gradle-root-deprecated)~~ (deprecated)
* ~~[**mod config build gradle root delete**](#mod-config-build-gradle-root-delete-deprecated)~~ (deprecated)
* ~~[**mod config build gradle root edit**](#mod-config-build-gradle-root-edit-deprecated)~~ (deprecated)
* ~~[**mod config build gradle root show**](#mod-config-build-gradle-root-show-deprecated)~~ (deprecated)
* [**mod config build gradle timeout**](#mod-config-build-gradle-timeout)
* [**mod config build gradle timeout delete**](#mod-config-build-gradle-timeout-delete)
* [**mod config build gradle timeout edit**](#mod-config-build-gradle-timeout-edit)
* [**mod config build gradle timeout show**](#mod-config-build-gradle-timeout-show)
* [**mod config build maven**](#mod-config-build-maven)
* [**mod config build maven arguments**](#mod-config-build-maven-arguments)
* [**mod config build maven arguments delete**](#mod-config-build-maven-arguments-delete)
* [**mod config build maven arguments edit**](#mod-config-build-maven-arguments-edit)
* [**mod config build maven arguments show**](#mod-config-build-maven-arguments-show)
* [**mod config build maven settings**](#mod-config-build-maven-settings)
* [**mod config build maven settings delete**](#mod-config-build-maven-settings-delete)
* [**mod config build maven settings edit**](#mod-config-build-maven-settings-edit)
* [**mod config build maven settings show**](#mod-config-build-maven-settings-show)
* [**mod config build maven timeout**](#mod-config-build-maven-timeout)
* [**mod config build maven timeout delete**](#mod-config-build-maven-timeout-delete)
* [**mod config build maven timeout edit**](#mod-config-build-maven-timeout-edit)
* [**mod config build maven timeout show**](#mod-config-build-maven-timeout-show)
* [**mod config clone**](#mod-config-clone)
* [**mod config clone protocol**](#mod-config-clone-protocol)
* [**mod config clone protocol delete**](#mod-config-clone-protocol-delete)
* [**mod config clone protocol edit**](#mod-config-clone-protocol-edit)
* [**mod config clone protocol show**](#mod-config-clone-protocol-show)
* [**mod config dotnet**](#mod-config-dotnet)
* [**mod config dotnet installation**](#mod-config-dotnet-installation)
* [**mod config dotnet installation edit**](#mod-config-dotnet-installation-edit)
* [**mod config dotnet installation delete**](#mod-config-dotnet-installation-delete)
* [**mod config dotnet installation list**](#mod-config-dotnet-installation-list)
* [**mod config environment**](#mod-config-environment)
* [**mod config environment show**](#mod-config-environment-show)
* [**mod config features**](#mod-config-features)
* [**mod config features index-recipes**](#mod-config-features-index-recipes)
* [**mod config features no-maven-central**](#mod-config-features-no-maven-central)
* [**mod config features no-nuget-org**](#mod-config-features-no-nuget-org)
* [**mod config http**](#mod-config-http)
* [**mod config http proxy**](#mod-config-http-proxy)
* [**mod config http proxy delete**](#mod-config-http-proxy-delete)
* [**mod config http proxy edit**](#mod-config-http-proxy-edit)
* [**mod config http proxy show**](#mod-config-http-proxy-show)
* [**mod config http trust-store**](#mod-config-http-trust-store)
* [**mod config http trust-store delete**](#mod-config-http-trust-store-delete)
* [**mod config http trust-store edit**](#mod-config-http-trust-store-edit)
* [**mod config http trust-store edit system**](#mod-config-http-trust-store-edit-system)
* [**mod config http trust-store edit file**](#mod-config-http-trust-store-edit-file)
* [**mod config http trust-store edit java-home**](#mod-config-http-trust-store-edit-java-home)
* [**mod config http trust-store show**](#mod-config-http-trust-store-show)
* [**mod config java**](#mod-config-java)
* [**mod config java jdk**](#mod-config-java-jdk)
* [**mod config java jdk edit**](#mod-config-java-jdk-edit)
* [**mod config java jdk delete**](#mod-config-java-jdk-delete)
* [**mod config java jdk list**](#mod-config-java-jdk-list)
* [**mod config java options**](#mod-config-java-options)
* [**mod config java options edit**](#mod-config-java-options-edit)
* [**mod config java options delete**](#mod-config-java-options-delete)
* [**mod config java options show**](#mod-config-java-options-show)
* [**mod config java version**](#mod-config-java-version)
* [**mod config java version edit**](#mod-config-java-version-edit)
* [**mod config java version delete**](#mod-config-java-version-delete)
* [**mod config java version show**](#mod-config-java-version-show)
* [**mod config license**](#mod-config-license)
* [**mod config license delete**](#mod-config-license-delete)
* [**mod config license edit**](#mod-config-license-edit)
* [**mod config license show**](#mod-config-license-show)
* [**mod config license moderne**](#mod-config-license-moderne)
* [**mod config license moderne sync**](#mod-config-license-moderne-sync)
* [**mod config lsts**](#mod-config-lsts)
* [**mod config lsts artifacts**](#mod-config-lsts-artifacts)
* [**mod config lsts artifacts artifactory**](#mod-config-lsts-artifacts-artifactory)
* [**mod config lsts artifacts artifactory edit**](#mod-config-lsts-artifacts-artifactory-edit)
* [**mod config lsts artifacts artifactory delete**](#mod-config-lsts-artifacts-artifactory-delete)
* [**mod config lsts artifacts artifactory show**](#mod-config-lsts-artifacts-artifactory-show)
* [**mod config lsts artifacts show**](#mod-config-lsts-artifacts-show)
* [**mod config lsts artifacts maven**](#mod-config-lsts-artifacts-maven)
* [**mod config lsts artifacts maven edit**](#mod-config-lsts-artifacts-maven-edit)
* [**mod config lsts artifacts maven delete**](#mod-config-lsts-artifacts-maven-delete)
* [**mod config lsts artifacts maven show**](#mod-config-lsts-artifacts-maven-show)
* [**mod config moderne**](#mod-config-moderne)
* [**mod config moderne delete**](#mod-config-moderne-delete)
* [**mod config moderne edit**](#mod-config-moderne-edit)
* [**mod config moderne local**](#mod-config-moderne-local)
* [**mod config moderne show**](#mod-config-moderne-show)
* [**mod config moderne organizations**](#mod-config-moderne-organizations)
* [**mod config moderne organizations show**](#mod-config-moderne-organizations-show)
* [**mod config recipes**](#mod-config-recipes)
* [**mod config recipes artifacts**](#mod-config-recipes-artifacts)
* [**mod config recipes artifacts artifactory**](#mod-config-recipes-artifacts-artifactory)
* [**mod config recipes artifacts artifactory edit**](#mod-config-recipes-artifacts-artifactory-edit)
* [**mod config recipes artifacts artifactory delete**](#mod-config-recipes-artifacts-artifactory-delete)
* [**mod config recipes artifacts artifactory show**](#mod-config-recipes-artifacts-artifactory-show)
* [**mod config recipes artifacts show**](#mod-config-recipes-artifacts-show)
* ~~[**mod config recipes artifacts default-repositories**](#mod-config-recipes-artifacts-default-repositories-deprecated)~~ (deprecated)
* ~~[**mod config recipes artifacts default-repositories enable**](#mod-config-recipes-artifacts-default-repositories-enable-deprecated)~~ (deprecated)
* ~~[**mod config recipes artifacts default-repositories disable**](#mod-config-recipes-artifacts-default-repositories-disable-deprecated)~~ (deprecated)
* ~~[**mod config recipes artifacts default-repositories show**](#mod-config-recipes-artifacts-default-repositories-show-deprecated)~~ (deprecated)
* [**mod config recipes artifacts maven**](#mod-config-recipes-artifacts-maven)
* [**mod config recipes artifacts maven edit**](#mod-config-recipes-artifacts-maven-edit)
* [**mod config recipes artifacts maven delete**](#mod-config-recipes-artifacts-maven-delete)
* [**mod config recipes artifacts maven show**](#mod-config-recipes-artifacts-maven-show)
* [**mod config recipes artifacts nuget**](#mod-config-recipes-artifacts-nuget)
* [**mod config recipes artifacts nuget edit**](#mod-config-recipes-artifacts-nuget-edit)
* [**mod config recipes artifacts nuget delete**](#mod-config-recipes-artifacts-nuget-delete)
* [**mod config recipes artifacts nuget show**](#mod-config-recipes-artifacts-nuget-show)
* [**mod config recipes export**](#mod-config-recipes-export)
* [**mod config recipes export json**](#mod-config-recipes-export-json)
* [**mod config recipes export csv**](#mod-config-recipes-export-csv)
* [**mod config recipes jar**](#mod-config-recipes-jar)
* [**mod config recipes jar install**](#mod-config-recipes-jar-install)
* [**mod config recipes jar delete**](#mod-config-recipes-jar-delete)
* [**mod config recipes nupkg**](#mod-config-recipes-nupkg)
* [**mod config recipes nupkg install**](#mod-config-recipes-nupkg-install)
* [**mod config recipes nupkg delete**](#mod-config-recipes-nupkg-delete)
* [**mod config recipes moderne**](#mod-config-recipes-moderne)
* [**mod config recipes moderne install**](#mod-config-recipes-moderne-install)
* [**mod config recipes moderne push**](#mod-config-recipes-moderne-push)
* [**mod config recipes moderne sync**](#mod-config-recipes-moderne-sync)
* [**mod config recipes delete**](#mod-config-recipes-delete)
* [**mod config recipes list**](#mod-config-recipes-list)
* [**mod config recipes search**](#mod-config-recipes-search)
* [**mod config recipes yaml**](#mod-config-recipes-yaml)
* [**mod config recipes yaml install**](#mod-config-recipes-yaml-install)
* [**mod config recipes yaml delete**](#mod-config-recipes-yaml-delete)
* [**mod config run**](#mod-config-run)
* [**mod config run timeout**](#mod-config-run-timeout)
* [**mod config run timeout delete**](#mod-config-run-timeout-delete)
* [**mod config run timeout edit**](#mod-config-run-timeout-edit)
* [**mod config run timeout show**](#mod-config-run-timeout-show)
* [**mod config scm**](#mod-config-scm)
* [**mod config scm gitlab**](#mod-config-scm-gitlab)
* ~~[**mod config scm gitlab base-url**](#mod-config-scm-gitlab-base-url-deprecated)~~ (deprecated)
* ~~[**mod config scm gitlab base-url delete**](#mod-config-scm-gitlab-base-url-delete-deprecated)~~ (deprecated)
* ~~[**mod config scm gitlab base-url edit**](#mod-config-scm-gitlab-base-url-edit-deprecated)~~ (deprecated)
* ~~[**mod config scm gitlab base-url show**](#mod-config-scm-gitlab-base-url-show-deprecated)~~ (deprecated)
* [**mod config scm gitlab base-urls**](#mod-config-scm-gitlab-base-urls)
* [**mod config scm gitlab base-urls delete**](#mod-config-scm-gitlab-base-urls-delete)
* [**mod config scm gitlab base-urls edit**](#mod-config-scm-gitlab-base-urls-edit)
* [**mod config scm gitlab base-urls show**](#mod-config-scm-gitlab-base-urls-show)
* [**mod config scm bitbucket**](#mod-config-scm-bitbucket)
* [**mod config scm bitbucket base-urls**](#mod-config-scm-bitbucket-base-urls)
* [**mod config scm bitbucket base-urls delete**](#mod-config-scm-bitbucket-base-urls-delete)
* [**mod config scm bitbucket base-urls edit**](#mod-config-scm-bitbucket-base-urls-edit)
* [**mod config scm bitbucket base-urls show**](#mod-config-scm-bitbucket-base-urls-show)
* [**mod config scm moderne**](#mod-config-scm-moderne)
* [**mod config scm moderne sync**](#mod-config-scm-moderne-sync)
* [**mod config scm add**](#mod-config-scm-add)
* [**mod config scm remove**](#mod-config-scm-remove)
* [**mod config scm show**](#mod-config-scm-show)
* [**mod config user**](#mod-config-user)
* [**mod config user delete**](#mod-config-user-delete)
* [**mod config user edit**](#mod-config-user-edit)
* [**mod config user show**](#mod-config-user-show)
* [**mod devcenter**](#mod-devcenter)
* [**mod devcenter run**](#mod-devcenter-run)
* [**mod exec**](#mod-exec)
* [**mod git**](#mod-git)
* [**mod git add**](#mod-git-add)
* [**mod git apply**](#mod-git-apply)
* [**mod git checkout**](#mod-git-checkout)
* [**mod git clone**](#mod-git-clone)
* [**mod git clone csv**](#mod-git-clone-csv)
* [**mod git clone json**](#mod-git-clone-json)
* [**mod git clone moderne**](#mod-git-clone-moderne)
* [**mod git commit**](#mod-git-commit)
* [**mod git pull**](#mod-git-pull)
* [**mod git push**](#mod-git-push)
* [**mod git reset**](#mod-git-reset)
* [**mod git rev-parse**](#mod-git-rev-parse)
* [**mod git stashset**](#mod-git-stashset)
* [**mod git stashset apply**](#mod-git-stashset-apply)
* [**mod git stashset push**](#mod-git-stashset-push)
* [**mod git stashset**](#mod-git-stashset)
* [**mod git stashset apply**](#mod-git-stashset-apply)
* [**mod git stashset push**](#mod-git-stashset-push)
* [**mod git sync**](#mod-git-sync)
* [**mod git sync moderne**](#mod-git-sync-moderne)
* [**mod git status**](#mod-git-status)
* [**mod log**](#mod-log)
* [**mod log builds**](#mod-log-builds)
* [**mod log builds add**](#mod-log-builds-add)
* [**mod log runs**](#mod-log-runs)
* [**mod log runs add**](#mod-log-runs-add)
* [**mod list**](#mod-list)
* [**mod monitor**](#mod-monitor)
* [**mod publish**](#mod-publish)
* [**mod run**](#mod-run)
* [**mod run-history**](#mod-run-history)
* [**mod study**](#mod-study)
* [**mod generate-completion**](#mod-generate-completion)

## mod


Automated code remediation.

### Usage

```
mod [subcommands]
```

### Options

| Name | Description |
| ---- | ----------- |
| --version |  Display version info. |

### Subcommands

* `afterburner`: (INCUBATING) Indexes built LSTs to accelerate recipe execution.
* `audit`: (INCUBATING) Perform an audit of recent activity.
* `build`: Generates LST artifacts for one or more repositories.
* `clean`: Clean build and run artifacts produced by the CLI.
* `config`: Global configuration options that are required by some CLI commands.
* `devcenter`: DevCenter operations.
* `exec`: Execute an arbitrary shell command recursively on selected repository roots.
* `git`: Multi-repository git operations.
* `log`: Manages a log aggregate.
* `list`: Lists the repositories that can be built and published.
* `monitor`: (INCUBATING) Launches an HTTP server used to monitor the CLI.
* `publish`: Publishes the LST artifacts for one or more projects.
* `run`: Runs an OpenRewrite recipe locally on pre-built LSTS.
* `run-history`: Get information about the most recent recipe runs. This will be transitioning to **mod audit runs list** eventually. A deprecation notice will be added here when we suggest adopting the alternative.
* `study`: Produces studies from OpenRewrite recipe data tables locally.
* `generate-completion`

## mod afterburner

(INCUBATING) Indexes built LSTs to accelerate recipe execution.


The intent of this command is to allow future recipe runs to avoid the cost of interacting with LSTs that could provably never return a result. Not every recipe is possible to optimize in this way, but some common ones are, and especially those recipes that are used as common actions in IDE integrations. The contents of these indexes is not guaranteed to be stable between versions of the CLI, and they are intended to only be used by the CLI itself in subsequent run commands.

### Usage

```
mod afterburner [parameters]
```

### Examples

```
mod afterburner /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod audit

(INCUBATING) Perform an audit of recent activity.


Sources information from the activity log kept locally to provide reports in various forms.

### Usage

```
mod audit [subcommands]
```


### Subcommands

* `builds`: (INCUBATING) Perform an audit of recent build activity.
* `runs`: (INCUBATING) Perform an audit of recent recipe running activity.

## mod audit builds

(INCUBATING) Perform an audit of recent build activity.


Sources information from the activity log kept locally to provide reports on LST building activity.

### Usage

```
mod audit builds [subcommands]
```


### Subcommands

* `list`: (INCUBATING) Prints build activity to standard output.

## mod audit builds list

(INCUBATING) Prints build activity to standard output.


Provides a form of build activity that can be directly consumed by reading standard output.

### Usage

```
mod audit builds list [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --streaming |  (INCUBATING) Stream results from the audit to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like usage search in the IDE. |  |


## mod audit runs

(INCUBATING) Perform an audit of recent recipe running activity.


Sources information from the activity log kept locally to provide reports on recipe running activity.

### Usage

```
mod audit runs [subcommands]
```


### Subcommands

* `list`: (INCUBATING) Prints recipe run activity to standard output.

## mod audit runs list

(INCUBATING) Prints recipe run activity to standard output.


Provides a form of recipe run activity that can be directly consumed by reading standard output.

### Usage

```
mod audit runs list [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --streaming |  (INCUBATING) Stream results from the audit to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like usage search in the IDE. |  |


## mod build

Generates LST artifacts for one or more repositories.


Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them or they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend automating this. Please see the **moderneinc/mass-ingest-example** repository on GitHub for an idea of how to do that.

If the path itself is not a Git repository, then this command will recursively look through the directories to find Git repositories that match the **repository-*** options.

If this command executes successfully, the LST artifact for each project will be stored in a **.moderne/build** directory inside of each repository that is built.

If you've set up a connection with Moderne (by running the **mod config moderne** command), this command will attempt to download LST artifacts from Moderne instead of building them locally. This will allow you to quickly run recipes and make changes. If you do not want this command to look for LST artifacts in Moderne, you can add the **--no-download** flag.

### Usage

```
mod build [parameters]
```

### Examples

```
mod build /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --download-only |  Only download LSTs from Moderne. If no download is available, do not build the LST from source. |  |
| --dry-run |  Do not actually build the LST(s), but list the steps that would be required to do so. |  |
| --no-download |  Do not attempt to download LSTs from Moderne. |  |
| --offline |  When an underlying build tool has an offline mode, enable it. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --streaming |  (INCUBATING) Stream results from the build to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like in the IDE. |  |


## mod clean

Clean build and run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean [subcommands]
```

### Examples

```
mod clean builds /path/to/project --keep 1
```


### Subcommands

* `builds`: Clean build artifacts produced by the CLI.
* `runs`: Clean run artifacts produced by the CLI.

## mod clean builds

Clean build artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean builds [parameters]
```

### Examples

```
mod clean builds /path/to/project --keep 1
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --keep |  Keep this many run artifacts and clean all others. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod clean runs

Clean run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean runs [parameters]
```

### Examples

```
mod clean runs /path/to/project --keep 1
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --keep |  Keep this many run artifacts and clean all others. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod config

Global configuration options that are required by some CLI commands.


Configuration set here is used as needed in all subsequent commands.

### Usage

```
mod config [subcommands]
```

### Examples

```
mod config moderne edit --api <tenant-api-gateway> --token <token>
```


### Subcommands

* `build`: Configures build tools used to produce LSTs.
* `clone`: Configures cloning behavior.
* `dotnet`: Configures DotNet options used for building LSTs and running recipes.
* `environment`: The build environment that the CLI is running in.
* `features`: Configures experimental features.
* `http`: Configures HTTP options that will be used throughout the CLI.
* `java`: Configures Java options used for building LSTs and running recipes.
* `license`: Configure a license key.
* `lsts`: Configures LSTs production and publishing. 
* `moderne`: Configures the connection to Moderne. Must be configured before you can install and run recipes.
* `recipes`: Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.
* `run`: Configures recipe run behavior.
* `scm`: Configures source code management.
* `user`: Configure the active user.

## mod config build

Configures build tools used to produce LSTs.




### Usage

```
mod config build [subcommands]
```


### Subcommands

* `active-styles`: Configure the active styles to use when building LSTs.
* `bazel`: Configures Bazel as it is used for LST production.
* `dotnet`: Configures dotnet as it is used for LST production.
* `gradle`: Configures Gradle as it is used to resolve recipe dependencies and when running recipes.
* `maven`: Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.

## mod config build active-styles

Configure the active styles to use when building LSTs.


Overriding active styles circumvents auto-detection of styles in the production of LSTs.

### Usage

```
mod config build active-styles [subcommands]
```


### Subcommands

* `delete`: Removes overriding active styles.
* `edit`: Configure the active styles to use when building LSTs.
* `show`: Displays the configured overriding active styles.

## mod config build active-styles delete

Removes overriding active styles.


### Usage

```
mod config build active-styles delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build active-styles edit

Configure the active styles to use when building LSTs.


Overriding active styles circumvents auto-detection of styles in the production of LSTs.

### Usage

```
mod config build active-styles edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| activeStyles |  Additional build arguments that are added to the end of the Gradle command line. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build active-styles show

Displays the configured overriding active styles.


### Usage

```
mod config build active-styles show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel

Configures Bazel as it is used for LST production.




### Usage

```
mod config build bazel [subcommands]
```


### Subcommands

* `arguments`: Configure Bazel build arguments.
* `executable`: Configure Bazel executable.
* `timeout`: Configure the build timeout.

## mod config build bazel arguments

Configure Bazel build arguments.


Build arguments are added to the end of the Bazel command line when building LSTs.

### Usage

```
mod config build bazel arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Bazel.
* `edit`: Configure Bazel build arguments.
* `show`: Displays the configured Bazel additional build arguments.

## mod config build bazel arguments delete

Removes additional build arguments for Bazel.


### Usage

```
mod config build bazel arguments delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel arguments edit

Configure Bazel build arguments.


Build arguments are added to the end of the Bazel command line when building LSTs.

### Usage

```
mod config build bazel arguments edit
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel arguments show

Displays the configured Bazel additional build arguments.


### Usage

```
mod config build bazel arguments show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel executable

Configure Bazel executable.


Allows you to specify the location of a Bazel _settings.xml_ file that should be used when Bazel is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **`${ENV_VAR}`** syntax.

### Usage

```
mod config build bazel executable [subcommands]
```

### Subcommands

* `delete`: Removes the configured Bazel executable.
* `edit`: Configure the Bazel executable.
* `show`: Displays the configured Bazel executable.

## mod config build bazel executable delete

Removes the configured Bazel executable.


The CLI will revert to its default mode of detecting the Bazel executable.

### Usage

```
mod config build bazel executable delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel executable edit

Configure the Bazel executable.


Determines whether _bazelisk_ or _bazel_ will be used.

### Usage

```
mod config build bazel executable edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| executable |  The bazel executable to use. This can be just _bazelisk_ or _bazel_ if either is on PATH or a fully qualified executable name if not. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel executable show

Displays the configured Bazel executable.




### Usage

```
mod config build bazel executable show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build bazel timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build bazel timeout delete

Removes the configured build timeout.


### Usage

```
mod config build bazel timeout delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build bazel timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| duration |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel timeout show

Displays the configured build timeout.


### Usage

```
mod config build bazel timeout show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build dotnet

Configures dotnet as it is used for LST production.




### Usage

```
mod config build dotnet [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build dotnet timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build dotnet timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build dotnet timeout delete

Removes the configured build timeout.


### Usage

```
mod config build dotnet timeout delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build dotnet timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build dotnet timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| duration |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build dotnet timeout show

Displays the configured build timeout.


### Usage

```
mod config build dotnet timeout show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle

Configures Gradle as it is used to resolve recipe dependencies and when running recipes.




### Usage

```
mod config build gradle [subcommands]
```

### Examples

```
mod config build gradle arguments edit --refresh-dependencies
```


### Subcommands

* `arguments`: Configure Gradle build arguments.
* `root`: (DEPRECATED) Configure the directory containing the Gradle root build. This could be `.` to force the CLI to use the root directory of the repository as the Gradle build and look no deeper.
* `timeout`: Configure the build timeout.

## mod config build gradle arguments

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Gradle.
* `edit`: Configure Gradle build arguments.
* `show`: Displays the configured Gradle additional build arguments.

## mod config build gradle arguments delete

Removes additional build arguments for Gradle.


### Usage

```
mod config build gradle arguments delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle arguments edit

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments edit
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle arguments show

Displays the configured Gradle additional build arguments.


### Usage

```
mod config build gradle arguments show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root (deprecated)

(DEPRECATED) Configure the directory containing the Gradle root build. This could be `.` to force the CLI to use the root directory of the repository as the Gradle build and look no deeper.


Use builds steps configuration instead. When this is set, the CLI does not attempt to find root Gradle builds in subdirectories or siblings recursively.

### Usage

```
mod config build gradle root [subcommands]
```


### Subcommands

* `delete`: (DEPRECATED) Removes the configured directory containing the Gradle root build.
* `edit`: (DEPRECATED) Configure the directory containing the Gradle root build.
* `show`: (DEPRECATED) Displays the configured directory containing the Gradle root build.

## mod config build gradle root delete (deprecated)

(DEPRECATED) Removes the configured directory containing the Gradle root build.


(DEPRECATED) Use builds steps configuration instead.

### Usage

```
mod config build gradle root delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root edit (deprecated)

(DEPRECATED) Configure the directory containing the Gradle root build.


Use builds steps configuration instead. When this is set, the CLI does not attempt to find root Gradle builds in subdirectories or siblings recursively.

### Usage

```
mod config build gradle root edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| root |  The directory containing the Gradle root build. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root show (deprecated)

(DEPRECATED) Displays the configured directory containing the Gradle root build.


Use build steps configuration instead.

### Usage

```
mod config build gradle root show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build gradle timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build gradle timeout delete

Removes the configured build timeout.


### Usage

```
mod config build gradle timeout delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build gradle timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| duration |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle timeout show

Displays the configured build timeout.


### Usage

```
mod config build gradle timeout show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven

Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.




### Usage

```
mod config build maven [subcommands]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```


### Subcommands

* `arguments`: Configure Maven build arguments.
* `settings`: Configure Maven settings.
* `timeout`: Configure the build timeout.

## mod config build maven arguments

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Maven.
* `edit`: Configure Maven build arguments.
* `show`: Displays the configured Maven additional build arguments.

## mod config build maven arguments delete

Removes additional build arguments for Maven.


### Usage

```
mod config build maven arguments delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven arguments edit

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments edit
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven arguments show

Displays the configured Maven additional build arguments.


### Usage

```
mod config build maven arguments show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven settings

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **`${ENV_VAR}`** syntax.

### Usage

```
mod config build maven settings [subcommands]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```


### Subcommands

* `delete`: Removes the configured Maven settings.
* `edit`: Configure Maven settings.
* `show`: Displays the configured Maven settings.

## mod config build maven settings delete

Removes the configured Maven settings.




### Usage

```
mod config build maven settings delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven settings edit

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes.

### Usage

```
mod config build maven settings edit [parameters]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| settingsXml |  The location of a Maven _settings.xml_ file to use. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven settings show

Displays the configured Maven settings.




### Usage

```
mod config build maven settings show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build maven timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build maven timeout delete

Removes the configured build timeout.


### Usage

```
mod config build maven timeout delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build maven timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| duration |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven timeout show

Displays the configured build timeout.


### Usage

```
mod config build maven timeout show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config clone

Configures cloning behavior.


All subsequent clones will use these settings.

### Usage

```
mod config clone [subcommands]
```


### Subcommands

* `protocol`: Configures the wire protocol(s) that are used for cloning.

## mod config clone protocol

Configures the wire protocol(s) that are used for cloning.


All subsequent clones from Moderne organizations will use these settings. Clones from JSON or CSV use the explicitly provided clone URL without attempting to change the protocol.

### Usage

```
mod config clone protocol [subcommands]
```


### Subcommands

* `delete`: Restores the default clone protocols.
* `edit`: Configures the wire protocols that are used for cloning.
* `show`: Displays the wire protocols that are used for cloning.

## mod config clone protocol delete

Restores the default clone protocols.


The default is to attempt SSH and then HTTPS clones.

### Usage

```
mod config clone protocol delete
```



## mod config clone protocol edit

Configures the wire protocols that are used for cloning.


All subsequent clones will use these settings. The default is SSH and then HTTPS. 

### Usage

```
mod config clone protocol edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| protocols |  The protocol(s) to use for cloning. Must be one or both of 'ssh' or 'https' (case insensitive). The order in which they are provided establishes the order of precedence for subsequent clones. |



## mod config clone protocol show

Displays the wire protocols that are used for cloning.


This set governs all subsequent clone attempts.

### Usage

```
mod config clone protocol show
```



## mod config dotnet

Configures DotNet options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard DotNet configurations.

### Usage

```
mod config dotnet [subcommands]
```


### Subcommands

* `installation`: Configures locations of DotNet that can be used by build tools.

## mod config dotnet installation

Configures locations of DotNet that can be used by build tools.


Must be configured before you can run the build command if DotNet is installed in non-standard locations.

### Usage

```
mod config dotnet installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of DotNet that can be used by build tools.
* `delete`: Removes the configured DotNet installations. The CLI will revert to using only detectable DotNet installations.
* `list`: Displays the detected and configured DotNet installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config dotnet installation edit

Configures locations of DotNet that can be used by build tools.


Must be configured before you can run the build command if DotNet is installed in non-standard locations.

### Usage

```
mod config dotnet installation edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| dotnetInstallations |  The paths on disk where DotNet installations can be found. |



## mod config dotnet installation delete

Removes the configured DotNet installations. The CLI will revert to using only detectable DotNet installations.


### Usage

```
mod config dotnet installation delete
```



## mod config dotnet installation list

Displays the detected and configured DotNet installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config dotnet installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| --named |  Filter the list of DotNet installations to . |


## mod config environment

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment [subcommands]
```


### Subcommands

* `show`: The build environment that the CLI is running in.

## mod config environment show

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment show
```



## mod config features

Configures experimental features.


Experimental features are not guaranteed to be stable and may change in future releases.

### Usage

```
mod config features [subcommands]
```


### Subcommands

* `index-recipes`
* `no-maven-central`: (INCUBATING) Configure the availability of Maven Central and OSS Sonatype Snapshots.
* `no-nuget-org`: (INCUBATING) Configure the availability of NuGet.org.

## mod config features index-recipes


Index recipes to avoid classloading expense on every repository. This experimental feature does not change the command line for running a recipe, but since recipes are instantiated differently, is considered experimental initially.

### Usage

```
mod config features index-recipes
```

### Options

| Name | Description |
| ---- | ----------- |
| --enabled |  |


## mod config features no-maven-central

(INCUBATING) Configure the availability of Maven Central and OSS Sonatype Snapshots.


Maven Central and OSS Sonatype Snapshots are considered as valid recipe and dependency sources by default. They are implicitly used as a fallback for the resolution of recipes. In some environments access to these repositories is not allowed. This command be used to disable adding them implicitly to the list of repositories used for installing running recipes.

### Usage

```
mod config features no-maven-central
```

### Options

| Name | Description |
| ---- | ----------- |
| --enabled |  |


## mod config features no-nuget-org

(INCUBATING) Configure the availability of NuGet.org.


NuGet.org is considered as a valid recipe and dependency source by default.It is implicitly used as a fallback for the resolution of recipes. In some environments access to these repositories is not allowed. This command be used to disable adding them implicitly to the list of repositories used for installing running recipes.

### Usage

```
mod config features no-nuget-org
```

### Options

| Name | Description |
| ---- | ----------- |
| --enabled |  |


## mod config http

Configures HTTP options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http [subcommands]
```


### Subcommands

* `proxy`: Configures HTTP proxy settings that will be used for every HTTP request.
* `trust-store`: Configures truststore options that will be used throughout the CLI.

## mod config http proxy

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy [subcommands]
```


### Subcommands

* `delete`: Removes HTTP proxy settings from global configuration.
* `edit`: Configures HTTP proxy settings that will be used for every HTTP request.
* `show`: Displays the proxy settings from global configuration.

## mod config http proxy delete

Removes HTTP proxy settings from global configuration.


Proxy settings will no longer be used for HTTP requests.

### Usage

```
mod config http proxy delete
```



## mod config http proxy edit

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy edit
```

### Options

| Name | Description |
| ---- | ----------- |
| --host, --proxy-host |  |
| --port, --proxy-port |  |


## mod config http proxy show

Displays the proxy settings from global configuration.


Shows the currently configured proxy settings, if any.

### Usage

```
mod config http proxy show
```



## mod config http trust-store

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store [subcommands]
```


### Subcommands

* `delete`: Removes truststore settings from global configuration.
* `edit`: Configures truststore options that will be used throughout the CLI.
* `show`: Displays the truststore setting from global configuration.

## mod config http trust-store delete

Removes truststore settings from global configuration.


Truststore settings will no longer be used for HTTP requests.

### Usage

```
mod config http trust-store delete
```



## mod config http trust-store edit

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store edit [subcommands]
```

### Subcommands

* `system`: Configures truststore to use the Operating System specific default truststore. On Mac the system trust store is accessed via the Keychain Access app. On Windows the system trust store is accessed via the Microsoft Management Console. On Linux there is no standardized trust store, so the cacerts file under **`${JAVA_HOME}/lib/security/cacerts`** will be used.
* `file`: Configures truststore to point to a file.
* `java-home`: Configures truststore to use the cacerts file in **`${JAVA_HOME}/lib/security/cacerts`**.

## mod config http trust-store edit system

Configures truststore to use the Operating System specific default truststore. On Mac the system trust store is accessed via the Keychain Access app. On Windows the system trust store is accessed via the Microsoft Management Console. On Linux there is no standardized trust store, so the cacerts file under **`${JAVA_HOME}/lib/security/cacerts`** will be used.


### Usage

```
mod config http trust-store edit system
```

### Options

| Name | Description |
| ---- | ----------- |
| --password |  The password used to access the truststore. |


## mod config http trust-store edit file

Configures truststore to point to a file.


All subsequent commands will use this truststore.

### Usage

```
mod config http trust-store edit file [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| file |  The path to the truststore file. |

### Options

| Name | Description |
| ---- | ----------- |
| --password |  The password used to access the truststore. |
| --provider |  The provider of the truststore. |
| --type |  The type of the truststore file. |


## mod config http trust-store edit java-home

Configures truststore to use the cacerts file in **`${JAVA_HOME}/lib/security/cacerts`**.


### Usage

```
mod config http trust-store edit java-home
```



## mod config http trust-store show

Displays the truststore setting from global configuration.


Shows the currently configured truststore setting, if any.

### Usage

```
mod config http trust-store show
```



## mod config java

Configures Java options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Java configurations.

### Usage

```
mod config java [subcommands]
```


### Subcommands

* `jdk`: Configures locations of JDKs that can be used by build tools.
* `options`: Configures JVM options added to tools building LSTs.
* `version`: Configures the JDK to use.

## mod config java jdk

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java jdk [subcommands]
```


### Subcommands

* `edit`: Configures locations of JDKs that can be used by build tools.
* `delete`: Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.
* `list`: Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config java jdk edit

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java jdk edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| javaHomes |  The paths on disk where JDK installations can be found. |



## mod config java jdk delete

Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.


### Usage

```
mod config java jdk delete
```



## mod config java jdk list

Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config java jdk list
```

### Options

| Name | Description |
| ---- | ----------- |
| --named |  Filter the list of JDKs to . |


## mod config java options

Configures JVM options added to tools building LSTs.


Must be configured before you can run the build command if non-standard VM options are required.

### Usage

```
mod config java options [subcommands]
```


### Subcommands

* `edit`: Configures JVM options added to tools building LSTs.
* `delete`: Removes configured JVM options. The CLI will no longer use custom JVM options.
* `show`: Displays the configured JVM options.

## mod config java options edit

Configures JVM options added to tools building LSTs.


Must be configured before you can run the build command if non-standard VM options are required.

### Usage

```
mod config java options edit
```

### Examples

```
mod config java options edit "\-Xmx4G"
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java options delete

Removes configured JVM options. The CLI will no longer use custom JVM options.


### Usage

```
mod config java options delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java options show

Displays the configured JVM options.


### Usage

```
mod config java options show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version

Configures the JDK to use.


Configure a name like "17", "17-tem", or "17.0.6-tem" depending on the degree of control needed.

### Usage

```
mod config java version [subcommands]
```


### Subcommands

* `edit`: Configures the JDK to use.
* `delete`: Reverts to auto-detection of a JDK to use when building a repository.
* `show`: Displays the configured JDK version.

## mod config java version edit

Configures the JDK to use.


Configure a name like "17", "17-tem", or "17.0.6-tem" depending on the degree of control needed.

### Usage

```
mod config java version edit [parameters]
```

### Examples

```
mod config java version edit "17-tem"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| selectedJdk |  The named JDK to use. If set to "auto", the CLI will revert to detecting the correct JDK to use from signals available in the repository. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version delete

Reverts to auto-detection of a JDK to use when building a repository.


### Usage

```
mod config java version delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version show

Displays the configured JDK version.


### Usage

```
mod config java version show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config license

Configure a license key.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license [subcommands]
```


### Subcommands

* `delete`: Removes the configured license key.
* `edit`: Configure the active user.
* `show`: Displays information about the configured license key.
* `moderne`: Synchronizes a Moderne license key with the CLI.

## mod config license delete

Removes the configured license key.


### Usage

```
mod config license delete
```



## mod config license edit

Configure the active user.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| license |  The license key, provided by Moderne support. |



## mod config license show

Displays information about the configured license key.


### Usage

```
mod config license show
```

### Options

| Name | Description |
| ---- | ----------- |
| --json |  (INCUBATING) Output license information in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |


## mod config license moderne

Synchronizes a Moderne license key with the CLI.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license moderne [subcommands]
```

### Examples

```
mod config license moderne sync
```


### Subcommands

* `sync`: Synchronizes a Moderne license key with the CLI.

## mod config license moderne sync

Synchronizes a Moderne license key with the CLI.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license moderne sync
```

### Examples

```
mod config license moderne sync
```

### Options

| Name | Description |
| ---- | ----------- |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |


## mod config lsts

Configures LSTs production and publishing. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts [subcommands]
```

### Subcommands

* `artifacts`: Configures the storage layer for LSTs to be published to and downloaded from. 

## mod config lsts artifacts

Configures the storage layer for LSTs to be published to and downloaded from. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts artifacts [subcommands]
```


### Subcommands

* `artifactory`: Configures the Artifactory repository that LSTs will be published to and downloaded from.
* `show`: Displays the LST artifacts repository configuration.
* `maven`: Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.

## mod config lsts artifacts artifactory

Configures the Artifactory repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Artifactory repository.

### Usage

```
mod config lsts artifacts artifactory [subcommands]
```


### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Artifactory repository configuration.

## mod config lsts artifacts artifactory edit

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config lsts artifacts artifactory edit [parameters]
```

### Examples

```
mod config lsts artifacts edit <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| url |  The URL of the artifact repository that LSTs will be published to. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --authorization |  The authorization header value to use. | `Bearer XXXXX` |
| --jfrog-api-token |  The JFrog API token to use. |  |
| --password |  The password to authenticate with. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config lsts artifacts artifactory delete

Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts artifactory delete
```



## mod config lsts artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config lsts artifacts artifactory show
```



## mod config lsts artifacts show

Displays the LST artifacts repository configuration.




### Usage

```
mod config lsts artifacts show
```



## mod config lsts artifacts maven

Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Maven repository.

### Usage

```
mod config lsts artifacts maven [subcommands]
```


### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Maven artifact repository repository configuration.

## mod config lsts artifacts maven edit

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config lsts artifacts maven edit [parameters]
```

### Examples

```
mod config lsts artifacts edit <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| url |  The URL of the artifact repository that LSTs will be published to. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --authorization |  The authorization header value to use. | `Bearer XXXXX` |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --password |  The password to authenticate with. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config lsts artifacts maven delete

Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts maven delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config lsts artifacts maven show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config moderne

Configures the connection to Moderne. Must be configured before you can install and run recipes.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne [subcommands]
```

### Examples

```
mod config moderne edit <host> --token <token>
```


### Subcommands

* `delete`: Removes the configured Moderne tenant.
* `edit`: Configures the connection to Moderne. Must be configured before you can install and run recipes.
* `local`: Configures a connection to a Moderne DX instance running locally on the same machine.
* `show`: Displays the Moderne tenant configuration.
* `organizations`: The organizational hierarchy of repository ownership.

## mod config moderne delete

Removes the configured Moderne tenant.




### Usage

```
mod config moderne delete
```



## mod config moderne edit

Configures the connection to Moderne. Must be configured before you can install and run recipes.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne edit [parameters]
```

### Examples

```
mod config moderne edit <host> --token <token>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| host |  The URL of the Moderne UI. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --api |  The URL of the tenant API gateway. | `https://api.app.moderne.io` |
| --password |  The password to authenticate with. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --token |  The Moderne personal access token to use. |  |
| --user |  The user to authenticate with. |  |


## mod config moderne local

Configures a connection to a Moderne DX instance running locally on the same machine.


All subsequent commands will use this instance.

### Usage

```
mod config moderne local
```



## mod config moderne show

Displays the Moderne tenant configuration.




### Usage

```
mod config moderne show
```



## mod config moderne organizations

The organizational hierarchy of repository ownership.


Each of these organizations are cloneable.

### Usage

```
mod config moderne organizations [subcommands]
```


### Subcommands

* `show`: Displays the Moderne view of organizational hierarchy.

## mod config moderne organizations show

Displays the Moderne view of organizational hierarchy.




### Usage

```
mod config moderne organizations show
```

### Options

| Name | Description |
| ---- | ----------- |
| --json |  |


## mod config recipes

Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.


You must run the _mod config moderne_ command before running this command so that the CLI knows where to download recipes from.

### Usage

```
mod config recipes [subcommands]
```

### Examples

```
mod config recipes moderne sync
```


### Subcommands

* `artifacts`: Configures artifact repositories to resolve recipes from.
* `export`: Export the recipe catalog for study by different tools.
* `jar`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `nupkg`: Adds or updates a package that contains recipes that should be added to the recipe marketplace in the CLI.
* `moderne`: Configures which Moderne recipes should be installed and used in the local CLI marketplace.
* `delete`: Clear the whole recipe marketplace.
* `list`: List the artifacts that are contributing recipes to the marketplace.
* `search`: Finds recipes based on free form text search.
* `yaml`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.

## mod config recipes artifacts

Configures artifact repositories to resolve recipes from.


Defaults to resolving recipes from Maven Central and Nexus Snapshots.

### Usage

```
mod config recipes artifacts [subcommands]
```


### Subcommands

* `artifactory`: Configures the artifact repository to resolve recipes from.
* `show`: Displays the recipe artifacts repository configuration.
* `default-repositories`: Configure the availability of maven central repositories.
* `maven`: Configures a Maven-formatted artifact repository that recipes will be resolved from.
* `nuget`: Configures a Nuget-formatted artifact repository that recipes will be resolved from.

## mod config recipes artifacts artifactory

Configures the artifact repository to resolve recipes from.


All subsequent recipe installation commands will use this Artifactory repository.

### Usage

```
mod config recipes artifacts artifactory [subcommands]
```


### Subcommands

* `edit`: Configures the artifact repository to resolve recipes from.
* `delete`: Removes the Artifactory repository configuration.
* `show`: Displays the Artifactory repository configuration.

## mod config recipes artifacts artifactory edit

Configures the artifact repository to resolve recipes from.


All subsequent recipe installation commands will use this artifact repository.

### Usage

```
mod config recipes artifacts artifactory edit [parameters]
```

### Examples

```
mod config recipes artifacts edit <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| url |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --authorization |  The authorization header value to use. | `Bearer XXXXX` |
| --jfrog-api-token |  The JFrog API token to use. |  |
| --password |  The password to authenticate with. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config recipes artifacts artifactory delete

Removes the Artifactory repository configuration.




### Usage

```
mod config recipes artifacts artifactory delete
```



## mod config recipes artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config recipes artifacts artifactory show
```



## mod config recipes artifacts show

Displays the recipe artifacts repository configuration.




### Usage

```
mod config recipes artifacts show
```



## mod config recipes artifacts default-repositories (deprecated)

Configure the availability of maven central repositories.


Use `mod config features no-maven-central` to disable/enable Maven Central and OSS Sonatype Snapshots.

### Usage

```
mod config recipes artifacts default-repositories [subcommands]
```


### Subcommands

* `enable`
* `disable`
* `show`

## mod config recipes artifacts default-repositories enable (deprecated)


(INCUBATING) Enable default repositories.

### Usage

```
mod config recipes artifacts default-repositories enable
```



## mod config recipes artifacts default-repositories disable (deprecated)


(INCUBATING) Disable default repositories.

### Usage

```
mod config recipes artifacts default-repositories disable
```



## mod config recipes artifacts default-repositories show (deprecated)


(INCUBATING) Show the current configuration of default repositories.

### Usage

```
mod config recipes artifacts default-repositories show
```



## mod config recipes artifacts maven

Configures a Maven-formatted artifact repository that recipes will be resolved from.


All subsequent recipe installation commands will use this Maven repository.

### Usage

```
mod config recipes artifacts maven [subcommands]
```


### Subcommands

* `edit`: Configures the repository that recipes will be resolved from.
* `delete`: Removes the Maven artifact repository repository configuration.
* `show`: Displays the Maven artifact repository repository configuration.

## mod config recipes artifacts maven edit

Configures the repository that recipes will be resolved from.


All subsequent recipe installation commands will use this artifact repository.

### Usage

```
mod config recipes artifacts maven edit [parameters]
```

### Examples

```
mod config recipes artifacts edit <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| url |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --authorization |  The authorization header value to use. | `Bearer XXXXX` |
| --password |  The password to authenticate with. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config recipes artifacts maven delete

Removes the Maven artifact repository repository configuration.




### Usage

```
mod config recipes artifacts maven delete
```



## mod config recipes artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config recipes artifacts maven show
```



## mod config recipes artifacts nuget

Configures a Nuget-formatted artifact repository that recipes will be resolved from.


All subsequent recipe installation commands will use this Nuget repository.

### Usage

```
mod config recipes artifacts nuget [subcommands]
```


### Subcommands

* `edit`: Configures the repository that recipes will be resolved from.
* `delete`: Removes the Nuget artifact repository repository configuration.
* `show`: Displays the Nuget artifact repository repository configuration.

## mod config recipes artifacts nuget edit

Configures the repository that recipes will be resolved from.


All subsequent recipe installation commands will use this artifact repository.

### Usage

```
mod config recipes artifacts nuget edit [parameters]
```

### Examples

```
mod config recipes nuget edit <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| url |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --authorization |  The authorization header value to use. | `Bearer XXXXX` |
| --password |  The password to authenticate with. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config recipes artifacts nuget delete

Removes the Nuget artifact repository repository configuration.




### Usage

```
mod config recipes artifacts nuget delete
```



## mod config recipes artifacts nuget show

Displays the Nuget artifact repository repository configuration.




### Usage

```
mod config recipes artifacts nuget show
```



## mod config recipes export

Export the recipe catalog for study by different tools.




### Usage

```
mod config recipes export [subcommands]
```


### Subcommands

* `json`: Export recipe details as JSON.
* `csv`: Export recipe details as CSV.

## mod config recipes export json

Export recipe details as JSON.




### Usage

```
mod config recipes export json [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| output |  The path to the output JSON file. |



## mod config recipes export csv

Export recipe details as CSV.




### Usage

```
mod config recipes export csv [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| output |  The path to the output CSV file. |



## mod config recipes jar

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar [subcommands]
```

### Examples

```
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
```


### Subcommands

* `install`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes jar install

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar install [parameters]
```

### Examples

```
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
```

### Parameters

| Name | Description |
| ---- | ----------- |
| GAV |  The group, artifact, and version of the artifact to install in the format groupId:artifactId:version. The version may be a fixed version, LATEST, or RELEASE.
The dependency will be resolved from the artifact source defined in **mod config recipes artifacts** |

### Options

| Name | Description |
| ---- | ----------- |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |
| --repository-url, --repository |  The repository URL that the artifact will be resolved from. |


## mod config recipes jar delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes jar delete [parameters]
```

### Examples

```
mod config recipes jar delete rewrite-java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| artifact |  An artifact name or group and artifact name. |



## mod config recipes nupkg

Adds or updates a package that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this package will then be available to run.

### Usage

```
mod config recipes nupkg [subcommands]
```

### Examples

```
mod config recipes nupkg install rewrite.java:LATEST
```


### Subcommands

* `install`: Adds or updates a package that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes a package supplying recipes to the marketplace.

## mod config recipes nupkg install

Adds or updates a package that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this package will then be available to run.

### Usage

```
mod config recipes nupkg install [parameters]
```

### Examples

```
mod config recipes nupkg install rewrite.java:LATEST
```

### Parameters

| Name | Description |
| ---- | ----------- |
| PIV |  The package id, and version of the package to install in the format packageId:version. The version may be a fixed version, LATEST, or RELEASE.
The dependency will be resolved from the package source defined in **mod config lsts artifacts** |

### Options

| Name | Description |
| ---- | ----------- |
| --repository-url, --repository |  The repository URL that the package will be resolved from. |


## mod config recipes nupkg delete

Removes a package supplying recipes to the marketplace.


The recipes defined by this package will then no longer be available to run.

### Usage

```
mod config recipes nupkg delete [parameters]
```

### Examples

```
mod config recipes nupkg delete rewrite.java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| artifact |  An package id. |



## mod config recipes moderne

Configures which Moderne recipes should be installed and used in the local CLI marketplace.


The recipes installed will then be available to run locally.

### Usage

```
mod config recipes moderne [subcommands]
```

### Examples

```
mod config recipes moderne install <SEARCH_TERM>
mod config recipes moderne sync
```


### Subcommands

* `install`: Allows you to find and install recipes from Moderne.
* `push`: Pushes the local CLI recipe marketplace to Moderne.
* `sync`: Synchronizes the local CLI recipe marketplace with Moderne.

## mod config recipes moderne install

Allows you to find and install recipes from Moderne.


After providing a search term, the Moderne API will be queried to find recipes that match it. You will be provided with up to 10 possible matches and the option to select one to install. If you select to install one, the appropriate JAR will be downloaded and added to your local CLI marketplace. The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes moderne install [parameters]
```

### Examples

```
mod config recipes moderne install <SEARCH_TERM>
mod config recipes moderne install FindTypes
mod config recipes moderne install "Migrate Java"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| searchTerm |  The search term to use to find recipes to install. |



## mod config recipes moderne push

Pushes the local CLI recipe marketplace to Moderne.


Adds or replaces all recipes in the Moderne tenant with the recipes installed in the local marketplace.

### Usage

```
mod config recipes moderne push
```

### Options

| Name | Description |
| ---- | ----------- |
| -f, --force |  Force the push of the local CLI recipe marketplace to Moderne, replacing all installed recipe artifacts with the contents of the local marketplace. |


## mod config recipes moderne sync

Synchronizes the local CLI recipe marketplace with Moderne.


Destroys all recipes in the local CLI marketplace and replaces them with the latest recipes available in Moderne. The recipes defined by these artifacts will then be available to run.

### Usage

```
mod config recipes moderne sync
```

### Options

| Name | Description |
| ---- | ----------- |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |


## mod config recipes delete

Clear the whole recipe marketplace.


No recipes will be available to run until they are installed again.

### Usage

```
mod config recipes delete
```



## mod config recipes list

List the artifacts that are contributing recipes to the marketplace.




### Usage

```
mod config recipes list
```



## mod config recipes search

Finds recipes based on free form text search.


The found recipes may then be set as the active recipe. Multiple word searches may, but don't need to surrounded by quotes on the command line.

### Usage

```
mod config recipes search [parameters]
```

### Examples

```
mod config recipes search owasp
```

### Parameters

| Name | Description |
| ---- | ----------- |
| query |  |

### Options

| Name | Description |
| ---- | ----------- |
| --limit |  The maximum total number of results that will be returned. |


## mod config recipes yaml

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml [subcommands]
```

### Examples

```
mod config recipes yaml install /path/to/yaml
```


### Subcommands

* `install`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes yaml install

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml install [parameters]
```

### Examples

```
mod config recipes yaml install /path/to/yaml
```

### Parameters

| Name | Description |
| ---- | ----------- |
| paths |  The path to the YAML file to install. The YAML file will be copied, so if further modifications to it are made, make sure to reinstall it. |



## mod config recipes yaml delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes yaml delete [parameters]
```

### Examples

```
mod config recipes yaml delete /path/to/yml
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The path to the YAML file to uninstall. |



## mod config run

Configures recipe run behavior.


All subsequent runs will use these settings

### Usage

```
mod config run [subcommands]
```


### Subcommands

* `timeout`: Configure the run timeout.

## mod config run timeout

Configure the run timeout.


Limits the amount of time the CLI will wait for a single execution of a recipe run.

### Usage

```
mod config run timeout [subcommands]
```


### Subcommands

* `delete`: Restores the configured run timeout to the default value.
* `edit`: Configure the timeout for recipe runs.
* `show`: Displays the configured run timeout.

## mod config run timeout delete

Restores the configured run timeout to the default value.


### Usage

```
mod config run timeout delete
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config run timeout edit

Configure the timeout for recipe runs.


Limits the amount of time the CLI will wait for a single execution of a recipe run.

### Usage

```
mod config run timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| duration |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config run timeout show

Displays the configured run timeout.


### Usage

```
mod config run timeout show
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config scm

Configures source code management.




### Usage

```
mod config scm [subcommands]
```


### Subcommands

* `gitlab`: (DEPRECATED) Configures GitLab.
* `bitbucket`: (DEPRECATED) Configures Bitbucket.
* `moderne`: (INCUBATING) Configures the SCM configuration with Moderne
* `add`
* `remove`
* `show`: Displays the configured SCMs

## mod config scm gitlab

(DEPRECATED) Configures GitLab.


Use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm gitlab [subcommands]
```


### Subcommands

* `base-url`: (DEPRECATED) Configure the base URL.
* `base-urls`: (DEPRECATED) Configure the base URLs.

## mod config scm gitlab base-url (deprecated)

(DEPRECATED) Configure the base URL.


(DEPRECATED) use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm gitlab base-url [subcommands]
```

### Examples

```
mod config scm gitlab base-url edit "https://acme.com/gitlab-ee/"
```


### Subcommands

* `delete`: (DEPRECATED) Removes base URL customization.
* `edit`: (DEPRECATED) Configure the base URL.
* `show`: (DEPRECATED) Displays the configured base URLs.

## mod config scm gitlab base-url delete (deprecated)

(DEPRECATED) Removes base URL customization.


### Usage

```
mod config scm gitlab base-url delete
```



## mod config scm gitlab base-url edit (deprecated)

(DEPRECATED) Configure the base URL.


(DEPRECATED) use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm gitlab base-url edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| baseUrl |  The base URL to use when determining paths. |



## mod config scm gitlab base-url show (deprecated)

(DEPRECATED) Displays the configured base URLs.


### Usage

```
mod config scm gitlab base-url show
```



## mod config scm gitlab base-urls

(DEPRECATED) Configure the base URLs.


(DEPRECATED) use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm gitlab base-urls [subcommands]
```

### Examples

```
mod config scm gitlab base-urls edit "https://acme.com/gitlab-ee/"
```


### Subcommands

* `delete`: (DEPRECATED) Removes base URL customization.
* `edit`: (DEPRECATED) Configure one or more base URLs.
* `show`: (DEPRECATED) Displays the configured base URLs.

## mod config scm gitlab base-urls delete

(DEPRECATED) Removes base URL customization.


### Usage

```
mod config scm gitlab base-urls delete
```



## mod config scm gitlab base-urls edit

(DEPRECATED) Configure one or more base URLs.




### Usage

```
mod config scm gitlab base-urls edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| baseUrls |  The base URLs to use when determining paths. |



## mod config scm gitlab base-urls show

(DEPRECATED) Displays the configured base URLs.


### Usage

```
mod config scm gitlab base-urls show
```



## mod config scm bitbucket

(DEPRECATED) Configures Bitbucket.


(DEPRECATED) use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm bitbucket [subcommands]
```


### Subcommands

* `base-urls`: (DEPRECATED) Configure the base URLs.

## mod config scm bitbucket base-urls

(DEPRECATED) Configure the base URLs.


(DEPRECATED) use **mod config scm show|add|remove** in stead

### Usage

```
mod config scm bitbucket base-urls [subcommands]
```

### Examples

```
mod config scm bitbucket base-urls edit "https://bitbucket.acme.com/stash/"
```


### Subcommands

* `delete`: (DEPRECATED) Removes base URL customization.
* `edit`: (DEPRECATED) Configure one or more base URLs.
* `show`: (DEPRECATED) Displays the configured base URLs.

## mod config scm bitbucket base-urls delete

(DEPRECATED) Removes base URL customization.


### Usage

```
mod config scm bitbucket base-urls delete
```



## mod config scm bitbucket base-urls edit

(DEPRECATED) Configure one or more base URLs.




### Usage

```
mod config scm bitbucket base-urls edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| baseUrls |  The base URLs to use when determining paths. |



## mod config scm bitbucket base-urls show

(DEPRECATED) Displays the configured base URLs.


### Usage

```
mod config scm bitbucket base-urls show
```



## mod config scm moderne

(INCUBATING) Configures the SCM configuration with Moderne




### Usage

```
mod config scm moderne [subcommands]
```

### Examples

```
mod config scm moderne sync
```


### Subcommands

* `sync`: Synchronizes the SCM configuration with your Moderne instance

## mod config scm moderne sync

Synchronizes the SCM configuration with your Moderne instance




### Usage

```
mod config scm moderne sync
```



## mod config scm add


(INCUBATING) Add an SCM configuration

### Usage

```
mod config scm add [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| type |  The SCM type |
| baseUrl |  The primary SCM URL |

### Options

| Name | Description |
| ---- | ----------- |
| --alternate-url |  Alternate SCM URLs |


## mod config scm remove


(INCUBATING) Remove an SCM configuration by type and URL

### Usage

```
mod config scm remove [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| type |  |
| baseUrl |  |



## mod config scm show

Displays the configured SCMs


### Usage

```
mod config scm show
```



## mod config user

Configure the active user.


The active user is reported for activity metrics in Moderne DX environments. If not explicitly set in **mod config**, the active user is inferred from global git configuration.

### Usage

```
mod config user [subcommands]
```


### Subcommands

* `delete`: Removes the configured active user.
* `edit`: Configure the active user.
* `show`: Displays the configured active user.

## mod config user delete

Removes the configured active user.


### Usage

```
mod config user delete
```



## mod config user edit

Configure the active user.


The active user is reported for activity metrics in Moderne DX environments.

### Usage

```
mod config user edit
```

### Options

| Name | Description |
| ---- | ----------- |
| --email |  The email of the active user. |
| --name |  The name of the active user. |


## mod config user show

Displays the configured active user.


### Usage

```
mod config user show
```



## mod devcenter

DevCenter operations.




### Usage

```
mod devcenter [subcommands]
```


### Subcommands

* `run`: (INCUBATING) Runs all configured DevCenter recipes.

## mod devcenter run

(INCUBATING) Runs all configured DevCenter recipes.




### Usage

```
mod devcenter run [parameters]
```

### Examples

```
mod devcenter run /path/to/organization
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --output-dir |  |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod exec

Execute an arbitrary shell command recursively on selected repository roots.


If you want to execute a command that contains positional parameters, please ensure that you use the end-of-options POSIX delimiter (**--**) before your command, such as in the following example: 

**mod exec /path/to/project -- gh pr create --title "Test PR" --body "Test PR"**.

Commands can take advantage of a set of variables computed by **mod exec** specific to the repository the command is executed on. For example, **mod exec . MODERNE_BUILD_TOOL_CHECK** will substitute **MODERNE_BUILD_TOOL_CHECK** with the build tool command to execute verification tasks specific to the repository. This would expand to **gradle check** and **mvn verify** for Gradle and Maven projects, respectively. Additionally, each computed variable is added to the environment the command is run in.

The list of computed variables include **MODERNE_JAVA_HOME**, **MODERNE_JAVA_VERSION**, **MODERNE_JAVA_JDK**, **MODERNE_BUILD_TOOL**, **MODERNE_BUILD_TOOL_COMPILE**, **MODERNE_BUILD_TOOL_CHECK**, and **MODERNE_BUILD_TOOL_DIR**

### Usage

```
mod exec [parameters]
```

### Examples

```
mod exec /path/to/project rm *.hprof
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| cmd |  The shell command that you wish to run on the selected repository roots. |
| args |  Arguments for the command, if any exist. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| -o, --out, --output |  The output type for the command. If not specified, the output will be printed to the console. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git

Multi-repository git operations.




### Usage

```
mod git [subcommands]
```


### Subcommands

* `add`: Performs the equivalent of **git add** on multiple repositories.
* `apply`: Performs the equivalent of **git apply** on multiple repositories.
* `checkout`: Performs the equivalent of **git checkout** on multiple repositories.
* `clone`: Performs the equivalent of **git clone** on multiple repositories.
* `commit`: Performs the equivalent of **git commit** on multiple repositories.
* `pull`: Performs the equivalent of **git pull** on multiple repositories.
* `push`: Performs the equivalent of **git push** on multiple repositories.
* `reset`: Performs the equivalent of **git reset** on multiple repositories.
* `rev-parse`: Performs the equivalent of **git rev-parse** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
* `sync`: Synchronizing with Moderne.
* `status`: Performs the equivalent of **git status** on multiple repositories.

## mod git add

Performs the equivalent of **git add** on multiple repositories.


Rather than applying **git add** one at a time, this operates on multiple repositories.

### Usage

```
mod git add [parameters]
```

### Examples

```
mod git add /path/to/project --recipe-run <recipe-run-id>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git apply

Performs the equivalent of **git apply** on multiple repositories.


Rather than applying one patch at a time, this operates on multiple repositories.

### Usage

```
mod git apply [parameters]
```

### Examples

```
mod git apply /path/to/project --recipe-run 20230903164310-2qVRM
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git checkout

Performs the equivalent of **git checkout** on multiple repositories.


Rather than checking out one repository at a time, this operates on multiple repositories.

### Usage

```
mod git checkout [parameters]
```

### Examples

```
mod git checkout /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| branch |  The branch to checkout. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| -b, -B |  Causes a new branch to be created as if git-branch were called and then checked out. |  |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git clone

Performs the equivalent of **git clone** on multiple repositories.


Rather than cloning one at a time, this operates on multiple repositories. The list of repositories can be sourced from different places, like Moderne or a CSV.

### Usage

```
mod git clone [subcommands]
```

### Examples

```
mod git clone moderne /path/to/folder/to/clone/into Apache
```


### Subcommands

* `csv`: Clones the repositories listed in a CSV file.
* `json`: Clones the repositories listed in a JSON file.
* `moderne`: Clones the repositories in an organization on Moderne.

## mod git clone csv

Clones the repositories listed in a CSV file.


The CSV file should have a header row with the required column **cloneUrl** and any number of optional columns. The optional columns are **branch, changeset, java, jvmOpts, mavenArgs, gradleArgs, bazelRule**.

### Usage

```
mod git clone csv [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| cloneInto |  The directory to clone all projects into. This directory will be created if it doesn't exist. |
| csv |  The path to a CSV file containing repositories to clone. |

### Options

| Name | Description |
| ---- | ----------- |
| --depth |  Equivalent to the **git clone --depth** option. |
| --filter |  Equivalent to the **git clone --filter** option. |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |
| --save |  Any per repository configuration should be placed in a **.modernecfg** which can be committed to source control. |
| --single-branch |  |


## mod git clone json

Clones the repositories listed in a JSON file.


The JSON file should consist of an array of repositories with the required keys **cloneUrl| and @|bold branch** and any number of optional keys. The optional keys are **changeset, java, jvmOpts, mavenArgs, gradleArgs, bazelRule**.

### Usage

```
mod git clone json [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| cloneInto |  The directory to clone all projects into. This directory will be created if it doesn't exist. |
| json |  The path to a JSON file containing repositories to clone. |

### Options

| Name | Description |
| ---- | ----------- |
| --depth |  Equivalent to the **git clone --depth** option. |
| --filter |  Equivalent to the **git clone --filter** option. |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |
| --save |  Any per repository configuration should be placed in a **.modernecfg** which can be committed to source control. |
| --single-branch |  |


## mod git clone moderne

Clones the repositories in an organization on Moderne.


The repositories are cloned at the same branch and changeset of the LST that represents that repository in the organization in Moderne so that a subsequent **mod build** will trivially match and download the LST from Moderne. 

### Usage

```
mod git clone moderne [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| cloneInto |  The directory to clone all projects into. This directory will be created if it doesn't exist. |
| organization |  The name of an organization in Moderne. All repositories in that organization will be cloned at the branch and commit of their current LSTs. |

### Options

| Name | Description |
| ---- | ----------- |
| --depth |  Equivalent to the **git clone --depth** option. |
| --filter |  Equivalent to the **git clone --filter** option. |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |
| --single-branch |  |


## mod git commit

Performs the equivalent of **git commit** on multiple repositories.


Rather than applying one commit at a time, this operates on multiple repositories.

### Usage

```
mod git commit [parameters]
```

### Examples

```
mod git commit /path/to/project -m "commit message"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| -m, --message |  The commit message to use. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git pull

Performs the equivalent of **git pull** on multiple repositories.


Rather than pulling one repository at a time, this operates on multiple repositories.

### Usage

```
mod git pull [parameters]
```

### Examples

```
mod git pull /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --rebase |  Pull with rebase or not. | `github.com` |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git push

Performs the equivalent of **git push** on multiple repositories.


Rather than pushing one repository at a time, this operates on multiple repositories.

### Usage

```
mod git push [parameters]
```

### Examples

```
mod git push /path/to/project -u origin feature-branch
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| repository |  |
| refspec |  Specify what destination ref to update with what source object. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --u, --set-upstream |  For every branch that is up to date or successfully pushed, add upstream (tracking) reference. |  |


## mod git reset

Performs the equivalent of **git reset** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

### Usage

```
mod git reset [parameters]
```

### Examples

```
mod git reset /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --hard |  Resets the index and working tree. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git rev-parse

Performs the equivalent of **git rev-parse** on multiple repositories.


Rather than applying one rev-parse at a time, this operates on multiple repositories.

### Usage

```
mod git rev-parse [parameters]
```

### Examples

```
mod git rev-parse /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| args |  |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod git stashset [subcommands]
```

### Examples

```
mod git stashset /path/to/project
```


### Subcommands

* `apply`: Performs the equivalent of **git stash apply** on multiple repositories.
* `push`: Performs the equivalent of **git stash push** on multiple repositories.

## mod git stashset apply

Performs the equivalent of **git stash apply** on multiple repositories.




### Usage

```
mod git stashset apply [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| ref |  The stash ref to apply. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --force |  Pop the stash after applying it, regardless of whether it made a change. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git stashset push

Performs the equivalent of **git stash push** on multiple repositories.




### Usage

```
mod git stashset push [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| -u, --include-untracked |  Include untracked files. |  |


## mod git stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod git stashset [subcommands]
```

### Examples

```
mod git stashset /path/to/project
```


### Subcommands

* `apply`: Performs the equivalent of **git stash apply** on multiple repositories.
* `push`: Performs the equivalent of **git stash push** on multiple repositories.

## mod git stashset apply

Performs the equivalent of **git stash apply** on multiple repositories.




### Usage

```
mod git stashset apply [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| ref |  The stash ref to apply. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --force |  Pop the stash after applying it, regardless of whether it made a change. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git stashset push

Performs the equivalent of **git stash push** on multiple repositories.




### Usage

```
mod git stashset push [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| -u, --include-untracked |  Include untracked files. |  |


## mod git sync

Synchronizing with Moderne.




### Usage

```
mod git sync [subcommands]
```

### Subcommands

* `moderne`: Synchronizes the repositories and metadata of an organization on Moderne.

## mod git sync moderne

Synchronizes the repositories and metadata of an organization on Moderne.


The repositories are cloned or pulled at the same branch and changeset of the LST that represents that repository in the organization in Moderne so that a subsequent **mod build** will trivially match and download the LST from Moderne. If the repository has local changes or is on a different branch no changes will be made.

### Usage

```
mod git sync moderne [parameters]
```

### Examples

```
mod git sync moderne /path/to/organization
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |  |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git status

Performs the equivalent of **git status** on multiple repositories.


Rather than applying **git status** one at a time, this operates on multiple repositories.

### Usage

```
mod git status [parameters]
```

### Examples

```
mod git status /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod log

Manages a log aggregate.


Used to understand holistically how a build performed on many repositories. In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log [subcommands]
```


### Subcommands

* `builds`: Adds a set of build logs to a log aggregate.
* `runs`: Adds a set of run logs to a log aggregate.

## mod log builds

Adds a set of build logs to a log aggregate.


In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log builds [subcommands]
```


### Subcommands

* `add`: Adds a set of build logs to a log aggregate.

## mod log builds add

Adds a set of build logs to a log aggregate.


For each repository that has a matching build, add its build log to the aggregate.

### Usage

```
mod log builds add [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| logPath |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --build |  A build ID for a build that has completed previously. |  |
| --last-build |  Select whatever the last build was, whether the build ran fully to completion or terminated early. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod log runs

Adds a set of run logs to a log aggregate.


In contrast to a CI log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of a recipe run.

### Usage

```
mod log runs [subcommands]
```


### Subcommands

* `add`: Adds a set of run logs to a log aggregate.

## mod log runs add

Adds a set of run logs to a log aggregate.


For each repository that has a matching run, add its run log to the aggregate.

### Usage

```
mod log runs add [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |
| logPath |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --last-run |  Select whatever the last run was, whether the run ran fully to completion or terminated early. |  |
| --organization |  Organization name to override the organization associated with each run. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --run |  A run ID for a run that has completed previously. |  |


## mod list

Lists the repositories that can be built and published.




### Usage

```
mod list [parameters]
```

### Examples

```
mod list /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --json |  (INCUBATING) Output the repository listing in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod monitor

(INCUBATING) Launches an HTTP server used to monitor the CLI.


This command will launch an HTTP server and block, so should be used in combination with backgrounding the process and redirecting its output as needed. The server will respond to GET requests on `http://localhost:<PORT>/prometheus` in the Prometheus exposition format.

### Usage

```
mod monitor
```

### Options

| Name | Description |
| ---- | ----------- |
| --port |  The port to listen on. Default is 8080. |


## mod publish

Publishes the LST artifacts for one or more projects.


Once published to your artifact repository, Moderne will be able to ingest them and they will, in turn, be usable inside of Moderne.

You must run **mod build** before you can run this command. You also must set up an artifact repository connection by running **mod config lsts artifacts** before this command will work.

### Usage

```
mod publish [parameters]
```

### Examples

```
mod publish /path/to/project
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --partition |  (INCUBATING) The name of the partitions to publish. If not specified, the recipe will publish all partitions (or the whole repository if there are no partitions). |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod run

Runs an OpenRewrite recipe locally on pre-built LSTS.


You must run the **mod build** command before this command will work. You also must set up a connection to moderne (**mod config moderne**) and install recipes (**mod config recipes**) for this command to work.

### Usage

```
mod run [parameters]
```

### Examples

```
mod run /path/to/project \
  --recipe=org.openrewrite.java.search.FindMethods \
  -P methodPattern='java.util.List add(..)'
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --active-recipe |  If this flag is included, the recipe specified as the active recipe in your IDE will be run (assuming you have the Moderne plugin installed and configured). |  |
| --jvm-debug |  Start a JDWP server on this port and pause for a remote debug connection. |  |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --no-patch |  (INCUBATING) Do not generate patch files on disk at the conclusion of a recipe run that makes changes. This is useful when you are looking to only use data table outputs and don't wish to incur the cost of writing patch files when they will be unused. |  |
| -P, --recipe-option |  Recipe options, if any. If a recipe accepts more than one option, you can include this argument multiple times. | `mod run . --recipe=<recipe> -P methodPattern='java.util.List add(..)' -P moreOptions='moreOptions'` |
| --parallel |  (INCUBATING) Run the recipe in parallel across repositories. Setting this option to 2 or more runs in a fixed thead pool of that size. Setting to 1 causes sequential execution. Setting to 0 uses a thread pool with a number of threads equal to the number of cores on your machine. Setting to a negative number runs in a fixed thread pool with a size equal to the number of cores on your machine minus this number. |  |
| --partition |  (INCUBATING) The name of the partitions to run the recipe on. If not specified, the recipe will run on all partitions (or the whole repository if there are no partitions). |  |
| --recipe |  The recipe ID of the recipe that should be run. | `org.openrewrite.java.search.FindMethods` |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --streaming |  (INCUBATING) Stream results from the recipe run to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like usage search in the IDE. |  |


## mod run-history

Get information about the most recent recipe runs. This will be transitioning to **mod audit runs list** eventually. A deprecation notice will be added here when we suggest adopting the alternative.




### Usage

```
mod run-history [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --json |  (INCUBATING) Output the run history in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |  |
| --most-recent |  Only show the most recent run of each recipe. |  |
| --partition |  (INCUBATING) The name of the partitions to retrieve history on. If not specified, the recipe will retrieve history on all partitions (or the whole repository if there are no partitions). |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod study

Produces studies from OpenRewrite recipe data tables locally.


Data tables are an important part of performing large scale impact analyses on source code.

### Usage

```
mod study [parameters]
```

### Examples

```
mod study /path/to/project --last-recipe-run --data-table <DATA-TABLE-NAME>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --csv |  Output in CSV format |  |
| --data-table |  The name of the data table to study. |  |
| --json |  Output the data table in JSON format with the specified fields. If no value is provided, all columns from the data table will be kept. |  |
| --last-recipe-run |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| -o, --output-file |  The location to output the data table. |  |
| --recipe-run |  A recipe run ID listed by **mod run-history** |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br/><br/>Supports partial matches (e.g., if the origin is *git@github.com:foo/bar* - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br/><br/>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --template |  |  |


## mod generate-completion


Generate bash/zsh completion script for mod.

### Usage

```
mod generate-completion
```

### Options

| Name | Description |
| ---- | ----------- |
| -V, --version |  Print version information and exit. |


