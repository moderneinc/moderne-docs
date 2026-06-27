---
title: "Add the Develocity Maven extension"
sidebar_label: "Add the Develocity Maven extension"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/adddevelocitymavenextension" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add the Develocity Maven extension"}
  description={"To integrate the Develocity Maven extension into Maven projects, ensure that the `develocity-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/develocity.xml` configuration file."}
  fqName={"org.openrewrite.maven.AddDevelocityMavenExtension"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddDevelocityMavenExtension.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.AddDevelocityMavenExtension"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.AddDevelocityMavenExtension"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/adddevelocitymavenextension.md"}
>

<RecipeHeader.Title>Add the Develocity Maven extension</RecipeHeader.Title>

<RecipeHeader.Description>To integrate the Develocity Maven extension into Maven projects, ensure that the `develocity-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/develocity.xml` configuration file.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"version","required":false,"description":"A maven-compatible version number to select the gradle-enterprise-maven-extension version.","example":"1.17.4"},{"type":"String","name":"server","required":true,"description":"The URL of the Develocity server.","example":"https://scans.gradle.com/"},{"type":"Boolean","name":"allowUntrustedServer","required":false,"description":"When set to `true` the extension will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the extension will refuse to communicate without transport layer security enabled.","example":"true"},{"type":"Boolean","name":"fileFingerprints","required":false,"description":"When set to `true` the extension will capture additional information about the inputs to Maven goals. This increases the size of build scans, but is useful for diagnosing issues with goal caching. ","example":"true"},{"type":"Boolean","name":"uploadInBackground","required":false,"description":"When set to `false` the extension will not upload build scan in the background. By default, build scans are uploaded in the background after the build has finished to avoid blocking the build process.","example":"false"},{"type":"PublishCriteria","name":"publishCriteria","required":false,"description":"When set to `Always` the extension will publish build scans of every single build. This is the default behavior when omitted.When set to `Failure` the extension will only publish build scans when the build fails. When set to `Demand` the extension will only publish build scans when explicitly requested.","example":"Always"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"version","value":"1.17"},{"parameter":"server","value":"https://foo"},{"parameter":"allowUntrustedServer","value":"null"},{"parameter":"fileFingerprints","value":"null"},{"parameter":"uploadInBackground","value":"null"},{"parameter":"publishCriteria","value":"null"}],"unchanged":{"language":"xml","code":"<project>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n</project>\n"},"variants":[{"language":"xml","before":"","after":"<gradleEnterprise>\n  <server>\n    <url>https://foo</url>\n  </server>\n</gradleEnterprise>\n","newFile":true},{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<extensions>\n</extensions>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<extensions>\n  <extension>\n    <groupId>com.gradle</groupId>\n    <artifactId>gradle-enterprise-maven-extension</artifactId>\n    <version>1.17</version>\n  </extension>\n</extensions>\n","diff":"--- .mvn/extensions.xml\n+++ .mvn/extensions.xml\n@@ -3,0 +3,5 @@\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<extensions>\n+ <extension>\n+   <groupId>com.gradle</groupId>\n+   <artifactId>gradle-enterprise-maven-extension</artifactId>\n+   <version>1.17</version>\n+ </extension>\n</extensions>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.AddDevelocityMavenExtension","displayName":"Add the Develocity Maven extension","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=1.17.4\" --recipe-option \"server=https://scans.gradle.com/\" --recipe-option \"allowUntrustedServer=true\" --recipe-option \"fileFingerprints=true\" --recipe-option \"uploadInBackground=false\" --recipe-option \"publishCriteria=Always\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

