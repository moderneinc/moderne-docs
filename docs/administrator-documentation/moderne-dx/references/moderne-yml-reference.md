---
sidebar_label: moderne.yml reference
description: Every setting of Moderne DX's moderne.yml file, with its default, and the commands of the moderne-dx jar.
---

# `moderne.yml` reference

Moderne DX reads its configuration from a `moderne.yml` file, which `java -jar moderne-dx.jar init` writes with comments to fill in. This page lists every setting it reads. The [installation guide](../getting-started/installing-moderne-dx.md) explains when you need each one.

A value of the form `${NAME}` is an environment variable, or a `NAME=value` line of the `moderne.env` file beside `moderne.yml`. Only the user DX runs as may read `moderne.env`. A path that is not absolute resolves against the directory that holds `moderne.yml`, unless a setting below says otherwise.

## Commands

Every command but `init` reads the `moderne.yml` file in the working directory, or the one `--config <path>` names.

| Command                                  | What it does                                                                                     |
|------------------------------------------|--------------------------------------------------------------------------------------------------|
| `java -jar moderne-dx.jar init [<dir>]`  | Writes `moderne.yml`, `moderne.env` with a new SCM token key, and a systemd unit, keeping any file already there. |
| `java -jar moderne-dx.jar doctor`        | Checks the configuration and the machine. Once DX runs, it also checks each name through DX's proxy. |
| `java -jar moderne-dx.jar start`         | Starts DX in the foreground, and keeps every service running until it stops.                     |
| `java -jar moderne-dx.jar status`        | Says whether DX runs, and which services are up.                                                 |
| `java -jar moderne-dx.jar stop`          | Stops a running DX.                                                                              |

## Deployment

| Setting                | Default  | Description                                                                                                         |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------|
| `moderne.tenant.name`  | Required | The Keycloak realm users sign in to, and the tag on every metric. Lowercase letters, digits, and dashes.            |
| `moderne.license.key`  |          | Your Moderne DX license key. Without a valid one, the CLIs connected to DX stop running recipes.                     |

## URLs and the proxy

DX serves four names on one port, through a proxy inside it. The four URLs share a scheme and a port, and each has a host of its own.

| Setting                         | Default                                         | Description                                                                                       |
|---------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `moderne.dx.public-url`         | `http://moderne.localhost:8080`                 | Where people open the UI. An `http` or `https` URL with a host name and no path.                  |
| `moderne.dx.api-url`            | `api.` before the public URL's host             | Where the CLI and the UI reach DX's API.                                                          |
| `moderne.dx.login-url`          | `login.` before the public URL's host           | Where users sign in, through Keycloak.                                                            |
| `moderne.dx.status-url`         | `status.` before the public URL's host          | Where the status page shows every service's metrics and logs.                                     |
| `moderne.dx.tls.certificate`    |                                                 | A PEM file with the certificate for an `https` public URL first, then its chain. It must cover the public URL's host and the names under it. |
| `moderne.dx.tls.private-key`    |                                                 | The certificate's private key, as a PEM file.                                                     |
| `moderne.dx.bind-address`       | `127.0.0.1` for a URL under `localhost`, `0.0.0.0` otherwise | The IP address the proxy listens on. Every other process listens on `127.0.0.1`.  |
| `moderne.dx.ports.proxy`        | The public URL's port                           | The port the proxy listens on. Name it when a load balancer that ends TLS forwards to DX, and leave out `tls`. |
| `moderne.dx.logo`               | The Moderne icon                                | An SVG file that the UI shows as your deployment's icon.                                          |
| `moderne.dx.java`               | The Java that runs the jar                      | The `java` executable that DX's services run on. It must be Java 25.                              |

## Recipes

