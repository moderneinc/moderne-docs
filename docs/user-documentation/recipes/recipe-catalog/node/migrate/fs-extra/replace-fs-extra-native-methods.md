---
title: "Replace fs-extra's re-exported `fs` methods with `node:fs`"
sidebar_label: "Replace fs-extra's re-exported `fs` methods with `node:fs`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra's re-exported `fs` methods with `node:fs`"}
  description={"fs-extra re-exports every `fs` method, with the async ones returning a promise when no callback is passed. Promise-form calls move to `node:fs/promises`; callback-form calls, `*Sync` methods, streams, watchers and `constants` move to `node:fs`. fd-based methods keep their promise form on fs-extra, as `node:fs/promises` has no fd-number equivalents."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-native-methods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-native-methods"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-native-methods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-native-methods.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra's re-exported `fs` methods with `node:fs`</RecipeHeader.Title>

<RecipeHeader.Description>fs-extra re-exports every `fs` method, with the async ones returning a promise when no callback is passed. Promise-form calls move to `node:fs/promises`; callback-form calls, `*Sync` methods, streams, watchers and `constants` move to `node:fs`. fd-based methods keep their promise form on fs-extra, as `node:fs/promises` has no fd-number equivalents.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-native-methods","displayName":"Replace fs-extra's re-exported `fs` methods with `node:fs`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

