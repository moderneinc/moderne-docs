---
title: Configure a Connector with recipe marketplace repositories
sidebar_label: Recipe marketplace repositories
description: How to configure the Moderne Connector to retrieve recipe artifacts from Maven, NPM, NuGet, PyPI, and Go repositories.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configuring-artifactory-with-recipes" />

# Configure a Connector with recipe marketplace repositories

This guide explains how to point the Moderne Connector at one or more package registries (Maven, NPM, NuGet, PyPI, and Go) so that recipe artifacts published to those registries become available for [deployment to Moderne](../importing-external-recipes.md).

## Configuring the Moderne Connector

Recipe marketplace repositories are configured under the `moderne.recipe.marketplace.repositories` namespace. You can configure multiple repositories of each type by including multiple entries, each with a different `{index}`.

The variables/arguments in the tables below must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

:::info[At least one Maven repository is required]
The Moderne Platform does not fall back to Maven Central or any other public registry. You must explicitly configure at least one Maven repository below that hosts every recipe artifact (and its transitive dependencies) you intend to deploy. PyPI, NuGet, NPM, and Go have no defaults either: each ecosystem must be explicitly configured.

If you are using OpenRewrite recipes, that typically means configuring Maven Central (`https://repo.maven.apache.org/maven2/`, releases), Sonatype snapshots (`https://central.sonatype.com/repository/maven-snapshots/`, snapshots), and the Gradle release repository (`https://repo.gradle.org/gradle/libs-releases/`, releases), or an internal Nexus or Artifactory that mirrors them. The Gradle release repository is required for recipes that operate on Gradle build files: `org.openrewrite:rewrite-gradle` and the recipes that depend on it resolve `org.gradle:*` artifacts that are published only there, not to Maven Central, so a Maven Central mirror on its own is not sufficient.
:::

## Recommended OpenRewrite packages

The Moderne Platform supports recipes packaged for Maven, NPM, NuGet, and pip. The following OpenRewrite packages are the recommended starting points for each ecosystem. Once you have registered the corresponding registry below, deploy these packages from the v2 deploy page.

**JavaScript and TypeScript (NPM):**

* `@openrewrite/recipes-nodejs`
* `@openrewrite/recipes-react`
* `@openrewrite/recipes-angular`

**Python:**

* Maven: `org.openrewrite:rewrite-python:LATEST`
* pip: `openrewrite-migrate-python`

**C# (NuGet):**

* `OpenRewrite.Recipes.CSharp.Migration.Dotnet`
* `OpenRewrite.Recipes.CSharp.CodeQuality`
* `OpenRewrite.CSharp`

