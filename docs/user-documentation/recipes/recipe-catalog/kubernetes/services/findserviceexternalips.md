---
title: "Find uses of `externalIP`"
sidebar_label: "Find uses of `externalIP`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find uses of `externalIP`"}
  description={"Find any `Service` whose `externalIP` list contains, or does not contain, one of a list of IPs."}
  fqName={"org.openrewrite.kubernetes.services.FindServiceExternalIPs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.services.FindServiceExternalIPs"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.services.FindServiceExternalIPs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/services/findserviceexternalips.md"}
  moderneOnly
>

<RecipeHeader.Title>Find uses of `externalIP`</RecipeHeader.Title>

<RecipeHeader.Description>Find any `Service` whose `externalIP` list contains, or does not contain, one of a list of IPs.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Set","name":"externalIPs","required":true,"description":"The list of IP addresses of which at least one external IP should match.","example":"192.168.0.1"},{"type":"Boolean","name":"findMissing","required":false,"description":"Whether to treat this search as finding Services whose externalIPs do not contain any of the query IPs."},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"externalIPs","value":"Set.of(\"192.168.0.1\", \"10.10.10.10\")"},{"parameter":"findMissing","value":"false"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  externalIPs:\n    - 192.168.0.1\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  externalIPs:\n    - 10.10.10.1\n","after":"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  ~~(found ip)~~>externalIPs:\n    - 192.168.0.1\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  externalIPs:\n    - 10.10.10.1\n","diff":"@@ -13,1 +13,1 @@\n      port: 80\n      targetPort: 9376\n- externalIPs:\n+ ~~(found ip)~~>externalIPs:\n    - 192.168.0.1\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.services.FindServiceExternalIPs","displayName":"Find uses of `externalIP`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"externalIPs=192.168.0.1\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

