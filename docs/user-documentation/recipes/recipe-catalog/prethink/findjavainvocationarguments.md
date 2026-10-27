---
title: "Find Java invocation arguments"
sidebar_label: "Find Java invocation arguments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Java invocation arguments"}
  description={"Report every explicit argument occurrence of ordinary written Java method invocations, with original IDs, source spans, attributed target and bounded source String evidence. An optional method pattern selects only attributed matching targets. Constructors and member references are excluded; zero-argument invocations have no argument rows. Does not change source or interpret runtime policy."}
  fqName={"io.moderne.prethink.FindJavaInvocationArguments"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.FindJavaInvocationArguments"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.FindJavaInvocationArguments"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/findjavainvocationarguments.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Java invocation arguments</RecipeHeader.Title>

<RecipeHeader.Description>Report every explicit argument occurrence of ordinary written Java method invocations, with original IDs, source spans, attributed target and bounded source String evidence. An optional method pattern selects only attributed matching targets. Constructors and member references are excluded; zero-argument invocations have no argument rows. Does not change source or interpret runtime policy.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":false,"description":"Optional OpenRewrite method pattern matched against actual method attribution. Omit to retain every ordinary written invocation, including unattributed targets. When supplied, targets with missing or unmatchable attribution are omitted; no name-text fallback.","example":"com.acme.Service accept(..)"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.prethink.FindJavaInvocationArguments","displayName":"Find Java invocation arguments","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"methodPattern=com.acme.Service accept(..)\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.JavaInvocationArguments","displayName":"Java invocation arguments","description":"Every explicit argument occurrence of ordinary written Java method invocations. IDs are original-model-local; joins require the exact VCS/input and producer namespace. No constructors, member references or zero-argument placeholders.","columns":[{"name":"Source path","description":"Original Java source path."},{"name":"Source set","description":"Sole actual JavaSourceSet name, or null when missing or ambiguous; never inferred from a path."},{"name":"Project ID","description":"Sole actual JavaProject marker UUID, or null when missing or ambiguous. Original-model-local identity."},{"name":"Project name","description":"Sole actual JavaProject projectName, or null when missing or ambiguous. Descriptive evidence only."},{"name":"Source set ID","description":"Sole actual JavaSourceSet marker UUID, or null when missing or ambiguous. Source lookup also requires project ID and nonempty source-set name."},{"name":"Source file ID","description":"Actual original compilation-unit UUID. Scope with exact VCS/input and producer before joining inventory evidence."},{"name":"Invocation ID","description":"Actual original method-invocation UUID. Scope with exact VCS/input and producer before joining HTTP matcherId/actionId evidence."},{"name":"Argument ID","description":"Actual original argument-expression UUID; no deduplication or generated aliases."},{"name":"Invocation index","description":"Zero-based lexical ordinal by printed method-name token among all eligible ordinary invocations in this compilation unit, before filtering. Zero-argument calls participate."},{"name":"Argument index","description":"Zero-based explicit syntactic argument order. Arrays remain one argument; J.Empty placeholders are omitted."},{"name":"Method name","description":"Written ordinary method name. This spelling never substitutes for typed target matching."},{"name":"Method signature","description":"Canonical attributed JavaType.Method string, as in HTTP evidence, or null when attribution is unavailable."},{"name":"Invocation start line","description":"One-based original source line at the full invocation start, excluding prefix whitespace/comments."},{"name":"Invocation start column","description":"One-based UTF-16 column at the full invocation start; tabs count as one character."},{"name":"Invocation end line","description":"One-based original source line at the exclusive full invocation end."},{"name":"Invocation end column","description":"One-based UTF-16 column at the exclusive full invocation end."},{"name":"Method name start line","description":"One-based original source line at the printed method-name token; determines lexical invocation order."},{"name":"Method name start column","description":"One-based UTF-16 column at the printed method-name token."},{"name":"Start line","description":"One-based original source line at the argument-expression start."},{"name":"Start column","description":"One-based UTF-16 column at the argument-expression start, excluding prefix whitespace/comments."},{"name":"End line","description":"One-based original source line at the exclusive argument-expression end."},{"name":"End column","description":"One-based UTF-16 column at the exclusive argument-expression end."},{"name":"Expression source","description":"Exact sanitized original printed argument expression slice, excluding leading prefix whitespace/comments."},{"name":"Expression type","description":"Actual attributed expression type string, or null for missing/Unknown attribution."},{"name":"Resolution state","description":"RESOLVED, UNRESOLVED, or UNSUPPORTED. Bounded source evidence only."},{"name":"Resolution reason","description":"Stable reason code shared with annotation source String evaluation, including explicit ambiguous scope reasons."},{"name":"Resolved value","description":"JSON String or fully resolved String array; SQL null on failure. No partial or truncated value."},{"name":"Constant references","description":"Ordered JSON typed source-field reference attempts and all candidate declarations, retaining repeats and transitive provenance."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

