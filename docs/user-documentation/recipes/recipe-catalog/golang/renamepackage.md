---
title: "Rename package"
sidebar_label: "Rename package"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename package"}
  description={"Rename a Go package across a project — rewrites the `package` declaration in files that own the package, and rewrites import paths in every file that references it."}
  fqName={"org.openrewrite.golang.RenamePackage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.RenamePackage"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.RenamePackage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/renamepackage.md"}
  moderneOnly
>

<RecipeHeader.Title>Rename package</RecipeHeader.Title>

<RecipeHeader.Description>Rename a Go package across a project — rewrites the `package` declaration in files that own the package, and rewrites import paths in every file that references it.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldPackagePath","required":true,"description":"The fully qualified package path to rename.","example":"github.com/old/foo"},{"type":"String","name":"newPackagePath","required":true,"description":"The fully qualified package path to use instead.","example":"github.com/new/foo"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.RenamePackage","displayName":"Rename package","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldPackagePath=github.com/old/foo\" --recipe-option \"newPackagePath=github.com/new/foo\""}}>

## Usage

</UsageList>

