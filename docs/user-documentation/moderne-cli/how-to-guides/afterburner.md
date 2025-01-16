# How to improve recipe run times with mod afterburner

By default, every time you run a recipe against an LST, the full LST much be parsed and checked – even if no changes have been made against it. This results in recipes taking a decent amount of time to execute – regardless of how many times you've run recipes against the same LST or how complex those recipes are.

Fortunately, we've recently added a new command that can significantly speed up repeated recipe runs against the same LST(s): [mod afterburner](../cli-reference.md#mod-afterburner).

In this guide, we'll describe what this command does and provide you with an example of how you might use it to improve your CLI experience.

## What `mod afterburner` does

The `mod afterburner` command indexes certain parts (e.g., types) of the LST in order to speed up repeated recipe runs against the same LST.

While not all recipes can benefit from this optimization, common ones – especially those frequently used in IDE integrations – often will. Some examples of recipes that will benefit from this include: find types, find method usages, and any high level recipe like upgrading Java or Spring Boot versions.

:::info
The generated indexes are internal to the CLI and may change between versions. They are intended **solely** for use by the CLI in subsequent run commands.
:::

## How to use it

After you've built an LST, you can run the following command to index it so that future recipe runs against it are faster:

```bash
mod afterburner <path_to_repository>
```

Once that command is run, you can run any recipe as normal after it:

```bash
mod run . --recipe FindTypes -PfullyQualifiedTypeName="java.util.List"
```

:::tip
If you want to speed up recipe runs even further, check out [our guide on how to use parallelism in the CLI](./parallelism.md).
:::