---
title: "Add import"
sidebar_label: "Add import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add import"}
  description={"Add an `import` statement to a Go compilation unit. No-op if the import is already present in a compatible form."}
  fqName={"org.openrewrite.golang.AddImport"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.AddImport"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.AddImport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/addimport.md"}
  moderneOnly
>

<RecipeHeader.Title>Add import</RecipeHeader.Title>

<RecipeHeader.Description>Add an `import` statement to a Go compilation unit. No-op if the import is already present in a compatible form.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packagePath","required":true,"description":"The import path to add.","example":"fmt"},{"type":"Boolean","name":"onlyIfReferenced","required":false,"description":"When true, add the import only if some identifier in the file already references the package via type attribution."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.AddImport","displayName":"Add import","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"packagePath=fmt\""}}>

## Usage

</UsageList>

