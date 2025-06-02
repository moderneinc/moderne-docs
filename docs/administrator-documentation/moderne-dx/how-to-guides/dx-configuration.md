---
sidebar_label: Configuring Moderne DX
description: Detailed instructions for configuring Moderne DX.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuring Moderne DX

Moderne DX is a secure, fully on-premises, enterprise-level automated code remediation solution. At its heart is a central service that must be configured for everything to work correctly. This guide will walk you through how to do that.

## Moderne DX setup instructions

### Step 1: Determine how you will run the service

There are two ways you can run the DX service:

1. You can use Java to run a Spring Boot executable JAR
2. You can create a Docker image that downloads and runs the executable JAR

:::info
Regardless of which option you pick, we recommend that you dedicate a minimum of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.
:::

[Moderne DX can be found on Maven Central](https://central.sonatype.com/artifact/io.moderne/moderne-dx/versions). From there, you can select the latest version and download the appropriate JAR to either run or to configure your image with.

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to create a Docker image to run the service.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) environment such Cloud Foundry, you'll want to use the JAR to run the service.

The table below provides some core information for running the service. However, in order for the service to function correctly, additional variables will need to be added based on your environment (such as what artifact repositories you have configured). We'll walk through each of those in the following steps.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

**How to build the Docker image**

```bash
docker build -t moderne-dx:latest .
```

**How to run the image with an environment file**

```bash
docker run --env-file=moderne-dx.env moderne-dx:latest
```

**How to run the image with command line arguments**

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_TOKEN_0 \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
# ... Additional variables to come
-p 8080:8080
moderne-dx:latest
```

**Example Dockerfile**

:::info
You are responsible for creating this Dockerfile and your own base image. It is your responsibility to keep this up-to-date when vulnerabilities arise. The below one is a suggestion for getting started - but yours will differ from this as it should point to and use your own tools and services.
:::

```docker
FROM eclipse-temurin:17-jdk
RUN apt-get update && apt-get install -y libxml2-utils

# Set the environment variable MODERNE_DX_VERSION
ARG MODERNE_DX_VERSION
ENV MODERNE_DX_VERSION=${MODERNE_DX_VERSION}

WORKDIR /app
USER root
RUN groupadd -r app && useradd --no-log-init -r -m -g app app && chown -R app:app /app
USER app

# Download the specified version of moderne-dx JAR file if MODERNE_DX_VERSION is provided,
# otherwise download the latest version
RUN if [ -n "${MODERNE_DX_VERSION}" ]; then \
    echo "Downloading version: ${MODERNE_DX_VERSION}"; \
    curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-dx/${MODERNE_DX_VERSION}/moderne-dx-${MODERNE_DX_VERSION}.jar" --output dx.jar; \
    else \
    LATEST_VERSION=$(curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-dx/maven-metadata.xml" | xmllint --xpath 'string(/metadata/versioning/latest)' -); \
    if [ -z "${LATEST_VERSION}" ]; then \
    echo "Failed to get latest version"; \
    exit 1; \
    fi; \
    echo "Downloading latest version: ${LATEST_VERSION}"; \
    curl -s --insecure --request GET --url "https://repo1.maven.org/maven2/io/moderne/moderne-dx/${LATEST_VERSION}/moderne-dx-${LATEST_VERSION}.jar" --output dx.jar; \
    fi

ENTRYPOINT ["java"]
CMD ["-XX:-OmitStackTraceInFastThrow", "-XX:MaxRAMPercentage=65.0", "-XX:MaxDirectMemorySize=2G", "-XX:+HeapDumpOnOutOfMemoryError", "-XX:+UseStringDeduplication", "-jar", "/app/dx.jar"]
EXPOSE 8080
```

**Example environment variables file**

```bash
MODERNE_DX_TOKEN_0=${MODERNE_TOKEN} 
MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ 
MODERNE_DX_ARTIFACTORY_0_USERNAME=${ARTIFACTORY_USER} 
MODERNE_DX_ARTIFACTORY_0_PASSWORD=${ARTIFACTORY_PASSWORD} 
MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' 
MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' 
MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local 
MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven 
MODERNE_DX_MAVEN_0_USERNAME=${MAVEN_USER} 
MODERNE_DX_MAVEN_0_PASSWORD=${MAVEN_PASSWORD} 
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**How to run the service:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```bash
java -jar moderne-dx-{version}.jar \
# ... Additional arguments explained in the following steps
```
</TabItem>
</Tabs>

