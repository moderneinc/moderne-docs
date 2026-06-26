---
title: "Remove unused dependencies"
sidebar_label: "Remove unused dependencies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unused dependencies"}
  description={"Scans through source code collecting references to types and methods, removing any dependencies that are not used from Maven or Gradle build files. This is best effort and not guaranteed to work well in all cases; false positives are still possible.\n\nThis recipe takes reflective access into account: - When reflective access to a class is made unambiguously via a string literal, such as: `Class.forName(\"java.util.List\")` that is counted correctly. - When reflective access to a class is made ambiguously via anything other than a string literal no dependencies will be removed.\n\nThis recipe takes transitive dependencies into account: - When a direct dependency is not used but a transitive dependency it brings in _is_ in use the direct dependency is not removed."}
  fqName={"org.openrewrite.java.dependencies.RemoveUnusedDependencies"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove unused dependencies"}
  description={"Scans through source code collecting references to types and methods, removing any dependencies that are not used from Maven or Gradle build files. This is best effort and not guaranteed to work well in all cases; false positives are still possible.\n\nThis recipe takes reflective access into account: - When reflective access to a class is made unambiguously via a string literal, such as: `Class.forName(\"java.util.List\")` that is counted correctly. - When reflective access to a class is made ambiguously via anything other than a string literal no dependencies will be removed.\n\nThis recipe takes transitive dependencies into account: - When a direct dependency is not used but a transitive dependency it brings in _is_ in use the direct dependency is not removed."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.dependencies.RemoveUnusedDependencies"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveUnusedDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/removeunuseddependencies.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"List","name":"ignoredDependencies","required":false,"description":"A list of `groupId:artifactId` glob patterns for dependencies that should never be removed, even if they appear unused. For example, `com.google.*:*` would ignore all Google dependencies, and `*:lombok` would ignore Lombok regardless of group ID.","example":"org.projectlombok:lombok,com.google.*:*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"ignoredDependencies","value":"List.of()"}],"unchanged":{"language":"java","code":"import java.util.List;\nimport java.util.ArrayList;\npublic class A {\n    List<String> a = new ArrayList<>();\n}\n"},"variants":[{"language":"xml","before":"<project>\n    <groupId>com.mycompany</groupId>\n    <artifactId>app</artifactId>\n    <version>1</version>\n    <dependencies>\n        <dependency>\n            <groupId>com.google.guava</groupId>\n            <artifactId>guava</artifactId>\n            <version>29.0-jre</version>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <groupId>com.mycompany</groupId>\n    <artifactId>app</artifactId>\n    <version>1</version>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,7 +5,0 @@\n    <artifactId>app</artifactId>\n    <version>1</version>\n-   <dependencies>\n-       <dependency>\n-           <groupId>com.google.guava</groupId>\n-           <artifactId>guava</artifactId>\n-           <version>29.0-jre</version>\n-       </dependency>\n-   </dependencies>\n</project>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.RemoveUnusedDependencies","displayName":"Remove unused dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.DependencyUsageEvidence","displayName":"Dependency usage evidence","description":"Evidence showing that a dependency is in use in the project.","columns":[{"name":"Group","description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Artifact","description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Version","description":"The resolved version."},{"name":"Evidence","description":"The evidence showing this dependency is in use (e.g., a type name, property value, or transitive dependency)."},{"name":"Evidence type","description":"The type of evidence: 'Type usage', 'Property/YAML reference', or 'Transitive dependency'."},{"name":"Source path","description":"The path to the source file where the evidence was found."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

