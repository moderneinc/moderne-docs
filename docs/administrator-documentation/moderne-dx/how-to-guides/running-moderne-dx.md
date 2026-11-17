---
sidebar_label: Running Moderne DX
description: How to serve Moderne DX to your organization, sign users in through your identity provider, connect your developers, upgrade, back up, and troubleshoot it.
---

# Running Moderne DX for your organization

[Installing Moderne DX](../getting-started/installing-moderne-dx.md) starts DX at a name under `moderne.direct` that points at `127.0.0.1`, so only your own machine reaches it. To serve DX to your organization, point that name at a machine your users reach, and keep DX running there.

## Serving DX to your organization

DX serves four names on one port, through a proxy inside it: its name under `moderne.direct`, such as `acme.moderne.direct`, and `api.`, `login.`, and `status.` before it. Every other DX process listens on the machine's loopback address alone.

Set the managed route's address to the private address your users reach the machine at. Leave out the port to serve DX on `443`:

```yaml title="moderne.yml"
moderne:
  dx:
    routes:
      managed:
        token: ${CGP_TOKEN}
        address: 10.20.3.7
```

The Code Genome Project [points the four names at that address](./configuring-dns-for-dx.md#how-the-name-resolves). DX tells it the address at each start and every hour after. DX listens on the address where it is one of the machine's own, and on every address of the machine where it is not, such as behind a cloud provider's network address translation.

Some DNS resolvers drop answers that point at private addresses, to guard against DNS rebinding. Where yours does, `doctor` says the names do not resolve. Have your DNS answer for the four names, or add the line `doctor` prints to each machine's hosts file.

You can also [serve DX under a name of your own](./configuring-dns-for-dx.md#choosing-a-route), with your own certificate or behind a load balancer.

## Running DX as a service

The `moderne-dx.service` file that `init` wrote runs DX under systemd. It expects the following layout:

* The jar at `/opt/moderne-dx/moderne-dx.jar`.
* `moderne.yml` and `moderne.env` in `/etc/moderne-dx`.
* Java 25 at `/usr/bin/java`.
* `mod` in `/usr/local/bin`, `/usr/bin`, or `/bin`.
* A `moderne` user who owns `moderne.env` and DX's data directories.

Edit those paths in the file if yours differ.

DX keeps its data beside `moderne.yml` unless you name other directories. To keep it out of `/etc/moderne-dx`, set them in `moderne.yml`:

```yaml title="moderne.yml"
moderne:
  storage:
    permanent-dir: /var/lib/moderne-dx/permanent
    ephemeral-dir: /var/lib/moderne-dx/ephemeral
```

Then install the unit:

```bash
sudo cp moderne-dx.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now moderne-dx
```

The unit lets DX listen on port 443 as the `moderne` user. Started any other way on Linux, DX needs a route whose port is above 1023. Under systemd, `journalctl -u moderne-dx` shows DX's logs.

Run as the `moderne` user, DX takes each `${moderne-cli:key}` value from that user's Moderne CLI. Configure the CLI as `moderne`, or put the values in `moderne.env` instead.

## Connecting your identity provider

DX signs users in through Keycloak, as the Moderne Platform does. Until you connect your identity provider, you sign in as DX's first user, `admin` unless you [named another](../getting-started/installing-moderne-dx.md#the-first-user). That user is an administrator of DX, not of Keycloak. Keycloak brokers your identity provider over Security Assertion Markup Language (SAML) or OpenID Connect (OIDC). You will configure it in Keycloak's admin console:

1. Open `https://login.acme.moderne.direct/auth/admin/`, with DX's own name in place of `acme.moderne.direct` and its port, if it names one.
2. Sign in as Keycloak's own `admin`, with the password in `data/permanent/dx/secrets/keycloak-admin-password`.
3. Switch to the `dx` realm.
4. Under **Identity providers**, add a **SAML v2.0** or **OpenID Connect v1.0** provider. Give it an alias, such as `corporate-sso`.
5. Add the mappers in the Platform's [Keycloak IdP mapping table](../../moderne-platform/references/authentication.md#keycloak-idp-mapping). The `admin` mapper gives your administrators DX's `admin` role.

Your identity provider will need DX's values for the new application:

| Protocol | Field                       | Value                                                                          |
|----------|-----------------------------|--------------------------------------------------------------------------------|
| SAML     | Single sign-on URL          | `https://login.acme.moderne.direct/auth/realms/dx/broker/corporate-sso/endpoint` |
| SAML     | Audience URI (SP Entity ID) | `https://login.acme.moderne.direct/auth/realms/dx`                               |
| OIDC     | Redirect URI                | `https://login.acme.moderne.direct/auth/realms/dx/broker/corporate-sso/endpoint` |

Replace `acme.moderne.direct` with DX's host and `corporate-sso` with your provider's alias. Once your administrators can sign in through your identity provider, disable DX's first user under **Users**.

### Keeping the realm in PostgreSQL

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

Developers point their Moderne CLI at DX. With [user-level repository access control](./repository-access-control.md) on, each developer should first sign in to the UI and connect their source control management (SCM) account under **Settings** > **SCM connections**. Code search shows them a repository on that SCM only after they connect an account that can read it.

### Installing the CLI from DX

DX serves an installer for the CLI, which downloads the CLI through DX:

```bash
curl -fsSL https://api.acme.moderne.direct/cli | bash
```

### Pointing the CLI at DX

The CLI takes DX's URL. It finds DX's API and Keycloak realm from there:

```bash
mod config moderne edit https://acme.moderne.direct
mod config moderne login
```

The CLI trusts the certificate of a `moderne.direct` name as it is. If you [serve DX under your own name](./configuring-dns-for-dx.md#trusting-a-private-certificate-authority) with a certificate from a private certificate authority, developers add that authority to the CLI with [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store).

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

## Moving DX to another machine

To move DX from a laptop to a server, copy `moderne.yml`, `moderne.env`, and DX's permanent directory to the server, and set the managed route's address to the server's. DX keeps its name under `moderne.direct`, so users and developers keep the same URL. If you leave out the port, which `init` set to `8443`, the URL loses it, and developers point their CLIs at the new URL. If `moderne.yml` names an SCM's OAuth app, set the app's callback URL to the new URL too. DX updates Keycloak at its next start, and users sign in again.

## Upgrading

1. [Back up](#backing-up) DX's data.
2. Download the new version's jar from the [same URL](../getting-started/installing-moderne-dx.md#downloading-moderne-dx).
3. Stop DX, replace the jar, and start DX again.

The first start of a new version unpacks it and removes the previous version's files. A new version may bring a newer Keycloak, which then updates its database.

## Backing up

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
| `telemetry`     | CLI telemetry, unless you store it in a bucket or container.                      |
| `dx`            | DX's own settings, the secrets it made, and its managed route's name, certificate, and private key. |

Keep the backup of `moderne.env` apart from the data's backup. The SCM token key in it unseals the SCM tokens in `authorization`. The ephemeral directory, `data/ephemeral`, holds only what DX rebuilds, such as code search's index.

## Troubleshooting

Start with `java -jar moderne-dx.jar doctor`. It checks the configuration, and once DX runs, each name through the proxy. `status` shows which services are up.

| What you see                                            | What to do                                                                                          |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `doctor` says a name does not resolve                   | Right after the Code Genome Project first names DX, wait up to 15 minutes. After that, your resolver may drop answers that point at private addresses: have your DNS answer for the four names, or add the line `doctor` prints to the hosts file. With a name of your own, give it and `*.` before it DNS records. |
| `doctor` says a port is taken                           | Stop what holds it, or move the service with `moderne.dx.ports`, as `doctor` says.                  |
| A start says the Code Genome Project could not be asked | Check that the machine reaches `api.codegenomeproject.org` over HTTPS, and that the route's `token` is the CGP token Moderne gave you for DX. |
| `doctor` says the certificate does not cover a name     | With your own certificate, get one that covers `moderne.acme.com` and `*.moderne.acme.com`.          |
| The CLI fails with a PKIX error                         | With a certificate from a private CA, have the CLI trust the CA with `mod config http trust-store`. |
| Sign-in fails with a certificate from your own CA       | Add your CA's PEM file to `moderne.env` as `NODE_EXTRA_CA_CERTS`.                                    |
| Code search shows a user none of an SCM's repositories  | Have the user connect their SCM account under **Settings** > **SCM connections**.                   |
| A repository with a V2 LST is missing from code search  | DX's log says why its conversion failed. Python, Go, and .NET LSTs need those tools on the machine. |
| The marketplace has no recipes                          | Check where recipes come from with `doctor`. Then install them from the marketplace as an administrator. |

The status page at `https://status.acme.moderne.direct` shows every service's metrics and logs from the last two days. Any signed-in user can open it.

A service that runs out of memory leaves a heap dump named after it in the ephemeral directory. DX then restarts the service. Give it more memory with `moderne.dx.memory`.
