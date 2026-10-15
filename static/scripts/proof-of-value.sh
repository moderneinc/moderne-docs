#!/usr/bin/env bash
#
# Runs every recipe in the Moderne proof of value guide and exports the data tables it reviews:
# https://docs.moderne.io/user-documentation/moderne-platform/getting-started/proof-of-value
#
# Usage: bash proof-of-value.sh [directory]
#
# Point it at the directory where you cloned your repositories and built their LSTs; it defaults
# to the current directory. A recipe that fails is reported at the end without stopping the rest.
#
# Generated from docs/user-documentation/moderne-platform/getting-started/proof-of-value.md
# by `yarn generate:pov-script`. Edit the guide instead of this file.

cd "${1:-.}" || exit 1

failed=()

run_recipe() {
  echo
  echo "==> $1"
  # Not `"$2" || ...`: bash ignores set -e inside a function called from a condition.
  "$2"
  if [ $? -ne 0 ]; then
    failed+=("$1")
  fi
}

echo "==> Installing recipe modules"
mod config recipes jar install \
  org.openrewrite.recipe:rewrite-all:LATEST \
  org.openrewrite.recipe:rewrite-static-analysis:LATEST \
  org.openrewrite.recipe:rewrite-java-security:LATEST \
  org.openrewrite.recipe:rewrite-java-dependencies:LATEST \
  org.openrewrite.recipe:rewrite-sql:LATEST \
  org.openrewrite.recipe:rewrite-spring:LATEST \
  org.openrewrite.recipe:rewrite-logging-frameworks:LATEST \
  org.openrewrite.recipe:rewrite-testing-frameworks:LATEST \
  org.openrewrite.recipe:rewrite-migrate-java:LATEST \
  io.moderne.recipe:rewrite-cryptography:LATEST \
  io.moderne.recipe:rewrite-spring:LATEST \
  io.moderne.recipe:rewrite-prethink:LATEST \
  io.moderne.recipe:rewrite-devcenter:LATEST || exit 1

# Code quality recipes

