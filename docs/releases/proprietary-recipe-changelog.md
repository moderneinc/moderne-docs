---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases and only contains information from the past year.
:::

## July 8, 2026

#### rewrite-java-security - 3.34.3

* Fix DependnecyVulnerabilityCheck not considering maven settings set via execution context
* Report disclosed-but-unpatched CVEs in the vulnerability report
* Add DependencyVulnerabilityCheck for Go

## July 7, 2026

#### rewrite-cobol - 2.20.1

* Read and tokenize JCL .prm members once by path, not per source

## July 1, 2026

#### rewrite-ai - 0.4.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-ai-search - 0.35.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-android - 0.18.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-angular - 1.5.0

* actions/upload-artifact@v7

#### rewrite-circleci - 3.12.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cobol - 2.20.0

* Stop exposing the ANTLR4 codegen tool as a runtime dependency
* Expand external SYSIN/SYSTSIN .prm members into the JCL LST

#### rewrite-codemods - 0.27.0

* chore: update @ui5/linter from 1.20.7 to 1.23.0

#### rewrite-codemods-ng - 0.21.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-compiled-analysis - 0.14.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-concourse - 3.11.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.8

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.7

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.6

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.5

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-cryptography - 0.14.4

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-devcenter - 1.27.2

* Add upgradeRecipe call to action to language DevCenters

#### rewrite-devcenter - 1.27.1

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-devcenter - 1.27.0

* Add upgradeRecipe call to action to language DevCenters

#### rewrite-dotnet - 0.17.0

* Add recipe to migrate .NET install URLs from retiring Azure CDN domains

#### rewrite-dropwizard - 0.5.3

* Updated repository to use OpenRewrite version v8.86.0

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

#### rewrite-java-application-server - 0.7.7

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-application-server - 0.7.6

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-application-server - 0.7.5

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-application-server - 0.7.4

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-java-security - 3.34.2

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

#### rewrite-prethink - 0.8.1

* Emit sourcePath in the EndpointSecurity data table
* Remove the AI-based Prethink recipe and the langchain4j dependency
* Expect two cycles for the ExportContext + mermaid pipeline
* Support C#/.NET in the quality and test-gap recipes
* Handle C# catch clauses without an exception variable

#### rewrite-prethink - 0.8.0

* Emit sourcePath in the EndpointSecurity data table
* Remove the AI-based Prethink recipe and the langchain4j dependency
* Expect two cycles for the ExportContext + mermaid pipeline
* Support C#/.NET in the quality and test-gap recipes
* Handle C# catch clauses without an exception variable

#### rewrite-program-analysis - 0.13.4

* perf(dataflow): lazy PathCondition variable index + memoized isFeasible (apex edit 649.8s→81.4s)
* perf(dataflow): faster path-sensitive null analysis (lazy index, fixpoint hashing, structural tree equality)

#### rewrite-program-analysis - 0.13.3

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-react - 0.3.3

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-reactive-streams - 0.20.2

* Updated repository to use OpenRewrite version v8.86.0

#### rewrite-release-metromap - 0.4.1

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

#### rewrite-vulncheck - 0.7.3

* Updated repository to use OpenRewrite version v8.86.0

## June 30, 2026

#### rewrite-program-analysis - 0.13.2

* perf(dataflow): lazy PathCondition variable index + memoized isFeasible (apex edit 649.8s→81.4s)
* perf(dataflow): faster path-sensitive null analysis (lazy index, fixpoint hashing, structural tree equality)

## June 25, 2026

#### rewrite-program-analysis - 0.13.1

* perf(dataflow): converge path-sensitive loops instead of churning to the iteration cap

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

#### rewrite-ai - 0.4.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-ai-search - 0.35.0

* Add missing static Mockito imports in SpellCheckCommentsInFrenchTest

#### rewrite-android - 0.18.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-angular - 1.4.0

