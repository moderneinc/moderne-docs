---
title: "Enforce TLS verification"
sidebar_label: "Enforce TLS verification"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enforce TLS verification"}
  description={"Replace `InsecureSkipVerify: true` with `false` in TLS config. Disabling certificate verification makes connections vulnerable to man-in-the-middle attacks."}
  fqName={"org.openrewrite.golang.codequality.EnforceTlsVerification"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnforceTlsVerification"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnforceTlsVerification"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/enforcetlsverification.md"}
  moderneOnly
>

<RecipeHeader.Title>Enforce TLS verification</RecipeHeader.Title>

<RecipeHeader.Description>Replace `InsecureSkipVerify: true` with `false` in TLS config. Disabling certificate verification makes connections vulnerable to man-in-the-middle attacks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnforceTlsVerification","displayName":"Enforce TLS verification","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

