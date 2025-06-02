---
sidebar_label: Creating an Organizations service
description: How to create and configure an Organizations service.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating an Organizations service

You should create a dedicated organizations service if you want to:

* Limit access to the organizations you've [previously defined](./agent-configuration/configure-organizations-hierarchy.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

This guide will walk you through everything you need to know to create such a service.

## Organizations service template and API

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a CSV file.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

## Agent variables

Once you've created an organizations service, you'll need to update your Agent run command to provide it with additional variables. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Agent guide](./agent-configuration/agent-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_SERVICE_URL`                     | `true`   |         | The URL of your GraphQL service that provides access control for your organizations or commit message customization.                                                                                                              |
| `MODERNE_AGENT_ORGANIZATION_SERVICE_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                          |
|--------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.service.url`                   | `true`   |         | The URL of your GraphQL service that provides access control for your organizations or commit message customization.                                                                                                             |
| `--moderne.agent.organization.service.skipSsl`               | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.service.url=http://localhost:8091 \
# ... Additional arguments
```
</TabItem>
</Tabs>

