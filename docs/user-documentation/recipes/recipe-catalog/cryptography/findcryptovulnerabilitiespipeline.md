---
title: "Find cryptographic vulnerability chains"
sidebar_label: "Find cryptographic vulnerability chains"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find cryptographic vulnerability chains"}
  description={"Detects cryptographic vulnerabilities that span multiple operations, tracking flow from hardcoded algorithms through key material to encryption operations."}
  fqName={"io.moderne.cryptography.FindCryptoVulnerabilitiesPipeline"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find cryptographic vulnerability chains"}
  description={"Detects cryptographic vulnerabilities that span multiple operations, tracking flow from hardcoded algorithms through key material to encryption operations."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.FindCryptoVulnerabilitiesPipeline"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.FindCryptoVulnerabilitiesPipeline"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/findcryptovulnerabilitiespipeline.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.crypto.Cipher;\nimport javax.crypto.SecretKey;\nimport javax.crypto.SecretKeyFactory;\nimport javax.crypto.spec.SecretKeySpec;\n\npublic class SimpleCrypto {\n    public byte[] encrypt(byte[] data, byte[] keyBytes) throws Exception {\n        // Hardcoded algorithm flows through the entire pipeline\n        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, \"AES\");\n        SecretKeyFactory factory = SecretKeyFactory.getInstance(\"AES\");\n        SecretKey key = factory.generateSecret(keySpec);\n        Cipher cipher = Cipher.getInstance(\"AES/ECB/PKCS5Padding\");\n        cipher.init(Cipher.ENCRYPT_MODE, key);\n        return cipher.doFinal(data);\n    }\n}\n","after":"import javax.crypto.Cipher;\nimport javax.crypto.SecretKey;\nimport javax.crypto.SecretKeyFactory;\nimport javax.crypto.spec.SecretKeySpec;\n\npublic class SimpleCrypto {\n    public byte[] encrypt(byte[] data, byte[] keyBytes) throws Exception {\n        // Hardcoded algorithm flows through the entire pipeline\n        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, /*~~(ALGORITHM source)~~>*/\"AES\");\n        SecretKeyFactory factory = SecretKeyFactory.getInstance(\"AES\");\n        SecretKey key = factory.generateSecret(keySpec);\n        Cipher cipher = Cipher.getInstance(\"AES/ECB/PKCS5Padding\");\n        cipher.init(Cipher.ENCRYPT_MODE, key);\n        return /*~~(ALGORITHM use)~~>*/cipher.doFinal(data);\n    }\n}\n","diff":"@@ -9,1 +9,1 @@\n    public byte[] encrypt(byte[] data, byte[] keyBytes) throws Exception {\n        // Hardcoded algorithm flows through the entire pipeline\n-       SecretKeySpec keySpec = new SecretKeySpec(keyBytes, \"AES\");\n+       SecretKeySpec keySpec = new SecretKeySpec(keyBytes, /*~~(ALGORITHM source)~~>*/\"AES\");\n        SecretKeyFactory factory = SecretKeyFactory.getInstance(\"AES\");\n@@ -14,1 +14,1 @@\n        Cipher cipher = Cipher.getInstance(\"AES/ECB/PKCS5Padding\");\n        cipher.init(Cipher.ENCRYPT_MODE, key);\n-       return cipher.doFinal(data);\n+       return /*~~(ALGORITHM use)~~>*/cipher.doFinal(data);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.FindCryptoVulnerabilitiesPipeline","displayName":"Find cryptographic vulnerability chains","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.analysis.java.taint.TaintFlowDataTable","displayName":"Taint flow data","description":"Tracks taint flow through pipeline stages, supporting up to 10 stages.","columns":[{"name":"Source file","description":"The source file where the taint flow was detected"},{"name":"Stage 1 Name","description":"Name of the first stage in the pipeline"},{"name":"Stage 1 Location","description":"Code location for the first stage"},{"name":"Stage 2 Name","description":"Name of the second stage in the pipeline"},{"name":"Stage 2 Location","description":"Code location for the second stage"},{"name":"Stage 3 Name","description":"Name of the third stage in the pipeline"},{"name":"Stage 3 Location","description":"Code location for the third stage"},{"name":"Stage 4 Name","description":"Name of the fourth stage in the pipeline"},{"name":"Stage 4 Location","description":"Code location for the fourth stage"},{"name":"Stage 5 Name","description":"Name of the fifth stage in the pipeline"},{"name":"Stage 5 Location","description":"Code location for the fifth stage"},{"name":"Stage 6 Name","description":"Name of the sixth stage in the pipeline"},{"name":"Stage 6 Location","description":"Code location for the sixth stage"},{"name":"Stage 7 Name","description":"Name of the seventh stage in the pipeline"},{"name":"Stage 7 Location","description":"Code location for the seventh stage"},{"name":"Stage 8 Name","description":"Name of the eighth stage in the pipeline"},{"name":"Stage 8 Location","description":"Code location for the eighth stage"},{"name":"Stage 9 Name","description":"Name of the ninth stage in the pipeline"},{"name":"Stage 9 Location","description":"Code location for the ninth stage"},{"name":"Stage 10 Name","description":"Name of the tenth stage in the pipeline"},{"name":"Stage 10 Location","description":"Code location for the tenth stage"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

