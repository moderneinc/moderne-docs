---
title: "Find React component"
sidebar_label: "Find React component"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find React component"}
  description={"Finds all usages of a specific React component including imports, JSX elements, and exports."}
  fqName={"org.openrewrite.react.search.find-react-component"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.search.find-react-component"}
  artifact={"@openrewrite/recipes-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.search.find-react-component"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/search/find-react-component.md"}
  moderneOnly
>

<RecipeHeader.Title>Find React component</RecipeHeader.Title>

<RecipeHeader.Description>Finds all usages of a specific React component including imports, JSX elements, and exports.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"componentName","required":true,"description":"The name of the React component to find (e.g., 'Button', 'TextField')","example":"Button"},{"type":"String","name":"importPath","required":false,"description":"Optional module path to narrow the search (e.g., '@mui/material'). Supports glob patterns.","example":"@mui/material"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.react.search.find-react-component","displayName":"Find React component","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

