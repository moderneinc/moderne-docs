---
sidebar_label: Creating an organizations service
description: How to create and configure an organizations service that pairs with Moderne DX.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating an organizations service

You should create a dedicated organizations service if you want to limit access to the organizations you've [previously defined](./configure-dx-organizations.md) so that some users only have access to some repositories.

This guide will walk you through everything you need to know to create such a service.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You've already [created an organizational hierarchy for your repositories](./configure-dx-organizations.md)

## Organizations service template and API

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a CSV file.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

## DX variables

Once you've created an organizations service, you'll need to update your DX run command to provide it with additional variables. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                     | Required | Default | Description                                                                                                                                                                                                                                      |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_URL`                     | `true`   |         | The URL of your GraphQL service.                                                                                                              |
| `MODERNE_DX_ORGANIZATION_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `MODERNE_DX_ORGANIZATION_URL`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required | Default | Description                                                                                                                                                                                                                                        |
|---------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.organization.url`                   | `true`   |         | The URL of your GraphQL service.                                                                                                              |
| `--moderne.dx.organization.skipSsl`               | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `--moderne.dx.organization.url`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.url=http://localhost:8091 \
# ... Additional arguments
```
</TabItem>
</Tabs>