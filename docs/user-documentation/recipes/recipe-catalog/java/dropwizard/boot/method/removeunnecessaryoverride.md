---
title: "Remove unnecessary `@Override` annotations"
sidebar_label: "Remove unnecessary `@Override` annotations"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unnecessary `@Override` annotations"}
  description={"Removes `@Override` annotations from methods that don't actually override or implement any method. This helps maintain clean code by removing incorrect annotations that could be misleading."}
  fqName={"io.moderne.java.dropwizard.boot.method.RemoveUnnecessaryOverride"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.method.RemoveUnnecessaryOverride"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.method.RemoveUnnecessaryOverride"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/removeunnecessaryoverride.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unnecessary `@Override` annotations</RecipeHeader.Title>

<RecipeHeader.Description>Removes `@Override` annotations from methods that don't actually override or implement any method. This helps maintain clean code by removing incorrect annotations that could be misleading.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"ignoreAnonymousClassMethods","required":false,"description":"When enabled, ignore @Override annotations on methods in anonymous classes."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"ignoreAnonymousClassMethods","value":"false"}],"variants":[{"language":"java","before":"import net.sourceforge.argparse4j.impl.Arguments;\nimport net.sourceforge.argparse4j.inf.Subparser;\nimport org.springframework.boot.CommandLineRunner;\n\npublic class RenderCommand implements CommandLineRunner {\n    @Override\n    public void configure(Subparser subparser) {\n        subparser.addArgument(\"-i\", \"--include-default\")\n                 .action(Arguments.storeTrue())\n                 .dest(\"include-default\")\n                 .help(\"Also render the template with the default name\");\n        subparser.addArgument(\"names\").nargs(\"*\");\n    }\n}\n","after":"import net.sourceforge.argparse4j.impl.Arguments;\nimport net.sourceforge.argparse4j.inf.Subparser;\nimport org.springframework.boot.CommandLineRunner;\n\npublic class RenderCommand implements CommandLineRunner {\n    public void configure(Subparser subparser) {\n        subparser.addArgument(\"-i\", \"--include-default\")\n                 .action(Arguments.storeTrue())\n                 .dest(\"include-default\")\n                 .help(\"Also render the template with the default name\");\n        subparser.addArgument(\"names\").nargs(\"*\");\n    }\n}\n","diff":"@@ -6,1 +6,0 @@\n\npublic class RenderCommand implements CommandLineRunner {\n-   @Override\n    public void configure(Subparser subparser) {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.method.RemoveUnnecessaryOverride","displayName":"Remove unnecessary `@Override` annotations","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

