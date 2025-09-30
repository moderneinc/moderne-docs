---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases. Last updated: 2025-09-30
:::

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

## September 4, 2025

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

## August 7, 2025

## August 2, 2025

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

## May 22, 2025

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

## February 26, 2025

#### rewrite-spring - v0.3.1

* Update with rewrite-logging-frameworks 3.3.0 which uses type tables so this shouldn't end up blocked by security scanners anymore
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

#### rewrite-java-security - 3.2.0

* Support parsing of single quote strings in DTDs
* Adopt TypeTable
* Only apply CWE-611 fix upon XML parser instantiation
* Fix Azure secret false positive and add support for properties
* Improvement speedup dependency vulnerability check recipe
* Upgrade GenerateWebSecurityConfigurerAdapter to use SecurityFilterChain

#### rewrite-kubernetes - 3.2.1

* Updated repository to use OpenRewrite version v8.47.1

#### rewrite-reactive-streams - 0.10.0

* Adopt TypeTable

#### rewrite-spring - 0.3.0

* Add mybatis upgrade for SpringBoot 3.4
* Upgrade spring-security-oauth2-authorization-server
* Rename package for better categorization

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

## January 24, 2025

#### rewrite-ai-search - 0.24.1

* Updated repository to use OpenRewrite version v8.44.1

#### rewrite-android - 0.7.1

* Updated repository to use OpenRewrite version v8.44.1

#### rewrite-android - 0.7.0

* Create a LICENSE folder

#### rewrite-circleci - 3.1.1

* Updated repository to use OpenRewrite version v8.44.1

#### rewrite-circleci - 3.1.0

* Create a LICENSE folder

#### rewrite-codemods-ng - 0.7.1

* Create a LICENSE folder

#### rewrite-compiled-analysis - 0.2.3

* Updated repository to use OpenRewrite version v8.44.1

#### rewrite-compiled-analysis - 0.2.2

* Updated repository to use OpenRewrite version v8.44.0

#### rewrite-comprehension - 0.2.0

* feat-LSTInsights
* Unpin OpenRewrite version after adjusting cursor validation

#### rewrite-concourse - 3.1.0

* Create a LICENSE folder

#### rewrite-dotnet - 0.7.0

* Create a LICENSE folder

#### rewrite-java-security - 3.0.1

* chore: update suppressions
* Create a LICENSE folder

#### rewrite-kubernetes - 3.1.0

* Create a LICENSE folder

#### rewrite-nodejs - v0.16.1

* Increment version after publish failures

#### rewrite-nodejs - 0.16.0

* Create a LICENSE folder

#### rewrite-reactive-streams - 0.9.0

* Create a LICENSE folder

#### rewrite-sql - 2.1.0

* Create a LICENSE folder

#### rewrite-terraform - 3.1.0

* Create a LICENSE folder

## January 21, 2025

#### rewrite-ai-search - v0.23.0

* Create a LICENSE folder
* Fix French comments in properties

## January 10, 2025

#### rewrite-ai-search - 0.22.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-android - 0.6.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-circleci - 3.0.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-codemods-ng - 0.7.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices

#### rewrite-compiled-analysis - 0.2.1

* Updated repository to use OpenRewrite version v8.43.0

#### rewrite-concourse - 3.0.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-dotnet - 0.6.0

* Adopt Moderne Proprietary license
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-java-security - 3.0.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices
* refactor: Remove Gradle Enterprise
* refactor: Enum values should be compared with "=="
* chore: update suppressions

#### rewrite-kubernetes - 3.0.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-nodejs - 0.15.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`

#### rewrite-reactive-streams - 0.8.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-sql - 2.0.0

* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### rewrite-terraform - 3.0.0

* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

## January 3, 2025

## December 31, 2024

## December 26, 2024

## December 19, 2024

#### rewrite-java-security - 2.17.1

* Replace snakeyaml Parser dependency with type definitions to address critical CVE

## December 18, 2024

#### rewrite-ai-search - 0.21.0

* Apply Moderne License

#### rewrite-android - 0.5.0

* Apply Moderne proprietary license

#### rewrite-circleci - 2.10.0

* Apply Moderne proprietary license

#### rewrite-codemods-ng - v0.6.0

* chore(deps): bump cross-spawn from 7.0.3 to 7.0.6 in /src/main/resources/codemods
* refactor: Add a blank line around fields with annotations
* Find angular.json in subdirs as well
* Apply Moderne proprietary license

#### rewrite-concourse - 2.10.0

* Apply Moderne proprietary license

#### rewrite-dotnet - 0.5.2

* Updated repository to use OpenRewrite version v8.42.0

#### rewrite-java-security - 2.17.0

* chore: update suppressions
* Add spring-security-web parser classpath dependency
* Apply Moderne proprietary license
* Add security advisory, SBOM and license recipes
* Rename enum values to match valid values

#### rewrite-kubernetes - 2.12.0

* Find hardcoded IP addresses
* Apply Moderne proprietary license

#### rewrite-nodejs - 0.14.0

* Apply Moderne proprietary license

#### rewrite-reactive-streams - 0.7.0

* Apply Moderne proprietary license
* Add ReactorBestPractices recipe, leveraging ReactorRulesRecipes

#### rewrite-sql - 1.13.0

* Apply Moderne proprietary license

#### rewrite-terraform - 2.7.0

* Apply Moderne proprietary license

## November 28, 2024

#### rewrite-ai-search - 0.20.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-android - 0.4.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-circleci - 2.9.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-codemods-ng - 0.5.3

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-concourse - 2.9.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-dotnet - 0.5.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-java-security - 2.16.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-kubernetes - 2.11.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-nodejs - 0.13.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-reactive-streams - 0.6.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-sql - 1.12.1

* Updated repository to use OpenRewrite version v8.41.1

#### rewrite-terraform - 2.6.1

* Updated repository to use OpenRewrite version v8.41.1

## November 27, 2024

#### rewrite-codemods-ng - 0.5.2

* Updated repository to use OpenRewrite version v8.41.0

## November 21, 2024

## November 15, 2024

#### rewrite-reactive-streams - 0.5.0

* Migrate `doAfterSuccessOrError` to `tap` & @jevanlingen

