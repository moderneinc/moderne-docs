---
sidebar_label: Installing Moderne DX
description: How to install and start Moderne DX on your own machine and connect the Moderne CLI to it.
---

# Installing Moderne DX

If you'd like to try Moderne DX out, the quickest way is to run it on your own machine. You won't need to set up a domain name or a certificate to do that. The Code Genome Project (CGP) will give your DX a host name under `moderne.direct` (such as `https://acme.moderne.direct:8443`) and a certificate for that host name. Browsers and the Moderne CLI will trust that certificate without any extra setup.

In this guide, we will walk you through how to download DX, configure it, start it, and connect the Moderne CLI to it.

Once you're ready to serve DX to your whole organization, check out our guide on [running Moderne DX for your organization](../how-to-guides/running-moderne-dx.md).

## Prerequisites

Before you begin, you will need:

* A machine running Linux or macOS on Apple silicon.
* Java 25 and the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md) installed on that machine.
* A license key and a [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) token from Moderne.
* HTTPS access from that machine to `artifacts.codegenomeproject.org` and `api.codegenomeproject.org`.

## Downloading Moderne DX

To download DX, run the following command with your CGP username and token:

```bash
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/snapshot/moderne-dx.jar
```

This URL always serves the newest snapshot build.

Once the download finishes, run `init` to create the configuration files DX needs:

```bash
java -jar moderne-dx.jar init
```

## Configuring Moderne DX

Open the `moderne.yml` file that `init` created. It will contain settings like these:

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

The sections below explain which of these settings you'll need to fill in or change. The [`moderne.yml` reference doc](../references/moderne-yml-reference.md) has more details on each of these settings, along with the others DX supports.

### Your license key and CGP token

If the Moderne CLI on this machine already has your license key, CGP username, and CGP token, `init` will set up `moderne.yml` to read them from the CLI. In that case, you'll see values that look like `${moderne-cli:license.key}`. DX will ask the CLI for these values each time it starts.

If the CLI doesn't have one of these values, you'll need to add it to the `moderne.env` file that sits next to `moderne.yml`:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
```

### How people will reach DX

DX uses your CGP token for two things: downloading recipes from CGP and getting a host name for your DX through the `managed` route.

The `managed` route controls how people reach DX. CGP will give your DX a host name based on the CGP user your token belongs to. For example, a token for the user `acme` will give DX the host name `acme.moderne.direct`. People will then be able to reach DX through these four host names:

| Host name                    | What you'll find there      |
|------------------------------|-----------------------------|
| `acme.moderne.direct`        | The UI                      |
| `api.acme.moderne.direct`    | The API                     |
| `login.acme.moderne.direct`  | The sign-in page (Keycloak) |
| `status.acme.moderne.direct` | The status page             |

The first time DX starts, it will ask CGP for its host name and a certificate. DX will keep both in its permanent directory, and it will renew the certificate before it expires. The certificate's private key never leaves your machine.

:::info
CGP gets that certificate from [Let's Encrypt](https://letsencrypt.org/) (a free certificate authority that browsers and most tools already trust).
:::

### Configuring the managed route

You can control the managed route with three settings in your `moderne.yml` file:

* `token` is your CGP token. You'll need to set it before you start DX for the first time.
* `address` is the IP address the four host names will resolve to.
  * `init` sets this to `127.0.0.1`. If you leave it as that, the host names will only work on the machine running DX. This is what you want if you are trying DX out on a laptop.
  * If you leave the `address` field out, DX will use the machine's own network address. Other people on your network will then be able to reach DX. You can run `doctor` to see the address DX picked.
* `port` is the port DX will listen on. The default is `443`, but `init` sets it to `8443`.

### Which repositories DX will show

When you first start DX, it will show a set of public open-source repositories that Moderne has already built LSTs for. That gives you something to try DX out with before you add your own.

To have DX show your own repositories instead, you'll need to add the `repos-lock.csv` file that your [mass ingest](../how-to-guides/mass-ingest-dx.md) publishes.

### The first user

The first time DX starts, it will create the user you'll sign in as. By default, that user is `admin` with the password `moderne1001`. If you'd like to use a different name or password, add them to your `moderne.env` file before you start DX for the first time:

```bash title="moderne.env"
KEYCLOAK_USERNAME=…
KEYCLOAK_PASSWORD=…
```

Keep in mind that these only apply the first time DX starts. After that, you'll need to change the password in Keycloak instead.

## Starting Moderne DX

Before you start DX, you'll want to run `doctor`. It will check that DX has what it needs to start. If everything looks good, you can then start DX:

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

The first start will take longer than later ones, because DX's services need to download the Moderne CLI they run. Once DX is up, `start` will print where to sign in:

```text
Up. Sign in at https://acme.moderne.direct:8443 as admin with the password moderne1001
```

Open that URL and sign in. From there, you can install recipes from the marketplace.

:::note
The first time CGP gives your DX its host names, it can take up to 15 minutes for them to resolve everywhere. If `doctor` or `start` says a host name doesn't resolve, wait a few minutes and try again.
:::

## Connecting the CLI

To connect the Moderne CLI to DX, point it at DX's URL and then sign in:

```bash
mod config moderne edit https://acme.moderne.direct:8443
mod login
```

You won't need to do anything to make the CLI trust DX's certificate. It already trusts certificates from Let's Encrypt.

## Next steps

* [Serve DX to your organization](../how-to-guides/running-moderne-dx.md#serving-dx-to-your-organization).
* [Serve DX under your own host name](../how-to-guides/configuring-dns-for-dx.md#choosing-a-route), with your own certificate or behind a load balancer.
* [Connect your identity provider](../how-to-guides/running-moderne-dx.md#connecting-your-identity-provider).
* [Show each user only the repositories they can read](../how-to-guides/repository-access-control.md).
* [Connect your developers](../how-to-guides/running-moderne-dx.md#connecting-your-developers).
* [Upgrade](../how-to-guides/running-moderne-dx.md#upgrading) and [back up](../how-to-guides/running-moderne-dx.md#backing-up) DX.
* [Troubleshoot DX](../how-to-guides/running-moderne-dx.md#troubleshooting).
