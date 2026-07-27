---
title: "Drop ``else`` after early-exit ``if`` branch"
sidebar_label: "Drop ``else`` after early-exit ``if`` branch"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop ``else`` after early-exit ``if`` branch"}
  description={"When the ``if`` body always exits via return, raise, continue, or break, remove the ``else`` and dedent its contents."}
  fqName={"org.openrewrite.python.cleanup.RemoveUnnecessaryElse"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveUnnecessaryElse"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveUnnecessaryElse"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeunnecessaryelse.md"}
  moderneOnly
>

<RecipeHeader.Title>Drop ``else`` after early-exit ``if`` branch</RecipeHeader.Title>

<RecipeHeader.Description>When the ``if`` body always exits via return, raise, continue, or break, remove the ``else`` and dedent its contents.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveUnnecessaryElse","displayName":"Drop ``else`` after early-exit ``if`` branch","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

