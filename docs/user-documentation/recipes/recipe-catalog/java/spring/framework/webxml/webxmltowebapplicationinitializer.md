---
title: "Migrate `web.xml` to `WebApplicationInitializer`"
sidebar_label: "Migrate `web.xml` to `WebApplicationInitializer`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `web.xml` to `WebApplicationInitializer`"}
  description={"Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests. It creates a `WebXmlWebAppInitializer` class in `src/main/java` with respect to submodules if they contain java files. **If it finds an existing `WebXmlWebAppInitializer`, it skips the creation**."}
  fqName={"io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/webxml/webxmltowebapplicationinitializer.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `web.xml` to `WebApplicationInitializer`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests. It creates a `WebXmlWebAppInitializer` class in `src/main/java` with respect to submodules if they contain java files. **If it finds an existing `WebXmlWebAppInitializer`, it skips the creation**.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"useJakartaEE","required":false,"description":"If true, the recipe will migrate to Jakarta EE 9+ namespaces. If false, it will use the javax.servlet namespace. If not set, the recipe will auto-detect based on the Spring Framework version: Spring 6+ uses Jakarta EE, Spring 5.x and earlier uses javax.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"useJakartaEE","value":"true"}],"unchanged":{"language":"java","code":"class Locator {}"},"variants":[{"language":"java","before":"","after":"import org.springframework.web.WebApplicationInitializer;\nimport jakarta.servlet.ServletContext;\nimport jakarta.servlet.ServletException;\n\npublic class WebXmlWebAppInitializer implements WebApplicationInitializer {\n    @Override\n    public void onStartup(ServletContext servletContext) throws ServletException {\n        servletContext.setAttribute(\"jakarta.servlet.context.display-name\", \"My Web Application\");\n    }\n}\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer","displayName":"Migrate `web.xml` to `WebApplicationInitializer`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

