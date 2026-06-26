---
title: "Add cooldown periods to Dependabot configuration"
sidebar_label: "Add cooldown periods to Dependabot configuration"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/adddependabotcooldown" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add cooldown periods to Dependabot configuration"}
  description={"Adds a `cooldown` section to each update configuration in Dependabot files. Supports `default-days`, `semver-major-days`, `semver-minor-days`, `semver-patch-days`, `include`, and `exclude` options. This implements a security best practice where dependencies are not immediately adopted upon release, allowing time for security vendors to identify potential supply chain compromises. Cooldown applies only to version updates, not security updates. [Read more about dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns). [The available configuration options for dependabot are listed on GitHub](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)."}
  fqName={"org.openrewrite.github.AddDependabotCooldown"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/AddDependabotCooldown.java"}
/>

<RecipeHeader
  displayName={"Add cooldown periods to Dependabot configuration"}
  description={"Adds a `cooldown` section to each update configuration in Dependabot files. Supports `default-days`, `semver-major-days`, `semver-minor-days`, `semver-patch-days`, `include`, and `exclude` options. This implements a security best practice where dependencies are not immediately adopted upon release, allowing time for security vendors to identify potential supply chain compromises. Cooldown applies only to version updates, not security updates. [Read more about dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns). [The available configuration options for dependabot are listed on GitHub](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["github","security","dependabot","dependencies"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.AddDependabotCooldown"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.AddDependabotCooldown"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/adddependabotcooldown.md"}
/>

<OptionsTable options={[{"type":"Integer","name":"cooldownDays","required":false,"description":"The number of days to wait before considering a published dependency suitable for use (1-90). This delay allows security vendors time to identify potential compromises. Applied to all version types unless specific semver options are set.","example":"7"},{"type":"Integer","name":"semverMajorDays","required":false,"description":"The number of days to wait for major version updates (1-90). Only applies to package managers that support semantic versioning.","example":"14"},{"type":"Integer","name":"semverMinorDays","required":false,"description":"The number of days to wait for minor version updates (1-90). Only applies to package managers that support semantic versioning.","example":"7"},{"type":"Integer","name":"semverPatchDays","required":false,"description":"The number of days to wait for patch version updates (1-90). Only applies to package managers that support semantic versioning.","example":"3"},{"type":"List","name":"include","required":false,"description":"List of up to 150 dependencies to apply cooldown to. Supports wildcard patterns with `*`. If not specified, cooldown applies to all dependencies.","example":"lodash, react*"},{"type":"List","name":"exclude","required":false,"description":"List of up to 150 dependencies to exempt from cooldown. Supports wildcard patterns with `*`. Exclude list takes precedence over include list.","example":"critical-security-package"},{"type":"List","name":"excludeEcosystems","required":false,"description":"List of ecosystems to be excluded","example":"github-actions"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"cooldownDays","value":"null"},{"parameter":"semverMajorDays","value":"null"},{"parameter":"semverMinorDays","value":"null"},{"parameter":"semverPatchDays","value":"null"},{"parameter":"include","value":"null"},{"parameter":"exclude","value":"null"},{"parameter":"excludeEcosystems","value":"null"}],"variants":[{"language":"yaml","before":"version: 2\nupdates:\n  - package-ecosystem: github-actions\n    directory: /\n    schedule:\n      interval: daily\n  - package-ecosystem: maven\n    directory: /\n    schedule:\n      interval: weekly\n","after":"version: 2\nupdates:\n  - package-ecosystem: github-actions\n    directory: /\n    schedule:\n      interval: daily\n    cooldown:\n      default-days: 7\n  - package-ecosystem: maven\n    directory: /\n    schedule:\n      interval: weekly\n    cooldown:\n      default-days: 7\n","diff":"--- .github/dependabot.yml\n+++ .github/dependabot.yml\n@@ -7,0 +7,2 @@\n    schedule:\n      interval: daily\n+   cooldown:\n+     default-days: 7\n  - package-ecosystem: maven\n@@ -11,0 +13,2 @@\n    schedule:\n      interval: weekly\n+   cooldown:\n+     default-days: 7\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.AddDependabotCooldown","displayName":"Add cooldown periods to Dependabot configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

