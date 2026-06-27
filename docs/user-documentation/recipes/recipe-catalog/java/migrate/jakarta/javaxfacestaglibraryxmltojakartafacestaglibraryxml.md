---
title: "Migrate xmlns entries in `taglib.xml` files"
sidebar_label: "Migrate xmlns entries in `taglib.xml` files"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate xmlns entries in `taglib.xml` files"}
  description={"Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation."}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-3.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["faces","jsf","jakarta"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml.md"}
>

<RecipeHeader.Title>Migrate xmlns entries in `taglib.xml` files</RecipeHeader.Title>

<RecipeHeader.Description>Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change XML attribute","href":"/user-documentation/recipes/recipe-catalog/xml/changetagattribute/"},{"name":"Change XML attribute","href":"/user-documentation/recipes/recipe-catalog/xml/changetagattribute/"},{"name":"Change XML attribute","href":"/user-documentation/recipes/recipe-catalog/xml/changetagattribute/"},{"name":"Find and replace","href":"/user-documentation/recipes/recipe-catalog/text/findandreplace/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<facelet-taglib version=\"1.0\"\n                xmlns=\"http://java.sun.com/xml/ns/javaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-facelettaglibrary_1.0.xsd\">\n    <function>\n        <function-name>getFileContent</function-name>\n        <function-class>javax.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n    </function>\n</facelet-taglib>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<facelet-taglib version=\"3.0\"\n                xmlns=\"https://jakarta.ee/xml/ns/jakartaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-facelettaglibrary_3_0.xsd\">\n    <function>\n        <function-name>getFileContent</function-name>\n        <function-class>jakarta.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n    </function>\n</facelet-taglib>\n","diff":"--- faces-taglib.xml\n+++ faces-taglib.xml\n@@ -2,2 +2,2 @@\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n-<facelet-taglib version=\"1.0\"\n-               xmlns=\"http://java.sun.com/xml/ns/javaee\"\n+<facelet-taglib version=\"3.0\"\n+               xmlns=\"https://jakarta.ee/xml/ns/jakartaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n@@ -5,1 +5,1 @@\n                xmlns=\"http://java.sun.com/xml/ns/javaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n-               xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-facelettaglibrary_1.0.xsd\">\n+               xsi:schemaLocation=\"https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-facelettaglibrary_3_0.xsd\">\n    <function>\n@@ -8,1 +8,1 @@\n    <function>\n        <function-name>getFileContent</function-name>\n-       <function-class>javax.util.ShowcaseUtil</function-class>\n+       <function-class>jakarta.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<facelet-taglib version=\"1.0\"\n                xmlns=\"http://java.sun.com/xml/ns/javaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-facelettaglibrary_1.0.xsd\">\n    <function>\n        <function-name>getFileContent</function-name>\n        <function-class>javax.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n    </function>\n</facelet-taglib>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<facelet-taglib version=\"3.0\"\n                xmlns=\"https://jakarta.ee/xml/ns/jakartaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-facelettaglibrary_3_0.xsd\">\n    <function>\n        <function-name>getFileContent</function-name>\n        <function-class>jakarta.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n    </function>\n</facelet-taglib>\n","diff":"--- faces-taglib.xml\n+++ faces-taglib.xml\n@@ -2,2 +2,2 @@\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n-<facelet-taglib version=\"1.0\"\n-               xmlns=\"http://java.sun.com/xml/ns/javaee\"\n+<facelet-taglib version=\"3.0\"\n+               xmlns=\"https://jakarta.ee/xml/ns/jakartaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n@@ -5,1 +5,1 @@\n                xmlns=\"http://java.sun.com/xml/ns/javaee\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n-               xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-facelettaglibrary_1.0.xsd\">\n+               xsi:schemaLocation=\"https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-facelettaglibrary_3_0.xsd\">\n    <function>\n@@ -8,1 +8,1 @@\n    <function>\n        <function-name>getFileContent</function-name>\n-       <function-class>javax.util.ShowcaseUtil</function-class>\n+       <function-class>jakarta.util.ShowcaseUtil</function-class>\n        <function-signature>java.lang.String getFileContent(java.lang.String)</function-signature>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml","displayName":"Migrate xmlns entries in `taglib.xml` files","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

