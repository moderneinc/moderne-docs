---
title: "DevCenter for C#"
sidebar_label: "DevCenter for C#"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"DevCenter for C#"}
  description={"A default DevCenter configuration for C# repositories.\nTrack .NET version adoption across your organization.\n\n**Move to .NET 10**<br/>\nThe lowest target framework across the projects in each repository.<br/><br/>\n`.NET Framework` → `.NET 6+` → `.NET 7+` → `.NET 8+` → `.NET 9+` → `Completed` · fix with [`UpgradeToDotNet10`](https://codegenomeproject.org/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.UpgradeToDotNet10)\n\nThe DevCenter also counts lines of code per repository and committers active in the last 90 days. See the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter/) to customize."}
  fqName={"io.moderne.devcenter.DevCenterCSharpStarter"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.DevCenterCSharpStarter"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.DevCenterCSharpStarter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/devcentercsharpstarter.md"}
  moderneOnly
>

<RecipeHeader.Title>DevCenter for C#</RecipeHeader.Title>

<RecipeHeader.Description>

A default DevCenter configuration for C# repositories.
Track .NET version adoption across your organization.

**Move to .NET 10**<br />
The lowest target framework across the projects in each repository.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzQ1JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkY2RjYxJy8+PHJlY3QgeD0nNDcnIHdpZHRoPSc0NScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGOEY1MicvPjxyZWN0IHg9Jzk0JyB3aWR0aD0nNDUnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyNGRjlCNDgnLz48cmVjdCB4PScxNDEnIHdpZHRoPSc0NScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGQzA0NScvPjxyZWN0IHg9JzE4OCcgd2lkdGg9JzQ1JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkZEMzREJy8+PHJlY3QgeD0nMjM1JyB3aWR0aD0nNDUnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyMzMEYyODQnLz48L3N2Zz4=" alt=".NET Framework to Completed" /><br />
`.NET Framework` → `.NET 6+` → `.NET 7+` → `.NET 8+` → `.NET 9+` → `Completed` · fix with [`UpgradeToDotNet10`](https://codegenomeproject.org/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.UpgradeToDotNet10)

The DevCenter also counts lines of code per repository and committers active in the last 90 days. See the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter/) to customize.

</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Move to a later .NET version","href":"/user-documentation/recipes/recipe-catalog/devcenter/csharpversionupgrade/"},{"name":"Find organization statistics","href":"/user-documentation/recipes/recipe-catalog/devcenter/findorganizationstatistics/"},{"name":"Find active committers on repositories","href":"/user-documentation/recipes/recipe-catalog/devcenter/findactivecommitters/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.devcenter.DevCenterCSharpStarter","displayName":"DevCenter for C#","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.devcenter.table.UpgradesAndMigrations","displayName":"Upgrades and migrations","description":"Progress towards organizational objectives on library or language migrations and upgrades.","columns":[{"name":"Card","description":"The display name of the DevCenter card"},{"name":"Ordinal","description":"The ordinal position of this value relative to other values."},{"name":"Value","description":"The display value of the current state of this repository."},{"name":"Minimum version","description":"The minimum matching version that is currently in use."}]},{"name":"io.moderne.devcenter.table.OrganizationStatistics","displayName":"Organization statistics","description":"Per-repository statistics aggregated at the organization level.","columns":[{"name":"Line count","description":"The number of lines of code in this repository."}]},{"name":"org.openrewrite.table.DistinctCommitters","displayName":"Repository committers","description":"The distinct set of committers per repository.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Last commit","description":"The date of this committer's last commit. Null when only committer identities were collected, without per-day commit detail."},{"name":"Number of commits","description":"The number of commits made by this committer."}]},{"name":"org.openrewrite.table.CommitsByDay","displayName":"Commits by day","description":"The commit activity by day by committer.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Date","description":"The date of the day."},{"name":"Number of commits","description":"The number of commits made by this committer on this day."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

