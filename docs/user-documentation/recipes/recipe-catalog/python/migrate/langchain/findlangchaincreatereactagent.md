---
sidebar_label: "Find `create_react_agent` usage (replace with `create_agent`)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `create_react_agent` usage (replace with `create_agent`)

**org.openrewrite.python.migrate.langchain.FindLangchainCreateReactAgent**

_Find `from langgraph.prebuilt import create_react_agent` which should be replaced with `from langchain.agents import create_agent` in LangChain v1.0._

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
  recipeName="org.openrewrite.python.migrate.langchain.FindLangchainCreateReactAgent"
  displayName="Find `create_react_agent` usage (replace with `create_agent`)"
  pipPackage="openrewrite-migrate-python"
/>
