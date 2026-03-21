---
sidebar_label: "Replace `langchain` legacy imports with `langchain_classic`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `langchain` legacy imports with `langchain_classic`

**org.openrewrite.python.migrate.langchain.ReplaceLangchainClassicImports**

_Migrate legacy chain, retriever, and indexing imports from `langchain` to `langchain_classic`. These were moved in LangChain v1.0._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [1.0](/user-documentation/recipes/lists/recipes-by-tag#10)
* [langchain](/user-documentation/recipes/lists/recipes-by-tag#langchain)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to LangChain 1.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/langchain/upgradetolangchain1)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.langchain.ReplaceLangchainClassicImports"
  displayName="Replace `langchain` legacy imports with `langchain_classic`"
  pipPackage="openrewrite-migrate-python"
/>
