---
sidebar_label: "Replace `langchain_community` imports with provider packages"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `langchain_community` imports with provider packages

**org.openrewrite.python.migrate.langchain.ReplaceLangchainProviderImports**

_Migrate provider-specific imports from `langchain_community` to dedicated provider packages like `langchain_openai`, `langchain_anthropic`, etc._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [0.2](/user-documentation/recipes/lists/recipes-by-tag#02)
* [langchain](/user-documentation/recipes/lists/recipes-by-tag#langchain)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to LangChain 0.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/langchain/upgradetolangchain02)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.langchain.ReplaceLangchainProviderImports
```
