---
title: "Find potentially redundant type conversion"
sidebar_label: "Find potentially redundant type conversion"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find potentially redundant type conversion"}
  description={"Find type conversions like `int(x)` that may be redundant if x is already the target type. Requires type attribution for full accuracy."}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeredundanttypeconversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Find potentially redundant type conversion</RecipeHeader.Title>

<RecipeHeader.Description>Find type conversions like `int(x)` that may be redundant if x is already the target type. Requires type attribution for full accuracy.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion","displayName":"Find potentially redundant type conversion","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

