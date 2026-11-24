---
sidebar_label: Running Moderne DX
description: How to serve Moderne DX to your organization, sign users in through your identity provider, connect your developers, upgrade, back up, and troubleshoot it.
---

# Running Moderne DX for your organization

If you followed our [installing Moderne DX guide](../getting-started/installing-moderne-dx.md), your DX instance will only be accessible from your machine. While that's fine for testing purposes, you'll eventually want to configure DX to serve your entire organization.

In this guide, we will walk you through how to serve DX to your organization, run it as a service, sign people in through your identity provider, and have your developers connect to it. We will also cover how to move, upgrade, back up, and troubleshoot DX.

## Serving DX to your organization

When you installed DX, the Code Genome Project (CGP) gave it a host name (such as `acme.moderne.direct`). Right now, that host name points at `127.0.0.1` - so only your machine can reach DX.

To let other people reach DX, you'll need to change the managed route's `address` to the address your users reach the machine at. In most cases, that will be the machine's private address on your network.

You'll also want to remove the `port` line, which `init` set to `8443`. Without that line, DX will use port `443`, and your users won't have to type a port in the URL.

Once you've made both changes, your managed route will look like this:

```yaml title="moderne.yml"
moderne:
  dx:
    routes:
      managed:
        token: ${CGP_TOKEN}
        address: 10.20.3.7
```

CGP will then point DX's [four host names](../getting-started/installing-moderne-dx.md#how-people-will-reach-dx) at that address. DX will tell CGP its address each time it starts, and again every hour.

### Letting DX pick the address

You can also leave `address` out. If you do, DX will use the address of the machine it's running on.

When you run `doctor`, it will show you the address DX picked. If your users reach the machine at a different address, set `address` to that one instead.

### If the host names don't resolve

Some DNS servers won't pass on answers that point at a private address. If yours is one of them, `doctor` will tell you that the host names don't resolve. There are two ways to fix that:

* Have your own DNS server answer for the four host names.
* Add the line that `doctor` prints to the hosts file on each machine that needs to reach DX.

If you'd rather not use a `moderne.direct` host name at all, you can [serve DX under your own host name](./configuring-dns-for-dx.md#choosing-a-route), with your own certificate or behind a load balancer.

## Running DX as a service

On a server, you'll want DX to keep running after you log out and to start again after a reboot. To help with that, `init` will create a `moderne-dx.service` file when you run it on Linux. You can use this file to run DX under `systemd`.

### Where the service expects things to be

The service file expects your server to be set up like this:

* The DX JAR is at `/opt/moderne-dx/moderne-dx.jar`.
* Your `moderne.yml` and `moderne.env` files are in `/etc/moderne-dx`.
* Java 25 is at `/usr/bin/java`.
* The Moderne CLI (`mod`) is in `/usr/local/bin`, `/usr/bin`, or `/bin`.
* There is a user named `moderne` that owns the `moderne.env` file and DX's data directories.

If any of these are different on your server, you'll need to edit the service file to match.

### Choosing where DX keeps its data

By default, DX keeps its data in a `data` folder next to your `moderne.yml` file. With the layout above, your data will end up in `/etc/moderne-dx`. To keep it somewhere else, add these settings to your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  storage:
    permanent-dir: /var/lib/moderne-dx/permanent
    ephemeral-dir: /var/lib/moderne-dx/ephemeral
