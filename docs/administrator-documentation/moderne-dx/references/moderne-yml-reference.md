---
sidebar_label: moderne.yml reference
description: Every setting of the Moderne DX moderne.yml file, with its default, and the commands of the moderne-dx JAR.
---

# `moderne.yml` reference

Moderne DX reads its configuration from a `moderne.yml` file, which `java -jar moderne-dx.jar init` writes with comments to fill in.

A value of the form `${NAME}` is an environment variable, or a `NAME=value` line in the `moderne.env` file in the same directory as `moderne.yml`. Make `moderne.env` readable only by the OS account DX runs as. A path that is not absolute resolves against the directory that holds `moderne.yml`, unless a setting below says otherwise.

A value of the form `${moderne-cli:key}` reads the key from the Moderne CLI configuration, the same value `mod config get <key>` prints. To print a secret, add `--reveal`. DX reads these values from the Moderne CLI of the OS account it runs as, each time it starts.

## Commands

Every command except `init` reads `moderne.yml` from the working directory. To use a different file, pass `--config <path>`.

| Command                                  | What it does                                                                                     |
|------------------------------------------|--------------------------------------------------------------------------------------------------|
| `java -jar moderne-dx.jar init [<dir>]`  | Writes `moderne.yml`, `moderne.env` with a new SCM token key, and a systemd unit. It doesn't overwrite files that already exist. A new `moderne.yml` reads the license key and the CGP username and token from the Moderne CLI on this machine, if the CLI has them. |
| `java -jar moderne-dx.jar doctor`        | Checks the configuration and the machine. Once DX is running, it also checks each host name through the proxy. |
| `java -jar moderne-dx.jar start`         | Starts DX in the foreground. Until you stop DX, it restarts any service that stops.                     |
| `java -jar moderne-dx.jar status`        | Says whether DX runs, and which services are up.                                                 |
| `java -jar moderne-dx.jar stop`          | Stops a running DX.                                                                              |
| `java -jar moderne-dx.jar trust`         | Makes this machine trust the built-in DX certificate authority (CA). On macOS it adds the CA to your login keychain. On Linux it prints the commands that do. |

## Deployment

| Setting                | Default  | Description                                                                                                         |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------|
| `moderne.tenant.name`  | `dx`     | Tags every metric. If you change it from `dx`, the browser's title shows the new name. Lowercase letters, digits, and dashes. |
| `moderne.license.key`  |          | Your Moderne DX license key. Without a valid one, the CLIs connected to DX stop running recipes.                     |

## URLs and the proxy

DX serves four host names on one port, through a proxy inside DX. All four URLs use the same scheme and port, and only the host differs.

| Setting                         | Default                                         | Description                                                                                       |
|---------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `moderne.dx.public-url`         | `https://moderne.localhost:8443`                | Where people open the UI. An `http` or `https` URL with a host name and no path. For an `https` URL under `localhost`, `nip.io`, or `sslip.io`, the built-in DX certificate authority (CA) issues the certificate. |
| `moderne.dx.api-url`            | The public URL host, prefixed with `api.`       | Where the CLI and the UI reach the DX API.                                                        |
| `moderne.dx.login-url`          | The public URL host, prefixed with `login.`     | Where users sign in, through Keycloak.                                                            |
| `moderne.dx.status-url`         | The public URL host, prefixed with `status.`    | Where the status page shows metrics and logs for every service.                                   |
| `moderne.dx.tls.certificate`    |                                                 | A PEM file with the certificate for an `https` public URL first, then its chain. It must cover the public URL host and the names under it. |
| `moderne.dx.tls.private-key`    |                                                 | The certificate's private key, as a PEM file.                                                     |
| `moderne.dx.bind-address`       | `127.0.0.1` for a URL under `localhost`, `0.0.0.0` otherwise | The IP address the proxy listens on. Every other process listens on `127.0.0.1`.  |
| `moderne.dx.ports.proxy`        | The port in the public URL                      | The port the proxy listens on. Set it when a load balancer that handles TLS forwards to DX, and leave out `tls`. |
| `moderne.dx.ports.proxy-http`   | `8080`                                          | With the built-in CA, the port where the proxy serves the CA root certificate and redirects HTTP to HTTPS. |
| `moderne.dx.logo`               | The Moderne icon                                | An SVG file that the UI shows as your deployment's icon.                                          |
| `moderne.dx.java`               | The Java that runs the JAR                      | The `java` executable that the DX services run on. It must be Java 25.                              |

## Recipes

Configure the Code Genome Project, your own repository that proxies it, or both. DX tries your own first.

| Setting                                                                | Description                                                                                       |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.code-genome-project.username` | Your Code Genome Project username.                                                                |
| `moderne.recipe.marketplace.repositories.code-genome-project.token`    | Your Code Genome Project token. DX uses it to download recipes from the Code Genome Project. The `/cli` installer on DX also uses it to download the Moderne CLI. Without it, that download is anonymous. |
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

By default, `init` points DX at Moderne's public mass ingest, `https://moderne-lsts.s3.us-west-2.amazonaws.com/repos-lock.csv`, and keeps only the `Netflix` organization. To run a DX for one business unit, list just that unit's organizations under `organizations`.

