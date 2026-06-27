---
title: "Add RBAC rules"
sidebar_label: "Add RBAC rules"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add RBAC rules"}
  description={"Add RBAC rules to ClusterRoles or namespaced Roles."}
  fqName={"org.openrewrite.kubernetes.rbac.AddRuleToRole"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.rbac.AddRuleToRole"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.rbac.AddRuleToRole"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/rbac/addruletorole.md"}
  moderneOnly
>

<RecipeHeader.Title>Add RBAC rules</RecipeHeader.Title>

<RecipeHeader.Description>Add RBAC rules to ClusterRoles or namespaced Roles.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"rbacResourceType","required":true,"description":"Type of RBAC resource to which this recipe adds a rule.","example":"ClusterRole"},{"type":"String","name":"rbacResourceName","required":true,"description":"Glob pattern of the name of the RBAC resource to which this recipe adds a rule.","example":"my-cluster-role"},{"type":"Set","name":"apiGroups","required":true,"description":"Comma-separated list of API groups to which this rule refers.","example":",v1"},{"type":"Set","name":"resources","required":true,"description":"Comma-separated list of Kubernetes resource types to which this rule refers.","example":"pods"},{"type":"Set","name":"resourceNames","required":false,"description":"Comma-separated list of names of Kubernetes resources to which this rule applies.","example":"my-pod"},{"type":"Set","name":"verbs","required":true,"description":"The API verbs to enable with this rule.","example":"get,list"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"rbacResourceType","value":"ClusterRole"},{"parameter":"rbacResourceName","value":"cluster-role"},{"parameter":"apiGroups","value":"Set.of(\"\")"},{"parameter":"resources","value":"Set.of(\"pods\")"},{"parameter":"resourceNames","value":"null"},{"parameter":"verbs","value":"Set.of(\"update\")"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: default\n  name: namespaced-role\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cluster-role\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"list\"]\n","after":"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: default\n  name: namespaced-role\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cluster-role\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"list\"]\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"update\"]\n","diff":"@@ -19,0 +19,3 @@\n  resources: [\"pods\"]\n  verbs: [\"list\"]\n+- apiGroups: [\"\"]\n+ resources: [\"pods\"]\n+ verbs: [\"update\"]\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.rbac.AddRuleToRole","displayName":"Add RBAC rules","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"rbacResourceType=ClusterRole\" --recipe-option \"rbacResourceName=my-cluster-role\" --recipe-option \"apiGroups=,v1\" --recipe-option \"resources=pods\" --recipe-option \"resourceNames=my-pod\" --recipe-option \"verbs=get,list\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

