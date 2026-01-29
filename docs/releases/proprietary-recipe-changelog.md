---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases and only contains information from the past year.
:::

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

## January 23, 2026

#### rewrite-spring - v0.22.0

* Acegi to Spring Security 5.0 migration recipe
* Add Spring Kafka search recipes

## January 20, 2026

#### rewrite-ai-search - 0.32.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-android - 0.15.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-azul - 0.8.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-circleci - 3.9.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-codemods-ng - 0.17.0

* chore(deps): bump tmp and @angular/cli in /src/main/resources/codemods[bot]
* Add Angular v20 and v21 upgrade recipes

#### rewrite-compiled-analysis - 0.11.4

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-concourse - 3.9.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-dotnet - 0.14.5

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-elastic - 0.5.1

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-hibernate - 0.17.0

* Remove hibernate-proxool and hibernate-vibur dependencies for Hibernate 7

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

#### rewrite-ai-search - 0.32.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-android - 0.15.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-azul - 0.8.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-circleci - 3.9.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-codemods-ng - 0.16.2

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-compiled-analysis - 0.11.3

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-concourse - 3.9.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-dotnet - 0.14.4

* Updated repository to use OpenRewrite version v8.71.0

#### rewrite-elastic - 0.5.0

* Add or update recipe category descriptors
* End recipe description with dot to fix validation

#### rewrite-hibernate - 0.16.0

* Add Hibernate 7.2 migration recipe

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

#### rewrite-terraform - 3.11.4

* Updated repository to use OpenRewrite version v8.71.0

## December 16, 2025

#### rewrite-ai-search - 0.32.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-android - 0.15.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-azul - 0.8.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-circleci - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-codemods-ng - 0.16.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-compiled-analysis - 0.11.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-comprehension - 0.10.2

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-concourse - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-dotnet - 0.14.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-elastic - 0.4.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-hibernate - 0.15.2

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

#### rewrite-terraform - 3.11.3

* Updated repository to use OpenRewrite version v8.69.0

## December 5, 2025

#### rewrite-ai-search - 0.32.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-android - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-azul - 0.8.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-circleci - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-codemods-ng - 0.16.0

* chore(deps): bump glob from 10.3.10 to 10.5.0 in /src/main/resources/codemods[bot]

#### rewrite-compiled-analysis - 0.11.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-comprehension - 0.10.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-concourse - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-dotnet - 0.14.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-elastic - 0.4.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-hibernate - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

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

#### rewrite-terraform - 3.11.2

* Updated repository to use OpenRewrite version v8.68.1

## November 20, 2025

#### rewrite-ai-search - 0.32.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-android - 0.15.0

* Fix recipe references

#### rewrite-azul - 0.8.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-circleci - 3.9.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-codemods-ng - 0.15.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-compiled-analysis - 0.11.0

* Common static analysis issues

#### rewrite-comprehension - 0.10.0

* Common static analysis issues

#### rewrite-concourse - 3.9.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-dotnet - 0.14.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-elastic - 0.4.1

* Updated repository to use OpenRewrite version v8.67.0

#### rewrite-hibernate - 0.15.0

* Do not duplicate the Java 17 migration when included in Spring Boot 4

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

#### rewrite-terraform - 3.11.1

* Updated repository to use OpenRewrite version v8.67.0

## November 5, 2025

#### rewrite-comprehension - 0.9.0

* Gradle 9.2.0

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

#### rewrite-codemods-ng - 0.14.4

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-compiled-analysis - 0.9.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-comprehension - 0.8.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-concourse - 3.8.1

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

#### rewrite-codemods-ng - 0.14.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-compiled-analysis - 0.8.3

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-comprehension - 0.7.7

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-concourse - 3.7.3

* Updated repository to use OpenRewrite version v8.62.4

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

#### rewrite-terraform - 3.8.2

* Updated repository to use OpenRewrite version v8.62.4

## September 19, 2025

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

#### rewrite-codemods-ng - 0.14.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-compiled-analysis - 0.8.2

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-comprehension - 0.7.6

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-concourse - 3.7.2

* Updated repository to use OpenRewrite version v8.62.0

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

#### rewrite-terraform - 3.8.1

* Updated repository to use OpenRewrite version v8.62.0

## September 5, 2025

#### rewrite-program-analysis - v0.5.0

* Fix NPE in `FindNullPointerIssues`
* Add custom source and sink messages to TaintFlowSpec
* Fix taint tracking from static initializer blocks

## August 27, 2025

#### rewrite-ai-search - 0.30.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-circleci - 3.7.3

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-codemods-ng - 0.14.0

