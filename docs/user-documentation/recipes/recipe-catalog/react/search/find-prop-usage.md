---
title: "Find React prop usage"
sidebar_label: "Find React prop usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find React prop usage"}
  description={"Finds all prop usages on React JSX elements, with optional filtering by component and prop name."}
  fqName={"org.openrewrite.react.search.find-prop-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find React prop usage"}
  description={"Finds all prop usages on React JSX elements, with optional filtering by component and prop name."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.search.find-prop-usage"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.search.find-prop-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/search/find-prop-usage.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"componentName","required":false,"description":"Optional component name to filter (e.g., 'Button'). If not specified, finds props on all components.","example":"Button"},{"type":"String","name":"propName","required":false,"description":"Optional prop name to filter (e.g., 'onClick'). If not specified, finds all props.","example":"onClick"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.react.search.find-prop-usage","displayName":"Find React prop usage","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

