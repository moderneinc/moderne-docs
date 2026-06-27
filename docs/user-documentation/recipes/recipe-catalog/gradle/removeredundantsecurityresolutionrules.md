---
title: "Remove redundant security resolution rules"
sidebar_label: "Remove redundant security resolution rules"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/removeredundantsecurityresolutionrules" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant security resolution rules"}
  description={"Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified."}
  fqName={"org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/RemoveRedundantSecurityResolutionRules.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["security"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/removeredundantsecurityresolutionrules.md"}
>

<RecipeHeader.Title>Remove redundant security resolution rules</RecipeHeader.Title>

<RecipeHeader.Description>Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"securityPattern","required":false,"description":"A regular expression pattern to identify security-related resolution rules by matching against the `because` clause. Rules matching this pattern will be considered for removal. The pattern is searched within the clause, so a `because` containing multiple identifiers (e.g., `CVE-2024-1234, GHSA-abcd-1234-efgh`) will match if any identifier matches. Default pattern matches CVE identifiers (e.g., `CVE-2024-1234`) and GitHub Security Advisory identifiers (e.g., `GHSA-xxxx-xxxx-xxxx`).","example":"(CVE-\\d|GHSA-[a-z0-9])"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"securityPattern","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n    id 'java'\n}\nrepositories { mavenCentral() }\nconfigurations.all {\n    resolutionStrategy.eachDependency { details ->\n        if (details.requested.group == 'com.fasterxml.jackson.core' && details.requested.name == 'jackson-databind') {\n            details.useVersion('2.12.5')\n            details.because('CVE-2024-BAD')\n        }\n    }\n}\ndependencies {\n    implementation platform('org.springframework.boot:spring-boot-dependencies:3.3.3')\n    implementation 'com.fasterxml.jackson.core:jackson-databind'\n}\n","after":"plugins {\n    id 'java'\n}\nrepositories { mavenCentral() }\ndependencies {\n    implementation platform('org.springframework.boot:spring-boot-dependencies:3.3.3')\n    implementation 'com.fasterxml.jackson.core:jackson-databind'\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -5,8 +5,0 @@\n}\nrepositories { mavenCentral() }\n-configurations.all {\n-   resolutionStrategy.eachDependency { details ->\n-       if (details.requested.group == 'com.fasterxml.jackson.core' && details.requested.name == 'jackson-databind') {\n-           details.useVersion('2.12.5')\n-           details.because('CVE-2024-BAD')\n-       }\n-   }\n-}\ndependencies {\n","newFile":false}]},{"parameters":[{"parameter":"securityPattern","value":"null"}],"variants":[{"language":"buildGradleKts","before":"plugins {\n    id(\"java\")\n}\nrepositories { mavenCentral() }\nconfigurations.all {\n    resolutionStrategy.eachDependency {\n        if (requested.group == \"com.fasterxml.jackson.core\" && requested.name == \"jackson-databind\") {\n            useVersion(\"2.12.5\")\n            because(\"CVE-2024-BAD\")\n        }\n    }\n}\ndependencies {\n    implementation(platform(\"org.springframework.boot:spring-boot-dependencies:3.3.3\"))\n    implementation(\"com.fasterxml.jackson.core:jackson-databind\")\n}\n","after":"plugins {\n    id(\"java\")\n}\nrepositories { mavenCentral() }\ndependencies {\n    implementation(platform(\"org.springframework.boot:spring-boot-dependencies:3.3.3\"))\n    implementation(\"com.fasterxml.jackson.core:jackson-databind\")\n}\n","diff":"@@ -5,8 +5,0 @@\n}\nrepositories { mavenCentral() }\n-configurations.all {\n-   resolutionStrategy.eachDependency {\n-       if (requested.group == \"com.fasterxml.jackson.core\" && requested.name == \"jackson-databind\") {\n-           useVersion(\"2.12.5\")\n-           because(\"CVE-2024-BAD\")\n-       }\n-   }\n-}\ndependencies {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules","displayName":"Remove redundant security resolution rules","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

