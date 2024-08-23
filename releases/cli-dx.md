# CLI / DX changelog

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
* Do not close in memory store for each read/write operation.
This fixes an issue where repositories would not show up as having LSTs when using `moderne.dx.storage.enabled=false`


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
