---
title: "Compare the copies of a member across environments"
sidebar_label: "Compare the copies of a member across environments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Compare the copies of a member across environments"}
  description={"Record every member an environment library holds a copy of, one row from each copy to each of the others, saying whether the two still agree and by how many lines they differ, and a `COPIED_TO` relationship between the two copies as library members. A bind deck differing only in the DB2 subsystem it binds on, the collection its packages land in and the library it reads its DBRMs from is reported as bound elsewhere rather than as drift. `FindEnvironmentCopies` answers the same question and marks each copy in the source; this one produces the tables and changes nothing."}
  fqName={"io.moderne.mainframe.inventory.AnalyzeEnvironmentCopies"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.inventory.AnalyzeEnvironmentCopies"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.inventory.AnalyzeEnvironmentCopies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/inventory/analyzeenvironmentcopies.md"}
  moderneOnly
>

<RecipeHeader.Title>Compare the copies of a member across environments</RecipeHeader.Title>

<RecipeHeader.Description>Record every member an environment library holds a copy of, one row from each copy to each of the others, saying whether the two still agree and by how many lines they differ, and a `COPIED_TO` relationship between the two copies as library members. A bind deck differing only in the DB2 subsystem it binds on, the collection its packages land in and the library it reads its DBRMs from is reported as bound elsewhere rather than as drift. `FindEnvironmentCopies` answers the same question and marks each copy in the source; this one produces the tables and changes nothing.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"layout","required":false,"description":"Which folders of a path say where a member is held. A segment written as itself is matched as itself, `{environment}` takes the segment naming the environment and `{application}` the one naming the application whose library it is, and what is left of the path is the member. Defaults to `environments/{environment}`, which reads `environments/PROD/ctlcard/SRTCLM01.ctl` as `ctlcard/SRTCLM01.ctl` in `PROD`. A shop keeping a library per application per environment writes `{application}/{environment}` instead.","example":"{application}/{environment}"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.inventory.AnalyzeEnvironmentCopies","displayName":"Compare the copies of a member across environments","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"layout='{application}/{environment}'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.EnvironmentCopies","displayName":"Environment copies","description":"The same member held in more than one environment's libraries, and whether the copies still agree. Read from one copy's side, so a member promoted through three environments has a row from each of the three to each of the other two.","columns":[{"name":"Member","description":"The member name both copies answer to."},{"name":"Component type","description":"What the member is, in the types of `ComponentIndex`. Empty for a plain text member no DD names, which the portfolio has no type for."},{"name":"Environment","description":"The environment this copy is held in, as the segment of its path that names one: `SLPROD`, `PREPROD`, `PROD`."},{"name":"Source path","description":"This copy's file."},{"name":"Owning application","description":"The application whose library this is, where the layout says which segment names it. Empty where an environment holds one library for the whole site, which is what the default layout reads."},{"name":"Other environment","description":"The environment the copy this row compares against is held in."},{"name":"Other source path","description":"That copy's file."},{"name":"Comparison","description":"`IDENTICAL` where the two are the same line for line, `ENVIRONMENT_NAMES` where a bind deck differs only in the subsystem, collection and DBRM library it binds on, and `DIVERGED` where they differ anywhere else. Only the last is drift somebody has to answer for."},{"name":"Differing lines","description":"How many of this copy's lines the other copy has not. Lines are matched wherever they sit, so a card moved is not a difference and a card changed is one on each side. Counted as written, so a bind deck bound on another subsystem has differing lines and no drift."}]},{"name":"org.openrewrite.mainframe.cobol.table.CobolRelationships","displayName":"COBOL relationships","description":"Relationships between different COBOL resources.","columns":[{"name":"Dependent","description":"The resource that defines the relationship."},{"name":"Dependent type","description":"The resource type of the resource that defines the relationship."},{"name":"Action","description":"The action that links the dependent and dependency."},{"name":"Dependency","description":"The resource that is exercised or linked to."},{"name":"Dependency type","description":"The resource type of the resource that is exercised or linked to."},{"name":"Dependency missing","description":"Indicates whether the dependency is a known resource."},{"name":"Action metadata","description":"Additional data about the action."},{"name":"Dependent path","description":"The source file the dependent's statement was written in, or null when the dependent is a name that has no source here."},{"name":"Dependent line","description":"The one-based line the dependent's statement was written on, or null when it has no source here."},{"name":"Dependency path","description":"The source file the dependency was written in, or null when the dependency is a name that has no source here, such as a vendor copybook."},{"name":"Dependency line","description":"The one-based line the dependency's statement was written on, or null when the dependency is a whole file rather than a statement within one."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

