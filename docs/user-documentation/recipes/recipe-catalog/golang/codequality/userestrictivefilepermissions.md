---
title: "Use restrictive file permissions"
sidebar_label: "Use restrictive file permissions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use restrictive file permissions"}
  description={"Replace `0777` with `0755` in `os.Chmod`, `os.MkdirAll` and `os.Mkdir`, and with `0644` in `os.WriteFile`. Overly permissive file permissions are a security risk."}
  fqName={"org.openrewrite.golang.codequality.UseRestrictiveFilePermissions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseRestrictiveFilePermissions"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseRestrictiveFilePermissions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/userestrictivefilepermissions.md"}
  moderneOnly
>

<RecipeHeader.Title>Use restrictive file permissions</RecipeHeader.Title>

<RecipeHeader.Description>Replace `0777` with `0755` in `os.Chmod`, `os.MkdirAll` and `os.Mkdir`, and with `0644` in `os.WriteFile`. Overly permissive file permissions are a security risk.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseRestrictiveFilePermissions","displayName":"Use restrictive file permissions","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

