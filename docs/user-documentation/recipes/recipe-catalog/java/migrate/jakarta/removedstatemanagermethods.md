---
title: "Use `StateManagementStrategy`"
sidebar_label: "Use `StateManagementStrategy`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/removedstatemanagermethods" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `StateManagementStrategy`"}
  description={"Faces 3.0 introduced using `StateManagementStrategy` in favor of `StateManager`, which was later removed in Faces 4.0."}
  fqName={"org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-3.yml"}
/>

<RecipeHeader
  displayName={"Use `StateManagementStrategy`"}
  description={"Faces 3.0 introduced using `StateManagementStrategy` in favor of `StateManager`, which was later removed in Faces 4.0."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removedstatemanagermethods.md"}
/>

<RecipeList recipes={[{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import jakarta.faces.application.StateManager;\nimport jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\n\nclass StateManagerParent extends StateManager {\n\n    @Override\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n        super.getComponentStateToSave(arg0);\n        super.getTreeStructureToSave(arg0);\n        super.restoreComponentState(arg0, uv, arg2);\n        super.restoreTreeStructure(arg0, arg1, arg2);\n        return null;\n    }\n}\n","after":"import jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\nimport jakarta.faces.view.StateManagementStrategy;\n\nclass StateManagerParent extends StateManagementStrategy {\n\n    @Override\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n        super.saveView(arg0);\n        super.saveView(arg0);\n        super.restoreView(arg0, uv, arg2);\n        super.restoreView(arg0, arg1, arg2);\n        return null;\n    }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import jakarta.faces.application.StateManager;\nimport jakarta.faces.component.UIViewRoot;\n@@ -4,0 +3,1 @@\nimport jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\n+import jakarta.faces.view.StateManagementStrategy;\n\n@@ -5,1 +5,1 @@\nimport jakarta.faces.context.FacesContext;\n\n-class StateManagerParent extends StateManager {\n+class StateManagerParent extends StateManagementStrategy {\n\n@@ -10,4 +10,4 @@\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n-       super.getComponentStateToSave(arg0);\n-       super.getTreeStructureToSave(arg0);\n-       super.restoreComponentState(arg0, uv, arg2);\n-       super.restoreTreeStructure(arg0, arg1, arg2);\n+       super.saveView(arg0);\n+       super.saveView(arg0);\n+       super.restoreView(arg0, uv, arg2);\n+       super.restoreView(arg0, arg1, arg2);\n        return null;\n","newFile":false}]},{"variants":[{"language":"java","before":"import jakarta.faces.application.StateManager;\nimport jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\n\nclass StateManagerParent extends StateManager {\n\n    @Override\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n        super.getComponentStateToSave(arg0);\n        super.getTreeStructureToSave(arg0);\n        super.restoreComponentState(arg0, uv, arg2);\n        super.restoreTreeStructure(arg0, arg1, arg2);\n        return null;\n    }\n}\n","after":"import jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\nimport jakarta.faces.view.StateManagementStrategy;\n\nclass StateManagerParent extends StateManagementStrategy {\n\n    @Override\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n        super.saveView(arg0);\n        super.saveView(arg0);\n        super.restoreView(arg0, uv, arg2);\n        super.restoreView(arg0, arg1, arg2);\n        return null;\n    }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import jakarta.faces.application.StateManager;\nimport jakarta.faces.component.UIViewRoot;\n@@ -4,0 +3,1 @@\nimport jakarta.faces.component.UIViewRoot;\nimport jakarta.faces.context.FacesContext;\n+import jakarta.faces.view.StateManagementStrategy;\n\n@@ -5,1 +5,1 @@\nimport jakarta.faces.context.FacesContext;\n\n-class StateManagerParent extends StateManager {\n+class StateManagerParent extends StateManagementStrategy {\n\n@@ -10,4 +10,4 @@\n    public UIViewRoot restoreView(FacesContext arg0, String arg1, String arg2) {\n        UIViewRoot uv = null;\n-       super.getComponentStateToSave(arg0);\n-       super.getTreeStructureToSave(arg0);\n-       super.restoreComponentState(arg0, uv, arg2);\n-       super.restoreTreeStructure(arg0, arg1, arg2);\n+       super.saveView(arg0);\n+       super.saveView(arg0);\n+       super.restoreView(arg0, uv, arg2);\n+       super.restoreView(arg0, arg1, arg2);\n        return null;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods","displayName":"Use `StateManagementStrategy`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

