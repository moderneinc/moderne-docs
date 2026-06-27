---
title: "Rename file"
sidebar_label: "Rename file"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename file"}
  description={"Renames files matching a glob pattern to a new file name, preserving the directory."}
  fqName={"org.openrewrite.angular.migration.rename-file"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.rename-file"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.rename-file"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/rename-file.md"}
  moderneOnly
>

<RecipeHeader.Title>Rename file</RecipeHeader.Title>

<RecipeHeader.Description>Renames files matching a glob pattern to a new file name, preserving the directory.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":true,"description":"Glob pattern to match files (e.g., `**/browserslist`). Supports `**` prefix to match in any directory.","example":"**/browserslist"},{"type":"String","name":"fileName","required":true,"description":"The new file name (just the basename, e.g., `.browserslistrc`).","example":".browserslistrc"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.rename-file","displayName":"Rename file","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

