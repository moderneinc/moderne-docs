---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases. Last updated: 2025-09-30
:::

## rewrite-program-analysis

#### v0.5.4 - *September 30, 2025*

**What's Changed**

- Fix TaintFlow data table rows listing incorrect source file.



#### 0.5.3 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### v0.5.2 - *September 19, 2025*

**What's Changed**
* Track taint flow into method receivers from their arguments, fixing a common NPE
* Add line numbers for sources and sinks to TaintFlowTable
* Check non-literal initializer expressions for taint




#### 0.5.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### v0.5.0 - *September 4, 2025*

**What's Changed**
* Fix NPE in `FindNullPointerIssues`
* Add custom source and sink messages to TaintFlowSpec
* Fix taint tracking from static initializer blocks

#### 0.4.1 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 0.1.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### v0.1.0 - *July 23, 2025*

**What's Changed**
* Initial version



## rewrite-spring

#### 0.13.1 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.13.0 - *September 10, 2025*

**What's Changed**
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-09-02T1110[bot]
* Leverage the OSS Spring Boot 3.5 migration recipes
* Migrate `AntPathRequestMatcher`




#### 0.12.0 - *August 27, 2025*

**What's Changed**
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-08-19T1107[bot]
* Use the property migrations from OSS rewrite-spring
* Remove duplicate UpgradeSpringKafka_3_0 recipe
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-08-26T1110[bot]
* Add Spring Boot 3.5 deprecation recipes
* Enabled test after upstream fix




#### 0.10.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.10.0 - *July 23, 2025*

**What's Changed**
* common static analysis issues

#### 0.9.0 - *July 9, 2025*

**What's Changed**
* Change Project structure from Spring Framework to Spring Boot
* `web.xml` entries to `WebApplicationInitializer`
* refactor: org.openrewrite.mavencentral
* Migrate `display-name` and `env-entry`




#### 0.8.0 - *June 25, 2025*

**What's Changed**
* Add support for Spring Cloud Property migrations
* Add property migration generator for boot
* Add property generation to workflow
* Added migration from `spring-cloud-starter-gateway` to `spring-cloud-starter-gateway-server-webflux`
* [Auto] Spring Boot and Spring Cloud property migration recipes as of 2025-06-19T2137

#### v0.7.3 - *May 30, 2025*

**What's Changed**
* Update recipes and tests for Spring Boot 3.5 and Spring Cloud 2025




#### v0.7.2 - *May 29, 2025*

**What's Changed**
* Fix moved reference to `UpgradeSpringCloud_2024`



#### v0.7.1 - *May 28, 2025*

**What's Changed**
* Spring Boot 3.5 release & Spring Cloud 2025



#### 0.6.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14
* Delegate to the OSS `UpgradeSpringBoot_3_4`
* 1117 spring boot 35 follow redirects with testresttemplate
* Spring Boot 3.5 recipe

#### 0.5.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests
* Bump spring AWS cloud if applicable when migrating to spring boot 3.4

#### 0.4.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.4.0 - *April 9, 2025*

**What's Changed**
* Recipe for replacing deprecated Kafka 'ContainerProperties#setTransactionManager' method
* Include the OSS recipe for Spring Framework 6.2

#### 0.3.2 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### v0.3.1 - *February 26, 2025*

**What's Changed**
* Update with rewrite-logging-frameworks 3.3.0 which uses type tables so this shouldn't end up blocked by security scanners anymore
* Add mybatis upgrade for SpringBoot 3.4
* Upgrade spring-security-oauth2-authorization-server
* Rename package for better categorization

#### 0.3.0 - *February 20, 2025*

**What's Changed**
* Add mybatis upgrade for SpringBoot 3.4
* Upgrade spring-security-oauth2-authorization-server
* Rename package for better categorization

#### 0.2.0 - *February 7, 2025*

**What's Changed**
* Add source set to Test
* Add a Gradle test to SpringBootVersionUpgradeTest

#### v0.1.0 - *February 3, 2025*

**What's Changed**
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

## rewrite-java-security

#### 3.19.0 - *September 24, 2025*

**What's Changed**
* Rename a file
* Update type tables via `./gradlew createTypeTable`
* Only generate Spring `SecurityConfig` when `spring-security-config` is present
* Fix RemoveUnusedDependencies to retain method declaring types




#### 3.18.0 - *September 10, 2025*

**What's Changed**
* DependencyVulnerabilityCheck recipe produces a data table for tracking the origin of a vulnerable dependency




#### 3.17.0 - *August 27, 2025*

**What's Changed**
* chore(ci): bump actions/setup-java from 4 to 5[bot]




#### v3.16.1 - *August 22, 2025*

**What's Changed**
* Fix `DependencyVulnerabilityCheckTest` after new vulnerabilities were added
* Fix password detection regex to handle dots and special characters in URLs
* Remove private IP addresses from comments



#### 3.16.0 - *August 12, 2025*

**What's Changed**
* Remove jackson from the fixesVulnerableDependenciesDeclaredInBaseAndS…
* Apply code suggestions




#### 3.15.0 - *July 23, 2025*

**What's Changed**
* Find hard-coded IPv4 loopback addresses
* Test cases that demonstrate behavior for direct dependencies




#### 3.14.0 - *July 9, 2025*

**What's Changed**
* Use test fixtures and properly set up test case
* refactor: org.openrewrite.mavencentral
* common static analysis issues




#### 3.13.0 - *June 25, 2025*

**What's Changed**
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




#### v3.12.0 - *June 9, 2025*

**What's Changed**
* Expose method for overriding baseline vulnerabilities
* netty 4.1.122 in doNotAddEmptyConstraintsBlockForTransitiveDependenci…
* Marker for CVE fixes
* Fix signature of class constructor

#### 3.11.0 - *May 28, 2025*

**What's Changed**
* Harden parsing logic of all possible DTD ENTITY definitions




#### v3.9.0 - *May 20, 2025*

**What's Changed**
* Recreate type table using latest patch versions
* Made transitive dependency bump a ScanningRecipe
* `DependencyVulnerabilityCheck` recursively checks upgrade paths for transitive dependencies

#### 3.8.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14
* Inline DocumentBuilderFactory feature variables




#### 3.7.0 - *April 24, 2025*

**What's Changed**
* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests
* Ignore the TraitErrorsException in XmlParserXXEVulnerability
* Update DocumentBuilderFactoryFixVisitor.java

#### 3.6.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 3.6.0 - *April 9, 2025*

**What's Changed**
* Adapt to DependencyVersionSelector new arg
* Revert "Adapt to DependencyVersionSelector new arg"
* Fixing code suggestions




#### 3.5.0 - *March 28, 2025*

**What's Changed**
* FindHardcodedPrivateIPAddresses recipe
* Adding \b to regexp for FindHardcodedPrivateIPAddresses




#### 3.4.0 - *March 27, 2025*

**What's Changed**
* Honoring the last_affected field in security advisories
* Faster, stronger "Find and fix vulnerable dependencies"
* refactor: Remove out-of-date OWASP suppressions
* mavenTransitiveUpgradeDirectLowestDepth doesn't expect exact version
* refactor: OpenRewrite Recipe best practices
* chore(ci): bump webfactory/ssh-agent from 0.9.0 to 0.9.1

#### 3.3.0 - *March 11, 2025*

