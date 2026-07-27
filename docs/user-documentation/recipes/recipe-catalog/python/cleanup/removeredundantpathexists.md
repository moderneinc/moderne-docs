---
title: "Drop ``exists()`` check before ``is_dir()``/``is_file()``"
sidebar_label: "Drop ``exists()`` check before ``is_dir()``/``is_file()``"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop ``exists()`` check before ``is_dir()``/``is_file()``"}
  description={"Drop ``path.exists()`` when it is ``and``-ed with ``is_dir()`` or ``is_file()``, which inherently return ``False`` for missing paths."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantPathExists"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantPathExists"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantPathExists"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantpathexists.md"}
  moderneOnly
>

<RecipeHeader.Title>Drop ``exists()`` check before ``is_dir()``/``is_file()``</RecipeHeader.Title>

<RecipeHeader.Description>Drop ``path.exists()`` when it is ``and``-ed with ``is_dir()`` or ``is_file()``, which inherently return ``False`` for missing paths.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantPathExists","displayName":"Drop ``exists()`` check before ``is_dir()``/``is_file()``","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

