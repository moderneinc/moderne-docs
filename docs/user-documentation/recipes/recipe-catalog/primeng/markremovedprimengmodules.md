---
title: "Mark imports of removed PrimeNG modules with TODO stubs"
sidebar_label: "Mark imports of removed PrimeNG modules with TODO stubs"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Mark imports of removed PrimeNG modules with TODO stubs"}
  description={"For each `import` of a PrimeNG module that no longer exists in v18 (`primeng/chips`, `primeng/tristatecheckbox`, `primeng/messages`, `primeng/dataviewlayoutoptions`), replaces the broken import statement with a `const <Name>: any = null;` stub annotated by a TODO comment that describes the v18 replacement. Also strips the corresponding entries from `@NgModule` `imports`, `declarations`, and `exports` arrays since Angular's compiler rejects `null` values there. Each flagged site is also recorded in the `ManualMigrationSteps` data table so downstream tooling can enumerate the remaining work."}
  fqName={"org.openrewrite.primeng.MarkRemovedPrimengModules"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Mark imports of removed PrimeNG modules with TODO stubs"}
  description={"For each `import` of a PrimeNG module that no longer exists in v18 (`primeng/chips`, `primeng/tristatecheckbox`, `primeng/messages`, `primeng/dataviewlayoutoptions`), replaces the broken import statement with a `const <Name>: any = null;` stub annotated by a TODO comment that describes the v18 replacement. Also strips the corresponding entries from `@NgModule` `imports`, `declarations`, and `exports` arrays since Angular's compiler rejects `null` values there. Each flagged site is also recorded in the `ManualMigrationSteps` data table so downstream tooling can enumerate the remaining work."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MarkRemovedPrimengModules"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MarkRemovedPrimengModules"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/markremovedprimengmodules.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MarkRemovedPrimengModules","displayName":"Mark imports of removed PrimeNG modules with TODO stubs","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

