---
title: "Find Spring MVC handlers missing authorization"
sidebar_label: "Find Spring MVC handlers missing authorization"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Spring MVC handlers missing authorization

**org.openrewrite.java.security.search.FindMissingSpringAuthorization**

_Flags Spring MVC (and WebFlux) controller methods reachable to anonymous users — either matched by `permitAll()` in a `SecurityFilterChain` / `SecurityWebFilterChain` bean (or in a legacy `WebSecurityConfigurerAdapter.configure(HttpSecurity)` override) or with no matching rule at all — and which do not carry an explicit authorization annotation (`@PreAuthorize`, `@PostAuthorize`, `@Secured`, `@RolesAllowed`, `@PermitAll`, `@DenyAll`), including annotations inherited from a superclass or overridden parent method. Security rules are read from both the Java fluent API (`requestMatchers(...).permitAll()`) and the Kotlin DSL (`authorize("/path", permitAll)`). Detector only; does not modify code._

### Tags

* [CWE-862](/user-documentation/recipes/lists/recipes-by-tag#cwe)
* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [RSPEC-S4502](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S4502&open=java%3AS4502)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Remediate OWASP A01:2021 Broken access control](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/owaspa01)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class AccountController {
    @GetMapping("/account/{id}")
    public String show() {
        return "account";
    }
}
```

###### After
```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class AccountController {
    @GetMapping("/account/{id}")
    public String /*~~(No authorization annotation and no matching SecurityFilterChain rule for `/account/{id}`)~~>*/show() {
        return "account";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
class AccountController {
    @GetMapping("/account/{id}")
-   public String show() {
+   public String /*~~(No authorization annotation and no matching SecurityFilterChain rule for `/account/{id}`)~~>*/show() {
        return "account";
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.security.search.FindMissingSpringAuthorization"
  displayName="Find Spring MVC handlers missing authorization"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-security"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindMissingSpringAuthorization" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.security.table.MissingAuthorization" label="MissingAuthorization">

### Missing authorization
**org.openrewrite.java.security.table.MissingAuthorization**

_Spring MVC handler methods reachable to anonymous users without an explicit authorization annotation._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the handler method. |
| Controller class | The fully qualified name of the controller class. |
| Handler method | The name of the handler method. |
| HTTP method | The HTTP method served by the handler. |
| URL pattern | The combined class- and method-level request mapping pattern. |
| Reason | Why the handler is considered to be missing authorization. |

</TabItem>

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
