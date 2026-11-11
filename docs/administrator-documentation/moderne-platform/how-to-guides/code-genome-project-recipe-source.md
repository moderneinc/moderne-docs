---
sidebar_label: Using the Code Genome Project as a recipe source
description: TODO.
---

# Using the Code Genome Project as a recipe source

## When would I need this?

If your internal Artifactory (or other artifact repository) has a strict cooldown period before new artifacts can be pulled in, thus preventing the latest recipe artifacts from being available in your SaaS tenant.

## How does it work?

Moderne resolves recipe artifacts from from the recipe marketplace repositories the Moderne Connector provides. When one of these repositories has a curation cooldown in place, this can often cause the artifact repository to advertise a given version (for example, via `maven-metadata.xml`), but when a client actually tries to download that version, it won't be available. Hereafter we'll refer to this broken behavior as "torn recipe metadata".

To allow Moderne to provide recipe updates in a timely manner, and to prevent torn recipe metadata from allowing automated updates to your recipe jars, Moderne will configure Code Genome Project as a recipe marketplace repository directly in your tenant. 

## Security posture

Curation cooldowns on Artifactory, Nexus, etc., are designed around preventing insecure libraries—libraries that have not yet been vetted to be free of security vulnerabilities—from ending up in production code and being exploited. Adding Code Genome Project as a recipe marketplace repository directly in the SaaS tenant will allow those dependencies to be used for recipes, but **will not** circumvent the curation cooldown and allow these artifacts to be used in production code.

## Next steps

* [Importing external recipes](./importing-external-recipes.md)
* Connector configuration
* [Categorizing recipes](./categorize-recipes.md)
