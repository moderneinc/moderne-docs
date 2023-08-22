# Integrating private code with Moderne

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

There are three ways to do this:

1. (**Recommended**) Use the [mod-connect tool](https://github.com/moderneinc/mod-connect) to build and publish LST artifacts on a daily basis without requiring code changes to your existing repositories/pipelines.
2. Update all of your existing pipelines to run the [mod publish](#mod-publish) command whenever the code is updated.
3. Apply a Maven or Gradle plugin to your project and configure them to build/publish LST artifacts.

In this guide, we'll walk through all of these options.

## `mod-connect` tool

The [mod-connect tool](https://github.com/moderneinc/mod-connect) allows you to set up an ingestion pipeline using either GitHub or Jenkins. It's generally more convenient to use GitHub as you don't need to self-manage it and there are fewer permissions to worry about. With that being said, regardless of which one you pick, it is preferable to use this tool than to update your existing pipelines to use the [mod publish](#mod-publish) command.

{% tabs %}
{% tab title="GitHub" %}
The [mod-connect github](https://github.com/moderneinc/mod-connect#mod-connect-github) command will directly commit an ingestion workflow and the necessary files to run it to the GitHub repository you specify. This workflow will iterate over every repository in a CSV file you create and build/publish LST artifacts for each on a regular basis.

Below, we'll walk through the steps you'll need to take to run this command successfully.

#### Step 1: Create the GitHub repository

Before running the `mod-connect github` command, you will need to [create a GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo) that will store the workflow files and the CSV file that contains the repositories that should be ingested. This repo will be what you enter for the `repo` parameter in the `mod-connect github` command.

#### Step 2: Create GitHub secrets

Once you've made the repository, you'll need to create a few [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository). These secrets will be used by the workflow to communicate with other services such as your artifact repository.

{% hint style="info" %}
The `mod-connect github` command requires the _name_ of the secret. When creating the below secrets, make sure you save the name of them to use in the CLI command rather than copying the actual secrets themselves.
{% endhint %}

You'll need to create secrets that contain:

* The access token that will be used to run the GitHub workflows in the repository specified in the `repo` parameter (CLI parameter: `dispatchSecretName`).
* The access token with `read` access to each repository in the provided CSV (CLI parameter: `repoReadSecretName`).
* The password needed to upload LST artifacts to your artifact repository (CLI parameter: `publishPwdSecretName`).
* The username needed to upload LST artifacts to your artifact repository (CLI parameter: `publishUserSecretName`).

#### Step 3: Create the CSV of repositories

Once the repository and secrets have been created, you will then need to make a CSV file that contains the list of repositories you want ingested as well as any necessary information for ingesting them. You can find the schema and detailed examples in the [mod-connect github README](https://github.com/moderneinc/mod-connect#mod-connect-github).

Here's an example of what the CSV file might look like:

```csv
openrewrite/rewrite-spring,main,11,org.openrewrite.java.SpringFormat,,false,,
openrewrite/rewrite,master,17,,-Phadoop_2,,
foo/bar,main,11,,,true,some skip reason
```

#### Step 4: Create a GitHub access token

The last thing you'll need to do before you can run the command is to create a GitHub access token that will be used to commit files and create workflows to the repository you specified. This access token must be a **classic** token and it must have the `workflow` permission. This token will be specified in the `accessToken` parameter of the `mod-connect github` command.

#### Step 5: Run the command

You should now have everything you need to run the command. You can find an example of what this might look like below:

```shell
mod-connect github --accessToken moderne-github-access-token \
    --dispatchSecretName dispatchSecretName \
    --fromCsv /path/to/repos.csv \
    --publishPwdSecretName publishPwdSecretName \
    --publishUrl https://artifact-place.com/artifactory/moderne-ingest \
    --publishUserSecretName publishUserSecretName
    --repo company-name/repo-name \
    --repoReadSecretName readSecretName
```

{% hint style="info" %}
There are a variety of optional parameters that you can find in the [mod-connect github README](https://github.com/moderneinc/mod-connect#mod-connect-github) to refine the command further if you so desire. 
{% endhint %}

Once you've run the command, you should start to see artifacts being created and sent to your artifact repository.

You're now ready to begin [configuring the Moderne agent](/how-to/agent-configuration.md).
{% endtab %}
{% tab title="Jenkins" %}
The [mod-connect Jenkins](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) command will create a Jenkins Job for each repository you specify in a CSV file. Each job will build and publish LST artifacts to your artifact repository on a regular basis.

Below, we'll walk through the steps you'll need to take to run this command successfully. We'll assume you already have a Jenkins instance to use.

#### Step 1: Create a Jenkins user

In order for Moderne to connect to your Jenkins instance and create Jenkins Jobs, you'll need to create a Jenkins user and an API token (**recommended**) or a password. This user needs to have access to read plugin information and to create jobs. If you are using the [role strategy](https://plugins.jenkins.io/role-strategy/) plugin in your Jenkins instance, you will need `Job/read`, `Job/create`, `Job/build`, and optionally `Job/delete` and `Overall/read` permissions. 

{% hint style="warning" %}
If you are a CloudBees CI user, you will need some additional permissions. Please see the notes at the bottom of the [mod-connect jenkins README](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) for more information.
{% endhint %}

#### Step 2: Create Jenkins credentials

In order for a Jenkins Job to communicate with GitHub or your artifact repository, you'll need to create some [Jenkins Credentials](https://www.jenkins.io/doc/book/using/using-credentials/).

Specifically, you'll need to create credentials for:

* Cloning the provided list of repositories to Jenkins (CLI parameter: `gitCredsId`)
* Uploading LST artifacts to your artifact repository (CLI parameter: `publishCredsId`)

{% hint style="info" %}
The `mod-connect jenkins` command requires the _ID_ of the credential. When creating these credentials, make sure you save the ID to use in the CLI command rather than copying the actual credentials themselves.
{% endhint %}

#### Step 3: Create the CSV file

Once you have your Jenkins instance set up with the appropriate permissions, you'll want to make a CSV file that contains the list of the repositories you want to ingest as well as any necessary information for ingesting them. You can find the schema and detailed examples on our [mod-connect jenkins README](https://github.com/moderneinc/mod-connect#mod-connect-jenkins).

Here's an example of what the CSV file might look like:

```csv
,openrewrite/rewrite-spring,main,,gradle,java17,,,,
,openrewrite/rewrite-java-migration,main,,gradle,java17,,,,
```

#### Step 4: Run the command

You should now have everything you need to run the command. You can find an example of what this might look like below:

```shell
mod-connect jenkins --apiToken jenkinsApiToken \
   --controllerUrl https://jenkins.company-name.com \
   --fromCsv /path/to/repos.csv \
   --gitCredsId username-pat \
   --jenkinsUser some-username \
   --publishCredsId artifactory \
   --publishUrl https://artifact-place.com/artifactory/moderne-ingest
```

{% hint style="info" %}
There are a variety of optional parameters that you can find in the [mod-connect jenkins README](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) to refine the command further if you so desire. 
{% endhint %}

Once you've run the command, you should see that a Jenkins Job was created for every repository you specified in the CSV file. You should also see artifacts start to flow into your artifact repository from these jobs being run over time.

You're now ready to begin [configuring the Moderne agent](/how-to/agent-configuration.md).
{% endtab %}
{% endtabs %}

## Mod Publish

If you are unable to set up a GitHub or Jenkins pipeline for building/publishing LST artifacts, you can update your existing pipelines to run the [mod publish](https://moderneinc.github.io/moderne-cli/mod-publish.html) command when code is checked in. This command will build the LST artifacts and then publish them to an artifact repository you specify. This command requires that you have the [Moderne CLI installed](/cli/cli-intro.md).

This command expects:

* A `path` on disk to where the code lies for the project you want to build and publish artifacts for
* A username and password for connecting to your artifact repository (`publishUser` and `publishPwd`)
* A URL for your artifact repository (`publishUrl`)

#### Example

```shell
mod publish --path /path/to/project \
    --publishUser some-username \
    --publishPwd myPassword \
    --publishUrl https://some-artifact-repo.com
```

{% hint style="info" %}
There are a variety of optional parameters that you can find on the [publish man page](https://moderneinc.github.io/moderne-cli/mod-publish.html) to refine the command further if you so desire. 
{% endhint %}

## Maven/Gradle plugins

### Step 1: Apply moderne-maven-plugin or moderne-gradle-plugin

In the `pom.xml` or `build.gradle` file, add this entry to the `plugins` section to apply the Moderne plugin to the project:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>io.moderne</groupId>
        <artifactId>moderne-maven-plugin</artifactId>
        <version>1.3.1</version>
        <configuration>
          <!-- Supports the same functionality as the OpenRewrite plugin -->
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CommonStaticAnalysis</recipe>
          </activeRecipes>
        </configuration>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>ast</goal></goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("io.moderne.rewrite") version("1.0.14")
}

// OpenRewrite and recipe modules are published to Maven Central
// This repository, or a mirror, must be available
repositories {
    mavenCentral()
}

rewrite {
    // Supports all of the same functionality as the OpenRewrite plugin
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="success" %} 
The Moderne build plugins offer all the functionality and configuration options of their [OpenRewrite counterparts](https://docs.openrewrite.org/running-recipes/getting-started#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project). If you were previously applying the OpenRewrite plugins, you can remove those declarations from your build files.
{% endhint %}

{% hint style="warning" %} 
If you're a Maven user who used command line invocations such as `mvn rewrite:dryRun` or `mvn rewrite:run`, please note that these invocations have become `mvn moderne:dryRun` and `mvn moderne:run`. You can, however, apply both plugins to your project if you want to ensure the old commands continue working.

Gradle users can continue invoking `gradlew rewriteDryRun` and `gradlew rewriteRun` as the names of those tasks remain the same in the `moderne-gradle-plugin`. 
{% endhint %}

### Step 2: Configure publishing

The Moderne platform expects that the LST artifacts produced by these build plugins are published to your artifact repository. This means that you may need to publish LST artifacts from projects that do not currently publish anything.

{% tabs %}
{% tab title="Maven" %}
Typically, no additional publishing configuration is required for Maven builds.
{% endtab %}

{% tab title="Gradle" %}
Each project the plugin is applied to will have a `Jar` task named `moderneJar` which produces the LST jar in the project's build folder. This is the file that needs to be published to your artifact repository to enable Moderne SaaS integration.

{% code title="single project build" %}
```groovy
plugins {
    id("io.moderne.rewrite") version("1.0.14")
    id("maven-publish")
}

publishing {
    repositories {
        // your repository configuration
    }
    publications {
        create("moderne", MavenPublication.class) {
            artifact(tasks.named("moderneJar"))
        }
    }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Step 3: Build and publish the next version of your project

Now, whenever your project is published, there will be a file with a "jar" extension and an "ast" (LST used to be called AST) classifier published alongside any other artifacts. For example, a project named "foo" with a publishing version of "1.0" would have a file named `foo-1.0-ast.jar` created alongside the normal `foo-1.0.jar`.

## Next Steps

* [Configure the Moderne agent](/how-to/agent-configuration.md)
