---
title: "Migrate to HtmlUnit 3.x"
sidebar_label: "Migrate to HtmlUnit 3.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/htmlunit/upgradehtmlunit_3" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to HtmlUnit 3.x"}
  description={"Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x."}
  fqName={"org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/htmlunit.yml"}
/>

<RecipeHeader
  displayName={"Migrate to HtmlUnit 3.x"}
  description={"Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3"}
  artifact={"org.openrewrite.recipe:rewrite-jenkins"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/htmlunit/upgradehtmlunit_3.md"}
/>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.gargoylesoftware.htmlunit.WebClient;\nimport com.gargoylesoftware.htmlunit.html.HtmlForm;\nimport com.gargoylesoftware.htmlunit.html.HtmlInput;\nimport com.gargoylesoftware.htmlunit.html.HtmlPage;\n\nimport java.io.IOException;\n\npublic class HtmlUnitUse {\n    void run() throws IOException {\n        try (WebClient webClient = new WebClient()) {\n            HtmlPage page = webClient.getPage(\"https://htmlunit.sourceforge.io/\");\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n            String value = a.getValueAttribute();\n            assert \"\".equals(value);\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n            a.setValueAttribute(\"updated\");\n        }\n    }\n}\n","after":"import org.htmlunit.WebClient;\nimport org.htmlunit.html.HtmlForm;\nimport org.htmlunit.html.HtmlInput;\nimport org.htmlunit.html.HtmlPage;\n\nimport java.io.IOException;\n\npublic class HtmlUnitUse {\n    void run() throws IOException {\n        try (WebClient webClient = new WebClient()) {\n            HtmlPage page = webClient.getPage(\"https://htmlunit.sourceforge.io/\");\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n            String value = a.getValue();\n            assert \"\".equals(value);\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n            a.setValue(\"updated\");\n        }\n    }\n}\n","diff":"@@ -1,4 +1,4 @@\n-import com.gargoylesoftware.htmlunit.WebClient;\n-import com.gargoylesoftware.htmlunit.html.HtmlForm;\n-import com.gargoylesoftware.htmlunit.html.HtmlInput;\n-import com.gargoylesoftware.htmlunit.html.HtmlPage;\n+import org.htmlunit.WebClient;\n+import org.htmlunit.html.HtmlForm;\n+import org.htmlunit.html.HtmlInput;\n+import org.htmlunit.html.HtmlPage;\n\n@@ -14,1 +14,1 @@\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n-           String value = a.getValueAttribute();\n+           String value = a.getValue();\n            assert \"\".equals(value);\n@@ -18,1 +18,1 @@\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n-           a.setValueAttribute(\"updated\");\n+           a.setValue(\"updated\");\n        }\n","newFile":false}]},{"variants":[{"language":"java","before":"import com.gargoylesoftware.htmlunit.WebClient;\nimport com.gargoylesoftware.htmlunit.html.HtmlForm;\nimport com.gargoylesoftware.htmlunit.html.HtmlInput;\nimport com.gargoylesoftware.htmlunit.html.HtmlPage;\n\nimport java.io.IOException;\n\npublic class HtmlUnitUse {\n    void run() throws IOException {\n        try (WebClient webClient = new WebClient()) {\n            HtmlPage page = webClient.getPage(\"https://htmlunit.sourceforge.io/\");\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n            String value = a.getValueAttribute();\n            assert \"\".equals(value);\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n            a.setValueAttribute(\"updated\");\n        }\n    }\n}\n","after":"import org.htmlunit.WebClient;\nimport org.htmlunit.html.HtmlForm;\nimport org.htmlunit.html.HtmlInput;\nimport org.htmlunit.html.HtmlPage;\n\nimport java.io.IOException;\n\npublic class HtmlUnitUse {\n    void run() throws IOException {\n        try (WebClient webClient = new WebClient()) {\n            HtmlPage page = webClient.getPage(\"https://htmlunit.sourceforge.io/\");\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n            String value = a.getValue();\n            assert \"\".equals(value);\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n            a.setValue(\"updated\");\n        }\n    }\n}\n","diff":"@@ -1,4 +1,4 @@\n-import com.gargoylesoftware.htmlunit.WebClient;\n-import com.gargoylesoftware.htmlunit.html.HtmlForm;\n-import com.gargoylesoftware.htmlunit.html.HtmlInput;\n-import com.gargoylesoftware.htmlunit.html.HtmlPage;\n+import org.htmlunit.WebClient;\n+import org.htmlunit.html.HtmlForm;\n+import org.htmlunit.html.HtmlInput;\n+import org.htmlunit.html.HtmlPage;\n\n@@ -14,1 +14,1 @@\n            HtmlForm form = page.getFormByName(\"config\");\n            HtmlInput a = form.getInputByName(\"a\");\n-           String value = a.getValueAttribute();\n+           String value = a.getValue();\n            assert \"\".equals(value);\n@@ -18,1 +18,1 @@\n            a.setAttribute(\"value\", \"up2\");\n            a.setAttribute(\"value2\", \"leave\");\n-           a.setValueAttribute(\"updated\");\n+           a.setValue(\"updated\");\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3","displayName":"Migrate to HtmlUnit 3.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jenkins","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

