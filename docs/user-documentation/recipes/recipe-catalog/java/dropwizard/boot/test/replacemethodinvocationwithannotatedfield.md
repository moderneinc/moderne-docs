---
title: "Replace a method invocation with a reference to an annotated field"
sidebar_label: "Replace a method invocation with a reference to an annotated field"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace a method invocation with a reference to an annotated field"}
  description={"For each class containing an invocation matching the configured method pattern, introduces an annotated field of the requested type and rewrites every matching invocation in that class to reference the new field. If a field with the same annotation and type already exists, its name is reused."}
  fqName={"io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/replacemethodinvocationwithannotatedfield.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace a method invocation with a reference to an annotated field</RecipeHeader.Title>

<RecipeHeader.Description>For each class containing an invocation matching the configured method pattern, introduces an annotated field of the requested type and rewrites every matching invocation in that class to reference the new field. If a field with the same annotation and type already exists, its name is reused.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern matched against the invocation to replace. A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results.","example":"io.dropwizard.testing.junit5.DropwizardAppExtension getLocalPort()"},{"type":"String","name":"fieldType","required":true,"description":"Either a primitive keyword (e.g. `int`) or a fully qualified class name for the field's type.","example":"int"},{"type":"String","name":"annotationFqn","required":true,"description":"Fully qualified annotation type to place on the new field.","example":"org.springframework.boot.test.web.server.LocalServerPort"},{"type":"String","name":"preferredFieldName","required":true,"description":"Name to give the new field. If a same-named field already exists in the class, an incrementing suffix is appended to avoid collision.","example":"localPort"},{"type":"List","name":"classpathResources","required":true,"description":"Resource patterns passed to the JavaParser used by the field-injection template.","example":"spring-boot-test-3.*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"GET_LOCAL_PORT_PATTERN"},{"parameter":"fieldType","value":"int"},{"parameter":"annotationFqn","value":"org.springframework.boot.test.web.server.LocalServerPort"},{"parameter":"preferredFieldName","value":"localPort"},{"parameter":"classpathResources","value":"List.of(\"spring-boot-test-3\")"}],"unchanged":{"language":"java","code":"import io.dropwizard.core.Application;\nimport io.dropwizard.core.Configuration;\nimport io.dropwizard.core.setup.Environment;\npublic class TestApp extends Application<Configuration> {\n    @Override public void run(Configuration c, Environment e) {}\n}\n"},"variants":[{"language":"java","before":"import io.dropwizard.core.Configuration;\nimport io.dropwizard.testing.junit5.DropwizardAppExtension;\n\nabstract class AbstractComponentTest {\n    static final DropwizardAppExtension<Configuration> DROPWIZARD =\n        new DropwizardAppExtension<>(TestApp.class, \"server.yml\");\n\n    void someTest() {\n        int port = DROPWIZARD.getLocalPort();\n    }\n}\n","after":"import io.dropwizard.core.Configuration;\nimport io.dropwizard.testing.junit5.DropwizardAppExtension;\nimport org.springframework.boot.test.web.server.LocalServerPort;\n\nabstract class AbstractComponentTest {\n    @LocalServerPort\n    int localPort;\n    static final DropwizardAppExtension<Configuration> DROPWIZARD =\n        new DropwizardAppExtension<>(TestApp.class, \"server.yml\");\n\n    void someTest() {\n        int port = localPort;\n    }\n}\n","diff":"@@ -3,0 +3,1 @@\nimport io.dropwizard.core.Configuration;\nimport io.dropwizard.testing.junit5.DropwizardAppExtension;\n+import org.springframework.boot.test.web.server.LocalServerPort;\n\n@@ -5,0 +6,2 @@\n\nabstract class AbstractComponentTest {\n+   @LocalServerPort\n+   int localPort;\n    static final DropwizardAppExtension<Configuration> DROPWIZARD =\n@@ -9,1 +12,1 @@\n\n    void someTest() {\n-       int port = DROPWIZARD.getLocalPort();\n+       int port = localPort;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField","displayName":"Replace a method invocation with a reference to an annotated field","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=io.dropwizard.testing.junit5.DropwizardAppExtension getLocalPort()\" --recipe-option \"fieldType=int\" --recipe-option \"annotationFqn=org.springframework.boot.test.web.server.LocalServerPort\" --recipe-option \"preferredFieldName=localPort\" --recipe-option \"classpathResources=spring-boot-test-3.*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