## November 13, 2024

#### rewrite-ai-search - 0.19.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-android - 0.3.4

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-android - 0.3.2

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-circleci - 2.8.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-codemods-ng - 0.5.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-concourse - 2.8.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-dotnet - 0.4.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-java-security - 2.15.0

* refactor: add @Nullable to methods who may return null

#### rewrite-kubernetes - 2.10.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-reactive-streams - 0.4.1

* Updated repository to use OpenRewrite version v8.40.2

#### rewrite-sql - 1.11.1

* Updating to use new publication tokens

#### rewrite-terraform - 2.5.1

* Updated repository to use OpenRewrite version v8.40.2

## November 8, 2024

#### rewrite-codemods-ng - 0.5.0

* swap @Nullable to jspecify

#### rewrite-nodejs - 0.12.1

* Updated repository to use OpenRewrite version v8.40.0

## November 6, 2024

#### rewrite-ai-search - 0.19.0

* refactor: Annotate methods which may return `null` with `@Nullable`

#### rewrite-concourse - 2.8.0

* refactor: Annotate methods which may return `null` with `@Nullable`

#### rewrite-kubernetes - 2.10.0

* Add deprecated API migrations for Kubernetes

#### rewrite-nodejs - 0.12.0

* refactor: Annotate methods which may return `null` with `@Nullable`

## October 23, 2024

#### rewrite-ai-search - 0.18.1

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-android - 0.2.0

* Upgrade Android Gradle Plugin version

#### rewrite-circleci - 2.7.2

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-codemods-ng - 0.4.2

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-concourse - 2.7.2

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-kubernetes - 2.9.2

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-reactive-streams - 0.3.1

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-sql - 1.10.2

* Updated repository to use OpenRewrite version v8.38.0

#### rewrite-terraform - 2.4.2

* Updated repository to use OpenRewrite version v8.38.0

## October 10, 2024

#### rewrite-java-security - 2.14.0

* update suppressions for 09-25-2024 vulnerability report

## October 9, 2024

#### rewrite-ai-search - 0.18.0

* Feat/switch gen model to qwencoder

#### rewrite-android - 0.1.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-circleci - 2.7.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-codemods-ng - 0.4.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-concourse - 2.7.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-dotnet - 0.3.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-kubernetes - 2.9.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-reactive-streams - 0.3.0

* update to latest error prone to remove protobuf-java@3.19.2 vulnerability

#### rewrite-sql - 1.10.1

* Updated repository to use OpenRewrite version v8.37.0

#### rewrite-terraform - 2.4.1

* Updated repository to use OpenRewrite version v8.37.0

## October 1, 2024

#### rewrite-dotnet - 0.3.0

* Set DOTNET_UPGRADEASSISTANT_TELEMETRY_OPTOUT environment variable when exec'ing upgrade-assistant
* Additional error handling
* Set DOTNET_UPGRADEASSISTANT_SKIP_FIRST_TIME_EXPERIENCE environment variable for non-interactive execution with no console

## September 26, 2024

#### rewrite-dotnet - 0.2.0

* Update recipe descriptions

#### rewrite-dotnet - 0.1.0

* Add upgrade-assistant support

## September 24, 2024

#### rewrite-ai-search - 0.17.0

* Opt latency on embeddings
* refactor: Update Gradle wrapper

#### rewrite-android - 0.1.0

* Change Android SDK version to argument version

#### rewrite-circleci - 2.7.0

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.7.0

* refactor: Update Gradle wrapper

#### rewrite-java-security - 2.13.0

* refactor: Update Gradle wrapper

#### rewrite-kubernetes - 2.9.0

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.9.1

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.9.0

* refactor: Update Gradle wrapper

#### rewrite-reactive-streams - 0.2.0

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.10.0

* Also detect all columns in FindSql
* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.4.0

* refactor: Update Gradle wrapper

## September 11, 2024

#### rewrite-ai-search - 0.16.3

* refactor: Update Gradle wrapper

#### rewrite-circleci - 2.6.5

* refactor: Update Gradle wrapper

#### rewrite-codemods-ng - 0.3.0

* refactor: Create text file
* refactor: Update Gradle wrapper to 8.10.1

#### rewrite-concourse - 2.6.5

* refactor: Update Gradle wrapper

#### rewrite-java-security - 2.12.0

* refactor: Update Gradle wrapper
* suppress spring-data-mongodb coming in via rewrite-spring

#### rewrite-kubernetes - 2.8.3

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.8.0

* refactor: Update Gradle wrapper

#### rewrite-reactive-streams - 0.1.2

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.9.3

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.3.9

* refactor: Update Gradle wrapper

## August 28, 2024

#### rewrite-ai-search - 0.16.2

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-circleci - 2.6.4

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.6.4

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-java-security - 2.11.3

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-kubernetes - 2.8.2

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-nodejs - 0.7.2

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-sql - 1.9.2

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### rewrite-terraform - 2.3.8

* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

## August 12, 2024

#### rewrite-ai-search - 0.16.1

* Add timings generative model
* change histogram for generative model performance to 1 sec buckets
* change int to long for overflow issue for bucket size for generative …
* add query to suggested method patterns table

#### rewrite-circleci - 2.6.3

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.6.3

* refactor: Update Gradle wrapper

#### rewrite-reactive-streams - 0.1.0

* Initial setup
* Rebrand to Reactive Streams to serve whole spec
* Recipes for migrating to reactor 3.5+
* Include update of reactor-core dependency to 3.5.X

#### rewrite-sql - 1.9.1

* Update testcase regarding addition of GitRemote to GitProvenance

#### rewrite-terraform - 2.3.7

* refactor: Update Gradle wrapper

## August 8, 2024

#### rewrite-ai-search - 0.16.0

* Add timings generative model
* change histogram for generative model performance to 1 sec buckets
* change int to long for overflow issue for bucket size for generative …
* add query to suggested method patterns table

#### rewrite-circleci - 2.6.2

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.6.2

* refactor: Update Gradle wrapper

#### rewrite-kubernetes - 2.8.0

* Markers shown on Spring application.yml

#### rewrite-nodejs - 0.7.0

