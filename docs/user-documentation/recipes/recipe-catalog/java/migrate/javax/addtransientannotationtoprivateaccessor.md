---
title: "Private accessor methods must have a `@Transient` annotation"
sidebar_label: "Private accessor methods must have a `@Transient` annotation"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/javax/addtransientannotationtoprivateaccessor" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Private accessor methods must have a `@Transient` annotation"}
  description={"According to the JPA 2.1 specification, when property access is used, the property accessor methods must be public or protected. OpenJPA ignores any private accessor methods, whereas EclipseLink persists those attributes. To ignore private accessor methods in EclipseLink, the methods must have a `@Transient` annotation."}
  fqName={"org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/javax/AddTransientAnnotationToPrivateAccessor.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/javax/addtransientannotationtoprivateaccessor.md"}
>

<RecipeHeader.Title>Private accessor methods must have a `@Transient` annotation</RecipeHeader.Title>

<RecipeHeader.Description>According to the JPA 2.1 specification, when property access is used, the property accessor methods must be public or protected. OpenJPA ignores any private accessor methods, whereas EclipseLink persists those attributes. To ignore private accessor methods in EclipseLink, the methods must have a `@Transient` annotation.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package entities;\n\nimport javax.persistence.Entity;\nimport javax.persistence.Id;\n\n@Entity\npublic class PrivateAccessor  {\n    private int id;\n    private int nonPersistentField;\n\n    @Id\n    public int getId() {\n        return id;\n    }\n\n    private int getNonPersistentField() {\n        return nonPersistentField;\n    }\n}\n","after":"package entities;\n\nimport javax.persistence.Entity;\nimport javax.persistence.Id;\nimport javax.persistence.Transient;\n\n@Entity\npublic class PrivateAccessor  {\n    private int id;\n    private int nonPersistentField;\n\n    @Id\n    public int getId() {\n        return id;\n    }\n\n    @Transient\n    private int getNonPersistentField() {\n        return nonPersistentField;\n    }\n}\n","diff":"@@ -5,0 +5,1 @@\nimport javax.persistence.Entity;\nimport javax.persistence.Id;\n+import javax.persistence.Transient;\n\n@@ -16,0 +17,1 @@\n    }\n\n+   @Transient\n    private int getNonPersistentField() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor","displayName":"Private accessor methods must have a `@Transient` annotation","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

