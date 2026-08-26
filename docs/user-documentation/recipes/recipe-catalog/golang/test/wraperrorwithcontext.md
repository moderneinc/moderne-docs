---
title: "Wrap error with context (test)"
sidebar_label: "Wrap error with context (test)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap error with context (test)"}
  description={"Test recipe that replaces `return err` with `return fmt.Errorf(\"funcName: %w\", err)`."}
  fqName={"org.openrewrite.golang.test.WrapErrorWithContext"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.test.WrapErrorWithContext"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.test.WrapErrorWithContext"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/test/wraperrorwithcontext.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap error with context (test)</RecipeHeader.Title>

<RecipeHeader.Description>Test recipe that replaces `return err` with `return fmt.Errorf("funcName: %w", err)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.test.WrapErrorWithContext","displayName":"Wrap error with context (test)","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

