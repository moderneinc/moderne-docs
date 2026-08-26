---
title: "Suppress the safe navigation extended diagnostics"
sidebar_label: "Suppress the safe navigation extended diagnostics"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Suppress the safe navigation extended diagnostics"}
  description={"Sets the `nullishCoalescingNotNullable` and `optionalChainNotNullable` extended diagnostics to `suppress` in `angularCompilerOptions` in `tsconfig.json`. Angular 22 narrows types across safe navigation and nullish coalescing in templates, which makes both diagnostics fire on templates that previously compiled cleanly."}
  fqName={"org.openrewrite.angular.migration.suppress-safe-navigation-diagnostics"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.suppress-safe-navigation-diagnostics"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.suppress-safe-navigation-diagnostics"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/suppress-safe-navigation-diagnostics.md"}
  moderneOnly
>

<RecipeHeader.Title>Suppress the safe navigation extended diagnostics</RecipeHeader.Title>

<RecipeHeader.Description>Sets the `nullishCoalescingNotNullable` and `optionalChainNotNullable` extended diagnostics to `suppress` in `angularCompilerOptions` in `tsconfig.json`. Angular 22 narrows types across safe navigation and nullish coalescing in templates, which makes both diagnostics fire on templates that previously compiled cleanly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.suppress-safe-navigation-diagnostics","displayName":"Suppress the safe navigation extended diagnostics","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

