---
title: "Find fs-extra usages that need manual migration"
sidebar_label: "Find fs-extra usages that need manual migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find fs-extra usages that need manual migration"}
  description={"Marks every fs-extra usage the automated migration leaves in place — `move`, `emptyDir`, `ensureLink`/`ensureSymlink`, `exists`, calls with unsupported arguments, fs-extra used as a value, type imports, re-exports, dynamic imports, and test mocks — and records each with a suggested replacement in the `FsExtraManualMigrationSteps` data table."}
  fqName={"org.openrewrite.node.migrate.fs-extra.find-fs-extra-manual-migrations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.find-fs-extra-manual-migrations"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.find-fs-extra-manual-migrations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/find-fs-extra-manual-migrations.md"}
  moderneOnly
>

<RecipeHeader.Title>Find fs-extra usages that need manual migration</RecipeHeader.Title>

<RecipeHeader.Description>Marks every fs-extra usage the automated migration leaves in place — `move`, `emptyDir`, `ensureLink`/`ensureSymlink`, `exists`, calls with unsupported arguments, fs-extra used as a value, type imports, re-exports, dynamic imports, and test mocks — and records each with a suggested replacement in the `FsExtraManualMigrationSteps` data table.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.find-fs-extra-manual-migrations","displayName":"Find fs-extra usages that need manual migration","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

