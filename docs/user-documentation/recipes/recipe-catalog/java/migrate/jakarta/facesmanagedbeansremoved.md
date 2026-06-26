---
title: "Substitute removed Faces Managed Beans"
sidebar_label: "Substitute removed Faces Managed Beans"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/facesmanagedbeansremoved" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Substitute removed Faces Managed Beans"}
  description={"This recipe substitutes Faces Managed Beans, which were deprecated in JavaServer Faces 2.3 and have been removed from Jakarta Faces 4.0."}
  fqName={"org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-4.yml"}
/>

<RecipeHeader
  displayName={"Substitute removed Faces Managed Beans"}
  description={"This recipe substitutes Faces Managed Beans, which were deprecated in JavaServer Faces 2.3 and have been removed from Jakarta Faces 4.0."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/facesmanagedbeansremoved.md"}
/>

<RecipeList recipes={[{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Remove annotation attribute","href":"java/removeannotationattribute"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Update Faces `@ManagedBean` to use CDI `@Named`","href":"java/migrate/jakarta/updatemanagedbeantonamed"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.faces.bean.ApplicationScoped;\nimport javax.faces.bean.RequestScoped;\nimport javax.faces.bean.SessionScoped;\nimport javax.faces.bean.ManagedProperty;\nimport javax.faces.bean.NoneScoped;\nimport javax.faces.bean.ViewScoped;\n\n@ApplicationScoped\n@RequestScoped\n@SessionScoped\n@ManagedProperty\n@NoneScoped\n@ViewScoped\npublic class ApplicationBean2 {\n}\n","after":"import jakarta.enterprise.context.ApplicationScoped;\nimport jakarta.enterprise.context.Dependent;\nimport jakarta.enterprise.context.RequestScoped;\nimport jakarta.enterprise.context.SessionScoped;\nimport jakarta.faces.annotation.ManagedProperty;\nimport jakarta.faces.view.ViewScoped;\n\n@ApplicationScoped\n@RequestScoped\n@SessionScoped\n@ManagedProperty\n@Dependent\n@ViewScoped\npublic class ApplicationBean2 {\n}\n","diff":"@@ -1,6 +1,6 @@\n-import javax.faces.bean.ApplicationScoped;\n-import javax.faces.bean.RequestScoped;\n-import javax.faces.bean.SessionScoped;\n-import javax.faces.bean.ManagedProperty;\n-import javax.faces.bean.NoneScoped;\n-import javax.faces.bean.ViewScoped;\n+import jakarta.enterprise.context.ApplicationScoped;\n+import jakarta.enterprise.context.Dependent;\n+import jakarta.enterprise.context.RequestScoped;\n+import jakarta.enterprise.context.SessionScoped;\n+import jakarta.faces.annotation.ManagedProperty;\n+import jakarta.faces.view.ViewScoped;\n\n@@ -12,1 +12,1 @@\n@SessionScoped\n@ManagedProperty\n-@NoneScoped\n+@Dependent\n@ViewScoped\n","newFile":false}]},{"variants":[{"language":"java","before":"import javax.faces.bean.ApplicationScoped;\nimport javax.faces.bean.RequestScoped;\nimport javax.faces.bean.SessionScoped;\nimport javax.faces.bean.ManagedProperty;\nimport javax.faces.bean.NoneScoped;\nimport javax.faces.bean.ViewScoped;\n\n@ApplicationScoped\n@RequestScoped\n@SessionScoped\n@ManagedProperty\n@NoneScoped\n@ViewScoped\npublic class ApplicationBean2 {\n}\n","after":"import jakarta.enterprise.context.ApplicationScoped;\nimport jakarta.enterprise.context.Dependent;\nimport jakarta.enterprise.context.RequestScoped;\nimport jakarta.enterprise.context.SessionScoped;\nimport jakarta.faces.annotation.ManagedProperty;\nimport jakarta.faces.view.ViewScoped;\n\n@ApplicationScoped\n@RequestScoped\n@SessionScoped\n@ManagedProperty\n@Dependent\n@ViewScoped\npublic class ApplicationBean2 {\n}\n","diff":"@@ -1,6 +1,6 @@\n-import javax.faces.bean.ApplicationScoped;\n-import javax.faces.bean.RequestScoped;\n-import javax.faces.bean.SessionScoped;\n-import javax.faces.bean.ManagedProperty;\n-import javax.faces.bean.NoneScoped;\n-import javax.faces.bean.ViewScoped;\n+import jakarta.enterprise.context.ApplicationScoped;\n+import jakarta.enterprise.context.Dependent;\n+import jakarta.enterprise.context.RequestScoped;\n+import jakarta.enterprise.context.SessionScoped;\n+import jakarta.faces.annotation.ManagedProperty;\n+import jakarta.faces.view.ViewScoped;\n\n@@ -12,1 +12,1 @@\n@SessionScoped\n@ManagedProperty\n-@NoneScoped\n+@Dependent\n@ViewScoped\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved","displayName":"Substitute removed Faces Managed Beans","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

