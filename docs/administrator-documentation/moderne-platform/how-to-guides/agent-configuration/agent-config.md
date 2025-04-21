---
sidebar_label: Configuring the Moderne agent
description: Detailed instructions for configuring the Moderne agent.
slug: /administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration
---
     
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuring the Moderne agent

In order to securely communicate with the Moderne SaaS, you will need to set up an on-premise agent in your environment. To assist you with that process and provide you with information about the agent, this guide will:

* [Give you some high-level information about the agent](#high-level-agent-information)
* [Provide step-by-step instructions for configuring the agent](#agent-setup-instructions)
* [Teach you how to update the agent later on](#updating-your-agent)

## High-level agent information

### What does the agent do?

The Moderne on-premise agent:

* Encrypts and ships [LST](../../references/lossless-semantic-trees.md) and recipe artifacts from your artifact repository (e.g., Artifactory) to the Moderne SaaS
* Provides the symmetric key that Moderne needs to decrypt your artifacts
* Forwards requests from the Moderne SaaS to your SCM(s) (e.g., GitHub)
* Forwards requests from the Moderne SaaS to the organization service (if configured)

## Agent setup instructions

### Step 1: Generate your symmetric key

The Moderne agent requires customers to create a hex-encoded 256-bit AES encryption key. This key will be used to encrypt LST and recipe artifacts before they are sent to your SaaS tenant. To generate a key, please run the following `openssl` command:

```bash
openssl enc -aes-256-cbc -k secret -P
```

This will return a `salt`, `key`, and `iv`. Please copy the `key` and save it for use in [step 3](#step-3-configure-the-agent-with-the-core-variablesarguments) as the `symmetricKey`.

### Step 2: Determine how you will run the agent

Moderne offers two ways of running the agent:

1. An [OCI image](https://github.com/opencontainers/image-spec) that can be run using any OCI runtime (e.g., Docker, Podman)
2. A Spring Boot executable JAR that can be run with Java

Regardless of which one you pick, you'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent or local storage.

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the agent.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) environment such Cloud Foundry, you'll want to use the JAR to run the agent.

The table below provides the core command for running the agent. However, in order for the agent to function correctly, additional variables will need to be added based on your environment (such as what SCM(s) your company uses, what artifact repositories you have configured, and whether or not you've configured an [Organizations service](../organizations-service.md)). We'll walk through each of those in the following steps.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**How to build the Docker image**

```bash
docker build -t moderne-agent:latest .
```

**How to run the Docker image with an environment file**

```bash
docker run --env-file=moderne-agent.env moderne-agent:latest
```

**How to run the image with command line arguments**

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

docker run \
# Example environment variables. These will be explained in step 3.
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN \
# ... Additional environment variables
-p 8080:8080
moderne-agent:latest
```

**Example Dockerfile**

:::info
You are responsible for creating this Dockerfile and your own base image. It is your responsibility to keep this up-to-date when vulnerabilities arise. The below one is a suggestion for getting started - but yours will differ from this as it should point to and use your own tools and services.
:::

```docker
FROM eclipse-temurin:17-jdk
RUN apt-get update && apt-get install -y libxml2-utils

# Set the environment variable MODERNE_AGENT_VERSION
ARG MODERNE_AGENT_VERSION
ENV MODERNE_AGENT_VERSION=${MODERNE_AGENT_VERSION}

WORKDIR /app
USER root
# If necessary, download the Moderne tenant SSL certificate and add it to the default Java TrustStore.
# RUN openssl s_client -showcerts -connect <tenant_name>.moderne.io:443 </dev/null 2>/dev/null | openssl x509 -outform DER > moderne_cert.der
# RUN /opt/java/openjdk/bin/keytool -import -trustcacerts -keystore /opt/java/openjdk/lib/security/cacerts -storepass changeit -noprompt -alias moderne-cert -file moderne_cert.der

RUN groupadd -r app && useradd --no-log-init -r -m -g app app && chown -R app:app /app
USER app

# Download the specified version of moderne-agent JAR file if MODERNE_AGENT_VERSION is provided,
# otherwise download the latest version
RUN  if [ -n "${MODERNE_AGENT_VERSION}" ]; then \
          echo "Downloading version: ${MODERNE_AGENT_VERSION}"; \
          curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-agent/${MODERNE_AGENT_VERSION}/moderne-agent-${MODERNE_AGENT_VERSION}.jar" --output agent.jar; \
     else \
          LATEST_VERSION=$(curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-agent/maven-metadata.xml" | xmllint --xpath 'string(/metadata/versioning/latest)' -); \
          if [ -z "${LATEST_VERSION}" ]; then \
               echo "Failed to get latest version"; \
               exit 1; \
          fi; \
          echo "Downloading latest version: ${LATEST_VERSION}"; \
          curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-agent/${LATEST_VERSION}/moderne-agent-${LATEST_VERSION}.jar" --output agent.jar; \
     fi

ENTRYPOINT ["java"]
CMD ["-XX:-OmitStackTraceInFastThrow", "-XX:MaxRAMPercentage=65.0", "-XX:MaxDirectMemorySize=2G", "-XX:+HeapDumpOnOutOfMemoryError", "-XX:+UseStringDeduplication", "-jar", "/app/agent.jar"]
EXPOSE 8080
```

**Example environment variables file**

```bash
# Set the environment variables for the MODERNE_AGENT
MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket
MODERNE_AGENT_CRYPTO_SYMMETRICKEY=${SYMMETRIC_KEY}
MODERNE_AGENT_TOKEN=${MODERNE_AGENT_TOKEN}
MODERNE_AGENT_NICKNAME=prod-1

# Set the environment variables for your SCM (E.g. Github, Bitbucket, Gitlab)
MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=${GITHUB_CLIENT_ID}
MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=${GITHUB_CLIENT_SECRET}
MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com
MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne
MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite
MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true

# Set the environment variables for your artifactory
# Remove this part if you can not use the artifactory repository configuration (see step 5)
MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/
MODERNE_AGENT_ARTIFACTORY_0_USERNAME=${ARTIFACTORY_USERNAME}
MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=${ARTIFACTORY_PASSWORD}
MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}'
MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}'

# Set the environment variables for your artifactory recipe access or your maven repository access
# Remove the `MODERNE_AGENT_MAVEN_0_ASTSOURCE line if you do not use the artifactory repository configuration
MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local
MODERNE_AGENT_MAVEN_0_ASTSOURCE=false
MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven
MODERNE_AGENT_MAVEN_0_USERNAME=${MAVEN_USERNAME}
MODERNE_AGENT_MAVEN_0_PASSWORD=${MAVEN_PASSWORD}
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Download the JAR:**
The download URL can be found on the [**Agent releases page**](../../../../releases/agent-releases.md#maven-download)**.**

**How to run the agent:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.agent.crypto.symmetricKey=...
export MODERNE_AGENT_CRYPTO_SYMMETRICKEY=...
export MODERNE_AGENT_TOKEN=...

java -jar moderne-agent-{version}.jar \
# Example arguments. These will be explained in step 3.
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.nickname=prod-1 \
# ... Additional arguments
```

* **Note:** System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
</TabItem>
</Tabs>

### Step 3: Configure the agent with the core variables/arguments

All agents must be configured with the variables listed as required below:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                | Required   | Default                | Description                                                                                                                                                                                                 |
|----------------------------------------------|------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_APIGATEWAYRSOCKETURI`         | `true`     |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                                                                            |
| `MODERNE_AGENT_CRYPTO_SYMMETRICKEY`          | `true`     |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                                                                  |
| `MODERNE_AGENT_NICKNAME`                     | `true`     |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                                                                          |
| `MODERNE_AGENT_TOKEN`                        | `true`     |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                                                                               |
| `MODERNE_AGENT_DOWNLOADPARALLELISM`          | `false`    | 2 threads              | How many threads are used to download LSTs.                                                                                                                                                                 |
| `MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS` | `false`    | 120 seconds            | How frequently LSTs will be indexed.                                                                                                                                                                        |
| `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}` | `false`    | All options available. | Use to restrict which commit options are available in Moderne (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
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
moderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                | Required   | Default                | Description                                                                                                                                                                                                 |
|----------------------------------------------|------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.apiGatewayRsocketUri`         | `true`     |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                                                                            |
| `--moderne.agent.crypto.symmetricKey`          | `true`     |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                                                                                  |
| `--moderne.agent.nickname`                     | `true`     |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                                                                          |
| `--moderne.agent.token`                        | `true`     |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                                                                               |
| `--moderne.agent.downloadParallelism`          | `false`    | 2 threads              | How many threads are used to download LSTs.                                                                                                                                                                 |
| `--moderne.agent.artifactIndexIntervalSeconds` | `false`    | 120 seconds            | How frequently LSTs will be indexed.                                                                                                                                                                        |
| `--moderne.agent.defaultCommitOptions[{index}]` | `false`    | All options available. | Use to restrict which commit options are available in Moderne (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
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
</TabItem>
</Tabs>

### Step 4: Configure the agent to work with your SCM(s)

Connecting the agent to your SCM enables Moderne to display recipe results in the UI and commit changes from recipes back to your SCM (in the form of PRs, forks, commits, etc).

For every SCM that you want to connect to Moderne, please follow the instructions in the following guides. These guides will explain how to configure an SCM to talk to the Moderne agent and they will provide you with a list of variables to add to the agent run command. You can configure one agent with multiple SCMs.

**SCM configuration:**

* [Azure DevOps Services configuration](./configure-an-agent-with-azure-devops-services.md)
* [Bitbucket Cloud configuration](./configure-bitbucket-cloud-to-agent.md)
* [Bitbucket Data Center configuration](./configure-bitbucket-to-agent.md)
* [GitHub configuration](./configure-an-agent-with-github.md)
* [GitLab configuration](./configure-an-agent-with-gitlab.md)

Below is an example of what an agent run command might look like at the end of this step.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
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
moderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
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
</TabItem>
</Tabs>

### Step 5: Configure the agent to connect to your artifact repositories

The Moderne agent needs to connect to your artifact repositories for two reasons:

1. To obtain your [LST](../../references/lossless-semantic-trees.md) artifacts so that recipes can be run on your code.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne agent to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

:::info
The Moderne agent can only talk to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)). A single instance of one of these products may contain multiple Maven repositories.
:::

Moderne offers two options for connecting to your artifact repository: a generic Maven connection that can connect to any Maven formatted repository regardless of vendor and an Artifactory-specific connection that is optimized to serve LST artifacts more quickly.

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](./configure-an-agent-with-maven-repository-access.md) and then jump to [Step 6](#step-6-optionally-configure-the-organizations-service).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](./configure-an-agent-with-artifactory-access.md) to set up a connection that serves LST artifacts to Moderne. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](./configuring-artifactory-with-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](./configure-an-agent-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and showing up in Moderne. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                      | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is not tied to a particular vendor.                                                                                                                                                                                                                                                                                                                                                                                                                     | Can only be used with Artifactory.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Serves BOTH recipe artifacts and LST artifacts.                                                                                                                                                                                                                                                                                                                                                                                                         | Serves ONLY LST artifacts. Requires Maven configuration to serve recipe artifacts.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe artifacts are immediately available for [deployment to Moderne](../importing-external-recipes.md) upon publishing to the Maven formatted repository.                                                                                                                                                                                                                                                                                             | Can not serve recipe artifacts without Maven configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it shows up in Moderne. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will show up in near-real time (within a minute or two) in the Moderne Platform when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](./configure-an-agent-with-maven-repository-access.md) or [Artifactory](./configure-an-agent-with-artifactory-access.md) instructions before continuing.

Below is an example of what an agent run command might look like at the end of this step.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
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
mmoderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

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
</TabItem>
</Tabs>

### Step 6: (Optionally) Configure the Organizations service

Many organizations desire the ability to control the organizational structure of their repositories within the Moderne Platform in a dynamic way. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted inside of your environment.

If you want to set up this service, please check out our [configuring the Organizations service guide](../organizations-service.md). Then, once it has been set up, [please configure the agent accordingly](./configure-organizations-service.md).

Below is an example of what an agent run command might look like at the end of this step if you set up the Organizations service.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
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
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

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
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.organization.service.url=http://localhost:8091 \
--moderne.agent.organization.service.updateIntervalSeconds=600 \
```
</TabItem>
</Tabs>

### Step 7: (Optionally) Use strict recipe sources.

Some organizations want recipe artifacts to only come from locations configured in the Moderne agent. If you want to configure that, please follow the [strict recipe sources instructions](./configure-an-agent-with-strict-recipe-sources.md).

Below is an example of what an agent run command might look like at the end of this step if you configured the agent to use only configured recipe sources.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
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
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS=600 \
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
-p 8080:8080
moderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

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
--moderne.agent.organization.service.url=http://localhost:8091 \
--moderne.agent.organization.service.updateIntervalSeconds=600 \
--moderne.agent.recipe.useOnlyConfigured=true
```
</TabItem>
</Tabs>

### Step 8: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please follow [these instructions](./configure-an-agent-with-client-ssl-certificates.md) to configure the KeyStore.

### Step 9: Run the agent

At this point, you should have configured everything needed to run the Moderne agent. If you run into issues running the command, please don't hesitate to reach out.

Below is a table that has instructions for how to run the agent in combination with some examples of the variables/arguments provided in the previous steps:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**How to build the Docker image**

```bash
docker build -t moderne-agent:latest .
```

**How to run the Docker image with an environment file**

```bash
docker run --env-file=moderne-agent.env moderne-agent:latest
```

**Run the `docker run` command in combination with all of the environment variables you've added in the previous steps:**

```bash
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
-e MODERNE_AGENT_ORGANIZATION_SERVICE_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_SERVICE_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne-agent:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

Use `java` to run a jar in combination with arguments that you've added in the previous steps:

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
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.organization.service.url=http://localhost:8091 \
--moderne.agent.organization.service.updateIntervalSeconds=600 \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
</TabItem>
</Tabs>

## Updating your agent

If you want to update the Moderne agent over time, please follow the instructions in the table below:

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

If you're running the commands provided in this guide, you should see that the last line of every agent run command is `moderne-agent:latest`.

If that's true, then you can rebuild the agent image and it should pick up the latest version. If you've decided to pin the version to something else instead of `latest`, please see our [releases page](../../../../releases/agent-releases.md) for the versions.
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

To update your version of the Executable JAR, change the `{version}` in `java -jar moderne-agent-{version}.jar` to be the latest one on [the releases page](../../../../releases/agent-releases.md).
</TabItem>
</Tabs>
