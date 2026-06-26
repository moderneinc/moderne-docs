---
title: "Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`"
sidebar_label: "Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/removedsoapelementfactory" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`"}
  description={"XML Web Services prior to 4.0 provides the deprecated SOAPElementFactory class, which is removed in XML Web Services 4.0. The recommended replacement is to use jakarta.xml.soap.SOAPFactory to create SOAPElements."}
  fqName={"org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml"}
/>

<RecipeHeader
  displayName={"Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`"}
  description={"XML Web Services prior to 4.0 provides the deprecated SOAPElementFactory class, which is removed in XML Web Services 4.0. The recommended replacement is to use jakarta.xml.soap.SOAPFactory to create SOAPElements."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removedsoapelementfactory.md"}
/>

<RecipeList recipes={[{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change type","href":"java/changetype"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.test;\n\nimport jakarta.xml.soap.Name;\nimport jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n\npublic class Test {\n    void test(SOAPEnvelope envelope) {\n        String str1 = \"test\";\n        String str2 = \"t2\";\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n        SOAPElementFactory sfe = SOAPElementFactory.newInstance();\n        sfe.create(str1);\n        sfe.create(str1, str2, str3);\n        sfe.create(n);\n    }\n}\n","after":"package com.test;\n\nimport jakarta.xml.soap.Name;\nimport jakarta.xml.soap.SOAPEnvelope;\nimport jakarta.xml.soap.SOAPFactory;\n\npublic class Test {\n    void test(SOAPEnvelope envelope) {\n        String str1 = \"test\";\n        String str2 = \"t2\";\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n        SOAPFactory sfe = SOAPFactory.newInstance();\n        sfe.createElement(str1);\n        sfe.createElement(str1, str2, str3);\n        sfe.createElement(n);\n    }\n}\n","diff":"@@ -4,1 +4,0 @@\n\nimport jakarta.xml.soap.Name;\n-import jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n@@ -6,0 +5,1 @@\nimport jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n+import jakarta.xml.soap.SOAPFactory;\n\n@@ -13,4 +13,4 @@\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n-       SOAPElementFactory sfe = SOAPElementFactory.newInstance();\n-       sfe.create(str1);\n-       sfe.create(str1, str2, str3);\n-       sfe.create(n);\n+       SOAPFactory sfe = SOAPFactory.newInstance();\n+       sfe.createElement(str1);\n+       sfe.createElement(str1, str2, str3);\n+       sfe.createElement(n);\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"package com.test;\n\nimport jakarta.xml.soap.Name;\nimport jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n\npublic class Test {\n    void test(SOAPEnvelope envelope) {\n        String str1 = \"test\";\n        String str2 = \"t2\";\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n        SOAPElementFactory sfe = SOAPElementFactory.newInstance();\n        sfe.create(str1);\n        sfe.create(str1, str2, str3);\n        sfe.create(n);\n    }\n}\n","after":"package com.test;\n\nimport jakarta.xml.soap.Name;\nimport jakarta.xml.soap.SOAPEnvelope;\nimport jakarta.xml.soap.SOAPFactory;\n\npublic class Test {\n    void test(SOAPEnvelope envelope) {\n        String str1 = \"test\";\n        String str2 = \"t2\";\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n        SOAPFactory sfe = SOAPFactory.newInstance();\n        sfe.createElement(str1);\n        sfe.createElement(str1, str2, str3);\n        sfe.createElement(n);\n    }\n}\n","diff":"@@ -4,1 +4,0 @@\n\nimport jakarta.xml.soap.Name;\n-import jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n@@ -6,0 +5,1 @@\nimport jakarta.xml.soap.SOAPElementFactory;\nimport jakarta.xml.soap.SOAPEnvelope;\n+import jakarta.xml.soap.SOAPFactory;\n\n@@ -13,4 +13,4 @@\n        String str3 = \"t3\";\n        Name n = envelope.createName(\"GetLastTradePrice\", \"WOMBAT\", \"http://www.abc.org/trader\");\n-       SOAPElementFactory sfe = SOAPElementFactory.newInstance();\n-       sfe.create(str1);\n-       sfe.create(str1, str2, str3);\n-       sfe.create(n);\n+       SOAPFactory sfe = SOAPFactory.newInstance();\n+       sfe.createElement(str1);\n+       sfe.createElement(str1, str2, str3);\n+       sfe.createElement(n);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory","displayName":"Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

