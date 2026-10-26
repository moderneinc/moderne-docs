---
title: "Find hpagent usages that need manual migration"
sidebar_label: "Find hpagent usages that need manual migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find hpagent usages that need manual migration"}
  description={"Marks every hpagent usage the automated migration leaves in place — a construction that doesn't pass one options object, an agent class used as a value, re-exports, dynamic imports, a `require` in a shape it doesn't follow, and test mocks — and records each with a suggested replacement in the `HpagentManualMigrationSteps` data table."}
  fqName={"org.openrewrite.node.migrate.hpagent.find-hpagent-manual-migrations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["https-proxy-agent","hpagent"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.hpagent.find-hpagent-manual-migrations"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.hpagent.find-hpagent-manual-migrations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/find-hpagent-manual-migrations.md"}
  moderneOnly
>

<RecipeHeader.Title>Find hpagent usages that need manual migration</RecipeHeader.Title>

<RecipeHeader.Description>Marks every hpagent usage the automated migration leaves in place — a construction that doesn't pass one options object, an agent class used as a value, re-exports, dynamic imports, a `require` in a shape it doesn't follow, and test mocks — and records each with a suggested replacement in the `HpagentManualMigrationSteps` data table.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.hpagent.find-hpagent-manual-migrations","displayName":"Find hpagent usages that need manual migration","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

