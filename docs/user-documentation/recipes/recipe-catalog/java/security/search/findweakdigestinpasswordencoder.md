---
sidebar_label: "Find weak message digests used inside custom `PasswordEncoder` implementations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find weak message digests used inside custom `PasswordEncoder` implementations

**org.openrewrite.java.security.search.FindWeakDigestInPasswordEncoder**

_Finds calls to `MessageDigest.getInstance("...")` whose algorithm is unsuitable for password storage, scoped to classes implementing `org.springframework.security.crypto.password.PasswordEncoder`. Unsalted and non-iterated digests (MD2, MD4, MD5, SHA-1, SHA-224/256/384/512) are unsuitable for password hashing regardless of how they are wrapped. Delegate to `BCryptPasswordEncoder`, `Argon2PasswordEncoder`, `Pbkdf2PasswordEncoder`, or `SCryptPasswordEncoder` instead of implementing `PasswordEncoder` yourself._

### Tags

* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [CWE-327](/user-documentation/recipes/lists/recipes-by-tag#cwe)
* [CWE-916](/user-documentation/recipes/lists/recipes-by-tag#cwe)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Remediate OWASP A07:2025 Identification and authentication failures](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/owasp2025a07)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

class HomegrownEncoder implements PasswordEncoder {
    public String encode(CharSequence rawPassword) {
        try {
            MessageDigest digest = MessageDigest.getInstance("MD5");
            return new String(digest.digest(rawPassword.toString().getBytes()));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }

    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encode(rawPassword).equals(encodedPassword);
    }
}
```

###### After
```java
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

class HomegrownEncoder implements PasswordEncoder {
    public String encode(CharSequence rawPassword) {
        try {
            MessageDigest digest = /*~~(Custom PasswordEncoder uses weak digest MD5; unsalted/non-iterated digests are unsuitable for password storage (CWE-916))~~>*/MessageDigest.getInstance("MD5");
            return new String(digest.digest(rawPassword.toString().getBytes()));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }

    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encode(rawPassword).equals(encodedPassword);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,1 +9,1 @@
    public String encode(CharSequence rawPassword) {
        try {
-           MessageDigest digest = MessageDigest.getInstance("MD5");
+           MessageDigest digest = /*~~(Custom PasswordEncoder uses weak digest MD5; unsalted/non-iterated digests are unsuitable for password storage (CWE-916))~~>*/MessageDigest.getInstance("MD5");
            return new String(digest.digest(rawPassword.toString().getBytes()));
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.security.search.FindWeakDigestInPasswordEncoder"
  displayName="Find weak message digests used inside custom `PasswordEncoder` implementations"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-security"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindWeakDigestInPasswordEncoder" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