```

### Installing the service

Once everything is in place, you can install and start the service:

```bash
sudo cp moderne-dx.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now moderne-dx
```

To see DX's logs, run `journalctl -u moderne-dx`. DX will also write a log file for each of its services in the `dx/logs` folder of its permanent directory.

:::info
On Linux, a program needs extra privileges to listen on a port below `1024`. The service file gives DX what it needs to listen on port `443` as the `moderne` user. If you start DX some other way, you'll need to use a port above `1023`.
:::

:::note
When DX runs as the `moderne` user, it will read any `${moderne-cli:...}` values in your `moderne.yml` file from that user's Moderne CLI. You'll need to either configure the CLI as the `moderne` user or put those values in your `moderne.env` file instead.
:::

## Connecting your identity provider

DX signs people in through [Keycloak](https://www.keycloak.org/) (an open-source sign-in service that DX runs for you). Until you connect your identity provider, the only way to sign in is as DX's [first user](../getting-started/installing-moderne-dx.md#the-first-user).

Once you connect your identity provider, people will be able to sign in with their company accounts. Keycloak can talk to your identity provider over Security Assertion Markup Language (SAML) or OpenID Connect (OIDC).

### Adding your identity provider to Keycloak

You'll need to add your identity provider in Keycloak's admin console:

1. Open `https://login.acme.moderne.direct/auth/admin/`. Replace `acme.moderne.direct` with your DX's host name, and add the port if your route has one.
2. Sign in as `admin`. You'll find the password in the `dx/secrets/keycloak-admin-password` file inside DX's permanent directory.
3. Switch to the `dx` realm.
4. Under **Identity providers**, add a **SAML v2.0** or **OpenID Connect v1.0** provider. Give it an alias (such as `corporate-sso`).
5. Add the mappers listed in the [Keycloak IdP mapping table](../../moderne-platform/references/authentication.md#keycloak-idp-mapping). The `admin` mapper is the one that will make your administrators into DX administrators.

:::info
Keycloak's `admin` user and DX's first user are two different users, even though both are named `admin` by default. DX's first user can administer DX, but it can't sign in to Keycloak's admin console.
:::

### Setting up DX in your identity provider

When you set up DX as an application in your identity provider, it will ask you for some of these URLs:

| Protocol | Field                       | Value                                                                            |
|----------|-----------------------------|----------------------------------------------------------------------------------|
| SAML     | Single sign-on URL          | `https://login.acme.moderne.direct/auth/realms/dx/broker/corporate-sso/endpoint` |
| SAML     | Audience URI (SP Entity ID) | `https://login.acme.moderne.direct/auth/realms/dx`                               |
| OIDC     | Redirect URI                | `https://login.acme.moderne.direct/auth/realms/dx/broker/corporate-sso/endpoint` |

In each URL, replace `acme.moderne.direct` with your DX's host name and `corporate-sso` with the alias you gave your provider.

Once your administrators can sign in through your identity provider, you should disable DX's first user. You can do that under **Users** in Keycloak's admin console.

### Keeping Keycloak's data in PostgreSQL

By default, Keycloak keeps its users and settings in a database file inside DX's permanent directory. If you'd rather keep them in a PostgreSQL database, add its connection details to your `moderne.yml` file:

```yaml title="moderne.yml"
spring:
  datasource:
    url: jdbc:postgresql://db.acme.com:5432/keycloak
    username: keycloak
    password: ${KEYCLOAK_DB_PASSWORD}
```

:::warning
Choose the database before you set up your identity provider. If you switch later, you'll need to export everything from Keycloak and import it into the new database yourself.
:::

## Connecting your developers

Your developers will use DX through the Moderne CLI. To get set up, each developer will need to install the CLI, point it at DX, and sign in.

### Installing the CLI from DX

DX comes with its own installer for the CLI. Developers can run it with this command:

```bash
curl -fsSL https://api.acme.moderne.direct/cli | bash
```

### Pointing the CLI at DX

Next, each developer will need to tell the CLI where DX is and then sign in:

```bash
mod config moderne edit https://acme.moderne.direct
mod login
```

When a developer signs in, the CLI will also download the recipes that are installed in DX. If you install more recipes in DX later on, developers can get them by running `mod config recipes moderne sync`.

:::note
The CLI already trusts the certificate that comes with a `moderne.direct` host name. If you [serve DX under your own host name](./configuring-dns-for-dx.md#trusting-a-private-certificate-authority) with a certificate from a private certificate authority (CA), each developer will need to add that CA to the CLI with [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store).
:::

### Giving the CLI access to your LSTs

The CLI downloads LSTs straight from your artifact repository, not from DX. Because of that, each developer will need to give the CLI credentials for that repository. They'll only need to do this once, by following the steps for [team members who use a `repos-lock.csv` file](../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md#for-team-members-using-the-file).

### Running a recipe and sharing the changes

With all of that in place, a developer can sync an organization from DX, run a recipe on it, and push the changes back to DX as a changeset:

```bash
mod git sync moderne ~/acme --organization "Platform team" --with-sources
mod run ~/acme --recipe org.openrewrite.java.RemoveUnusedImports
mod git checkout ~/acme --changeset --name "Remove unused imports"
mod git apply ~/acme --last-recipe-run
mod git commit ~/acme -m "Remove unused imports"
mod git push ~/acme -m "Remove unused imports"
```

Each push will add to the changeset. Everyone who uses DX will then be able to review it in the UI.

### If you use repository access control

If you've turned on [user-level repository access control](./repository-access-control.md), each developer will also need to connect their source control management (SCM) account. They can do that by signing in to DX and going to **Settings** > **SCM connections**. Until they do, code search won't show them any repositories from that SCM.

## Moving DX to another machine

When you're ready to move DX from your laptop to a server, you'll need to copy three things over:

* Your `moderne.yml` file.
* Your `moderne.env` file.
* DX's permanent directory.

Then, on the server, update the managed route's `address` in your `moderne.yml` file. You can set it to the server's address, or you can remove it and [let DX pick](#letting-dx-pick-the-address).

DX will keep the same `moderne.direct` host name after the move. Its URL might change, though. `init` sets the port to `8443`. If you remove the `port` line on the server, DX will use port `443`, and its URL will no longer end in `:8443`. In that case:

* Your developers will need to point their CLIs at the new URL.
* If your `moderne.yml` file has an SCM OAuth app in it, you'll need to change that app's callback URL to the new URL.

You won't need to change anything in Keycloak. DX will update it with the new URL the next time it starts.

## Upgrading

To upgrade DX to a new version:

1. [Back up](#backing-up) DX's data.
2. Download the new version of the JAR, the same way you [downloaded DX the first time](../getting-started/installing-moderne-dx.md#downloading-moderne-dx).
3. Stop DX, replace the old JAR with the new one, and start DX again.

The first time you start a new version, DX will unpack it and remove the old version's files.

## Backing up

DX keeps everything it can't rebuild in its permanent directory. By default, that's the `data/permanent` folder next to your `moderne.yml` file. If you've set `moderne.storage.permanent-dir`, it's the folder you named there.

To back up DX, you'll need to copy the permanent directory, along with your `moderne.yml` and `moderne.env` files. Before you do, either stop DX or take a snapshot of the file system. Otherwise, you might copy files while DX is in the middle of changing them.

You won't need to back up the ephemeral directory (`data/ephemeral` by default). It only holds things DX can build again, such as the code search index.

:::warning
Keep your backup of the `moderne.env` file somewhere separate from your backup of the permanent directory. The `moderne.env` file holds your secrets. That can include the key DX uses to protect the SCM tokens in the `authorization` folder.
:::

### What's in the permanent directory

| Folder          | What it holds                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| `auth-n`        | Keycloak's users, roles, and identity provider settings. You won't have this folder if you keep them in PostgreSQL.   |
| `authorization` | Access tokens and the SCM accounts your users have connected.                                                         |
| `changeset`     | The changesets your developers have pushed.                                                                           |
| `reader`        | Working files that DX uses to serve changesets.                                                                       |
| `marketplace`   | The recipes and visualizations you've installed.                                                                      |
| `queues`        | Recipe installs that are waiting to run.                                                                              |
| `organization`  | Organizations that users have made for themselves.                                                                    |
| `atlas`         | The metrics and logs shown on the status page.                                                                        |
| `lsts-v3`       | V3 copies of any V2 LSTs. DX can make these again if they're lost.                                                    |
| `telemetry`     | CLI telemetry, unless you store it in a bucket or container.                                                          |
| `dx`            | DX's own files. These include the secrets it generated, its log files, and its managed route's host name, certificate, and private key. |

## Troubleshooting

When something goes wrong, start by running `doctor`:

```bash
java -jar moderne-dx.jar doctor
```

`doctor` will check your setup and tell you how to fix the problems it finds. If DX is running, it will also check that each of the four host names works.

To see which of DX's services are up, you can run `status`:

```bash
java -jar moderne-dx.jar status
```

The table below covers the problems you're most likely to run into:

| What you see                                                             | What to do                                                                                                                                                                                                                                                                                                                              |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `doctor` says the host names don't resolve.                              | If CGP only just gave your DX its host names, wait up to 15 minutes. If they still don't resolve, your DNS server may be dropping answers that point at a private address. Have your DNS server answer for the four host names, or add the line `doctor` prints to your hosts file. If you use your own host name, both it and `*.` in front of it need DNS records. |
| `doctor` says a port is taken.                                           | Stop whatever is using that port, or move the DX service to a different port with `moderne.dx.ports`. `doctor` will tell you which setting to change.                                                                                                                                                                                  |
| `start` says it could not get a host name or a TLS certificate from CGP. | Check that the machine can reach `api.codegenomeproject.org` over HTTPS. Also check that the route's `token` is the CGP token Moderne gave you for DX.                                                                                                                                                                                 |
| `doctor` says the certificate doesn't cover a host name.                 | If you use your own certificate, you'll need one that covers both your host name and `*.` in front of it (such as `moderne.acme.com` and `*.moderne.acme.com`).                                                                                                                                                                         |
| The CLI fails with a PKIX error.                                         | Your certificate is likely from a private CA that the CLI doesn't trust yet. Add the CA to the CLI with `mod config http trust-store`.                                                                                                                                                                                                 |
| Signing in shows `An error occurred. Please sign in again.`              | If your certificate is from a private CA, DX's UI doesn't trust it yet. Add `NODE_EXTRA_CA_CERTS=<path to your CA's PEM file>` to your `moderne.env` file and restart DX.                                                                                                                                                               |
| Code search shows a user no repositories from an SCM.                    | Have the user connect their SCM account under **Settings** > **SCM connections**.                                                                                                                                                                                                                                                       |
| A repository with a V2 LST is missing from code search.                  | DX couldn't convert that LST to V3. The `repository-converter` log will say why. LSTs for Python, Go, and .NET can only be converted if those tools are installed on the machine.                                                                                                                                                      |
| The marketplace has no recipes.                                          | Sign in as an administrator, open the **Deploy** page, and click **Load recipes**. If that fails, run `doctor` to check where DX is getting recipes from.                                                                                                                                                                              |

### The status page

DX has a status page at `https://status.acme.moderne.direct`. It shows metrics and logs from each of DX's services for the last two days. Anyone who can sign in to DX can open it.

### When a service runs out of memory

If one of DX's services runs out of memory, DX will restart it. It will also leave a heap dump in the ephemeral directory. The heap dump is named after the service (such as `code-search.hprof`).

To give that service more memory, set `moderne.dx.memory` in your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  dx:
    memory:
      code-search: 4g
```
