---
sidebar_label: Configuring the Moderne Connector
description: Detailed instructions for configuring the Moderne Connector.
slug: /administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration
---
     
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/agent-configuration" />

# Configuring the Moderne Connector

In order to securely communicate with the Moderne SaaS, you will need to set up an on-premise Connector in your environment. To assist you with that process and provide you with information about the Connector, this guide will:

* [Give you some high-level information about the Connector](#high-level-connector-information)
* [Provide step-by-step instructions for configuring the Connector](#connector-setup-instructions)
* [Teach you how to update the Connector later on](#updating-your-connector)

:::tip
Looking for a complete, working example? Check out the [Moderne Connector example repository](https://github.com/moderneinc/moderne-agent-example) which contains all the configuration files and setup code in one place for deploying the Moderne Connector.
:::

## High-level Connector information

### What does the Connector do?

The Moderne Connector:

* Encrypts and ships [LST](../../references/lossless-semantic-trees.md) and recipe artifacts from your artifact repository (e.g., Artifactory) to the Moderne SaaS
* Provides the symmetric key that Moderne needs to decrypt your artifacts
* Forwards requests from the Moderne SaaS to your SCM(s) (e.g., GitHub)
* Forwards requests from the Moderne SaaS to the organization service (if configured)

## Connector setup instructions

### Step 1: Generate your symmetric key

The Moderne Connector requires customers to create a hex-encoded 256-bit AES encryption key. This key will be used to encrypt LST and recipe artifacts before they are sent to your SaaS tenant. To generate a key, please run the following `openssl` command:

```bash
openssl enc -aes-256-cbc -k secret -P
```

This will return a `salt`, `key`, and `iv`. Please copy the `key` and save it for use in [step 3](#step-3-configure-the-connector-with-the-core-variablesarguments) as the `symmetricKey`.

### Step 2: Determine how you will run the Connector

Moderne offers two ways of running the Connector:

1. An [OCI image](https://github.com/opencontainers/image-spec) that can be run using any OCI runtime (e.g., Docker, Podman)
2. A Spring Boot executable JAR that can be run with Java

:::info
Regardless of which one you pick, you'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent or local storage.
:::

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the Connector.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) environment such as Cloud Foundry, you'll want to use the JAR to run the Connector.

The table below provides the core command for running the Connector. However, in order for the Connector to function correctly, additional variables will need to be added based on your environment (such as what SCM(s) your company uses, what artifact repositories you have configured). We'll walk through each of those in the following steps.

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

**How to build the Docker image**

```bash
docker build -t moderne-connector:latest .
```

**How to run the Docker image with an environment file**

```bash
docker run --env-file=moderne-connector.env moderne-connector:latest
```

**How to run the image with command line arguments**

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...

docker run \
# Example environment variables. These will be explained in step 3.
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
# ... Additional environment variables
-p 8080:8080
moderne-connector:latest
```

**Example Dockerfile**

:::info
You are responsible for creating this Dockerfile and your own base image. It is your responsibility to keep this up-to-date when vulnerabilities arise. The below one is a suggestion for getting started - but yours will differ from this as it should point to and use your own tools and services.
:::

```docker
FROM eclipse-temurin:25-jdk
RUN apt-get update && apt-get install -y libxml2-utils

# Set the environment variable MODERNE_CONNECTOR_VERSION
ARG MODERNE_CONNECTOR_VERSION
ENV MODERNE_CONNECTOR_VERSION=${MODERNE_CONNECTOR_VERSION}

WORKDIR /app
USER root

# If necessary, download the Moderne tenant SSL certificate and add it to the default Java TrustStore.
# RUN openssl s_client -showcerts -connect <tenant_name>.moderne.io:443 </dev/null 2>/dev/null | openssl x509 -outform DER > moderne_cert.der
# RUN /opt/java/openjdk/bin/keytool -import -trustcacerts -keystore /opt/java/openjdk/lib/security/cacerts -storepass changeit -noprompt -alias moderne-cert -file moderne_cert.der

RUN groupadd -r app && useradd --no-log-init -r -m -g app app && chown -R app:app /app
USER app

# Download the specified version of connector JAR file if MODERNE_CONNECTOR_VERSION is provided,
# otherwise download the latest version
RUN  if [ -n "${MODERNE_CONNECTOR_VERSION}" ]; then \
          echo "Downloading version: ${MODERNE_CONNECTOR_VERSION}"; \
          curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/connector/${MODERNE_CONNECTOR_VERSION}/connector-${MODERNE_CONNECTOR_VERSION}.jar" --output connector.jar; \
     else \
          LATEST_VERSION=$(curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/connector/maven-metadata.xml" | xmllint --xpath 'string(/metadata/versioning/latest)' -); \
          if [ -z "${LATEST_VERSION}" ]; then \
               echo "Failed to retrieve the latest version"; \
               exit 1; \
          fi; \
          echo "Downloading latest version: ${LATEST_VERSION}"; \
          curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/connector/${LATEST_VERSION}/connector-${LATEST_VERSION}.jar" --output connector.jar; \
     fi

ENTRYPOINT ["java"]
CMD ["-XX:-OmitStackTraceInFastThrow", \
     "-XX:MaxRAMPercentage=65.0", \
     "-XX:MaxDirectMemorySize=2G", \
     "-XX:+HeapDumpOnOutOfMemoryError", \
     "-XX:+UseStringDeduplication", \
     "-jar", "/app/connector.jar"]
```

**Example environment variables file**

```bash
# Set the environment variables for the Moderne Connector
MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket
MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=${SYMMETRIC_KEY}
MODERNE_CONNECTOR_TOKEN=${MODERNE_CONNECTOR_TOKEN}
MODERNE_CONNECTOR_NICKNAME=prod-1

# Set the environment variables for your SCM (E.g. Github, Bitbucket, Gitlab)
MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=${GITHUB_CLIENT_ID}
MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=${GITHUB_CLIENT_SECRET}
MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com
MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne
MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite
MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true

# Set the environment variables for your artifactory
# Remove this part if you can not use the artifactory repository configuration (see step 5)
MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/
MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=${ARTIFACTORY_USERNAME}
MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=${ARTIFACTORY_PASSWORD}
MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}'
MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}'

# Set the environment variables for your artifactory recipe access or your maven repository access
# Remove the `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_ASTSOURCE` line if you do not use the artifactory repository configuration
MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local
MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_ASTSOURCE=false
MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=${MAVEN_USERNAME}
MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=${MAVEN_PASSWORD}
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Download the JAR:**
The download URL can be found on the [**Connector releases page**](../../../../releases/agent-releases.md#maven-download)**.**

**How to run the Connector:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...

java -jar connector-{version}.jar \
# Example arguments. These will be explained in step 3.
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
# ... Additional arguments
```

* **Note:** System properties can be used in place of arguments. For example, you can use `-Dmoderne.connector.token={token_value}` as an argument instead of `--moderne.connector.token={token_value}`.
</TabItem>
</Tabs>

### Step 3: Configure the Connector with the core variables/arguments

All Connectors must be configured with the variables listed as required below:

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                              | Required | Default                | Description                                                                                                                                        |
|--------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI`   | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                   |
| `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`    | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                         |
| `MODERNE_CONNECTOR_NICKNAME`               | `true`   |                        | A name used to identify your Connector in the SaaS dashboard UI.                                                                                   |
| `MODERNE_CONNECTOR_TOKEN`                  | `true`   |                        | The Moderne SaaS Connector connection token, provided by Moderne.                                                                                  |
| `MODERNE_SCM_DEFAULTCOMMITOPTIONS_{index}` | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_SCM_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
-p 8080:8080
moderne-connector:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                 | Required | Default                | Description                                                                                                                                        |
|-----------------------------------------------|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.connector.apiGatewayRsocketUri`    | `true`   |                        | The URI used to connect to the Moderne API, provided by Moderne.                                                                                   |
| `--moderne.connector.crypto.symmetricKey`     | `true`   |                        | A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.                                                                         |
| `--moderne.connector.nickname`                | `true`   |                        | A name used to identify your Connector in the SaaS dashboard UI.                                                                                   |
| `--moderne.connector.token`                   | `true`   |                        | The Moderne SaaS Connector connection token, provided by Moderne.                                                                                  |
| `--moderne.scm.defaultCommitOptions[{index}]` | `false`  | All options available. | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.scm.defaultCommitOptions[0]=PullRequest \
--moderne.scm.defaultCommitOptions[1]=ForkAndPullRequest \
# ... Additional arguments
```
</TabItem>
</Tabs>

### Step 4: Configure the Connector to work with your SCM(s)

Connecting the Connector to your SCM enables Moderne to display recipe results in the UI and commit changes from recipes back to your SCM (in the form of PRs, forks, commits, etc).

For every SCM that you want to connect to Moderne, please follow the instructions in the following guides. These guides will explain how to configure an SCM to talk to the Moderne Connector and they will provide you with a list of variables to add to the Connector run command. You can configure one Connector with multiple SCMs.

**SCM configuration:**

* [Azure DevOps Services configuration](./configure-an-agent-with-azure-devops-services.md)
* [Bitbucket Cloud configuration](./configure-bitbucket-cloud-to-agent.md)
* [Bitbucket Data Center configuration](./configure-bitbucket-to-agent.md)
* [GitHub configuration](./configure-an-agent-with-github.md)
* [GitLab configuration](./configure-an-agent-with-gitlab.md)

Below is an example of what a Connector run command might look like at the end of this step.

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables to come
-p 8080:8080
moderne-connector:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments to come
```
</TabItem>
</Tabs>

### Step 5: Configure the Connector to connect to your artifact repositories

The Moderne Connector needs to connect to your artifact repositories for two reasons:

1. To obtain your [LST](../../references/lossless-semantic-trees.md) artifacts so that recipes can be run on your code.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne Connector to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

Moderne offers several options for connecting to your artifact storage:

* **[Artifactory](./configure-an-agent-with-artifactory-access.md)**: Uses AQL (Artifact Query Language) to be able to see your repos in the platform within two minutes after publishing. **(recommended for Artifactory users)**
* **[Maven repository](./configure-an-agent-with-maven-repository-access.md)**: A generic connection that works with any Maven-formatted repository (Artifactory, Nexus, etc.). Serves both LST and recipe artifacts.
* **[Amazon S3](./configure-an-agent-with-s3-access.md)**: Store and retrieve LST artifacts directly from S3 or S3-compatible storage (e.g., MinIO).

:::info
For Maven and Artifactory configurations, the Moderne Connector connects to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)).
:::

**Choosing your artifact source:**

* If you use **Artifactory**, use the [Artifactory LST configuration](./configure-an-agent-with-artifactory-access.md). Then, if you plan on creating custom recipes, follow the [Artifactory recipe configuration](./configuring-artifactory-with-recipes.md) to serve recipe artifacts.
* If you use **Amazon S3** or S3-compatible storage, use the [S3 configuration](./configure-an-agent-with-s3-access.md).
* If you use a **different Maven repository** (Nexus, etc.) or cannot use AQL queries, use the [Maven repository configuration](./configure-an-agent-with-maven-repository-access.md).

The below table shows the key differences between the Maven and Artifactory configurations:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                      | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is not tied to a particular vendor.                                                                                                                                                                                                                                                                                                                                                                                                                     | Can only be used with Artifactory.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Serves BOTH recipe artifacts and LST artifacts.                                                                                                                                                                                                                                                                                                                                                                                                         | Serves ONLY LST artifacts. Requires Maven configuration to serve recipe artifacts.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe artifacts are immediately available for [deployment to Moderne](../importing-external-recipes.md) upon publishing to the Maven formatted repository.                                                                                                                                                                                                                                                                                             | Can not serve recipe artifacts without Maven configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it shows up in Moderne. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will show up in near-real time (within a minute or two) in the Moderne Platform when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](./configure-an-agent-with-maven-repository-access.md) or [Artifactory](./configure-an-agent-with-artifactory-access.md) instructions before continuing.

Below is an example of what a Connector run command might look like at the end of this step.

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD \
# ... Additional variables to come
-p 8080:8080
moderne-connector:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
--moderne.organization.indexer.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
# ... Additional arguments to come
```
</TabItem>
</Tabs>

### Step 6: (Optionally) Use strict recipe sources.

Some organizations want recipe artifacts to only come from locations configured in the Moderne Connector. If you want to configure that, please follow the [strict recipe sources instructions](./configure-an-agent-with-strict-recipe-sources.md).

Below is an example of what a Connector run command might look like at the end of this step if you configured the Connector to use only configured recipe sources.

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD \
-p 8080:8080
moderne-connector:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.connector.token=yourToken \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
--moderne.organization.indexer.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
```
</TabItem>
</Tabs>

### Step 7: (Optionally) Configure LLM support for Moddy

If you want to enable Moddy (Moderne's AI agent) in your platform, you'll need to configure LLM support. Moddy allows users to interact with their codebase using natural language. Please follow the [Moddy configuration instructions](./configure-an-agent-with-llm-for-moddy.md) to set this up.

### Step 8: (Optional but recommended) Configure organizational hierarchy

If you would like to have an organizational hierarchy available inside of the Moderne Platform, you can provide this information using a `repos.csv` file.

#### Using a repos.csv file

A `repos.csv` file defines your repositories and their organizational structure. The Connector can load this file to create organizations in the Moderne Platform.

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

You can provide the file to the Connector in two ways:

1. **Remote URL:** Set the environment variable to point to a hosted CSV file
2. **Local file:** Mount the file into the container and configure the path

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

**Option 1: Remote URL**

```bash
docker run \
  -e MODERNE_ORGANIZATION_INDEXER_SOURCES_0_REPOSCSV=https://example.com/repos.csv \
  # ... other environment variables
  moderne-connector:latest
```

**Option 2: Local file mount**

```bash
docker run \
  -v /path/to/repos.csv:/app/repos.csv \
  -e MODERNE_ORGANIZATION_INDEXER_SOURCES_0_REPOSCSV=/app/repos.csv \
  # ... other environment variables
  moderne-connector:latest
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Option 1: Remote URL**

```bash
java -jar connector-{version}.jar \
  --moderne.organization.indexer.sources[0].repos-csv=https://example.com/repos.csv \
  # ... other arguments
```

**Option 2: Local file path**

```bash
java -jar connector-{version}.jar \
  --moderne.organization.indexer.sources[0].repos-csv=/path/to/repos.csv \
  # ... other arguments
```

</TabItem>
</Tabs>

:::tip
For detailed information about creating and formatting a `repos.csv` file, including how to handle different SCM providers and define complex organizational hierarchies, see the [creating a repos.csv file](../../../../user-documentation/moderne-cli/references/repos-csv.md) guide.
:::

**Alternative configuration:**

If you need more advanced organizational configuration options, you can also [configure an organizational hierarchy](./configure-organizations-hierarchy.md) using other methods and [let the Connector know about it](./configure-organizations-hierarchy.md#connector-configuration).

### Step 9: (Optionally) Create an Organizations service

You should create an Organizations service if you want to:

* Limit access to the organizations you've [previously defined](./configure-organizations-hierarchy.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

To do so, please follow the instructions in our [creating an Organizations service guide](../org-service.md) and then [let the Connector know about it](../org-service.md#connector-variables).

### Step 10: (Optionally) Configure a DevCenter

The DevCenter is the mission-control dashboard of the Moderne Platform. If you wish to have DevCenters available inside of the Moderne Platform, you will need to [ensure you've defined an organizational hierarchy](./configure-organizations-hierarchy.md) and then [follow the instructions for configuring a DevCenter](../creating-a-devcenter-recipe.md).

### Step 11: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please follow [these instructions](./configure-an-agent-with-client-ssl-certificates.md) to configure the KeyStore.

### Step 12: Run the Connector

At this point, you should have configured everything needed to run the Moderne Connector. If you run into issues running the command, please don't hesitate to reach out.

Below is a table that has instructions for how to run the Connector in combination with some examples of the variables/arguments provided in the previous steps:

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

**How to build the Docker image**

```bash
docker build -t moderne-connector:latest .
```

**How to run the Docker image with an environment file**

```bash
docker run --env-file=moderne-connector.env moderne-connector:latest
```

**Run the `docker run` command in combination with all of the environment variables you've added in the previous steps:**

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD \
-p 8080:8080
moderne-connector:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

Use `java` to run a jar in combination with arguments that you've added in the previous steps:

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.connector.crypto.symmetricKey=...
export MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY=...
export MODERNE_CONNECTOR_TOKEN=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID=...
export MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=...
export MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
--moderne.organization.indexer.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.organization.indexer.poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.connector.token={token_value}` as an argument instead of `--moderne.connector.token={token_value}`.
</TabItem>
</Tabs>

## Health endpoints

Once the Connector is running, you can verify its health and readiness using the following endpoints:

* `/actuator/health` - Returns the overall health status of the Connector
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

The Moderne Connector exposes Prometheus-compatible metrics that can be used for monitoring and observability.

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

A pre-built Grafana dashboard is available in the [Moderne Connector example repository](https://github.com/moderneinc/moderne-agent-example/tree/main/grafana). The dashboard provides visualizations for:

* Connector connectivity status
* LST indexing performance
* Artifact download metrics
* Resource utilization
* Error rates

To use the dashboard:

1. Import `moderne-agent-dashboard-v1.json` into your Grafana instance
2. Select your Prometheus datasource when prompted
3. The dashboard will automatically populate with metrics from your Connector(s)

## Scaling considerations

For high availability and increased throughput, you can run multiple Moderne Connector instances concurrently.

**Key requirements for multi-instance deployment:**

* Each Connector instance must have a unique `MODERNE_CONNECTOR_NICKNAME`
* Each instance requires its own port mapping (e.g., 8080, 8081, 8082)
* All instances should use the same `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`
* All instances should connect to the same `MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI`

**Example multi-instance deployment:**

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

```bash
# First Connector instance
docker run -d \
  --name moderne-agent-1 \
  -p 8080:8080 \
  -e MODERNE_CONNECTOR_NICKNAME=prod-agent-1 \
  -e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
  # ... other environment variables
  moderne-connector:latest

# Second Connector instance
docker run -d \
  --name moderne-agent-2 \
  -p 8081:8080 \
  -e MODERNE_CONNECTOR_NICKNAME=prod-agent-2 \
  -e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
  # ... other environment variables
  moderne-connector:latest
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# First Connector instance
java -jar connector-{version}.jar \
  --moderne.connector.nickname=prod-agent-1 \
  --server.port=8080 \
  # ... other arguments

# Second Connector instance
java -jar connector-{version}.jar \
  --moderne.connector.nickname=prod-agent-2 \
  --server.port=8081 \
  # ... other arguments
```

</TabItem>
</Tabs>

Multiple Connector instances will automatically distribute the workload and provide redundancy in case of individual Connector failures.

## Troubleshooting

### Connection failures

**Symptoms:** Connector fails to connect to Moderne API or shows connection errors in logs.

**Common causes and solutions:**

* **Invalid API endpoint:** Verify the `MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI` matches the URI provided by Moderne
* **Invalid authentication token:** Confirm the `MODERNE_CONNECTOR_TOKEN` is correct and has not expired
* **Network connectivity:** Ensure the Connector can reach the Moderne API endpoint (check firewalls, proxies, and outbound HTTPS access)
* **SSL/TLS issues:** If using custom certificates, verify they are properly configured in the Java truststore

### DNS resolution failures in Podman containers

**Symptoms:** Connector fails to start with errors like:

```
WebClientRequestException: Failed to resolve 'hostname' [A(1)] and search domain query for configured domains failed as well: [dns.podman]
```

**Cause:** The Connector uses Netty's async DNS resolver, which directly queries DNS servers via UDP. In Podman's bridged networking mode, this can bypass Podman's DNS forwarding mechanism.

**Solution:** Use host networking mode when running the Connector container:

```bash
podman run --network host ...
```

This allows the Connector to use the host's network stack directly, including its DNS resolution.

### Missing repositories

**Symptoms:** Expected repositories do not appear in the Moderne Platform.

**Common causes and solutions:**

* **SCM OAuth configuration:** Verify OAuth credentials (`MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID`, `MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET`, etc.) are correct
* **Organization allowlists:** Check that `MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_*` includes all necessary organizations
* **OAuth app permissions:** Ensure the OAuth application has been granted access to the repositories (may require organization admin approval)
* **Private repository access:** Verify `MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true` is set if accessing private repositories

### Absent LSTs

**Symptoms:** Repositories appear in Moderne but LST artifacts are not available for running recipes.

**Common causes and solutions:**

* **Artifact repository configuration:** Verify Maven or Artifactory repository settings (URLs, credentials)
* **AQL filters (Artifactory):** Check that `MODERNE_ORGANIZATION_INDEXER_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_*` correctly matches your LST artifacts
* **Maven indexing:** If using Maven repository configuration, ensure the Maven index is being published and updated regularly
* **Artifact publication:** Confirm LST artifacts are actually being published to the configured repository
* **Network access:** Verify the Connector can reach the artifact repository from its network location

### Checking Connector logs

Most issues can be diagnosed by examining the Connector logs. Look for:

* Connection errors or authentication failures
* Repository discovery issues
* Artifact indexing errors
* Network timeouts or connectivity problems

## Updating your Connector

If you want to update the Moderne Connector over time, please follow the instructions in the table below:

<Tabs groupId="connector-type">
<TabItem value="oci-container" label="OCI Container">

If you're running the commands provided in this guide, you should see that the last line of every Connector run command is `moderne-connector:latest`.

If that's true, then you can rebuild the Connector image and it should pick up the latest version. If you've decided to pin the version to something else instead of `latest`, please see our [releases page](../../../../releases/agent-releases.md) for the versions.
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

To update your version of the Executable JAR, change the `{version}` in `java -jar connector-{version}.jar` to be the latest one on [the releases page](../../../../releases/agent-releases.md).
</TabItem>
</Tabs>
