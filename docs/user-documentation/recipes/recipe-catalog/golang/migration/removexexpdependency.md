---
title: "Remove the `golang.org/x/exp` requirement once unused"
sidebar_label: "Remove the `golang.org/x/exp` requirement once unused"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove the `golang.org/x/exp` requirement once unused"}
  description={"Drop the direct `require golang.org/x/exp` directive from go.mod once no source file needs it — either because nothing imports it any more, or because the migration moves every import that remains. x/exp holds far more than the packages these recipes cover, so an import of any other one keeps the requirement, as does an `// indirect` entry. Does not touch go.sum, so a `go mod tidy` is still needed."}
  fqName={"org.openrewrite.golang.migration.RemoveXExpDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.RemoveXExpDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.RemoveXExpDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/removexexpdependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove the `golang.org/x/exp` requirement once unused</RecipeHeader.Title>

<RecipeHeader.Description>Drop the direct `require golang.org/x/exp` directive from go.mod once no source file needs it — either because nothing imports it any more, or because the migration moves every import that remains. x/exp holds far more than the packages these recipes cover, so an import of any other one keeps the requirement, as does an `// indirect` entry. Does not touch go.sum, so a `go mod tidy` is still needed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.RemoveXExpDependency","displayName":"Remove the `golang.org/x/exp` requirement once unused","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

