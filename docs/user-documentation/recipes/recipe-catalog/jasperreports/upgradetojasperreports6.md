---
title: "Migrate to JasperReports 6"
sidebar_label: "Migrate to JasperReports 6"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to JasperReports 6"}
  description={"Migrates JasperReports from 5.x to 6.x with the new exporter API, XLS to XLSX move, and removal of Spring JasperReports views."}
  fqName={"io.moderne.jasperreports.UpgradeToJasperReports6"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to JasperReports 6"}
  description={"Migrates JasperReports from 5.x to 6.x with the new exporter API, XLS to XLSX move, and removal of Spring JasperReports views."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["jasperreports"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.jasperreports.UpgradeToJasperReports6"}
  artifact={"io.moderne.recipe:rewrite-jasperreports"}
  appLink={"https://app.moderne.io/recipes/io.moderne.jasperreports.UpgradeToJasperReports6"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jasperreports/upgradetojasperreports6.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Migrate to JasperReports 5.6.x","href":"jasperreports/upgradetojasperreports5"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Migrate JRXlsExporter to JRXlsxExporter","href":"jasperreports/migratexlstoxlsxexporter"},{"name":"Update JasperReports exporter configuration","href":"jasperreports/migrateexporterconfigtojasper6"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>jasper-app</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>net.sf.jasperreports</groupId>\n            <artifactId>jasperreports</artifactId>\n            <version>5.6.1</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.lowagie</groupId>\n                    <artifactId>itext</artifactId>\n                    <!-- they use a strange 2.1.7.js2 version that is not resolvable public doesn't matter for the migration-->\n                </exclusion>\n                <exclusion>\n                    <groupId>org.olap4j</groupId>\n                    <artifactId>olap4j</artifactId>\n                    <!-- they use a strange 0.9.7.309-JS-3 version that is not resolvable public doesn't matter for the migration-->\n                </exclusion>\n            </exclusions>\n        </dependency>\n    </dependencies>\n</project>\n"},"variants":[]},{"unchanged":{"language":"xml","code":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>jasper-app</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>net.sf.jasperreports</groupId>\n            <artifactId>jasperreports</artifactId>\n            <version>5.6.1</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.lowagie</groupId>\n                    <artifactId>itext</artifactId>\n                    <!-- they use a strange 2.1.7.js2 version that is not resolvable public doesn't matter for the migration-->\n                </exclusion>\n                <exclusion>\n                    <groupId>org.olap4j</groupId>\n                    <artifactId>olap4j</artifactId>\n                    <!-- they use a strange 0.9.7.309-JS-3 version that is not resolvable public doesn't matter for the migration-->\n                </exclusion>\n            </exclusions>\n        </dependency>\n    </dependencies>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.jasperreports.UpgradeToJasperReports6","displayName":"Migrate to JasperReports 6","groupId":"io.moderne.recipe","artifactId":"rewrite-jasperreports","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_JASPERREPORTS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