**What's Changed**
* Fix failing `PreventClickjackingTest` test cases
* Add date to dependency vulnerability check recipe description
* `DependencyVulnerabilityCheck`: Allow Maven Central access for Maven projects
* `VulnerabilityReport` must contain all vulnerabilities
* Fix storing of date
* Add scope explanation

#### 3.2.0 - *February 20, 2025*

**What's Changed**
* Support parsing of single quote strings in DTDs
* Adopt TypeTable
* Only apply CWE-611 fix upon XML parser instantiation
* Fix Azure secret false positive and add support for properties
* Improvement speedup dependency vulnerability check recipe
* Upgrade GenerateWebSecurityConfigurerAdapter to use SecurityFilterChain

#### 3.0.1 - *January 24, 2025*

**What's Changed**
* chore: update suppressions
* Create a LICENSE folder




#### 3.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices
* refactor: Remove Gradle Enterprise
* refactor: Enum values should be compared with "=="
* chore: update suppressions

#### 2.17.1 - *December 19, 2024*

**What's Changed**
* Replace snakeyaml Parser dependency with type definitions to address critical CVE




#### 2.17.0 - *December 18, 2024*

**What's Changed**
* chore: update suppressions
* Add spring-security-web parser classpath dependency
* Apply Moderne proprietary license
* Add security advisory, SBOM and license recipes
* Rename enum values to match valid values

#### 2.16.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 2.15.0 - *November 13, 2024*

**What's Changed**
* refactor: add @Nullable to methods who may return null

#### 2.14.0 - *October 10, 2024*

**What's Changed**
* update suppressions for 09-25-2024 vulnerability report




#### 2.13.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.12.0 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* suppress spring-data-mongodb coming in via rewrite-spring

#### 2.11.3 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations




#### 2.11.0 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.10.1 - *June 19, 2024*

**What's Changed**
* rewrite-spring v5.13.1



#### 2.9.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### v2.8.0 - *May 17, 2024*

**What's Changed**

* Update with rewrite 8.26.0



#### 2.7.0 - *May 8, 2024*

**What's Changed**
* Remove Random import during SecureRandom recipe




#### 2.6.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.5.1 - *March 18, 2024*

**Bug fixes**
* Remove non-existent recipe from OWASP A02 list: 



#### 2.5.0 - *March 12, 2024*

**What's Changed**
* refactor: remove expired suppressions




#### 2.4.0 - *February 20, 2024*

**What's Changed**
* refactor: OpenRewrite best practices
* Generify ZipSlip Visitor
* Configurable path traversal guard exception msg




#### 2.3.0 - *February 6, 2024*

**What's Changed**
* General Cleanup & Improvements




#### 2.1.2 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.1.1 - *November 25, 2023*

**What's Changed**
* Adopt FixCwe338




#### 2.1.0 - *November 10, 2023*

