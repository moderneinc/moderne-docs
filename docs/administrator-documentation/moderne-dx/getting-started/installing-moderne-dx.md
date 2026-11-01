---
sidebar_label: Installing Moderne DX
description: How to install and start Moderne DX on your own machine, and connect the Moderne CLI to it.
---

# Installing Moderne DX

Moderne DX runs from a single jar. These steps start it on your own machine at `https://moderne.localhost:8443`. Serving it to your organization afterwards takes [a name and usually a certificate](../how-to-guides/running-moderne-dx.md#choosing-its-name).

## Prerequisites

* macOS on Apple silicon or Linux, with Java 25 and the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md).
* A license key and a [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) (CGP) token from Moderne.

## Downloading Moderne DX

```bash
curl -fL -u <cgp-user>:<cgp-token> -o moderne-dx.jar \
  https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/<version>/moderne-dx-<version>.jar
java -jar moderne-dx.jar init    # macOS: say yes when it offers to trust DX's certificate authority
```

The [Maven metadata](https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/maven-metadata.xml) lists the versions. On Linux, run `java -jar moderne-dx.jar trust` and follow what it prints.

## Configuring Moderne DX

Set these in the `moderne.yml` file that `init` wrote:

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
        - uri: https://moderne-lsts.s3.us-west-2.amazonaws.com/repos-lock.csv
          organizations: [Netflix]  # public repositories to start with
        # - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
        #   username: moderne
        #   password: ${ARTIFACTORY_PASSWORD}
        #   organizations: [Payments]
```

Add the secrets to the `moderne.env` file beside it:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
```

DX starts on Netflix's public repositories, from Moderne's mass ingest of open source. To index your own repositories, add the `repos-lock.csv` file your [mass ingest](../how-to-guides/mass-ingest-dx.md) publishes. The [`moderne.yml` reference](../references/moderne-yml-reference.md) lists every other setting.

## Starting Moderne DX

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

Open `https://moderne.localhost:8443` and sign in as `moderne`. `start` prints where to find the password. Install recipes from the marketplace.

## Connecting the CLI

```bash
mod config http trust-store edit system
mod config moderne edit https://moderne.localhost:8443
mod config moderne login
```

The first line is for macOS. Elsewhere, [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store) gives the CLI DX's certificate authority.

## Next steps

* [Serve DX to your organization](../how-to-guides/running-moderne-dx.md#choosing-its-name) with a name and certificate of its own.
* [Connect your identity provider](../how-to-guides/running-moderne-dx.md#connecting-your-identity-provider).
* [Show each user only the repositories they can read](../how-to-guides/repository-access-control.md).
* [Connect your developers](../how-to-guides/running-moderne-dx.md#connecting-your-developers).
* [Upgrade](../how-to-guides/running-moderne-dx.md#upgrading) and [back up](../how-to-guides/running-moderne-dx.md#backing-up) DX.
* [Troubleshoot DX](../how-to-guides/running-moderne-dx.md#troubleshooting).
