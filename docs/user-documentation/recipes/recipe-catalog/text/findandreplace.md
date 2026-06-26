---
title: "Find and replace"
sidebar_label: "Find and replace"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/text/findandreplace" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find and replace"}
  description={"Textual find and replace, optionally interpreting the search query as a Regular Expression (regex). When operating on source files that are language-specific Lossless Semantic Tree, such as Java or XML, this operation converts the source file to plain text for the rest of the recipe run. So if you are combining this recipe with language-specific recipes in a single recipe run put all the language-specific recipes before this recipe."}
  fqName={"org.openrewrite.text.FindAndReplace"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/text/FindAndReplace.java"}
/>

<RecipeHeader
  displayName={"Find and replace"}
  description={"Textual find and replace, optionally interpreting the search query as a Regular Expression (regex). When operating on source files that are language-specific Lossless Semantic Tree, such as Java or XML, this operation converts the source file to plain text for the rest of the recipe run. So if you are combining this recipe with language-specific recipes in a single recipe run put all the language-specific recipes before this recipe."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.text.FindAndReplace"}
  artifact={"org.openrewrite:rewrite-core"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.text.FindAndReplace"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/text/findandreplace.md"}
/>

<OptionsTable options={[{"type":"String","name":"find","required":true,"description":"The text to find (and replace). This snippet can be multiline.","example":"blacklist"},{"type":"String","name":"replace","required":false,"description":"The replacement text for `find`. This snippet can be multiline.","example":"denylist"},{"type":"Boolean","name":"regex","required":false,"description":"Default false. If true, `find` will be interpreted as a [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression), and capture group contents will be available in `replace`."},{"type":"Boolean","name":"caseSensitive","required":false,"description":"If `true` the search will be sensitive to case. Default `false`."},{"type":"Boolean","name":"multiline","required":false,"description":"When performing a regex search setting this to `true` allows \"^\" and \"$\" to match the beginning and end of lines, respectively. When performing a regex search when this is `false` \"^\" and \"$\" will match only the beginning and ending of the entire source file, respectively.Has no effect when not performing a regex search. Default `false`."},{"type":"Boolean","name":"dotAll","required":false,"description":"When performing a regex search setting this to `true` allows \".\" to match line terminators.Has no effect when not performing a regex search. Default `false`."},{"type":"String","name":"filePattern","required":false,"description":"A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, all source files are searched.","example":"**/*.java"},{"type":"Boolean","name":"plaintextOnly","required":false,"description":"Only alter files that are parsed as plaintext to prevent language-specific LST information loss. Defaults to false."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.text.FindAndReplace","displayName":"Find and replace","groupId":"org.openrewrite","artifactId":"rewrite-core","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_CORE","requiresConfiguration":true,"cliOptions":" --recipe-option \"find=blacklist\" --recipe-option \"replace=denylist\" --recipe-option \"filePattern='**/*.java'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

