---
title: "Find endpoint security"
sidebar_label: "Find endpoint security"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find endpoint security"}
  description={"Per-endpoint security requirements (roles, scopes, raw expressions) extracted from @PreAuthorize/@Secured/@RolesAllowed/@PermitAll annotations at method or class level. Joins to service-endpoints.csv via endpointId."}
  fqName={"io.moderne.prethink.calm.FindEndpointSecurity"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find endpoint security"}
  description={"Per-endpoint security requirements (roles, scopes, raw expressions) extracted from @PreAuthorize/@Secured/@RolesAllowed/@PermitAll annotations at method or class level. Joins to service-endpoints.csv via endpointId."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindEndpointSecurity"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindEndpointSecurity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/findendpointsecurity.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\nimport org.springframework.web.bind.annotation.*;\nimport jakarta.annotation.security.PermitAll;\n\n@RestController\npublic class C {\n    @GetMapping(\"/p\")\n    @PermitAll\n    public String p() { return \"\"; }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindEndpointSecurity","displayName":"Find endpoint security","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.EndpointSecurity","displayName":"Endpoint security","description":"Per-endpoint security requirements: roles, scopes, and the raw SpEL/permission expressions from @PreAuthorize/@Secured/@RolesAllowed at method or class level.","columns":[{"name":"Endpoint ID","description":"Join key matching the 'Entity ID' column of service-endpoints.csv."},{"name":"Scope kind","description":"Where the security rule was declared: 'method' (on the handler) or 'class' (on the controller)."},{"name":"Scheme type","description":"Detected scheme: 'role' (hasRole/RolesAllowed/Secured), 'authority/scope' (hasAuthority/hasAnyAuthority - typically OAuth2 scopes), 'permitted' (PermitAll), 'denied' (DenyAll), 'expression' (other SpEL)."},{"name":"Roles","description":"Comma-separated role literals extracted from the expression, else null."},{"name":"Scopes","description":"Comma-separated scope/authority literals extracted from the expression, else null."},{"name":"Expression","description":"Raw SpEL or annotation argument value."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