:::warning[C# package dependencies]
`OpenRewrite.Recipes.CSharp.Migration.Dotnet` and `OpenRewrite.Recipes.CSharp.CodeQuality` depend on `OpenRewrite.CSharp` and the Java `org.openrewrite:rewrite-java` package. You must register both for the first two to resolve. If you previously saw `OpenRewrite.MigrateDotNet` referenced anywhere, that is the **old** package name — use the three packages listed above instead.
:::

:::tip[Use internal mirrors where possible]
If your organization already runs an internal NPM registry mirror, NuGet feed, or PyPI proxy, point the marketplace repositories below at those rather than the public registries. This keeps recipe resolution traffic on your network and avoids hitting public rate limits.
:::

## Maven

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                      | Required | Default | Description                                                                                                                                                                 |
|--------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_URI`        | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_USERNAME`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PASSWORD`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PROXY_HOST` | `false`  | `null`  | The host of an HTTP proxy used to reach this repository.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PROXY_PORT` | `false`  | `null`  | The port of an HTTP proxy used to reach this repository.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_SKIPSSL`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_RELEASES`   | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_SNAPSHOTS`  | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_PASSWORD=password \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                         | Required | Default | Description                                                                                                                                                                 |
|-----------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.maven[{index}].uri`        | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.maven[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `--moderne.recipe.marketplace.repositories.maven[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `--moderne.recipe.marketplace.repositories.maven[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this repository.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.maven[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this repository.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.maven[{index}].skipSsl`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.recipe.marketplace.repositories.maven[{index}].releases`   | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `--moderne.recipe.marketplace.repositories.maven[{index}].snapshots`  | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.recipe.marketplace.repositories.maven[0].username=admin \
--moderne.recipe.marketplace.repositories.maven[0].password=password \
# ... Additional arguments
```

</TabItem>
</Tabs>

### AWS CodeArtifact

When a Maven repository URL points at an [AWS CodeArtifact](https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html) endpoint (`<domain>-<account-id>.d.codeartifact.<region>.amazonaws.com`) and you leave the password unset, the Connector mints and refreshes CodeArtifact authorization tokens itself. CodeArtifact tokens are short-lived (up to 12 hours), so this removes the need to manually generate and rotate a token before it expires. The Connector resolves AWS credentials through the [default credential provider chain](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/credentials-chain.html) (IAM role, profile, environment variables, etc.), mints one token per CodeArtifact domain, and re-mints ahead of expiry so the request path does not block.

To enable it, configure the repository with its CodeArtifact URL and leave `password` unset. The Connector authenticates as the CodeArtifact user `aws` automatically. Statically configured credentials (`username` + `password`) always take precedence, so a manually minted token remains fully supported (for example, when the Connector runs without an AWS identity).

:::info
Token minting does not apply to LST or organization sources. CodeArtifact is not supported as an [LST source](./configure-a-connector-with-maven-repository-access.md#aws-codeartifact): CodeArtifact does not serve the maven-indexer index that LST poll discovery requires, and its package assets are immutable, so the Connector rejects CodeArtifact URLs in LST and organization source configuration at startup.
:::

#### Prerequisites

The AWS identity available to the Connector must be allowed to mint tokens for your CodeArtifact domain and read from the repository:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "codeartifact:GetAuthorizationToken",
            "Resource": "arn:aws:codeartifact:<region>:<account-id>:domain/<domain>"
        },
        {
            "Effect": "Allow",
            "Action": "codeartifact:ReadFromRepository",
            "Resource": "arn:aws:codeartifact:<region>:<account-id>:repository/<domain>/<repository>"
        },
        {
            "Effect": "Allow",
            "Action": "sts:GetServiceBearerToken",
            "Resource": "*"
        }
    ]
}
```

`codeartifact:GetAuthorizationToken` mints the token and is scoped to the domain. `codeartifact:ReadFromRepository` authorizes the artifact downloads the token is then used for, and is scoped to the repository. Without it, token minting succeeds but every artifact download returns HTTP 403. `sts:GetServiceBearerToken` does not support resource-level restrictions and must use `"*"`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_URI=https://my-domain-111122223333.d.codeartifact.us-east-1.amazonaws.com/maven/my-repo/ \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.maven[0].uri=https://my-domain-111122223333.d.codeartifact.us-east-1.amazonaws.com/maven/my-repo/ \
# ... Additional arguments
```

</TabItem>
</Tabs>

## NPM

NPM repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearerToken`), but not both at the same time.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                     | Required | Default | Description                                                                                                                                                             |
|-------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_URI`         | `true`   |         | The URL of your NPM registry.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_USERNAME`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                          |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PASSWORD`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                          |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_BEARERTOKEN` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `USERNAME`/`PASSWORD`.                                                                                |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PROXY_HOST`  | `false`  | `null`  | The host of an HTTP proxy used to reach this registry.                                                                                                                  |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PROXY_PORT`  | `false`  | `null`  | The port of an HTTP proxy used to reach this registry.                                                                                                                  |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_SKIPSSL`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NPM registry. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_URI=https://myartifactory.example.com/artifactory/api/npm/npm-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_BEARERTOKEN=... \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                        | Required | Default | Description                                                                                                                                                             |
|----------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.npm[{index}].bearerToken` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                                |
| `--moderne.recipe.marketplace.repositories.npm[{index}].proxy.host`  | `false`  | `null`  | The host of an HTTP proxy used to reach this registry.                                                                                                                  |
| `--moderne.recipe.marketplace.repositories.npm[{index}].password`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                          |
| `--moderne.recipe.marketplace.repositories.npm[{index}].proxy.port`  | `false`  | `null`  | The port of an HTTP proxy used to reach this registry.                                                                                                                  |
| `--moderne.recipe.marketplace.repositories.npm[{index}].uri`         | `true`   |         | The URL of your NPM registry.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.npm[{index}].username`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                          |
| `--moderne.recipe.marketplace.repositories.npm[{index}].skipSsl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NPM registry. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.npm[0].uri=https://myartifactory.example.com/artifactory/api/npm/npm-local \
--moderne.recipe.marketplace.repositories.npm[0].bearerToken=... \
# ... Additional arguments
```

</TabItem>
</Tabs>

## NuGet

