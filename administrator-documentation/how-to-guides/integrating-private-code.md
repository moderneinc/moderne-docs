# Integrating private code with Moderne

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../references/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

In this guide, we'll walk through what steps you need to do in relation to the CLI in said image. We'll leave installing packages/dependencies/Java versions/etc. up to the reader.

## Step 1: Create an access token

In order to build and publish LST artifacts, you will need to have the CLI downloaded in a location that your Docker image has access to. To download the CLI, you will need to create a [Moderne personal access token](/user-documentation/how-to-guides/create-api-access-tokens.md). This will then be used in the `Authorization` header for downloading the CLI.

## Step 2: Download the CLI

Once you have the token, you're ready to configure the curl command to download the CLI. Please select the tab based on the type of system your image will be running on. 

{% hint style="info" %}
The `${MODERNE_PERSONAL_ACCESS_TOKEN}` should be replaced with the personal access token you created (`mat-*`).
{% endhint %}

{% tabs %}
{% tab title="Mac" %}
{% code overflow="wrap" %}
```shell
curl --request GET --url 'https://api.app.moderne.io/cli/download?operatingSystem=macos-tar&environment=stable' --header 'Authorization: Bearer ${MODERNE_PERSONAL_ACCESS_TOKEN}'
```
{% endcode %}
{% endtab %}

{% tab title="Linux" %}
{% code overflow="wrap" %}
```shell
curl --request GET --url 'https://api.app.moderne.io/cli/download?operatingSystem=linux-tar&environment=stable' --header 'Authorization: Bearer ${MODERNE_PERSONAL_ACCESS_TOKEN}'
```
{% endcode %}
{% endtab %}

{% tab title="Windows" %}
{% code overflow="wrap" %}
```shell
curl --request GET --url 'https://api.app.moderne.io/cli/download?operatingSystem=windows&environment=stable' --header 'Authorization: Bearer ${MODERNE_PERSONAL_ACCESS_TOKEN}'
```
{% endcode %}

If you need to download the JAR instead of an EXE, you can download it from sonatype: [https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions](https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions)
{% endtab %}
{% endtabs %}

## Step 3: Configure the connection with Moderne

The first thing you will need to do once you have the CLI downloaded is to configure the connection to Moderne so that you can get CLI metrics. To do this, run the following command (make sure to replace the variables with their actual values or set up your Dockerfile in such a way that these variables work):

```shell
mod config moderne edit --token=${MODERNE_PERSONAL_ACCESS_TOKEN} ${MODERNE_UI_URL}
```

## Step 4: Configure the connection to your artifact repository

In order to upload LST artifacts to your artifact repository, you will need to update and run the following command:

{% code overflow="wrap" %}
```shell
mod config artifacts artifactory edit --user=${ARTIFACTS_USER} --password=${ARTIFACTS_PWD} ${ARTIFACT_REPOSITORY_URL}
```
{% endcode %}

## Step 5: Create a CSV file of all desired repositories

The next step needed for ingestion is to come up with a list of all the repositories you want ingested. This list should be in a CSV format with the first row composed of headers. 

At the very least, you must include two columns: `cloneUrl` and `branch`. However, you can also include additional optional columns if additional information is needed to build your repositories. These optional columns are: `changeset`, `java`, `jvmOpts`, `mavenArgs`, `gradleArgs`, and `bazelRule`.

If an optional column is provided for a repository, it will behave the same way as [local configuration (saved)](/user-documentation/how-to-guides/layer-config-cli.md#local-configuration-shared) does.

<details>

<summary>Here is an example of what the CSV file for the <code>spring-projects</code> in GitHub looks like:</summary>

```
cloneUrl,branch
git@github.com:spring-projects/spring-rewrite-commons.git,main
git@github.com:spring-projects/spring-session.git,main
git@github.com:spring-projects/spring-boot.git,main
git@github.com:spring-projects/spring-kafka.git,main
git@github.com:spring-projects/sts4.git,main
git@github.com:spring-projects/spring-shell.git,main
git@github.com:spring-projects/spring-data-release.git,main
git@github.com:spring-projects/spring-data-couchbase.git,main
git@github.com:spring-projects/spring-data-relational.git,main
git@github.com:spring-projects/spring-data-rest.git,main
git@github.com:spring-projects/spring-data-mongodb.git,main
git@github.com:spring-projects/spring-data-cassandra.git,main
git@github.com:spring-projects/spring-data-ldap.git,main
git@github.com:spring-projects/spring-data-elasticsearch.git,main
git@github.com:spring-projects/spring-data-redis.git,main
git@github.com:spring-projects/spring-data-bom.git,main
git@github.com:spring-projects/spring-data-keyvalue.git,main
git@github.com:spring-projects/spring-data-build.git,main
git@github.com:spring-projects/spring-data-neo4j.git,main
git@github.com:spring-projects/spring-data-jpa.git,main
git@github.com:spring-projects/spring-data-commons.git,main
git@github.com:spring-projects/spring-ai.git,main
git@github.com:spring-projects/spring-batch.git,main
git@github.com:spring-projects/spring-framework.git,main
git@github.com:spring-projects/spring-ws.git,main
git@github.com:spring-projects/spring-petclinic.git,main
git@github.com:spring-projects/spring-security.git,main
git@github.com:spring-projects/spring-authorization-server.git,main
git@github.com:spring-projects/spring-retry.git,main
git@github.com:spring-projects/spring-ldap.git,main
```

</details>

## Step 6: Use the CSV to clone all the repositories

Once you have your CSV file created with all the repositories, you will need to use the Moderne CLI to run the command:

```shell
mod git clone csv <DIRECTORY_TO_CLONE_PROJECTS_INTO> <PATH_TO_CSV_FILE>
```

After this command is run, you will have a directory for each repository in the CSV file inside the directory you specified.

## Step 7: Build the projects

The next step is building the LSTs for each of your projects. You can do this by running the command:

```shell
mod build <PATH_TO_DIRECTORY_WHERE_YOU_CLONED_PROJECTS_TO>
```

This command will iterate over each repository in that directory and build the necessary LST artifacts.

## Step 8: Publish the LST artifacts

The last step needed is to publish the LST artifacts you've built. You can do this by running the command:

```shell
mod publish <PATH_TO_DIRECTORY_WHERE_YOU_CLONED_PROJECTS_TO>
```

This command will iterate over each repository in that directory and publish the artifacts to the artifact repository you set up in [the artifact repository configuration step](#step-3-configure-the-connection-to-your-artifact-repository).

## Next Steps

* [Configure the Moderne agent](agent-configuration/agent-configuration.md)
