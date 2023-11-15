# Moderne CLI reference

## Table of contents

* [**mod**](#mod)
* [**mod build**](#mod-build)
* [**mod clean**](#mod-clean)
* [**mod clean builds**](#mod-clean-builds)
* [**mod clean runs**](#mod-clean-runs)
* [**mod config**](#mod-config)
* [**mod config artifacts**](#mod-config-artifacts)
* [**mod config artifacts edit**](#mod-config-artifacts-edit)
* [**mod config artifacts delete**](#mod-config-artifacts-delete)
* [**mod config artifacts show**](#mod-config-artifacts-show)
* [**mod config environment**](#mod-config-environment)
* [**mod config environment list**](#mod-config-environment-list)
* [**mod config gradle**](#mod-config-gradle)
* [**mod config gradle plugin**](#mod-config-gradle-plugin)
* [**mod config gradle plugin delete**](#mod-config-gradle-plugin-delete)
* [**mod config gradle plugin edit**](#mod-config-gradle-plugin-edit)
* [**mod config gradle plugin show**](#mod-config-gradle-plugin-show)
* [**mod config http**](#mod-config-http)
* [**mod config http proxy**](#mod-config-http-proxy)
* [**mod config http proxy delete**](#mod-config-http-proxy-delete)
* [**mod config http proxy edit**](#mod-config-http-proxy-edit)
* [**mod config http proxy show**](#mod-config-http-proxy-show)
* [**mod config http trust-store**](#mod-config-http-trust-store)
* [**mod config http trust-store delete**](#mod-config-http-trust-store-delete)
* [**mod config http trust-store edit**](#mod-config-http-trust-store-edit)
* [**mod config http trust-store edit file**](#mod-config-http-trust-store-edit-file)
* [**mod config http trust-store edit java-home**](#mod-config-http-trust-store-edit-java-home)
* [**mod config http trust-store show**](#mod-config-http-trust-store-show)
* [**mod config java**](#mod-config-java)
* [**mod config java edit**](#mod-config-java-edit)
* [**mod config java delete**](#mod-config-java-delete)
* [**mod config java list**](#mod-config-java-list)
* [**mod config maven**](#mod-config-maven)
* [**mod config maven plugin**](#mod-config-maven-plugin)
* [**mod config maven plugin delete**](#mod-config-maven-plugin-delete)
* [**mod config maven plugin edit**](#mod-config-maven-plugin-edit)
* [**mod config maven plugin show**](#mod-config-maven-plugin-show)
* [**mod config maven settings**](#mod-config-maven-settings)
* [**mod config maven settings delete**](#mod-config-maven-settings-delete)
* [**mod config maven settings edit**](#mod-config-maven-settings-edit)
* [**mod config maven settings show**](#mod-config-maven-settings-show)
* [**mod config recipes**](#mod-config-recipes)
* [**mod config recipes export**](#mod-config-recipes-export)
* [**mod config recipes export json**](#mod-config-recipes-export-json)
* [**mod config recipes export csv**](#mod-config-recipes-export-csv)
* [**mod config recipes jar**](#mod-config-recipes-jar)
* [**mod config recipes jar install**](#mod-config-recipes-jar-install)
* [**mod config recipes jar delete**](#mod-config-recipes-jar-delete)
* [**mod config recipes moderne**](#mod-config-recipes-moderne)
* [**mod config recipes moderne install**](#mod-config-recipes-moderne-install)
* [**mod config recipes moderne sync**](#mod-config-recipes-moderne-sync)
* [**mod config recipes delete**](#mod-config-recipes-delete)
* [**mod config recipes list**](#mod-config-recipes-list)
* [**mod config recipes search**](#mod-config-recipes-search)
* [**mod config recipes yaml**](#mod-config-recipes-yaml)
* [**mod config recipes yaml install**](#mod-config-recipes-yaml-install)
* [**mod config recipes yaml delete**](#mod-config-recipes-yaml-delete)
* [**mod config moderne**](#mod-config-moderne)
* [**mod config moderne delete**](#mod-config-moderne-delete)
* [**mod config moderne edit**](#mod-config-moderne-edit)
* [**mod config moderne show**](#mod-config-moderne-show)
* [**mod list**](#mod-list)
* [**mod publish**](#mod-publish)
* [**mod run**](#mod-run)
* [**mod run-history**](#mod-run-history)
* [**mod study**](#mod-study)
* [**mod add**](#mod-add)
* [**mod apply**](#mod-apply)
* [**mod checkout**](#mod-checkout)
* [**mod clone**](#mod-clone)
* [**mod commit**](#mod-commit)
* [**mod exec**](#mod-exec)
* [**mod pull**](#mod-pull)
* [**mod push**](#mod-push)
* [**mod reset**](#mod-reset)
* [**mod rev-parse**](#mod-rev-parse)
* [**mod stashset**](#mod-stashset)
* [**mod stashset apply**](#mod-stashset-apply)
* [**mod stashset push**](#mod-stashset-push)
* [**mod stashset**](#mod-stashset)
* [**mod stashset apply**](#mod-stashset-apply)
* [**mod stashset push**](#mod-stashset-push)
* [**mod generate-completion**](#mod-generate-completion)

## mod


Automated code remediation.

### Usage

```
mod [parameters] [subcommands]
```


### Subcommands

* `build`: Generates LST artifacts for one or more repositories.
* `clean`: Clean build and run artifacts produced by the CLI.
* `config`: Global configuration options that are required by some CLI commands.
* `list`: Lists the repositories that can be built and published.
* `publish`: Publishes the LST artifacts for one or more projects.
* `run`: Runs an OpenRewrite recipe locally on pre-built LSTS.
* `run-history`: Get information about the most recent recipe runs.
* `study`: Produces studies from OpenRewrite recipe data tables locally.
* `add`: Performs the equivalent of **git add** on multiple repositories.
* `apply`: Performs the equivalent of **git apply** on multiple repositories.
* `checkout`: Performs the equivalent of **git checkout** on multiple repositories.
* `clone`: Performs the equivalent of **git clone** on multiple repositories.
* `commit`: Performs the equivalent of **git commit** on multiple repositories.
* `exec`: Execute an arbitrary shell command recursively on selected repository roots.
* `pull`: Performs the equivalent of **git pull** on multiple repositories.
* `push`: Performs the equivalent of **git push** on multiple repositories.
* `reset`: Performs the equivalent of **git reset** on multiple repositories.
* `rev-parse`: Performs the equivalent of **git rev-parse** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
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
mod build [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --active-styles |  Comma separated list of the OpenRewrite style names (the name given in the`specs.openrewrite.org/v1beta/style` resource) that should be applied to the code whenever a recipe is run. If a style name isn't specified, OpenRewrite will autodetect the existing style and use that. | |
| --additional-build-args |  Additional arguments that are added to the Maven or Gradle build command. | |
| --bazel-rule |  Specifies a bazel rule expression. | |
| --dry-run |  Do not actually build the LST(s), but list the steps that would be required to do so. | |
| --java-home |  The path to the Java home directory that should be used to build the artifacts.<br><br>Defaults to **JAVA_HOME**. | |
| --java-version |  The version of the JDK which should be selected if multiple different JDKs are discovered. | |
| --jvm-debug |  Parser execution in Java-based build tools and recipe running will start a JDWP server on this port and pause for a remote debug connection. | |
| --jvm-opts |  Specifies the JVM options passed to Java-based build tools, if any. | |
| --no-download |  Do not attempt to download LSTs from Moderne. | |
| --offline |  When an underlying build tool has an offline mode, enable it. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |
| --skip-ssl, --skipSSL |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |


## mod clean

Clean build and run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean [parameters] [subcommands]
```


### Subcommands

* `builds`: Clean build artifacts produced by the CLI.
* `runs`: Clean run artifacts produced by the CLI.

## mod clean builds

Clean build artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean builds [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --keep |  Keep this many run artifacts and clean all others. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod clean runs

Clean run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean runs [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --keep |  Keep this many run artifacts and clean all others. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod config

Global configuration options that are required by some CLI commands.


Configuration set here is used as needed in all subsequent commands.

### Usage

```
mod config [parameters] [subcommands]
```


### Subcommands

* `artifacts`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `environment`: The build environment that the CLI is running in.
* `gradle`: Configures Gradle as it is used to resolve recipe dependencies and when running recipes.
* `http`: Configures HTTP options that will be used throughout the CLI.
* `java`: Configures locations of JDKs that can be used by build tools.
* `maven`: Configures Maven as it is used to resolve recipe dependencies and when running recipes.
* `recipes`: Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.
* `moderne`: Configures the connection to Moderne. Must be configured before you can install and run recipes.

## mod config artifacts

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config artifacts [parameters] [subcommands]
```


### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --authorization |  The authorization header value to use. | |
| --password |  The password to authenticate with. | |
| --user |  The user to authenticate with. | |

### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the artifact repository configuration. The publish command will no longer function until another artifact repository is configured.
* `show`: Displays the artifact repository configuration.

## mod config artifacts edit

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config artifacts edit [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| url |  The URL of the artifact repository that LSTs will be published to. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --authorization |  The authorization header value to use. | |
| --password |  The password to authenticate with. | |
| --skip-ssl, --skipSSL |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |
| --user |  The user to authenticate with. | |


## mod config artifacts delete

Removes the artifact repository configuration. The publish command will no longer function until another artifact repository is configured.




### Usage

```
mod config artifacts delete [parameters] [subcommands]
```



## mod config artifacts show

Displays the artifact repository configuration.




### Usage

```
mod config artifacts show [parameters] [subcommands]
```



## mod config environment

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment [parameters] [subcommands]
```


### Subcommands

* `list`: The build environment that the CLI is running in.

## mod config environment list

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment list [parameters] [subcommands]
```



## mod config gradle

Configures Gradle as it is used to resolve recipe dependencies and when running recipes.




### Usage

```
mod config gradle [parameters] [subcommands]
```


### Subcommands

* `plugin`: Configure the Gradle plugin used to build LSTs.

## mod config gradle plugin

Configure the Gradle plugin used to build LSTs.


Allows you to control the Moderne LST Gradle plugin used to build LSTs for Gradle projects.

### Usage

```
mod config gradle plugin [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes the configured Gradle plugin settings.
* `edit`: Configure Gradle plugin settings.
* `show`: Displays the configured Gradle plugin settings.

## mod config gradle plugin delete

Removes the configured Gradle plugin settings.


### Usage

```
mod config gradle plugin delete [parameters] [subcommands]
```



## mod config gradle plugin edit

Configure Gradle plugin settings.


Configure the Gradle plugin used to build LSTs.

### Usage

```
mod config gradle plugin edit [parameters] [subcommands]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-url |  For Gradle projects, this can be specified as a Maven repository cache/mirror to check before any other repositories. | |
| --version |  The version of the Moderne Gradle plugin that should be used to build the artifacts.<br><br>Defaults to **latest.release**. | |


## mod config gradle plugin show

Displays the configured Gradle plugin settings.


### Usage

```
mod config gradle plugin show [parameters] [subcommands]
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
mod config http proxy delete [parameters] [subcommands]
```



## mod config http proxy edit

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy edit [parameters] [subcommands]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --proxy-host |  | |
| --proxy-port |  | |


## mod config http proxy show

Displays the proxy settings from global configuration.


Shows the currently configured proxy settings, if any.

### Usage

```
mod config http proxy show [parameters] [subcommands]
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
mod config http trust-store delete [parameters] [subcommands]
```



## mod config http trust-store edit

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store edit [parameters] [subcommands]
```

### Subcommands

* `file`: Configures truststore to point to a file.
* `java-home`: Configures truststore to use the cacerts file in **/Users/mikesol/.sdkman/candidates/java/current/lib/security/cacerts**.

## mod config http trust-store edit file

Configures truststore to point to a file.


All subsequent commands will use this truststore.

### Usage

```
mod config http trust-store edit file [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| file |  | |



## mod config http trust-store edit java-home

Configures truststore to use the cacerts file in **/Users/mikesol/.sdkman/candidates/java/current/lib/security/cacerts**.


### Usage

```
mod config http trust-store edit java-home [parameters] [subcommands]
```



## mod config http trust-store show

Displays the truststore setting from global configuration.


Shows the currently configured truststore setting, if any.

### Usage

```
mod config http trust-store show [parameters] [subcommands]
```



## mod config java

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java [parameters] [subcommands]
```


### Subcommands

* `edit`: Configures locations of JDKs that can be used by build tools.
* `delete`: Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.
* `list`: Displays the detected and configured JDK installations.

## mod config java edit

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java edit [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| javaHomes |  The paths on disk where JDK installations can be found | |



## mod config java delete

Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.


### Usage

```
mod config java delete [parameters] [subcommands]
```



## mod config java list

Displays the detected and configured JDK installations.


### Usage

```
mod config java list [parameters] [subcommands]
```



## mod config maven

Configures Maven as it is used to resolve recipe dependencies and when running recipes.




### Usage

```
mod config maven [parameters] [subcommands]
```


### Subcommands

* `plugin`: Configure the Maven plugin used to build LSTs.
* `settings`: Configure Maven settings.

## mod config maven plugin

Configure the Maven plugin used to build LSTs.


Allows you to control the Moderne LST Maven plugin used to build LSTs for Maven projects.

### Usage

```
mod config maven plugin [parameters] [subcommands]
```


### Subcommands

* `delete`: Removes the configured Maven plugin settings.
* `edit`: Configure Maven plugin settings.
* `show`: Displays the configured Maven plugin version.

## mod config maven plugin delete

Removes the configured Maven plugin settings.


### Usage

```
mod config maven plugin delete [parameters] [subcommands]
```



## mod config maven plugin edit

Configure Maven plugin settings.


Configure the Maven plugin used to build LSTs.

### Usage

```
mod config maven plugin edit [parameters] [subcommands]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --version |  The version of the Moderne Maven plugin that should be used to build the artifacts.<br><br>Defaults to **RELEASE**. | |


## mod config maven plugin show

Displays the configured Maven plugin version.


### Usage

```
mod config maven plugin show [parameters] [subcommands]
```



## mod config maven settings

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **null** syntax.

### Usage

```
mod config maven settings [parameters] [subcommands]
```



### Subcommands

* `delete`: Removes the configured Maven settings.
* `edit`: Configure Maven settings.
* `show`: Displays the configured Maven settings.

## mod config maven settings delete

Removes the configured Maven settings.




### Usage

```
mod config maven settings delete [parameters] [subcommands]
```



## mod config maven settings edit

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes.

### Usage

```
mod config maven settings edit [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| settingsXml |  The location of a Maven _settings.xml_ file to use. | |



## mod config maven settings show

Displays the configured Maven settings.




### Usage

```
mod config maven settings show [parameters] [subcommands]
```



## mod config recipes

Configures the recipe marketplace available to the CLI. Must be configured before you can run recipes.


You must run the _mod config moderne_ command before running this command so that the CLI knows where to download recipes from.

### Usage

```
mod config recipes [parameters] [subcommands]
```


### Subcommands

* `export`: Export the recipe catalog for study by different tools.
* `jar`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `moderne`: Configures which Moderne recipes should be installed and used in the local CLI marketplace.
* `delete`: Clear the whole recipe marketplace.
* `list`: List the artifacts that are contributing recipes to the marketplace.
* `search`: Finds recipes based on free form text search.
* `yaml`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.

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
mod config recipes export json [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| output |  The path to the output JSON file. | |



## mod config recipes export csv

Export recipe details as CSV.




### Usage

```
mod config recipes export csv [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| output |  The path to the output CSV file. | |



## mod config recipes jar

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar [parameters] [subcommands]
```


### Subcommands

* `install`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes jar install

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar install [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| GAV |  The group, artifact, and version of the artifact to install. The version may be a fixed version, LATEST, or RELEASE.
The dependency will be resolved from the artifact source defined in **mod config artifacts** | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --offline |  Resolve JARs from what is available in local caches. | |
| --repository-url, --repository |  The repository URL that the artifact will be resolved from. | |


## mod config recipes jar delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes jar delete [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| artifact |  An artifact name or group and artifact name. | |



## mod config recipes moderne

Configures which Moderne recipes should be installed and used in the local CLI marketplace.


The recipes installed will then be available to run locally.

### Usage

```
mod config recipes moderne [parameters] [subcommands]
```


### Subcommands

* `install`: Allows you to find and install recipes from Moderne.
* `sync`: Synchronizes the local CLI recipe marketplace with Moderne.

## mod config recipes moderne install

Allows you to find and install recipes from Moderne.


After providing a search term, the Moderne API will be queried to find recipes that match it. You will be provided with up to 10 possible matches and the option to select one to install. If you select to install one, the appropriate JAR will be downloaded and added to your local CLI marketplace. The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes moderne install [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| searchTerm |  The search term to use to find recipes to install. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |


## mod config recipes moderne sync

Synchronizes the local CLI recipe marketplace with Moderne.


Destroys all recipes in the local CLI marketplace and replaces them with the latest recipes available in Moderne. The recipes defined by these artifacts will then be available to run.

### Usage

```
mod config recipes moderne sync [parameters] [subcommands]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |


## mod config recipes delete

Clear the whole recipe marketplace.


No recipes will be available to run until they are installed again.

### Usage

```
mod config recipes delete [parameters] [subcommands]
```



## mod config recipes list

List the artifacts that are contributing recipes to the marketplace.




### Usage

```
mod config recipes list [parameters] [subcommands]
```



## mod config recipes search

Finds recipes based on free form text search.


The found recipes may then be set as the active recipe. Multiple word searches may, but don't need to surrounded by quotes on the command line.

### Usage

```
mod config recipes search [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| query |  | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --limit |  The maximum total number of results that will be returned. | |


## mod config recipes yaml

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml [parameters] [subcommands]
```


### Subcommands

* `install`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes yaml install

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml install [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The path to the YAML file to install. The YAML file will be copied, so if further modifications to it are made, make sure to reinstall it. | |



## mod config recipes yaml delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes yaml delete [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The path to the YAML file to uninstall. | |



## mod config moderne

Configures the connection to Moderne. Must be configured before you can install and run recipes.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne [parameters] [subcommands]
```



### Subcommands

* `delete`: Removes the configured Moderne tenant.
* `edit`: Configures the connection to Moderne. Must be configured before you can install and run recipes.
* `show`: Displays the artifact repository configuration.

## mod config moderne delete

Removes the configured Moderne tenant.




### Usage

```
mod config moderne delete [parameters] [subcommands]
```



## mod config moderne edit

Configures the connection to Moderne. Must be configured before you can install and run recipes.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne edit [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| host |  The URL of the Moderne UI. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --api |  The URL of the tenant API gateway. Defaults to **https://api.<host-base-url>**. | |
| --skip-ssl |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |
| --token |  The Moderne personal access token to use. | |


## mod config moderne show

Displays the artifact repository configuration.




### Usage

```
mod config moderne show [parameters] [subcommands]
```



## mod list

Lists the repositories that can be built and published.




### Usage

```
mod list [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod publish

Publishes the LST artifacts for one or more projects.


Once published to your artifact repository, Moderne will be able to ingest them and they will, in turn, be usable inside of Moderne.

This command is typically used for publishing LST artifacts from CI systems.

You must run **mod build** before you can run this command. You also must set up an artifact repository connection by running **mod config artifacts** before this command will work.

### Usage

```
mod publish [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod run

Runs an OpenRewrite recipe locally on pre-built LSTS.


You must run the **mod build** command before this command will work. You also must set up a connection to moderne (**mod config moderne**) and install recipes (**mod config recipes**) for this command to work.

### Usage

```
mod run [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --active-recipe |  If this flag is included, the recipe specified as the active recipe in your IDE will be run (assuming you have the Moderne plugin installed and configured). | |
| --java-home |  The path to the Java home directory that should be used to build the artifacts.<br><br>Defaults to **JAVA_HOME**. | |
| --java-version |  The version of the JDK which should be selected if multiple different JDKs are discovered. | |
| --jvm-debug |  Parser execution in Java-based build tools and recipe running will start a JDWP server on this port and pause for a remote debug connection. | |
| --jvm-opts |  Specifies the JVM options passed to Java-based build tools, if any. | |
| -P, --recipe-option |  Recipe options, if any. If a recipe accepts more than one option, you can include this argument multiple times. | |
| --recipe |  The recipe ID of the recipe that should be run. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod run-history

Get information about the most recent recipe runs.




### Usage

```
mod run-history [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --most-recent |  Only show the most recent run of each recipe. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod study

Produces studies from OpenRewrite recipe data tables locally.




### Usage

```
mod study [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --data-table |  The name of the data table to study. | |
| --java-home |  The path to the Java home directory that should be used to build the artifacts.<br><br>Defaults to **JAVA_HOME**. | |
| --java-version |  The version of the JDK which should be selected if multiple different JDKs are discovered. | |
| --jvm-debug |  Parser execution in Java-based build tools and recipe running will start a JDWP server on this port and pause for a remote debug connection. | |
| --jvm-opts |  Specifies the JVM options passed to Java-based build tools, if any. | |
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. | |
| -o, --output-file |  The location to output the data table. | |
| --recipe-run |  The recipe run that generated patch files to apply. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod add

Performs the equivalent of **git add** on multiple repositories.


Rather than applying **git add** one at a time, this operates on multiple repositories.

### Usage

```
mod add [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --recipe-run |  The recipe run that generated patch files whose modified files we want to add. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod apply

Performs the equivalent of **git apply** on multiple repositories.


Rather than applying one patch at a time, this operates on multiple repositories.

### Usage

```
mod apply [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. | |
| --recipe-run |  The recipe run that generated patch files to apply. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod checkout

Performs the equivalent of **git checkout** on multiple repositories.


Rather than checking out one repository at a time, this operates on multiple repositories.

### Usage

```
mod checkout [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| branch |  The branch to checkout. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| -b, -B |  Causes a new branch to be created as if git-branch were called and then checked out. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod clone

Performs the equivalent of **git clone** on multiple repositories.


Rather than cloning one at a time, this operates on multiple repositories.

### Usage

```
mod clone [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| cloneInto |  The directory to clone all projects into. This directory will be created if it doesn't exist. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --limit |  The maximum number of repositories to clone. | |
| --moderne-organization |  The name of an organization in Moderne. All repositories in that organization will be cloned at the branch and commit of their current LSTs. | |
| --skip-ssl, --skipSSL |  If this parameter is included, SSL verification will be skipped.<br><br>**Default**: false | |


## mod commit

Performs the equivalent of **git commit** on multiple repositories.


Rather than applying one commit at a time, this operates on multiple repositories.

### Usage

```
mod commit [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. | |
| -m, --message |  The commit message to use. | |
| --recipe-run |  The recipe run that generated patch files to apply. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod exec

Execute an arbitrary shell command recursively on selected repository roots.




### Usage

```
mod exec [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| cmd |  | |
| args |  | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod pull

Performs the equivalent of **git pull** on multiple repositories.


Rather than pulling one repository at a time, this operates on multiple repositories.

### Usage

```
mod pull [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --rebase |  Pull with rebase or not. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod push

Performs the equivalent of **git push** on multiple repositories.


Rather than pushing one repository at a time, this operates on multiple repositories.

### Usage

```
mod push [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| repository |  | |
| refspec |  Specify what destination ref to update with what source object. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --last-recipe-run |  Select whatever the last recipe run was that generated patch files to apply. The last recipe run is determined from the whole repository group, not on an individual repository basis. | |
| --recipe-run |  The recipe run that generated patch files to apply. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |
| --u, --set-upstream |  For every branch that is up to date or successfully pushed, add upstream (tracking) reference. | |


## mod reset

Performs the equivalent of **git reset** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

### Usage

```
mod reset [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --hard |  Resets the index and working tree. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod rev-parse

Performs the equivalent of **git rev-parse** on multiple repositories.


Rather than applying one rev-parse at a time, this operates on multiple repositories.

### Usage

```
mod rev-parse [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| args |  | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod stashset [parameters] [subcommands]
```


### Subcommands

* `apply`: Performs the equivalent of **git stash apply** on multiple repositories.
* `push`: Performs the equivalent of **git stash push** on multiple repositories.

## mod stashset apply

Performs the equivalent of **git stash apply** on multiple repositories.




### Usage

```
mod stashset apply [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| ref |  The stash ref to apply. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --force |  Pop the stash after applying it, regardless of whether it made a change. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod stashset push

Performs the equivalent of **git stash push** on multiple repositories.




### Usage

```
mod stashset push [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |
| -u, --include-untracked |  Include untracked files. | |


## mod stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod stashset [parameters] [subcommands]
```


### Subcommands

* `apply`: Performs the equivalent of **git stash apply** on multiple repositories.
* `push`: Performs the equivalent of **git stash push** on multiple repositories.

## mod stashset apply

Performs the equivalent of **git stash apply** on multiple repositories.




### Usage

```
mod stashset apply [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |
| ref |  The stash ref to apply. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --force |  Pop the stash after applying it, regardless of whether it made a change. | |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |


## mod stashset push

Performs the equivalent of **git stash push** on multiple repositories.




### Usage

```
mod stashset push [parameters] [subcommands]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ------- |
| path |  The absolute or relative path on disk to a directory containing one or more checked-out Git repositories that you want to operate on. This typically takes the form of targeting a single, checked-out copy of a Git repository or it can be a folder containing a collection of Git repositories that will be discovered by recursively scanning the initial provided directory. | |

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| --repository-branch |  Restricts the command to only run against repositories that are currently on this branch. | |
| --repository-origin |  Restricts the command to only run against repositories that have an origin that matches this.<br><br>Supports partial matches (e.g., if the origin is _git@github.com:foo/bar_ - all of the following would match this: github.com:foo/bar, github.com, foo, and foo/bar). | |
| --repository-path |  Restricts the command to only run against repositories that have a path (a combination of the organization/project and the repository name) that matches this.<br><br>Supports partial matches (e.g., if the repository is in the _foo_ organization and is called _bar_ - all of the following would match this: foo/bar, foo/.*, foo, and bar). | |
| -u, --include-untracked |  Include untracked files. | |


## mod generate-completion


Generate bash/zsh completion script for mod.

### Usage

```
mod generate-completion [parameters] [subcommands]
```

### Options

| Name | Description | Example |
| ---- | ----------- | ------- |
| -V, --version |  Print version information and exit. | |


