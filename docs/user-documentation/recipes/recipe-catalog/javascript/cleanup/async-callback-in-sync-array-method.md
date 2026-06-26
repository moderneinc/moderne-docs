---
title: "Detect async callbacks in synchronous array methods"
sidebar_label: "Detect async callbacks in synchronous array methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Detect async callbacks in synchronous array methods"}
  description={"Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy."}
  fqName={"org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method"}
  languages={["JavaScript"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  displayName={"Detect async callbacks in synchronous array methods"}
  description={"Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy."}
  type={"Single recipe"}
  languages={["JavaScript"]}
  tags={["async","bug","cleanup","typescript","javascript"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method"}
  artifact={"org.openrewrite:rewrite-javascript"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/javascript/cleanup/async-callback-in-sync-array-method.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method","displayName":"Detect async callbacks in synchronous array methods","npmPackage":"@openrewrite/rewrite"}}>

## Usage

</UsageList>