common_static_analysis_issues() (
  set -e
  mod run . --recipe org.openrewrite.staticanalysis.CommonStaticAnalysis
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Common static analysis issues" common_static_analysis_issues

# Code search and impact analysis

language_composition_report() (
  set -e
  mod run . --recipe org.openrewrite.LanguageComposition

  mod study . --last-recipe-run --data-table LanguageCompositionPerRepository
)
run_recipe "Language composition report" language_composition_report

find_types() (
  set -e
  # Example: Find all uses of Apache Commons StringUtils across your codebase
  mod run . --recipe org.openrewrite.java.search.FindTypes \
      -P "fullyQualifiedTypeName=org.apache.commons.lang3.StringUtils" \
      -P "checkAssignability=true"

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Find types" find_types

find_methods() (
  set -e
  # Example: Find all uses of methods in org.apache.commons
  mod run . --recipe org.openrewrite.java.search.FindMethods \
      -P "methodPattern=org.apache.commons..*#*(..)" \
      -P "matchOverrides=true"

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Find methods" find_methods

find_sensitive_api_endpoints() (
  set -e
  # Find endpoints handling personal data fields like names and emails
  mod run . --recipe org.openrewrite.java.security.search.FindSensitiveApiEndpoints \
      -P "fieldNames=firstName,lastName,email,emailAddress" \
      -P "transitive=true"

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Find sensitive API endpoints" find_sensitive_api_endpoints

find_sql_statements() (
  set -e
  # Find all SQL statements, particularly useful for identifying dynamic SQL construction
  mod run . --recipe org.openrewrite.sql.FindSql

  mod study . --last-recipe-run --data-table DatabaseColumnsUsed
)
run_recipe "Find SQL statements" find_sql_statements

find_call_graph() (
  set -e
  # Generates a data table where each row represents a method call.
  mod run . --recipe org.openrewrite.FindCallGraph

  mod study . --last-recipe-run --data-table CallGraph
)
run_recipe "Find call graph" find_call_graph

find_spring_api_endpoints() (
  set -e
  # Finds all HTTP API endpoints exposed by Spring applications.
  mod run . --recipe org.openrewrite.java.spring.search.FindApiEndpoints

  mod study . --last-recipe-run --data-table ApiEndpoints
)
run_recipe "Find Spring API endpoints" find_spring_api_endpoints

software_bill_of_materials() (
  set -e
  # Produces a SBOM for the project
  mod run . --recipe org.openrewrite.java.dependencies.SoftwareBillOfMaterials

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Software bill of materials" software_bill_of_materials

post_quantum_cryptography() (
  set -e
  # Searches for code that may be impacted by post quantum cryptography.
  mod run . --recipe io.moderne.cryptography.PostQuantumCryptography

  mod study . --last-recipe-run --data-table SecurityIssues
  mod study . --last-recipe-run --data-table TaintFlowTable
)
run_recipe "Post quantum cryptography" post_quantum_cryptography

dependency_insight_for_gradle_and_maven() (
  set -e
  # Example: Find all Jackson library versions
  mod run . --recipe org.openrewrite.java.dependencies.DependencyInsight \
    -P "groupIdPattern=*" \
    -P "artifactIdPattern=jackson*" \
    -P "scope=runtime"

  mod study . --last-recipe-run --data-table DependenciesInUse
)
run_recipe "Dependency insight for Gradle and Maven" dependency_insight_for_gradle_and_maven

# Logging improvements

parameterize_slf4j_logging_statements() (
  set -e
  mod run . --recipe org.openrewrite.java.logging.slf4j.ParameterizedLogging
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Parameterize SLF4J logging statements" parameterize_slf4j_logging_statements

complete_exception_logging() (
  set -e
  mod run . --recipe org.openrewrite.java.logging.slf4j.CompleteExceptionLogging
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Complete exception logging" complete_exception_logging

slf4j_best_practices() (
  set -e
  mod run . --recipe org.openrewrite.java.logging.slf4j.Slf4jBestPractices
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "SLF4J best practices" slf4j_best_practices

# DevCenter

devcenter_starter() (
  set -e
  # Run the DevCenterStarter recipe to produce the required data tables
  mod run . --recipe io.moderne.devcenter.DevCenterStarter

  # Generate the HTML DevCenter dashboard
  mod devcenter . --last-recipe-run
)
run_recipe "DevCenter starter" devcenter_starter

# Dependency management

update_gradle_wrapper() (
  set -e
  mod run . --recipe org.openrewrite.gradle.UpdateGradleWrapper
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Update Gradle wrapper" update_gradle_wrapper

update_gradle_plugins() (
  set -e
  # Update specific plugin - adjust parameters for your plugins
  mod run . --recipe org.openrewrite.gradle.plugins.UpgradePluginVersion \
    --recipe-option "pluginIdPattern=org.springframework.boot" \
    --recipe-option "newVersion=3.4.x"

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Update Gradle plugins" update_gradle_plugins

update_maven_wrapper() (
  set -e
  mod run . --recipe org.openrewrite.maven.UpdateMavenWrapper
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Update Maven wrapper" update_maven_wrapper

update_maven_plugins() (
  set -e
  # Update specific plugin - adjust parameters for your plugins
  mod run . --recipe org.openrewrite.maven.UpgradePluginVersion \
    --recipe-option "groupId=org.springframework.boot" \
    --recipe-option "artifactId=spring-boot-maven-plugin" \
    --recipe-option "newVersion=3.4.x"

  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Update Maven plugins" update_maven_plugins

# Security

find_secrets() (
  set -e
  mod run . --recipe org.openrewrite.java.security.secrets.FindSecrets
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Find secrets" find_secrets

use_secure_random() (
  set -e
  mod run . --recipe org.openrewrite.java.security.SecureRandom
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Use secure random" use_secure_random

java_security_best_practices() (
  set -e
  mod run . --recipe org.openrewrite.java.security.JavaSecurityBestPractices
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Java security best practices" java_security_best_practices

owasp_top_ten() (
  set -e
  mod run . --recipe org.openrewrite.java.security.OwaspTopTen
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "OWASP Top Ten" owasp_top_ten

find_and_fix_vulnerable_dependencies() (
  set -e
  mod run . --recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck \
    -P "scope=runtime" \
    -P "overrideTransitive=True" \
    -P "maximumUpgradeDelta=patch"

  mod study . --last-recipe-run --data-table VulnerabilityReport
)
run_recipe "Find and fix vulnerable dependencies" find_and_fix_vulnerable_dependencies

# Test modernization

junit_6_best_practices() (
  set -e
  mod run . --recipe org.openrewrite.java.testing.junit.JUnit6BestPractices
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "JUnit 6 best practices" junit_6_best_practices

assertj_best_practices() (
  set -e
  mod run . --recipe org.openrewrite.java.testing.assertj.Assertj
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "AssertJ best practices" assertj_best_practices

# Major migrations

migrate_to_java_25() (
  set -e
  mod run . --recipe org.openrewrite.java.migrate.UpgradeToJava25
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Migrate to Java 25" migrate_to_java_25

java_best_practices() (
  set -e
  mod run . --recipe org.openrewrite.java.migrate.JavaBestPractices
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Java best practices" java_best_practices

spring_boot_4_best_practices() (
  set -e
  mod run . --recipe io.moderne.java.spring.boot4.SpringBoot4BestPractices
  mod study . --last-recipe-run --data-table SourcesFileResults
)
run_recipe "Spring Boot 4 best practices" spring_boot_4_best_practices

# AI agent context

update_prethink_context() (
  set -e
  mod run . --recipe io.moderne.prethink.UpdatePrethinkContextStarter
)
run_recipe "Update Prethink context" update_prethink_context

echo
if [ ${#failed[@]} -eq 0 ]; then
  echo "All recipes completed."
else
  echo "These recipes failed:"
  printf '  %s\n' "${failed[@]}"
  exit 1
fi
