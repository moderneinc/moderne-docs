# Importing external recipes

External recipes can be imported into Moderne.io for use by your organization.

{% hint style="success" %}
It is the responsibility of the administrator configuring this to ensure that the recipe JARs and versions are up-to-date. It is also their responsibility to select/curate the recipe JARs that should be uploaded.
{% endhint %}

#### Prerequisites

* You will need an Administrator-level account in your Moderne tenant to upload new recipe artifacts.

## Step 1: Load the recipes

From your Moderne tenant, click on _Deploy_ in the left-hand menu:

<figure><img src="../../../.gitbook/assets/deploy-link.png" alt=""><figcaption></figcaption></figure>

## Step 2: Upload the recipe artifacts

1. Click `Add` to open the form to import a recipe:

<figure><img src="../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

2. Provide the `Group ID`, `Artifact ID`, and `Version` for the published artifact:

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

3. Click _deploy recipe artifact_ to deploy it.

The artifact information will appear in the table if Moderne.io successfully locates the requested artifact.

**Note:** If you have an [on-premise agent](agent-configuration/agent-configuration.md) connected to an Artifactory instance that has been configured to serve recipes, we will look up recipes in your Artifactory repositories in addition to [Nexus](https://oss.sonatype.org/) and [Maven Central](https://search.maven.org/).

## Step 3: View recipes in the catalog

Your custom recipes will appear in the Marketplace and they will be discoverable through search once they have been successfully deployed.
