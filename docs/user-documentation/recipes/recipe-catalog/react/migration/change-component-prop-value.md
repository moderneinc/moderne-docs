---
title: "Change React component prop value"
sidebar_label: "Change React component prop value"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change React component prop value"}
  description={"Changes literal prop values on React components. Useful for library upgrades where prop values were renamed (e.g., Material-UI, Ant Design)."}
  fqName={"org.openrewrite.react.migration.change-component-prop-value"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migration.change-component-prop-value"}
  artifact={"@openrewrite/recipes-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migration.change-component-prop-value"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migration/change-component-prop-value.md"}
  moderneOnly
>

<RecipeHeader.Title>Change React component prop value</RecipeHeader.Title>

<RecipeHeader.Description>Changes literal prop values on React components. Useful for library upgrades where prop values were renamed (e.g., Material-UI, Ant Design).</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"componentName","required":true,"description":"The name of the React component to target","example":"Button"},{"type":"String","name":"propName","required":true,"description":"The name of the prop whose value should be changed","example":"variant"},{"type":"String","name":"oldValue","required":false,"description":"The old value to match. If `regex` is `true`, interpreted as a regular expression pattern. Supports `/pattern/flags` format for specifying regex flags (e.g., `/pattern/i` for case-insensitive). If not provided, matches all values.","example":"outlined"},{"type":"String","name":"newValue","required":true,"description":"The new value to replace with. Can use `$1`, `$2`, etc. to reference capture groups if `regex` is `true`.","example":"outlined-primary"},{"type":"String","name":"regex","required":false,"description":"If `true`, `oldValue` is interpreted as a regex pattern. Capture groups can be referenced in newValue using `$1`, `$2`, etc."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.react.migration.change-component-prop-value","displayName":"Change React component prop value","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

