---
title: "Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`"
sidebar_label: "Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`"}
  description={"In Hibernate 7.0, various JDBC types were moved to internal packages. Use `@JdbcTypeCode` with `SqlTypes` constants instead of `@JdbcType` with specific classes. Also rewrites `@Type(LegacyType.class)` references to deprecated Hibernate basic types (e.g. `MaterializedBlobType`, `ImageType`) into the equivalent `@JdbcTypeCode(SqlTypes.X)`."}
  fqName={"io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update70/migratejdbctypetojdbctypecode.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`</RecipeHeader.Title>

<RecipeHeader.Description>In Hibernate 7.0, various JDBC types were moved to internal packages. Use `@JdbcTypeCode` with `SqlTypes` constants instead of `@JdbcType` with specific classes. Also rewrites `@Type(LegacyType.class)` references to deprecated Hibernate basic types (e.g. `MaterializedBlobType`, `ImageType`) into the equivalent `@JdbcTypeCode(SqlTypes.X)`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import jakarta.persistence.Column;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.Id;\nimport org.hibernate.annotations.JdbcType;\nimport org.hibernate.type.descriptor.jdbc.JsonJdbcType;\n\n@Entity\npublic class JsonExample {\n    @Id\n    private Long id;\n\n    @JdbcType(JsonJdbcType.class)\n    @Column(name = \"json_data\")\n    private String jsonData;\n}\n","after":"import jakarta.persistence.Column;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.Id;\nimport org.hibernate.annotations.JdbcTypeCode;\nimport org.hibernate.type.SqlTypes;\n\n@Entity\npublic class JsonExample {\n    @Id\n    private Long id;\n\n    @JdbcTypeCode(SqlTypes.JSON)\n    @Column(name = \"json_data\")\n    private String jsonData;\n}\n","diff":"@@ -4,2 +4,2 @@\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.Id;\n-import org.hibernate.annotations.JdbcType;\n-import org.hibernate.type.descriptor.jdbc.JsonJdbcType;\n+import org.hibernate.annotations.JdbcTypeCode;\n+import org.hibernate.type.SqlTypes;\n\n@@ -12,1 +12,1 @@\n    private Long id;\n\n-   @JdbcType(JsonJdbcType.class)\n+   @JdbcTypeCode(SqlTypes.JSON)\n    @Column(name = \"json_data\")\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode","displayName":"Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

