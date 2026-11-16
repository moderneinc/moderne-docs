---
sidebar_label: moderne.yml reference
description: Every setting of Moderne DX's moderne.yml file, with its default, and the commands of the moderne-dx jar.
---

# `moderne.yml` reference

Moderne DX reads its configuration from a `moderne.yml` file, which `java -jar moderne-dx.jar init` writes with comments to fill in. This page lists every setting it reads. The [installation guide](../getting-started/installing-moderne-dx.md) shows the ones every deployment needs.

A value of the form `${NAME}` is an environment variable, or a `NAME=value` line of the `moderne.env` file beside `moderne.yml`. Only the user DX runs as may read `moderne.env`. A path that is not absolute resolves against the directory that holds `moderne.yml`, unless a setting below says otherwise.

A value of the form `${moderne-cli:key}` is what the Moderne CLI holds for the key, as `mod config get <key>` prints it. A secret prints only with `--reveal`. Each time DX starts, it asks the CLI of the user it runs as.

## Commands

Every command but `init` reads the `moderne.yml` file in the working directory, or the one `--config <path>` names.

| Command                                  | What it does                                                                                     |
|------------------------------------------|--------------------------------------------------------------------------------------------------|
| `java -jar moderne-dx.jar init [<dir>]`  | Writes `moderne.yml`, `moderne.env` with a new SCM token key, and a systemd unit, keeping any file already there. A new `moderne.yml` takes the license key and the CGP username and token from the Moderne CLI on this machine, where the CLI holds them. |
| `java -jar moderne-dx.jar doctor`        | Checks the configuration and the machine. Once DX runs, it also checks each name through DX's proxy. |
| `java -jar moderne-dx.jar start`         | Starts DX in the foreground, and keeps every service running until it stops.                     |
| `java -jar moderne-dx.jar status`        | Says whether DX runs, and which services are up.                                                 |
| `java -jar moderne-dx.jar stop`          | Stops a running DX.                                                                              |

## Deployment

| Setting                | Default  | Description                                                                                                         |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------|
| `moderne.tenant.name`  | `dx`     | The tag on every metric. The browser's title shows any other name. Lowercase letters, digits, and dashes. |
| `moderne.license.key`  |          | Your Moderne DX license key. Without a valid one, the CLIs connected to DX stop running recipes.                     |

## Routes

`moderne.dx.routes` names how people reach DX, and exactly one route. DX serves four names on one port, through a proxy inside it: a host, and `api.`, `login.`, and `status.` before it. They are the UI, the API, Keycloak's sign-in, and the status page. Every public URL is `https`. Every other process listens on the loopback address alone.

A `managed` route takes its name and certificate from the Code Genome Project. It is what `init` writes:

| Setting                             | Default  | Description                                                                                       |
|-------------------------------------|----------|---------------------------------------------------------------------------------------------------|
| `moderne.dx.routes.managed.token`   | Required | The CGP token Moderne gave you for DX. CGP names DX after the token's user: `<user>.moderne.direct`. |
| `moderne.dx.routes.managed.address` | This machine's | The address CGP points the four names at. Left out, DX uses the address this machine reaches CGP from, and `doctor` names it. `127.0.0.1` keeps DX on this machine alone. DX listens on the address where it is the machine's own, and on every address where it is not. |
| `moderne.dx.routes.managed.port`    | `443`    | The port DX listens on.                                                                           |

A `custom-certificate` route serves a name of your own, with your certificate:

| Setting                                            | Default  | Description                                                                          |
|----------------------------------------------------|----------|--------------------------------------------------------------------------------------|
| `moderne.dx.routes.custom-certificate.public-url`  | Required | Where people open the UI, such as `https://moderne.acme.com`. DX listens on its port. |
| `moderne.dx.routes.custom-certificate.certificate` | Required | A PEM file with the certificate first, then its chain. It must cover all four names. |
| `moderne.dx.routes.custom-certificate.private-key` | Required | The certificate's private key, as a PEM file.                                        |

A `load-balanced` route serves a name of your own, behind a load balancer that ends TLS:

| Setting                                      | Default  | Description                                                                                      |
|----------------------------------------------|----------|--------------------------------------------------------------------------------------------------|
| `moderne.dx.routes.load-balanced.public-url` | Required | Where people open the UI, such as `https://moderne.acme.com`.                                    |
| `moderne.dx.routes.load-balanced.http-port`  | Required | The port the load balancer forwards plain HTTP to, with each request's `Host` header unchanged.  |