* chore(deps): bump brace-expansion from 2.0.1 to 2.0.2 in /src/main/resources/codemods[bot]

#### rewrite-compiled-analysis - 0.8.1

* Updated repository to use OpenRewrite version v8.61.1

#### rewrite-comprehension - 0.7.5

* Apply OpenRewrite best practices

#### rewrite-concourse - 3.7.1

* Updated repository to use OpenRewrite version v8.61.1

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

#### rewrite-terraform - 3.6.1

* Updated repository to use OpenRewrite version v8.59.1

## July 9, 2025

#### rewrite-ai-search - 0.28.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-android - 0.10.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-azul - 0.3.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-circleci - 3.6.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-codemods-ng - 0.11.0

* Make the local `npm install` be aware of the .npmrc file

#### rewrite-compiled-analysis - v0.7.1

* Update for maven central

#### rewrite-comprehension - v0.7.1

* Updates publish maven central workflow

#### rewrite-concourse - 3.5.1

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

#### rewrite-terraform - 3.5.1

* Updated repository to use OpenRewrite version v8.57.0

## June 25, 2025

#### rewrite-azul - 0.3.0

* Adopt Moderne recipe module CI workflows

#### rewrite-codemods-ng - 0.10.1

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

## June 9, 2025

#### rewrite-java-security - v3.12.0

* Expose method for overriding baseline vulnerabilities
* netty 4.1.122 in doNotAddEmptyConstraintsBlockForTransitiveDependenci…
* Marker for CVE fixes
* Fix signature of class constructor

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

## April 15, 2025

#### rewrite-codemods-ng - 0.8.2

* fix: update install command with proper --ignore-scripts

## April 10, 2025

#### rewrite-ai-search - 0.25.4

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-android - 0.7.7

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-circleci - 3.3.4

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-codemods-ng - 0.8.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-compiled-analysis - 0.4.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-comprehension - 0.5.3

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-concourse - 3.2.4

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-dotnet - 0.8.4

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-hibernate - 0.3.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-java-security - 3.6.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-kubernetes - 3.2.5

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-nodejs - 0.21.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-reactive-streams - 0.11.3

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-spring - 0.4.1

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-sql - 2.1.6

* Updated repository to use OpenRewrite version v8.50.2

#### rewrite-terraform - 3.1.6

* Updated repository to use OpenRewrite version v8.50.2

## April 9, 2025

#### rewrite-ai-search - 0.25.3

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-android - 0.7.6

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-circleci - 3.3.3

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-codemods-ng - 0.8.0

* Needs to make `ExecutionContext` mutable in test case
* Fix for windows
* Skip non-Angular projects instead of throwing an exception

#### rewrite-comprehension - 0.5.2

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-concourse - 3.2.3

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-dotnet - 0.8.3

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-java-security - 3.6.0

* Adapt to DependencyVersionSelector new arg
* Revert "Adapt to DependencyVersionSelector new arg"
* Fixing code suggestions

#### rewrite-kubernetes - 3.2.4

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-reactive-streams - 0.11.2

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-spring - 0.4.0

* Recipe for replacing deprecated Kafka 'ContainerProperties#setTransactionManager' method
* Include the OSS recipe for Spring Framework 6.2

#### rewrite-sql - 2.1.5

* Updated repository to use OpenRewrite version v8.50.0

#### rewrite-terraform - 3.1.5

* Updated repository to use OpenRewrite version v8.50.0

## March 28, 2025

#### rewrite-java-security - 3.5.0

* FindHardcodedPrivateIPAddresses recipe
* Adding \b to regexp for FindHardcodedPrivateIPAddresses

## March 27, 2025

#### rewrite-ai-search - 0.25.2

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-android - 0.7.5

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-circleci - 3.3.2

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-codemods-ng - 0.7.5

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-compiled-analysis - 0.3.0

* Ignore missing types in Javadoc

#### rewrite-comprehension - 0.5.1

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-concourse - 3.2.2

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-dotnet - 0.8.2

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-hibernate - 0.2.2

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-java-security - 3.4.0

* Honoring the last_affected field in security advisories
* Faster, stronger "Find and fix vulnerable dependencies"
* refactor: Remove out-of-date OWASP suppressions
* mavenTransitiveUpgradeDirectLowestDepth doesn't expect exact version
* refactor: OpenRewrite Recipe best practices
* chore(ci): bump webfactory/ssh-agent from 0.9.0 to 0.9.1

#### rewrite-kubernetes - 3.2.3

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-nodejs - 0.20.0

* Honoring the last_affected field in security advisories

#### rewrite-reactive-streams - 0.11.1

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-sql - 2.1.4

