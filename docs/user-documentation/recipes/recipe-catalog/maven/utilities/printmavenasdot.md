---
title: "Print Maven dependency hierarchy in DOT format"
sidebar_label: "Print Maven dependency hierarchy in DOT format"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/utilities/printmavenasdot" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Print Maven dependency hierarchy in DOT format"}
  description={"The DOT language format is specified [here](https://graphviz.org/doc/info/lang.html)."}
  fqName={"org.openrewrite.maven.utilities.PrintMavenAsDot"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/utilities/PrintMavenAsDot.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.utilities.PrintMavenAsDot"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.utilities.PrintMavenAsDot"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/utilities/printmavenasdot.md"}
>

<RecipeHeader.Title>Print Maven dependency hierarchy in DOT format</RecipeHeader.Title>

<RecipeHeader.Description>The DOT language format is specified [here](https://graphviz.org/doc/info/lang.html).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <dependencies>\n    <dependency>\n        <groupId>org.yaml</groupId>\n        <artifactId>snakeyaml</artifactId>\n        <version>1.27</version>\n    </dependency>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.7.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<!--~~(digraph main {\n0 [label=\"com.mycompany.app:my-app:1\"];\n1 [label=\"org.yaml:snakeyaml:1.27\"];\n2 [label=\"org.junit.jupiter:junit-jupiter:5.7.0\"];\n3 [label=\"org.junit.jupiter:junit-jupiter-api:5.7.0\"];\n4 [label=\"org.junit.jupiter:junit-jupiter-params:5.7.0\"];\n5 [label=\"org.junit.jupiter:junit-jupiter-engine:5.7.0\"];\n6 [label=\"org.apiguardian:apiguardian-api:1.1.0\"];\n7 [label=\"org.opentest4j:opentest4j:1.2.0\"];\n8 [label=\"org.junit.platform:junit-platform-commons:1.7.0\"];\n9 [label=\"org.junit.platform:junit-platform-engine:1.7.0\"];\n0 -> 1 [taillabel=\"Compile\"];\n0 -> 2 [taillabel=\"Test\"];\n2 -> 3 [taillabel=\"Test\"];\n3 -> 6 [taillabel=\"Test\"];\n3 -> 7 [taillabel=\"Test\"];\n3 -> 8 [taillabel=\"Test\"];\n2 -> 4 [taillabel=\"Test\"];\n2 -> 5 [taillabel=\"Test\"];\n5 -> 9 [taillabel=\"Test\"];\n})~~>--><project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <dependencies>\n    <dependency>\n        <groupId>org.yaml</groupId>\n        <artifactId>snakeyaml</artifactId>\n        <version>1.27</version>\n    </dependency>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.7.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,21 @@\n-<project>\n+<!--~~(digraph main {\n+0 [label=\"com.mycompany.app:my-app:1\"];\n+1 [label=\"org.yaml:snakeyaml:1.27\"];\n+2 [label=\"org.junit.jupiter:junit-jupiter:5.7.0\"];\n+3 [label=\"org.junit.jupiter:junit-jupiter-api:5.7.0\"];\n+4 [label=\"org.junit.jupiter:junit-jupiter-params:5.7.0\"];\n+5 [label=\"org.junit.jupiter:junit-jupiter-engine:5.7.0\"];\n+6 [label=\"org.apiguardian:apiguardian-api:1.1.0\"];\n+7 [label=\"org.opentest4j:opentest4j:1.2.0\"];\n+8 [label=\"org.junit.platform:junit-platform-commons:1.7.0\"];\n+9 [label=\"org.junit.platform:junit-platform-engine:1.7.0\"];\n+0 -> 1 [taillabel=\"Compile\"];\n+0 -> 2 [taillabel=\"Test\"];\n+2 -> 3 [taillabel=\"Test\"];\n+3 -> 6 [taillabel=\"Test\"];\n+3 -> 7 [taillabel=\"Test\"];\n+3 -> 8 [taillabel=\"Test\"];\n+2 -> 4 [taillabel=\"Test\"];\n+2 -> 5 [taillabel=\"Test\"];\n+5 -> 9 [taillabel=\"Test\"];\n+})~~>--><project>\n  <groupId>com.mycompany.app</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.utilities.PrintMavenAsDot","displayName":"Print Maven dependency hierarchy in DOT format","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