* Print out logs in CI in case of failure
* OpenRewrite 8.84.1
* MSG_MINIMAL in Slack notifications
* Bump @openrewrite/rewrite from 8.84.1 to 8.84.9 in /recipes-angular[bot]
* Migrate npm publishing to Trusted Publishing (OIDC)

#### rewrite-circleci - 3.12.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-cobol - 2.19.0

* Recognize .dcl (DCLGEN) files as copybooks for EXEC SQL INCLUDE
* Increase default Cobol parser timeout to 10 minutes

#### rewrite-codemods - 0.26.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-codemods-ng - 0.21.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-compiled-analysis - 0.14.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-concourse - 3.11.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-cryptography - 0.14.3

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

#### rewrite-migrate-kotlin - 0.6.0

* Modernize the kotlinOptions Gradle DSL block to compilerOptions

#### rewrite-migrate-python - 0.9.0

* Add Pydantic migration recipes; make type-aware recipes precise via type_utils
* Remove unused typing import when migrating Optional/Union to PEP 604
* Expand Pydantic migration recipes to cover 2.10–2.14

#### rewrite-nodejs - 0.46.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-prethink - 0.7.3

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-prethink - 0.7.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-program-analysis - 0.12.9

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-react - 0.3.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-reactive-streams - 0.20.1

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-release-metromap - 0.4.0

* Fix recipe catalog category metadata for Release Metro Map

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

#### rewrite-vulncheck - 0.7.2

* Updated repository to use OpenRewrite version v8.85.0

#### rewrite-vulncheck - 0.7.1

* Updated repository to use OpenRewrite version v8.85.0

## June 15, 2026

#### rewrite-prethink - 0.7.1

* Detect CORS when the Express app is typed as express.Application
* Install matching openrewrite pip version for Python tests
* FindExpressEndpoints: match both express.* and express-serve-static-core.* receiver types
* Detect Python BDD step definitions (behave, pytest-bdd, lettuce)
* Upgrade to langchain4j:1.16.3

## June 5, 2026

#### rewrite-nodejs - 0.46.1

* OpenRewrite 8.84.1

## June 3, 2026

#### rewrite-ai - 0.4.0

* Regenerate recipes.csv

#### rewrite-ai-search - 0.34.0

* Regenerate recipes.csv

#### rewrite-android - 0.18.0

* Regenerate recipes.csv

#### rewrite-angular - 1.3.1

* Save all log files from CLI

#### rewrite-angular - 1.3.0

* Bump ts-jest from 29.4.9 to 29.4.11 in /recipes-angular[bot]
* Bump tmp from 0.2.5 to 0.2.7 in /recipes-angular[bot]
* Upgrading to OpenRewrite 8.84.0

#### rewrite-circleci - 3.12.0

* Regenerate recipes.csv

#### rewrite-cobol - 2.18.0

* Regenerate recipes.csv

#### rewrite-codemods - 0.26.0

* Regenerate recipes.csv

#### rewrite-codemods-ng - 0.21.0

* Regenerate recipes.csv

#### rewrite-compiled-analysis - 0.14.0

* Regenerate recipes.csv

#### rewrite-concourse - 3.11.0

* Regenerate recipes.csv

#### rewrite-cryptography - 0.14.1

* Update rewriteVersion handling in build.gradle.kts

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

#### rewrite-java-application-server - 0.7.2

* Updated repository to use OpenRewrite version v8.84.0

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

#### rewrite-release-metromap - 0.3.0

* Regenerate recipes.csv

#### rewrite-spring - 0.34.0

