---
title: "Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration"
sidebar_label: "Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration"}
  description={"Migrates `JRPrintServiceExporterParameter` setParameter calls to use `SimplePrintServiceExporterConfiguration`."}
  fqName={"io.moderne.jasperreports.v5.MigratePrintServiceExporterConfiguration"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.jasperreports.v5.MigratePrintServiceExporterConfiguration"}
  artifact={"io.moderne.recipe:rewrite-jasperreports"}
  appLink={"https://app.moderne.io/recipes/io.moderne.jasperreports.v5.MigratePrintServiceExporterConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jasperreports/v5/migrateprintserviceexporterconfiguration.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration</RecipeHeader.Title>

<RecipeHeader.Description>Migrates `JRPrintServiceExporterParameter` setParameter calls to use `SimplePrintServiceExporterConfiguration`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import net.sf.jasperreports.engine.JRExporter;\nimport net.sf.jasperreports.engine.export.JRPrintServiceExporterParameter;\nimport net.sf.jasperreports.engine.export.JRPdfExporter;\n\nimport javax.print.attribute.PrintRequestAttributeSet;\nimport javax.print.attribute.PrintServiceAttributeSet;\n\nclass ReportExporter {\n    void export(String fileName) {\n        PrintRequestAttributeSet printRequestAttributeSet = null;\n        PrintServiceAttributeSet printServiceAttributeSet = null;\n        JRExporter exporter = new JRPdfExporter();\n        exporter.setParameter(JRPrintServiceExporterParameter.PRINT_REQUEST_ATTRIBUTE_SET, printRequestAttributeSet);\n        exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE_ATTRIBUTE_SET, printServiceAttributeSet);\n        exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PAGE_DIALOG, Boolean.FALSE);\n        exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PRINT_DIALOG, Boolean.TRUE);\n        exporter.exportReport();\n    }\n}\n","after":"import net.sf.jasperreports.engine.JRExporter;\nimport net.sf.jasperreports.engine.export.JRPdfExporter;\nimport net.sf.jasperreports.export.SimplePrintServiceExporterConfiguration;\n\nimport javax.print.attribute.PrintRequestAttributeSet;\nimport javax.print.attribute.PrintServiceAttributeSet;\n\nclass ReportExporter {\n    void export(String fileName) {\n        PrintRequestAttributeSet printRequestAttributeSet = null;\n        PrintServiceAttributeSet printServiceAttributeSet = null;\n        JRExporter exporter = new JRPdfExporter();\n        SimplePrintServiceExporterConfiguration printServiceConfiguration = new SimplePrintServiceExporterConfiguration();\n        printServiceConfiguration.setPrintRequestAttributeSet(printRequestAttributeSet);\n        printServiceConfiguration.setPrintServiceAttributeSet(printServiceAttributeSet);\n        printServiceConfiguration.setDisplayPageDialog(false);\n        printServiceConfiguration.setDisplayPrintDialog(true);\n        exporter.setConfiguration(printServiceConfiguration);\n        exporter.exportReport();\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\nimport net.sf.jasperreports.engine.JRExporter;\n-import net.sf.jasperreports.engine.export.JRPrintServiceExporterParameter;\nimport net.sf.jasperreports.engine.export.JRPdfExporter;\n@@ -4,0 +3,1 @@\nimport net.sf.jasperreports.engine.export.JRPrintServiceExporterParameter;\nimport net.sf.jasperreports.engine.export.JRPdfExporter;\n+import net.sf.jasperreports.export.SimplePrintServiceExporterConfiguration;\n\n@@ -13,4 +13,6 @@\n        PrintServiceAttributeSet printServiceAttributeSet = null;\n        JRExporter exporter = new JRPdfExporter();\n-       exporter.setParameter(JRPrintServiceExporterParameter.PRINT_REQUEST_ATTRIBUTE_SET, printRequestAttributeSet);\n-       exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE_ATTRIBUTE_SET, printServiceAttributeSet);\n-       exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PAGE_DIALOG, Boolean.FALSE);\n-       exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PRINT_DIALOG, Boolean.TRUE);\n+       SimplePrintServiceExporterConfiguration printServiceConfiguration = new SimplePrintServiceExporterConfiguration();\n+       printServiceConfiguration.setPrintRequestAttributeSet(printRequestAttributeSet);\n+       printServiceConfiguration.setPrintServiceAttributeSet(printServiceAttributeSet);\n+       printServiceConfiguration.setDisplayPageDialog(false);\n+       printServiceConfiguration.setDisplayPrintDialog(true);\n+       exporter.setConfiguration(printServiceConfiguration);\n        exporter.exportReport();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.jasperreports.v5.MigratePrintServiceExporterConfiguration","displayName":"Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration","groupId":"io.moderne.recipe","artifactId":"rewrite-jasperreports","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_JASPERREPORTS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

