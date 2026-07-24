---
title: Creating an Organizations service
sidebar_label: Creating an Organizations service
description: How to create and configure an Organizations service.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/org-service" />

# Creating an Organizations service

You should create a dedicated Organizations service if you want to:

* Limit access to the organizations you've [previously defined](./connector-configuration/configure-organizations-hierarchy.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

This guide will walk you through everything you need to know to create such a service.

## Organizations service template and API

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a CSV file.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

## Connector variables

Once you've created an organizations service, configure your Connector to call it under the `moderne.custom-integrations` namespace. These variables/arguments must be combined with the ones found in other steps in the [Configuring the Moderne Connector guide](./connector-configuration/connector-config.md).

Access scoping is **fail-closed**: if the service is unreachable or returns an error, a user is restricted to no organizations rather than the full hierarchy. Commit-message customization is **fail-open**: an unreachable or erroring service leaves the original commit message unchanged, so it never blocks a commit.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                 | Required | Default | Description                                                                                                       |
|---------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_URI`          | `true`   |         | The URL of your organizations service's GraphQL endpoint (e.g., `https://org-service.internal/graphql`).          |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_USERNAME`     | `false`  | `null`  | Username, if the service requires basic authentication.                                                           |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_PASSWORD`     | `false`  | `null`  | Password, if the service requires basic authentication.                                                           |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_BEARERTOKEN`  | `false`  | `null`  | Bearer token, if the service uses token authentication. Takes precedence over username/password when both are set. |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_SKIPSSL`      | `false`  | `false` | Whether to skip SSL/TLS verification for the Connector's calls to this service. Set to `true` if the service uses a self-signed SSL/TLS certificate. |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_SKIPVALIDATECONNECTIVITY` | `false` | `false` | By default, on Connector startup, we validate that we can reach this service and fail to start the Connector if we cannot. Set to `true` to skip this validation (e.g., if the service may be unavailable when the Connector boots). |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_PROXY_HOST`   | `false`  |         | Hostname of a forward proxy to use for the Connector's calls to this service. |
| `MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_PROXY_PORT`   | `false`  |         | Port of the forward proxy. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CUSTOMINTEGRATIONS_ORGANIZATIONSERVICE_URI=https://org-service.internal/graphql \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                     | Required | Default | Description                                                                                                       |
|-------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------|
| `--moderne.custom-integrations.organization-service.uri`          | `true`   |         | The URL of your GraphQL service that provides access control for your organizations or commit message customization.                                                          |
| `--moderne.custom-integrations.organization-service.username`     | `false`  | `null`  | Username, if the service requires basic authentication.                                                           |
| `--moderne.custom-integrations.organization-service.password`     | `false`  | `null`  | Password, if the service requires basic authentication.                                                           |
| `--moderne.custom-integrations.organization-service.bearerToken`  | `false`  | `null`  | Bearer token, if the service uses token authentication. Takes precedence over username/password when both are set. |
| `--moderne.custom-integrations.organization-service.skipSsl`      | `false`  | `false` | Whether to skip SSL/TLS verification for the Connector's calls to this service. Set to `true` if the service uses a self-signed SSL/TLS certificate. |
| `--moderne.custom-integrations.organization-service.skipValidateConnectivity` | `false` | `false` | By default, on Connector startup, we validate that we can reach this service and fail to start the Connector if we cannot. Set to `true` to skip this validation. |
| `--moderne.custom-integrations.organization-service.proxy.host`   | `false`  |         | Hostname of a forward proxy to use for the Connector's calls to this service. |
| `--moderne.custom-integrations.organization-service.proxy.port`   | `false`  |         | Port of the forward proxy. |

**Example:**

```bash
java -jar moderne-connector-{version}.jar \
# ... Existing arguments
--moderne.custom-integrations.organization-service.uri=https://org-service.internal/graphql \
# ... Additional arguments
```
</TabItem>
</Tabs>

:::note
If you previously pointed the Moderne agent at this service with `moderne.agent.organization.service.url`, that setting is **not** carried over automatically — reconfigure it under `moderne.custom-integrations.organization-service.uri` as shown above.
:::

