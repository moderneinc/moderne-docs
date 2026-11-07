---
sidebar_label: Combining recipes across ecosystems
description: Which recipe packaging lets you compose Java, JavaScript, Python, C#, and Go recipes into one recipe, and how to distribute the result.
---

# Combining recipes across ecosystems

Recipes are published through five package ecosystems:

| Ecosystem | Recipe languages | Installed with |
| --------- | ---------------- | -------------- |
| Maven | Java, Kotlin, Refaster, and declarative YAML packaged in a JAR | `mod config recipes jar install` |
| npm | JavaScript and TypeScript | `mod config recipes npm install` |
| PyPI | Python | `mod config recipes pip install` |
| NuGet | C# | `mod config recipes nuget install` |
| Go modules | Go | `mod config recipes go install` |

A single migration often needs recipes from more than one of these, such as Moderne's TypeScript Angular upgrade alongside your own dependency alignment recipes. Whether a composition resolves depends on how the recipe that does the composing is packaged, not on the languages involved.

## How recipe names are resolved

Every entry in a `recipeList` is a recipe name that has to be turned into a runnable recipe. There are two ways that can happen:

* **Through the recipe marketplace.** The marketplace knows every recipe you have installed, in every ecosystem, and hands each name to the ecosystem that contributed it. A name resolved this way can come from anywhere.
* **Through a recipe JAR's classpath.** A recipe loaded from a JAR looks names up among the classes and `META-INF/rewrite/*.yml` files in that JAR and its Maven dependencies. A recipe contributed by npm, PyPI, NuGet, or Go has no class there, so it cannot be found.

## Supported compositions

| The composing recipe is | It can list recipes from |
| ----------------------- | ------------------------ |
| Declarative YAML installed with `mod config recipes yaml install` | Any installed ecosystem |
| Declarative YAML built in the [Moderne recipe builder](https://app.moderne.io/builder) | Any installed ecosystem |
| Declarative YAML packaged in a recipe JAR under `META-INF/rewrite/` | Only that JAR and its Maven dependencies |
| An imperative Java recipe | Only that JAR and its Maven dependencies |
| A TypeScript recipe using `prepareJavaRecipe` | Its own npm package, plus any installed Java or YAML recipe |
| A Python recipe using `RpcRecipe` | Its own package, plus any installed Java or YAML recipe |
| A C# recipe implementing `IDelegatesTo` | Its own package, plus any installed Java or YAML recipe |
| A Go recipe implementing `recipe.DelegatesTo` | Its own module, plus any installed Java or YAML recipe |

Installing a composing recipe does not install the recipes it lists. You will need to install each ecosystem's recipe package separately, in every environment that runs the composition.

## Composing recipes with declarative YAML

Declarative YAML is the recommended way to combine recipes from different ecosystems, because it needs no code and no new recipe module in the ecosystem you are reaching into. For example, to run Moderne's Angular 10 upgrade together with your own dependency alignment recipe:

```yaml title="angular-upgrade-10.yml"
type: specs.openrewrite.org/v1beta/recipe
name: com.example.angular.AngularUpgrade10
displayName: Upgrade to Angular 10 and align internal libraries
description: Runs the Angular 10 upgrade, then aligns internal libraries to their Angular 10 compatible versions.
recipeList:
  - org.openrewrite.angular.UpgradeToAngular10
  - com.example.angular.AlignInternalLibrariesV10
```

Install the recipe packages it lists, then install the YAML file itself:

```bash
mod config recipes npm install @openrewrite/recipes-angular
mod config recipes jar install com.example:example-recipes:LATEST
mod config recipes yaml install angular-upgrade-10.yml
```

You can distribute the composition by sharing the YAML file, or by adding it to your organization's marketplace through the recipe builder.

:::warning
Do not package a cross-ecosystem composition in a recipe JAR yet. The JAR installs and the recipe appears in the marketplace, but running it fails validation because every entry is resolved against the JAR's classpath:

```
com.example.angular.AngularUpgrade10.recipeList[0] (in jar:file:///.../example-recipes-1.0.0.jar!/META-INF/rewrite/angular.yml) was 'org.openrewrite.angular.UpgradeToAngular10' but it refers to a recipe that doesn't exist.
```

Wrapping the JAR recipe in a loosely installed YAML recipe does not help, since the JAR recipe still resolves its own `recipeList` against its classpath. Keep cross-ecosystem compositions in loosely installed YAML, and package only same-ecosystem recipes in the JAR.
:::

## Calling Java recipes from other ecosystems

When the composition needs logic of its own, you can write it in JavaScript, Python, C#, or Go and reference Java or YAML recipes by name. The reference carries only the recipe name and its options. When the recipe runs, the Moderne CLI looks the name up in the marketplace and runs the Java recipe natively, including the scanning phase and any non-source files it edits.

In TypeScript, return `prepareJavaRecipe(...)` from `recipeList()`:

```typescript
import {Recipe} from "@openrewrite/rewrite";
import {prepareJavaRecipe} from "@openrewrite/rewrite/rpc";
import {UpgradeToAngular10} from "@openrewrite/recipes-angular";

export class AngularUpgrade10 extends Recipe {
    readonly name = "com.example.angular.AngularUpgrade10";
    readonly displayName = "Upgrade to Angular 10 and align internal libraries";
    readonly description = "Runs the Angular 10 upgrade, then aligns internal libraries.";

    async recipeList(): Promise<Recipe[]> {
        return [
            new UpgradeToAngular10(),
            await prepareJavaRecipe("com.example.angular.AlignInternalLibrariesV10"),
        ];
    }
}
```

In Python, return an `RpcRecipe` from `recipe_list()`:

```python
from rewrite.rpc.rpc_recipe import RpcRecipe

def recipe_list(self):
    return [
        ReplacePopulateByNameWithValidateByName(),
        RpcRecipe("org.openrewrite.python.UpgradeDependencyVersion",
                  packageName="pydantic", newVersion=">=2.11.0"),
    ]
```

In C#, implement `IDelegatesTo` and return the Java recipe name and options from `JavaRecipeName` and `Options`. In Go, implement `recipe.DelegatesTo` with `JavaRecipeName()` and `JavaOptions()`.

The Java or YAML recipe you reference must be installed separately with `mod config recipes jar install` or `mod config recipes yaml install`.

## Troubleshooting

If a run reports that a `recipeList` entry `refers to a recipe that doesn't exist`, check the following:

* **The recipe's package is installed.** Run `mod config recipes list` and confirm the recipe appears. If it does not, install the package that contributes it.
* **The composing recipe is not inside a JAR.** The message names the file the entry came from. If that is a `jar:file:` path and the missing recipe comes from npm, PyPI, NuGet, or Go, move the composition to a YAML file installed with `mod config recipes yaml install`.
* **The name is spelled exactly as listed.** Recipe names are case-sensitive and must be fully qualified.
