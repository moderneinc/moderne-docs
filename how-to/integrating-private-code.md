# Integrating private code with Moderne

In order to run recipes on your code, you'll need to set up an ingestion pipeline that takes in a group of repositories, builds the LST artifacts for them, and publishes these artifacts to an artifact repository under your control.

There are two primary ways of configuring this: [creating Jenkins jobs](#jenkins) or [creating GitHub workflows](#github). This guide will walk you through both of those options.

## Prerequisite

Please ensure that you've [installed the Moderne CLI](/cli/cli-intro.md). Both of the below configuration options will use that.

## Jenkins

The [connect Jenkins](/cli/cli-intro.md#connect-jenkins) command in the Moderne CLI will create a Jenkins Job for each repository you specify in a CSV file. Each job will build and publish LST artifacts to your artifact repository on a regular basis.

Below, we'll walk through the steps you'll need to take to run this command successfully. We'll assume you already have a Jenkins instance to use.

### Step 1: Create a Jenkins user

In order for Moderne to connect to your Jenkins instance and create Jenkins Jobs, you'll need to create a Jenkins user and an API token (**recommended**) or a password. This user needs to have access to read plugin information and to create jobs.

{% hint style="warning" %}
If you are a CloudBees CI user, you will need some additional permissions. Please see the notes at the bottom of the [connect jenkins man page](https://moderneinc.github.io/moderne-cli/mod-connect-jenkins.html) for more information.
{% endhint %}

### Step 2: Create Jenkins credentials

In order for a Jenkins Job to communicate with GitHub or your artifact repository, you'll need to create some [Jenkins Credentials](https://www.jenkins.io/doc/book/using/using-credentials/).

Specifically, you'll need to create credentials for:

* Cloning the provided list of repositories to Jenkins (CLI parameter: `gitCredsId`)
* Uploading LST artifacts to your artifact repository (CLI parameter: `publishCredsId`)

{% hint style="info" %}
The `connect jenkins` command requires the _ID_ of the credential. When creating these credentials, make sure you save the ID to use in the CLI command rather than copying the actual credentials themselves.
{% endhint %}

### Step 3: Create the CSV file

Once you have your Jenkins instance set up with the appropriate permissions, you'll want to make a CSV file that contains the list of the repositories you want to ingest as well as any necessary information for ingesting them. You can find the schema and detailed examples on our [connect jenkins man page](https://moderneinc.github.io/moderne-cli/mod-connect-jenkins.html).

Here's an example of what the CSV file might look like:

```csv
,openrewrite/rewrite-spring,main,,gradle,java17,,,,
,openrewrite/rewrite-java-migration,main,,gradle,java17,,,,
```

### Step 4: Run the command

You should now have everything you need to run the command. You can find an example of what this might look like below:

```shell
mod connect jenkins --apiToken jenkinsApiToken \
   --controllerUrl https://jenkins.company-name.ninja \
   --fromCsv /path/to/repos.csv \
   --gitCredsId username-pat \
   --jenkinsUser some-username \
   --publishCredsId artifactory \
   --publishUrl https://artifact-place.com/artifactory/moderne-ingest
```

{% hint style="info" %}
There are a variety of optional parameters that you can find on the [connect jenkins man page](https://moderneinc.github.io/moderne-cli/mod-connect-jenkins.html) to refine the command further if you so desire. 
{% endhint %}

Once you've run the command, you should see that a Jenkins Job was created for every repository you specified in the CSV file. You should also see artifacts start to flow into your artifact repository from these jobs being run over time.

## GitHub

The [connect github](/cli/cli-intro.md#connect-github) command in the Moderne CLI will directly commit an ingestion workflow and the necessary files to run it to the GitHub repository you specify. This workflow will iterate over every repository in a CSV file you create and build/publish LST artifacts for each on a regular basis.

Below, we'll walk through the steps you'll need to take to run this command successfully.

### Step 1: Create the GitHub repository

Before running the `connect github` command, you will need to [create a GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo) that will store the workflow files and the CSV file that contains the repositories that should be ingested. This repo will be what you enter for the `repo` parameter in the `connect github` command.

### Step 2: Create GitHub secrets

Once you've made the repository, you'll need to create a few [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository). These secrets will be used by the workflow to communicate with other services such as your artifact repository.

{% hint style="info" %}
The `connect github` command requires the _name_ of the secret. When creating the below secrets, make sure you save the name of them to use in the CLI command rather than copying the actual secrets themselves.
{% endhint %}

These secrets you'll need to create are:

* A secret that contains the access token that will be used to run the GitHub workflows in the repository specified in the `repo` parameter (CLI parameter: `dispatchSecretName`).
* A secret that contains the access token with `read` access to each repository in the provided CSV (CLI parameter: `repoReadSecretName`).
* A secret that contains the password needed to upload LST artifacts to your artifact repository (CLI parameter: `publishPwdSecretName`).
* A secret that contains the username needed to upload LST artifacts to your artifact repository (CLI parameter: `publishUserSecretName`).

### Step 3: Create the CSV of repositories

Once the repository and secrets have been created, you will then need to make a CSV file that contains the list of repositories you want ingested as well as any necessary information for ingesting them. You can find the schema and detailed examples on our [connect github man page](https://moderneinc.github.io/moderne-cli/mod-connect-github.html).

Here's an example of what the CSV file might look like:

```csv
openrewrite/rewrite-spring,main,11,org.openrewrite.java.SpringFormat,,false,,
openrewrite/rewrite,master,17,,-Phadoop_2,,
foo/bar,main,11,,,true,some skip reason
```

### Step 4: Create a GitHub access token

The last thing you'll need to do before you can run the command is to create a GitHub access token that will be used to commit files and create workflows to the repository you specified. This access token must be a **classic** token and it must have the `workflow` permission. This token will be specified in the `accessToken` parameter of the `connect github` command.

### Step 5: Run the command

You should now have everything you need to run the command. You can find an example of what this might look like below:

```shell
mod connect github --accessToken moderne-github-access-token \
    --dispatchSecretName dispatchSecretName \
    --fromCsv /path/to/repos.csv \
    --publishPwdSecretName publishPwdSecretName \
    --publishUrl https://artifact-place.com/artifactory/moderne-ingest \
    --publishUserSecretName publishUserSecretName
    --repo company-name/repo-name \
    --repoReadSecretName readSecretName
```

{% hint style="info" %}
There are a variety of optional parameters that you can find on the [connect github man page](https://moderneinc.github.io/moderne-cli/mod-connect-github.html) to refine the command further if you so desire. 
{% endhint %}

Once you've run the command, you should start to see artifacts being created and sent to your artifact repository.

## Next Steps

* [Configure the Moderne agent](/how-to/agent-configuration.md)