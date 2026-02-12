---
sidebar_label: "Upgrade to LangChain 0.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to LangChain 0.2

**org.openrewrite.python.migrate.langchain.UpgradeToLangChain02**

_Migrate to LangChain 0.2 by updating imports from `langchain` to `langchain_community` and provider-specific packages._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [0.2](/user-documentation/recipes/lists/recipes-by-tag#0.2)
* [langchain](/user-documentation/recipes/lists/recipes-by-tag#langchain)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.UpgradeToLangChain02](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.UpgradeToLangChain02),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

The license for this recipe is unknown.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `langchain` imports with `langchain_community`](../../../python/migrate/langchain/replacelangchaincommunityimports)
* [Replace `langchain_community` imports with provider packages](../../../python/migrate/langchain/replacelangchainproviderimports)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.langchain.UpgradeToLangChain02
displayName: Upgrade to LangChain 0.2
description: |
  Migrate to LangChain 0.2 by updating imports from `langchain` to `langchain_community` and provider-specific packages.
tags:
  - python
  - 0.2
  - langchain
  - migration
recipeList:
  - org.openrewrite.python.migrate.langchain.ReplaceLangchainCommunityImports
  - org.openrewrite.python.migrate.langchain.ReplaceLangchainProviderImports

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to LangChain 1.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/langchain/upgradetolangchain1)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.langchain.UpgradeToLangChain02
```
