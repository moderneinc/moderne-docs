---
title: "Add or replace Spring Boot build plugin with Quarkus build plugin"
sidebar_label: "Add or replace Spring Boot build plugin with Quarkus build plugin"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/migratemavenplugin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add or replace Spring Boot build plugin with Quarkus build plugin"}
  description={"Remove Spring Boot Maven plugin if present and add Quarkus Maven plugin using the same version as the quarkus-bom."}
  fqName={"org.openrewrite.quarkus.spring.MigrateMavenPlugin"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-boot-to-quarkus.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","build","maven","quarkus","migration"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.MigrateMavenPlugin"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateMavenPlugin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/migratemavenplugin.md"}
>

<RecipeHeader.Title>Add or replace Spring Boot build plugin with Quarkus build plugin</RecipeHeader.Title>

<RecipeHeader.Description>Remove Spring Boot Maven plugin if present and add Quarkus Maven plugin using the same version as the quarkus-bom.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove Maven plugin","href":"/user-documentation/recipes/recipe-catalog/maven/removeplugin/"},{"name":"Add Quarkus Maven plugin","href":"/user-documentation/recipes/recipe-catalog/quarkus/spring/addquarkusmavenplugin/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.2.5.Final</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>3.1.0</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.2.5.Final</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-maven-plugin</artifactId>\n                <version>3.2.5.Final</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>build</goal>\n                            <goal>generate-code</goal>\n                            <goal>generate-code-tests</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <extensions>true</extensions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -19,3 +19,13 @@\n        <plugins>\n            <plugin>\n-               <groupId>org.springframework.boot</groupId>\n-               <artifactId>spring-boot-maven-plugin</artifactId>\n-               <version>3.1.0</version>\n+               <groupId>io.quarkus.platform</groupId>\n+               <artifactId>quarkus-maven-plugin</artifactId>\n+               <version>3.2.5.Final</version>\n+               <executions>\n+                   <execution>\n+                       <goals>\n+                           <goal>build</goal>\n+                           <goal>generate-code</goal>\n+                           <goal>generate-code-tests</goal>\n+                       </goals>\n+                   </execution>\n+               </executions>\n+               <extensions>true</extensions>\n            </plugin>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.2.5.Final</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>3.1.0</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.2.5.Final</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-maven-plugin</artifactId>\n                <version>3.2.5.Final</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>build</goal>\n                            <goal>generate-code</goal>\n                            <goal>generate-code-tests</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <extensions>true</extensions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -19,3 +19,13 @@\n        <plugins>\n            <plugin>\n-               <groupId>org.springframework.boot</groupId>\n-               <artifactId>spring-boot-maven-plugin</artifactId>\n-               <version>3.1.0</version>\n+               <groupId>io.quarkus.platform</groupId>\n+               <artifactId>quarkus-maven-plugin</artifactId>\n+               <version>3.2.5.Final</version>\n+               <executions>\n+                   <execution>\n+                       <goals>\n+                           <goal>build</goal>\n+                           <goal>generate-code</goal>\n+                           <goal>generate-code-tests</goal>\n+                       </goals>\n+                   </execution>\n+               </executions>\n+               <extensions>true</extensions>\n            </plugin>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.MigrateMavenPlugin","displayName":"Add or replace Spring Boot build plugin with Quarkus build plugin","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

