---
title: "Mark deprecated PrimeNG components with TODO comments"
sidebar_label: "Mark deprecated PrimeNG components with TODO comments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Mark deprecated PrimeNG components with TODO comments"}
  description={"For every TS file that imports a component / module deprecated in PrimeNG 18 (`TabMenu`, `Steps`, `InlineMessage`, `TabView`, `pDefer`), prepends a TODO comment to the import describing the recommended v18 replacement and writes a row to the `ManualMigrationSteps` data table. The import itself is left intact — these modules still exist in v18 but their replacements have different APIs that require manual migration."}
  fqName={"org.openrewrite.primeng.MarkDeprecatedPrimengComponents"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MarkDeprecatedPrimengComponents"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MarkDeprecatedPrimengComponents"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/markdeprecatedprimengcomponents.md"}
  moderneOnly
>

<RecipeHeader.Title>Mark deprecated PrimeNG components with TODO comments</RecipeHeader.Title>

<RecipeHeader.Description>For every TS file that imports a component / module deprecated in PrimeNG 18 (`TabMenu`, `Steps`, `InlineMessage`, `TabView`, `pDefer`), prepends a TODO comment to the import describing the recommended v18 replacement and writes a row to the `ManualMigrationSteps` data table. The import itself is left intact — these modules still exist in v18 but their replacements have different APIs that require manual migration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MarkDeprecatedPrimengComponents","displayName":"Mark deprecated PrimeNG components with TODO comments","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

