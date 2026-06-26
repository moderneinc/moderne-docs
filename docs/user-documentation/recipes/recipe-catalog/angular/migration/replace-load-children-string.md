---
title: "Replace string-based `loadChildren` with dynamic `import()`"
sidebar_label: "Replace string-based `loadChildren` with dynamic `import()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace string-based `loadChildren` with dynamic `import()`"}
  description={"Converts the deprecated string-based `loadChildren: 'path#Module'` syntax to dynamic imports: `loadChildren: () => import('path').then(m => m.Module)`."}
  fqName={"org.openrewrite.angular.migration.replace-load-children-string"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace string-based `loadChildren` with dynamic `import()`"}
  description={"Converts the deprecated string-based `loadChildren: 'path#Module'` syntax to dynamic imports: `loadChildren: () => import('path').then(m => m.Module)`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.replace-load-children-string"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.replace-load-children-string"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/replace-load-children-string.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.replace-load-children-string","displayName":"Replace string-based `loadChildren` with dynamic `import()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

