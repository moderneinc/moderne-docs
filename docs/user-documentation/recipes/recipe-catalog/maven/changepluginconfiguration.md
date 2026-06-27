---
title: "Change Maven plugin configuration"
sidebar_label: "Change Maven plugin configuration"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/changepluginconfiguration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Maven plugin configuration"}
  description={"Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom."}
  fqName={"org.openrewrite.maven.ChangePluginConfiguration"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginConfiguration.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ChangePluginConfiguration"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/changepluginconfiguration.md"}
>

<RecipeHeader.Title>Change Maven plugin configuration</RecipeHeader.Title>

<RecipeHeader.Description>Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of the coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION' of the plugin to modify.","example":"org.openrewrite.maven"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION' of the plugin to modify.","example":"rewrite-maven-plugin"},{"type":"String","name":"configuration","required":false,"description":"Plugin configuration provided as raw XML overriding any existing configuration. Configuration inside `<executions>` blocks will not be altered. Supplying `null` will remove any existing configuration. To include a literal `${...}` property reference in the configuration (e.g. a Maven property like `${java.version}`), escape it as `\\${...}` in your recipe YAML to prevent it from being resolved as a recipe placeholder.","example":"<foo>bar</foo>"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"org.openrewrite.maven"},{"parameter":"artifactId","value":"rewrite-maven-plugin"},{"parameter":"configuration","value":"null"}],"variants":[{"language":"xml","before":"<project>\n    <groupId>org.example</groupId>\n    <artifactId>foo</artifactId>\n    <version>1.0</version>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.openrewrite.maven</groupId>\n                <artifactId>rewrite-maven-plugin</artifactId>\n                <version>4.1.5</version>\n                <configuration>\n                    <activeRecipes>\n                        <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>\n                    </activeRecipes>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <groupId>org.example</groupId>\n    <artifactId>foo</artifactId>\n    <version>1.0</version>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.openrewrite.maven</groupId>\n                <artifactId>rewrite-maven-plugin</artifactId>\n                <version>4.1.5</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -12,5 +12,0 @@\n                <artifactId>rewrite-maven-plugin</artifactId>\n                <version>4.1.5</version>\n-               <configuration>\n-                   <activeRecipes>\n-                       <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>\n-                   </activeRecipes>\n-               </configuration>\n            </plugin>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ChangePluginConfiguration","displayName":"Change Maven plugin configuration","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=org.openrewrite.maven\" --recipe-option \"artifactId=rewrite-maven-plugin\" --recipe-option \"configuration=<foo>bar</foo>\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

