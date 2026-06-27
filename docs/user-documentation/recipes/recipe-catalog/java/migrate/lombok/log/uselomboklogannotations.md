---
title: "Use Lombok logger annotations instead of explicit fields"
sidebar_label: "Use Lombok logger annotations instead of explicit fields"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/lombok/log/uselomboklogannotations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Lombok logger annotations instead of explicit fields"}
  description={"Applies all recipes that replace logger declarations with class level annotations."}
  fqName={"org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/lombok.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/uselomboklogannotations.md"}
>

<RecipeHeader.Title>Use Lombok logger annotations instead of explicit fields</RecipeHeader.Title>

<RecipeHeader.Description>Applies all recipes that replace logger declarations with class level annotations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use `@CommonsLog` instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/usecommonslog/"},{"name":"Use `@JBossLog` instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/usejbosslog/"},{"name":"Use `@Log` instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/uselog/"},{"name":"Use `@Log4j2` instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/uselog4j2/"},{"name":"Use `@Slf4` instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/useslf4j/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"class A {\n    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);\n}\n","after":"import lombok.extern.slf4j.Slf4j;\n\n@Slf4j\nclass A {\n}\n","diff":"@@ -1,0 +1,3 @@\n+import lombok.extern.slf4j.Slf4j;\n+\n+@Slf4j\nclass A {\n@@ -2,1 +5,0 @@\nclass A {\n-   private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);\n}\n","newFile":false},{"language":"java","before":"import java.util.logging.Logger;\nclass C {\n    private static final Logger log = Logger.getLogger(C.class.getName());\n}\n","after":"import lombok.extern.java.Log;\n\n@Log\nclass C {\n}\n","diff":"@@ -1,1 +1,3 @@\n-import java.util.logging.Logger;\n+import lombok.extern.java.Log;\n+\n+@Log\nclass C {\n@@ -3,1 +5,0 @@\nimport java.util.logging.Logger;\nclass C {\n-   private static final Logger log = Logger.getLogger(C.class.getName());\n}\n","newFile":false},{"language":"java","before":"import org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nclass E {\n    private static final Log log = LogFactory.getLog(E.class);\n}\n","after":"import lombok.extern.apachecommons.CommonsLog;\n\n@CommonsLog\nclass E {\n}\n","diff":"@@ -1,2 +1,3 @@\n-import org.apache.commons.logging.Log;\n-import org.apache.commons.logging.LogFactory;\n+import lombok.extern.apachecommons.CommonsLog;\n+\n+@CommonsLog\nclass E {\n@@ -4,1 +5,0 @@\nimport org.apache.commons.logging.LogFactory;\nclass E {\n-   private static final Log log = LogFactory.getLog(E.class);\n}\n","newFile":false},{"language":"java","before":"import org.apache.logging.log4j.Logger;\nimport org.apache.logging.log4j.LogManager;\nclass B {\n    private static final Logger log = LogManager.getLogger(B.class);\n}\n","after":"import lombok.extern.log4j.Log4j2;\n\n@Log4j2\nclass B {\n}\n","diff":"@@ -1,2 +1,3 @@\n-import org.apache.logging.log4j.Logger;\n-import org.apache.logging.log4j.LogManager;\n+import lombok.extern.log4j.Log4j2;\n+\n+@Log4j2\nclass B {\n@@ -4,1 +5,0 @@\nimport org.apache.logging.log4j.LogManager;\nclass B {\n-   private static final Logger log = LogManager.getLogger(B.class);\n}\n","newFile":false},{"language":"java","before":"import org.jboss.logging.Logger;\nclass D {\n    private static final Logger log = Logger.getLogger(D.class);\n}\n","after":"import lombok.extern.jbosslog.JBossLog;\n\n@JBossLog\nclass D {\n}\n","diff":"@@ -1,1 +1,3 @@\n-import org.jboss.logging.Logger;\n+import lombok.extern.jbosslog.JBossLog;\n+\n+@JBossLog\nclass D {\n@@ -3,1 +5,0 @@\nimport org.jboss.logging.Logger;\nclass D {\n-   private static final Logger log = Logger.getLogger(D.class);\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"class A {\n    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);\n}\n","after":"import lombok.extern.slf4j.Slf4j;\n\n@Slf4j\nclass A {\n}\n","diff":"@@ -1,0 +1,3 @@\n+import lombok.extern.slf4j.Slf4j;\n+\n+@Slf4j\nclass A {\n@@ -2,1 +5,0 @@\nclass A {\n-   private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);\n}\n","newFile":false},{"language":"java","before":"import java.util.logging.Logger;\nclass C {\n    private static final Logger log = Logger.getLogger(C.class.getName());\n}\n","after":"import lombok.extern.java.Log;\n\n@Log\nclass C {\n}\n","diff":"@@ -1,1 +1,3 @@\n-import java.util.logging.Logger;\n+import lombok.extern.java.Log;\n+\n+@Log\nclass C {\n@@ -3,1 +5,0 @@\nimport java.util.logging.Logger;\nclass C {\n-   private static final Logger log = Logger.getLogger(C.class.getName());\n}\n","newFile":false},{"language":"java","before":"import org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nclass E {\n    private static final Log log = LogFactory.getLog(E.class);\n}\n","after":"import lombok.extern.apachecommons.CommonsLog;\n\n@CommonsLog\nclass E {\n}\n","diff":"@@ -1,2 +1,3 @@\n-import org.apache.commons.logging.Log;\n-import org.apache.commons.logging.LogFactory;\n+import lombok.extern.apachecommons.CommonsLog;\n+\n+@CommonsLog\nclass E {\n@@ -4,1 +5,0 @@\nimport org.apache.commons.logging.LogFactory;\nclass E {\n-   private static final Log log = LogFactory.getLog(E.class);\n}\n","newFile":false},{"language":"java","before":"import org.apache.logging.log4j.Logger;\nimport org.apache.logging.log4j.LogManager;\nclass B {\n    private static final Logger log = LogManager.getLogger(B.class);\n}\n","after":"import lombok.extern.log4j.Log4j2;\n\n@Log4j2\nclass B {\n}\n","diff":"@@ -1,2 +1,3 @@\n-import org.apache.logging.log4j.Logger;\n-import org.apache.logging.log4j.LogManager;\n+import lombok.extern.log4j.Log4j2;\n+\n+@Log4j2\nclass B {\n@@ -4,1 +5,0 @@\nimport org.apache.logging.log4j.LogManager;\nclass B {\n-   private static final Logger log = LogManager.getLogger(B.class);\n}\n","newFile":false},{"language":"java","before":"import org.jboss.logging.Logger;\nclass D {\n    private static final Logger log = Logger.getLogger(D.class);\n}\n","after":"import lombok.extern.jbosslog.JBossLog;\n\n@JBossLog\nclass D {\n}\n","diff":"@@ -1,1 +1,3 @@\n-import org.jboss.logging.Logger;\n+import lombok.extern.jbosslog.JBossLog;\n+\n+@JBossLog\nclass D {\n@@ -3,1 +5,0 @@\nimport org.jboss.logging.Logger;\nclass D {\n-   private static final Logger log = Logger.getLogger(D.class);\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations","displayName":"Use Lombok logger annotations instead of explicit fields","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

