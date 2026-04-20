---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases and only contains information from the past year.
:::

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

#### rewrite-ai-search - 0.33.0

* Update Prethink context

#### rewrite-android - 0.16.0

* Update Prethink context

#### rewrite-angular - 1.1.0

* Bump @openrewrite/rewrite from 8.78.2 to 8.78.3 in /recipes-angular[bot]
* Bump ts-jest from 29.4.6 to 29.4.9 in /recipes-angular[bot]
* Update Prethink context

#### rewrite-circleci - 3.10.0

* Update Prethink context

#### rewrite-cobol - 2.17.1

* Updated repository to use OpenRewrite version v8.79.0

#### rewrite-codemods - v0.25.1

* Upgrade lodash to 4.18.0+ (CVE-2026-4800)

#### rewrite-codemods - 0.25.0

* Update Prethink context

#### rewrite-codemods-ng - v0.20.1

* chore(deps): bump hono from 4.11.4 to 4.12.12 in /src/main/resources/codemods[bot]
* chore(deps): bump @hono/node-server from 1.19.9 to 1.19.13 in /src/main/resources/codemods[bot]
* chore(deps): bump tar from 7.5.2 to 7.5.11 in /src/main/resources/codemods[bot]
* chore(deps): bump path-to-regexp from 8.3.0 to 8.4.0 in /src/main/resources/codemods[bot]
* chore(deps): bump qs from 6.14.1 to 6.14.2 in /src/main/resources/codemods[bot]
* chore(deps): bump @isaacs/brace-expansion from 5.0.0 to 5.0.1 in /src/main/resources/codemods[bot]
* chore(deps): bump picomatch and @angular/cli in /src/main/resources/codemods[bot]
* chore(deps): bump minimatch from 10.1.1 to 10.2.4 in /src/main/resources/codemods[bot]

#### rewrite-codemods-ng - 0.20.0

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

#### rewrite-vulncheck - 0.6.5

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

* Bump brace-expansion in /recipes-angular[bot]
* Bump handlebars from 4.7.8 to 4.7.9 in /recipes-angular[bot]
* Bump yaml from 2.8.2 to 2.8.3 in /recipes-angular[bot]
* Bump picomatch from 2.3.1 to 2.3.2 in /recipes-angular[bot]
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

#### rewrite-ai - 0.2.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-ai-search - 0.32.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-android - 0.15.9

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-angular - 1.0.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-circleci - 3.9.10

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-cobol - 2.17.0

* Add JCL FindWord search recipe

#### rewrite-codemods - 0.24.6

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-codemods-ng - 0.19.0

* Fix MarkerPrinter RPC serialization for JS/TS files
* Upgrade Angular
* chore(ci): bump actions/setup-node from 4 to 6[bot]
* chore(ci): bump actions/checkout from 4 to 6[bot]
* chore(ci): bump gradle/actions from 4 to 6[bot]
* chore(ci): bump actions/upload-artifact from 4 to 7[bot]
* chore(ci): bump actions/download-artifact from 4 to 8[bot]
* chore(ci): bump actions/setup-java from 4 to 5[bot]

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

#### rewrite-vulncheck - 0.6.4

* Updated repository to use OpenRewrite version v8.77.0

#### rewrite-vulncheck - 0.6.3

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
* Bump minimatch from 3.1.2 to 3.1.5 in /recipes-angular[bot]
* Angular 11 migration
* Angular 10 migration
* Angular favicon
* Limit resources in tests
* Angular 9 migration
* Bump jest and @types/jest in /recipes-angular[bot]
* Angular 8 migration
* Angular 21 migration
* Re-implement RenameFile
* NPM publish setup
* Bump @openrewrite/rewrite from 8.75.5 to 8.75.10 in /recipes-angular[bot]
* Bump diff from 4.0.2 to 4.0.4 in /recipes-angular[bot]

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

## March 12, 2026

#### rewrite-ai - 0.2.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-ai-search - 0.32.9

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

#### rewrite-cobol - 2.16.0

* Lombok Best Practices

#### rewrite-codemods - 0.24.5

* Updated repository to use OpenRewrite version v8.75.5

#### rewrite-codemods-ng - 0.18.2

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

#### rewrite-vulncheck - 0.6.2

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

#### rewrite-ai-search - 0.32.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-android - 0.15.7

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-angular - 0.2.0

* Angular 19 migration recipe
* Angular 20 recipe

#### rewrite-circleci - 3.9.8

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-cobol - 2.15.1

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-codemods - 0.24.4

* Updated repository to use OpenRewrite version v8.75.0

#### rewrite-codemods-ng - 0.18.1

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

#### rewrite-vulncheck - 0.6.1

* Updated repository to use OpenRewrite version v8.75.0

## February 27, 2026

#### rewrite-spring - v0.26.1

* Remove upgrade duplications from Upgrade Boot 3.5 proprietary vs OSS
* Update Prethink context

