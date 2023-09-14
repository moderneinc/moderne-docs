# Getting started with the Moderne CLI

{% hint style="warn" %}
This page is currently out of date (as of September 14th, 2023). We are working on updating the documentation for this to reflect the current state of the CLI. In the mean time, you can check out the [automatically generated man pages](https://moderneinc.github.io/moderne-cli/) which are up-to-date with the latest version of the CLI.
{% endhint %}

The Moderne CLI is a command line tool that allows you to build [Lossless Semantic Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts, publish them to an artifact repository of your choosing, and run recipes from your local machine.

To ensure you can use the Moderne CLI successfully, in this guide, we will:

* [Explain how to install the Moderne CLI](#installation) 
* [Help you get familiar with the Moderne CLI by walking through how to migrate a sample repository from Spring Boot 2 to 3 using the CLI](#using-the-moderne-cli)
* [Provide more details for each command in case you want to learn more](#commands) 

## Installation

To install the Moderne CLI please:

1. Go to the [Moderne platform](https://app.moderne.io/) and sign in.

2.  Click on the `?` in the top right corner and then select `Moderne CLI` from the `Tools` menu:

    ![](../.gitbook/assets/cli-download.png)

3.  You can then either press the `Download Latest` button or you can install it directly through the command line by copying the `curl` command at the bottom of the modal:

    ![](../.gitbook/assets/cli-download2.png)

4. Regardless of how you downloaded the Moderne CLI, you'll need to save it somewhere
   that your terminal can access. This could involve updating your `PATH` to
   point to a specific location or this could involve putting it in a directory
   that's already on your `PATH` such as a `/usr/bin` directory.

5. Ensure you can run the Moderne CLI by typing `mod help`. If everything is set up
   correctly, you should see a list of commands:

   ![](../.gitbook/assets/mod-cli.png)

6. Before you can run the `run` or `download` command, you'll need to create a Moderne Access
   Token. Go to
   [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token),
   enter a name for the token, and press `generate`.

7. The Moderne CLI will look for the access token in this order:

   * In the `--accessToken` param specified in the command
   * In the `MODERNE_ACCESS_TOKEN` environment variable
   * In the `~/.moderne/token.txt` location of your system

   When you generated the token, the Moderne UI will provide you with a command that you can copy and run in the command line to save the token to the `token.txt` file. Feel free to use that or one of the above options.

{% hint style="warn" %}
If your access token was created in a private tenant, you will need to specify your tenant name when you run the `mod run` command by providing the `--tenant` parameter. The value for `tenant` is the subdomain of your Moderne tenant URL (e.g., if you log in to Moderne at `foobar.moderne.io`, then your tenant name is `foobar`).
{% endhint %}

## Using the Moderne CLI

Imagine that you want to migrate a repository from Spring Boot 2 to Spring Boot 3, but you don't want to configure any build plugins or have to deal with modifying your repository. Let's walk through how you can use the Moderne CLI to do that by running the CLI on a sample repository.

### Configure the sample repository

1. Clone the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic):

```shell
git clone https://github.com/spring-projects/spring-petclinic
```

2. Check out the last Spring Boot 2.0 commit:

```shell
cd spring-petclinic
git checkout b527de52f5fd19f9fe550372c017d145a3b2a809
```

3. If you tried building this repository right now, you would more than likely
   run into errors. This is because this version of the Spring PetClinic repo
   requires Java 8. To ensure that everything builds correctly, you may need to
   download Java 8 and update your `JAVA_HOME` environment variable. If you are
   on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```shell
sdk install java 8.0.372-tem
sdk use java 8.0.372-tem
```

  * If you want to use `sdk` and the `java 8.0.372-tem` distribution 
    is not available for you, select any distribution that represents a Java 8 version.

  * If you aren't on a Unix-based system or you don't want to install SDKMan,
    you'll need to install Java 8 and run something like:

```shell
export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_8
```

4. With Java 8 configured, make sure that the Spring PetClinic repository builds
   on your machine:

```shell
./mvnw package -DskipTests
```

5. If everything has been set up correctly, you should see a `BUILD SUCCESS`
   message after the project is built and the tests passed.

### Migrate to Spring Boot 3

Now that the repository is configured, it's time to migrate it to Spring Boot 3
using the Moderne CLI.

1. Run the build command to generate the LST for the PetClinic repo:

```shell
mod build --path . --mvnPluginVersion=1.2.1
```

2. Next, switch to Java 17 to run recipes (as the CLI requires at least Java 17 to work):

```shell
sdk install java 17.0.7-tem
sdk use java 17.0.7-tem
```

OR

```shell
export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_17
```
 
3. Kick off the recipe by running the following command from the
   `spring-petclinic` repository:

```shell
mod run --path . --recipeName org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0 --recipeGAVs org.openrewrite.recipe:rewrite-spring:5.0.2 --skipBuild
```

4. The previous command should have updated your source files. Whenever you run
   a recipe, you should always double-check that the changes made match your
   expectations by running:

```shell
git diff
```

You've now successfully used the Moderne CLI to migrate a project from Spring Boot 2 to 3!

### Run a recipe on a remote LST

In the previous example, we used the Moderne CLI to run a recipe against a repository on your local machine. This is fine when you only have one repository you're working with. However, what if you wanted to run a recipe against many repositories at once? Checking them out locally, building each of them, and then running a separate run command for each would take a considerable amount of time.

Fortunately, the run command can be extended so that you can run recipes against multiple repositories that have already published their [Lossless Semantic Tree](/concepts/lossless-semantic-trees.md) (LST) artifacts.

This can be especially helpful when you're working on debugging a new recipe and want to test it against many repositories at once.

For example, if you executed the following command, the [Code Cleanup](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup) recipe would be run against all of the Netflix repositories that have LST artifacts built in the Moderne platform:

```shell
mod run --repositories "github.com/Netflix/.+@main" --recipeName org.openrewrite.staticanalysis.CodeCleanup --recipeGAVs rewrite-static-analysis
```

None of these repositories will be checked out locally and you won't have to wait for these repositories to build as the pre-built artifacts will simply be downloaded to your machine instead.

Feel free to experiment with the run command by executing [any of our recipes](https://app.moderne.io/marketplace) against any of the open-source Netflix repositories that exist in the Moderne platform.

## Commands

For more details about the Moderne CLI and each of the commands, check out the [Moderne man pages](https://moderneinc.github.io/moderne-cli/).

Below, we'll provide some context for the core commands.

* [Build](cli-intro.md#build)
* [Publish](cli-intro.md#publish)
* [Run](cli-intro.md#run)

{% hint style="info" %}
To set up a pipeline that automatically builds and publishes LST artifacts for all of your repositories, please use the [mod-connect](https://github.com/moderneinc/mod-connect) tool.
{% endhint %}

### Build

The `build` command generates the LST artifacts with Group Artifact Version coordinates for one or more projects. Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them - or - they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend using the [mod-connect tool](https://github.com/moderneinc/mod-connect) to set up [Jenkins](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) or [GitHub actions](https://github.com/moderneinc/mod-connect#mod-connect-github) for ingesting LST artifacts in bulk.

If the command executes successfully, the LST artifact for each project will be stored in one of three places:

* For non-Java projects, a `.moderne/` directory will be created and used
* For Gradle projects, the `build` directory will be used
* For Maven projects, the `target` directory will be used

[Find all of the parameters for the build command here](https://moderneinc.github.io/moderne-cli/mod-build.html)

### Publish

The publish command allows you to manually build and publish LST artifacts for one or more projects. Once published to your artifact management tool, Moderne will be able to ingest them and they will, in turn, be usable inside of the SaaS.

This command is typically used for publishing LST artifacts from CI systems that we don't have a [mod-connect](https://github.com/moderneinc/mod-connect) command for. If you use Jenkins or GitHub, we strongly recommend using the [mod-connect tool](https://github.com/moderneinc/mod-connect) for building, publishing, and ingesting LST artifacts in bulk.

You can also use this command for _debugging purposes_ if you want to do a one-off test of uploading an artifact somewhere.

This command will begin by executing the [build](cli-intro.md#build-command) command and, if that's successful, it will then attempt to upload the artifacts to the artifact repository you specified.

[Find all of the parameters for the publish command here](https://moderneinc.github.io/moderne-cli/mod-publish.html)

### Run

The `run` command allows you to run [OpenRewrite](https://docs.openrewrite.org/) recipes locally. You will need to have a `MODERNE_ACCESS_TOKEN` in order for this command to work. See [how to create a Moderne access token](/references/create-api-access-tokens.md).

{% hint style="success" %}
If your access token was created in a private tenant, you will need to specify your tenant name in the run command by providing the `--tenant` parameter. The value for `tenant` is the subdomain of your Moderne tenant URL (e.g., if you log in to Moderne at `foobar.moderne.io`, then your tenant name is `foobar`).
{% endhint %}

The `run` command will default to building the LST as part of executing the recipe. However, if you've built the LST previously, you can tell the run command to skip the build step by passing in the `--skipBuild` parameter. Doing so will result in the `run` command executing much more quickly.

[Find all of the parameters for the run command here](https://moderneinc.github.io/moderne-cli/mod-run.html)

## Differences between the Moderne CLI and the OpenRewrite build plugins

The OpenRewrite build plugins are designed to run a _single recipe_ on a _single repository_ at a time. When you run a recipe using these plugins, a new LST is produced regardless of whether or not the code for that repository has changed. This LST is temporarily stored in memory and used by the recipe before being discarded at the end of the recipe run. For large projects, this can be problematic as the entire LST _must_ fit in memory for the recipe to work.

In contrast, the Moderne CLI is designed for scale. You can run recipes against multiple repositories at once and the LST does not need to fit into memory. This is because the Moderne CLI uses proprietary code to build the LST up in parts and then serializes/writes it to the disk (as part of the `mod build` command). Likewise, the `mod run` command can read this LST from the disk in pieces as it runs recipes rather than building the LST every time (if you pass it the `--skipBuild` flag to denote that the LST has already been built).

When running the Moderne CLI commands for the first time, you might notice that running a single recipe on a single repository is slower than the OpenRewrite build plugins. This is due to the fact that the OpenRewrite build plugins do not serialize the LST and write it to disk.

However, if you wanted to run more recipes against the same LST, you would see that the Moderne CLI drastically increases in speed compared to the OpenRewrite build plugins as the Moderne CLI can read the pre-built LST and execute recipes against it rather than having to build it again each time. Furthermore, if you wanted to, you could use the Moderne CLI to run a recipe against many repositories at once – which the OpenRewrite build plugins can't do.