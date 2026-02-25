---
sidebar_label: "Create Jetty server source file"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Jetty server source file

**io.moderne.java.server.jboss.jetty.CreateJettySourceFile**

_Creates a `JettyServer.java` source file for projects containing JBoss descriptor files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packageName | The package name for the generated Java source files. | `com.example.jetty` |
| `String` | contextPath | *Optional*. The context path for the Jetty application. | `/myapp` |
| `Integer` | port | *Optional*. The default port for the Jetty server. | `8080` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JBoss to Jetty](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/createjettyfilesinpath)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|packageName|`com.example`|
|contextPath|`/myapp`|
|port|`9090`|



###### New file
```java
package com.example;

import org.eclipse.jetty.ee10.webapp.WebAppContext;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.util.resource.ResourceFactory;
import org.eclipse.jetty.xml.XmlConfiguration;

import java.net.URL;
import java.nio.file.Path;

public class JettyServer {

    private static final int DEFAULT_PORT = 9090;
    private static final String CONTEXT_PATH = "/myapp";
    private static final String WEBAPP_DIR = "src/main/webapp";

    public static void main(String[] args) throws Exception {
        Server server = new Server(DEFAULT_PORT);
        WebAppContext webapp = new WebAppContext();

        webapp.setContextPath(CONTEXT_PATH);
        webapp.setBaseResourceAsPath(Path.of(WEBAPP_DIR));
        webapp.setParentLoaderPriority(true);

        URL jettyEnvUrl = JettyServer.class.getClassLoader().getResource("jetty-env.xml");
        if (jettyEnvUrl != null) {
            XmlConfiguration config = new XmlConfiguration(ResourceFactory.root().newResource(jettyEnvUrl.toURI()));
            config.configure(webapp);
        }

        server.setHandler(webapp);
        server.start();
        server.join();
    }
}
```


###### Unchanged
```xml
<?xml version="1.0" encoding="UTF-8"?>
<jboss-web>
    <context-root>/myapp</context-root>
</jboss-web>
```


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options.
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CreateJettySourceFileExample
displayName: Create Jetty server source file example
recipeList:
  - io.moderne.java.server.jboss.jetty.CreateJettySourceFile:
      packageName: com.example.jetty
      contextPath: /myapp
      port: 8080
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CreateJettySourceFile --recipe-option "packageName=com.example.jetty" --recipe-option "contextPath=/myapp" --recipe-option "port=8080"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-java-application-server:{{VERSION_IO_MODERNE_RECIPE_REWRITE_JAVA_APPLICATION_SERVER}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.server.jboss.jetty.CreateJettySourceFile" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