* Find and fix vulnerable npm packages
* Add CVE markers to vulnerable dependencies
* Do not break on invalid versions
* Prevent accidental downgrade of dependencies
* feat: add various dependency insights

#### rewrite-sql - 1.9.0

* Update testcase regarding addition of GitRemote to GitProvenance

#### rewrite-terraform - 2.3.6

* refactor: Update Gradle wrapper

## July 31, 2024

#### rewrite-ai-search - 0.15.0

* add row for each search result no matter if positive or negative
* fix path for dictionary
* change path from usr/bin/python3 to just python3
* add datatable for top-k methods
* Optimize speed search
* Optimize speed search
* Feat add next step search
* Upgrade llama cpp

#### rewrite-circleci - 2.6.1

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.6.1

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.6.1

* feat: add npm executor and npm executor execution context view
* fix(npm executor): make configuration directory protected

#### rewrite-sql - 1.8.1

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.3.5

* refactor: Update Gradle wrapper

## July 26, 2024

#### rewrite-codemods-ng - 0.2.0

* chore(deps): bump tar from 6.2.0 to 6.2.1 in /src/main/resources/codemods
* refactor: use npm shell executor
* fix: bump max old heap size in NODE_OPTIONS
* fix: bump max old heap size in NODE_OPTIONS

#### rewrite-nodejs - 0.6.0

* feat: add npm executor and npm executor execution context view
* fix(npm executor): make configuration directory protected

## July 15, 2024

#### rewrite-ai-search - 0.14.3

* refactor: Update Gradle wrapper

#### rewrite-circleci - 2.6.0

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.6.0

* refactor: Update Gradle wrapper

#### rewrite-java-security - 2.11.0

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.5.1

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.8.0

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.3.4

* refactor: Update Gradle wrapper

## July 10, 2024

#### rewrite-nodejs - 0.5.0

* Bump minor version due to misaligned SNAPSHOT version at Sonatype OSS

## July 3, 2024

#### rewrite-terraform - 2.3.3

* refactor: Update Gradle wrapper

## June 19, 2024

#### rewrite-java-security - 2.10.1

* rewrite-spring v5.13.1

#### rewrite-terraform - 2.3.2

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.3.1

* refactor: Update Gradle wrapper

## June 7, 2024

#### rewrite-ai-search - 0.13.0

* refactor: Update Gradle wrapper

#### rewrite-circleci - 2.4.0

* refactor: Update Gradle wrapper

#### rewrite-java-security - 2.9.0

* refactor: Update Gradle wrapper

#### rewrite-kubernetes - 2.5.0

* refactor/update-gradle-wrapper

#### rewrite-nodejs - 0.3.0

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.5.0

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.3.0

* refactor: Update Gradle wrapper

## May 22, 2024

#### rewrite-ai-search - 0.12.0

* Fix methodmatcher
* Adds threshold support and pre-process Method Signature for MethodMat…
* don't remove &lt;constructor&gt; for MethodMatcher

#### rewrite-ai-search - 0.11.0

* add datatable to debug accuracy and only check method invocations in …
* Final touches ai code search
* Cleanup ai recipes

#### rewrite-nodejs - 0.2.5

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.2.3

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.4.3

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.4.2

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.2.3

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.2.2

* refactor: Update Gradle wrapper

## May 17, 2024

#### rewrite-circleci - v2.3.0

* Update with rewrite 8.26.0

#### rewrite-concourse - v2.3.0

* Update with rewrite 8.26.0

#### rewrite-java-security - v2.8.0

* Update with rewrite 8.26.0

#### rewrite-kubernetes - v2.4.0

* Update with rewrite 8.26.0

## May 8, 2024

#### rewrite-ai-search - 0.10.0

* Recommendations as one recipe and tests
* check if method content match + remove MODELSDIR

#### rewrite-java-security - 2.7.0

* Remove Random import during SecureRandom recipe

## April 24, 2024

#### rewrite-ai-search - 0.9.0

* refactor: Update Gradle wrapper
* spongebob case recipe
* Server llama
* add waitfor
* fix url + use server for isRelated
* fix paths
* add logs for server
* added check is up for when starting server
* remove proc exit value == 0 in checkforup, and sample 50% of methods
* 3 models (2 embeddings + generative)
* fix starting server
* add truncation and test for duplicate calls
* changing the thresholds
* first phase with top-k
* fix method signature for embedding and add test for top-k
* changing description of recipe
* cleanup
* debugging by removing SearchResult.found(method)
* removing debugging line
* change messaging to be using cursor from visitCompilitionUnit
* Various small cleanups

#### rewrite-circleci - 2.2.0

* refactor: Update Gradle wrapper

#### rewrite-concourse - 2.2.0

* refactor: Update Gradle wrapper

#### rewrite-java-security - 2.6.0

* refactor: Update Gradle wrapper

#### rewrite-kubernetes - 2.3.0

* refactor: Update Gradle wrapper

#### rewrite-nodejs - 0.2.1

* refactor: Update Gradle wrapper

#### rewrite-sql - 1.4.0

* refactor: Update Gradle wrapper

#### rewrite-terraform - 2.2.0

* refactor: Update Gradle wrapper

## March 19, 2024

#### rewrite-ai-search - 0.8.0

* add llamacpp as second step

#### rewrite-sql - 1.3.0

* refactor: OpenRewrite best practices

## March 18, 2024

#### rewrite-java-security - 2.5.1

**Bug fixes**
* Remove non-existent recipe from OWASP A02 list:

## March 12, 2024

#### rewrite-ai-search - 0.7.0

* recommendations uses clustering results + new folder for research onl…
* Composite recipe path fixed
* fix path
* remove path as argument and pretty print list of recs
* finish description for random sampling
* fixed option as Boolean instead of boolean
* Recipe ai code search
* remove torch
* get latency histogram
* remove pip install cmd
* change model
* remove reranker
* mini model

#### rewrite-circleci - 2.1.6

* refactor: remove expired suppressions
* refactor: Upgrade Develocity

#### rewrite-concourse - 2.1.6

* refactor: remove expired suppressions

#### rewrite-java-security - 2.5.0

* refactor: remove expired suppressions

#### rewrite-kubernetes - 2.2.2

