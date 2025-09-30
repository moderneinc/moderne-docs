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

