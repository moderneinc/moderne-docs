---
title: "Add landing page controller for welcome file configuration"
sidebar_label: "Add landing page controller for welcome file configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add landing page controller for welcome file configuration"}
  description={"Generates a `LandingPageController` when `welcome-file-list` is found in `web.xml` or `context-root` in `jboss-web.xml`. When migrating to Spring Framework 5.3+, applications that rely on these server-side landing page configurations need a `@Controller` with a `@RequestMapping` for `/` to avoid 404 errors, as Spring MVC can take over the root mapping. Skips generation if a controller already maps to `/`."}
  fqName={"io.moderne.java.spring.framework.webxml.FindWelcomeFileConfiguration"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework.webxml.FindWelcomeFileConfiguration"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework.webxml.FindWelcomeFileConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/webxml/findwelcomefileconfiguration.md"}
  moderneOnly
>

<RecipeHeader.Title>Add landing page controller for welcome file configuration</RecipeHeader.Title>

<RecipeHeader.Description>Generates a `LandingPageController` when `welcome-file-list` is found in `web.xml` or `context-root` in `jboss-web.xml`. When migrating to Spring Framework 5.3+, applications that rely on these server-side landing page configurations need a `@Controller` with a `@RequestMapping` for `/` to avoid 404 errors, as Spring MVC can take over the root mapping. Skips generation if a controller already maps to `/`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example.web.controller;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@Controller\npublic class UserController {\n    @RequestMapping(\"/users\")\n    public String users() {\n        return \"users\";\n    }\n}\n"},"variants":[{"language":"java","before":"","after":"package com.example.web.controller;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n/**\n * Landing page controller generated to handle root URL mapping.\n * <p>\n * This controller was generated because a welcome-file-list was found in web.xml\n * and/or a context-root was found in jboss-web.xml. With Spring MVC taking over\n * URL handling, an explicit controller mapping is needed to serve the landing page.\n */\n@Controller\npublic class LandingPageController {\n\n    @RequestMapping({\"/\"})\n    public String landingPage() {\n        return \"index\";\n    }\n}\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework.webxml.FindWelcomeFileConfiguration","displayName":"Add landing page controller for welcome file configuration","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

