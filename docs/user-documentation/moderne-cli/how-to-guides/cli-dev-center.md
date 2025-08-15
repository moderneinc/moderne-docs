---
sidebar_label: Generating DevCenters locally
description: How to create or edit DevCenters using the Moderne CLI.
---

# How to configure the Moderne CLI DevCenter

The Moderne DevCenter provides you with high-level details about the state of all of your repositories. Using it, you can track the progress of upgrades, migrations, and security vulnerabilities. You may be aware of [this feature in the Moderne Platform](../../moderne-platform/getting-started/dev-center.md) - but did you know that you can generate a DevCenter locally via the CLI?

In this guide, we'll walk you through how to do that.

## Prerequisities

This guide assumes that you have already [installed and configured the CLI](../getting-started/cli-intro.md#installation-and-configuration).

## Step 1: Checkout the repositories you want to build a DevCenter for

The first thing you'll need to do is come up with the list of repositories that you want to build a DevCenter for. Once you have that list, please ensure they are cloned to a shared directory locally. For instance, this might look like:

```bash
devcenter-demo
├── repo1
├── repo2
└── repo3
```

:::tip
You may find it useful to start by only cloning a small subset of your repositories locally so that you can test, build, and iterate quickly. Once you've confirmed everything is working as you want, you can then add more repositories as desired.
:::

We'd recommend using the [mod git sync command](../cli-reference.md#mod-git-sync) to create this shared directory. With it, you can clone repositories from a CSV file or from an existing organization.

## Step 2: Build the LSTs

With the repositories cloned, you now need to build or download LSTs to run DevCenter recipes on:

```bash
mod build devcenter-demo
```

## Step 3: Install DevCenter starter recipes

Starting with CLI 3.44.5, DevCenter dashboards are built using YAML declarative recipes composed with recipes provided by the [rewrite-devcenter](https://github.com/moderneinc/rewrite-devcenter) recipe artifact. To install the latest version of `rewrite-devcenter`, run the following command:
```bash
mod config recipes jar install io.moderne.recipe:rewrite-devcenter:LATEST
```

## Step 4: Generate the DevCenterStarter dashboard

`rewrite-devcenter` includes an example DevCenterStarter recipe which you can run as follows:
```bash
mod run devcenter-demo --recipe io.moderne.devcenter.DevCenterStarter
```

This recipe will generate the data tables required to build the DevCenter dashboard using the command:
```bash
mod devcenter devcenter-demo --last-recipe-run
```

Once complete, `mod devcenter` will provide the location of the DevCenter dashboard:
```bash
> Generating DevCenter

Done (26s)

* What to do next
    > Open /Users/brycetompkins/repos/devcenter-demo/devcenter.html

MOD SUCCEEDED in 27s
```

Open the HTML file to view your DevCenter dashboard:

<figure>
  ![](./assets/devcenter-example.png)
  <figcaption>_An example of what a CLI generated DevCenter looks like_</figcaption>
</figure>


## Step 5: Create your custom DevCenter recipe

The source for the DevCenterStarter recipe can be found [here](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/devcenter-starter.yml). You can use this recipe as a starting point to configure a custom DevCenter dashboard.

:::warning
Make sure to give your recipes unique names so as not to conflict with installed starter recipes.
:::

Once complete, you can install the recipe to the local recipe marketplace with the command:
```bash
mod config recipes yaml install MyDevCenter.yml
```

Next, run the recipe and generate the dashboard:
```bash
mod run dashboard-demo --recipe com.acme.MyDevCenter
mod devcenter dashboard-demo --last-recipe-run
```

## Next steps

Once you've arrived at a DevCenter that you like, consider sharing it with your team by publishing the recipe to your Moderne recipe marketplace using the command `mod config recipes moderne push`.
