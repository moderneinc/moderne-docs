# Configuring Moderne DX

Moderne DX is a secure, fully on-premises, enterprise-level automated code remediation solution. At its heart is a central service that must be configured for everything to work correctly. This guide will walk you through how to do that.

## Moderne DX setup instructions

### Step 1: Contact Moderne to obtain access

Please talk to your sales representative or [contact us](mailto:support@moderne.io) in order to obtain access to Moderne DX. We will work with you to determine what access details are appropriate for your platform.

### Step 2: Determine how you will run the service

Moderne offers two ways of running the service:

1. A Spring Boot executable JAR that can be run with Java
2. (Coming soon) An [OCI image](https://github.com/opencontainers/image-spec) that can be run using any OCI runtime (e.g., Docker, Podman)

Regardless of which one you pick, you'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.

If you deploy to Kubernetes or any other containerized environment like AWS ECS, you'll want to use the OCI image to run the service.

If you deploy to a [PaaS](https://en.wikipedia.org/wiki/Platform\_as\_a\_service) environment such Cloud Foundry, you'll want to use the JAR to run the service.

The table below provides the core command for running the service. However, in order for the service to function correctly, additional variables will need to be added based on your environment (such as what artifact repositories you have configured, and whether or not you've configured an [Organizations service](../../moderne-platform/how-to-guides/organizations-service.md)). We'll walk through each of those in the following steps.

{% tabs %}
{% tab title="OCI Container" %}
**How to run the service:**

1. Log in to the Moderne registry:

```shell
docker login -u moderne-tenant -p <password provided by Moderne> moderne.azurecr.io
```

2. Pull down the latest service:

```shell
docker pull moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```

3. Run the `docker run` command in combination with environment variables that you'll add in the subsequent steps. The final command will look similar to:

```shell
docker run \
# ... Environment variables explained in the following steps
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
**How to run the service:**

Use `java` to run a jar in combination with arguments that you'll add in the subsequent steps. The final command will look similar to:

```shell
java -jar moderne-dx-{version}.jar \
# ... Additional arguments explained in the following steps
```
{% endtab %}
{% endtabs %}

### Step 3: Configure the service to connect to your artifact repositories

The Moderne DX service needs to connect to your artifact repositories for two reasons:

1. To obtain information about your [LST](../../moderne-platform/references/concepts/lossless-semantic-trees.md) artifacts so that the CLI can list and potentially grab them.
2. To obtain your recipe artifacts (if any exist). These recipe artifacts contain custom recipes, defined by your team, that perform transformations against your LST artifacts.

Your company might have many artifact repositories, potentially in different products, that you wish to connect the Moderne DX service to. Each of these artifact repositories could contain LST artifacts, recipe artifacts, or a combination of both. The setup instructions differ based on what product you use to store your artifact repositories and what artifacts you wish to send to Moderne.

{% hint style="info" %}
The Moderne DX service can only talk to _Maven formatted_ artifact repositories. There are a variety of open-source and commercial products that exist that can serve artifacts in this format (such as [Artifactory](https://jfrog.com/artifactory/) and [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)). A single instance of one of these products may contain multiple Maven repositories.
{% endhint %}

Moderne offers two options for connecting to your artifact repository: a generic Maven connection that can connect to any Maven formatted repository regardless of vendor and an Artifactory-specific connection that is optimized to serve LST artifacts more quickly.

If you _do not_ plan on using Artifactory to store LST or recipe artifacts, please follow the [Maven repository configuration instructions](configure-dx-with-maven-repository-access.md) and then jump to [Step 4](dx-configuration.md#step-4-optionally-configure-the-organizations-service).

If you _do_ plan on using Artifactory to store artifacts, you have two options:

1. Use the [Artifactory LST configuration instructions](configure-dx-with-artifactory-access.md) to set up a connection that gets the list of LST artifacts. Then, if you plan on creating custom recipes, you would follow the [Artifactory recipe configuration instructions](configure-dx-with-artifactory-recipes.md) to set up a connection in Artifactory to serve recipe artifacts. **(recommended)**
2. Use the [Maven repository configuration instructions](configure-dx-with-maven-repository-access.md) to set up a connection that serves both LST artifacts and recipe artifacts to Moderne. This is not recommended as LST artifacts will have a considerable delay between being published and being available in the CLI. However, if for some reason you can not use AQL queries, this approach is necessary.

The below table shows the key differences between the two types of configuration:

| **Maven repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Artifactory repository configuration**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is not tied to a particular vendor.                                                                                                                                                                                                                                                                                                                                                                                                                                 | Can only be used with Artifactory.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Serves BOTH recipe artifacts and LST artifacts.                                                                                                                                                                                                                                                                                                                                                                                                                     | Serves ONLY LST artifacts. Requires Maven configuration to serve recipe artifacts.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe artifacts are immediately available for [deployment to Moderne](../../moderne-platform/how-to-guides/importing-external-recipes.md) upon publishing to the Maven formatted repository.                                                                                                                                                                                                                                                                       | Can not serve recipe artifacts without Maven configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LST artifacts may be served if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. There will be a considerable delay between when an LST is published to the Maven repository and when it is available in the Moderne CLI. This delay is approximately the delay between updates to the index – which is controlled by a batch process that your artifact repository executes on a schedule. | LST artifacts will be available in near-real time (within a minute or two) in the Moderne CLI when they are published to Artifactory. This is because Artifactory configuration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than using an index produced in a batch process. |

Please ensure you've followed either the [Maven](configure-dx-with-maven-repository-access.md) or [Artifactory](configure-dx-with-artifactory-access.md) instructions before continuing.

Below is an example of what the Moderne DX service run command might look like at the end of this step.

{% hint style="success" %}
`token[N]` / `TOKEN_N` is used to specify one or more tokens that can be used by admins.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
```shell
docker run \
-e MODERNE_DX_TOKEN_0=<token> \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
# ... Additional variables to come
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
java -jar moderne-dx-{version}.jar \
--moderne.dx.token[0]=<token>
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
# ... Additional arguments to come
```
{% endtab %}
{% endtabs %}

### Step 4: (Optionally) Configure the Organizations service

Many organizations desire the ability to control the organizational structure of their repositories within the Moderne platform in a dynamic way. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted inside of your environment.

If you want to set up this service, please see the [organizations service setup instructions](../../moderne-platform/how-to-guides/organizations-service.md). Then, once it has been set up, please [configure the Moderne DX service to connect with the organization service](configure-dx-org-service.md).

Below is an example of what the Moderne DX service run command might look like at the end of this step if you set up the Organizations service.

{% tabs %}
{% tab title="OCI Container" %}
```shell
docker run \
-e MODERNE_DX_TOKEN_0=<token> \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```shell
java -jar moderne-dx-{version}.jar \
--moderne.dx.token[0]=<token>
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
```
{% endtab %}
{% endtabs %}

### Step 5: (Optionally) Use strict recipe sources.

Some organizations want recipe artifacts to only come from locations configured in the Moderne DX service. If you want to configure that, please follow the [strict recipe sources instructions](configure-dx-with-strict-recipe-sources.md).

Below is an example of what the Moderne DX service run command might look like at the end of this step if you configured the service to use only configured recipe sources.

{% tabs %}
{% tab title="OCI Container" %}
```shell
docker run \
-e MODERNE_DX_TOKEN_0=<token> \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-e MODERNE_DX_RECIPE_USEONLYCONFIGURED=true \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
```bash
java -jar moderne-dx-{version}.jar \
--moderne.dx.token[0]=<token>
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
--moderne.dx.recipe.useOnlyConfigured=true
```
{% endtab %}
{% endtabs %}

### Step 5: (Optionally) Provide SSL client keystore

If you have configured any services that require client SSL certificates (such as Maven or Artifactory), you will need to provide a KeyStore with these certificates. Please see the [configure DX with SSL certificate instructions](../../how-to-guides/dx-configuration/configure-dx-ssl.md).

### Step 6: Run the service

At this point, you should have configured everything needed to run the Moderne DX service. If you run into issues running the command, please don't hesitate to reach out.

Below is a table that has instructions for how to run the service in combination with some examples of the variables/arguments provided in the previous steps:

{% tabs %}
{% tab title="OCI Container" %}
1. Log in to the Moderne registry:

```shell
docker login -u moderne-tenant -p <password provided by Moderne> moderne.azurecr.io
```

2. Pull down the latest DX service:

```shell
docker pull moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```

3. Run the `docker run` command in combination with all of the environment variables you've added in the previous steps:

```shell
docker run \
-e MODERNE_DX_TOKEN_0=<token> \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-p 8080:8080
moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
```
{% endtab %}

{% tab title="Executable JAR" %}
Use `java` to run a jar in combination with arguments that you've added in the previous steps:

```shell
java -jar moderne-dx-{version}.jar \
--moderne.dx.token[0]=<token>
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
```

* Note: System properties can be used in place of arguments. For example, you can use `-Dmoderne.dx.token={token_value}` as an argument instead of `--moderne.dx.token={token_value}`.
{% endtab %}
{% endtabs %}

## Updating your service

If you want to update the Moderne DX service over time, please follow the instructions in the table below:

{% tabs %}
{% tab title="OCI Container" %}
If you're running the commands provided in this guide, you should see that the last line of every service run command is `moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest`.

If that's true, then you can simply restart the service and it should pick up the latest version. If you've decided to pin the version to something else instead of `latest`, please see our [releases page](dx-configuration.md) (coming soon) for the versions.
{% endtab %}

{% tab title="Executable JAR" %}
To update your version of the Executable JAR, change the `{version}` in `java -jar moderne-dx-{version}.jar` to be the latest one on [the releases page](dx-configuration.md) (coming soon).
{% endtab %}
{% endtabs %}

## Configure the license for the CLI component

Please follow the instructions in the [Moderne CLI license doc](./moderne-cli-license.md).