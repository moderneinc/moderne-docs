---
sidebar_label: Serving Moderne DX
description: How to serve Moderne DX to your organization with a name, a certificate, and a systemd service, and connect your developers to it.
---

# Serving Moderne DX to your organization

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

## Connecting your developers

Developers point their Moderne CLI at DX. Before they do, each developer should sign in to the UI once and connect their SCM account under **Settings** > **SCM connections**. Code search shows a repository to a user only after they connect an account that can read it.

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

You can change the public URL at any time, such as when you move DX from a laptop to a server. Set your SCM OAuth app's callback URL to the new URL too. DX updates Keycloak at its next start. Users then sign in again. Developers point their CLIs at the new URL. A machine that trusts DX's own certificate authority keeps trusting it for a new name under `localhost`, `nip.io`, or `sslip.io`.
