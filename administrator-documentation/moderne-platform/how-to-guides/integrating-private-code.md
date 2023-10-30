# Integrating private code with Moderne

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../references/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

There are two ways to do this:

1. (**Recommended**) Use the [mod-connect tool](https://github.com/moderneinc/mod-connect) to create a GitHub, GitLab, or Jenkins pipeline that will build and publish LST artifacts on a regular basis without requiring code changes to your existing repositories/pipelines.
2. Update all of your existing pipelines to run various [Moderne CLI commands](../../../user-documentation/moderne-developer-experience/getting-started/cli-intro.md) whenever the code is updated.

In this guide, we'll walk through both of these options.

## `mod-connect` tool

The [mod-connect tool](https://github.com/moderneinc/mod-connect) allows you to set up an ingestion pipeline using GitHub, GitLab, or Jenkins. It's generally more convenient to use GitHub or GitLab as you don't need to self-manage it and there are fewer permissions to worry about. With that being said, regardless of which one you pick, it is preferable to use this tool than to update your existing pipelines to use various [manual Moderne CLI commands](integrating-private-code.md#moderne-cli).

{% tabs %}
{% tab title="GitHub" %}
The [mod-connect github](https://moderneinc.github.io/mod-connect/mod-connect-github.html) command will directly commit an ingestion workflow and the necessary files to run it to the GitHub repository you specify. This workflow will iterate over every repository in a CSV file you create and build/publish LST artifacts for each on a regular basis. Behind the scenes, it will use the [Moderne CLI](../../../user-documentation/moderne-developer-experience/getting-started/cli-intro.md) to build and publish the LST artifacts.

Below, we'll walk through the steps you'll need to take to run this command successfully.

**Step 1: Create the GitHub repository**

Before running the `mod-connect github` command, you will need to [create a GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo) that will store the workflow files and the CSV file that contains the repositories that should be ingested. This repo will be what you enter for the `repo` parameter in the `mod-connect github` command.

**Step 2: Create GitHub secrets**

Once you've made the repository, you'll need to create a few [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository). These secrets will be used by the workflow to communicate with other services such as your artifact repository.

{% hint style="info" %}
The `mod-connect github` command requires the _name_ of the secret. When creating the below secrets, make sure you save the name of them to use in the CLI command rather than copying the actual secrets themselves.
{% endhint %}

You'll need to create secrets that contain:

* The access token that will be used to run the GitHub workflows in the repository specified in the `repo` parameter (CLI parameter: `dispatchSecretName`).
* The access token with `read` access to each repository in the provided CSV (CLI parameter: `repoReadSecretName`).
* The password needed to upload LST artifacts to your artifact repository (CLI parameter: `publishPwdSecretName`).
* The username needed to upload LST artifacts to your artifact repository (CLI parameter: `publishUserSecretName`).

**Step 3: Create the CSV of repositories**

Once the repository and secrets have been created, you will then need to make a CSV file that contains the list of repositories you want ingested as well as any necessary information for ingesting them. You can find the schema and detailed examples in the [mod-connect github README](https://github.com/moderneinc/mod-connect#mod-connect-github).

Here's an example of what the CSV file might look like:

```csv
openrewrite/rewrite-spring,main,11,org.openrewrite.java.SpringFormat,,false,,
openrewrite/rewrite,master,17,,-Phadoop_2,,
foo/bar,main,11,,,true,some skip reason
```

**Step 4: Create a GitHub access token**

The last thing you'll need to do before you can run the command is to create a GitHub access token that will be used to commit files and create workflows to the repository you specified. This access token must be a **classic** token and it must have the `workflow` permission. This token will be specified in the `accessToken` parameter of the `mod-connect github` command.

**Step 5: Run the command**

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

You're now ready to begin [configuring the Moderne agent](agent-configuration.md).
{% endtab %}

{% tab title="GitLab" %}
The [mod-connect gitlab](https://moderneinc.github.io/mod-connect/mod-connect-gitlab.html) command will directly commit an ingestion workflow and the necessary files to run it to the GitLab repository you specify. This workflow will iterate over every repository in a CSV file you create and build/publish LST artifacts for each on a regular basis. Behind the scenes, it will use the [Moderne CLI](../../../user-documentation/moderne-developer-experience/getting-started/cli-intro.md) to build and publish the LST artifacts.

To set this up, please follow the instructions in the [Moderne GitLab Ingest repository](https://gitlab.com/moderneinc/moderne-gitlab-ingest). This is also the repository you should fork and configure to set up the entire ingestion pipeline.
{% endtab %}

{% tab title="Jenkins" %}
The [mod-connect Jenkins](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) command will create a Jenkins Job for each repository you specify in a CSV file. Each job will build and publish LST artifacts to your artifact repository on a regular basis. Behind the scenes, it will use the [Moderne CLI](../../../user-documentation/moderne-developer-experience/getting-started/cli-intro.md) to build and publish the LST artifacts.

Below, we'll walk through the steps you'll need to take to run this command successfully. We'll assume you already have a Jenkins instance to use.

**Step 1: Create a Jenkins user**

In order for Moderne to connect to your Jenkins instance and create Jenkins Jobs, you'll need to create a Jenkins user and an API token (**recommended**) or a password. This user needs to have access to read plugin information and to create jobs. If you are using the [role strategy](https://plugins.jenkins.io/role-strategy/) plugin in your Jenkins instance, you will need `Job/read`, `Job/create`, `Job/build`, and optionally `Job/delete` and `Overall/read` permissions.

{% hint style="warning" %}
If you are a CloudBees CI user, you will need some additional permissions. Please see the notes at the bottom of the [mod-connect jenkins README](https://github.com/moderneinc/mod-connect#mod-connect-jenkins) for more information.
{% endhint %}

**Step 2: Create Jenkins credentials**

In order for a Jenkins Job to communicate with GitHub or your artifact repository, you'll need to create some [Jenkins Credentials](https://www.jenkins.io/doc/book/using/using-credentials/).

Specifically, you'll need to create credentials for:

* Cloning the provided list of repositories to Jenkins (CLI parameter: `gitCredsId`)
* Uploading LST artifacts to your artifact repository (CLI parameter: `publishCredsId`)

{% hint style="info" %}
The `mod-connect jenkins` command requires the _ID_ of the credential. When creating these credentials, make sure you save the ID to use in the CLI command rather than copying the actual credentials themselves.
{% endhint %}

**Step 3: Create the CSV file**

Once you have your Jenkins instance set up with the appropriate permissions, you'll want to make a CSV file that contains the list of the repositories you want to ingest as well as any necessary information for ingesting them. You can find the schema and detailed examples on our [mod-connect jenkins README](https://github.com/moderneinc/mod-connect#mod-connect-jenkins).

Here's an example of what the CSV file might look like:

```csv
,openrewrite/rewrite-spring,main,,gradle,java17,,,,
,openrewrite/rewrite-java-migration,main,,gradle,java17,,,,
```

**Step 4: Run the command**

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

You're now ready to begin [configuring the Moderne agent](agent-configuration.md).
{% endtab %}
{% endtabs %}

## Moderne CLI

If you are unable to set up a GitHub, GitLab, or Jenkins pipeline for building/publishing LST artifacts, you can update your existing pipelines to run a couple of [Moderne CLI commands](../../../user-documentation/moderne-developer-experience/getting-started/cli-intro.md).

Specifically, you will need to:

1. (**Optionally**) run the [mod config moderne command](https://moderneinc.github.io/moderne-cli/mod-config-moderne.html) to configure the connection to Moderne so that you can receive ingestion metrics and see ingestion information in your dashboard.
2. Run the [mod config artifacts command](https://moderneinc.github.io/moderne-cli/mod-config-artifacts.html) to configure the connection to your artifact repository.
3. Run the [mod build command](https://moderneinc.github.io/moderne-cli/mod-build.html) to generate the LST artifact for the repositories you care about.
4. Run the [mod publish command](https://moderneinc.github.io/moderne-cli/mod-publish.html) to publish the artifacts to your artifact repository.

These commands accept a variety of options. You can find details for each of these options in the [Moderne CLI man pages](https://moderneinc.github.io/moderne-cli/).

## Next Steps

* [Configure the Moderne agent](agent-configuration.md)
