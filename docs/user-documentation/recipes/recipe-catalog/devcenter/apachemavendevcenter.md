---
title: "DevCenter for Apache Maven"
sidebar_label: "DevCenter for Apache Maven"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"DevCenter for Apache Maven"}
  description={"A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices.\nThis DevCenter includes recipes to upgrade the parent POMs of Apache Maven, as well as a collection of\nbest practices for Maven POMs.\n\n**Move to the latest `maven-parent`**<br/>\nThe version of the `org.apache.maven:maven-parent` parent POM, compared to version 50.<br/><br/>\n`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenParent)\n\n**Move to the latest `maven-plugins`**<br/>\nThe version of the `org.apache.maven.plugins:maven-plugins` parent POM, compared to version 50.<br/><br/>\n`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenPluginsParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenPluginsParent)\n\n**Move to the latest `maven-shared-components`**<br/>\nThe version of the `org.apache.maven.shared:maven-shared-components` parent POM, compared to version 50.<br/><br/>\n`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenSharedParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenSharedParent)\n\n**Move to Java 17**<br/>\nThe Java version each repository compiles for.<br/><br/>\n`Java 8+` → `Java 11+` → `Completed` · fix with [`UpgradeToJava17`](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava17)\n\n**Apache Maven best practices**<br/>\nPOM issue occurrences per check, counted across all repositories.<br/><br/>\n`Add explicit groupId to Maven plugins` · `Add explicit plugin versions` · `Drop prefixless expressions in POM` · `Order POM elements` · `Remove duplicate Maven dependencies` · `Remove redundant explicit dependency and plugin versions` · `Remove redundant properties` · `Migrate to maven-dependency-plugin goal resolve-sources` · `Update SCM with Git origin` · fix with [`BestPractices`](https://codegenomeproject.org/recipes/org.openrewrite.maven.BestPractices)\n\nThe DevCenter also counts lines of code per repository and committers active in the last 90 days. See the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter/) to customize."}
  fqName={"io.moderne.devcenter.ApacheMavenDevCenter"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.ApacheMavenDevCenter"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.ApacheMavenDevCenter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/apachemavendevcenter.md"}
  moderneOnly
>

<RecipeHeader.Title>DevCenter for Apache Maven</RecipeHeader.Title>

<RecipeHeader.Description>

A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices.
This DevCenter includes recipes to upgrade the parent POMs of Apache Maven, as well as a collection of
best practices for Maven POMs.

**Move to the latest `maven-parent`**<br />
The version of the `org.apache.maven:maven-parent` parent POM, compared to version 50.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzY4JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkY2RjYxJy8+PHJlY3QgeD0nNzAnIHdpZHRoPSc2OScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGOUI0OCcvPjxyZWN0IHg9JzE0MScgd2lkdGg9JzY5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkZDMDQ1Jy8+PHJlY3QgeD0nMjEyJyB3aWR0aD0nNjgnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyMzMEYyODQnLz48L3N2Zz4=" alt="Major to Completed" /><br />
`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenParent)

**Move to the latest `maven-plugins`**<br />
The version of the `org.apache.maven.plugins:maven-plugins` parent POM, compared to version 50.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzY4JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkY2RjYxJy8+PHJlY3QgeD0nNzAnIHdpZHRoPSc2OScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGOUI0OCcvPjxyZWN0IHg9JzE0MScgd2lkdGg9JzY5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkZDMDQ1Jy8+PHJlY3QgeD0nMjEyJyB3aWR0aD0nNjgnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyMzMEYyODQnLz48L3N2Zz4=" alt="Major to Completed" /><br />
`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenPluginsParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenPluginsParent)