| Setting                                    | Default | Description                                                                                       |
|--------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `moderne.tenant.code-genome.username`      |         | Your Code Genome Project username.                                                                |
| `moderne.tenant.code-genome.token`         |         | Your Code Genome Project token.                                                                   |
| `moderne.tenant.code-genome.snapshots`     | `false` | Set it to `true`, which has DX resolve recipes from the Code Genome Project.                      |
| `moderne.recipe.marketplace.repositories`  |         | Your own recipe repositories, with the same settings as the Moderne Connector's [recipe marketplace repositories](../../moderne-platform/how-to-guides/connector-configuration/configure-recipe-marketplace-repositories.md). |

## Organization sources

Each entry of `moderne.organization.sources.http` reads a `repos-lock.csv` file over HTTP or HTTPS:

| Setting          | Default  | Description                                                                                          |
|------------------|----------|------------------------------------------------------------------------------------------------------|
| `uri`            | Required | The URL of the file.                                                                                 |
| `username`       |          | The user to read the file and its LSTs as.                                                           |
| `password`       |          | That user's password.                                                                                |
| `bearer-token`   |          | A token to send in place of a user and password.                                                     |
| `lst-version`    | `2`      | The LST format the source's mass ingest publishes, `2` or `3`. DX keeps a V3 copy of each V2 LST for code search. |

Each entry of `moderne.organization.sources.file` reads a file on the machine:

| Setting       | Default  | Description                                                              |
|---------------|----------|--------------------------------------------------------------------------|
| `path`        | Required | The file's path, relative to `moderne.storage.permanent-dir`.            |
| `lst-version` | `2`      | The LST format the source's mass ingest publishes, `2` or `3`.           |

DX downloads each LST with the credentials of the source whose host serves it. Each entry of `moderne.lst.http` gives credentials for another host:

| Setting        | Default  | Description                                            |
|----------------|----------|--------------------------------------------------------|
| `host`         | Required | The host that serves LSTs, as the `publishUri` column names it. |
| `username`     |          | The user to download as.                               |
| `password`     |          | That user's password.                                  |
| `bearer-token` |          | A token to send in place of a user and password.       |

## SCM connections

Users connect their SCM accounts through an OAuth app on each SCM, whose callback URL is DX's public URL. DX asks each SCM for read access alone.

| Setting                               | One entry per | OAuth credentials                                           |
|---------------------------------------|---------------|-------------------------------------------------------------|
| `moderne.scm.github`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    |
| `moderne.scm.gitlab`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    |
| `moderne.scm.bitbucket-datacenter`    | Server        | `oauth.key`, `oauth.secret`                                 |
| `moderne.scm.bitbucket-cloud`         | Not a list    | `oauth.key`, `oauth.secret`                                 |
| `moderne.scm.azure-devops`            | Organization  | `oauth.client-id`, `oauth.client-secret`, `oauth.tenant-id` |

Each entry also takes an `id` and the server's `uri`. A Bitbucket Data Center entry takes `skip-ssl: true` for a server with a self-signed certificate.

| Setting                                | Default              | Description                                                                                  |
|----------------------------------------|----------------------|----------------------------------------------------------------------------------------------|
| `moderne.authorization.scm-token-key`  | One made at each start | A base64 AES key of 32 bytes that seals users' SCM tokens on disk. Without one, users connect their SCM accounts again after every restart. `init` writes one to `moderne.env`. |

## Sign-in

DX makes each of these secrets at its first start, and keeps it under `<permanent-dir>/dx/secrets`, unless `moderne.yml` names one.

| Setting                                   | Description                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne-keycloak.server.password`        | The password of Keycloak's `admin` user, who configures your identity provider.             |
| `moderne-keycloak.initial-user.password`  | The first password of the realm's `moderne` user. It applies only when the realm is made.   |
| `moderne.keycloak.client-secret`          | The secret the UI and DX's services share with Keycloak.                                    |
| `moderne.dx.ui-secret`                    | The key the UI signs its sessions with.                                                     |

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
| `moderne.cli.executable`                   | `mod` on the PATH | The Moderne CLI that DX's services run.                              |

## Environment variables

| Variable              | Description                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------|
| `NODE_EXTRA_CA_CERTS` | A PEM file of certificate authorities that the UI trusts beyond the public ones. Set it when your certificate comes from a private CA. |
