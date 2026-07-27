---
title: "Replace `InjectFlags` with options object"
sidebar_label: "Replace `InjectFlags` with options object"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `InjectFlags` with options object"}
  description={"Replaces deprecated `InjectFlags` enum usage in `inject()` calls with the corresponding options object. For example, `inject(MyService, InjectFlags.Optional)` becomes `inject(MyService, { optional: true })`."}
  fqName={"org.openrewrite.angular.migration.replace-inject-flags"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.replace-inject-flags"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.replace-inject-flags"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/replace-inject-flags.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `InjectFlags` with options object</RecipeHeader.Title>

<RecipeHeader.Description>Replaces deprecated `InjectFlags` enum usage in `inject()` calls with the corresponding options object. For example, `inject(MyService, InjectFlags.Optional)` becomes `inject(MyService, { optional: true })`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.replace-inject-flags","displayName":"Replace `InjectFlags` with options object","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

