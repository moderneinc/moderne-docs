---
sidebar_label: "Change method name"
canonical_url: "https://docs.openrewrite.org/recipes/java/changemethodname"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change method name

**org.openrewrite.java.ChangeMethodName**

_Rename a method._

## Recipe source

[GitHub: ChangeMethodName.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodName.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | methodPattern | A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results. | `org.mockito.Matchers anyVararg()` |
| `String` | newMethodName | The method name that will replace the existing name. | `any` |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the method pattern. |  |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Adopt `SequencedCollection`](/user-documentation/recipes/recipe-catalog/java/migrate/util/sequencedcollection.md)
* [Adopt `javax.security.auth.Subject.current()` and `javax.security.auth.Subject.callAs()` methods`](/user-documentation/recipes/recipe-catalog/java/migrate/removedsubjectmethods.md)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](/user-documentation/recipes/recipe-catalog/io/quarkus/updates/core/quarkus37/deprecatedlogrecordthreadid.md)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](/user-documentation/recipes/recipe-catalog/java/migrate/deprecatedlogrecordthreadid.md)
* [ArchUnit 0.x upgrade](/user-documentation/recipes/recipe-catalog/java/testing/archunit/archunit0to1migration.md)
* [Change S3 methods to v2.](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/s3methodstov2.md)
* [Change S3EventNotification methods to v2.](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/s3eventnotificationmethodstov2.md)
* [Change SDK Exception types from v1 to v2](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/changeexceptiontypes.md)
* [Change TransferManager simple methods to v2.](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/changetransfermanagersimplemethods.md)
* [Change `List#add` to `List#plus` and verify](/user-documentation/recipes/recipe-catalog/compiled/verification/changelistmethodandverify.md)
* [Change auth related classes from v1 to v2](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/changeauthtypes.md)
* [Change config related classes from v1 to v2](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/changeconfigtypes.md)
* [Change dataformat fury to fury in xml/java dsl.](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel413/furydsl.md)
* [Change of method names brought by Camel JMX API changes](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel40/changemanagedchoicembeanmethodname.md)
* [Change of method names brought by Camel JMX API changes](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel40/changemanagedfailoverloadbalancermbeanmethodname.md)
* [Change region related classes](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/changeregiontypes.md)
* [Change v1 enum getters to v2](/user-documentation/recipes/recipe-catalog/software/amazon/awssdk/v2migration/enumgetterstov2.md)
* [JUnit 6 migration from JUnit 5.x](/user-documentation/recipes/recipe-catalog/java/testing/junit6/junit5to6migration.md)
* [JUnit Jupiter migration from JUnit 4.x](/user-documentation/recipes/recipe-catalog/java/testing/junit5/junit4to5migration.md)
* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/user-documentation/recipes/recipe-catalog/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate Apache HttpCore Nio Input Buffer classes to Apache HttpCore 5.x](/user-documentation/recipes/recipe-catalog/apache/httpclient5/upgradeapachehttpcore_5_nioinputbuffers.md)
* [Migrate Apache HttpCore Nio Output Buffer classes to Apache HttpCore 5.x](/user-documentation/recipes/recipe-catalog/apache/httpclient5/upgradeapachehttpcore_5_niooutputbuffers.md)
* [Migrate Fest 2.x to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/assertj/festtoassertj.md)
* [Migrate Google Truth to AssertJ](/user-documentation/recipes/recipe-catalog/java/testing/truth/migratetruthtoassertj.md)
* [Migrate Hamcrest assertions to JUnit Jupiter](/user-documentation/recipes/recipe-catalog/java/testing/hamcrest/migratehamcresttojunit5.md)
* [Migrate JBoss Logging to SLF4J](/user-documentation/recipes/recipe-catalog/java/logging/slf4j/jbossloggingtoslf4j.md)
* [Migrate JCL to Log4j 2.x API](/user-documentation/recipes/recipe-catalog/java/logging/log4j/commonsloggingtolog4j.md)
* [Migrate JUL to Log4j 2.x API](/user-documentation/recipes/recipe-catalog/java/logging/log4j/jultolog4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](/user-documentation/recipes/recipe-catalog/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to SLF4J 1.x](/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4j2toslf4j1.md)
* [Migrate RichFaces 3.x to 4.5](/user-documentation/recipes/recipe-catalog/java/jsf/richfaces/migraterichfaces_4_5.md)
* [Migrate SLF4J to Log4j 2.x API](/user-documentation/recipes/recipe-catalog/java/logging/log4j/slf4jtolog4j.md)
* [Migrate Spring Boot 3.5 deprecated classes and methods](/user-documentation/recipes/recipe-catalog/java/spring/boot3/springboot35deprecations.md)
* [Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces](/user-documentation/recipes/recipe-catalog/java/struts/migrate6/migrateawareinterfaces.md)
* [Migrate `Admin.listConsumerGroups()` to `listGroups()`](/user-documentation/recipes/recipe-catalog/kafka/migrateadminlistconsumergroups.md)
* [Migrate `ApiInfoBuilder` to `Info`](/user-documentation/recipes/recipe-catalog/java/spring/doc/apiinfobuildertoinfo.md)
* [Migrate `ConsumerGroupState` to `GroupState`](/user-documentation/recipes/recipe-catalog/kafka/migrateconsumergroupstatetogroupstate.md)
* [Migrate `Joined.named()` to `Joined.as()`](/user-documentation/recipes/recipe-catalog/kafka/streams/migratejoinednamemethod.md)
* [Migrate from Acegi Security 1.0.x to Spring Security 5.0](/user-documentation/recipes/recipe-catalog/java/spring/security/migrateacegitospringsecurity_5_0.md)
* [Migrate from EasyMock to Mockito](/user-documentation/recipes/recipe-catalog/java/testing/easymock/easymocktomockito.md)
* [Migrate from Java Faker to Datafaker](/user-documentation/recipes/recipe-catalog/java/testing/datafaker/javafakertodatafaker.md)
* [Migrate from Micronaut 2.x to 3.x](/user-documentation/recipes/recipe-catalog/java/micronaut/micronaut2to3migration.md)
* [Migrate from springdoc-openapi-common to springdoc-openapi-starter-common](/user-documentation/recipes/recipe-catalog/java/springdoc/migratespringdoccommon.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](/user-documentation/recipes/recipe-catalog/apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods.md)
* [Migrate to Hibernate 7.0.x (Moderne Edition)](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate70-moderne-edition.md)
* [Migrate to HtmlUnit 3.x](/user-documentation/recipes/recipe-catalog/java/testing/htmlunit/upgradehtmlunit_3.md)
* [Migrate to Kafka 2.7](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka27.md)
* [Migrate to Kafka 3.0](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka30.md)
* [Migrate to Reactor 3.5](/user-documentation/recipes/recipe-catalog/reactive/reactor/upgradereactor_3_5.md)
* [Migrate to Spring Batch 6.0 from 5.2](/user-documentation/recipes/recipe-catalog/java/spring/batch/springbatch5to6migration.md)
* [Migrate to Spring Framework 6.2](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_6_2.md)
* [Migrates Spring Kafka deprecated error handlers](/user-documentation/recipes/recipe-catalog/java/spring/kafka/upgradespringkafka_2_8_errorhandlers.md)
* [Migrates `camel 4.16` application to `camel 4.17`](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel417/camelmigrationrecipe.md)
* [Migrates to Apache Commons Lang 3.x](/user-documentation/recipes/recipe-catalog/apache/commons/lang/upgradeapachecommonslang_2_3.md)
* [Mockito 3.x migration from 1.x](/user-documentation/recipes/recipe-catalog/java/testing/mockito/mockito1to3migration.md)
* [Prefer `Integer#compareUnsigned`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferintegercompareunsigned.md)
* [Prefer `Integer#divideUnsigned`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferintegerdivideunsigned.md)
* [Prefer `Long#compareUnsigned`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferlongcompareunsigned.md)
* [Prefer `Long#divideUnsigned`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferlongdivideunsigned.md)
* [Prefer `Math#addExact`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/prefermathaddexact.md)
* [Prefer `Math#clamp`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/prefermathclamp.md)
* [Prefer `Math#multiplyExact`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/prefermathmultiplyexact.md)
* [Prefer `Math#subtractExact`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/prefermathsubtractexact.md)
* [Prefer `java.util.Objects#equals`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferjavautilobjectsequals.md)
* [Prefer `java.util.Objects#hash`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferjavautilobjectshashcode.md)
* [Prefer `java.util.Objects#requireNonNullElse`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferjavautilobjectsrequirenonnullelse.md)
* [Prefer `java.util.Optional`](/user-documentation/recipes/recipe-catalog/java/migrate/guava/preferjavautiloptional.md)
* [Quarkus 1.13 migration from Quarkus 1.11](/user-documentation/recipes/recipe-catalog/quarkus/quarkus1to1_13migration.md)
* [Recipe testing best practices](/user-documentation/recipes/recipe-catalog/java/recipes/recipetestingbestpractices.md)
* [Refactored dataFormats](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel415/dataformats.md)
* [Rename Jackson 2.x methods to 3.x equivalents for JsonGenerator](/user-documentation/recipes/recipe-catalog/java/jackson/upgradejackson_2_3_jsongeneratormethodrenames.md)
* [Rename Jackson 2.x methods to 3.x equivalents for JsonNode](/user-documentation/recipes/recipe-catalog/java/jackson/upgradejackson_2_3_jsonnodemethodrenames.md)
* [Rename Jackson 2.x methods to 3.x equivalents for JsonParser](/user-documentation/recipes/recipe-catalog/java/jackson/upgradejackson_2_3_jsonparsermethodrenames.md)
* [Replace  deprecated Jakarta Servlet methods and classes](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removalsservletjakarta10.md)
* [Replace `ContainerState.getContainerIpAddress()` with `getHost()`](/user-documentation/recipes/recipe-catalog/java/testing/testcontainers/gethostmigration.md)
* [Replace `HttpServletRequestWrapper.isRequestedSessionIdFromUrl()` with `isRequestedSessionIdFromURL()`](/user-documentation/recipes/recipe-catalog/java/migrate/javaee8/servletisrequestedsessionidfromurl.md)
* [Replace `Inflater` and `Deflater` `end()` calls with `close()`](/user-documentation/recipes/recipe-catalog/java/migrate/util/migrateinflaterdeflatertoclose.md)
* [Replace `Paths.get` with `Path.of`](/user-documentation/recipes/recipe-catalog/java/migrate/nio/file/pathsgettopathof.md)
* [Replace `SSLSession.getPeerCertificateChain()` method](/user-documentation/recipes/recipe-catalog/java/migrate/removedsslsessiongetpeercertificatechainmethodimpl.md)
* [Replace `doUpgrade(..)` with `ServerContainer.upgradeHttpToWebSocket(..)`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/wswsocservercontainerdeprecation.md)
* [Replace `finalize` method in `java.io.FileInputStream`  and `java.io.FileOutputStream`](/user-documentation/recipes/recipe-catalog/java/migrate/removedfileiofinalizemethods.md)
* [Replace `finalize` method in `java.util.zip.ZipFile`, `java.util.zip.Inflater` and `java.util.zip.Deflater`](/user-documentation/recipes/recipe-catalog/java/migrate/removedzipfinalizemethods.md)
* [Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`](/user-documentation/recipes/recipe-catalog/jenkins/migrate/hudson/utilgetpasttimestringtogettimespanstring.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](/user-documentation/recipes/recipe-catalog/staticanalysis/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Replace calls to `Thread.run()` with `Thread.start()`](/user-documentation/recipes/recipe-catalog/staticanalysis/replacethreadrunwiththreadstart.md)
* [Replace deprecated Jakarta Servlet methods and classes](/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/jakarta/removalsservletjakarta9.md)
* [Replace deprecated setters in `RestTemplateBuilder`](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replaceresttemplatebuildermethods.md)
* [The header name for the List metadata has changed](/user-documentation/recipes/recipe-catalog/org/apache/camel/upgrade/camel43/kafkametadata.md)
* [Upgrade to JUnit 5.14](/user-documentation/recipes/recipe-catalog/java/testing/junit5/upgradetojunit514.md)
* [Upgrade to SpringDoc 2.1](/user-documentation/recipes/recipe-catalog/java/springdoc/upgradespringdoc_2.md)
* [Upgrade to the latest Timefold Solver](/user-documentation/recipes/recipe-catalog/ai/timefold/solver/migration/tolatest.md)
* [Use `AtomicBoolean#weakCompareAndSetPlain(boolean, boolean)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomicbooleanweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicInteger#weakCompareAndSetPlain(int, int)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomicintegerweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicIntegerArray#weakCompareAndSetPlain(int, int, int)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomicintegerarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLong#weakCompareAndSetPlain(long, long)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomiclongweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLongArray#weakCompareAndSetPlain(int, long, long)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomiclongarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReference#weakCompareAndSetPlain(T, T)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomicreferenceweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`](/user-documentation/recipes/recipe-catalog/java/migrate/concurrent/migrateatomicreferencearrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `Character#isJavaIdentifierPart(char)`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isJavaIdentifierStart(char)`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isWhitespace(char)`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migratecharacterisspacetoiswhitespace.md)
* [Use `JpaRepository#deleteAllInBatch(Iterable&lt;T&gt; entities)`](/user-documentation/recipes/recipe-catalog/java/spring/data/usejparepositorydeleteallinbatch.md)
* [Use `JpaRepository#getById(ID id)`](/user-documentation/recipes/recipe-catalog/java/spring/data/usejparepositorygetbyid.md)
* [Use `JpaRepository#getReferenceById(ID id)`](/user-documentation/recipes/recipe-catalog/java/spring/data/usejparepositorygetreferencebyid.md)
* [Use `RestTemplateBuilder#basicAuthentication`](/user-documentation/recipes/recipe-catalog/java/spring/boot2/migrateresttemplatebuilderbasicauthorization.md)
* [Use `Runtime.Version#feature()`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](/user-documentation/recipes/recipe-catalog/java/migrate/lang/migrateruntimeversionsecuritytoupdate.md)
* [Use `StateManagementStrategy`](/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/jakarta/removedstatemanagermethods3.md)
* [Use `StateManagementStrategy`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removedstatemanagermethods.md)
* [Use `getSSOCookieFromSSOToken` and `logout`](/user-documentation/recipes/recipe-catalog/java/liberty/websphereunavailablessomethods.md)
* [Use `isEagerFilterInit()`](/user-documentation/recipes/recipe-catalog/java/spring/boot2/migrateundertowservletwebserverfactoryiseagerinitfilters.md)
* [Use `isParametersProvided()`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removedisparmetersprovidedmethod.md)
* [Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`](/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removedsoapelementfactory.md)
* [Use `java.net.MulticastSocket#getTimeToLive()`](/user-documentation/recipes/recipe-catalog/java/migrate/net/migratemulticastsocketgetttltogettimetolive.md)
* [Use `javax.management.monitor.CounterMonitor#setInitThreshold`](/user-documentation/recipes/recipe-catalog/java/migrate/javax/migratecountermonitorsetthresholdtosetinitthreshold.md)
* [Use `javax.xml.stream.XMLEventFactory#newFactory(String, ClassLoader)`](/user-documentation/recipes/recipe-catalog/java/migrate/javax/migratexmleventfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`](/user-documentation/recipes/recipe-catalog/java/migrate/javax/migratexmlinputfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLOutputFactory#newFactory(String, ClassLoader)`](/user-documentation/recipes/recipe-catalog/java/migrate/javax/migratexmloutputfactorynewinstancetonewfactory.md)
* [Use `setEagerFilterInit(boolean)`](/user-documentation/recipes/recipe-catalog/java/spring/boot2/migrateundertowservletwebserverfactoryseteagerinitfilters.md)
* [io.quarkus.updates.core.quarkus324.MigrateFromHibernateOrmSessionMethodsRemovedIn7](/user-documentation/recipes/recipe-catalog/io/quarkus/updates/core/quarkus324/migratefromhibernateormsessionmethodsremovedin7.md)
* [io.quarkus.updates.core.quarkus35.MutinyUniAndGroupCombinedWith](/user-documentation/recipes/recipe-catalog/io/quarkus/updates/core/quarkus35/mutinyuniandgroupcombinedwith.md)
* [io.quarkus.updates.core.quarkus35.MutinyUniMemoizeAtLeast](/user-documentation/recipes/recipe-catalog/io/quarkus/updates/core/quarkus35/mutinyunimemoizeatleast.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
```

Now that `com.yourorg.ChangeMethodNameExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodNameExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
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
            <recipe>com.yourorg.ChangeMethodNameExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe ChangeMethodName --recipe-option "methodPattern=org.mockito.Matchers anyVararg()" --recipe-option "newMethodName=any"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodName" />

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
