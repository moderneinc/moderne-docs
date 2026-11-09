---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://codegenomeproject.org/recipes?license=proprietary).

:::info
This changelog is automatically generated from GitHub releases and only contains information from the past year.
:::

## November 7, 2026

#### recipes-csharp - 0.17.0

* Find bound Assembly.GlobalAssemblyCache reads for migration review
* Upgrade Gradle wrapper to 9.9.0
* Document ConsoleLoggerOptions formatter migration boundaries
* Match MVC compatibility findings by resolved extension signatures
* Limit .NET Core 3.0 package additions to netcoreapp1.x/2.x projects
* Add explicitly reviewed scoped constructor formal operation
* Require a declaring type for WPF dependency property members
* Avoid local package versions under proven Central Package Management
* Admit explicitly reviewed compatible SourceLink dependency pins
* Add explicit reviewed target-specific AdditionalFiles mapping
* Preserve SOAP base64 formatting in partial-class methods
* Document SourceLink dependency migration pass boundaries
* Exclude reviewed Compression references from .NET 10 builds
* Guard .NET 10 System.Text.Json upgrades against direct-pin downgrades
* Guard Extensions 10 upgrades against incompatible dependency pins
* Preserve sealed reviewed literal DefineConstants conditions after retargeting
* Preserve producer targets required by retained project consumers
* Guard .NET 9 Extensions upgrades against incompatible direct pins
* Preserve reviewed deserialized JsonDocument null guards
* Preserve culture policy in string presence rewrites
* Use AES factory for closed scoped key generation
* Use AES factory for closed CBC transform scopes
* Remove explicitly reviewed modern constrained-region preparation
* Remove reviewed modern fresh reflection permission assertions

#### recipes-go - 0.20.0

* Upgrade Gradle wrapper to 9.9.0

#### recipes-javascript - 0.11.0

* Upgrade @openrewrite/rewrite to 8.99.1 and use its new LST helpers
* Keep `var` in `NoVar` when an indirect use may run before initialization
* Upgrade @openrewrite/rewrite to 8.100.1 and drop workarounds it makes redundant
* Bump vite from 8.0.16 to 8.3.6 in /recipes-code-quality
* Upgrade Gradle wrapper to 9.9.0

#### recipes-kotlin - 0.14.0

* Upgrade Gradle wrapper to 9.9.0

#### recipes-mainframe - 0.8.0

* Upgrade Gradle wrapper to 9.9.0

#### recipes-scala - 0.14.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-ai - 0.13.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-android - 0.28.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-angular - 1.22.0

* Bump @openrewrite/rewrite to 8.99.1 and use its LST helpers
* Bump @openrewrite/rewrite to 8.100.1 and use its JSON edit helpers
* Upgrade Gradle wrapper to 9.9.0
* Choose `static: true` for view queries read before change detection in `AddStaticFalseToViewQueries`

#### rewrite-circleci - 3.21.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-compiled-analysis - 0.24.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-concourse - 3.20.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-cryptography - 0.25.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-devcenter - 1.41.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-dotnet - 0.26.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-dropwizard - 0.16.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-elastic - 0.17.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-hibernate - 0.38.0

* Share one parser and type factory across MigrateHibernateCriteriaToJpaCriteria's templates
* Upgrade Gradle wrapper to 9.9.0

#### rewrite-jasperreports - 0.15.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-java-application-server - 0.19.0

* Remove test Java parsers the build plugin provides

#### rewrite-java-security - 3.51.0

* Run at most four tests at once, as the parallelism intends
* Upgrade Gradle wrapper to 9.9.0

#### rewrite-kafka - 0.16.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-kubernetes - 3.28.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-mainframe - 3.11.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-migrate-kotlin - 0.18.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-migrate-python - 0.24.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-nodejs - 0.60.0

* Upgrade to @openrewrite/rewrite 8.99.1 and adopt its new LST helpers
* Upgrade to @openrewrite/rewrite 8.100.1 and adopt its JSON edit helpers
* Upgrade Gradle wrapper to 9.9.0
* Recognize fs-extra callbacks by type, not by argument name

#### rewrite-nullability - 0.15.0

* Model library methods that never return null
* Generate the library-model table at build time, importing IntelliJ's JDK annotations
* Apply the nullability fixers to Java sources only
* Build the assertion prototype without printing the wrapped expression's type
* Emit Guava's checkNotNull only where the file already uses it, and qualify a shadowed assertion
* Don't assert against the nullness defaults of the project's own declarations
* Hoist a repeated nullable call only where hoisting keeps its evaluation and value
* Stop deleting live null guards, fix field hoisting, and two index lifetime bugs
* Declare the annotation libraries NullSafety imports
* Require the nullability annotation modules in module-info.java
* Leave a field that already declares its nullness to AddNullableToField
* Narrow a value null-checked in an enclosing ternary, && or || condition
* Annotate a qualified type on its simple name, not in the leading position
* Count the constructors Lombok generates when deciding whether a field is initialized
* Keep the hoisted local from clashing with any name in its member, and accept only null proofs that run
* Narrow a value dereferenced earlier in the same expression
* Narrow a local after a statement that dereferences it
* Narrow a value after a negated instanceof early return
* Upgrade Gradle wrapper to 9.9.0

#### rewrite-prethink - 0.25.0

* Use Java 21 language features and APIs in tests
* Keep the SQL recipes off prethink's own context files
* Build on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates

#### rewrite-program-analysis - 0.27.0

* Drop path constraints on a variable once it is written
* Upgrade Gradle wrapper to 9.9.0
* Compare constraints by condition, and check feasibility without building maps

#### rewrite-react - 0.16.0

