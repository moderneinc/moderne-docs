---
sidebar_label: "Upgrade to LangChain 1.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to LangChain 1.0

**org.openrewrite.python.migrate.langchain.UpgradeToLangChain1**

_Migrate to LangChain 1.0 by applying all v0.2 migrations and then moving legacy functionality to `langchain_classic`._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [1.0](/user-documentation/recipes/lists/recipes-by-tag#1.0)
* [langchain](/user-documentation/recipes/lists/recipes-by-tag#langchain)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.UpgradeToLangChain1](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.langchain.UpgradeToLangChain1),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to LangChain 0.2](../../../python/migrate/langchain/upgradetolangchain02)
* [Replace `langchain` legacy imports with `langchain_classic`](../../../python/migrate/langchain/replacelangchainclassicimports)
* [Find `create_react_agent` usage (replace with `create_agent`)](../../../python/migrate/langchain/findlangchaincreatereactagent)
* [Find deprecated LangChain agent patterns](../../../python/migrate/langchain/finddeprecatedlangchainagents)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.langchain.UpgradeToLangChain1
displayName: Upgrade to LangChain 1.0
description: |
  Migrate to LangChain 1.0 by applying all v0.2 migrations and then moving legacy functionality to `langchain_classic`.
tags:
  - python
  - 1.0
  - langchain
  - migration
recipeList:
  - org.openrewrite.python.migrate.langchain.UpgradeToLangChain02
  - org.openrewrite.python.migrate.langchain.ReplaceLangchainClassicImports
  - org.openrewrite.python.migrate.langchain.FindLangchainCreateReactAgent
  - org.openrewrite.python.migrate.langchain.FindDeprecatedLangchainAgents

```
</TabItem>
</Tabs>

## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.langchain.UpgradeToLangChain1
```
