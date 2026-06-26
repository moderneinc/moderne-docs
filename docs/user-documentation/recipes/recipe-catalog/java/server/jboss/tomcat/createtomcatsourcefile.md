---
title: "Create Tomcat server source file"
sidebar_label: "Create Tomcat server source file"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Create Tomcat server source file"}
  description={"Creates a `TomcatServer.java` source file for projects containing JBoss descriptor files."}
  fqName={"io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Create Tomcat server source file"}
  description={"Creates a `TomcatServer.java` source file for projects containing JBoss descriptor files."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile"}
  artifact={"io.moderne.recipe:rewrite-java-application-server"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/createtomcatsourcefile.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"packageName","required":true,"description":"The package name for the generated Java source files.","example":"com.example.tomcat"},{"type":"String","name":"contextPath","required":false,"description":"The context path for the Tomcat application.","example":"/myapp"},{"type":"Integer","name":"port","required":false,"description":"The default port for the Tomcat server.","example":"8080"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"packageName","value":"com.example"},{"parameter":"contextPath","value":"/myapp"},{"parameter":"port","value":"9090"}],"unchanged":{"language":"xml","code":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<jboss-web>\n    <context-root>/myapp</context-root>\n</jboss-web>\n"},"variants":[{"language":"java","before":"","after":"package com.example;\n\nimport org.apache.catalina.Context;\nimport org.apache.catalina.WebResourceRoot;\nimport org.apache.catalina.startup.Tomcat;\nimport org.apache.catalina.webresources.DirResourceSet;\nimport org.apache.catalina.webresources.JarResourceSet;\nimport org.apache.catalina.webresources.StandardRoot;\n\nimport java.io.File;\nimport java.net.URL;\n\npublic class TomcatServer {\n\n    private static final int DEFAULT_PORT = 9090;\n    private static final String CONTEXT_PATH = \"/myapp\";\n\n    public static void main(String[] args) throws Exception {\n        Tomcat tomcat = new Tomcat();\n        tomcat.setPort(DEFAULT_PORT);\n        tomcat.getConnector();\n\n        File baseDir = new File(System.getProperty(\"java.io.tmpdir\"), \"tomcat-\" + DEFAULT_PORT);\n        baseDir.mkdirs();\n        tomcat.setBaseDir(baseDir.getAbsolutePath());\n\n        URL resource = TomcatServer.class.getClassLoader().getResource(\"webapp\");\n        if (resource == null) {\n            throw new IllegalStateException(\"webapp directory not found on classpath\");\n        }\n\n        File docBase = new File(baseDir, \"docBase\");\n        docBase.mkdirs();\n        Context ctx = tomcat.addWebapp(CONTEXT_PATH, docBase.getAbsolutePath());\n\n        WebResourceRoot resources = new StandardRoot(ctx);\n        if (\"file\".equals(resource.getProtocol())) {\n            resources.addPreResources(new DirResourceSet(resources, \"/\",\n                    new File(resource.toURI()).getAbsolutePath(), \"/\"));\n        } else {\n            String jarPath = resource.getPath();\n            jarPath = jarPath.substring(jarPath.indexOf(\":\") + 1, jarPath.indexOf(\"!\"));\n            resources.addPreResources(new JarResourceSet(resources, \"/\", jarPath, \"/webapp\"));\n        }\n        ctx.setResources(resources);\n\n        tomcat.start();\n        tomcat.getServer().await();\n    }\n}\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile","displayName":"Create Tomcat server source file","groupId":"io.moderne.recipe","artifactId":"rewrite-java-application-server","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_JAVA_APPLICATION_SERVER","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageName=com.example.tomcat\" --recipe-option \"contextPath=/myapp\" --recipe-option \"port=8080\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

