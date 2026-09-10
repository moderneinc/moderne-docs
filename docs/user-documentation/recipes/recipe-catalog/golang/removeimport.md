---
title: "Remove import"
sidebar_label: "Remove import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove import"}
  description={"Remove an `import` statement from a Go compilation unit. Matches by import path, in any form (regular, aliased, dot, blank). Unless `force` is set, an import that the file still references is kept, as are blank (`_`) and dot (`.`) imports."}
  fqName={"org.openrewrite.golang.RemoveImport"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.RemoveImport"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.RemoveImport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/removeimport.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove import</RecipeHeader.Title>

<RecipeHeader.Description>Remove an `import` statement from a Go compilation unit. Matches by import path, in any form (regular, aliased, dot, blank). Unless `force` is set, an import that the file still references is kept, as are blank (`_`) and dot (`.`) imports.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packagePath","required":true,"description":"The import path to remove.","example":"fmt"},{"type":"Boolean","name":"force","required":false,"description":"When true, remove the import even if the file still references the package, and remove blank (`_`) and dot (`.`) imports."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.RemoveImport","displayName":"Remove import","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

