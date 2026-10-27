---
title: "Find removed `wave` marker methods"
sidebar_label: "Find removed `wave` marker methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `wave` marker methods"}
  description={"`getmark()`, `setmark()` and `getmarkers()` of `wave.Wave_read` and `wave.Wave_write` were removed in Python 3.15. They never did anything for WAV files, so the calls can be dropped. Only fires where the receiver's type resolves."}
  fqName={"org.openrewrite.python.migrate.FindWaveMarkers"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","wave"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindWaveMarkers"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindWaveMarkers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findwavemarkers.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `wave` marker methods</RecipeHeader.Title>

<RecipeHeader.Description>`getmark()`, `setmark()` and `getmarkers()` of `wave.Wave_read` and `wave.Wave_write` were removed in Python 3.15. They never did anything for WAV files, so the calls can be dropped. Only fires where the receiver's type resolves.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindWaveMarkers","displayName":"Find removed `wave` marker methods","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

