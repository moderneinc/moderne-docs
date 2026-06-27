---
title: "Replace Kotlin property assignment with setter call"
sidebar_label: "Replace Kotlin property assignment with setter call"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace Kotlin property assignment with setter call"}
  description={"Rewrites a Kotlin property-style assignment (`obj.prop = value`) to an explicit setter invocation (`obj.setProp(value)`). Use when a Java library adopts JSpecify `@NullMarked` and a previously-`var` synthetic property is demoted to `val`: Kotlin requires the getter's return type and the setter's parameter type to share the same nullability, and once they diverge the assignment stops compiling."}
  fqName={"io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/kotlin/replacekotlinpropertyassignmentwithsettercall.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace Kotlin property assignment with setter call</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites a Kotlin property-style assignment (`obj.prop = value`) to an explicit setter invocation (`obj.setProp(value)`). Use when a Java library adopts JSpecify `@NullMarked` and a previously-`var` synthetic property is demoted to `val`: Kotlin requires the getter's return type and the setter's parameter type to share the same nullability, and once they diverge the assignment stops compiling.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A MethodMatcher pattern identifying the Java setter to convert to. Kotlin property assignments whose resolved setter matches this pattern will be rewritten to an explicit `set...(value)` call.","example":"org.springframework.boot.web.servlet.AbstractFilterRegistrationBean setFilter(..)"},{"type":"String","name":"propertyName","required":true,"description":"The Kotlin synthetic-property name corresponding to the setter (e.g. `filter` for `setFilter`, `URL` for `setURL`, `isEnabled` for `setEnabled` paired with `isEnabled()`). Kotlin's naming rules preserve acronyms and the `is` prefix on boolean properties, so the property name is stated explicitly rather than derived.","example":"filter"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"FILTER_REG_BEAN_SET_FILTER"},{"parameter":"propertyName","value":"filter"}],"variants":[{"language":"kotlin","before":"import jakarta.servlet.Filter\nimport org.springframework.boot.web.servlet.FilterRegistrationBean\n\nclass Config {\n    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {\n        val registration = FilterRegistrationBean<Filter>()\n        registration.filter = requestResponseFilter\n        return registration\n    }\n}\n","after":"import jakarta.servlet.Filter\nimport org.springframework.boot.web.servlet.FilterRegistrationBean\n\nclass Config {\n    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {\n        val registration = FilterRegistrationBean<Filter>()\n        registration.setFilter(requestResponseFilter)\n        return registration\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\n    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {\n        val registration = FilterRegistrationBean<Filter>()\n-       registration.filter = requestResponseFilter\n+       registration.setFilter(requestResponseFilter)\n        return registration\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall","displayName":"Replace Kotlin property assignment with setter call","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.springframework.boot.web.servlet.AbstractFilterRegistrationBean setFilter(..)\" --recipe-option \"propertyName=filter\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

