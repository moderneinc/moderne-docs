# Air-gapped Moderne CLI workshop

The two day air-gapped Moderne CLI workshop allows participants to learn how to leverage OSS OpenRewrite recipes for OSS framework migrations and vulnerability management, as well as conduct impact analysis studies and build custom migrations via custom OpenRewrite recipes.

The workshop is conducted by developers leveraging the Moderne CLI and OpenRewrite recipes on their workstations. While the Moderne team assists your developers during the workshop, your code **won't leave developer workstations** during the workshop. Existing access control policies govern developer access to your SCM and artifact stores.

After developers familiarize themselves with the CLI, they will run code cleanup, framework migrations, and OWASP Top 10 vulnerability management recipes. All of these recipes produce data tables that can be used to calculate a return on investment (ROI). This then feeds into the value deck we create after the workshop to describe results to management.

The second part of the workshop is focused on teaching developers how to plan and execute custom migrations. Some example migrations we implemented in the past include switching identity providers, moving from one database to another, integrating with an internal third-party vulnerability management tool, and integrating with Launch Darkly to remove unused feature flags.

We typically begin by showing how to quickly write a search recipe that allows you to output a data table of technology in use across all of your repositories. Then we help you implement custom recipes for said migration. Please note that said migration is not guaranteed to be complete by the end of the workshop. That being said, your developers will come out of this session with the necessary skills to complete the migration.

## Prerequisites

