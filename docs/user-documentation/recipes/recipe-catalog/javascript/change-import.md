---
title: "Change import"
sidebar_label: "Change import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change import"}
  description={"Changes an import from one module/member to another, updating all type attributions."}
  fqName={"org.openrewrite.javascript.change-import"}
  languages={["JavaScript"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["JavaScript"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.javascript.change-import"}
  artifact={"org.openrewrite:rewrite-javascript"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.javascript.change-import"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/javascript/change-import.md"}
  moderneOnly
>

<RecipeHeader.Title>Change import</RecipeHeader.Title>

<RecipeHeader.Description>Changes an import from one module/member to another, updating all type attributions.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldModule","required":true,"description":"The module to change imports from","example":"react-dom/test-utils"},{"type":"String","name":"oldMember","required":true,"description":"The member to change (or 'default' for default imports, '*' for namespace imports)","example":"act"},{"type":"String","name":"newModule","required":true,"description":"The module to change imports to","example":"react"},{"type":"String","name":"newMember","required":false,"description":"The new member name. If not specified, keeps the same member name.","example":"act"},{"type":"String","name":"newAlias","required":false,"description":"Optional alias for the new import. Required when newMember is 'default' or '*'."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.javascript.change-import","displayName":"Change import","npmPackage":"@openrewrite/rewrite"}}>

## Usage

</UsageList>

