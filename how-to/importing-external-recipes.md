# Importing external recipes

External recipes can be imported into Moderne.io for use by your organization.

This requires an Administrator-level account in order to upload new recipe artifacts.

## Step 1: Go to Load Recipes

Click on _Deploy_ in the left-hand menu.

## Step 2: Upload Recipe Artifact

![](../.gitbook/assets/deployer-upload-artifact.png)

1. Click _Upload Recipe Artifact_ to open the form.
2. Provide the `Group ID`, `Artifact ID`, and `Version` for the published artifact.
3. Click _Upload Recipe Artifact_ to submit.

The artifact information will appear in the table if Moderne.io successfully locates the requested artifact.

**Note:** If you have an [on-premise agent](on-premise-agent.md) connected to an Artifactory instance, we will look up recipes in your Artifactory repositories in addition to [Nexus](https://oss.sonatype.org/) and [Maven Central](https://search.maven.org/).

## Step 3: View recipes in the catalog

Your custom recipes will appear in the Catalog and be discoverable through search once successfully deployed.
