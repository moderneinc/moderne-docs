---
title: "Configure logback logger level"
sidebar_label: "Configure logback logger level"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/logback/configureloggerlevel" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Configure logback logger level"}
  description={"Within logback.xml configuration files sets the specified log level for a particular class. Will not create a logback.xml if one does not already exist."}
  fqName={"org.openrewrite.java.logging.logback.ConfigureLoggerLevel"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/logback/ConfigureLoggerLevel.java"}
/>

<RecipeHeader
  displayName={"Configure logback logger level"}
  description={"Within logback.xml configuration files sets the specified log level for a particular class. Will not create a logback.xml if one does not already exist."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.logback.ConfigureLoggerLevel"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.logback.ConfigureLoggerLevel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/logback/configureloggerlevel.md"}
/>

<OptionsTable options={[{"type":"String","name":"className","required":true,"description":"The fully qualified class name to configure the log level for","example":"com.example.MyClass"},{"type":"LogLevel","name":"logLevel","required":true,"description":"The log level to set for the class","example":"off"},{"type":"String","name":"filePattern","required":false,"description":"A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, '**/logback.xml' is used.","example":"**/logback-spring.xml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"className","value":"org.springframework"},{"parameter":"logLevel","value":"ConfigureLoggerLevel.LogLevel.off"},{"parameter":"filePattern","value":"null"}],"variants":[{"language":"xml","before":"<configuration>\n    <appender name=\"STDOUT\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <layout class=\"ch.qos.logback.classic.PatternLayout\">\n            <Pattern>\n                %d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n\n            </Pattern>\n        </layout>\n    </appender>\n\n    <logger name=\"org.springframework\" level=\"error\" additivity=\"false\">\n        <appender-ref ref=\"STDOUT\" />\n    </logger>\n</configuration>\n","after":"<configuration>\n    <appender name=\"STDOUT\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <layout class=\"ch.qos.logback.classic.PatternLayout\">\n            <Pattern>\n                %d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n\n            </Pattern>\n        </layout>\n    </appender>\n\n    <logger name=\"org.springframework\" level=\"off\" additivity=\"false\">\n        <appender-ref ref=\"STDOUT\" />\n    </logger>\n</configuration>\n","diff":"--- logback.xml\n+++ logback.xml\n@@ -10,1 +10,1 @@\n    </appender>\n\n-   <logger name=\"org.springframework\" level=\"error\" additivity=\"false\">\n+   <logger name=\"org.springframework\" level=\"off\" additivity=\"false\">\n        <appender-ref ref=\"STDOUT\" />\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.logback.ConfigureLoggerLevel","displayName":"Configure logback logger level","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":true,"cliOptions":" --recipe-option \"className=com.example.MyClass\" --recipe-option \"logLevel=off\" --recipe-option \"filePattern='**/logback-spring.xml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

