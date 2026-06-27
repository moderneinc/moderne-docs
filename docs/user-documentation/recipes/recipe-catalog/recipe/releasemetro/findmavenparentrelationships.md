---
title: "Find Maven parent relationships"
sidebar_label: "Find Maven parent relationships"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Maven parent relationships"}
  description={"Find Maven parent POM relationships to understand project hierarchies in multi-module builds."}
  fqName={"io.moderne.recipe.releasemetro.FindMavenParentRelationships"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.releasemetro.FindMavenParentRelationships"}
  artifact={"io.moderne.recipe:rewrite-release-metromap"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.releasemetro.FindMavenParentRelationships"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findmavenparentrelationships.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Maven parent relationships</RecipeHeader.Title>

<RecipeHeader.Description>Find Maven parent POM relationships to understand project hierarchies in multi-module builds.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n    <artifactId>my-app</artifactId>\n    <version>1.0.0</version>\n</project>\n","after":"<!--~~(org.springframework.boot:my-app -> org.springframework.boot:spring-boot-starter-parent (MAVEN_PARENT))~~>--><?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n    <artifactId>my-app</artifactId>\n    <version>1.0.0</version>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,1 @@\n-<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n+<!--~~(org.springframework.boot:my-app -> org.springframework.boot:spring-boot-starter-parent (MAVEN_PARENT))~~>--><?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.recipe.releasemetro.FindMavenParentRelationships","displayName":"Find Maven parent relationships","groupId":"io.moderne.recipe","artifactId":"rewrite-release-metromap","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_RELEASE_METROMAP","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.releasemetro.table.ParentRelationships","displayName":"Maven parent and Gradle project hierarchies","description":"Relationships between Maven child modules and their parent POMs, or Gradle subprojects and their root project.","columns":[{"name":"childGroupId","description":"Group ID of the child project"},{"name":"childArtifactId","description":"Artifact ID of the child project"},{"name":"parentGroupId","description":"Group ID of the parent project"},{"name":"parentArtifactId","description":"Artifact ID of the parent project"},{"name":"parentVersion","description":"Version of the parent project"},{"name":"hierarchyType","description":"Type of hierarchy relationship (MAVEN_PARENT or GRADLE_PARENT)"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

