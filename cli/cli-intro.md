# Getting started with the Moderne CLI

The Moderne CLI is a command line tool that simplifies the process of building and publishing [Lossless Semantic Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts to your artifact repository. Instead of having to manually set up each repository individually, you can use the CLI to configure thousands of repositories at once.

To help you get started with the Moderne CLI, this tutorial will:

* [Provide you with detailed installation instructions](#installation)
* [Walk you through each of the commands and their parameters](#commands)

## Installation

There are two ways to obtain the Moderne CLI: via the SaaS (**recommended**) or via a `curl` command.

{% tabs %}
{% tab title="SaaS" %}
1. Go to the [Moderne SaaS](https://public.moderne.io/) and sign in.
2.  Click on the `?` in the top right corner and then select `Moderne CLI` from the `Tools` menu:

    ![](.gitbook/assets/cli-download.png)
3.  You can then either press the `Download Latest` button or you can install it directly through the command line by copying the `curl` command at the bottom of the modal:

    ![](.gitbook/assets/cli-download2.png)
{% endtab %}

{% tab title="curl command" %}
From your command line, please run the command that corresponds to the OS you're using.

_If you want to download a different version of the CLI, replace the **two** versions (`v#.#.#`) in the curl request with the_ [_CLI version_](https://github.com/moderneinc/moderne-cli/releases) _you want._

**Mac OS**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-macos-tar/v0.0.55/moderne-cli-macos-tar-v0.0.55 > mod.tar.gz

tar -zxvf mod.tar.gz
```

**Linux**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-linux-tar/v0.0.55/moderne-cli-linux-tar-v0.0.55 > mod.tar.gz

tar -zxvf mod.tar.gz
```

**Windows**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-windows/v0.0.55/moderne-cli-windows-v0.0.55 > mod
```

**JDK (8+)**

```shell
curl --request GET https://pkgs.dev.azure.com/moderneinc/moderne_public/_packaging/moderne/maven/v1/io/moderne/moderne-cli-zip/v0.0.55/moderne-cli-zip-v0.0.55 > moderne-cli.zip

unzip moderne-cli.zip
```
{% endtab %}
{% endtabs %}

### Add an alias to run the CLI more easily

Once you have downloaded and extracted the CLI to the location you want it, it's a good idea to add an [alias](https://en.wikipedia.org/wiki/Alias_(command)) to the Moderne CLI so that you can type `mod <command>` instead of having to type `/path/to/moderne-cli <command>`. If you use bash or zsh for your shell, you can modify your `.bashrc` or `.zshrc` file and add something similar to:

```shell
alias mod='/path/to/moderne-cli'
```

You can then open a new terminal or type `source ~/.zshrc` to begin using it right away.

## Commands

* [Build](#build)
* [Publish](#publish)
* [Connect Jenkins](#connect-jenkins)
* [Connect GitHub](#connect-github)

### Build

The `build` command allows you to manually create the LST artifacts with Group Artifact Version coordinates for a specific project. Once created, you can manually upload the artifacts to your artifact library so that Moderne can ingest them.

This command is typically used for _debugging purposes_. In general, you should favor setting up a [Jenkins](#connect-jenkins) or [Github](#connect-github) connection for building, publishing, and ingesting LST artifacts in bulk.

If the command executes successfully, the LST artifact for each project will be stored in one of three places:

* For non-Java projects, a `.moderne/` directory will be created and used
* For Gradle projects, the `build` directory will be used
* For Maven projects, the `target` directory will be used

**Example:**

```sh
mod build --path=/path/to/project
```

#### Parameters

| **Parameter Name**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`                | <p><strong>Required</strong></p><p>&nbsp;</p><p>The path on disk to the project directory you want to be ingested into the Moderne platform. Typically a checked-out copy of a Git repository.</p><ul><li><strong>Example</strong>: <code>/path/to/project</code></li></ul>                                                                                                                                                     |
| `--additionalBuildArgs`         | <p><em>Optional</em></p><p>&nbsp;</p><p>Additional arguments that are added to the Maven or Gradle build command.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_BUILD_ARGS</code> if one exists.</li><li><strong>Example</strong>: <code>-Dmaven.antrun.skip=true -pl !packaging/pom.xml</code></li></ul>                                                                       |
| `--desiredStyle`         | <p><em>Optional</em></p><p>&nbsp;</p><p>The OpenRewrite style that should be applied to the code whenever a recipe is run. If a style isn't specified, OpenRewrite will detect the existing style and use that.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_DESIRED_STYLE</code> if one exists.</li><li><strong>Example</strong>: <code>/path/to/style.yml</code></li></ul>      |
| `--gradlePluginVersion` | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne Gradle plugin that should be used to build the artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_GRADLE_PLUGIN_VERSION</code> plus <code>:-latest.release</code> if one exists.</li><li><strong>Example</strong>: <code>0.37.0:-latest.release</code></li></ul>                                         |
| `--mirrorUrl`           | <p><em>Optional</em></p><p>&nbsp;</p><p>For Gradle projects, this can be specified as a Maven repository cache/mirror to check for artifacts before any other repositories are looked at.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MIRROR_URL</code> if one exists.</li><li><strong>Example</strong>: <code>http://1.2.3.4:8080/artifactory/moderne-cache-1</code></li></ul> |
| `--mvnPluginVersion`    | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne Maven plugin that should be used to build the artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MVN_PLUGIN_VERSION</code> plus <code>:-LATEST</code> if one exists.</li><li><strong>Example</strong>: <code>v0.38.0:-LATEST</code></li></ul>                                                            |
| `--mvnSettingsXml`      | <p><em>Optional</em></p><p>&nbsp;</p><p>The path to the <code>settings.xml</code> file that should be read and used for Maven builds.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MVN_SETTINGS_XML</code> if one exists.</li><li><strong>Example</strong>: <code>/path/to/settings.xml</code></li></ul>                                                                         |
| `--recursive`           | <p><em>Optional</em></p><p>&nbsp;</p><p>Specifies whether or not projects should be looked for recursively. If this parameter is included, it will start at the <code>--path</code> directory and recursively look for all git projects to build.</p><ul><li><strong>Default</strong>: <code>false</code></li></ul>                                                                                                             |

### Publish

The publish command allows you to manually build and publish LST artifacts for a specific project. Once published to your artifact repository, Moderne will be able to ingest them and they will, in turn, be usable inside of the SaaS.

This command is typically used for _debugging purposes_. In general, you should favor setting up a [Jenkins](#connect-jenkins) or [Github](connect-github) connection for building, publishing, and ingesting LST artifacts in bulk.

This command will begin by executing the [build](#build-command) command and, if that's successful, it will then attempt to upload the artifacts to the artifact repository you specified.

**Example:**

```sh
mod publish --path=/path/to/project \
    --publishUser=some-username
    --publishPwd=myPassword \
    --publishUrl=https://some-artifact-repo.com \
```

#### Parameters

| **Parameter Name**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`                | <p><strong>Required</strong></p><p>&nbsp;</p><p>The path on disk to the project directory you want to be ingested into the Moderne platform. Typically a checked-out copy of a Git repository.</p><ul><li><strong>Example</strong>: <code>/path/to/project</code></li></ul>                                                                                                                                                     |
| `--publishUser`                | <p><strong>Required</strong></p><p>&nbsp;</p><p>The user that has permission to upload LST artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_PUBLISH_USER</code> if one exists.</li><li><strong>Example</strong>: <code>some-username</code></li></ul>                                                                                                                     |
| `--publishPwd`            | <p><strong>Required</strong></p><p>&nbsp;</p><p>The password for the user that has permission to upload LST artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_PUBLISH_PWD</code> if one exists.</li><li><strong>Example</strong>: <code>some-password</code></li></ul>                                                                                                     |
| `--publishUrl`                 | <p><strong>Required</strong></p><p>&nbsp;</p><p>The URL of the Maven formatted repository where LST artifacts should be uploaded to.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_PUBLISH_URL</code> if one exists.</li><li><strong>Example</strong>: <code>https://some-artifact-repo.com</code></li></ul>                                                                      |
| `--additionalBuildArgs`         | <p><em>Optional</em></p><p>&nbsp;</p><p>Additional arguments that are added to the Maven or Gradle build command.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_BUILD_ARGS</code> if one exists.</li><li><strong>Example</strong>: <code>-Dmaven.antrun.skip=true -pl !packaging/pom.xml</code></li></ul>                                                                       |
| `--desiredStyle`         | <p><em>Optional</em></p><p>&nbsp;</p><p>The OpenRewrite style that should be applied to the code whenever a recipe is run. If a style isn't specified, OpenRewrite will detect the existing style and use that.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_DESIRED_STYLE</code> if one exists.</li><li><strong>Example</strong>: <code>/path/to/style.yml</code></li></ul>      |
| `--gradlePluginVersion` | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne Gradle plugin that should be used to build the artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_GRADLE_PLUGIN_VERSION</code> plus <code>:-latest.release</code> if one exists.</li><li><strong>Example</strong>: <code>0.37.0:-latest.release</code></li></ul>                                         |
| `--mirrorUrl`           | <p><em>Optional</em></p><p>&nbsp;</p><p>For Gradle projects, this can be specified as a Maven repository cache/mirror to check for artifacts before any other repositories are looked at.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MIRROR_URL</code> if one exists.</li><li><strong>Example</strong>: <code>http://1.2.3.4:8080/artifactory/moderne-cache-1</code></li></ul> |
| `--mvnPluginVersion`    | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne Maven plugin that should be used to build the artifacts.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MVN_PLUGIN_VERSION</code> plus <code>:-LATEST</code> if one exists.</li><li><strong>Example</strong>: <code>v0.38.0:-LATEST</code></li></ul>                                                            |
| `--mvnSettingsXml`      | <p><em>Optional</em></p><p>&nbsp;</p><p>The path to the <code>settings.xml</code> file that should be read and used for Maven builds.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MVN_SETTINGS_XML</code> if one exists.</li><li><strong>Example</strong>: <code>/path/to/settings.xml</code></li></ul>                                                                         |
| `--recursive`           | <p><em>Optional</em></p><p>&nbsp;</p><p>Specifies whether or not projects should be looked for recursively. If this parameter is included, it will start at the <code>--path</code> directory and recursively look for all git projects to build.</p><ul><li><strong>Default</strong>: <code>false</code></li></ul>                                                                                                             |
| `--skipBuild`           | <p><em>Optional</em></p><p>&nbsp;</p><p>If this parameter is included, the build command will not be run before this publish command.</p><ul><li><strong>Default</strong>: <code>false</code></li></ul>                                                                                                                                                                                                                         |
| `--skipSSL`             | <p><em>Optional</em></p><p>&nbsp;</p><p>If this parameter is included, SSL verification will be skipped.</p><ul><li><strong>Default</strong>: <code>false</code></li></ul>                                                                                                                                                                                                                                                      |

### Connect Jenkins

The `connect jenkins` job allows you to create Jenkins Jobs in bulk. For each configured repository, a Jenkins Job will be made that builds and publishes LST artifacts to your artifact repository on a regular basis.

{% hint style="info" %}
If you are a CloudBees CI authenticated user, you will also need these permissions:

* Overall/System Read access. This is needed to get the list of plugins and their versions.
  * `GET /pluginManager/api/json`
* Create, Configure, Read folders and Jobs.
  * `POST /createItem`
  * `GET /job/$folder/api/json`
  * `GET /job/$folder/job/$item/api/json`
* (Optionally) Delete jobs. This is only required if `--deleteSkipped` is selected.
  * `POST /job/$folder/job/$item/doDelete`

For more details around these permissions, please see the [CloudBees docs](https://docs.cloudbees.com/docs/cloudbees-ci/latest/cloud-secure-guide/delegating-administration-modern#\_overallsystem\_read).
{% endhint %}

**Example:**

```sh
mod connect jenkins --controllerUrl=https://jenkins.company-name.ninja \
    --fromCsv=/path/to/repos.csv \
    --gitCredsId=username-pat \
    --jenkinsUser=some-username
    --publishCredsId=artifactory \
    --publishUrl=https://artifact-place.com/artifactory/moderne-ingest \
```

#### CSV Format

Please ensure your CSV follows this format: `scmHost,repoName,repoBranch,mavenTool,gradleTool,jdkTool,desiredStyle,additionalBuildArgs,skip,skipReason`

| Column Name           | Description                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `scmHost `            | <em>Optional</em><p>&nbsp;</p><p>The URL of the source code management tool where the repository is hosted (e.g., `github.com` or `gitlab.com`).</p> |
| `repoName`            | <strong>Required</strong><p>&nbsp;</p><p>The repository that should be ingested. Follows the format of `organization/repository` (e.g., `openrewrite/rewrite`).</p> |
| `repoBranch`          | <em>Optional</em><p>&nbsp;</p><p>The branch of the above repository that should be ingested. Defaults to `main`.</p>                                       |
| `mavenTool`         | <em>Optional</em><p>&nbsp;</p><p>The name of the Maven tool that should be used to run Maven jobs. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`)</p> |
| `gradleTool`         | <em>Optional</em><p>&nbsp;</p><p>The name of the Gradle tool that should be used to run Gradle jobs. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`)</p> |
| `jdkTool`         | <em>Optional</em><p>&nbsp;</p><p>The name of the JDK tool that should be used to run JDK jobs. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`)</p> |
| `desiredStyle`    | <em>Optional</em><p>&nbsp;</p><p>The OpenRewrite style name to apply during ingest (e.g., `org.openrewrite.java.SpringFormat`).</p>                        |
| `additionalBuildArgs` | <em>Optional</em><p>&nbsp;</p><p>Additional arguments that are added to the Maven or Gradle build command (e.g., `-Dmaven.antrun.skip=true`).</p>          |
| `skip`                | <em>Optional</em><p>&nbsp;</p><p>If set to true, this repo will not be ingested. Defaults to `false`.</p>                                                  |
| `skipReason`          | <em>Optional</em><p>&nbsp;</p><p>Context for why the repo is being skipped.                                                                            |

**CSV Example**:

```csv
,openrewrite/rewrite-spring,main,,gradle,java17,,,false,
,openrewrite/rewrite-java-migration,main,,gradle,java17,,,false,
// More Rows
```

#### Jenkins Parameters

| **Parameter Name**            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--controllerUrl`             | <p><strong>Required</strong></p><p>&nbsp;</p><p>The URL of the Jenkins controller that will create the jobs. Typically this is the URL of your Jenkins instance.</p><ul><li><strong>Example</strong>:<code>https://jenkins.company-name.ninja</code></li></ul>                                                                                                                                                                  |
| `--fromCsv`                   | <p><strong>Required</strong></p><p>&nbsp;</p><p>The location of the CSV file containing the list of repositories that should be ingested. One Jenkins Job will be made for each repository.<br><br>Follows the schema of: <code>[repoName,branch,javaVersion,style,buildAction,skip,skipReason]</code>.</p><ul><li><strong>Example</strong>: <code>/path/to/repos.csv</code></li></ul>                                          |
| `--gitCredsId`                | <p><strong>Required</strong></p><p>&nbsp;</p><p>The ID of the Jenkins credentials needed to clone the provided list of repositories.</p><ul><li><strong>Example</strong>: <code>username-pat</code></li></ul>                                                                                                                                                                                                                   |
| `--jenkinsUser`                      | <p><strong>Required</strong></p><p>&nbsp;</p><p>The Jenkins user that will be used to create the Jenkins Jobs.</p><ul><li><strong>Example</strong>: <code>some-username</code></li></ul>                                                                                                                                                                                                                                        |
| `--publishCredsId`            | <p><strong>Required</strong></p><p>&nbsp;</p><p>The ID of the Jenkins credentials needed to upload LST artifacts to your artifact repository.</p><ul><li><strong>Example</strong>: <code>artifactory</code></li></ul>                                                                                                                                                                                                           |
| `--publishUrl`                       | <p><strong>Required</strong></p><p>&nbsp;</p><p>The URL of the Maven repository where LST artifacts should be uploaded to.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_PUBLISH_URL</code> if one exists.</li><li><strong>Example</strong>: <code>https://artifact-place.com/artifactory/moderne-ingest</code></li></ul>                                                         |
| `--agent`                     | <p><em>Optional</em></p><p>&nbsp;</p><p>The name of the Jenkins agent that will run the pipeline.</p><ul><li><strong>Default</strong>: <code>any</code></li></ul>                                                                                                                                                                                                                                                               |
| `--apiToken`                  | <p><em>Optional</em></p><p>&nbsp;</p><p>The Jenkins apiToken that will be used when authentication is needed in Jenkins (e.g., the creation of Jenkins Jobs).</p><ul><li><strong>Example</strong>: <code>some-api-token</code></li></ul>                                                                                                                                                                                        |
| `--cliVersion`                | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne CLI that should be used when running Jenkins Jobs.</p><ul><li><strong>Example</strong>: <code>v0.0.43</code></li></ul>                                                                                                                                                                                                                                       |
| `--defaultBranch`             | <p><em>Optional</em></p><p>&nbsp;</p><p>If no Git branch is specified for a repository in the CSV file, the Jenkins Job will attempt to checkout this branch when pulling down the code.</p><ul><li><strong>Default</strong>: <code>main</code></li></ul>                                                                                                                                                                       |
| `--defaultGradle`             | <p><em>Optional</em></p><p>&nbsp;</p><p>The name of the Gradle tool that should be used to run Gradle jobs if one isn't provided in the CSV. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`).</p><ul><li><strong>Example</strong>: <code>gradle 7.4.2</code></li></ul>                                                                                                                                                                                   |
| `--defaultJdk`                | <p><em>Optional</em></p><p>&nbsp;</p><p>The name of the JDK tool that should be used to run Java jobs if one isn't provided in the CSV. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`).</p><ul><li><strong>Example</strong>: <code>java11</code></li></ul>                                                                                                                                                                                              |
| `--defaultMaven`              | <p><em>Optional</em></p><p>&nbsp;</p><p>The name of the Maven tool that should be used to run Maven jobs if one isn't provided in the CSV. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`).</p><ul><li><strong>Example</strong>: <code>maven3.3.9</code></li></ul>                                                                                                                                                                                       |
| `--deleteSkipped`             | <p><em>Optional</em></p><p>&nbsp;</p><p>If set to true, whenever a repository in the CSV file has <code>skip</code> set to true, the corresponding Jenkins Job will be deleted.</p><p><br>This is useful if you want to remove specific jobs that are failing, but you also want to preserve the list of repositories that are ingested.</p><ul><li><strong>Default</strong>: <code>false</code></li></ul>                      |
| `--downloadCLI`               | <p><em>Optional</em></p><p>&nbsp;</p><p>Specifies whether or not the Moderne CLI should be downloaded at the beginning of each Jenkins Job run.</p><ul><li><strong>Default</strong>: <code>true</code></li></ul>                                                                                                                                                                                                                |
| `--mavenSettingsConfigFileId` | <p><em>Optional</em></p><p>&nbsp;</p><p>The ID of the Jenkins Maven settings config file that will be used to configure Maven builds. Specified in the Jenkins Global Tool Configuration page (e.g., `${controllerUrl}/manage/configureTools/`).</p><ul><li><strong>Example</strong>: <code>maven-ingest-settings-credentials</code></li></ul>                                                                                                                                    |
| `--folder`                    | <p><em>Optional</em></p><p>&nbsp;</p><p>The Jenkins folder that will store the created jobs. This folder will be created if it does not exist.</p><ul><li><strong>Default</strong>: <code>moderne-ingest</code></li></ul>                                                                                                                                                                                                       |
| `--jenkinsPassword`                  | <p><em>Optional</em></p><p>&nbsp;</p><p>The Jenkins password that will be used when authentication is needed in Jenkins (e.g., the creation of Jenkins Jobs).<br><br><em>Jenkins best practices recommend using an apiToken instead of a password.</em></p><ul><li><strong>Example</strong>: <code>somePassword</code></li></ul>                                                                                                |
| `--mirrorUrl`                 | <p><em>Optional</em></p><p>&nbsp;</p><p>For Gradle projects, this can be specified as a Maven repository cache/mirror to check for artifacts before any other repositories are looked at.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_MIRROR_URL</code> if one exists.</li><li><strong>Example</strong>: <code>http://1.2.3.4:8080/artifactory/moderne-cache-1</code></li></ul> |
| `--platform`                  | <p><em>Optional</em></p><p>&nbsp;</p><p>The OS platform for the Jenkins node/agent. The possible options are: <code>windows</code>, <code>linux</code>, or <code>macos</code>.</p><ul><li><strong>Default</strong>: <code>linux</code></li></ul>                                                                                                                                                                                |
| `--prefix`                    | <p><em>Optional</em></p><p>&nbsp;</p><p>If specified, Jenkins Jobs will only be created for repositories that start with this prefix.</p><ul><li><strong>Example</strong>: <code>moderne</code></li></ul>                                                                                                                                                                                                                       |
| `--scheduledAt`               | <p><em>Optional</em></p><p>&nbsp;</p><p>The cron schedule that the Jenkins Jobs should follow. By default, Jenkins will execute each job once a day while making sure to space them out so that the system is not overloaded at one particular time.</p><ul><li><strong>Default</strong>: <code>H H * * *</code></li></ul>                                                                                                      |

### Connect GitHub

The `connect github` command will create GitHub workflows that build and publish LST artifacts to your artifact repository on a regular basis. A workflow can be created for ingesting a single repository (by specifying the `path` parameter) or workflows can be created for ingesting a mass number of repositories (by specifying the `fromCsv` parameter).

{% tabs %}
{% tab title="Using the path parameter" %}
This command will create a `moderne-workflow.yml` file in the `.github/workflows` directory at the `path` you specified. This workflow file can then be modified and published to a GitHub repository to set up the workflow for building and publishing LST artifacts for that repository.

When running this command you will need to ensure that you provide the `publishPwdSecretName`, `publishUrl`, and `publishUserSecretName` parameters.

For the `publishPwdSecretName` and `publishUserSecretName` parameters, the expectation is that you will create a GitHub secret for each inside of the repository you're wanting to ingest. When running this command, you'd then provide the names of these secrets rather than the secrets themselves (e.g., `--publishPwdSecretName <name of GitHub secret>`).

**Example**:

```sh
mod connect github --artifactRepoPasswordSecretName=foo \
    --artifactRepoUrl=https://some-repo.com \
    --artifactRepoUserSecretName=someSecret \
    --path=/path/to/project \
```
{% endtab %}
{% tab title="Using the fromCsv parameter" %}

This command will directly commit two workflows and the necessary files to run them to the GitHub repository you specify. The first workflow will read the CSV file and then call the second workflow for each repository in the CSV in parallel. The second workflow builds and publishes the LST artifacts for repository it was called with.

Before running the `connect github` command with the `fromCsv` parameter, you will need to ensure that you've created a dedicated GitHub repository where all of these files can be uploaded to.

When running this command, you will need to ensure that you provide the `accessToken`, `publishUrl`, `publishPwdSecretName`, `publishUserSecretName`, `dispatchSecretName`, `repoReadSecretName`, and `repo` parameters.

For the `publishPwdSecretName`, `publishUserSecretName`, `dispatchSecretName`, and `repoReadSecretName` parameters, the expectation is that you will create a GitHub secret for each inside of the repository you provided to this command. When running this command, you'd then provide the names of these secrets rather than the secrets themselves (e.g., `--publishPwdSecretName <name of GitHub Secret>`).

**Example**:

```sh
mod connect github --accessToken=moderne-github-access-token \
    --dispatchSecretName=dispatchSecretName \
    --fromCsv=/path/to/repos.csv \
    --repoReadSecretName=readSecretName \
    --path=/path/to/project \
    --publishPwdSecretName=repoPasswordName \
    --publishUrl=https://artifact-place.com/artifactory/moderne-ingest \
    --publishUserSecretName=userSecretName 
    --repo=company-name/repo-name \
```

**CSV Format**:

Please ensure your CSV follows this format: `repoName,repoBranch,javaVersion,desiredStyle,additionalBuildArgs,skip,skipReason`

| Column Name           | Description                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `repoName`            | <strong>Required</strong><p>&nbsp;</p><p>The repository that should be ingested. Follows the format of `organization/repository` (e.g., `openrewrite/rewrite`).</p> |
| `repoBranch`          | <em>Optional</em><p>&nbsp;</p><p>The branch of the above repository that should be ingested. Defaults to `main`.</p>                                       |
| `javaVersion`         | <em>Optional</em><p>&nbsp;</p><p>The Java version used to compile this repository. Defaults to `11`.</p>                                                   |
| `desiredStyle`    | <em>Optional</em><p>&nbsp;</p><p>The OpenRewrite style name to apply during ingest (e.g., `org.openrewrite.java.SpringFormat`).</p>                        |
| `additionalBuildArgs` | <em>Optional</em><p>&nbsp;</p><p>Additional arguments that are added to the Maven or Gradle build command (e.g., `-Dmaven.antrun.skip=true`).</p>          |
| `skip`                | <em>Optional</em><p>&nbsp;</p><p>If set to true, this repo will not be ingested. Defaults to `false`.</p>                                                  |
| `skipReason`          | <em>Optional</em><p>&nbsp;</p><p>Context for why the repo is being skipped.                                                                            |

**CSV Example**:

```csv
openrewrite/rewrite-spring,main,11,org.openrewrite.java.SpringFormat,,false,,
openrewrite/rewrite,master,17,,-Phadoop_2,,
foo/bar,main,11,,,true,some skip reason
// More Rows
```
{% endtab %}
{% endtabs %}

#### GitHub Parameters

| **Parameter Name**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--accessToken`      | <p><strong>Required</strong> (if <code>fromCsv</code> is specified). <em>Optional</em> otherwise.</p><p>&nbsp;</p><p>A <strong>classic</strong> GitHub access token that will be used to commit files and create workflows (a fine-grained token won't work). This token <em>will not</em> be used to run the workflows.</p><p>&nbsp;</p><p>This token requires <code>workflow</code> permissions. <br></p><ul><li><strong>Example</strong>: <code>ghp_someAccessToken</code></li></ul>                                                                                                                      |
| `--dispatchSecretName` | <p><strong>Required</strong> (if <code>fromCsv</code> is specified). <em>Optional</em> otherwise.</p><p>&nbsp;</p><p>The name of the GitHub secret that contains the access token that will be used to run the GitHub workflows in the repo specified in the <code>repo</code> parameter. This token requires <code>workflow</code> permissions.</p><p>&nbsp;</p><p>GitHub secrets can be created inside of of the Security –> Secrets –> Actions section in a GitHub repository.</p><ul><li><strong>Example</strong>: <code>dispatchSecretName</code></li></ul> |
| `--fromCsv`          | <p><strong>Either <code>path</code> or <code>fromCsv</code> is required</strong></p><p>&nbsp;</p><p>The location of the CSV file containing the list of repositories that should be ingested into Moderne. A GitHub action will build and publish LST artifacts for every repository in this file.</p><p>&nbsp;</p><p>Follows the schema of: <code>[repoName,branch,javaVersion,desiredStyle,additionalBuildArgs,skip,skipReason]</code>.</p><ul><li><strong>Example</strong>: <code>/path/to/repos.csv</code></li></ul>                                       |
| `--path`             | <p><strong>Either <code>path</code> or <code>fromCsv</code> is required</strong></p><p>&nbsp;</p><p>The local path to the Git repository where a GitHub workflow should be created.</p><ul><li><strong>Example</strong>: <code>/path/to/local/repo</code></li></ul>                                                                                                                                                                                                                                                                        |
| `--publishPwdSecretName` | <p><strong>Required</strong></p><p>&nbsp;</p><p>The name of the GitHub secret that contains the password needed to upload LST artifacts to your artifact repository.</p><p>&nbsp;</p><p>GitHub secrets can be created inside of of the Security –> Secrets –> Actions section in a GitHub repository.</p><ul><li><strong>Example:</strong> <code>passwordSecretName</code></li></ul>                                                                                                                                                            |
| `--publishUrl`              | <p><strong>Required</strong></p><p>&nbsp;</p><p>The URL of the Maven formatted artifact repository where LST artifacts should be uploaded to.</p><ul><li><strong>Default</strong>: Will default to the environment variable <code>MODERNE_PUBLISH_URL</code> if one exists.</li><li><strong>Example</strong>: <code>https://some-artifact-repo.com</code></li></ul>                                                                                                                                                                        |
| `--publishUserSecretName`     | <p><strong>Required</strong></p><p>&nbsp;</p><p>The name of the GitHub secret that contains the username needed to upload LST artifacts to your artifact repository.</p><p>&nbsp;</p><p>GitHub secrets can be created inside of of the Security –> Secrets –> Actions section in a GitHub repository.</p><ul><li><strong>Example</strong>: <code>userSecretName</code></li></ul>                                                                                                                                                                |
| `--repo`             | <p><strong>Required</strong> (if <code>fromCsv</code> is specified). <em>Optional</em> otherwise.</p><p>&nbsp;</p><p>The dedicated GitHub repository where the workflows and the CSV file will be committed to. Follows the format of <code>organization/repository</code>.</p><ul><li><strong>Example</strong>: <code>openrewrite/rewrite</code></li></ul>                                                                                                                                                                                |
| `--repoReadSecretName`      | <p><strong>Required</strong> (if <code>fromCsv</code> is specified). <em>Optional</em> otherwise.</p><p>&nbsp;</p><p>The name of the GitHub secret that contains the access token with read access to each repository in the provided CSV.</p><p>&nbsp;</p><p>GitHub secrets can be created inside of of the Security –> Secrets –> Actions section in a GitHub repository.</p><ul><li><strong>Example</strong>: <code>gitSecretName</code></li></ul>                                                                                           |
| `--additionalBuildArgs`      | <p><em>Optional</em></p><p>&nbsp;</p><p>Additional arguments that are added to the Maven or Gradle build command.</p><ul><li><strong>Example</strong>: <code>-Dmaven.antrun.skip=true -pl !packaging/pom.xml</code></li></ul>                                                                                                                                                                                                                                                                                                              |
| `--apiUrl`           | <p><em>Optional</em></p><p>&nbsp;</p><p>The base URL for the GitHub REST API. For GitHub enterprise users, this commonly follows the format of <code>http(s)://HOSTNAME/api/v3</code>.</p><ul><li><strong>Default</strong>: <code>https://api.github.com</code></li></ul>                                                                                                                                                                                                                                                                  |
| `--branch`           | <p><em>Optional</em></p><p>&nbsp;</p><p>The branch of the GitHub repository specified in the <code>repo</code> parameter where the generated workflow files should be committed to.</p><ul><li><strong>Default</strong>: <code>main</code></li></ul>                                                                                                                                                                                                                                                                                       |
| `--cliVersion`       | <p><em>Optional</em></p><p>&nbsp;</p><p>The version of the Moderne CLI that should be used when running the ingestion workflow. Follows standard semantic versioning with a v in front of the version number.</p><ul><li><strong>Example</strong>: <code>v0.0.50</code></li></ul>                                                                                                                                                                                                                                                          |
| `--javaVersion`      | <p><em>Optional</em></p><p>&nbsp;</p><p>The Java version needed to compile and run the repository that is indicated in the <code>path</code> parameter. Can be any major version (8, 11, 17).</p><ul><li><strong>Default</strong>: <code>11</code></li></ul>                                                                                                                                                                                                                                                                               |
