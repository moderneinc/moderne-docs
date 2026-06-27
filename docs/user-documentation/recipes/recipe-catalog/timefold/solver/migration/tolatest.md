---
title: "Upgrade to the latest Timefold Solver"
sidebar_label: "Upgrade to the latest Timefold Solver"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/timefold/solver/migration/tolatest" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to the latest Timefold Solver"}
  description={"Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives."}
  fqName={"ai.timefold.solver.migration.ToLatest"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=ai.timefold.solver.migration.ToLatest"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"ai.timefold.solver.migration.ToLatest"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/ai.timefold.solver.migration.ToLatest"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/timefold/solver/migration/tolatest.md"}
>

<RecipeHeader.Title>Upgrade to the latest Timefold Solver</RecipeHeader.Title>

<RecipeHeader.Description>Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate from OptaPlanner to Timefold Solver","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/fromoptaplannertotimefoldsolver/"},{"name":"Change property key","href":"/user-documentation/recipes/recipe-catalog/properties/changepropertykey/"},{"name":"Change property key","href":"/user-documentation/recipes/recipe-catalog/properties/changepropertykey/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"ScoreManager: explain(), update()","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/scoremanagermethodsrecipe/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Score: use shorter getters","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/scoregettersrecipe/"},{"name":"Replace getConstraint*() with getConstraintRef()","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/constraintrefrecipe/"},{"name":"SolverManager: use builder API","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/solvermanagerbuilderrecipe/"},{"name":"PlanningVariable's `nullable` is newly called `unassignedValues`","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/nullablerecipe/"},{"name":"Use non-deprecated SingleConstraintAssertion methods","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/singleconstraintassertionmethodsrecipe/"},{"name":"ConstraintStreams: use asConstraint() methods to define constraints","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/asconstraintrecipe/"},{"name":"Constraint Streams: don't use package name in the asConstraint() method","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/removeconstraintpackagerecipe/"},{"name":"Recommended Fit API becomes Assignment Recommendation API","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/solutionmanagerrecommendassignmentrecipe/"},{"name":"Use non-deprecated related sorting fields and methods","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/sortingmigrationrecipe/"},{"name":"Use non-deprecated environment constants","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/v8/environmentmigrationrecipe/"},{"name":"Remove unused imports","href":"/user-documentation/recipes/recipe-catalog/java/removeunusedimports/"},{"name":"Change the Timefold version","href":"/user-documentation/recipes/recipe-catalog/timefold/solver/migration/changeversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"ai.timefold.solver.migration.ToLatest","displayName":"Upgrade to the latest Timefold Solver","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