[Serving Moderne DX under your own name](../how-to-guides/serving-dx-under-your-own-name.md) covers the last two. A start refuses the settings that routes replaced, and prints the route that does what they did: `public-url`, `api-url`, `login-url`, `status-url`, `tls`, `ports.proxy`, `ports.proxy-http`, and `bind-address` under `moderne.dx`.

| Setting            | Default                    | Description                                                          |
|--------------------|----------------------------|----------------------------------------------------------------------|
| `moderne.dx.logo`  | The Moderne icon           | An SVG file that the UI shows as your deployment's icon.             |
| `moderne.dx.java`  | The Java that runs the jar | The `java` executable that DX's services run on. It must be Java 25. |

## Recipes

Name the Code Genome Project, your own repository that proxies it, or both. DX tries your own first.

| Setting                                                                | Description                                                                                       |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.code-genome-project.username` | Your Code Genome Project username.                                                                |
| `moderne.recipe.marketplace.repositories.code-genome-project.token`    | Your Code Genome Project token. DX resolves recipes from the Code Genome Project with it. The installer at DX's `/cli` downloads the Moderne CLI with it too, or anonymously without it. |
| `moderne.recipe.marketplace.repositories.maven`, `npm`, `pypi`, `nuget`, `go` | Your own recipe repositories, with the same settings as the Moderne Connector's [recipe marketplace repositories](../../moderne-platform/how-to-guides/connector-configuration/configure-recipe-marketplace-repositories.md). |

## Organization sources

Each entry of `moderne.organization.sources.http` reads a `repos-lock.csv` file over HTTP or HTTPS:

| Setting          | Default  | Description                                                                                          |
|------------------|----------|------------------------------------------------------------------------------------------------------|
| `uri`            | Required | The URL of the file.                                                                                 |
| `username`       |          | The user to read the file and its LSTs as.                                                           |
| `password`       |          | That user's password.                                                                                |
| `bearer-token`   |          | A token to send in place of a user and password.                                                     |
| `lst-version`    | `2`      | The LST format the source's mass ingest publishes, `2` or `3`. DX keeps a V3 copy of each V2 LST for code search. |
| `organizations`  | All      | The organizations to keep, at any level of the file's org columns, with every repository under them. |

The `init` command names Moderne's public mass ingest, `https://moderne-lsts.s3.us-west-2.amazonaws.com/repos-lock.csv`, with `organizations: [Netflix]`. A business unit can run a DX of its own by naming just its organizations.

Each entry of `moderne.organization.sources.file` reads a file on the machine:

| Setting         | Default  | Description                                                              |
|-----------------|----------|--------------------------------------------------------------------------|
| `path`          | Required | The file's path, relative to `moderne.storage.permanent-dir`.            |
| `lst-version`   | `2`      | The LST format the source's mass ingest publishes, `2` or `3`.           |
| `organizations` | All      | The organizations to keep, as for an http source.                        |

DX downloads each LST with the credentials of the source whose host serves it. An `s3://` LST comes over HTTPS from its bucket, without credentials, when an organization source is in that bucket. Each entry of `moderne.lst.http` gives credentials for another host:

| Setting        | Default  | Description                                            |
|----------------|----------|--------------------------------------------------------|
| `host`         | Required | The host that serves LSTs, as the `publishUri` column names it. |
| `username`     |          | The user to download as.                               |
| `password`     |          | That user's password.                                  |
| `bearer-token` |          | A token to send in place of a user and password.       |

## Repository access control

