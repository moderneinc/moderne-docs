# Getting started with the Moderne CLI

The Moderne CLI is a command line tool that allows you to build [Lossless Semantic Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts across many repositories, publish them to an artifact repository of your choosing, and run recipes against all of them from your local machine.

To ensure you can use the Moderne CLI successfully, in this guide, we will walk you through everything you need to get started – from installation, to configuration, to examples demonstrating how to use it.

## Assumptions

* You can access [app.moderne.io](https://app.moderne.io/marketplace) or a private Moderne tenant
* You can authenticate to Moderne via GitHub
* You are familiar with running terminal commands

## Installation and configuration

_If you are in an air-gapped environment, please follow the_ [_instructions for installing and configuring the CLI in an air-gapped environment_](../how-to-guides/air-gapped-cli-install.md) _instead._

### Step 1: Download the CLI

1. Go to the [Moderne Platform](https://app.moderne.io/) (or your private tenant) and sign in.
2. Click on `Help` in the bottom left-hand corner and select the version of the CLI you want to download (Stable or Staging).
3. Either press the download button for your appropriate OS, or select the installation method in the provided table. We recommend using HomeBrew or Chocolatey if you have access to either.

![](../../../.gitbook/assets/cli-download.gif)

4. If you chose to install the CLI without a package manager, you'll need to save it somewhere that your terminal can access. This could involve updating your `PATH` to point to a specific location – or this could involve putting it in a directory that's already on your `PATH` (such as a `/user/bin` directory).
    * Remember to refresh any open terminals if you modify the `PATH`.

### Step 2: (Optional - but recommended) Create an alias for the Moderne CLI JAR

While not required, you are **strongly encouraged** to set up an alias for running the CLI JAR. Below are some ways you might configure this depending on your OS and terminal:

{% tabs %}
{% tab title="Git Bash (Windows)" %}
Add the following function to your `.bashrc` file:

```bash
mod() {
    "java -jar /path/to/mod.jar" "$@"
}
```
{% endtab %}

{% tab title="Bash or Zsh (Mac or Linux)" %}
Add the following to your `.bashrc` or `.zshrc` file:

```bash
alias mod=”java -jar /path/to/mod.jar” "$@"
```
{% endtab %}

{% tab title="Powershell" %}
Use the [Set-Alias command](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7.4) within a [profile script](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about\_profiles?view=powershell-7.4\&viewFallbackFrom=powershell-7).
{% endtab %}
{% endtabs %}

If everything was configured correctly, you should be able to type `mod` into your terminal and see a list of commands:

<details>

<summary>mod command results</summary>

```bash
➜ mod

Moderne CLI 3.10.11

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
  config               Global configuration options that are required by some
                         CLI commands.
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

### Step 3: (Optional) Set up auto-completion in your terminal (Unix terminals only)

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

### Step 4: Connect the CLI to Moderne

Connecting the CLI to Moderne is necessary to:

* Quickly sync the recipe catalog from Moderne to your local machine
* Receive organizational information, so you can clone/build/run groups of repositories more easily

To set up this connection, you'll first need to create an access token for the CLI to use. Follow the below instructions to obtain a token and provide it to the CLI:

1. Navigate to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token)
   * If you're in a private tenant, replace `app.moderne.io` with your tenant URL
2. Enter a human-readable name for the token (e.g., cli-token)
3. Press `Generate`
4. Copy the `install on your workstation` command and paste it into your command line. This command should look something like:

```bash
mod config moderne edit https://app.moderne.io --token mat-YOUR_TOKEN_HERE
```

5. If everything worked, you should see a `MOD SUCCEEDED` message

![](../../../.gitbook/assets/create-access-token.gif)

### Step 5: Install recipes

With the Moderne connection established, you can download recipes to your local machine by running the following command:

```shell
mod config recipes moderne sync
```

This will grab _all_ of the recipes from the tenant you specified in `mod config`.

If you want to install a specific recipe rather than all of the recipes, you can also do so by using the following command:

```shell
mod config recipes moderne install RECIPE_SEARCH_TERM
```

If you have private recipe artifacts and want to point the CLI to them, please run the [mod config recipe artifacts command](https://docs.moderne.io/user-documentation/moderne-cli/cli-reference#mod-config-recipes-artifacts):

```shell
mod config recipes artifacts [artifactory|maven] edit
```

You can also install specific recipe artifacts to your local CLI recipe catalog by utilizing a groupId, artifactId and version:

```shell
mod config recipes jar install com.yourorg:rewrite-recipe-starter:latest.integration 
```

Or you can make local declarative YAML recipes available to the CLI through:

```shell
mod config recipes yaml install /path/to/your/recipe.yaml
```

### Step 6: Configure a license

If you are wanting to run the CLI against **private repositories** you will need to [configure a license](moderne-cli-license.md). Please follow [the instructions in the Moderne CLI license doc](moderne-cli-license.md#how-to-configure-the-cli-with-a-license-key) to set up your license.

### Step 7: (Optional) Configure artifact publishing and downloading

If you want to publish artifacts from the CLI or download LSTs from your artifact repository when running commands, you'll need to run one of the following commands depending on where your LST artifacts live:

{% tabs %}
{% tab title="JFrog Artifactory" %}
{% code overflow="wrap" %}
```bash
mod config lsts artifacts artifactory edit ${REPOSITORY_URL} --user=${ARTIFACTS_USER} --password=${ARTIFACTS_PWD} ${ARTIFACT_REPOSITORY_URL}
```
{% endcode %}
{% endtab %}

{% tab title="Other artifact repositories" %}
_Such as SonaType Nexus_

{% code overflow="wrap" %}
```bash
mod config lsts artifacts maven edit ${REPOSITORY_URL} --user=${ARTIFACTS_USER} --password=${ARTIFACTS_PWD} ${ARTIFACT_REPOSITORY_URL}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Step 8: (Optional) Configure a Maven settings file

If you have a Maven settings file that exists outside of your repositories, you can use the [following command](../cli-reference.md#mod-config-build-maven-settings) to point the CLI to it. This ensures dependencies are resolved the same as builds:

```shell
mod config build maven settings edit <path-to-settings.xml>
```

### Step 9: (Optional) Configure recipe sources

If you have custom recipes you want to include in the CLI, you will need to [let the CLI know about them](../cli-reference.md#mod-config-recipes-artifacts):

{% code overflow="wrap" %}
```shell
mod config recipes artifacts <artifactory|maven> edit <artifact-repository-url> --user <user> --password <password>
```
{% endcode %}

## Using the CLI

With installation and configuration done, you're now ready to use the CLI. Let's walk through some things you might do with it. We recommend you follow along on your own machine to get a feel for how to use the CLI.

### Run recipes against many repositories at once

In this example, we will use the Moderne CLI to run the `DependencyVulnerabilityCheck` recipe against a group of open-source repositories.

1. From your terminal, create a directory to work in and `cd` into it:

```bash
mkdir -p $HOME/workshop
cd $HOME/workshop
```

2. For this exercise, we've prepared a list of open-source repositories from the `Netflix` GitHub organization. These repositories have been added to the Moderne Platform and put inside the `Netflix` organization. Clone these repositories by running the following command from inside your `workshop` directory:

```bash
mod git clone moderne . "Netflix" --metadata-only
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.10.11

> Listing repositories from Moderne

Moderne contains 54 repositories in Netflix.
Loaded all 54 repositories (0.6s)

> Cloning repositories

Clone output will be written to /Users/mikesol/workshop/./clone.log

> archaius@master
> astyanax@master
> awsobjectmapper@main
> bettertls@master
> blitz4j@master
> CassJMeter@master
> concurrency-limits@master
> curator@master
> denominator@master
> dgs-codegen@master
> dgs-examples-java@main
> dgs-examples-webflux@main
> dgs-framework@master
> dyno@master
> dyno-queues@dev
> dynomite-manager@dev
> eureka@master
> EVCache@master
> frigga@master
> genie@master
> governator@master
> gradle-template@master
> hollow@master
> hollow-reference-implementation@master
> Hystrix@master
> iceberg@master
> karyon@master
> mantis@master
> mantis-api@master
> mantis-connectors@master
> mantis-source-jobs@master
> metacat@master
> metaflow@master
> ndbench@master
> netflix-commons@master
> netflix-graph@master
> Nicobar@master
> photon@master
> PigPen@master
> pollyjs@master
> Prana@master
> Priam@3.x
> pytheas@master
> q@master
> Raigad@master
> ribbon@master
> runtime-health@master
> s3mper@master
> servo@master
> spectator@main
> suro@master
> Surus@master
> zeno@master
> zuul@master

Cloned 54 repositories (1m 20s)

MOD SUCCEEDED in (1m 21s)
```

</details>

3. Confirm that your repositories were cloned correctly by running the following command:

```bash
ls  .  # For Mac/Unix users
dir .  # For Windows users
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
CassJMeter                      clone.log                       governator                      netflix-graph
EVCache                         concurrency-limits              gradle-template                 photon
Hystrix                         curator                         hollow                          pollyjs
Nicobar                         denominator                     hollow-reference-implementation pytheas
PigPen                          dgs-codegen                     iceberg                         q
Prana                           dgs-examples-java               karyon                          ribbon
Priam                           dgs-examples-webflux            mantis                          runtime-health
Raigad                          dgs-framework                   mantis-api                      s3mper
Surus                           dyno                            mantis-connectors               servo
archaius                        dyno-queues                     mantis-source-jobs              spectator
astyanax                        dynomite-manager                metacat                         suro
awsobjectmapper                 eureka                          metaflow                        zeno
bettertls                       frigga                          ndbench                         zuul
blitz4j                         genie                           netflix-commons
```

</details>

{% hint style="info" %}
While these folders may appear empty if you `cd` into them, there's actually a hidden `.moderne` directory in each repository. This hidden directory is where LSTs will be downloaded to in the subsequent step.
{% endhint %}

4. Now that you have the repositories on your local machine, you'll need to build the LSTs for them so that you can run recipes against them. Fortunately, since all of these repositories have their LSTs published to the Moderne Platform, the build operation will download the LSTs without you having to build them locally. This will save you a ton of time!

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.10.11

> Selecting repositories

> Netflix/archaius@master
> Netflix/astyanax@master
> Netflix/awsobjectmapper@main
> Netflix/bettertls@master
> Netflix/blitz4j@master
> Netflix/CassJMeter@master
> Netflix/concurrency-limits@master
> Netflix/curator@master
> Netflix/denominator@master
> Netflix/dgs-codegen@master
> Netflix/dgs-examples-java@main
> Netflix/dgs-examples-webflux@main
> Netflix/dgs-framework@master
> Netflix/dyno@master
> Netflix/dyno-queues@dev
> Netflix/dynomite-manager@dev
> Netflix/eureka@master
> Netflix/EVCache@master
> Netflix/frigga@master
> Netflix/genie@master
> Netflix/governator@master
> Netflix/gradle-template@master
> Netflix/hollow@master
> Netflix/hollow-reference-implementation@master
> Netflix/Hystrix@master
> Netflix/iceberg@master
> Netflix/karyon@master
> Netflix/mantis@master
> Netflix/mantis-api@master
> Netflix/mantis-connectors@master
> Netflix/mantis-source-jobs@master
> Netflix/metacat@master
> Netflix/metaflow@master
> Netflix/ndbench@master
> Netflix/netflix-commons@master
> Netflix/netflix-graph@master
> Netflix/Nicobar@master
> Netflix/photon@master
> Netflix/PigPen@master
> Netflix/pollyjs@master
> Netflix/Prana@master
> Netflix/Priam@3.x
> Netflix/pytheas@master
> Netflix/q@master
> Netflix/Raigad@master
> Netflix/ribbon@master
> Netflix/runtime-health@master
> Netflix/s3mper@master
> Netflix/servo@master
> Netflix/spectator@main
> Netflix/suro@master
> Netflix/Surus@master
> Netflix/zeno@master
> Netflix/zuul@master
Selected 54 repositories (0.49s)

> Building LST(s)

> Netflix/archaius@master
    Build output will be written to /Users/mikesol/workshop/archaius/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/archaius/.moderne/build/20240625082828-dsbdq/archaius-20240625003846-ast.jar
    + Cleaned 0 older builds.
> Netflix/astyanax@master
    Build output will be written to /Users/mikesol/workshop/astyanax/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/astyanax/.moderne/build/20240625082828-dsbdq/astyanax-20240625004327-ast.jar
    + Cleaned 0 older builds.
> Netflix/awsobjectmapper@main
    Build output will be written to /Users/mikesol/workshop/awsobjectmapper/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/awsobjectmapper/.moderne/build/20240625082828-dsbdq/awsobjectmapper-20240625004544-ast.jar
    + Cleaned 0 older builds.
> Netflix/bettertls@master
    Build output will be written to /Users/mikesol/workshop/bettertls/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/bettertls/.moderne/build/20240625082828-dsbdq/bettertls-20240625004544-ast.jar
    + Cleaned 0 older builds.
> Netflix/blitz4j@master
    Build output will be written to /Users/mikesol/workshop/blitz4j/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/blitz4j/.moderne/build/20240625082828-dsbdq/blitz4j-20240625004650-ast.jar
    + Cleaned 0 older builds.
> Netflix/CassJMeter@master
    Build output will be written to /Users/mikesol/workshop/CassJMeter/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/CassJMeter/.moderne/build/20240625082828-dsbdq/CassJMeter-20240625004746-ast.jar
    + Cleaned 0 older builds.
> Netflix/concurrency-limits@master
    Build output will be written to /Users/mikesol/workshop/concurrency-limits/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    !  Failed to download the LST from Moderne. Proceeding to build the LST locally
    This repository was cloned with metadata only. It cannot be built.
    + Cleaned 0 older builds.
> Netflix/curator@master
    Build output will be written to /Users/mikesol/workshop/curator/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/curator/.moderne/build/20240625082828-dsbdq/curator-20240625004810-ast.jar
    + Cleaned 0 older builds.
> Netflix/denominator@master
    Build output will be written to /Users/mikesol/workshop/denominator/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/denominator/.moderne/build/20240625082828-dsbdq/denominator-20240625004811-ast.jar
    + Cleaned 0 older builds.
> Netflix/dgs-codegen@master
    Build output will be written to /Users/mikesol/workshop/dgs-codegen/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dgs-codegen/.moderne/build/20240625082828-dsbdq/dgs-codegen-20240625005409-ast.jar
    + Cleaned 0 older builds.
> Netflix/dgs-examples-java@main
    Build output will be written to /Users/mikesol/workshop/dgs-examples-java/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dgs-examples-java/.moderne/build/20240625082828-dsbdq/dgs-examples-java-20240625005623-ast.jar
    + Cleaned 0 older builds.
> Netflix/dgs-examples-webflux@main
    Build output will be written to /Users/mikesol/workshop/dgs-examples-webflux/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dgs-examples-webflux/.moderne/build/20240625082828-dsbdq/dgs-examples-webflux-20240624165322-ast.jar
    + Cleaned 0 older builds.
> Netflix/dgs-framework@master
    Build output will be written to /Users/mikesol/workshop/dgs-framework/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dgs-framework/.moderne/build/20240625082828-dsbdq/dgs-framework-20240624165323-ast.jar
    + Cleaned 0 older builds.
> Netflix/dyno@master
    Build output will be written to /Users/mikesol/workshop/dyno/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dyno/.moderne/build/20240625082828-dsbdq/dyno-20240625011651-ast.jar
    + Cleaned 0 older builds.
> Netflix/dyno-queues@dev
    Build output will be written to /Users/mikesol/workshop/dyno-queues/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dyno-queues/.moderne/build/20240625082828-dsbdq/dyno-queues-20240625011746-ast.jar
    + Cleaned 0 older builds.
> Netflix/dynomite-manager@dev
    Build output will be written to /Users/mikesol/workshop/dynomite-manager/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/dynomite-manager/.moderne/build/20240625082828-dsbdq/dynomite-manager-20240625011822-ast.jar
    + Cleaned 0 older builds.
> Netflix/eureka@master
    Build output will be written to /Users/mikesol/workshop/eureka/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/eureka/.moderne/build/20240625082828-dsbdq/eureka-20240625012115-ast.jar
    + Cleaned 0 older builds.
> Netflix/EVCache@master
    Build output will be written to /Users/mikesol/workshop/EVCache/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/EVCache/.moderne/build/20240625082828-dsbdq/EVCache-20240624165326-ast.jar
    + Cleaned 0 older builds.
> Netflix/frigga@master
    Build output will be written to /Users/mikesol/workshop/frigga/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/frigga/.moderne/build/20240625082828-dsbdq/frigga-20240625012229-ast.jar
    + Cleaned 0 older builds.
> Netflix/genie@master
    Build output will be written to /Users/mikesol/workshop/genie/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/genie/.moderne/build/20240625082828-dsbdq/genie-20240625013419-ast.jar
    + Cleaned 0 older builds.
> Netflix/governator@master
    Build output will be written to /Users/mikesol/workshop/governator/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/governator/.moderne/build/20240625082828-dsbdq/governator-20240625013629-ast.jar
    + Cleaned 0 older builds.
> Netflix/gradle-template@master
    Build output will be written to /Users/mikesol/workshop/gradle-template/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/gradle-template/.moderne/build/20240625082828-dsbdq/gradle-template-20240625013746-ast.jar
    + Cleaned 0 older builds.
> Netflix/hollow@master
    Build output will be written to /Users/mikesol/workshop/hollow/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/hollow/.moderne/build/20240625082828-dsbdq/hollow-20240625013857-ast.jar
    + Cleaned 0 older builds.
> Netflix/hollow-reference-implementation@master
    Build output will be written to /Users/mikesol/workshop/hollow-reference-implementation/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/hollow-reference-implementation/.moderne/build/20240625082828-dsbdq/hollow-reference-implementation-20240625013922-ast.jar
    + Cleaned 0 older builds.
> Netflix/Hystrix@master
    Build output will be written to /Users/mikesol/workshop/Hystrix/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Hystrix/.moderne/build/20240625082828-dsbdq/Hystrix-20240624165332-ast.jar
    + Cleaned 0 older builds.
> Netflix/iceberg@master
    Build output will be written to /Users/mikesol/workshop/iceberg/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/iceberg/.moderne/build/20240625082828-dsbdq/iceberg-20240625014227-ast.jar
    + Cleaned 0 older builds.
> Netflix/karyon@master
    Build output will be written to /Users/mikesol/workshop/karyon/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/karyon/.moderne/build/20240625082828-dsbdq/karyon-20240625014400-ast.jar
    + Cleaned 0 older builds.
> Netflix/mantis@master
    Build output will be written to /Users/mikesol/workshop/mantis/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/mantis/.moderne/build/20240625082828-dsbdq/mantis-20240624165336-ast.jar
    + Cleaned 0 older builds.
> Netflix/mantis-api@master
    Build output will be written to /Users/mikesol/workshop/mantis-api/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/mantis-api/.moderne/build/20240625082828-dsbdq/mantis-api-20240625014658-ast.jar
    + Cleaned 0 older builds.
> Netflix/mantis-connectors@master
    Build output will be written to /Users/mikesol/workshop/mantis-connectors/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/mantis-connectors/.moderne/build/20240625082828-dsbdq/mantis-connectors-20240624165336-ast.jar
    + Cleaned 0 older builds.
> Netflix/mantis-source-jobs@master
    Build output will be written to /Users/mikesol/workshop/mantis-source-jobs/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/mantis-source-jobs/.moderne/build/20240625082828-dsbdq/mantis-source-jobs-20240625015005-ast.jar
    + Cleaned 0 older builds.
> Netflix/metacat@master
    Build output will be written to /Users/mikesol/workshop/metacat/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/metacat/.moderne/build/20240625082828-dsbdq/metacat-20240625015953-ast.jar
    + Cleaned 0 older builds.
> Netflix/metaflow@master
    Build output will be written to /Users/mikesol/workshop/metaflow/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/metaflow/.moderne/build/20240625082828-dsbdq/metaflow-20240625015956-ast.jar
    + Cleaned 0 older builds.
> Netflix/ndbench@master
    Build output will be written to /Users/mikesol/workshop/ndbench/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/ndbench/.moderne/build/20240625082828-dsbdq/ndbench-20240625020440-ast.jar
    + Cleaned 0 older builds.
> Netflix/netflix-commons@master
    Build output will be written to /Users/mikesol/workshop/netflix-commons/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/netflix-commons/.moderne/build/20240625082828-dsbdq/netflix-commons-20240625020441-ast.jar
    + Cleaned 0 older builds.
> Netflix/netflix-graph@master
    Build output will be written to /Users/mikesol/workshop/netflix-graph/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/netflix-graph/.moderne/build/20240625082828-dsbdq/netflix-graph-20240625020451-ast.jar
    + Cleaned 0 older builds.
> Netflix/Nicobar@master
    Build output will be written to /Users/mikesol/workshop/Nicobar/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Nicobar/.moderne/build/20240625082828-dsbdq/Nicobar-20240625020646-ast.jar
    + Cleaned 0 older builds.
> Netflix/photon@master
    Build output will be written to /Users/mikesol/workshop/photon/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/photon/.moderne/build/20240625082828-dsbdq/photon-20240625020746-ast.jar
    + Cleaned 0 older builds.
> Netflix/PigPen@master
    Build output will be written to /Users/mikesol/workshop/PigPen/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/PigPen/.moderne/build/20240625082828-dsbdq/PigPen-20240625020747-ast.jar
    + Cleaned 0 older builds.
> Netflix/pollyjs@master
    Build output will be written to /Users/mikesol/workshop/pollyjs/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/pollyjs/.moderne/build/20240625082828-dsbdq/pollyjs-20240625020748-ast.jar
    + Cleaned 0 older builds.
> Netflix/Prana@master
    Build output will be written to /Users/mikesol/workshop/Prana/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Prana/.moderne/build/20240625082828-dsbdq/Prana-20240625020748-ast.jar
    + Cleaned 0 older builds.
> Netflix/Priam@3.x
    Build output will be written to /Users/mikesol/workshop/Priam/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Priam/.moderne/build/20240625082828-dsbdq/Priam-20240625020958-ast.jar
    + Cleaned 0 older builds.
> Netflix/pytheas@master
    Build output will be written to /Users/mikesol/workshop/pytheas/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/pytheas/.moderne/build/20240625082828-dsbdq/pytheas-20240625020959-ast.jar
    + Cleaned 0 older builds.
> Netflix/q@master
    Build output will be written to /Users/mikesol/workshop/q/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/q/.moderne/build/20240625082828-dsbdq/q-20240625021036-ast.jar
    + Cleaned 0 older builds.
> Netflix/Raigad@master
    Build output will be written to /Users/mikesol/workshop/Raigad/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Raigad/.moderne/build/20240625082828-dsbdq/Raigad-20240625021112-ast.jar
    + Cleaned 0 older builds.
> Netflix/ribbon@master
    Build output will be written to /Users/mikesol/workshop/ribbon/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/ribbon/.moderne/build/20240625082828-dsbdq/ribbon-20240625031650-ast.jar
    + Cleaned 0 older builds.
> Netflix/runtime-health@master
    Build output will be written to /Users/mikesol/workshop/runtime-health/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/runtime-health/.moderne/build/20240625082828-dsbdq/runtime-health-20240625031758-ast.jar
    + Cleaned 0 older builds.
> Netflix/s3mper@master
    Build output will be written to /Users/mikesol/workshop/s3mper/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/s3mper/.moderne/build/20240625082828-dsbdq/s3mper-20240625031759-ast.jar
    + Cleaned 0 older builds.
> Netflix/servo@master
    Build output will be written to /Users/mikesol/workshop/servo/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/servo/.moderne/build/20240625082828-dsbdq/servo-20240625032009-ast.jar
    + Cleaned 0 older builds.
> Netflix/spectator@main
    Build output will be written to /Users/mikesol/workshop/spectator/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/spectator/.moderne/build/20240625082828-dsbdq/spectator-20240625032636-ast.jar
    + Cleaned 0 older builds.
> Netflix/suro@master
    Build output will be written to /Users/mikesol/workshop/suro/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/suro/.moderne/build/20240625082828-dsbdq/suro-20240625033850-ast.jar
    + Cleaned 0 older builds.
> Netflix/Surus@master
    Build output will be written to /Users/mikesol/workshop/Surus/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/Surus/.moderne/build/20240625082828-dsbdq/Surus-20240624165356-ast.jar
    + Cleaned 0 older builds.
> Netflix/zeno@master
    Build output will be written to /Users/mikesol/workshop/zeno/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/zeno/.moderne/build/20240625082828-dsbdq/zeno-20240625033856-ast.jar
    + Cleaned 0 older builds.
> Netflix/zuul@master
    Build output will be written to /Users/mikesol/workshop/zuul/.moderne/build/20240625082828-dsbdq/build.log
    > Step 1 - download from Moderne
    + Downloaded LST /Users/mikesol/workshop/zuul/.moderne/build/20240625082828-dsbdq/zuul-20240625034226-ast.jar
    + Cleaned 0 older builds.

Built 54 repositories (19s)

1h 21m 48s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe=<RecipeName>
    > Run mod log builds add . logs.zip --last-build to aggregate build logs

MOD SUCCEEDED in (20s)
```

</details>

5. With the LSTs downloaded to your machine, you can now run recipes against them. Let's run the `DependencyVulnerabilityCheck` recipe to find and fix vulnerable dependencies. Unlike many other tools, this recipe can find and fix dependencies that are _many_ levels deep. For instance, if you depend on a library which depends on a library which depends on a library which contains a vulnerable dependency, this recipe can find that and offer suggestions on how to fix it.

```bash
mod run . --recipe DependencyVulnerabilityCheck
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.10.11

> Selecting repositories

> Netflix/archaius@master
> Netflix/astyanax@master
> Netflix/awsobjectmapper@main
> Netflix/bettertls@master
> Netflix/blitz4j@master
> Netflix/CassJMeter@master
> Netflix/concurrency-limits@master
> Netflix/curator@master
> Netflix/denominator@master
> Netflix/dgs-codegen@master
> Netflix/dgs-examples-java@main
> Netflix/dgs-examples-webflux@main
> Netflix/dgs-framework@master
> Netflix/dyno@master
> Netflix/dyno-queues@dev
> Netflix/dynomite-manager@dev
> Netflix/eureka@master
> Netflix/EVCache@master
> Netflix/frigga@master
> Netflix/genie@master
> Netflix/governator@master
> Netflix/gradle-template@master
> Netflix/hollow@master
> Netflix/hollow-reference-implementation@master
> Netflix/Hystrix@master
> Netflix/iceberg@master
> Netflix/karyon@master
> Netflix/mantis@master
> Netflix/mantis-api@master
> Netflix/mantis-connectors@master
> Netflix/mantis-source-jobs@master
> Netflix/metacat@master
> Netflix/metaflow@master
> Netflix/ndbench@master
> Netflix/netflix-commons@master
> Netflix/netflix-graph@master
> Netflix/Nicobar@master
> Netflix/photon@master
> Netflix/PigPen@master
> Netflix/pollyjs@master
> Netflix/Prana@master
> Netflix/Priam@3.x
> Netflix/pytheas@master
> Netflix/q@master
> Netflix/Raigad@master
> Netflix/ribbon@master
> Netflix/runtime-health@master
> Netflix/s3mper@master
> Netflix/servo@master
> Netflix/spectator@main
> Netflix/suro@master
> Netflix/Surus@master
> Netflix/zeno@master
> Netflix/zuul@master
Selected 54 repositories (0.41s)

> Running recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck

> Netflix/archaius@master
    No changes
> Netflix/astyanax@master
    No changes
> Netflix/awsobjectmapper@main
    No changes
> Netflix/bettertls@master
    No changes
> Netflix/blitz4j@master
    No changes
> Netflix/CassJMeter@master
    No changes
> Netflix/concurrency-limits@master
    ! Skipping recipe run because no LST was found
> Netflix/curator@master
    No changes
> Netflix/denominator@master
    No changes
> Netflix/dgs-codegen@master
    No changes
> Netflix/dgs-examples-java@main
    No changes
> Netflix/dgs-examples-webflux@main
    No changes
> Netflix/dgs-framework@master
    No changes
> Netflix/dyno@master
    No changes
> Netflix/dyno-queues@dev
    + Fix results at /Users/mikesol/workshop/dyno-queues/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/dynomite-manager@dev
    No changes
> Netflix/eureka@master
    + Fix results at /Users/mikesol/workshop/eureka/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/EVCache@master
    No changes
> Netflix/frigga@master
    No changes
> Netflix/genie@master
    No changes
> Netflix/governator@master
    No changes
> Netflix/gradle-template@master
    No changes
> Netflix/hollow@master
    No changes
> Netflix/hollow-reference-implementation@master
    No changes
> Netflix/Hystrix@master
    No changes
> Netflix/iceberg@master
    No changes
> Netflix/karyon@master
    No changes
> Netflix/mantis@master
    No changes
> Netflix/mantis-api@master
    No changes
> Netflix/mantis-connectors@master
    No changes
> Netflix/mantis-source-jobs@master
    No changes
> Netflix/metacat@master
    + Fix results at /Users/mikesol/workshop/metacat/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/metaflow@master
    No changes
> Netflix/ndbench@master
    + Fix results at /Users/mikesol/workshop/ndbench/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/netflix-commons@master
    No changes
> Netflix/netflix-graph@master
    No changes
> Netflix/Nicobar@master
    No changes
> Netflix/photon@master
    No changes
> Netflix/PigPen@master
    No changes
> Netflix/pollyjs@master
    No changes
> Netflix/Prana@master
    No changes
> Netflix/Priam@3.x
    No changes
> Netflix/pytheas@master
    No changes
> Netflix/q@master
    No changes
> Netflix/Raigad@master
    No changes
> Netflix/ribbon@master
    + Fix results at /Users/mikesol/workshop/ribbon/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/runtime-health@master
    No changes
> Netflix/s3mper@master
    No changes
> Netflix/servo@master
    No changes
> Netflix/spectator@main
    + Fix results at /Users/mikesol/workshop/spectator/.moderne/run/20240625090329-CucPn/fix.patch
> Netflix/suro@master
    No changes
> Netflix/Surus@master
    No changes
> Netflix/zeno@master
    No changes
> Netflix/zuul@master
    No changes

Found change results on 6 repositories; data tables available for 53 repositories; skipped 1 repository with no LST (3m 6s)

1h 21m 48s saved by using previously built LSTs

* What to do next
    > ! Update out of date LSTs with mod build .
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.java.dependencies.table.VulnerabilityReport
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240625090329-CucPn to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs

MOD SUCCEEDED in (3m 7s)
```

</details>

6. To learn more about what changed, you can command/ctrl click on the `fix.patch` files generated in the above command. If you open one of these patch files up, you'll see that various dependencies in the `build.gradle` files have been updated. While these updates to the dependencies are useful, they are only a minor part of what this recipe does. In the next section we'll take a look at the real power of this recipe – the data table that is produced.

### Study the results of a recipe

If you've been following along, you'll know that we just ran the `DependencyVulnerabilityCheck` recipe. Let's take another look at the `What to do next` section produced at the end of the recipe run:

```bash
* What to do next
    > ! Update out of date LSTs with mod build .
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.java.dependencies.table.VulnerabilityReport
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240625090329-CucPn to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs
```

You may notice that one of the suggestions on what to do next is the `mod study` command. This command allows you to examine the [data tables](/user-documentation/moderne-platform/getting-started/data-tables.md) produced by the recipe run. Data tables are columnar data in a schema defined by the recipe.

In the above example, you'll see there are three data tables produced by this recipe:

```bash
org.openrewrite.java.dependencies.table.VulnerabilityReport
org.openrewrite.table.RecipeRunStats
org.openrewrite.table.SourcesFileResults
```

The `VulnerabilityReport` contains detailed information about the vulnerabilities that exist in the repositories. For instance, it will tell you what CVE a particular repository is affected by, what the current version is, what the minimum fixed version is, a clear summary of what is wrong, and how many levels deep the dependency is.

Let's generate this data table by running the following command:

{% code overflow="wrap" %}
```bash
mod study . --last-recipe-run --data-table org.openrewrite.java.dependencies.table.VulnerabilityReport
```
{% endcode %}

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.10.11

Found recipe run 20240625090329-CucPn

> Selecting repositories

> Netflix/archaius@master
> Netflix/astyanax@master
> Netflix/awsobjectmapper@main
> Netflix/bettertls@master
> Netflix/blitz4j@master
> Netflix/CassJMeter@master
> Netflix/concurrency-limits@master
> Netflix/curator@master
> Netflix/denominator@master
> Netflix/dgs-codegen@master
> Netflix/dgs-examples-java@main
> Netflix/dgs-examples-webflux@main
> Netflix/dgs-framework@master
> Netflix/dyno@master
> Netflix/dyno-queues@dev
> Netflix/dynomite-manager@dev
> Netflix/eureka@master
> Netflix/EVCache@master
> Netflix/frigga@master
> Netflix/genie@master
> Netflix/governator@master
> Netflix/gradle-template@master
> Netflix/hollow@master
> Netflix/hollow-reference-implementation@master
> Netflix/Hystrix@master
> Netflix/iceberg@master
> Netflix/karyon@master
> Netflix/mantis@master
> Netflix/mantis-api@master
> Netflix/mantis-connectors@master
> Netflix/mantis-source-jobs@master
> Netflix/metacat@master
> Netflix/metaflow@master
> Netflix/ndbench@master
> Netflix/netflix-commons@master
> Netflix/netflix-graph@master
> Netflix/Nicobar@master
> Netflix/photon@master
> Netflix/PigPen@master
> Netflix/pollyjs@master
> Netflix/Prana@master
> Netflix/Priam@3.x
> Netflix/pytheas@master
> Netflix/q@master
> Netflix/Raigad@master
> Netflix/ribbon@master
> Netflix/runtime-health@master
> Netflix/s3mper@master
> Netflix/servo@master
> Netflix/spectator@main
> Netflix/suro@master
> Netflix/Surus@master
> Netflix/zeno@master
> Netflix/zuul@master
Selected 54 repositories (0.05s)

> Building a combined data table from results on every repository

> Netflix/archaius@master
    + Did not produce any rows for this data table
> Netflix/astyanax@master
    + Added 141 rows
> Netflix/awsobjectmapper@main
    + Added 3 rows
> Netflix/bettertls@master
    + Did not produce any rows for this data table
> Netflix/blitz4j@master
    + Added 8 rows
> Netflix/CassJMeter@master
    + Added 147 rows
> Netflix/concurrency-limits@master
    ! No matching recipe run was found in this repository, skipping
> Netflix/curator@master
    + Added 22 rows
> Netflix/denominator@master
    + Did not produce any rows for this data table
> Netflix/dgs-codegen@master
    + Added 4 rows
> Netflix/dgs-examples-java@main
    + Did not produce any rows for this data table
> Netflix/dgs-examples-webflux@main
    + Did not produce any rows for this data table
> Netflix/dgs-framework@master
    + Did not produce any rows for this data table
> Netflix/dyno@master
    + Did not produce any rows for this data table
> Netflix/dyno-queues@dev
    + Added 164 rows
> Netflix/dynomite-manager@dev
    + Did not produce any rows for this data table
> Netflix/eureka@master
    + Added 36 rows
> Netflix/EVCache@master
    + Did not produce any rows for this data table
> Netflix/frigga@master
    + Did not produce any rows for this data table
> Netflix/genie@master
    + Added 53 rows
> Netflix/governator@master
    + Did not produce any rows for this data table
> Netflix/gradle-template@master
    + Did not produce any rows for this data table
> Netflix/hollow@master
    + Did not produce any rows for this data table
> Netflix/hollow-reference-implementation@master
    + Added 21 rows
> Netflix/Hystrix@master
    + Did not produce any rows for this data table
> Netflix/iceberg@master
    + Did not produce any rows for this data table
> Netflix/karyon@master
    + Did not produce any rows for this data table
> Netflix/mantis@master
    + Did not produce any rows for this data table
> Netflix/mantis-api@master
    + Added 181 rows
> Netflix/mantis-connectors@master
    + Did not produce any rows for this data table
> Netflix/mantis-source-jobs@master
    + Added 64 rows
> Netflix/metacat@master
    + Added 139 rows
> Netflix/metaflow@master
    + Did not produce any rows for this data table
> Netflix/ndbench@master
    + Added 530 rows
> Netflix/netflix-commons@master
    + Did not produce any rows for this data table
> Netflix/netflix-graph@master
    + Did not produce any rows for this data table
> Netflix/Nicobar@master
    + Added 169 rows
> Netflix/photon@master
    + Added 5 rows
> Netflix/PigPen@master
    + Did not produce any rows for this data table
> Netflix/pollyjs@master
    + Did not produce any rows for this data table
> Netflix/Prana@master
    + Did not produce any rows for this data table
> Netflix/Priam@3.x
    + Added 170 rows
> Netflix/pytheas@master
    + Did not produce any rows for this data table
> Netflix/q@master
    + Added 68 rows
> Netflix/Raigad@master
    + Did not produce any rows for this data table
> Netflix/ribbon@master
    + Added 266 rows
> Netflix/runtime-health@master
    + Added 104 rows
> Netflix/s3mper@master
    + Did not produce any rows for this data table
> Netflix/servo@master
    + Added 119 rows
> Netflix/spectator@main
    + Added 33 rows
> Netflix/suro@master
    + Did not produce any rows for this data table
> Netflix/Surus@master
    + Did not produce any rows for this data table
> Netflix/zeno@master
    + Did not produce any rows for this data table
> Netflix/zuul@master
    + Added 30 rows

Studied 54 repositories (51s)

* What to do next
    > Open /Users/mikesol/workshop/org.openrewrite.java.dependencies.table.VulnerabilityReport.xlsx

MOD SUCCEEDED in (51s)
```

</details>

Open up the Excel file that is produced. You will see that the recipe found thousands of vulnerabilities. You can sort them by severity to see what the most important ones to start with are – or you could find the ones that can be fixed with a version update only to quickly address some of the problems. Having a table like this can help you and your organization track and prioritize security issues.

### Adjust the format of data tables

Maybe you don't really want an Excel spreadsheet as the output, though. Fortunately, the Moderne CLI lets you customize what you get out of data tables with templates. Let's run a new recipe to demonstrate this. Let's run a recipe to find all locations where the `java.util.List add(..)` method is used.

```bash
mod run . --recipe FindMethods -PmethodPattern="java.util.List add(..)"
```

Once that's done running, we _could_ run a similar study command as before to get an Excel file that contains detailed information about all of the places this specific method was found. Let's say, however, that you don't care about all of the columns and that you'd like a markdown file to be produced instead of an Excel spreadsheet.

We can filter the data table to only a couple columns we are interested in and then use a GoTemplate to produce a markdown file containing code samples for all of the matching methods we found:

{% code overflow="wrap" %}

```bash
mod study . --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md
```

{% endcode %}

As you can see, the output is extremely flexible to meet whatever needs you have.

## Additional information

If you want to learn more about the Moderne CLI, we'd encourage you to check out the follow docs:

* [Learn more about how to configure the CLI to meet your needs](../how-to-guides/layer-config-cli.md)
* [Learn more about how JDK selection works and how you might configure other locations for JDKs](../how-to-guides/jdk-selection-and-config.md)
* [Learn how to use the Moderne IntelliJ plugin in combination with the CLI to test recipes](/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install.md)

Or watch the following videos:

{% embed url="https://www.youtube.com/watch?v=ZHXqYhaB71k" %}

{% embed url="https://www.youtube.com/watch?v=zHlVg9H_JRo" %}

{% embed url="https://www.youtube.com/watch?v=cs-6FJ_mtro" %}

## Commands

For more details about the Moderne CLI and each of the commands, check out the [Moderne CLI reference page](../cli-reference.md).

Below, we'll provide some context for the core commands.

* [Build](cli-intro.md#build)
* [Publish](cli-intro.md#publish)
* [Run](cli-intro.md#run)

### Build

The `build` command generates the LST artifacts for one or more projects. Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them - or - they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend [setting up a mass ingest job](../../../administrator-documentation/moderne-platform/how-to-guides/mass-ingest.md) to do this in a VM.

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
