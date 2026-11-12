---
sidebar_label: Installing Moderne DX
description: How to install and start Moderne DX on your own machine, and connect the Moderne CLI to it.
---

# Installing Moderne DX

This guide will walk you through the steps to start DX on your own machine at: `https://moderne.localhost:8443`.

To serve it to your organization, please see [Running Moderne DX for your organization](../how-to-guides/running-moderne-dx.md).

## Prerequisites

* macOS on Apple silicon or Linux, with Java 25 and the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md).
* A license key and a [Code Genome Project](../../../user-documentation/recipes/accessing-the-code-genome-project.md) (CGP) token from Moderne.

## Downloading Moderne DX

1. Sign in to your [Code Genome Project account page](https://codegenomeproject.org/account) with your [CGP credentials](../../../user-documentation/recipes/accessing-the-code-genome-project.md#getting-credentials).
2. Under **Moderne DX**, click **Make a link** next to **Latest release** (or **Latest snapshot**).

   {/* Placeholder: retake once a DX release is published to CGP, so Latest release shows a version. */}
   ![The Moderne DX section of the Code Genome Project account page, with a Make a link button next to Latest release and Latest snapshot](./assets/cgp-dx-download-links.png)
3. Run the revealed `curl` command to download `moderne-dx.jar`.

The generated link in the command works without a credential, so you can run the command on a server or send it to someone else. It expires a day after you make it, but until then, anyone who has it can download Moderne DX.

### Downloading with a CGP token

If you need a download that doesn't expire for use in a script that installs or upgrades DX, use your CGP token instead with one of the following commands. Each URL always serves the newest build of its kind:

```bash
# The newest release
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/moderne-dx.jar

# The newest snapshot
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/snapshot/moderne-dx.jar
```

## Initializing Moderne DX

`init` creates DX's two configuration files, `moderne.yml` and `moderne.env`, in the current directory.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="dx-os" queryString="os">
<TabItem value="macos" label="macOS" default>

```bash
java -jar moderne-dx.jar init
```

Say yes when `init` offers to trust DX's certificate authority.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
java -jar moderne-dx.jar init
java -jar moderne-dx.jar trust
```

`trust` prints the commands that make your system and your browsers trust DX's certificate authority. Run the ones for your distribution and browser.

</TabItem>
</Tabs>

To create the files somewhere else, pass a directory, like `java -jar moderne-dx.jar init /etc/moderne-dx`. In this case, you will need to run further DX commands from that directory or otherwise specify the path in the `--config` parameter, like `--config /etc/moderne-dx/moderne.yml`.

## Configuring Moderne DX

Before DX will start, you need to set your license key, CGP username, and CGP token. The [`moderne.yml` reference](../references/moderne-yml-reference.md) lists every other option.

:::tip
If the Moderne CLI on this machine already has your license key and CGP credentials set, `init` uses them and you can skip [Configuring Moderne DX](#configuring-moderne-dx).
:::

You may set the values directly or use environment variables:

```yaml title="moderne.yml"
moderne:
  license:
    key: ${MODERNE_LICENSE_KEY}
  recipe:
    marketplace:
      repositories:
        code-genome-project:
          username: <cgp-user>
          token: ${CGP_TOKEN}
```

You can set environment variables in the process that runs DX, or set the values in `moderne.env`:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
```

Environment variables that are set at the process-level will override those set in `moderne.env`.

### Controlling SCM access

By default, every user can read every repository that DX ingests. [Turn on user-level repository access control](../how-to-guides/repository-access-control.md) to ensure that DX will show a repository only to people who have access to read it in your source control management (SCM) system.

Access control needs an `SCM_TOKEN_KEY`, which `init` already wrote to `moderne.env`. Keep that line in the file. Without it, users will have to reconnect their SCM accounts every time DX restarts.

### Adding your repositories

DX shows the repositories in a `repos-lock.csv` file. [Mass ingest](../how-to-guides/mass-ingest-dx.md) writes that file next to your `repos.csv` in the artifact repository it publishes LSTs to. Until you add your own, DX shows Netflix's public repositories from Moderne's public mass ingest as an example.

To customize your repository and organization list, add the URI and credentials under `moderne.organization.sources.http` in `moderne.yml`, and remove the default `organizations: [Netflix]` line:

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      http:
        - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
          username: moderne
          password: ${INGEST_PASSWORD}
```

:::note
For the `username` field, be sure to specify a user that has access to read both the file and the LST artifacts listed. In the example above, you would also need to add `INGEST_PASSWORD` as an environment variable or as a line in `moderne.env`.
:::

A source can also [keep only some of the file's organizations, or read a file on DX's machine instead of over HTTP](../references/moderne-yml-reference.md#organization-sources).

### Choosing where DX keeps V3 LSTs

If your mass ingest is configured to publish V3 LSTs, add `lst-version: 3` to the organization source in `moderne.yml`:

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      http:
        - uri: https://artifactory.acme.com/artifactory/moderne-ingest/repos-lock.csv
          lst-version: 3
```

With this setting, DX uses the LSTs without converting them, and you can skip the rest of this section.

If you are still ingesting V2 LSTs, DX makes a V3 copy of each V2 LST that is published, and keeps it under `data/permanent` by default. To keep the copies in a Maven or Artifactory repository instead:

```yaml title="moderne.yml"
moderne:
  repository:
    converter:
      lsts:
        artifacts:
          maven:
            - url: https://artifactory.acme.com/artifactory/moderne-lsts
              username: moderne
              password: ${LST_PUBLISH_PASSWORD}
```

## Starting Moderne DX



The `doctor` command will check your configuration and report whether it looks okay or needs to be corrected. If everything looks good, you can start DX with the `start` command:

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

The first time DX starts, it prints the initial password for the `moderne` user. DX also saves it in `data/permanent/dx/secrets/initial-user-password`. Open `https://moderne.localhost:8443`, sign in as `moderne`, and set a new password.

### Loading recipes

Initially, DX starts without any recipes in its marketplace. To install a default set of OpenRewrite and Moderne recipe modules from CGP, click **Deploy** in the left menu, then click **Load recipes**. (The button only shows when no recipes are installed.)

To add other recipes, such as your own module or any [module CGP publishes](https://codegenomeproject.org/recipes?view=modules), click **Add** on the same page. See [Importing external recipes](../../moderne-platform/how-to-guides/importing-external-recipes.md) for more details.

## Connecting the CLI

```bash
mod config moderne edit https://moderne.localhost:8443
mod login
```

After you sign in, `mod login` syncs the local CLI's recipe marketplace with the one in DX. If the machine running the CLI already has recipes installed, the CLI asks before replacing them. When you answer no, you keep your current recipes and stay logged in. You can switch to DX's recipes later with `mod config recipes moderne sync`.

The CLI must trust DX's certificate authority before it can sign in. On macOS, `mod config http trust-store edit system` makes the CLI use the keychain where `init` or `trust` added it. To set a different location, use [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store).

## Next steps

* [Serve DX to your organization](../how-to-guides/running-moderne-dx.md#choosing-its-host-name) with a host name and certificate of its own.
* [Connect your identity provider](../how-to-guides/running-moderne-dx.md#connecting-your-identity-provider).
* [Show each user only the repositories they can read](../how-to-guides/repository-access-control.md).
* [Connect your developers](../how-to-guides/running-moderne-dx.md#connecting-your-developers).
* [Upgrade](../how-to-guides/running-moderne-dx.md#upgrading) and [back up](../how-to-guides/running-moderne-dx.md#backing-up) DX.
* [Find DX's files](../how-to-guides/running-moderne-dx.md#where-dx-keeps-its-files) and [read its logs](../how-to-guides/running-moderne-dx.md#reading-dxs-logs).
* [Troubleshoot DX](../how-to-guides/running-moderne-dx.md#troubleshooting).
