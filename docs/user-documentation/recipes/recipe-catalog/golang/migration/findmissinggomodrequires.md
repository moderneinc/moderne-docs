---
title: "Find missing go.mod requirements"
sidebar_label: "Find missing go.mod requirements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find missing go.mod requirements"}
  description={"Find imports of third-party packages that are not covered by any `require` directive in the module's go.mod. These are the requirements `go mod tidy` would add; adding them automatically is not possible offline because it requires resolving module versions over the network."}
  fqName={"org.openrewrite.golang.migration.FindMissingGoModRequires"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindMissingGoModRequires"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindMissingGoModRequires"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findmissinggomodrequires.md"}
  moderneOnly
>

<RecipeHeader.Title>Find missing go.mod requirements</RecipeHeader.Title>

<RecipeHeader.Description>Find imports of third-party packages that are not covered by any `require` directive in the module's go.mod. These are the requirements `go mod tidy` would add; adding them automatically is not possible offline because it requires resolving module versions over the network.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindMissingGoModRequires","displayName":"Find missing go.mod requirements","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

