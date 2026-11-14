---
sidebar_label: Combining recipes across ecosystems
description: Learn how to combine Java, JavaScript, Python, C#, and Go recipes into a single recipe.
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

A single migration often needs recipes from more than one ecosystem. For example, you may want to run Moderne's Angular upgrade from npm together with your own dependency alignment recipes from a JAR.

You can combine recipes from any ecosystem, as long as the recipe that lists them is packaged the right way. The languages involved don't matter.

## Why packaging matters

A recipe that combines other recipes lists them by name in its `recipeList`. Where the Moderne CLI looks for those names depends on how that recipe was installed:

* **A standalone YAML file, or a recipe from the recipe builder**, finds its recipes in the recipe marketplace. The marketplace contains every recipe you have installed, from every ecosystem.
* **A recipe inside a JAR** only finds recipes in that JAR and its Maven dependencies. Recipes from npm, PyPI, NuGet, or Go are never in there.

## Supported combinations

| Your combining recipe is | It can list recipes from |
| ------------------------ | ------------------------ |
| Declarative YAML installed with `mod config recipes yaml install` | Any installed ecosystem |
| Declarative YAML built in the [Moderne recipe builder](https://app.moderne.io/builder) | Any installed ecosystem |
| Declarative YAML packaged in a recipe JAR under `META-INF/rewrite/` | Only that JAR and its Maven dependencies |
| An imperative Java recipe | Only that JAR and its Maven dependencies |
| A TypeScript recipe using `prepareJavaRecipe` | Its own npm package, plus any installed Java or YAML recipe |
| A Python recipe using `RpcRecipe` | Its own package, plus any installed Java or YAML recipe |
| A C# recipe implementing `IDelegatesTo` | Its own package, plus any installed Java or YAML recipe |
| A Go recipe implementing `recipe.DelegatesTo` | Its own module, plus any installed Java or YAML recipe |

Installing a combining recipe does not install the recipes it lists. You will need to install each package yourself, on every machine that runs the recipe.

## Combining recipes with declarative YAML

We recommend declarative YAML for combining recipes across ecosystems. You don't have to write any code or create a new recipe module.

The following recipe runs Moderne's Angular 10 upgrade, then your own recipe that aligns internal libraries:

```yaml title="angular-upgrade-10.yml"
type: specs.openrewrite.org/v1beta/recipe
name: com.example.angular.AngularUpgrade10
displayName: Upgrade to Angular 10 and align internal libraries
description: Runs the Angular 10 upgrade, then aligns internal libraries to their Angular 10 compatible versions.
recipeList:
  - org.openrewrite.angular.UpgradeToAngular10
  - com.example.angular.AlignInternalLibrariesV10
```

Install the packages that contain the listed recipes, then install the YAML file itself:

```bash
mod config recipes npm install @openrewrite/recipes-angular
mod config recipes jar install com.example:example-recipes:LATEST
mod config recipes yaml install angular-upgrade-10.yml
```

To share the recipe with others, send them the YAML file or add it to your organization's marketplace with the recipe builder.

:::warning
Don't put a recipe that combines ecosystems inside a recipe JAR. This isn't supported yet.

The JAR will install, and the recipe will show up in the marketplace. When you run it, though, the CLI only searches the JAR for the listed recipes. Any recipe from another ecosystem fails with an error like this:

```
com.example.angular.AngularUpgrade10.recipeList[0] (in jar:file:///.../example-recipes-1.0.0.jar!/META-INF/rewrite/angular.yml) was 'org.openrewrite.angular.UpgradeToAngular10' but it refers to a recipe that doesn't exist.
```

Wrapping the JAR recipe in a standalone YAML recipe doesn't fix this. The JAR recipe still only searches its own JAR. Keep the recipe that combines ecosystems in a standalone YAML file, and only package recipes from the same ecosystem in the JAR.
:::

## Calling Java recipes from other ecosystems

If your combining recipe needs logic of its own, you can write it in JavaScript, Python, C#, or Go instead of YAML. These recipes can still call Java or YAML recipes by name and pass them options.

The Java recipe runs exactly as it would on its own. This includes its scanning phase and any changes it makes to non-source files.

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

In C#, implement `IDelegatesTo`. Return the Java recipe's name from `JavaRecipeName` and its options from `Options`.

In Go, implement `recipe.DelegatesTo`. Return the Java recipe's name from `JavaRecipeName()` and its options from `JavaOptions()`.

You still need to install the Java or YAML recipe yourself, with `mod config recipes jar install` or `mod config recipes yaml install`.

## Troubleshooting

If a run fails because a `recipeList` entry `refers to a recipe that doesn't exist`, check the following:

* **The recipe is installed.** Run `mod config recipes list` and look for the recipe. If it's missing, install the package that contains it.
* **The combining recipe is not inside a JAR.** The error message shows which file the recipe was listed in. If that path starts with `jar:file:` and the missing recipe comes from npm, PyPI, NuGet, or Go, move the combining recipe to a standalone YAML file. Then install it with `mod config recipes yaml install`.
* **The name is spelled correctly.** Recipe names are case-sensitive and must be fully qualified.
