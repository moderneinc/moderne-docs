---
title: "Add Liberty Maven plugin"
sidebar_label: "Add Liberty Maven plugin"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/liberty/addopenlibertyplugin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Liberty Maven plugin"}
  description={"This recipe adds the Liberty Maven plugin, which provides several goals for managing a Liberty server and applications."}
  fqName={"org.openrewrite.maven.liberty.AddOpenLibertyPlugin"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.liberty.AddOpenLibertyPlugin"}
  artifact={"org.openrewrite.recipe:rewrite-liberty"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.liberty.AddOpenLibertyPlugin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/liberty/addopenlibertyplugin.md"}
>

<RecipeHeader.Title>Add Liberty Maven plugin</RecipeHeader.Title>

<RecipeHeader.Description>This recipe adds the Liberty Maven plugin, which provides several goals for managing a Liberty server and applications.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Add Maven plugin","href":"/user-documentation/recipes/recipe-catalog/maven/addplugin/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.demo</groupId>\n    <artifactId>app-name</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>war</packaging>\n    <properties>\n        <maven.compiler.source>21</maven.compiler.source>\n        <maven.compiler.target>21</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.eclipse.microprofile</groupId>\n            <artifactId>microprofile</artifactId>\n            <version>6.1</version>\n            <type>pom</type>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-war-plugin</artifactId>\n                <version>3.3.2</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.demo</groupId>\n    <artifactId>app-name</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>war</packaging>\n    <properties>\n        <maven.compiler.source>21</maven.compiler.source>\n        <maven.compiler.target>21</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.eclipse.microprofile</groupId>\n            <artifactId>microprofile</artifactId>\n            <version>6.1</version>\n            <type>pom</type>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-war-plugin</artifactId>\n                <version>3.3.2</version>\n            </plugin>\n            <plugin>\n                <groupId>io.openliberty.tools</groupId>\n                <artifactId>liberty-maven-plugin</artifactId>\n                <version>3.10.3</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -28,0 +28,5 @@\n                <version>3.3.2</version>\n            </plugin>\n+           <plugin>\n+               <groupId>io.openliberty.tools</groupId>\n+               <artifactId>liberty-maven-plugin</artifactId>\n+               <version>3.10.3</version>\n+           </plugin>\n        </plugins>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.demo</groupId>\n    <artifactId>app-name</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>war</packaging>\n    <properties>\n        <maven.compiler.source>21</maven.compiler.source>\n        <maven.compiler.target>21</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.eclipse.microprofile</groupId>\n            <artifactId>microprofile</artifactId>\n            <version>6.1</version>\n            <type>pom</type>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-war-plugin</artifactId>\n                <version>3.3.2</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.demo</groupId>\n    <artifactId>app-name</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>war</packaging>\n    <properties>\n        <maven.compiler.source>21</maven.compiler.source>\n        <maven.compiler.target>21</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.eclipse.microprofile</groupId>\n            <artifactId>microprofile</artifactId>\n            <version>6.1</version>\n            <type>pom</type>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-war-plugin</artifactId>\n                <version>3.3.2</version>\n            </plugin>\n            <plugin>\n                <groupId>io.openliberty.tools</groupId>\n                <artifactId>liberty-maven-plugin</artifactId>\n                <version>3.10.3</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -28,0 +28,5 @@\n                <version>3.3.2</version>\n            </plugin>\n+           <plugin>\n+               <groupId>io.openliberty.tools</groupId>\n+               <artifactId>liberty-maven-plugin</artifactId>\n+               <version>3.10.3</version>\n+           </plugin>\n        </plugins>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.liberty.AddOpenLibertyPlugin","displayName":"Add Liberty Maven plugin","groupId":"org.openrewrite.recipe","artifactId":"rewrite-liberty","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

