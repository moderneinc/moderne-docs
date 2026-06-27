---
title: "Remove unnecessary React imports"
sidebar_label: "Remove unnecessary React imports"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unnecessary React imports"}
  description={"Removes the default `import React from 'react'` when React is only used for JSX, which is no longer necessary with the new JSX transform in React 17+."}
  fqName={"org.openrewrite.react.17.update-react-imports"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.17.update-react-imports"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.17.update-react-imports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/17/update-react-imports.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unnecessary React imports</RecipeHeader.Title>

<RecipeHeader.Description>Removes the default `import React from 'react'` when React is only used for JSX, which is no longer necessary with the new JSX transform in React 17+.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.react.17.update-react-imports","displayName":"Remove unnecessary React imports","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

