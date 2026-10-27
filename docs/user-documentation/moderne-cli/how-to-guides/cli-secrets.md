---
sidebar_label: Storing CLI secrets
description: How the Moderne CLI keeps tokens and passwords out of moderne.yml, and how to choose where they are stored.
---

# Storing CLI secrets outside moderne.yml

When you set up the CLI, you'll need a variety of secrets such as a tenant token, a license key, and passwords to your artifact repositories. If those were stored in plain text in your `moderne.yml` file, any coding agent or tool that reads it to see how the CLI is set up could read them too.

To keep that from happening, staring in CLI 4.10.0, the CLI will automatically store all of these secrets in your OS keychain or in a separate secrets file. Then, it will update the `moderne.yml` file and leave placeholders behind.

In this guide, we'll walk you through what those placeholders look like, where the CLI stores your secrets, and how to change that.

## How secrets appear in moderne.yml

Each secret in `moderne.yml` is written as a `${secret:<name>}` placeholder:

```yaml
tenant:
  host: https://app.moderne.io
  authorization: ${secret:tenant.authorization}
recipes:
  artifacts:
    maven:
      - url: https://artifactory.acme.com/recipes
        authorization: ${secret:recipes.artifacts.maven.0.authorization}
```

The CLI treats the following values as secrets:

* The tenant token and the license key.
* The HTTP proxy password.
* The trust store and key store passwords.
* The authorization, password, and JFrog API token of an artifact repository.
* The connection string and SAS token of an Azure Blob Storage location.

You don't need to do anything to convert an existing configuration. The first time CLI 4.10.0 or later reads or writes your configuration, it moves every secret in `moderne.yml` to the secret store.

:::note
If the CLI can't move a secret, for example because `moderne.yml` is read-only or the keychain is locked, the secret stays in the file and your commands keep working. Run `mod config secrets store edit` to try again and see why the move failed.
:::

If a placeholder names a secret that isn't in the store, the command fails with an error that names the file and the missing secret.

## Choosing where secrets are stored

The default store depends on your operating system:

| Operating system | Default store                                                                          |
|------------------|----------------------------------------------------------------------------------------|
| macOS            | The macOS keychain                                                                     |
| Windows          | Windows Credential Manager                                                             |
| Linux            | A `secrets.properties` file beside `moderne.yml` (`~/.moderne/cli/secrets.properties`) |

Only your user can read the `secrets.properties` file.

To see where your secrets are stored, run:

```bash
mod config secrets store show
```

To change the store, pass either `keychain` or `file`. The CLI moves every secret to the new store:

```bash
mod config secrets store edit keychain
```

On a Linux desktop, `keychain` stores secrets in the Secret Service through `secret-tool`.

To go back to the default store for your operating system, run:

```bash
mod config secrets store delete
```

You can also set the store with the `MOD_SECRETS_STORE` environment variable, which takes precedence over the configured store.

## Using secrets in repository configuration

A repository's `.moderne/moderne.yml` file always keeps its secrets in `.moderne/secrets.properties`. That file is never committed, because the CLI excludes the `.moderne` directory from Git.

This lets you commit a [shared `.moderne/moderne.yml` file](./layer-config-cli.md#local-configuration-shared) that contains placeholders, while each developer adds the values to their own `.moderne/secrets.properties` file:

```properties
recipes.artifacts.maven.0.authorization=<your-credential>
```

You can also write a placeholder by hand in any property, not only in the ones the CLI treats as secrets.