## February 25, 2026

#### rewrite-ai - 0.2.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-ai-search - 0.32.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-android - 0.15.6

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-angular - 0.1.6

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-circleci - 3.9.7

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-cobol - 2.15.0

* Update Prethink context

#### rewrite-codemods - 0.24.3

* Updated repository to use OpenRewrite version v8.74.1

#### rewrite-codemods-ng - 0.18.0

* Remove trailing whitespace

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

#### rewrite-vulncheck - 0.6.0

* Upgrade Logback classic
* Gradle 9.2.0
* Update dependency version for moderne-recipe-bom
* Add null epss scores to make it compile
* Update SDKMan Java version
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

#### rewrite-cobol - 2.14.2

* Add data tables to search recipes for CLI output
* Fixing the copybook being output with potentially an absolute path rather than the standard relative one we expect everywhere else.

#### rewrite-prethink - v0.3.1

* Rebuild recipe catalog
* Fix getTableRows to aggregate rows from all DataTable instances

## February 20, 2026

#### rewrite-cobol - 2.14.1

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

#### rewrite-terraform - v3.12.0

* Add RDS engine version upgrade recipes
* Add Terraform upgrade recipes for 0.12 through 0.15

## February 11, 2026

#### rewrite-ai - 0.2.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-ai-search - 0.32.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-android - 0.15.5

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-angular - 0.1.5

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-circleci - 3.9.6

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-cobol - 2.14.0

* Drop `cobol-cli`
* Bypass the adapt() method call to prevent ClassCastException
* Drop `model`, which appears unused

#### rewrite-codemods - 0.24.2

* Updated repository to use OpenRewrite version v8.73.0

#### rewrite-codemods-ng - 0.17.1

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

#### rewrite-ai-search - 0.32.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-android - 0.15.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-angular - 0.1.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-azul - 0.8.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-circleci - 3.9.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-cobol - 2.13.2

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-cobol - 2.13.1

* Upgrading Antlr to 4.13.2
* Regenerate Antlr sources with Antlr 4.13.2

#### rewrite-codemods - 0.24.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-codemods-ng - 0.17.0

* chore(deps): bump tmp and @angular/cli in /src/main/resources/codemods[bot]
* Add Angular v20 and v21 upgrade recipes

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

#### rewrite-ai-search - 0.32.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-android - 0.15.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-angular - 0.1.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-azul - 0.8.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-circleci - 3.9.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-codemods - 0.24.0

* chore: update @ui5/linter from 1.20.5 to 1.20.7
* Fix recipes.csv validation issues

#### rewrite-codemods-ng - 0.16.2

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
* Migrate Spring Cloud `webflux.metrics.tags.path.enabled` property[bot]
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

#### rewrite-ai-search - 0.32.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-android - 0.15.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-angular - 0.1.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-azul - 0.8.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-circleci - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-codemods - 0.23.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-codemods-ng - 0.16.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-compiled-analysis - 0.11.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-comprehension - 0.10.2

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

#### rewrite-ai-search - 0.32.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-android - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-angular - 0.1.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-azul - 0.8.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-circleci - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-codemods - 0.23.0

* chore: update @ui5/linter from 1.19.0 to 1.20.2

#### rewrite-codemods-ng - 0.16.0

* chore(deps): bump glob from 10.3.10 to 10.5.0 in /src/main/resources/codemods[bot]

#### rewrite-compiled-analysis - 0.11.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-comprehension - 0.10.1

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
* Use separate properties workflows for Spring Boot vs Spring Cloud[bot]
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

#### rewrite-ai-search - 0.32.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-android - 0.15.0

* Fix recipe references

#### rewrite-angular - v0.1.0

* New `UpdateComponentTemplateUrl` recipe
* Change group ID to `io.moderne.recipe`

#### rewrite-azul - 0.8.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-circleci - 3.9.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-codemods - 0.22.0

* Use `PrintOutputCapture.MarkerPrinter.SANITIZED`
* chore(deps): bump js-yaml from 4.1.0 to 4.1.1 in /src/main/resources/codemods[bot]
* Link to ESLint docs

#### rewrite-codemods-ng - 0.15.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-compiled-analysis - 0.11.0

* Common static analysis issues

#### rewrite-comprehension - 0.10.0

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
* Bump js-yaml from 3.14.1 to 3.14.2 in /recipes-nodejs[bot]
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

## November 5, 2025

#### rewrite-comprehension - 0.9.0

* Gradle 9.2.0

#### rewrite-cryptography - 0.11.0

* Gradle 9.2.0

#### rewrite-devcenter - 1.11.0

* Gradle 9.2.0
* Different order of dependencies in the `devcenterWithMultipleLibraryUpgradeRecipesHasCorrectData` test

#### rewrite-hibernate - 0.14.0

