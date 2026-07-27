---
title: "Find Node.js dependency"
sidebar_label: "Find Node.js dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Node.js dependency"}
  description={"Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes."}
  fqName={"org.openrewrite.javascript.dependencies.find-dependency"}
  languages={["JavaScript"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["JavaScript"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.javascript.dependencies.find-dependency"}
  artifact={"@openrewrite/rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.javascript.dependencies.find-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/javascript/dependencies/find-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Node.js dependency</RecipeHeader.Title>

<RecipeHeader.Description>Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageName","required":true,"description":"The name of the npm package to find. Supports glob patterns.","example":"lodash"},{"type":"String","name":"version","required":false,"description":"An exact version number or semver selector used to select the version number. Leave empty to match any version.","example":"^18.0.0"},{"type":"String","name":"onlyDirect","required":false,"description":"If true (default), only matches dependencies that directly match the package name. If false, also marks direct dependencies that have the target package as a transitive dependency.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.javascript.dependencies.find-dependency","displayName":"Find Node.js dependency","npmPackage":"@openrewrite/rewrite"}}>

## Usage

</UsageList>