**What's Changed**
* Update with rewrite 8.9.0
* Fix broken cross reference for Owasp A10 (#111)




#### v2.0.5 - *October 3, 2023*

**What's Changed**
* Update with rewrite 8.7.1
* Add missing import in XmlParserXXEVulnerability

#### v2.0.4 - *September 12, 2023*

**What's Changed**
* Additional abstraction of visitBlock and code cleanup
* Add XmlFactoryVariable and support for static class variables
* feat/SN/continueDBFPatch
* feat/SN/continueDBFPatch
* Add support for multiple XML factories per file
* added support for cases when one property was set but the rest weren't. Expand Entity References support still pending.




#### v2.0.3 - *August 24, 2023*

**What's Changed**
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

#### 2.0.1 - *June 13, 2023*

**What's Changed**

* OpenRewrite 8.1.2

#### v2.0.0 - *June 1, 2023*

**What's Changed**
* spelling: separator
* OpenRewrite 8.0 upgrade
* Adjust to new OpenRewrite 8.0 `JavaTemplate` API

#### 1.25.0 - *April 20, 2023*

**What's Changed**
* Update with rewrite 7.40.0
* adjusted usages of UsesType for includeImplicit

#### 1.24.0 - *April 3, 2023*

**What's Changed**
* adjusted usages of UsesType for includeImplicit
* Update with rewrite 7.39.0

#### 1.23.0 - *March 14, 2023*

# What's Changed

* Update with rewrite 7.38.0



#### v1.22.0 - *February 15, 2023*

**What's Changed**
* Update with rewrite 7.36.0
* UseFilesCreateTempDirectory: Support Apache Commons IO
* refactor: Update OWASP suppression date bounds
* fix: correct CsrfProtection recipe applicable test

#### 1.21.0 - *January 19, 2023*

**What's Changed**
* SecureSnakeYamlConstructor: Increase Scope, decrease False Positives
* Various Fixes & Test Addition
* Upgrade Gradle wrapper to 7.6 and add checksum validation
* chore: Owasp suppression updates

#### 1.20.0 - *December 12, 2022*

**What's Changed**
* Add missing language highlighting comments in ZipSlip Test
* Support source file filtering for SecureTempFileCreation
* fix: use `@Value` annotation to attempt to fix missing opt




#### 1.19.0 - *November 16, 2022*

**What's Changed**
* Update with rewrite 7.33.0
* Detect secrets recipe in #63
* Improve REDOS Recipe a9c29f5
* Fix escaping of the 'good' side of ReDOS patterns d7022ea
* Rename `name` to `secretName` in FindSecretsByPattern 5c06847
* Fix SecureTempFileCreation fails to template successfully because it uses incorrect cursor 6b832bb

#### 1.18.0 - *October 19, 2022*

**What's Changed**
 * Updated to use rewrite 7.32.0
 * pin Jackson to 2.13.4 31fbaee
 
 


#### 1.17.0 - *October 10, 2022*

**What's Changed**
* Use rewrite 7.31.0
* Fix #60, UseSecureRandomnot changing a random in unknown circumstances.




#### 1.16.0 - *September 22, 2022*

**Enhancements**
* Updated with rewrite 7.30.0
* Add ReDOS Vulnerability Fix

**Fixes**
* Fix broken tests caused by updated AddImport layout style detection. ()
* revert ZipSlip#debug property change from boolean to Boolean


#### 1.15.0 - *September 2, 2022*

**Enhancements**

* Updated to use rewrite 7.29.0

**Fixes**

* Zip Slip: Throw IOException where safe to do so
* Fix IOException not always generating correctly




#### 1.14.1 - *August 6, 2022*

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



#### 1.14.0 (please don't use) - *August 5, 2022*

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### 1.13.0 - *July 7, 2022*

**Enhancements**

* Updated to use rewrite 7.25.0

**Fixes**

* Improve the Partial Path Traversal Vulnerability Fix
* Add test for `getCanonicalPath` in try block
* Only run `PartialPath` when `String#startsWith` AND `File#getCanonicalPath` is present
* Significantly improve performance of Partial Path Traversal




#### 1.12.0 - *June 1, 2022*

**Enhancements**

* Updated to use rewrite 7.24.0
* Add Data Flow support for the Partial Path Traversal fix in #26
* Complete support for Data Flow support for the Partial Path Traversal fix in #27

**Fixes**

* Fix DataFlow use after API breaking change + test new DataFlow in #30
* Fix: Multiple Sources in Partial Path Traversal Vulnerability Fix in #32



#### 1.11.0 - *May 11, 2022*

**Enhancements**
* Updated to use rewrite 7.23.0
* Fix all source file line endings #21
* Recipe: Partial Path Traversal Vulnerability #23

**Fixes**
* Fix bugs in `SecureTempFileCreation` & `UseFilesCreateTempDirectory` #20
* Simple comments and sanity assertions in temp dir logic in #22



#### 1.9.0 - *April 26, 2022*

**Enhancements**
* Updated to use rewrite 7.22.0
* Update UseFilesCreateTempDirectory to support expressions in control statements

#### 1.8.2 - *April 6, 2022*

**Enhancements**

- Updated to use rewrite 7.21.3

#### 1.8.1 - *April 5, 2022*

**Enhancements**

* Updated to use rewrite 7.21.1

#### 1.8.0 - *April 4, 2022*

**Whats Changed**
 * Updated to use rewrite 7.21.0



#### 1.7.0 - *March 23, 2022*

**Whats Changed**
 * Updated to use rewrite 7.20.0



#### 1.6.0 - *February 25, 2022*

**What's Changed**
* Updated with rewrite version 7.19.0
* Update UseFilesCreateTempDirectory to not convert File#mkdir() staements when the file path is from `java.io.tmpdir`. (#17)



#### 1.5.0 - *February 10, 2022*

**What's Changed**
* Updated with rewrite version 7.18.0
* Move `UseFilesCreateTempDirectory` from rewrite-java to rewrite-java-security #11
* UseFilesCreateTempDirectory should convert File#mkdir() when the path is from java.io.tmpdir #13 
* Update SecureTempFileCreation to handle null Path argument


#### 1.4.0 - *January 7, 2022*

**Enhancements**
- Updated with rewrite version 7.17.0

**Fixes**
- Update PreventClickjackingTest parser class-path to just spring-boot-autoconfigure and spring-security-config
- Update GenerateWebSecurityConfigurerAdapter WebSecurityConfigurerAdaptor method-matcher to match overrides


#### 1.3.1 - *November 1, 2021*

**Fixes**

* FindTextDirectionChanges now also detects direction-changing control characters in string literals 

#### 1.3.0 - *November 1, 2021*

**Enhancements**

*  Add FindTextDirectionChanges recipe to find text-direction changes potentially related to CVE-2021-42574 

#### 1.2.1 - *October 28, 2021*

**Fixes**

* Remove unneeded debug logging 

#### 1.2.0 - *October 26, 2021*

Enhancements:
- Upgrade to rewrite 7.16.0
- Add SecureRandomPrefersDefaultSeed

Fixes:
- Fix SecureTempFileCreation to not include trailing semicolon in template which allows blocks to be generated properly

#### 1.1.0 - *October 5, 2021*

Enhancements:
- Upgrade to rewrite 7.15.0

#### 1.0.0 - *September 14, 2021*

Initial release:
Java security recipes have been moved from rewrite to this project

## rewrite-hibernate

#### 0.12.0 - *September 24, 2025*

**What's Changed**
* Rename a file
* Update type tables via `./gradlew createTypeTable`

#### 0.11.0 - *September 10, 2025*

**What's Changed**
* Introduce (Composite)UserType recipes
* Inline methods annotated with `@InlineMe`
* Hibernate 7: JdbcType to JdbcTypeCode




#### 0.10.0 - *August 27, 2025*

**What's Changed**
* Replace annotation for Hibernate 7.0
* Migrate Session load, get and refresh to getReference, find and refresh
* Migrate Hibernate CascadeType constants
* NaturalIdLoadAccess#using(Object...) and NaturalIdMultiLoadAccess#compoundValue(Object...) removed in favor of (Map) variants
* Hibernate7: LockRequest to new LockOptions implementation
* Remove Unnecessary Cast to Session from createEntityManager
* Hibernate7 - Remove deprecated LockOptions

#### 0.9.0 - *August 12, 2025*

**What's Changed**
* Add `cascade=PERSIST` for @Id and @MapsId Attributes
* Replace `@Target` to `@TargetEmbeddable`




#### 0.9.0 - *July 23, 2025*

**What's Changed**
* Hibernate7 misc type changes
* Test the total of Hibernate 7.0 migration




#### 0.8.0 - *July 23, 2025*

**What's Changed**
* Migrate deprecated Session interface methods to their Hibernate 7.0 replacements
* Migrate from JPA EntityManager to Hibernate Session
* Remove hibernate.annotations
* Migrate Session save/update/delete method calls




#### 0.7.0 - *July 9, 2025*

**What's Changed**
* refactor: org.openrewrite.mavencentral

#### 0.6.0 - *June 25, 2025*

**What's Changed**
* Add basic hibernate 7 migration

#### 0.5.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.3.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.2.2 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.2.1 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.2.0 - *February 20, 2025*

**What's Changed**
* Rename package for better categorization

#### 0.1.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### v0.1.0 - *February 3, 2025*

**What's Changed**
* Add Hibernate 6.6 migration
* Fix conflicting class type annotations in Hibernate 6.6
* Add `io.moderne.hibernate.update66.RemoveTableFromInheritedEntity` recipe
* Find JPQL definitions

## rewrite-comprehension

#### 0.7.7 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.7.6 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.7.5 - *August 27, 2025*

**What's Changed**
* Apply OpenRewrite best practices




#### 0.7.4 - *August 12, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.60.0

#### 0.7.3 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.7.2 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.0

#### v0.7.1 - *July 9, 2025*

**What's Changed**
* Updates publish maven central workflow

#### 0.6.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.5.4 - *April 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.51.0

#### 0.5.3 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.5.2 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 0.5.1 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.3.0 - *February 7, 2025*

**What's Changed**
* Feat feed unit tests examples for ai description




#### 0.2.0 - *January 24, 2025*

**What's Changed**
* feat-LSTInsights
* Unpin OpenRewrite version after adjusting cursor validation

## rewrite-kafka

#### 0.2.0 - *September 24, 2025*

**What's Changed**
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

#### v0.1.0 - *September 10, 2025*

**What's Changed**
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

## rewrite-elastic

#### 0.2.0 - *September 24, 2025*

**What's Changed**
* Created ChangeApiNumericFieldType recipe
* Added some other types that have changed




#### v0.1.0 - *September 10, 2025*

**What's Changed**
* Migrate to v9 initial recipe
* Rename `*Reponse valueBody()` methods for ElasticSearch 9
* Map indicesBoost and dynamicTemplates `Map` to `NamedValue`
* `Hit matchedQueries()` changed from `List&lt;String&gt;` to `Map&lt;String, Double&gt;`
* Add comments to deprecated classes
* Migrate source field from String to ScriptSource
* Added BoxedApiFields recipe and the singular BoxedApiField recipe

## rewrite-reactive-streams

#### 0.16.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.16.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.16.0 - *August 27, 2025*

**What's Changed**
* Use classpath from resource for Refaster

#### 0.14.3 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.14.2 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.0

#### 0.13.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.13.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 0.12.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests




#### 0.11.3 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.11.2 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 0.11.1 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.10.0 - *February 20, 2025*

**What's Changed**
* Adopt TypeTable




#### 0.9.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 0.9.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 0.8.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 0.7.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license
* Add ReactorBestPractices recipe, leveraging ReactorRulesRecipes

#### 0.6.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.5.0 - *November 15, 2024*

**What's Changed**
* Migrate `doAfterSuccessOrError` to `tap` & @jevanlingen




#### 0.4.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.3.1 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 0.3.0 - *October 9, 2024*

**What's Changed**
* update to latest error prone to remove protobuf-java@3.19.2 vulnerability

#### 0.2.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.1.2 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 0.1.0 - *August 12, 2024*

**What's Changed**
* Initial setup
* Rebrand to Reactive Streams to serve whole spec
* Recipes for migrating to reactor 3.5+
* Include update of reactor-core dependency to 3.5.X

## rewrite-codemods-ng

#### 0.14.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.14.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.14.0 - *August 27, 2025*

**What's Changed**
* chore(deps): bump brace-expansion from 2.0.1 to 2.0.2 in /src/main/resources/codemods[bot]




#### 0.12.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.12.0 - *July 23, 2025*

**What's Changed**
* Add the `--no-audit` and `--no-fund` flags




#### 0.11.0 - *July 9, 2025*

**What's Changed**
* Make the local `npm install` be aware of the .npmrc file




#### 0.10.1 - *June 25, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.56.0

#### 0.9.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14
* Retrieve .npmrc file from global scope

#### 0.8.2 - *April 15, 2025*

**What's Changed**
* fix: update install command with proper --ignore-scripts




#### 0.8.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.8.0 - *April 9, 2025*

**What's Changed**
* Needs to make `ExecutionContext` mutable in test case
* Fix for windows
* Skip non-Angular projects instead of throwing an exception

#### 0.7.5 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.7.4 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.7.3 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### 0.7.2 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 0.7.1 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 0.7.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices




#### v0.6.0 - *December 18, 2024*

**What's Changed**
* chore(deps): bump cross-spawn from 7.0.3 to 7.0.6 in /src/main/resources/codemods
* refactor: Add a blank line around fields with annotations
* Find angular.json in subdirs as well
* Apply Moderne proprietary license

#### 0.5.3 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.5.2 - *November 27, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.0

#### 0.5.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.5.0 - *November 8, 2024*

**What's Changed**
* swap @Nullable to jspecify

#### 0.4.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 0.4.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 0.3.0 - *September 11, 2024*

**What's Changed**
* refactor: Create text file
* refactor: Update Gradle wrapper to 8.10.1

#### 0.2.0 - *July 26, 2024*

**What's Changed**
* chore(deps): bump tar from 6.2.0 to 6.2.1 in /src/main/resources/codemods
* refactor: use npm shell executor
* fix: bump max old heap size in NODE_OPTIONS
* fix: bump max old heap size in NODE_OPTIONS

## rewrite-terraform

#### 3.8.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 3.8.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 3.8.0 - *August 27, 2025*

**What's Changed**
* Find required providers




#### 3.6.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 3.5.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 3.3.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 3.2.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests




#### 3.1.6 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 3.1.5 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 3.1.4 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 3.1.3 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 3.1.2 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### 3.1.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 3.1.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 3.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 2.7.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license




#### 2.6.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 2.5.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 2.4.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 2.4.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 2.4.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.9 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.8 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### 2.3.7 - *August 12, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.6 - *August 8, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.5 - *July 31, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.4 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.3 - *July 3, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.2 - *June 19, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.1 - *June 19, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.3.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.2.3 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.2.2 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.2.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.0.13 - *December 21, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.12 - *December 20, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.11 - *December 14, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.10 - *December 8, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.9 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### v2.0.6 - *October 27, 2023*

* Update with rewrite 8.8.3


#### v2.0.5 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 2.0.4 - *September 12, 2023*

**What's Changed**
* Update with rewrite 8.5.0



#### v2.0.3 - *August 24, 2023*

**What's Changed**
* Update with rewrite 8.4.0
* Unpin version of gradle enterprise

#### 2.0.1 - *June 13, 2023*

**What's Changed**

* Update with rewrite 8.1.2



#### v2.0.0 - *June 1, 2023*

**What's Changed**
* Handle large repositories

#### 1.19.0 - *April 20, 2023*

**What's Changed**
* Update with rewrite 7.40.0



#### 1.18.0 - *April 3, 2023*

**What's Changed**

* Update with rewrite 7.39.0



#### v1.17.0 - *February 15, 2023*

Update with rewrite 7.36.0



#### v1.16.0 - *January 20, 2023*

**What's Changed**
* update for compatibility with rewrite 7.35.0

#### 1.15.0 - *December 12, 2022*

**What's Changed**

* Update with rewrite 7.33.0
* chore: update suppressions for new false positives




#### 1.14.0 - *November 16, 2022*

**What's Changed**
* Update with rewrite 7.33.0



#### 1.13.0 - *October 19, 2022*

**What's Changed**
* Update to use rewrite 7.32.0
* chore: suppress jackson-databind

#### 1.12.0 - *October 10, 2022*

**What's Changed**
* Use rewrite 7.31.0



#### 1.11.1 - *September 22, 2022*

**Enhancements**
 * Update with rewrite 7.30.0
 


#### 1.10.0 - *September 2, 2022*

**Enhancements**

* Updated to use rewrite 7.29.0



#### 1.9.1 - *August 6, 2022*

**Enhancements**
* Updated to use rewrite 7.27.1



#### 1.9.0 (Please don't use) - *August 5, 2022*

**Enhancements**
* Updated to use rewrite 7.27.0



#### 1.8.0 - *July 7, 2022*

**Enhancements**

* Updated to use rewrite 7.25.0



#### 1.7.0 - *June 1, 2022*

**Enhancements**

* Updated to use rewrite 7.24.0



#### 1.6.0 - *May 11, 2022*

**Enhancements**
* Updated to use rewrite 7.23.0



#### 1.5.0 - *April 26, 2022*

**Enhancements**

- Updated to use rewrite 7.22.0

#### 1.4.2 - *April 6, 2022*

**Enhancements**

- Updated to use rewrite 7.21.3

#### 1.4.1 - *April 5, 2022*

**Enhancements**

* Updated to use rewrite 7.21.1

#### 1.4.0 - *April 4, 2022*

**What's Changed**
* Updated with rewrite version 7.21.0



#### 1.3.0 - *March 23, 2022*

**Whats Changed**
 * Updated to use rewrite 7.20.0



#### 1.2.0 - *February 25, 2022*

**What's Changed**
* Updated to use rewrite 7.19.0



#### 1.1.0 - *February 10, 2022*

**What's Changed**

* Updated with rewrite version 7.18.0



#### 1.0.0 - *January 7, 2022*

**Enhancements**
- Updated with rewrite version 7.17.0



#### 0.8.0 - *October 26, 2021*

Enhancements:
 - Updated with rewrite version 7.16.0

#### 0.7.0 - *October 5, 2021*

Enhancements:

 - Updated with rewrite version 7.15.0
 - Include _incubating_ scaffolding for TF0.11 -&gt; TF0.12

#### 0.6.0 - *September 14, 2021*

Enhancements:
 - Updated with rewrite version 7.14.0
 - Add SecureRandomRecipe ()

#### 0.5.0 - *September 3, 2021*

Enhancements:

- Updated with rewrite 7.13.0

#### 0.4.0 - *August 21, 2021*

Enhancements:

- Updated with rewrite 7.12.0
- Added ~100+ Terraform recipes for more-securely operating on `AWS`, `GCP`, and `Azure` IaaSes, such as `Ensure IAM password policy requires at least one uppercase letter`, `Encrypt EBS volumes`, `Encrypt Azure VM data disk with ADE/CMK`, `Ensure GCP Kubernetes cluster node auto-repair configuration is enabled`, and many more.
  - For the full iteration, check the `aws.yml`, `gcp.yml`, and `azure.yml` declarative recipes for the full list.

#### 0.3.0 - *August 12, 2021*

Enhancements:

• Updated with rewrite 7.11.0

#### 0.2.0 - *July 28, 2021*

Enhancements:
• Updated with rewrite 7.10.0

#### 0.1.0 - *July 16, 2021*

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

## rewrite-sql

#### 2.6.5 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 2.6.4 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 2.6.3 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 2.6.2 - *August 12, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.60.0

#### 2.6.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 2.4.1 - *June 25, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.56.0

#### 2.3.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 2.2.0 - *April 24, 2025*

**What's Changed**
* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests




#### 2.1.6 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 2.1.5 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 2.1.4 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 2.1.3 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 2.1.2 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### 2.1.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 2.1.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 2.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 1.13.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license




#### 1.12.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 1.11.1 - *November 13, 2024*

**What's Changed**
* Updating to use new publication tokens

#### 1.10.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 1.10.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 1.10.0 - *September 24, 2024*

**What's Changed**
* Also detect all columns in FindSql
* refactor: Update Gradle wrapper




#### 1.9.3 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 1.9.2 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### 1.9.1 - *August 12, 2024*

**What's Changed**
* Update testcase regarding addition of GitRemote to GitProvenance

#### 1.9.0 - *August 8, 2024*

**What's Changed**
* Update testcase regarding addition of GitRemote to GitProvenance

#### 1.8.1 - *July 31, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 1.8.0 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 1.5.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 1.4.3 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 1.4.2 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 1.4.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 1.3.0 - *March 19, 2024*

**What's Changed**
* refactor: OpenRewrite best practices




#### 1.0.8 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### v1.0.4 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 1.0.3 - *September 12, 2023*

**What's Changed**
* Update with rewrite 8.5.0



#### v1.0.2 - *August 24, 2023*

* Update with rewrote 8.4.0


#### 1.0.1 - *June 13, 2023*

**What's Changed**

* OpenRewrite 8.1.2

#### 1.0.0 - *June 3, 2023*

**What's Changed**
* Upgrade to OpenRewrite 8.0

## rewrite-nodejs

#### 0.29.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.29.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.27.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.27.0 - *July 23, 2025*

**What's Changed**
* common static analysis issues




#### 0.23.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 0.22.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests




#### 0.21.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.20.0 - *March 27, 2025*

**What's Changed**
* Honoring the last_affected field in security advisories

#### v0.16.1 - *January 24, 2025*

**What's Changed**
* Increment version after publish failures




#### 0.16.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 0.15.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`




#### 0.14.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license




#### 0.13.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.12.1 - *November 8, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.0

#### 0.12.0 - *November 6, 2024*

**What's Changed**
* refactor: Annotate methods which may return `null` with `@Nullable`

#### 0.9.1 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper



#### 0.9.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.8.0 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.7.2 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### 0.7.0 - *August 8, 2024*

**What's Changed**
* Find and fix vulnerable npm packages
* Add CVE markers to vulnerable dependencies
* Do not break on invalid versions
* Prevent accidental downgrade of dependencies
* feat: add various dependency insights

#### 0.6.1 - *July 31, 2024*

**What's Changed**
* feat: add npm executor and npm executor execution context view
* fix(npm executor): make configuration directory protected

#### 0.6.0 - *July 26, 2024*

**What's Changed**
* feat: add npm executor and npm executor execution context view
* fix(npm executor): make configuration directory protected

#### 0.5.1 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.5.0 - *July 10, 2024*

**What's Changed**
* Bump minor version due to misaligned SNAPSHOT version at Sonatype OSS



#### 0.3.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 0.2.5 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 0.2.3 - *May 22, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 0.2.1 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

## rewrite-kubernetes

#### 3.10.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 3.10.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 3.9.0 - *August 12, 2025*

**What's Changed**
* Refactor RewriteTest to use defaults method




#### 3.8.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 3.4.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 3.3.0 - *April 24, 2025*

**What's Changed**
* refactor: New line at the end of `SourceSpecs` text blocks
* Skip .csproj files when finding hardcoded IP addresses
* refactor: Extract documentation examples from tests




#### 3.2.5 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 3.2.4 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 3.2.3 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 3.2.2 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 3.2.1 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### 3.1.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 3.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 2.12.0 - *December 18, 2024*

**What's Changed**
* Find hardcoded IP addresses
* Apply Moderne proprietary license




#### 2.11.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 2.10.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 2.10.0 - *November 6, 2024*

**What's Changed**
* Add deprecated API migrations for Kubernetes




#### 2.9.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 2.9.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 2.9.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.8.3 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.8.2 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### 2.8.0 - *August 8, 2024*

**What's Changed**
* Markers shown on Spring application.yml




#### 2.5.0 - *June 7, 2024*

**What's Changed**
* refactor/update-gradle-wrapper




#### v2.4.0 - *May 17, 2024*

**What's Changed**

* Update with rewrite 8.26.0



#### 2.3.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.2.2 - *March 12, 2024*

**What's Changed**
* refactor: Upgrade Develocity




#### 2.2.0 - *February 6, 2024*

**What's Changed**
* refactor: add digest functionality and unit tests

#### 2.0.13 - *December 21, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.12 - *December 20, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.11 - *December 14, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.10 - *December 8, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.9 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### v2.0.6 - *October 27, 2023*

* Update with rewrite 8.8.3


#### v2.0.5 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 2.0.4 - *September 12, 2023*

**What's Changed**
* Update with rewrite 8.5.0



#### v2.0.3 - *August 24, 2023*

* Update with rewrite 8.4.0


#### 2.0.1 - *June 13, 2023*

**What's Changed**

* OpenRewrite 8.1.2

#### 2.0.0 - *June 2, 2023*

**What's Changed**
* OpenRewrite 8.0 upgrade

#### 1.30.0 - *April 20, 2023*

**What's Changed**
* Update with rewrite 7.40.0
* Have test classes extend abstract class KubernetesRecipeTest

#### 1.29.0 - *April 3, 2023*

**What's Changed**
* Have test classes extend abstract class KubernetesRecipeTest
* Updated with the latest version of rewrite 7.39.0.

#### v1.28.0 - *February 20, 2023*

**What's Changed**
* Update with rewrite 7.36.1.



#### v1.27.0 - *January 20, 2023*

**What's Changed**
* Update with rewrite 7.35.0
* Update for compatibility with rewrite 7.35.0

#### 1.26.0 - *December 12, 2022*

**What's Changed**
* Updated with rewrite 7.34.0




#### 1.25.0 - *November 16, 2022*

**What's Changed**
* Update with rewrite 7.33.0



#### 1.24.0 - *October 19, 2022*

**What's Changed**
* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### 1.23.0 - *October 10, 2022*

**What's Changed**
* Use rewrite 7.31.0



#### 1.22.0 - *September 22, 2022*

**Enhancements**
 * Update with rewrite 7.30.0

**Fixes**
 * rewrite 7.30.0 MergeYaml update


#### 1.21.0 - *September 2, 2022*

**Enhancements**

* Updated to use rewrite 7.29.0



#### 1.20.1 - *August 6, 2022*

##Enhancements

* Updated to rewrite 7.27.1



#### 1.19.0 - *July 7, 2022*

**Enhancements**

* Updated to use rewrite 7.25.0



#### 1.18.0 - *June 1, 2022*

**Enhancements**

* Updated to use rewrite 7.24.0

**Fixes**



#### 1.17.0 - *May 11, 2022*

**Enhancements**
* Updated to use rewrite 7.23.0

**Fixes**
* Use JsonPathMatcher to merge yaml in AddConfiguration. #34
* fix AddConfiguration recipes in KubernetesBestPractices.


#### 1.16.0 - *April 26, 2022*

**Enhancements**

- Updated to use rewrite 7.22.0

#### 1.15.1 - *April 6, 2022*

**Enhancements**

- Updated to use rewrite 7.21.3

#### 1.15.0 - *April 5, 2022*

**Enhancements**

* Updated to use rewrite 7.21.1

**Fixes**

* Kubernetes parser/visitor to use markers rather than extend Yaml Tree #33
* JsonPathMatcher Fixes


#### 1.14.0 - *March 23, 2022*

**Whats Changed**
 * Updated to use rewrite 7.20.0



#### 1.13.0 - *February 25, 2022*

**What's Changed**

* Updated with rewrite version 7.19.0
* Update KubernetesRecipeTest to the latest version of RecipeTest.
* Removed Yaml.Sequence.Entry from field of recipe. ()

#### 1.12.0 - *February 10, 2022*

**Enhancements**
- Updated with rewrite version 7.18.0



#### 1.11.0 - *January 7, 2022*

**Enhancements**
- Updated with rewrite version 7.17.0



#### 1.10.0 - *October 26, 2021*

Enhancements:
 - Updated with rewrite version 7.16.0

#### 1.9.0 - *October 5, 2021*

Enhancements:
 - Updated with rewrite version 7.15.0

#### 1.8.0 - *September 14, 2021*

Enhancements:
 - Updated with rewrite version 7.14.0

#### 1.7.0 - *September 3, 2021*

Enhancements:

- Updated with rewrite 7.13.0

#### 1.6.0 - *August 21, 2021*

Enhancements:

- Updated with rewrite 7.12.0

#### 1.5.0 - *August 12, 2021*

Enhancements:

- Updated with rewrite 7.11.0
- Add source path filtering #19
- New recipe: Add RBAC rules to ClusterRoles or namespaced Roles #20
- New example: K8s operator example #21

#### 1.4.0 - *July 28, 2021*

Enhancements:

* Updated with rewrite 7.10.0
* Applicable recipes now use `JsonPathMatcher`
* `Ingress` now modeled as part of the `K8S` AST
* New Recipe: FindExceedsResourceRatio

#### 1.3.0 - *July 16, 2021*

Enhancements:

- Updated with rewrite 7.9.0
- Updated with rewrite-testing-frameworks 1.8.0
- Recipe to find and cap resource values that exceed a max
- Add valid enumerated values to recipes
- Resource matching logic was moved to rewrite core

#### 1.2.0 - *June 30, 2021*

Enhancements:

- Updated with rewrite 7.8.0
- Add namespace to model
- Add CTOR arg for new option

#### 1.1.0 - *June 11, 2021*

Enhancements:
 
- Updated to use rewrite-core 7.7.0

#### 1.0.0 - *May 5, 2021*

Initial release.

## rewrite-dotnet

#### 0.13.3 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.13.2 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.13.1 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 0.12.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.12.0 - *July 23, 2025*

**What's Changed**
* common static analysis issues

#### 0.11.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 0.10.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.10.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 0.8.4 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.8.3 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 0.8.2 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.8.1 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.7.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 0.7.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 0.6.0 - *January 10, 2025*

**What's Changed**
* Adopt Moderne Proprietary license
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise

#### 0.5.2 - *December 18, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.42.0

#### 0.5.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.4.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.3.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 0.3.0 - *October 1, 2024*

**What's Changed**
* Set DOTNET_UPGRADEASSISTANT_TELEMETRY_OPTOUT environment variable when exec'ing upgrade-assistant
* Additional error handling
* Set DOTNET_UPGRADEASSISTANT_SKIP_FIRST_TIME_EXPERIENCE environment variable for non-interactive execution with no console




#### 0.2.0 - *September 26, 2024*

**What's Changed**
* Update recipe descriptions




#### 0.1.0 - *September 26, 2024*

**What's Changed**
* Add upgrade-assistant support

## rewrite-concourse

#### 3.7.3 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 3.7.2 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 3.7.1 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 3.6.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 3.5.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 3.4.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 3.4.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 3.3.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests




#### 3.2.4 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 3.2.3 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 3.2.2 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 3.2.1 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 3.1.1 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 3.1.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 3.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 2.10.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license




#### 2.9.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 2.8.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 2.8.0 - *November 6, 2024*

**What's Changed**
* refactor: Annotate methods which may return `null` with `@Nullable`

#### 2.7.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 2.7.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 2.7.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.5 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.4 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations




#### 2.6.3 - *August 12, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.2 - *August 8, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.1 - *July 31, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.0 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### v2.3.0 - *May 17, 2024*

**What's Changed**

* Update with rewrite 8.26.0



#### 2.2.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.1.6 - *March 12, 2024*

**What's Changed**
* refactor: remove expired suppressions

#### 2.1.5 - *February 20, 2024*

**What's Changed**
* Add missing example values




#### 2.0.13 - *December 21, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### 2.0.12 - *December 20, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### 2.0.11 - *December 14, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### 2.0.10 - *December 8, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### 2.0.9 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5

#### v2.0.6 - *October 27, 2023*

* Update with rewrite 8.8.3


#### v2.0.5 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 2.0.4 - *September 12, 2023*

**What's Changed**
* Rewrite v8.5.0



#### v2.0.3 - *August 24, 2023*

* Update with rewrite 8.4.0


#### 2.0.1 - *June 13, 2023*

**What's Changed**

* OpenRewrite 8.1.2

#### 2.0.0 - *June 2, 2023*

**What's Changed**
* Support rewrite 8.0

#### 1.19.0 - *April 20, 2023*

**What's Changed**
* Update with rewrite 7.40.0



#### 1.18.0 - *April 3, 2023*

**What's Changed**
* Update with rewrite 7.39.0



#### v1.17.0 - *February 15, 2023*

**What's Changed**
* Update with rewrite 7.36.0
* refactor: Update OWASP suppression date bounds

#### 1.16.0 - *January 19, 2023*

**What's Changed**
* Update with rewrite 7.35.0

#### 1.15.0 - *December 12, 2022*

**What's Changed**
* Update with rewrite 7.34.0




#### 1.14.0 - *November 16, 2022*

**What's Changed**
* Updated with rewrite 7.33.0



#### 1.13.0 - *October 19, 2022*

**What's Changed**
* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### 1.12.0 - *October 10, 2022*

**What's Changed**
* Use rewrite 7.31.0



#### 1.11.0 - *September 22, 2022*

**Enhancements**
 * Update with rewrite 7.30.0




#### 1.10.0 - *September 2, 2022*

**Enhancements**

* Updated to use rewrite 7.29.0



#### 1.9.2 - *August 6, 2022*

**Enhancements**

* Updated to use rewrite 7.27.1



#### 1.9.0 (please don't use) - *August 5, 2022*

**Please don't use**

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### 1.8.0 - *July 7, 2022*

**Enhancements**

* Updated to use rewrite 7.25.0



#### 1.7.0 - *June 1, 2022*

**Enhancements**

* Updated to use rewrite 7.24.0



#### 1.6.0 - *May 11, 2022*

**Enhancements**
* Updated to use rewrite 7.23.0



#### 1.5.0 - *April 26, 2022*

**Enhancements**

- Updated to use rewrite 7.22.0

#### 1.4.1 - *April 6, 2022*

**Enhancements**

- Updated to use rewrite 7.21.3

#### 1.4.0 - *April 5, 2022*

**Whats Changed**
 * Updated to use rewrite 7.21.0



#### 1.3.0 - *March 23, 2022*

**Whats Changed**
 * Updated to use rewrite 7.20.0



#### 1.2.0 - *February 25, 2022*

**What's Changed**
* Updated to use rewrite 7.19.0
* Bump up Gradle plugin dependencies #8

#### 1.1.0 - *February 10, 2022*

**Enhancements**
- Updated with rewrite version 7.18.0



#### 1.0.0 - *January 7, 2022*

**Enhancements**
- Upgrade to rewrite 7.17.0



#### 0.3.0 - *October 26, 2021*

Enhancements:
 - Upgrade to rewrite 7.16.0

#### 0.2.0 - *October 5, 2021*

Enhancements:
- Upgrade to rewrite 7.15.0

#### 0.1.0 - *September 14, 2021*

Initial (pre-1.x) release 🎉 

Enhancements:
- Upgrade to rewrite 7.14.0
- Concourse ChangeValue which can backtrack to change property definitions
- FindPinnedResource, ChangeResourceVersion, FindPrivilegedResourceType

## rewrite-compiled-analysis

#### 0.8.3 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.8.2 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.8.1 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 0.7.3 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.7.2 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.0

#### v0.7.1 - *July 9, 2025*

**What's Changed**
* Update for maven central

#### 0.4.2 - *April 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.51.0

#### 0.4.1 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.3.0 - *March 27, 2025*

**What's Changed**
* Ignore missing types in Javadoc

#### 0.2.6 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.2.5 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### 0.2.4 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 0.2.3 - *January 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.44.1

#### 0.2.2 - *January 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.44.0

#### 0.2.1 - *January 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.43.0

## rewrite-circleci

#### 3.7.5 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 3.7.4 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 3.7.3 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 3.7.2 - *August 12, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.60.0

#### 3.7.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 3.6.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 3.5.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 3.5.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 3.4.0 - *April 24, 2025*

**What's Changed**
* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests




#### 3.3.4 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 3.3.3 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 3.3.2 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 3.3.1 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 3.3.0 - *February 20, 2025*

**What's Changed**
* Update MergeYaml constructor

#### 3.1.1 - *January 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.44.1

#### 3.1.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 3.0.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 2.10.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license




#### 2.9.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 2.8.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 2.7.2 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 2.7.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 2.7.0 - *September 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.5 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.4 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.3 - *August 12, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.2 - *August 8, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.1 - *July 31, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.6.0 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 2.4.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### v2.3.0 - *May 17, 2024*

**What's Changed**

* Update with rewrite 8.26.0



#### 2.2.0 - *April 24, 2024*

**What's Changed**
* refactor: Update Gradle wrapper

#### 2.1.6 - *March 12, 2024*

**What's Changed**
* refactor: remove expired suppressions
* refactor: Upgrade Develocity

#### 2.0.10 - *December 8, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 2.0.9 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### v2.0.6 - *October 27, 2023*

* Update with rewrite 8.8.3


#### v2.0.5 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 2.0.4 - *September 12, 2023*

**What's Changed**
* Rewrite v8.5.0



#### v2.0.3 - *August 24, 2023*

**What's Changed**
* Update with rewrite 8.4.0
* refactor: Automatically select recipe examples from the unit test cases of a recipe

#### 2.0.1 - *June 13, 2023*

**What's Changed**

* OpenRewrite 8.1.2

#### 2.0.0 - *June 2, 2023*

**What's Changed**
* OpenRewrite 8.0 upgrade

#### 1.20.0 - *April 20, 2023*

**What's Changed**
* Update with rewrite 7.40.0


#### 1.19.0 - *April 3, 2023*

What's Changed:
* Update with rewrite 7.39.0


#### v1.18.0 - *February 15, 2023*

* Update with rewrite 7.36.0


#### 1.17.0 - *January 20, 2023*

**What's Changed**
* Update with rewrite 7.35.0




#### 1.16.0 - *December 12, 2022*

**What's Changed**
* Update with rewrite 7.34.0




#### 1.15.0 - *November 16, 2022*

**What's Changed**
* Updated with rewrite 7.33.0



#### 1.14.0 - *October 19, 2022*

**What's Changed**
* Updated to use rewrite 7.32.0
* chore: suppress jackson-databind

#### 1.13.0 - *October 10, 2022*

**What's Changed**
* Use rewrite 7.31.0



#### 1.12.0 - *September 22, 2022*

**Enhancements**
 * Update with rewrite 7.30.0
 


#### 1.11.0 - *September 2, 2022*

**Enhancements**

Updated to use rewrite 7.29.0



#### 1.10.1 - *August 6, 2022*

**Enhancements**

* Updated to use rewrite 7.27.1



#### 1.10.0 (please don't use) - *August 5, 2022*

**Please don't use**

This release contained an accidental release of a feature involving a new dependency that we fear would have caused potentially wide-ranging downstream effects.

#### 1.9.0 - *July 7, 2022*

**Enhancements**

* Updated to use rewrite 7.25.0



#### 1.8.0 - *June 1, 2022*

**Enhancements**

* Updated to use rewrite 7.24.0

**Fixes**



#### 1.7.0 - *May 11, 2022*

**Enhancements**
* Updated to use rewrite 7.23.0



#### 1.6.0 - *April 26, 2022*

**Enhancements**

- Updated to use rewrite 7.22.0

#### 1.5.2 - *April 6, 2022*

**Enhancements**

- Updated to use rewrite 7.21.3

#### 1.5.1 - *April 5, 2022*

**Enhancements**

* Updated to use rewrite 7.21.1

#### 1.5.0 - *April 4, 2022*

**Whats Changed**
 * Updated to use rewrite 7.21.0



#### 1.4.0 - *March 23, 2022*

**Whats Changed**
 * Updated to use rewrite 7.20.0



#### 1.3.0 - *February 25, 2022*

**What's Changed**
* Updated with rewrite version 7.19.0

#### 1.2.0 - *February 10, 2022*

**Enhancements**
- Updated with rewrite version 7.18.0



#### 1.1.0 - *January 7, 2022*

**Enhancements**
- Updated with rewrite version 7.17.0



#### 1.0.0 - *October 26, 2021*

Enhancements:
 - Updated with rewrite version 7.16.0

#### 0.4.0 - *October 5, 2021*

Enhancements:
 - Updated with rewrite version 7.15.0

#### 0.3.0 - *September 14, 2021*

Enhancements:
 - Updated with rewrite version 7.14.0

#### 0.2.0 - *September 3, 2021*

Enhancements:

- Updated with rewrite 7.13.0

#### 0.1.0 - *August 21, 2021*

Initial release of a few recipes.

## rewrite-azul

#### 0.6.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.6.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.4.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.3.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 0.3.0 - *June 25, 2025*

**What's Changed**
* Adopt Moderne recipe module CI workflows




#### 0.2.0 - *May 28, 2025*

**What's Changed**
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: OpenRewrite best practices
* refactor: Extract documentation examples from tests
* refactor: Update Gradle wrapper to 8.14
* refactor: OpenRewrite Recipe best practices
* refactor: Find and replace
* refactor: Delete `gradle_enterprise_access_key`
* Switch over to moderneinc/gh-automation

## rewrite-android

#### 0.12.2 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.12.1 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.11.2 - *August 12, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.60.0

#### 0.11.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.11.0 - *July 23, 2025*

**What's Changed**
* common static analysis issues

#### 0.10.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 0.9.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.9.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 0.8.0 - *April 24, 2025*

**What's Changed**
* refactor: Extract documentation examples from tests




#### 0.7.7 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.7.6 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 0.7.5 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.7.4 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.7.3 - *February 20, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.47.1

#### v0.7.2 - *February 7, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.45.0

#### 0.7.1 - *January 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.44.1

#### 0.7.0 - *January 24, 2025*

**What's Changed**
* Create a LICENSE folder




#### 0.6.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 0.5.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne proprietary license

#### 0.4.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.3.4 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.3.2 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.2.0 - *October 23, 2024*

**What's Changed**
* Upgrade Android Gradle Plugin version

#### 0.1.1 - *October 9, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.37.0

#### 0.1.0 - *September 24, 2024*

**What's Changed**
* Change Android SDK version to argument version

## rewrite-ai-search

#### 0.30.3 - *September 24, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.4

#### 0.30.2 - *September 10, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.62.0

#### 0.30.1 - *August 27, 2025*

**What's Changed**

* Updated repository to use OpenRewrite version v8.61.1

#### 0.29.1 - *July 23, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.59.1

#### 0.29.0 - *July 23, 2025*

**What's Changed**
* common static analysis issues

#### 0.28.1 - *July 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.57.0

#### 0.27.1 - *May 28, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.54.0

#### 0.27.0 - *May 7, 2025*

**What's Changed**
* refactor: Update Gradle wrapper to 8.14




#### 0.26.0 - *April 24, 2025*

**What's Changed**
* refactor: New line at the end of `SourceSpecs` text blocks
* refactor: Extract documentation examples from tests




#### 0.25.4 - *April 10, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.2

#### 0.25.3 - *April 9, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.50.0

#### 0.25.2 - *March 27, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.49.0

#### 0.25.1 - *March 11, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.48.0

#### 0.24.1 - *January 24, 2025*

**What's Changed**
* Updated repository to use OpenRewrite version v8.44.1

#### v0.23.0 - *January 21, 2025*

**What's Changed**
* Create a LICENSE folder
* Fix French comments in properties




#### 0.22.0 - *January 10, 2025*

**What's Changed**
* refactor: Use Moderne GitHub Action for backups
* refactor: Gradle wrapper 8.12
* refactor: Delete `gradle_enterprise_access_key`
* refactor: Remove Gradle Enterprise




#### 0.21.0 - *December 18, 2024*

**What's Changed**
* Apply Moderne License




#### 0.20.1 - *November 28, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.41.1

#### 0.19.1 - *November 13, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.40.2

#### 0.19.0 - *November 6, 2024*

**What's Changed**
* refactor: Annotate methods which may return `null` with `@Nullable`

#### 0.18.1 - *October 23, 2024*

**What's Changed**
* Updated repository to use OpenRewrite version v8.38.0

#### 0.18.0 - *October 9, 2024*

**What's Changed**
* Feat/switch gen model to qwencoder




#### 0.17.0 - *September 24, 2024*

**What's Changed**
* Opt latency on embeddings
* refactor: Update Gradle wrapper




#### 0.16.3 - *September 11, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.16.2 - *August 28, 2024*

**What's Changed**
* refactor: Update Gradle wrapper
* Migrate to JSpecify from OpenRewrite JSR-305 meta-annotations

#### 0.16.1 - *August 12, 2024*

**What's Changed**
* Add timings generative model
* change histogram for generative model performance to 1 sec buckets
* change int to long for overflow issue for bucket size for generative …
* add query to suggested method patterns table




#### 0.16.0 - *August 8, 2024*

**What's Changed**
* Add timings generative model
* change histogram for generative model performance to 1 sec buckets
* change int to long for overflow issue for bucket size for generative …
* add query to suggested method patterns table




#### 0.15.0 - *July 31, 2024*

**What's Changed**
* add row for each search result no matter if positive or negative
* fix path for dictionary
* change path from usr/bin/python3 to just python3
* add datatable for top-k methods
* Optimize speed search
* Optimize speed search
* Feat add next step search
* Upgrade llama cpp




#### 0.14.3 - *July 15, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.13.0 - *June 7, 2024*

**What's Changed**
* refactor: Update Gradle wrapper




#### 0.12.0 - *May 22, 2024*

**What's Changed**
* Fix methodmatcher
* Adds threshold support and pre-process Method Signature for MethodMat…
* don't remove &lt;constructor&gt; for MethodMatcher




#### 0.11.0 - *May 22, 2024*

**What's Changed**
* add datatable to debug accuracy and only check method invocations in …
* Final touches ai code search
* Cleanup ai recipes




#### 0.10.0 - *May 8, 2024*

**What's Changed**
* Recommendations as one recipe and tests
* check if method content match + remove MODELSDIR




#### 0.9.0 - *April 24, 2024*

**What's Changed**
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

#### 0.8.0 - *March 19, 2024*

**What's Changed**
* add llamacpp as second step




#### 0.7.0 - *March 12, 2024*

**What's Changed**
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




#### 0.6.0 - *February 20, 2024*

**What's Changed**
* Feat/spellcheck comments french
* fixed multiline if
* Feat/fix miscoded french
* change display name and descr
* change dict
* add source to datatable




#### 0.5.0 - *February 6, 2024*

**What's Changed**
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




#### 0.4.0 - *January 23, 2024*

**What's Changed**
* Feature recipe for agent recommender
* Feature recipe for agent recommender




#### 0.2.7 - *December 21, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 0.2.6 - *December 20, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 0.2.5 - *December 14, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 0.2.4 - *December 8, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### 0.2.3 - *December 4, 2023*

**What's Changed**
* refactor: Update Gradle wrapper to 8.5




#### v0.2.1 - *November 24, 2023*

**What's Changed**
* OpenRewrite v8.9.8



#### v0.2.0 - *November 10, 2023*

**What's Changed**

* Update with rewrite 8.9.0



#### v0.1.3 - *October 27, 2023*

**What's Changed**
* Gradle wrapper 8.4

#### v0.1.2 - *October 2, 2023*

* Update with rewrite 8.7.1


#### 0.1.1 - *September 12, 2023*

**What's Changed**
* Debugging adding finetuning