* Common static analysis issues
* OpenRewrite recipe best practices
* Gradle 9.2.0
* Fixing usage of `J.VariableDeclarations.NamedVariable` to use `.getName()` call instead of raw `NamedVariable` when providing arguments to `.apply(..)`, as it couldn't cast `NamedVariable` to `Expression`.

#### rewrite-java-security - 3.21.0

* Added an option to skip fixes when they are not severe enough to allow for focussing on higher severity cases first.
* OpenRewrite recipe best practices
* Gradle 9.2.0
* Reuse dependency graph functionality from core
* Update expected Jersey versions to 4.0.0

#### rewrite-spring - 0.16.0

* Remove duplicate security recipes
* Add Spring Boot 4.0 base
* Common static analysis issues
* OpenRewrite recipe best practices
* Include Elastic 9, Hibernate 7, Kafka 4.1, Jakarta EE11 and JSpecify with Spring Boot 4 upgrade
* Annotate nullable web parameters with JSpecify, and remove `required = false`
* Run `licenseFormat` after generating property migrations
* Gradle 9.2.0

## November 4, 2025

#### rewrite-ai-search - 0.32.0

* Gradle 9.2.0

#### rewrite-android - 0.14.0

* Gradle 9.2.0

#### rewrite-azul - 0.8.0

* Gradle 9.2.0

#### rewrite-circleci - 3.9.0

* Gradle 9.2.0

#### rewrite-codemods - 0.21.0

* OpenRewrite recipe best practices
* Gradle 9.2.0

#### rewrite-codemods-ng - 0.15.0

* Gradle 9.2.0

#### rewrite-compiled-analysis - 0.10.0

* Gradle 9.2.0

#### rewrite-concourse - 3.9.0

* Gradle 9.2.0

#### rewrite-dotnet - 0.14.0

* Gradle 9.2.0

#### rewrite-elastic - 0.4.0

* Common static analysis issues
* Gradle 9.2.0

#### rewrite-kafka - 0.4.0

* Gradle 9.2.0

#### rewrite-kubernetes - 3.13.0

* Common static analysis issues
* Gradle 9.2.0

#### rewrite-nodejs - 0.33.0

* Dropping usage of `immer`'s `castDraft(..)` as it was causing a leak of binary expressions across test executions
* Add `ReplaceDeprecatedBufferSlice` recipe
* Gradle 9.2.0
* Add JUnit platform launcher

#### rewrite-program-analysis - 0.6.0

* Gradle 9.2.0

#### rewrite-reactive-streams - 0.18.0

* Gradle 9.2.0

#### rewrite-sql - 2.8.0

* Common static analysis issues
* Gradle 9.2.0

#### rewrite-struts - 0.23.0

* Gradle 9.2.0

#### rewrite-terraform - 3.11.0

* Gradle 9.2.0

## October 24, 2025

#### rewrite-nodejs - 0.32.5

* OpenRewrite recipe best practices

## October 23, 2025

#### rewrite-nodejs - 0.32.4

* Also remove `util` module import if possible

## October 22, 2025

#### rewrite-ai-search - 0.31.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-android - 0.13.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-azul - 0.7.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-circleci - 3.8.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-codemods - 0.20.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-codemods-ng - 0.14.4

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-compiled-analysis - 0.9.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-comprehension - 0.8.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-concourse - 3.8.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-cryptography - 0.10.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-devcenter - 1.10.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-dotnet - 0.13.5

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-elastic - 0.3.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-hibernate - 0.13.2

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-hibernate - 0.13.1

* Move changing jakarta.persistence.criteria.Expression 'as' to 'cast' to hibernate-7.0

#### rewrite-java-security - 3.20.0

* Tests expect org.apache.tomcat.embed:tomcat-embed-core:9.0.111 now
* Update suppressions
* Fix Maven tests that needs to reflect because information
* Fix failing tests by also calling the scanner for the direct dependency updates and not only for the transitive ones.

#### rewrite-kafka - 0.3.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-kubernetes - 3.12.0

* Update suppressions

#### rewrite-nodejs - 0.32.3

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-program-analysis - 0.5.6

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-reactive-streams - 0.17.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-spring - 0.15.0

* Update suppressions
* `beans.xml` to Java configuration migration
* When migrating from web.xml to ApplicationInitializer ignore context and listeners
* Recipe to convert field injection to constructor injection

#### rewrite-sql - 2.7.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-struts - 0.22.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-terraform - 3.10.0

* Update suppressions

## October 18, 2025

#### rewrite-nodejs - 0.32.1

* Handle negations of the `util.is` calls too

## October 10, 2025

#### rewrite-ai-search - 0.31.0

* Update recipe documentation examples

#### rewrite-android - 0.13.0

* Update recipe documentation examples

#### rewrite-azul - 0.7.0

* Update recipe documentation examples

#### rewrite-circleci - 3.8.0

* Update recipe documentation examples

#### rewrite-codemods - 0.20.0

* feat: add ReactI18Next recipe for jscodeshift-react-i18next integration