**Move to the latest `maven-shared-components`**<br />
The version of the `org.apache.maven.shared:maven-shared-components` parent POM, compared to version 50.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzY4JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkY2RjYxJy8+PHJlY3QgeD0nNzAnIHdpZHRoPSc2OScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGOUI0OCcvPjxyZWN0IHg9JzE0MScgd2lkdGg9JzY5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkZDMDQ1Jy8+PHJlY3QgeD0nMjEyJyB3aWR0aD0nNjgnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyMzMEYyODQnLz48L3N2Zz4=" alt="Major to Completed" /><br />
`Major` → `Minor` → `Patch` → `Completed` · fix with [`UpgradeMavenSharedParent`](https://codegenomeproject.org/recipes/io.moderne.devcenter.UpgradeMavenSharedParent)

**Move to Java 17**<br />
The Java version each repository compiles for.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzkyJyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjRkY2RjYxJy8+PHJlY3QgeD0nOTQnIHdpZHRoPSc5MicgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI0ZGQTgzRCcvPjxyZWN0IHg9JzE4OCcgd2lkdGg9JzkyJyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjMzBGMjg0Jy8+PC9zdmc+" alt="Java 8+ to Completed" /><br />
`Java 8+` → `Java 11+` → `Completed` · fix with [`UpgradeToJava17`](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava17)

**Apache Maven best practices**<br />
POM issue occurrences per check, counted across all repositories.<br /><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nOCc+PHJlY3QgeD0nMCcgd2lkdGg9JzI5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjMmY0MmZmJy8+PHJlY3QgeD0nMzEnIHdpZHRoPSczMCcgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nIzI3YWE4OCcvPjxyZWN0IHg9JzYzJyB3aWR0aD0nMjknIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyM5ZDViZTgnLz48cmVjdCB4PSc5NCcgd2lkdGg9JzI5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjZWQ0YTVkJy8+PHJlY3QgeD0nMTI1JyB3aWR0aD0nMzAnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyM0Y2E3NWEnLz48cmVjdCB4PScxNTcnIHdpZHRoPScyOScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI2ZmYjgwMCcvPjxyZWN0IHg9JzE4OCcgd2lkdGg9JzI5JyBoZWlnaHQ9JzgnIHJ4PScyJyBmaWxsPScjN2ZmZmRlJy8+PHJlY3QgeD0nMjE5JyB3aWR0aD0nMzAnIGhlaWdodD0nOCcgcng9JzInIGZpbGw9JyNjMjgyZDUnLz48cmVjdCB4PScyNTEnIHdpZHRoPScyOScgaGVpZ2h0PSc4JyByeD0nMicgZmlsbD0nI2YwYjRhYycvPjwvc3ZnPg==" alt="9 categories" /><br />
`Add explicit groupId to Maven plugins` · `Add explicit plugin versions` · `Drop prefixless expressions in POM` · `Order POM elements` · `Remove duplicate Maven dependencies` · `Remove redundant explicit dependency and plugin versions` · `Remove redundant properties` · `Migrate to maven-dependency-plugin goal resolve-sources` · `Update SCM with Git origin` · fix with [`BestPractices`](https://codegenomeproject.org/recipes/org.openrewrite.maven.BestPractices)

The DevCenter also counts lines of code per repository and committers active in the last 90 days. See the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter/) to customize.

</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find organization statistics","href":"/user-documentation/recipes/recipe-catalog/devcenter/findorganizationstatistics/"},{"name":"Find active committers on repositories","href":"/user-documentation/recipes/recipe-catalog/devcenter/findactivecommitters/"},{"name":"Parent POM upgrade","href":"/user-documentation/recipes/recipe-catalog/devcenter/parentpomupgrade/"},{"name":"Parent POM upgrade","href":"/user-documentation/recipes/recipe-catalog/devcenter/parentpomupgrade/"},{"name":"Parent POM upgrade","href":"/user-documentation/recipes/recipe-catalog/devcenter/parentpomupgrade/"},{"name":"Move to a later Java version","href":"/user-documentation/recipes/recipe-catalog/devcenter/javaversionupgrade/"},{"name":"Apache Maven best practices","href":"/user-documentation/recipes/recipe-catalog/devcenter/apachemavenbestpractices/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.devcenter.ApacheMavenDevCenter","displayName":"DevCenter for Apache Maven","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.devcenter.table.OrganizationStatistics","displayName":"Organization statistics","description":"Per-repository statistics aggregated at the organization level.","columns":[{"name":"Line count","description":"The number of lines of code in this repository."}]},{"name":"org.openrewrite.table.DistinctCommitters","displayName":"Repository committers","description":"The distinct set of committers per repository.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Last commit","description":"The date of this committer's last commit. Null when only committer identities were collected, without per-day commit detail."},{"name":"Number of commits","description":"The number of commits made by this committer."}]},{"name":"org.openrewrite.table.CommitsByDay","displayName":"Commits by day","description":"The commit activity by day by committer.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Date","description":"The date of the day."},{"name":"Number of commits","description":"The number of commits made by this committer on this day."}]},{"name":"io.moderne.devcenter.table.UpgradesAndMigrations","displayName":"Upgrades and migrations","description":"Progress towards organizational objectives on library or language migrations and upgrades.","columns":[{"name":"Card","description":"The display name of the DevCenter card"},{"name":"Ordinal","description":"The ordinal position of this value relative to other values."},{"name":"Value","description":"The display value of the current state of this repository."},{"name":"Minimum version","description":"The minimum matching version that is currently in use."}]},{"name":"io.moderne.devcenter.table.SecurityIssues","displayName":"Security issues","description":"Security issues in the repository.","columns":[{"name":"Ordinal","description":"The ordinal position of this issue relative to other issues."},{"name":"Issue name","description":"The name of the security issue."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

