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

Moderne CLI 3.13.1

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

2. For this exercise, we've prepared a list of open-source repositories for you to use. These repositories have been added to the Moderne Platform and put inside the `Default` organization. Clone these repositories by running the following command from inside your `workshop` directory.

```bash
mod git clone moderne . "Default"
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.1

> Listing repositories from Moderne

Moderne contains 14 repositories in Default.
Loaded all 14 repositories (0.61s)

> Cloning repositories

Clone output will be written to /Users/mikesol/workshop/./clone.log

> maven-doxia@master
    + Cloned
> amazon-documentdb-jdbc-driver@develop
    + Cloned
> aws-saas-boost@main
    + Cloned
> messageml-utils@main
    + Cloned
> spring-bot@spring-bot-master
    + Cloned
> symphony-bdk-java@main
    + Cloned
> symphony-wdk@master
    + Cloned
> ndbench@master
    + Cloned
> photon@master
    + Cloned
> ribbon@master
    + Cloned
> rewrite-recipe-bom@main
    + Cloned
> rewrite-sql@main
    + Cloned
> spring-data-commons@main
    + Cloned
> spring-petclinic@main
    + Cloned

Cloned 14 repositories (44s)

MOD SUCCEEDED in (45s)
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
amazon-documentdb-jdbc-driver maven-doxia                   photon                        ribbon                        spring-petclinic
aws-saas-boost                messageml-utils               rewrite-recipe-bom            spring-bot                    symphony-bdk-java
clone.log                     ndbench                       rewrite-sql                   spring-data-commons           symphony-wdk
```

</details>

4. Now that you have the repositories on your local machine, you'll need to build the LSTs for them so that you can run recipes against them. Fortunately, since most of these repositories have their LSTs published to the Moderne Platform, the build operation will download the LSTs without you having to build them locally. This will save you a ton of time!

{% hint style="info" %}
By default, the CLI is able to build LSTs for well-formed projects (i.e. projects that build well with a plain `mvn verify` or `gradle build`). At times, however, you may encounter a project that fails to build. This could be because of a hidden dependency on certain tooling, like NPM, or because specific dependencies or repositories are not available without additional configuration.

