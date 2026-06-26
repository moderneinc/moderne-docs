---
title: "Use Jenkins API plugin instead of libraries"
sidebar_label: "Use Jenkins API plugin instead of libraries"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/jenkins/replacelibrarieswithapiplugin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Jenkins API plugin instead of libraries"}
  description={"Prefer Jenkins API plugins over bundling libraries for slimmer plugins."}
  fqName={"org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/java/org/openrewrite/jenkins/ReplaceLibrariesWithApiPlugin.java"}
/>

<RecipeHeader
  displayName={"Use Jenkins API plugin instead of libraries"}
  description={"Prefer Jenkins API plugins over bundling libraries for slimmer plugins."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin"}
  artifact={"org.openrewrite.recipe:rewrite-jenkins"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jenkins/replacelibrarieswithapiplugin.md"}
/>

<OptionsTable options={[{"type":"String","name":"pluginGroupId","required":true,"description":"The first part of a dependency coordinate 'io.jenkins.plugins:ARTIFACT_ID:VERSION'.","example":"io.jenkins.plugins"},{"type":"String","name":"pluginArtifactId","required":true,"description":"The second part of a dependency coordinate 'GROUP_ID:jackson2-api:VERSION'.","example":"jackson2-api"},{"type":"String","name":"pluginVersion","required":true,"description":"An exact version number.","example":"1981.v17df70e84a_a_1"},{"type":"Set","name":"replaces","required":true,"description":"The set of library coordinates replaced by this API Plugin.","example":"groupId: org.apache.commons\nartifactId: commons-text"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"pluginGroupId","value":"io.jenkins.plugins"},{"parameter":"pluginArtifactId","value":"commons-text-api"},{"parameter":"pluginVersion","value":"1.9-5.v7ea_44fe6061c"},{"parameter":"replaces","value":"Set.of(new ReplaceLibrariesWithApiPlugin.Library(\"org.apache.commons\", \"commons-text\"))"}],"variants":[{"language":"xml","before":"<project>\n    <parent>\n        <groupId>org.jenkins-ci.plugins</groupId>\n        <artifactId>plugin</artifactId>\n        <version>4.86</version>\n        <relativePath />\n    </parent>\n    <artifactId>foo</artifactId>\n\n    <properties>\n        <jenkins.version>2.440.3</jenkins.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.turbine</groupId>\n            <artifactId>turbine</artifactId>\n            <version>5.1</version>\n        </dependency>\n    </dependencies>\n\n    <repositories>\n        <repository>\n            <id>maven-central</id>\n            <url>https://repo1.maven.org/maven2/</url>\n        </repository>\n        <repository>\n            <id>repo.jenkins-ci.org</id>\n            <url>https://repo.jenkins-ci.org/public/</url>\n        </repository>\n    </repositories>\n</project>\n","after":"<project>\n    <parent>\n        <groupId>org.jenkins-ci.plugins</groupId>\n        <artifactId>plugin</artifactId>\n        <version>4.86</version>\n        <relativePath />\n    </parent>\n    <artifactId>foo</artifactId>\n\n    <properties>\n        <jenkins.version>2.440.3</jenkins.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.jenkins.plugins</groupId>\n            <artifactId>commons-text-api</artifactId>\n            <version>1.9-5.v7ea_44fe6061c</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.turbine</groupId>\n            <artifactId>turbine</artifactId>\n            <version>5.1</version>\n            <exclusions>\n                <exclusion>\n                    <!-- brought in by io.jenkins.plugins:commons-text-api -->\n                    <groupId>org.apache.commons</groupId>\n                    <artifactId>commons-text</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n    </dependencies>\n\n    <repositories>\n        <repository>\n            <id>maven-central</id>\n            <url>https://repo1.maven.org/maven2/</url>\n        </repository>\n        <repository>\n            <id>repo.jenkins-ci.org</id>\n            <url>https://repo.jenkins-ci.org/public/</url>\n        </repository>\n    </repositories>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -16,0 +16,5 @@\n    <dependencies>\n        <dependency>\n+           <groupId>io.jenkins.plugins</groupId>\n+           <artifactId>commons-text-api</artifactId>\n+           <version>1.9-5.v7ea_44fe6061c</version>\n+       </dependency>\n+       <dependency>\n            <groupId>org.apache.turbine</groupId>\n@@ -19,0 +24,7 @@\n            <artifactId>turbine</artifactId>\n            <version>5.1</version>\n+           <exclusions>\n+               <exclusion>\n+                   <!-- brought in by io.jenkins.plugins:commons-text-api -->\n+                   <groupId>org.apache.commons</groupId>\n+                   <artifactId>commons-text</artifactId>\n+               </exclusion>\n+           </exclusions>\n        </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin","displayName":"Use Jenkins API plugin instead of libraries","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jenkins","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS","requiresConfiguration":true,"cliOptions":" --recipe-option \"pluginGroupId=io.jenkins.plugins\" --recipe-option \"pluginArtifactId=jackson2-api\" --recipe-option \"pluginVersion=1981.v17df70e84a_a_1\" --recipe-option \"replaces=groupId: org.apache.commons\nartifactId: commons-text\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

