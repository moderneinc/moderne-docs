---
title: "Migrate `HorizontalPodAutoscaler` to `autoscaling/v2`"
sidebar_label: "Migrate `HorizontalPodAutoscaler` to `autoscaling/v2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `HorizontalPodAutoscaler` to `autoscaling/v2`"}
  description={"Move `HorizontalPodAutoscaler` off the `autoscaling` beta APIs — `v2beta1`, removed in Kubernetes v1.25, and `v2beta2`, removed in v1.26 — onto `autoscaling/v2`, restructuring the metric targets `v2beta1` wrote inline.\n\n`v2beta2` is `autoscaling/v2` under another name, so those resources only change version. A `v2beta1` resource is rewritten the way the apiserver itself converted it: `targetAverageUtilization` becomes `target.averageUtilization` under `target.type: Utilization` and `targetAverageValue` becomes `target.averageValue` under `target.type: AverageValue`; `metricName` and its selector become the `metric` identifier; and for an `object` metric the `target` naming the described object becomes `describedObject`, freeing `target` for the metric target built from `targetValue` and `averageValue`.\n\nA metric that sets a combination `autoscaling/v2` validation rejects — a resource metric targeting both a utilization and a raw value, or an external metric targeting both a total and a per-pod value — is left on its old API version and marked with the reason."}
  fqName={"org.openrewrite.kubernetes.migrate.MigrateHorizontalPodAutoscalerToV2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.migrate.MigrateHorizontalPodAutoscalerToV2"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.migrate.MigrateHorizontalPodAutoscalerToV2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/migrate/migratehorizontalpodautoscalertov2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `HorizontalPodAutoscaler` to `autoscaling/v2`</RecipeHeader.Title>

<RecipeHeader.Description>Move `HorizontalPodAutoscaler` off the `autoscaling` beta APIs — `v2beta1`, removed in Kubernetes v1.25, and `v2beta2`, removed in v1.26 — onto `autoscaling/v2`, restructuring the metric targets `v2beta1` wrote inline.  `v2beta2` is `autoscaling/v2` under another name, so those resources only change version. A `v2beta1` resource is rewritten the way the apiserver itself converted it: `targetAverageUtilization` becomes `target.averageUtilization` under `target.type: Utilization` and `targetAverageValue` becomes `target.averageValue` under `target.type: AverageValue`; `metricName` and its selector become the `metric` identifier; and for an `object` metric the `target` naming the described object becomes `describedObject`, freeing `target` for the metric target built from `targetValue` and `averageValue`.  A metric that sets a combination `autoscaling/v2` validation rejects — a resource metric targeting both a utilization and a raw value, or an external metric targeting both a total and a per-pod value — is left on its old API version and marked with the reason.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/hpa-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: web\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: web\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        targetAverageUtilization: 50\n    - type: Resource\n      resource:\n        name: memory\n        targetAverageValue: 100Mi\n    - type: Pods\n      pods:\n        metricName: packets-per-second\n        targetAverageValue: 1k\n    - type: Object\n      object:\n        target:\n          apiVersion: networking.k8s.io/v1\n          kind: Ingress\n          name: main-route\n        metricName: requests-per-second\n        targetValue: 10k\n    - type: External\n      external:\n        metricName: queue_messages_ready\n        metricSelector:\n          matchLabels:\n            queue: worker_tasks\n        targetAverageValue: 30\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: web\n","after":"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: web\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: web\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 50\n    - type: Resource\n      resource:\n        name: memory\n        target:\n          type: AverageValue\n          averageValue: 100Mi\n    - type: Pods\n      pods:\n        metric:\n          name: packets-per-second\n        target:\n          type: AverageValue\n          averageValue: 1k\n    - type: Object\n      object:\n        describedObject:\n          apiVersion: networking.k8s.io/v1\n          kind: Ingress\n          name: main-route\n        metric:\n          name: requests-per-second\n        target:\n          type: Value\n          value: 10k\n    - type: External\n      external:\n        metric:\n          name: queue_messages_ready\n          selector:\n            matchLabels:\n              queue: worker_tasks\n        target:\n          type: AverageValue\n          averageValue: 30\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: web\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: autoscaling/v2beta1\n+apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\n@@ -16,1 +16,3 @@\n      resource:\n        name: cpu\n-       targetAverageUtilization: 50\n+       target:\n+         type: Utilization\n+         averageUtilization: 50\n    - type: Resource\n@@ -20,1 +22,3 @@\n      resource:\n        name: memory\n-       targetAverageValue: 100Mi\n+       target:\n+         type: AverageValue\n+         averageValue: 100Mi\n    - type: Pods\n@@ -23,2 +27,5 @@\n    - type: Pods\n      pods:\n-       metricName: packets-per-second\n-       targetAverageValue: 1k\n+       metric:\n+         name: packets-per-second\n+       target:\n+         type: AverageValue\n+         averageValue: 1k\n    - type: Object\n@@ -27,1 +34,1 @@\n    - type: Object\n      object:\n-       target:\n+       describedObject:\n          apiVersion: networking.k8s.io/v1\n@@ -31,2 +38,5 @@\n          kind: Ingress\n          name: main-route\n-       metricName: requests-per-second\n-       targetValue: 10k\n+       metric:\n+         name: requests-per-second\n+       target:\n+         type: Value\n+         value: 10k\n    - type: External\n@@ -35,5 +45,8 @@\n    - type: External\n      external:\n-       metricName: queue_messages_ready\n-       metricSelector:\n-         matchLabels:\n-           queue: worker_tasks\n-       targetAverageValue: 30\n+       metric:\n+         name: queue_messages_ready\n+         selector:\n+           matchLabels:\n+             queue: worker_tasks\n+       target:\n+         type: AverageValue\n+         averageValue: 30\n---\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.migrate.MigrateHorizontalPodAutoscalerToV2","displayName":"Migrate `HorizontalPodAutoscaler` to `autoscaling/v2`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

