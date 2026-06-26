---
title: "Migrate GitLab template to component"
sidebar_label: "Migrate GitLab template to component"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gitlab/migratetemplatetocomponent" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate GitLab template to component"}
  description={"Replace a GitLab `template:` include with a `component:` include, as recommended by GitLab's CI/CD Catalog migration guides."}
  fqName={"org.openrewrite.gitlab.MigrateTemplateToComponent"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/java/org/openrewrite/gitlab/MigrateTemplateToComponent.java"}
/>

<RecipeHeader
  displayName={"Migrate GitLab template to component"}
  description={"Replace a GitLab `template:` include with a `component:` include, as recommended by GitLab's CI/CD Catalog migration guides."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.gitlab.MigrateTemplateToComponent"}
  artifact={"org.openrewrite.recipe:rewrite-gitlab"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gitlab.MigrateTemplateToComponent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gitlab/migratetemplatetocomponent.md"}
/>

<OptionsTable options={[{"type":"String","name":"oldTemplate","required":true,"description":"The name of the template to replace.","example":"Terraform/Base.latest.gitlab-ci.yml"},{"type":"String","name":"newComponent","required":true,"description":"Name of the component to use instead.","example":"$CI_SERVER_FQDN/components/opentofu/job-templates"},{"type":"String","name":"version","required":true,"description":"Version of the component to add.","example":"~latest"},{"type":"List","name":"inputs","required":false,"description":"The set of inputs to provide to the component.","example":"opentofu_version: 1.6.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldTemplate","value":"Terraform/Base.latest.gitlab-ci.yml"},{"parameter":"newComponent","value":"$CI_SERVER_FQDN/components/opentofu/job-templates"},{"parameter":"version","value":"~latest"},{"parameter":"inputs","value":"List.of(\"version: ~latest\", \"opentofu_version: 1.6.0\")"}],"variants":[{"language":"yaml","before":"include:\n  - template: Terraform/Base.latest.gitlab-ci.yml\n","after":"include:\n  - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest\n    inputs:\n      version: ~latest\n      opentofu_version: 1.6.0\n","diff":"--- .gitlab-ci.yml\n+++ .gitlab-ci.yml\n@@ -2,1 +2,4 @@\ninclude:\n- - template: Terraform/Base.latest.gitlab-ci.yml\n+ - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest\n+   inputs:\n+     version: ~latest\n+     opentofu_version: 1.6.0\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gitlab.MigrateTemplateToComponent","displayName":"Migrate GitLab template to component","groupId":"org.openrewrite.recipe","artifactId":"rewrite-gitlab","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldTemplate=Terraform/Base.latest.gitlab-ci.yml\" --recipe-option \"newComponent=$CI_SERVER_FQDN/components/opentofu/job-templates\" --recipe-option \"version=~latest\" --recipe-option \"inputs=opentofu_version: 1.6.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