#### rewrite-codemods-ng - 0.14.3

* Updated repository to use OpenRewrite version v8.63.0

#### rewrite-compiled-analysis - 0.9.0

* Add new documentation examples
* Update recipe documentation examples

#### rewrite-comprehension - 0.8.0

* Updating Gemini to gemini-2.5-flash
* Update recipe documentation examples

#### rewrite-concourse - 3.8.0

* Update recipe documentation examples

#### rewrite-cryptography - 0.10.0

* Update recipe documentation examples

#### rewrite-devcenter - 1.10.0

* Detect JUnit 6
* OpenRewrite recipe best practices

#### rewrite-dotnet - 0.13.4

* Updated repository to use OpenRewrite version v8.63.0

#### rewrite-elastic - 0.3.0

* Update recipe documentation examples
* Update junit-platform.properties

#### rewrite-hibernate - 0.13.0

* Remove hibernate-commons-annotations in favor of hibernate-core
* Add OpenRewrite recipe for Hibernate 7 JFR API migration
* `Configurable::configure` now takes `GeneratorCreationContext`
* Add `MigrateIntegratorMethod` recipe for Hibernate 7 migration
* Migrate query `FlushModeType` to `QueryFlushMode`
* MetamodelImplementor was removed in favor of MappingMetamodel or JpaMetamodel
* Added UnboxingTransactionTimeoutTest recipe
* Update recipe documentation examples

#### rewrite-java-security - 3.19.2

* Updated repository to use OpenRewrite version v8.63.0

#### rewrite-kafka - 0.3.0

* Update recipe documentation examples

#### rewrite-kubernetes - 3.11.0

* Update recipe documentation examples

#### rewrite-nodejs - 0.30.0

* Update recipe documentation examples

#### rewrite-program-analysis - 0.5.5

* Updated repository to use OpenRewrite version v8.63.0

#### rewrite-reactive-streams - 0.17.0

* Update recipe documentation examples

#### rewrite-spring - 0.14.0

* Adopt `gradle/actions/setup-gradle@v5`
* Update recipe documentation examples

#### rewrite-sql - 2.7.0

* Switch to jsqlparser-4.9
* JSQLParser 5.3
* Add Oracle and MSFT SQL Server to PostgreSQL migration recipes
* Update recipe documentation examples

#### rewrite-struts - 0.22.0

* Update recipe documentation examples
* Update documentation examples

#### rewrite-terraform - 3.9.0

* Update recipe documentation examples

## October 9, 2025

#### rewrite-java-security - 3.19.1

* Application properties detection
* Try to skip errors on resolving versions and only throw when no direct was able to bump the vulnerability.
* Add a data table to RemoveUnusedDependencies which cites evidence of a dependency use
* Update recipe documentation examples
* Add new documentation examples
* Avoid stackoverflow exception

## September 30, 2025

#### rewrite-cryptography - v0.8.3

- Fill in missing sinks for hardcoded algorithms and providers
- Include BCJSSE and BCFIPS in the list of hardcoded providers in 56736bd
- Also track hardcoded algorithm parameters flowing into cipher configuration @sambsnyd in 8398e13
- Add more more objects as possible sinks for hardcoded algorithm parameters  @sambsnyd in 2a9c97f

#### rewrite-program-analysis - v0.5.4

- Fix TaintFlow data table rows listing incorrect source file.

## September 24, 2025

#### rewrite-ai-search - 0.30.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-android - 0.12.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-azul - 0.6.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-circleci - 3.7.5

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-codemods - 0.19.0

* chore: update @ui5/linter from 1.12.0 to 1.19.0

#### rewrite-codemods-ng - 0.14.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-compiled-analysis - 0.8.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-comprehension - 0.7.7

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-concourse - 3.7.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-cryptography - 0.9.0

* Add README.md

#### rewrite-devcenter - 1.9.0

* Track upgrades to Java 25

#### rewrite-dotnet - 0.13.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-elastic - 0.2.0

* Created ChangeApiNumericFieldType recipe
* Added some other types that have changed

#### rewrite-hibernate - 0.12.0

* Rename a file
* Update type tables via `./gradlew createTypeTable`

#### rewrite-java-security - 3.19.0

* Rename a file
* Update type tables via `./gradlew createTypeTable`
* Only generate Spring `SecurityConfig` when `spring-security-config` is present
* Fix RemoveUnusedDependencies to retain method declaring types

#### rewrite-kafka - 0.2.0

* Migrate Kafka to 4.0
* Migrate to `KafkaProducer:sendOffsetsToTransaction(Map, ConsumerGroupMetadata)` since deprecated `KafkaProducer:sendOffsetsToTransaction(Map, String)` is now removed
* Remove `checksum` from `RecordMetadata` constructor
* Migrate `consumer.poll(long)` to `consumer.poll(Duration)`
* Add MigrateConsumerCommittedToSet recipe for Kafka 4.0 migration
* Remove deprecated props
* Add declarative recipe for migrating ConsumerGroupState to GroupState in Kafka 4.0
* Migrate AdminClient.alterConfigs() to incrementalAlterConfigs() for Kafka 4.0
* Migrate to kafka 4.1
* Added recipes for deprecations in Kafka 4.1

