---
title: "Find similar code"
sidebar_label: "Find similar code"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find similar code"}
  description={"Detect structurally similar (but not identical) methods with MinHash/LSH near-duplicate matching over their AST shingles (zero AI), reporting an approximate similarity percentage. Complements exact duplicate detection by surfacing restructured near-duplicates worth consolidating."}
  fqName={"io.moderne.prethink.quality.FindSimilarCode"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.quality.FindSimilarCode"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.quality.FindSimilarCode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/quality/findsimilarcode.md"}
  moderneOnly
>

<RecipeHeader.Title>Find similar code</RecipeHeader.Title>

<RecipeHeader.Description>Detect structurally similar (but not identical) methods with MinHash/LSH near-duplicate matching over their AST shingles (zero AI), reporting an approximate similarity percentage. Complements exact duplicate detection by surfacing restructured near-duplicates worth consolidating.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Integer","name":"similarityThreshold","required":false,"description":"Minimum Jaccard similarity (as a percentage) for two methods to be considered similar. Defaults to 70.","example":"70"},{"type":"Integer","name":"maxSimilarity","required":false,"description":"Maximum similarity (percentage) to report. Pairs more similar than this are exact or near-exact duplicates that exact clone detection already covers, so they are excluded here. Defaults to 99; set to 100 to include perfect matches.","example":"99"},{"type":"Integer","name":"minMethodMass","required":false,"description":"Minimum number of AST nodes a method must contain to be considered. Smaller methods have too few features for a meaningful similarity signal. Defaults to 40.","example":"40"},{"type":"Integer","name":"minFeatures","required":false,"description":"Minimum number of distinct AST shingles a method must have to be considered. Defaults to 8.","example":"8"},{"type":"Integer","name":"minShingleMass","required":false,"description":"Minimum number of AST nodes a subtree must contain to be used as a shingle (feature). Defaults to 3.","example":"3"},{"type":"Boolean","name":"includeTestSources","required":false,"description":"Whether to include test sources (paths under src/test). Defaults to false.","example":"false"},{"type":"Boolean","name":"suppressBoilerplate","required":false,"description":"Whether to skip getters/setters, equals/hashCode/toString, and all-trivial methods. Defaults to true.","example":"true"},{"type":"Integer","name":"snippetMaxLines","required":false,"description":"Maximum number of lines of the representative method to include in the snippet. Defaults to 40.","example":"40"},{"type":"Integer","name":"maxMembersPerGroup","required":false,"description":"Cap on the number of member methods listed per group. Defaults to 200.","example":"200"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"similarityThreshold","value":"50"},{"parameter":"maxSimilarity","value":"99"},{"parameter":"minMethodMass","value":"15"},{"parameter":"minFeatures","value":"3"},{"parameter":"minShingleMass","value":"3"},{"parameter":"includeTestSources","value":"false"},{"parameter":"suppressBoilerplate","value":"true"},{"parameter":"snippetMaxLines","value":"40"},{"parameter":"maxMembersPerGroup","value":"200"}],"unchanged":{"language":"java","code":"package com.example;\n\npublic class SimA {\n    public int summarize(java.util.List<String> items) {\n        int total = 0;\n        int count = 0;\n        for (String s : items) {\n            total = total + s.length();\n            count = count + 1;\n        }\n        return total - count;\n    }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.quality.FindSimilarCode","displayName":"Find similar code","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.SimilarCode","displayName":"Similar code","description":"Groups of structurally similar methods detected by MinHash/LSH near-duplicate matching, with an approximate similarity percentage. Complements exact duplicate detection by finding restructured near-duplicates.","columns":[{"name":"Similar group id","description":"Stable identifier for the group of similar methods."},{"name":"Method count","description":"Number of similar methods in the group."},{"name":"Similarity","description":"Average pairwise similarity (Jaccard over AST shingles, as a percentage) of the verified edges that formed the group."},{"name":"Source path","description":"Path of the representative method."},{"name":"Type","description":"Fully qualified name of the class enclosing the representative method."},{"name":"Method","description":"Name of the representative method."},{"name":"Snippet","description":"The representative method, truncated for large fragments."},{"name":"Lines","description":"Line count of the representative method."},{"name":"Members","description":"Newline-separated list of the similar methods (path :: enclosingType#method)."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

