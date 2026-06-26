---
title: "Migrate to IBM Semeru Runtimes"
sidebar_label: "Migrate to IBM Semeru Runtimes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/ibmsemeru" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to IBM Semeru Runtimes"}
  description={"This recipe will apply changes commonly needed when upgrading Java versions. The solutions provided in this list are solutions only available in IBM Semeru Runtimes."}
  fqName={"org.openrewrite.java.migrate.IBMSemeru"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/ibm-java.yml"}
/>

<RecipeHeader
  displayName={"Migrate to IBM Semeru Runtimes"}
  description={"This recipe will apply changes commonly needed when upgrading Java versions. The solutions provided in this list are solutions only available in IBM Semeru Runtimes."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["java11"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.IBMSemeru"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.IBMSemeru"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/ibmsemeru.md"}
/>

<RecipeList recipes={[{"name":"Use `com.ibm.net.ssl.www2.protocol.https.Handler` instead of `com.sun.net.ssl.internal.www.protocol.https.Handler`","href":"java/migrate/jredonotusesunnetsslinternalwwwprotocolhttpshandler"},{"name":"Use `com.ibm.net.ssl.www2.protocol` instead of `com.sun.net.ssl.internal.www.protocol`","href":"java/migrate/jredonotusesunnetsslinternalwwwprotocol"},{"name":"Use `com.ibm.jsse2` instead of `com.sun.net.ssl.internal.ssl`","href":"java/migrate/jredonotusesunnetsslinternalsslprovider"},{"name":"Use `javax.net.ssl` instead of `com.sun.net.ssl`","href":"java/migrate/jredonotusesunnetsslapis"},{"name":"Do not package `java.xml.ws` module in WebSphere Liberty applications","href":"java/migrate/removedjavaxmlwsmoduleprovided"},{"name":"Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications","href":"java/migrate/removedjaxbmoduleprovided"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.sun.net.ssl.internal.www.protocol.https.*;\n\nclass Foo{\n  void bar() {\n      com.sun.net.ssl.internal.www.protocol.https.Handler handler_1 =           //flag\n          new com.sun.net.ssl.internal.www.protocol.https.Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n      testMethod(handler_1);\n      testMethod(handler_2);\n      if (handler_1 instanceof com.sun.net.ssl.internal.www.protocol.https.Handler){ //flag\n          //do nothing\n      }\n\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n  }\n\n  public static com.sun.net.ssl.internal.www.protocol.https.Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n  }\n}\n","after":"import com.ibm.net.ssl.www2.protocol.https.Handler;\n\nclass Foo{\n  void bar() {\n      Handler handler_1 =           //flag\n          new Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n      testMethod(handler_1);\n      testMethod(handler_2);\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n  }\n\n  public static Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n  }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import com.sun.net.ssl.internal.www.protocol.https.*;\n+import com.ibm.net.ssl.www2.protocol.https.Handler;\n\n@@ -5,2 +5,2 @@\nclass Foo{\n  void bar() {\n-     com.sun.net.ssl.internal.www.protocol.https.Handler handler_1 =           //flag\n-         new com.sun.net.ssl.internal.www.protocol.https.Handler();            //flag\n+     Handler handler_1 =           //flag\n+         new Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n@@ -10,1 +10,1 @@\n      testMethod(handler_1);\n      testMethod(handler_2);\n-     if (handler_1 instanceof com.sun.net.ssl.internal.www.protocol.https.Handler){ //flag\n+     if (handler_1 instanceof Handler){ //flag\n          //do nothing\n@@ -19,1 +19,1 @@\n  }\n\n- public static com.sun.net.ssl.internal.www.protocol.https.Handler testMethod(Handler handler){ //flag (2)\n+ public static Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n","newFile":false}]},{"variants":[{"language":"java","before":"import com.sun.net.ssl.internal.www.protocol.https.*;\n\nclass Foo{\n  void bar() {\n      com.sun.net.ssl.internal.www.protocol.https.Handler handler_1 =           //flag\n          new com.sun.net.ssl.internal.www.protocol.https.Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n      testMethod(handler_1);\n      testMethod(handler_2);\n      if (handler_1 instanceof com.sun.net.ssl.internal.www.protocol.https.Handler){ //flag\n          //do nothing\n      }\n\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n  }\n\n  public static com.sun.net.ssl.internal.www.protocol.https.Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n  }\n}\n","after":"import com.ibm.net.ssl.www2.protocol.https.Handler;\n\nclass Foo{\n  void bar() {\n      Handler handler_1 =           //flag\n          new Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n      testMethod(handler_1);\n      testMethod(handler_2);\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n\n      if (handler_1 instanceof Handler){ //flag\n          //do nothing\n      }\n  }\n\n  public static Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n  }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import com.sun.net.ssl.internal.www.protocol.https.*;\n+import com.ibm.net.ssl.www2.protocol.https.Handler;\n\n@@ -5,2 +5,2 @@\nclass Foo{\n  void bar() {\n-     com.sun.net.ssl.internal.www.protocol.https.Handler handler_1 =           //flag\n-         new com.sun.net.ssl.internal.www.protocol.https.Handler();            //flag\n+     Handler handler_1 =           //flag\n+         new Handler();            //flag\n      Handler handler_2 =   new Handler(\"String\", 1); //flag (2)\n@@ -10,1 +10,1 @@\n      testMethod(handler_1);\n      testMethod(handler_2);\n-     if (handler_1 instanceof com.sun.net.ssl.internal.www.protocol.https.Handler){ //flag\n+     if (handler_1 instanceof Handler){ //flag\n          //do nothing\n@@ -19,1 +19,1 @@\n  }\n\n- public static com.sun.net.ssl.internal.www.protocol.https.Handler testMethod(Handler handler){ //flag (2)\n+ public static Handler testMethod(Handler handler){ //flag (2)\n      return handler;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.IBMSemeru","displayName":"Migrate to IBM Semeru Runtimes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

