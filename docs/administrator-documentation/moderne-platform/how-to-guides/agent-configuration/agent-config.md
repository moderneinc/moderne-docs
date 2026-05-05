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
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
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
MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector
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
MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/
MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=${ARTIFACTORY_USERNAME}
MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=${ARTIFACTORY_PASSWORD}
MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}'
MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}'

# Set the environment variables for your artifactory recipe access or your maven repository access
MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local
MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_USERNAME=${MAVEN_USERNAME}
MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_PASSWORD=${MAVEN_PASSWORD}
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
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/connector \
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
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
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
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/connector \
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
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
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
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/connector \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments to come
```
</TabItem>
</Tabs>

### Step 5: Configure the Connector to find your repositories and their LSTs

Before Moderne can run recipes on your code, the Connector needs two things:

1. The list of repositories you want Moderne to index.
2. The [LST](../../references/lossless-semantic-trees.md) artifact location for each repository.

Both come from a CSV file that you point the Connector at.

#### Configure where your CSV lives

The CSV can live in a few different places - pick whichever fits your environment. All three options sit under `moderne.organization.sources.*`:

| Source type | Description                          | Configuration prefix                   |
|-------------|--------------------------------------|----------------------------------------|
| File        | A CSV on the Connector's filesystem. | `moderne.organization.sources.file[*]` |
| HTTP(S)     | A URL serving a CSV.                 | `moderne.organization.sources.http[*]` |
| S3 object   | An S3 URI pointing to a CSV object.  | `moderne.organization.sources.s3[*]`   |

For `file` and `http` sources, please see the [organizational hierarchy configuration guide](./configure-organizations-hierarchy.md). For `s3` sources, please see the [S3 organization source guide](./configure-an-agent-with-s3-access.md). For details on the CSV format itself (such as required and optional columns, how to express an organizational hierarchy), please see the [repos.csv reference](../../../../user-documentation/moderne-cli/references/repos-csv.md).

#### Configure where your LSTs live

You have two options:

* **(Recommended) Include publish URIs in the CSV.** When each row has a `publishUri` column, the Connector trusts those values and fetches LSTs directly. You can generate such a CSV by setting up a [Mass Ingest](../mass-ingest.md) pipeline; its `mod publish` step produces a `repos-lock.csv` with `publishUri` values for every repository.
* **Let the Connector discover them.** If your CSV does not have `publishUri` values, point the Connector at the artifact repository (or repositories) where your LSTs are published. The Connector will query it to look up each LST's location at runtime:
  * **[Artifactory](./configure-an-agent-with-artifactory-access.md)** - uses [AQL](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) to discover LSTs in near real-time (within a minute or two of publishing). Recommended for Artifactory users.
  * **[Maven repository](./configure-an-agent-with-maven-repository-access.md)** - works with any Maven-formatted repository (Artifactory, Nexus, etc.) via the [Maven Indexer](https://maven.apache.org/maven-indexer/). There will be a delay between when an LST is published and when it shows up in Moderne, controlled by a batch index-update process.

The Connector picks between these two paths automatically based on whether you've configured poll repositories. If you need to force one or the other, set `moderne.connector.organization.mode` - see the [agent variables reference](./agent-variables.md) for the full list of values.

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
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# Point the Connector at a CSV describing your repositories. Prefer `repos-lock.csv` from Mass Ingest for LOCK mode.
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_URI=https://internal.example.com/repos-lock.csv \
# (Optional) Enrichment pollers — only needed if your CSV lacks publishUri values.
# -e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
# -e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=... \
# -e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=... \
# -e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
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
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/connector \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
# Point the Connector at a CSV describing your repositories. Prefer `repos-lock.csv` from Mass Ingest for LOCK mode.
--moderne.organization.sources.http[0].uri=https://internal.example.com/repos-lock.csv \
# (Optional) Enrichment pollers — only needed if your CSV lacks publishUri values.
# --moderne.connector.organization.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
# --moderne.connector.organization.poll.artifactory[0].username=... \
# --moderne.connector.organization.poll.artifactory[0].password=... \
# --moderne.connector.organization.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
# ... Additional arguments to come
```
</TabItem>
</Tabs>

### Step 6: Configure the Connector to connect to your recipe marketplace repositories

Separate from the LST storage you just configured, the Connector also needs to know where to fetch recipe artifacts — the JARs and packages that define the recipes users can run in the Moderne Platform. This is typically a different repository from the one that stores your LSTs.

Moderne supports the following recipe marketplace registry types:

* **Maven** repositories (Artifactory, Nexus, etc.)
* **NPM** registries
* **NuGet** feeds
* **PyPI** indexes

:::info Defaults and override behavior
If no Maven recipe marketplace repositories are configured, Moderne SaaS falls back to the following defaults:

