# Maven repository integration overview

Maven repositories are potential sources of both Abstract Syntax Tree (AST) artifacts and recipe artifacts. Recipes artifacts contain custom recipes that perform transformations on the ASTs.

A particular Maven repository may contain either ASTs or recipe artifacts, or a mixture of both. Several open-source and commercial products exist to serve artifacts using the Maven repository format. A single instance of one of these products may contain multiple Maven repositories.

![](<../../../.gitbook/assets/image (12) (1).png>)![](<../../../.gitbook/assets/image (21).png>)

### Comparison of two Maven integrations

Moderne has two integrations related to artifact repositories in the Maven repository format.

#### [Maven repository configuration](configure-an-agent-with-maven-repository-access.md)

The Maven repository configuration is built to serve recipe artifacts and AST artifacts. It is not specific to a particular vendor implementation.&#x20;

It can always serve recipe artifacts. Recipe artifacts are immediately available for [deployment to Moderne](../../importing-external-recipes.md) upon publishing to the Maven repository.

AST artifacts may be served via this integration if an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format is regularly published to the repository. Compared to the Artifactory configuration, there will be a longer delay between when an AST is published to the Maven repository and when it shows up in Moderne. This delay is approximately the delay between updates to the index, controlled by a batch process that your artifact repository executes on a schedule.&#x20;

#### [Artifactory configuration](configure-an-agent-with-artifactory-access.md)

The Artifactory repository configuration is built to serve AST artifacts only. If you wish to serve recipe artifacts from a Maven repository hosted by Artifactory, you will need to add a separate Maven repository configuration.

AST artifacts will show up in near-real time in the Moderne platform when they are published to Artifactory.&#x20;

This integration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify recently published artifacts. AQL queries Artifactory's internal relational database for information about artifacts rather than an index produced in a batch process.
