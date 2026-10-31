---
sidebar_label: Installing Moderne DX
description: How to install, configure, and run Moderne DX on a laptop or a server, and connect your developers to it.
---

# Installing and configuring Moderne DX

Moderne DX runs from a single jar on a machine you control. You install it the same way on a laptop and on a server. You can try DX on your own machine first. Serving it to your organization then takes the same configuration with a new URL and a certificate.

In this guide, we will walk you through what you need, how to install and start DX, how to configure each part of it, how to serve it on your network, and how to connect your developers.

## Prerequisites

You will need the following before you start:

* A machine running Linux on x86_64 or ARM64, or macOS on Apple silicon. [Sizing](#sizing) covers how much memory and disk it needs.
* Java 25. DX and every service it starts run on it.
* The [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md) on the machine's `PATH`. DX's services run it to install recipes and to receive changesets.
* A username and token for the [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) (CGP), and a Moderne DX license key. Moderne gives you both.
* A `repos-lock.csv` file that [mass ingest](../how-to-guides/mass-ingest-dx.md) publishes, and an account that can read it and the Lossless Semantic Trees (LSTs) it lists.
* An OAuth app on your source control management (SCM) server, for users to connect their accounts. [Connecting your SCM](#connecting-your-scm) shows what it needs.

### Sizing

We measured DX on about 1,000 public repositories, whose LSTs hold about 20 GB of index. Indexing them took about two minutes. Afterwards, DX held about 4 GB of memory and used about 2% of one core. Searches answered in under 100 ms.

| Resource | What to plan for                                                                                 |
|----------|--------------------------------------------------------------------------------------------------|
| Memory   | 16 GB. DX settles around 4 GB and uses more while it indexes or converts LSTs.                   |
| CPU      | 4 cores to start. More cores let DX convert more V2 LSTs at once.                                |
| Disk     | 5 GB for DX itself, plus room for code search's index and for LST conversions.                   |

Code search's index takes 5 to 20 MB per repository. If your mass ingest publishes V2 LSTs, DX also keeps a V3 copy of each. A copy takes about twice the space of its V2 LST. Converting a batch of them needs working space too. DX refuses to start with less than 1 GB free. `doctor` warns below 3 GB.

### Network access

The machine will need to reach the following hosts:

| Host                                                                  | Why                                                                                                       |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `artifacts.codegenomeproject.org`                                     | Recipes, and the Moderne CLI that DX's services run.                                                      |
| `artifactory.moderne.ninja`                                           | The Java dependencies of recipes and of LST conversions, from Moderne's mirror of Maven Central.          |
| `registry.npmjs.org`, `pypi.org`, `api.nuget.org`, `proxy.golang.org` | The dependencies of JavaScript, Python, .NET, and Go recipes, and of LST conversions in those languages. |
| Your artifact repository                                              | The `repos-lock.csv` file and the LSTs it lists.                                                          |
| Your SCM                                                              | Checking each user's read access to a repository.                                                         |
| Your identity provider                                                | Signing users in.                                                                                         |

DX looks for a dependency in your own [recipe repositories](#resolving-recipes) before it asks a public one.

## Downloading Moderne DX

You will need to download the jar from the Code Genome Project with your CGP credentials. The same jar runs on every supported platform.

```bash
curl -fL -u <username>:<token> -o moderne-dx.jar \
  https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/<version>/moderne-dx-<version>.jar
```

Replace `<version>` with the version you want to run. The artifact's Maven metadata lists the versions:

```bash
curl -fsL -u <username>:<token> https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-dx/maven-metadata.xml
```

## Creating the configuration

Run `init` in the directory that will hold DX's configuration:

```bash
java -jar moderne-dx.jar init
```

It writes three files. It keeps any of them that is already there.

* `moderne.yml` is DX's configuration. Each setting has a comment. The [`moderne.yml` reference](../references/moderne-yml-reference.md) lists every one.
* `moderne.env` holds secrets as `NAME=value` lines. `moderne.yml` refers to each one as `${NAME}`. `init` puts a new SCM token key in it.
* `moderne-dx.service` is a systemd unit for [running DX as a service](#running-dx-as-a-service).

You can also give a secret as an environment variable of the same name. Keeping secrets out of `moderne.yml` lets the file live in version control.

:::warning
Only the user DX runs as may read `moderne.env`. DX refuses to start if anyone else can (`chmod 600 moderne.env`).
:::

## Configuring Moderne DX

Each of the sections below fills in one part of `moderne.yml`. Run [`doctor`](#checking-and-starting-moderne-dx) after each one to check what you have so far.

### Naming your deployment

```yaml title="moderne.yml"
moderne:
  tenant:
    name: acme
```

Use lowercase letters, digits, and dashes. The name becomes the Keycloak realm that users sign in to. It also tags every metric. Choose it before the first start, since a new name later starts a new, empty realm.

### Resolving recipes

DX resolves recipes from the Code Genome Project with the credentials Moderne gave you. Their dependencies come from Moderne's mirror of Maven Central.

```yaml title="moderne.yml"
moderne:
  tenant:
    code-genome:
      username: <your CGP username>
      token: ${CGP_TOKEN}
      snapshots: true
```

Add the token to `moderne.env`:

```bash title="moderne.env"
CGP_TOKEN=<your CGP token>
```

Keep `snapshots: true`, which has DX resolve recipes from the Code Genome Project. Once DX is running, an administrator installs recipes for everyone from the marketplace in the UI.

To also install recipes from your own artifact repositories, list them under `moderne.recipe.marketplace.repositories`. DX reads the same settings as the Moderne Connector, which the [recipe marketplace repositories guide](../../moderne-platform/how-to-guides/connector-configuration/configure-recipe-marketplace-repositories.md) describes.

### Adding your license key

```yaml title="moderne.yml"
moderne:
  license:
    key: ${MODERNE_LICENSE_KEY}
```

Put the key Moderne gave you in `moderne.env` as `MODERNE_LICENSE_KEY`. Developers' CLIs take their license from DX. Without a valid key, the CLIs connected to DX stop running recipes and the UI shows a banner. The same happens once the key expires. Everything else in DX keeps working.

### Adding your organization sources

An organization source is a `repos-lock.csv` file that mass ingest publishes. DX builds your organizations from it and indexes the LSTs it lists.

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      http:
        - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
          username: moderne
          password: ${ARTIFACTORY_PASSWORD}
```

Each source takes a `username` and `password`, or a `bearer-token`. You can list as many sources as you need. A file on the machine works too. Name it under `file` in place of `http`, with a `path` relative to DX's permanent directory. The [`repos.csv` reference](../../../user-documentation/moderne-cli/references/repos-csv.md) describes the file's columns, including the `org` columns that define your organizations.

DX notices a new `repos-lock.csv` file within about five minutes.

DX downloads each LST with the credentials of the source whose host serves it. If your LSTs are on a host that no source names, add credentials for that host:

```yaml title="moderne.yml"
moderne:
  lst:
    http:
      - host: lsts.acme.com
        username: moderne
        password: ${LST_PASSWORD}
```

#### Telling DX which LST format a source publishes

DX takes a source's LSTs for V2, the format mass ingest builds unless you configure V3. Code search reads only V3 LSTs. DX converts each V2 LST once and keeps the V3 copy for code search. If your mass ingest builds V3 LSTs, set `lst-version: 3` on the source. DX then reads them as they are.

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      http:
        - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
          lst-version: 3
```

Converting a V2 LST runs the tools of its language. DX brings Node for JavaScript and TypeScript. Converting Python, Go, or .NET LSTs needs those tools on the machine. DX logs why an LST could not be converted. Code search leaves that LST out until a conversion succeeds.

### Connecting your SCM

DX checks each user's read access to a repository with the SCM account that user connects in the UI. Users connect their accounts through an OAuth app that you create on your SCM. Set the app's callback URL to DX's public URL. That is `https://moderne.acme.com` on a server, or `http://moderne.localhost:8080` on a laptop.

```yaml title="moderne.yml"
moderne:
  scm:
    github:
      - id: github
        uri: https://github.acme.com
        oauth:
          client-id: Iv1.0123456789abcdef
          client-secret: ${GITHUB_OAUTH_SECRET}
```

Each SCM has a key of its own. DX asks each one for read access alone.

| SCM                   | Key in `moderne.yml`               | OAuth credentials                                           | Access DX asks for                  |
|-----------------------|------------------------------------|-------------------------------------------------------------|-------------------------------------|
| GitHub                | `moderne.scm.github`               | `oauth.client-id`, `oauth.client-secret`                    | `repo read:org`                     |
| GitLab                | `moderne.scm.gitlab`               | `oauth.client-id`, `oauth.client-secret`                    | `read_api read_user profile email`  |
| Bitbucket Data Center | `moderne.scm.bitbucket-datacenter` | `oauth.key`, `oauth.secret`                                 | `REPO_READ PUBLIC_REPOS`            |
| Bitbucket Cloud       | `moderne.scm.bitbucket-cloud`      | `oauth.key`, `oauth.secret`                                 | `repository`                        |
| Azure DevOps          | `moderne.scm.azure-devops`         | `oauth.client-id`, `oauth.client-secret`, `oauth.tenant-id` | What your app registration grants   |

GitHub's OAuth apps have no read-only scope for private repositories, which is why DX asks GitHub for `repo`. Every key but `bitbucket-cloud` takes a list, with one entry per SCM server.

You create the OAuth app with the same steps as for the Moderne Connector. Those guides grant write permissions, for committing from the UI. DX needs read permissions alone.

* [GitHub](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-github.md)
* [GitLab](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-gitlab.md)
* [Bitbucket Data Center](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-to-connector.md)
* [Bitbucket Cloud](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-cloud-to-connector.md)
* [Azure DevOps](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-azure-devops-services.md)

DX seals each user's SCM token on disk with the SCM token key that `init` wrote to `moderne.env`:

```yaml title="moderne.yml"
moderne:
  authorization:
    scm-token-key: ${SCM_TOKEN_KEY}
```

Keep that key with your other secrets. If it is lost or changed, users must connect their SCM accounts again. To make a key yourself, run `openssl rand -base64 32`.

### Giving services more memory

Each service's heap defaults to a size that fits a laptop. A larger estate may need more for code search and for converting V2 LSTs:

```yaml title="moderne.yml"
moderne:
  dx:
    memory:
      code-search: 6g
      conversions: 8g
```

The [`moderne.yml` reference](../references/moderne-yml-reference.md#memory) lists every service's default.

## Checking and starting Moderne DX

`doctor` checks everything `moderne.yml` names before you start:

* It finds Java and the CLI.
* It checks the ports, the disk space, and that each of DX's names resolves.
* It reads each organization source.
* It checks the certificate, if you name one.

```bash
java -jar moderne-dx.jar doctor
```

Each line says `ok`, `warn`, or `FAIL`, with what to do about a problem. Once nothing fails, start DX:

```bash
java -jar moderne-dx.jar start
```

`start` runs in the foreground and writes every service's log lines, each after the name of its service. The first start unpacks DX into its data directory. It then prints where to find the password of the first user, `moderne`.

Open `http://moderne.localhost:8080` and sign in as `moderne` with that password. Keycloak has you change it at once. The `moderne` user is an administrator, for setting DX up before you [connect your identity provider](#connecting-your-identity-provider).

Run `doctor` again once DX is up. It then also checks each of DX's names through its proxy. To see which services are up, run `status`. To stop DX, press <kbd>Ctrl</kbd>+<kbd>C</kbd>, or run `stop` from another terminal.

```bash
java -jar moderne-dx.jar status
java -jar moderne-dx.jar stop
```

DX keeps its data in a `data` directory next to `moderne.yml` unless `moderne.storage` names others. Every command takes `--config <path>` when `moderne.yml` is not in the working directory.

## Serving DX to your organization

DX serves four names, all on the public URL's port:

* The UI, at the public URL's own host, such as `moderne.acme.com`.
* The API, at `api.` before that host.
* Keycloak, at `login.` before that host.
* The status page, at `status.` before that host.

A proxy inside DX serves all four names. Every other DX process listens on the machine's loopback address alone. On a laptop the names are `moderne.localhost`, `api.moderne.localhost`, and so on. Every name under `localhost` reaches your own machine, so a laptop needs no Domain Name System (DNS) records.

To serve DX to your organization, you will need to give it a name and a certificate, and keep it running.

### Choosing its name

Set the public URL to the name your users will open:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.acme.com
```

Give `moderne.acme.com` and `*.moderne.acme.com` DNS records that point at the machine. DX then listens on every address of the machine. On a laptop it listens on the loopback address alone.

### Adding a certificate

You will need one Transport Layer Security (TLS) certificate that covers both `moderne.acme.com` and `*.moderne.acme.com`, in PEM files:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.acme.com
    tls:
      certificate: /etc/moderne-dx/tls.crt
      private-key: /etc/moderne-dx/tls.key
```

Put the certificate first in its file, then the certificates of its chain. `doctor` checks that the certificate covers all four names and that its key matches. It warns a month before the certificate expires. DX reads the certificate when it starts. Restart DX after you renew it.

If the certificate comes from a private certificate authority (CA), DX's UI needs to trust that CA too. Add the CA's PEM file to `moderne.env`:

```bash title="moderne.env"
NODE_EXTRA_CA_CERTS=/etc/moderne-dx/ca.pem
```

Developers' CLIs need to trust the CA as well. Unless it is already in their Java trust store, they add it with [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store).

### Serving DX behind a load balancer

If a load balancer ends TLS in front of DX, leave out `tls` and name the port the load balancer forwards to:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.acme.com
    ports:
      proxy: 8080
```

The load balancer must forward all four names to that port, with each request's `Host` header unchanged.

### Running DX as a service

The `moderne-dx.service` file that `init` wrote runs DX under systemd. It expects the following layout:

* The jar at `/opt/moderne-dx/moderne-dx.jar`.
* `moderne.yml` and `moderne.env` in `/etc/moderne-dx`.
* A `moderne` user who owns `moderne.env` and DX's data directories.

Edit those paths in the file if yours differ, then install it:

```bash
sudo cp moderne-dx.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now moderne-dx
```

The unit lets DX listen on port 443 as the `moderne` user. Started any other way on Linux, DX needs a public URL whose port is above 1023. Under systemd, `journalctl -u moderne-dx` shows DX's logs.

### Changing the URL later

You can change the public URL at any time, such as when you move DX from a laptop to a server. DX updates Keycloak at its next start. Users then sign in again. Developers point their CLIs at the new URL.

## Connecting your identity provider

DX signs users in through Keycloak, as the Moderne Platform does. Keycloak brokers your identity provider over Security Assertion Markup Language (SAML) or OpenID Connect (OIDC). You will configure it in Keycloak's admin console:

1. Open `https://login.moderne.acme.com/auth/admin/`. On a laptop, open `http://login.moderne.localhost:8080/auth/admin/`.
2. Sign in as `admin`, with the password in `data/permanent/dx/secrets/keycloak-admin-password`.
3. Switch to the realm named after your deployment, such as `acme`.
4. Under **Identity providers**, add a **SAML v2.0** or **OpenID Connect v1.0** provider. Give it an alias, such as `corporate-sso`.
5. Add the mappers in the Platform's [Keycloak IdP mapping table](../../moderne-platform/references/authentication.md#keycloak-idp-mapping). The `admin` mapper gives your administrators DX's `admin` role.

Your identity provider will need DX's values for the new application:

| Protocol | Field                       | Value                                                                            |
|----------|-----------------------------|----------------------------------------------------------------------------------|
| SAML     | Single sign-on URL          | `https://login.moderne.acme.com/auth/realms/acme/broker/corporate-sso/endpoint` |
| SAML     | Audience URI (SP Entity ID) | `https://login.moderne.acme.com/auth/realms/acme`                               |
| OIDC     | Redirect URI                | `https://login.moderne.acme.com/auth/realms/acme/broker/corporate-sso/endpoint` |

Replace `acme` with your deployment's name and `corporate-sso` with your provider's alias. Once your administrators can sign in through your identity provider, disable the `moderne` user under **Users**.

Keycloak keeps its realm in a database file under DX's permanent directory. To keep it in a PostgreSQL database instead, name the database in `moderne.yml`:

```yaml title="moderne.yml"
spring:
  datasource:
    url: jdbc:postgresql://db.acme.com:5432/keycloak
    username: keycloak
    password: ${KEYCLOAK_DB_PASSWORD}
```

Choose the database before you configure the realm. Moving a realm between databases is a Keycloak export and import.

## Connecting your developers

Developers point their Moderne CLI at DX. Before they do, each developer should sign in to the UI once and connect their SCM account under **Settings** > **SCM connections**. Code search shows a repository to a user only after they connect an account that can read it.

### Installing the CLI from DX

DX serves an installer for the CLI, which downloads the CLI through DX:

```bash
curl -fsSL https://api.moderne.acme.com/cli | bash
```

### Pointing the CLI at DX

The CLI takes DX's URL, and the URL of DX's Keycloak realm:

```bash
mod config moderne edit https://moderne.acme.com \
  --auth-server-url https://login.moderne.acme.com/auth/realms/acme/
mod config moderne login
```

{/* Once a CLI release carries moderne-cli#5104, which reads the realm from DX's /cli/config (moderne-saas#2882), drop --auth-server-url here and below. */}

On a laptop, the URLs carry the port. CLI releases up to 4.12.0 also need the API's URL in that case:

```bash
mod config moderne edit http://moderne.localhost:8080 \
  --api http://api.moderne.localhost:8080 \
  --auth-server-url http://login.moderne.localhost:8080/auth/realms/acme/
mod config moderne login
```

Signing in also brings DX's recipes to the CLI. To bring recipes installed later, run `mod config recipes moderne sync`.

### Syncing, running recipes, and pushing changes

The CLI downloads LSTs from your artifact repository with credentials of its own. Each developer adds them once, as [configuring the artifact repository for the CLI](../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md#for-team-members-using-the-file) describes. They can then sync an organization from DX, run a recipe on it, and push the changes to DX as a changeset:

```bash
mod git sync moderne ~/acme --organization "Platform team" --with-sources
mod run ~/acme --recipe org.openrewrite.java.RemoveUnusedImports
mod git checkout ~/acme --changeset --name "Remove unused imports"
mod git apply ~/acme --last-recipe-run
mod git commit ~/acme -m "Remove unused imports"
mod git push ~/acme -m "Remove unused imports"
```

Each push adds to the changeset. Everyone can review it in the UI.

## Upgrading Moderne DX

1. [Back up](#backing-up-moderne-dx) DX's data.
2. Download the new version's jar.
3. Stop DX, replace the jar, and start DX again.

The first start of a new version unpacks it and removes the previous version's files. A new version may bring a newer Keycloak, which then updates its database.

## Backing up Moderne DX

DX keeps everything it cannot rebuild in its permanent directory. That is `data/permanent` unless `moderne.storage.permanent-dir` names another. Back up that directory with `moderne.yml` and `moderne.env`. Stop DX first, or take a snapshot of the file system.

| Directory       | What it holds                                                                     |
|-----------------|-----------------------------------------------------------------------------------|
| `auth-n`        | Keycloak's realm: users, your identity provider's settings, and roles.            |
| `authorization` | Users' connected SCM accounts, sealed with the SCM token key, and access tokens.  |
| `changeset`     | The changesets developers pushed.                                                 |
| `marketplace`   | The recipes installed for everyone.                                               |
| `organization`  | Organizations users made for themselves.                                          |
| `atlas`         | The status page's metrics and logs.                                               |
| `lsts-v3`       | The V3 copies of V2 LSTs, which DX can make again.                                |
| `dx`            | DX's own settings and generated secrets.                                          |

Keep the backup of `moderne.env` apart from the data's backup. The SCM token key in it unseals the SCM tokens in `authorization`. The ephemeral directory, `data/ephemeral`, holds only what DX rebuilds, such as code search's index.

## Troubleshooting

Start with `doctor`. It checks the configuration, and once DX runs, each name through the proxy. `status` shows which services are up.

| What you see                                            | What to do                                                                                          |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `doctor` says a name does not resolve                   | On a laptop, add the line `doctor` prints to `/etc/hosts`. On a server, give `moderne.acme.com` and `*.moderne.acme.com` DNS records. |
| `doctor` says a port is taken                           | Stop what holds it, or move the service with `moderne.dx.ports`, as `doctor` says.                  |
| `doctor` says the certificate does not cover a name     | Get a certificate that covers `moderne.acme.com` and `*.moderne.acme.com`.                          |
| Sign-in fails with a certificate error                  | Add your CA's PEM file to `moderne.env` as `NODE_EXTRA_CA_CERTS`.                                    |
| Code search shows a user no repositories                | Have the user connect their SCM account under **Settings** > **SCM connections**.                   |
| A repository with a V2 LST is missing from code search  | DX's log says why its conversion failed. Python, Go, and .NET LSTs need those tools on the machine. |
| The marketplace has no recipes                          | Check the CGP token with `doctor`, then install recipes from the marketplace as an administrator.   |

The status page at `https://status.moderne.acme.com` shows every service's metrics and logs from the last two days. Any user can open it.

A service that runs out of memory leaves a heap dump named after it in the ephemeral directory. DX then restarts the service. Give it more memory with `moderne.dx.memory`.