* `https://repo.maven.apache.org/maven2` (Maven Central — releases only)
* `https://central.sonatype.com/repository/maven-snapshots/` (Sonatype — snapshots only)

Once you configure one or more Maven repositories, only those are searched — the defaults above are not merged in, so you will need to list Maven Central and Sonatype snapshots explicitly to keep them. PyPI, NuGet, and NPM have no defaults.
:::

For the full list of variables/arguments, please see the [recipe marketplace repositories guide](./configure-recipe-marketplace-repositories.md).

### Step 7: (Optionally) Configure LLM support for Moddy

If you want to enable Moddy (Moderne's AI agent) in your platform, you'll need to configure LLM support. Moddy allows users to interact with their codebase using natural language. Please follow the [Moddy configuration instructions](./configure-an-agent-with-llm-for-moddy.md) to set this up.

### Step 8: (Optionally) Create an Organizations service

You should create an Organizations service if you want to:

* Limit access to the organizations you've [previously defined](./configure-organizations-hierarchy.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

To do so, please follow the instructions in our [creating an Organizations service guide](../org-service.md) and then [let the Connector know about it](../org-service.md#connector-variables).

### Step 9: (Optionally) Configure a DevCenter

The DevCenter is the mission-control dashboard of the Moderne Platform. If you wish to have DevCenters available inside of the Moderne Platform, you will need to [ensure you've defined an organizational hierarchy](./configure-organizations-hierarchy.md) and then [follow the instructions for configuring a DevCenter](../creating-a-devcenter-recipe.md).

### Step 10: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please follow [these instructions](./configure-an-agent-with-client-ssl-certificates.md) to configure the KeyStore.

### Step 11: Run the Connector

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
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
-e MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY \
-e MODERNE_CONNECTOR_NICKNAME=prod-1 \
-e MODERNE_CONNECTOR_TOKEN \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID \
-e MODERNE_SCM_GITHUB_0_OAUTH_CLIENTSECRET \
-e MODERNE_SCM_GITHUB_0_URI=https://myorg.github.com \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_SCM_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_SCM_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_URI=https://myartifactory.example.com/artifactory/ \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_USERNAME \
-e MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_PASSWORD \
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
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_PASSWORD=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_USERNAME=...
export MODERNE_CONNECTOR_ORGANIZATION_POLL_MAVEN_0_PASSWORD=...

java -jar connector-{version}.jar \
--moderne.connector.apiGatewayRsocketUri=https://api.tenant.moderne.io/connector \
--moderne.connector.nickname=prod-1 \
--moderne.scm.github[0].uri=https://myorg.github.com \
--moderne.scm.github[0].allowableOrganizations[0]=moderne \
--moderne.scm.github[0].allowableOrganizations[1]=openrewrite \
--moderne.scm.github[0].oauth.includePrivateRepos=true \
--moderne.connector.organization.poll.artifactory[0].uri=https://myartifactory.example.com/artifactory/ \
--moderne.connector.organization.poll.artifactory[0].lstQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.connector.organization.poll.artifactory[0].lstQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.connector.organization.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.connector.token={token_value}` as an argument instead of `--moderne.connector.token={token_value}`.
</TabItem>
</Tabs>

## Tuning polling cadence and download concurrency

The Connector exposes two organization-wide knobs that affect how quickly new LSTs appear in Moderne and how much concurrent work the Connector performs. Both are optional and have sensible defaults.

* **`moderne.connector.organization.interval`** — how often the Connector re-fetches each source `repos.csv` and re-runs enrichment. Defaults to `10m`. Lower this if you want LSTs to show up faster; raise it to reduce load on your artifact repository.
* **`moderne.connector.organization.downloadParallelism`** — the global cap on concurrent LST download, encrypt, and upload operations across all configured sources. Defaults to `max(4, availableProcessors())`. Raise it if your Connector host and upstream gateway have headroom; lower it to throttle network/CPU use.

See the [All Connector variables reference](./agent-variables.md#organization-sync-variables) for the exact variable and argument names.

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

Moderne SaaS provides a hosted observability dashboard at `https://status.<TENANT>.moderne.io`. This Atlas-backed dashboard gives you a tenant-wide view of Connector health, LST ingestion progress, recipe runs, and other SaaS internals — with no scrape configuration or local metrics infrastructure required.

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
  -e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
  # ... other environment variables
  moderne-connector:latest

# Second Connector instance
docker run -d \
  --name moderne-agent-2 \
  -p 8081:8080 \
  -e MODERNE_CONNECTOR_NICKNAME=prod-agent-2 \
  -e MODERNE_CONNECTOR_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/connector \
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
* **AQL filters (Artifactory):** Check that `MODERNE_CONNECTOR_ORGANIZATION_POLL_ARTIFACTORY_0_LSTQUERYFILTERS_*` correctly matches your LST artifacts
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
