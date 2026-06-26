---
title: "Replace `com.sun.awt.AWTUtilities` static method invocations"
sidebar_label: "Replace `com.sun.awt.AWTUtilities` static method invocations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/replacecomsunawtutilitiesmethods" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `com.sun.awt.AWTUtilities` static method invocations"}
  description={"This recipe replaces several static calls  in `com.sun.awt.AWTUtilities` with the JavaSE 11 equivalent. The methods replaced are `AWTUtilities.isTranslucencySupported()`, `AWTUtilities.setWindowOpacity()`, `AWTUtilities.getWindowOpacity()`, `AWTUtilities.getWindowShape()`, `AWTUtilities.isWindowOpaque()`, `AWTUtilities.isTranslucencyCapable()` and `AWTUtilities.setComponentMixingCutoutShape()`."}
  fqName={"org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/ReplaceComSunAWTUtilitiesMethods.java"}
/>

<RecipeHeader
  displayName={"Replace `com.sun.awt.AWTUtilities` static method invocations"}
  description={"This recipe replaces several static calls  in `com.sun.awt.AWTUtilities` with the JavaSE 11 equivalent. The methods replaced are `AWTUtilities.isTranslucencySupported()`, `AWTUtilities.setWindowOpacity()`, `AWTUtilities.getWindowOpacity()`, `AWTUtilities.getWindowShape()`, `AWTUtilities.isWindowOpaque()`, `AWTUtilities.isTranslucencyCapable()` and `AWTUtilities.setComponentMixingCutoutShape()`."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/replacecomsunawtutilitiesmethods.md"}
/>

<OptionsTable options={[{"type":"String","name":"getAWTIsWindowsTranslucencyPattern","required":false,"description":"The method pattern to match and replace.","example":"com.sun.awt.AWTUtilities isTranslucencySupported(com.sun.awt.AWTUtilities.Translucency)"},{"type":"String","name":"isWindowOpaquePattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilities isWindowOpaque(java.awt.Window)"},{"type":"String","name":"isTranslucencyCapablePattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilities isTranslucencyCapable(java.awt.GraphicsConfiguration)"},{"type":"String","name":"setWindowOpacityPattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilities setWindowOpacity(java.awt.Window, float)"},{"type":"String","name":"getWindowOpacityPattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilities getWindowOpacity(java.awt.Window)"},{"type":"String","name":"getWindowShapePattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilitiesTest getWindowShape(java.awt.Window)"},{"type":"String","name":"setComponentMixingCutoutShapePattern","required":false,"description":"The method pattern to match and replace.","example":"com.test.AWTUtilities setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"getAWTIsWindowsTranslucencyPattern","value":"com.test.AWTUtilitiesTest isTranslucencySupported1(com.test.AWTUtilitiesTest.Translucency)"},{"parameter":"isWindowOpaquePattern","value":"com.test.AWTUtilitiesTest isWindowOpaque(java.awt.Window)"},{"parameter":"isTranslucencyCapablePattern","value":"com.test.AWTUtilitiesTest isTranslucencyCapable(java.awt.GraphicsConfiguration)"},{"parameter":"setWindowOpacityPattern","value":"com.test.AWTUtilitiesTest setWindowOpacity(java.awt.Window,float)"},{"parameter":"getWindowOpacityPattern","value":"com.test.AWTUtilitiesTest getWindowOpacity(java.awt.Window)"},{"parameter":"getWindowShapePattern","value":"com.test.AWTUtilitiesTest getWindowShape(java.awt.Window)"},{"parameter":"setComponentMixingCutoutShapePattern","value":"com.test.AWTUtilitiesTest setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)"}],"variants":[{"language":"java","before":"package com.test;\nimport com.test.AWTUtilitiesTest;\nimport java.awt.Window;\nimport java.awt.*;\nimport javax.swing.*;\nimport java.awt.geom.Ellipse2D;\n\nclass Test {\n    void foo() {\n        Window win = new Window(new JFrame(\"test\"));\n        boolean f = AWTUtilitiesTest.isWindowOpaque(win);\n        AWTUtilitiesTest.setWindowOpacity(win,1);\n        float l = AWTUtilitiesTest.getWindowOpacity(win);\n        Shape sh = AWTUtilitiesTest.getWindowShape(win);\n        GraphicsConfiguration gc = null;\n        boolean f = AWTUtilitiesTest.isTranslucencyCapable(gc);\n        Component c = null;\n        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());\n        AWTUtilitiesTest.setComponentMixingCutoutShape(c, sh);\n    }\n}\n","after":"package com.test;\nimport java.awt.Window;\nimport java.awt.*;\nimport javax.swing.*;\nimport java.awt.geom.Ellipse2D;\n\nclass Test {\n    void foo() {\n        Window win = new Window(new JFrame(\"test\"));\n        boolean f = win.isOpaque();\n        win.setOpacity(1);\n        float l = win.getOpacity();\n        Shape sh = win.getShape();\n        GraphicsConfiguration gc = null;\n        boolean f = gc.isTranslucencyCapable();\n        Component c = null;\n        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());\n        c.setMixingCutoutShape(sh);\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\npackage com.test;\n-import com.test.AWTUtilitiesTest;\nimport java.awt.Window;\n@@ -11,4 +10,4 @@\n    void foo() {\n        Window win = new Window(new JFrame(\"test\"));\n-       boolean f = AWTUtilitiesTest.isWindowOpaque(win);\n-       AWTUtilitiesTest.setWindowOpacity(win,1);\n-       float l = AWTUtilitiesTest.getWindowOpacity(win);\n-       Shape sh = AWTUtilitiesTest.getWindowShape(win);\n+       boolean f = win.isOpaque();\n+       win.setOpacity(1);\n+       float l = win.getOpacity();\n+       Shape sh = win.getShape();\n        GraphicsConfiguration gc = null;\n@@ -16,1 +15,1 @@\n        Shape sh = AWTUtilitiesTest.getWindowShape(win);\n        GraphicsConfiguration gc = null;\n-       boolean f = AWTUtilitiesTest.isTranslucencyCapable(gc);\n+       boolean f = gc.isTranslucencyCapable();\n        Component c = null;\n@@ -19,1 +18,1 @@\n        Component c = null;\n        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());\n-       AWTUtilitiesTest.setComponentMixingCutoutShape(c, sh);\n+       c.setMixingCutoutShape(sh);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods","displayName":"Replace `com.sun.awt.AWTUtilities` static method invocations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

