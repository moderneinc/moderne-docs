---
title: "Find Python types"
sidebar_label: "Find Python types"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Python types"}
  description={"Find type references by name. Identifies classes matching a type pattern. In Python, all type definitions use the `class` keyword, covering regular classes, abstract base classes, protocols, enums, dataclasses, named tuples, typed dicts, and more."}
  fqName={"org.openrewrite.python.migrate.FindTypes"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindTypes"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindTypes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findtypes.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Python types</RecipeHeader.Title>

<RecipeHeader.Description>Find type references by name. Identifies classes matching a type pattern. In Python, all type definitions use the `class` keyword, covering regular classes, abstract base classes, protocols, enums, dataclasses, named tuples, typed dicts, and more.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"typeName","required":true,"description":"A type name used to find matching type references. Can be a simple class name (e.g., `OrderedDict`) or a module-qualified name (e.g., `collections.OrderedDict`). Simple names match against the class name only, while qualified names match against the full module path. Supports glob expressions. `collections..*` finds every type from every submodule of the `collections` module.","example":"OrderedDict"},{"type":"Boolean","name":"checkAssignability","required":false,"description":"When enabled, find type references that are assignable to (i.e., subclasses of) the provided type."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"typeName","value":"OrderedDict"},{"parameter":"checkAssignability","value":"null"}],"variants":[{"language":"python","before":"from collections import OrderedDict\nx = OrderedDict()\n","after":"from collections import OrderedDict\nx = /*~~>*/OrderedDict()\n","diff":"@@ -2,1 +2,1 @@\nfrom collections import OrderedDict\n-x = OrderedDict()\n+x = /*~~>*/OrderedDict()\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindTypes","displayName":"Find Python types","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","requiresConfiguration":true,"cliOptions":" --recipe-option \"typeName=OrderedDict\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.table.TypeUses","displayName":"Type uses","description":"The source code of matching type uses.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Source","description":"The source code of the type use."},{"name":"Concrete type","description":"The concrete type in use, which may be a subtype of a searched type."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

