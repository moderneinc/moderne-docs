---
title: "Attributes with automatically generated values require configuration"
sidebar_label: "Attributes with automatically generated values require configuration"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/javax/addtablegenerator" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Attributes with automatically generated values require configuration"}
  description={"Adds missing `@TableGenerator` annotation and updates the `@GeneratedValue` annotation values when it uses automatically generated values."}
  fqName={"org.openrewrite.java.migrate.javax.AddTableGenerator"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/javax/AddTableGenerator.java"}
/>

<RecipeHeader
  displayName={"Attributes with automatically generated values require configuration"}
  description={"Adds missing `@TableGenerator` annotation and updates the `@GeneratedValue` annotation values when it uses automatically generated values."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.javax.AddTableGenerator"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddTableGenerator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/javax/addtablegenerator.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\nimport javax.persistence.TableGenerator;\n\n@Entity\npublic class GeneratedValueExample  {\n    // flag it\n    @Id\n    @GeneratedValue(strategy=GenerationType.AUTO)\n    private int id;\n\n    // flag it.  Does not require @Id\n    @GeneratedValue\n    private int id2;\n\n    // flag it even though it has a TableGenerator since GeneratedValue is default\n    // A second TableGenerator will be created.\n    @TableGenerator(name = \"SOME_TABLE\", table = \"SOME_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    @GeneratedValue\n    private int id3;\n}\n","after":"import javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\nimport javax.persistence.TableGenerator;\n\n@Entity\npublic class GeneratedValueExample  {\n    // flag it\n    @Id\n    @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n    private int id;\n\n    // flag it.  Does not require @Id\n    @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n    @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    private int id2;\n\n    // flag it even though it has a TableGenerator since GeneratedValue is default\n    // A second TableGenerator will be created.\n    @TableGenerator(name = \"SOME_TABLE\", table = \"SOME_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n    private int id3;\n}\n","diff":"@@ -11,1 +11,2 @@\n    // flag it\n    @Id\n-   @GeneratedValue(strategy=GenerationType.AUTO)\n+   @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n+   @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n    private int id;\n@@ -15,1 +16,2 @@\n\n    // flag it.  Does not require @Id\n-   @GeneratedValue\n+   @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n+   @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n    private int id2;\n@@ -21,1 +23,2 @@\n    // A second TableGenerator will be created.\n    @TableGenerator(name = \"SOME_TABLE\", table = \"SOME_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n-   @GeneratedValue\n+   @javax.persistence.TableGenerator(name = \"OPENJPA_SEQUENCE_TABLE\", table = \"OPENJPA_SEQUENCE_TABLE\", pkColumnName = \"ID\", valueColumnName = \"SEQUENCE_VALUE\", pkColumnValue = \"0\")\n+   @GeneratedValue(strategy = javax.persistence.GenerationType.TABLE, generator = \"OPENJPA_SEQUENCE_TABLE\")\n    private int id3;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.javax.AddTableGenerator","displayName":"Attributes with automatically generated values require configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

