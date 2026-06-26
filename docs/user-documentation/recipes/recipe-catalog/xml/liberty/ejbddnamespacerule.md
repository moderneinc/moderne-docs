---
title: "Use correct ejb-jar namespace values"
sidebar_label: "Use correct ejb-jar namespace values"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/xml/liberty/ejbddnamespacerule" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use correct ejb-jar namespace values"}
  description={"Namespace values in ejb-jar.xml must be consistent with the descriptor version."}
  fqName={"org.openrewrite.xml.liberty.EJBDDNamespaceRule"}
  languages={["XML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml"}
/>

<RecipeHeader
  displayName={"Use correct ejb-jar namespace values"}
  description={"Namespace values in ejb-jar.xml must be consistent with the descriptor version."}
  type={"Composite recipe"}
  languages={["XML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.xml.liberty.EJBDDNamespaceRule"}
  artifact={"org.openrewrite.recipe:rewrite-liberty"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.xml.liberty.EJBDDNamespaceRule"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/xml/liberty/ejbddnamespacerule.md"}
/>

<RecipeList recipes={[{"name":"Change XML attribute of a specific resource version","href":"xml/changenamespacevalue"},{"name":"Change XML attribute of a specific resource version","href":"xml/changenamespacevalue"},{"name":"Change XML attribute of a specific resource version","href":"xml/changenamespacevalue"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<ejb-jar xmlns=\"http://java.sun.com/xml/ns/javaee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n    EchoEJBProject</display-name>\n    <enterprise-beans>\n        <session id=\"EchoEJB\">\n            <ejb-name>EchoEJB</ejb-name>\n            <home>test.EchoEJBHome</home>\n            <remote>test.EchoEJB</remote>\n            <service-endpoint>test.EchoEJB</service-endpoint>\n            <ejb-class>test.EchoEJBBean</ejb-class>\n            <session-type>Stateless</session-type>\n            <transaction-type>Container</transaction-type>\n        </session>\n    </enterprise-beans>\n</ejb-jar>\n","after":"<ejb-jar xmlns=\"http://java.sun.com/xml/ns/j2ee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n    EchoEJBProject</display-name>\n    <enterprise-beans>\n        <session id=\"EchoEJB\">\n            <ejb-name>EchoEJB</ejb-name>\n            <home>test.EchoEJBHome</home>\n            <remote>test.EchoEJB</remote>\n            <service-endpoint>test.EchoEJB</service-endpoint>\n            <ejb-class>test.EchoEJBBean</ejb-class>\n            <session-type>Stateless</session-type>\n            <transaction-type>Container</transaction-type>\n        </session>\n    </enterprise-beans>\n</ejb-jar>\n","diff":"@@ -1,1 +1,1 @@\n-<ejb-jar xmlns=\"http://java.sun.com/xml/ns/javaee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n+<ejb-jar xmlns=\"http://java.sun.com/xml/ns/j2ee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<ejb-jar xmlns=\"http://java.sun.com/xml/ns/javaee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n    EchoEJBProject</display-name>\n    <enterprise-beans>\n        <session id=\"EchoEJB\">\n            <ejb-name>EchoEJB</ejb-name>\n            <home>test.EchoEJBHome</home>\n            <remote>test.EchoEJB</remote>\n            <service-endpoint>test.EchoEJB</service-endpoint>\n            <ejb-class>test.EchoEJBBean</ejb-class>\n            <session-type>Stateless</session-type>\n            <transaction-type>Container</transaction-type>\n        </session>\n    </enterprise-beans>\n</ejb-jar>\n","after":"<ejb-jar xmlns=\"http://java.sun.com/xml/ns/j2ee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n    EchoEJBProject</display-name>\n    <enterprise-beans>\n        <session id=\"EchoEJB\">\n            <ejb-name>EchoEJB</ejb-name>\n            <home>test.EchoEJBHome</home>\n            <remote>test.EchoEJB</remote>\n            <service-endpoint>test.EchoEJB</service-endpoint>\n            <ejb-class>test.EchoEJBBean</ejb-class>\n            <session-type>Stateless</session-type>\n            <transaction-type>Container</transaction-type>\n        </session>\n    </enterprise-beans>\n</ejb-jar>\n","diff":"@@ -1,1 +1,1 @@\n-<ejb-jar xmlns=\"http://java.sun.com/xml/ns/javaee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n+<ejb-jar xmlns=\"http://java.sun.com/xml/ns/j2ee\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" version=\"2.1\" xsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/ejb-jar_2_1.xsd\">\n    <display-name>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.xml.liberty.EJBDDNamespaceRule","displayName":"Use correct ejb-jar namespace values","groupId":"org.openrewrite.recipe","artifactId":"rewrite-liberty","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

