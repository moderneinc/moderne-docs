# Importing external recipes

External recipes can be imported into Moderne.io for use by your organization.

#### Prerequisites

* You will need an Administrator-level account in your Moderne tenant to upload new recipe artifacts.

## Step 1: Load the recipes

From your Moderne tenant, click on _Deploy_ in the left-hand menu under _Recipes_.

## Step 2: Upload the recipe artifacts

1. Click _Upload Recipe Artifact_ to open the form:
    ![](../.gitbook/assets/deployer-upload-artifact.png)
2. Provide the `Group ID`, `Artifact ID`, and `Version` for the published artifact.
3. Click _Upload Recipe Artifact_ to submit.

The artifact information will appear in the table if Moderne.io successfully locates the requested artifact.

**Note:** If you have an [on-premise agent](/how-to/agent-configuration.md) connected to an Artifactory instance that has been configured to serve recipes, we will look up recipes in your Artifactory repositories in addition to [Nexus](https://oss.sonatype.org/) and [Maven Central](https://search.maven.org/).

## Step 3: View recipes in the catalog

Your custom recipes will appear in the Catalog and be discoverable through search once they have been successfully deployed.
