# How to update to the latest version of Moderne CLI

To update the CLI to a newer version, you will need to download the latest version and delete your old version.

If you have access to the [Moderne Platform](https://app.moderne.io/) or a private tenant, please download the latest version by following the instructions in our [getting started guide](../getting-started/cli-intro.md#step-1-download-the-cli).

If you don't have access to the Moderne Platform or a private tenant, please download the latest version by following the instructions in our [air-gapped environment guide](./air-gapped-cli-install.md#step-1-download-the-moderne-cli-jar).

Once downloaded, replace your old JAR with the new one and everything should continue working as expected. Note that the first time you run `mod` after a version update, it may take a little longer to respond.

## Updating the CLI with Homebrew

For Homebrew users, you can update the CLI by running the following commands:

```bash
brew update
brew upgrade mod
```

## Updating the CLI with Chocolatey

For Chocolatey users, you can upgrade the CLI by running the following command:

```bash
choco upgrade mod
```