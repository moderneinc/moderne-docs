---
title: "Add or correct Jenkins plugins BOM"
sidebar_label: "Add or correct Jenkins plugins BOM"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/jenkins/addpluginsbom" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add or correct Jenkins plugins BOM"}
  description={"Adds [Jenkins plugins BOM](https://www.jenkins.io/doc/developer/plugin-development/dependency-management/#jenkins-plugin-bom) at the latest release if the project depends on any managed versions or an outdated BOM is present. BOMs are expected to be synchronized to Jenkins LTS versions, so this will also remove any mismatched BOMs (Such as using Jenkins 2.387.3, but importing bom-2.319.x). If the expected BOM is already added, the version will not be upgraded."}
  fqName={"org.openrewrite.jenkins.AddPluginsBom"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/java/org/openrewrite/jenkins/AddPluginsBom.java"}
/>

<RecipeHeader
  displayName={"Add or correct Jenkins plugins BOM"}
  description={"Adds [Jenkins plugins BOM](https://www.jenkins.io/doc/developer/plugin-development/dependency-management/#jenkins-plugin-bom) at the latest release if the project depends on any managed versions or an outdated BOM is present. BOMs are expected to be synchronized to Jenkins LTS versions, so this will also remove any mismatched BOMs (Such as using Jenkins 2.387.3, but importing bom-2.319.x). If the expected BOM is already added, the version will not be upgraded."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.jenkins.AddPluginsBom"}
  artifact={"org.openrewrite.recipe:rewrite-jenkins"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.jenkins.AddPluginsBom"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jenkins/addpluginsbom.md"}
/>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n    <parent>\n        <groupId>org.jenkins-ci.plugins</groupId>\n        <artifactId>plugin</artifactId>\n        <version>4.86</version>\n        <relativePath/>\n    </parent>\n    <artifactId>foo</artifactId>\n    <properties>\n        <jenkins.version>2.440.3</jenkins.version>\n    </properties>\n    <repositories>\n        <repository>\n            <id>maven-central</id>\n            <url>https://repo1.maven.org/maven2/</url>\n        </repository>\n        <repository>\n            <id>repo.jenkins-ci.org</id>\n            <url>https://repo.jenkins-ci.org/public/</url>\n        </repository>\n    </repositories>\n    <dependencies>\n        <dependency>\n            <groupId>org.jenkins-ci.plugins</groupId>\n            <artifactId>ant</artifactId>\n            <version>1.9</version>\n        </dependency>\n    </dependencies>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.jenkins.AddPluginsBom","displayName":"Add or correct Jenkins plugins BOM","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jenkins","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