* refactor: Upgrade Develocity

## February 20, 2024

#### rewrite-ai-search - 0.6.0

* Feat/spellcheck comments french
* fixed multiline if
* Feat/fix miscoded french
* change display name and descr
* change dict
* add source to datatable

#### rewrite-concourse - 2.1.5

* Add missing example values

#### rewrite-java-security - 2.4.0

* refactor: OpenRewrite best practices
* Generify ZipSlip Visitor
* Configurable path traversal guard exception msg

## February 6, 2024

#### rewrite-ai-search - 0.5.0

* debugging path
* debugging path by finding it
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* debugging
* trying llama in pure c/c++ with dummy prompt
* read all outputs
* read all outputs with fixed paths
* cmd line llama cpp
* sample 1%
* recipe for spellchecker comments in french
* refactor: Remove unused imports

#### rewrite-java-security - 2.3.0

* General Cleanup & Improvements

#### rewrite-kubernetes - 2.2.0

* refactor: add digest functionality and unit tests

## January 23, 2024

#### rewrite-ai-search - 0.4.0

* Feature recipe for agent recommender
* Feature recipe for agent recommender

## January 16, 2024

## January 9, 2024

## December 21, 2023

#### rewrite-ai-search - 0.2.7

* refactor: Update Gradle wrapper to 8.5

#### rewrite-concourse - 2.0.13

* refactor: Update Gradle wrapper to 8.5

#### rewrite-kubernetes - 2.0.13

* refactor: Update Gradle wrapper to 8.5

#### rewrite-terraform - 2.0.13

* refactor: Update Gradle wrapper to 8.5

## December 20, 2023

#### rewrite-ai-search - 0.2.6

* refactor: Update Gradle wrapper to 8.5

#### rewrite-concourse - 2.0.12

* refactor: Update Gradle wrapper to 8.5

#### rewrite-kubernetes - 2.0.12

* refactor: Update Gradle wrapper to 8.5

#### rewrite-terraform - 2.0.12

* refactor: Update Gradle wrapper to 8.5

## December 14, 2023

#### rewrite-ai-search - 0.2.5

* refactor: Update Gradle wrapper to 8.5

#### rewrite-concourse - 2.0.11

* refactor: Update Gradle wrapper to 8.5

#### rewrite-kubernetes - 2.0.11

* refactor: Update Gradle wrapper to 8.5

#### rewrite-terraform - 2.0.11

* refactor: Update Gradle wrapper to 8.5

## December 8, 2023

#### rewrite-ai-search - 0.2.4

* refactor: Update Gradle wrapper to 8.5

#### rewrite-circleci - 2.0.10

* refactor: Update Gradle wrapper to 8.5

#### rewrite-concourse - 2.0.10

* refactor: Update Gradle wrapper to 8.5

#### rewrite-kubernetes - 2.0.10

* refactor: Update Gradle wrapper to 8.5

#### rewrite-terraform - 2.0.10

* refactor: Update Gradle wrapper to 8.5

## December 4, 2023

#### rewrite-ai-search - 0.2.3

* refactor: Update Gradle wrapper to 8.5

#### rewrite-circleci - 2.0.9

* refactor: Update Gradle wrapper to 8.5

#### rewrite-concourse - 2.0.9

* refactor: Update Gradle wrapper to 8.5

#### rewrite-java-security - 2.1.2

* refactor: Update Gradle wrapper to 8.5

#### rewrite-kubernetes - 2.0.9

* refactor: Update Gradle wrapper to 8.5

#### rewrite-sql - 1.0.8

* refactor: Update Gradle wrapper to 8.5

#### rewrite-terraform - 2.0.9

* refactor: Update Gradle wrapper to 8.5

## November 25, 2023

#### rewrite-java-security - 2.1.1

* Adopt FixCwe338

## November 24, 2023

#### rewrite-ai-search - v0.2.1

* OpenRewrite v8.9.8

## November 10, 2023

#### rewrite-ai-search - v0.2.0

* Update with rewrite 8.9.0

#### rewrite-java-security - 2.1.0