NuGet repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearerToken`), but not both at the same time.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                       | Required | Default | Description                                                                                                                                                           |
|---------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_URI`         | `true`   |         | The URL of your NuGet feed.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_USERNAME`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PASSWORD`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_BEARERTOKEN` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `USERNAME`/`PASSWORD`.                                                                              |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PROXY_HOST`  | `false`  | `null`  | The host of an HTTP proxy used to reach this feed.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PROXY_PORT`  | `false`  | `null`  | The port of an HTTP proxy used to reach this feed.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_SKIPSSL`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NuGet feed. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_URI=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_BEARERTOKEN=... \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                          | Required | Default | Description                                                                                                                                                           |
|------------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.nuget[{index}].uri`         | `true`   |         | The URL of your NuGet feed.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].username`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                        |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].password`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                        |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].bearerToken` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                              |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].proxy.host`  | `false`  | `null`  | The host of an HTTP proxy used to reach this feed.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].proxy.port`  | `false`  | `null`  | The port of an HTTP proxy used to reach this feed.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].skipSsl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NuGet feed. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.nuget[0].uri=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
--moderne.recipe.marketplace.repositories.nuget[0].bearerToken=... \
# ... Additional arguments
```

</TabItem>
</Tabs>

## PyPI

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                     | Required | Default | Description                                                                                                                                                           |
|-------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_URI`        | `true`   |         | The URL of your PyPI index.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_USERNAME`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PASSWORD`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PROXY_HOST` | `false`  | `null`  | The host of an HTTP proxy used to reach this index.                                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PROXY_PORT` | `false`  | `null`  | The port of an HTTP proxy used to reach this index.                                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_SKIPSSL`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_URI=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_PASSWORD=password \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                        | Required | Default | Description                                                                                                                                                           |
|----------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.pypi[{index}].uri`        | `true`   |         | The URL of your PyPI index.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this index.                                                                                                                   |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this index.                                                                                                                   |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].skipSsl`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.pypi[0].uri=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
--moderne.recipe.marketplace.repositories.pypi[0].username=admin \
--moderne.recipe.marketplace.repositories.pypi[0].password=password \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Go

Go recipe modules are resolved through a Go module proxy, such as an [Artifactory Go repository](https://jfrog.com/help/r/jfrog-artifactory-documentation/go-registry). Go does not support native bearer authentication for dependency resolution, so a proxy authenticates with basic auth only. Supply your credentials as `username` + `password` (for Artifactory, use your username and identity token as the password). If your proxy issues a bearer or access token rather than a username and password, supply the token as the `password` and set `username` to any non-empty placeholder that your proxy ignores (for example, `__token__`).

The configured feeds are authoritative. There is no `direct` fallback and no external egress: modules that are not served by a configured feed will not resolve.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                 | Required | Default | Description                                                                                                                                                                 |
|---------------------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_{index}_URI`      | `true`   |         | The URL of your Go module proxy.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_{index}_USERNAME` | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_{index}_PASSWORD` | `false`  | `null`  | The password used to resolve artifacts. For Artifactory, use your identity token as the password.                                                                          |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_{index}_SKIPSSL`  | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Go module proxy. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_URI=https://myartifactory.example.com/artifactory/api/go/go-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_PASSWORD=identityToken \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                    | Required | Default | Description                                                                                                                                                                 |
|------------------------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.go[{index}].uri`      | `true`   |         | The URL of your Go module proxy.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.go[{index}].username` | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.go[{index}].password` | `false`  | `null`  | The password used to resolve artifacts. For Artifactory, use your identity token as the password.                                                                          |
| `--moderne.recipe.marketplace.repositories.go[{index}].skipSsl`  | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Go module proxy. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.go[0].uri=https://myartifactory.example.com/artifactory/api/go/go-local \
--moderne.recipe.marketplace.repositories.go[0].username=admin \
--moderne.recipe.marketplace.repositories.go[0].password=identityToken \
# ... Additional arguments
```

</TabItem>
</Tabs>

:::info[Connector-only transport settings]
`proxy`, `connectTimeout`, and `readTimeout` bind on the Connector but do not propagate to the recipe-service CLI artifact store that resolves Go modules, so they have no effect on Go recipe resolution.
:::

Once a feed is configured, install a recipe module with:

```bash
mod config recipes go install github.com/<org>/<repo>
```

### Private GitHub modules

Direct git and VCS resolution of private GitHub modules is not yet supported ([moderne-cli#2985](https://github.com/moderneinc/moderne-cli/issues/2985)). In the meantime, publish the internal recipe module into an Artifactory Go repository (a local repository, or a virtual repository backed by a VCS remote), then point `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_GO_0_URI` at it.
