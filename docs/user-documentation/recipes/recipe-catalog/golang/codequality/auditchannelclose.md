---
title: "Audit channel close"
sidebar_label: "Audit channel close"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit channel close"}
  description={"Find calls to the built-in `close()` function. Channels should only be closed by the sender, and double-closing causes a panic."}
  fqName={"org.openrewrite.golang.codequality.AuditChannelClose"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditChannelClose"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditChannelClose"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditchannelclose.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit channel close</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to the built-in `close()` function. Channels should only be closed by the sender, and double-closing causes a panic.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditChannelClose","displayName":"Audit channel close","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

