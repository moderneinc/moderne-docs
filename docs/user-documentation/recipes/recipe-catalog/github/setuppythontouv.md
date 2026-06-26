---
title: "Replace `actions/setup-python` with `astral-sh/setup-uv`"
sidebar_label: "Replace `actions/setup-python` with `astral-sh/setup-uv`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/setuppythontouv" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `actions/setup-python` with `astral-sh/setup-uv`"}
  description={"Replace `actions/setup-python` action with `astral-sh/setup-uv` action for faster Python environment setup and dependency management.\n\n**Benefits of UV:**\n - Significantly faster package installation and environment setup\n - Built-in dependency resolution and locking\n - Integrated caching for improved CI performance\n - Drop-in replacement for pip workflows\n\n**Transformations applied:**\n - `actions/setup-python@v5` → `astral-sh/setup-uv@v6`\n - `cache: 'pip'` → `enable-cache: 'true'`\n - `pip install -r requirements.txt` → `uv sync` (configurable strategy)\n - `python -m <module>` → `uv run <module>`\n - Removes unnecessary `pip install --upgrade pip` steps\n\n**Sync strategies:**\n - `basic`: Basic synchronization (`uv sync`)\n - `locked`: Use locked dependencies (`uv sync --locked`)\n - `full`: Install all extras and dev dependencies (`uv sync --all-extras --dev`)\n\nSee the [UV GitHub integration guide](https://docs.astral.sh/uv/guides/integration/github/) for more details."}
  fqName={"org.openrewrite.github.SetupPythonToUv"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/SetupPythonToUv.java"}
/>

<RecipeHeader
  displayName={"Replace `actions/setup-python` with `astral-sh/setup-uv`"}
  description={"Replace `actions/setup-python` action with `astral-sh/setup-uv` action for faster Python environment setup and dependency management.\n\n**Benefits of UV:**\n - Significantly faster package installation and environment setup\n - Built-in dependency resolution and locking\n - Integrated caching for improved CI performance\n - Drop-in replacement for pip workflows\n\n**Transformations applied:**\n - `actions/setup-python@v5` → `astral-sh/setup-uv@v6`\n - `cache: 'pip'` → `enable-cache: 'true'`\n - `pip install -r requirements.txt` → `uv sync` (configurable strategy)\n - `python -m <module>` → `uv run <module>`\n - Removes unnecessary `pip install --upgrade pip` steps\n\n**Sync strategies:**\n - `basic`: Basic synchronization (`uv sync`)\n - `locked`: Use locked dependencies (`uv sync --locked`)\n - `full`: Install all extras and dev dependencies (`uv sync --all-extras --dev`)\n\nSee the [UV GitHub integration guide](https://docs.astral.sh/uv/guides/integration/github/) for more details."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.SetupPythonToUv"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.SetupPythonToUv"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/setuppythontouv.md"}
/>

<OptionsTable options={[{"type":"String","name":"uvVersion","required":false,"description":"The version of the `astral-sh/setup-uv` action to use. Defaults to `v6`.","example":"v6"},{"type":"String","name":"syncStrategy","required":false,"description":"Strategy for the `uv sync` command replacement.","example":"locked"},{"type":"Boolean","name":"transformPipCommands","required":false,"description":"Whether to transform `pip install` commands to `uv` equivalents:\n- `pip install -r requirements.txt` → `uv sync`\n- `pip install .` → `uv sync`\n- `python -m pytest` → `uv run pytest`\n\nWhen disabled, only the action itself is replaced. Defaults to `true`.","example":"true"},{"type":"Boolean","name":"enableCache","required":false,"description":"Whether to automatically convert `cache: 'pip'` to `enable-cache: 'true'` for UV's built-in caching. When disabled, cache settings are left unchanged. Defaults to `true`.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"uvVersion","value":"null"},{"parameter":"syncStrategy","value":"null"},{"parameter":"transformPipCommands","value":"null"},{"parameter":"enableCache","value":"null"}],"variants":[{"language":"yaml","before":"name: Test\n\non: [push]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'\n      - run: pip install -r requirements.txt\n      - run: python -m pytest\n","after":"name: Test\n\non: [push]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: astral-sh/setup-uv@v6\n        with:\n          python-version: '3.11'\n      - run: uv sync\n      - run: uv run pytest\n","diff":"--- .github/workflows/test.yml\n+++ .github/workflows/test.yml\n@@ -10,1 +10,1 @@\n    steps:\n      - uses: actions/checkout@v4\n-     - uses: actions/setup-python@v5\n+     - uses: astral-sh/setup-uv@v6\n        with:\n@@ -13,2 +13,2 @@\n        with:\n          python-version: '3.11'\n-     - run: pip install -r requirements.txt\n-     - run: python -m pytest\n+     - run: uv sync\n+     - run: uv run pytest\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.SetupPythonToUv","displayName":"Replace `actions/setup-python` with `astral-sh/setup-uv`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

