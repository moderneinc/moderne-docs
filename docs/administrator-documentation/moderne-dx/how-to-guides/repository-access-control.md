---
sidebar_label: User-level repository access control
description: How to show each user only the repositories they can read in your SCM by configuring its OAuth app.
---

# User-level repository access control

By default, every user who signs in to Moderne DX can read every repository in its organizations. If you want to restrict who can see some of your repositories, you'll want to turn on user-level access control. With it, DX will only show each user the repositories they can already read in your source control management (SCM) system.

To make this work, you'll need to configure an OAuth app for your SCM in DX. Each user will then connect their SCM account in the DX UI once. DX will use that connection to check what they can read.

In this guide, we will walk you through what access control restricts, which repositories it applies to, and how to turn it on.

## What access control restricts

Before DX shows a user what's inside of a repository, it will check that they have read access to it. Here are the places where that check will limit what a user can see or do:

* Code search (and its SQL queries) will only show results from repositories the user can read.
* A changeset will only show its changes to users who can read the affected repository. This applies whether they open the changeset in the UI, download it, or read it through the Model Context Protocol (MCP).
* The CLI will only let a user fetch a repository from a changeset if they can read that repository. The same goes for pushing changes to it.

Keep in mind that access control doesn't hide the names of repositories. Every user will still be able to see which repositories each organization contains.

## Which repositories DX checks access for

DX will only check access for repositories that live in an SCM you've configured an OAuth app for in your `moderne.yml` file. Repositories on any other host will stay readable by everyone.

For example, let's say you only configure the OAuth app for your GitHub Enterprise server. The public github.com repositories that DX starts with will stay open to every user.

## Turning on access control

The first thing you'll need to do is create an OAuth app in your SCM. When you create it, set its callback URL to DX's public URL (e.g., `https://acme.moderne.direct:8443`).

The steps for creating this app are the same as they are for the Moderne Connector, so you can follow the guide for your SCM below. One difference to be aware of is that those guides grant write permissions (so that people can commit from the Platform UI). DX only needs read permissions.

* [GitHub](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-github.md)
* [GitLab](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-gitlab.md)
* [Bitbucket Data Center](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-to-connector.md)
* [Bitbucket Cloud](../../moderne-platform/how-to-guides/connector-configuration/configure-bitbucket-cloud-to-connector.md)
* [Azure DevOps](../../moderne-platform/how-to-guides/connector-configuration/configure-a-connector-with-azure-devops-services.md)

Once you've created the app, add it to your `moderne.yml` file. You'll also need to include the `scm-token-key` setting. DX uses this key to encrypt each user's SCM token on disk. You don't need to come up with a key yourself. `init` already wrote one to your `moderne.env` file as `SCM_TOKEN_KEY`:

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

Next, add the client secret for your OAuth app to your `moderne.env` file:

```bash title="moderne.env"
GITHUB_OAUTH_SECRET=…
```

Once that's done, restart DX so the change takes effect.

From there, each user will need to connect their SCM account in DX by going to **Settings** > **SCM connections**. Until they do, code search won't show them any repositories from that SCM.

If a user later loses access to a repository in your SCM, they'll lose access to it in DX within a day.

## Settings for each SCM

DX only asks each SCM for read access. The table below shows the settings each SCM needs and the access DX will ask for:

| Setting                               | One entry per | OAuth credentials                                           | Access DX asks for                 |
|---------------------------------------|---------------|-------------------------------------------------------------|------------------------------------|
| `moderne.scm.github`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    | `repo read:org`                    |
| `moderne.scm.gitlab`                  | Server        | `oauth.client-id`, `oauth.client-secret`                    | `read_api read_user profile email` |
| `moderne.scm.bitbucket-datacenter`    | Server        | `oauth.key`, `oauth.secret`                                 | `REPO_READ PUBLIC_REPOS`           |
| `moderne.scm.bitbucket-cloud`         | Not a list    | `oauth.key`, `oauth.secret`                                 | `repository`                       |
| `moderne.scm.azure-devops`            | Organization  | `oauth.client-id`, `oauth.client-secret`, `oauth.tenant-id` | What your app registration grants  |

There are a few more things to know about these settings:

* GitHub, GitLab, and Bitbucket Data Center entries also need the server's `uri`.
* If your Bitbucket Data Center server uses a self-signed certificate, you can add `skip-ssl: true` to its entry.
* DX asks GitHub for the `repo` scope because GitHub's OAuth apps don't have a read-only scope for private repositories.

You'll also need the SCM token key setting, which applies no matter which SCM you use:

| Setting                                | Default                           | Description                                                                                  |
|----------------------------------------|-----------------------------------|----------------------------------------------------------------------------------------------|
| `moderne.authorization.scm-token-key`  | A new key each time DX starts     | A base64 AES key of 32 bytes that encrypts users' SCM tokens on disk. Without one, users will need to connect their SCM accounts again after every restart. `init` writes one to `moderne.env`. |

## On the Moderne Platform

Access control works the same way on the Moderne Platform. There, you'll configure each SCM's OAuth app in your Moderne Connector's configuration, using the same `moderne.scm` settings. The Connector requires an OAuth app for every SCM you configure in it. Just like in DX, repositories on a host you haven't configured will be readable by every user.

On the Platform, access control also protects the LSTs that the CLI downloads through Moderne, as well as the changelog of each pull request that Moderne opened.
