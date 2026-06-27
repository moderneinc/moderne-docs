---
title: "Replace `try/except: pass` with `contextlib.suppress()`"
sidebar_label: "Replace `try/except: pass` with `contextlib.suppress()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `try/except: pass` with `contextlib.suppress()`"}
  description={"When an except handler only contains `pass`, the intent is to suppress the error. `contextlib.suppress()` states this explicitly and eliminates the try/except boilerplate."}
  fqName={"org.openrewrite.python.cleanup.UseContextlibSuppress"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseContextlibSuppress"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseContextlibSuppress"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/usecontextlibsuppress.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `try/except: pass` with `contextlib.suppress()`</RecipeHeader.Title>

<RecipeHeader.Description>When an except handler only contains `pass`, the intent is to suppress the error. `contextlib.suppress()` states this explicitly and eliminates the try/except boilerplate.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseContextlibSuppress","displayName":"Replace `try/except: pass` with `contextlib.suppress()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