* The Moderne CLI and open source OpenRewrite recipe JARs need to be available in your internal mirror of Maven Central.
* You will need to be proficient with Java.
* Someone at your company needs to perform all of the steps in the [environment preparation section](air-gapped-cli.md#environment-preparation-before-workshop) before the workshop begins.

## Environment preparation (before workshop)

### Download the latest CLI

Download the latest version from Maven Central: [https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions](https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions).

### (Optionally) Create an alias for the Moderne CLI JAR

While not required, you are _strongly encouraged_ to set up an alias for running the CLI JAR. Below are some ways you might configure this depending on your OS and terminal:

{% tabs %}
{% tab title="Git Bash (Windows)" %}
Add the following function to your `.bashrc` file:

```bash
mod() {
    "java -jar /path/to/mod.jar" "$@"
}
```
{% endtab %}

{% tab title="Bash or Zsh (Linux or Mac)" %}
Add the following to your `.bashrc` or `.zshrc` file:

```bash
alias mod=”java -jar /path/to/mod.jar” "$@"
```
{% endtab %}

{% tab title="Powershell" %}
Use the [Set-Alias command](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7.4) within a [profile script](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about\_profiles?view=powershell-7.4\&viewFallbackFrom=powershell-7).
{% endtab %}
{% endtabs %}

### Configure the CLI to use your license

Please follow the instructions in the [Moderne CLI license docs](../moderne-cli/getting-started/moderne-cli-license.md) to configure the license for your CLI.

### Configure the CLI to point to your internal Artifact repository

In order for the CLI to have access to read and publish LSTs, it will need to be provided with the path to your Maven settings file. This likely already exists on developer machines for the sake of redirecting requests from Maven Central to an internal Artifact instance. Recipe installation in the next step will use this Maven settings file.

```bash
mod config build maven settings edit /path/to/maven/settings
```

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

### Install recipe JARs

For each of the GAV coordinates below, please ensure that the artifact has been added to your internal Artifactory instance (assuming that your Artifactory instance is not a pure remote proxy to Maven Central already or that there isn't some automatic procurement step at dependency resolution time):

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

### (Optionally) Create a CSV of the repositories you want to use

If you are going to be performing the workshop on a developer machine that already has a bunch of locally cloned repositories you want to run recipes against, feel free to skip to the [building LSTs step](air-gapped-cli.md#build-lsts).

If you need to clone repositories locally, you'll need to [create a repos.csv file](https://docs.moderne.io/user-documentation/moderne-cli/cli-reference#mod-git-clone-csv). This file will take in a list of repositories, the branch to use, and (optionally) various attributes about them that the CLI will use when building the repository.

To assist you with creating this CSV file, we've [created scripts for pulling repository details from various source code managers](https://github.com/moderneinc/mass-ingest-example/tree/main/repo-fetchers). Please configure and run those as needed to build up your `repos.csv` file.

### (Optionally) Clone repositories from the CSV

_This only applies if you created a CSV in the previous step_

With the CSV created, please run the `mod git clone` command similar to the following (replace `spring-data` with the location where you want the repositories cloned to):

```bash
mod git clone csv ./spring-data repos.csv --filter=tree:0
```

{% hint style="info" %}
The –filter=tree:0 argument is optional but helps clone faster, as it fetches all commit history but only trees for the latest commit.

![](<../../.gitbook/assets/image (42).png>)
{% endhint %}

{% hint style="warning" %}
On Windows machines, you may [run into issues cloning repositories with deep file paths](https://gist.github.com/leodutra/a25bc1f51e8779943df0a95d5a4839d1). To fix this, try running the following command:

```bash
git config --system core.longpaths true
```
{% endhint %}

Here is an example of what a `repos.csv` file might look like:

```csv
cloneUrl,branch
git@github.com:spring-projects/spring-data-couchbase.git,main
git@github.com:spring-projects/spring-data-relational.git,main
git@github.com:spring-projects/spring-data-rest.git,main
git@github.com:spring-projects/spring-data-mongodb.git,main
git@github.com:spring-projects/spring-data-cassandra.git,main
git@github.com:spring-projects/spring-data-ldap.git,main
git@github.com:spring-projects/spring-data-elasticsearch.git,main
git@github.com:spring-projects/spring-data-redis.git,main
git@github.com:spring-projects/spring-data-keyvalue.git,main
git@github.com:spring-projects/spring-data-neo4j.git,main
git@github.com:spring-projects/spring-data-jpa.git,main
git@github.com:spring-projects/spring-data-commons.git,main
```

Here is what the results look like if everything ran correctly:

```bash
➜ mod git clone csv ./spring-data repos.csv --filter=tree:0

Moderne CLI 3.16.5

> Reading CSV file

CSV file contains 12 repositories

> Cloning repositories

Clone output will be written to /Users/mikesol/spring-data/clone.log

> spring-data-couchbase@main
> spring-data-relational@main
> spring-data-rest@main
> spring-data-mongodb@main
> spring-data-cassandra@main
> spring-data-ldap@main
> spring-data-elasticsearch@main
> spring-data-redis@main
> spring-data-keyvalue@main
> spring-data-neo4j@main
> spring-data-jpa@main
> spring-data-commons@main
Cloned 12 repositories (1m 13s)

MOD SUCCEEDED in (1m 13s)
```

### Build LSTs

Building LSTs is the most time-consuming step, as it is proportional to compilation time. In contrast to open-source OpenRewrite, these LSTs are saved to disk in a proprietary format.

In customer environments, we set up the build and publish of LSTs to an artifact store on a scheduled basis. `mod build` can take advantage of this and will download an LST from that artifact store if its changeset matches the changeset of the cloned repository.

Notice that you didn't need to configure Maven or Gradle, select Java versions, etc. The Moderne CLI detects all of that, matching up build tools and JDKs on the machine to each repository based on each repository's unique requirements. The detection can be overridden where needed – but it generally isn't.

```bash
➜ mod build ./spring-data

Moderne CLI 3.16.5

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.54s)

> Building LST(s)

> spring-projects/spring-data-cassandra@main
    Build output will be written to /Users/mikesol/spring-data/spring-data-cassandra/.moderne/build/20240430091557-LF657/build.log
    > Step 1 - build with Maven
        Selected the 17.0.7-tem JDK
    > Step 2 - build with mod-java
        Selected the 21.0.1-oracle JDK
    > Step 3 - build resources using the native CLI
    ✓ Built LST /Users/mikesol/spring-data/spring-data-cassandra/.moderne/build/20240430091557-LF657/spring-data-cassandra-20240430091656-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> spring-projects/spring-data-commons@main
    Build output will be written to /Users/mikesol/spring-data/spring-data-commons/.moderne/build/20240430091557-LF657/build.log
...
```

_With an empty `M2_LOCAL`, this can take approximately 30 minutes to build._

### Run a refactoring recipe

To make sure everything works, it's a good idea to run a refactoring recipe. Please run the following:

* `mod run ./spring-data --recipe CommonStaticAnalysis`
* `mod run ./spring-data --recipe UpgradeToJava17`

{% hint style="success" %}
To view the diff, you can command + click on the file (or ctrl + click if on Windows).
{% endhint %}

<details>

<summary>Example CommonStaticAnalysis run:</summary>

```bash
➜ mod run ./spring-data --recipe CommonStaticAnalysis

Moderne CLI 3.16.5

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.52s)

[1] Common static analysis issues (org.openrewrite.python.cleanup.CommonStaticAnalysis)
[2] Common static analysis issues (org.openrewrite.staticanalysis.CommonStaticAnalysis)
Select a recipe [1-2]: 2

> Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

> spring-projects/spring-data-cassandra@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-cassandra/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-commons@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-commons/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-couchbase@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-couchbase/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-elasticsearch@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-elasticsearch/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-jpa@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-jpa/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-keyvalue@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-keyvalue/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-ldap@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-ldap/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-mongodb@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-mongodb/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-neo4j@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-neo4j/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-redis@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-redis/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-relational@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-relational/.moderne/run/20240430092431-vpItH/fix.patch
> spring-projects/spring-data-rest@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-rest/.moderne/run/20240430092431-vpItH/fix.patch
Found results on 12 repositories (2m 1s)

7m 41s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study ./spring-data --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout ./spring-data -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply ./spring-data --last-recipe-run to apply the changes
    > Run mod git apply ./spring-data --recipe-run 20240430092431-vpItH to apply the changes

MOD SUCCEEDED in (2m 6s)
```

</details>

<details>

<summary>Example UpgradeToJava17 run:</summary>

```bash
➜ mod run ./spring-data --recipe UpgradeToJava17

Moderne CLI 3.16.5

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.46s)

[1] Migrate to Java 17 (org.openrewrite.java.migrate.UpgradeToJava17)
[2] Migrate to Java 17 (io.quarkus.updates.core.quarkus37.UpgradeToJava17)
Select a recipe [1-2]: 1

> Running recipe org.openrewrite.java.migrate.UpgradeToJava17

> spring-projects/spring-data-cassandra@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-cassandra/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-commons@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-commons/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-couchbase@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-couchbase/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-elasticsearch@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-elasticsearch/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-jpa@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-jpa/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-keyvalue@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-keyvalue/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-ldap@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-ldap/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-mongodb@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-mongodb/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-neo4j@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-neo4j/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-redis@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-redis/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-relational@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-relational/.moderne/run/20240430092847-434iK/fix.patch
> spring-projects/spring-data-rest@main
    ✓ Fix results at /Users/mikesol/spring-data/spring-data-rest/.moderne/run/20240430092847-434iK/fix.patch
Found results on 12 repositories (2m 44s)

7m 41s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study ./spring-data --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout ./spring-data -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply ./spring-data --last-recipe-run to apply the changes
    > Run mod git apply ./spring-data --recipe-run 20240430092847-434iK to apply the changes

MOD SUCCEEDED in (2m 47s)
```

</details>

These recipes will prepare patch files in `.moderne` folders in each repository, which can then be studied further or applied to the repository and committed:

```bash
mod git apply ./spring-data --last-recipe-run
mod git checkout ./spring-data java-17-upgrade -b
mod git commit ./spring-data -m "Upgrade to Java 17"
```

You likely have noticed the pattern by now. Moderne CLI commands are meant to operate recursively on the `./spring-data` directory. For getting changes committed, mod acts as a poly-repository git.

### Study the results of a recipe run

Recipes can produce data tables as a recipe run proceeds. Data tables are columnar data in a schema defined by the recipe.

Try running:

```bash
mod study ./spring-data --last-recipe-run --data-table SourcesFileResults
```

You should see:

```bash
➜ mod study ./spring-data --last-recipe-run --data-table SourcesFileResults

Moderne CLI 3.16.5

Found recipe run 20240430092847-434iK

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.29s)

> Building a combined data table from results on every repository

> spring-projects/spring-data-cassandra@main
    ✓ Added 165 rows
> spring-projects/spring-data-commons@main
    ✓ Added 219 rows
> spring-projects/spring-data-couchbase@main
    ✓ Added 86 rows
> spring-projects/spring-data-elasticsearch@main
    ✓ Added 49 rows
> spring-projects/spring-data-jpa@main
    ✓ Added 51 rows
> spring-projects/spring-data-keyvalue@main
    ✓ Added 14 rows
> spring-projects/spring-data-ldap@main
    ✓ Added 4 rows
> spring-projects/spring-data-mongodb@main
    ✓ Added 170 rows
> spring-projects/spring-data-neo4j@main
    ✓ Added 98 rows
> spring-projects/spring-data-redis@main
    ✓ Added 157 rows
> spring-projects/spring-data-relational@main
    ✓ Added 121 rows
> spring-projects/spring-data-rest@main
    ✓ Added 67 rows
Studied 12 repositories (20s)

* What to do next
    > Open /Users/mikesol/SourcesFileResults.xlsx

MOD SUCCEEDED in (21s)
```

If you open up the Excel output, you will see that 1000+ different changes were made across these 12 repositories.

### Using templates with `mod study`

If you want to customize what you get out of data tables, you can use templates.

Run the following command:

{% code overflow="wrap" %}
```bash
mod run ./spring-data --recipe FindMethods -PmethodPattern="java.util.List add(..)"
```
{% endcode %}

Then, you can customize the output by providing a `--template` flag:

{% code overflow="wrap" %}
```bash
mod study ./spring-data --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md 
```
{% endcode %}

In the above example, we are filtering the data table to only a couple columns we are interested in and then using a GoTemplate to produce a markdown file containing code samples for all of the matching methods we found in these 12 repositories.

### Set up your development environment

We strongly recommend using IntelliJ IDEA when developing OpenRewrite recipes. If available, version `2024.1` (or newer) would be best given the [built-in support for OpenRewrite](https://blog.jetbrains.com/idea/2024/02/intellij-idea-2024-1-eap-7/). Follow the instructions for [setting up your IDE](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment), optionally including the installation of [the Moderne IntelliJ plugin](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/moderne-intellij-plugin). Note the [additional tips](https://docs.openrewrite.org/reference/building-openrewrite-from-source#developing-tips) as well. If you want to get started with creating your own recipe, we recommend starting from the [rewrite-recipe-starter repository](https://github.com/moderneinc/rewrite-recipe-starter).

## Custom recipe development workshop

If you want to learn more about writing your own recipes, please check out our [recipe authoring workshop](recipe-authoring.md).
