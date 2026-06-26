---
title: "OWASP top ten"
sidebar_label: "OWASP top ten"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"OWASP top ten"}
  description={"This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs.\nFor more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter-beta/)."}
  fqName={"io.moderne.devcenter.SecurityStarter"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  displayName={"OWASP top ten"}
  description={"This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs.\nFor more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter-beta/)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.SecurityStarter"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.SecurityStarter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/securitystarter.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Remediate OWASP A01:2021 Broken access control","href":"java/security/owaspa01"},{"name":"Remediate OWASP A02:2021 Cryptographic failures","href":"java/security/owaspa02"},{"name":"Remediate OWASP A03:2021 Injection","href":"java/security/owaspa03"},{"name":"Remediate OWASP A08:2021 Software and data integrity failures","href":"java/security/owaspa08"},{"name":"Regular Expression Denial of Service (ReDOS)","href":"java/security/regularexpressiondenialofservice"},{"name":"Zip slip","href":"java/security/zipslip"},{"name":"Use secure temporary file creation","href":"java/security/securetempfilecreation"},{"name":"Report as security issues","href":"devcenter/reportassecurityissues"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.io.File;\n\nclass Foo {\n  void bar() {\n    File tmp = File.createTempFile(\"prefix\", \"suffix\");\n  }\n}\n","after":"import java.io.File;\nimport java.nio.file.Files;\n\nclass Foo {\n  void bar() {\n    File tmp = Files.createTempFile(\"prefix\", \"suffix\").toFile();\n  }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport java.io.File;\n+import java.nio.file.Files;\n\n@@ -5,1 +6,1 @@\nclass Foo {\n  void bar() {\n-   File tmp = File.createTempFile(\"prefix\", \"suffix\");\n+   File tmp = Files.createTempFile(\"prefix\", \"suffix\").toFile();\n  }\n","newFile":false}]},{"variants":[{"language":"java","before":"import java.io.File;\n\nclass Foo {\n  void bar() {\n    File tmp = File.createTempFile(\"prefix\", \"suffix\");\n  }\n}\n","after":"import java.io.File;\nimport java.nio.file.Files;\n\nclass Foo {\n  void bar() {\n    File tmp = Files.createTempFile(\"prefix\", \"suffix\").toFile();\n  }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport java.io.File;\n+import java.nio.file.Files;\n\n@@ -5,1 +6,1 @@\nclass Foo {\n  void bar() {\n-   File tmp = File.createTempFile(\"prefix\", \"suffix\");\n+   File tmp = Files.createTempFile(\"prefix\", \"suffix\").toFile();\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.devcenter.SecurityStarter","displayName":"OWASP top ten","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.table.MethodCalls","displayName":"Method calls","description":"The text of matching method invocations.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Method call","description":"The text of the method call."},{"name":"Class name","description":"The class name of the method call."},{"name":"Method name","description":"The method name of the method call."},{"name":"Argument types","description":"The argument types of the method call."}]},{"name":"org.openrewrite.java.security.table.MissingAuthorization","displayName":"Missing authorization","description":"Spring MVC handler methods reachable to anonymous users without an explicit authorization annotation.","columns":[{"name":"Source path","description":"The path to the source file containing the handler method."},{"name":"Controller class","description":"The fully qualified name of the controller class."},{"name":"Handler method","description":"The name of the handler method."},{"name":"HTTP method","description":"The HTTP method served by the handler."},{"name":"URL pattern","description":"The combined class- and method-level request mapping pattern."},{"name":"Reason","description":"Why the handler is considered to be missing authorization."}]},{"name":"io.moderne.devcenter.table.SecurityIssues","displayName":"Security issues","description":"Security issues in the repository.","columns":[{"name":"Ordinal","description":"The ordinal position of this issue relative to other issues."},{"name":"Issue name","description":"The name of the security issue."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