### Step 2: Configure the service to connect to your artifact repositories

The Moderne DX service needs to connect to your artifact repositories for two reasons:

1. To obtain information about your [LST](../../moderne-platform/references/lossless-semantic-trees.md) artifacts so that the CLI can list and potentially grab them.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne DX service to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

:::info
The Moderne DX service can only talk to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)). A single instance of one of these products may contain multiple Maven repositories.
:::

Moderne offers two options for connecting to your artifact repository: a generic Maven connection that can connect to any Maven formatted repository regardless of vendor and an Artifactory-specific connection that is optimized to serve LST artifacts more quickly.

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](./configure-dx-with-maven-repository-access.md) and then jump to [Step 5](#step-5-optional-but-recommended-configure-an-organizational-hierarchy).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](./configure-dx-with-artifactory-access.md) to set up a connection that gets the list of LST artifacts. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](./configure-dx-with-artifactory-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](./configure-dx-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and being available in the CLI. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is not tied to a particular vendor.                                                                                                                                                                                                                                                                                                                                                                                                                                 | Can only be used with Artifactory.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Serves BOTH recipe artifacts and LST artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                     | Serves ONLY LST artifacts. Requires Maven configuration to serve recipe artifacts.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe artifacts are immediately available for deployment to Moderne upon publishing to the Maven formatted repository.                                                                                                                                                                                                                                                                       | Can not serve recipe artifacts without Maven configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it is available in the Moderne CLI. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will be available in near-real time (within a minute or two) in the Moderne CLI when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](./configure-dx-with-maven-repository-access.md) or [Artifactory](./configure-dx-with-artifactory-access.md) instructions before continuing.

Below is an example of what the Moderne DX service run command might look like at the end of this step.


<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
# ... Additional variables to come
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

java -jar moderne-dx-{version}.jar \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].astQueryFilters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='"repo":{"$eq":"example-maven"}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
# ... Additional arguments to come
```
</TabItem>
</Tabs>

### Step 3: Set up Moderne DX License

In order for your developers to run recipes using the CLI, they will need a license. Moderne DX provides a convenient mechanism for distributing license keys. Moderne will send a license key to your admin, and you will provide that license key to DX's startup configuration. When CLI users configure the DX connection with `mod config moderne edit`, the CLI will retrieve the license from Moderne DX.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
export MODERNE_DX_LICENSEKEY=...

docker run \
# ... other arguments
-e MODERNE_DX_LICENSEKEY
# ... Additional variables to come
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.licenseKey=...
export MODERNE_DX_LICENSEKEY=...

java -jar moderne-dx-{version}.jar \
# ... other arguments
```
</TabItem>
</Tabs>

### Step 4: (Optional but recommended) Add one or more admin tokens

An admin token is a shared secret that grants users administrative access to DX when included in their local command. This elevated access allows them to perform actions like installing recipes or running diagnostics against a DX instance. You can define one or more tokens. While DX can start without them, we strongly recommend setting at least one.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_TOKEN_1=...

docker run \
# ... other arguments
-e MODERNE_DX_TOKEN_0
-e MODERNE_DX_TOKEN_1
# ... Additional variables to come
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
# --moderne.dx.token[1]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_TOKEN_1=...

java -jar moderne-dx-{version}.jar \
# ... other arguments
```
</TabItem>
</Tabs>

### Step 5: (Optional but recommended) Configure an organizational hierarchy

In order for users to effectively access and run recipes against specific groups of repositories, Moderne DX admins will need to define an organizational structure for their company. This structure, defined via a repos.csv file, needs to either be deployed as a static file alongside DX or be accessible from DX via an unauthenticated URI.

If you want to support this functionality, which we'd strongly recommend, please [follow the instructions in our organizational hierarchy configuration doc](./configure-dx-organizations.md).

Below is an example of what the Moderne DX service run command might look like at the end of this step if you configure this hierarchy.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_TOKEN_0 \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=PullRequest,Branch,Direct \
# ... Additional variables to come
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

java -jar moderne-dx-{version}.jar \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].astQueryFilters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='"repo":{"$eq":"example-maven"}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.dx.organization.defaultCommitOptions=PullRequest,Branch,Direct \
```
</TabItem>
</Tabs>

### Step 6: (Optionally) Configure an organizations service

You should create a dedicated organizations service if you want to:

