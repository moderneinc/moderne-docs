---
title: "Migrate to WebLogic 14.1.2"
sidebar_label: "Migrate to WebLogic 14.1.2"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/oracle/weblogic/rewrite/upgradeto1412" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to WebLogic 14.1.2"}
  description={"This recipe will apply changes required for migrating to WebLogic 14.1.2"}
  fqName={"com.oracle.weblogic.rewrite.UpgradeTo1412"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.UpgradeTo1412"}
/>

<RecipeHeader
  displayName={"Migrate to WebLogic 14.1.2"}
  description={"This recipe will apply changes required for migrating to WebLogic 14.1.2"}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["java","weblogic"]}
  license={"Apache License Version 2.0"}
  fqName={"com.oracle.weblogic.rewrite.UpgradeTo1412"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.UpgradeTo1412"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/upgradeto1412.md"}
/>

<RecipeList recipes={[{"name":"Update the WebLogic version to 14.1.2","href":"oracle/weblogic/rewrite/updatebuildtoweblogic1412"},{"name":"Report types deprecated or removed in WebLogic version 14.1.2","href":"oracle/weblogic/rewrite/checkandcommentoutdeprecations1412"},{"name":"JSF 1.x to Jakarta Server Faces 2.3 on WebLogic 14.1.2 or older","href":"oracle/weblogic/rewrite/facesmigrationtojakartafaces2x"},{"name":"Migrate WebLogic Schemas to 14.1.2","href":"oracle/weblogic/rewrite/migrateweblogicschemasto1412"},{"name":"Mitigation of Java XML Bind Deprecation in Java 11 vs WebLogic 14.1.2","href":"oracle/weblogic/rewrite/weblogic1412javaxmlbindmitigation"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"com.oracle.weblogic.rewrite.UpgradeTo1412","displayName":"Migrate to WebLogic 14.1.2","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.java.table.MethodCalls","displayName":"Method calls","description":"The text of matching method invocations.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Method call","description":"The text of the method call."},{"name":"Class name","description":"The class name of the method call."},{"name":"Method name","description":"The method name of the method call."},{"name":"Argument types","description":"The argument types of the method call."}]},{"name":"org.openrewrite.java.table.TypeUses","displayName":"Type uses","description":"The source code of matching type uses.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Source","description":"The source code of the type use."},{"name":"Concrete type","description":"The concrete type in use, which may be a subtype of a searched type."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

