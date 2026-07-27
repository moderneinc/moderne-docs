---
title: "Replace form classes with untyped variants"
sidebar_label: "Replace form classes with untyped variants"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace form classes with untyped variants"}
  description={"Renames `FormControl`, `FormGroup`, `FormArray`, and `FormBuilder` to their `Untyped*` equivalents in imports and usages. Angular 14 introduced strictly typed forms, requiring existing untyped usages to migrate to the `Untyped*` aliases. Classes used in parameterized type positions (e.g. `FormGroup<T>`) are left unchanged because the user already opted into typed forms."}
  fqName={"org.openrewrite.angular.migration.replace-untyped-forms"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.replace-untyped-forms"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.replace-untyped-forms"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/replace-untyped-forms.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace form classes with untyped variants</RecipeHeader.Title>

<RecipeHeader.Description>Renames `FormControl`, `FormGroup`, `FormArray`, and `FormBuilder` to their `Untyped*` equivalents in imports and usages. Angular 14 introduced strictly typed forms, requiring existing untyped usages to migrate to the `Untyped*` aliases. Classes used in parameterized type positions (e.g. `FormGroup<T>`) are left unchanged because the user already opted into typed forms.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.replace-untyped-forms","displayName":"Replace form classes with untyped variants","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

