# How to install and configure the Moderne CLI in an air-gapped environment

If your company has restrictions on what you can access via the internet, you'll need to download and configure the [Moderne CLI](/user-documentation/moderne-cli/getting-started/cli-intro.md) in a special way. This doc will walk you through everything you need to know for this. By the end, you will have the CLI downloaded and configured in your air-gapped environment.

## Assumptions

* You can't access [app.moderne.io](https://app.moderne.io/marketplace) from your environment
* You have an internal mirror of Maven Central (or some other internal artifact repository)
* You have the ability to download and add JARs from Maven Central to your internal artifact repository

## Installation and configuration

### Step 1: Download the Moderne CLI JAR

[Download the latest version of the Moderne CLI from Maven Central](https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions). Once downloaded, please add it to your internal mirror so that it's accessible for all users in your environment.

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

Moderne CLI 3.17.1

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

### Step 3: Configure the CLI to use your license

In order to run recipes, you'll need to ensure the CLI is configured with a license. You should have received a license from us. With that license, please run the following command:

```bash
mod config license edit <license-you-were-provided>
```

_For more information on the Moderne CLI license, please see our [license documentation](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/moderne-cli-license)_

### Step 4: Configure the CLI to point to your internal artifact repository

In order for the CLI to have access to read and publish LSTs, it will need to be provided with the path to your Maven settings file. This likely exists on developer machines for the sake of redirecting requests from Maven Central to an internal artifact instance.

Run the following command to point the CLI to your Maven settings file:

```bash
mod config build maven settings edit /path/to/maven/settings/file
```

After that, configure the connection to your artifact repository by running one of the following commands (depending on the type of artifact repository you're using):

{% tabs %}
{% tab title="Artifactory configuration" %}
{% code overflow="wrap" %}
```bash
mod config lsts artifacts artifactory edit <artifact-repository-url> --user <user> --password <password>
```
{% endcode %}
{% endtab %}

{% tab title="Maven configuration" %}
{% code overflow="wrap" %}
```bash
mod config lsts artifacts maven edit <artifact-repository-url> --user <user> --password <password>
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Step 5: Install recipe JARs

For each of the GAV coordinates below, please ensure that the artifact has been added to your internal artifact repository (assuming that your artifact repository is not a pure remote proxy to Maven Central already or that there isn't some automatic procurement step at dependency resolution time):

```bash
mod config recipes jar install org.openrewrite:rewrite-core:LATEST
mod config recipes jar install org.openrewrite:rewrite-gradle:LATEST
mod config recipes jar install org.openrewrite:rewrite-hcl:LATEST
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
mod config recipes jar install org.openrewrite:rewrite-json:LATEST
mod config recipes jar install org.openrewrite:rewrite-maven:LATEST
mod config recipes jar install org.openrewrite:rewrite-properties:LATEST
mod config recipes jar install org.openrewrite:rewrite-protobuf:LATEST
mod config recipes jar install org.openrewrite:rewrite-xml:LATEST
mod config recipes jar install org.openrewrite:rewrite-yaml:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-hibernate:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-logging-frameworks:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-sql:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-static-analysis:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-terraform:LATEST
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:LATEST
```

## Next steps

You're now ready to begin using the CLI! Consider checking out the [using the CLI section in the getting started guide](../getting-started/cli-intro.md#using-the-cli) to see some ways you can use the CLI.