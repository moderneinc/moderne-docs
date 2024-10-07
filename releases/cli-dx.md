# CLI / DX changelog

### CLI / DX v3.22.6 (2024/10/06)

#### What's Changed CLI
* Fix CLI IDE debug code path on Windows.


### CLI / DX v3.22.5 (2024/10/04)

#### What's Changed DX
* Add the missing rewrite-remote dependency that prevented startup.


### CLI / DX v3.22.4 (2024/10/04)

#### What's Changed CLI
* Add JavaScript build step
* Register `H2MvStorePomCache` class for GraalVM in order to serialize maven metadata cache keys
* Improve performance of metric aggregation


### CLI / DX v3.22.3 (2024/10/03)

#### What's Changed CLI
* Migrate onto latest rewrite-remoting api
* Continue java runtime detection even if java executable cannot be found on PATH
* Supporting building moderne-cli on Windows ARM
* Removing the newly set CLI classpath


### CLI / DX v3.22.2 (2024/10/01)

#### What's Changed CLI
* Upgrade rewrite-polyglot to [1.14.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v1.14.1) which fixes `OmniParser` throwing an exception when presented with a source file type it doesn't have a parser for
* Hide stacktrace on failing recipe install


### CLI / DX v3.22.1 (2024/10/01)

#### What's Changed CLI
* Allow empty option displayname
* Feat adding paging get all orgs in cli


### CLI / DX v3.20.14 (2024/10/01)

#### What's Changed CLI
* backport orphaned repositories


### CLI / DX v3.22.0 (2024/09/30)

#### What's Changed CLI
* Enhance`mod config recipes moderne sync` to install C# recipes
* Update to rewrite-polyglot [1.14.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v1.14.0) which fixes missing type attribution in code parsed from Bazel builds
* Only save on at least partial success
* When recipes use the classpathFromResources mechanism use default location ~/.moderne/cli/rewrite-classpath instead of  ~/rewrite/classpath


### CLI / DX v3.21.2 (2024/09/27)

#### What's Changed
* Adding partition name to study output
* When building Bazel LSTs, include the full classpath in the build log.


### CLI / DX v3.21.1 (2024/09/26)

#### What's Changed
* Display error in the dev center data table when any recipe errors out
* Add user provided dotnets to list of installed


### CLI / DX v3.21.0 (2024/09/25)

#### What's Changed CLI
* Add `no-maven-central` and `no-nuget-org` to `mod config features`
* Deprecate `mod config recipes artifacts default-repositories` - replaced by the new commands.


### CLI / DX v3.20.12 (2024/09/24)

#### What's Changed
* Disable maven central during recipe run if `mod config recipes artifacts default-repositories` is disabled
* When mod monitor fails to start, provide additional information to understand why it could not start
* Parse .NET .props and .sln files as PlainText to ensure recipes can be run on them


### CLI / DX v3.20.12 (2024/09/24)

#### What's Changed
* Disable maven central during recipe run if `mod config recipes artifacts default-repositories` is disabled
* When mod monitor fails to start, provide additional information to understand why it could not start
* Parse .NET .props and .sln files as PlainText to ensure recipes can be run on them


### CLI / DX v3.20.11 (2024/09/20)

