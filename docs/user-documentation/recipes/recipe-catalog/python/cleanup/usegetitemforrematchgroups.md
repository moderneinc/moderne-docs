---
title: "Use bracket access for ``re.Match`` groups"
sidebar_label: "Use bracket access for ``re.Match`` groups"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use bracket access for ``re.Match`` groups"}
  description={"Replace ``match.group(n)`` with ``match[n]`` to use the shorter subscript syntax available since Python 3.6."}
  fqName={"org.openrewrite.python.cleanup.UseGetitemForReMatchGroups"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseGetitemForReMatchGroups"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseGetitemForReMatchGroups"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/usegetitemforrematchgroups.md"}
  moderneOnly
>

<RecipeHeader.Title>Use bracket access for ``re.Match`` groups</RecipeHeader.Title>

<RecipeHeader.Description>Replace ``match.group(n)`` with ``match[n]`` to use the shorter subscript syntax available since Python 3.6.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseGetitemForReMatchGroups","displayName":"Use bracket access for ``re.Match`` groups","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

