# Moderne IntelliJ plugin

Moderne offers an IntelliJ plugin that improves the recipe development experience by connecting to the [Moderne CLI](../getting-started/cli-intro.md). With it, you can select an "active recipe" in IntelliJ and the Moderne CLI will automatically pick that up so that you can run recipes using the `--active-recipe` option rather than having to know the exact paths and names for every recipe you want to test.

Let's walk through how to install and use this plugin.

## Installation

You can install the Moderne IntelliJ plugin by:

* Going to [https://plugins.jetbrains.com/plugin/17565-moderne](https://plugins.jetbrains.com/plugin/17565-moderne) and pressing Get/Install in the top-right corner OR
* Navigating to `Settings` -> `Plugins` inside of IntelliJ and searching for `Moderne`&#x20;

## How to use

Once the plugin has been installed, please open the code for any recipe in IntelliJ. From there, right click on the class name. You should see an option to set the active recipe:

<figure><img src="../../../.gitbook/assets/select-active-recipe.gif" alt=""><figcaption></figcaption></figure>

Behind the scenes, when you click on `Set Active Recipe`, an active recipe file will be created at: `~/.moderne/cli/active.recipe`.&#x20;

With that file created, you can use the `--active-recipe` flag in the Moderne CLI. For instance, to run the active recipe in the current directory, you would run: `mod run . --active-recipe`.&#x20;
