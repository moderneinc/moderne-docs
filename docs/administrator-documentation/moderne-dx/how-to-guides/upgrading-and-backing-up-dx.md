---
sidebar_label: Upgrading and backing up
description: How to upgrade Moderne DX to a new version, and what to back up.
---

# Upgrading and backing up Moderne DX

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