#### What's Changed CLI
* Update rewrite-gradle-plugin version to 6.23.3 to get [a fix](https://github.com/openrewrite/rewrite-gradle-plugin/commit/98c7cd75bfaae0efddb9ac9e69f6e10937b39660) for freestanding gradle scripts missing `GradleProject` markers
* Configure reflection for classes required for native CLI binaries running `mod study`


### CLI / DX v3.20.10 (2024/09/19)

#### What's Changed CLI
* Keep track of which directories a given build step has claimed, and prevent subsequent build steps from also trying to build those directories


### CLI / DX v3.20.9 (2024/09/17)

#### What's Changed CLI
* Simplify RemoteRecipe execution. Rework NuGet Recipes loading. Adopt new API


### CLI / DX v3.20.8 (2024/09/13)

#### What's Changed
* Correctly set executable after `MODERNE_BUILD_TOOL_COMPILE` substitution
* Report failure when `mod exec` commands exit with error codes
* Suggest trust-store configuration on `mod config moderne edit` SSL failures


### CLI / DX v3.20.7 (2024/09/12)

#### What's Changed CLI
* Adapt to changes in [rewrite-maven-plugin v5.40.2](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v5.40.2)
* Continue downloading artifacts when encountering individual errors during `mod config recipes moderne sync`


### CLI / DX v3.20.6 (2024/09/12)

#### What's Changed CLI
* Shutdown dotnet process on any exception


### CLI / DX v3.20.5 (2024/09/11)

#### What's Changed CLI
* Exclude Checkstyle's transitive dependencies. We don't use them but they were getting flagged by security scanners and bloating the size of the CLI binary


### CLI / DX v3.20.4 (2024/09/11)

#### What's Changed CLI

* Correct pluralization in mod config scm moderne sync output
* Remove lucene sneaking in via modcsharp
* Add timout propagation to dotnet server

### CLI / DX v3.20.3 (2024/09/10)

#### What's Changed CLI

* Update with moderne-recipe-loading-commons 1.0.5 which resolves the classloading issue when running recipes that reference MavenExecutionContextView, such as the DependencyResolutionDiagnostic recipe
* Prevent mod exec hang when --output flag is not supplied
* Group properties in one block when executing `mod config moderne show`

### CLI / DX v3.20.2 (2024/09/10)

#### What's Changed CLI

* Prevent mod exec hang when --output flag is not supplied
* Group properties in one block when executing `mod config moderne show`

### CLI / DX v3.20.1 (2024/09/10)

#### What's Changed CLI

* Update Gradle wrapper to 8.10.1
* Register `Moderne$ScmToolConfiguration` in the native image to allow deserialization This fixes a deserialization issue in the native version when using `mod config scm moderne sync`

### CLI / DX v3.20.0 (2024/09/09)

#### What's Changed CLI

* Update with rewrite-gradle-plugin 6.23.1, which allows Gradle dependency upgrade recipes to operate successfully on Gradle script plugins
* Extract AGP versions from libs.versions.toml \[libraries] definitions
* Disable CLI progress output when detecting JDK for `scm.properties`

### CLI / DX v3.19.5 (2024/09/09)

#### What's Changed CLI

* Do not print `@null` for default branch
* Add integration of dotnet remoting server with execution log
* Downgrade netty-bom to avoid using 4.2.0.Alpha\*
* Add `mod config scm moderne sync` command

### CLI / DX v3.19.4 (2024/09/05)

#### What's Changed CLI

* Migrate to JSpecify
* Save active socket and close before terminating the server

### CLI / DX v3.19.3 (2024/09/05)

#### What's Changed CLI

* Add support for parsing source sets defined using the Android Gradle plugin
* Right align the number of recipes in `mod config recipes list` and show total

#### What's Changed DX

Nothing

### CLI / DX v3.19.2 (2024/09/04)

#### What's Changed CLI

* \--json option of mod study is parsed properly again

### CLI / DX v3.19.1 (2024/09/04)

#### What's Changed CLI

* Separate python into its own build step
* Use `pip` to install Python packages required by `python` build step
* Auto adjust row height in Excel exports
* Extract JDK version constraints from android plugin versions

#### What's Changed DX

* Case insensitive repository handling in DX
* Case insensitive SCM type configuration in DX

### CLI / DX v3.19.0 (2024/09/02)

#### What's Changed CLI

* mod study now has --csv option to output datatable in csv format
* Parse Python using `PythonParser` in native build step
* Add `mod config scm *` commands to add/remove SCM configurations `mod config scm gitlab` and `mod config scm bitbucket` have been deprecated and existing configurations are automatically migrated.

#### What's Changed DX

* Add support for alternate URLs for private SCMs to allow for better origin matching for different protocols/port combinations

### CLI / DX v3.18.8 (2024/08/27)

#### What's Changed CLI

* Add dotnet recipes installation and running

### CLI / DX v3.18.7 (2024/08/26)

#### What's Changed CLI

* Add csharp dependency for recipe running
* Add missing org.openrewrite:rewrite-csharp breaking `mod build`

### CLI / DX v3.18.6 (2024/08/26)

#### What's Changed CLI

* Enable autodetection of styles for C#
* Migrate to new TCP Socket usage in a Dotnet remoting mechanism
* Fix compilation errors related to remoting API changes

### CLI / DX v3.18.5 (2024/08/25)

#### What's Changed CLI

* Properly shutdown dotnet remote server when build times out This solves an issue where a build would not recover after a timeout.

### CLI / DX v3.18.4 (2024/08/24)

#### What's Changed CLI

* report unidentified build steps as `Unknown` to ensure reporting
* Disable the `dotnet build` until it can be operationalized step.
* Use dotnet build timeout during the parse & lst write steps

#### What's Changed DX

* Update ingested repos periodically when using CSV source This fixes an issue where when using `repos.csv` as an organization source new LSTs were not exposed on GraphQL

### CLI / DX v3.18.3 (2024/08/23)

#### What's Changed CLI

* Remove duplicate parameter for sync command `path` and `organizationPath`

#### What's Changed DX

* Fix GraphQl schema inspection issue where `RecipeSearchConnection` does not match `Recipe` node type
* Fix `Invalid destruction signature` in `MVStoreConfig` @pstreef in https://github.com/moderneinc/moderne-cli/pull/2045

### CLI / DX v3.18.2 (2024/08/21)

#### What's Changed CLI

* Fix mod git clone moderne description

#### What's Changed DX

* Do not close in memory store for each read/write operation. This fixes an issue where repositories would not show up as having LSTs when using `moderne.dx.storage.enabled=false`

### CLI / DX v3.18.1 (2024/08/21)

#### What's Changed

* Add support for recipes that have list type options

### CLI / DX v3.18.0 (2024/08/20)

#### What's Changed CLI

* Allow `mod git sync moderne` to convert a metadata clone to a full clone

This requires a slight change to how `mod git sync moderne` is used. Previously we would keep the same type (metadata or full) clone as the original clone command. Now, to keep a clone as a metadata only type when using `mod git sync moderne` you have to supply the `--metadata(-only)` option. If the option is not supplied the clone will become a full clone if it is not already. Switching from a full clone to a metadata only clone is not supported.

* Add milliseconds to LST jar name to avoid collisions
* Add publish LST partial success handling
* Replace default compliant with N/A in DevCenter
* Fix `link(path)` not working for relative paths not starting with `./`

#### What's Changed in DX

Nothing

### CLI / DX v3.17.2 (2024/08/19)

#### What's Changed in CLI

* Add `mod config run timeout` subcommand to configure recipe run timeouts
* Idempotent publish of LSTs
* Add `--last-recipe-run` to `mod run` for repeated runs

#### What's Changed in DX

Nothing

### CLI / DX v3.17.1 (2024/08/15)

#### What's Changed in CLI

* Update JacksonXML dependency to 2.17.2
* Increase recipe run execution timeout

#### What's Changed in DX

Nothing

### CLI / DX v3.17.0 (2024/08/14)

#### What's Changed in CLi

* Support `--host_jvm_args` for Bazel
* Add `mod config build bazel arguments` for Bazel
* Avoid organizations API queries with Azure DevOps types to DX instances that do not support them
* `mod git status` command

#### What's Changed in DX

* Close MvStore DB after each use and retry when opening

### CLI / DX v3.16.5 (2024/08/13)

#### What's Changed CLI

* Add DotnetServer.zip to included resources for native build
* `mod build` improvements for DotNet
* Remove javax.servlet and jakarta.servlet over license flagging

### CLI / DX v3.16.4 (2024/08/12)

#### What's Changed

* Use `to_list()` on `kt_provider.transitive_compile_time_jars`

### CLI / DX v3.16.3 (2024/08/09)

#### What's Changed CLI

#### # Bug fixes

* Use `DotNet` as LST provenance for C# projects

#### What's Changed DX

Nothing

### CLI / DX v3.16.2 (2024/08/08)

#### What's Changed CLI

#### # Bug fixes:

* use alternate url if the url origin is unknown and alternateUrl has a known origin
* Use the configured SCM origins when doing metadata only clone

#### # Features

* Permit cloning CSV with no branch

#### What's Changed DX

Nothing

### CLI / DX v3.16.1 (2024/08/08)

#### What's Changed CLI

* Upgrade jackson to 2.17.2
* Study supports partitions
* Add `mod git clone moderne` support for Azure DevOps repositories

#### What's Changed DX

* SCM support for Azure DevOps Services

### CLI / DX v3.16.0 (2024/08/07)

#### What's Changed CLI

* Defensively code Bazel aspect to allow for empty sources/classpath in Kotlin rules
* Bazel query enhanced to use json output to get list of jvm rules
* Exclude lucene coming in from `org.openrewrite.tools:h2database`
* Remove `Connected with provider of type [org.slf4j.nop.NOPServiceProvider]` output
* add rewrite-kotlin dependency and migrate to rewrite-remote-csharp api improvements
* Use JavaSourceSet.build variation which does not use Classgraph, which should improve parsing performance

#### What's Changed DX

* Dependency version upgrades

### CLI / DX v3.15.0 (2024/08/06)

#### What's Changed CLI

* Use `GitRemote` to determine origin/path and organization parsed from the clone url

### CLI / DX v3.14.3 (2024/08/06)

#### What's Changed CLI

* Share timeout configuration when calling bazel info.
* Install multiple Yaml recipes at once for WM
* parameters no longer quoted together
* A JDK must have a java compiler
* fix it tests
* Cli should not stop subsequent publishing on bad jar file contents.
* Implement new interface method
* Register class GitRemote with GraalVM
* use tool version from build step if not available in buildTools

### CLI / DX v3.14.2 (2024/08/01)

#### What's Changed CLI

* use `apiHost` for `curl` examples on exceptions involving GraphQL
* Fix expected repo count when cloning in DxCliIntegrationTests
* Pass base64 encoded inclusion as String
* Cache git provenance

### CLI / DX v3.14.1 (2024/07/31)

#### What's Changed CLI

* add mod csharp as implementation for all cases
* Pick up latest rewrite to no longer generate duplicate files

### CLI / DX v3.14.0 (2024/07/30)

#### What's Changed CLI

**Significant Changes**

* Always clone with org structure
* Parse C# projects

**What Else Has Changed**

* Fix build step exclusion of prior build step outputs
* Add next steps for git commands
* Prevent NPE when response body is null
* Include description of the expected argument format in timeout edit commands.
* Extend clone timeout to 10m
* Exclude .moderne directories from git.properties assertions
