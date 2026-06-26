---
title: "Find Apache Commons BeanUtils property assignments"
sidebar_label: "Find Apache Commons BeanUtils property assignments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Apache Commons BeanUtils property assignments"}
  description={"Finds calls to Apache Commons BeanUtils and PropertyUtils setters and bulk-copy methods (`setProperty`, `populate`, `copyProperties`, `copyProperty`, `setNestedProperty`, `setSimpleProperty`, `setIndexedProperty`, `setMappedProperty`) — including the equivalent instance-method forms on `BeanUtilsBean` and `PropertyUtilsBean`, and on any subclass of those, regardless of how the bean instance is obtained (`getInstance()`, `new`, injected field, etc.). When the property name or value flows from an untrusted source (e.g. HTTP request parameters), these calls enable bean-injection / mass-assignment (CWE-915) — an attacker can set any settable field on the bean, including ones the application never intended to expose. Per Sonar S4512 each call site needs human review for whether the property name and value come from trusted input. Detector only; does not modify code."}
  fqName={"org.openrewrite.java.security.search.FindBeanPropertyAssignment"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Apache Commons BeanUtils property assignments"}
  description={"Finds calls to Apache Commons BeanUtils and PropertyUtils setters and bulk-copy methods (`setProperty`, `populate`, `copyProperties`, `copyProperty`, `setNestedProperty`, `setSimpleProperty`, `setIndexedProperty`, `setMappedProperty`) — including the equivalent instance-method forms on `BeanUtilsBean` and `PropertyUtilsBean`, and on any subclass of those, regardless of how the bean instance is obtained (`getInstance()`, `new`, injected field, etc.). When the property name or value flows from an untrusted source (e.g. HTTP request parameters), these calls enable bean-injection / mass-assignment (CWE-915) — an attacker can set any settable field on the bean, including ones the application never intended to expose. Per Sonar S4512 each call site needs human review for whether the property name and value come from trusted input. Detector only; does not modify code."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-915","RSPEC-S4512"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.search.FindBeanPropertyAssignment"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindBeanPropertyAssignment"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/search/findbeanpropertyassignment.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.commons.beanutils.BeanUtils;\n\nclass A {\n    void apply(Object bean, String name, Object value) throws Exception {\n        BeanUtils.setProperty(bean, name, value);\n    }\n}\n","after":"import org.apache.commons.beanutils.BeanUtils;\n\nclass A {\n    void apply(Object bean, String name, Object value) throws Exception {\n        /*~~(Setting bean properties from external input can enable bean injection (CWE-915). Verify the property name and value come from a trusted source.)~~>*/BeanUtils.setProperty(bean, name, value);\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass A {\n    void apply(Object bean, String name, Object value) throws Exception {\n-       BeanUtils.setProperty(bean, name, value);\n+       /*~~(Setting bean properties from external input can enable bean injection (CWE-915). Verify the property name and value come from a trusted source.)~~>*/BeanUtils.setProperty(bean, name, value);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.search.FindBeanPropertyAssignment","displayName":"Find Apache Commons BeanUtils property assignments","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

