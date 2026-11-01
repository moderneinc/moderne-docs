---
sidebar_label: User-level repository access control
description: How to show each user only the repositories they can read on your SCM, by naming its OAuth app.
---

# User-level repository access control

Every user who signs in to Moderne DX can read every repository in its organizations. To show each user only the repositories they can read on your source control management (SCM) system, name your SCM's OAuth app. Each user then connects their SCM account in the UI once. DX checks their read access with it.

In this guide, we will walk you through what access control guards, which repositories it covers, and how to turn it on.

## What access control guards

DX checks a user's read access before it shows them what is in a repository.

* Code search, and its SQL queries, show only the repositories the user can read.
* A changeset shows its changes to a repository only to users who can read it. This holds in the UI, in downloads, and through MCP.
* The CLI fetches a changeset's repository, and pushes changes to it, only for users who can read it.

Every user still sees which repositories each organization holds.

## Which repositories it covers

DX checks access only to repositories on an SCM whose OAuth app `moderne.yml` names. Every user can read the repositories on any other host. If you name the OAuth app of your GitHub Enterprise server, the public repositories that DX starts with on github.com stay open to everyone.

## Turning on access control

Create an OAuth app on your SCM. Its callback URL is DX's public URL, such as `https://moderne.localhost:8443`. You create it with the same steps as for the Moderne Connector. Those guides grant write permissions, for committing from the UI. DX needs read permissions alone.

* [GitHub](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-github.md)
* [GitLab](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-gitlab.md)
* [Bitbucket Data Center](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-to-connector.md)
* [Bitbucket Cloud](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-cloud-to-connector.md)
* [Azure DevOps](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-azure-devops-services.md)

Name the app in `moderne.yml`, with the SCM token key that `init` wrote to `moderne.env`:

```yaml title="moderne.yml"
moderne:
  scm:
    github:
      - uri: https://github.acme.com
        oauth:
          client-id: <client-id>
          client-secret: ${GITHUB_OAUTH_SECRET}
  authorization:
    scm-token-key: ${SCM_TOKEN_KEY}
```

Add the client secret to `moderne.env`, and restart DX:

```bash title="moderne.env"
GITHUB_OAUTH_SECRET=…
```

Each user then connects their SCM account under **Settings** > **SCM connections**. Until they do, code search shows them none of that SCM's repositories. A user who loses access on your SCM loses it in DX within a day.

## Settings for each SCM

DX asks each SCM for read access alone.

| Setting                               | One entry per | OAuth credentials                                           | Access DX asks for                 |
|---------------------------------------|---------------|-------------------------------------------------------------|------------------------------------|
| `moderne.scm.github`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    | `repo read:org`                    |
| `moderne.scm.gitlab`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    | `read_api read_user profile email` |
| `moderne.scm.bitbucket-datacenter`    | Server        | `oauth.key`, `oauth.secret`                                 | `REPO_READ PUBLIC_REPOS`           |
| `moderne.scm.bitbucket-cloud`         | Not a list    | `oauth.key`, `oauth.secret`                                 | `repository`                       |
| `moderne.scm.azure-devops`            | Organization  | `oauth.client-id`, `oauth.client-secret`, `oauth.tenant-id` | What your app registration grants  |

GitHub, GitLab, and Bitbucket Data Center entries also take the server's `uri`. A Bitbucket Data Center entry takes `skip-ssl: true` for a server with a self-signed certificate. GitHub's OAuth apps have no read-only scope for private repositories, which is why DX asks GitHub for `repo`.

| Setting                                | Default                | Description                                                                                  |
|----------------------------------------|------------------------|----------------------------------------------------------------------------------------------|
| `moderne.authorization.scm-token-key`  | One made at each start | A base64 AES key of 32 bytes that seals users' SCM tokens on disk. Without one, users connect their SCM accounts again after every restart. `init` writes one to `moderne.env`. |

## On the Moderne Platform

Access control works the same way on the Moderne Platform. Your Moderne Connector's configuration names each SCM's OAuth app at the same `moderne.scm` settings. The connector requires an OAuth app for each SCM it names. Every user can read the repositories on a host it does not name.

On the Platform, access control also guards the LSTs that the CLI downloads through Moderne, and the changelog of each pull request that Moderne opened.
