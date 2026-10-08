---
title: "Migrate `golang.org/x/exp/constraints` to `cmp`"
sidebar_label: "Migrate `golang.org/x/exp/constraints` to `cmp`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `golang.org/x/exp/constraints` to `cmp`"}
  description={"Rewrite `constraints.Ordered` to `cmp.Ordered`, added to the standard library in Go 1.21. `Integer`, `Float`, `Signed`, `Unsigned` and `Complex` have no standard-library counterpart, so a file naming one of them keeps the x/exp import and is left for review."}
  fqName={"org.openrewrite.golang.migration.MigrateXExpConstraintsToStdlib"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateXExpConstraintsToStdlib"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateXExpConstraintsToStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratexexpconstraintstostdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `golang.org/x/exp/constraints` to `cmp`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite `constraints.Ordered` to `cmp.Ordered`, added to the standard library in Go 1.21. `Integer`, `Float`, `Signed`, `Unsigned` and `Complex` have no standard-library counterpart, so a file naming one of them keeps the x/exp import and is left for review.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateXExpConstraintsToStdlib","displayName":"Migrate `golang.org/x/exp/constraints` to `cmp`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

