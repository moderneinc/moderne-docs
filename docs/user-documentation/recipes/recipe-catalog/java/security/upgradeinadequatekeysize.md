---
title: "Upgrade inadequate cryptographic key sizes"
sidebar_label: "Upgrade inadequate cryptographic key sizes"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade inadequate cryptographic key sizes"}
  description={"Rewrites cryptographic key-size literals that fall below current minimums. RSA/DSA/DH < 2048 bits are upgraded to 2048; EC < 224 bits are upgraded to 256 (when the algorithm is resolvable from `KeyPairGenerator.getInstance(...)`); symmetric (AES) < 128 bits to 128; weak named EC curves (e.g. `secp112r1`, `prime192v1`) to `secp256r1`. Companion fix recipe to `FindInadequateKeySize`. Note: changing key sizes can break interop with existing artifacts; review before applying."}
  fqName={"org.openrewrite.java.security.UpgradeInadequateKeySize"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade inadequate cryptographic key sizes"}
  description={"Rewrites cryptographic key-size literals that fall below current minimums. RSA/DSA/DH < 2048 bits are upgraded to 2048; EC < 224 bits are upgraded to 256 (when the algorithm is resolvable from `KeyPairGenerator.getInstance(...)`); symmetric (AES) < 128 bits to 128; weak named EC curves (e.g. `secp112r1`, `prime192v1`) to `secp256r1`. Companion fix recipe to `FindInadequateKeySize`. Note: changing key sizes can break interop with existing artifacts; review before applying."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-326","RSPEC-S4426"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.UpgradeInadequateKeySize"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.UpgradeInadequateKeySize"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/upgradeinadequatekeysize.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.security.KeyPairGenerator;\nimport java.security.NoSuchAlgorithmException;\n\nclass A {\n    void generateKey() throws NoSuchAlgorithmException {\n        KeyPairGenerator kpg = KeyPairGenerator.getInstance(\"RSA\");\n        kpg.initialize(1024);\n    }\n}\n","after":"import java.security.KeyPairGenerator;\nimport java.security.NoSuchAlgorithmException;\n\nclass A {\n    void generateKey() throws NoSuchAlgorithmException {\n        KeyPairGenerator kpg = KeyPairGenerator.getInstance(\"RSA\");\n        kpg.initialize(2048);\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\n    void generateKey() throws NoSuchAlgorithmException {\n        KeyPairGenerator kpg = KeyPairGenerator.getInstance(\"RSA\");\n-       kpg.initialize(1024);\n+       kpg.initialize(2048);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.UpgradeInadequateKeySize","displayName":"Upgrade inadequate cryptographic key sizes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

