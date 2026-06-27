---
title: "Remove hard-coded IP addresses from comments"
sidebar_label: "Remove hard-coded IP addresses from comments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove hard-coded IP addresses from comments"}
  description={"Removes hard-coded IPv4 addresses from comments when they match private IP ranges or loopback addresses. This targets IP addresses that are commented out in various comment formats:\n\n**Private IP ranges:**\n * `192.168.0.0` to `192.168.255.255`\n * `10.0.0.0` to `10.255.255.255`\n * `172.16.0.0` to `172.31.255.255`\n\n**Loopback IP range:**\n * `127.0.0.0` to `127.255.255.255`\n\n**Supported comment formats:**\n * C-style line comments (`//`)\n * C-style block comments (`/* */`)\n * Shell/Python style comments (`#`)\n * XML comments (`<!-- -->`)\n * YAML comments (`#`)\n * Properties file comments (`#` or `!`)\n\nFor line comments, the entire line is removed. For block comments, only the IP address is removed."}
  fqName={"org.openrewrite.text.RemoveHardcodedIPAddressesFromComments"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.text.RemoveHardcodedIPAddressesFromComments"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.text.RemoveHardcodedIPAddressesFromComments"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/text/removehardcodedipaddressesfromcomments.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove hard-coded IP addresses from comments</RecipeHeader.Title>

<RecipeHeader.Description>

Removes hard-coded IPv4 addresses from comments when they match private IP ranges or loopback addresses. This targets IP addresses that are commented out in various comment formats:

**Private IP ranges:**
 * `192.168.0.0` to `192.168.255.255`
 * `10.0.0.0` to `10.255.255.255`
 * `172.16.0.0` to `172.31.255.255`

**Loopback IP range:**
 * `127.0.0.0` to `127.255.255.255`

**Supported comment formats:**
 * C-style line comments (`//`)
 * C-style block comments (`/* */`)
 * Shell/Python style comments (`#`)
 * XML comments (`<!-- -->`)
 * YAML comments (`#`)
 * Properties file comments (`#` or `!`)

For line comments, the entire line is removed. For block comments, only the IP address is removed.

</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"ipAddressReplacement","required":false,"description":"If specified, replaces hard-coded IP addresses with this value. Default is 'IP_ADDRESS_REPLACED'","example":"IP_ADDRESS_REPLACED"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"ipAddressReplacement","value":"null"}],"variants":[{"language":"java","before":"class Test {\n    void ipTest() {\n        String host = \"localhost\";\n        // Testing with 127.0.0.1\n        // Also try 127.1.1.1\n        String publicAddress = \"8.8.8.8\";\n        // Boundary case: 127.255.255.255\n    }\n}\n","after":"class Test {\n    void ipTest() {\n        String host = \"localhost\";\n        // Testing with IP_ADDRESS_REPLACED\n        // Also try IP_ADDRESS_REPLACED\n        String publicAddress = \"8.8.8.8\";\n        // Boundary case: IP_ADDRESS_REPLACED\n    }\n}\n","diff":"@@ -4,2 +4,2 @@\n    void ipTest() {\n        String host = \"localhost\";\n-       // Testing with 127.0.0.1\n-       // Also try 127.1.1.1\n+       // Testing with IP_ADDRESS_REPLACED\n+       // Also try IP_ADDRESS_REPLACED\n        String publicAddress = \"8.8.8.8\";\n@@ -7,1 +7,1 @@\n        // Also try 127.1.1.1\n        String publicAddress = \"8.8.8.8\";\n-       // Boundary case: 127.255.255.255\n+       // Boundary case: IP_ADDRESS_REPLACED\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.text.RemoveHardcodedIPAddressesFromComments","displayName":"Remove hard-coded IP addresses from comments","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

