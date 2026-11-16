---
sidebar_label: Installing Moderne DX
description: How to install and start Moderne DX on your own machine, at a name and certificate the Code Genome Project gives it, and connect the Moderne CLI to it.
---

# Installing Moderne DX

This guide will walk you through the steps to start DX on your own machine. The Code Genome Project (CGP) gives your DX a name under `moderne.direct`, such as `https://acme.moderne.direct:8443`, and a certificate for it. Browsers and the Moderne CLI trust that certificate without any setup.

To serve it to your organization, please see [Running Moderne DX for your organization](../how-to-guides/running-moderne-dx.md).

## Prerequisites

* macOS on Apple silicon or Linux, with Java 25 and the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md).
* A license key and a [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) (CGP) token from Moderne.
* HTTPS access from the machine to `artifacts.codegenomeproject.org` and `api.codegenomeproject.org`.

## Downloading Moderne DX

```bash
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/snapshot/moderne-dx.jar
java -jar moderne-dx.jar init
```

The URL always serves the newest snapshot build.

## Configuring Moderne DX

Set these in the `moderne.yml` file that `init` wrote:

```yaml title="moderne.yml"
moderne:
  license:
    key: ${MODERNE_LICENSE_KEY}
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
  dx:
    routes:
      managed:
        token: ${CGP_TOKEN}
        address: 127.0.0.1
        port: 8443
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

### The CGP token

DX needs the CGP token from Moderne for two things. It resolves recipes from the Code Genome Project with it, and its managed route takes DX's name from it.

The `managed` route is how people reach DX. CGP names DX after the CGP user the token belongs to: a token for the user `acme` gives DX the name `acme.moderne.direct`. DX serves three more names under it: `api.acme.moderne.direct` for the API, `login.acme.moderne.direct` for sign-in, and `status.acme.moderne.direct` for the status page.

* `token` is the CGP token. Set it before DX's first start.
* `address` is where CGP points the four names. `127.0.0.1` keeps DX on your own machine. Left out, it is the address your machine reaches CGP from.
* `port` is where DX listens. It is `443` unless you name another, and `init` names `8443`.

At its first start, DX asks CGP for its name and a certificate, which CGP gets from Let's Encrypt. DX keeps them in its permanent directory and renews the certificate before it expires. The certificate's private key never leaves your machine.

Where the Moderne CLI on this machine holds the license key and the CGP username and token, `init` writes `moderne.yml` to read them from it. Such a value looks like `${moderne-cli:license.key}`. DX asks the CLI for the value each time it starts. Add any secret the CLI lacks to the `moderne.env` file beside `moderne.yml`:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
```

DX starts on Netflix's public repositories, from Moderne's mass ingest of open source. To index your own repositories, add the `repos-lock.csv` file your [mass ingest](../how-to-guides/mass-ingest-dx.md) publishes. The [`moderne.yml` reference](../references/moderne-yml-reference.md) lists every other setting.

### The first user

At its first start, DX makes the user you first sign in as: `admin`, with the password `moderne1001`. To choose another name or password, add them to `moderne.env` before the first start:

```bash title="moderne.env"
KEYCLOAK_USERNAME=…
KEYCLOAK_PASSWORD=…
```

After the first start, change the password in Keycloak instead. Setting these then changes nothing.

## Starting Moderne DX

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

The first start takes longer than the ones after it, while DX's services download the Moderne CLI they run. Once DX is up, `start` prints where to sign in:

```
Up. Sign in at https://acme.moderne.direct:8443 as admin with the password moderne1001
```

Open that URL and sign in. Then install recipes from the marketplace.

Right after CGP first names your DX, the names can take up to 15 minutes to resolve everywhere. If `doctor` or `start` says a name does not resolve, wait and try again.

## Connecting the CLI

```bash
mod config moderne edit https://acme.moderne.direct:8443
mod login
```

The CLI trusts the Let's Encrypt certificate as it is.

## Next steps

* [Serve DX to your organization](../how-to-guides/running-moderne-dx.md#serving-dx-to-your-organization).
* [Serve DX under your own name](../how-to-guides/serving-dx-under-your-own-name.md), with your own certificate or behind a load balancer.
* [Connect your identity provider](../how-to-guides/running-moderne-dx.md#connecting-your-identity-provider).
* [Show each user only the repositories they can read](../how-to-guides/repository-access-control.md).
* [Connect your developers](../how-to-guides/running-moderne-dx.md#connecting-your-developers).
* [Upgrade](../how-to-guides/running-moderne-dx.md#upgrading) and [back up](../how-to-guides/running-moderne-dx.md#backing-up) DX.
* [Troubleshoot DX](../how-to-guides/running-moderne-dx.md#troubleshooting).
