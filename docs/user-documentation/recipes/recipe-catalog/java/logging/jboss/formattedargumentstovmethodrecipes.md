---
title: "Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods"
sidebar_label: "Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods"}
  description={"Replace `logger.level(\"hello {0}\", arg)` with `logger.levelv(\"hello {0}\", arg)`."}
  fqName={"org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jboss/FormattedArgumentsToVMethod.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes.md"}
>

<RecipeHeader.Title>Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods</RecipeHeader.Title>

<RecipeHeader.Description>Replace `logger.level("hello {0}", arg)` with `logger.levelv("hello {0}", arg)`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Refaster template `FormattedArgumentsToVMethod.TraceToVTrace`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.TraceToVTraceWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracewiththrowablerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.DebugToVDebug`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugrecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.DebugToVDebugWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugwiththrowablerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.InfoToVInfo`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$infotovinforecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.InfoToVInfoWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$infotovinfowiththrowablerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.WarnToVWarn`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnrecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.WarnToVWarnWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnwiththrowablerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.ErrorToVError`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorrecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.ErrorToVErrorWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorwiththrowablerecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.FatalToVFatal`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalrecipe/"},{"name":"Refaster template `FormattedArgumentsToVMethod.FatalToVFatalWithThrowable`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalwiththrowablerecipe/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.jboss.logging.Logger;\n\nclass Test {\n    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {\n        logger.info(msg, formatArgs);\n        logger.info(msg, new Object[]{o});\n        logger.info((Object)msg, formatArgs, t);\n        logger.info(o, formatArgs, t);\n    }\n}\n","after":"import org.jboss.logging.Logger;\n\nclass Test {\n    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {\n        logger.infov(msg, formatArgs);\n        logger.infov(msg, new Object[]{o});\n        logger.infov(msg, formatArgs, t);\n        logger.info(o, formatArgs, t);\n    }\n}\n","diff":"@@ -5,3 +5,3 @@\nclass Test {\n    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {\n-       logger.info(msg, formatArgs);\n-       logger.info(msg, new Object[]{o});\n-       logger.info((Object)msg, formatArgs, t);\n+       logger.infov(msg, formatArgs);\n+       logger.infov(msg, new Object[]{o});\n+       logger.infov(msg, formatArgs, t);\n        logger.info(o, formatArgs, t);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes","displayName":"Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