* Consolidate calls into Moderne Spring Framework 7 and Hibernate 7.2 wrappers
* Regenerate recipes.csv
* Rewrite Kotlin property assignments broken by Spring Boot 4 `@NullMarked`
* Add `UseRfc6265CookieProcessor` recipe for Tomcat cookie processor migration
* Migrate `setResource(Resource)` to `setResource(WritableResource)` for Spring Batch 5
* Add MigrateChannelInterceptorAdapter for Spring Framework 5.0
* Migrate Spring Cloud AWS (awspring) to 4.0 during Spring Boot 4 upgrade
* Migrate AbstractClientHttpResponse to ClientHttpResponse (TIAA #2462 item 3)
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

#### rewrite-vulncheck - 0.7.0

* Regenerate recipes.csv

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

#### rewrite-ai - 0.3.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-ai-search - 0.33.4

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-android - 0.17.1

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-angular - 1.2.0

* Use type-safe getDataTableRows overload in tests
* actions/setup-java v5

#### rewrite-circleci - 3.11.0

* Use rewriteRecipe.rewriteVersion convention

#### rewrite-cobol - 2.17.5

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-codemods - 0.25.5

* Updated repository to use OpenRewrite version v8.83.0

#### rewrite-codemods-ng - v0.20.6

* Use

#### rewrite-codemods-ng - 0.20.5

* Updated repository to use OpenRewrite version v8.83.0

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

#### rewrite-dropwizard - 0.3.1

* Replace DropwizardAppExtension call sites with Spring Boot injected fields
* Route Maven through Moderne Artifactory cache to avoid HTTP 429
* Fix RemoveSuperTypeByTypeTest expected output for @Override removal
* Revert inline Maven mirror (now in gh-automation#95)

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

#### rewrite-release-metromap - v0.2.2

* Do not depend on rewrite-recipe-bom

#### rewrite-release-metromap - 0.2.1

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

#### rewrite-vulncheck - 0.6.10

* Updated repository to use OpenRewrite version v8.83.0

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

#### rewrite-ai-search - v0.33.3

- OpenRewrite v8.81.6

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

#### rewrite-codemods-ng - v0.20.4

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

#### rewrite-dropwizard - v0.2.4

* Add @SpringBootTest for DropwizardAppExtension; fix RemoveVariablesByPackage scope check

#### rewrite-dropwizard - v0.2.3

* OpenRewrite v8.81.6
* Add @SpringBootTest for DropwizardAppExtension; fix RemoveVariablesByPackage scope check

#### rewrite-elastic - v0.6.4

* OpenRewrite v8.81.6

#### rewrite-hibernate - v0.22.2

* Extend `MigrateJdbcTypeToJdbcTypeCode` to handle legacy `@Type(X.class)`

#### rewrite-jasperreports - v0.5.3

* OpenRewrite v8.81.6

#### rewrite-java-security - v3.29.5

* Update SsrfGuardInsertion reference to FixCwe918
* Move "Last updated" timestamp out of recipe instance name
* Adopt new rewrite-python lock regeneration API
* Use default Gradle Tooling API version in tests

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
* Bump uuid and jest-junit in /recipes-nodejs[bot]
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

#### rewrite-release-metromap - v0.2.0

* OpenRewrite v8.81.6
* Emit gradle project -&gt; root project mappings in lieu of "parent" concept
* Filter release metro plan to declared dependencies via FindDependency

#### rewrite-release-metromap - v0.1.2

* OpenRewrite v8.81.6
* Emit gradle project -&gt; root project mappings in lieu of "parent" concept
* Filter release metro plan to declared dependencies via FindDependency

#### rewrite-spring - v0.32.3

* OpenRewrite recipe best practices
* Strip Kotlin nullability from Spring HTTP entity type arguments

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

#### rewrite-vulncheck - v0.6.9

* OpenRewrite v8.81.6

## May 6, 2026

#### rewrite-cobol - v2.17.4

- OpenRewrite v8.81.6

#### rewrite-codemods - v0.25.4

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

#### rewrite-ai-search - 0.33.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-android - 0.16.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-angular - 1.1.4

* Do not add `standalone:false` when there are imports
* Bump @openrewrite/rewrite from 8.78.3 to 8.80.1 in /recipes-angular[bot]

#### rewrite-angular - 1.1.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-circleci - 3.10.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-cobol - 2.17.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-codemods - 0.25.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-codemods-ng - 0.20.3

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

#### rewrite-migrate-kotlin - 0.3.0

* Pin bouncycastle 1.84 in kotlinBouncyCastleConfiguration

#### rewrite-migrate-python - 0.7.0

* Transform sys.last_type and sys.last_traceback

#### rewrite-nodejs - 0.44.0

* Re-generate recipes.csv
* Bump yaml from 2.8.2 to 2.8.3 in /recipes-nodejs[bot]
* Bump handlebars from 4.7.8 to 4.7.9 in /recipes-nodejs[bot]
* Bump picomatch from 2.3.1 to 2.3.2 in /recipes-nodejs[bot]
* Adding project icon

#### rewrite-prethink - 0.5.8

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-program-analysis - 0.12.3

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-react - 0.2.7

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-reactive-streams - 0.19.2

* Updated repository to use OpenRewrite version v8.81.0

#### rewrite-release-metromap - 0.1.1

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

#### rewrite-vulncheck - 0.6.8

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

#### rewrite-ai-search - 0.33.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-android - 0.16.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-angular - 1.1.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-circleci - 3.10.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-cobol - 2.17.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-codemods - 0.25.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-codemods-ng - 0.20.2

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

#### rewrite-elastic - 0.6.2

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

#### rewrite-kafka - 0.5.2

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-kafka - 0.5.1

* Updated repository to use OpenRewrite version v8.80.0

#### rewrite-kubernetes - 3.16.1

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

#### rewrite-vulncheck - 0.6.6

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

## March 16, 2026

#### rewrite-spring - 0.28.1

* Fix `ClassCastException` in `MigrateSpringRetryToSpringFramework7`

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

#### rewrite-circleci - 3.9.3

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-codemods - 0.23.1

* Updated repository to use OpenRewrite version v8.69.0

#### rewrite-codemods-ng - 0.16.1

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

#### rewrite-ai-search - 0.32.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-android - 0.15.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-angular - 0.1.1

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-circleci - 3.9.2

* Updated repository to use OpenRewrite version v8.68.1

#### rewrite-codemods - 0.23.0

* chore: update @ui5/linter from 1.19.0 to 1.20.2

#### rewrite-codemods-ng - 0.16.0

* chore(deps): bump glob from 10.3.10 to 10.5.0 in /src/main/resources/codemods[bot]

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

#### rewrite-circleci - 3.8.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-codemods - 0.20.1

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-codemods-ng - 0.14.4

* Updated repository to use OpenRewrite version v8.64.0

#### rewrite-compiled-analysis - 0.9.1

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

#### rewrite-circleci - 3.8.0

* Update recipe documentation examples

#### rewrite-codemods - 0.20.0

* feat: add ReactI18Next recipe for jscodeshift-react-i18next integration

#### rewrite-codemods-ng - 0.14.3

* Updated repository to use OpenRewrite version v8.63.0

#### rewrite-compiled-analysis - 0.9.0

* Add new documentation examples
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

#### rewrite-circleci - 3.7.5

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-codemods - 0.19.0

* chore: update @ui5/linter from 1.12.0 to 1.19.0

#### rewrite-codemods-ng - 0.14.2

* Updated repository to use OpenRewrite version v8.62.4

#### rewrite-compiled-analysis - 0.8.3

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

#### rewrite-circleci - 3.7.4

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-codemods - 0.18.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-codemods-ng - 0.14.1

* Updated repository to use OpenRewrite version v8.62.0

#### rewrite-compiled-analysis - 0.8.2

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

#### rewrite-circleci - 3.6.1

* Updated repository to use OpenRewrite version v8.57.0

#### rewrite-codemods - 0.15.0

* common static analysis issues

#### rewrite-codemods-ng - 0.11.0

* Make the local `npm install` be aware of the .npmrc file

#### rewrite-compiled-analysis - v0.7.1

* Update for maven central

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

