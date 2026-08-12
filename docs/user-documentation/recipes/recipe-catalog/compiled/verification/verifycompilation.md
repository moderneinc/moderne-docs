---
title: "Verify compilation of changes made earlier in the same run"
sidebar_label: "Verify compilation of changes made earlier in the same run"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Verify compilation of changes made earlier in the same run"}
  description={"Recompile the source files that **earlier recipes in this same recipe run** changed, and mark the elements that no longer compile. This recipe examines only files carrying a `RecipesThatMadeChanges` marker, so running it on its own reports nothing at all, no matter how badly broken the code in the repository is. It is a verification step for a migration, not a standalone compiler. Compose it after the recipe whose output you want to verify:\n```yaml\ntype: specs.openrewrite.org/v1beta/recipe\nname: com.yourorg.MigrateAndVerify\ndisplayName: Migrate and verify\ndescription: Rename a method and verify that the result still compiles.\nrecipeList:\n  - org.openrewrite.java.ChangeMethodName:\n      methodPattern: java.util.List add(..)\n      newMethodName: plus\n  - io.moderne.compiled.verification.VerifyCompilation\n```\nFailures appear as inline warnings on the offending elements, so a run that produces no warnings either verified everything successfully or had nothing to verify."}
  fqName={"io.moderne.compiled.verification.VerifyCompilation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.compiled.verification.VerifyCompilation"}
  artifact={"org.openrewrite.recipe:rewrite-compiled-analysis"}
  appLink={"https://app.moderne.io/recipes/io.moderne.compiled.verification.VerifyCompilation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/compiled/verification/verifycompilation.md"}
  moderneOnly
>

<RecipeHeader.Title>Verify compilation of changes made earlier in the same run</RecipeHeader.Title>

<RecipeHeader.Description>

Recompile the source files that **earlier recipes in this same recipe run** changed, and mark the elements that no longer compile. This recipe examines only files carrying a `RecipesThatMadeChanges` marker, so running it on its own reports nothing at all, no matter how badly broken the code in the repository is. It is a verification step for a migration, not a standalone compiler. Compose it after the recipe whose output you want to verify:
```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MigrateAndVerify
displayName: Migrate and verify
description: Rename a method and verify that the result still compiles.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.List add(..)
      newMethodName: plus
  - io.moderne.compiled.verification.VerifyCompilation
```
Failures appear as inline warnings on the offending elements, so a run that produces no warnings either verified everything successfully or had nothing to verify.

</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"trace","required":false,"description":"Trace the ABIs of dependencies of files being verified."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.compiled.verification.VerifyCompilation","displayName":"Verify compilation of changes made earlier in the same run","groupId":"org.openrewrite.recipe","artifactId":"rewrite-compiled-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPILED_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.compiled.table.ABITraces","displayName":"ABI traces","description":"ASM trace of the ABI of types needed to perform compile verification.","columns":[{"name":"Type to verify","description":"The type that compile verification is attempting to verify."},{"name":"Type in use","description":"A type that the type to verify is using, and therefore needs to be written out in bytecode form."},{"name":"Type in use ABI","description":"The ABI of the type in use, written as an ASM trace."}]},{"name":"io.moderne.compiled.table.CompilationFailures","displayName":"Compilation failures","description":"Elements that no longer compile after a preceding recipe made changes to the file.","columns":[{"name":"Source path","description":"The path of the file that failed verification."},{"name":"Failure type","description":"Whether the file failed to parse, or parsed but references something that no longer resolves."},{"name":"Element","description":"The element that failed verification, as it is printed in the changed source file."},{"name":"Message","description":"Why this element failed verification."},{"name":"Recipes that made changes","description":"The recipes that changed this file, and so are candidates for having caused the failure."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

