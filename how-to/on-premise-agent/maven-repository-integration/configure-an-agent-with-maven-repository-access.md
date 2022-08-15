# Configure an agent with Maven repository access

This configuration supports any artifact registry supporting the Maven repository format. Some examples include:

* [JFrog Artifactory](https://jfrog.com/artifactory/?utm\_source=google\&utm\_medium=cpc\&utm\_campaign=Search|DSK|Artifactory|SearchPartners|NA|202202\&utm\_term=\&utm\_network=g\&cq\_plac=\&cq\_plt=gp\&utm\_content=u-bin\&gclid=Cj0KCQjwrs2XBhDjARIsAHVymmRA444NsCWm7aRJA25qmxGHf2Ncw2om79FVwPnA7bjzb6wmyTHeklcaArCyEALw\_wcB)
* [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)
* [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/)
* [Google Artifact Registry](https://cloud.google.com/artifact-registry)&#x20;

### Prerequisites

**Credentials**

If necessary, username and password for a user that is allowed to resolve artifacts from the repository.&#x20;

{% hint style="info" %}
In many organizations, artifact resolution is unauthenticated while artifact publishing is authenticated. If artifact resolution is unauthenticated, you may omit the username/password configuration.
{% endhint %}

#### Configure Maven Indexer

To publish Abstract Syntax Tree (AST) artifacts, the artifact registry must be regularly updated with an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format. The frequency with which the index is updated is an approximation of the time it will take for an AST which is published to Artifactory to show up in Moderne. Evaluate the tradeoff between faster feedback and the load required on your Artifactory instance to increase the frequency of index updating as much as possible.

{% tabs %}
{% tab title="Artifactory" %}
In Artifactory, select the "Artifactory" link on the left nav and select "Maven Indexer" under Services.

![](<../../../.gitbook/assets/image (1).png>)

For a repository to be a source of ASTs it must be included in the list of repositories that are indexed.

![](<../../../.gitbook/assets/image (9).png>)
{% endtab %}

{% tab title="Nexus Repository" %}
Under the administration view, select "Tasks" on the left nav.&#x20;

![](<../../../.gitbook/assets/image (7).png>)

Select "Create task" and create a "Maven - Publish Maven Indexer files" task.

![](../../../.gitbook/assets/image.png)

Select the repository that will serve AST artifacts and a frequency.

![](<../../../.gitbook/assets/image (22).png>)
{% endtab %}
{% endtabs %}

### Configuration

Please note that the commands and options below omit standard options documented at [standard-configuration.md](../standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which is indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple Maven repositories by including multiple entries with different indices.

* `MODERNE_AGENT_MAVEN_0_URL` - repository URL
* `MODERNE_AGENT_MAVEN_0_USERNAME` - username used to resolve artifacts, if any
* `MODERNE_AGENT_MAVEN_0_PASSWORD` - password used to resolve artifacts, if any
* `MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY` - the path on disk where AST artifacts and Maven index files will be downloaded. AST artifacts are deleted on disk after being transmitted to Moderne. Index files remain and only incremental updates are downloaded from the remote artifact repository (to limit data transfer).&#x20;

{% hint style="info" %}
If multiple mavens are configured on the same agent, they **must** have different `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` configured.
{% endhint %}

Example

```
docker run \
...
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple repositories by including multiple entries with different indices.

* `--moderne.agent.maven[0].url` - repository URL
* `--moderne.agent.maven[0].username` - username used to resolve artifacts, if any
* `--moderne.agent.maven[0].password` - password used to resolve artifacts, if any
* `--moderne.agent.maven[0].localRepository` - the path on disk where AST artifacts and Maven index files will be downloaded. AST artifacts are deleted on disk after being transmitted to Moderne. Index files remain and only incremental updates are downloaded from the remote artifact repository (to limit data transfer). **Note:** If multiple mavens are configured on the same agent, they **must** have different `localRepository` configured.



Example

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password
...
```
{% endtab %}
{% endtabs %}
