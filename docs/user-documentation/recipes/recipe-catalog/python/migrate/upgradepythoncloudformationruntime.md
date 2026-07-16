---
title: "Upgrade Python runtime in CloudFormation templates"
sidebar_label: "Upgrade Python runtime in CloudFormation templates"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Python runtime in CloudFormation templates"}
  description={"Update Python Lambda runtimes in CloudFormation and SAM templates to a target version. Bumps `Runtime: python3.x` properties (`AWS::Lambda::Function`, `AWS::Serverless::Function`, and the SAM `Globals` section) and `python3.x` entries in `CompatibleRuntimes` lists of Lambda layer versions. Indirection is followed: a YAML anchor aliased from a runtime value is bumped where it is defined, and a parameter referenced from a runtime value (`!Ref` or `Ref:`) has its `Default` and any `AllowedValues` bumped. Templates are recognized by content — `AWSTemplateFormatVersion`, an `AWS::` `Transform`, or `Resources` with `AWS::` resource types — so any YAML template is updated regardless of its file name or location. Only runtimes older than the target are changed; a runtime already on a newer version is left as-is."}
  fqName={"org.openrewrite.python.migrate.UpgradePythonCloudFormationRuntime"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradePythonCloudFormationRuntime"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradePythonCloudFormationRuntime"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythoncloudformationruntime.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade Python runtime in CloudFormation templates</RecipeHeader.Title>

<RecipeHeader.Description>Update Python Lambda runtimes in CloudFormation and SAM templates to a target version. Bumps `Runtime: python3.x` properties (`AWS::Lambda::Function`, `AWS::Serverless::Function`, and the SAM `Globals` section) and `python3.x` entries in `CompatibleRuntimes` lists of Lambda layer versions. Indirection is followed: a YAML anchor aliased from a runtime value is bumped where it is defined, and a parameter referenced from a runtime value (`!Ref` or `Ref:`) has its `Default` and any `AllowedValues` bumped. Templates are recognized by content — `AWSTemplateFormatVersion`, an `AWS::` `Transform`, or `Resources` with `AWS::` resource types — so any YAML template is updated regardless of its file name or location. Only runtimes older than the target are changed; a runtime already on a newer version is left as-is.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"The target Python version as `MAJOR.MINOR` (for example `3.12`). Any patch component is dropped; the minor release is the upgrade target.","example":"3.12"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradePythonCloudFormationRuntime","displayName":"Upgrade Python runtime in CloudFormation templates","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=3.12\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

