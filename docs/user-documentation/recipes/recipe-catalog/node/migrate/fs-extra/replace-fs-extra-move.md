---
title: "Replace fs-extra `move` with a generated helper"
sidebar_label: "Replace fs-extra `move` with a generated helper"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `move` with a generated helper"}
  description={"Replaces fs-extra's `move`/`moveSync` with a call to a helper this recipe writes into the same file. `rename` alone is not a replacement: it doesn't create the destination's parent directory, it overwrites silently instead of refusing, and it fails across devices with `EXDEV`. The helper does what fs-extra does — `mkdir` the parent, refuse an existing destination unless `overwrite` was asked for, then `rename`, falling back to `cp` + `rm` on `EXDEV`. A call passing an option other than `overwrite` (`dereference`, the legacy `clobber`) or a callback is left alone, as is one whose options aren't an object literal. One helper is written per file, however many calls it has."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-move"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-move"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-move"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-move.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `move` with a generated helper</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `move`/`moveSync` with a call to a helper this recipe writes into the same file. `rename` alone is not a replacement: it doesn't create the destination's parent directory, it overwrites silently instead of refusing, and it fails across devices with `EXDEV`. The helper does what fs-extra does — `mkdir` the parent, refuse an existing destination unless `overwrite` was asked for, then `rename`, falling back to `cp` + `rm` on `EXDEV`. A call passing an option other than `overwrite` (`dereference`, the legacy `clobber`) or a callback is left alone, as is one whose options aren't an object literal. One helper is written per file, however many calls it has.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-move","displayName":"Replace fs-extra `move` with a generated helper","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

