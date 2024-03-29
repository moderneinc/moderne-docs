# Moderne CLI reference

## Table of contents

* [**mod**](#mod)
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
* [**mod config build bazel rule**](#mod-config-build-bazel-rule)
* [**mod config build bazel rule delete**](#mod-config-build-bazel-rule-delete)
* [**mod config build bazel rule edit**](#mod-config-build-bazel-rule-edit)
* [**mod config build bazel rule show**](#mod-config-build-bazel-rule-show)
* [**mod config build gradle**](#mod-config-build-gradle)
* [**mod config build gradle arguments**](#mod-config-build-gradle-arguments)
* [**mod config build gradle arguments delete**](#mod-config-build-gradle-arguments-delete)
* [**mod config build gradle arguments edit**](#mod-config-build-gradle-arguments-edit)
* [**mod config build gradle arguments show**](#mod-config-build-gradle-arguments-show)
* [**mod config build gradle root**](#mod-config-build-gradle-root)
* [**mod config build gradle root delete**](#mod-config-build-gradle-root-delete)
* [**mod config build gradle root edit**](#mod-config-build-gradle-root-edit)
* [**mod config build gradle root show**](#mod-config-build-gradle-root-show)
* [**mod config build maven**](#mod-config-build-maven)
* [**mod config build maven arguments**](#mod-config-build-maven-arguments)
* [**mod config build maven arguments delete**](#mod-config-build-maven-arguments-delete)
* [**mod config build maven arguments edit**](#mod-config-build-maven-arguments-edit)
* [**mod config build maven arguments show**](#mod-config-build-maven-arguments-show)
* [**mod config build maven settings**](#mod-config-build-maven-settings)
* [**mod config build maven settings delete**](#mod-config-build-maven-settings-delete)
* [**mod config build maven settings edit**](#mod-config-build-maven-settings-edit)
* [**mod config build maven settings show**](#mod-config-build-maven-settings-show)
* ~~[**mod config artifacts**](#mod-config-artifacts-deprecated)~~ (deprecated)
* ~~[**mod config artifacts artifactory**](#mod-config-artifacts-artifactory-deprecated)~~ (deprecated)
* ~~[**mod config artifacts artifactory edit**](#mod-config-artifacts-artifactory-edit-deprecated)~~ (deprecated)
* ~~[**mod config artifacts artifactory delete**](#mod-config-artifacts-artifactory-delete-deprecated)~~ (deprecated)
* ~~[**mod config artifacts artifactory show**](#mod-config-artifacts-artifactory-show-deprecated)~~ (deprecated)
* ~~[**mod config artifacts show**](#mod-config-artifacts-show-deprecated)~~ (deprecated)
* ~~[**mod config artifacts maven**](#mod-config-artifacts-maven-deprecated)~~ (deprecated)
* ~~[**mod config artifacts maven edit**](#mod-config-artifacts-maven-edit-deprecated)~~ (deprecated)
* ~~[**mod config artifacts maven delete**](#mod-config-artifacts-maven-delete-deprecated)~~ (deprecated)
* ~~[**mod config artifacts maven show**](#mod-config-artifacts-maven-show-deprecated)~~ (deprecated)
* [**mod config environment**](#mod-config-environment)
* [**mod config environment show**](#mod-config-environment-show)
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
* [**mod config recipes artifacts default-repositories**](#mod-config-recipes-artifacts-default-repositories)
* [**mod config recipes artifacts default-repositories enable**](#mod-config-recipes-artifacts-default-repositories-enable)
* [**mod config recipes artifacts default-repositories disable**](#mod-config-recipes-artifacts-default-repositories-disable)
* [**mod config recipes artifacts default-repositories show**](#mod-config-recipes-artifacts-default-repositories-show)
* [**mod config recipes artifacts maven**](#mod-config-recipes-artifacts-maven)
* [**mod config recipes artifacts maven edit**](#mod-config-recipes-artifacts-maven-edit)
* [**mod config recipes artifacts maven delete**](#mod-config-recipes-artifacts-maven-delete)
* [**mod config recipes artifacts maven show**](#mod-config-recipes-artifacts-maven-show)
* [**mod config recipes export**](#mod-config-recipes-export)
* [**mod config recipes export json**](#mod-config-recipes-export-json)
* [**mod config recipes export csv**](#mod-config-recipes-export-csv)
* [**mod config recipes jar**](#mod-config-recipes-jar)
* [**mod config recipes jar install**](#mod-config-recipes-jar-install)
* [**mod config recipes jar delete**](#mod-config-recipes-jar-delete)
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
* [**mod config scm**](#mod-config-scm)
* [**mod config scm gitlab**](#mod-config-scm-gitlab)
* [**mod config scm gitlab base-url**](#mod-config-scm-gitlab-base-url)
* [**mod config scm gitlab base-url delete**](#mod-config-scm-gitlab-base-url-delete)
* [**mod config scm gitlab base-url edit**](#mod-config-scm-gitlab-base-url-edit)
* [**mod config scm gitlab base-url show**](#mod-config-scm-gitlab-base-url-show)
* [**mod config user**](#mod-config-user)
* [**mod config user delete**](#mod-config-user-delete)
* [**mod config user edit**](#mod-config-user-edit)
* [**mod config user show**](#mod-config-user-show)
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
* [**mod log**](#mod-log)
* [**mod log builds**](#mod-log-builds)
* [**mod log builds add**](#mod-log-builds-add)
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
mod [parameters] [subcommands]
```

### Options

| Name | Description |
| ---- | ----------- |
| --version |  Display version info. |

### Subcommands

* `build`: Generates LST artifacts for one or more repositories.
* `clean`: Clean build and run artifacts produced by the CLI.
* `config`: Global configuration options that are required by some CLI commands.
* `exec`: Execute an arbitrary shell command recursively on selected repository roots.
* `git`: Multi-repository git operations.
* `log`: Manages a log aggregate.
* `list`: Lists the repositories that can be built and published.
* `monitor`: (INCUBATING) Launches an HTTP server used to monitor the CLI.
* `publish`: Publishes the LST artifacts for one or more projects.
* `run`: Runs an OpenRewrite recipe locally on pre-built LSTS.
* `run-history`: Get information about the most recent recipe runs.
* `study`: Produces studies from OpenRewrite recipe data tables locally.
* `generate-completion`

## mod build

Generates LST artifacts for one or more repositories.


Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them or they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend setting up a Jenkins pipeline or GitHub actions for ingesting LST artifacts in bulk.

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
| --dry-run |  Do not actually build the LST(s), but list the steps that would be required to do so. |  |
| --no-download |  Do not attempt to download LSTs from Moderne. |  |
| --offline |  When an underlying build tool has an offline mode, enable it. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod clean

Clean build and run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod config

Global configuration options that are required by some CLI commands.


Configuration set here is used as needed in all subsequent commands.

### Usage

```
mod config [parameters] [subcommands]
```

### Examples

```
mod config moderne edit --api <tenant-api-gateway> --token <token>
```


### Subcommands

* `build`: Configures build tools used to produce LSTs.
* `artifacts`: Configures the storage layer for LSTs to be published to and downloaded from. 
* `environment`: The build environment that the CLI is running in.
* `http`: Configures HTTP options that will be used throughout the CLI.
* `java`: Configures Java options used for building LSTs and running recipes.
* `license`: Configure a license key.
* `lsts`: Configures LSTs production and publishing. 
* `moderne`: Configures the connection to Moderne. Must be configured before you can install and run recipes.
* `recipes`: Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.
* `scm`: Configures source code management.
* `user`: Configure the active user.

## mod config build

Configures build tools used to produce LSTs.




### Usage

```
mod config build [parameters] [subcommands]
```


### Subcommands

* `active-styles`: Configure the active styles to use when building LSTs.
* `bazel`: Configures the Bazel build tool.
* `gradle`: Configures Gradle as it is used to resolve recipe dependencies and when running recipes.
* `maven`: Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.

## mod config build active-styles

Configure the active styles to use when building LSTs.


Overriding active styles circumvents auto-detection of styles in the production of LSTs.

### Usage

```
mod config build active-styles [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes overriding active styles.
* `edit`: Configure the active styles to use when building LSTs.
* `show`: Displays the configured overriding active styles.

## mod config build active-styles delete

Removes overriding active styles.


### Usage

```
mod config build active-styles delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build active-styles show

Displays the configured overriding active styles.


### Usage

```
mod config build active-styles show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel

Configures the Bazel build tool.




### Usage

```
mod config build bazel [parameters] [subcommands]
```

### Examples

```
mod config build bazel rule edit "//:java-maven-lib"
```


### Subcommands

* `rule`: Configure the Bazel rule used to build LSTs.

## mod config build bazel rule

Configure the Bazel rule used to build LSTs.


The rule affects how the project is built.

### Usage

```
mod config build bazel rule [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes Bazel build rule customization.
* `edit`: Configure Bazel build rule.
* `show`: Displays the configured Bazel build rule.

## mod config build bazel rule delete

Removes Bazel build rule customization.


### Usage

```
mod config build bazel rule delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel rule edit

Configure Bazel build rule.




### Usage

```
mod config build bazel rule edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| rule |  The Bazel build rule to use when building LSTs. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build bazel rule show

Displays the configured Bazel build rule.


### Usage

```
mod config build bazel rule show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle

Configures Gradle as it is used to resolve recipe dependencies and when running recipes.




### Usage

```
mod config build gradle [parameters] [subcommands]
```

### Examples

```
mod config build gradle arguments edit --refresh-dependencies
```


### Subcommands

* `arguments`: Configure Gradle build arguments.
* `root`: (INCUBATING) Configure the directory containing the Gradle root build. This could be `.` to force the CLI to use the root directory of the repository as the Gradle build and look no deeper.

## mod config build gradle arguments

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Gradle.
* `edit`: Configure Gradle build arguments.
* `show`: Displays the configured Gradle additional build arguments.

## mod config build gradle arguments delete

Removes additional build arguments for Gradle.


### Usage

```
mod config build gradle arguments delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle arguments edit

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments edit [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle arguments show

Displays the configured Gradle additional build arguments.


### Usage

```
mod config build gradle arguments show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root

(INCUBATING) Configure the directory containing the Gradle root build. This could be `.` to force the CLI to use the root directory of the repository as the Gradle build and look no deeper.


When this is set, the CLI does not attempt to find root Gradle builds in subdirectories or siblings recursively.

### Usage

```
mod config build gradle root [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes the configured directory containing the Gradle root build.
* `edit`: Configure the directory containing the Gradle root build.
* `show`: Displays the configured directory containing the Gradle root build.

## mod config build gradle root delete

Removes the configured directory containing the Gradle root build.


### Usage

```
mod config build gradle root delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root edit

Configure the directory containing the Gradle root build.


When this is set, the CLI does not attempt to find root Gradle builds in subdirectories or siblings recursively.

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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build gradle root show

Displays the configured directory containing the Gradle root build.


### Usage

```
mod config build gradle root show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven

Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.




### Usage

```
mod config build maven [parameters] [subcommands]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```


### Subcommands

* `arguments`: Configure Maven build arguments.
* `settings`: Configure Maven settings.

## mod config build maven arguments

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Maven.
* `edit`: Configure Maven build arguments.
* `show`: Displays the configured Maven additional build arguments.

## mod config build maven arguments delete

Removes additional build arguments for Maven.


### Usage

```
mod config build maven arguments delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven arguments edit

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments edit [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven arguments show

Displays the configured Maven additional build arguments.


### Usage

```
mod config build maven arguments show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven settings

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **null** syntax.

### Usage

```
mod config build maven settings [parameters] [subcommands]
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
mod config build maven settings delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config build maven settings show

Displays the configured Maven settings.




### Usage

```
mod config build maven settings show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config artifacts (deprecated)

Configures the storage layer for LSTs to be published to and downloaded from. 


Must be configured before you can run the publish command.

### Usage

```
mod config artifacts [parameters] [subcommands]
```


### Deprecated
Use 'mod config lsts artifacts' instead.

### Subcommands

* `artifactory`: Configures the Artifactory repository that LSTs will be published to and downloaded from.
* `show`: Displays the LST artifacts repository configuration.
* `maven`: Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.

## mod config artifacts artifactory (deprecated)

Configures the Artifactory repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Artifactory repository.

### Usage

```
mod config artifacts artifactory [parameters] [subcommands]
```


### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Artifactory repository configuration.

## mod config artifacts artifactory edit (deprecated)

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config artifacts artifactory edit [parameters]
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
| --local |  Configuration relevant to a specific group of repositories. |  |
| --password |  The password to authenticate with. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config artifacts artifactory delete (deprecated)

Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config artifacts artifactory delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config artifacts artifactory show (deprecated)

Displays the Artifactory repository configuration.




### Usage

```
mod config artifacts artifactory show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config artifacts show (deprecated)

Displays the LST artifacts repository configuration.




### Usage

```
mod config artifacts show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config artifacts maven (deprecated)

Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Maven repository.

### Usage

```
mod config artifacts maven [parameters] [subcommands]
```


### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Maven artifact repository repository configuration.

## mod config artifacts maven edit (deprecated)

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config artifacts maven edit [parameters]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config artifacts maven delete (deprecated)

Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config artifacts maven delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config artifacts maven show (deprecated)

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config artifacts maven show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config environment

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment [parameters] [subcommands]
```


### Subcommands

* `show`: The build environment that the CLI is running in.

## mod config environment show

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment show [parameters]
```



## mod config http

Configures HTTP options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http [parameters] [subcommands]
```


### Subcommands

* `proxy`: Configures HTTP proxy settings that will be used for every HTTP request.
* `trust-store`: Configures truststore options that will be used throughout the CLI.

## mod config http proxy

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy [parameters] [subcommands]
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
mod config http proxy delete [parameters]
```



## mod config http proxy edit

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy edit [parameters]
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
mod config http proxy show [parameters]
```



## mod config http trust-store

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store [parameters] [subcommands]
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
mod config http trust-store delete [parameters]
```



## mod config http trust-store edit

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store edit [parameters] [subcommands]
```

### Subcommands

* `system`: Configures truststore to use the Operating System specific default truststore. On Mac the system trust store is accessed via the Keychain Access app. On Windows the system trust store is accessed via the Microsoft Management Console. On Linux there is no standardized trust store, so the cacerts file under **${JAVA_HOME}/lib/security/cacerts** will be used.
* `file`: Configures truststore to point to a file.
* `java-home`: Configures truststore to use the cacerts file in **${JAVA_HOME}/lib/security/cacerts**.

## mod config http trust-store edit system

Configures truststore to use the Operating System specific default truststore. On Mac the system trust store is accessed via the Keychain Access app. On Windows the system trust store is accessed via the Microsoft Management Console. On Linux there is no standardized trust store, so the cacerts file under **${JAVA_HOME}/lib/security/cacerts** will be used.


### Usage

```
mod config http trust-store edit system [parameters]
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

Configures truststore to use the cacerts file in **${JAVA_HOME}/lib/security/cacerts**.


### Usage

```
mod config http trust-store edit java-home [parameters]
```



## mod config http trust-store show

Displays the truststore setting from global configuration.


Shows the currently configured truststore setting, if any.

### Usage

```
mod config http trust-store show [parameters]
```



## mod config java

Configures Java options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Java configurations.

### Usage

```
mod config java [parameters] [subcommands]
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
mod config java jdk [parameters] [subcommands]
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

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java jdk delete

Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.


### Usage

```
mod config java jdk delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java jdk list

Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config java jdk list [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --named |  Filter the list of JDKs to . |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java options

Configures JVM options added to tools building LSTs.


Must be configured before you can run the build command if non-standard VM options are required.

### Usage

```
mod config java options [parameters] [subcommands]
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
mod config java options edit [parameters]
```

### Examples

```
mod config java options edit "-Xmx4G"
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java options delete

Removes configured JVM options. The CLI will no longer use custom JVM options.


### Usage

```
mod config java options delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java options show

Displays the configured JVM options.


### Usage

```
mod config java options show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version

Configures the JDK to use.


Configure a name like "17", "17-tem", or "17.0.6-tem" depending on the degree of control needed.

### Usage

```
mod config java version [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version delete

Reverts to auto-detection of a JDK to use when building a repository.


### Usage

```
mod config java version delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config java version show

Displays the configured JDK version.


### Usage

```
mod config java version show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config license

Configure a license key.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes the configured license key.
* `edit`: Configure the active user.
* `show`: Displays information about the configured license key.

## mod config license delete

Removes the configured license key.


### Usage

```
mod config license delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


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

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config license show

Displays information about the configured license key.


### Usage

```
mod config license show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts

Configures LSTs production and publishing. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts [parameters] [subcommands]
```

### Subcommands

* `artifacts`: Configures the storage layer for LSTs to be published to and downloaded from. 

## mod config lsts artifacts

Configures the storage layer for LSTs to be published to and downloaded from. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts artifacts [parameters] [subcommands]
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
mod config lsts artifacts artifactory [parameters] [subcommands]
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
| --local |  Configuration relevant to a specific group of repositories. |  |
| --password |  The password to authenticate with. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config lsts artifacts artifactory delete

Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts artifactory delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config lsts artifacts artifactory show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts artifacts show

Displays the LST artifacts repository configuration.




### Usage

```
mod config lsts artifacts show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts artifacts maven

Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Maven repository.

### Usage

```
mod config lsts artifacts maven [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --user |  The user to authenticate with. |  |


## mod config lsts artifacts maven delete

Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts maven delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config lsts artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config lsts artifacts maven show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config moderne

Configures the connection to Moderne. Must be configured before you can install and run recipes.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne [parameters] [subcommands]
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
mod config moderne delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


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
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped. |  |
| --token |  The Moderne personal access token to use. Not required to access Moderne DX as a regular, non-administrator user. |  |


## mod config moderne local

Configures a connection to a Moderne DX instance running locally on the same machine.


All subsequent commands will use this instance.

### Usage

```
mod config moderne local [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config moderne show

Displays the Moderne tenant configuration.




### Usage

```
mod config moderne show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config moderne organizations

The organizational hierarchy of repository ownership.


Each of these organizations are cloneable.

### Usage

```
mod config moderne organizations [parameters] [subcommands]
```


### Subcommands

* `show`: Displays the Moderne view of organizational hierarchy.

## mod config moderne organizations show

Displays the Moderne view of organizational hierarchy.




### Usage

```
mod config moderne organizations show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config recipes

Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.


You must run the _mod config moderne_ command before running this command so that the CLI knows where to download recipes from.

### Usage

```
mod config recipes [parameters] [subcommands]
```

### Examples

```
mod config recipes sync moderne
```


### Subcommands

* `artifacts`: Configures artifact repositories to resolve recipes from.
* `export`: Export the recipe catalog for study by different tools.
* `jar`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
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
mod config recipes artifacts [parameters] [subcommands]
```


### Subcommands

* `artifactory`: Configures the artifact repository to resolve recipes from.
* `show`: Displays the recipe artifacts repository configuration.
* `default-repositories`: (INCUBATING) Configure the availability of default repositories.
* `maven`: Configures a Maven-formatted artifact repository that recipes will be resolved from.

## mod config recipes artifacts artifactory

Configures the artifact repository to resolve recipes from.


All subsequent recipe installation commands will use this Artifactory repository.

### Usage

```
mod config recipes artifacts artifactory [parameters] [subcommands]
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
mod config recipes artifacts artifactory delete [parameters]
```



## mod config recipes artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config recipes artifacts artifactory show [parameters]
```



## mod config recipes artifacts show

Displays the recipe artifacts repository configuration.




### Usage

```
mod config recipes artifacts show [parameters]
```



## mod config recipes artifacts default-repositories

(INCUBATING) Configure the availability of default repositories.


Maven Central and Nexus Snapshots are considered as valid recipe sources by default.In some environments access to these repositories is not allowed. This can be used to disable any attempt to access them.

### Usage

```
mod config recipes artifacts default-repositories [parameters] [subcommands]
```


### Subcommands

* `enable`
* `disable`
* `show`

## mod config recipes artifacts default-repositories enable


(INCUBATING) Enable default repositories.

### Usage

```
mod config recipes artifacts default-repositories enable [parameters]
```



## mod config recipes artifacts default-repositories disable


(INCUBATING) Disable default repositories.

### Usage

```
mod config recipes artifacts default-repositories disable [parameters]
```



## mod config recipes artifacts default-repositories show


(INCUBATING) Show the current configuration of default repositories.

### Usage

```
mod config recipes artifacts default-repositories show [parameters]
```



## mod config recipes artifacts maven

Configures a Maven-formatted artifact repository that recipes will be resolved from.


All subsequent recipe installation commands will use this Maven repository.

### Usage

```
mod config recipes artifacts maven [parameters] [subcommands]
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
mod config recipes artifacts maven delete [parameters]
```



## mod config recipes artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config recipes artifacts maven show [parameters]
```



## mod config recipes export

Export the recipe catalog for study by different tools.




### Usage

```
mod config recipes export [parameters] [subcommands]
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
mod config recipes jar [parameters] [subcommands]
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
The dependency will be resolved from the artifact source defined in **mod config lsts artifacts** |

### Options

| Name | Description |
| ---- | ----------- |
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



## mod config recipes moderne

Configures which Moderne recipes should be installed and used in the local CLI marketplace.


The recipes installed will then be available to run locally.

### Usage

```
mod config recipes moderne [parameters] [subcommands]
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
mod config recipes moderne push [parameters]
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
mod config recipes moderne sync [parameters]
```



## mod config recipes delete

Clear the whole recipe marketplace.


No recipes will be available to run until they are installed again.

### Usage

```
mod config recipes delete [parameters]
```



## mod config recipes list

List the artifacts that are contributing recipes to the marketplace.




### Usage

```
mod config recipes list [parameters]
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
mod config recipes yaml [parameters] [subcommands]
```

### Examples

```
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
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
| path |  The path to the YAML file to install. The YAML file will be copied, so if further modifications to it are made, make sure to reinstall it. |



## mod config recipes yaml delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes yaml delete [parameters]
```

### Examples

```
mod config recipes jar delete rewrite-java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| path |  The path to the YAML file to uninstall. |



## mod config scm

Configures source code management.




### Usage

```
mod config scm [parameters] [subcommands]
```


### Subcommands

* `gitlab`: Configures GitLab.

## mod config scm gitlab

Configures GitLab.




### Usage

```
mod config scm gitlab [parameters] [subcommands]
```


### Subcommands

* `base-url`: Configure the base URL.

## mod config scm gitlab base-url

Configure the base URL.


The base URL affects how repository paths and URLs to SCM are constructed.

### Usage

```
mod config scm gitlab base-url [parameters] [subcommands]
```

### Examples

```
mod config scm gitlab base-url edit "https://acme.com/gitlab-ee/"
```


### Subcommands

* `delete`: Removes base URL customization.
* `edit`: Configure the base URL.
* `show`: Displays the configured base URL.

## mod config scm gitlab base-url delete

Removes base URL customization.


### Usage

```
mod config scm gitlab base-url delete [parameters]
```



## mod config scm gitlab base-url edit

Configure the base URL.




### Usage

```
mod config scm gitlab base-url edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| baseUrl |  The base URL to use when determining paths. |



## mod config scm gitlab base-url show

Displays the configured base URL.


### Usage

```
mod config scm gitlab base-url show [parameters]
```



## mod config user

Configure the active user.


The active user is reported for activity metrics in Moderne DX environments. If not explicitly set in **mod config**, the active user is inferred from global git configuration.

### Usage

```
mod config user [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes the configured active user.
* `edit`: Configure the active user.
* `show`: Displays the configured active user.

## mod config user delete

Removes the configured active user.


### Usage

```
mod config user delete [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config user edit

Configure the active user.


The active user is reported for activity metrics in Moderne DX environments.

### Usage

```
mod config user edit [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --email |  The email of the active user. |  |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --name |  The name of the active user. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod config user show

Displays the configured active user.


### Usage

```
mod config user show [parameters]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --local |  Configuration relevant to a specific group of repositories. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --save |  When applied to a group of repositories, indicates that the configuration should be placed in a **.modernecfg** which can be committed to source control. When applied to global configuration, this option has no effect. |  |


## mod exec

Execute an arbitrary shell command recursively on selected repository roots.




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
| cmd |  |
| args |  |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git

Multi-repository git operations.




### Usage

```
mod git [parameters] [subcommands]
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
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git clone

Performs the equivalent of **git clone** on multiple repositories.


Rather than cloning one at a time, this operates on multiple repositories. The list of repositories can be sourced from different places, like Moderne or a CSV.

### Usage

```
mod git clone [parameters] [subcommands]
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


The CSV file should have a header row with the required columns **cloneUrl, branch** and any number of optional columns. The optional columns are **changeset, java, jvmOpts, mavenArgs, gradleArgs, bazelRule**.

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
| --depth |  |
| --filter |  |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
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
| --depth |  |
| --filter |  |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
| --save |  Any per repository configuration should be placed in a **.modernecfg** which can be committed to source control. |
| --single-branch |  |


## mod git clone moderne

Clones the repositories in an organization on Moderne.


The repositories are cloned at the same branch and changeset of the LST that represents that repository in the organization in Moderne so that a subsequent **mod build** will trivially match and download the LST from Moderne. By default a maximum of 20 repositories will be cloned. Use --limit to change this.

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
| --depth |  |
| --filter |  |
| --limit |  The maximum number of repositories to clone. |
| --metadata-only, --metadata |  Do not perform a traditional git clone, but rather just record the repository origin, path, branch, and changeset in a 'repository' folder. |
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
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| -m, --message |  The commit message to use. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod git stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod git stashset [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| -u, --include-untracked |  Include untracked files. |  |


## mod git stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod git stashset [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| -u, --include-untracked |  Include untracked files. |  |


## mod log

Manages a log aggregate.


Used to understand holistically how a build performed on many repositories. In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log [parameters] [subcommands]
```


### Subcommands

* `builds`: Adds a set of build logs to a log aggregate.

## mod log builds

Adds a set of build logs to a log aggregate.


In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log builds [parameters] [subcommands]
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
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod monitor

(INCUBATING) Launches an HTTP server used to monitor the CLI.


This command will launch an HTTP server and block, so should be used in combination with backgrounding the process and redirecting its output as needed. The server will respond to GET requests on http://localhost:<PORT>/prometheus in the Prometheus exposition format.

### Usage

```
mod monitor [parameters]
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
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| -P, --recipe-option |  Recipe options, if any. If a recipe accepts more than one option, you can include this argument multiple times. | `mod run . --recipe=<recipe> -P methodPattern='java.util.List add(..)' -P moreOptions='moreOptions'` |
| --recipe |  The recipe ID of the recipe that should be run. | `org.openrewrite.java.search.FindMethods` |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


## mod run-history

Get information about the most recent recipe runs.




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
| --most-recent |  Only show the most recent run of each recipe. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |


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
| --data-table |  The name of the data table to study. |  |
| --json |  Output the data table in JSON format with the specified fields. If no value is provided, all columns from the data table will be kept. |  |
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| -o, --output-file |  The location to output the data table. |  |
| --recipe-run |  The recipe run that generated patch files to apply. |  |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | `main` |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | `github.com` |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | `openrewrite/rewrite` |
| --template |  |  |


## mod generate-completion


Generate bash/zsh completion script for mod.

### Usage

```
mod generate-completion [parameters]
```

### Options

| Name | Description |
| ---- | ----------- |
| -V, --version |  Print version information and exit. |