Each entry of `moderne.organization.sources.file` reads a file on the machine:

| Setting         | Default  | Description                                                              |
|-----------------|----------|--------------------------------------------------------------------------|
| `path`          | Required | The file's full path, or its path relative to `moderne.storage.permanent-dir`. |
| `lst-version`   | `2`      | The LST format the source's mass ingest publishes, `2` or `3`.           |
| `organizations` | All      | The organizations to keep, as for an http source.                        |

DX downloads each LST with the credentials of the source whose host serves it. Each entry of `moderne.lst.http` gives credentials for another host:

| Setting        | Default  | Description                                            |
|----------------|----------|--------------------------------------------------------|
| `host`         | Required | The host that serves LSTs, as the `publishUri` column names it. |
| `username`     |          | The user to download as.                               |
| `password`     |          | That user's password.                                  |
| `bearer-token` |          | A token to send in place of a user and password.       |

:::note
LSTs in the same S3 bucket as an organization source don't need an entry here.
:::

## Repository access control

Every user can read every repository until you configure an SCM's OAuth app under `moderne.scm`. DX then shows that SCM's repositories only to the users who can read them. The [user-level repository access control](../how-to-guides/repository-access-control.md#settings-for-each-scm) guide lists the settings of each SCM, and `moderne.authorization.scm-token-key`.

## Sign-in

DX creates these secrets the first time it starts, and keeps them under `<permanent-dir>/dx/secrets`. To use your own value for one, set it in `moderne.yml`.

| Setting                                   | Description                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne-keycloak.server.password`        | The password of Keycloak's `admin` user, who configures your identity provider.             |
| `moderne-keycloak.initial-user.password`  | The first password of the realm's `moderne` user. It applies only when the realm is made.   |
| `moderne.keycloak.client-secret`          | The secret the UI and the DX services share with Keycloak.                                 |
| `moderne.dx.ui-secret`                    | The key the UI signs its sessions with.                                                     |

Keycloak keeps its realm in a database file under the permanent directory unless you set `spring.datasource`:

| Setting                        | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| `spring.datasource.url`        | A PostgreSQL JDBC URL, such as `jdbc:postgresql://db.acme.com:5432/keycloak`. |
| `spring.datasource.username`   | The database user.                                                 |
| `spring.datasource.password`   | That user's password.                                              |

## Storage

| Setting                          | Default                                  | Description                                                                                 |
|----------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne.storage.permanent-dir`  | `data/permanent` next to `moderne.yml`   | Everything DX cannot rebuild. Back it up.                                                   |
| `moderne.storage.ephemeral-dir`  | `data/ephemeral` next to `moderne.yml`   | What DX rebuilds when it needs to, such as the unpacked JAR and the code search index.      |

## Telemetry

We recommend storing CLI telemetry in an Amazon S3 bucket or an Azure Blob Storage container. [Configuring telemetry](../how-to-guides/configure-telemetry-dx.md#choosing-where-dx-stores-telemetry) lists the credentials and permissions each one needs.

| Setting                                          | Description                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| `moderne.gateway.telemetry.s3.bucket`            | The Amazon S3 bucket to store telemetry in.                  |
| `moderne.gateway.telemetry.azure.account-name`   | The Azure storage account that holds the container.          |
| `moderne.gateway.telemetry.azure.container-name` | The Azure Blob Storage container to store telemetry in.      |

If you set neither, DX stores telemetry in `<permanent-dir>/telemetry`.

## Memory

`moderne.dx.memory.<service>` sets the heap size for a service, as a size such as `2g` or `1536m`. The defaults fit a laptop.

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

`conversions` is the heap of the CLI process that converts V2 LSTs.

Code search skips any repository with an index shard larger than `moderne.code-search.shard-max-bytes`, 512 MB by default. To index larger repositories, raise it along with `moderne.dx.memory.code-search`. A 6 GB heap holds index shards of about 2 GB.

## Ports

Each DX process listens on the loopback address at a port of its own. `moderne.dx.ports.<process>` moves one when another program holds its port.

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

Two ports can't be moved. The router answers its health check on port 8099, and the services send their metrics and logs to port 7101.

## Other settings

| Setting                                    | Default           | Description                                                          |
|--------------------------------------------|-------------------|----------------------------------------------------------------------|
| `moderne.monitoring.atlas.disk.retention`  | `2d`              | How long the status page keeps metrics and logs.                     |
| `moderne.cli.executable`                   | `mod` on the PATH | The Moderne CLI that the DX services run. DX asks it for `${moderne-cli:key}` values. |

## Environment variables

| Variable              | Description                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------|
| `NODE_EXTRA_CA_CERTS` | A PEM file of certificate authorities that the UI trusts beyond the public ones. Set it when your certificate comes from a private CA. The built-in DX CA needs no setting. |
