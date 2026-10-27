---
title: "Upgrade Python version"
sidebar_label: "Upgrade Python version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Python version"}
  description={"Update the Python version referenced in project metadata, packaging, CI, documentation, and infrastructure files to a target version: `pyproject.toml`, `Pipfile`, `setup.py`, `setup.cfg`, `.python-version`, Ruff's `target-version`, `Dockerfile` base images, GitHub Actions `setup-python` steps, CloudFormation/SAM template runtimes, Read the Docs configuration, and Mend `.whitesource` files. Only references older than the target are changed. Each file type is handled by its own recipe, so a team with its own process for some of them can compose the rest."}
  fqName={"org.openrewrite.python.migrate.UpgradePythonVersion"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradePythonVersion"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradePythonVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade Python version</RecipeHeader.Title>

<RecipeHeader.Description>Update the Python version referenced in project metadata, packaging, CI, documentation, and infrastructure files to a target version: `pyproject.toml`, `Pipfile`, `setup.py`, `setup.cfg`, `.python-version`, Ruff's `target-version`, `Dockerfile` base images, GitHub Actions `setup-python` steps, CloudFormation/SAM template runtimes, Read the Docs configuration, and Mend `.whitesource` files. Only references older than the target are changed. Each file type is handled by its own recipe, so a team with its own process for some of them can compose the rest.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Python version in project files","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonprojectfiles/"},{"name":"Upgrade Python Docker base image","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythondockerimage/"},{"name":"Upgrade `actions/setup-python` `python-version`","href":"/user-documentation/recipes/recipe-catalog/github/setuppythonupgradepythonversion/"},{"name":"Upgrade Python runtime in CloudFormation templates","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythoncloudformationruntime/"},{"name":"Upgrade Python version in Read the Docs configuration","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonreadthedocsconfig/"},{"name":"Upgrade Python version in Mend `.whitesource` files","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonwhitesourceconfig/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"The target Python version as `MAJOR.MINOR` (for example `3.12`). Any patch component is dropped; the minor release is the upgrade target.","example":"3.12"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradePythonVersion","displayName":"Upgrade Python version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","requiresConfiguration":true,"pipPackage":"openrewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}],"cliOptions":" --recipe-option \"version=3.12\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

