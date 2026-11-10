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
3. Copy the `curl` command and run it to download DX.

The link needs no credential, so you can run the command on a server or share it with someone else. The link expires a day after you make it, and anyone who has it can download DX until then.

### Downloading with a CGP token

If you need a download that doesn't expire, such as in a script that installs or upgrades DX, use your CGP token instead. Each URL always serves the newest build of its kind:

```bash
# The newest release
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/moderne-dx.jar

# The newest snapshot
curl -fLO -u <cgp-user>:<cgp-token> https://artifacts.codegenomeproject.org/snapshot/moderne-dx.jar
```

## Initializing Moderne DX

`init` creates DX's two configuration files, `moderne.yml` and `moderne.env`, in the current directory.

:::tip
If you've already given the Moderne CLI on this machine your license key and CGP credentials, with `mod config license edit` and `mod config recipes code-genome-project edit`, `init` sets DX up to use them. You can then skip [Configuring Moderne DX](#configuring-moderne-dx). A license the CLI leases from a Moderne tenant doesn't count.

If the CLI also publishes LSTs to a Maven or Artifactory repository, `init` points DX at that repository for the V3 copies it makes of V2 LSTs. That's optional. Without it, DX keeps them on its own disk.
:::

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

To create the files somewhere else, name a directory, such as `java -jar moderne-dx.jar init /etc/moderne-dx`. Then run DX's other commands from that directory, or pass them `--config /etc/moderne-dx/moderne.yml`.

## Configuring Moderne DX

Most of `moderne.yml` works as `init` writes it. To start DX, you only need to set three values: your license key, your CGP username, and your CGP token.

Put your CGP username in `moderne.yml`. Leave the other two as variables:

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

Then add the license key and token to `moderne.env`, below the `SCM_TOKEN_KEY` line that `init` wrote there:

```bash title="moderne.env"
MODERNE_LICENSE_KEY=…
CGP_TOKEN=…
```

:::warning
`doctor` doesn't check the license key. If `MODERNE_LICENSE_KEY` isn't set, `doctor` can pass and `start` will still fail.
:::

`SCM_TOKEN_KEY` is only used once you turn on [user-level repository access control](../how-to-guides/repository-access-control.md). Until then, every user can read every repository in DX.

DX starts on Netflix's public repositories. To index your own, add the `repos-lock.csv` file your [mass ingest](../how-to-guides/mass-ingest-dx.md) publishes. For everything else, see the [`moderne.yml` reference](../references/moderne-yml-reference.md).

## Starting Moderne DX

```bash
java -jar moderne-dx.jar doctor
java -jar moderne-dx.jar start
```

Once DX is up, `start` prints the password of the `moderne` user. Open `https://moderne.localhost:8443`, sign in as `moderne` and choose a new password. Install recipes from the marketplace.

## Connecting the CLI

```bash
mod config moderne edit https://moderne.localhost:8443
mod login
```

On macOS, the CLI trusts DX's certificate authority once `init` or `trust` has added it to your keychain. Elsewhere, [`mod config http trust-store`](../../../user-documentation/moderne-cli/cli-reference.md#mod-config-http-trust-store) gives the CLI DX's certificate authority.

## Next steps

* [Serve DX to your organization](../how-to-guides/running-moderne-dx.md#choosing-its-name) with a name and certificate of its own.
* [Connect your identity provider](../how-to-guides/running-moderne-dx.md#connecting-your-identity-provider).
* [Show each user only the repositories they can read](../how-to-guides/repository-access-control.md).
* [Connect your developers](../how-to-guides/running-moderne-dx.md#connecting-your-developers).
* [Upgrade](../how-to-guides/running-moderne-dx.md#upgrading) and [back up](../how-to-guides/running-moderne-dx.md#backing-up) DX.
* [Troubleshoot DX](../how-to-guides/running-moderne-dx.md#troubleshooting).
