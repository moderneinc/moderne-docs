---
title: "Order imports"
sidebar_label: "Order imports"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Order imports"}
  description={"Sort `import` lines into stdlib / third-party / local groups. Within each group, entries are alphabetized; non-empty groups are separated by a blank line. Mirrors `goimports -w`. Local detection uses the sibling go.mod's module path."}
  fqName={"org.openrewrite.golang.OrderImports"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.OrderImports"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.OrderImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/orderimports.md"}
  moderneOnly
>

<RecipeHeader.Title>Order imports</RecipeHeader.Title>

<RecipeHeader.Description>Sort `import` lines into stdlib / third-party / local groups. Within each group, entries are alphabetized; non-empty groups are separated by a blank line. Mirrors `goimports -w`. Local detection uses the sibling go.mod's module path.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.OrderImports","displayName":"Order imports","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

