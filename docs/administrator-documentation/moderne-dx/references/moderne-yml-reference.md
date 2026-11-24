---
sidebar_label: moderne.yml reference
description: The settings in Moderne DX's moderne.yml file, their defaults, and the commands of the moderne-dx JAR.
---

# `moderne.yml` reference

Moderne DX reads its configuration from a `moderne.yml` file. When you run `java -jar moderne-dx.jar init`, DX will create this file for you with comments that explain what to fill in.

This page lists the settings DX reads from that file. If you're only looking for the settings that every deployment needs, check out the [installation guide](../getting-started/installing-moderne-dx.md).

There are a few things to know about how DX reads values from this file:

* If a value looks like `${NAME}`, DX will fill it in from an environment variable with that name. You can also set it with a `NAME=value` line in the `moderne.env` file that sits next to `moderne.yml`. Please make sure that only the OS account DX runs as can read the `moderne.env` file.
* If a value looks like `${moderne-cli:key}`, DX will read it from the Moderne CLI's configuration. It's the same value you'd see by running `mod config get <key>` (you'll need to add `--reveal` to see a secret). DX reads these values each time it starts, from the CLI of the OS account it runs as.
* If you use a relative path for a setting, DX will resolve it against the directory that holds `moderne.yml` (unless that setting's description says otherwise).

## Commands

Every command except `init` will read the `moderne.yml` file in your current directory. If you'd like to use a different file, you can pass `--config <path>`.

| Command                                  | What it does                                                                                     |
|------------------------------------------|--------------------------------------------------------------------------------------------------|
| `java -jar moderne-dx.jar init [<dir>]`  | Creates `moderne.yml` and `moderne.env` (with a new SCM token key). On Linux, it will also create a systemd unit file. It won't overwrite any of these files if they already exist. If the Moderne CLI on this machine has your license key, CGP username, or CGP token, the new `moderne.yml` will read them from the CLI. |
| `java -jar moderne-dx.jar doctor`        | Checks that DX has what it needs to start. This includes your `moderne.yml` settings, Java, the Moderne CLI, disk space, your certificate, and your organization sources. If DX is running, it will also check each of DX's host names through the proxy. |
| `java -jar moderne-dx.jar start`         | Starts DX in the foreground. It will keep every service running until DX stops.                  |
| `java -jar moderne-dx.jar status`        | Tells you whether DX is running and which services are up.                                       |
| `java -jar moderne-dx.jar stop`          | Stops DX if it's running.                                                                        |

## Deployment

| Setting                | Default  | Description                                                                                                         |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------|
| `moderne.tenant.name`  | `dx`     | The name DX tags every metric with. If you change it from `dx`, the browser's title will show the new name. It can contain lowercase letters, digits, and dashes. |
| `moderne.license.key`  |          | Your Moderne DX license key. Without a valid one, the CLIs connected to DX will stop running recipes.               |

## Routes

The `moderne.dx.routes` setting controls [how people reach DX](../how-to-guides/configuring-dns-for-dx.md). You'll need to configure exactly one route.

Regardless of which route you pick, people will reach DX through four host names that all use the same port. For example, if your host is `acme.moderne.direct`, the four host names will be:

| Host name                    | What you'll find there      |
|------------------------------|-----------------------------|
| `acme.moderne.direct`        | The UI                      |
| `api.acme.moderne.direct`    | The API                     |
| `login.acme.moderne.direct`  | The sign-in page (Keycloak) |
| `status.acme.moderne.direct` | The status page             |

Every public URL uses `https`. A proxy that's built into DX handles all four host names. Every other DX process will only listen on the machine's loopback address.

### Managed route

With a `managed` route, DX will get its host name and certificate from the Code Genome Project (CGP). This is the route that `init` sets up for you:

| Setting                             | Default  | Description                                                                                       |
|-------------------------------------|----------|---------------------------------------------------------------------------------------------------|
| `moderne.dx.routes.managed.token`   | Required | The CGP token that Moderne gave you for DX. CGP will give your DX a host name based on the user this token belongs to, in the form `<user>.moderne.direct`. |
| `moderne.dx.routes.managed.address` | The machine's network address | The IP address the four host names will resolve to. If you leave it out, DX will use the machine's own network address. Run `doctor` to see the address DX picked. With `127.0.0.1`, the host names will only work on this machine. If this address belongs to the machine, DX will only listen on that address. If it doesn't, DX will listen on all of the machine's addresses. |
| `moderne.dx.routes.managed.port`    | `443`    | The port DX will listen on.                                                                       |

### Custom certificate route

With a `custom-certificate` route, DX will use a host name you own and a certificate you provide:

| Setting                                            | Default  | Description                                                                          |
|----------------------------------------------------|----------|--------------------------------------------------------------------------------------|
| `moderne.dx.routes.custom-certificate.public-url`  | Required | The URL people will use to open the UI (e.g., `https://moderne.acme.com`). DX will listen on the port in this URL. |
| `moderne.dx.routes.custom-certificate.certificate` | Required | A PEM file that contains the certificate first, followed by its chain. The certificate needs to cover all four host names. |
| `moderne.dx.routes.custom-certificate.private-key` | Required | A PEM file that contains the certificate's private key.                              |

### Load-balanced route

With a `load-balanced` route, DX will use a host name you own and sit behind a load balancer that handles Transport Layer Security (TLS):

| Setting                                      | Default  | Description                                                                                      |
|----------------------------------------------|----------|--------------------------------------------------------------------------------------------------|
| `moderne.dx.routes.load-balanced.public-url` | Required | The URL people will use to open the UI, such as `https://moderne.acme.com`.                      |
| `moderne.dx.routes.load-balanced.http-port`  | Required | The port your load balancer will forward plain HTTP traffic to. The load balancer needs to leave each request's `Host` header unchanged. |

### Settings that routes replaced

Routes replaced a number of older settings under `moderne.dx`. If your `moderne.yml` file still has any of the following settings, DX won't start. Instead, it will tell you which route to use in its place:

* `public-url`
* `api-url`
* `login-url`
* `status-url`
* `tls`
* `ports.proxy`
* `ports.proxy-http`
* `bind-address`

## Recipes

DX needs to know where to get recipes from. You can point it at the Code Genome Project, at your own repository that proxies it, or at both. If you configure both, DX will try your own repository first.

| Setting                                                                | Description                                                                                       |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `moderne.recipe.marketplace.repositories.code-genome-project.username` | Your Code Genome Project username.                                                                |
| `moderne.recipe.marketplace.repositories.code-genome-project.token`    | Your Code Genome Project token. DX will use it to download recipes from the Code Genome Project. The CLI installer that DX serves at `/cli` will also use it to download the Moderne CLI. Without a token, the installer will download the CLI anonymously. |
| `moderne.recipe.marketplace.repositories.maven`, `npm`, `pypi`, `nuget`, `go` | Your own recipe repositories. These use the same settings as the Moderne Connector's [recipe marketplace repositories](../../moderne-platform/how-to-guides/connector-configuration/configure-recipe-marketplace-repositories.md). |

## Organization sources

Organization sources tell DX where to find your `repos-lock.csv` files.

### HTTP sources

Each entry under `moderne.organization.sources.http` will read a `repos-lock.csv` file over HTTP or HTTPS:

| Setting          | Default  | Description                                                                                          |
|------------------|----------|------------------------------------------------------------------------------------------------------|
| `uri`            | Required | The URL of the file.                                                                                 |
| `username`       |          | The user DX will read the file and its LSTs as.                                                      |
| `password`       |          | That user's password.                                                                                |
| `bearer-token`   |          | A token to send instead of a username and password.                                                  |
| `lst-version`    | `2`      | The LST format that this source's mass ingest publishes (`2` or `3`). For V2 LSTs, DX will keep a V3 copy of each one for code search. |
| `organizations`  | All      | The organizations to keep, along with every repository under them. You can list organizations at any level of the file's org columns. |

By default, `init` will point DX at Moderne's public mass ingest (`https://moderne-lsts.s3.us-west-2.amazonaws.com/repos-lock.csv`) and only keep the `Netflix` organization.

The `organizations` setting is also useful if a single business unit wants a DX of its own. In that case, you can list just that unit's organizations.

### File sources

Each entry under `moderne.organization.sources.file` will read a file that's on the same machine as DX:

| Setting         | Default  | Description                                                              |
|-----------------|----------|--------------------------------------------------------------------------|
| `path`          | Required | The path to the file. This can be a full path or a path relative to `moderne.storage.permanent-dir`. |
| `lst-version`   | `2`      | The LST format that this source's mass ingest publishes (`2` or `3`).    |
| `organizations` | All      | The organizations to keep. This works the same way as it does for an `http` source. |

### Credentials for downloading LSTs

When DX downloads an LST, it will use the credentials of the organization source that's on the same host as that LST.

LSTs with an `s3://` location are a special case. If one of your organization sources is in the same bucket, DX will download those LSTs from the bucket over HTTPS without credentials.

If your LSTs are on a host that none of your organization sources use, you can add credentials for that host with an entry under `moderne.lst.http`:

| Setting        | Default  | Description                                            |
|----------------|----------|--------------------------------------------------------|
| `host`         | Required | The host that serves the LSTs. This needs to match the host in the `publishUri` column. |
| `username`     |          | The user to download LSTs as.                          |
| `password`     |          | That user's password.                                  |
| `bearer-token` |          | A token to send instead of a username and password.    |

## Repository access control

By default, every user can read every repository. Once you configure an OAuth app for your source control management (SCM) system under `moderne.scm`, DX will only show that SCM's repositories to the users who can read them.

You can find the settings for each SCM (along with `moderne.authorization.scm-token-key`) in our [user-level repository access control guide](../how-to-guides/repository-access-control.md#settings-for-each-scm).

## Sign-in

### The first user

The first time DX starts, Keycloak will create DX's first user. That user can sign in to DX as an administrator, but they can't administer anything in Keycloak itself. Keycloak also won't ask them to choose a new password.

You can use these settings to choose that first user's name and password:

| Setting                           | Default       | Description                                  |
|-----------------------------------|---------------|----------------------------------------------|
| `moderne.keycloak.user.name`      | `admin`       | The first user's name.                       |
| `moderne.keycloak.user.password`  | `moderne1001` | The first user's password.                   |

Keep in mind that these settings only apply the first time DX starts. If you change them later, nothing will happen. You'll need to change the user in Keycloak instead.

In the `moderne.yml` file that `init` creates, both of these settings are read from `moderne.env`. They're written as `${KEYCLOAK_USERNAME:admin}` and `${KEYCLOAK_PASSWORD:moderne1001}`.

### Secrets DX creates

DX will create the following secrets the first time it starts. It keeps them under `<permanent-dir>/dx/secrets`. If you'd like to use your own value for one of them, you can set it in `moderne.yml`:

| Setting                             | Description                                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne.keycloak.server.password`  | The password for Keycloak's own `admin` user. This is the user who configures your identity provider in Keycloak's admin console. It isn't the same as DX's first user. |
| `moderne.keycloak.client-secret`    | The secret that the UI and DX's services share with Keycloak.                               |
| `moderne.dx.ui-secret`              | The key the UI uses to sign its sessions.                                                   |

### Keycloak's database

By default, Keycloak will keep its realm in a database file under the permanent directory. If you'd like it to use a PostgreSQL database instead, you can set the following:

| Setting                        | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| `spring.datasource.url`        | A PostgreSQL JDBC URL, such as `jdbc:postgresql://db.acme.com:5432/keycloak`. |
| `spring.datasource.username`   | The database user.                                                 |
| `spring.datasource.password`   | That user's password.                                              |

## Storage

| Setting                          | Default                                  | Description                                                                                 |
|----------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------|
| `moderne.storage.permanent-dir`  | `data/permanent` next to `moderne.yml`   | Everything DX can't rebuild. You should back this directory up.                             |
| `moderne.storage.ephemeral-dir`  | `data/ephemeral` next to `moderne.yml`   | Things DX can rebuild when it needs to, such as the unpacked JAR and the code search index. |

## Telemetry

We recommend storing CLI telemetry in an Amazon S3 bucket or an Azure Blob Storage container. For the credentials and permissions each one needs, check out our guide on [choosing where DX stores telemetry](../how-to-guides/configure-telemetry-dx.md#choosing-where-dx-stores-telemetry).

| Setting                                          | Description                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| `moderne.gateway.telemetry.s3.bucket`            | The Amazon S3 bucket to store telemetry in.                  |
| `moderne.gateway.telemetry.azure.account-name`   | The Azure storage account that holds the container.          |
| `moderne.gateway.telemetry.azure.container-name` | The Azure Blob Storage container to store telemetry in.      |

If you don't set any of these, DX will store telemetry in `<permanent-dir>/telemetry`.

## Memory

You can use `moderne.dx.memory.<service>` to set how much heap memory a service gets. The value is a size such as `2g` or `1536m`. The defaults below are sized to fit on a laptop:

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

The `conversions` value is the heap for the CLI process that converts V2 LSTs. That process will convert one LST at a time for each gigabyte of heap, up to one per CPU core.

Code search will skip a repository if any single part of its index is larger than `moderne.code-search.shard-max-bytes` (512 MB by default). If you need to index larger repositories, you can raise that limit. You'll also need to raise `moderne.dx.memory.code-search` along with it. As a guide, a 6 GB heap can hold index parts of about 2 GB.

## Ports

Each DX process listens on the machine's loopback address, on a port of its own. If another program is already using one of these ports, you can move that process to a different port with `moderne.dx.ports.<process>`:

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

There are two more ports that you can't move: 8099 and 7101. The router uses port 8099 to answer its health check, and the services send their metrics and logs to port 7101.

## Other settings

| Setting                                    | Default           | Description                                                          |
|--------------------------------------------|-------------------|----------------------------------------------------------------------|
| `moderne.monitoring.atlas.disk.retention`  | `2d`              | How long the status page will keep metrics and logs.                 |
| `moderne.cli.executable`                   | `mod` on the PATH | The Moderne CLI that DX's services will run. DX also asks this CLI for any `${moderne-cli:key}` values. |
| `moderne.dx.logo`                          | The Moderne icon           | An SVG file that the UI will show as your deployment's icon.         |
| `moderne.dx.java`                          | The Java that runs the JAR | The `java` executable that DX's services will run on. It needs to be Java 25. |

## Environment variables

| Variable              | Description                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------|
| `NODE_EXTRA_CA_CERTS` | A PEM file of certificate authorities (CAs) that the UI should trust in addition to the public ones. You'll need to set this if the certificate for your `custom-certificate` or `load-balanced` route comes from a private CA. You don't need it for a `managed` route. |
| `KEYCLOAK_USERNAME`, `KEYCLOAK_PASSWORD` | The name and password for DX's first user, as used by the `moderne.yml` file that `init` creates. You'll need to set these before DX starts for the first time. |