* Bump @openrewrite/rewrite to 8.99.1 and use its new LST helpers
* Bump vitest, vite and source-map-js
* Enzyme: replace hand-rolled scope and parenthesization logic with upstream helpers
* Review skill: compare trees with `isEqual` instead of printing
* Bump @openrewrite/rewrite to 8.100.1 and use its JSON edit helpers
* Unmount the existing root in ReplaceUnmountComponentAtNode (D1 of #51)
* Upgrade Gradle wrapper to 9.9.0
* Convert Enzyme `shallow` wrappers of host-only components to RTL

#### rewrite-reactive-streams - 0.29.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-spring - 0.52.0

* Add `@SpringExtensionConfig` when `SpringExtension` comes from a meta-annotation
* Guard `HttpMethod.valueOf` and flag uncovered overloads in `MigrateAntPathRequestMatcher`
* Leave `MvcRequestMatcher.Builder` alone when a servlet path is set
* Leave the three-argument `DockerConnectionConfiguration.Host` constructor alone in `ReplaceDeprecatedDockerApi`
* Emit `exchange()` for bare `MockMvcTester#perform(..)` calls
* Map `enableByDefault` to `Access.UNRESTRICTED` and `Access.READ_ONLY` in the endpoint migrations
* Only add Spring Boot 4 starters in `SpringToSpringBoot` for Spring Framework 7 projects
* Generate compiling dispatch from `MigrateSpringRetryRecoverToRetryTemplate`
* Only rename `setRestOperations` to `setRestClient` where the OAuth2 token response client has it
* Keep all `standaloneSetup` controllers and fall back to `MockMvcTester.create(..)` in `MockMvcToMockMvcTester`
* Keep `setThrowLastExceptionOnExhausted` and match `RetryTemplate` variables by identity
* Upgrade Gradle wrapper to 9.9.0
* Add Spring AI 1.0 and 1.1 migrations
* Generate each Spring Cloud release train into its own property migration file
* Add Spring AI 2.0 migration
* Migrate the Spring AI APIs that trial runs on public projects left behind

#### rewrite-sql - 2.28.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-static-analysis - 0.9.0

* Add FindOverMockedType recipe (RSPEC-S5969)
* Add FindOverridableCallInConstructor recipe (RSPEC-S1699)
* Add FindNonSerializableField recipe (RSPEC-S1948)
* Upgrade Gradle wrapper to 9.9.0
* Add AddDefaultToSwitch recipe (RSPEC-S131)
* Add SynchronizeLazyStaticInitialization recipe (RSPEC-S2444)
* Add RenamePrivateConstantsToUpperSnakeCase recipe (RSPEC-S115)
* Add ReplaceSingleUseRandomWithThreadLocalRandom recipe (RSPEC-S2119)
* Add RenameShadowingTypeParameter recipe (RSPEC-S4977)

#### rewrite-struts - 0.38.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-tapestry - 0.15.0

* Upgrade Gradle wrapper to 9.9.0

#### rewrite-terraform - 3.24.0

* Upgrade Gradle wrapper to 9.9.0

## November 6, 2026

#### recipes-csharp - 0.16.1

* Keep MySql.Data version upgrades buildable on .NET Core 3.0
* Preserve culture and binding semantics in string char optimization
* Add reviewed portable runtime identifier migration for SDK projects
* Document NoRecipe evidence for Windows assembly platform metadata
* Document RID retarget composition boundary found in Azure
* Document existing immediate Managed hash migration overlap
* Admit exact net40 Client profiles for full Framework retirement
* Document complete Ombi updater portable RID admission counterexample
* Preserve source-owned crypto identities in inline hash migration
* Retain Framework executables with no modeled source inputs
* Admit reviewed Ombi portable RID lists after native validation
* Keep adjacent hash locals bound to source-owned providers
* Record passing Azure RID composition after BOM fix
* Guard scoped and field hash factories against source crypto identities
* Guard captured build paths before policy materialization
* Add opt-in reviewed ILGenerator runtime fallback
* Preserve reviewed Core compiler defines for finite modern targets
* Add opt-in scoped-in annotation for closed copy-only ref-struct constructors
* Retire explicitly reviewed legacy Core targets with a deferred model
* Guard automatic EF migration upgrades against incompatible retained targets
* Resolve NuGet version property consumers by definition scope
* Preserve newer literal NuGet versions during upgrades
* Scope reviewed sequence-length constructor input storage
* Add opt-in snapshots for explicitly selected sequence parameters
* Document F# implicit ValueTuple retained-net452 NoRecipe boundary
* Preserve declared lower targets when replacement runtime is present
* Preserve resolved CSharp type bindings with standalone global qualification
* Qualify proven unconditional methods in selected conditional CSharp source
* Preserve retained Framework targets when adopting RuntimeHelpers allocation
* Extend reviewed TFM asset branches using a closed static field scope proof
* Find AssemblyName CodeBase obsoletions in the .NET 7 migration
* Snapshot reviewed OUT sequences before a selected AdvanceTo statement

#### recipes-csharp - 0.16.0

* Preserve PlatformServices directive and conditional boundaries
* Replace the modern safe formatter allocation alias
* Use the generator factory for closed readonly random fields
* Use the generator factory for closed stable random fields
* Cover readonly random fields inside statement lambdas
* Preserve nullable directives in security and SOAP hex ports
* Use same-algorithm factories for closed streaming hash fields
* Preserve modern generic hash dispatch and failed-cast cleanup
* Resolve legacy HttpContext authentication findings by actual API binding
* Require legacy authentication API bindings before extension rewrites
* Port directory security persistence with preserved argument validation
* Respect legacy authentication contracts in extension migration
* Port closed transient dynamic assemblies to Run access
* Port directory creation with supplied security to modern API
* Port ACL persistence for closed temporary-file paths
* Port secured named-pipe constructors to ACL factory
* Port secured mutex creation and add its project dependency
* Port explicit-rights mutex opens with nullable and package contracts
* Add experimental conservative Framework library and console pipeline
* Constrain Newtonsoft advisory to resolved legacy MVC result settings
* Preserve classic output directories when converting to modern .NET
* Preserve legacy NLog registration with typed migration review
* Allow proven .NET Standard outgoing project-reference edges
* Bridge self-contained legacy OAuth code exchange overrides
* Preserve known overlong mutex-name validation paths
* Port bounded secured Semaphore constructors to SemaphoreAcl.Create
* Plan converter build context before trailing project attestation
* Upgrade GitHub SourceLink overrides for opted-in SDK 10 builds
* Convert Framework references with known 3.5 minimum metadata
* Keep ValueTuple packages for legacy targets while excluding .NET 10
* Add opt-in System.IO.Ports dependency port for modern projects
* Plan SerialPort package ports after explicit Framework retargeting
* Supply Ports dependencies when converting classic Framework libraries
* Guard Test SDK 18.11 upgrade for selected .NET 10 test projects
* Load public certificate exports with closed BCL provenance
* Specify a missing Newtonsoft.Json version in one selected unmanaged project
* Map classic XML cryptography uses to the target package
* Map Framework CMS dependencies with patched crypto defaults
* Map classic ODBC dependencies through the existing converter
* Add an opted-in modern target to one SDK Framework library
* Require concrete CodeDOM provider review before classic conversion
* Map classic LDAP Protocols dependency with DSML and platform review gates
* Bind source signing review to assembly attributes
* Preserve literal wildcard assembly versions through attributed metadata
* Require explicit policy review for the existing FormsAuthentication hash port
* Require NetDataContractSerializer binding review before conversion
* Require a source port for bound AppDomain assembly factories
* Discover Framework packages and risks in used signatures
* Preserve consumer targets and Framework identity for short TFMs
* Add opt-in NUnit2 ExpectedException contract port
* Document SDK10 built-in SourceLink proof and NoRecipe boundary
* Preserve bounded local framework condition buckets when retargeting
* Repack local C# builds every time
* Preserve bounded NUnit2 exact ExpectedMessage contracts
* Preserve bounded composite framework condition buckets
* Require provider review for SQL Server Compact Framework migration

#### recipes-go - 0.19.0

* Bump rewrite-go to v0.0.43

#### recipes-javascript - 0.10.0

* Skip `CollapsibleIfStatements` when the inner if body is unbraced
* `RemoveDuplicateConditions` - preserve duplicate conditions when evaluation may have side effects
* Fix NoDuplicates crash when merging an empty import block with a default import

#### recipes-kotlin - 0.13.0

* Build and test on the plugin's default Java 25 toolchain

#### recipes-mainframe - 0.7.0

* Remove test Java parsers the build plugin provides

#### recipes-scala - 0.13.0

* Remove test Java parsers the build plugin provides

#### rewrite-ai - 0.12.0

* Remove test Java parsers the build plugin provides

#### rewrite-android - 0.27.0

* Keep the Android Gradle Plugin 4 fixture on Gradle 8.14.5

#### rewrite-angular - 1.21.0

* Read `JS.Alias` property names that are string literals in `FindAngularComponent` (G-angular-7)
* Read string-literal import names in `ReplaceAngularHttpImports`
* Upgrade Angular dependency groups atomically and preserve usable project config

#### rewrite-compiled-analysis - 0.23.0

* Remove test Java parsers the build plugin provides

#### rewrite-devcenter - 1.40.0

* Ask for JDK 25 in .sdkmanrc, matching the build plugin's toolchain
* Measure a Node.js engines range by the lowest release it admits
* Measure the Quarkus card by quarkus-core
* Load declarative recipes in tests with recipeFromResources
* Report a Kotlin version only for repositories with Kotlin sources
* Measure pre-release versions by their numbers instead of counting them as completed
* Add vulnerability DevCenter cards per package ecosystem
* Recognize OS-specific target frameworks in CSharpVersionUpgrade

#### rewrite-dropwizard - 0.15.0

* Fix AddSpringBootTestForDropwizardAppExtensionTest on the JDK 25 test toolchain

#### rewrite-elastic - 0.16.0

* Remove test Java parsers the build plugin provides

#### rewrite-hibernate - 0.37.0

* Create `AddCascadePersistToIdMappedAssociations` preconditions in `getVisitor()`
* Remove test Java parsers the build plugin provides

#### rewrite-jasperreports - 0.14.0

* Remove test Java parsers the build plugin provides

#### rewrite-java-application-server - 0.18.0

* Remove test Java parsers the build plugin provides

#### rewrite-java-security - 3.50.0

* Remove test Java parsers the build plugin provides
* Add FindRequestedSessionId (Sonar S2254)

#### rewrite-kafka - 0.15.0

* Remove test Java parsers the build plugin provides

#### rewrite-mainframe - 3.10.0

* Replace deprecated Kotlin DSL container delegates
* Read a copybook kept under a program's extension
* Read a CICS condition or CVDA name that is also a COBOL keyword
* Read the ENTER statement
* Pair a host variable with its null indicator in INSERT VALUES and UPDATE SET
* Visit the words of a CBL or PROCESS statement
* Read the DSNTEP2 input GenevaERS Workbench keeps its schema in
* Read a primary key declared on its column

#### rewrite-migrate-kotlin - 0.17.0

* Build and test on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices

#### rewrite-migrate-python - 0.23.0

* Replace deprecated Kotlin DSL container delegates
* Keep utcnow() and utcfromtimestamp() replacements naive
* Replace pipes.quote() with shlex.quote() in the 3.13 upgrade
* Add the missing `assert_` prefix to mock assertions in the 3.12 upgrade

#### rewrite-nodejs - 0.59.0

* Skip blank resolved dependencies in DependencyVulnerabilityCheck
* GitHub advisories as of 2026-11-02T0923
* Format test classes with the 2-space continuation indent from .editorconfig
* Expect the source-map-support test's virtual path resolved as on the running OS
* Add Upgrade to Node.js 18 recipe
* Expect export {} where a recipe removes a TypeScript module's last import
* Adapt to @openrewrite/rewrite 8.97.1 string-literal module export names
* GitHub advisories as of 2026-11-03T2241

#### rewrite-nullability - 0.14.0

* Remove test Java parsers the build plugin provides

#### rewrite-prethink - 0.24.0

* Use Java 21 language features and APIs in tests
* Keep the SQL recipes off prethink's own context files
* Build on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates

#### rewrite-program-analysis - 0.26.0

* Inline calls to deprecated OpenRewrite methods
* Remove test Java parsers the build plugin provides

#### rewrite-react - 0.15.0

* Create one root per container in `ReplaceReactDomRender` (D2 of #51)
* Add Enzyme inventory and a conservative RTL migration prototype
* Add a Create React App to Vite migration recipe
* Add per-major React upgrade steps (16→17, 17→18, 18→19)

#### rewrite-reactive-streams - 0.28.0

* Constrain guava past CVE-2026-102554
* OpenRewrite recipe best practices

#### rewrite-spring - 0.51.0

* Pass `Function` instances to `PropertyMapper.Source#as` as method references for Spring Boot 4
* Inline calls to deprecated OpenRewrite methods
* Replace `HttpMessageConverters` beans removed in Spring Boot 4.2
* Remove `HandlerMappingIntrospector` uses for Spring Framework 7.1

#### rewrite-sql - 2.27.0

* Remove test Java parsers the build plugin provides

#### rewrite-static-analysis - 0.8.0

* Remove test Java parsers the build plugin provides
* Add FindPrivateReadResolve recipe (RSPEC-S2062)
* Add FindInvalidFormatStrings recipe (RSPEC-S2275)
* Add FixInvalidRegularExpressions recipe (RSPEC-S5856)

#### rewrite-tapestry - 0.14.0

* Remove test Java parsers the build plugin provides

## November 5, 2026

#### recipes-csharp - 0.15.0

* Avoid new unawaited Task warnings in Action APM ports
* Bind RSACng compatibility review to BCL metadata
* Port owned Boolean logical context flags to AsyncLocal
* Review legacy RSA object hash dispatch before retargeting
* Verify the named keyed-hash cleanup boundary
* Bind signature-default review to resolved cryptographic types
* Limit X500 validation review to affected string constructors
* Port owned reference logical context slots to AsyncLocal
* Review legacy HMAC default selection and HashName configuration
* Port closed immediately joined string Func APM calls
* Bind culture-flow findings to resolved framework properties
* Review legacy CryptoConfig FIPS policy reads
* Port fixed public PEM certificate bytes to X509CertificateLoader
* Bind list mutation findings to actual BCL ForEach calls
* Review unsupported default symmetric factory without selecting an algorithm
* Preserve legacy XmlConvert DateTime formatting explicitly
* Review implicit default hash factory without choosing a digest
* Preserve explicit managed HMAC selector in WS-Trust protocol regression
* Preserve legacy XmlConvert date parsing formats explicitly
* Cache C# test results across builds
* Review ignored CryptoStream reads without selecting EOF policy
* Use static RNG fill only for a fresh array and closed provider
* Bind serialization findings to constructors and resolved CLR types
* Use static random fill for fresh arrays inside closed provider blocks
* Compose exact legacy XML date formatting and parsing contracts
* Use static RNG fill for closed declarations and adjacent fresh arrays
* Port all bound Thread volatile overloads with retained ref arguments
* Use static RNG fill for inline providers and fresh local arrays
* Preserve URI delimiters in the .NET 6 migration
* Use static random fill for fresh arrays and closed plain provider locals
* Compose the five bounded closed random-fill ports
* Preserve desktop shell mode for literal HTTP URLs
* Clarify cached private certificate key ownership review
* Handle already-inline settings in literal HTTP desktop launches
* Preserve desktop shell mode for typed HTTP URL concatenations
* Review default encoding contracts when migrating from Framework
* Port fixed-prefix interpolated HTTP desktop launches
* Port fixed mailto desktop launches with explicit shell execution
* Port closed current-domain locals in reflection emit
* Review CodeDOM runtime compilation during Framework migration
* Port closed HTTP launch locals while preserving initialization
* Port runtime-host HTTP scheme expressions with explicit shell mode
* Port Uri string launch views with explicit shell association
* Port ignored exception Action APM with caller-side capture
* Port captured parameterless Action APM calls through Task.Run
* Recognize bound HTTP constants in shell launch ports
* Port direct URI-guarded launches with explicit shell policy
* Port captured parameterless custom delegate APM calls
* Capture by-value arguments for ignored void delegate APM calls
* Port captured AsyncCallback APM dispatch through Task.Run
* Capture Action value arguments inside statement callbacks
* Port shared Debug listener settings to Trace
* Preserve DEBUG compile gating when porting legacy flush
* Port guarded nonempty String.Copy calls without losing identity
* Port String.Copy after an existing-file guard
* Port constant anonymous JavaScriptSerializer responses to literal JSON
* Preserve nullable directive newlines when removing legacy JSON imports
* Port flat string JavaScriptSerializer responses with HttpUtility encoding
* Port closed private JavaScriptSerializer response fields
* Preserve fully attributed null-conditional serializer calls
* Port closed JavaScriptSerializer locals for simple arrays
* Preserve conditional-call semantics in captured delegate APM ports
* Port closed readonly hash fields to same-algorithm factories
* Keep nullable directive separation in Membership password ports
* Preserve directive separators when SOAP recipes remove imports
* Port projected anonymous string arrays in JSON responses
* Keep directive separators in context and web recipe cleanup
* Port closed Boolean Func APM completion callbacks
* Port closed parameterless Boolean Func completion callbacks
* Port closed three-argument Action completion callbacks

#### recipes-go - 0.18.1

* Bump rewrite-go to v0.0.43

#### recipes-go - 0.18.0

* Keep the method type a call in a retryer value was parsed with
* Replace deprecated Kotlin DSL container delegates

#### recipes-javascript - 0.9.0

* Merge all identical branches of a chain in one run in MergeIdenticalBranches
* Skip `AllBranchesIdentical` when a condition has side effects or a branch is unbraced
* Bump vite from 8.2.2 to 8.3.5 in /recipes-ui5
* Bump nanoid from 3.3.12 to 3.3.19 in /recipes-code-quality
* Replace deprecated Kotlin DSL container delegates
* Await `vi.importActual` in mock factories that spread `jest.requireActual`
* Move a Jest project's configuration, scripts and dependencies to Vitest in `JestToVitest`
* Keep Jest tests meaning the same under Vitest in `JestTestsToVitest`
* Adapt to recent changes in rewrite-javascript

#### recipes-kotlin - 0.12.0

* Build and test on the plugin's default Java 25 toolchain

#### recipes-mainframe - 0.6.0

* Keep declaration analysis compatible with older parser runtimes
* Detect COMMAREA overreads in bounded STRING transfers
* Resolve DataItems references through DataName
* Prove COMMAREA reads across native CALL boundaries
* Read each EXEC statement's single line after moderneinc/rewrite-mainframe#271
* Drop the handling of several EXEC blocks in one statement
* Resolve EXEC CICS and DL/I operands from their words
* Share each security analysis between its Find, Analyze and Propose recipes
* Use Java 21 language features and APIs in tests
* Fix wrong answers from FindUnreachableProcedures, FindDeadData and FindResourceCrud
* Expect ORIGIN_NOT_CLASSIFIED for VSQRLATE's WRITEQ after its READQ
* Follow the branches EXEC SQL WHENEVER adds to the SQL statements after it
* Prove native CALL entry MOVE and STRING reads
* Verify evidence at SQL and TSQ command barriers
* Prove UNSTRING bounds with constant delimiter lists
* Prove native CALL reads after local initialization
* Know nothing on arriving through a CICS HANDLE branch or at an ENTRY point
* Follow a group move and a REDEFINES to the bytes a field occupies
* Read the key a file statement looks a record up by, and correct the manual's CLAIMS figures
* Propose full-record COMMAREA guards before native calls
* Fix FindDeadData verdicts that GnuCOBOL's cross-reference listing contradicts
* Propose approved exits after failed validation checks
* Propose capacity guards before output table appends
* Propose initialized partial COMMAREA copies
* Propose complete Db2 duplicate precheck keys
* Reuse existing TSQ validation before saved-record use
* Discover CICS read repairs from reusable resource policies
* Discover UPDATE result repairs from reusable table policies
* Discover and prove table append capacity guards
* Discover and prove exits after failed checks
* Take a file's key and records from the program naming it, and read FILE-CONTROL in one place
* Discover and prove payload content-length corrections
* Discover partial COMMAREA copies and preserve validated byte flow
* Discover routing character guards across CALL and CICS
* Discover public DISPLAY traces from reusable classification policies
* Discover saved-record validation from reusable queue policies
* Discover Db2 duplicate prechecks from reusable table policies
* Discover Db2 version predicates and current timestamp hosts
* Discover current authorization identity repairs from reusable interfaces
* Discover authorization allow guards from reusable contracts
* Discover forced authorization resets with concrete continuation proofs
* Discover Db2 authorization repairs from reusable table contracts
* Discover INSERT response and SELECT output guards with COPY proofs
* Discover called providers and surviving version predicates
* Discover complete cross-task version proof chains
* Discover approved TSQ read capacity limits
* Discover incoming access length guards from reusable policies
* Compare fields under a shared table within one occurrence of it
* Place a group move between table entries one occurrence at a time
* Make the source path and program optional on the Find and Analyze security recipes
* Pin the corpus the corpus tests read
* Keep a COPY on a program's last line apart from what it copies

#### rewrite-android - 0.26.0

* Keep the Android Gradle Plugin 4 fixture on Gradle 8.14.5

#### rewrite-angular - 1.20.0

* Read `JS.Alias` property names that are string literals in `FindAngularComponent` (G-angular-7)
* Read string-literal import names in `ReplaceAngularHttpImports`
* Upgrade Angular dependency groups atomically and preserve usable project config

#### rewrite-compiled-analysis - 0.22.0

* Leave the choice of Java parser to the application running the recipes

#### rewrite-devcenter - 1.39.0

* Ask for JDK 25 in .sdkmanrc, matching the build plugin's toolchain
* Measure a Node.js engines range by the lowest release it admits
* Measure the Quarkus card by quarkus-core
* Load declarative recipes in tests with recipeFromResources
* Report a Kotlin version only for repositories with Kotlin sources
* Measure pre-release versions by their numbers instead of counting them as completed
* Add vulnerability DevCenter cards per package ecosystem
* Recognize OS-specific target frameworks in CSharpVersionUpgrade

#### rewrite-dropwizard - 0.14.0

* Fix AddSpringBootTestForDropwizardAppExtensionTest on the JDK 25 test toolchain

#### rewrite-elastic - 0.15.0

* Rename the remaining result() and valueBody() response accessors for Elasticsearch 9

#### rewrite-hibernate - 0.36.0

* Constrain guava past CVE-2026-102554

#### rewrite-java-application-server - 0.17.0

* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices

#### rewrite-java-security - 3.49.0

* GitHub advisories and endoflife.date data as of 2026-11-02T0923
* Merge CVE-2026-22732 recipes from rewrite-cve-2026-22732
* Expect Gradle 9's dependency graphs in Gradle vulnerability tests
* Add `none` version selection to the NuGet `DependencyVulnerabilityCheck`
* GitHub advisories and endoflife.date data as of 2026-11-03T2241
* Replace deprecated Kotlin DSL container delegates

#### rewrite-kafka - 0.14.0

* Only migrate the Config that flows into alterConfigs, and match pre-2.4 AdminClient
* Migrate `KStream.branch()` to `KStream.split()`
* Add Kafka 4.2, 4.3 and 4.4 migrations
* Migrate `Consumer` varargs `TopicPartition` methods to take a `Collection`
* Only migrate UncaughtExceptionHandlers that are handed to KafkaStreams
* Only migrate Kafka Streams retry configuration to task.timeout.ms
* Use Kafka's Scala 2.13 artifacts, and leave Java upgrades to rewrite-migrate-java
* Migrate poll, committed and close through the client interfaces
* Migrate `MockProducer` and `ConsumerRecord` constructors removed in Kafka 4.0
* Migrate more of what Kafka 4.0 removed: Admin, Streams windows, broker and MirrorMaker config
* Migrate KStreamBuilder and TopologyBuilder, removed in Kafka 2.0
* Migrate `StreamsConfig` constants removed in Kafka 2.0
* Apply OpenRewrite recipe best practices

#### rewrite-mainframe - 3.9.0

* Replace deprecated Kotlin DSL container delegates
* Read a copybook kept under a program's extension
* Read a CICS condition or CVDA name that is also a COBOL keyword
* Read the ENTER statement
* Pair a host variable with its null indicator in INSERT VALUES and UPDATE SET
* Visit the words of a CBL or PROCESS statement
* Read the DSNTEP2 input GenevaERS Workbench keeps its schema in
* Read a primary key declared on its column

#### rewrite-migrate-kotlin - 0.16.0

* Build and test on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices

#### rewrite-migrate-python - 0.22.0

* Replace deprecated Kotlin DSL container delegates
* Keep utcnow() and utcfromtimestamp() replacements naive
* Replace pipes.quote() with shlex.quote() in the 3.13 upgrade
* Add the missing `assert_` prefix to mock assertions in the 3.12 upgrade

#### rewrite-nodejs - 0.58.0

* Skip blank resolved dependencies in DependencyVulnerabilityCheck
* GitHub advisories as of 2026-11-02T0923
* Format test classes with the 2-space continuation indent from .editorconfig
* Expect the source-map-support test's virtual path resolved as on the running OS
* Add Upgrade to Node.js 18 recipe
* Expect export {} where a recipe removes a TypeScript module's last import
* Adapt to @openrewrite/rewrite 8.97.1 string-literal module export names
* GitHub advisories as of 2026-11-03T2241

#### rewrite-nullability - 0.13.0

* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices
* Keep the shared nullability index in the ScanningRecipe accumulator, not the ExecutionContext

#### rewrite-prethink - 0.23.0

* Use Java 21 language features and APIs in tests
* Keep the SQL recipes off prethink's own context files
* Build on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates

#### rewrite-program-analysis - 0.25.0

* OpenRewrite recipe best practices

#### rewrite-react - 0.14.0

* Keep displayName, comments and layout in CreateClassToES6, and fix PureRenderMixin's prefix
* Add `review-react-recipe-pr` skill for self-reviewing recipe changes
* Replace README recipe tables with a link to the recipe catalog (P4)
* Remove unused import and redundant comments in react16 recipes
* Remove stray `test-simple.ts` and `debug-import.ts` (P3 of #51)
* Skip vendored sources and gate type-dependent recipes with `check` (B1 of #51)
* Read `JS.Alias` property names that are string literals
* Lock tmp at 0.2.7 for CVE-2026-44705
* Bump @openrewrite/rewrite to 8.97.1

#### rewrite-reactive-streams - 0.27.0

* Constrain guava past CVE-2026-102554
* OpenRewrite recipe best practices

#### rewrite-spring - 0.50.0

* Migrate removed `LastModified` support for Spring Framework 7
* Skip Kotlin sources and optional autowired fields in FieldToConstructorInjection
* Migrate `spring-security-rsa` to `spring-security-crypto`
* Send an `HttpEntity` request as headers and body when migrating `RestTemplate` to `RestClient`
* Disambiguate `null` headers in `HttpEntity` constructors for Spring Framework 7
* Leave `RestTemplate` alone where `RestClient` cannot stand in for it
* Chain the Moderne Spring Framework 6.0 migration from Spring Boot 3.0
* Prevent duplicate ResponseErrorHandler methods in Boot 4 migration
* Migrate Jetty EE10 to EE11 for Spring Boot 4.0
* Replace `WebContentGenerator#checkAndPrepare` with its delegates
* Rename `RedisConnectionDetails` and the other Redis types Spring Boot 4 prefixed with `Data`
* Rename `@JsonComponent` and the other Boot Jackson support types when adopting Jackson 3
* Fix tests that fail on the Java 25 test toolchain
* Relocate Spring Boot types that are only statically imported
* Move `OAuth2AuthorizationServerConfiguration` to the package Spring Security 7 has it in
* Replace deprecated Kotlin DSL container delegates
* Remove `RequestMappingHandlerMapping` path options that restate the default
* Replace `GenericJackson2JsonRedisSerializer` constructors without an `ObjectMapper` with the builder
* Leave `requiresChannel` alone where `redirectToHttps` cannot stand in for it
* Migrate `HttpHeaders#addIfAbsent` and `writableHttpHeaders` for Spring Framework 7
* Add `spring-web` where `spring-boot-starter-json` brought it in
* Constrain guava past CVE-2026-102554
* Run the Kafka 4.2 and 4.4 migrations as part of Spring Boot 4.1 and 4.2
* [Auto] Spring Boot modular starter table as of 2026-11-03T1107
* Make `FieldToConstructorInjection` thread-safe

#### rewrite-sql - 2.26.0

* Skip Moderne's own context files in the SQL anti-pattern rules
* OpenRewrite recipe best practices

#### rewrite-static-analysis - 0.7.0

* Fix escape analysis of locals in initializer blocks

#### rewrite-tapestry - 0.13.0

* Expect the newest Tapestry 5.9 patch in UpdateTapestryDependenciesTest

## November 4, 2026

#### recipes-csharp - 0.14.0

* Read the NuGet feeds' versions afresh at each restore, since the engine version floats to the newest
* Keep WPF0023's evaluation order, and align FindOptimizeStartsWith and UseStringInterpolationInsteadOfConcat with their analyzers
* Replace deprecated Kotlin DSL container delegates
* Port in-memory dynamic assembly creation from Framework to .NET Core
* Preserve legacy code-page encodings when migrating to .NET Core
* Honor CodeGenome environment credentials for Maven dependencies
* Port symbol-free transient dynamic modules to .NET Core
* Port bounded WebRequestHandler construction to HttpClientHandler
* Migrate bounded inline NotifyIcon menus to ToolStrip APIs
* Cover dynamic code-page requests and explicit encoding fallbacks
* Migrate closed local WinForms menu graphs to ToolStrip APIs
* Preserve Boolean choices through explicit RSA padding overloads
* Preserve named cryptographic factory semantics in .NET 7 migration
* Cover thread-domain dynamic assemblies and single-use local flags
* Bound X509 loader migration to known public certificate data
* Review Rijndael compatibility before replacing it with AES
* Bound FormatterServices migration to constructor-free allocation
* Port only explicit default HMACSHA1 constructor selectors
* Modernize bounded asymmetric algorithm cleanup to Dispose
* Preserve transient SOAP hex formatting with Convert.ToHexString
* Make bounded PBKDF2 compatibility defaults explicit
* Bound PBKDF2 obsolescence findings to implicit defaults
* Bound certificate loading findings to obsolete content constructors
* Port closed single-fill RNG locals to the modern default factory
* Port closed digest locals to the same modern hash factory
* Prepare MVC enum status results and repair Core namespace imports
* Preserve stateful PBKDF2 contracts in .NET 10 migration guidance
* Stop UseReadOnlyAutoProperty crashing on top-level local functions
* Use ConfigurationManager APIs while preserving XML configuration
* Retain raw RSA operations until padding semantics are reviewed
* Migrate bounded delegate APM task wrappers to Task.Run
* Preserve crypto provider initialization and bound factory repair
* Bound certificate private-key findings and distinguish setters
* Preserve bounded SOAP hex parse empty-array fallbacks
* Find obsolete mutable certificate APIs with bounded review guidance
* Preserve named RSA provider dispatch through CryptoConfig
* Preserve named hash CryptoConfig dispatch
* Bound PlatformAbstractions base-path replacement and make it opt-in
* Preserve deferred formatting for closed SOAP hex locals
* Preserve desktop Framework SOAP datetime formatting
* Review cached public-key identity and bind certificate property names
* Remove literal null evidence from bounded assembly-load overloads
* Preserve Windows COM Marshal.GetActiveObject calls on modern .NET
* Read bounded assembly identities without reflection-only loading
* Remove obsolete no-op Marshal.ReleaseThreadCache statements
* Preserve COM type library names through GetDocumentation
* Invoke bounded current-domain callbacks without AppDomain APIs
* Replace closed SOAP anyURI value locals with strings
* Preserve literal-format Forms Authentication password hashes
* Preserve desktop Framework SOAP duration lexical output
* Align PBKDF2 guide with stateful compatibility review
* Preserve ECDH public-key encodings in the .NET 7 migration
* Review obsolete certificate file factories without guessing formats
* Convert valid SOAP hex literals to modern hex parsing
* Preserve SOAP base64 line-feed formatting on modern .NET
* Preserve legacy ASP.NET URL token wire format on modern .NET
* Bound AES-GCM findings without selecting authentication tag policy
* Bound OpenSSL key-sharing findings and correct disposal guidance
* Compose bounded Framework API ports after independent recipe PRs land
* Port static Framework filesystem ACL reads to security constructors
* Bound FIPS construction findings to resolved cryptography APIs
* Preserve silent fallbacks when migrating SOAP hex parse locals
* Preserve active conditional snapshots in Framework API ports
* Skip active conditional branches in SOAP migrations
* Preserve active conditional snapshots across crypto and menu recipes
* Review obsolete X509 certificate collection imports with typed bounds
* Port ASP.NET cache expiration sentinels to exact BCL values
* Complete named crypto factory review for MD5 and HMAC
* Retain active conditional snapshots in remaining Framework API ports
* Review legacy PasswordDeriveBytes output compatibility
* Use cryptographic zeroization for bounded local byte array clears
* Port ignored fresh Action APM calls to opt-in Task.Run scheduling
* Port bounded byte comparison helpers to fixed-time equality
* Add opt-in factories for SHA CSP locals used once
* Preserve retained targets and gate API adoption across MSBuild imports
* Bind RSA padding ports to complete modern overload metadata
* Make existing PBKDF2 legacy defaults explicit without changing bytes
* Make generated-salt PBKDF2 SHA1 explicit with typed constructor metadata
* Preserve modern bindings across reflection API ports
* Use same-algorithm factories for directly consumed inline hash providers
* Use default RNG factories within bounded existing using blocks
* Resolve complete package bindings for ConfigurationManager API ports
* Use same-algorithm hash factories within bounded existing using blocks
* Keep captured adapter method-name bindings consistent
* Port explicitly typed RNG resources while retaining disposal scopes
* Port closed Rijndael-128 scopes to AES while preserving feedback defaults
* Port explicitly typed hash resources while retaining disposal scopes
* Use the AES factory for closed plain AesManaged locals
* Port hash provider using declarations while preserving disposal boundaries
* Preserve interface dispatch when porting hash and symmetric Clear cleanup
* Use the same TripleDES factory for bounded parameterless-transform locals
* Port algorithm typed hash resources to matching factories
* Port bounded inline RNG provider fills to the default factory
* Port bounded RNG using declarations without moving disposal
* Port closed hash locals while retaining terminal cleanup
* Port closed plain RNG locals while retaining lifetime
* Port hash locals that read stored digest state
* Port initialized AES using resources while preserving failure cleanup
* Port bounded plain Rijndael locals with feedback defaults retained
* Port streaming hash using scopes with retained transform behavior
* Verify named hash factory cast-failure cleanup bounds
* Port hash using scopes with retained terminal cleanup
* Port Rijndael initializers with an unobservable default block-size setter
* Verify certificate DER provenance against virtual PKCS12 overrides
* Port hash using scopes with retained resets and actual BCL bindings
* Make proven fixed AES-GCM tag sizes explicit
* Port initialized Rijndael locals with fixed block-size reads
* Port closed hash locals with retained finally cleanup
* Verify certificate loader preserves failure diagnostic copies
* Verify PBKDF2 review preserves string password fallback
* Port initialized Rijndael using resources before disposal acquisition
* Port closed local hash provider selections without narrowing their contract
* Port fresh XML settings DTD assignments while retaining read-only diagnostics
* Zeroize inferred local byte vectors with method scope guards
* Port fresh XML settings initializers while preserving member ordering
* Port XML text reader DTD setters with static receiver guards
* Use one-shot encryption for closed AES CBC PKCS7 transforms
* Review implicit SHA-1 DSA signature migration
* Port valid literal Membership password generation while retaining legacy policy
* Validate empty PKCS7 decryption migration boundary
* Port formatter type lookups on closed loaded assembly locals
* Review CSP key container identity and RSA persistence
* Use certificate loader for fixed public certificate data
* Preserve Windows native AppDomain thread IDs for hook consumers
* Capture Boolean Action APM inputs before Task.Run scheduling
* Preserve expression-tree shape in crypto API ports
* Port closed parameterless delegate APM calls to typed Task lambdas

#### recipes-go - 0.17.0

* Keep the method type a call in a retryer value was parsed with
* Replace deprecated Kotlin DSL container delegates

#### recipes-javascript - 0.8.0

* Merge all identical branches of a chain in one run in MergeIdenticalBranches
* Skip `AllBranchesIdentical` when a condition has side effects or a branch is unbraced
* Bump vite from 8.2.2 to 8.3.5 in /recipes-ui5
* Bump nanoid from 3.3.12 to 3.3.19 in /recipes-code-quality
* Replace deprecated Kotlin DSL container delegates
* Await `vi.importActual` in mock factories that spread `jest.requireActual`
* Move a Jest project's configuration, scripts and dependencies to Vitest in `JestToVitest`
* Keep Jest tests meaning the same under Vitest in `JestTestsToVitest`
* Adapt to recent changes in rewrite-javascript

#### recipes-kotlin - 0.11.0

* Build and test on the plugin's default Java 25 toolchain

#### recipes-mainframe - 0.5.0

* Keep declaration analysis compatible with older parser runtimes
* Detect COMMAREA overreads in bounded STRING transfers
* Resolve DataItems references through DataName
* Prove COMMAREA reads across native CALL boundaries
* Read each EXEC statement's single line after moderneinc/rewrite-mainframe#271
* Drop the handling of several EXEC blocks in one statement
* Resolve EXEC CICS and DL/I operands from their words
* Share each security analysis between its Find, Analyze and Propose recipes
* Use Java 21 language features and APIs in tests
* Fix wrong answers from FindUnreachableProcedures, FindDeadData and FindResourceCrud
* Expect ORIGIN_NOT_CLASSIFIED for VSQRLATE's WRITEQ after its READQ
* Follow the branches EXEC SQL WHENEVER adds to the SQL statements after it
* Prove native CALL entry MOVE and STRING reads
* Verify evidence at SQL and TSQ command barriers
* Prove UNSTRING bounds with constant delimiter lists
* Prove native CALL reads after local initialization
* Know nothing on arriving through a CICS HANDLE branch or at an ENTRY point
* Follow a group move and a REDEFINES to the bytes a field occupies
* Read the key a file statement looks a record up by, and correct the manual's CLAIMS figures
* Propose full-record COMMAREA guards before native calls
* Fix FindDeadData verdicts that GnuCOBOL's cross-reference listing contradicts
* Propose approved exits after failed validation checks
* Propose capacity guards before output table appends
* Propose initialized partial COMMAREA copies
* Propose complete Db2 duplicate precheck keys
* Reuse existing TSQ validation before saved-record use
* Discover CICS read repairs from reusable resource policies
* Discover UPDATE result repairs from reusable table policies
* Discover and prove table append capacity guards
* Discover and prove exits after failed checks
* Take a file's key and records from the program naming it, and read FILE-CONTROL in one place
* Discover and prove payload content-length corrections
* Discover partial COMMAREA copies and preserve validated byte flow
* Discover routing character guards across CALL and CICS
* Discover public DISPLAY traces from reusable classification policies
* Discover saved-record validation from reusable queue policies
* Discover Db2 duplicate prechecks from reusable table policies
* Discover Db2 version predicates and current timestamp hosts
* Discover current authorization identity repairs from reusable interfaces
* Discover authorization allow guards from reusable contracts
* Discover forced authorization resets with concrete continuation proofs
* Discover Db2 authorization repairs from reusable table contracts
* Discover INSERT response and SELECT output guards with COPY proofs
* Discover called providers and surviving version predicates
* Discover complete cross-task version proof chains
* Discover approved TSQ read capacity limits
* Discover incoming access length guards from reusable policies
* Compare fields under a shared table within one occurrence of it
* Place a group move between table entries one occurrence at a time
* Make the source path and program optional on the Find and Analyze security recipes
* Pin the corpus the corpus tests read
* Keep a COPY on a program's last line apart from what it copies

#### rewrite-android - 0.25.0

* Keep the Android Gradle Plugin 4 fixture on Gradle 8.14.5

#### rewrite-angular - 1.19.0

* Read `JS.Alias` property names that are string literals in `FindAngularComponent` (G-angular-7)
* Read string-literal import names in `ReplaceAngularHttpImports`
* Upgrade Angular dependency groups atomically and preserve usable project config

#### rewrite-compiled-analysis - 0.21.1

* Leave the choice of Java parser to the application running the recipes

#### rewrite-compiled-analysis - 0.21.0

* Ask for JDK 25 in .sdkmanrc, matching the build plugin's toolchain
* OpenRewrite recipe best practices

#### rewrite-devcenter - 1.38.0

* Ask for JDK 25 in .sdkmanrc, matching the build plugin's toolchain
* Measure a Node.js engines range by the lowest release it admits
* Measure the Quarkus card by quarkus-core
* Load declarative recipes in tests with recipeFromResources
* Report a Kotlin version only for repositories with Kotlin sources
* Measure pre-release versions by their numbers instead of counting them as completed
* Add vulnerability DevCenter cards per package ecosystem
* Recognize OS-specific target frameworks in CSharpVersionUpgrade

#### rewrite-dropwizard - 0.13.0

* Fix AddSpringBootTestForDropwizardAppExtensionTest on the JDK 25 test toolchain

#### rewrite-elastic - 0.14.0

* Rename the remaining result() and valueBody() response accessors for Elasticsearch 9

#### rewrite-hibernate - 0.35.0

* Retype jackson-datatype-hibernate5 types when moving to jackson-datatype-hibernate6
* OpenRewrite recipe best practices

#### rewrite-java-application-server - 0.16.0

* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices

#### rewrite-java-security - 3.48.0

* GitHub advisories and endoflife.date data as of 2026-11-02T0923
* Merge CVE-2026-22732 recipes from rewrite-cve-2026-22732
* Expect Gradle 9's dependency graphs in Gradle vulnerability tests
* Add `none` version selection to the NuGet `DependencyVulnerabilityCheck`
* GitHub advisories and endoflife.date data as of 2026-11-03T2241
* Replace deprecated Kotlin DSL container delegates

#### rewrite-kafka - 0.13.0

* Only migrate the Config that flows into alterConfigs, and match pre-2.4 AdminClient
* Migrate `KStream.branch()` to `KStream.split()`
* Add Kafka 4.2, 4.3 and 4.4 migrations
* Migrate `Consumer` varargs `TopicPartition` methods to take a `Collection`
* Only migrate UncaughtExceptionHandlers that are handed to KafkaStreams
* Only migrate Kafka Streams retry configuration to task.timeout.ms
* Use Kafka's Scala 2.13 artifacts, and leave Java upgrades to rewrite-migrate-java
* Migrate poll, committed and close through the client interfaces
* Migrate `MockProducer` and `ConsumerRecord` constructors removed in Kafka 4.0
* Migrate more of what Kafka 4.0 removed: Admin, Streams windows, broker and MirrorMaker config
* Migrate KStreamBuilder and TopologyBuilder, removed in Kafka 2.0
* Migrate `StreamsConfig` constants removed in Kafka 2.0
* Apply OpenRewrite recipe best practices

#### rewrite-mainframe - 3.8.0

* Replace deprecated Kotlin DSL container delegates
* Read a copybook kept under a program's extension
* Read a CICS condition or CVDA name that is also a COBOL keyword
* Read the ENTER statement
* Pair a host variable with its null indicator in INSERT VALUES and UPDATE SET
* Visit the words of a CBL or PROCESS statement
* Read the DSNTEP2 input GenevaERS Workbench keeps its schema in
* Read a primary key declared on its column

#### rewrite-migrate-kotlin - 0.15.0

* Build and test on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices

#### rewrite-migrate-python - 0.21.0

* Replace deprecated Kotlin DSL container delegates
* Keep utcnow() and utcfromtimestamp() replacements naive
* Replace pipes.quote() with shlex.quote() in the 3.13 upgrade
* Add the missing `assert_` prefix to mock assertions in the 3.12 upgrade

#### rewrite-nodejs - 0.57.0

* Skip blank resolved dependencies in DependencyVulnerabilityCheck
* GitHub advisories as of 2026-11-02T0923
* Format test classes with the 2-space continuation indent from .editorconfig
* Expect the source-map-support test's virtual path resolved as on the running OS
* Add Upgrade to Node.js 18 recipe
* Expect export {} where a recipe removes a TypeScript module's last import
* Adapt to @openrewrite/rewrite 8.97.1 string-literal module export names
* GitHub advisories as of 2026-11-03T2241

#### rewrite-nodejs - 0.56.1

* Skip blank resolved dependencies in DependencyVulnerabilityCheck
* GitHub advisories as of 2026-11-02T0923
* Format test classes with the 2-space continuation indent from .editorconfig
* Expect the source-map-support test's virtual path resolved as on the running OS
* Add Upgrade to Node.js 18 recipe
* Expect export {} where a recipe removes a TypeScript module's last import
* Adapt to @openrewrite/rewrite 8.97.1 string-literal module export names
* GitHub advisories as of 2026-11-03T2241

#### rewrite-nullability - 0.12.0

* Replace deprecated Kotlin DSL container delegates
* OpenRewrite recipe best practices
* Keep the shared nullability index in the ScanningRecipe accumulator, not the ExecutionContext

#### rewrite-prethink - 0.22.0

* Use Java 21 language features and APIs in tests
* Keep the SQL recipes off prethink's own context files
* Build on the plugin's default Java 25 toolchain
* Replace deprecated Kotlin DSL container delegates

#### rewrite-program-analysis - 0.24.0

* OpenRewrite recipe best practices

#### rewrite-react - 0.13.0

* Keep displayName, comments and layout in CreateClassToES6, and fix PureRenderMixin's prefix
* Add `review-react-recipe-pr` skill for self-reviewing recipe changes
* Replace README recipe tables with a link to the recipe catalog (P4)
* Remove unused import and redundant comments in react16 recipes
* Remove stray `test-simple.ts` and `debug-import.ts` (P3 of #51)
* Skip vendored sources and gate type-dependent recipes with `check` (B1 of #51)
* Read `JS.Alias` property names that are string literals
* Lock tmp at 0.2.7 for CVE-2026-44705
* Bump @openrewrite/rewrite to 8.97.1

#### rewrite-reactive-streams - 0.26.0

* Constrain guava past CVE-2026-102554
* OpenRewrite recipe best practices

#### rewrite-spring - 0.49.0

* Migrate removed `LastModified` support for Spring Framework 7
* Skip Kotlin sources and optional autowired fields in FieldToConstructorInjection
* Migrate `spring-security-rsa` to `spring-security-crypto`
* Send an `HttpEntity` request as headers and body when migrating `RestTemplate` to `RestClient`
* Disambiguate `null` headers in `HttpEntity` constructors for Spring Framework 7
* Leave `RestTemplate` alone where `RestClient` cannot stand in for it
* Chain the Moderne Spring Framework 6.0 migration from Spring Boot 3.0
* Prevent duplicate ResponseErrorHandler methods in Boot 4 migration
* Migrate Jetty EE10 to EE11 for Spring Boot 4.0
* Replace `WebContentGenerator#checkAndPrepare` with its delegates
* Rename `RedisConnectionDetails` and the other Redis types Spring Boot 4 prefixed with `Data`
* Rename `@JsonComponent` and the other Boot Jackson support types when adopting Jackson 3
* Fix tests that fail on the Java 25 test toolchain
* Relocate Spring Boot types that are only statically imported
* Move `OAuth2AuthorizationServerConfiguration` to the package Spring Security 7 has it in
* Replace deprecated Kotlin DSL container delegates
* Remove `RequestMappingHandlerMapping` path options that restate the default
* Replace `GenericJackson2JsonRedisSerializer` constructors without an `ObjectMapper` with the builder
* Leave `requiresChannel` alone where `redirectToHttps` cannot stand in for it
* Migrate `HttpHeaders#addIfAbsent` and `writableHttpHeaders` for Spring Framework 7
* Add `spring-web` where `spring-boot-starter-json` brought it in
* Constrain guava past CVE-2026-102554
* Run the Kafka 4.2 and 4.4 migrations as part of Spring Boot 4.1 and 4.2
* [Auto] Spring Boot modular starter table as of 2026-11-03T1107
* Make `FieldToConstructorInjection` thread-safe

#### rewrite-sql - 2.25.0

* Skip Moderne's own context files in the SQL anti-pattern rules
* OpenRewrite recipe best practices

#### rewrite-static-analysis - 0.6.0

* Add FindCloneableWithoutClone recipe (RSPEC-S2157)
* Add FindNullReturnedFromBooleanMethod recipe (RSPEC-S2447)
* Retain Stack when its push result is consumed
* Preserve empty-stack failure when replacing Stack.peek
* Preserve Stack.contains comparison order
* Preserve Hashtable null rejection during modernization
* Preserve Vector indexed exception catches
* Preserve Vector ensureCapacity iterator invalidation
* Preserve Stack underflow catches around lambdas
* Preserve Vector bounds catches in initializer blocks

#### rewrite-tapestry - 0.12.0

* Expect the newest Tapestry 5.9 patch in UpdateTapestryDependenciesTest

## November 2, 2026

#### recipes-csharp - 0.13.0

* Tag redundant boolean literal recipes with RSPEC-S1125
* Fix recipe idempotency issues
* Cover remaining RSPEC-S1125 boolean literal forms
* Keep no trees in the WPF accumulators, and write the nodes the parser reads
* Format only the constructors ImplementExceptionConstructors adds
* Apply the && template of the Where combiners where its result goes
* Fix broken output in string, WPF and exception-constructor recipes
* Pin the indentation TabIndentedFile expects with an .editorconfig
* Show that the constructors ImplementExceptionConstructors adds take the file's tabs

#### recipes-go - 0.16.0

* Fix recipe idempotency issues
* Adapt to changes in Go test harness
* Keep no trees in accumulators, and write the nodes the parser reads
* Make MigrateAwsSdkGoToV2 idempotent, keep retryer values as trees, and fix three smaller defects

#### recipes-javascript - 0.7.0

* More cautious removal of self-assignments in `RemoveSelfAssignment`
* Fix recipe idempotency issues
* Use RecipeSpec.dataTable for assertions on data table contents in tests
* Write the nodes the parser builds in six code-quality recipes
* Fix PreferExponentiationOperator in a with body and NoUselessComputedKey on TypeScript members

#### recipes-mainframe - 0.4.0

* Test an unreadable picture with one the parser still reads
* Feed RecordLayoutTest a pointer, since a picture count is an integer now
* Find proven out-of-bounds COBOL table accesses
* Find embedded SQL status overwritten before inspection
* Expect COACTUPC and COTRTUPC in the CardDemo corpus tests, now that they parse
* Fix the defects a review of every recipe package found
* Prove bounds failures in restricted COBOL VARYING loops
* Find classified sensitive data exposed by COBOL DISPLAY
* Find explicit CICS TSQ responses overwritten before inspection
* Respect metadata operators and literal program IDs in security proofs
* Prove failed COBOL checks fall through to protected calls
* Find TSQ writes that exceed their source areas
* Find short COMMAREA inputs reaching direct copies
* Skip CICS translator literals in table access analysis
* Trace prohibited authorization identity origins
* Keep unresolved AIB origins explicit in fixture expectations
* Trace copied classified values into DISPLAY
* Analyze COBOL routing target source evidence
* Prove failed COBOL routing gates fall through
* Prove local integer table bounds and respect sentence jumps
* Prove COMMAREA copy lengths through direct jumps and cycles
* Trace failed checks through request construction
* Prove local UNSTRING destination bounds
* Include field offsets in COMMAREA copy proofs
* Prove TSQ capacity for whole character records
* Prove restored identity provenance restrictions
* Prove reference modification bounds from local integer values
* Move proven existing bounds checks before buffer copies
* Verify local bounds under COBOL debugging mode
* Detect overwritten CICS file responses
* Move proven UNSTRING bounds checks before parsing
* Adapt to null literal sets and show the security analyses the translator's EIB
* Analyze complete declared Db2 unique keys
* Analyze explicit INSERT bindings to declared unique keys
* Keep SQL analysis active through ordinary DCLGEN declarations
* Move exact table bounds checks before writes
* Support deployed parsers without translator field access
* Find failed validation gates reaching protected SQL writes
* Track exact integers through agreeing COBOL branches
* Analyze Db2 UPDATE assignments and predicates
* Find missing required Db2 version predicates
* Propagate intrinsic field lengths into bounds proofs
* Model unsigned DISPLAY fields in record bounds
* Analyze locally established COBOL CALL targets
* Analyze locally established CICS routing targets
* Find CALL values outside an approved character policy
* Preserve routing facts across disjoint storage effects
* Join values across character and level-88 conditions
* Analyze Db2 SELECT bindings and declared key predicates
* Find contracted Db2 prechecks with incomplete key predicates
* Preserve local routing values across ordinary sentences
* Prove local integer bounds across ordinary sentences
* Join local values across read-only compound conditions
* Prove TSQ write lengths from local assignments
* Find CICS routing targets outside approved character policies
* Track local values returned by simple performed paragraphs
* Trace copied sensitive values and identities through local control flow
* Resolve direct LENGTH OF operands in TSQ writes
* Preserve copy origins across bounded IF branches
* Prove table bounds for bounded local integer sets
* Find failed validation checks before TSQ writes
* Prove trailing-space character lengths from local values
* Prove rejected payload lengths reach contracted parser calls
* Prove visited bounds for nonunit literal loop steps
* Retain numeric bounds proofs beside disjoint overlays
* Find failed checks entering protected local paragraphs
* Find response loss between file and queue commands
* Prove numeric failure gates from declared success values
* Prove prohibited origins across alternative copy chains
* Trace character origins through aligned group copies
* Prove COMMAREA copies through compound length guards
* Prove COMMAREA failure paths through literal message assignments
* Prove equivalent integer guards for bounds check reordering
* Join bounded integer values across EVALUATE branches
* Preserve copy origins across EVALUATE branches
* Find classified copies included in TSQ write buffers
* Track character values through bounded EVALUATE branches
* Find numeric failure checks before protected calls
* Find numeric failure checks before protected paragraphs
* Prove ordered numeric EVALUATE failure paths
* Preserve values through conditional performed assignments
* Analyze returning failure-message paragraphs
* Analyze explicit ELSE failure branches
* Follow bounded chains of performed assignments
* Analyze sliced senders and receivers independently
* Accept a blank after an INSERT column list's opening parenthesis
* Remove the redundant SQL write-target regex and pin the SQL status scan
* Explain structural barriers to local PERFORM summaries
* Preserve local facts and failure paths across simple EXIT
* Follow simple EXIT before status overwrites and COMMAREA copies
* Preserve local proofs across plain literal DISPLAY messages
* Follow nested returning failure-message paragraphs
* Explain unresolved local PERFORM targets
* Prove bounds and lengths after literal subtraction
* Prove received-length bounds for fixed COMMAREA slices
* Prove declared slice bounds for fixed records and LINKAGE fields
* Prove received COMMAREA forwarding length mismatches
* Prove local binary lengths used for COMMAREA forwarding
* Prove literal slice bounds in plain DISPLAY operands
* Prove literal slice bounds in comparisons and MOVE operands
* Resolve section-qualified local paragraph calls
* Prove incoming COMMAREA display length violations
* Preserve existing error messages when moving bounds checks
* Propagate bounded condition-name assignments
* Prove failed checks across disjoint condition messages
* Preserve incoming lengths across local condition assignments
* Propagate bounded default initialization values
* Propagate bounded STRING values and retained suffixes
* Find classified character ranges retained in DISPLAY output
* Find classified character ranges in TSQ write requests
* Find prohibited character ranges in authorization identities
* Filter finite integer values after direct exit guards
* Filter known routing characters after direct exit guards
* Analyze bounded direct COBOL exit paths
* Use proven jump exits in finite value guards
* Move bounds checks ahead of writes with proven jump exits
* Preserve failed checks across disjoint initialization
* Follow SQL status across disjoint literal assignments
* Follow CICS responses across disjoint literal assignments
* Preserve COMMAREA lengths across disjoint initialization
* Follow COMMAREA lengths through numeric EVALUATE
* Verify vulnerability analysis around inline embedded commands
* Follow COMMAREA lengths through section-qualified jumps
* Trace classified characters through DISPLAY operands and slices
* Preserve diagnostic lifetimes across disjoint STRING operations
* Preserve COMMAREA lengths across bounded message construction
* Prove failed checks through bounded STRING messages
* Propose approved CICS READ response guards
* Prove jump exits through plain CICS RETURN
* Prove direct plain CICS RETURN guards
* Propose snapshot-bound Db2 SELECT response guards
* Propose SELECT response guards with standard SQLCA
* Analyze COMMAREA lengths through native EIBCALEN
* Retain native count witnesses within larger entry domains
* Analyze native incoming lengths through ordinary data copies
* Find COMMAREA writes beyond the received length
* Propose approved length guards before incoming-area copies
* Prove terminal paths through bounded literal stores
* Prove terminal stores with standalone SQL declarations
* Prove terminal stores with standard SQLCA includes
* Respect INITIALIZE VALUE and FILLER effect boundaries
* Prove terminal paths that initialize local records
* Propose complete TSQ record guards from approved contracts
* Propose exact CALL character policy guards
* Recognize documented CICS LOAD routing options
* Propose exact CICS routing character policy guards
* Propose approved public traces for entry payload displays
* Prove current identity at authorization calls
* Propose current identity copies at authorization calls
* Prove current authorization results before protected calls
* Propose complete authorization allow guards
* Prove current copies of designated Db2 versions
* Propose removing forced authorization success
* Propose approved Db2 INSERT response guards
* Preserve sentence boundaries around INSERT response guards
* Prove current resource mappings at authorization calls
* Prove validated numeric authorization key copies
* Preserve current authorization evidence across terminal rejection gates
* Prove current authorization at protected calls
* Analyze current payload content length before parsing
* Find TSQ reads that exceed complete buffer allocations
* Analyze routing targets and DL/I calls in nested COBOL programs
* Propose approved TSQ read capacity limits
* Propose approved payload content length computations
* Prove current identity through complete mismatch checks
* Analyze current TSQ payload lengths before parser calls
* Prove current resource keys through validated comparisons
* Analyze current Db2 UPDATE result checks
* Analyze complete Db2 version column schemas
* Propose Db2 version predicates from successful reads
* Prove ordered Db2 UPDATE result selection
* Prove checked Db2 reads through local PERFORM calls
* Prove native Db2 read provider return contracts
* Prove native calls to checked Db2 read providers
* Propose Db2 version predicates from checked native reads
* Analyze checked database versions saved to temporary storage
* Analyze complete checked TSQ version records
* Propose Db2 version predicates across temporary storage tasks
* Prove declared record lengths through checked queue operations
* Prove current authorization at actual Db2 updates
* Propose authorization allow guards before Db2 updates
* Require a proven denied authorization continuation
* Prove denied continuations before Db2 authorization guards
* Resolve an SQL host variable under the structure qualifying it
* Propose current Db2 UPDATE result guards
* Analyze current authorization at actual Db2 reads
* Propose complete authorization guards before Db2 reads
* Propose current identity for Db2 read authorization
* Resolve qualified Db2 host bindings
* Prove read authorization with qualified Db2 hosts
* Prove update authorization with qualified Db2 hosts
* Propose current identity for actual Db2 update authorization
* Support qualified hosts in Db2 update result proofs
* Resolve exact Db2 indicator bindings
* Resolve Db2 hosts outside redefined records
* Analyze current Db2 SELECT output checks
* Propose approved Db2 SELECT output guards
* Guard proven incomplete SELECT output checks
* Preserve exact SQLCODE selections in SELECT result proofs
* Preserve exact SQLCODE selections in UPDATE result proofs
* Guard UPDATE reports after proven incomplete result checks
* Preserve exact SQLCODE literals through result conditions
* Preserve exact SQLCODE intervals through result checks
* Propose guards for approved COMMAREA writes
* Preserve forwarding lengths through proven entry guards
* Propose COMMAREA forwarding length guards
* Propose guards for approved COMMAREA displays
* Preserve known received counts after valid DISPLAY reads
* Retain unresolved paths after earlier COMMAREA copies
* Require COPY snapshots for COMMAREA copy guards
* Build DataItems from the DataDescription hierarchy

#### rewrite-angular - 1.18.0

* Fix recipe idempotency issues
* Add Angular CDK migrations to the UpgradeToAngularN recipes
* Write the nodes the parser builds in two migrations, and expect the generated tsconfig.base.json

#### rewrite-devcenter - 1.37.0

* Add OrganizationStatisticsReport to collect organization statistics without a DevCenter run

#### rewrite-hibernate - 0.34.0

* MigrateJpqlTruncToDateCast migrates queries built from concatenated string literals

#### rewrite-java-security - 3.47.0

* GitHub advisories and endoflife.date data as of 2026-10-30T0927
* Add OWASP LLM02 sensitive information disclosure recipes
* Add OWASP LLM category review recipes and output-sink detection
* Remediate LLM02 by disabling explicit prompt and completion logging
* Compose LLM10 output-token remediations by framework and provider
* Restrict Spring AI tool resolution fallback (OWASP LLM06)
* Disable Spring AI tool-content tracing (OWASP LLM02)
* Cap Spring AI and LangChain4j tool-execution budgets (OWASP LLM10)

#### rewrite-mainframe - 3.7.1

* Report CPU time in ParseCostTest
* Resolve data names by the compiler's rules for callers outside the tree
* Read commas, Area A headers and identification paragraphs as the IBM dialect does
* Pin CBSA to July2024Refresh in the parse cost corpus
* Give each EXEC block its own statement, visit EVALUATE conditions once, and keep a condition's FALSE value apart
* Keep customer names out of comments
* Resolve a COPY of a map set to the symbolic map it generates
* Read VALUE ... BINARY, NOT = in an abbreviation and ADVANCING by a mnemonic as IBM does
* Settle the remaining forms the grammar reads two ways without a full-context retry
* Read an operand list continued inside its parentheses
* Name the file a COPY depends on in one place
* Visit a copybook's text once, as the words the program copied
* Use Java 21 language features and APIs in tests
* Read a SORT collating sequence that names an alphabet per category
* Read a statement's INTO targets from its INTO list alone
* Read a PROGRAM COLLATING SEQUENCE clause written without IS
* Count the PSB a DL/I SCHD names as read, not written

#### rewrite-mainframe - 3.7.0

* Parse FUNCTION TRIM with its LEADING or TRAILING keyword
* Resolve optional statement-list endings by predicate, cutting COBOL parse time 4.5x
* Visit the parse-tree alternatives two visitor methods never passed on
* Read every name as one identifier, so subscripts stop landing on its qualifier
* Inline tableCall into identifier, and bind every parenthesis after a name to it
* Parse a picture string by adjacency, so each cardinality closes its picture
* Give a data name one way to parse, in its qualifiers and in its entry
* Fold the alternatives prediction always resolved the same way
* Treat a separator in column 72 as whitespace when the comment area follows it
* Recognize CBL and PROCESS statements between the programs of a batch compile
* Read a picture string in a lexer mode, as one word per symbol run
* Add a corpus parse-cost report, and the grammar's guide to using it
* Read the XML PARSE statement
* Sort the operands of each combined predicate, so its order cannot duplicate a configuration
* Read the SERVICE LABEL and SERVICE RELOAD statements
* Walk the COBOL source by index instead of copying what remains of it
* Build a Space from a range of the source, finding an interned one without copying
* Let charDataLine end by predicate, so the preprocessor stops retrying every token
* Test a line's ending at the cursor instead of copying the rest of the source
* Keep ENTRY and CICS DFHRESP/DFHVALUE literals when printing
* Leave DFHRESP and DFHVALUE out of the DataName usages
* Replace pseudo-text that matches part of a text word, as ==:TAG:== and ==(TESTVAR1)== do
* Print every copybook a copied word carries, not only the first
* Print a program's trailing Ctrl-Z back
* Settle the COBOL grammar's ambiguities in SLL and remove the pipeline's copies
* Settle the INSPECT ALL and REPLACE operand ambiguities in SLL
* Read a COBOL batch flat and nest its programs in the visitor
* Settle the Db2 and JCL grammars' ambiguities in SLL
* Measure every parser's cost, not only COBOL's
* Print and read a CREATE TRIGGER as written
* Print a CREATE MASK's and a CREATE PERMISSION's keywords where they were written
* Read a CASE expression's END inside an SQL PL block as a body word
* Print a CREATE TRUSTED CONTEXT's and a CREATE AUXILIARY TABLE's keywords where they were written
* Read a trusted context's attributes by the names Db2 gives them
* Read a lone @ as a Db2 statement terminator
* Read every clause ALTER TRUSTED CONTEXT has
* Print a Db2 SET without the = its source left out
* Return a ParseError for an LST that does not print its input back
* Keep a Db2 comment before its closing parenthesis, and a parameter named DATABASE
* Add an unqualified DD to the step the DD before it named
* Read Enterprise COBOL's JSON, XML GENERATE, ALLOCATE and FREE statements
* Read Enterprise COBOL's data clauses and XML-SCHEMA
* Read Enterprise COBOL's &gt;&gt; compiler directives
* Regenerate ANTLR sources exactly as they are committed
* Read a control card deck that opens with DML as Db2 SQL
* Read the queries inside a Db2 SQL PL body
* Read embedded SQL whose query is not a plain SELECT
* Leave a control card deck that opens with DELETE FROM to Db2
* Regenerate the Control-M parser with ANTLR 4.13.2
* Read a .copy whose first statement is assembler with the assembler parser
* Read the keyword and name of a DFHRESP or DFHVALUE literal
* Resolve SQLCA, DFHAID, DFHBMSCA and DFHEIBLK to IBM's layouts
* Leave a data item unresolved when anything but a literal can write it
* Expose the EXEC interface block the CICS translator inserts
* Keep a nested COBOL program's data to that program
* Resolve a containing program's GLOBAL items in a nested COBOL program
* Read a declarative section as a procedure
* Leave a data item unresolved when another item's VALUE fills its storage
* Read IBM COBOL that a sweep of public repositories could not parse
* Count a nested COBOL program's writes to a containing program's GLOBAL items
* Read a containing program's GLOBAL items in a nested COBOL program's DL/I call
* Tell whether a COBOL data item is GLOBAL
* Read BMS map sets that a sweep of public repositories could not print back
* Name no target for a VALUE clause on a FILLER
* Read IMS gen members and Control-M job definitions as IBM and BMC document them
* Read a DL/I call's PSB position in nested programs and from PROCEDURE DIVISION USING
* Give a CICS option's operand as the data name it is written as
* Make COBOL statement-list exits context-dependent
* Preserve COBOL source around inline embedded commands
* Respect the including program debug mode in copied lines
* Keep copied preprocessor directives out of host source
* Cast each visited COBOL child to the type its field declares
* Let the COBOL preprocessor lexer cache where each token starts
* Read debugging mode only from the configuration section
* Supply the DL/I interface block to a program with EXEC DLI
* Resolve a record qualified by its file name
* Parse explicit Db2 row change timestamp columns
* Read an SQL host variable qualified by its structure
* Resolve a REDEFINES object by position

#### rewrite-migrate-python - 0.20.0

* Test the BackoffDecorators data table of `FindBackoffDecoratorsNotMigrated`
* Test each composite as a whole
* Python: build and/or chains left-nested, and keep text, not trees, in the backoff accumulators
* Python: DeMorgan distributes over a chain that rewriting an operand made

#### rewrite-nodejs - 0.56.0

* Remove the unused `NodeResolutionResult` and related code
* Fix recipe idempotency issues
* Use RecipeSpec.dataTable for assertions on data table contents in tests
* Wire four unreachable deprecation recipes into the upgrade ladder
* Add recipes for DEP0185, DEP0129 and DEP0160
* GitHub advisories as of 2026-10-30T0927
* Write the nodes the parser builds in three Node.js migrations
* Install @openrewrite/rewrite with npmInstall, which the build plugin's npmBackpatches depends on

#### rewrite-prethink - 0.21.0

* Collect API call context inside same-CU method candidates
* Attach native API and artifact context to helper body candidates
* Inventory written OkHttp header names in method context
* Relate header names to written sibling value expressions
* Materialize written Java header name and value contexts
* Expose source String evaluations beside invocation method contexts
* Trace lambda argument captures to enclosing method locals
* Join captured arguments to written initializer calls
* Attach annotation arguments to directly annotated types
* Pair explicit OpenFeign service and URL members
* Extract explicit YAML scalar bindings with structural paths
* Preserve typed YAML scalar bindings in JSON records
* Connect Feign URL placeholders to YAML candidates
* Attach native caller names to Feign configuration contexts
* Add explicit application YAML scalar binding records

#### rewrite-react - 0.12.0

* Fix recipe idempotency issues
* Fix broken and missing @see links in recipe docs (P1 of #51)
* Upgrade `react-test-renderer` with React 16, 17 and 18
* Write the nodes the parser builds in four React migrations
* Fix CreateClassToES6 and PureRenderMixin output

#### rewrite-spring - 0.48.0

* Replace the Undertow starter and factory code with Tomcat in UpgradeSpringBoot_4_0
* [Auto] Spring Boot property migration recipes as of 2026-10-27T1328
* [Auto] Spring Cloud property migration recipes as of 2026-10-27T1322
* Remove outdated overrides of Boot-managed version properties
* Fix `RemoveReplaceNoneFromAutoConfigureTestDatabase` removing `Replace.NONE` where it's still needed
* Migrate Spring Data Redis Jackson 2 serializers to Jackson 3
* Fill Spring Boot 4.2 migration gaps and target RC1
* Migrate KafkaProperties build methods to KafkaConfigBuilder for Boot 4.2
* Preserve Janino versions when upgrading to Spring Boot 4.2
* Migrate OriginLookup metadata in proprietary Boot 4 recipes

#### rewrite-sql - 2.24.0

* Convert more Oracle functions and syntax when migrating to Postgres
* Parse for `ConvertDataType` only when the SQL names the old type
* Name what `FindFunction` and `FindStoredProcedureCall` found in search markers
* Find SQL split across Java string concatenations

#### rewrite-static-analysis - 0.5.0

* Add FindThrowInFinally recipe (RSPEC-S1163)
* Add FindJumpOutOfFinally recipe (RSPEC-S1143)
* Add FindNonSerializableComparators recipe (RSPEC-S2063)

#### rewrite-tapestry - 0.11.0

* Expect the newest Tapestry 5.9 patch in UpdateTapestryDependenciesTest

## October 28, 2026

#### recipes-csharp - 0.12.0

* Report AddNuGetPackageReferenceIfTypeUsed option error once, not per file
* Remove matched C# calls instead of delegating RemoveMethodInvocations
* Stop publishing the empty Maven artifact
* Read referenced projects from MSBuildProject.ProjectReferences
* Upgrade to Gradle 9.8.2

#### recipes-go - 0.15.0

* Bump rewrite-go to v0.0.40

#### recipes-javascript - 0.6.0

* Type-check test sources as part of `npm test` and `ci:test`
* Fix unsafe relational inversion in `BooleanChecksNotInverted`

#### recipes-kotlin - 0.9.0

* Add recipes.csv

#### recipes-mainframe - 0.3.0

* Apply OpenRewrite recipe best practices

#### rewrite-compiled-analysis - 0.19.0

* Opt breaksParsing test out of parser-shaped tree validation
* Compare types with TypeUtils.isOfType instead of JavaType.equals

#### rewrite-cryptography - 0.20.0

* Move BouncyCastle test jars to a test type table

#### rewrite-devcenter - 1.36.0

* Rename BuildToolCard's fixRecipeId option to upgradeRecipe
* Drop the fixRecipeId alias from BuildToolCard

#### rewrite-dotnet - 0.21.0

* Upgrade to Gradle 9.8.2

#### rewrite-dropwizard - 0.11.0

* Move test-only parser dependencies to type tables
* Preserve valid overrides after removing a superclass
* Type Health in the Result.healthy/unhealthy replacement templates

#### rewrite-elastic - 0.12.0

* Compare types with TypeUtils.isOfType instead of JavaType.equals

#### rewrite-hibernate - 0.33.0

* Move test-only parser dependencies to type tables

#### rewrite-java-security - 3.46.0

* Keep DES/DESede key sizes and infer the floor from key size when the …
* Move test-only parser jars to the test type table
* Compare versions with core's Version now that rewrite-java-dependencies dropped its internal parser

#### rewrite-mainframe - 3.6.0

* Share copybook trees and copied-word markers, so a COBOL LST takes 42% less heap

#### rewrite-migrate-kotlin - 0.13.0

* Parse Exposed 0.x test sources from a test type table instead of jars

#### rewrite-migrate-python - 0.19.0

* Python: prepare recipes for OpenRewrite 8.94
* Fix recipe bugs found by cross-checking the Python recipe skill, and correct the skill

#### rewrite-nodejs - 0.55.0

* Replace `SlowBuffer` and the `fs` access constants in UpgradeNode26, since Node.js 25 removed both

#### rewrite-nullability - 0.10.0

* Resolve template parser classpath from the type table

#### rewrite-prethink - 0.20.0

* Analyze field-rooted receiver and argument call placements
* Relate written resilience settings to Duration arguments
* Report invocation arguments in their lexical method context
* Compose builder settings and Duration arguments by method context
* Compose ordinary calls and same-CU method metadata candidates
* Collect same-CU invocation method metadata candidates
* Use the element returned by singleElement() instead of re-fetching it
* Collect coding conventions in a per-run scanning accumulator

#### rewrite-program-analysis - 0.22.0

* Compare types with TypeUtils.isOfType instead of JavaType.equals
* Move test parser jars to a test type table

#### rewrite-reactive-streams - 0.24.0

* Move test-only parser dependencies to type tables

#### rewrite-spring - 0.47.0

* Qualify ambiguous type table lookups in recipe templates

#### rewrite-sql - 2.23.0

* Stop renaming Oracle functions into invalid Postgres, and map more Oracle types
* Convert data types that carry a precision or length semantics
* Convert Oracle's `MINUS` to `EXCEPT` when migrating to Postgres
* Stop renaming SQL Server functions into invalid Postgres
* Leave SQL untouched when `ChangeFunctionName` renames nothing
* Keep formatting when `ChangeFunctionName` renames a function
* Convert SQL Server's `TOP` to `LIMIT` when migrating to Postgres
* Only rename two-argument `INSTR` to `STRPOS`
* Convert Oracle `SYSDATE` and drop `FROM DUAL` when migrating to Postgres
* Convert Oracle `LONG RAW` and `FLOAT(p)` when migrating to Postgres
* Group no-change tests into nested `NoChange` classes

#### rewrite-static-analysis - 0.4.0

* Add io.moderne.java.staticanalysis.CommonStaticAnalysis, which runs the proprietary remediations and then the open source CommonStaticAnalysis
* Name the Java recipes io.moderne.staticanalysis, as the open source ones are named org.openrewrite.staticanalysis, so that both are in one category, and say that CommonStaticAnalysis builds on the open source one
* Remove the Python recipes, which moved to rewrite-migrate-python, with the build and publishing of their package, openrewrite-static-analysis

#### rewrite-static-analysis - 0.3.1

* Add io.moderne.java.staticanalysis.CommonStaticAnalysis, which runs the proprietary remediations and then the open source CommonStaticAnalysis
* Name the Java recipes io.moderne.staticanalysis, as the open source ones are named org.openrewrite.staticanalysis, so that both are in one category, and say that CommonStaticAnalysis builds on the open source one
* Remove the Python recipes, which moved to rewrite-migrate-python, with the build and publishing of their package, openrewrite-static-analysis

#### rewrite-struts - 0.33.0

* Move test-only parser dependencies to type tables

## October 27, 2026

#### recipes-csharp - 0.10.0

* Report AddNuGetPackageReferenceIfTypeUsed option error once, not per file
* Remove matched C# calls instead of delegating RemoveMethodInvocations
* Stop publishing the empty Maven artifact
* Read referenced projects from MSBuildProject.ProjectReferences
* Upgrade to Gradle 9.8.2

#### recipes-go - 0.13.0

* Upgrade to Gradle 9.8.2

#### recipes-javascript - 0.4.0

* Stop publishing the empty Maven artifact
* Overhaul of the moment-to-temporal recipe
* Upgrade to Gradle 9.8.2

#### recipes-kotlin - 0.7.1

* Add recipes.csv

#### recipes-kotlin - 0.7.0

* Upgrade to Gradle 9.8.2

#### recipes-mainframe - 0.1.0

* Resolve rewrite-cobol from the Code Genome Project, and stop caching against a dead host
* Resolve org.openrewrite build plugins from the Code Genome Project
* Return the single decision table from the assertion that checks it
* OpenRewrite recipe best practices
* Add a guide that takes analysts from a legacy mainframe tool to Moderne
* Read EXEC SQL through rewrite-mainframe's SQL trait
* Bring the analyst guide up to date with the search that landed on 2026-10-18
* Send the analyst guide's conversations through coding agents, drop its dates, and describe the code search page as it ships
* expectedCyclesThatMakeChanges=2
* Upgrade to Gradle 9.8.2
* Keep values, not trees or traits, in the mainframe indexes' accumulators
* Let rewriteRun verify recipes settle instead of pinning cycles

#### recipes-scala - 0.7.0

* RemoveUnusedBinding now removes only safe, unused bindings
* RemoveExplicitReturn now only strips tail-position returns
* UseLogger recipes to adapt to improved type attribution
* Fix RemoveAny2StringAdd not to confuse String plus int
* Use type-matching instead of name-matching in recipes
* Fix PreferOption only to touch expressions with Option type
* RemoveUnusedImport not to touch implicit imports
* RemoveExplicitReturn: give a braceless method body the shape the parser gives it
* Print a visited tree under its parent cursor
* Upgrade to Gradle 9.8.2
* SimplifyOptionMatch: match `Some(x)` parsed as J.DeconstructionPattern
* Match Scala objects by their binary name, as rewrite-scala names them now, as well as by their source name

#### rewrite-ai - 0.6.0

* Upgrade to Gradle 9.8.2

#### rewrite-android - 0.21.0

* Upgrade to Gradle 9.8.2

#### rewrite-angular - 1.15.0

* Add regression tests for the dropped import on renamed call sites
* Migrate @angular/http to @angular/common/http
* Expect one @angular/common/http import after the rebind
* Upgrade to Gradle 9.8.2
* Publish the npm package to the Code Genome Project
* Skip npm publishing for pull request builds
* Bump @openrewrite/rewrite from 8.92.18 to 8.93.3 in /recipes-angular

#### rewrite-circleci - 3.14.0

* Upgrade to Gradle 9.8.2

#### rewrite-compiled-analysis - 0.18.0

* Opt breaksParsing test out of parser-shaped tree validation
* Compare types with TypeUtils.isOfType instead of JavaType.equals

#### rewrite-compiled-analysis - 0.17.0

* Upgrade to Gradle 9.8.2
* VerifyCompilation leaves a file alone that it already marked

#### rewrite-concourse - 3.13.0

* Upgrade to Gradle 9.8.2

#### rewrite-cryptography - 0.19.0

* Move BouncyCastle test jars to a test type table

#### rewrite-cryptography - 0.18.0

* Print visited trees under their parent's cursor, not their own
* Upgrade to Gradle 9.8.2
* Ask for the license plugin without a version in the subproject

#### rewrite-devcenter - 1.35.0

* Add package upgrade and migration cards for npm, PyPI, NuGet and Go
* Split versions locally, now that rewrite-java-dependencies dropped VersionParser
* Add a React DevCenter and package migration cards for Angular

#### rewrite-devcenter - 1.34.0

* Pin ClassGraph to 4.x
* Upgrade to Gradle 9.8.2
* Describe the cards of each DevCenter in its description
* Show a colored bar for each card in the DevCenter descriptions
* Resolve DependencyVulnerabilityCheckLeakTest's POMs through the machine's Maven settings

#### rewrite-dotnet - 0.19.0

* Upgrade to Gradle 9.8.2

#### rewrite-dropwizard - 0.10.0

* Move test-only parser dependencies to type tables
* Preserve valid overrides after removing a superclass
* Type Health in the Result.healthy/unhealthy replacement templates

#### rewrite-dropwizard - 0.9.0

* Match calls and types by attribution, and stop reformatting whole classes
* Print a Dropwizard rule call under its parent's cursor, not its own
* Regenerate type table without pre-release dependencies
* Keep the method type in sync with the return type in MigrateJettyHandlerSignature
* Upgrade to Gradle 9.8.2
* Dropwizard rule-call migration removes the imports it leaves unused
* CodahaleTimedToMicrometerTimedTest expects the TimeUnit import removed
* Look up the newest Dropwizard 5 BOM through the machine's Maven settings

#### rewrite-elastic - 0.11.0

* Compare types with TypeUtils.isOfType instead of JavaType.equals

#### rewrite-elastic - 0.10.0

* Upgrade to Gradle 9.8.2

#### rewrite-hibernate - 0.32.0

* Move test-only parser dependencies to type tables

#### rewrite-hibernate - 0.31.0

* Match fully qualified JDBC types and @Query annotations by type
* Keep a method invocation from being its own parent
* Pass the cursor to sub-visitors in MigrateJoinTableToCollectionTable
* Upgrade to Gradle 9.8.2
* CompositeUserTypeSessionFactoryImplementor removes the SessionFactoryImplementor import
* Pass `version`, not `newVersion`, to `AddDependency` in `MigrateToHibernate70`

#### rewrite-jasperreports - 0.8.0

* Match exporter parameters and Boolean constants by type
* Apply templates to the block under the block's parent cursor
* Upgrade to Gradle 9.8.2

#### rewrite-java-application-server - 0.12.0

* Upgrade to Gradle 9.8.2
* ConfigureGradleFatJar leaves a build alone that already has its jar block
* Install a timestamped snapshot jar under its -SNAPSHOT version, where Maven looks for it

#### rewrite-java-security - 3.45.0

* Keep DES/DESede key sizes and infer the floor from key size when the …
* Move test-only parser jars to the test type table
* Compare versions with core's Version now that rewrite-java-dependencies dropped its internal parser

#### rewrite-java-security - 3.44.0

* FixCwe338: format only what it adds instead of the whole file
* Declare XMLInputFactory and RandomStringUtils on their templates
* Stop the dependency-vulnerability tests drifting with the advisory CSV
* Upgrade to Gradle 9.8.2
* Keep values, not trees or build models, in scanning recipe accumulators
* Pin springBootBomPreventsTransitiveFix until rewrite-gradle settles, and imply the verification cycle
* FixSqlInjectionConcat tests expect the Statement import it removes
* Use `JavaFileChecker` and `KotlinFileChecker` preconditions in `RegularExpressionDenialOfService`
* Run four tests at a time on any machine, as on a CI runner
* Leave Maven Central out of the tests that serve their artifacts from a mock repository
* GitHub advisories and endoflife.date data as of 2026-10-25T2010
* Refresh advisories with one Gradle task, and a skill to open the data PRs
* Parse every ecosystem's advisories in one parallel pass
* Assert each BOM property override is declared once, and drop the cycle pin
* Guard every tainted URL in a block in FixCwe918, keeping nested-block guards

#### rewrite-kafka - 0.9.0

* Declare the factory call's class by its fully qualified name
* Keep the method type in sync with the return type in MigrateStreamsUncaughtExceptionHandler
* Upgrade to Gradle 9.8.2
* Drop unused Collections import from migrateWithStaticImport expectation
* Kafka recipes remove the imports they leave unused

#### rewrite-kubernetes - 3.21.0

* Compute KubernetesModel from the document instead of keeping it as a marker
* Upgrade to Gradle 9.8.2
* Keep the values read off a MirrorTarget's spec instead of the tree

#### rewrite-mainframe - 3.5.0

* Share copybook trees and copied-word markers, so a COBOL LST takes 42% less heap

#### rewrite-mainframe - 3.4.0

* Upgrade to Gradle 9.8.2
* Replace `ListUtils.map` used as a loop with `forEach`

#### rewrite-migrate-kotlin - 0.12.0

* Parse Exposed 0.x test sources from a test type table instead of jars

#### rewrite-migrate-kotlin - 0.11.0

* Fix thirteen conversion bugs in `AutoValueToDataClass`
* Print trees in AutoValueToDataClass under their parent's cursor
* Set exposed-migration-jdbc version when renaming exposed-migration
* Upgrade to Gradle 9.8.2
* Keep source text, not trees, in AutoValueToDataClass's accumulator

#### rewrite-migrate-python - 0.18.0

* Python: prepare recipes for OpenRewrite 8.94
* Fix recipe bugs found by cross-checking the Python recipe skill, and correct the skill

#### rewrite-migrate-python - 0.17.0

* Keep the quotes when rewriting a PEP 604 union inside a quoted annotation
* Use `pyproject()` assertions in `MigrateToPyprojectTomlTest`
* Convert every backoff decorator to tenacity
* Use PEP 604 union syntax in type hints
* Use PEP 604 union syntax for the _Outcome alias
* Common static analysis issues
* Add UpgradeToPython315 and the 3.15 project-file wrapper
* Audit the Python recipe-writing skill and lock openrewrite 8.93.11
* Fix recipe output the audit found invalid or meaning-changing
* Bring the Python recipes and their tests in line with the skill's conventions
* Migrate APIs removed in Python 3.15
* Fix three correctness bugs from the UpgradeToPython315 real-repo review
* Upgrade to Gradle 9.8.2
* Find uses of APIs removed in Python 3.15 without a replacement
* Get ahead of the Python 3.16 and 3.17 removals
* Bump Python version in setup.py, Ruff, GitHub Actions and Read the Docs
* Harden the Python 3.15 upgrade after a second real-repo review
* Test that every recipe is reachable from a composite, and migrate avro-python3 on 3.13
* Keep the manifest's upgrade as text in UpgradePythonProjectFiles' accumulator
* Pass the Python tests on openrewrite 8.94.0 as well as 8.93.11

#### rewrite-nodejs - 0.54.0

* Replace `SlowBuffer` and the `fs` access constants in UpgradeNode26, since Node.js 25 removed both

#### rewrite-nodejs - 0.53.1

* Find `fs.rmdir()` calls passing `recursive` and rename the RSA-PSS `hash` options in UpgradeNode26, since Node.js 25 throws for both

#### rewrite-nodejs - 0.53.0

* Replace deprecated Buffer constructor with Buffer.alloc() and Buffer.from()
* Keep fs-extra promise-form open/glob on fs-extra and report them with…
* Floor whole versions and handle comparator unions when raising engines.node
* Handle named truncate/truncateSync imports in ReplaceFsTruncateWithFd
* Leave argument-less, undefined and optional exit codes alone in Avoid…
* Order npm prereleases below their release and accept x.y and hyphenat…
* Report per-project lockfile presence and plain name/version in FindNodeProjects
* Expect ReplaceFsTruncateWithFd to rewrite truncate bound by a destruc…
* Upgrade direct npm dependencies also pulled in transitively instead of overriding them in DependencyVulnerabilityCheck
* Write regenerated lock files back in `DependencyVulnerabilityCheck` and `RemoveRedundantOverrides`
* Upgrade to Gradle 9.8.2
* Keep values, not markers or trees, in the DependencyVulnerabilityCheck and RemoveRedundantOverrides accumulators
* GitHub advisories as of 2026-10-25T2010
* Publish the npm package to the Code Genome Project, as the other npm members do, so that CGP can release it

#### rewrite-nullability - 0.9.0

* Resolve template parser classpath from the type table

#### rewrite-nullability - 0.8.0

* Build cursors under the visited tree's parent, not the tree itself
* Visit repropagated statements under their real parent cursor
* Propagate return nullability through caller chains in one cycle
* Upgrade to Gradle 9.8.2
* Keep the `@NullMarked` type, not a parsed `J.Package`, in `AddNullMarkedToAllPackages`'s accumulator
* AlignOverrideNullabilityWithSupertype removes the imports it leaves unused

#### rewrite-prethink - 0.19.0

* Compose returned local writes with wrapped invocation contexts
* Compose argument locals with recorded created-type method contexts
* Materialize Java created-type method owner candidates
* Find own method-formal receiver references
* Compose own-formal references with JDBC invocation facts
* Inventory written Java methods and exact lexical owners
* Compose method owners with own-formal JDBC contexts
* Include own anonymous method formal argument references
* Compose formal helper and JDBC source contexts
* Add project-scoped helper and JDBC source contexts
* Expose synchronous scalar callbacks for Java fact collectors
* Add bounded typed helper-context carrier
* Document native JDBC null-binding branch contexts
* Add bounded scalar analysis for project helper JDBC contexts
* Collect method call and transaction context inputs
* Detect Go -er interfaces and drop the dead TestXxx counter
* Add lexical ownership facts for Java call sites
* Compose method ownership and invocation select contexts
* Record direct Java field initializer identities
* Collect field initializer call and argument contexts
* Move parser-only test dependencies to a test type table
* Preserve written call sites across Java parser representations
* Trace written receiver chains in field initializers
* Record field receiver chains within each compilation unit
* Describe nested argument and receiver invocation placements

#### rewrite-prethink - 0.18.0

* Report Python methods against their enclosing class in method quality metrics
* Print a visited tree under its parent cursor
* Upgrade to Gradle 9.8.2
* Keep report rows, not the resolution marker, in `PythonDependencyReport`'s accumulator
* Let rewriteRun verify the starter settles instead of pinning cycles
* Extract Java transaction declarations for semantic SQL analysis
* Extract individual Java call sites for semantic SQL joins
* Preserve Java endpoint identities and nested controller scope
* Report REST endpoints inherited from base classes and interface default methods
* Extract direct Java authorization declarations independently of endpoints
* Extract Java annotation arguments and source String constant evidence
* Inventory Java source coverage and recorded compilation context
* Extract typed Spring HTTP authorization DSL relationships
* Extract Java invocation arguments with bounded source String evidence
* Repair nested CALM call traversal and lexical caller boundaries
* Document native SQL joins for Spring event source relationships
* Add direct Java constructor parameter-to-field assignment evidence
* Document typed credential getter contexts in logger arguments
* Link caller formals to ordinary invocation argument references
* Preserve controller scope when extracting endpoint contracts
* Compose endpoint parameter references with attributed outgoing calls
* Recognize Elasticsearch repository and document declaration roles
* Preserve explicit invocation receiver types separately from method owners
* Expose Java project publications and retain literal Maven parents
* Expose original local variable bindings for call-context analysis
* Expose typed written Java constructor arguments
* Relate Java lambda parameters to invocation receivers
* Report written Java enum constant arguments
* Compose credential source context from existing Java analysis tables
* Relate Java local write sites to declarations and direct RHS nodes
* Relate Java method returns to bodies and direct expression nodes
* Bind directly returned Java locals to lexical declarations
* Compose returned locals with recorded writes in portable SQL
* Explain credential getters with existing native field context
* Record direct Java expression wrapper operands
* Compose return wrapper and invocation source contexts

#### rewrite-program-analysis - 0.21.0

* Compare types with TypeUtils.isOfType instead of JavaType.equals
* Move test parser jars to a test type table

#### rewrite-program-analysis - 0.20.0

* Visit and print trees under their parent's cursor, not their own
* Pass ModuleHasDependency's new invertMarking argument
* Visit nested trees under their real parent cursor
* Upgrade to Gradle 9.8.2

#### rewrite-react - 0.9.0

* Upgrade to Gradle 9.8.2
* Publish the npm package to the Code Genome Project
* Publish to npmjs only when given an npm token

#### rewrite-reactive-streams - 0.23.0

* Move test-only parser dependencies to type tables

#### rewrite-reactive-streams - 0.22.0

* Regenerate type table without pre-release dependencies
* Upgrade to Gradle 9.8.2

#### rewrite-spring - 0.46.0

* Resolve the converter's `ObjectMapper` argument to its declaration by scope
* Compare types with TypeUtils.isOfType instead of JavaType.equals
* Pass CGP credentials to the generator workflows as Gradle properties
* Move test-only parser dependencies to type tables
* Find and fill gaps in the Spring Boot 4 relocations, and stop relying on openrewrite's relocation and starter recipes
* Replace Spring Boot starter test jars with type tables and qualify ambiguous lookups
* Qualify spring-core and mockito-core type table lookups in RestTemplate tests

#### rewrite-spring - 0.45.0

* Pin ClassGraph to 4.x
* Only add Spring Boot gRPC starters to modules that already use Spring gRPC
* Add FindMultipleAutowiredConstructors
* Fix `RemoveGradleUberJarLoaderImplementationConfig` (was removing bare `return` statements from Gradle files)
* Migrate `RestTemplate`, `RestTemplateBuilder` and `RestTemplateCustomizer` to `RestClient` as part of the Spring Boot 4.1 upgrade
* Fold DaoAuthenticationProvider.setUserDetailsService into super(..) and into constructors with later-declared services
* Match by type in three recipes and stop reformatting a whole class
* Finish Spring Boot 4 relocations after MigrateAutoconfigurePackages
* Regenerate type table without pre-release dependencies
* Keep the method type in sync with the return type in MigrateChannelInterceptorAdapter
* Make three recipes converge in one cycle
* [Auto] Spring Boot modular starter table as of 2026-10-20T1109
* Migrate `WsConfigurerAdapter` to `WsConfigurer` for Spring WS 5
* Reuse migrated declaring type for inserted setJobRegistry call
* Add a review-recipe-pr skill for self-review and reviewing recipe PRs
* Test that every recipe is reachable from a composite, and fix three gaps
* Guard against unqualified calls in MigrateConverterSetObjectMapper, tidy YAML
* Prompt agents and authors to self-review with /review-recipe-pr
* Use `ListUtils.filter` instead of mapping elements to `null`
* Remove spring-retry entirely when migrating to Spring Boot 4
* Trim review-recipe-pr rules now enforced by RewriteTest and best practices
* Upgrade to Gradle 9.8.2
* Match any Spring Boot 4.0.x patch in gradleProjectOnClassicStarters
* Migrate AntPathRequestMatcher::new method references to PathPatternRequestMatcher
* Replace test stubs and TypeValidation.none() with classpathFromResources (C7)
* Use `Comments` trait for TODO comments and comment the enclosing statement (C1)
* Use `TreeVisitor#reduce` and `AnnotationService` (C18 from #490)
* Fix MockMvc andDo/jsonPath handling and guard MigrateMockMvcToAssertJ (A14, B11)
* Leave javadoc references in MigrateSpringRetryToCompat to ChangeType
* A5: Only retype the ObjectMapper passed to the Jackson converter in AdoptJackson3
* Keep values, not compilation units, in MigrateSpringRetryToCompat's accumulator
* Let rewriteRun verify recipes settle instead of pinning cycles
* Spring recipes remove the imports they leave unused
* Resolve Spring releases through the Maven settings, not mirror variables of our own
* Resolve SpringRetryCleanupSingleCycleTest's POM through the machine's Maven settings
* Scope `MigrateToJsf_2_3` web.xml edits with a `FindSourceFiles` precondition
* Add missing Spring Boot 4 relocations: ServletComponentScan, additional Tomcat connectors, OrderedWebFilter

#### rewrite-sql - 2.21.0

* Upgrade to Gradle 9.8.2
* Let rewriteRun verify SqlStatement search results settle

#### rewrite-static-analysis - 0.3.0

* Augment boolean simplification recipes and remove duplicates
* Add 9 cleanup recipes (Ruff-inspired)
* 5 new recipes
* Fix LoopCleanup traversal for slot-based LST nodes
* Forward Code Genome Project secrets to the CI and publish workflows
* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation
* Add four missing cleanup recipes to PythonBestPractices
* Resolve org.openrewrite build plugins from the Code Genome Project
* Remove Develocity configuration for retired ge.openrewrite.org
* Handle Optional receiver types
* Upgrade to Gradle 9.8.2
* Publish the Python package to the Code Genome Project, as rewrite-migrate-python does, now that CGP builds and releases this repository
* Remove GitHub Actions CI, now that CGP builds this repository
* Pass the Python tests on openrewrite 8.94.0 as well as 8.93.11
* Replace Hashtable, Vector, Stack and StringBuffer only where program analysis shows the object stays in its method, moved here from openrewrite/rewrite-static-analysis and rebuilt on rewrite-program-analysis

#### rewrite-struts - 0.32.0

* Move test-only parser dependencies to type tables

#### rewrite-struts - 0.31.0

* Give the package tag built from the first action ids of its own
* Keep the method type in sync with the return type in MigrateActionClass
* Upgrade to Gradle 9.8.2

#### rewrite-tapestry - 0.8.0

* Declare the bean's type on the template in ConvertBeanAnnotation
* Upgrade to Gradle 9.8.2

#### rewrite-terraform - 3.17.0

* Remove getSimpleName() workarounds for quoted strings
* AddResourceNestedBlock not to duplicate comments
* MoveProviderVersionToRequiredProviders not to lose version information
* Adapt to recent improvements in rewrite-hcl
* Make RDS and Aurora upgrade recipes engine-aware and limited to direct upgrade paths
* Upgrade to Gradle 9.8.2

## October 20, 2026

#### rewrite-nodejs - v0.52.1

* Adapt to rewrite-javascript’s new lock engine API
* Migrate every hpagent shape found in real projects off hpagent
* Write source-map-support's non-native API into the files that use it

## October 19, 2026

#### recipes-go - v0.12.3

* Stop publishing the empty Maven artifact
* AWS SDK v2 migration: output that builds and behaves like v1

#### rewrite-mainframe - 3.3.1

* Print DB2 statements as written, and read COMMENT ON COLUMN and ADD CONSTRAINT
* Read a DSN deck that opens with comments, or only frees, as a DSN deck

## October 18, 2026

#### rewrite-mainframe - 3.3.0

* Name Lombok getters in code, since Javadoc cannot link to them
* Read a range partition's STARTING FROM and ENDING AT bounds
* Read the rest of a table when one element cannot be read
* Leave another vendor's SQL to the resource step
* Give REPLACE originals and preprocessor words ids of their own
* Count any use of a condition name as a use of its item
* Read a group SSA's segment, and LINK and XCTL as calls
* Say which tables a DB2 query and view read
* Read a DSN RUN deck as a bind deck, and say what it runs
* Read DDL kept with the control cards as DDL
* Say which tables an EXEC SQL block names, what it does to each, and where

## October 13, 2026

#### rewrite-prethink - v0.17.1

* Cover TypeScript in Node.js test quality recipe tests
* Reuse the C# RPC process across tests to speed up CI

#### rewrite-prethink - v0.17.0

* Detect Node.js tests without assertions across assertion libraries
* Count focused, skipped, concurrent and parameterized Node.js tests
* Skip Node.js external calls and static waits that the test file mocks
* Reduce false positives in Node.js test quality recipes
* Detect Node.js subtests, template-named tests and assertions in helpers

## October 10, 2026

#### rewrite-cryptography - 0.17.0

* Remove Sonatype snapshots repository

#### rewrite-devcenter - 1.33.4

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-java-application-server - 0.11.0

* Resolve org.openrewrite artifacts from Code Genome Project in Gradle integration test sample
* Resolve the rewrite Gradle plugin from Code Genome in the integration test sample
* Common static analysis issues

#### rewrite-prethink - 0.16.0

* Skip Maven archetype template poms in FindProjectMetadata
* Use `.relativeTo()` in tests
* Tolerate messaging rows without a destination in GenerateCalmMermaidDiagram
* Group Dotnet and Go CALM data tables under architecture
* OpenRewrite recipe best practices

## October 9, 2026

#### recipes-csharp - 0.9.0

* Remove Develocity configuration for retired ge.openrewrite.org
* Drop unused workflow secrets and upgrade to Gradle 9.8.0
* Match typeof as Cs.TypeOf and read using resources via ControlParentheses
* Warn once per declaration of an obsolete type, not twice

#### recipes-go - 0.12.2

* Updated repository to use OpenRewrite version v8.93.0

#### recipes-javascript - 0.3.0

* Adopt rewrite 8.92.18's scope, template and pattern APIs, and fix what the audit found

#### recipes-kotlin - 0.6.0

* Bump the Kotlin DSL toolchain to 2.4.20

#### recipes-scala - 0.6.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-ai - 0.5.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-android - 0.20.0

* Use the core UpgradeAndroidGradlePluginVersion recipe

#### rewrite-angular - 1.14.0

* Bump @openrewrite/rewrite from 8.91.6 to 8.92.2
* Bump @openrewrite/rewrite from 8.92.2 to 8.92.6 in /recipes-angular
* Replace InjectFlags in Injector.get and TestBed.inject calls
* Migrate provideExperimentalCheckNoChangesForDebug to Angular 20
* Add generated recipes.csv recipe metadata
* OpenRewrite 8.92.15
* Keep DI interceptors when replacing `HttpClientModule` with `provideHttpClient()`
* Keep multiline `imports` and `providers` arrays well formed when moving HTTP modules
* Provide `HttpClient` along with `provideHttpClientTesting()`
* Replace `resolveComponentFactory` only where its result goes straight to `createComponent`
* Mark components declared only in `TestBed` as `standalone: false`
* Separate the inserted `standalone` flag from the property after it
* Type hand-built options properties as a parse would
* Adapt to rewrite 8.92.18, and type the HTTP client and router recipes
* Bump source-map-js from 1.2.1 to 1.2.2 in /recipes-angular

#### rewrite-circleci - 3.13.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-compiled-analysis - 0.16.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-concourse - 3.12.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-dotnet - 0.18.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-dropwizard - 0.8.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-elastic - 0.9.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-hibernate - 0.30.0

* Flag untracked `LockOptions` variables with a TODO in `MigrateLockOptionsToDirectParameters`

#### rewrite-jasperreports - 0.7.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-java-security - 3.43.0

* Add FindMassAssignment (Sonar S4684)
* Update dependency vulnerability test expectations for 2026-10-05 advisories
* Reject invalid Maven scopes in dependency check validation
* Generate SBOMs for npm, Python, NuGet, and Go with one recipe per language
* Fix test compilation on main: restore char loop variable
* Expect single cycle in directDependencyAlsoAppearsAsTransitive
* Only upgrade C# dependencies declaring a lower exact or pinned version
* Tolerate dependency coordinates without a version in RemoveUnusedDependencies

#### rewrite-kafka - 0.8.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-kubernetes - 3.20.0

* Only read the pod spec registry from the ExecutionContext when looking up paths

#### rewrite-mainframe - 3.2.1

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-migrate-kotlin - 0.10.0

* Upgrade to Kotlin 2.4.20
* Migrate `@AutoValue` classes to Kotlin data classes
* Widen the AutoValue conversion: factories, nested types, supertypes, unresolved types, keepJavaAccessors

#### rewrite-migrate-python - 0.16.0

* Run the Python LST tests instead of skipping them
* Absorb the Python cleanup recipes from rewrite-static-analysis
* Treat a None union member as builtin in NoneCompare

#### rewrite-nodejs - 0.52.0

* Expect fs-extra destructured require to split after upstream maybeRebind change

#### rewrite-nodejs - v0.51.2

* Prevent npm releases from depending on prerelease @openrewrite/rewrite
* Add Upgrade to Node.js 20 recipe
* Add UpgradeNode26 composite recipe

#### rewrite-nullability - 0.7.1

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-program-analysis - 0.19.0

* Remove ignored `getParameterTypes()` call in `FunctionalProgrammingAssertions`
* Fix TaintedFieldAcrossFilesTest failures on main

#### rewrite-react - 0.8.0

* Merge claude.md into CLAUDE.md to fix case collision
* Add generated recipes.csv recipe catalog
* Keep destructured props flat when removing `forwardRef`
* Import React's scoped `JSX` namespace where React 19 removed the global one
* Remove `.Provider` only from React contexts
* Type the `ref` prop with `React.RefAttributes` when removing `forwardRef`
* Keep `import React` in files with JSX unless the project uses the automatic JSX runtime
* Upgrade React's dependencies only to the final version when composing upgrades
* Replace only React DOM's `useFormState`
* Parenthesize the parameter of an arrow function typed in place of `React.FC`
* Migrate string refs to instance fields, not to the frozen `refs` object
* Move `React.renderToString` and `renderToStaticMarkup` to `react-dom/server`
* Upgrade `react-test-renderer` along with React 19
* Add the `react-dom` and `prop-types` imports that `ReactToReactDom` and `ReactPropTypes` reference
* Type hand-built tag literals and `undefined` as a parse would
* Adapt to rewrite 8.92.18, and bind the React 18/19 API templates through their context

#### rewrite-reactive-streams - 0.21.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-spring - 0.44.0

* Scaffold Spring Boot 4.2 migration recipe
* Remove Sonatype snapshots repository
* Migrate Spring Security OAuth clients and resource servers
* Fix `AddWithHttpClientDefaultsToReactorBuilders` (was producing code that does not compile)
* Migrate `RedisProperties` to `DataRedisProperties` for Spring Boot 4
* Regenerate recipes.csv
* Fix Spring 7 reflection member category migration
* Upgrade to Java 21 for jOOQ only in Spring Boot 4.1 migration
* Close modular-starter gaps when migrating off the classic starters
* Relocate OAuth2 resource server types moved in Spring Boot 4.1
* Migrate an excluded SecurityAutoConfiguration to its three Spring Boot 4 names, one class name per entry
* Remove Gradle ext version overrides that Spring Boot 4.0 already meets
* Remove redundant Gradle ext version overrides in the Spring Boot 3.4, 3.5, 4.1 and 4.2 migrations too
* Keep the stubs, injection and customizers working when migrating @AutoConfigureWireMock to wiremock-spring-boot
* [Auto] Spring Cloud property migration recipes as of 2026-10-06T1111
* Relocate deprecated Spring Security types removed in 7.0
* Skip property migration PRs when only recipes.csv changed
* Derive Spring Boot 4 modular starter additions from referenced types for both the classic and 3 → 4 paths
* Fix ReplaceDeprecatedDockerApi for superclass constructor calls
* Add missing removals of `throws Exception` clauses from Spring Security 7 overrides
* Migrate imperative `RetryTemplate` construction off spring-retry
* Add Spring HATEOAS 3.0 migration to the Spring Boot 4.0 upgrade
* Add Spring for GraphQL 2.0 migration recipes

#### rewrite-sql - 2.20.0

* Handle derived DELETE USING sources, elided table qualifiers and wide integer literals
* Read OFFSET and COUNT comparison literals wider than a long

#### rewrite-struts - 0.30.1

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-tapestry - 0.7.2

* Updated repository to use OpenRewrite version v8.93.0

#### rewrite-terraform - 3.16.0

* Add recipes to change module, provider, and data source attributes

## October 8, 2026

#### recipes-go - v0.12.1

* AWS SDK v2 migration: fix missing helpers, narrowed fields, and half-migrated packages
* OpenRewrite recipe best practices

#### rewrite-migrate-python - v0.15.2

* Keep a collapsed if's layout intact in CollapsibleIfStatements
* Mark only the found dependency declaration in DependencyInsight
* Decline Python rewrites that change program meaning
* Migrate backoff decorators to tenacity
* Require openrewrite 8.92.18 and build the recipes on what its SDK provides

#### rewrite-nodejs - v0.51.1

* Update lock files when the Node.js migrations change dependencies
* Guard the migrated https-proxy-agent construction against a missing proxy
* Fix import syntax expectations in tests
* Bump .nvmrc and .node-version in the Node.js upgrade recipes
* Match process types without the global prefix
* Replace the source-map-support partial-mapping warning with an edit

## October 6, 2026

#### recipes-go - 0.12.0

* Adapt to changes in 0.0.39

## October 5, 2026

#### rewrite-migrate-python - 0.15.1

* Keep an argument's own braces and quotes out of the f-string field
* Only remove a dict overwrite the function provably keeps to itself
* Set the f-string conversion through with_conversion
* Add a CodeQuality composite for the Python code quality fixes

## October 2, 2026

#### recipes-javascript - 0.2.1

* Get rid of immer
* EcmaScript 6 modernization recipe

#### rewrite-devcenter - 1.33.3

* EcmaScript 6 modernization; DevCenter for JS/TS

## October 1, 2026

#### recipes-go - 0.11.3

* Stop stale go.sum versions bypassing the prune

## September 30, 2026

#### recipes-go - 0.11.2

* Fix handling the malformed indirect comments in go.mod next to proper ones

#### rewrite-devcenter - 1.33.2

* Adapt to new GoResolutionResult() constructor arg
* Make DevCenter cards cheaper to evaluate
* Count lines without printing the LST

## September 29, 2026

#### rewrite-java-security - 3.42.2

* Add preconditions and cheaper scans to broad security recipes
* Adapt to new GoResolutionResult() constructor arg
* Limit FindSecretsVisitor to String literals
* Avoid re-running path traversal fixes for every nested block
* Gate SecureSnakeYamlConstructor on SnakeYAML constructors
* InsecureSpringServiceExporter null-safety for XML root
* Add FindPubliclyWritableTempDirectory (Sonar S5443)

#### rewrite-program-analysis - 0.18.0

* Stop exponential re-walks in taint analysis
* Key taint facts by variable identity and seed units with only the fields they read

## September 28, 2026

#### recipes-go - 0.11.1

* Stop over-adding indirect requires below Go 1.17

#### recipes-go - 0.11.0

* rewrite-go/v0.0.38 + add FindPartiallyResolvedGoMod search recipe

## September 27, 2026

#### rewrite-devcenter - 1.33.1

* Count go.mod and go.sum lines in-process

#### rewrite-java-security - 3.42.1

* Drop Sonatype snapshots settings.xml from CLI smoke test
* Limit CsrfProtection to Java compilation units

## September 25, 2026

#### recipes-go - 0.10.2

* Remove Develocity configuration for retired ge.openrewrite.org
* RemoveUnusedGoModRequires keeps build-constraint-gated direct requires
* RemoveUnusedGoModRequires keeps every resolved build-list module.

#### recipes-go - 0.10.1

* AddMissingGoDirective recipe as part of GoModTidy
* Fix GoModTidy over-adding pruned indirect requires
* RemoveUnusedGoModRequires now drops self-references
* Scope go.mod indirect-marker import scan per module
* AddMissingGoModRequires to maintain a separate indirect block of requ…

## September 23, 2026

#### recipes-csharp - 0.8.0

* Report the full transitive dependency graph in ListDependencies

#### recipes-go - 0.10.0

* Migrate unmaintained and end-of-life Go libraries

#### recipes-javascript - 0.2.0

* retire  workflow

#### recipes-kotlin - 0.5.1

* Updated repository to use OpenRewrite version v8.92.8

#### recipes-scala - 0.6.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-ai - 0.5.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-android - 0.19.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-angular - 1.13.0

* Drop the empty array slot when adding the APP_ID provider
* Tag hand-built variable initializers with their JLeftPadded kind
* Build a well-formed providers array when replacing HttpClientModule

#### rewrite-circleci - 3.13.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-compiled-analysis - 0.16.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-concourse - 3.12.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-cryptography - 0.16.2

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-devcenter - 1.33.0

* Fix the Go version upgrade test against the new GoResolutionResult constructor
* Refresh Apache Maven parent POM versions
* Refresh Apache Maven parent POM versions

#### rewrite-dotnet - 0.18.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-dropwizard - 0.8.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-elastic - 0.9.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-hibernate - 0.29.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-jasperreports - 0.7.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-java-application-server - 0.10.2

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-java-security - 3.42.0

* Reintroduce "C#: rebuild DependencyVulnerabilityCheck on the MSBuildProject attestation marker"
* Add OWASP A10:2025 Mishandling of Exceptional Conditions coverage
* Advertise additional RSPEC tags on six existing security recipes
* Add FindInvalidJdbcIndex (Sonar S2695)
* Add FindDoubleCheckedLocking (Sonar S2168)
* Export Code Genome Project credentials to advisories workflow
* Fix Golang's DVC test against the new GoResolutionResult constructor
* Extend FindGenericSecrets and advertise RSPEC-S6418 on FindSecrets
* Add FindAnonymousLdapBind (Sonar S4433)
* Add OwaspA07 (2021) composite
* Add FindWeakTlsProtocol (Sonar S4423)
* Wire FindWeakTlsProtocol into OwaspA02 and OwaspA07
* Fix CVE reference in tests

#### rewrite-kafka - 0.8.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-kubernetes - 3.19.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-mainframe - 3.2.0

* Keep DB2 and COBOL lexer errors off the console

#### rewrite-migrate-kotlin - 0.9.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-migrate-python - 0.15.0

* Fix Annotated metadata test for import removal
* Raise the openrewrite floor to 8.92.2 and drop the quoted-body rename
* Restore the quoted-annotation rename openrewrite 8.92.3 makes reachable
* Gate the Pydantic recipes behind import preconditions

#### rewrite-nodejs - 0.51.0

* Add migrations for seven Node.js libraries

#### rewrite-nullability - 0.7.0

* OpenRewrite recipe best practices

#### rewrite-prethink - 0.15.0

* Report the verbs, paths and models Python sources actually declare
* Read error handling patterns from the LST instead of printed source

#### rewrite-program-analysis - 0.17.0

* Advertise CWE-90 and RSPEC-S2078 tags on FindLdapInjection

#### rewrite-react - 0.7.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-reactive-streams - 0.21.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-spring - 0.43.0

* Add FindSpringApplicationInDefaultPackage recipe (RSPEC-S4602)
* Add Spring Cloud Azure upgrade recipes for Boot 3.5 and Boot 4.0
* Add FindSessionAttributesWithoutSetComplete (Sonar S3753)
* Pass Code Genome credentials to property migration workflows
* [Auto] Spring Boot property migration recipes as of 2026-09-21T0755
* Order licenseFormatMain after recipeCsvGenerate
* Fix MigrateServiceBusJmsCustomizerParameterTest after import ordering change

#### rewrite-sql - 2.19.0

* Depend on upstream jsqlparser again

#### rewrite-struts - 0.30.0

* Call moderneinc/gh-automation for repository backups

#### rewrite-tapestry - 0.7.1

* Updated repository to use OpenRewrite version v8.92.8

#### rewrite-terraform - 3.15.1

* Updated repository to use OpenRewrite version v8.92.8

## September 22, 2026

#### recipes-go - 0.9.0

* rewrite-go/v0.0.37 and GoModTidy acting only on resolution=Resolved

## September 14, 2026

#### recipes-go - 0.8.0

* rewrite-go v0.0.36

## September 12, 2026

#### rewrite-sql - 2.18.0

* Pair SQL verbs with their clause keywords in linear scans
* Decide SQL from the leading word rather than any verb in the text
* Invoke only the getters that can lead to another AST node
* Parse on a shared pool and follow jsqlparser 5.4's AST types

## September 10, 2026

#### recipes-go - 0.7.1

* rewrite-go/v0.0.35

## September 9, 2026

#### recipes-csharp - 0.7.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### recipes-go - 0.7.0

* Guard against side effects in all_branches_identical
* rewrite-go/v0.0.33
* Read the doc comment from the first line of its block
* Resolve org.openrewrite build plugins from the Code Genome Project

#### recipes-javascript - 0.1.2

* Updated repository to use OpenRewrite version v8.92.1

#### recipes-javascript - v0.1.1

* Resolve org.openrewrite build plugins from the Code Genome Project
* Rewrite the no-globals findings whose module can be named, and make each deprecated-API fix its own recipe
* Pass CODEGENOME credentials to the npm-publish pack step
* Let the engine parenthesize inverted boolean checks, and drop the double-negation rule
* Find every place a SAPUI5 or OpenUI5 version is declared

#### recipes-kotlin - 0.5.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### recipes-scala - 0.6.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-ai - 0.5.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-android - 0.19.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-angular - 1.12.0

* Pass Code Genome Project credentials to the npm-publish pack step

#### rewrite-angular - 1.11.0

* Pin rewrite to ^8.91.1 and move the suite to vitest without isolation
* Resolve org.openrewrite build plugins from the Code Genome Project
* Bump @openrewrite/rewrite from 8.91.1 to 8.91.4 in /recipes-angular
* Adding empty modifiers
* Use CodeGenome in CLI smoke test

#### rewrite-circleci - 3.13.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-compiled-analysis - 0.16.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-concourse - 3.12.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-cryptography - 0.16.1

* Updated repository to use OpenRewrite version v8.92.1

#### rewrite-cryptography - 0.16.0

* Join the cipher and PQC inventories into one data table
* Resolve TLS values handed across a wrapper boundary
* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-devcenter - 1.32.1

* Updated repository to use OpenRewrite version v8.92.1

#### rewrite-devcenter - 1.32.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-dotnet - 0.18.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-dropwizard - 0.8.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-elastic - 0.9.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-hibernate - 0.29.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-jasperreports - 0.7.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-java-application-server - 0.10.1

* Updated repository to use OpenRewrite version v8.92.1

#### rewrite-java-application-server - 0.10.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-java-security - 3.41.0

OpenRewrite 8.92.1

#### rewrite-java-security - 3.40.0

* Do not template a JMS guard call into a class body
* Resolve org.openrewrite build plugins from the Code Genome Project
* Fix Golang's DVC tests to name other 3rd party package
* Use CodeGenome in CLI smoke test
* Add FindThreadSleepInSynchronized (Sonar S2276)
* Add OWASP A09:2025 Security Logging and Alerting Failures coverage

#### rewrite-kafka - 0.8.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-kubernetes - 3.19.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-mainframe - 3.1.2

* Updated repository to use OpenRewrite version v8.92.1

#### rewrite-mainframe - 3.1.1

* Resolve the OpenRewrite build plugins from the Code Genome Project

#### rewrite-migrate-kotlin - 0.9.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-migrate-python - 0.14.0

* Add a skill for authoring Python recipes
* Audit the recipes against the authoring skill, and the skill against the recipes
* Expect the typing import to go when only a kwarg name spells it
* Rename the typing alias inside a subscripted string annotation
* Recognize PEP 695 type parameters and class bases as type positions
* Decline a multi-argument `Optional` in both node shapes

#### rewrite-nodejs - 0.50.0

* Pass Code Genome Project credentials to the npm-publish pack step

#### rewrite-nodejs - 0.49.0

* Add spaces around {} in test expectations for tls-server-set-options
* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-nullability - 0.6.0

* Exclude libraryModelJars from the dependency check

#### rewrite-prethink - 0.14.1

* Updated repository to use OpenRewrite version v8.92.1

#### rewrite-prethink - 0.14.0

* Resolve Go packages without third-party type attribution
* Resolve org.openrewrite build plugins from the Code Genome Project
* Match narrowed RubyIsoVisitor return types in Ruby quality recipes
* Match Django views by the names attribution actually gives them

#### rewrite-program-analysis - 0.16.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-react - 0.7.0

* Re-export React recipes so they can be imported by name
* Use Map lookups to stop recipes matching Object.prototype members
* Pin rewrite to ^8.91.1 and move the suite to vitest
* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-reactive-streams - 0.21.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-spring - 0.42.0

* Resolve org.openrewrite build plugins from the Code Genome Project
* Migrate `NoResourceFoundException` two-arg constructor to three-arg form

#### rewrite-sql - 2.17.0

* Resolve org.openrewrite build plugins from the Code Genome Project
* Guard against unbounded input reaching the SQL parser

#### rewrite-struts - 0.29.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-tapestry - 0.7.0

* Resolve org.openrewrite build plugins from the Code Genome Project

#### rewrite-terraform - 3.15.0

* Resolve org.openrewrite build plugins from the Code Genome Project

## September 4, 2026

#### rewrite-migrate-python - 0.13.2

* Don't interpolate string literals into generated f-strings
* Correct FindMethodsTest expectations to the Python type model
* Decide typing-import removal by parsing forward references, not searching prose
* Migrate typing annotations inside `if TYPE_CHECKING:` blocks
* Resolve org.openrewrite build plugins from the Code Genome Project
* Guard f-string conversions the migration target cannot parse
* Re-indent lifted blocks recursively in the collapsible-if recipes
* Keep each lifted statement's padding in AllBranchesIdentical
* Resolve UTC through the file's own datetime imports
* Restrict RemoveSelfAssignment to plain local names
* Resolve LangChain community imports per symbol, not per submodule
* Restrict the PEP 585 builtin-alias recipes to annotations
* Splice whole lines when RemoveUnconditionalValueOverwrite drops a write
* Resolve removed-API calls through the file's own imports
* Keep f-string and await replacements in the statement slot they replace
* Delete the workarounds 8.91.5 makes redundant, and stop shadowing an added import

## August 31, 2026

#### recipes-javascript - v0.1.0

* Move the recipe packages to 8.91.2, and put recipes-ui5 on its AMD primitives
* Implement eslint-plugin-import-x's autofixable rules as OpenRewrite recipes

#### recipes-javascript - v0.0.1

* Add GitHub Actions workflows
* Increase test timeout to 60s to fix flaky CI
* Add writing-openrewrite-recipes-js skill as repo-level skill
* Add JavaScript code quality infrastructure and 10 recipes
* Migrate npm publishing to Trusted Publishing (OIDC)
* Migrate test suites from Jest to Vitest
* Document type attribution model and failure modes in JS recipe skill
* Remove the failing receive-pr/comment-pr automation
* feat: add date-fns and Moment.js to Temporal API migration recipes
* docs: add root README
* actions/checkout@v7
* Install JestToVitest fixture dependencies with npm ci
* Forward Code Genome Project credentials to GHA workflows
* Publish the recipe packages to the Code Genome Project, and fix the PR guard
* Implement the UI5 linter's rules as OpenRewrite recipes
* Pin the recipe packages to 8.91.1 and take what it lets us delete
* Implement ESLint's autofixable core rules as OpenRewrite recipes

## August 28, 2026

#### rewrite-mainframe - 3.0.0

Renamed to `rewrite-mainframe` to reflect the expanding language support beyond COBOL.

## August 26, 2026

#### recipes-csharp - 0.6.0

* Mirror the NuGet packages to the Code Genome Project

#### recipes-go - 0.6.2

* Updated repository to use OpenRewrite version v8.91.0

#### recipes-kotlin - 0.4.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation
* Bump Kotlin to 2.4.10 to match rewrite-kotlin's compiler plugin

#### recipes-scala - 0.5.0

* Name the marketplace categories instead of capitalizing packages
* Drop the redundant `recipes` package segment

#### rewrite-ai - 0.4.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-android - 0.18.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-angular - 1.10.0

* Add UpgradeToAngular22 recipe
* Bump @openrewrite/rewrite from 8.88.2 to 8.88.4 in /recipes-angular
* Bump @openrewrite/rewrite from 8.88.4 to 8.90.0 in /recipes-angular
* Always publish snapshots
* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation
* Set moduleResolution to bundler in tsconfig files for Angular 21
* Bump @openrewrite/rewrite from 8.90.0 to 8.90.1 in /recipes-angular
* Avoid redundant traversal in JsonVisitor recipes

#### rewrite-circleci - 3.12.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-compiled-analysis - 0.15.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-concourse - 3.11.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-cryptography - 0.15.0

* Remove rewrite-analysis dependency from build.gradle.kts
* Apply the dependency-check plugin at the root project
* Expect the taint-tracking recipes to settle on the first cycle

#### rewrite-devcenter - 1.31.4

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-dotnet - 0.17.4

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-dropwizard - 0.7.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-elastic - 0.8.4

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-hibernate - 0.28.0

* Drop the nexusPublishing block

#### rewrite-jasperreports - 0.6.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-java-application-server - 0.9.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-java-application-server - 0.9.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-java-security - 3.39.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-java-security - 3.39.0

* Let the CLI smoke test resolve snapshots from the Code Genome Project

#### rewrite-kafka - 0.7.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-kubernetes - 3.18.0

* Fix latent defects across recipes: silent manifest corruption, crashes, and false positives
* Preserve PodDisruptionBudget selector semantics across the policy/v1 move
* Stop publishing to Maven Central
* Structured output, cross-file analysis, and the Sylva migration recipes
* Migrate Ingress and HorizontalPodAutoscaler bodies, not just their versions
* Fix the blockers found by review and by running the recipes against customer repositories
* Right-size the recipe descriptions, and split the Cluster API core migration per kind
* Extend the das-schiff to Sylva migration: mirrors, export-range classification, and static drift
* Write Das Schiff as the proper noun it is
* OpenRewrite recipe best practices

#### rewrite-mainframe - 2.24.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation
* Record every BIND on a card, and delete the dead markers package
* Read the DB2 DDL a program's columns come from

#### rewrite-migrate-kotlin - 0.8.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-migrate-python - 0.13.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-nodejs - v0.48.2

* Adapt util type-checking recipe to template parenthesizing in @openrewrite/rewrite 8.91.0

#### rewrite-nodejs - 0.48.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-nullability - 0.5.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-nullability - 0.5.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-prethink - 0.13.1

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-prethink - 0.13.0

* Add Ruby/Rails support across the prethink recipe set
* Stop two polyglot prethink recipes from failing on non-Java sources
* Fix NPE in Go prethink recipes on grouped type declarations
* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation
* Detect Go security configuration and stop two Go recipes duplicating every row

#### rewrite-program-analysis - 0.15.0

* Stop building a source cursor over a null tree

#### rewrite-program-analysis - 0.14.2

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-program-analysis - 0.14.1

* Share interprocedural taint-analysis state across a compilation unit

#### rewrite-react - 0.6.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-reactive-streams - 0.20.6

* Updated repository to use OpenRewrite version v8.91.0

#### rewrite-spring - 0.41.0

* Stop pinning the latest Spring Cloud patch in release-tracking tests
* Drop the nexusPublishing block

#### rewrite-sql - 2.16.0

* Support data-modifying Common Table Expression (CTE) bodies in SqlDetector

#### rewrite-struts - 0.28.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-tapestry - 0.6.0

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation

#### rewrite-terraform - 3.14.8

* Updated repository to use OpenRewrite version v8.91.0

## August 25, 2026

#### recipes-go - 0.6.1

* Bump to rewrite-go/v0.0.29
* Add encoding/json/v2 mechanical migration recipes
* Add AddV1FormatTags recipe to preserve v1 JSON encoding via field tags
* Describe the `Go` category so it reads the same in every install order
* Add `AdoptTestify` recipe
* Register 18 recipes that were declared but missing from the catalog
* Register the last four recipes and qualify the Ensure* family by type
* Map recipes to the diagnostics their analyzers define
* Rewrite what three reporting recipes only reported
* Revive TestParseRealRepos and run it over all 252 recipes
* Give PreferMakeForEmptyMap the rewrite its description promised
* Adapt the type-assertion recipes to `Go.TypeAssertion`
* Re-attribute the calls hand-built recipes emit
* rewrite-go/v0.0.31
* Use MaybeAddImport in UseStringsBuilderInLoop
* Keep `main`, `init`, and exported functions in RemoveEmptyFunction
* Defer the body close where the response is known to be non-nil
* Skip receiver rename when the short name is already bound
* Drop the cross-file flag in UseErrorsNewForSimpleErrors
* Keep the conversion that types a qualified untyped constant
* Read `resource == nil` guards when placing an inserted cleanup
* Take indentation only when copying a statement's prefix
* Declare each error sentinel once per package
* Build rewritten nodes from templates instead of hand-attribution

#### rewrite-java-security - 3.38.2

* Add FindJdbcEmptyPassword (Sonar S2115)
* Add FindWaitNotifyOnThread (Sonar S2236)
* Remove duplicate org.openrewrite.golang category descriptor
* Add OWASP LLM01 prompt-injection recipes

#### rewrite-program-analysis - 0.14.0

* Match taint sinks by id, and stop retaining cursors in the accumulator

## August 21, 2026

#### rewrite-migrate-python - 0.13.0

* Mirror the PyPI wheel to the Code Genome Project
* Decide typing-alias shadowing by scope instead of `field_type`
* FindSuspiciousChainedComparison recipe

## August 19, 2026

#### rewrite-spring - v0.40.1

* Remove dead post-rename webmvc starter triggers superseded by OSS coverage
* Name the categories the marketplace was guessing
* Regenerate recipes.csv so the new category descriptions land
* Read servlet web server factory settings through `getSettings()`
* Migrate CookieLocaleResolver cookie name and max age for Spring Framework 7
* Remove `@Bean` methods for modules built into Jackson 3
* Gate `-test` starters on test usage, and add them before relocations
* Stop Spring Boot 4 silently re-enabling excluded auto-configuration

## August 18, 2026

#### rewrite-hibernate - v0.27.0

* Name the Hibernate version categories in the marketplace
* Change `Hibernate6Module` types alongside the `jackson-datatype-hibernate7` dependency

## August 17, 2026

#### rewrite-devcenter - 1.31.1

Pick up latest rewrite-java-security.

#### rewrite-java-security - 3.38.1

* Fix ConcurrentModificationException in an initializer block

#### rewrite-java-security - 3.38.0

* Fix FindSensitiveApiEndpoints not working on record types
* Classify Go recipes as go, not golang
* Migrate off the end-of-life rewrite-analysis

#### rewrite-mainframe - 2.22.0

* Fix three COBOL parse gaps: EXEC DLI, EXIT paragraphs, and RD PAGE
* Stop PICTURE strings from consuming the entry that follows them
* Parse four more constructs found in real CICS and IMS COBOL
* Stop silently skipping a COPY REPLACING rule, and refuse partial words
* Model JCL statements in the LST, and stop losing statements to column 73
* Give every COBOL node an identity of its own

#### rewrite-program-analysis - 0.13.9

* Fix external model lookups and add path-injection sink models

## August 12, 2026

#### recipes-csharp - v0.5.0

* WPF code quality: port all 82 WpfAnalyzers diagnostics as OpenRewrite C# recipes
* Detect TODO comments outside declaration prefixes in FindFixTodoComment
* Drop explicit io.moderne:jsonrpc dependency so release publishing verification passes

#### recipes-go - 0.6.0

* Adding two Audit recipes
* Add encoding/json/v2 migration usage finder recipe
* Fix AvoidChannelLenCheck false match on non-channel len() calls
* AvoidDotImport: re-qualify references instead of leaving them dangling
* Guard code-quality recipes against emitting invalid Go
* Drop explicit io.moderne:jsonrpc dependency

#### recipes-kotlin - 0.3.0

* Update release automation

#### recipes-scala - 0.4.0

* Update release automation

#### rewrite-ai - 0.4.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-android - 0.18.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-angular - 1.9.0

* Export the UpgradeToAngularNCodeChanges recipes from the package entry point
* Dump the SourcesFileErrors data table when the smoke test fails
* Don't misfire the standalone and AOT migrations on Angular 19+ projects
* Bump jest from 30.3.0 to 30.4.2 in /recipes-angular
* Bump @openrewrite/rewrite from 8.87.7 to 8.88.2 in /recipes-angular

#### rewrite-circleci - 3.12.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-compiled-analysis - 0.15.0

* Fix one-pass supertype walk in VerifyCompilation
* Make JavaTypeClassWriterTest insensitive to member order
* Report compile verification failures in a data table
* Document that `VerifyCompilation` only verifies same-run changes
* Report parse failures and preserve missing type diagnostics in VerifyCompilation

#### rewrite-concourse - 3.11.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-cryptography - 0.14.12

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-devcenter - 1.31.0

* Provide a usage example for the Groovy `upgradeRecipe` option

#### rewrite-dotnet - 0.17.3

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-dropwizard - 0.6.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-elastic - 0.8.3

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-hibernate - 0.26.4

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-jasperreports - 0.6.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-java-application-server - 0.8.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-java-security - 3.37.0

* Align CI and publish workflows with other OpenRewrite recipe modules
* Derive EOL status from eolFrom relative to asOf in node and C# recipes
* OpenRewrite recipe best practices
* Provide a usage example for the `addMarkers` options
* Update minorTransitiveUpgrade expectations for new micrometer advisories

#### rewrite-kafka - 0.7.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-kubernetes - 3.17.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-mainframe - v2.21.1

* Move CI and publishing onto the openrewrite gh-automation workflows

#### rewrite-mainframe - 2.21.0

* Pass Code Genome Project artifact credentials to the shared workflows

#### rewrite-migrate-kotlin - 0.7.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-migrate-python - 0.12.0

* Forward Code Genome Project secrets to the CI and publish workflows
* Complete PEP 585 coverage and fix typing/collections migration corner cases

#### rewrite-nodejs - 0.48.0

* Track upstream's native lock file regeneration

#### rewrite-nullability - 0.4.0

* ci: use gh-automation reusable workflows and forward Code Genome Project secrets
* fix: depend on released rewrite-program-analysis so the publish build passes

#### rewrite-prethink - 0.12.0

* Refine the Node context recipes and exclude tooling configs from dependency usage
* Inventory SQL usage, attributed to the class and method that issues it
* Exclude tooling configs from Go dependency usage
* Report Go test gaps
* Name every architecture row at the producer
* Warm the npx cache before the JavaScript tests spawn the RPC
* Fix publish: resolve rewrite-prethink through rewriteVersion instead of latest.integration
* Run the Go integration tests as their own parallel CI job
* Re-enable FindGoTypeMetricsIntegTest
* Drop the type validation suppressions from the Go integration tests
* Inventory Go structs as data assets
* Detect Go background work in the scheduled tasks context
* Derive Go module roots from the go.mod's source path
* Standardize assertion detection across test-quality checks
* Point the CLAUDE.md DuckDB examples at artifacts we still emit
* Ignore Kotlin incremental compilation caches

#### rewrite-program-analysis - 0.13.8

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-react - 0.5.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-reactive-streams - 0.20.5

* Updated repository to use OpenRewrite version v8.89.0

#### rewrite-spring - 0.40.0

* Resolve compiler and javadoc warnings in MigrateAwspringSqsMessageConverter
* OpenRewrite recipe best practices
* Broaden `MigrateJackson2ObjectMapperBuilder` — imperative form and cross-method producers
* Make `ReplaceMockitoBeanWithBeanMethod` Kotlin-aware

#### rewrite-sql - 2.15.0

* Guard against a null TRIM operand in SqlDetector

#### rewrite-struts - 0.27.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-tapestry - 0.5.0

* Forward Code Genome Project secrets to the CI and publish workflows

#### rewrite-terraform - 3.14.7

* Updated repository to use OpenRewrite version v8.89.0

## August 10, 2026

#### rewrite-cryptography - v0.14.11

* agilesec: cipher inventory recipes for Keyfactor AgileSec
* agilesec: exact source offsets and Keyfactor AgileSec category
* pqc: post-quantum TLS readiness recipes
* pqc: align discovery tables with AgileSec schema and inventory cipher suites

## August 7, 2026

#### rewrite-prethink - 0.11.3

* Scan ExtractDependencyUsage once per source set, across all four JVM languages
* Export SQL anti-patterns as a SQL quality context
* Populate library usage, import conventions and logging framework for JS/TS
* Fix the Go scanning recipes: cursor misuse, scan-order dependence, and a dead go.mod match

#### rewrite-sql - 2.14.2

* Add a `markSource` option for analysis-only SQL search runs
* Promote `ConcatenatedSql` out of `internal` into the trait package
* Pair each SQL verb with its clause in the prefilter
* Detect SQL in `FindSql` through the `SqlStatement` trait
* Record the line each SQL anti-pattern finding begins on
* Record joined tables, derived sources and DDL in `DatabaseColumnsUsed`
* Parse each SQL statement once rather than once per anti-pattern rule
* Read a `NOT` around a constant predicate as the negation it is
* Count source lines, not values, when locating SQL
* Write a rewritten literal back in the shape it was written in
* Detect SQL in interpolated and template strings, for reading only
* OpenRewrite recipe best practices

## August 5, 2026

#### rewrite-spring - v0.39.1

* Move Spring WS 4.0 recipes to the io.moderne package
* Use KotlinTemplate for RestTemplate constructor migration on Kotlin
* Make RestTemplate to RestClient migration Kotlin-aware
* Make subpackage recursion explicit in the Hazelcast session package rename
* Make subpackage recursion explicit in three Boot 4 relocations

## August 4, 2026

#### rewrite-angular - v1.8.0

* Forward CGP artifact repository credentials in CI and publish workflows
* Bump @openrewrite/rewrite from 8.84.9 to 8.87.7 in /recipes-angular
* Bump js-yaml from 3.14.2 to 3.15.0 in /recipes-angular
* Bump @babel/core from 7.28.5 to 7.29.7 in /recipes-angular
* Bump brace-expansion in /recipes-angular
* Use the correct @angular-devkit version scheme per package

#### rewrite-prethink - 0.11.2

* Forward CGP artifact repository credentials to CI and publish workflows
* Forward Code Genome Project secrets to the CI and publish workflows
* Key scanning accumulators by member signature instead of JavaType

## July 30, 2026

#### rewrite-react - v0.4.1

* Fix UpgradeDependencyVersion against rewrite 8.88.0

## July 29, 2026

#### recipes-csharp - 0.4.0

* Use structured CsDocComment LST for doc-comment code-quality recipes
* Add ConvertPackagesConfigToPackageReference recipe

#### recipes-kotlin - 0.2.0

* Drop type validation suppressions enabled by rewrite 8.88.0-SNAPSHOT
* Drop / narrow the remaining type validation suppressions

#### recipes-scala - 0.3.1

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-ai - 0.4.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-android - 0.18.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-angular - 1.7.0

* Bump ts-jest from 29.4.11 to 29.4.12 in /recipes-angular

#### rewrite-circleci - 3.12.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-compiled-analysis - 0.14.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-concourse - 3.11.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-cryptography - 0.14.10

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-devcenter - 1.30.0

* Bound contributing developers to the last 90 days

#### rewrite-dotnet - 0.17.2

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-dropwizard - 0.5.6

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-elastic - 0.8.2

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-hibernate - 0.26.3

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-jasperreports - 0.6.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-java-application-server - 0.7.9

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-java-security - 3.36.0

* Update dependency vulnerability test expectations for CVE-2026-54515
* Wire six unreferenced security recipes into their composites
* Add Owasp2025A08 to reach the software and data integrity recipes
* Governance-aware Maven dependency vulnerability remediation

#### rewrite-kafka - 0.7.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-kubernetes - 3.17.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-mainframe - 2.20.3

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-migrate-kotlin - 0.6.3

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-migrate-python - 0.11.0

* Reflect native lock regeneration in UpgradePythonVersion docs

#### rewrite-nodejs - 0.47.3

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-nullability - 0.3.1

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-prethink - 0.11.1

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-program-analysis - 0.13.7

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-react - 0.4.0

* Bump react packages in UpgradeToReact16/17/18/19 composites

#### rewrite-reactive-streams - 0.20.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-spring - 0.39.0

* Migrate @AutoConfigureWireMock to wiremock-spring-boot
* Relocate `web.embedded.netty` types to `reactor.netty` for Spring Boot 4.0
* Narrow autoconfigure.web relocations to classes that actually moved in Spring Boot 4
* Add Kotlin `@Retryable` regression tests for wildcard-typed template parameters
* Unbreak main: call getVisitor() on ListenableToCompletableFuture in MigrateListenableFuture
* Remove SB4 post-rename modular starter triggers superseded by OSS additions
* Update gRPC YAML expectation for corrected ChangePropertyKey indentation

#### rewrite-sql - 2.14.1

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-struts - 0.26.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-tapestry - 0.4.4

* Updated repository to use OpenRewrite version v8.88.0

#### rewrite-terraform - 3.14.6

* Updated repository to use OpenRewrite version v8.88.0

## July 28, 2026

#### rewrite-program-analysis - 0.13.6

* Skip taint analysis for compilation units that cannot produce a flow

## July 23, 2026

#### rewrite-devcenter - 1.28.2

* Show CD/LoC counts on the Vulnerabilities DevCenter
* Show CD/LoC counts on all remaining DevCenters
* Count lines of code in-process without printing the LST
* Fix broken DevCenter documentation link

#### rewrite-prethink - v0.11.0

* Detect Redisson pub/sub producers and consumers
* Recognize `kotlin.test.Test` annotation in test gap analysis
* Recognize JUnit 5 meta test annotations in test gap analysis
* Describe parameterized-test coverage assertion via AssertJ .as()
* Recognize spec-style test frameworks (Kotest, Spek) in test gap analysis
* Make StructuralFingerprintVisitor and MinHashLsh public

## July 22, 2026

#### rewrite-devcenter - 1.28.1

* Keep a single UpgradesAndMigrations row per card by flushing on recipe completion

## July 20, 2026

#### rewrite-migrate-python - v0.10.1

- OpenRewrite v8.87.4:

#### rewrite-nodejs - v0.47.2

* Only npm-publish from default branch or release tag, never from PR runs
* Replace bun with node in build scripts to fix npm-publish
* Change increase-node-engine default to a hard cutover / raise minimum (alt to #109, #110)

## July 17, 2026

#### rewrite-java-security - 3.35.2

* Fix NPE in FindInsecureTlsConfig

#### rewrite-java-security - 3.35.1

* Derive EOL status from eolFrom relative to asOf date
* Go security recipes

## July 16, 2026

#### recipes-go - 0.5.3

* Upgrade rewrite-go to 0.0.28

#### recipes-go - 0.5.2

* Upgrade rewrite-go to 0.0.27

#### rewrite-migrate-python - v0.10.0

* Update CloudFormation, .whitesource, and COPY --from images in Python upgrades
* Attach lock-regeneration failure warning to the lock file too
* Migrate avro-python3 to avro; inline 3.13-incompatible dependency bumps
* Use ChangeType for the typing.* PEP 585 type renames
* Simplify UpgradePythonDockerImage using the unified DockerImageReference trait

#### rewrite-prethink - v0.10.0

* Delete retired AI-format context files in the Prethink starter
* Mark Spring-specific detector descriptions per non-Spring framework audit
* Detect classic .NET Framework HTTP endpoints (Web API 2/MVC 5, WCF, Web Forms)
* Add a Python dependency report to the shared dependency-list-report

## July 14, 2026

#### recipes-csharp - 0.3.0

* Add README modeled on sibling moderneinc recipes repos
* Remove FindWebApiCompatShim recipe
* Adapt to the new dimensionsAfterName constructor in MethodDeclaration
* Exclude J.Empty in UseReadOnlyAutoProperty
* Add UsesType/UsesMethod preconditions to .NET migration recipes
* Make 15 .NET migration recipes type-safe (#89)
* Extract shared csproj/XML recipes into Core project
* Migrate ASP.NET Core logging recipes to transforms; fix RPC desyncs
* Add SLN-to-SLNX converter and pack the recipe solution as a whole
* Make .NET 10 search recipes type-safe; stop upgrading netstandard TFMs
* Fully-qualify System.Threading.Lock and bump Polly to avoid downgrade
* Add .NET Framework 4.x retargeting recipes (4.0 through 4.8.1)
* Add .NET Framework legacy-tech search recipes and dependency SBOM

#### recipes-go - 0.5.1

* Upgrade rewrite-go to 0.0.26

#### recipes-go - 0.5.0

* Add more Go upgrade versions fixed recipes
* Bump to rewrite-go v0.0.19
* Upgrade to rewrite-go/v0.0.23
* go tidy composite recipe
* Upgrade rewrite-go to 0.0.25

#### recipes-kotlin - 0.1.4

* Updated repository to use OpenRewrite version v8.87.0

#### recipes-scala - 0.3.0

* Favicon for Scala
* Add SimplifyOptionMatch recipe

#### rewrite-ai - 0.4.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-android - 0.18.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-angular - 1.6.0

* actions/checkout@v7
* Upgrade official GitHub Actions to their latest versions

#### rewrite-circleci - 3.12.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-compiled-analysis - 0.14.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-concourse - 3.11.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-cryptography - 0.14.9

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-devcenter - 1.28.0

* Add Go version upgrade card

#### rewrite-dotnet - 0.17.1

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-dropwizard - 0.5.4

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-elastic - 0.8.1

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-hibernate - 0.26.2

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-jasperreports - 0.6.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-java-application-server - 0.7.8

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-java-security - 3.35.0

* Respect maximumUpgradeDelta when advisories reference unpublished versions
* Recognize Gradle dependencies blocks that lack type attribution
* Go: support nested modules in DependencyVulnerabilityCheck
* Go: fix DependencyVulnerabilityCheck never to downgrade
* feat: Integrate End of Life detection recipes from rewrite-end-of-life
* Single-source vulnerability target selection
* Regenerate recipes.csv picking up new edited-dependency columns
* Go: DependencyVulnerabilityCheck not to alter go.sum, if no changes t…
* Update logback-core CVE expectations for new advisory

#### rewrite-kafka - 0.7.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-kubernetes - 3.17.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-mainframe - 2.20.2

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-migrate-kotlin - 0.6.2

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-migrate-python - 0.9.4

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-nodejs - 0.47.1

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-nullability - 0.3.0

* docs: NullSafety adoption book for Treehouse
* fix: add dataTables column to recipes.csv so tables resolve in the SaaS UI

#### rewrite-prethink - 0.9.0

* Add duplicate-code and similar-code detection recipes
* Richer Type-3 clone detection: gapped (insert/delete) alignment + tandem-repeat suppression
* Marry duplicate + similar detection: anchor-free method alignment, shared MinHash/LSH
* Fix star-alignment region-shrink and groupKey clone collapse
* Suppress string-literal-concatenation blobs as Type-2 clone false positives
* Support specifying multiple target agent config files
* Rename the Prethink starter and route both legacy recipe ids to it
* Detect JAX-RS/Jakarta EE ExceptionMapper handlers (#2760)
* Add Python gRPC servicer detection for parity with Java, Go, and .NET
* Document and test JAX-RS/Jakarta EE endpoint security detection
* Detect raw kafka-clients, AWS SQS, Redis pub/sub, and EJB messaging
* Detect ScheduledExecutorService and ManagedScheduledExecutorService scheduled tasks
* Capture Django URL paths and resolve Flask/FastAPI route prefixes
* Fix new UpdatePrethinkContext() call

#### rewrite-program-analysis - 0.13.5

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-react - 0.3.4

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-reactive-streams - 0.20.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-spring - 0.38.0

* Use constructor injection for StoredProcedureItemReader (Spring Batch 6)
* Guard withHttpClientDefaults recipe behind a Spring Boot &lt;4.1 precondition
* Co-exclude `UserDetailsServiceAutoConfiguration` when `SecurityAutoConfiguration` is excluded (#2663)
* Migrate RestTemplate to RestClient (incl. setter-based bean configuration)
* Use `KotlinTemplate` for `@Retryable` migration on Kotlin sources
* Fix MigrateSpringRetryRecoverToRetryTemplate wiping method bodies when `@Retryable(value = {X.class})` uses array-initializer syntax
* Run the SecurityAutoConfiguration co-exclude before the Boot 4 relocation (#2664)
* Modularize legacy spring-session-data-redis and raw spring-data-redis under SB4
* Remove `@ExpectedToFail` from now-passing Kotlin `@Retryable` migration tests
* Replace removed `RedisCacheConfiguration.getTtl()` in Spring Data Redis 4.0
* Add SB4 boot-jdbc and boot-hibernate namespace triggers to AddModularStarters
* Convert `GatewayRedisAutoConfiguration` `exclude` to `excludeName` before SCG 5.0 upgrade

#### rewrite-sql - 2.14.0

* Guard against null Function names from table functions
* Fix SQL anti-pattern false positives (concatenation + non-SQL DELETE) and add INSERT-without-columns recipe
* Tighten non-SQL DELETE detection and add INSERT-without-columns recipe
* Detect and inventory stored procedure calls (EXEC/EXECUTE/CALL)
* Add limit-without-order-by and constant-predicate SQL anti-pattern recipes
* Add surgical auto-remediations for null-comparison and order-by-in-subquery anti-patterns

#### rewrite-struts - 0.26.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-tapestry - 0.4.3

* Updated repository to use OpenRewrite version v8.87.0

#### rewrite-terraform - 3.14.5

* Updated repository to use OpenRewrite version v8.87.0

## July 8, 2026

#### rewrite-java-security - 3.34.3

* Fix DependnecyVulnerabilityCheck not considering maven settings set via execution context
* Report disclosed-but-unpatched CVEs in the vulnerability report
* Add DependencyVulnerabilityCheck for Go

#### rewrite-sql - 2.13.0

* Add SQL performance anti-pattern recipes

## July 7, 2026

#### rewrite-mainframe - 2.20.1

* Read and tokenize JCL .prm members once by path, not per source

## July 6, 2026

#### rewrite-migrate-python - v0.9.3

* Upgrade Python project files and Dockerfiles during version upgrades

## July 1, 2026

#### recipes-kotlin - 0.1.3

* Updated repository to use OpenRewrite version v8.86.0

#### recipes-scala - 0.2.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-ai - 0.4.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-android - 0.18.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-angular - 1.5.0

* actions/upload-artifact@v7

#### rewrite-circleci - 3.12.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-compiled-analysis - 0.14.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-concourse - 3.11.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.4

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-devcenter - 1.27.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-devcenter - 1.27.0

* Add upgradeRecipe call to action to language DevCenters

#### rewrite-dotnet - 0.17.0

* Add recipe to migrate .NET install URLs from retiring Azure CDN domains

#### rewrite-dropwizard - 0.5.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-elastic - 0.8.0

* Fix ClassCastException from upstream Preconditions wrapping (rewrite#8133)
* Default `MigrateToElasticsearch9` to rest5-client transport

#### rewrite-hibernate - 0.26.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-hibernate - 0.26.0

* Skip AddCascadePersistToIdMappedAssociations when inverse side already covers PERSIST

#### rewrite-jasperreports - 0.6.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-application-server - 0.7.4

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-security - 3.34.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-security - 3.34.0

* Add OWASP Top Ten 2025 top-level recipe
* Add FindInsecureCipherMode and tag FindRsaWithoutOaep with RSPEC-S5542
* Extend FindWeakCryptoAlgorithm with NullCipher, tag RSPEC-S5547
* Fix FindBasicAuthSecrets false positive on "basic authentication" prose
* Extend Spring PasswordEncoder coverage for RSPEC-S5344
* Add RSPEC-S* tags to CWE-tagged security recipes
* handling fix versions not being available yet in DependencyVulnerabilityCheck

#### rewrite-kafka - 0.7.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-kubernetes - 3.17.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-mainframe - 2.20.0

* Stop exposing the ANTLR4 codegen tool as a runtime dependency
* Expand external SYSIN/SYSTSIN .prm members into the JCL LST

#### rewrite-migrate-kotlin - 0.6.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-migrate-python - 0.9.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-nodejs - 0.47.0

* Remove duplicate `UpgradeDependencyVersion` and `DependencyInsight` recipes; use core

#### rewrite-nullability - 0.2.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-nullability - 0.2.0

* Report-free NullAway-parity recipe (PrepareAndFixNullAway), now scaling to large estates
* Nullability recipe coverage
* Name recipes by end state, not the problem
* docs: add a "Repairing the residual" README section with examples
* perf(flow): dirtiness-sentinel flow cache + dead-guard reorder + flow diagnostics
* perf: disk-backed NullabilityIndex, cross-file scan indexing, and @NullMarked template cache

#### rewrite-prethink - 0.8.0

* Emit sourcePath in the EndpointSecurity data table
* Remove the AI-based Prethink recipe and the langchain4j dependency
* Expect two cycles for the ExportContext + mermaid pipeline
* Support C#/.NET in the quality and test-gap recipes
* Handle C# catch clauses without an exception variable

#### rewrite-program-analysis - 0.13.3

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-react - 0.3.3

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-reactive-streams - 0.20.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-spring - 0.37.0

* Migrate standalone Spring gRPC 1.0 to Spring Boot 4.1 (Spring gRPC 1.1)

#### rewrite-spring - 0.36.0

* Add explicit version for spring-retry no longer managed by Spring Boot 4.0
* Register a UrlHandlerFilter to preserve trailing-slash matching in the Spring Boot 4 migration
* Flag deprecated `ChunkListener` callbacks for manual Spring Batch 6 migration
* Add `@EnableJdbcJobRepository` alongside `@EnableBatchProcessing` for Spring Batch 6
* Fix `MigrateSpringRetryToSpringFramework7` ClassCastException on `@Retryable` with non-literal `maxAttempts`
* Pin UpgradeTaskExecutorJobLauncherTest fixtures to versions in the type table
* Strip literal versions on modular starters in imported-BOM multi-module Maven projects
* Decrement maxAttemptsExpression numeric literals; TODO otherwise
* Add Spring Kafka 4.1 migration recipes
* Migrate spring-retry `@Retryable` + `@Recover` to SF7 programmatic `RetryTemplate`
* Add `@ProjectedPayload` to web projection interfaces for Spring Data 2026.0
* Upgrade jOOQ modules to Java 21 during Spring Boot 4.0 migration
* Replicate OSS JobRunr starter migration in inlined Spring Boot 4.0 recipe
* Clean up orphaned spring-retry version pin after SB4 migration

#### rewrite-sql - 2.12.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-struts - 0.26.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-tapestry - 0.4.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-terraform - 3.14.4

* Updated repository to use OpenRewrite version v8.86.0

## June 30, 2026

#### rewrite-program-analysis - 0.13.2

* perf(dataflow): lazy PathCondition variable index + memoized isFeasible (apex edit 649.8s→81.4s)
* perf(dataflow): faster path-sensitive null analysis (lazy index, fixpoint hashing, structural tree equality)

## June 25, 2026

#### rewrite-program-analysis - 0.13.1

* perf(dataflow): converge path-sensitive loops instead of churning to the iteration cap

## June 24, 2026

#### recipes-go - 0.4.1

* Rename migration recipe ids
* rewrite-go/v0.0.18

## June 23, 2026

#### rewrite-migrate-python - v0.9.1

* Gate UpgradeToPython module/import recipes on uses_import for perf

#### rewrite-program-analysis - v0.13.0

* Regenerate recipes.csv
* Add ParameterizeRawCollection recipe
* Collapse path-sensitive facts by base fact to avoid 2^k explosion

## June 18, 2026

#### rewrite-nullability - 0.1.0

* Extend rewrite-nullability for NullAway/JSpecify adoption (validated 606→7 on moderne-saas)
* Recipe quality fixes: type-use @Nullable, program-analysis null-guard, attributed annotations, static-import requireNonNull
* Add GitHub Actions

## June 17, 2026

#### recipes-kotlin - 0.1.2

* Updated repository to use OpenRewrite version v8.85.0

#### recipes-scala - 0.2.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-ai - 0.4.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-android - 0.18.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-angular - 1.4.0

* Print out logs in CI in case of failure
* OpenRewrite 8.84.1
* MSG_MINIMAL in Slack notifications
* Bump @openrewrite/rewrite from 8.84.1 to 8.84.9 in /recipes-angular
* Migrate npm publishing to Trusted Publishing (OIDC)

#### rewrite-circleci - 3.12.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-compiled-analysis - 0.14.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-concourse - 3.11.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-cryptography - 0.14.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-devcenter - 1.26.0

* Target Spring Boot 4.1 in starter DevCenter

#### rewrite-dotnet - 0.16.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-dropwizard - 0.5.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-dropwizard - 0.5.0

* Add MigrateMultiPartBundle recipe

#### rewrite-elastic - 0.7.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-hibernate - 0.25.0

* Fix NPE in ReplaceSessionLockRequest on implicit lambda parameters

#### rewrite-jasperreports - 0.6.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-java-application-server - 0.7.3

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-java-security - 3.33.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-java-security - 3.33.0

* Reduce overreporting of vulnerabilities.
* Add FixXssVulnerability composite — Java + JSP + Thymeleaf (CWE-79)
* Support kotlin in FindMissingSpringAuthorization
* Drop stale workarounds fixed upstream; re-enable lambda tests
* Align path-traversal recipes with renamed `path-injection` sink kind
* Extend FindPredictableSalt: variable tracking, length check, RSPEC-S2053 tag
* Add FindInstanceMethodStaticFieldWrite (Sonar S2696)
* Extend FindHardcodedIv: variable tracking + RSPEC-S3329 tag
* Extend FindInadequateKeySize, add UpgradeInadequateKeySize, tag RSPEC-S4426
* Add FindBeanPropertyAssignment (Sonar S4512)
* Unpin nimbus-jose-jwt dependency

#### rewrite-kafka - 0.7.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-kubernetes - 3.17.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-mainframe - 2.19.0

* Recognize .dcl (DCLGEN) files as copybooks for EXEC SQL INCLUDE
* Increase default Cobol parser timeout to 10 minutes

#### rewrite-migrate-kotlin - 0.6.0

* Modernize the kotlinOptions Gradle DSL block to compilerOptions

#### rewrite-migrate-python - 0.9.0

* Add Pydantic migration recipes; make type-aware recipes precise via type_utils
* Remove unused typing import when migrating Optional/Union to PEP 604
* Expand Pydantic migration recipes to cover 2.10–2.14

#### rewrite-nodejs - 0.46.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-prethink - 0.7.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-program-analysis - 0.12.9

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-react - 0.3.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-reactive-streams - 0.20.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-spring - 0.35.0

* Rename Jackson2ObjectMapperBuilder.mixIn to addMixIn in SB4 relocations
* Tighten UpgradeSpringBoot_4_1 test assertion now that 4.1.0 GA shipped
* Update tests for Spring Cloud 2025.1.2 release
* Pin UpgradeAwspringCloud_4_0 dependency bump to 4.0.0
* fix(boot4): preserve spring-retry when migrating to Spring Boot 4
* Fix incorrect catch-all ChangePackage for actuate.autoconfigure.endpoint.web
* Drop NullableSpringWebParameters from default Spring Boot 4 pipeline
* Fix Spring Boot 4.0 TestEntityManager relocation and add spring-boot-webtestclient dependency
* Point TaskExecutorJobLauncher at TaskExecutorJobOperator (Spring Batch 6)
* Use constructor injection for `DaoAuthenticationProvider` in Spring Security 7
* Rename Jackson2ExecutionContextStringSerializer for Spring Batch 6

#### rewrite-sql - 2.12.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-struts - 0.26.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-tapestry - 0.4.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-terraform - 3.14.3

* Updated repository to use OpenRewrite version v8.85.0

## June 15, 2026

#### rewrite-prethink - 0.7.1

* Detect CORS when the Express app is typed as express.Application
* Install matching openrewrite pip version for Python tests
* FindExpressEndpoints: match both express.* and express-serve-static-core.* receiver types
* Detect Python BDD step definitions (behave, pytest-bdd, lettuce)
* Upgrade to langchain4j:1.16.3

## June 11, 2026

#### recipes-go - 0.4.0

* rewrite-go/v0.0.17
* Flatten the project structure

## June 10, 2026

#### recipes-go - 0.3.2

* Upgrade to rewrite-go/v0.0.15
* Use preconditions for the go version recipes

## June 9, 2026

#### recipes-go - 0.3.1

* Fix wrong types in recipes
* `UseAtomicTypes` -&gt; `FindDeprecatedAtomicFunctions`
* Make the Go update recipes not visit the .go source files
* Upgrade to 0.0.11, handle golang.Return multi-return
* Fix PreferRegexpMustCompile to handle a different arity of regexp.Mus…
* Adapt to rewrite-go changes in 0.0.12
* Fix `AvoidHardcodedCredentials` recipe to add missing import
* Fix recipes to remove unused imports
* Upgrade rewrite-go to 0.0.14

## June 5, 2026

#### rewrite-nodejs - 0.46.1

* OpenRewrite 8.84.1

## June 3, 2026

#### recipes-kotlin - 0.1.1

* Updated repository to use OpenRewrite version v8.84.0

#### recipes-scala - 0.2.0

* Add UpgradeSbtVersion recipe

#### rewrite-ai - 0.4.0

* Regenerate recipes.csv

#### rewrite-android - 0.18.0

* Regenerate recipes.csv

#### rewrite-angular - 1.3.1

* Save all log files from CLI

#### rewrite-angular - 1.3.0

* Bump ts-jest from 29.4.9 to 29.4.11 in /recipes-angular
* Bump tmp from 0.2.5 to 0.2.7 in /recipes-angular
* Upgrading to OpenRewrite 8.84.0

#### rewrite-circleci - 3.12.0

* Regenerate recipes.csv

#### rewrite-compiled-analysis - 0.14.0

* Regenerate recipes.csv

#### rewrite-concourse - 3.11.0

* Regenerate recipes.csv

#### rewrite-cryptography - 0.14.0

* Update rewriteVersion handling in build.gradle.kts

#### rewrite-devcenter - 1.25.0

* Regenerate recipes.csv
* OpenRewrite recipe best practices
* Add example recipe IDs to upgradeRecipe options on version-upgrade cards

#### rewrite-dotnet - 0.16.0

* Regenerate recipes.csv

#### rewrite-dropwizard - 0.4.0

* Regenerate recipes.csv
* Resolve latest Dropwizard 5.x BOM at test runtime

#### rewrite-elastic - 0.7.0

* Regenerate recipes.csv

#### rewrite-hibernate - 0.24.0

* Drop redundant Hibernate 6.6.x dependency upgrade
* Regenerate recipes.csv

#### rewrite-jasperreports - 0.6.0

* Regenerate recipes.csv

#### rewrite-java-application-server - 0.7.1

* Updated repository to use OpenRewrite version v8.84.0

#### rewrite-java-security - 3.32.0

* Add FixPermissiveTrustManager (CWE-295)
* Clarify Java DependencyVulnerabilityCheck display name
* Add FixPermissiveHostnameVerifier (CWE-295)
* Add FindMissingAuthorization (CWE-862)
* Add FixCommandInjectionLiteral (CWE-78)
* Add FixSqlInjectionConcat recipe (CWE-89)
* Close SSRF guard bypasses in FixCwe918 (IPv4-mapped, ULA, NAT64, multi-record DNS)
* Add FixInsecureJmsDeserialization (CWE-502)
* Regenerate recipes.csv
* Exclude Jackson 2.22.0 in DependencyVulnerabilityCheckMavenTest
* Fix FixCwe338 replacing every method invocation in the file

#### rewrite-kafka - 0.7.0

* Regenerate recipes.csv

#### rewrite-kubernetes - 3.17.0

* Regenerate recipes.csv

#### rewrite-mainframe - 2.18.0

* Regenerate recipes.csv

#### rewrite-migrate-kotlin - 0.5.0

* Regenerate recipes.csv
* Fix scheduled CI: rewrite enumValues&lt;T&gt;() via dedicated KotlinVisitor

#### rewrite-migrate-python - 0.8.0

* Regenerate recipes.csv

#### rewrite-nodejs - 0.46.0

* Port dependency-vulnerability-check from TypeScript to Java
* OpenRewrite recipe best practices

#### rewrite-prethink - 0.7.0

* Regenerate recipes.csv
* Don't resolve jackson test deps to partial snapshots via 2.+
* Correct JS/TS receiver type FQNs in Node architecture recipes

#### rewrite-program-analysis - 0.12.7

* Updated repository to use OpenRewrite version v8.84.0

#### rewrite-react - 0.3.1

* Updated repository to use OpenRewrite version v8.84.0

#### rewrite-reactive-streams - 0.20.0

* Regenerate recipes.csv

#### rewrite-spring - 0.34.0

* Consolidate calls into Moderne Spring Framework 7 and Hibernate 7.2 wrappers
* Regenerate recipes.csv
* Rewrite Kotlin property assignments broken by Spring Boot 4 `@NullMarked`
* Add `UseRfc6265CookieProcessor` recipe for Tomcat cookie processor migration
* Migrate `setResource(Resource)` to `setResource(WritableResource)` for Spring Batch 5
* Add MigrateChannelInterceptorAdapter for Spring Framework 5.0
* Migrate Spring Cloud AWS (awspring) to 4.0 during Spring Boot 4 upgrade
* Migrate AbstractClientHttpResponse to ClientHttpResponse
* Fill 3.x → 6.0 gap in Spring Framework migration chain
* Correct kotlin methodMatcher
* Fix JsonMapperBuilderCustomizer package in Spring Boot 4.0 relocations

#### rewrite-sql - 2.12.0

* Regenerate recipes.csv

#### rewrite-struts - 0.26.0

* Regenerate recipes.csv

#### rewrite-tapestry - 0.4.0

* Regenerate recipes.csv

#### rewrite-terraform - 3.14.2

* Updated repository to use OpenRewrite version v8.84.0

## June 2, 2026

#### recipes-go - 0.3.0

* Update README
* Add markers to test expectations (after)
* Adapt to the java/golang package split
* Upgrade rewrite-go to 0.0.5
* Update to rewrite-go/v0.0.7
* rewrite-go/v0.0.8, fix audit_recover
* Fix `SimplifyIfReturnBool`
* Add missing test for `SimplifySliceRange`
* Add missing imports to prefer errors recipes
* Fix recipes to add missing imports
* Fix tests with invalid code in the before section
* Add the ChangeGoVersion and UpgradeGoTo126 recipes

## June 1, 2026

#### rewrite-program-analysis - 0.12.6

* Thread flow taint types through TaintAnalysis.findSinkParameterIndex
* Populate TaintFlow.sinkParameterIndex from the builder site
* Regenerate recipes.csv
* Add FixXssVulnerabilityJava (CWE-79)

## May 25, 2026

#### rewrite-terraform - 3.14.1

* Clarify AddResourceNestedBlock block option is multiline

## May 22, 2026

#### rewrite-devcenter - v1.24.1

* Fix DependencyVulnerabilityCheck per-tree Accumulator leak on root cursor
* Avoid duplicate UpgradesAndMigrations rows per repo and card

## May 21, 2026

#### recipes-csharp - 0.2.0

* Improve .NET 10 upgrade recipes
* Adapt recipes to SDK changes: CompilationUnit fields, NullSafe relocation
* Migrate `[CollectionDefinition]` and `ICollectionFixture&lt;T&gt;` for xUnit→TUnit
* Add MaybeAutoFormat to MemberDataToMethodDataSource
* Fix TUnit migration gaps found during Terminal.Gui migration
* Adapt recipes to CompilationUnit.Usings type change and fix false positives
* Fix MigrateFromXUnit formatting, compile errors, and add assertion rules
* Fix CodeQuality recipes that break compilation or change behavior
* Fix recipe errors found by running CodeQuality against real repos
* TUnit: Handle `Assert.Equal` generic, tolerance, and precision overloads
* Fix CI: use upstream RpcFixture and XmlDocComment type
* Fix build errors: use SDK types and fix Gradle classpath task
* Add 6 cross-language code quality recipes
* Add crypto factory recipe, char escaping, and SDK recipe registrations
* Net3+ Startup migrations, conditional NuGet adds, Swashbuckle TFM gate, njsproj cleanup
* Adding preconditions to ThrowIf* recipes
* Add UsesType preconditions to Find* recipes
* Replace imperative recipe registration with [Category] attributes
* Add .NET Framework 4.8 SDK migration recipes; batch csproj reattestation

#### recipes-go - 0.2.0

* Relicense the repository under the Moderne Proprietary license

#### recipes-kotlin - v0.1.0

* Initial release

#### recipes-scala - v0.1.0

* Initial release

#### rewrite-ai - 0.3.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-android - 0.17.1

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-angular - 1.2.0

* Use type-safe getDataTableRows overload in tests
* actions/setup-java v5

#### rewrite-circleci - 3.11.0

* Use rewriteRecipe.rewriteVersion convention

#### rewrite-compiled-analysis - 0.13.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-concourse - 3.10.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-cryptography - 0.13.6

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-devcenter - 1.24.0

* Add BucketedMetricCard for data-table-driven DevCenter cards
* Fix DevCenterTest compile error from invalid type witness
* Update dependencies to use rewriteVersion
* Force opennlp-tools 2.5.9 to fix critical CVEs
* Add DevCenter card for Angular version tracking
* Kotlin Devcenter

#### rewrite-dotnet - 0.15.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-dropwizard - 0.3.0

* Replace DropwizardAppExtension call sites with Spring Boot injected fields
* Route Maven through Moderne Artifactory cache to avoid HTTP 429
* Fix RemoveSuperTypeByTypeTest expected output for @Override removal
* Revert inline Maven mirror (now in gh-automation#95)

#### rewrite-elastic - 0.6.5

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-hibernate - 0.23.0

* Stop migrating EntityManager to Session in Hibernate 7 pipeline
* Preserve executeUpdate() chain when migrating createNativeQuery
* Migrate hypersistence-utils dependency in Hibernate 7.0 / 7.1 recipes

#### rewrite-jasperreports - 0.5.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-java-application-server - 0.7.0

* Regenerate recipes.csv
* Fix integration test coordinate parsing for module-suffixed SNAPSHOT jars
* Force opennlp-tools 2.5.9 to fix critical CVEs
* Replace template README boilerplate with real project description

#### rewrite-java-security - 3.31.0

* Fix compilation broken by best-practices recipe
* Fix CookieSetSecure / CookieSetHttpOnly crash on non-local cookies
* Use $rewriteVersion for rewrite-program-analysis

#### rewrite-kafka - 0.6.0

* Comment out `zookeeper.*` broker properties in Kafka 4.0 migration
* Migrate Kafka 4.0 DescribeTopicsResult.values() to topicNameValues()

#### rewrite-kubernetes - 3.16.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-mainframe - 2.17.5

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-migrate-kotlin - 0.4.0

* Replace template README with project-specific content

#### rewrite-migrate-python - 0.7.3

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-nodejs - 0.45.1

* Publish to NPM directly

#### rewrite-nodejs - 0.45.0

* Lower-case values by default for minimumSeverity in FFVD
* Wrap editor() in Preconditions.check on 16 deprecation recipes

#### rewrite-prethink - 0.6.0

* Regenerated recipes.csv to update incorrect recipe paths for CLI
* Add Tier 1 .NET CALM recipes
* Expand .NET prethink coverage with 20 new recipes
* OpenRewrite recipe best practices

#### rewrite-program-analysis - 0.12.5

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-react - 0.3.0

* Fix compilation broken by best-practices recipe

#### rewrite-reactive-streams - 0.19.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-spring - 0.33.0

* Route Maven through Moderne Artifactory cache to avoid HTTP 429
* Migrate `@AutoConfigureMockMvc` HtmlUnit attributes to nested `@HtmlUnit`
* Add Spring Boot 4.1 layertools + devtools livereload recipes (#318 phase 3)
* Add Spring Boot 4.1 behavioural API recipes (#318 phase 4)
* Make cloud/boot property migration resilient to per-version failures
* Relocate `web.{servlet,reactive}.error` packages for Spring Boot 4
* Revert inline Maven mirror (now in gh-automation#95)
* Migrate `@EnableRetry` to `@EnableResilientMethods`
* Comment out DevTools LiveReload properties instead of deleting
* Flag `@Recover` and unmigratable `@Retryable` in SB4 retry migration
* Fix bare Kotlin @Retryable crash in Spring Retry migration
* Avoid pinning BOM-managed Spring Boot starter versions in 4.0/4.1 migration
* Migrate `AntPathRequestMatcher` in Kotlin sources for Spring Security 7
* Keep `spring-boot-starter` as SB4 minimal baseline
* Match relocated SB4 `KafkaProperties` in `RemoveKafkaPropertiesSslBundlesParameter`
* Fix `HttpHeaders` SB4 rewrite when type appears only via method chaining
* Flag Kotlin SecurityContext.authentication usages with a TODO
* Migrate `JsonFactoryDecorator` to `TokenStreamFactoryBuilderDecorator`

#### rewrite-sql - 2.11.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-struts - 0.25.9

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-tapestry - 0.3.3

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-terraform - 3.14.0

* Add recipes to add and change Terraform resource nested blocks

## May 19, 2026

#### recipes-go - 0.1.2

* Add activate function at the root

#### recipes-go - 0.1.1

* Rename module to recipes-code-quality

#### recipes-go - 0.1.0

First release.

## May 12, 2026

#### rewrite-devcenter - 1.23.0

* Add `DevCenter.getSpec()` returning a versioned JSON description
* Fix DevCenter cards silently emitting zero rows

#### rewrite-java-security - v3.30.1

* Use OpenRewrite v8.81.15

#### rewrite-java-security - 3.30.0

* Fix NPE in FindTextDirectionChanges on JS/TSX sources
* C#: Add support for maximumUpgradeDelta in FFVD
* Add FindBasicAuthSecrets recipe
* Add FindBearerTokenSecrets recipe
* Expose vulnerabilities(Accumulator) for direct row access
* Route tests through the Maven settings mirror

#### rewrite-prethink - v0.5.11

* Add Scala test coverage for quality-metrics recipes
* Detect cucumber-jvm step definitions as test methods

#### rewrite-react - 0.2.10

* Fix dist paths

#### rewrite-react - 0.2.9

* Set up NPMJS publishing

## May 10, 2026

#### rewrite-migrate-python - 0.7.2

* Wrap `Replace{Array}{Tostring,Fromstring}` editors in `Preconditions.check`
* Wrap multi-name Find* recipes in Preconditions.or_ + uses_method/uses_type

## May 7, 2026

#### rewrite-ai - v0.3.3

* OpenRewrite v8.81.6

#### rewrite-android - v0.17.0

* OpenRewrite v8.81.6
* Add AGP 8.8–9.2 and Android SDK 36 migration bundles
* Add RemoveBuildToolsVersion recipe (#21)
* Add recipes to rename `aaptOptions` and `lintOptions` DSL blocks

#### rewrite-angular - v1.1.5

* OpenRewrite v8.81.6
* Add PrimeNG 18 migration recipes

#### rewrite-circleci - v3.10.3

* OpenRewrite v8.81.6

#### rewrite-compiled-analysis - v0.13.3

* OpenRewrite v8.81.6

#### rewrite-concourse - v3.10.3

* OpenRewrite v8.81.6

#### rewrite-cryptography - v0.13.5

* Regenerate recipes.csv

#### rewrite-devcenter - v1.22.4

* OpenRewrite v8.81.6
* Fix EPSS measure labels for consistency
* Rename EPSSMeasure.NotFound label to "No vulnerability scores"
* Refresh Apache Maven parent POM versions
* Fix DataTableRowWatcher to work under CsvDataTableStore

#### rewrite-dotnet - v0.15.3

* OpenRewrite v8.81.6

#### rewrite-dropwizard - v0.2.3

* OpenRewrite v8.81.6
* Add @SpringBootTest for DropwizardAppExtension; fix RemoveVariablesByPackage scope check

#### rewrite-elastic - v0.6.4

* OpenRewrite v8.81.6

#### rewrite-hibernate - v0.22.2

* Extend `MigrateJdbcTypeToJdbcTypeCode` to handle legacy `@Type(X.class)`

#### rewrite-jasperreports - v0.5.3

* OpenRewrite v8.81.6

#### rewrite-java-security - v3.29.4

* OpenRewrite v8.81.6
* Update SsrfGuardInsertion reference to FixCwe918
* Move "Last updated" timestamp out of recipe instance name
* Adopt new rewrite-python lock regeneration API
* Use default Gradle Tooling API version in tests

#### rewrite-kafka - v0.5.4

* OpenRewrite v8.81.6

#### rewrite-kubernetes - v3.16.3

* OpenRewrite v8.81.6

#### rewrite-migrate-kotlin - v0.3.1

* OpenRewrite v8.81.6

#### rewrite-migrate-python - v0.7.1

* OpenRewrite v8.81.6

#### rewrite-nodejs - v0.44.1

* OpenRewrite v8.81.6
* Bump uuid and jest-junit in /recipes-nodejs
* Remove Java recipe of `DependencyVulnerabilityCheck`

#### rewrite-prethink - v0.5.10

* Fix `FindCodeSmells` NPE on Kotlin Gradle scripts
* Force opennlp-tools to 2.5.9 (CVE-2026-42027/-40682/-42440)
* Add Go language support across prethink
* Add API Contracts context for OpenAPI 3.0.3 + contract-test generation

#### rewrite-prethink - v0.5.9

* OpenRewrite v8.81.6
* Sort feature envy rows for stable code-smells.csv output
* Aggregate and sort dependency-usage rows for stable CSV output
* Remove old POC artifacts, stale results, and unused gstack skills
* Skip Gradle build scripts to keep Prethink CSV output stable (#49)

#### rewrite-program-analysis - v0.12.4

* OpenRewrite v8.81.6
* Add FindInsecureCryptoComparison taint recipe for CWE-208

#### rewrite-react - v0.2.8

* OpenRewrite v8.81.6

#### rewrite-reactive-streams - v0.19.3

* OpenRewrite v8.81.6

#### rewrite-spring - v0.32.2

* OpenRewrite v8.81.6
* OpenRewrite recipe best practices
* Strip Kotlin nullability from Spring HTTP entity type arguments

#### rewrite-sql - v2.11.3

* OpenRewrite v8.81.6
* Add Snowflake SQL support via dedicated parser layer

#### rewrite-struts - v0.25.8

* OpenRewrite v8.81.6

#### rewrite-tapestry - v0.3.2

* OpenRewrite v8.81.6

#### rewrite-terraform - v3.13.8

* OpenRewrite v8.81.6

## May 6, 2026

#### rewrite-mainframe - v2.17.4

- OpenRewrite v8.81.6

## April 28, 2026

#### rewrite-cryptography - 0.13.4

* Add recipes.csv for marketplace listing

#### rewrite-spring - v0.32.1

* Correct Boot 4 metrics package relocations
* Scaffold Spring Boot 4.1 migration recipe
* Spring Boot 4.1 modular starter migration (#318 phase 5)

## April 27, 2026

#### rewrite-ai - 0.3.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-android - 0.16.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-angular - 1.1.4

* Do not add `standalone:false` when there are imports
* Bump @openrewrite/rewrite from 8.78.3 to 8.80.1 in /recipes-angular

#### rewrite-angular - 1.1.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-circleci - 3.10.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-compiled-analysis - 0.13.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-concourse - 3.10.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-cryptography - 0.13.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-devcenter - 1.22.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-dotnet - 0.15.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-dropwizard - 0.2.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-elastic - 0.6.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-hibernate - 0.22.1

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-jasperreports - 0.5.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-java-application-server - 0.6.0

* Add JBoss-to-Tomcat migration recipes
* Cancel Gradle build before closing ProjectConnection in integration tests

#### rewrite-java-security - 3.29.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-kafka - 0.5.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-kubernetes - 3.16.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-mainframe - 2.17.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-migrate-kotlin - 0.3.0

* Pin bouncycastle 1.84 in kotlinBouncyCastleConfiguration

#### rewrite-migrate-python - 0.7.0

* Transform sys.last_type and sys.last_traceback

#### rewrite-nodejs - 0.44.0

* Re-generate recipes.csv
* Bump yaml from 2.8.2 to 2.8.3 in /recipes-nodejs
* Bump handlebars from 4.7.8 to 4.7.9 in /recipes-nodejs
* Bump picomatch from 2.3.1 to 2.3.2 in /recipes-nodejs
* Adding project icon

#### rewrite-prethink - 0.5.8

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-program-analysis - 0.12.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-react - 0.2.7

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-reactive-streams - 0.19.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-spring - 0.32.0

* Inline the org.openrewrite spring boot migrations.

#### rewrite-sql - 2.11.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-struts - 0.25.7

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-tapestry - 0.3.1

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-terraform - 3.13.7

* Updated repository to use OpenRewrite version v8.81.0

## April 23, 2026

#### rewrite-java-security - 3.29.2

* Add OWASP A07:2025 Identification and Authentication Failures aggregator

#### rewrite-spring - 0.31.1

* Fix `spring-jms` classpath lookup in `AddDynamicDestinationResolverToJmsTemplate`
* Replace `@MockitoBean` with `@Bean` methods in `@Configuration` classes

## April 21, 2026

#### rewrite-ai - 0.3.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-android - 0.16.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-angular - 1.1.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-circleci - 3.10.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-compiled-analysis - 0.13.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-concourse - 3.10.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-cryptography - 0.13.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-devcenter - 1.22.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-dotnet - 0.15.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-dropwizard - 0.2.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-elastic - 0.6.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-hibernate - 0.22.0

* Migrate removed Hibernate 6 UUID `@Type` to `@JdbcTypeCode`

#### rewrite-jasperreports - 0.5.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-java-security - 3.29.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-java-security - 3.29.0

* Fix requirementsTxtAddMarkers test expectation
* Update expected tomcat-embed-core version in tests
* OpenRewrite recipe best practices
* Update springBootBomPreventsTransitiveFix expectations for 2026-04-20 advisories

#### rewrite-kafka - 0.5.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-kubernetes - 3.16.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-mainframe - 2.17.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-migrate-kotlin - 0.2.0

* Normalize Kotlin built-in FQNs in ReplaceKotlinMethod patterns

#### rewrite-migrate-python - 0.6.0

* Add Python code quality infrastructure and 10 recipes
* Convert search-only Python upgrade recipes to transforming recipes

#### rewrite-nodejs - 0.43.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-prethink - 0.5.7

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-program-analysis - 0.12.2

* Track taint in instance field initializers, not only static

#### rewrite-program-analysis - 0.12.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-react - 0.2.6

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-reactive-streams - 0.19.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-spring - 0.31.0

* Skip primitive-typed parameters in NullableSpringWebParameters
* Add recipe to replace `@Controller` + `@ResponseBody` with `@RestController`

#### rewrite-sql - 2.11.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-struts - 0.25.6

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-tapestry - 0.3.0

* Fix expected Tapestry version 5.9.0 → 5.9.1

#### rewrite-terraform - 3.13.6

* Updated repository to use OpenRewrite version v8.80.0

## April 20, 2026

#### rewrite-angular - 1.1.1

* Don't upgrade angular-build separately

## April 16, 2026

#### rewrite-hibernate - 0.21.1

* Add `@Query` to `@NativeQuery` migration and enum parameter search

#### rewrite-spring - 0.30.2

* Skip Kotlin sources in NullableSpringWebParameters
* Bumps OSS `rewrite-spring` to 6.29.2 and `rewrite-hibernate` to 0.21.1

## April 11, 2026

#### rewrite-devcenter - 1.22.0

* Expose UpgradesAndMigrations.GROUP as a public constant

## April 9, 2026

#### rewrite-java-security - 3.28.1

* Add overrideTransitive option to Python dep check
* Added options

#### rewrite-nodejs - 0.43.0

* Add ability to provide extra supplementalVulnerabilities

#### rewrite-spring - 0.30.1

* Bumped rewrite-jackson to `1.21.1`

## April 8, 2026

#### rewrite-ai - 0.3.0

* Update Prethink context

#### rewrite-android - 0.16.0

* Update Prethink context

#### rewrite-angular - 1.1.0

* Bump @openrewrite/rewrite from 8.78.2 to 8.78.3 in /recipes-angular
* Bump ts-jest from 29.4.6 to 29.4.9 in /recipes-angular
* Update Prethink context

#### rewrite-circleci - 3.10.0

* Update Prethink context

#### rewrite-compiled-analysis - 0.13.0

* Update Prethink context

#### rewrite-concourse - 3.10.0

* Update Prethink context

#### rewrite-cryptography - 0.13.0

* Update Prethink context

#### rewrite-devcenter - 1.21.0

* OpenRewrite recipe best practices

#### rewrite-dotnet - 0.15.0

* Update Prethink context

#### rewrite-dropwizard - 0.2.0

* Add Spring starters when removing Dropwizard modules
* Migrate DataSourceFactory to Spring DataSource configuration
* Migrate MetricRegistry to Micrometer MeterRegistry
* Replace Jackson.newObjectMapper() with standard ObjectMapper
* Fix RemoveUnnecessaryOverride annotation removal crash

#### rewrite-elastic - 0.6.0

* Fix compilation errors from uncast TreeVisitor.visit() returns
* Update Prethink context

#### rewrite-hibernate - 0.21.0

* Fix compilation error and test OOM on main
* Add recipe to migrate Hibernate Criteria API to JPA Criteria API
* Update Prethink context
* Add SQLQuery to NativeQuery migration and JPQL trunc() to cast() recipe

#### rewrite-jasperreports - 0.5.0

* Update Prethink context

#### rewrite-java-application-server - 0.5.0

* Add 30-minute timeout to CI build job
* Add timeouts to integration tests to prevent CI hangs
* Fix CI: add Jetty type tables for generated source file parsing
* Fix Jetty Gradle integration test CI timeout by reusing connection

#### rewrite-java-security - 3.28.0

* Remove uv availability check from tests
* Add OWASP A05:2025 Injection recipe
* Use loose version assertions for tomcat-embed-core tests
* Update test for new jackson-core advisory GHSA-2m67-wjpj-xhg9
* Update Prethink context
* FFVD: Add requirements.txt support for Python vulnerability checking

#### rewrite-kafka - 0.5.0

* Update Prethink context

#### rewrite-kubernetes - 3.16.0

* Fix limitContainerCapabilities test for MergeYaml indentation change
* Update Prethink context
* Fix JsonPathMatcher.matches() incompatibility with rewrite 8.79.0

#### rewrite-mainframe - 2.17.1

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-migrate-kotlin - 0.1.4

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-migrate-python - 0.5.0

* Fix NPE on `validate()` of `FindMethods`

#### rewrite-nodejs - 0.42.0

* Update Prethink context

#### rewrite-prethink - 0.5.6

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-program-analysis - 0.12.0

* Create FindUnclosedResources recipe for SonarQube S2095
* Add FindLogInjection recipe for S5145 — Log Injection
* Add rspec-S2095 tag to FindUnclosedResources recipe
* Add FindArrayIndexInjection taint-tracking recipe for CWE-129
* Expand taint sources for FindArrayIndexInjection
* Add FindJndiInjection taint-tracking recipe for CWE-99
* Add FindUnsafeReflectionInjection taint-tracking recipe for CWE-470
* Add FindProcessControlInjection taint-tracking recipe for CWE-114
* Improve TrackDataLineage recipe description

#### rewrite-react - 0.2.5

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-reactive-streams - 0.19.0

* Update Prethink context

#### rewrite-spring - 0.30.0

* Preserve comments when folding setters into builder
* OpenRewrite recipe best practices
* Fix failing Gradle upgrade cycle assertions
* Fix IllegalArgumentException in JaxRsToSpringWeb for explicit value attributes
* Add acceptTransitive to Boot 4 and Security 7 migration recipes
* Fix NPE and IOOBE in `FieldToConstructorInjection.addConstructors()`
* Sync Gradle ext properties with Spring Boot BOM during upgrades

#### rewrite-sql - 2.11.0

* Add INSERT INTO statement detection to FindSql
* Update Prethink context

#### rewrite-struts - 0.25.5

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-tapestry - 0.2.5

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-terraform - 3.13.5

* Updated repository to use OpenRewrite version v8.79.0

## April 7, 2026

#### rewrite-prethink - v0.5.5

* Fix failing to read rows with cells larger than 4096 characters.

## April 6, 2026

#### rewrite-prethink - 0.5.4

* Add JobRunr `@Recurring` detection to FindScheduledTasks
* Fix GenerateCalmMermaidDiagram leaving placeholder when no architectural data
* Add Quarkus, MicroProfile, and Jakarta detection to CALM recipes

## April 4, 2026

#### rewrite-devcenter - 1.20.0

* Add DevCenter cards for Python and Node.js version tracking
* Add DevCenter cards for Kotlin, Groovy, and Scala version tracking
* Add DevCenter card for C# (.NET) version tracking
* Fix race condition in UpgradesAndMigrations.insertRow
* Set group on UpgradesAndMigrations DataTable
* Fix DevCenterTest to query UpgradesAndMigrations by group

## April 2, 2026

#### rewrite-angular - 1.0.5

* Bump brace-expansion in /recipes-angular
* Bump handlebars from 4.7.8 to 4.7.9 in /recipes-angular
* Bump yaml from 2.8.2 to 2.8.3 in /recipes-angular
* Bump picomatch from 2.3.1 to 2.3.2 in /recipes-angular
* Add workflow to auto-merge Dependabot patch updates
* OpenRewrite 8.77.2
* Use `packagePattern` in @angular version changes
* OpenRewrite 8.78.2

#### rewrite-spring - 0.29.1

* Fix AddSpringBootApplication sometimes producing untyped Application classes
* Migrate ContentCachingRequestWrapper single-arg constructor for Spring 7.0
* Fix MockMvc POST with contentType(MediaType) migration
* Add Spring Cloud AWS version upgrade to Spring Boot 4.0 recipe
* Remove duplicate `actuate.health` type relocations
* Migrate requiresChannel() to redirectToHttps() for Spring Security 7
* Add Spring Boot 4 Jackson type relocations
* Wrap GenericMessage Map argument in MessageHeaders for Spring Framework 7.0
* Make PropertyMapper migration idempotent across recipe runs
* Improve setObjectMapper folding and TODO comments
* Migrate Jackson2ObjectMapperBuilder to native Jackson mapper builders

## March 31, 2026

#### rewrite-prethink - 0.5.3

* Remove uv availability checks from Python tests
* Fix GenerateCalmMermaidDiagram not overwriting ExportContext architecture.md

## March 30, 2026

#### rewrite-dropwizard - v0.1.0

* Add core Dropwizard-to-Spring-Boot migration recipes
* Expand recipes and restructure to allow migration DW4 -&gt; SB3/4
* Regenerate recipes.csv for configuration recipes
* Scaled migration feedback

## March 28, 2026

#### rewrite-java-security - v3.27.1

* Use MavenSettings from LST when constructing MavenPomDownloaders

## March 27, 2026

#### rewrite-migrate-python - 0.4.1

* Add data table assertions to FindTypes tests
* Add data table assertions to FindMethodsTest
* Add a data table for FindFutureImports

#### rewrite-prethink - 0.5.2

* Fix GenerateCalmMermaidDiagram producing empty architecture.md

#### rewrite-prethink - 0.5.1

* Fix cycle instability in GenerateCalmMermaidDiagram
* Add test quality detection recipes

## March 25, 2026

#### recipes-csharp - 0.1.0

* Add C# migration recipes: Find*, modernization, and ThrowIf* guard clauses
* Replace C# required keyword with Option(Required=true)
* Rename recipes-csharp to recipes-migrate-dotnet and add recipes-code-quality module
* Fix RPC test failures by using JavaRewriteRpc with empty marketplace CSV
* Fix 6 bugs and add test coverage for code quality recipes
* Use RewriteRpcServer.ResetAll() instead of reflective JSON-RPC Reset call
* Convert `RemoveArgumentListFromAttribute` to transforming recipe
* Convert 5 search-only recipes to transforming recipes
* Fix 4 pre-existing code quality test failures
* Exclude out/ref parameters from FindDoNotOverwriteParameterValue
* Fix 25 recipe bugs, implement 8 stub recipes, add ~100 tests
* Use `Expression.Type` and `NameTree.Type` instead of `TypeUtils.GetType()`
* Optimize Roslyn comparison harness (24x speedup)
* Fix 30 code quality recipes based on Roslyn harness comparison
* Use scoped Roslyn analyzer in harness fix loop
* Fix recipe discrepancies found by expanded harness comparison
* Fix 8 RCS recipes + optimize comparison runner
* Fix 5 RCS recipes, remove 2 disabled-by-default from composites
* Code quality cleanup + adopt new SDK utilities
* Fix RCS recipes (batch 4) + harness improvements
* Fix RCS recipes (batch 5): SimplifyCodeBranching rewrite + RemoveUnnecessarySemicolon
* Add ASP.NET Core 2.x and 3.0 migration recipes
* Extend migration chain to cover .NET Core 2.x → 6.0
* Fix RCS recipes (batch 6) + harness ParseError detection
* Fix RCS recipes (batch 7) + code review fixes
* Use project references for local cross-repo development
* Adapt to Cursor API changes in rewrite-csharp
* Fix RCS recipes (batch 8) + disabled-by-default cleanup
* Replace ToString() heuristics with proper AST APIs in recipes
* Fix flaky tests: use RpcRewriteTest for UsesType recipes
* Use AutoFormat for block-wrapping recipes, Space.SingleSpace cleanup
* Refactor recipes to use CSharpPattern/CSharpTemplate
* Use Capture.Expression() with type attribution
* Add xUnit to TUnit migration recipes
* Use CSharpTemplate.Attribute() for attribute construction
* Update recipe writing skill and simplify recipes with new SDK APIs
* Add csproj migration recipes and register Net3-5 composites
* Add TFM and package version upgrades to all .NET migration composites
* Fix P0 compilation failures and add P1 auto-fix recipes
* Fix migration recipe bugs and add ApiController transform
* Add modernization recipes and ModernizeToDotNet9 composite
* Convert 6 recipes from manual SimpleName checks to CSharpPattern
* Fix code quality recipes based on Roslyn harness comparison
* Use CSharpTemplate for negation and conjunction in recipes
* Add 9 modernization recipes to ModernizeToDotNet9 composite
* Use CSharpTemplate for null-coalescing and ApiController attribute
* Fix code quality recipes based on multi-repo harness comparison (round 2)
* Adapt to OpenRewrite.CSharp SDK API changes
* Adopt `CSharpTemplate.Rewrite` API, typed captures, and `ToFindVisitor`
* Prefer unnamed and typed captures

#### rewrite-ai - 0.2.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-android - 0.15.9

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-angular - 1.0.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-circleci - 3.9.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-compiled-analysis - 0.12.3

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-concourse - 3.9.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-cryptography - 0.12.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-devcenter - 1.19.1

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-devcenter - 1.19.0

* Adapt to new DataTables interface

#### rewrite-dotnet - 0.14.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-elastic - 0.5.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-hibernate - 0.20.2

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-jasperreports - 0.4.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-java-application-server - 0.4.0

* Use try-with-resources
* Fix the try-resource in `JBossToJettyMigrationCard`
* `JBossToJettyMigrationCard`  - Move data table handling to generate()

#### rewrite-java-security - 3.27.0

* Update tests for tomcat-embed-core 9.0.116 advisory
* Fix NPE in FindSensitiveApiEndpoints when fieldNames is null
* Fix CI: update tests for RecipeRun data table API change
* Fix missing version prefixes in GenerateSecurityConfig classpath
* Fix CI: update test expectations for spring-webmvc CVEs
* Use pattern matching in tests to avoid version drift failures
* Add OWASP A04:2025 Cryptographic Failures recipe

#### rewrite-kafka - 0.4.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-kubernetes - 3.15.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-mainframe - 2.17.0

* Add JCL FindWord search recipe

#### rewrite-migrate-kotlin - 0.1.3

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-migrate-python - 0.4.0

* Add `FindTypes` recipe
* FindMethods recipe
* `DependencyInsight` recipe
* Regenerate recipes.csv to include FindMethods

#### rewrite-nodejs - 0.41.0

* Moderne Proprietary License

#### rewrite-prethink - 0.5.0

* Add .withGroup to CALM recipes, migrate to DataTableStore API
* Fix non-deterministic mermaid diagram output ordering

#### rewrite-program-analysis - 0.11.1

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-react - 0.2.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-reactive-streams - 0.18.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-spring - 0.29.0

* Fix config class placement in src/main/java instead of src/
* Fix null annotation type in AddSpringBootApplication
* Upgrade Spring Cloud GCP in Boot 3.4, 3.5, and 4.0 recipes
* Fold `setObjectMapper` into constructor for `JacksonJsonHttpMessageConverter`
* Add RestTemplate to RestClient migration recipe
* Add @MockitoSettings(strictness=LENIENT) for @MockitoBean migration
* Add exchange() support to RestTemplate to RestClient migration
* Complete JAX-RS to Spring migration and fix AdoptJackson3 setter folding

#### rewrite-sql - 2.10.5

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-struts - 0.25.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-tapestry - 0.2.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-terraform - 3.13.4

* Updated repository to use OpenRewrite version v8.77.0

## March 23, 2026

#### rewrite-angular - 1.0.3

* Skip snapshots if no changes
* Moderne Proprietary License

#### rewrite-angular - 1.0.2

* Fix `Cannot read properties of undefined` in `remove-es5-browser-support.ts`
* Handle complex `compilerOptions`

## March 20, 2026

#### rewrite-angular - 1.0.1

* Fix paths in `package.json`

#### rewrite-angular - 1.0.0

* Upgrading to OpenRewrite 8.75.5
* Bump minimatch from 3.1.2 to 3.1.5 in /recipes-angular
* Angular 11 migration
* Angular 10 migration
* Angular favicon
* Limit resources in tests
* Angular 9 migration
* Bump jest and @types/jest in /recipes-angular
* Angular 8 migration
* Angular 21 migration
* Re-implement RenameFile
* NPM publish setup
* Bump @openrewrite/rewrite from 8.75.5 to 8.75.10 in /recipes-angular
* Bump diff from 4.0.2 to 4.0.4 in /recipes-angular

#### rewrite-prethink - 0.4.1

* Add test gap analysis, code quality metrics, and expanded architecture discovery
* Skip uv-dependent tests when uv is not installed

## March 19, 2026

#### rewrite-java-security - 3.26.7

* Add RSPEC tags to XmlParserXXEVulnerability and FindSecrets
* Add OWASP A03:2025 Software Supply Chain recipe
* Run CI after automated advisory commits
* Skip direct dependency upgrade when transitive is managed
* Update tests for CVE-2026-24734 tomcat-embed-core advisory

#### rewrite-spring - 0.28.3

* Add `ResponseEntity.getStatusCodeValue()` and `EmbeddedKafka` kraft migration recipes
* Bump transitive rewrite-jackson

## March 17, 2026

#### rewrite-spring - 0.28.2

* Migrate ObjectPostProcessor import for Spring Security 7

## March 16, 2026

#### rewrite-spring - 0.28.1

* Fix `ClassCastException` in `MigrateSpringRetryToSpringFramework7`

## March 12, 2026

#### rewrite-ai - 0.2.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-android - 0.15.8

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-angular - 0.3.0

* Angular 19 - filling in the gaps
* `MoveDocumentToCore` recipe
* Angular 18 migration
* Convert Angular migration recipes to JS composite recipes
* README with composite recipe summary
* Replace immer with mutative
* Angular 17 migration
* Angular 16 migration
* Angular 15 migration
* Angular 14 migration
* Refactoring: use templating
* Angular 13 migration
* Dependabot for updating the NPM dependencies
* Add dependabot - fixed path
* Angular 12 migration

#### rewrite-circleci - 3.9.9

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-compiled-analysis - 0.12.2

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-concourse - 3.9.9

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-cryptography - 0.12.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-devcenter - 1.18.1

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-dotnet - 0.14.9

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-elastic - 0.5.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-hibernate - 0.20.1

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-jasperreports - 0.4.3

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-java-application-server - 0.3.0

* Add Maven integration test and touch up configuration

#### rewrite-java-security - 3.26.6

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-kafka - 0.4.9

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-kubernetes - 3.15.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-mainframe - 2.16.0

* Lombok Best Practices

#### rewrite-migrate-kotlin - 0.1.2

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-migrate-python - 0.3.0

* Convert Find recipes to auto-fix, add RemoveFutureImports, strict type attribution

#### rewrite-nodejs - 0.40.0

* Replace immer with mutative

#### rewrite-prethink - 0.4.0

* Remove stale agent config prompt
* Enhance ProjectMetadata: parent project, module count, Node.js and Python

#### rewrite-program-analysis - 0.11.0

* Lombok Best Practices

#### rewrite-react - 0.2.3

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-reactive-streams - 0.18.9

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-spring - 0.28.0

* Add test sources to starter dependency test fixtures

#### rewrite-sql - 2.10.4

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-struts - 0.25.3

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-tapestry - 0.2.3

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-terraform - 3.13.3

* Updated repository to use OpenRewrite version v8.75.5

## March 11, 2026

#### rewrite-spring - 0.27.1

* Bump MyBatis to compatible versions for Spring Boot 3.5 and 4.0
* Skip array and vararg parameters in NullableSpringWebParameters
* Move `MigrateMockMvcToAssertJ` into SB4 best practices
* Only add trailing slash routes when explicitly enabled

## March 4, 2026

#### rewrite-ai - 0.2.4

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-android - 0.15.7

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-angular - 0.2.0

* Angular 19 migration recipe
* Angular 20 recipe

#### rewrite-circleci - 3.9.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-compiled-analysis - 0.12.1

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-concourse - 3.9.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-cryptography - 0.12.4

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-devcenter - 1.18.0

* Don't list ReportAsSecurityIssues as a measure of the SecurityIssues DevCenter
* Fix classloader-dependent check in getSecurityRecursive

#### rewrite-dotnet - 0.14.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-elastic - 0.5.4

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-hibernate - 0.20.0

* `@Column` and Indexed HQL parameter

#### rewrite-jasperreports - 0.4.2

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-java-application-server - 0.2.0

* Add Jetty migration integration tests
* Produce self-contained runnable JAR for JBoss-to-Jetty migration

#### rewrite-java-security - 3.26.5

* Update tests for GHSA-72hv-8253-57qq jackson-core advisory

#### rewrite-kafka - 0.4.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-kubernetes - 3.15.4

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-mainframe - 2.15.1

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-migrate-kotlin - 0.1.1

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-migrate-python - 0.2.0

* Refactoring, extract `mark_deprecated` utility method

#### rewrite-nodejs - v0.39.0

* `IncreaseNodeEngineVersion` recipe
* Bump minimatch from 3.1.2 to 3.1.4 in /recipes-nodejs
* Making the `spawnSync(..)` call execute with `shell:true` for Windows
* `IncreaseNodeEngineVersionInGithubActions` recipe
* `FindCryptoCreateCipher` recipe
* Next batch of search recipes

#### rewrite-prethink - v0.3.4

* Fix compilation after new args added to `ProjectMetadata.Row`

#### rewrite-program-analysis - 0.10.1

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-react - 0.2.2

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-reactive-streams - 0.18.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-spring - 0.27.0

* Extend Acegi and RichFaces migration recipes

#### rewrite-sql - 2.10.3

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-struts - 0.25.2

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-tapestry - 0.2.2

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-terraform - 3.13.2

* Fix for `ClassCastException` in `UnquoteTypeConstraints`

#### rewrite-terraform - 3.13.1

* Updated repository to use OpenRewrite version v8.75.0

## February 28, 2026

#### rewrite-migrate-python - 0.1.1

* Treat `openrewrite` as a provided dependency

## February 27, 2026

#### rewrite-spring - v0.26.1

* Remove upgrade duplications from Upgrade Boot 3.5 proprietary vs OSS
* Update Prethink context

#### rewrite-static-analysis - 0.2.0

* Add Python cleanup recipes
* Change group to io.moderne.recipe

## February 25, 2026

#### rewrite-ai - 0.2.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-android - 0.15.6

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-angular - 0.1.6

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-circleci - 3.9.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-compiled-analysis - 0.12.0

* Update SDKMan Java version

#### rewrite-concourse - 3.9.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-cryptography - 0.12.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-devcenter - 1.17.0

* Update SDKMan Java version
* Add organization statistics recipe and FindCommitters

#### rewrite-dotnet - 0.14.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-elastic - 0.5.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-hibernate - 0.19.0

* Migrate jackson-datatype-hibernate dependencies for Hibernate 6.x and 7.x

#### rewrite-jasperreports - 0.4.1

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-java-application-server - 0.1.0

* Add Jetty migration recipes
* OpenRewrite recipe best practices

#### rewrite-java-security - 3.26.4

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-kafka - 0.4.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-kubernetes - 3.15.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-mainframe - 2.15.0

* Update Prethink context

#### rewrite-migrate-kotlin - v0.1.0

* Add Kotlin 2 migration recipes
* Change base package to org.openrewrite.kotlin.migrate
* Add Gradle build file recipes for Kotlin 2 migration
* Add ReplaceKotlinOptionsWithCompilerOptions recipe
* Add auto-generated Jetpack Compose deprecated method recipes
* Add kotlinx deprecation recipes for coroutines, datetime, collections-immutable, -io-core and serialization
* Add Exposed 1.0 migration recipes

#### rewrite-migrate-python - v0.1.0

* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations
* feat: Add Python migration recipes for Python 3.10 to 3.14
* Add additional Python migration recipes
* More Python version migration recipes
* Use proprietary license
* Padding fixes, and test improvements where previously no changes were asserted
* Add Python 3.12 deprecation recipes
* Add Python 3.11 deprecation recipes
* Add Python 3.9 migration recipes
* Add Python 3.8 migration recipes
* Fix PyPI package license metadata
* Handle J.Imports too
* Add `MigrateToPyprojectToml` recipe
* Replace wrapper recipes with inline ChangeImport calls
* Migrate [tool:pytest] from setup.cfg to [tool.pytest.ini_options]
* Fix version placement and gaps in Python upgrade recipes

#### rewrite-nodejs - 0.38.1

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-prethink - 0.3.3

* Fixing generation of `test-mapping.csv` and `test-coverage.md` for the no-AI update prethink context starter
* Fixing the `recipes.csv`

#### rewrite-prethink - 0.3.2

* Update Prethink context

#### rewrite-program-analysis - 0.10.0

* Add missing InlineDeprecatedMethods to recipes.csv
* Rebuild recipe catalog
* Remove trailing whitespace
* Handle exception paths in dead store analysis for try/catch blocks
* Update Prethink context

#### rewrite-react - 0.2.1

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-reactive-streams - 0.18.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-spring - 0.26.0

* Remove ZipkinAutoConfiguration from @SpringBootApplication exclude
* Add managed dependency version pinning for rest-assured and spring-retry
* Fix unit tests to handle updating to 4.0.x versions
* Add ChangeType for Spring Boot 4.0 tracing/observation class renames
* Remove SslBundles parameter from KafkaProperties build methods
* Add onlyIfUsing to Liquibase starter AddDependency entries
* Add Rest5ClientBuilderCustomizer migration for Spring Boot 4.0
* Don't add configurePathMatch when it doesn't already exist
* Add MockMvc to MockMvcTester migration recipes for Spring Boot 4.0
* Default to 'app' package in AddSpringBootApplication for default-package projects

#### rewrite-sql - 2.10.2

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-struts - 0.25.1

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-tapestry - 0.2.1

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-terraform - 3.13.0

* Update Prethink context

## February 24, 2026

#### rewrite-java-security - 3.26.3

* Add OWASP A01:2025 Broken Access Control recipe
* Add OWASP A02:2025 Security Misconfiguration recipe
* Migrate CookieSetHttpOnly to rewrite-program-analysis dataflow
* Fixing test for dependency vulnerability check version upgrading.
* Add Directory.Packages.props support to csharp UpgradeDependencyVersion recipe
* Add Python/PyPI dependency vulnerability check recipe
* Fix transitive dependencies and standalone scripts
* Skip uv test when uv is not installed

## February 23, 2026

#### rewrite-mainframe - 2.14.2

* Add data tables to search recipes for CLI output
* Fixing the copybook being output with potentially an absolute path rather than the standard relative one we expect everywhere else.

#### rewrite-prethink - v0.3.1

* Rebuild recipe catalog
* Fix getTableRows to aggregate rows from all DataTable instances

## February 20, 2026

#### rewrite-mainframe - 2.14.1

* Remove excessive estimatedEffortPerOccurrence override
* Adopt Moderne Source Available License
* Making copybook lexing / parsing errors actually report more meaningful line number information and allowing parsing of other files to continue after encountering a parse failure on a file.

## February 19, 2026

#### rewrite-prethink - v0.3.0

* Extending the config file path into `UpdatePrethinkContextNoAiStarter` / `UpdatePrethinkContextStarter` and generating the `recipes.csv`
* FindCalmRelationships fails to detect inherited method calls and chained invocations
* Handle jtokkit initialization failure in ComprehendCodeTokenCounter
* Fix ProjectMetadata extracting wrong data from nested POM elements
* Add Node.js discovery recipes to Prethink pipeline

#### rewrite-tapestry - v0.2.0

* Address Tapestry 4→5 migration gaps

## February 17, 2026

#### rewrite-react - 0.2.0

* Making the build task (the removal of files / directories specifically) platform neutral
* Lots of new React migration recipes

#### rewrite-spring - 0.25.1

* Improve code generation for Spring configuration recipes
* Extend SpringBootServletInitializer for WAR packaging
* Also adjusting the `BootstrapRegistry` package within `spring.factories` file
* Fix target location calculation for multi-package modules
* Use version pattern in UpgradeSpringSecurity70Test
* Skip adding @AutoConfigureMockMvc when already present from new package
* Narrow MigrateToModularStarters precondition to monolithic starters
* Rename AutoConfigureWebClient to AutoConfigureRestClient in Boot 4 migration
* Add spring-boot-jackson dependency in AdoptJackson3 recipe
* Use example values in tests for handleError migration
* Also add validation starter when constraint annotations are used
* Add useDefaultJaasConfig=true to MSSQL Kerberos JDBC URLs

#### rewrite-terraform - v3.12.0

* Add RDS engine version upgrade recipes
* Add Terraform upgrade recipes for 0.12 through 0.15

## February 11, 2026

#### rewrite-ai - 0.2.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-android - 0.15.5

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-angular - 0.1.5

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-circleci - 3.9.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-compiled-analysis - 0.11.5

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-concourse - 3.9.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-cryptography - 0.12.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-devcenter - 1.16.0

* Use OR existing methods in ScanningRecipe to obtain/maintain Accumulator reference
* Fix SemverRowBuilder class initialization failure
* Update JUnit 6 card to return JUnit 5 to 6 migration
* Increasing the memory to 6G for tests

#### rewrite-dotnet - 0.14.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-elastic - 0.5.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-hibernate - 0.18.0

* Hibernate 4 Collections
* Use Hibernate 4.0 `StandardBasicTypes`

#### rewrite-jasperreports - 0.4.0

* Add MigratePrintServiceExporterConfiguration recipe

#### rewrite-java-security - 3.26.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-kafka - 0.4.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-kubernetes - 3.15.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-mainframe - 2.14.0

* Drop `cobol-cli`
* Bypass the adapt() method call to prevent ClassCastException
* Drop `model`, which appears unused

#### rewrite-nodejs - 0.38.0

* Fix test failure after new CVE
* Inline deprecated constructors

#### rewrite-program-analysis - 0.9.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-reactive-streams - 0.18.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-spring - 0.25.0

* Fix artifact ID for spring-boot-starter-web-services
* Derive Application.java path from source files, not project name
* Close gaps in JSF 2.3 and Spring 3.0 migration recipes
* Add recipe to handle `HttpMessageConvertersAutoConfiguration` removal
* Add Flyway and Liquibase starter dependency recipes for Spring Boot 4

#### rewrite-sql - 2.10.1

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-struts - 0.25.0

* Add three new Struts 5 to 6 migration steps
* Add Struts 1 to Struts 2 migration recipes
* Proprietary license

#### rewrite-tapestry - 0.1.0

* Use type tables instead of Tapestry JAR dependencies

#### rewrite-terraform - 3.11.6

* Updated repository to use OpenRewrite version v8.73.0

## February 9, 2026

#### rewrite-spring - v0.24.1

* Upstream changes only -&gt; bringing in patched versions of core components

## February 5, 2026

#### rewrite-java-security - 3.26.1

* Fix InputStream closure / IOException issue + cache advisories between FFVD runs
* Inline deprecated constructors
* Filter out pre-release versions when selecting vulnerability fix
* Add recipe to promote transitive dependencies to direct
* Fix NPE and StringIndexOutOfBoundsException in RemoveUnusedDependencies

#### rewrite-spring - v0.24.0

* Remove Spring Pulsar Reactive dependencies in Boot 4.0 migration
* Handle multi-arg AntPathRequestMatcher migration
* Add DispatcherServletAutoConfiguration package migration for Spring Boot 4
* Fixing tests outdated as of `2025.1.1` release of Spring Cloud Dependencies
* Extracting dropping of Spring Pulsar Reactive into separate recipe, additionally removing pulsar properties
* Make declarative recipes singletons
* Add recipe to adopt PropertyMapper API changes for Spring Boot 4.0
* `spring-boot-starter-webmvc` conditional on wrong package
* Migrate deprecated path mapping options for Spring Framework 7.0
* Reverting pulsar property removal, but removing the non-existant dependency getting removed
* Handle ObjectMapper migration after Jackson package change
* Add TODO comment to OAuth2 password grant usages
* Fallback to PlainText on parse error in AddSpringBootApplication
* Convert RestTemplate arguments to RestClient in OAuth2 migration
* Also removing `spring-boot-autoconfigure` after we've introduced the modular starters

## January 28, 2026

#### rewrite-spring - v0.23.0

* Add recipe to migrate Filter to OncePerRequestFilter
* Address Fidelity Spring Boot 4 recipe feedback (#1758)
* Add AddSetUseSuffixPatternMatch recipe for Spring 5.3 migration
* Fix SpringBootVersionUpgradeTest.upgradeVersionGradle flaky test
* Add landing page controller generation for welcome-file-list
* Add Spring WS Axiom to SAAJ migration recipe
* Fix classpath resolution and transitive dependency detection
* Add recipes for Spring Framework 7.0 GraalVM native hint changes
* Add `AddValidationStarterDependency`
* Add `RemoveContentNegotiationFavorPathExtension`
* Migrate OAuth2 token response client from `RestOperations` to `RestClient`
* Auto-detect javax vs jakarta in WebXmlToWebApplicationInitializer
* Migrate `HandleError` method invocations
* Remove deprecated PathMatcher configuration in Spring Framework 7
* Migrate Spring `variable-resolver` in JSF config
* Add Spring Boot 3.5 webclient deprecation migrations
* Add recipe to remove spring-jcl dependency for Spring Framework 7.0
* Migrate MvcRequestMatcher to PathPatternRequestMatcher for Spring Security 7
* Add recipes for deprecated API removal in Spring Framework 7.0
* Add recipe to preserve SpringExtension test-class scoped context for nested tests
* Add recipe to find removed servlet view support in Spring Framework 7.0
* Replace JUnit 4 Spring test base classes with JUnit Jupiter annotations
* Rename RequestContext.jstPresent to JSTL_PRESENT for Spring Framework 7.0
* Migrate EnvironmentPostProcessor to new package in Spring Boot 4.0
* Detect Kafka Streams and raw Apache Kafka client usage
* Add recipe to preserve DynamicDestinationResolver for JmsTemplate in Spring 7
* Migrate HttpHeaders methods removed in Spring Framework 7.0
* Replace Spring Framework dependencies with Boot starters during migration
* Expand Spring to Boot starter dependency mappings
* Migrate Spring Session Hazelcast to Hazelcast Spring Session
* Add recipe to migrate HttpStatus to RFC 9110 names

## January 27, 2026

#### rewrite-java-application-server - v0.0.1

* Add recipes for planning and tracking the migration
* Polish recipes
* Add recipe for deleting JBoss descriptor files

#### rewrite-struts - v0.24.0

* Upgrade Struts6 dependency to Struts7
* Add recipe to migrate date tag format patterns for Struts 6
* Add MigrateStaticOgnlMethodAccess for Struts 6 migration
* Add recipe to remove deprecated Freemarker ?html built-in

## January 23, 2026

#### rewrite-spring - v0.22.0

* Acegi to Spring Security 5.0 migration recipe
* Add Spring Kafka search recipes

## January 20, 2026

#### rewrite-ai - 0.2.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-android - 0.15.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-angular - 0.1.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-circleci - 3.9.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-compiled-analysis - 0.11.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-concourse - 3.9.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-cryptography - 0.12.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-devcenter - 1.15.0

* Add a VulnerabilitiesDevCenter in yaml
* Add EPSS measure to DependencyVulnerabilityCheck
* Detect JUnit 3 class `junit.framework.TestCase`
* Tweak DependencyVulnerabilityCheck measure names, inserted rows, and data table wrangling
* Add a BuildToolCard to show versions of Maven/Gradle/Bazel/CLI
* Make BuildToolCard more like LibraryUpgrade

#### rewrite-dotnet - 0.14.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-elastic - 0.5.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-hibernate - 0.17.0

* Remove hibernate-proxool and hibernate-vibur dependencies for Hibernate 7

#### rewrite-jasperreports - 0.3.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-java-security - 3.26.0

* Mark VulnerabilityReport columns as nullable for use in DevCenter
* Enrich Maven advisories with optional EPSS scores
* Resolve fixedVersion from Maven Central for lastAffectedVersion vulnerabilities

#### rewrite-kafka - 0.4.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-kubernetes - 3.15.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-mainframe - 2.13.2

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-mainframe - 2.13.1

* Upgrading Antlr to 4.13.2
* Regenerate Antlr sources with Antlr 4.13.2

#### rewrite-nodejs - 0.37.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-program-analysis - 0.9.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-reactive-streams - 0.18.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-spring - 0.21.0

* JSF 2.3 Migration base
* Migrating Spring Kafka error handlers that were deprecated in `2.8.x` and fully removed by `3.3.x` to non-deprecated versions
* RichFace 4 migration
* Handle drop-in replacement of OAuth2AccessTokenResponseClient API
* Add io.moderne.java.spring.framework.MigrateDeprecatedBeanXmlProperties
* Fix relocations for `MultipartConfigFactory` and `AutoConfigureMetrics`
* Acegi to Spring Security 2
* Revert "Acegi to Spring Security 2"

#### rewrite-sql - 2.10.0

* SQL format should not change spacing around `:userid`

#### rewrite-struts - 0.23.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-tapestry - v0.0.1

* A starting point for a Tapestry 4 to 5 migration
* Switch to using `rewrite-java-dependencies`

#### rewrite-terraform - 3.11.5

* Updated repository to use OpenRewrite version v8.72.0

## January 15, 2026

#### rewrite-java-security - v3.25.3

* OpenRewrite recipe best practices
* Expect vertx-5.0.7 in tests going forward
* Add ignoredDependencies option to RemoveUnusedDependencies
* Remove debug tracing from DependencyVulnerabilityCheckBase

## January 14, 2026

#### rewrite-java-security - v3.25.2

* Allow debug tracing to explain why custom `DependencyVulnerabilityCheck` selects a particular dependency version

## January 13, 2026

#### rewrite-java-security - v3.25.1

* Skip unnecessary maven resolution when `UpgradeDelta.none` is used
* Fixes an issue where vulnerabilities from the built-in database could not always be overridden by supplemental vulnerabilties
*  Fixed a long-standing issue where chains of version upgrades could not be accomplished in a single cycle

#### rewrite-spring - v0.20.1

* Do not remove `spring-boot-starter-test` just yet
* Bump spring ws when moving to spring boot 4
* Fixing tests to consistently use the same line endings, as it was mixing `CRLF` and `LF` on Windows previously and failing the tests
* Downstream fixes in `org.openrewrite:rewrite-spring`

## January 7, 2026

#### rewrite-ai - 0.2.0

* Added 2 agents configuration files detection patterns

#### rewrite-android - 0.15.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-angular - 0.1.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-circleci - 3.9.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-compiled-analysis - 0.11.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-concourse - 3.9.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-cryptography - 0.12.0

* Expect a second cycle following upstream changes

#### rewrite-devcenter - 1.14.0

* Skip all the version resolution work and just report vulnerabilities
* Adding rows with null source compatibility should not throw exception

#### rewrite-dotnet - 0.14.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-elastic - 0.5.0

* Add or update recipe category descriptors
* End recipe description with dot to fix validation

#### rewrite-hibernate - 0.16.0

* Add Hibernate 7.2 migration recipe

#### rewrite-jasperreports - 0.3.0

* OpenRewrite recipe best practices

#### rewrite-java-security - 3.25.0

* DependencyVulnerabilityCheck recipes offer uniform filtering options
* Remove out-of-date OWASP suppressions
* Upgrade direct dependency instead of adding a constraint for a transitive dependency

#### rewrite-kafka - 0.4.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-kubernetes - 3.15.0

* Add `ChangeApiVersion` migrations for v1.33-35

#### rewrite-nodejs - 0.37.0

* `RemoveNetSetSimultaneousAccepts` recipe
* `ReplaceStreamInternalModules` recipe
* Adopt `InstallRecipesResponse` in `UtilNativeTypeCheckingMethodsIntegTest`
* Introduce vulnerability filtering options

#### rewrite-program-analysis - 0.9.0

* Fix memory leak in `FlowModelIndex`
* Use bounded size in `ControlFlowCache`
* OpenRewrite recipe best practices

#### rewrite-react - 0.1.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-reactive-streams - 0.18.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-spring - 0.20.0

* Modularize Spring Securtiy 7
* Migrate `HibernateDaoSupport#getSession(boolean)`
* Migrate Spring Cloud `webflux.metrics.tags.path.enabled` property
* Spring Framework to Spring Boot should add modular starters
* Add or update recipe category descriptors
* Ensure `spring-boot-jackson` is added to Maven submodules too
* Include `MigrateToHibernate72` with `UpgradeSpringBoot_4_0`
* Remove `spring-boot-starter-reactor`
* Corrected the order of the recipe stack so 3.5 no longer overwrites 4.0
* Improve precondition for `MigrateDefaultResponseErrorHandler`
* Add Spring Cloud 2025.1 recipes to Spring Boot 4 migration

#### rewrite-sql - 2.9.0

* Preserve trailing content when parsing SQL

#### rewrite-struts - 0.23.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-terraform - 3.11.4

* Updated repository to use OpenRewrite version v8.71.0

## December 16, 2025

#### rewrite-ai - v0.1.0

* Initial commit of `FindLibrariesInUse` and `FindModelsInUse`
* Added a recipe to find AI agents in use

#### rewrite-android - 0.15.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-angular - 0.1.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-circleci - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-compiled-analysis - 0.11.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-concourse - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-cryptography - 0.11.4

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-devcenter - 1.13.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-dotnet - 0.14.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-elastic - 0.4.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-hibernate - 0.15.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-jasperreports - 0.2.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-java-security - 3.24.0

* org.apache.tomcat.embed:tomcat-embed-core:9.0.113
* Updates to address removed dependencyGraph column from `DependenciesInUse` data table
* Update data table usage to align with new column definition
* Added recipe for finding vulnerabilities without fixing them
* Improved the DependencyVulnerabilityCheck recipe to better match vulnerabilities and resolve transitive vulnerable dependencies
* Fixing one broken test - adding project name
* Prevent bumping minor when max delta is patch
* Reorder `maybeRemoveImport` before `maybeAddImport`

#### rewrite-kafka - 0.4.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-kubernetes - 3.14.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-nodejs - 0.36.0

* `ReplaceTlsInternalModules` recipe
* ReplaceTlsServerSetOptions recipe
* `ReplaceTimersEnroll` recipe
* Add `DependencyVulnerabilityCheck` recipe for npm security scanning

#### rewrite-program-analysis - 0.8.0

* Do not detect dead stores in unqualified field assignments

#### rewrite-react - 0.1.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-reactive-streams - 0.18.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-spring - 0.19.0

* Modularize `org.springframework:spring`
* Expand the recipe to move from Spring Framework to Spring Boot
* Add AutoConfigureMockMvc annotation
* Additional Spring Boot 4 coverage
* Remove duplicate eager `RequestMatcherProvider` change type
* Convert JAX-RS annotations to Spring Web annotations
* Add package changes for modular starters
* Fix incorrect package declarations

#### rewrite-sql - 2.8.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-struts - 0.23.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-terraform - 3.11.3

* Updated repository to use OpenRewrite version v8.69.0

## December 5, 2025

#### rewrite-android - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-angular - 0.1.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-circleci - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-compiled-analysis - 0.11.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-concourse - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-cryptography - 0.11.3

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-devcenter - 1.13.0

* Expect a SearchResult marker from DependencyInsight

#### rewrite-dotnet - 0.14.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-elastic - 0.4.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-hibernate - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-jasperreports - 0.2.0

* Correctly remove the `JRExporterParameter` imports by swapping traversal order

#### rewrite-java-security - 3.23.0

* Update DependencyInsight for spring-security-config
* Align test cases to better reason about Maven vs. Gradle behavior
* Proper ordering of Maven comments required test fixes
* Add documentation for customizing vulnerabilities in DependencyVulnerabilityCheck recipe
* Update for compatibility with rework of DependencyGraph

#### rewrite-kafka - 0.4.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-kubernetes - 3.14.0

* AssertJ best practices

#### rewrite-nodejs - 0.35.0

* `ReplaceCryptoFips` recipe
* `ReplaceSlowBuffer` recipe
* `ReplaceFsAccessConstants` recipe
* `RemovePromisifyOnPromise` recipe
* `AvoidImplicitCoercionOfExitCode` recipe
* `ReplaceDirentPath` recipe
* AssertJ best practices
* `ReplaceIsWebAssemblyCompiledModule` recipe
* `ReplaceZlibBytesRead` recipe
* Composite recipes for Node22 and Node24 upgrades
* `ReplaceFsTruncateWithFd` recipe
* `ReplaceOutgoingMessageHeaders` recipe
* `ReplaceFsStatsConstructor` recipe

#### rewrite-program-analysis - 0.7.0

* AssertJ best practices
* JSpecify best practices

#### rewrite-react - 0.1.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-reactive-streams - 0.18.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-spring - 0.18.0

* Add `spring-boot-jackson` dependencies
* Recipe for deprecated StandardMongoClientSettingsBuilderCustomizer ctor
* Add ReplaceDeprecatedThreadPoolTaskSchedulerBuilderApi
* Replace deprecated org.springframework.boot.buildpack.platform.docker API
* Missing Migration from Spring Pet Clinic
* Drop milestone repositories now that RCs are in Maven Central
* AssertJ best practices
* Recipes to upgrade to `org.springframework.orm.hibernate5`
* Add additional guards
* Add MongoDB representation properties
* Use separate properties workflows for Spring Boot vs Spring Cloud
* Migrate spring-retry to Spring Framework's Resilience where possible
* Remove Classic Uber-Jar class loader
* Add `@SpringBootApplication` to projects that do not have one yet

#### rewrite-sql - 2.8.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-struts - 0.23.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-terraform - 3.11.2

* Updated repository to use OpenRewrite version v8.68.1

## November 26, 2025

#### rewrite-devcenter - 1.12.1

Republishing to update dependencies

## November 20, 2025

#### rewrite-android - 0.15.0

* Fix recipe references

#### rewrite-angular - v0.1.0

* New `UpdateComponentTemplateUrl` recipe
* Change group ID to `io.moderne.recipe`

#### rewrite-circleci - 3.9.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-compiled-analysis - 0.11.0

* Common static analysis issues

#### rewrite-concourse - 3.9.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-cryptography - 0.11.2

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-devcenter - 1.12.0

* Track upgrades to Spring Boot 4.0
* Add a configurable vulnerability reporting devcenter recipe

#### rewrite-dotnet - 0.14.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-elastic - 0.4.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-hibernate - 0.15.0

* Do not duplicate the Java 17 migration when included in Spring Boot 4

#### rewrite-jasperreports - v0.1.0

* Jasper 5 Migrations
* Basic Jasper 6 Migrations

#### rewrite-java-security - 3.22.0

* Separate Maven and Gradle tests for better maintability and understandability
* Introduce CVE pattern filtering option
* Reuse fixture to remove code duplication
* Fixed expectations + recipe for snakeyaml recipe

#### rewrite-kafka - 0.4.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-kubernetes - 3.13.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-nodejs - 0.34.0

* Bumping OpenRewrite to 8.66.2
* `RemoveUsageOfProcessFeaturesTlsConstants` recipe
* Adding ReplaceCryptoHashConstructor recipe
* Amend the `ReplaceCryptoConstructors` recipe to handle DEP0181 too.
* Bump js-yaml from 3.14.1 to 3.14.2 in /recipes-nodejs
* Add tags to the `UseNativeTypeCheckingMethods` recipe
* `ReplaceUtilLog` recipe
* `ReplaceUtilExtend` recipe
* Update to new OpenRewrite

#### rewrite-program-analysis - 0.6.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-react - v0.1.0

* Adding Java/Gradle structure to the project
* Github CI
* Add JUnit platform launcher
* Leverage type system in `FindReactComponent` and add data table
* `FindPropUsage` recipe
* Add a simple React 19 upgrade recipe
* Reporting real component names when aliases are used
* `remove-forward-ref` recipe enhancements
* Add `ChangeComponentPropValue` recipe for React prop migrations
* Change group ID to `io.moderne.recipe`

#### rewrite-reactive-streams - 0.18.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-spring - 0.17.0

* Spring Boot 3.3 Deprecations
* Add recipe to replace deprecated RequestMatcherProvider
* Adopt classic starters in Spring Boot 4 migration
* Spring Boot 4.0 Quickwins
* Modularize Starters
* Modularize Legacy and Classic starters
* Spring Boot 3.4 Deprecations
* Pin Spring Retry version

#### rewrite-sql - 2.8.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-struts - 0.23.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-terraform - 3.11.1

* Updated repository to use OpenRewrite version v8.67.0

## November 13, 2025

#### rewrite-cryptography - v0.11.1

* Use the Moderne Proprietary License on the recipe jar

