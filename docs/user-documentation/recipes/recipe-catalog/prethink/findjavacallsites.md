---
title: "Find Java call sites"
sidebar_label: "Find Java call sites"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Java call sites"}
  description={"Report every syntactic Java method invocation, explicit new expression, and member reference, preserving repeated sites, lexical caller and target signatures, unknown attribution, and exact source spans. Does not change source or infer runtime execution, dispatch, or transitive reachability."}
  fqName={"io.moderne.prethink.FindJavaCallSites"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.FindJavaCallSites"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.FindJavaCallSites"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/findjavacallsites.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Java call sites</RecipeHeader.Title>

<RecipeHeader.Description>Report every syntactic Java method invocation, explicit new expression, and member reference, preserving repeated sites, lexical caller and target signatures, unknown attribution, and exact source spans. Does not change source or infer runtime execution, dispatch, or transitive reachability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.FindJavaCallSites","displayName":"Find Java call sites","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.JavaCallSites","displayName":"Java call sites","description":"Every syntactic Java method invocation, explicit new expression, and member reference, including repeated sites and missing attribution. Lexical source evidence only; does not establish runtime execution or dispatch.","columns":[{"name":"Source path","description":"The path to the Java source file."},{"name":"Source set","description":"The source set marker name, or null when absent."},{"name":"Enclosing class","description":"The nearest lexical class's attributed FQN, with $ for nested classes, or null when unavailable."},{"name":"Enclosing method","description":"The nearest lexical method or constructor declaration's simple name, stopping at a class body. Null for class, field, and initializer scopes. Lambdas retain the enclosing declaration."},{"name":"Caller signature","description":"Full JavaType.Method.toString() of the lexical enclosing declaration. Null outside a method or when its attribution is missing. No synthetic initializer or lambda signatures."},{"name":"Target signature","description":"Full JavaType.Method.toString() of the syntactic target, or null when attribution is missing. A member reference does not itself invoke the target; polymorphic runtime dispatch is not resolved."},{"name":"Call kind","description":"The syntactic node kind: METHOD_INVOCATION (including explicit this/super calls), NEW_CLASS, or MEMBER_REFERENCE."},{"name":"Start line","description":"One-based source line at the start of the call syntax, excluding prefix comments and whitespace."},{"name":"Start column","description":"One-based UTF-16 source column at the start of the call syntax. Tabs count as one character."},{"name":"End line","description":"One-based source line at the exclusive end of the call syntax."},{"name":"End column","description":"One-based UTF-16 source column at the exclusive end of the call syntax."},{"name":"Call source","description":"Exact marker-sanitized call syntax, including its select, arguments, and anonymous body when present, without prefix comments/whitespace or a trailing statement semicolon. Nested sites can have overlapping spans."},{"name":"Target class","description":"Attributed target declaring type FQN from JavaType.Method, or null when unavailable. No runtime dispatch or syntax-based owner inference."},{"name":"Target method","description":"Attributed target name from JavaType.Method, including <constructor>, or null when method attribution is missing. Not guessed from source syntax."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

