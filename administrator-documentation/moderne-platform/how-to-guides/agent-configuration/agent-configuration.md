# Configuring the Moderne agent

In order to securely communicate with the Moderne SaaS, you will need to set up an on-premise agent in your environment. To assist you with that process and provide you with information about the agent, this guide will:

* [Give you some high-level information about the agent](agent-configuration.md#high-level-agent-information)
* [Provide step-by-step instructions for configuring the agent](agent-configuration.md#agent-setup-instructions)
* [Teach you how to update the agent later on](agent-configuration.md#updating-your-agent)

## High-level agent information

### What does the agent do?

The Moderne on-premise agent:

* Encrypts and ships [LST](../../references/concepts/lossless-semantic-trees.md) and recipe artifacts from your artifact repository (e.g., Artifactory) to the Moderne SaaS
* Provides the symmetric key that Moderne needs to decrypt your artifacts
* Forwards requests from the Moderne SaaS to your SCM(s) (e.g., GitHub)
* Forwards requests from the Moderne SaaS to the organization service (if configured)

## Agent setup instructions

### Step 1: Contact Moderne to obtain access OR download from Maven central

Please talk to your sales representative or [contact us](mailto:support@moderne.io) in order to obtain access to the agent. We will work with you to determine what access details are appropriate for your platform.

You can also download the JAR directly from Maven Central:

{% embed url="https://repo1.maven.org/maven2/io/moderne/moderne-agent/0.190.0/moderne-agent-0.190.0.jar" %}
Agent download link
{% endembed %}

### Step 2: Generate your symmetric key

The Moderne agent requires customers to create a hex-encoded 256-bit AES encryption key. This key will be used to encrypt LST and recipe artifacts before they are sent to your SaaS tenant. To generate a key, please run the following `openssl` command:

```shell
openssl enc -aes-256-cbc -k secret -P
```

This will return a `salt`, `key`, and `iv`. Please copy the `key` and save it for use in [step 4](agent-configuration.md#step-4-configure-the-agent-with-the-core-variablesarguments) as the `symmetricKey`.

### Step 3: Determine how you will run the agent

Moderne offers two ways of running the agent:

1. An [OCI image](https://github.com/opencontainers/image-spec) that can be run using any OCI runtime (e.g., Docker, Podman)
2. A Spring Boot executable JAR that can be run with Java

Regardless of which one you pick, you'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent or local storage.

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the agent.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform\_as\_a\_service) environment such Cloud Foundry, you'll want to use the JAR to run the agent.

The table below provides the core command for running the agent. However, in order for the agent to function correctly, additional variables will need to be added based on your environment (such as what SCM(s) your company uses, what artifact repositories you have configured, and whether or not you've configured an [Organizations service](../organizations-service.md)). We'll walk through each of those in the following steps.

{% tabs %}
{% tab title="OCI Container" %}
**How to run the agent:**

1. Log in to the Moderne registry:

```shell
docker login -u moderne-tenant -p <password provided by Moderne> moderne.azurecr.io
```

2. Pull down the latest agent:

```shell
docker pull moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```

3. Run the `docker run` command in combination with environment variables that you'll add in the subsequent steps. The final command will look similar to:

```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

docker run \
# Example environment variables. These will be explained in step 4.
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
# ... Additional environment variables
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
**How to run the agent:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

java -jar moderne-agent-{version}.jar \
# Example arguments. These will be explained in step 4.
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
# ... Additional arguments
```

* **Note:** System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
{% endtab %}
{% endtabs %}

### Step 4: Configure the agent with the core variables/arguments

All agents must be configured with the variables listed as required below:

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_APIGATEWAYRSOCKETURI` – **(Required)** _The URI used to connect to the Moderne API, provided by Moderne._
* `MODERNE_AGENT_CRYPTO_SYMMETRICKEY` – **(Required)** _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `MODERNE_AGENT_NICKNAME` – **(Required)** _A name used to identify your agent in the SaaS agent dashboard UI._
* `MODERNE_AGENT_TOKEN` – **(Required)** _The Moderne SaaS agent connection token, provided by Moderne._
* `MODERNE_AGENT_DOWNLOADPARALLELISM` – _(Optional) How many threads are used to download LSTs. Defaults to `2` threads._
* `MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS` – _(Optional) How frequently LSTs will be indexed. Defaults to `120` seconds._
* `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}` – _(Optional) Use to restrict which commit options are available on a tenant level (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. By default all options are available._

**Example:**

```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.apiGatewayRsocketUri` – **(Required)** _The URI used to connect to the Moderne API, provided by Moderne._
* `--moderne.agent.crypto.symmetricKey` – **(Required)** _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `--moderne.agent.nickname` – **(Required)** _A name used to identify your agent in the SaaS agent dashboard UI._
* `--moderne.agent.token` – **(Required)** _The Moderne SaaS agent connection token, provided by Moderne._
* `--moderne.agent.downloadParallelism` – _(Optional) How many threads are used to download LSTs. Defaults to `2` threads._
* `--moderne.agent.artifactIndexIntervalSeconds` – _(Optional) How frequently LSTs will be indexed. Defaults to `120` seconds._
* `--moderne.agent.defaultCommitOptions[{index}]` – _(Optional) Use to restrict which commit options are available on a tenant level (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. By default all options are available._

**Example:**

```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.defaultCommitOptions[0]=PullRequest \
--moderne.agent.defaultCommitOptions[1]=ForkAndPullRequest \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

### Step 5: Configure the agent to work with your SCM(s)

Connecting the agent to your SCM enables Moderne to display recipe results in the UI and commit changes from recipes back to your SCM (in the form of PRs, forks, commits, etc).

For every SCM that you want to connect to Moderne, please follow the instructions in the following guides. These guides will explain how to configure an SCM to talk to the Moderne agent and they will provide you with a list of variables to add to the agent run command. You can configure one agent with multiple SCMs.

**SCM configuration:**

* [Azure DevOps Services configuration](configure-an-agent-with-azure-devops-services.md)
* [Bitbucket Cloud configuration](configure-bitbucket-cloud-to-agent.md)
* [Bitbucket Data Center configuration](configure-bitbucket-to-agent.md)
* [GitHub configuration](configure-an-agent-with-github.md)
* [GitLab configuration](configure-an-agent-with-gitlab.md)

Below is an example of what an agent run command might look like at the end of this step.

{% tabs %}
{% tab title="OCI Container" %}
```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables to come
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments to come
```
{% endtab %}
{% endtabs %}

### Step 6: Configure the agent to connect to your artifact repositories

The Moderne agent needs to connect to your artifact repositories for two reasons:

1. To obtain your [LST](../../references/concepts/lossless-semantic-trees.md) artifacts so that recipes can be run on your code.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne agent to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

{% hint style="info" %}
The Moderne agent can only talk to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)). A single instance of one of these products may contain multiple Maven repositories.
{% endhint %}

Moderne offers two options for connecting to your artifact repository: a generic Maven connection that can connect to any Maven formatted repository regardless of vendor and an Artifactory-specific connection that is optimized to serve LST artifacts more quickly.

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](configure-an-agent-with-maven-repository-access.md) and then jump to [Step 7](agent-configuration.md#step-7-optionally-configure-the-organizations-service).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](configure-an-agent-with-artifactory-access.md) to set up a connection that serves LST artifacts to Moderne. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](configuring-artifactory-with-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](configure-an-agent-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and showing up in Moderne. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                      | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is not tied to a particular vendor.                                                                                                                                                                                                                                                                                                                                                                                                                     | Can only be used with Artifactory.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Serves BOTH recipe artifacts and LST artifacts.                                                                                                                                                                                                                                                                                                                                                                                                         | Serves ONLY LST artifacts. Requires Maven configuration to serve recipe artifacts.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe artifacts are immediately available for [deployment to Moderne](../importing-external-recipes.md) upon publishing to the Maven formatted repository.                                                                                                                                                                                                                                                                                             | Can not serve recipe artifacts without Maven configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it shows up in Moderne. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will show up in near-real time (within a minute or two) in the Moderne Platform when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](configure-an-agent-with-maven-repository-access.md) or [Artifactory](configure-an-agent-with-artifactory-access.md) instructions before continuing.

Below is an example of what an agent run command might look like at the end of this step.

{% tabs %}
{% tab title="OCI Container" %}
```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME \
-e MODERNE_AGENT_MAVEN_0_PASSWORD \
# ... Additional variables to come
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
# ... Additional arguments to come
```
{% endtab %}
{% endtabs %}

### Step 7: (Optionally) Configure the Organizations service

Many organizations desire the ability to control the organizational structure of their repositories within the Moderne Platform in a dynamic way. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted inside of your environment.

If you want to set up this service, please check out our [configuring the Organizations service guide](/administrator-documentation/moderne-platform/how-to-guides/organizations-service.md). Then, once it has been set up, [please configure the agent accordingly](./configure-organizations-service.md).

Below is an example of what an agent run command might look like at the end of this step if you set up the Organizations service.

{% tabs %}
{% tab title="OCI Container" %}
```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME \
-e MODERNE_AGENT_MAVEN_0_PASSWORD \
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
```
{% endtab %}
{% endtabs %}

### Step 8: (Optionally) Use strict recipe sources.

Some organizations want recipe artifacts to only come from locations configured in the Moderne agent. If you want to configure that, please follow the [strict recipe sources instructions](configure-an-agent-with-strict-recipe-sources.md).

Below is an example of what an agent run command might look like at the end of this step if you configured the agent to use only configured recipe sources.

{% tabs %}
{% tab title="OCI Container" %}
```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME \
-e MODERNE_AGENT_MAVEN_0_PASSWORD \
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
--moderne.agent.recipe.useOnlyConfigured=true
```
{% endtab %}
{% endtabs %}

### Step 9: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please follow [these instructions](configure-an-agent-with-client-ssl-certificates.md) to configure the KeyStore.

### Step 10: Run the agent

At this point, you should have configured everything needed to run the Moderne agent. If you run into issues running the command, please don't hesitate to reach out.

Below is a table that has instructions for how to run the agent in combination with some examples of the variables/arguments provided in the previous steps:

{% tabs %}
{% tab title="OCI Container" %}
1. Log in to the Moderne registry:

```shell
docker login -u moderne-tenant -p <password provided by Moderne> moderne.azurecr.io
```

2. Pull down the latest agent:

```shell
docker pull moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```

3. Run the `docker run` command in combination with all of the environment variables you've added in the previous steps:

```shell
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME \
-e MODERNE_AGENT_MAVEN_0_PASSWORD \
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
Use `java` to run a jar in combination with arguments that you've added in the previous steps:

```shell
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_AGENT_ARTIFACTORY_0_USERNAME=...
export MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=...
export MODERNE_AGENT_MAVEN_0_USERNAME=...
export MODERNE_AGENT_MAVEN_0_PASSWORD=...

java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
{% endtab %}
{% endtabs %}

## Updating your agent

If you want to update the Moderne agent over time, please follow the instructions in the table below:

{% tabs %}
{% tab title="OCI Container" %}
If you're running the commands provided in this guide, you should see that the last line of every agent run command is `moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest`.

If that's true, then you can simply restart the agent and it should pick up the latest version. If you've decided to pin the version to something else instead of `latest`, please see our [releases page](../../../../releases/agent-releases.md) for the versions.
{% endtab %}

{% tab title="Executable JAR" %}
To update your version of the Executable JAR, change the `{version}` in `java -jar moderne-agent-{version}.jar` to be the latest one on [the releases page](../../../../releases/agent-releases.md).
{% endtab %}
{% endtabs %}
