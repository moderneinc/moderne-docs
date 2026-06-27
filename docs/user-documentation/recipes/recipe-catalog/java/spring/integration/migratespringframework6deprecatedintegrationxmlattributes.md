---
title: "Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"
sidebar_label: "Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"}
  description={"Renames or removes Spring Integration XML attributes that were deprecated or removed between Spring Integration 5.x and 6.x. Scoped to XML files using the Spring Integration namespace."}
  fqName={"io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","integration"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/integration/migratespringframework6deprecatedintegrationxmlattributes.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x</RecipeHeader.Title>

<RecipeHeader.Description>Renames or removes Spring Integration XML attributes that were deprecated or removed between Spring Integration 5.x and 6.x. Scoped to XML files using the Spring Integration namespace.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change XML attribute key","href":"/user-documentation/recipes/recipe-catalog/xml/changetagattributekey/"},{"name":"Change XML attribute","href":"/user-documentation/recipes/recipe-catalog/xml/changetagattribute/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"},{"name":"Add a comment to an XML tag","href":"/user-documentation/recipes/recipe-catalog/xml/addcommenttoxmltag/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"},{"name":"Find XML tags","href":"/user-documentation/recipes/recipe-catalog/xml/search/findtags/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n       xmlns:int-jdbc=\"http://www.springframework.org/schema/integration/jdbc\"\n       xsi:schemaLocation=\"http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd\n                           http://www.springframework.org/schema/integration/jdbc\n                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd\">\n    <int-jdbc:outbound-gateway request-channel=\"in\"\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n                               max-rows-per-poll=\"0\"/>\n</beans>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n       xmlns:int-jdbc=\"http://www.springframework.org/schema/integration/jdbc\"\n       xsi:schemaLocation=\"http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd\n                           http://www.springframework.org/schema/integration/jdbc\n                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd\">\n    <int-jdbc:outbound-gateway request-channel=\"in\"\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n                               max-rows=\"0\"/>\n</beans>\n","diff":"@@ -12,1 +12,1 @@\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n-                              max-rows-per-poll=\"0\"/>\n+                              max-rows=\"0\"/>\n</beans>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n       xmlns:int-jdbc=\"http://www.springframework.org/schema/integration/jdbc\"\n       xsi:schemaLocation=\"http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd\n                           http://www.springframework.org/schema/integration/jdbc\n                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd\">\n    <int-jdbc:outbound-gateway request-channel=\"in\"\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n                               max-rows-per-poll=\"0\"/>\n</beans>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n       xmlns:int-jdbc=\"http://www.springframework.org/schema/integration/jdbc\"\n       xsi:schemaLocation=\"http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd\n                           http://www.springframework.org/schema/integration/jdbc\n                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd\">\n    <int-jdbc:outbound-gateway request-channel=\"in\"\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n                               max-rows=\"0\"/>\n</beans>\n","diff":"@@ -12,1 +12,1 @@\n                               data-source=\"dataSource\"\n                               query=\"SELECT * FROM events WHERE id = :id\"\n-                              max-rows-per-poll=\"0\"/>\n+                              max-rows=\"0\"/>\n</beans>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes","displayName":"Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

