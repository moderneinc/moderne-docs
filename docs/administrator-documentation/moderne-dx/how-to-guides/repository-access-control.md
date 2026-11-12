---
sidebar_label: User-level repository access control
description: How to show each user only the repositories they can read on your SCM, by naming its OAuth app.
---

# User-level repository access control

By default, every user who signs in to Moderne DX can read every repository in its organizations. To show each user only the repositories they can read on your source control management (SCM) system, configure your SCM's OAuth app in `moderne.yml`. Each user then connects their SCM account in the UI once and DX checks their read access with it.

In this guide, we will walk you through what access control protects, which repositories it covers, and how to turn it on.

## What access control protects

DX checks a user's read access before it shows them what is in a repository.

* Code search, and its SQL queries, show only the repositories the user can read.
* A changeset shows its changes only to users who can read the affected repository. This applies whether they open the changeset in the UI, download it, or read it through MCP.
* The CLI fetches a changeset's repository and allows pushing changes to it only for users who have access to read it.

Every user can still see the full list of repositories each organization holds.

## Which repositories it covers

DX checks access only for SCMs that have an OAuth app configured in `moderne.yml`. Repositories on any other host stay readable by every user. For example, if you configure only the OAuth app of your GitHub Enterprise server, the public repositories that DX starts with on github.com stay open to everyone.

## Turning on access control

Create an OAuth app on your SCM with a callback URL of DX's public URL, such as `https://moderne.localhost:8443`. You create it with the same steps as for the [Moderne Connector](../../moderne-platform/how-to-guides/connector-configuration/connector-config.md). The only difference is that for the Moderne Connector, you grant write permissions for committing from the UI, but DX only needs read permissions.

* [GitHub](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-github.md)
* [GitLab](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-gitlab.md)
* [Bitbucket Data Center](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-to-connector.md)
* [Bitbucket Cloud](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-cloud-to-connector.md)
* [Azure DevOps](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-azure-devops-services.md)

Add the OAuth app to `moderne.yml`, along with an `scm-token-key`. DX uses that key to encrypt each user's SCM token on disk. You don't need to make one, because `init` already wrote it to `moderne.env` as `SCM_TOKEN_KEY`:

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

Each user then connects their SCM account under **Settings** > **SCM connections**. Until they do, code search won't return results for any repositories from that SCM.

## Settings for each SCM

| Setting                            | One entry per | Settings in each entry                                                                                   | Access DX asks for                                                                  |
|------------------------------------|---------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| `moderne.scm.github`               | Server        | `uri`, `oauth.client-id`, `oauth.client-secret`                                                          | `repo read:org`. GitHub has no read-only scope for private repositories.            |
| `moderne.scm.gitlab`               | Server        | `uri`, `oauth.client-id`, `oauth.client-secret`                                                          | `read_api read_user profile email`                                                  |
| `moderne.scm.bitbucket-datacenter` | Server        | `uri`, `oauth.key`, `oauth.secret`, and `skip-ssl: true` for a server with a self-signed certificate     | `REPO_READ PUBLIC_REPOS`                                                            |
| `moderne.scm.bitbucket-cloud`      | Not a list    | `oauth.key`, `oauth.secret`                                                                              | `repository`                                                                        |
| `moderne.scm.azure-devops`         | Organization  | `oauth.client-id`, `oauth.client-secret`, `oauth.tenant-id`                                              | What your app registration grants                                                   |

| Setting                                | Default                | Description                                                                                  |
|----------------------------------------|------------------------|----------------------------------------------------------------------------------------------|
| `moderne.authorization.scm-token-key`  | One made at each start | A base64 AES key of 32 bytes that encrypts users' SCM tokens on disk. Without one, users connect their SCM accounts again after every restart. `init` writes one to `moderne.env`. |