#### rewrite-kubernetes - 3.10.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-nodejs - 0.29.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-program-analysis - 0.5.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-reactive-streams - 0.16.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-spring - 0.13.1

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-sql - 2.6.5

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-struts - 0.21.0

* Rename a file
* Update type tables via `./gradlew createTypeTable`

#### rewrite-terraform - 3.8.2

* Updated repository to use OpenRewrite version v8.62.4

## September 19, 2025

#### rewrite-cryptography - v0.8.2

**What's changed**

- Upgrade to rewrite-program-analysis 0.5.2

#### rewrite-program-analysis - v0.5.2

* Track taint flow into method receivers from their arguments, fixing a common NPE
* Add line numbers for sources and sinks to TaintFlowTable
* Check non-literal initializer expressions for taint

## September 10, 2025

#### rewrite-ai-search - 0.30.2

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-android - 0.12.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-azul - 0.6.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-circleci - 3.7.4

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-codemods - 0.18.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-codemods-ng - 0.14.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-compiled-analysis - 0.8.2

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-comprehension - 0.7.6

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-concourse - 3.7.2

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-cryptography - 0.8.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-devcenter - 1.8.0

* Add a Quarkus specific DevCenter
* Do not assume `org.openrewrite.dataTables` messages preserve order in `DataTableWatcher`

#### rewrite-dotnet - 0.13.2

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-elastic - v0.1.0

* Migrate to v9 initial recipe
* Rename `*Reponse valueBody()` methods for ElasticSearch 9
* Map indicesBoost and dynamicTemplates `Map` to `NamedValue`
* `Hit matchedQueries()` changed from `List&lt;String&gt;` to `Map&lt;String, Double&gt;`
* Add comments to deprecated classes
* Migrate source field from String to ScriptSource
* Added BoxedApiFields recipe and the singular BoxedApiField recipe

#### rewrite-hibernate - 0.11.0

* Introduce (Composite)UserType recipes
* Inline methods annotated with `@InlineMe`
* Hibernate 7: JdbcType to JdbcTypeCode

#### rewrite-java-security - 3.18.0

* DependencyVulnerabilityCheck recipe produces a data table for tracking the origin of a vulnerable dependency

#### rewrite-kafka - v0.1.0

* Migrate `WindowStore.put()`
* Add tests for migrating Joined.named() to Joined.as()
* Change group id
* Add RemovePartitionGrouperConfiguration recipe
* Add Kafka 2.5 migration recipe for KafkaStreams#store method
* Improve declarative recipes
* Add MigrateKStream: `.groupByKey().reduce` to `.toTable`
* Add MigrateRetryConfiguration recipe for Kafka 2.7
* Add MigrateStreamsUncaughtExceptionHandler recipe
* Add Kafka 3.0 migration recipes

#### rewrite-kubernetes - 3.10.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-nodejs - 0.29.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-program-analysis - 0.5.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-reactive-streams - 0.16.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-spring - 0.13.0

* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-09-02T1110[bot]
* Leverage the OSS Spring Boot 3.5 migration recipes
* Migrate `AntPathRequestMatcher`

#### rewrite-sql - 2.6.4

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-struts - 0.20.0

* Use type tables to support multiple versions
* Enhance MigrateAwareInterfaces recipe with method renames for Struts 6
* Add Dynamic Method Invocation migration recipe for Struts 6

#### rewrite-terraform - 3.8.1

* Updated repository to use OpenRewrite version v8.62.0

## September 5, 2025

#### rewrite-cryptography - v0.8.0

* Implement custom taint flow messages for cryptography specs
* Add a rewrite-cryptography-bom which contains just this project. Apparently this is useful for some corporate procurement processes.
* Add FindSecurityModifications recipe to produce a data table of mutating methods invoked on java.lang.Security instances.
* Add SSLSocket parameters search/data table recipe.
* Add search/data table recipe to aggregate RSAKeyGenParameters.
* Add Cipher.unwrap() as a possible sink for of hardcoded algorithms

#### rewrite-program-analysis - v0.5.0

* Fix NPE in `FindNullPointerIssues`
* Add custom source and sink messages to TaintFlowSpec
* Fix taint tracking from static initializer blocks

## August 27, 2025

#### rewrite-ai-search - 0.30.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-circleci - 3.7.3

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-codemods - 0.18.0

* chore(deps): bump brace-expansion from 1.1.11 to 1.1.12 in /src/main/resources/codemods[bot]

#### rewrite-codemods-ng - 0.14.0

* chore(deps): bump brace-expansion from 2.0.1 to 2.0.2 in /src/main/resources/codemods[bot]

