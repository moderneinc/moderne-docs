---
sidebar_label: "Replace `langchain` imports with `langchain_community`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `langchain` imports with `langchain_community`

**org.openrewrite.python.migrate.langchain.ReplaceLangchainCommunityImports**

_Migrate third-party integration imports from `langchain` to `langchain_community`. These integrations were moved in LangChain v0.2._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [0.2](/user-documentation/recipes/lists/recipes-by-tag#0.2)
* [langchain](/user-documentation/recipes/lists/recipes-by-tag#langchain)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.ReplaceLangchainCommunityImports](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.ReplaceLangchainCommunityImports),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to LangChain 0.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/langchain/upgradetolangchain02)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.langchain.ReplaceLangchainCommunityImports
```
