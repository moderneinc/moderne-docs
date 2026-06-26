---
title: "Find Security class modifications"
sidebar_label: "Find Security class modifications"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Security class modifications"}
  description={"Finds invocations of java.security.Security methods that modify security configuration such as removeProvider, addProvider, insertProviderAt, setProperty, and removeProperty."}
  fqName={"io.moderne.cryptography.FindSecurityModifications"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Security class modifications"}
  description={"Finds invocations of java.security.Security methods that modify security configuration such as removeProvider, addProvider, insertProviderAt, setProperty, and removeProperty."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.FindSecurityModifications"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.FindSecurityModifications"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/findsecuritymodifications.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.security.Security;\n\npublic class SecurityExample {\n    public void removeBouncyCastle() {\n        // Remove the BouncyCastle provider\n        Security.removeProvider(\"BouncyCastleProvider\");\n    }\n}\n","after":"import java.security.Security;\n\npublic class SecurityExample {\n    public void removeBouncyCastle() {\n        // Remove the BouncyCastle provider\n        /*~~>*/Security.removeProvider(\"BouncyCastleProvider\");\n    }\n}\n","diff":"@@ -6,1 +6,1 @@\n    public void removeBouncyCastle() {\n        // Remove the BouncyCastle provider\n-       Security.removeProvider(\"BouncyCastleProvider\");\n+       /*~~>*/Security.removeProvider(\"BouncyCastleProvider\");\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.FindSecurityModifications","displayName":"Find Security class modifications","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.table.SecurityModificationTable","displayName":"Security modifications","description":"Security class method invocations that modify the Java security configuration including provider management and property settings.","columns":[{"name":"Source file","description":"The source file containing the Security modification"},{"name":"Line number","description":"The line number where the Security method is called"},{"name":"Method name","description":"The Security method being called (e.g., removeProvider, addProvider, insertProviderAt)"},{"name":"Arguments","description":"The arguments passed to the Security method"},{"name":"Context","description":"The context in which the Security modification occurs (e.g., method name, class name)"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

