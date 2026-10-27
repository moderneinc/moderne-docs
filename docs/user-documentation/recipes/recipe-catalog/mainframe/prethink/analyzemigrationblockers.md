---
title: "Analyze the mainframe migration blockers"
sidebar_label: "Analyze the mainframe migration blockers"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Analyze the mainframe migration blockers"}
  description={"Record the CICS and IMS constructs that need a design decision before a program can move: non-local control flow, state that outlives a transaction, region affinity, resources named only at run time, and checkpoint/restart, with the whole `EXEC CICS` inventory beside them, which is what the size of the work is estimated from. `FindMainframeMigrationBlockers` and `FindCicsCommands` answer the same questions and mark what they found in the source; this one produces the tables and changes nothing."}
  fqName={"io.moderne.mainframe.prethink.AnalyzeMigrationBlockers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.prethink.AnalyzeMigrationBlockers"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.prethink.AnalyzeMigrationBlockers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/prethink/analyzemigrationblockers.md"}
  moderneOnly
>

<RecipeHeader.Title>Analyze the mainframe migration blockers</RecipeHeader.Title>

<RecipeHeader.Description>Record the CICS and IMS constructs that need a design decision before a program can move: non-local control flow, state that outlives a transaction, region affinity, resources named only at run time, and checkpoint/restart, with the whole `EXEC CICS` inventory beside them, which is what the size of the work is estimated from. `FindMainframeMigrationBlockers` and `FindCicsCommands` answer the same questions and mark what they found in the source; this one produces the tables and changes nothing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.prethink.AnalyzeMigrationBlockers","displayName":"Analyze the mainframe migration blockers","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.MainframeMigrationBlockers","displayName":"Mainframe migration blockers","description":"CICS and IMS constructs that need a design decision before a program can be moved.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"Paragraph","description":"The paragraph or section containing the construct."},{"name":"Category","description":"The kind of problem the construct poses."},{"name":"Construct","description":"The command or call that raised it."},{"name":"Detail","description":"What has to be decided, and why the construct does not carry over on its own."}]},{"name":"io.moderne.mainframe.analysis.table.CicsCommandUsages","displayName":"CICS command usages","description":"Every EXEC CICS command, with the options it was given.","columns":[{"name":"Program","description":"The COBOL program containing the command."},{"name":"Paragraph","description":"The paragraph or section containing the command."},{"name":"Command","description":"The CICS command, including its qualifier where it has one, such as `SEND MAP`."},{"name":"API group","description":"The CICS API the command belongs to, which is the unit a Java replacement is chosen for."},{"name":"Options","description":"The command's options and operands as written."}]},{"name":"io.moderne.mainframe.analysis.table.Findings","displayName":"Findings","description":"Everything the mainframe analyses found wrong, ranked, with the evidence for each and the line it is on. Sort on priority.","columns":[{"name":"Priority","description":"1 for `CRITICAL` down to 4 for `LOW`, so the table sorts."},{"name":"Severity","description":"`CRITICAL` for code that cannot do what it was written to do, `HIGH` for what will break a migration if not decided deliberately, `MEDIUM` for what is worth knowing first, `LOW` for cleanup."},{"name":"Category","description":"What kind of problem it is, which is what groups the report into sections: `DEAD_RULE`, `UNREACHABLE_CODE`, `COPYBOOK_DRIFT`, `MIGRATION_BLOCKER`, `RANGE_PATHOLOGY`, `DEAD_DATA`, `COMPLEXITY`, `LAYOUT_DRIFT`, `IMS_PCB_MISMATCH`, `IMS_SEGMENT_NOT_SENSITIVE`, `IMS_IO_AREA_MISMATCH`, `MFS_MESSAGE_LENGTH`, `SCREEN_ITEM_UNREACHED`, `SCREEN_FIELD_UNREACHED`, `PARSE_FAILURE`, `UNDOCUMENTED`, `STALE_DOCUMENTATION`, `STALE_REFERENCE`, `UNENFORCED_BUILD_ORDER`, `UNSCHEDULED_JOB`, `AUTOCALL_RESOLVED_REFERENCE`, `UNRESOLVED_EXECUTION_PATH`, `INHERITED_SETTING`, `UNLOAD_NEEDS_REDESIGN`, `UNLOAD_ACCESS_MODE`, `UNLOAD_CONSISTENCY`, `UNLOAD_OUTPUT_WIRING`, `MIXED_SUBSTITUTION`."},{"name":"Program","description":"The COBOL program, or the copybook where the finding is about one."},{"name":"Summary","description":"The finding in one sentence, written to be read on its own."},{"name":"Evidence","description":"Why this is claimed — the conditions that conflict, the two declarations that differ, the caller that made the paragraph unreachable. A finding nobody can check is a finding nobody will act on."},{"name":"Where","description":"The paragraph, section or data item the finding is in."},{"name":"Source path","description":"The file, so the finding can be opened."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

