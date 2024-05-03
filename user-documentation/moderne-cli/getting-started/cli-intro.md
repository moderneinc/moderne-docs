# Getting started with the Moderne CLI

The Moderne CLI is a command line tool that allows you to build [Lossless Semantic Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts, publish them to an artifact repository of your choosing, and run recipes from your local machine.

To ensure you can use the Moderne CLI successfully, in this guide, we will:

* [Explain how to install the Moderne CLI](cli-intro.md#installation)
* [Walk you through configuring the CLI](cli-intro.md#configuring-the-cli)
* [Give you an exercise to follow along with if you want to jump into a real-world example](cli-intro.md#cli-exercise)
* [Provide more details for each command in case you want to learn more](cli-intro.md#commands)

## Installation

To install the Moderne CLI please:

1. Go to the [Moderne platform](https://app.moderne.io/) and sign in.
2. Click on help in the bottom left-hand corner and select the version of the CLI you want to download. Then select the way you'd like to install it:

![](../../../.gitbook/assets/cli-download.gif)

3. Regardless of how you downloaded the Moderne CLI, you'll need to save it somewhere that your terminal can access. This could involve updating your `PATH` to point to a specific location or this could involve putting it in a directory that's already on your `PATH` such as a `/usr/bin` directory.

<details>

<summary>Configuring the CLI mod command for Windows users using a JAR file:</summary>

If you use Git Bash and have a `.bashrc` file, you can add a function to it along the lines of:

```bash
mod() {
  "java -jar /path/to/mod.jar" "$@"
}
```

If you use PowerShell, you can use the [Set-Alias command](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7.4) within a [profile script](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about\_profiles?view=powershell-7.4\&viewFallbackFrom=powershell-7).

</details>

4. Ensure you can run the Moderne CLI by typing `mod`. If everything is set up correctly, you should see a list of commands:

<details>

<summary>mod command results</summary>

```bash
➜  moderne-cli git:(main) mod

Moderne CLI 3.3.1

Usage:

mod [-h] [--version] [COMMAND]

Description:

Automated code remediation.

Options:

  -h, --help      Display this help message.
      --version   Display version info.
Commands:

  build                Generates LST artifacts for one or more repositories.
  clean                Clean build and run artifacts produced by the CLI.
  config               Global bacon options that are required by some CLI
                         commands.
  exec                 Execute an arbitrary shell command recursively on
                         selected repository roots.
  git                  Multi-repository git operations.
  log                  Manages a log aggregate.
  list                 Lists the repositories that can be built and published.
  monitor              (INCUBATING) Launches an HTTP server used to monitor the
                         CLI.
  publish              Publishes the LST artifacts for one or more projects.
  run                  Runs an OpenRewrite recipe locally on pre-built LSTS.
  run-history          Get information about the most recent recipe runs.
  study                Produces studies from OpenRewrite recipe data tables
                         locally.
  generate-completion  Generate bash/zsh completion script for mod.

MOD SUCCEEDED in (0.01s)
```

</details>

### (Optional) Set up auto-completion in your terminal (Unix terminals only)

The Moderne CLI offers a command which generates a completion script that can be used to set up auto-completion in your terminal. After initializing this script, you can type `mod config` and press tab and then your terminal will offer suggestions for the sub-commands or parameters:

![](../../../.gitbook/assets/cli-auto-complete.png)

To configure this for the terminal you're using please enter the following command in your terminal:

```shell
source <(mod generate-completion)
```

Or, if you want to configure auto-completion so that it works for _every_ terminal instance you make, please update your `~/.zshrc` or `~/.bashrc` file and add this command to the bottom of it:

```shell
# The next line enables shell command completion for mod
source <(mod generate-completion)
```

## Configuring the CLI

Before you can run most commands, you'll need to configure the CLI. Let's walk through all the steps you may want to do.

### Create an access token and give it to the CLI

The first step in configuring the CLI is connecting it to Moderne. This allows you to easily sync the recipe catalog from Moderne to your local machine, and it will also allow you to download LSTs that have already been built to save time and compute power. To connect to Moderne, you'll need to create an access token:

Go to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token), enter a human-readable name for the token (e.g., cli-token), and then press `generate`.

![](/.gitbook/assets/token-create.png)

Once created, copy the token and use it in the following command:

```shell
mod config moderne edit --token mat-YOUR_TOKEN_HERE https://app.moderne.io
```

If you have a private tenant, you'll want to replace `https://app.moderne.io` with the link to your Moderne UI.

### Install recipes

With the Moderne connection established, you can install recipes so you can run them locally by running the following command:

```shell
mod config recipes moderne sync
```

This will grab all of the recipes from the tenant you specified in `mod config` and download them to your machine so you can use the CLI to run them on your repositories.

If you want to install a specific recipe rather than all of the recipes, you can also do so by using the following command:

```shell
mod config recipes moderne install RECIPE_SEARCH_TERM
```

If you have private recipe artifacts and want to point the CLI to them, please run the [mod config recipe artifacts command](https://docs.moderne.io/user-documentation/moderne-cli/cli-reference#mod-config-recipes-artifacts):

```shell
mod config recipes artifacts [artifactory|maven] edit
```

You can install specific recipe artifacts to your local CLI recipe catalog by the groupId, artifactId and version:

```shell
mod config recipes jar install com.yourorg:rewrite-recipe-starter:latest.integration 
```

Or make local declarative yaml recipes available to the CLI through:

```shell
mod config recipes yaml install /path/to/your/recipe.yaml
```

### (Optional) Configure artifact publishing and downloading

If you want to publish artifacts from the CLI or download LSTs from your artifact repository when running commands, you'll need to run one of the following commands depending on where your LST artifacts live:

{% tabs %}
{% tab title="JFrog Artifactory" %}
{% code overflow="wrap" %}
```shell
mod config lsts artifacts artifactory edit ${REPOSITORY_URL} --user=${ARTIFACTS_USER} --password=${ARTIFACTS_PWD} ${ARTIFACT_REPOSITORY_URL}
```
{% endcode %}
{% endtab %}

{% tab title="Other artifact repositories" %}
_Such as SonaType Nexus_

{% code overflow="wrap" %}
```shell
mod config lsts artifacts maven edit ${REPOSITORY_URL} --user=${ARTIFACTS_USER} --password=${ARTIFACTS_PWD} ${ARTIFACT_REPOSITORY_URL}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### (Optional) Configure a license key

If you are wanting to run the CLI against **private repositories** you will need to [configure a license](/user-documentation/moderne-cli/getting-started/moderne-cli-license.md).

```shell
mod config license edit <license_key>
```

### (Optional) Configure a Maven settings file

If you have a Maven settings file that exists outside of your repositories, you can use the [following command](/user-documentation/moderne-cli/cli-reference.md#mod-config-build-maven-settings) to point the CLI to it. This ensures dependencies are resolved the same as builds: 

```shell
mod config build maven settings edit <path-to-settings.xml>
```

### (Optional) Configure recipe sources

If you have custom recipes you want to include in the CLI, you will need to [let the CLI know about them](/user-documentation/moderne-cli/cli-reference.md#mod-config-recipes-artifacts):

```shell
mod config recipes artifacts <artifactory|maven> edit <artifact-repository-url> --user <user> --password <password>
```

## Additional reading

With the CLI configured, you may find it useful to test it out. We'd recommend starting with the [Moderne CLI workshop](../../workshops/moderne-cli-exercise.md) or the [Moderne air-gapped CLI workshop](../../workshops/air-gapped-cli.md).

You may also find it useful to:

* [Learn more about how to configure the CLI to meet your needs](../how-to-guides/layer-config-cli.md)
* [Learn more about how JDK selection works and how you might configure other locations for JDKs](../how-to-guides/jdk-selection-and-config.md)
* [Learn how to use the Moderne IntelliJ plugin in combination with the CLI to test recipes](../how-to-guides/moderne-intellij-plugin.md)

## Commands

For more details about the Moderne CLI and each of the commands, check out the [Moderne CLI reference page](../cli-reference.md).

Below, we'll provide some context for the core commands.

* [Build](cli-intro.md#build)
* [Publish](cli-intro.md#publish)
* [Run](cli-intro.md#run)

### Build

The `build` command generates the LST artifacts for one or more projects. Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them - or - they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend [setting up a mass ingest job](/administrator-documentation/moderne-platform/how-to-guides/mass-ingest.md) to do this in a VM.

If the path provided to this command is not a Git repository, then this command will recursively look through all the directories on the path for Git repositories. You can specify `repository-*` options to filter this to your needs.

If the command executes successfully, the LST artifact for each project will be stored in a `.moderne/build` directory inside of each repository that is built. The generated artifact will look similar to: `spring-petclinic-20230919115358-ast.jar`.

If you've set up a connection with Moderne (by running the `mod config moderne` command), the `build` command will attempt to download LST artifacts from Moderne instead of building them locally. This will allow you to quickly run recipes and make changes. If you do not want the `build` command to look for LST artifacts in Moderne, you can add the `--no-download` flag to the command.

[Find all of the parameters for the build command here](../cli-reference.md#mod-build)

### Publish

The publish command allows you to manually publish LST artifacts for one or more projects. Once published to your artifact management tool, Moderne will be able to ingest them and they will, in turn, be usable inside of the SaaS.

This command is typically used for publishing LST artifacts from the [mass ingest job you create in a VM](../../../administrator-documentation/moderne-platform/how-to-guides/mass-ingest.md).

You can also use this command for _debugging purposes_ if you want to do a one-off test of uploading an artifact somewhere.

You must have run `mod build` before you can run this command. You also must have set up an artifact repository connection via the `mod config lsts artifacts` command.

[Find all of the parameters for the publish command here](../cli-reference.md#mod-publish)

### Run

The `run` command allows you to run [OpenRewrite](https://docs.openrewrite.org/) recipes locally. Before you can run recipes, you'll need to [create a Moderne access token](../../moderne-platform/references/create-api-access-tokens.md) and configure it via the `mod config moderne` command. You'll also need to install recipes via the `mod config recipes` command. Lastly, you'll need to run `mod build` in the repository/repositories where you want to run recipes.

[Find all of the parameters for the run command here](../cli-reference.md#mod-run)

## Differences between the Moderne CLI and the OpenRewrite build plugins

The OpenRewrite build plugins are designed to run a _single recipe_ on a _single repository_ at a time. When you run a recipe using these plugins, a new LST is produced regardless of whether or not the code for that repository has changed. This LST is temporarily stored in memory and used by the recipe before being discarded at the end of the recipe run. For large projects, this can be problematic as the entire LST _must_ fit in memory for the recipe to work.

In contrast, the Moderne CLI is designed for scale. You can run recipes against multiple repositories at once and the LST does not need to fit into memory. This is because the Moderne CLI uses proprietary code to build the LST up in parts and then serializes/writes it to the disk (as part of the `mod build` command). Likewise, the `mod run` command will read this LST from the disk in pieces as it runs recipes rather than building the LST every time.

When running the Moderne CLI commands for the first time, you might notice that running a single recipe on a single repository is slower than the OpenRewrite build plugins. This is due to the fact that the OpenRewrite build plugins do not serialize the LST and write it to disk.

However, if you wanted to run more recipes against the same LST, you would see that the Moderne CLI drastically increases in speed compared to the OpenRewrite build plugins as the Moderne CLI can read the pre-built LST and execute recipes against it rather than having to build it again each time. Furthermore, if you wanted to, you could use the Moderne CLI to run a recipe against many repositories at once – which the OpenRewrite build plugins can't do.
