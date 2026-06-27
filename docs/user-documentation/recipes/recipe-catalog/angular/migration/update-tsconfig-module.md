---
title: "Update `tsconfig.json` module settings for Ivy"
sidebar_label: "Update `tsconfig.json` module settings for Ivy"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update `tsconfig.json` module settings for Ivy"}
  description={"Updates `compilerOptions.module` to `esnext` and `compilerOptions.moduleResolution` to `node` in `tsconfig.json`. Angular 9's Ivy compiler requires ES module format. Already-current values like `es2020`, `node16`, `nodenext`, or `bundler` are left unchanged."}
  fqName={"org.openrewrite.angular.migration.update-tsconfig-module"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.update-tsconfig-module"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.update-tsconfig-module"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/update-tsconfig-module.md"}
  moderneOnly
>

<RecipeHeader.Title>Update `tsconfig.json` module settings for Ivy</RecipeHeader.Title>

<RecipeHeader.Description>Updates `compilerOptions.module` to `esnext` and `compilerOptions.moduleResolution` to `node` in `tsconfig.json`. Angular 9's Ivy compiler requires ES module format. Already-current values like `es2020`, `node16`, `nodenext`, or `bundler` are left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.update-tsconfig-module","displayName":"Update `tsconfig.json` module settings for Ivy","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

