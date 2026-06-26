---
title: "Find hard-coded private IPv4 addresses"
sidebar_label: "Find hard-coded private IPv4 addresses"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find hard-coded private IPv4 addresses"}
  description={"Locates mentions of hard-coded IPv4 addresses from private IP ranges. Private IP ranges include: \n * `192.168.0.0` to `192.168.255.255`\n * `10.0.0.0` to `10.255.255.255`\n * `172.16.0.0` to `172.31.255.255`\n\nIt is not detecting the localhost subnet `127.0.0.0` to `127.255.255.255`."}
  fqName={"org.openrewrite.text.FindHardcodedPrivateIPAddresses"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find hard-coded private IPv4 addresses"}
  description={"Locates mentions of hard-coded IPv4 addresses from private IP ranges. Private IP ranges include: \n * `192.168.0.0` to `192.168.255.255`\n * `10.0.0.0` to `10.255.255.255`\n * `172.16.0.0` to `172.31.255.255`\n\nIt is not detecting the localhost subnet `127.0.0.0` to `127.255.255.255`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.text.FindHardcodedPrivateIPAddresses"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.text.FindHardcodedPrivateIPAddresses"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/text/findhardcodedprivateipaddresses.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    void ipTest() {\n        String privateAddress1 = \"10.10.20.20\";\n        String privateAddress2 = \"192.168.20.20\";\n        String privateAddress3 = \"172.16.20.20\";\n        String wordBoundaries = \"1000000192.168.1.1aaa\";\n        String nonPrivate = \"1.1.1.1\";\n        String nonAddress = \"256.0.0.0\";\n        String springVersion = \"5.2.2\";\n        String adding = \"4.3+4.5\";\n        // address in a comment: 10.1.2.3\n        // address in a comment: 192.168.2.3\n        // address in a comment: 172.16.2.3\n        String date = \"30.11.2017\";\n        String ikeaProduct = \"805.721.99\";\n    }\n}\n","after":"class Test {\n    void ipTest() {\n        String privateAddress1 = \"~~>10.10.20.20\";\n        String privateAddress2 = \"~~>192.168.20.20\";\n        String privateAddress3 = \"~~>172.16.20.20\";\n        String wordBoundaries = \"1000000192.168.1.1aaa\";\n        String nonPrivate = \"1.1.1.1\";\n        String nonAddress = \"256.0.0.0\";\n        String springVersion = \"5.2.2\";\n        String adding = \"4.3+4.5\";\n        // address in a comment: ~~>10.1.2.3\n        // address in a comment: ~~>192.168.2.3\n        // address in a comment: ~~>172.16.2.3\n        String date = \"30.11.2017\";\n        String ikeaProduct = \"805.721.99\";\n    }\n}\n","diff":"--- src/main/java/A.java\n+++ src/main/java/A.java\n@@ -3,3 +3,3 @@\nclass Test {\n    void ipTest() {\n-       String privateAddress1 = \"10.10.20.20\";\n-       String privateAddress2 = \"192.168.20.20\";\n-       String privateAddress3 = \"172.16.20.20\";\n+       String privateAddress1 = \"~~>10.10.20.20\";\n+       String privateAddress2 = \"~~>192.168.20.20\";\n+       String privateAddress3 = \"~~>172.16.20.20\";\n        String wordBoundaries = \"1000000192.168.1.1aaa\";\n@@ -11,3 +11,3 @@\n        String springVersion = \"5.2.2\";\n        String adding = \"4.3+4.5\";\n-       // address in a comment: 10.1.2.3\n-       // address in a comment: 192.168.2.3\n-       // address in a comment: 172.16.2.3\n+       // address in a comment: ~~>10.1.2.3\n+       // address in a comment: ~~>192.168.2.3\n+       // address in a comment: ~~>172.16.2.3\n        String date = \"30.11.2017\";\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.text.FindHardcodedPrivateIPAddresses","displayName":"Find hard-coded private IPv4 addresses","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.text.table.HardcodedPrivateIPAddresses","displayName":"Hardcoded private IP addresses","description":"This table lists locations of hardcoded private IPv4 addresses and their value found in source files.","columns":[{"name":"Source Path","description":"The path to the source file containing the hard-coded IP address."},{"name":"IP Address","description":"The hard-coded private IPv4 address found in the source file."},{"name":"Line Number","description":"The line number in the source file where the hard-coded IP address is found."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

