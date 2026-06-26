---
title: "Separate `application.properties` by profile"
sidebar_label: "Separate `application.properties` by profile"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/separateapplicationpropertiesbyprofile" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Separate `application.properties` by profile"}
  description={"Separating `application.properties` into separate files based on profiles."}
  fqName={"org.openrewrite.java.spring.SeparateApplicationPropertiesByProfile"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/SeparateApplicationPropertiesByProfile.java"}
/>

<RecipeHeader
  displayName={"Separate `application.properties` by profile"}
  description={"Separating `application.properties` into separate files based on profiles."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.SeparateApplicationPropertiesByProfile"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.SeparateApplicationPropertiesByProfile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/separateapplicationpropertiesbyprofile.md"}
/>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"parent"},"variants":[{"language":"properties","before":"","after":"app.config.currentEnvironment=LOCAL\n","newFile":true},{"language":"properties","before":"line1=line1\n","after":"line1=line1\noauth2.clientId=9999999999999999999999\nservice.domainUrl= https://this.is.my.dev.url.com\napp.config.currentEnvironment=DEV\n","diff":"--- application-dev.properties\n+++ application-dev.properties\n@@ -2,0 +2,3 @@\nline1=line1\n+oauth2.clientId=9999999999999999999999\n+service.domainUrl= https://this.is.my.dev.url.com\n+app.config.currentEnvironment=DEV\n\n","newFile":false},{"language":"properties","before":"spring.application.name=Openrewrite-PR-Service\n#PR-Service\nbase-url.PR-services=http://my.url.com\nexchange-token=1234567890\nexchange-tokens=${base-url.PR-services}/exchange-token\n!---\nspring.config.activate.on-profile=dev\noauth2.clientId=9999999999999999999999\nservice.domainUrl= https://this.is.my.dev.url.com\napp.config.currentEnvironment=DEV\n#---\nspring.config.activate.on-profile=local\napp.config.currentEnvironment=LOCAL\n\n\n#---\n#### XX Configuration ####\nspring.config.activate.on-profile=prod\noauth2.clientId=77777777777777\nservice.domainUrl=https://this.is.my.prod.url.com\n","after":"spring.application.name=Openrewrite-PR-Service\n#PR-Service\nbase-url.PR-services=http://my.url.com\nexchange-token=1234567890\nexchange-tokens=${base-url.PR-services}/exchange-token\n","diff":"--- application.properties\n+++ application.properties\n@@ -6,8 +6,0 @@\nexchange-token=1234567890\nexchange-tokens=${base-url.PR-services}/exchange-token\n-!---\n-spring.config.activate.on-profile=dev\n-oauth2.clientId=9999999999999999999999\n-service.domainUrl= https://this.is.my.dev.url.com\n-app.config.currentEnvironment=DEV\n-#---\n-spring.config.activate.on-profile=local\n-app.config.currentEnvironment=LOCAL\n\n@@ -15,7 +7,0 @@\napp.config.currentEnvironment=LOCAL\n\n-\n-#---\n-#### XX Configuration ####\n-spring.config.activate.on-profile=prod\n-oauth2.clientId=77777777777777\n-service.domainUrl=https://this.is.my.prod.url.com\n-\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.SeparateApplicationPropertiesByProfile","displayName":"Separate `application.properties` by profile","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

