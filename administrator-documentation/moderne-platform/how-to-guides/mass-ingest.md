# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../references/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

In this guide, we'll walk you through everything you need to know to get started with this.

## Example ingestion repository

Moderne provides a [sample ingestion repositories](https://github.com/moderneinc/mass-ingest-example) that you can either copy or study when making your own. Your ingestion repo should largely consist of the same files.

## Step 1: Create your `repos.csv` file

The first step needed to integrate private code is to come up with a list of repositories that should be ingested (`repos.csv`). This list should be in a CSV format with the first row composed of headers for the columns.

At the very least, you must include two columns: `cloneUrl` and `branch`. However, you can also include additional optional columns if additional information is needed to build your repositories. These optional columns are: `changeset`, `java`, `jvmOpts`, `mavenArgs`, `gradleArgs`, and `bazelRule` (see the [mod git clone csv documentation](/user-documentation/moderne-cli/cli-reference.md#mod-git-clone-csv) for more information).

If you use GitHub, you may find it useful to use the GitHub CLI to generate a list of repositories for your organization. For instance, the following command would generate a `repos.csv` file for the `spring-projects` GitHub organization:

{% code overflow="wrap" %}
```bash
echo "cloneUrl,branch" > repos.csv
gh repo list spring-projects --source --no-archived --limit 1000 --json sshUrl,defaultBranchRef --template "{{range .}}{{.sshUrl}},{{.defaultBranchRef.name}}{{\"\n\"}}{{end}}" >> repos.csv
```
{% endcode %}

<details>

<summary>Here is an example of what the CSV file for the <code>spring-projects</code> in GitHub looks like:</summary>

```
cloneUrl,branch
git@github.com:spring-projects/spring-cli.git,main
git@github.com:spring-projects/spring-ai.git,main
git@github.com:spring-projects/spring-pulsar.git,main
git@github.com:spring-projects/spring-framework.git,main
git@github.com:spring-projects/spring-amqp-samples.git,main
git@github.com:spring-projects/spring-amqp.git,main
git@github.com:spring-projects/spring-boot.git,main
git@github.com:spring-projects/spring-security-samples.git,main
git@github.com:spring-projects/spring-kafka.git,main
git@github.com:spring-projects/spring-session.git,main
git@github.com:spring-projects/spring-authorization-server.git,main
git@github.com:spring-projects/spring-batch.git,main
git@github.com:spring-projects/spring-integration.git,main
git@github.com:spring-projects/spring-integration-samples.git,main
git@github.com:spring-projects/spring-data-commons.git,main
git@github.com:spring-projects/spring-data-neo4j.git,main
git@github.com:spring-projects/spring-graphql.git,main
git@github.com:spring-projects/spring-data-redis.git,main
git@github.com:spring-projects/spring-data-keyvalue.git,main
git@github.com:spring-projects/spring-data-rest.git,main
git@github.com:spring-projects/spring-security.git,main
git@github.com:spring-projects/spring-petclinic.git,main
git@github.com:spring-projects/spring-modulith.git,main
git@github.com:spring-projects/spring-data-mongodb.git,main
git@github.com:spring-projects/spring-data-relational.git,main
git@github.com:spring-projects/spring-data-jpa.git,main
git@github.com:spring-projects/spring-data-couchbase.git,main
git@github.com:spring-projects/spring-data-bom.git,main
git@github.com:spring-projects/spring-data-build.git,main
git@github.com:spring-projects/spring-data-elasticsearch.git,main
git@github.com:spring-projects/spring-shell.git,main
git@github.com:spring-projects/spring-retry.git,main
git@github.com:spring-projects/spring-ws.git,main
git@github.com:spring-projects/spring-data-release.git,main
git@github.com:spring-projects/sts4.git,main
git@github.com:spring-projects/spring-data-ldap.git,main
git@github.com:spring-projects/spring-data-cassandra.git,main
git@github.com:spring-projects/spring-ldap.git,main
git@github.com:spring-projects/spring-integration-aws.git,main
git@github.com:spring-projects/spring-rewrite-commons.git,main
git@github.com:spring-projects/spring-aot-smoke-tests.git,ci
git@github.com:spring-projects/spring-hateoas.git,main
git@github.com:spring-projects/spring-restdocs.git,main
git@github.com:spring-projects/spring-lifecycle-smoke-tests.git,main
git@github.com:spring-projects/spring-security-kerberos.git,main
git@github.com:spring-projects/spring-webflow.git,main
git@github.com:spring-projects/spring-net.git,main
git@github.com:spring-projects/spring-data-examples.git,main
git@github.com:spring-projects/spring-statemachine.git,main
git@github.com:spring-projects/spring-vault.git,main
git@github.com:spring-projects/spring-credhub.git,main
git@github.com:spring-projects/spring-batch-extensions.git,main
git@github.com:spring-projects/spring-session-data-mongodb.git,main
git@github.com:spring-projects/spring-plugin.git,main
git@github.com:spring-projects/spring-test-data-geode.git,main
git@github.com:spring-projects/security-advisories.git,main
git@github.com:spring-projects/spring-guice.git,main
git@github.com:spring-projects/spring-data-dev-tools.git,main
git@github.com:spring-projects/spring-data-envers.git,main
git@github.com:spring-projects/spring-data-r2dbc.git,main
git@github.com:spring-projects/spring-boot-data-geode.git,main
git@github.com:spring-projects/spring-session-data-geode.git,main
git@github.com:spring-projects/spring-session-bom.git,main
git@github.com:spring-projects/spring-data-geode.git,main
git@github.com:spring-projects/spring-flo.git,main
git@github.com:spring-projects/.github.git,main
git@github.com:spring-projects/spring-webflow-samples.git,main
git@github.com:spring-projects/eclipse-integration-tcserver.git,main
git@github.com:spring-projects/gh-pages.git,gh-pages
git@github.com:spring-projects/spring-hateoas-examples.git,main
git@github.com:spring-projects/spring-ws-samples.git,main
git@github.com:spring-projects/sts-thirdparty-p2-repo.git,master
git@github.com:spring-projects/spring-integration-extensions.git,main
git@github.com:spring-projects/spring-restdocs-samples.git,main
git@github.com:spring-projects/spring-graphql-examples.git,main
git@github.com:spring-projects/spring-data.git,master
git@github.com:spring-projects/spring-loaded.git,master
git@github.com:spring-projects/spring-data-gemfire.git,main
git@github.com:spring-projects/spring-cloud.git,master
git@github.com:spring-projects/spring-session-data-mongodb-examples.git,main
git@github.com:spring-projects/spring-integration-flow.git,master
git@github.com:spring-projects/spring-integration-splunk.git,master
```

</details>

## Step 2: Customize the Docker image to meet your needs

Begin by copying the [provided Dockerfile](https://github.com/moderneinc/mass-ingest-example/blob/main/Dockerfile) to your ingestion repository.

From there, we will modify it depending on your organizational needs. Please note that the ingestion process requires access to several of your internal systems to function correctly. This includes your source control system, your artifact repository, and your Moderne tenant or DX instance.

### Self-signed certifications

Please select the tab that applies to your organization based on whether or not your internal services (artifact repository, source control, or the Moderne tenant) use self-signed certs.

{% tabs %}
{% tab title="Uses self-signed certs" %}
You will need to configure the CLI and JVMs installed within the Docker image to trust your organization's self-signed certificates. 

When invoking, Docker, supply the `TRUSTED_CERTIFICATES_PATH` argument pointing to an appropriate [cacerts file](https://www.ibm.com/docs/en/sdk-java-technology/8?topic=certificate-cacerts-certificates-file).

If you are not sure where to get a suitable cacerts file, you can check out your local machine as you probably have one there. On JDK 8, you can find your cacerts file within its installation directory under `jre/lib/security/cacerts`. On newer JDK versions, you can find your cacerts file within is installation directory under `lib/security/cacerts`.
{% endtab %}

{% tab title="Does not use self-signed certs" %}
If your internal services are accessed:

* Over HTTPS and they require [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), but have certificates signed by a trusted-by-default root Certificate Authority.
* Over HTTP (never requiring SSL/TLS)

Please comment out the [following lines](https://github.com/moderneinc/mass-ingest-example/blob/main/Dockerfile#L40-L42) from your `Dockerfile`:

```docker
# Configure trust store if self-signed certificates are in use for artifact repository, source control, or moderne tenant
COPY ${TRUSTED_CERTIFICATES_PATH} /usr/lib/jvm/temurin-8-jdk/jre/lib/security/cacerts
COPY ${TRUSTED_CERTIFICATES_PATH} /usr/lib/jvm/temurin-11-jdk/lib/security/cacerts
COPY ${TRUSTED_CERTIFICATES_PATH} /usr/lib/jvm/temurin-17-jdk/lib/security/cacerts
```
{% endtab %}
{% endtabs %}

### Artifact repository

The CLI needs access to artifact repositories to publish the LSTs produced during the ingestion process. This is configured via the `PUBLISH_URL`, `PUBLISH_USER`, and `PUBLISH_PASSWORD` [arguments in the Dockerfile](https://github.com/moderneinc/mass-ingest-example/blob/main/Dockerfile#L18-L20).

We recommend configuring a repository specifically for LSTs. This avoids intermixing LSTs with other kinds of artifacts – which has several benefits. For instance, updates and improvements to Moderne's parsers can make publishing LSTs based on the same commit desirable. However, doing so could cause problems with version number collisions if you've configured it in another way. 

Keeping LSTs separate also simplifies the cleanup of old LSTs which are no longer relevant – a policy you would not wish to accidentally apply to your other artifacts. 

Lastly, LSTs must be published to Maven-formatted artifact repositories, but repositories with non-JVM code likely publish artifacts to repositories of other types.

### Source control credentials

Most source control systems require authentication to access their repositories. If your source control **does not** require authentication to `git clone` repositories, comment out the [following lines](https://github.com/moderneinc/mass-ingest-example/blob/main/Dockerfile#L35-L36):

```docker
ADD .git-credentials /root/.git-credentials
RUN git config --global credential.helper store --file=/root/.git-credentials
```

In the more common scenario that your source control does require authentication, you will need to create and include a `.git-credentials` file. You will want to supply the credentials for a service account with access to all repositories.

Each line of the `.git-credentials` file specifies the `username` and plaintext `password` for a particular `host` in the format:

```
https://username:password@host
```

For example:

```
https://sambsnyd:likescats@github.com
```

### Maven settings

If your organization **does not** use the Maven build tool, comment out the [following lines](https://github.com/moderneinc/mass-ingest-example/blob/main/Dockerfile#L30-L31):

```docker
ADD ~/.m2/settings.xml /root/.m2/settings.xml
RUN java -jar mod.jar config build maven settings edit /root/.m2/settings.xml
```

If your organization does use Maven, you more than likely have shared configurations in a `settings.xml` file. This configuration file is usually required to build most repositories. You'll want to ensure that the Docker image points to the appropriate file. `settings.xml` is typically located at `~/.m2/settings.xml`, but your configuration may differ.

### Moderne tenant or DX instance

Connection to a Moderne tenant allows the CLI to determine when it is unnecessary to re-build an LST (as the LST could be downloaded instead to save time). The `MODERNE_TENANT` and `MODERNE_TOKEN` arguments are required to connect to a Moderne tenant.

If you are connecting to a Moderne DX instance, you will need to provide the token it was configured to accept on startup. If you are connecting to a Moderne tenant, you will need to create and use a [Moderne personal access token](../../../user-documentation/moderne-platform/how-to-guides/create-api-access-tokens.md). 

## Step 3: Build the docker image

Once you've customized the `Dockerfile` as needed, you can build the image with the following command, filling in your organization's specific values for the build arguments:

```bash
docker build -t moderne-mass-ingest:latest \
    --build-arg MODERNE_TENANT=<> \
    --build-arg MODERNE_TOKEN=<> \
    --build-arg TRUSTED_CERTIFICATES_PATH=<> \
    --build-arg PUBLISH_URL=<> \
    --build-arg PUBLISH_USER=<> \
    --build-arg PUBLISH_PASSWORD=<> \
    .
```

## Step 4: Deploy and run the image

Now that you have a Docker image built, you will need to deploy it to the container management platform of your choice and have it run on a schedule. We will leave this as an exercise for the reader as there are so many different platforms and options for running this. 

## Next Steps

* [Configure the Moderne agent](agent-configuration/agent-configuration.md)
