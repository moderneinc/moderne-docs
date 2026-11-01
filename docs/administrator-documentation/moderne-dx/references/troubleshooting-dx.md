---
sidebar_label: Troubleshooting
description: What to do when Moderne DX's doctor, the browser, the CLI, code search, or the marketplace reports a problem.
---

# Troubleshooting Moderne DX

Start with `java -jar moderne-dx.jar doctor`. It checks the configuration, and once DX runs, each name through the proxy. `status` shows which services are up.

| What you see                                            | What to do                                                                                          |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `doctor` says a name does not resolve                   | On a laptop, add the line `doctor` prints to `/etc/hosts`. On a server, give `moderne.acme.com` and `*.moderne.acme.com` DNS records. |
| `doctor` says a port is taken                           | Stop what holds it, or move the service with `moderne.dx.ports`, as `doctor` says.                  |
| `doctor` says the certificate does not cover a name     | Get a certificate that covers `moderne.acme.com` and `*.moderne.acme.com`.                          |
| The browser warns about DX's certificate                | Run `java -jar moderne-dx.jar trust` where DX runs. Elsewhere, open DX's http port, such as `http://moderne.192-168-1-20.nip.io:8080`. |
| The CLI fails with a PKIX error                         | Have the CLI trust DX's certificate authority with `mod config http trust-store`.                    |
| Sign-in fails with a certificate from your own CA       | Add your CA's PEM file to `moderne.env` as `NODE_EXTRA_CA_CERTS`.                                    |
| Code search shows a user no repositories                | Have the user connect their SCM account under **Settings** > **SCM connections**.                   |
| A repository with a V2 LST is missing from code search  | DX's log says why its conversion failed. Python, Go, and .NET LSTs need those tools on the machine. |
| The marketplace has no recipes                          | Check where recipes come from with `doctor`. Then install them from the marketplace as an administrator. |

The status page at `https://status.moderne.acme.com` shows every service's metrics and logs from the last two days. Any user can open it.

A service that runs out of memory leaves a heap dump named after it in the ephemeral directory. DX then restarts the service. Give it more memory with `moderne.dx.memory`.
