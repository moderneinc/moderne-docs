---
title: "Best practices for GCP"
sidebar_label: "Best practices for GCP"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Best practices for GCP"}
  description={"Securely operate on Google Cloud Platform."}
  fqName={"org.openrewrite.terraform.gcp.GCPBestPractices"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["GCP","terraform"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.terraform.gcp.GCPBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-terraform"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.terraform.gcp.GCPBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/terraform/gcp/gcpbestpractices.md"}
  moderneOnly
>

<RecipeHeader.Title>Best practices for GCP</RecipeHeader.Title>

<RecipeHeader.Description>Securely operate on Google Cloud Platform.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Ensure GCP Kubernetes cluster node auto-repair configuration is enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesclusternodeautorepairconfigurationisenabled/"},{"name":"Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/enablepodsecuritypolicycontrollerongkeclusters/"},{"name":"Ensure private cluster is enabled when creating Kubernetes clusters","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureprivateclusterisenabledwhencreatingkubernetesclusters/"},{"name":"Enable VPC Flow Logs for subnetworks","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsforsubnetworks/"},{"name":"Ensure GCP cloud storage bucket with uniform bucket-level access are enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpcloudstoragebucketwithuniformbucketlevelaccessareenabled/"},{"name":"Ensure GCP VM instances have block project-wide SSH keys feature enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpvminstanceshaveblockprojectwidesshkeysfeatureenabled/"},{"name":"Ensure IP forwarding on instances is disabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureipforwardingoninstancesisdisabled/"},{"name":"Ensure compute instances launch with shielded VM enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurecomputeinstanceslaunchwithshieldedvmenabled/"},{"name":"Enable VPC flow logs and intranode visibility","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsandintranodevisibility/"},{"name":"Ensure binary authorization is used","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurebinaryauthorizationisused/"},{"name":"Ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesengineclustershavelegacycomputeenginemetadataendpointsdisabled/"},{"name":"Ensure secure boot for shielded GKE nodes is enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuresecurebootforshieldedgkenodesisenabled/"},{"name":"Ensure the GKE metadata server is enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurethegkemetadataserverisenabled/"},{"name":"Ensure shielded GKE nodes are enabled","href":"/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureshieldedgkenodesareenabled/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.terraform.gcp.GCPBestPractices","displayName":"Best practices for GCP","groupId":"org.openrewrite.recipe","artifactId":"rewrite-terraform","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

