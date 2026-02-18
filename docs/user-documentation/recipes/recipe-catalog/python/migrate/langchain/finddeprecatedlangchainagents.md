---
sidebar_label: "Find deprecated LangChain agent patterns"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated LangChain agent patterns

**org.openrewrite.python.migrate.langchain.FindDeprecatedLangchainAgents**

_Find usage of deprecated LangChain agent patterns including `initialize_agent`, `AgentExecutor`, and `LLMChain`. These were deprecated in LangChain v0.2 and removed in v1.0._

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

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.langchain.FindDeprecatedLangchainAgents
```
