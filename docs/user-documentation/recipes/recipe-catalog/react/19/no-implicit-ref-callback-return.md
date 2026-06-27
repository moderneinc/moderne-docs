---
title: "Remove implicit ref callback returns"
sidebar_label: "Remove implicit ref callback returns"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove implicit ref callback returns"}
  description={"In React 19, ref callbacks can return cleanup functions. Arrow functions with expression bodies implicitly return values, which React would interpret as cleanup functions. This recipe wraps them in block bodies."}
  fqName={"org.openrewrite.react.19.no-implicit-ref-callback-return"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.19.no-implicit-ref-callback-return"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.19.no-implicit-ref-callback-return"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/19/no-implicit-ref-callback-return.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove implicit ref callback returns</RecipeHeader.Title>

<RecipeHeader.Description>In React 19, ref callbacks can return cleanup functions. Arrow functions with expression bodies implicitly return values, which React would interpret as cleanup functions. This recipe wraps them in block bodies.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.react.19.no-implicit-ref-callback-return","displayName":"Remove implicit ref callback returns","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

