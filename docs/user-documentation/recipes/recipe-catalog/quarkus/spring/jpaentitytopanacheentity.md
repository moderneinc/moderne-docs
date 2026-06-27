---
title: "Convert JPA Entity to Panache Entity"
sidebar_label: "Convert JPA Entity to Panache Entity"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/jpaentitytopanacheentity" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert JPA Entity to Panache Entity"}
  description={"Transforms standard JPA entities to extend Quarkus PanacheEntity, enabling the Active Record pattern with built-in CRUD operations."}
  fqName={"org.openrewrite.quarkus.spring.JpaEntityToPanacheEntity"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/spring/JpaEntityToPanacheEntity.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.JpaEntityToPanacheEntity"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.JpaEntityToPanacheEntity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/jpaentitytopanacheentity.md"}
>

<RecipeHeader.Title>Convert JPA Entity to Panache Entity</RecipeHeader.Title>

<RecipeHeader.Description>Transforms standard JPA entities to extend Quarkus PanacheEntity, enabling the Active Record pattern with built-in CRUD operations.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import jakarta.persistence.Entity;\nimport jakarta.persistence.Id;\nimport jakarta.persistence.GeneratedValue;\n\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String name;\n    private String email;\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n}\n","after":"import io.quarkus.hibernate.orm.panache.PanacheEntity;\nimport jakarta.persistence.Entity;\n\n@Entity\npublic class User extends PanacheEntity {\n\n    private String name;\n    private String email;\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n}\n","diff":"@@ -1,0 +1,1 @@\n+import io.quarkus.hibernate.orm.panache.PanacheEntity;\nimport jakarta.persistence.Entity;\n@@ -2,2 +3,0 @@\nimport jakarta.persistence.Entity;\n-import jakarta.persistence.Id;\n-import jakarta.persistence.GeneratedValue;\n\n@@ -6,4 +5,1 @@\n\n@Entity\n-public class User {\n-   @Id\n-   @GeneratedValue\n-   private Long id;\n+public class User extends PanacheEntity {\n\n@@ -13,3 +9,0 @@\n    private String name;\n    private String email;\n-\n-   public Long getId() { return id; }\n-   public void setId(Long id) { this.id = id; }\n    public String getName() { return name; }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.JpaEntityToPanacheEntity","displayName":"Convert JPA Entity to Panache Entity","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

