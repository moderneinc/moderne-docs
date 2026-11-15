---
sidebar_label: Serving DX under your own name
description: How to serve Moderne DX under a name of your own, with your own certificate or behind a load balancer that ends TLS.
---

# Serving Moderne DX under your own name

By default, the Code Genome Project gives DX a name under `moderne.direct` and a certificate for it, as [installing Moderne DX](../getting-started/installing-moderne-dx.md) describes. To serve DX under a name of your own, such as `moderne.acme.com`, replace the `managed` route in `moderne.yml` with one of two others:

* [`custom-certificate`](#with-your-own-certificate): DX ends TLS with a certificate you give it.
* [`load-balanced`](#behind-a-load-balancer): a load balancer in front of DX ends TLS and forwards plain HTTP to it.

`moderne.dx.routes` names exactly one route.

## The four names

DX serves four names on one port, through a proxy inside it:

* The UI, at the public URL's own host, such as `moderne.acme.com`.
* The API, at `api.` before that host.
* Keycloak, where users sign in, at `login.` before that host.
* The status page, at `status.` before that host.

Give `moderne.acme.com` and `*.moderne.acme.com` DNS records. They point at the machine DX runs on for a `custom-certificate` route, and at the load balancer for a `load-balanced` one. Every public URL is `https`.

## With your own certificate

```yaml title="moderne.yml"
moderne:
  dx:
    routes:
      custom-certificate:
        public-url: https://moderne.acme.com
        certificate: /etc/moderne-dx/tls.crt
        private-key: /etc/moderne-dx/tls.key
```

The certificate must cover all four names, such as `moderne.acme.com` and `*.moderne.acme.com`. Both files are PEM. Put the certificate first in its file, then the certificates of its chain.

DX listens on the public URL's port, `443` unless the URL names another. It listens on every address of the machine, or on the loopback address alone for a name under `localhost`. On Linux, a port below 1024 takes the [systemd unit](./running-moderne-dx.md#running-dx-as-a-service), which allows it.

`doctor` checks that the certificate covers all four names and that its key matches. It warns a month before the certificate expires. DX reads the certificate when it starts, so restart DX after you renew it.

### A certificate from a private certificate authority

If the certificate comes from a private certificate authority (CA), DX's UI needs to trust that CA too. Add the CA's PEM file to `moderne.env`:

```bash title="moderne.env"
NODE_EXTRA_CA_CERTS=/etc/moderne-dx/ca.pem
```

Developers' CLIs need to trust the CA as well. Unless it is already in their Java trust store, they add it with [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store).

## Behind a load balancer

If a load balancer ends TLS in front of DX, name the port it forwards to:

```yaml title="moderne.yml"
moderne:
  dx:
    routes:
      load-balanced:
        public-url: https://moderne.acme.com
        http-port: 8080
```

The load balancer ends TLS with a certificate for all four names. It forwards all four names to `http-port` as plain HTTP, with each request's `Host` header unchanged. DX serves plain HTTP on that port alone, and listens on every address of the machine.

## Changing the route

You can change the route at any time, such as when you move DX from a `moderne.direct` name to one of your own. Restart DX after you change it, and DX updates Keycloak at that start. Users then sign in again, and developers point their CLIs at the new URL. If `moderne.yml` names an SCM's OAuth app, set the app's callback URL to the new public URL too.

## Settings that routes replaced

Earlier versions of DX named their URLs and certificate with other settings under `moderne.dx`: `public-url`, `api-url`, `login-url`, `status-url`, `tls`, `ports.proxy`, `ports.proxy-http`, and `bind-address`. DX no longer reads them, and no longer has a certificate authority of its own. A start that finds one of them stops, and prints the route that does what it did.