#### rewrite-compiled-analysis - 0.8.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-comprehension - 0.7.5

* Apply OpenRewrite best practices

#### rewrite-concourse - 3.7.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-devcenter - 1.7.0

* DevCenter for Apache Maven org in app.moderne.io

#### rewrite-dotnet - 0.13.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-hibernate - 0.10.0

* Replace annotation for Hibernate 7.0
* Migrate Session load, get and refresh to getReference, find and refresh
* Migrate Hibernate CascadeType constants
* NaturalIdLoadAccess#using(Object...) and NaturalIdMultiLoadAccess#compoundValue(Object...) removed in favor of (Map) variants
* Hibernate7: LockRequest to new LockOptions implementation
* Remove Unnecessary Cast to Session from createEntityManager
* Hibernate7 - Remove deprecated LockOptions

#### rewrite-java-security - 3.17.0

* chore(ci): bump actions/setup-java from 4 to 5[bot]

#### rewrite-program-analysis - 0.4.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-reactive-streams - 0.16.0

* Use classpath from resource for Refaster

#### rewrite-spring - 0.12.0

* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-08-19T1107[bot]
* Use the property migrations from OSS rewrite-spring
* Remove duplicate UpgradeSpringKafka_3_0 recipe
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-08-26T1110[bot]
* Add Spring Boot 3.5 deprecation recipes
* Enabled test after upstream fix

#### rewrite-sql - 2.6.3

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-struts - 0.19.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-terraform - 3.8.0

* Find required providers

## August 22, 2025

#### rewrite-java-security - v3.16.1

* Fix `DependencyVulnerabilityCheckTest` after new vulnerabilities were added
* Fix password detection regex to handle dots and special characters in URLs
* Remove private IP addresses from comments

## August 12, 2025

#### rewrite-android - 0.11.2

* Updated repository to use OpenRewrite version v8.60.0

#### rewrite-circleci - 3.7.2

* Updated repository to use OpenRewrite version v8.60.0

#### rewrite-codemods - 0.17.0

* Refactor RewriteTest to use defaults method

#### rewrite-comprehension - 0.7.4

* Updated repository to use OpenRewrite version v8.60.0

#### rewrite-hibernate - 0.9.0

* Add `cascade=PERSIST` for @Id and @MapsId Attributes
* Replace `@Target` to `@TargetEmbeddable`

#### rewrite-java-security - 3.16.0

* Remove jackson from the fixesVulnerableDependenciesDeclaredInBaseAndS…
* Apply code suggestions

#### rewrite-kubernetes - 3.9.0

* Refactor RewriteTest to use defaults method

#### rewrite-sql - 2.6.2

* Updated repository to use OpenRewrite version v8.60.0

#### rewrite-struts - 0.19.0

* rename settings.local.json to settings.json

## July 23, 2025

#### rewrite-ai-search - 0.29.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-ai-search - 0.29.0

* common static analysis issues

#### rewrite-android - 0.11.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-android - 0.11.0

* common static analysis issues

#### rewrite-azul - 0.4.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-circleci - 3.7.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-codemods - 0.16.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-codemods-ng - 0.12.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-codemods-ng - 0.12.0

* Add the `--no-audit` and `--no-fund` flags

#### rewrite-compiled-analysis - 0.7.3

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-compiled-analysis - 0.7.2

* Updated repository to use OpenRewrite version v8.59.0

#### rewrite-comprehension - 0.7.3

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-comprehension - 0.7.2

* Updated repository to use OpenRewrite version v8.59.0

#### rewrite-concourse - 3.6.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-cryptography - 0.6.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-devcenter - 1.5.0

* Remove original security card

#### rewrite-dotnet - 0.12.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-dotnet - 0.12.0

* common static analysis issues

#### rewrite-hibernate - 0.9.0

* Hibernate7 misc type changes
* Test the total of Hibernate 7.0 migration

#### rewrite-hibernate - 0.8.0

* Migrate deprecated Session interface methods to their Hibernate 7.0 replacements
* Migrate from JPA EntityManager to Hibernate Session
* Remove hibernate.annotations
* Migrate Session save/update/delete method calls

#### rewrite-java-security - 3.15.0

* Find hard-coded IPv4 loopback addresses
* Test cases that demonstrate behavior for direct dependencies

#### rewrite-kubernetes - 3.8.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-nodejs - 0.27.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-nodejs - 0.27.0

* common static analysis issues

#### rewrite-program-analysis - 0.1.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-program-analysis - v0.1.0

* Initial version

#### rewrite-reactive-streams - 0.14.3

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-reactive-streams - 0.14.2

* Updated repository to use OpenRewrite version v8.59.0

#### rewrite-spring - 0.10.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-spring - 0.10.0

* common static analysis issues

#### rewrite-sql - 2.6.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-struts - 0.18.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-terraform - 3.6.1

* Updated repository to use OpenRewrite version v8.59.1

#### rewrite-vulncheck - 0.4.1

