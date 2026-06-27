---
title: "Find weak cryptographic primitives"
sidebar_label: "Find weak cryptographic primitives"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find weak cryptographic primitives"}
  description={"Broken hash algorithms (MD2/MD5/SHA-1), broken or undersized ciphers (DES / 3DES / RC2 / RC4 / Blowfish / bare AES / AES-ECB), weak key material (DES key generation, DES `SecretKeySpec`, sub-2048-bit RSA), predictable IVs, and non-cryptographic random sources used in security-adjacent code."}
  fqName={"org.openrewrite.kotlin.security.FindWeakCryptography$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.security.FindWeakCryptography$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.security.FindWeakCryptography$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcryptography$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Find weak cryptographic primitives</RecipeHeader.Title>

<RecipeHeader.Description>Broken hash algorithms (MD2/MD5/SHA-1), broken or undersized ciphers (DES / 3DES / RC2 / RC4 / Blowfish / bare AES / AES-ECB), weak key material (DES key generation, DES `SecretKeySpec`, sub-2048-bit RSA), predictable IVs, and non-cryptographic random sources used in security-adjacent code.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find `MessageDigest.getInstance(\"MD2\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashmd2$ktrecipe/"},{"name":"Find `MessageDigest.getInstance(\"MD5\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashmd5$ktrecipe/"},{"name":"Find `MessageDigest.getInstance(\"SHA-1\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashsha1$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"DES...\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherdes$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"DESede\"/\"TripleDES\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakciphertripledes$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"RC2\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherrc2$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"RC4\"/\"ARCFOUR\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherrc4$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"Blowfish\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherblowfish$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"AES/ECB/...\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findcipherecbmode$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"AES\")` calls without a mode","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findaesdefaultmode$ktrecipe/"},{"name":"Find `Cipher.getInstance(\"AES/CBC/...\")` calls — verify integrity","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findciphercbcwithoutmac$ktrecipe/"},{"name":"Find `KeyGenerator.getInstance(\"DES\")` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findkeygeneratordes$ktrecipe/"},{"name":"Find `SecretKeySpec(_, \"DES\")` constructions","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findsecretkeyspecdes$ktrecipe/"},{"name":"Find `KeyPairGenerator.getInstance(\"RSA\")` callers — verify 2048+ key size","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findrsakeysizebelow2048$ktrecipe/"},{"name":"Find `IvParameterSpec(byteArrayOf(...))` constructions with a literal IV","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findpredictableiv$ktrecipe/"},{"name":"Find `java.util.Random()` allocations","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findjavautilrandomforsecurity$ktrecipe/"},{"name":"Find `kotlin.random.Random.Default` references","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findkotlinrandomforsecurity$ktrecipe/"},{"name":"Find `String.toByteArray()` calls without an explicit charset","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findstringtobytearraydefaultcharset$ktrecipe/"},{"name":"Find two-argument `Cipher.init(opmode, key)` calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findcipherinitwithoutsecurerandom$ktrecipe/"},{"name":"Find `NullCipher()` allocations","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findnullcipher$ktrecipe/"},{"name":"Find `PBEKeySpec(..., iterations, ...)` with low iteration counts","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findpbkdf2lowiterationcount$ktrecipe/"},{"name":"Find `SecureRandom.setSeed(...)` with a literal seed","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findsecurerandomsetseed$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.security.FindWeakCryptography$KtRecipe","displayName":"Find weak cryptographic primitives","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

