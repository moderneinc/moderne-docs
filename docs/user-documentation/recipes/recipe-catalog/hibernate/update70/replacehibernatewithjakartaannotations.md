---
title: "Replace hibernate annotations with Jakarta variants"
sidebar_label: "Replace hibernate annotations with Jakarta variants"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace hibernate annotations with Jakarta variants"}
  description={"Tries to replaces annotations that have been removed in Hibernate 7.0 with its Jakarta equivalent, such as Table, @Where, @OrderBy, etc.\nIf a annotation is used with arguments that do not have a direct replacement, the annotation is not replaced at all."}
  fqName={"io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace hibernate annotations with Jakarta variants"}
  description={"Tries to replaces annotations that have been removed in Hibernate 7.0 with its Jakarta equivalent, such as Table, @Where, @OrderBy, etc.\nIf a annotation is used with arguments that do not have a direct replacement, the annotation is not replaced at all."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update70/replacehibernatewithjakartaannotations.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.hibernate.annotations.Index;\nimport org.hibernate.annotations.Table;\n\n@Table(\n        appliesTo = \"some_entity\",\n        comment = \"comment\",\n        indexes = {\n                @Index(columnNames = {\"A\", \"B\"}, name = \"idx_1\"),\n                @Index(columnNames = {\"C\"}, name = \"idx_2\")\n        }\n)\npublic class SomeEntity {\n    private Long id;\n    private String name;\n}\n","after":"import jakarta.persistence.Index;\nimport jakarta.persistence.Table;\n\n@Table(name = \"some_entity\", comment = \"comment\", indexes = {\n        @Index(columnList = \"A,B\", name = \"idx_1\"),\n        @Index(columnList = \"C\", name = \"idx_2\")\n})\npublic class SomeEntity {\n    private Long id;\n    private String name;\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.hibernate.annotations.Index;\n-import org.hibernate.annotations.Table;\n+import jakarta.persistence.Index;\n+import jakarta.persistence.Table;\n\n@@ -4,8 +4,4 @@\nimport org.hibernate.annotations.Table;\n\n-@Table(\n-       appliesTo = \"some_entity\",\n-       comment = \"comment\",\n-       indexes = {\n-               @Index(columnNames = {\"A\", \"B\"}, name = \"idx_1\"),\n-               @Index(columnNames = {\"C\"}, name = \"idx_2\")\n-       }\n-)\n+@Table(name = \"some_entity\", comment = \"comment\", indexes = {\n+       @Index(columnList = \"A,B\", name = \"idx_1\"),\n+       @Index(columnList = \"C\", name = \"idx_2\")\n+})\npublic class SomeEntity {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations","displayName":"Replace hibernate annotations with Jakarta variants","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

