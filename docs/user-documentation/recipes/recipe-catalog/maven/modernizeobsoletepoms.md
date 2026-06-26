---
title: "Modernize obsolete Maven poms"
sidebar_label: "Modernize obsolete Maven poms"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/modernizeobsoletepoms" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize obsolete Maven poms"}
  description={"Very old Maven poms are no longer supported by current versions of Maven. This recipe updates poms with `<pomVersion>3</pomVersion>` to `<modelVersion>4.0.0</modelVersion>` of the Maven pom schema. This does not attempt to upgrade old dependencies or plugins and is best regarded as the starting point of a migration rather than an end-point."}
  fqName={"org.openrewrite.maven.ModernizeObsoletePoms"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ModernizeObsoletePoms.java"}
/>

<RecipeHeader
  displayName={"Modernize obsolete Maven poms"}
  description={"Very old Maven poms are no longer supported by current versions of Maven. This recipe updates poms with `<pomVersion>3</pomVersion>` to `<modelVersion>4.0.0</modelVersion>` of the Maven pom schema. This does not attempt to upgrade old dependencies or plugins and is best regarded as the starting point of a migration rather than an end-point."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ModernizeObsoletePoms"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ModernizeObsoletePoms"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/modernizeobsoletepoms.md"}
/>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <pomVersion>3</pomVersion>\n    <groupId>org.jvnet.staxex</groupId>\n    <artifactId>stax-ex</artifactId>\n    <name>Extended StAX API</name>\n    <currentVersion>1.0</currentVersion>\n    <description>Extensions to JSR-173 StAX API.</description>\n    <issueTrackingUrl>https://stax-ex.dev.java.net/servlets/ProjectIssues</issueTrackingUrl>\n    <organization>\n        <name>java.net</name>\n        <url>http://java.net/</url>\n        <logo>\n            https://stax-ex.dev.java.net/branding/images/header_jnet_new.jpg\n        </logo>\n    </organization>\n    <repository>\n        <connection>scm:cvs:pserver:guest@cvs.dev.java.net:/cvs:stax-ex</connection>\n        <url>https://stax-ex.dev.java.net/source/browse/stax-ex</url>\n    </repository>\n    <package>org.jvnet.staxex</package>\n    <build>\n        <sourceDirectory>src/java</sourceDirectory>\n        <unitTest/>\n        <resources>\n          <resource>\n            <directory>src/resources</directory>\n          </resource>\n        </resources>\n    </build>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.jvnet.staxex</groupId>\n    <artifactId>stax-ex</artifactId>\n    <name>Extended StAX API</name>\n    <version>1.0</version>\n    <description>Extensions to JSR-173 StAX API.</description>\n    <issueManagement>\n        <system>IssueTracker</system>\n        <url>https://stax-ex.dev.java.net/servlets/ProjectIssues</url>\n    </issueManagement>\n    <organization>\n        <name>java.net</name>\n        <url>http://java.net/</url>\n    </organization>\n    <repositories>\n        <repository>\n            <id>repo</id>\n            <url>https://stax-ex.dev.java.net/source/browse/stax-ex</url>\n        </repository>\n    </repositories>\n    <build>\n        <sourceDirectory>src/java</sourceDirectory>\n        <resources>\n          <resource>\n            <directory>src/resources</directory>\n          </resource>\n        </resources>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -2,1 +2,1 @@\n<project>\n-   <pomVersion>3</pomVersion>\n+   <modelVersion>4.0.0</modelVersion>\n    <groupId>org.jvnet.staxex</groupId>\n@@ -6,1 +6,1 @@\n    <artifactId>stax-ex</artifactId>\n    <name>Extended StAX API</name>\n-   <currentVersion>1.0</currentVersion>\n+   <version>1.0</version>\n    <description>Extensions to JSR-173 StAX API.</description>\n@@ -8,1 +8,4 @@\n    <currentVersion>1.0</currentVersion>\n    <description>Extensions to JSR-173 StAX API.</description>\n-   <issueTrackingUrl>https://stax-ex.dev.java.net/servlets/ProjectIssues</issueTrackingUrl>\n+   <issueManagement>\n+       <system>IssueTracker</system>\n+       <url>https://stax-ex.dev.java.net/servlets/ProjectIssues</url>\n+   </issueManagement>\n    <organization>\n@@ -12,3 +15,0 @@\n        <name>java.net</name>\n        <url>http://java.net/</url>\n-       <logo>\n-           https://stax-ex.dev.java.net/branding/images/header_jnet_new.jpg\n-       </logo>\n    </organization>\n@@ -16,5 +16,6 @@\n        </logo>\n    </organization>\n-   <repository>\n-       <connection>scm:cvs:pserver:guest@cvs.dev.java.net:/cvs:stax-ex</connection>\n-       <url>https://stax-ex.dev.java.net/source/browse/stax-ex</url>\n-   </repository>\n-   <package>org.jvnet.staxex</package>\n+   <repositories>\n+       <repository>\n+           <id>repo</id>\n+           <url>https://stax-ex.dev.java.net/source/browse/stax-ex</url>\n+       </repository>\n+   </repositories>\n    <build>\n@@ -23,1 +24,0 @@\n    <build>\n        <sourceDirectory>src/java</sourceDirectory>\n-       <unitTest/>\n        <resources>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ModernizeObsoletePoms","displayName":"Modernize obsolete Maven poms","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

