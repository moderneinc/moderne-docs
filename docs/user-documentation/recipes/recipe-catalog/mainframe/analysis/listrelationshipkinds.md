---
title: "List relationship kinds"
sidebar_label: "List relationship kinds"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"List relationship kinds"}
  description={"Write out every relationship each kind of mainframe resource can have, both ways round, as the schema the relationship rows are read against. A view of a program can then show that nothing calls it, rather than showing nothing — which is the difference between an answer and a gap. This is a fixed vocabulary and does not depend on what is in the repository, so it reports the same rows over any source."}
  fqName={"io.moderne.mainframe.analysis.ListRelationshipKinds"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.ListRelationshipKinds"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.ListRelationshipKinds"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/listrelationshipkinds.md"}
  moderneOnly
>

<RecipeHeader.Title>List relationship kinds</RecipeHeader.Title>

<RecipeHeader.Description>Write out every relationship each kind of mainframe resource can have, both ways round, as the schema the relationship rows are read against. A view of a program can then show that nothing calls it, rather than showing nothing — which is the difference between an answer and a gap. This is a fixed vocabulary and does not depend on what is in the repository, so it reports the same rows over any source.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.ListRelationshipKinds","displayName":"List relationship kinds","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.RelationshipKinds","displayName":"Relationship kinds","description":"Every relationship a resource of each type can have, both ways round. This is the schema the relationship rows are read against, so a view of one component can show each relationship it is capable of even when it has none — an empty section says \"nothing calls this\", where a missing section says nothing at all.","columns":[{"name":"Resource type","description":"The type this relationship is expected of."},{"name":"Direction","description":"`OUTBOUND` where the resource is the dependent of the edge, `INBOUND` where it is the dependency. Every kind has a row each way, which is what makes the inverse renderable."},{"name":"Verb","description":"What to call this relationship on a view of the resource: `Calls` outbound, `Called by` inbound."},{"name":"Action","description":"The action a relationship row carries for this kind."},{"name":"Related type","description":"The type at the other end."},{"name":"Inverse verb","description":"What the same relationship is called on a view of the related type."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