Every user can read every repository until `moderne.scm` names an SCM's OAuth app. DX then shows that SCM's repositories only to the users who can read them. The [user-level repository access control](../how-to-guides/repository-access-control.md#settings-for-each-scm) guide lists the settings of each SCM, and `moderne.authorization.scm-token-key`.

## Sign-in

Keycloak makes DX's first user at DX's first start. That user signs in to DX as an administrator, and administers nothing in Keycloak. Keycloak asks for no new password. Set later, these settings change nothing, so change the user in Keycloak instead.

| Setting                           | Default       | Description                                  |
|-----------------------------------|---------------|----------------------------------------------|
| `moderne.keycloak.user.name`      | `admin`       | The first user's name.                       |
| `moderne.keycloak.user.password`  | `moderne1001` | The first user's password.                   |

The `moderne.yml` that `init` writes takes both from `moderne.env`, as `${KEYCLOAK_USERNAME:admin}` and `${KEYCLOAK_PASSWORD:moderne1001}`.

DX makes each of these secrets at its first start, and keeps it under `<permanent-dir>/dx/secrets`, unless `moderne.yml` names one.

| Setting                             | Description                                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne.keycloak.server.password`  | The password of Keycloak's own `admin` user, who configures your identity provider in Keycloak's admin console. This is not DX's first user. |
| `moderne.keycloak.client-secret`    | The secret the UI and DX's services share with Keycloak.                                    |
| `moderne.dx.ui-secret`              | The key the UI signs its sessions with.                                                     |

Keycloak keeps its realm in a database file under the permanent directory unless `spring.datasource` names a database:

| Setting                        | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| `spring.datasource.url`        | A PostgreSQL JDBC URL, such as `jdbc:postgresql://db.acme.com:5432/keycloak`. |
| `spring.datasource.username`   | The database user.                                                 |
| `spring.datasource.password`   | That user's password.                                              |

## Storage

| Setting                          | Default                                  | Description                                                                                 |
|----------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne.storage.permanent-dir`  | `data/permanent` beside `moderne.yml`    | Everything DX cannot rebuild. Back it up.                                                   |
| `moderne.storage.ephemeral-dir`  | `data/ephemeral` beside `moderne.yml`    | What DX rebuilds when it needs to, such as the unpacked jar and code search's index.        |

## Telemetry

We recommend storing CLI telemetry in an Amazon S3 bucket or an Azure Blob Storage container. [Configuring telemetry](../how-to-guides/configure-telemetry-dx.md#choosing-where-dx-stores-telemetry) lists the credentials and permissions each one needs.

| Setting                                          | Description                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| `moderne.gateway.telemetry.s3.bucket`            | The Amazon S3 bucket to store telemetry in.                  |
| `moderne.gateway.telemetry.azure.account-name`   | The Azure storage account that holds the container.          |
| `moderne.gateway.telemetry.azure.container-name` | The Azure Blob Storage container to store telemetry in.      |

If you name neither, DX stores telemetry in `<permanent-dir>/telemetry`.

## Memory

`moderne.dx.memory.<service>` sets a service's heap, as a size such as `2g` or `1536m`. The defaults fit a laptop.

| Service                | Default |
|------------------------|---------|
| `code-search`          | `2g`    |
| `recipe-marketplace`   | `1536m` |
| `changeset-reader`     | `1g`    |
| `gateway`              | `768m`  |
| `authentication`       | `512m`  |
| `authorization`        | `512m`  |
| `organization`         | `512m`  |
| `changeset-git`        | `512m`  |
| `atlas`                | `512m`  |
| `repository-converter` | `512m`  |
| `conversions`          | `4g`    |

`conversions` is the heap of the CLI process that converts V2 LSTs. It converts one LST at a time per gigabyte, up to one per core.

Code search leaves out a repository whose index has a single part larger than `moderne.code-search.shard-max-bytes`, 512 MB by default. To index larger repositories, raise it along with `moderne.dx.memory.code-search`. A 6 GB heap holds parts of about 2 GB.

## Ports

Each of DX's processes listens on the loopback address at a port of its own. `moderne.dx.ports.<process>` moves one when another program holds its port.

| Process                | Port |
|------------------------|------|
| `ui`                   | 3000 |
| `gateway`              | 4000 |
| `router`               | 4001 |
| `organization`         | 8081 |
| `recipe-marketplace`   | 8082 |
| `authorization`        | 8085 |
| `changeset-reader`     | 8088 |
| `repository-converter` | 8089 |
| `proxy-health`         | 8094 |
| `code-search`          | 8095 |
| `changeset-git`        | 8097 |
| `atlas`                | 8098 |
| `authentication`       | 8180 |

Two more ports cannot be moved: 8099, where the router answers its health check, and 7101, where the services send their metrics and logs.

## Other settings

| Setting                                    | Default           | Description                                                          |
|--------------------------------------------|-------------------|----------------------------------------------------------------------|
| `moderne.monitoring.atlas.disk.retention`  | `2d`              | How long the status page keeps metrics and logs.                     |
| `moderne.cli.executable`                   | `mod` on the PATH | The Moderne CLI that DX's services run. DX asks it for `${moderne-cli:key}` values. |

## Environment variables

| Variable              | Description                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------|
| `NODE_EXTRA_CA_CERTS` | A PEM file of certificate authorities that the UI trusts beyond the public ones. Set it when a `custom-certificate` route's certificate comes from a private CA. A `managed` route's certificate needs no setting. |
| `KEYCLOAK_USERNAME`, `KEYCLOAK_PASSWORD` | DX's first user, in the `moderne.yml` that `init` writes. Set them before DX's first start. |
