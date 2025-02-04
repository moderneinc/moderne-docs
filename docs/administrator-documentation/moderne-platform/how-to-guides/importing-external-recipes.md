---
sidebar_label: Importing external recipes
description: How to import external recipes.
---

# Importing external recipes

External recipes can be imported into Moderne for use by your organization.

:::tip
It is the responsibility of the administrator configuring this to ensure that the recipe JARs and versions are up-to-date. It is also their responsibility to select/curate the recipe JARs that should be uploaded.
:::

### Prerequisites

* If you are a **single-tenant** user, you will need an Administrator-level account in your Moderne tenant to upload new recipe artifacts.
* If you are a **multi-tenant** user, anyone with an `@mycompany.com` email can deploy a recipe artifact if said artifact has a `groupId` that starts with `com.mycompany` (the `tenantDomain` inverted).

## Step 1: Load the recipes

From your Moderne tenant, click on _Deploy_ in the left-hand menu:

<figure>
  ![](./assets/deploy-link.png)
  <figcaption></figcaption>
</figure>

## Step 2: Upload the recipe artifacts

1. Click `Add` to open the form to import a recipe:

<figure>
  ![](./assets/add-recipe-button.png)
  <figcaption></figcaption>
</figure>

2. Provide the `Group ID`, `Artifact ID`, and `Version` for the published artifact:

:::info
If you are a multi-tenant customer, you must ensure that your artifact's `groupId` starts with `com.mycompany` (the `tenantDomain` inverted). You also must ensure that your account has an `@mycompany.com` email address.
:::

<figure>
  ![](./assets/gav-artifact.png)
  <figcaption></figcaption>
</figure>

3. Click _deploy recipe artifact_ to deploy it.

The artifact information will appear in the table if Moderne successfully locates the requested artifact.

**Note:** If you have an [on-premise agent](./agent-configuration/agent-config.md) connected to an Artifactory instance that has been configured to serve recipes, we will look up recipes in your Artifactory repositories in addition to [Nexus](https://oss.sonatype.org/) and [Maven Central](https://search.maven.org/).

## Step 3: View recipes in the catalog

Your custom recipes will appear in the Marketplace, and they will be discoverable through search once they have been successfully deployed.
