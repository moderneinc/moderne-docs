# Configuring the Moderne agent

In order to securely communicate with the Moderne SaaS, you will need to set up an on-premise agent in your environment. To assist you with that process and provide you with information about the agent, this guide will:

* [Give you some high-level information about the agent](#high-level-agent-information)
* [Provide step-by-step instructions for configuring the agent](#agent-setup-instructions)
* [Teach you how to update the agent later on](#updating-your-agent)

## High-level agent information

### What does the agent do?

The Moderne on-premise agent:

* Encrypts and ships [LST](/concepts/lossless-semantic-trees.md) and recipe artifacts from your artifact repository (e.g., Artifactory) to the Moderne SaaS
* Provides the symmetric key that Moderne needs to decrypt your artifacts
* Forwards requests from the Moderne SaaS to your SCM(s) (e.g., GitHub)
* Forwards requests from the Moderne SaaS to the organization service (if configured)

## Agent setup instructions

### Step 1: Contact Moderne to obtain access

Please talk to your sales representative or [contact us](mailto:support@moderne.io) in order to obtain access to the agent. We will work with you to determine what access details are appropriate for your platform.

### Step 2: Generate your symmetric key

The Moderne agent requires customers to create a hex-encoded 256-bit AES encryption key. This key will be used to encrypt LST and recipe artifacts before they are sent to your SaaS tenant. To generate a key, please run the following `openssl` command:

```shell
openssl enc -aes-256-cbc -k secret -P
```

This will return a `salt`, `key`, and `iv`. Please copy the `key` and save it for use in [step 4](#step-4-configure-the-agent-with-the-core-variablesarguments) as the `symmetricKey`.

### Step 3: Determine how you will run the agent

Moderne offers two ways of running the agent:

1. An [OCI image](https://github.com/opencontainers/image-spec) that can be run using any OCI runtime (e.g., Docker, Podman)
2. A Spring Boot executable JAR that can be run with Java

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the agent. 

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) environment such Cloud Foundry, you'll want to use the JAR to run the agent.

The table below provides the core command for running the agent. However, in order for the agent to function correctly, additional variables will need to be added based on your environment (such as what SCM(s) your company uses, what artifact repositories you have configured, and whether or not you've configured an [Organizations service](/architecture/organizations-service.md)). We'll walk through each of those in the following steps.

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
docker run \
# Example environment variables. These will be explained in step 4.
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
# ... Additional environment variables
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```

{% endtab %}

{% tab title="Executable JAR" %}

**How to run the agent:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```shell
java -jar moderne-agent-{version}.jar \
# Example arguments. These will be explained in step 4.
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
# ... Additional arguments
```

* **Note:** System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
{% endtab %}
{% endtabs %}

### Step 4: Configure the agent with the core variables/arguments

There are four variables/arguments that must be configured for all agents:

{% tabs %}
{% tab title="OCI Container" %}

**Variables:**

* `MODERNE_AGENT_APIGATEWAYRSOCKETURI` – _The URI used to connect to the Moderne API, provided by Moderne._
* `MODERNE_AGENT_CRYPTO_SYMMETRICKEY` – _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `MODERNE_AGENT_NICKNAME` – _A name used to identify your agent in the SaaS agent dashboard UI._
* `MODERNE_AGENT_TOKEN` – _The Moderne SaaS agent connection token, provided by Moderne._

**Example:**

```shell
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
# ... Additional variables
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}

**Arguments:**

* `--moderne.agent.apiGatewayRsocketUri` – _The URI used to connect to the Moderne API, provided by Moderne._
* `--moderne.agent.crypto.symmetricKey` – _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `--moderne.agent.nickname` – _A name used to identify your agent in the SaaS agent dashboard UI._
* `--moderne.agent.token` – _The Moderne SaaS agent connection token, provided by Moderne._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

### Step 5: Configure the agent to work with your SCM(s)

Connecting the agent to your SCM enables Moderne to display recipe results in the UI and commit changes from recipes back to your SCM (in the form of PRs, forks, commits, etc).

For every SCM that you want to connect to Moderne, please follow the instructions in the following guides. These guides will explain how to configure an SCM to talk to the Moderne agent and they will provide you with a list of variables to add to the agent run command. You can configure one agent with multiple SCMs.

**SCM configuration:**

* [Bitbucket Cloud configuration](/how-to/on-premise-agent/configure-bitbucket-cloud-to-agent.md)
* [Bitbucket Data Center configuration](/how-to/on-premise-agent/configure-bitbucket-to-agent.md)
* [GitHub configuration](/how-to/on-premise-agent/configure-an-agent-with-github.md)
* [GitLab configuration](/how-to/on-premise-agent/configure-an-agent-with-gitlab.md)

Below is an example of what an agent run command might look like at the end of this step.

{% tabs %}
{% tab title="OCI Container" %}

```shell
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
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
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
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

1. To obtain your [LST](/concepts/lossless-semantic-trees.md) artifacts so that recipes can be run on your code.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne agent to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

{% hint style="info" %}
The Moderne agent can only talk to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)). A single instance of one of these products may contain multiple Maven repositories.
{% endhint %}

Moderne offers two options for connecting to your artifact repository: a generic Maven connection that can connect to any Maven formatted repository regardless of vendor and an Artifactory-specific connection that is optimized to serve LST artifacts more quickly.

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](/how-to/on-premise-agent/configure-an-agent-with-maven-repository-access.md) and then jump to [Step 7](#step-7-optionally-configure-the-organizations-service).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](/how-to/on-premise-agent/configure-an-agent-with-artifactory-access.md) to set up a connection that serves LST artifacts to Moderne. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](/how-to/on-premise-agent/configuring-artifactory-with-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](/how-to/on-premise-agent/configure-an-agent-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and showing up in Moderne. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**  | **Artifactory repository configuration** |
|-------------------------------------|------------------------------------------|
| Is not tied to a particular vendor. | Can only be used with Artifactory.       |
| Serves BOTH recipe artifacts and LST artifacts. | Serves ONLY LST artifacts. Requires Maven configuration to service recipe artifacts. | 
| Recipe artifacts are immediately available for [deployment to Moderne](/how-to/importing-external-recipes.md) upon publishing to the Maven formatted repository. | Can not serve recipe artifacts without Maven configuration. |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it shows up in Moderne. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will show up in near-real time (within a minute or two) in the Moderne platform when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](/how-to/on-premise-agent/configure-an-agent-with-maven-repository-access.md) or [Artifactory](/how-to/on-premise-agent/configure-an-agent-with-artifactory-access.md) instructions before continuing.

Below is an example of what an agent run command might look like at the end of this step.

{% tabs %}
{% tab title="OCI Container" %}

```shell
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
# ... Additional variables to come
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}

```shell
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne-agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
# ... Additional arguments to come
```
{% endtab %}
{% endtabs %}


### Step 7: (Optionally) Configure the Organizations service

Many organizations desire the ability to control the organizational structure of their repositories within the Moderne platform in a dynamic way. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted inside of your environment.

If you want to set up this service, please follow [these instructions](/architecture/organizations-service.md). Then, once it has been set up, please configure the agent by following [these instructions](/how-to/on-premise-agent/configure-repository-groups.md).

Below is an example of what an agent run command might look like at the end of this step if you set up the Organizations service.

{% tabs %}
{% tab title="OCI Container" %}

```shell
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne-agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
```
{% endtab %}
{% endtabs %}

### Step 8: Run the agent

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
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```
{% endtab %}

{% tab title="Executable JAR" %}

Use `java` to run a jar in combination with arguments that you've added in the previous steps:

```shell
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne-agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
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

If that's true, then you can simply restart the agent and it should pick up the latest version. If you've decided to pin the version to something else instead of `latest`, please see our [releases page](/releases/releases.md) for the versions.
{% endtab %}

{% tab title="Executable JAR" %}
To update your version of the Executable JAR, change the `{version}` in `java -jar moderne-agent-{version}.jar ` to be the latest one on [the releases page](/releases/releases.md).
{% endtab %}
{% endtabs %}
