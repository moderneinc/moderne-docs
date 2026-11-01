---
sidebar_label: Installing Moderne DX
description: How to install and start Moderne DX on your own machine, and connect the Moderne CLI to it.
---

# Installing Moderne DX

Moderne DX runs from a single jar. These steps start it on your own machine at `https://moderne.localhost:8443`. To serve it to your organization afterwards, see [serving Moderne DX](../how-to-guides/serving-moderne-dx.md).

**You need:** macOS on Apple silicon or Linux, with Java 25 and the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md). From Moderne: a license key and a [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) (CGP) token. From you: a `repos-lock.csv` from [mass ingest](../how-to-guides/mass-ingest-dx.md), and an [OAuth app on your SCM](../references/moderne-yml-reference.md#scm-connections) with callback `https://moderne.localhost:8443`.

## 1. Download

```bash
curl -fL -u <cgp-user>:<cgp-token> -o moderne-dx.jar \
  https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/<version>/moderne-dx-<version>.jar
java -jar moderne-dx.jar init    # macOS: say yes when it offers to trust DX's CA
```

The [Maven metadata](https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/maven-metadata.xml) lists the versions. On Linux, run `java -jar moderne-dx.jar trust` and follow what it prints.

## 2. Configure

Set these in the `moderne.yml` that `init` wrote:

```yaml title="moderne.yml"
moderne:
  license:
    key: ${MODERNE_LICENSE_KEY}
  tenant:
    name: acme
  recipe:
    marketplace:
      repositories:
        code-genome-project:
          username: <cgp-user>
          token: ${CGP_TOKEN}
        # maven:                  # or your own repository that proxies CGP
        #   - uri: https://artifactory.acme.com/artifactory/moderne-recipes
        #     username: moderne
        #     password: ${ARTIFACTORY_PASSWORD}
  organization:
    sources:
      http:
        - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
          username: moderne
          password: ${ARTIFACTORY_PASSWORD}
  scm:
    github:
      - id: github
        uri: https://github.com
        oauth:
          client-id: <client-id>
          client-secret: ${GITHUB_OAUTH_SECRET}
    # gitlab:                     # or another SCM's OAuth app
    #   - uri: https://gitlab.acme.com
    #     oauth:
    #       client-id: <client-id>
    #       client-secret: ${GITLAB_OAUTH_SECRET}
    # bitbucket-datacenter:
    #   - uri: https://bitbucket.acme.com
    #     oauth:
    #       key: <key>
    #       secret: ${BITBUCKET_OAUTH_SECRET}
    # bitbucket-cloud:
    #   oauth:
    #     key: <key>
    #     secret: ${BITBUCKET_OAUTH_SECRET}
    # azure-devops:
    #   - oauth:
    #       client-id: <client-id>
    #       client-secret: ${AZURE_DEVOPS_OAUTH_SECRET}
    #       tenant-id: <tenant-id>
```

Add the secrets to `moderne.env`:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
ARTIFACTORY_PASSWORD=…
GITHUB_OAUTH_SECRET=…
```

The [`moderne.yml` reference](../references/moderne-yml-reference.md) lists every other setting.

## 3. Start

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

Open `https://moderne.localhost:8443` and sign in as `moderne`. `start` prints where to find the password. Connect your SCM account under **Settings** > **SCM connections**. Install recipes from the marketplace.

## 4. Connect the CLI

```bash
mod config http trust-store edit system
mod config moderne edit https://moderne.localhost:8443
mod config moderne login
```

The first line is for macOS. Elsewhere, [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store) gives the CLI DX's certificate authority.

## Next steps

* [Serve Moderne DX to your organization](../how-to-guides/serving-moderne-dx.md) with a name and certificate of its own.
* [Connect your identity provider](../how-to-guides/identity-provider-dx.md).
* [Upgrade and back up Moderne DX](../how-to-guides/upgrading-and-backing-up-dx.md).
* [Troubleshoot Moderne DX](../references/troubleshooting-dx.md).
