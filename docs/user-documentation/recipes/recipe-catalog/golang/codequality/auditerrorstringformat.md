---
title: "Audit error string format"
sidebar_label: "Audit error string format"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit error string format"}
  description={"Find `errors.New` and `fmt.Errorf` messages that are capitalized or end with punctuation. Error strings are often embedded in a larger message, so they should not be capitalized or end with punctuation (staticcheck ST1005)."}
  fqName={"org.openrewrite.golang.codequality.AuditErrorStringFormat"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditErrorStringFormat"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditErrorStringFormat"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditerrorstringformat.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit error string format</RecipeHeader.Title>

<RecipeHeader.Description>Find `errors.New` and `fmt.Errorf` messages that are capitalized or end with punctuation. Error strings are often embedded in a larger message, so they should not be capitalized or end with punctuation (staticcheck ST1005).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditErrorStringFormat","displayName":"Audit error string format","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

