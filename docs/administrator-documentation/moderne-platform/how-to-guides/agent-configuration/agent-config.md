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

:::tip
Looking for a complete, working example? Check out the [moderne-agent-example repository](https://github.com/moderneinc/moderne-agent-example) which contains all the configuration files and setup code in one place for deploying the Moderne agent.
:::

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

:::info
Regardless of which one you pick, you'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent or local storage.
:::

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the agent.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) environment such Cloud Foundry, you'll want to use the JAR to run the agent.

The table below provides the core command for running the agent. However, in order for the agent to function correctly, additional variables will need to be added based on your environment (such as what SCM(s) your company uses, what artifact repositories you have configured). We'll walk through each of those in the following steps.

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
               echo "Failed to retrieve the latest version"; \
               exit 1; \
          fi; \
          echo "Downloading latest version: ${LATEST_VERSION}"; \
          curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-agent/${LATEST_VERSION}/moderne-agent-${LATEST_VERSION}.jar" --output agent.jar; \
     fi

ENTRYPOINT ["java"]
CMD ["-XX:-OmitStackTraceInFastThrow", \
     "-XX:MaxRAMPercentage=65.0", \
     "-XX:MaxDirectMemorySize=2G", \
     "-XX:+HeapDumpOnOutOfMemoryError", \
     "-XX:+UseStringDeduplication", \
     "-jar", "/app/agent.jar"]
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

**Environment variables:**

