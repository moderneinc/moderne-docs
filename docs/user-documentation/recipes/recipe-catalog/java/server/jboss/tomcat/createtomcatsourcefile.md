---
sidebar_label: "Create Tomcat server source file"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Create Tomcat server source file

**io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile**

_Creates a `TomcatServer.java` source file for projects containing JBoss descriptor files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packageName | The package name for the generated Java source files. | `com.example.tomcat` |
| `String` | contextPath | *Optional*. The context path for the Tomcat application. | `/myapp` |
| `Integer` | port | *Optional*. The default port for the Tomcat server. | `8080` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JBoss to Tomcat](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/createtomcatfilesinpath)

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

import org.apache.catalina.Context;
import org.apache.catalina.WebResourceRoot;
import org.apache.catalina.startup.Tomcat;
import org.apache.catalina.webresources.DirResourceSet;
import org.apache.catalina.webresources.JarResourceSet;
import org.apache.catalina.webresources.StandardRoot;

import java.io.File;
import java.net.URL;

public class TomcatServer {

    private static final int DEFAULT_PORT = 9090;
    private static final String CONTEXT_PATH = "/myapp";

    public static void main(String[] args) throws Exception {
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(DEFAULT_PORT);
        tomcat.getConnector();

        File baseDir = new File(System.getProperty("java.io.tmpdir"), "tomcat-" + DEFAULT_PORT);
        baseDir.mkdirs();
        tomcat.setBaseDir(baseDir.getAbsolutePath());

        URL resource = TomcatServer.class.getClassLoader().getResource("webapp");
        if (resource == null) {
            throw new IllegalStateException("webapp directory not found on classpath");
        }

        File docBase = new File(baseDir, "docBase");
        docBase.mkdirs();
        Context ctx = tomcat.addWebapp(CONTEXT_PATH, docBase.getAbsolutePath());

        WebResourceRoot resources = new StandardRoot(ctx);
        if ("file".equals(resource.getProtocol())) {
            resources.addPreResources(new DirResourceSet(resources, "/",
                    new File(resource.toURI()).getAbsolutePath(), "/"));
        } else {
            String jarPath = resource.getPath();
            jarPath = jarPath.substring(jarPath.indexOf(":") + 1, jarPath.indexOf("!"));
            resources.addPreResources(new JarResourceSet(resources, "/", jarPath, "/webapp"));
        }
        ctx.setResources(resources);

        tomcat.start();
        tomcat.getServer().await();
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
name: com.yourorg.CreateTomcatSourceFileExample
displayName: Create Tomcat server source file example
recipeList:
  - io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile:
      packageName: com.example.tomcat
      contextPath: /myapp
      port: 8080
```

<RunRecipe
  recipeName="io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile"
  displayName="Create Tomcat server source file"
  groupId="io.moderne.recipe"
  artifactId="rewrite-java-application-server"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_JAVA_APPLICATION_SERVER"
  requiresConfiguration
  cliOptions={' --recipe-option "packageName=com.example.tomcat" --recipe-option "contextPath=/myapp" --recipe-option "port=8080"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile" />

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