* Update with rewrite 8.9.0
* Fix broken cross reference for Owasp A10 (#111)

## October 28, 2023

## October 27, 2023

#### rewrite-ai-search - v0.1.3

* Gradle wrapper 8.4

#### rewrite-circleci - v2.0.6

* Update with rewrite 8.8.3

#### rewrite-concourse - v2.0.6

* Update with rewrite 8.8.3

#### rewrite-kubernetes - v2.0.6

* Update with rewrite 8.8.3

#### rewrite-terraform - v2.0.6

* Update with rewrite 8.8.3

## October 3, 2023

#### rewrite-java-security - v2.0.5

* Update with rewrite 8.7.1
* Add missing import in XmlParserXXEVulnerability

## October 2, 2023

#### rewrite-ai-search - v0.1.2

* Update with rewrite 8.7.1

#### rewrite-circleci - v2.0.5

* Update with rewrite 8.7.1

#### rewrite-concourse - v2.0.5

* Update with rewrite 8.7.1

#### rewrite-kubernetes - v2.0.5

* Update with rewrite 8.7.1

#### rewrite-sql - v1.0.4

* Update with rewrite 8.7.1

#### rewrite-terraform - v2.0.5

* Update with rewrite 8.7.1

## September 12, 2023

#### rewrite-ai-search - 0.1.1

* Debugging adding finetuning

#### rewrite-circleci - 2.0.4

* Rewrite v8.5.0

#### rewrite-concourse - 2.0.4

* Rewrite v8.5.0

#### rewrite-java-security - v2.0.4

* Additional abstraction of visitBlock and code cleanup
* Add XmlFactoryVariable and support for static class variables
* feat/SN/continueDBFPatch
* feat/SN/continueDBFPatch
* Add support for multiple XML factories per file
* added support for cases when one property was set but the rest weren't. Expand Entity References support still pending.

#### rewrite-kubernetes - 2.0.4

* Update with rewrite 8.5.0

#### rewrite-sql - 1.0.3

* Update with rewrite 8.5.0

#### rewrite-terraform - 2.0.4

* Update with rewrite 8.5.0

## August 24, 2023

#### rewrite-circleci - v2.0.3

* Update with rewrite 8.4.0
* refactor: Automatically select recipe examples from the unit test cases of a recipe

#### rewrite-concourse - v2.0.3

* Update with rewrite 8.4.0

#### rewrite-java-security - v2.0.3

* Update with rewrite 8.4.0
* Improved XXE Recipe
* Fixed issues with generation of duplicate allow-lists
* Refactored XmlParserXXEVulnerability
* fix: adapt J.Identifier instantiation to use the new constructor
* Fix broken test and visitor due to upstream change
* Add implementation for TransformerFactory XXE recipe
* Adding two abstract visitor classes for XXE vulnerabilities
* Remove unnecessary argument in updateBlock
* Added support for cases where DTDs are required for DocumentBuilderFactory

#### rewrite-kubernetes - v2.0.3

* Update with rewrite 8.4.0

#### rewrite-sql - v1.0.2

* Update with rewrote 8.4.0

#### rewrite-terraform - v2.0.3

* Update with rewrite 8.4.0
* Unpin version of gradle enterprise

## August 13, 2023

## July 4, 2023

## June 13, 2023

#### rewrite-circleci - 2.0.1

* OpenRewrite 8.1.2

#### rewrite-concourse - 2.0.1

* OpenRewrite 8.1.2

#### rewrite-java-security - 2.0.1

* OpenRewrite 8.1.2

#### rewrite-kubernetes - 2.0.1

* OpenRewrite 8.1.2

#### rewrite-sql - 1.0.1

* OpenRewrite 8.1.2

#### rewrite-terraform - 2.0.1

* Update with rewrite 8.1.2

## June 3, 2023

#### rewrite-sql - 1.0.0

* Upgrade to OpenRewrite 8.0

## June 2, 2023

#### rewrite-circleci - 2.0.0

* OpenRewrite 8.0 upgrade

#### rewrite-concourse - 2.0.0

* Support rewrite 8.0

#### rewrite-kubernetes - 2.0.0

* OpenRewrite 8.0 upgrade

## June 1, 2023

#### rewrite-java-security - v2.0.0

* spelling: separator
* OpenRewrite 8.0 upgrade
* Adjust to new OpenRewrite 8.0 `JavaTemplate` API

#### rewrite-terraform - v2.0.0

* Handle large repositories

## April 20, 2023

#### rewrite-circleci - 1.20.0

* Update with rewrite 7.40.0

#### rewrite-concourse - 1.19.0

* Update with rewrite 7.40.0

#### rewrite-java-security - 1.25.0

* Update with rewrite 7.40.0
* adjusted usages of UsesType for includeImplicit

#### rewrite-kubernetes - 1.30.0

* Update with rewrite 7.40.0
* Have test classes extend abstract class KubernetesRecipeTest

#### rewrite-terraform - 1.19.0

* Update with rewrite 7.40.0

## April 3, 2023

#### rewrite-circleci - 1.19.0

What's Changed:
* Update with rewrite 7.39.0

#### rewrite-concourse - 1.18.0

* Update with rewrite 7.39.0

#### rewrite-java-security - 1.24.0

* adjusted usages of UsesType for includeImplicit
* Update with rewrite 7.39.0

#### rewrite-kubernetes - 1.29.0

* Have test classes extend abstract class KubernetesRecipeTest
* Updated with the latest version of rewrite 7.39.0.

#### rewrite-terraform - 1.18.0

* Update with rewrite 7.39.0

## March 14, 2023

#### rewrite-java-security - 1.23.0

# What's Changed

* Update with rewrite 7.38.0

## February 20, 2023

#### rewrite-kubernetes - v1.28.0

* Update with rewrite 7.36.1.

## February 15, 2023

#### rewrite-circleci - v1.18.0

* Update with rewrite 7.36.0

#### rewrite-concourse - v1.17.0

* Update with rewrite 7.36.0
* refactor: Update OWASP suppression date bounds

#### rewrite-java-security - v1.22.0

* Update with rewrite 7.36.0
* UseFilesCreateTempDirectory: Support Apache Commons IO
* refactor: Update OWASP suppression date bounds
* fix: correct CsrfProtection recipe applicable test

#### rewrite-terraform - v1.17.0

Update with rewrite 7.36.0

## January 20, 2023

#### rewrite-circleci - 1.17.0

* Update with rewrite 7.35.0

#### rewrite-kubernetes - v1.27.0

* Update with rewrite 7.35.0
* Update for compatibility with rewrite 7.35.0

#### rewrite-terraform - v1.16.0

* update for compatibility with rewrite 7.35.0

## January 19, 2023

#### rewrite-concourse - 1.16.0

* Update with rewrite 7.35.0

#### rewrite-java-security - 1.21.0

* SecureSnakeYamlConstructor: Increase Scope, decrease False Positives
* Various Fixes & Test Addition
* Upgrade Gradle wrapper to 7.6 and add checksum validation
* chore: Owasp suppression updates

## December 12, 2022

#### rewrite-circleci - 1.16.0

* Update with rewrite 7.34.0

#### rewrite-concourse - 1.15.0

* Update with rewrite 7.34.0

#### rewrite-java-security - 1.20.0

* Add missing language highlighting comments in ZipSlip Test
* Support source file filtering for SecureTempFileCreation
* fix: use `@Value` annotation to attempt to fix missing opt

#### rewrite-kubernetes - 1.26.0

* Updated with rewrite 7.34.0

#### rewrite-terraform - 1.15.0

* Update with rewrite 7.33.0
* chore: update suppressions for new false positives

## November 16, 2022

#### rewrite-circleci - 1.15.0

* Updated with rewrite 7.33.0

#### rewrite-concourse - 1.14.0

* Updated with rewrite 7.33.0

#### rewrite-java-security - 1.19.0

* Update with rewrite 7.33.0
* Detect secrets recipe in #63
* Improve REDOS Recipe a9c29f5
* Fix escaping of the 'good' side of ReDOS patterns d7022ea
* Rename `name` to `secretName` in FindSecretsByPattern 5c06847
* Fix SecureTempFileCreation fails to template successfully because it uses incorrect cursor 6b832bb

#### rewrite-kubernetes - 1.25.0

* Update with rewrite 7.33.0

#### rewrite-terraform - 1.14.0

* Update with rewrite 7.33.0

## October 19, 2022

#### rewrite-circleci - 1.14.0

* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### rewrite-concourse - 1.13.0

* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### rewrite-java-security - 1.18.0

* Updated to use rewrite 7.32.0
 * pin Jackson to 2.13.4 31fbaee

#### rewrite-kubernetes - 1.24.0

* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### rewrite-terraform - 1.13.0

* Update to use rewrite 7.32.0
* chore: suppress jackson-databind

## October 10, 2022

#### rewrite-circleci - 1.13.0

* Use rewrite 7.31.0

#### rewrite-concourse - 1.12.0

* Use rewrite 7.31.0

#### rewrite-java-security - 1.17.0

* Use rewrite 7.31.0
* Fix #60, UseSecureRandomnot changing a random in unknown circumstances.

#### rewrite-kubernetes - 1.23.0

* Use rewrite 7.31.0

#### rewrite-terraform - 1.12.0

* Use rewrite 7.31.0

## September 22, 2022

#### rewrite-circleci - 1.12.0

**Enhancements**
 * Update with rewrite 7.30.0

#### rewrite-concourse - 1.11.0

**Enhancements**
 * Update with rewrite 7.30.0

#### rewrite-java-security - 1.16.0

**Enhancements**
* Updated with rewrite 7.30.0
* Add ReDOS Vulnerability Fix

**Fixes**
* Fix broken tests caused by updated AddImport layout style detection. ()
* revert ZipSlip#debug property change from boolean to Boolean

#### rewrite-kubernetes - 1.22.0

**Enhancements**
 * Update with rewrite 7.30.0

**Fixes**
 * rewrite 7.30.0 MergeYaml update

#### rewrite-terraform - 1.11.1

**Enhancements**
 * Update with rewrite 7.30.0

## September 2, 2022

#### rewrite-circleci - 1.11.0

**Enhancements**

Updated to use rewrite 7.29.0

#### rewrite-concourse - 1.10.0

**Enhancements**

* Updated to use rewrite 7.29.0

#### rewrite-java-security - 1.15.0

**Enhancements**

* Updated to use rewrite 7.29.0

**Fixes**

* Zip Slip: Throw IOException where safe to do so
* Fix IOException not always generating correctly

#### rewrite-kubernetes - 1.21.0

**Enhancements**

* Updated to use rewrite 7.29.0

#### rewrite-terraform - 1.10.0

**Enhancements**

* Updated to use rewrite 7.29.0

## August 6, 2022

#### rewrite-circleci - 1.10.1

**Enhancements**

* Updated to use rewrite 7.27.1

#### rewrite-concourse - 1.9.2

**Enhancements**

* Updated to use rewrite 7.27.1

#### rewrite-java-security - 1.14.1

**Enhancements**
* Updated to use rewrite 7.27.1

**Fixes**
* ZipSlip Fix Recipe
* Continued work on Zip Slip
* Fix FileConstructorFixVisitor
* Further improvements to Zip Slip
* Further improve Zip Slip fix with Partial Path Traversal
* Further Zip Slip Improvements
* chore: update suppressions
* Fix Zip Partial Path before fixing Zip Slip
* Don't fix Partial Path Traversal if vuln is Zip Slip
* Fix some bugs in Partial Path and Zip Slip
* Update UseFilesCreateTempDirectory to prevent adding a potential NPE or empty string concatenation #45
* Remove useless assertions as part of UseFilesCreateTempDirectory
* PartialPathTraversalVulnerability cleans up unused variables
* Resolve Dataflow API breaking change 3255b8d



# Contributors
* @JLLeitschuh

#### rewrite-kubernetes - 1.20.1

##Enhancements

* Updated to rewrite 7.27.1

#### rewrite-terraform - 1.9.1

**Enhancements**
* Updated to use rewrite 7.27.1

## August 5, 2022

#### rewrite-circleci - 1.10.0 (please don't use)

**Please don't use**

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### rewrite-concourse - 1.9.0 (please don't use)

**Please don't use**

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### rewrite-java-security - 1.14.0 (please don't use)

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### rewrite-terraform - 1.9.0 (Please don't use)

**Enhancements**
* Updated to use rewrite 7.27.0

## July 7, 2022

#### rewrite-circleci - 1.9.0

**Enhancements**

* Updated to use rewrite 7.25.0

#### rewrite-concourse - 1.8.0

**Enhancements**

* Updated to use rewrite 7.25.0

#### rewrite-java-security - 1.13.0

**Enhancements**

* Updated to use rewrite 7.25.0

**Fixes**

* Improve the Partial Path Traversal Vulnerability Fix
* Add test for `getCanonicalPath` in try block
* Only run `PartialPath` when `String#startsWith` AND `File#getCanonicalPath` is present
* Significantly improve performance of Partial Path Traversal

#### rewrite-kubernetes - 1.19.0

**Enhancements**

* Updated to use rewrite 7.25.0

#### rewrite-terraform - 1.8.0

**Enhancements**

* Updated to use rewrite 7.25.0

## June 1, 2022

#### rewrite-circleci - 1.8.0

**Enhancements**

* Updated to use rewrite 7.24.0

**Fixes**

#### rewrite-concourse - 1.7.0

**Enhancements**

* Updated to use rewrite 7.24.0

#### rewrite-java-security - 1.12.0

**Enhancements**

* Updated to use rewrite 7.24.0
* Add Data Flow support for the Partial Path Traversal fix in #26
* Complete support for Data Flow support for the Partial Path Traversal fix in #27

**Fixes**

* Fix DataFlow use after API breaking change + test new DataFlow in #30
* Fix: Multiple Sources in Partial Path Traversal Vulnerability Fix in #32

#### rewrite-kubernetes - 1.18.0

**Enhancements**

* Updated to use rewrite 7.24.0

**Fixes**

#### rewrite-terraform - 1.7.0

**Enhancements**

* Updated to use rewrite 7.24.0

## May 11, 2022

#### rewrite-circleci - 1.7.0

**Enhancements**
* Updated to use rewrite 7.23.0

#### rewrite-concourse - 1.6.0

**Enhancements**
* Updated to use rewrite 7.23.0

#### rewrite-java-security - 1.11.0

**Enhancements**
* Updated to use rewrite 7.23.0
* Fix all source file line endings #21
* Recipe: Partial Path Traversal Vulnerability #23

**Fixes**
* Fix bugs in `SecureTempFileCreation` & `UseFilesCreateTempDirectory` #20
* Simple comments and sanity assertions in temp dir logic in #22

#### rewrite-kubernetes - 1.17.0

**Enhancements**
* Updated to use rewrite 7.23.0

**Fixes**
* Use JsonPathMatcher to merge yaml in AddConfiguration. #34
* fix AddConfiguration recipes in KubernetesBestPractices.

#### rewrite-terraform - 1.6.0

**Enhancements**
* Updated to use rewrite 7.23.0

## April 26, 2022

#### rewrite-circleci - 1.6.0

**Enhancements**

- Updated to use rewrite 7.22.0

#### rewrite-concourse - 1.5.0

**Enhancements**

- Updated to use rewrite 7.22.0

#### rewrite-java-security - 1.9.0

**Enhancements**
* Updated to use rewrite 7.22.0
* Update UseFilesCreateTempDirectory to support expressions in control statements

#### rewrite-kubernetes - 1.16.0

**Enhancements**

- Updated to use rewrite 7.22.0

#### rewrite-terraform - 1.5.0

**Enhancements**

- Updated to use rewrite 7.22.0

## April 6, 2022

#### rewrite-circleci - 1.5.2

**Enhancements**

- Updated to use rewrite 7.21.3

#### rewrite-concourse - 1.4.1

**Enhancements**

- Updated to use rewrite 7.21.3

#### rewrite-java-security - 1.8.2

**Enhancements**

- Updated to use rewrite 7.21.3

#### rewrite-kubernetes - 1.15.1

**Enhancements**

- Updated to use rewrite 7.21.3

#### rewrite-terraform - 1.4.2

**Enhancements**

- Updated to use rewrite 7.21.3

## April 5, 2022

#### rewrite-circleci - 1.5.1

**Enhancements**

* Updated to use rewrite 7.21.1

#### rewrite-concourse - 1.4.0

**Whats Changed**
 * Updated to use rewrite 7.21.0

#### rewrite-java-security - 1.8.1

**Enhancements**

* Updated to use rewrite 7.21.1

#### rewrite-kubernetes - 1.15.0

**Enhancements**

* Updated to use rewrite 7.21.1

**Fixes**

* Kubernetes parser/visitor to use markers rather than extend Yaml Tree #33
* JsonPathMatcher Fixes

#### rewrite-terraform - 1.4.1

**Enhancements**

* Updated to use rewrite 7.21.1

## April 4, 2022

#### rewrite-circleci - 1.5.0

**Whats Changed**
 * Updated to use rewrite 7.21.0

#### rewrite-java-security - 1.8.0

**Whats Changed**
 * Updated to use rewrite 7.21.0

#### rewrite-terraform - 1.4.0

* Updated with rewrite version 7.21.0

## March 23, 2022

#### rewrite-circleci - 1.4.0

**Whats Changed**
 * Updated to use rewrite 7.20.0

#### rewrite-concourse - 1.3.0

**Whats Changed**
 * Updated to use rewrite 7.20.0

#### rewrite-java-security - 1.7.0

**Whats Changed**
 * Updated to use rewrite 7.20.0

#### rewrite-kubernetes - 1.14.0

**Whats Changed**
 * Updated to use rewrite 7.20.0

#### rewrite-terraform - 1.3.0

**Whats Changed**
 * Updated to use rewrite 7.20.0

## February 25, 2022

#### rewrite-circleci - 1.3.0

* Updated with rewrite version 7.19.0

#### rewrite-concourse - 1.2.0

* Updated to use rewrite 7.19.0
* Bump up Gradle plugin dependencies #8

#### rewrite-java-security - 1.6.0

* Updated with rewrite version 7.19.0
* Update UseFilesCreateTempDirectory to not convert File#mkdir() staements when the file path is from `java.io.tmpdir`. (#17)

#### rewrite-kubernetes - 1.13.0

* Updated with rewrite version 7.19.0
* Update KubernetesRecipeTest to the latest version of RecipeTest.
* Removed Yaml.Sequence.Entry from field of recipe. ()

#### rewrite-terraform - 1.2.0

* Updated to use rewrite 7.19.0

## February 10, 2022

#### rewrite-circleci - 1.2.0

**Enhancements**
- Updated with rewrite version 7.18.0

#### rewrite-concourse - 1.1.0

**Enhancements**
- Updated with rewrite version 7.18.0

#### rewrite-java-security - 1.5.0

* Updated with rewrite version 7.18.0
* Move `UseFilesCreateTempDirectory` from rewrite-java to rewrite-java-security #11
* UseFilesCreateTempDirectory should convert File#mkdir() when the path is from java.io.tmpdir #13 
* Update SecureTempFileCreation to handle null Path argument

#### rewrite-kubernetes - 1.12.0

**Enhancements**
- Updated with rewrite version 7.18.0

#### rewrite-terraform - 1.1.0

* Updated with rewrite version 7.18.0

## January 7, 2022

#### rewrite-circleci - 1.1.0

**Enhancements**
- Updated with rewrite version 7.17.0

#### rewrite-concourse - 1.0.0

**Enhancements**
- Upgrade to rewrite 7.17.0

#### rewrite-java-security - 1.4.0

**Enhancements**
- Updated with rewrite version 7.17.0

**Fixes**
- Update PreventClickjackingTest parser class-path to just spring-boot-autoconfigure and spring-security-config
- Update GenerateWebSecurityConfigurerAdapter WebSecurityConfigurerAdaptor method-matcher to match overrides

#### rewrite-kubernetes - 1.11.0

**Enhancements**
- Updated with rewrite version 7.17.0

#### rewrite-terraform - 1.0.0

**Enhancements**
- Updated with rewrite version 7.17.0

## November 1, 2021

#### rewrite-java-security - 1.3.1

**Fixes**

* FindTextDirectionChanges now also detects direction-changing control characters in string literals

#### rewrite-java-security - 1.3.0

**Enhancements**

*  Add FindTextDirectionChanges recipe to find text-direction changes potentially related to CVE-2021-42574

## October 28, 2021

#### rewrite-java-security - 1.2.1

**Fixes**

* Remove unneeded debug logging

## October 26, 2021

#### rewrite-circleci - 1.0.0

Enhancements:
 - Updated with rewrite version 7.16.0

#### rewrite-concourse - 0.3.0

Enhancements:
 - Upgrade to rewrite 7.16.0

#### rewrite-java-security - 1.2.0

Enhancements:
- Upgrade to rewrite 7.16.0
- Add SecureRandomPrefersDefaultSeed

Fixes:
- Fix SecureTempFileCreation to not include trailing semicolon in template which allows blocks to be generated properly

#### rewrite-kubernetes - 1.10.0

Enhancements:
 - Updated with rewrite version 7.16.0

#### rewrite-terraform - 0.8.0

Enhancements:
 - Updated with rewrite version 7.16.0

## October 5, 2021

#### rewrite-circleci - 0.4.0

Enhancements:
 - Updated with rewrite version 7.15.0

#### rewrite-concourse - 0.2.0

Enhancements:
- Upgrade to rewrite 7.15.0

#### rewrite-java-security - 1.1.0

Enhancements:
- Upgrade to rewrite 7.15.0

#### rewrite-kubernetes - 1.9.0

Enhancements:
 - Updated with rewrite version 7.15.0

#### rewrite-terraform - 0.7.0

Enhancements:

 - Updated with rewrite version 7.15.0
 - Include _incubating_ scaffolding for TF0.11 -&gt; TF0.12

## September 14, 2021

#### rewrite-circleci - 0.3.0

Enhancements:
 - Updated with rewrite version 7.14.0

#### rewrite-concourse - 0.1.0

Initial (pre-1.x) release 🎉 

Enhancements:
- Upgrade to rewrite 7.14.0
- Concourse ChangeValue which can backtrack to change property definitions
- FindPinnedResource, ChangeResourceVersion, FindPrivilegedResourceType

#### rewrite-java-security - 1.0.0

Initial release:
Java security recipes have been moved from rewrite to this project

#### rewrite-kubernetes - 1.8.0

Enhancements:
 - Updated with rewrite version 7.14.0

#### rewrite-terraform - 0.6.0

Enhancements:
 - Updated with rewrite version 7.14.0
 - Add SecureRandomRecipe ()

## September 3, 2021

#### rewrite-circleci - 0.2.0

Enhancements:

- Updated with rewrite 7.13.0

#### rewrite-kubernetes - 1.7.0

Enhancements:

- Updated with rewrite 7.13.0

#### rewrite-terraform - 0.5.0

Enhancements:

- Updated with rewrite 7.13.0

## August 21, 2021

#### rewrite-circleci - 0.1.0

Initial release of a few recipes.

#### rewrite-kubernetes - 1.6.0

Enhancements:

- Updated with rewrite 7.12.0

#### rewrite-terraform - 0.4.0

Enhancements:

- Updated with rewrite 7.12.0
- Added ~100+ Terraform recipes for more-securely operating on `AWS`, `GCP`, and `Azure` IaaSes, such as `Ensure IAM password policy requires at least one uppercase letter`, `Encrypt EBS volumes`, `Encrypt Azure VM data disk with ADE/CMK`, `Ensure GCP Kubernetes cluster node auto-repair configuration is enabled`, and many more.
  - For the full iteration, check the `aws.yml`, `gcp.yml`, and `azure.yml` declarative recipes for the full list.

## August 12, 2021

#### rewrite-kubernetes - 1.5.0

Enhancements:

- Updated with rewrite 7.11.0
- Add source path filtering #19
- New recipe: Add RBAC rules to ClusterRoles or namespaced Roles #20
- New example: K8s operator example #21

#### rewrite-terraform - 0.3.0

Enhancements:

• Updated with rewrite 7.11.0

## July 28, 2021

#### rewrite-kubernetes - 1.4.0

Enhancements:

* Updated with rewrite 7.10.0
* Applicable recipes now use `JsonPathMatcher`
* `Ingress` now modeled as part of the `K8S` AST
* New Recipe: FindExceedsResourceRatio

#### rewrite-terraform - 0.2.0

Enhancements:
• Updated with rewrite 7.10.0

## July 16, 2021

#### rewrite-kubernetes - 1.3.0

Enhancements:

- Updated with rewrite 7.9.0
- Updated with rewrite-testing-frameworks 1.8.0
- Recipe to find and cap resource values that exceed a max
- Add valid enumerated values to recipes
- Resource matching logic was moved to rewrite core

#### rewrite-terraform - 0.1.0

Enhancements:

- Updated with rewrite 7.9.0
- Updated with rewrite-testing-frameworks 1.8.0
- Recipe - Add Terraform Configuration
- Recipe - Find Terraform resource
- Recipe - Best practices for AWS
- Recipe - Use HTTPS for Cloudfront distribution
- Recipe - Encrypt EBS volume launch configurations
- Recipe - Encrypt EBS snapshots
- Recipe - Encrypt RDS clusters
- Recipe - Scan images pushed to ECR
- Recipe - Enable point-in-time recovery for DynamoDB
- Recipe - Encrypt Aurora clusters
- Recipe - Encrypt ElastiCache Redis at rest
- Recipe - Encrypt ElastiCache Redis in transit
- Recipe - Encrypt Neptune storage
- Recipe - Encrypt DAX storage at rest
- Recipe - Make ECR tags immutable
- Recipe - Encrypt DAX storage at rest
- Recipe - Encrypt Neptune storage
- Recipe - Encrypt CodeBuild projects
- Recipe - Enable API gateway caching

## June 30, 2021

#### rewrite-kubernetes - 1.2.0

Enhancements:

- Updated with rewrite 7.8.0
- Add namespace to model
- Add CTOR arg for new option

## June 11, 2021

#### rewrite-kubernetes - 1.1.0

Enhancements:
 
- Updated to use rewrite-core 7.7.0

## May 5, 2021

#### rewrite-kubernetes - 1.0.0

Initial release.

