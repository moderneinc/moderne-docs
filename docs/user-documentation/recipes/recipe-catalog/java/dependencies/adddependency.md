---
sidebar_label: "Add Gradle or Maven dependency"
canonical_url: "https://docs.openrewrite.org/recipes/java/dependencies/adddependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Gradle or Maven dependency

**org.openrewrite.java.dependencies.AddDependency**

_For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used._

## Recipe source

[GitHub: AddDependency.java](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION` | `guava` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example, Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `String` | onlyIfUsing | *Optional*. Used to determine if the dependency will be added and in which scope it should be placed. | `org.junit.jupiter.api.*` |
| `String` | classifier | *Optional*. A classifier to add. Commonly used to select variants of a library. | `test` |
| `String` | familyPattern | *Optional*. A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character. | `com.fasterxml.jackson*` |
| `String` | extension | *Optional*. For Gradle only, The extension of the dependency to add. If omitted Gradle defaults to assuming the type is "jar". | `jar` |
| `String` | configuration | *Optional*. The Gradle dependency configuration name within which to place the dependency. When omitted the configuration will be determined by the Maven scope parameter. If that parameter is also omitted, configuration will be determined based on where types matching `onlyIfUsing` appear in source code. | `implementation` |
| `String` | scope | *Optional*. The Maven scope within which to place the dependency. When omitted scope will be determined based on where types matching `onlyIfUsing` appear in source code. Valid options: `compile`, `provided`, `runtime`, `test` | `runtime` |
| `Boolean` | releasesOnly | *Optional*. For Maven only, Whether to exclude snapshots from consideration when using a semver selector |  |
| `String` | type | *Optional*. For Maven only, The type of dependency to add. If omitted Maven defaults to assuming the type is "jar". Valid options: `jar`, `pom`, `war` | `jar` |
| `Boolean` | optional | *Optional*. Set the value of the `<optional>` tag. No `<optional>` tag will be added when this is `null`. |  |
| `Boolean` | acceptTransitive | *Optional*. Default false. If enabled, the dependency will not be added if it is already on the classpath as a transitive dependency. | `true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add AWS SDK for Java v2 S3 Event Notification dependency if needed](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/adds3eventnotificationdependency.md)
* [Add AWS SDK for Java v2 S3 Transfer Manager dependency if needed](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/addtransfermanagerdependency.md)
* [Add Hibernate ORM Core if has dependencies](/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/hibernate/addhibernateormcore61.md)
* [Add JBoss LogManager's SLF4J provider](/user-documentation/recipes/recipe-catalog/java/logging/slf4j/addjbosslogmanagerslf4jproviderdependency.md)
* [Add Jackson2 for Jersey using JSON](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addjackson2forjerseyjson.md)
* [Add Jakarta EE 9 Servlet Dependency](/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/jakarta/addjakartaee9servletdependencyifusingservletcontext.md)
* [Add Quarkus 2 dependencies](/user-documentation/recipes/recipe-catalog/quarkus/migrate/javaee/addquarkus2dependencies.md)
* [Add Spring Boot 4.0 modular starters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addmodularstarters.md)
* [Add Spring Framework modular dependencies](/user-documentation/recipes/recipe-catalog/java/spring/framework/modularspringframeworkdependencies.md)
* [Add Spring compatibility extensions for commonly used annotations](/user-documentation/recipes/recipe-catalog/quarkus/spring/addspringcompatibilityextensions.md)
* [Add `javax.validation-api` dependency](/user-documentation/recipes/recipe-catalog/java/spring/boot2/maybeaddjavaxvalidationapi.md)
* [Add `org.hamcrest:hamcrest` if it is used](/user-documentation/recipes/recipe-catalog/java/testing/hamcrest/addhamcrestifused.md)
* [Add `spring-boot-starter-flyway` if using Flyway](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addspringbootstarterflyway.md)
* [Add `spring-boot-starter-validation` dependency](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addvalidationstarterdependency.md)
* [Add explicit Common Annotations dependencies](/user-documentation/recipes/recipe-catalog/java/migrate/javax/addcommonannotationsdependencies.md)
* [Add explicit Inject dependencies](/user-documentation/recipes/recipe-catalog/java/migrate/javax/addinjectdependencies.md)
* [Add explicit JAX-WS dependencies](/user-documentation/recipes/recipe-catalog/java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit JAXB API dependencies](/user-documentation/recipes/recipe-catalog/java/migrate/javax/addjaxbapidependencies.md)
* [Add missing Flyway module for MySQL](/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulemysql.md)
* [Add missing Flyway module for Oracle](/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymoduleoracle.md)
* [Add missing Flyway module for PostgreSQL](/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulepostgresql.md)
* [Add missing Flyway module for SQL Server](/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulesqlserver.md)
* [Change v1 Maven/Gradle dependencies to v2](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/upgradesdkdependencies.md)
* [Complete migration to OpenTelemetry](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratetoopentelemetry.md)
* [Cucumber to JUnit test `@Suite`](/user-documentation/recipes/recipe-catalog/cucumber/jvm/cucumbertojunitplatformsuite.md)
* [JUnit Jupiter migration from JUnit 4.x](/user-documentation/recipes/recipe-catalog/java/testing/junit5/junit4to5migration.md)
* [Migrate Brave API to OpenTelemetry API](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratebravetoopentelemetry.md)
* [Migrate Datadog tracing to OpenTelemetry](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratedatadogtoopentelemetry.md)
* [Migrate Google Truth to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/truth/migratetruthtoassertj.md)
* [Migrate Hamcrest assertions to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/hamcrest/migratehamcresttoassertj.md)
* [Migrate Hibernate dependencies to 6.0.x (Community Edition)](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernatedependencies60.md)
* [Migrate JUnit asserts to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/assertj/junittoassertj.md)
* [Migrate Johnzon from javax to jakarta namespace](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/johnzonjavaxtojakarta.md)
* [Migrate Log4j 1.x to Log4j 2.x](/user-documentation/recipes/recipe-catalog/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to Logback](/user-documentation/recipes/recipe-catalog/java/logging/logback/log4jtologback.md)
* [Migrate Log4j to SLF4J](/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4jtoslf4j.md)
* [Migrate New Relic Agent to OpenTelemetry](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratenewrelictoopentelemetry.md)
* [Migrate OpenTracing API to OpenTelemetry API](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migrateopentracingtoopentelemetry.md)
* [Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4](/user-documentation/recipes/recipe-catalog/java/spring/boot2/springboot2junit4to5migration.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](/user-documentation/recipes/recipe-catalog/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)
* [Migrate TestNG assertions to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/testng/testngtoassertj.md)
* [Migrate `@EnableXyz` annotations to Quarkus extensions](/user-documentation/recipes/recipe-catalog/quarkus/spring/enableannotationstoquarkusdependencies.md)
* [Migrate `WordUtils` to Apache Commons Text](/user-documentation/recipes/recipe-catalog/apache/commons/lang/wordutilstocommonstext.md)
* [Migrate dependencies from Jackson Codehaus (legacy) to FasterXML](/user-documentation/recipes/recipe-catalog/java/jackson/codehaus/codehausdependencytofasterxml.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate from Acegi Security 1.0.x to Spring Security 5.0](/user-documentation/recipes/recipe-catalog/java/spring/security/migrateacegitospringsecurity_5_0.md)
* [Migrate from EasyMock to Mockito](/user-documentation/recipes/recipe-catalog/java/testing/easymock/easymocktomockito.md)
* [Migrate from Elasticsearch 8 to 9](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratetoelasticsearch9.md)
* [Migrate from JMockit to Mockito](/user-documentation/recipes/recipe-catalog/java/testing/jmockit/jmockittomockito.md)
* [Migrate from Jakarta annotation API to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefromjakartaannotationapi.md)
* [Migrate from JetBrains annotations to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefromjetbrainsannotations.md)
* [Migrate from Micrometer annotations to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefrommicrometerannotations.md)
* [Migrate from Micronaut Framework annotations to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefrommicronautannotations.md)
* [Migrate from OpenRewrite annotations to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefromopenrewriteannotations.md)
* [Migrate from Spring Cloud Sleuth to OpenTelemetry](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratesleuthtoopentelemetry.md)
* [Migrate from Spring Framework annotations to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefromspringframeworkannotations.md)
* [Migrate from Zipkin to OpenTelemetry OTLP](/user-documentation/recipes/recipe-catalog/java/spring/opentelemetry/migratefromzipkintoopentelemetry.md)
* [Migrate from httpcore-nio to ApacheHttpClient 5.x core dependency](/user-documentation/recipes/recipe-catalog/apache/httpclient5/upgradeapachehttpcoreniodependencies.md)
* [Migrate from javax annotation API to JSpecify](/user-documentation/recipes/recipe-catalog/java/jspecify/migratefromjavaxannotationapi.md)
* [Migrate from org.apache.httpcomponents to ApacheHttpClient 5.x dependencies](/user-documentation/recipes/recipe-catalog/apache/httpclient5/upgradeapachehttpclientdependencies.md)
* [Migrate to Hibernate 7.0.x (Moderne Edition)](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate70-moderne-edition.md)
* [Migrate to Kafka 3.0](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka30.md)
* [Migrate to Spring Boot 2.3](/user-documentation/recipes/recipe-catalog/java/spring/boot2/upgradespringboot_2_3.md)
* [Migrate to Spring Boot 2.4](/user-documentation/recipes/recipe-catalog/java/spring/boot2/upgradespringboot_2_4.md)
* [Migrate to Spring Boot 3.2](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_2.md)
* [Migrate to Spring Boot 4.0 modular starters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratetomodularstarters-community-edition.md)
* [Migrate to Spring Data 2.3](/user-documentation/recipes/recipe-catalog/java/spring/data/upgradespringdata_2_3.md)
* [Migrate to Wicket 10.x](/user-documentation/recipes/recipe-catalog/org/apache/wicket/migratetowicket10.md)
* [Prefer the Java standard library instead of Joda-Time](/user-documentation/recipes/recipe-catalog/java/joda/time/nojodatime.md)
* [Rename the package name from `com.nimbusds.jose.shaded.json` to `net.minidev.json`](/user-documentation/recipes/recipe-catalog/java/spring/security5/renamenimbusdsjsonobjectpackagename.md)
* [Replace Derby test driver with Quarkus JDBC Derby (test scope)](/user-documentation/recipes/recipe-catalog/quarkus/spring/derbytestdrivertoquarkus.md)
* [Replace H2 test driver with Quarkus JDBC H2 (test scope)](/user-documentation/recipes/recipe-catalog/quarkus/spring/h2testdrivertoquarkus.md)
* [Replace Spring Boot AMQP with Quarkus Messaging AMQP](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootamqptoquarkusreactive.md)
* [Replace Spring Boot AMQP with Quarkus Messaging RabbitMQ](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootamqptoquarkusclassic.md)
* [Replace Spring Boot ActiveMQ with Quarkus Artemis JMS](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootactivemqtoquarkus.md)
* [Replace Spring Boot Actuator with Quarkus SmallRye Health](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootactuatortoquarkus.md)
* [Replace Spring Boot Artemis with Quarkus Artemis JMS](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootartemistoquarkus.md)
* [Replace Spring Boot Batch with Quarkus Scheduler](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootbatchtoquarkus.md)
* [Replace Spring Boot Cache with Quarkus Cache](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootcachetoquarkus.md)
* [Replace Spring Boot Data JPA with Quarkus Hibernate ORM Panache](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootdatajpatoquarkus.md)
* [Replace Spring Boot Data MongoDB with Quarkus MongoDB Panache](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootdatamongotoquarkus.md)
* [Replace Spring Boot Data REST with Quarkus REST](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootdataresttoquarkus.md)
* [Replace Spring Boot Data Redis with Quarkus Redis Client](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootdataredistoquarkus.md)
* [Replace Spring Boot Elasticsearch with Quarkus Elasticsearch REST Client](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootelasticsearchtoquarkus.md)
* [Replace Spring Boot Integration with Camel Quarkus](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootintegrationtoquarkus.md)
* [Replace Spring Boot JDBC with Quarkus Agroal](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootjdbctoquarkus.md)
* [Replace Spring Boot Mail with Quarkus Mailer](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootmailtoquarkus.md)
* [Replace Spring Boot OAuth2 Client with Quarkus OIDC Client](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootoauth2clienttoquarkus.md)
* [Replace Spring Boot OAuth2 Resource Server with Quarkus OIDC](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootoauth2resourceservertoquarkus.md)
* [Replace Spring Boot Quartz with Quarkus Quartz](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootquartztoquarkus.md)
* [Replace Spring Boot Security with Quarkus Security](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootsecuritytoquarkus.md)
* [Replace Spring Boot Test with Quarkus JUnit 5](/user-documentation/recipes/recipe-catalog/quarkus/spring/springboottesttoquarkus.md)
* [Replace Spring Boot Thymeleaf with Quarkus Qute](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootthymeleaftoquarkus.md)
* [Replace Spring Boot Validation with Quarkus Hibernate Validator](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootvalidationtoquarkus.md)
* [Replace Spring Boot Web with Quarkus RESTEasy Classic](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootwebtoquarkusclassic.md)
* [Replace Spring Boot Web with Quarkus REST](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootwebtoquarkusreactive.md)
* [Replace Spring Boot WebFlux with Quarkus REST Client](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootwebfluxtoquarkusreactive.md)
* [Replace Spring Boot WebSocket with Quarkus WebSockets](/user-documentation/recipes/recipe-catalog/quarkus/spring/springbootwebsockettoquarkus.md)
* [Replace Spring Kafka with Quarkus Kafka Client](/user-documentation/recipes/recipe-catalog/quarkus/spring/springkafkatoquarkusclassic.md)
* [Replace Spring Kafka with Quarkus Messaging Kafka](/user-documentation/recipes/recipe-catalog/quarkus/spring/springkafkatoquarkusreactive.md)
* [Replace SpringFox Dependencies](/user-documentation/recipes/recipe-catalog/java/springdoc/replacespringfoxdependencies.md)
* [Replace `micrometer-spring-legacy` with `spring-boot-starter-actuator`](/user-documentation/recipes/recipe-catalog/java/spring/boot2/maybeaddspringbootstarteractuator.md)
* [Spring Security 7 modularization](/user-documentation/recipes/recipe-catalog/java/spring/security7/modularizespringsecurity7.md)
* [Update Tapestry dependencies](/user-documentation/recipes/recipe-catalog/tapestry/updatetapestrydependencies.md)
* [Update the Micronaut Retry support](/user-documentation/recipes/recipe-catalog/java/micronaut/addmicronautretrydependencyifneeded.md)
* [Update the Micronaut Websocket support](/user-documentation/recipes/recipe-catalog/java/micronaut/addmicronautwebsocketdependencyifneeded.md)
* [Update to Micronaut Validation 4.x](/user-documentation/recipes/recipe-catalog/java/micronaut/updatemicronautvalidation.md)
* [Use Mockito JUnit Jupiter extension](/user-documentation/recipes/recipe-catalog/java/testing/junit5/usemockitoextension.md)
* [Use Vert.x JUnit 5 Extension](/user-documentation/recipes/recipe-catalog/java/testing/junit5/vertxunittovertxjunit5.md)
* [Use `org.springframework.boot.web.server.LocalServerPort`](/user-documentation/recipes/recipe-catalog/java/spring/boot2/migratelocalserverportannotation.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependencyExample
displayName: Add Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 29.X
      versionPattern: '-jre'
      onlyIfUsing: org.junit.jupiter.api.*
      classifier: test
      familyPattern: com.fasterxml.jackson*
      extension: jar
      configuration: implementation
      scope: runtime
      type: jar
      acceptTransitive: true
```

Now that `com.yourorg.AddDependencyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.AddDependencyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.AddDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddDependency --recipe-option "groupId=com.google.guava" --recipe-option "artifactId=guava" --recipe-option "version=29.X" --recipe-option "versionPattern='-jre'" --recipe-option "onlyIfUsing=org.junit.jupiter.api.*" --recipe-option "classifier=test" --recipe-option "familyPattern=com.fasterxml.jackson*" --recipe-option "extension=jar" --recipe-option "configuration=implementation" --recipe-option "scope=runtime" --recipe-option "type=jar" --recipe-option "acceptTransitive=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.AddDependency" />

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
