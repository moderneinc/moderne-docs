# Getting started with the Moderne CLI

The Moderne CLI is a command line tool that simplifies the process of building and publishing [Lossless Semantic Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts to your artifact repository. Instead of having to manually set up each repository individually, you can use the CLI to configure thousands of repositories at once.

## Installation

There are two ways to obtain the Moderne CLI: via the SaaS (**recommended**) or via a `curl` command.

{% tabs %}
{% tab title="SaaS" %}
1. Go to the [Moderne SaaS](https://public.moderne.io/) and sign in.
2.  Click on the `?` in the top right corner and then select `Moderne CLI` from the `Tools` menu:

    ![](.gitbook/assets/cli-download.png)
3.  You can then either press the `Download Latest` button or you can install it directly through the command line by copying the `curl` command at the bottom of the modal:

    ![](.gitbook/assets/cli-download2.png)
{% endtab %}

{% tab title="curl command" %}
From your command line, please run the command that corresponds to the OS you're using.

_If you want to download a different version of the CLI, replace the **two** versions (`v#.#.#`) in the curl request with the_ [_CLI version_](https://github.com/moderneinc/moderne-cli/releases) _you want._

**Mac OS**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-macos-tar/v0.1.10/moderne-cli-macos-tar-v0.1.10 > mod.tar.gz

tar -zxvf mod.tar.gz
```

**Linux**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-linux-tar/v0.1.10/moderne-cli-linux-tar-v0.1.10 > mod.tar.gz

tar -zxvf mod.tar.gz
```

**Windows**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-windows/v0.1.10/moderne-cli-windows-v0.1.10 > mod
```

**JDK (8+)**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-zip/v0.1.10/moderne-cli-zip-v0.1.10 > moderne-cli.zip

unzip moderne-cli.zip
```
{% endtab %}
{% endtabs %}

## Commands

* [Build](cli-intro.md#build)
* [Publish](cli-intro.md#publish)
* [Connect Jenkins](cli-intro.md#connect-jenkins)
* [Connect GitHub](cli-intro.md#connect-github)
* [Run](cli-intro.md#run)

### Build

The `build` command allows you to manually create the LST artifacts with Group Artifact Version coordinates for a specific project. Once created, you can manually upload the artifacts to your artifact library so that Moderne can ingest them.

This command is typically used for _debugging purposes_. In general, you should favor setting up a [Jenkins](cli-intro.md#connect-jenkins) or [Github](cli-intro.md#connect-github) connection for building, publishing, and ingesting LST artifacts in bulk.

[Build man page](https://moderneinc.github.io/moderne-cli/mod-build.html)

### Publish

The publish command allows you to manually build and publish LST artifacts for a specific project. Once published to your artifact repository, Moderne will be able to ingest them and they will, in turn, be usable inside of the SaaS.

This command is typically used for _debugging purposes_. In general, you should favor setting up a [Jenkins](cli-intro.md#connect-jenkins) or [Github](connect-github/) connection for building, publishing, and ingesting LST artifacts in bulk.

This command will begin by executing the [build](cli-intro.md#build-command) command and, if that's successful, it will then attempt to upload the artifacts to the artifact repository you specified.

[Publish man page](https://moderneinc.github.io/moderne-cli/mod-publish.html)

### Connect Jenkins

The `connect jenkins` job allows you to create Jenkins Jobs in bulk. For each configured repository, a Jenkins Job will be made that builds and publishes LST artifacts to your artifact repository on a regular basis.

[Connect Jenkins man page](https://moderneinc.github.io/moderne-cli/mod-connect-jenkins.html)

### Connect GitHub

The `connect github` command will create GitHub workflows that build and publish LST artifacts to your artifact repository on a regular basis. A workflow can be created for ingesting a single repository (by specifying the `path` parameter) or workflows can be created for ingesting a mass number of repositories (by specifying the `fromCsv` parameter).

[Connect GitHub man page](https://moderneinc.github.io/moderne-cli/mod-connect-github.html)

### Run

The `run` command will allow you to run [OpenRewrite](https://docs.openrewrite.org/) recipes locally.

[Run man page](https://moderneinc.github.io/moderne-cli/mod-run.html)