---
title: "Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0"
sidebar_label: "Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0"}
  description={"Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x."}
  fqName={"org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml"}
/>

<RecipeHeader
  displayName={"Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0"}
  description={"Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["spring","cloud","tracing","sleuth","micrometer"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md"}
/>

<RecipeList recipes={[{"name":"Add logging.pattern.level for traceId and spanId","href":"java/spring/cloud2022/addloggingpatternlevelforsleuth"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Add Gradle or Maven dependency","href":"java/dependencies/adddependency"},{"name":"Add Gradle or Maven dependency","href":"java/dependencies/adddependency"},{"name":"Add Gradle or Maven dependency","href":"java/dependencies/adddependency"},{"name":"Remove a Gradle or Maven dependency","href":"java/dependencies/removedependency"},{"name":"Remove Maven managed dependency","href":"maven/removemanageddependency"},{"name":"Remove redundant explicit dependency and plugin versions","href":"maven/removeredundantdependencyversions"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Delete a spring configuration property","href":"java/spring/deletespringproperty"},{"name":"Delete a spring configuration property","href":"java/spring/deletespringproperty"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Delete a spring configuration property","href":"java/spring/deletespringproperty"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"},{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.cloud.sleuth.Tracer;\n\npublic class SessionInfoOperator {\n    private Tracer tracer;\n\n    public SessionInfoOperator(Tracer tracer) {\n        this.tracer = tracer;\n    }\n\n    public boolean getSessionInfo(String key) {\n        return tracer.currentSpan().isNoop();\n    }\n}\n","after":"import io.micrometer.tracing.Tracer;\n\npublic class SessionInfoOperator {\n    private Tracer tracer;\n\n    public SessionInfoOperator(Tracer tracer) {\n        this.tracer = tracer;\n    }\n\n    public boolean getSessionInfo(String key) {\n        return tracer.currentSpan().isNoop();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.springframework.cloud.sleuth.Tracer;\n+import io.micrometer.tracing.Tracer;\n\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.sleuth.baggage.correlation-enabled=true\n","after":"management.tracing.baggage.correlation.enabled=true\n","diff":"--- src/main/resources/application.properties\n+++ src/main/resources/application.properties\n@@ -1,1 +1,1 @@\n-spring.sleuth.baggage.correlation-enabled=true\n+management.tracing.baggage.correlation.enabled=true\n\n","newFile":false},{"language":"yaml","before":"spring:\n    sleuth:\n        baggage:\n            correlation-enabled: true\n","after":"management.tracing.baggage.correlation.enabled: true\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -1,4 +1,1 @@\n-spring:\n-   sleuth:\n-       baggage:\n-           correlation-enabled: true\n+management.tracing.baggage.correlation.enabled: true\n\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.springframework.cloud.sleuth.Tracer;\n\npublic class SessionInfoOperator {\n    private Tracer tracer;\n\n    public SessionInfoOperator(Tracer tracer) {\n        this.tracer = tracer;\n    }\n\n    public boolean getSessionInfo(String key) {\n        return tracer.currentSpan().isNoop();\n    }\n}\n","after":"import io.micrometer.tracing.Tracer;\n\npublic class SessionInfoOperator {\n    private Tracer tracer;\n\n    public SessionInfoOperator(Tracer tracer) {\n        this.tracer = tracer;\n    }\n\n    public boolean getSessionInfo(String key) {\n        return tracer.currentSpan().isNoop();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.springframework.cloud.sleuth.Tracer;\n+import io.micrometer.tracing.Tracer;\n\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.sleuth.baggage.correlation-enabled=true\n","after":"management.tracing.baggage.correlation.enabled=true\n","diff":"--- src/main/resources/application.properties\n+++ src/main/resources/application.properties\n@@ -1,1 +1,1 @@\n-spring.sleuth.baggage.correlation-enabled=true\n+management.tracing.baggage.correlation.enabled=true\n\n","newFile":false},{"language":"yaml","before":"spring:\n    sleuth:\n        baggage:\n            correlation-enabled: true\n","after":"management.tracing.baggage.correlation.enabled: true\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -1,4 +1,1 @@\n-spring:\n-   sleuth:\n-       baggage:\n-           correlation-enabled: true\n+management.tracing.baggage.correlation.enabled: true\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing","displayName":"Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

