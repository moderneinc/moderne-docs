---
title: "Split a `model()` that has a matching explicit output"
sidebar_label: "Split a `model()` that has a matching explicit output"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Split a `model()` that has a matching explicit output"}
  description={"Rewrites `foo = model()` to `fooInput = input({alias: 'foo'})` plus `foo = linkedSignal(this.fooInput)` when the same class also declares a `fooChange` output. `model()` already contributes a `fooChange` output, and Angular 22 rejects the resulting duplicate."}
  fqName={"org.openrewrite.angular.migration.migrate-model-with-output"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-model-with-output"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-model-with-output"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-model-with-output.md"}
  moderneOnly
>

<RecipeHeader.Title>Split a `model()` that has a matching explicit output</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites `foo = model()` to `fooInput = input({alias: 'foo'})` plus `foo = linkedSignal(this.fooInput)` when the same class also declares a `fooChange` output. `model()` already contributes a `fooChange` output, and Angular 22 rejects the resulting duplicate.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-model-with-output","displayName":"Split a `model()` that has a matching explicit output","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