* Limit access to the organizations you've [previously defined](./configure-dx-organizations.md) so that some users only have access to some repositories OR
* Customize commit messages by repository (e.g., adding a JIRA ticket to your commit messages based on the repository)

If you desire this functionality, please follow the instructions in our [creating an organizations service guide](./dx-org-service.md).

Below is an example of what the Moderne DX service run command might look like at the end of this step.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_TOKEN_0 \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_SYNCINTERVALSECONDS=600 \
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_DX_RECIPE_USEONLYCONFIGURED=true \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=PullRequest,Branch,Direct \
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

java -jar moderne-dx-{version}.jar \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].astQueryFilters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='"repo":{"$eq":"example-maven"}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.syncIntervalSeconds=600 \
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.dx.organization.defaultCommitOptions=PullRequest,Branch,Direct \
--moderne.dx.recipe.useOnlyConfigured=true
```
</TabItem>
</Tabs>

### Step 7: (Optionally) Use strict recipe sources

Some organizations want recipe artifacts to only come from locations configured in the Moderne DX service. If you want to configure that, please follow the [strict recipe sources instructions](./configure-dx-with-strict-recipe-sources.md).

Below is an example of what the Moderne DX service run command might look like at the end of this step if you configured the service to use only configured recipe sources.

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_TOKEN_0 \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_SYNCINTERVALSECONDS=600 \
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_DX_RECIPE_USEONLYCONFIGURED=true \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=PullRequest,Branch,Direct \
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

java -jar moderne-dx-{version}.jar \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].astQueryFilters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='"repo":{"$eq":"example-maven"}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.syncIntervalSeconds=600 \
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.dx.organization.defaultCommitOptions=PullRequest,Branch,Direct \
--moderne.dx.recipe.useOnlyConfigured=true
```
</TabItem>
</Tabs>

### Step 8: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please see the [configure DX with SSL certificate instructions](./configure-dx-ssl.md).

### Step 9: Run Moderne DX

At this point, you should have configured everything needed to run the Moderne DX service. If you run into issues running the command, please don't hesitate to reach out.

Below is a table that has instructions for how to run the service in combination with some examples of the variables/arguments provided in the previous steps:

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

1. Rebuild your Docker image with the latest JAR and any other changes you need to make.
2. Run the `docker run` command in combination with all of the environment variables you've added in the previous steps:

```bash
# Please note that if you create environment variables for secrets, you still need to let Docker
# know that these variables exist by including it via: `-e ENV_VAR_NAME`.
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

docker run \
-e MODERNE_DX_TOKEN_0 \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME \
-e MODERNE_DX_MAVEN_0_PASSWORD \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_SYNCINTERVALSECONDS=600 \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=PullRequest,Branch,Direct \
-p 8080:8080
moderne-dx:latest
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

Use `java` to run a jar in combination with arguments that you've added in the previous steps:

```bash
# Exporting environment variables with the exact same structure as the parameter in the Java command makes it so you no longer need to include them in the below Java command. For instance, the first export below is equivalent to including this parameter in the Java command:
# --moderne.dx.token[0]=...
export MODERNE_DX_TOKEN_0=...
export MODERNE_DX_ARTIFACTORY_0_USERNAME=...
export MODERNE_DX_ARTIFACTORY_0_PASSWORD=...
export MODERNE_DX_MAVEN_0_USERNAME=...
export MODERNE_DX_MAVEN_0_PASSWORD=...

java -jar moderne-dx-{version}.jar \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].astQueryFilters[0]='"name":{"$match":"*-ast.jar"}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='"repo":{"$eq":"example-maven"}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.syncIntervalSeconds=600 \
--moderne.dx.organization.defaultCommitOptions=PullRequest,Branch,Direct \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.dx.token={token_value}` as an argument instead of `--moderne.dx.token={token_value}`.
</TabItem>
</Tabs>

## Updating your service

If you want to update the Moderne DX service over time, please follow the instructions in the table below:

<Tabs groupId="dx-type">
<TabItem value="docker-image" label="Docker image">

Update your Dockerfile to contain the [latest DX JAR](https://central.sonatype.com/artifact/io.moderne/moderne-dx/versions). Then rebuild your Docker image and restart your Docker instance by running the `docker run ...` command again.
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

To update your version of the Executable JAR, change the `{version}` in `java -jar moderne-dx-{version}.jar` to be the [latest DX JAR](https://central.sonatype.com/artifact/io.moderne/moderne-dx/versions).
</TabItem>
</Tabs>