* Updated repository to use OpenRewrite version v8.59.1

## July 15, 2025

#### rewrite-devcenter - 1.4.7

* Adjust ordinal to be non-sparse

## July 11, 2025

#### rewrite-devcenter - 1.4.6

* common static analysis issues
* Do not return measures above the major version. for JavaVersionUpgrade

## July 9, 2025

#### rewrite-ai-search - 0.28.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-android - 0.10.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-azul - 0.3.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-circleci - 3.6.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-codemods - 0.15.0

* common static analysis issues

#### rewrite-codemods-ng - 0.11.0

* Make the local `npm install` be aware of the .npmrc file

#### rewrite-compiled-analysis - v0.7.1

* Update for maven central

#### rewrite-comprehension - v0.7.1

* Updates publish maven central workflow

#### rewrite-concourse - 3.5.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-cryptography - 0.5.0

* refactor: org.openrewrite.mavencentral

#### rewrite-devcenter - 1.4.5

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-dotnet - 0.11.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-hibernate - 0.7.0

* refactor: org.openrewrite.mavencentral

#### rewrite-java-security - 3.14.0

* Use test fixtures and properly set up test case
* refactor: org.openrewrite.mavencentral
* common static analysis issues

#### rewrite-spring - 0.9.0

* Change Project structure from Spring Framework to Spring Boot
* `web.xml` entries to `WebApplicationInitializer`
* refactor: org.openrewrite.mavencentral
* Migrate `display-name` and `env-entry`

#### rewrite-struts - 0.17.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-terraform - 3.5.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-vulncheck - 0.4.0

* refactor: org.openrewrite.mavencentral

## July 4, 2025

#### rewrite-devcenter - 1.4.4

* Use updated organizations-format method

#### rewrite-devcenter - 1.4.3

* Reflective DevCenter card
* rename aggregation -&gt; summarizing in javadoc
* refactor: org.openrewrite.mavencentral
* Pin organizations-format to be able to build & release for a CLI patch release

## June 25, 2025

#### rewrite-azul - 0.3.0

* Adopt Moderne recipe module CI workflows

#### rewrite-codemods - 0.14.1

* Updated repository to use OpenRewrite version v8.56.0

#### rewrite-codemods-ng - 0.10.1

* Updated repository to use OpenRewrite version v8.56.0

#### rewrite-cryptography - 0.3.0

* Apply best practices to stop unrelated PR feedback

#### rewrite-devcenter - 1.4.2

* Updated repository to use OpenRewrite version v8.56.0

#### rewrite-hibernate - 0.6.0

* Add basic hibernate 7 migration

#### rewrite-java-security - 3.13.0

* Fix CVE marker
* Parameter has been removed in class
* Gradle plugins that add vulnerable dependencies do not get fixed
* Remove Markers from DependencyVulnerabilityCheck
* CI batch was still pointing to public repo
* Check if vulnerability affects any of the accepted fixed vulnerabilities in version range
* Don't omit entries from the report just because fixes are not yet available
* Reuable fixture for testing DependencyVulnerabilityCheck with static data
* DataTable for `org.openrewrite.text.FindHardcodedPrivateIPAddresses`
* Same tree if nothing to fix

#### rewrite-spring - 0.8.0

* Add support for Spring Cloud Property migrations
* Add property migration generator for boot
* Add property generation to workflow
* Added migration from `spring-cloud-starter-gateway` to `spring-cloud-starter-gateway-server-webflux`
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-06-19T2137

#### rewrite-sql - 2.4.1

* Updated repository to use OpenRewrite version v8.56.0

#### rewrite-struts - 0.17.0

* Add `MigrateStruts6Constants` to the `MigrateStruts6` umbrella recipe

#### rewrite-vulncheck - 0.3.0

* Update build.gradle.kts

## June 24, 2025

#### rewrite-devcenter - 1.4.1

* Use univocity-parsers for CSV parsing
* Use FQN check instead of instanceof to avoid parent classloading of `UpgradeMigrationCard` and `ReportAsSecurityIssues`

## June 18, 2025

#### rewrite-cryptography - v0.2.2

* pin dependency versions to align with 0.2.0

## June 17, 2025

#### rewrite-cryptography - v0.2.1

# What's Changed

- Fix recipe name

## June 15, 2025

#### rewrite-devcenter - 1.4.0

* Aggregate DevCenter by organization from data table output

## June 9, 2025

#### rewrite-java-security - v3.12.0

* Expose method for overriding baseline vulnerabilities
* netty 4.1.122 in doNotAddEmptyConstraintsBlockForTransitiveDependenci…
* Marker for CVE fixes
* Fix signature of class constructor

## June 4, 2025

#### rewrite-devcenter - 1.3.0

* Update `SpringBootUpgradeStarter` to migrate to spring boot 3.5.0
* Include parent recipes as `DevCenter:fix` and `DevCenter:security` recipes before search their child recipes
* No more DevCenter recipe tags, align instance name on data table to card

