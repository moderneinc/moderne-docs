---
title: "Find source-map-support usages that need manual migration"
sidebar_label: "Find source-map-support usages that need manual migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find source-map-support usages that need manual migration"}
  description={"Marks every source-map-support usage the automated migration leaves in place — an `install()` or `register` entry point that would only map part of the process, options Node has no equivalent for (`retrieveSourceMap`, `retrieveFile`, `environment: 'browser'`), the API beyond `install` (`wrapCallSite`, `mapSourcePosition`, ...), bundler banner strings, `package.json` scripts whose command doesn't take Node's flags, type imports, re-exports, dynamic imports and test mocks — and records each with a suggested replacement in the `SourceMapSupportManualMigrationSteps` data table."}
  fqName={"org.openrewrite.node.migrate.source-map-support.find-source-map-support-manual-migrations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.find-source-map-support-manual-migrations"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.find-source-map-support-manual-migrations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/find-source-map-support-manual-migrations.md"}
  moderneOnly
>

<RecipeHeader.Title>Find source-map-support usages that need manual migration</RecipeHeader.Title>

<RecipeHeader.Description>Marks every source-map-support usage the automated migration leaves in place — an `install()` or `register` entry point that would only map part of the process, options Node has no equivalent for (`retrieveSourceMap`, `retrieveFile`, `environment: 'browser'`), the API beyond `install` (`wrapCallSite`, `mapSourcePosition`, ...), bundler banner strings, `package.json` scripts whose command doesn't take Node's flags, type imports, re-exports, dynamic imports and test mocks — and records each with a suggested replacement in the `SourceMapSupportManualMigrationSteps` data table.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.find-source-map-support-manual-migrations","displayName":"Find source-map-support usages that need manual migration","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

