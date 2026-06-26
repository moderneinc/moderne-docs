---
title: "Update image name"
sidebar_label: "Update image name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update image name"}
  description={"Search for image names that match patterns and replace the components of the name with new values."}
  fqName={"org.openrewrite.kubernetes.UpdateContainerImageName"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Update image name"}
  description={"Search for image names that match patterns and replace the components of the name with new values."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.UpdateContainerImageName"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.UpdateContainerImageName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/updatecontainerimagename.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"repoToFind","required":false,"description":"The repository part of the image name to search for in containers and initContainers.","example":"gcr.io"},{"type":"String","name":"imageToFind","required":true,"description":"The image name to search for in containers and initContainers.","example":"nginx"},{"type":"String","name":"tagToFind","required":false,"description":"The tag part of the image name to search for in containers and initContainers.","example":"v1.2.3"},{"type":"String","name":"digestToFind","required":false,"description":"The digest part of the image name to search for in containers and initContainers.","example":"sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229"},{"type":"String","name":"repoToUpdate","required":false,"description":"The repository part of the image name to update to in containers and initContainers.","example":"gcr.io/account/bucket"},{"type":"String","name":"imageToUpdate","required":false,"description":"The image name to update to in containers and initContainers.","example":"nginx"},{"type":"String","name":"tagToUpdate","required":false,"description":"The tag part of the image name to update to in containers and initContainers.","example":"v1.2.3"},{"type":"String","name":"digestToUpdate","required":false,"description":"The digest part of the image name to update to in containers and initContainers.","example":"sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229"},{"type":"boolean","name":"includeInitContainers","required":false,"description":"Boolean to indicate whether or not to treat initContainers/image identically to containers/image.","example":"false"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"repoToFind","value":"null"},{"parameter":"imageToFind","value":"nginx"},{"parameter":"tagToFind","value":"null"},{"parameter":"digestToFind","value":"null"},{"parameter":"repoToUpdate","value":"gcr.io/myaccount/myrepo"},{"parameter":"imageToUpdate","value":"nginx-custom"},{"parameter":"tagToUpdate","value":"latest"},{"parameter":"digestToUpdate","value":"null"},{"parameter":"includeInitContainers","value":"false"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: v1\nkind: Pod\nspec:\n    containers:\n    - image: nginx\n---\napiVersion: v1\nkind: Pod\nspec:\n    containers:\n    - image: gcr.io/myaccount/myrepo/nginx\n    initContainers:\n    - image: gcr.io/myaccount/myrepo/myinit:latest\n","after":"apiVersion: v1\nkind: Pod\nspec:\n    containers:\n    - image: gcr.io/myaccount/myrepo/nginx-custom:latest\n---\napiVersion: v1\nkind: Pod\nspec:\n    containers:\n    - image: gcr.io/myaccount/myrepo/nginx\n    initContainers:\n    - image: gcr.io/myaccount/myrepo/myinit:latest\n","diff":"@@ -5,1 +5,1 @@\nspec:\n    containers:\n-   - image: nginx\n+   - image: gcr.io/myaccount/myrepo/nginx-custom:latest\n---\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.UpdateContainerImageName","displayName":"Update image name","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"repoToFind=gcr.io\" --recipe-option \"imageToFind=nginx\" --recipe-option \"tagToFind=v1.2.3\" --recipe-option \"digestToFind=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229\" --recipe-option \"repoToUpdate=gcr.io/account/bucket\" --recipe-option \"imageToUpdate=nginx\" --recipe-option \"tagToUpdate=v1.2.3\" --recipe-option \"digestToUpdate=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229\" --recipe-option \"includeInitContainers=false\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

