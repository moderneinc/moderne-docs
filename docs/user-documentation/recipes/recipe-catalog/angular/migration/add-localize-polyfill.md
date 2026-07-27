---
title: "Add `@angular/localize/init` polyfill import"
sidebar_label: "Add `@angular/localize/init` polyfill import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@angular/localize/init` polyfill import"}
  description={"Adds `import '@angular/localize/init'` to `polyfills.ts`. Angular 9 introduced the `$localize` runtime API for i18n. Projects using internationalization must import this polyfill or the application will fail at runtime with `$localize is not defined`. The `@angular/localize` package must also be added as a dependency."}
  fqName={"org.openrewrite.angular.migration.add-localize-polyfill"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-localize-polyfill"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-localize-polyfill"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-localize-polyfill.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `@angular/localize/init` polyfill import</RecipeHeader.Title>

<RecipeHeader.Description>Adds `import '@angular/localize/init'` to `polyfills.ts`. Angular 9 introduced the `$localize` runtime API for i18n. Projects using internationalization must import this polyfill or the application will fail at runtime with `$localize is not defined`. The `@angular/localize` package must also be added as a dependency.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-localize-polyfill","displayName":"Add `@angular/localize/init` polyfill import","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

