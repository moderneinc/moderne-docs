---
title: "Migrate from JavaX to Jakarta EE 9.1 Namespaces"
sidebar_label: "Migrate from JavaX to Jakarta EE 9.1 Namespaces"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/oracle/weblogic/rewrite/jakarta/jakartaeenamespaces9_1" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from JavaX to Jakarta EE 9.1 Namespaces"}
  description={"These recipes help with Migration From JavaX to Jakarta EE 9.1 Namespaces."}
  fqName={"com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["jakartaee","weblogic","migration","jakarta","namespaces"]}
  license={"Apache License Version 2.0"}
  fqName={"com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/jakartaeenamespaces9_1.md"}
>

<RecipeHeader.Title>Migrate from JavaX to Jakarta EE 9.1 Namespaces</RecipeHeader.Title>

<RecipeHeader.Description>These recipes help with Migration From JavaX to Jakarta EE 9.1 Namespaces.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate xmlns entries in `handler.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxwebhandlerxmltojakarta9handlerxml/"},{"name":"Migrate xmlns entries in `batch.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxbatchxmltojakarta9batchxml/"},{"name":"Migrate xmlns entries in `beans.xml` files for Beans 3.0.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxbeansxmltojakarta9beansxml/"},{"name":"Migrate xmlns entries in `**/batch-jobs/*.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxbatchjobsxmlstojakarta9batchjobsxmls/"},{"name":"Migrate xmlns entries in `application.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxapplicationxmltojakarta9applicationxml/"},{"name":"Migrate xmlns entries in `application-client.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxapplicationclientxmltojakarta9applicationclientxml/"},{"name":"Migrate xmlns entries in `ra.xml` files (Connectors).","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxraxmltojakarta9raxml/"},{"name":"Migrate xmlns entries in `ejb-jar.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxejbjarxmltojakarta9ejbjarxml/"},{"name":"Migrate xmlns entries in `webservices.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxwebservicesxmltojakarta9webservicesxml/"},{"name":"Migrate xmlns entries in `permissions.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxpermissionsxmltojakarta9permissionsxml/"},{"name":"Migrate xmlns entries in `*.tld` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxwebjsptaglibrarytldstojakarta9webjsptaglibrarytlds/"},{"name":"Migrate xmlns entries in `*.xjb` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxbindingsschemaxjbstojakarta9bindingsschemaxjbs/"},{"name":"Migrate xmlns entries in `**/validation/*.xml` files.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxvalidationmappingxmlstojakarta9validationmappingxmls/"},{"name":"Migrate xmlns entries and javax. packages in `validation.xml` files","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml/"},{"name":"Migrate xmlns entries in `test-*.xml` files for Jakarta EE 9.1 using test interfaces","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxtestxmlstojakartatestsxmls/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1","displayName":"Migrate from JavaX to Jakarta EE 9.1 Namespaces","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

