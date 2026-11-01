---
sidebar_label: Running Moderne DX
description: How to serve Moderne DX to your organization, sign users in through your identity provider, connect your developers, upgrade, back up, and troubleshoot it.
---

# Running Moderne DX for your organization

[Installing Moderne DX](../getting-started/installing-moderne-dx.md) starts DX at `https://moderne.localhost:8443`, which only your own machine reaches. To serve DX to your organization, give it a name that reaches the machine and keep it running. A name of your own also needs a certificate.

## Choosing its name

DX serves four names, all on the public URL's port:

* The UI, at the public URL's own host, such as `moderne.acme.com`.
* The API, at `api.` before that host.
* Keycloak, at `login.` before that host.
* The status page, at `status.` before that host.

A proxy inside DX serves all four names. Every other DX process listens on the machine's loopback address alone.

Set the public URL to the name your users will open:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.acme.com
```

Give `moderne.acme.com` and `*.moderne.acme.com` DNS records that point at the machine. DX then listens on every address of the machine. For a name under `localhost`, it listens on the loopback address alone.

Without DNS records of your own, you can use a name under `nip.io`, a public DNS service. Such a name resolves to the address it holds. `moderne.192-168-1-20.nip.io` and every name under it resolve to `192.168.1.20`. DX's own certificate authority covers the name, and it needs no certificate:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.192-168-1-20.nip.io:8443
```

Each person who opens DX trusts its certificate authority once. The page at DX's http port, `http://moderne.192-168-1-20.nip.io:8080`, says how. The name holds the machine's address, and it changes when the address does.

## Adding a certificate

A name outside `localhost`, `nip.io`, and `sslip.io` needs a Transport Layer Security (TLS) certificate of your own. It must cover both `moderne.acme.com` and `*.moderne.acme.com`, in PEM files:

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

## Serving DX behind a load balancer

If a load balancer ends TLS in front of DX, leave out `tls` and name the port the load balancer forwards to:

```yaml title="moderne.yml"
moderne:
  dx:
    public-url: https://moderne.acme.com
    ports:
      proxy: 8080
```

The load balancer must forward all four names to that port, with each request's `Host` header unchanged.

## Running DX as a service

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

## Connecting your identity provider

DX signs users in through Keycloak, as the Moderne Platform does. Until you connect your identity provider, you sign in as the `moderne` administrator. Keycloak brokers your identity provider over Security Assertion Markup Language (SAML) or OpenID Connect (OIDC). You will configure it in Keycloak's admin console:

1. Open `https://login.moderne.acme.com/auth/admin/`. On a laptop, open `https://login.moderne.localhost:8443/auth/admin/`.
2. Sign in as `admin`, with the password in `data/permanent/dx/secrets/keycloak-admin-password`.
3. Switch to the `dx` realm.
4. Under **Identity providers**, add a **SAML v2.0** or **OpenID Connect v1.0** provider. Give it an alias, such as `corporate-sso`.
5. Add the mappers in the Platform's [Keycloak IdP mapping table](../../moderne-platform/references/authentication.md#keycloak-idp-mapping). The `admin` mapper gives your administrators DX's `admin` role.

Your identity provider will need DX's values for the new application:

| Protocol | Field                       | Value                                                                          |
|----------|-----------------------------|--------------------------------------------------------------------------------|
| SAML     | Single sign-on URL          | `https://login.moderne.acme.com/auth/realms/dx/broker/corporate-sso/endpoint` |
| SAML     | Audience URI (SP Entity ID) | `https://login.moderne.acme.com/auth/realms/dx`                               |
| OIDC     | Redirect URI                | `https://login.moderne.acme.com/auth/realms/dx/broker/corporate-sso/endpoint` |

Replace `moderne.acme.com` with DX's host and `corporate-sso` with your provider's alias. Once your administrators can sign in through your identity provider, disable the `moderne` user under **Users**.

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
curl -fsSL https://api.moderne.acme.com/cli | bash
```

With DX's own certificate authority, give curl the authority's certificate from DX's http port:

```bash
curl -fsSLO http://moderne.192-168-1-20.nip.io:8080/moderne-dx-ca.crt
curl -fsSL --cacert moderne-dx-ca.crt https://api.moderne.192-168-1-20.nip.io:8443/cli | bash
```

### Pointing the CLI at DX

The CLI must trust DX's certificate authority. On macOS, once macOS trusts DX's own, run `mod config http trust-store edit system`. The CLI then trusts what macOS trusts. [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store) covers other systems.

The CLI takes DX's URL. It finds DX's API and Keycloak realm from there:

```bash
mod config moderne edit https://moderne.acme.com
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

## Changing the URL later

You can change the public URL at any time, such as when you move DX from a laptop to a server. If `moderne.yml` names an SCM's OAuth app, set the app's callback URL to the new URL too. DX updates Keycloak at its next start. Users then sign in again. Developers point their CLIs at the new URL. A machine that trusts DX's own certificate authority keeps trusting it for a new name under `localhost`, `nip.io`, or `sslip.io`.

## Upgrading

1. [Back up](#backing-up) DX's data.
2. Download the new version's jar.
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
| `dx`            | DX's own settings, its certificate authority, and the secrets it made.            |

Keep the backup of `moderne.env` apart from the data's backup. The SCM token key in it unseals the SCM tokens in `authorization`. The ephemeral directory, `data/ephemeral`, holds only what DX rebuilds, such as code search's index.

## Troubleshooting

Start with `java -jar moderne-dx.jar doctor`. It checks the configuration, and once DX runs, each name through the proxy. `status` shows which services are up.

| What you see                                            | What to do                                                                                          |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `doctor` says a name does not resolve                   | On a laptop, add the line `doctor` prints to `/etc/hosts`. On a server, give `moderne.acme.com` and `*.moderne.acme.com` DNS records. |
| `doctor` says a port is taken                           | Stop what holds it, or move the service with `moderne.dx.ports`, as `doctor` says.                  |
| `doctor` says the certificate does not cover a name     | Get a certificate that covers `moderne.acme.com` and `*.moderne.acme.com`.                          |
| The browser warns about DX's certificate                | Run `java -jar moderne-dx.jar trust` where DX runs. Elsewhere, open DX's http port, such as `http://moderne.192-168-1-20.nip.io:8080`. |
| The CLI fails with a PKIX error                         | Have the CLI trust DX's certificate authority with `mod config http trust-store`.                    |
| Sign-in fails with a certificate from your own CA       | Add your CA's PEM file to `moderne.env` as `NODE_EXTRA_CA_CERTS`.                                    |
| Code search shows a user none of an SCM's repositories  | Have the user connect their SCM account under **Settings** > **SCM connections**.                   |
| A repository with a V2 LST is missing from code search  | DX's log says why its conversion failed. Python, Go, and .NET LSTs need those tools on the machine. |
| The marketplace has no recipes                          | Check where recipes come from with `doctor`. Then install them from the marketplace as an administrator. |

The status page at `https://status.moderne.acme.com` shows every service's metrics and logs from the last two days. Any user can open it.

A service that runs out of memory leaves a heap dump named after it in the ephemeral directory. DX then restarts the service. Give it more memory with `moderne.dx.memory`.
