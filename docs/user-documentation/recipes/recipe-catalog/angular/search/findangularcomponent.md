---
title: "Find Angular component"
sidebar_label: "Find Angular component"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Angular component"}
  description={"Locates usages of Angular components across the codebase including template elements and other references. If `componentName` is `null`, finds all Angular components."}
  fqName={"org.openrewrite.angular.search.FindAngularComponent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Angular component"}
  description={"Locates usages of Angular components across the codebase including template elements and other references. If `componentName` is `null`, finds all Angular components."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.FindAngularComponent"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.FindAngularComponent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/findangularcomponent.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"componentName","required":false,"description":"The name of the Angular component to find. If `null`, finds all Angular components.","example":"AppComponent"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"componentName","value":"AppComponent"}],"variants":[{"language":"typescript","before":"import { AppComponent } from './app.component';\nimport { HeaderComponent } from './header.component';\n\nconst routes = [\n    { component: AppComponent },\n    { component: HeaderComponent }\n];\n","after":"import { /*~~>*/AppComponent } from './app.component';\nimport { HeaderComponent } from './header.component';\n\nconst routes = [\n    { component: /*~~>*/AppComponent },\n    { component: HeaderComponent }\n];\n","diff":"@@ -1,1 +1,1 @@\n-import { AppComponent } from './app.component';\n+import { /*~~>*/AppComponent } from './app.component';\nimport { HeaderComponent } from './header.component';\n@@ -5,1 +5,1 @@\n\nconst routes = [\n-   { component: AppComponent },\n+   { component: /*~~>*/AppComponent },\n    { component: HeaderComponent }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.FindAngularComponent","displayName":"Find Angular component","groupId":"io.moderne.recipe","artifactId":"rewrite-angular","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_ANGULAR","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.angular.table.AngularComponentUses","displayName":"Angular component uses","description":"Usage locations of Angular components across the codebase.","columns":[{"name":"Source path","description":"The source path of the file containing the Angular component usage."},{"name":"Component name","description":"The name of the Angular component."},{"name":"Usage type","description":"The type of usage: import, template-tag, reference, or declaration."},{"name":"Import style","description":"For imports: named, aliased, or namespace import."},{"name":"Alias","description":"The alias used for this component, if any."},{"name":"Import path","description":"The module path from which the component is imported."},{"name":"Component type","description":"The type of component: standalone, module-based, or directive."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

