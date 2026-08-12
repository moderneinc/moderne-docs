---
title: "Audit binding to all interfaces"
sidebar_label: "Audit binding to all interfaces"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit binding to all interfaces"}
  description={"Find network listeners bound to all interfaces (e.g. `:8080`, `0.0.0.0`, `[::]`). This exposes the service beyond loopback and may be unintended; prefer an explicit host such as `127.0.0.1` (gosec G102)."}
  fqName={"org.openrewrite.golang.codequality.AuditBindAllInterfaces"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditBindAllInterfaces"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditBindAllInterfaces"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditbindallinterfaces.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit binding to all interfaces</RecipeHeader.Title>

<RecipeHeader.Description>Find network listeners bound to all interfaces (e.g. `:8080`, `0.0.0.0`, `[::]`). This exposes the service beyond loopback and may be unintended; prefer an explicit host such as `127.0.0.1` (gosec G102).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditBindAllInterfaces","displayName":"Audit binding to all interfaces","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