* Updated repository to use OpenRewrite version v8.49.0

#### rewrite-terraform - 3.1.4

* Updated repository to use OpenRewrite version v8.49.0

## March 11, 2025

#### rewrite-ai-search - 0.25.1

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-android - 0.7.4

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-circleci - 3.3.1

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-codemods-ng - 0.7.4

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-compiled-analysis - 0.2.6

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-concourse - 3.2.1

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-dotnet - 0.8.1

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-hibernate - 0.2.1

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-java-security - 3.3.0

* Fix failing `PreventClickjackingTest` test cases
* Add date to dependency vulnerability check recipe description
* `DependencyVulnerabilityCheck`: Allow Maven Central access for Maven projects
* `VulnerabilityReport` must contain all vulnerabilities
* Fix storing of date
* Add scope explanation

#### rewrite-kubernetes - 3.2.2

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-spring - 0.3.2

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-sql - 2.1.3

* Updated repository to use OpenRewrite version v8.48.0

#### rewrite-terraform - 3.1.3

* Updated repository to use OpenRewrite version v8.48.0

## February 27, 2025

#### rewrite-spring - v0.3.1

* Update with rewrite-logging-frameworks 3.3.0 which uses type tables so this shouldn't end up blocked by security scanners anymore
* Add mybatis upgrade for SpringBoot 3.4
* Upgrade spring-security-oauth2-authorization-server
* Rename package for better categorization

## February 21, 2025

#### rewrite-java-security - 3.2.0

* Support parsing of single quote strings in DTDs
* Adopt TypeTable
* Only apply CWE-611 fix upon XML parser instantiation
* Fix Azure secret false positive and add support for properties
* Improvement speedup dependency vulnerability check recipe
* Upgrade GenerateWebSecurityConfigurerAdapter to use SecurityFilterChain

#### rewrite-spring - 0.3.0

* Add mybatis upgrade for SpringBoot 3.4
* Upgrade spring-security-oauth2-authorization-server
* Rename package for better categorization

## February 20, 2025

#### rewrite-android - 0.7.3

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-circleci - 3.3.0

* Update MergeYaml constructor

#### rewrite-codemods-ng - 0.7.3

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-compiled-analysis - 0.2.5

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-hibernate - 0.2.0

* Rename package for better categorization

#### rewrite-kubernetes - 3.2.1

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-reactive-streams - 0.10.0

* Adopt TypeTable

#### rewrite-sql - 2.1.2

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-terraform - 3.1.2

* Updated repository to use OpenRewrite version v8.47.1

## February 7, 2025

#### rewrite-android - v0.7.2

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-codemods-ng - 0.7.2

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-compiled-analysis - 0.2.4

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-comprehension - 0.3.0

* Feat feed unit tests examples for ai description

#### rewrite-concourse - 3.1.1

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-dotnet - 0.7.1

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-hibernate - 0.1.1

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-reactive-streams - 0.9.1

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-spring - 0.2.0

* Add source set to Test
* Add a Gradle test to SpringBootVersionUpgradeTest

#### rewrite-sql - 2.1.1

* Updated repository to use OpenRewrite version v8.45.0

#### rewrite-terraform - 3.1.1

* Updated repository to use OpenRewrite version v8.45.0

## February 3, 2025

#### rewrite-hibernate - v0.1.0

* Add Hibernate 6.6 migration
* Fix conflicting class type annotations in Hibernate 6.6
* Add `io.moderne.hibernate.update66.RemoveTableFromInheritedEntity` recipe
* Find JPQL definitions

#### rewrite-spring - v0.1.0

* Add Spring Boot 3.4 migration recipes
* Drop Gradle Enterprise
* Publish using alternate credentials
* Add `@Valid` annotation to fields in `@ConfigurationProperties @Validated` classes as needed
* Add `@Valid` annotations for extended nested properties
* chore: updating suppressions
* update Selenium HTML Unit driver for Spring Boot 3.4
* Add recipe to migrate `@AutoConfigureTestDatabase(replace=Replace.NONE)`
* Explicitly redeclare transitive runtime dependencies
* Migrate management endpoint security configuration for Spring 3.4
* Migrate `@Endpoint` default access settings
* Polish Spring recipes
* ConditionalOnAvailableEndpoint
* Hint at `MockBean` and `MockSpyBean` migration, other deprecations and upgrade Gradle
* Rework comment
* Add `UpgradeReactor_3_5` to Spring Boot 3.4 recipe
* move declarative recipes to namespace io.moderne
* Add `io.moderne.recipe.hibernate.MigrateToHibernate66`
* add Spring Cloud 2024 upgrade

