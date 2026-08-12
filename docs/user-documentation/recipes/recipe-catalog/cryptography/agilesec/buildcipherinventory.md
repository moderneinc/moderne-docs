---
title: "Build cryptographic cipher inventory"
sidebar_label: "Build cryptographic cipher inventory"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Build cryptographic cipher inventory"}
  description={"Builds a cipher inventory for Keyfactor AgileSec by detecting insecure cryptographic algorithm usages across Java (JCA/JCE and BouncyCastle), C# (.NET) and C/C++ (OpenSSL) sources. Every detection is recorded in the shared cipher inventory data table with the algorithm, its function, the library and language, the precise source location, and repository provenance. Phase 1 covers DES, 3DES, RC2, RC4, Blowfish, MD2, MD4, MD5, SHA1 and HMAC-SHA1."}
  fqName={"io.moderne.cryptography.agilesec.BuildCipherInventory"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.agilesec.BuildCipherInventory"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.agilesec.BuildCipherInventory"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/agilesec/buildcipherinventory.md"}
  moderneOnly
>

<RecipeHeader.Title>Build cryptographic cipher inventory</RecipeHeader.Title>

<RecipeHeader.Description>Builds a cipher inventory for Keyfactor AgileSec by detecting insecure cryptographic algorithm usages across Java (JCA/JCE and BouncyCastle), C# (.NET) and C/C++ (OpenSSL) sources. Every detection is recorded in the shared cipher inventory data table with the algorithm, its function, the library and language, the precise source location, and repository provenance. Phase 1 covers DES, 3DES, RC2, RC4, Blowfish, MD2, MD4, MD5, SHA1 and HMAC-SHA1.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find insecure Java cryptography","href":"/user-documentation/recipes/recipe-catalog/cryptography/agilesec/findinsecurejavacryptography/"},{"name":"Find insecure C# cryptography","href":"/user-documentation/recipes/recipe-catalog/cryptography/agilesec/findinsecurecsharpcryptography/"},{"name":"Find insecure C/C++ cryptography","href":"/user-documentation/recipes/recipe-catalog/cryptography/agilesec/findinsecurenativecryptography/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.agilesec.BuildCipherInventory","displayName":"Build cryptographic cipher inventory","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.agilesec.table.CipherInventoryTable","displayName":"Cipher inventory","description":"Cryptographic algorithm usages detected in source code, including the algorithm, its function, the library and language, the precise source location, and repository provenance.","columns":[{"name":"Algorithm name","description":"The canonical algorithm name, e.g. DES, 3DES, RC2, RC4, Blowfish, MD5, SHA1, HMAC-SHA1."},{"name":"Algorithm function","description":"What the algorithm is used for, e.g. Encryption/Decryption, Hashing, MAC/Signing."},{"name":"Algorithm parameter","description":"Additional parameters captured from the API such as mode of operation, padding, key length or digest length. Empty when not expressed at the call site."},{"name":"Insecure","description":"Whether the algorithm is considered cryptographically weak or broken."},{"name":"Code snippet","description":"The source code of the detected API usage, e.g. Cipher.getInstance(\"DES\")."},{"name":"Library name","description":"The cryptographic library providing the API, e.g. JCA/JCE, BouncyCastle, OpenSSL, .NET Crypto."},{"name":"Library language","description":"The programming language of the source, e.g. Java, C#, C/C++."},{"name":"File location","description":"The path of the source file relative to the repository root."},{"name":"Start line","description":"1-based line of the start of the API usage."},{"name":"Start column","description":"0-based column of the start of the API usage, or -1 when unavailable."},{"name":"Start offset","description":"0-based character offset of the start of the API usage, or -1 when unavailable."},{"name":"End line","description":"1-based line of the end of the API usage."},{"name":"End column","description":"0-based column of the end of the API usage, or -1 when unavailable."},{"name":"End offset","description":"0-based character offset of the end of the API usage, or -1 when unavailable."},{"name":"Repository name","description":"The repository name from Git provenance, e.g. payment-service. Empty when unknown."},{"name":"Scan source","description":"Where the source was scanned from, derived from Git provenance, e.g. GitHub, GitLab, Local Repository."},{"name":"Branch","description":"The branch from Git provenance, e.g. main. Empty when unknown."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

