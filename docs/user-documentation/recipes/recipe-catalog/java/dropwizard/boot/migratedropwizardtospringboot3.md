---
sidebar_label: "Migrate Dropwizard to Spring Boot 3"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Dropwizard to Spring Boot 3

**io.moderne.java.dropwizard.boot.MigrateDropwizardToSpringBoot3**

_Migrate a Dropwizard application to Spring Boot 3. First applies the Dropwizard to Spring Boot 2.7 migration, then adds managed lifecycle and health check migrations on top._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1
`DropwizardAppExtensionJUnit5MigrationIntegrationTest#migratesCustomerExample`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;
import io.dropwizard.core.Configuration;
import io.dropwizard.testing.junit5.DropwizardAppExtension;

abstract class AbstractComponentTest {
    static final DropwizardAppExtension<Configuration> DROPWIZARD =
        new DropwizardAppExtension<>(TestApp.class, "server.yml");

    void someTest() {
        int port = DROPWIZARD.getLocalPort();
        Object ctx = DROPWIZARD.getTestSupport().getEnvironment().getApplicationContext();
        Object app = DROPWIZARD.getApplication();
        Configuration config = DROPWIZARD.getConfiguration();
    }
}
```

###### After
```java
package com.example;
import io.dropwizard.core.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.context.ApplicationContext;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class AbstractComponentTest {
    @Autowired
    TestApp application;
    @Autowired
    Configuration configuration;
    @Autowired
    ApplicationContext applicationContext;
    @LocalServerPort
    int localPort;

    void someTest() {
        int port = localPort;
        Object ctx = applicationContext;
        Object app = application;
        Configuration config = configuration;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,4 @@
package com.example;
import io.dropwizard.core.Configuration;
-import io.dropwizard.testing.junit5.DropwizardAppExtension;
+import org.springframework.beans.factory.annotation.Autowired;
+import org.springframework.boot.test.context.SpringBootTest;
+import org.springframework.boot.test.web.server.LocalServerPort;
+import org.springframework.context.ApplicationContext;

@@ -5,0 +8,1 @@
import io.dropwizard.testing.junit5.DropwizardAppExtension;

+@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class AbstractComponentTest {
@@ -6,2 +10,8 @@

abstract class AbstractComponentTest {
-   static final DropwizardAppExtension<Configuration> DROPWIZARD =
-       new DropwizardAppExtension<>(TestApp.class, "server.yml");
+   @Autowired
+   TestApp application;
+   @Autowired
+   Configuration configuration;
+   @Autowired
+   ApplicationContext applicationContext;
+   @LocalServerPort
+   int localPort;

@@ -10,4 +20,4 @@

    void someTest() {
-       int port = DROPWIZARD.getLocalPort();
-       Object ctx = DROPWIZARD.getTestSupport().getEnvironment().getApplicationContext();
-       Object app = DROPWIZARD.getApplication();
-       Configuration config = DROPWIZARD.getConfiguration();
+       int port = localPort;
+       Object ctx = applicationContext;
+       Object app = application;
+       Configuration config = configuration;
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateDropwizardToSpringBoot3Test#migratesDependencies`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.dropwizard</groupId>
                <artifactId>dropwizard-dependencies</artifactId>
                <version>4.0.10</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-core</artifactId>
        </dependency>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-hibernate</artifactId>
        </dependency>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-db</artifactId>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 3
`MigrateHealthCheckMethodTest#migratesCheckMethodSignature`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import com.codahale.metrics.health.HealthCheck;

public class MyHealthCheck extends HealthCheck {
    @Override
    protected HealthCheck.Result check() {
        return Result.healthy();
    }
}
```

###### After
```java
package com.example;

import org.springframework.boot.actuate.health.Health;
import org.springframework.stereotype.Component;

@Component
public class MyHealthCheck implements HealthIndicator {
    public Health health() {
        return Health.up().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,2 @@
package com.example;

-import com.codahale.metrics.health.HealthCheck;
+import org.springframework.boot.actuate.health.Health;
+import org.springframework.stereotype.Component;

@@ -5,4 +6,4 @@
import com.codahale.metrics.health.HealthCheck;

-public class MyHealthCheck extends HealthCheck {
-   @Override
-   protected HealthCheck.Result check() {
-       return Result.healthy();
+@Component
+public class MyHealthCheck implements HealthIndicator {
+   public Health health() {
+       return Health.up().build();
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`MigrateManagedLifecycleTest#migratesManagedStartStop`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import io.dropwizard.lifecycle.Managed;

public class MyService implements Managed {
    @Override
    public void start() throws Exception {
        // initialize
    }

    @Override
    public void stop() throws Exception {
        // cleanup
    }
}
```

###### After
```java
package com.example;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    @PostConstruct
    public void start() {
        // initialize
    }

    @PreDestroy
    public void stop() {
        // cleanup
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,3 @@
package com.example;

-import io.dropwizard.lifecycle.Managed;
+import jakarta.annotation.PostConstruct;
+import jakarta.annotation.PreDestroy;
+import org.springframework.stereotype.Component;

@@ -5,3 +7,4 @@
import io.dropwizard.lifecycle.Managed;

-public class MyService implements Managed {
-   @Override
-   public void start() throws Exception {
+@Component
+public class MyService {
+   @PostConstruct
+   public void start() {
        // initialize
@@ -11,2 +14,2 @@
    }

-   @Override
-   public void stop() throws Exception {
+   @PreDestroy
+   public void stop() {
        // cleanup
```
</TabItem>
</Tabs>

---

##### Example 5
`DropwizardAppExtensionJUnit5MigrationIntegrationTest#migratesCustomerExample`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;
import io.dropwizard.core.Configuration;
import io.dropwizard.testing.junit5.DropwizardAppExtension;

abstract class AbstractComponentTest {
    static final DropwizardAppExtension<Configuration> DROPWIZARD =
        new DropwizardAppExtension<>(TestApp.class, "server.yml");

    void someTest() {
        int port = DROPWIZARD.getLocalPort();
        Object ctx = DROPWIZARD.getTestSupport().getEnvironment().getApplicationContext();
        Object app = DROPWIZARD.getApplication();
        Configuration config = DROPWIZARD.getConfiguration();
    }
}
```

###### After
```java
package com.example;
import io.dropwizard.core.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.context.ApplicationContext;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class AbstractComponentTest {
    @Autowired
    TestApp application;
    @Autowired
    Configuration configuration;
    @Autowired
    ApplicationContext applicationContext;
    @LocalServerPort
    int localPort;

    void someTest() {
        int port = localPort;
        Object ctx = applicationContext;
        Object app = application;
        Configuration config = configuration;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,4 @@
package com.example;
import io.dropwizard.core.Configuration;
-import io.dropwizard.testing.junit5.DropwizardAppExtension;
+import org.springframework.beans.factory.annotation.Autowired;
+import org.springframework.boot.test.context.SpringBootTest;
+import org.springframework.boot.test.web.server.LocalServerPort;
+import org.springframework.context.ApplicationContext;

@@ -5,0 +8,1 @@
import io.dropwizard.testing.junit5.DropwizardAppExtension;

+@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class AbstractComponentTest {
@@ -6,2 +10,8 @@

abstract class AbstractComponentTest {
-   static final DropwizardAppExtension<Configuration> DROPWIZARD =
-       new DropwizardAppExtension<>(TestApp.class, "server.yml");
+   @Autowired
+   TestApp application;
+   @Autowired
+   Configuration configuration;
+   @Autowired
+   ApplicationContext applicationContext;
+   @LocalServerPort
+   int localPort;

@@ -10,4 +20,4 @@

    void someTest() {
-       int port = DROPWIZARD.getLocalPort();
-       Object ctx = DROPWIZARD.getTestSupport().getEnvironment().getApplicationContext();
-       Object app = DROPWIZARD.getApplication();
-       Configuration config = DROPWIZARD.getConfiguration();
+       int port = localPort;
+       Object ctx = applicationContext;
+       Object app = application;
+       Configuration config = configuration;
    }
```
</TabItem>
</Tabs>

---

##### Example 6
`MigrateDropwizardToSpringBoot3Test#migratesDependencies`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.dropwizard</groupId>
                <artifactId>dropwizard-dependencies</artifactId>
                <version>4.0.10</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-core</artifactId>
        </dependency>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-hibernate</artifactId>
        </dependency>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-db</artifactId>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 7
`MigrateHealthCheckMethodTest#migratesCheckMethodSignature`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import com.codahale.metrics.health.HealthCheck;

public class MyHealthCheck extends HealthCheck {
    @Override
    protected HealthCheck.Result check() {
        return Result.healthy();
    }
}
```

###### After
```java
package com.example;

import org.springframework.boot.actuate.health.Health;
import org.springframework.stereotype.Component;

@Component
public class MyHealthCheck implements HealthIndicator {
    public Health health() {
        return Health.up().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,2 @@
package com.example;

-import com.codahale.metrics.health.HealthCheck;
+import org.springframework.boot.actuate.health.Health;
+import org.springframework.stereotype.Component;

@@ -5,4 +6,4 @@
import com.codahale.metrics.health.HealthCheck;

-public class MyHealthCheck extends HealthCheck {
-   @Override
-   protected HealthCheck.Result check() {
-       return Result.healthy();
+@Component
+public class MyHealthCheck implements HealthIndicator {
+   public Health health() {
+       return Health.up().build();
    }
```
</TabItem>
</Tabs>

---

##### Example 8
`MigrateManagedLifecycleTest#migratesManagedStartStop`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import io.dropwizard.lifecycle.Managed;

public class MyService implements Managed {
    @Override
    public void start() throws Exception {
        // initialize
    }

    @Override
    public void stop() throws Exception {
        // cleanup
    }
}
```

###### After
```java
package com.example;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    @PostConstruct
    public void start() {
        // initialize
    }

    @PreDestroy
    public void stop() {
        // cleanup
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,3 @@
package com.example;

-import io.dropwizard.lifecycle.Managed;
+import jakarta.annotation.PostConstruct;
+import jakarta.annotation.PreDestroy;
+import org.springframework.stereotype.Component;

@@ -5,3 +7,4 @@
import io.dropwizard.lifecycle.Managed;

-public class MyService implements Managed {
-   @Override
-   public void start() throws Exception {
+@Component
+public class MyService {
+   @PostConstruct
+   public void start() {
        // initialize
@@ -11,2 +14,2 @@
    }

-   @Override
-   public void stop() throws Exception {
+   @PreDestroy
+   public void stop() {
        // cleanup
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="io.moderne.java.dropwizard.boot.MigrateDropwizardToSpringBoot3"
  displayName="Migrate Dropwizard to Spring Boot 3"
  groupId="io.moderne.recipe"
  artifactId="rewrite-dropwizard"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.MigrateDropwizardToSpringBoot3" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

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
