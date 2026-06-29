---
title: "Audit exec.Command calls"
sidebar_label: "Audit exec.Command calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit exec.Command calls"}
  description={"Find calls to `exec.Command()`. If arguments come from user input, this is a potential command injection vulnerability."}
  fqName={"org.openrewrite.golang.codequality.AuditExecCommand"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditExecCommand"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditExecCommand"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditexeccommand.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit exec.Command calls</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `exec.Command()`. If arguments come from user input, this is a potential command injection vulnerability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditExecCommand","displayName":"Audit exec.Command calls","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