| Variable Name                                | Required | Default                | Description                                                                                                                                        |
|----------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_APIGATEWAYRSOCKETURI`         | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                   |
| `MODERNE_AGENT_CRYPTO_SYMMETRICKEY`          | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                         |
| `MODERNE_AGENT_NICKNAME`                     | `true`   |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                 |
| `MODERNE_AGENT_TOKEN`                        | `true`   |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                      |
| `MODERNE_AGENT_DOWNLOADPARALLELISM`          | `false`  | 2 threads              | How many threads are used to download LSTs.                                                                                                        |
| `MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS` | `false`  | 120 seconds            | How frequently LSTs will be indexed.                                                                                                               |
| `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}` | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

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

| Argument Name                                   | Required | Default                | Description                                                                                                                                        |
|-------------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.apiGatewayRsocketUri`          | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                   |
| `--moderne.agent.crypto.symmetricKey`           | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                         |
| `--moderne.agent.nickname`                      | `true`   |                        | A name used to identify your agent in the SaaS agent dashboard UI.                                                                                 |
| `--moderne.agent.token`                         | `true`   |                        | The Moderne SaaS agent connection token, provided by Moderne.                                                                                      |
| `--moderne.agent.downloadParallelism`           | `false`  | 2 threads              | How many threads are used to download LSTs.                                                                                                        |
| `--moderne.agent.artifactIndexIntervalSeconds`  | `false`  | 120 seconds            | How frequently LSTs will be indexed.                                                                                                               |
| `--moderne.agent.defaultCommitOptions[{index}]` | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

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

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](./configure-an-agent-with-maven-repository-access.md) and then jump to [Step 6](#step-6-optionally-use-strict-recipe-sources).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](./configure-an-agent-with-artifactory-access.md) to set up a connection that serves LST artifacts to Moderne. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](./configuring-artifactory-with-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](./configure-an-agent-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and showing up in Moderne. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                      | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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

### Step 6: (Optionally) Use strict recipe sources.

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
--moderne.agent.recipe.useOnlyConfigured=true
```
</TabItem>
</Tabs>

### Step 7: (Optionally) Configure LLM support for Moddy

If you want to enable Moddy (Moderne's AI agent) in your platform, you'll need to configure LLM support. Moddy allows users to interact with their codebase using natural language. Please follow the [Moddy configuration instructions](./configure-an-agent-with-llm-for-moddy.md) to set this up.

### Step 8: (Optional but recommended) Configure organizational hierarchy

If you would like to have an organizational hierarchy available inside of the Moderne Platform, you can provide this information using a `repos.csv` file.

#### Using a repos.csv file

A `repos.csv` file defines your repositories and their organizational structure. The agent can load this file to create organizations in the Moderne Platform.

**Required columns:**

* `cloneUrl` - The URL of the repository
* `branch` - The branch to check out
* `origin` - The host domain of the repository
* `path` - The organization and repository name portion of the clone URL

**Optional hierarchy columns:**

* `org1`, `org2`, `org3`, ... - Define parent-child organizational relationships

Organizations on the left are children of organizations on the right. For example, if you have `org1=Team1`, `org2=DirectorA`, `org3=ALL`, then `Team1` is a child of `DirectorA`, which is a child of `ALL`.

**Example repos.csv:**

```csv
cloneUrl,branch,origin,path,org1,org2,org3
https://github.com/apache/maven-doxia,master,github.com,apache/maven-doxia,Team 1,Director A,ALL
https://github.com/Netflix/photon,main,github.com,Netflix/photon,Team 2,Director A,ALL
https://github.com/Netflix/ribbon,master,github.com,Netflix/ribbon,Director A,ALL
```

**Loading the repos.csv file:**

You can provide the file to the agent in two ways:

1. **Remote URL:** Set the environment variable to point to a hosted CSV file
2. **Local file:** Mount the file into the container and configure the path

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Option 1: Remote URL**

```bash
docker run \
  -e MODERNE_AGENT_ORGANIZATION_REPOSCSV=https://example.com/repos.csv \
  # ... other environment variables
  moderne-agent:latest
```

**Option 2: Local file mount**

```bash
docker run \
  -v /path/to/repos.csv:/app/repos.csv \
  -e MODERNE_AGENT_ORGANIZATION_REPOSCSV=/app/repos.csv \
  # ... other environment variables
  moderne-agent:latest
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Option 1: Remote URL**

```bash
java -jar moderne-agent-{version}.jar \
  --moderne.agent.organization.reposCsv=https://example.com/repos.csv \
  # ... other arguments
```

**Option 2: Local file path**

```bash
java -jar moderne-agent-{version}.jar \
  --moderne.agent.organization.reposCsv=/path/to/repos.csv \
  # ... other arguments
```

</TabItem>
</Tabs>

:::tip
For detailed information about creating and formatting a `repos.csv` file, including how to handle different SCM providers and define complex organizational hierarchies, see the [creating a repos.csv file](../../../../user-documentation/moderne-cli/references/repos-csv.md) guide.
:::

**Alternative configuration:**

If you need more advanced organizational configuration options, you can also [configure an organizational hierarchy](./configure-organizations-hierarchy.md) using other methods and [let the agent know about it](./configure-organizations-hierarchy.md#agent-configuration).

### Step 9: (Optionally) Create an Organizations service

You should create an Organizations service if you want to:

* Limit access to the organizations you've [previously defined](./configure-organizations-hierarchy.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

To do so, please follow the instructions in our [creating an Organizations service guide](../org-service.md) and then [let the agent know about it](../org-service.md#agent-variables).

### Step 10: (Optionally) Configure a DevCenter

The DevCenter is the mission-control dashboard of the Moderne Platform. If you wish to have DevCenters available inside of the Moderne Platform, you will need to [ensure you've defined an organizational hierarchy](./configure-organizations-hierarchy.md) and then [follow the instructions for configuring a DevCenter](../creating-a-devcenter-recipe.md).

### Step 11: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please follow [these instructions](./configure-an-agent-with-client-ssl-certificates.md) to configure the KeyStore.

### Step 12: Run the agent

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
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}`.
</TabItem>
</Tabs>

## Health endpoints

Once the agent is running, you can verify its health and readiness using the following endpoints:

* `/actuator/health` - Returns the overall health status of the agent
* `/actuator/health/liveness` - Kubernetes liveness probe endpoint
* `/actuator/health/readiness` - Kubernetes readiness probe endpoint

**Example health check:**

```bash
curl http://localhost:8080/actuator/health
```

**Expected response:**

```json
{"status":"UP"}
```

These endpoints are particularly useful for:

* Kubernetes/Docker health checks and readiness probes
* Load balancer health checks
* Monitoring system integration
* Automated deployment verification

## Monitoring

The Moderne agent exposes Prometheus-compatible metrics that can be used for monitoring and observability.

### Prometheus metrics endpoint

The agent exposes metrics at `/actuator/prometheus` on port 8080.

**Example Prometheus scrape configuration:**

```yaml
scrape_configs:
  - job_name: 'moderne-agent'
    static_configs:
      - targets: ['localhost:8080']
    metrics_path: '/actuator/prometheus'
```

### Grafana dashboard

A pre-built Grafana dashboard is available in the [moderne-agent-example repository](https://github.com/moderneinc/moderne-agent-example/tree/main/grafana). The dashboard provides visualizations for:

* Agent connectivity status
* LST indexing performance
* Artifact download metrics
* Resource utilization
* Error rates

To use the dashboard:

1. Import `moderne-agent-dashboard-v1.json` into your Grafana instance
2. Select your Prometheus datasource when prompted
3. The dashboard will automatically populate with metrics from your agent(s)

## Scaling considerations

For high availability and increased throughput, you can run multiple Moderne agent instances concurrently.

**Key requirements for multi-instance deployment:**

* Each agent instance must have a unique `MODERNE_AGENT_NICKNAME`
* Each instance requires its own port mapping (e.g., 8080, 8081, 8082)
* All instances should use the same `MODERNE_AGENT_CRYPTO_SYMMETRICKEY`
* All instances should connect to the same `MODERNE_AGENT_APIGATEWAYRSOCKETURI`

**Example multi-instance deployment:**

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

```bash
# First agent instance
docker run -d \
  --name moderne-agent-1 \
  -p 8080:8080 \
  -e MODERNE_AGENT_NICKNAME=prod-agent-1 \
  -e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
  # ... other environment variables
  moderne-agent:latest

# Second agent instance
docker run -d \
  --name moderne-agent-2 \
  -p 8081:8080 \
  -e MODERNE_AGENT_NICKNAME=prod-agent-2 \
  -e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
  # ... other environment variables
  moderne-agent:latest
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# First agent instance
java -jar moderne-agent-{version}.jar \
  --moderne.agent.nickname=prod-agent-1 \
  --server.port=8080 \
  # ... other arguments

# Second agent instance
java -jar moderne-agent-{version}.jar \
  --moderne.agent.nickname=prod-agent-2 \
  --server.port=8081 \
  # ... other arguments
```

</TabItem>
</Tabs>

Multiple agent instances will automatically distribute the workload and provide redundancy in case of individual agent failures.

## Troubleshooting

### Connection failures

**Symptoms:** Agent fails to connect to Moderne API or shows connection errors in logs.

**Common causes and solutions:**

* **Invalid API endpoint:** Verify the `MODERNE_AGENT_APIGATEWAYRSOCKETURI` matches the URI provided by Moderne
* **Invalid authentication token:** Confirm the `MODERNE_AGENT_TOKEN` is correct and has not expired
* **Network connectivity:** Ensure the agent can reach the Moderne API endpoint (check firewalls, proxies, and outbound HTTPS access)
* **SSL/TLS issues:** If using custom certificates, verify they are properly configured in the Java truststore

### Missing repositories

**Symptoms:** Expected repositories do not appear in the Moderne Platform.

**Common causes and solutions:**

* **SCM OAuth configuration:** Verify OAuth credentials (`MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID`, `MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET`, etc.) are correct
* **Organization allowlists:** Check that `MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_*` includes all necessary organizations
* **OAuth app permissions:** Ensure the OAuth application has been granted access to the repositories (may require organization admin approval)
* **Private repository access:** Verify `MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true` is set if accessing private repositories

### Absent LSTs

**Symptoms:** Repositories appear in Moderne but LST artifacts are not available for running recipes.

**Common causes and solutions:**

* **Artifact repository configuration:** Verify Maven or Artifactory repository settings (URLs, credentials)
* **AQL filters (Artifactory):** Check that `MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_*` correctly matches your LST artifacts
* **Maven indexing:** If using Maven repository configuration, ensure the Maven index is being published and updated regularly
* **Artifact publication:** Confirm LST artifacts are actually being published to the configured repository
* **Network access:** Verify the agent can reach the artifact repository from its network location

### Checking agent logs

Most issues can be diagnosed by examining the agent logs. Look for:

* Connection errors or authentication failures
* Repository discovery issues
* Artifact indexing errors
* Network timeouts or connectivity problems

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
