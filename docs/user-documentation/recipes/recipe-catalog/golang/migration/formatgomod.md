---
title: "Format go.mod"
sidebar_label: "Format go.mod"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Format go.mod"}
  description={"Sort the entries of each factored `require ( … )` block in go.mod by module path, matching `go mod tidy` ordering. Versions and `// indirect` markers travel with their entry; only the ordering changes."}
  fqName={"org.openrewrite.golang.migration.FormatGoMod"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FormatGoMod"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FormatGoMod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/formatgomod.md"}
  moderneOnly
>

<RecipeHeader.Title>Format go.mod</RecipeHeader.Title>

<RecipeHeader.Description>Sort the entries of each factored `require ( … )` block in go.mod by module path, matching `go mod tidy` ordering. Versions and `// indirect` markers travel with their entry; only the ordering changes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FormatGoMod","displayName":"Format go.mod","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