## May 30, 2025

#### rewrite-spring - v0.7.3

* Update recipes and tests for Spring Boot 3.5 and Spring Cloud 2025

## May 29, 2025

#### rewrite-spring - v0.7.2

* Fix moved reference to `UpgradeSpringCloud_2024`

## May 28, 2025

#### rewrite-ai-search - 0.27.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-android - 0.9.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-azul - 0.2.0

* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices
* refactor: Extract documentation examples from tests
* refactor: Update Gradle wrapper to 8.14
* refactor: OpenRewrite Recipe best practices
* refactor: Find and replace
* refactor: Delete `gradle_enterprise_access_key`
* Switch over to moderneinc/gh-automation

#### rewrite-circleci - 3.5.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-comprehension - 0.6.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-concourse - 3.4.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-dotnet - 0.10.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-hibernate - 0.5.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-java-security - 3.11.0

* Harden parsing logic of all possible DTD ENTITY definitions

#### rewrite-reactive-streams - 0.13.1

* Updated repository to use OpenRewrite version v8.54.0

#### rewrite-spring - v0.7.1

* Spring Boot 3.5 release & Spring Cloud 2025

#### rewrite-vulncheck - 0.2.0

* Fix usage of Vulnerability constructor
* Adapt to new constructor of VulnerabilityReport.Row
* Fixing code suggestions
* Made transitive dependency bump a ScanningRecipe

## May 24, 2025

#### rewrite-devcenter - 1.2.0

* Add `ParentPomUpgrade` starter card recipe

## May 22, 2025

#### rewrite-devcenter - 1.1.3

* Add `rewrite-java-21` test dependency to align rewrite versions

#### rewrite-devcenter - 1.1.1

* Add `rewrite-java-21` test dependency to align rewrite versions

## May 21, 2025

#### rewrite-devcenter - 1.1.0

* Make `DevCenterMeasurer` a non-generic interface to avoid class loading issues when reading measures in CLI

## May 20, 2025

#### rewrite-java-security - v3.9.0

* Recreate type table using latest patch versions
* Made transitive dependency bump a ScanningRecipe
* `DependencyVulnerabilityCheck` recursively checks upgrade paths for transitive dependencies

## May 7, 2025

#### rewrite-ai-search - 0.27.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-android - 0.9.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-circleci - 3.5.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-codemods - 0.13.0

* refactor: OpenRewrite Recipe best practices

#### rewrite-codemods-ng - 0.9.0

* refactor: Update Gradle wrapper to 8.14
* Retrieve .npmrc file from global scope

#### rewrite-concourse - 3.4.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-dotnet - 0.10.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-java-security - 3.8.0

* refactor: Update Gradle wrapper to 8.14
* Inline DocumentBuilderFactory feature variables

#### rewrite-kubernetes - 3.4.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-nodejs - 0.23.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-reactive-streams - 0.13.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-spring - 0.6.0

* refactor: Update Gradle wrapper to 8.14
* Delegate to the OSS `UpgradeSpringBoot_3_4`
* 1117 spring boot 35 follow redirects with testresttemplate
* Spring Boot 3.5 recipe

#### rewrite-sql - 2.3.0

* refactor: Update Gradle wrapper to 8.14

#### rewrite-terraform - 3.3.0

* refactor: Update Gradle wrapper to 8.14

## April 24, 2025

#### rewrite-ai-search - 0.26.0

* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests

#### rewrite-android - 0.8.0

* refactor: Extract documentation examples from tests

#### rewrite-circleci - 3.4.0

* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests

#### rewrite-codemods - 0.12.2

* Updated repository to use OpenRewrite version v8.51.0

#### rewrite-compiled-analysis - 0.4.2

* Updated repository to use OpenRewrite version v8.51.0

#### rewrite-comprehension - 0.5.4

* Updated repository to use OpenRewrite version v8.51.0

#### rewrite-concourse - 3.3.0

* refactor: Extract documentation examples from tests

#### rewrite-java-security - 3.7.0

* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests
* Ignore the TraitErrorsException in XmlParserXXEVulnerability
* Update DocumentBuilderFactoryFixVisitor.java

#### rewrite-kubernetes - 3.3.0

* refactor: New line at the end of `SourceSpecs` text blocks
* Skip .csproj files when finding hardcoded IP addresses
* refactor: Extract documentation examples from tests

#### rewrite-nodejs - 0.22.0

* refactor: Extract documentation examples from tests

#### rewrite-reactive-streams - 0.12.0

* refactor: Extract documentation examples from tests

#### rewrite-spring - 0.5.0

* refactor: Extract documentation examples from tests
* Bump spring AWS cloud if applicable when migrating to spring boot 3.4

#### rewrite-sql - 2.2.0

* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests

#### rewrite-terraform - 3.2.0

* refactor: Extract documentation examples from tests