Through [mod config build](../cli-reference.md#mod-config-build) and other configuration options, you're typically able to get these LSTs built and ingested fairly quickly. For the purposes of this tutorial, however, let's ignore any projects that don't build and focus on running recipes against the ones that do.
{% endhint %}

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.1

> Selecting repositories

> aws/amazon-documentdb-jdbc-driver@develop
> awslabs/aws-saas-boost@main
> apache/maven-doxia@master
> finos/messageml-utils@main
> Netflix/ndbench@master
> Netflix/photon@master
> openrewrite/rewrite-recipe-bom@main
> openrewrite/rewrite-sql@main
> Netflix/ribbon@master
> finos/spring-bot@spring-bot-master
> spring-projects/spring-data-commons@main
> spring-projects/spring-petclinic@main
> finos/symphony-bdk-java@main
> finos/symphony-wdk@master
Selected 14 repositories (0.71s)

> Building LST(s)

> aws/amazon-documentdb-jdbc-driver@develop
    Build output will be written to /Users/mikesol/workshop/amazon-documentdb-jdbc-driver/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/amazon-documentdb-jdbc-driver/.moderne/build/20240716083004-hvcQu/amazon-documentdb-jdbc-driver-20240715034548-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> awslabs/aws-saas-boost@main
    Build output will be written to /Users/mikesol/workshop/aws-saas-boost/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/aws-saas-boost/.moderne/build/20240716083004-hvcQu/aws-saas-boost-20240716025447-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> apache/maven-doxia@master
    Build output will be written to /Users/mikesol/workshop/maven-doxia/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/maven-doxia/.moderne/build/20240716083004-hvcQu/maven-doxia-20240716035309-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> finos/messageml-utils@main
    Build output will be written to /Users/mikesol/workshop/messageml-utils/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/messageml-utils/.moderne/build/20240716083004-hvcQu/messageml-utils-20240716035346-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> Netflix/ndbench@master
    Build output will be written to /Users/mikesol/workshop/ndbench/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/ndbench/.moderne/build/20240716083004-hvcQu/ndbench-20240715015519-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> Netflix/photon@master
    Build output will be written to /Users/mikesol/workshop/photon/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/photon/.moderne/build/20240716083004-hvcQu/photon-20240716040553-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> openrewrite/rewrite-recipe-bom@main
    Build output will be written to /Users/mikesol/workshop/rewrite-recipe-bom/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/rewrite-recipe-bom/.moderne/build/20240716083004-hvcQu/rewrite-recipe-bom-20240715030301-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> openrewrite/rewrite-sql@main
    Build output will be written to /Users/mikesol/workshop/rewrite-sql/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/rewrite-sql/.moderne/build/20240716083004-hvcQu/rewrite-sql-20240716050553-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> Netflix/ribbon@master
    Build output will be written to /Users/mikesol/workshop/ribbon/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/ribbon/.moderne/build/20240716083004-hvcQu/ribbon-20240716050847-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> finos/spring-bot@spring-bot-master
    Build output will be written to /Users/mikesol/workshop/spring-bot/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/spring-bot/.moderne/build/20240716083004-hvcQu/spring-bot-20240716051916-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> spring-projects/spring-data-commons@main
    Build output will be written to /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240716083004-hvcQu/spring-data-commons-20240716052126-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> spring-projects/spring-petclinic@main
    Build output will be written to /Users/mikesol/workshop/spring-petclinic/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/spring-petclinic/.moderne/build/20240716083004-hvcQu/spring-petclinic-20240716052345-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> finos/symphony-bdk-java@main
    Build output will be written to /Users/mikesol/workshop/symphony-bdk-java/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/symphony-bdk-java/.moderne/build/20240716083004-hvcQu/symphony-bdk-java-20240716053255-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> finos/symphony-wdk@master
    Build output will be written to /Users/mikesol/workshop/symphony-wdk/.moderne/build/20240716083004-hvcQu/build.log
    > Download from Moderne
    + Downloaded LST /Users/mikesol/workshop/symphony-wdk/.moderne/build/20240716083004-hvcQu/symphony-wdk-20240716053611-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.

Built LSTs for 0 repositories, downloaded 14 LSTs (12s)

36m 34s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe=<RecipeName>
    > Run mod log builds add . logs.zip --last-build to aggregate build logs

MOD SUCCEEDED in (13s)
```

</details>

5. With the LSTs downloaded to your machine, you can now run recipes against them. Let's run the `DependencyVulnerabilityCheck` recipe to find and fix vulnerable dependencies. Unlike many other tools, this recipe can find and fix dependencies that are _many_ levels deep. For instance, if you depend on a library which depends on a library which depends on a library which contains a vulnerable dependency, this recipe can find that and offer suggestions on how to fix it.

```bash
mod run . --recipe DependencyVulnerabilityCheck
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.1

> Selecting repositories

> aws/amazon-documentdb-jdbc-driver@develop
> awslabs/aws-saas-boost@main
> apache/maven-doxia@master
> finos/messageml-utils@main
> Netflix/ndbench@master
> Netflix/photon@master
> openrewrite/rewrite-recipe-bom@main
> openrewrite/rewrite-sql@main
> Netflix/ribbon@master
> finos/spring-bot@spring-bot-master
> spring-projects/spring-data-commons@main
> spring-projects/spring-petclinic@main
> finos/symphony-bdk-java@main
> finos/symphony-wdk@master
Selected 14 repositories (0.56s)

> Running recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck

> aws/amazon-documentdb-jdbc-driver@develop
    No changes
> awslabs/aws-saas-boost@main
    + Fix results at /Users/mikesol/workshop/aws-saas-boost/.moderne/run/20240716083055-NH4Xb/fix.patch
> apache/maven-doxia@master
    No changes
> finos/messageml-utils@main
    No changes
> Netflix/ndbench@master
    + Fix results at /Users/mikesol/workshop/ndbench/.moderne/run/20240716083055-NH4Xb/fix.patch
> Netflix/photon@master
    No changes
> openrewrite/rewrite-recipe-bom@main
    No changes
> openrewrite/rewrite-sql@main
    No changes
> Netflix/ribbon@master
    + Fix results at /Users/mikesol/workshop/ribbon/.moderne/run/20240716083055-NH4Xb/fix.patch
> finos/spring-bot@spring-bot-master
    No changes
> spring-projects/spring-data-commons@main
    No changes
> spring-projects/spring-petclinic@main
    No changes
> finos/symphony-bdk-java@main
    No changes
> finos/symphony-wdk@master
    No changes

Found change results on 3 repositories; data tables available for 14 repositories (1m 24s)

36m 34s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.java.dependencies.table.VulnerabilityReport
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240716083055-NH4Xb to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs

MOD SUCCEEDED in (1m 25s)
```

</details>

6. To learn more about what changed, you can command/ctrl click on the `fix.patch` files generated in the above command. If you open one of these patch files up, you'll see that various dependencies in `pom.xml` or `build.gradle` files have been updated. While these updates to the dependencies are useful, they are only a minor part of what this recipe does. In the next section we'll take a look at the real power of this recipe – the data table that is produced.

### Study the results of a recipe

If you've been following along, you'll know that we just ran the `DependencyVulnerabilityCheck` recipe. Let's take another look at the `What to do next` section produced at the end of the recipe run:

```bash
* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.java.dependencies.table.VulnerabilityReport
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240716083055-NH4Xb to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs
```

You may notice that one of the suggestions on what to do next is the `mod study` command. This command allows you to examine the [data tables](/user-documentation/moderne-platform/getting-started/data-tables.md) produced by the recipe run. Data tables are columnar data in a schema defined by the recipe.

In the above example, you'll see there are three data tables produced by this recipe:

```bash
org.openrewrite.table.RecipeRunStats
org.openrewrite.java.dependencies.table.VulnerabilityReport
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
Moderne CLI 3.13.1

Found recipe run 20240716083055-NH4Xb

> Selecting repositories

> aws/amazon-documentdb-jdbc-driver@develop
> awslabs/aws-saas-boost@main
> apache/maven-doxia@master
> finos/messageml-utils@main
> Netflix/ndbench@master
> Netflix/photon@master
> openrewrite/rewrite-recipe-bom@main
> openrewrite/rewrite-sql@main
> Netflix/ribbon@master
> finos/spring-bot@spring-bot-master
> spring-projects/spring-data-commons@main
> spring-projects/spring-petclinic@main
> finos/symphony-bdk-java@main
> finos/symphony-wdk@master
Selected 14 repositories (0.18s)

> Building a combined data table from results on every repository

> aws/amazon-documentdb-jdbc-driver@develop
    + Added 12 rows
> awslabs/aws-saas-boost@main
    + Added 54 rows
> apache/maven-doxia@master
    + Did not produce any rows for this data table
> finos/messageml-utils@main
    + Did not produce any rows for this data table
> Netflix/ndbench@master
    + Added 536 rows
> Netflix/photon@master
    + Added 5 rows
> openrewrite/rewrite-recipe-bom@main
    + Did not produce any rows for this data table
> openrewrite/rewrite-sql@main
    + Did not produce any rows for this data table
> Netflix/ribbon@master
    + Added 266 rows
> finos/spring-bot@spring-bot-master
    + Added 7 rows
> spring-projects/spring-data-commons@main
    + Added 5 rows
> spring-projects/spring-petclinic@main
    + Added 7 rows
> finos/symphony-bdk-java@main
    + Added 51 rows
> finos/symphony-wdk@master
    + Added 15 rows

Studied 14 repositories (20s)

* What to do next
    > Open /Users/mikesol/workshop/org.openrewrite.java.dependencies.table.VulnerabilityReport.xlsx

MOD SUCCEEDED in (21s)
```

</details>

Open up the Excel file that is produced. You will see that the recipe found almost 1000 vulnerabilities. You can sort them by severity to see what the most important ones to start with are – or you could find the ones that can be fixed with a version update only to quickly address some of the problems. Having a table like this can help you and your organization track and prioritize security issues.

### Adjust the format of data tables

Maybe you don't really want an Excel spreadsheet as the output, though. Fortunately, the Moderne CLI lets you customize what you get out of data tables with templates. Let's run a new recipe to demonstrate this. Let's run a recipe to find all locations where the `java.util.List add(..)` method is used.

```bash
mod run . --recipe FindMethods -PmethodPattern="java.util.List add(..)"

# Select the following recipe: 
#   * Find method usages (org.openrewrite.java.search.FindMethods)
```

Once that's done running, we _could_ run a similar study command as before to get an Excel file that contains detailed information about all of the places this specific method was found. Let's say, however, that you don't care about all of the columns and that you'd like a markdown file to be produced instead of an Excel spreadsheet.

We can filter the data table to only a couple columns we are interested in and then use a GoTemplate to produce a markdown file containing code samples for all of the matching methods we found:

{% code overflow="wrap" %}

```bash
mod study . --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md
```

{% endcode %}

As you can see, the output is extremely flexible to meet whatever needs you have.

### Commit changes and/or create PRs

So far, everything we've done has remained local to your machine. In a real-world situation, though, you'd definitely want to commit the results, test the changes, and open a PR in each repository. Let's walk through how to do this.

To begin, make sure you're still in the `$HOME/workshop` directory with the `Default` organization cloned. Then, run the following recipe to resolve common static analysis issues in all of the repositories:

```bash
mod run . --recipe CommonStaticAnalysis

# Select the recipe that matches:
#   * org.openrewrite.staticanalysis.CommonStaticAnalysis
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.12.2

> Selecting repositories

> aws/amazon-documentdb-jdbc-driver@develop
> awslabs/aws-saas-boost@main
> apache/maven-doxia@master
> finos/messageml-utils@main
> Netflix/ndbench@master
> Netflix/photon@master
> openrewrite/rewrite-recipe-bom@main
> openrewrite/rewrite-sql@main
> Netflix/ribbon@master
> finos/spring-bot@spring-bot-master
> spring-projects/spring-data-commons@main
> spring-projects/spring-petclinic@main
> finos/symphony-bdk-java@main
> finos/symphony-wdk@master
Selected 14 repositories (0.58s)

[1] Common static analysis issues (org.openrewrite.python.cleanup.CommonStaticAnalysis)
[2] Common static analysis issues (org.openrewrite.staticanalysis.CommonStaticAnalysis)
Select a recipe [1-2]: 2

> Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

> aws/amazon-documentdb-jdbc-driver@develop
    + Fix results at /Users/mikesol/workshop/amazon-documentdb-jdbc-driver/.moderne/run/20240717092600-yfuFS/fix.patch
> awslabs/aws-saas-boost@main
    + Fix results at /Users/mikesol/workshop/aws-saas-boost/.moderne/run/20240717092600-yfuFS/fix.patch
> apache/maven-doxia@master
    + Fix results at /Users/mikesol/workshop/maven-doxia/.moderne/run/20240717092600-yfuFS/fix.patch
> finos/messageml-utils@main
    + Fix results at /Users/mikesol/workshop/messageml-utils/.moderne/run/20240717092600-yfuFS/fix.patch
> Netflix/ndbench@master
    + Fix results at /Users/mikesol/workshop/ndbench/.moderne/run/20240717092600-yfuFS/fix.patch
> Netflix/photon@master
    + Fix results at /Users/mikesol/workshop/photon/.moderne/run/20240717092600-yfuFS/fix.patch
> openrewrite/rewrite-recipe-bom@main
    No changes
> openrewrite/rewrite-sql@main
    No changes
> Netflix/ribbon@master
    + Fix results at /Users/mikesol/workshop/ribbon/.moderne/run/20240717092600-yfuFS/fix.patch
> finos/spring-bot@spring-bot-master
    + Fix results at /Users/mikesol/workshop/spring-bot/.moderne/run/20240717092600-yfuFS/fix.patch
> spring-projects/spring-data-commons@main
    + Fix results at /Users/mikesol/workshop/spring-data-commons/.moderne/run/20240717092600-yfuFS/fix.patch
> spring-projects/spring-petclinic@main
    No changes
> finos/symphony-bdk-java@main
    + Fix results at /Users/mikesol/workshop/symphony-bdk-java/.moderne/run/20240717092600-yfuFS/fix.patch
> finos/symphony-wdk@master
    + Fix results at /Users/mikesol/workshop/symphony-wdk/.moderne/run/20240717092600-yfuFS/fix.patch

Found change results on 11 repositories; data tables available for 14 repositories (2m 5s)

36m 21s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240717092600-yfuFS to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs

MOD SUCCEEDED in (2m 15s)
```

</details>

Right now, if you `cd` to any of the repositories in the `workshop` directory, you won't see any of these changes. While you _could_ apply these changes to the branches you have checked out, it's generally preferable to make changes inside of a branch and then submit a PR for said branch.

To begin, let's create a branch in each repository that has changes by running the following command:

{% hint style="warning" %}
For all of the following commands, you need to make sure that you add the `--last-recipe-run` flag. If you don't add that flag, you'll make commits in repositories that don't have any changes and potentially push strange commits to branches that you don't want.
{% endhint %}

```bash
mod git checkout . -b workshop-changes --last-recipe-run
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.12.2

Found recipe run 20240717084152-vY22R

> Selecting repositories

> aws/amazon-documentdb-jdbc-driver@hotfix
> awslabs/aws-saas-boost@hotfix
> apache/maven-doxia@hotfix
> finos/messageml-utils@hotfix
> Netflix/ndbench@hotfix
> Netflix/photon@hotfix
> openrewrite/rewrite-recipe-bom@main
> openrewrite/rewrite-sql@main
> Netflix/ribbon@hotfix
> finos/spring-bot@hotfix
> spring-projects/spring-data-commons@hotfix
> spring-projects/spring-petclinic@main
> finos/symphony-bdk-java@hotfix
> finos/symphony-wdk@hotfix
Selected 14 repositories (0.17s)

> Checkout

> aws/amazon-documentdb-jdbc-driver@hotfix
    Switched to branch workshop-changes
> awslabs/aws-saas-boost@hotfix
    Switched to branch workshop-changes
> apache/maven-doxia@hotfix
    Switched to branch workshop-changes
> finos/messageml-utils@hotfix
    Switched to branch workshop-changes
> Netflix/ndbench@hotfix
    Switched to branch workshop-changes
> Netflix/photon@hotfix
    Switched to branch workshop-changes
> openrewrite/rewrite-recipe-bom@main
    No results to commit.
> openrewrite/rewrite-sql@main
    No results to commit.
> Netflix/ribbon@hotfix
    Switched to branch workshop-changes
> finos/spring-bot@hotfix
    Switched to branch workshop-changes
> spring-projects/spring-data-commons@hotfix
    Switched to branch workshop-changes
> spring-projects/spring-petclinic@main
    No results to commit.
> finos/symphony-bdk-java@hotfix
    Switched to branch workshop-changes
> finos/symphony-wdk@hotfix
    Switched to branch workshop-changes
Done (0.62s)

MOD SUCCEEDED in (1s)
```

</details>

Next, let's apply the changes from the recipe to these branches:

```bash
mod git apply . --last-recipe-run
```

If you `cd` into the project directories and run `git status`, you will see that you have a bunch of uncommitted and unstaged changes. Normally this would be where you would run tests and confirm that everything still works. For the purposes of the workshop, though, let's just pretend everything worked perfectly and move to the next step of staging the files and committing the changes.

To add the files to the list that should be committed, run the following command:

```bash
mod git add . --last-recipe-run
```

Then, to commit these changes, run the following command:

```bash
mod git commit . -m "Test common static analysis changes" --last-recipe-run
```

{% hint style="warning" %}
Right now, GPG signing is not supported by the `mod git commit` command. If you use GPG signing, you'll either need to disable that temporarily or manually commit changes.
{% endhint %}

## Additional information

If you want to learn more about the Moderne CLI, we'd encourage you to check out the follow docs:

* [Learn more about how to configure the CLI to meet your needs](../references/layer-config-cli.md)
* [Learn more about how JDK selection works and how you might configure other locations for JDKs](../references/jdk-selection-and-config.md)
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
