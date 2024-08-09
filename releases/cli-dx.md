# CLI / DX changelog

### CLI / DX v3.16.3 (2024/08/09)

#### What's Changed CLI
#### # Bug fixes
* Use `DotNet` as LST provenance for C# projects
#### What's Changed DX
Nothing


### CLI / DX v3.16.2 (2024/08/08)

#### What's Changed CLI
#### # Bug fixes:
- use alternate url if the url origin is unknown and alternateUrl has a known origin
- Use the configured SCM origins when doing metadata only clone
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
