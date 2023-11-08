# Gradle plugin exercise

In this exercise, you will migrate an old version of the [SpringPetClinic repository](https://github.com/spring-projects/spring-petclinic/) (that uses Spring Boot 2) to Spring Boot 3.

If you were migrating this by hand, you would need to do a variety of things, such as:

* Migrating to Java 17
* Migrating to Spring Boot 2.7
* Migrating to Spring Security 5.8
* Migrating to Spring Cloud 2022
* Migrating to Jakarta EE 9
* Migrating to Spring Boot 3.0
* Migrating to Spring Security 6.0
* Migrating to Spring Boot 3.1
* ...

Fortunately, [OpenRewrite](https://docs.openrewrite.org/) has a [recipe](https://docs.openrewrite.org/concepts-explanations/recipes) that takes care of all of these pieces for you. Because of that, you only need to add the OpenRewrite plugin to your project and run a single [Migrate to Spring Boot 3.1 recipe](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot\_3\_1).

Let's walk through how to do that.

### Prepare your environment

Switch to Java 11 so that you can build this repository. Please notice that we need Java 11 and not Java 8 like in the [Maven plugin exercise](maven-plugin-exercise.md). This is because the first commit that supports Gradle build already uses Java 11.

You might need to download Java 11 and update your `JAVA_HOME` environment variable. If you are on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```bash
sdk install java 11.0.21-tem 
sdk use java 11.0.21-tem 
```

{% hint style="info" %}
If you aren't on a Unix-based system or you don't want to install SDKMan, you'll need to install Java 8 and run something like:

```bash
export JAVA_HOME=REPLACE_WITH_LOCATION_OF_JAVA_11 
```
{% endhint %}

1. Clone the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic):

```bash
git clone https://github.com/spring-projects/spring-petclinic
```

2. Check out the first Gradle build commit:

```bash
cd spring-petclinic
git checkout 4df621b41ed3013e527d4037d83a6cf756efd784
```

{% hint style="warning" %}
This commit already has some of the potential migration recipes applied, but it's the first one with Gradle support.&#x20;

Because of that, if you compare it to the [Maven plugin exercise](maven-plugin-exercise.md), you will see less changes being made.

For example, JUnit has already been migrated to version 5, and we already have Java 11 instead of Java 8.
{% endhint %}

3. Make sure it runs on your machine:

```bash
./gradlew assemble
```

### Migrate to SpringBoot3 with OpenRewrite

OpenRewrite can be configured in your `build.gradle` file or as an additional `init.gradle` script without having to edit any previous build configurations ([see how here](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build)).

1. For simplicity, we will provide you with an `init.gradle` file that contains the Spring Boot migration recipe as well as the OpenRewrite dependencies. Please copy this file to the Spring PetClinic repository you have checked out locally.

{% file src="../../.gitbook/assets/init.gradle" %}

<details>

<summary>init.gradle</summary>

{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }

    dependencies {
        classpath("org.openrewrite:plugin:latest.release")
    }
}

rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:latest.release")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}

</details>

2. Due to some [Guava incompatibility issues with Gradle 6](https://github.com/google/guava/releases/tag/v32.1.0) and Wro4j being incompatible with Gradle 7, we have to first awkwardly downgrade to Gradle 5.

```bash
./gradlew wrapper --gradle-version 5.6.4
```

Don't worry; we will upgrade Gradle automatically as part of the recipe run so that it's compatible with Java 17.

3. With `init.gradle` copied over, if you run `rewriteRun`, you will apply the migration recipe:

```bash
./gradlew --info --init-script init.gradle rewriteRun
```

{% hint style="info" %}
Running OpenRewrite [can take a while](../../introduction.md) as we analyze the project and run recipes to make code changes. You should see results within a couple of minutes, depending on the size of your project and your project.
{% endhint %}

<details>

<summary>You should see output similar to the following.</summary>

```bash
Initialized native services in: /home/tim/.gradle/native
Found daemon DaemonInfo{pid=800284, address=[d894bba7-7c4e-4feb-8997-04fc66a50868 port:36395, addresses:[/0:0:0:0:0:0:0:1, /127.0.0.1]], state=Idle, lastBusy=1693566067810, context=DefaultDaemonContext[uid=03d2313d-ee70-418f-9038-e2ce17dde7e5,javaHome=/home/tim/.sdkman/candidates/java/8.0.392-zulu,daemonRegistryDir=/home/tim/.gradle/daemon,pid=800284,idleTimeout=10800000,priority=NORMAL,daemonOpts=-XX:MaxMetaspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=UTF-8,-Duser.country=US,-Duser.language=en,-Duser.variant]} however its context does not match the desired criteria.
Java home is different.
Wanted: DefaultDaemonContext[uid=null,javaHome=/home/tim/.sdkman/candidates/java/11.0.21-tem,daemonRegistryDir=/home/tim/.gradle/daemon,pid=800425,idleTimeout=null,priority=NORMAL,daemonOpts=--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.base/java.lang=ALL-UNNAMED,--add-opens,java.base/java.lang.invoke=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,-XX:MaxMetaspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=UTF-8,-Duser.country=US,-Duser.language=en,-Duser.variant]
Actual: DefaultDaemonContext[uid=03d2313d-ee70-418f-9038-e2ce17dde7e5,javaHome=/home/tim/.sdkman/candidates/java/8.0.392-zulu,daemonRegistryDir=/home/tim/.gradle/daemon,pid=800284,idleTimeout=10800000,priority=NORMAL,daemonOpts=-XX:MaxMetaspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=UTF-8,-Duser.country=US,-Duser.language=en,-Duser.variant]

Looking for a different daemon...
Removing daemon from the registry due to communication failure. Daemon information: DaemonInfo{pid=11773, address=[075a4d1f-8528-42e4-8b46-a41fe2b4aad8 port:42229, addresses:[/0:0:0:0:0:0:0:1, /127.0.0.1]], state=Idle, lastBusy=1693515175555, context=DefaultDaemonContext[uid=de62defa-2384-46c4-b07b-b9480989c003,javaHome=/home/tim/.sdkman/candidates/java/11.0.21-tem,daemonRegistryDir=/home/tim/.gradle/daemon,pid=11773,idleTimeout=10800000,priority=NORMAL,daemonOpts=--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.base/java.lang=ALL-UNNAMED,--add-opens,java.base/java.lang.invoke=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,-XX:MaxMetaspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=UTF-8,-Duser.country=US,-Duser.language=en,-Duser.variant]}
Removing 0 daemon stop events from registry
Previous Daemon (11773) stopped at Fri Sep 01 13:01:25 CEST 2023 by user or operating system
Starting a Gradle Daemon, 2 incompatible and 1 stopped Daemons could not be reused, use --status for details
Starting process 'Gradle build daemon'. Working directory: /home/tim/.gradle/daemon/5.6.4 Command: /home/tim/.sdkman/candidates/java/11.0.21-tem/bin/java --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.invoke=ALL-UNNAMED --add-opens java.prefs/java.util.prefs=ALL-UNNAMED -XX:MaxMetaspaceSize=256m -XX:+HeapDumpOnOutOfMemoryError -Xms256m -Xmx512m -Dfile.encoding=UTF-8 -Duser.country=US -Duser.language=en -Duser.variant -cp /home/tim/.gradle/wrapper/dists/gradle-5.6.4-bin/bxirm19lnfz6nurbatndyydux/gradle-5.6.4/lib/gradle-launcher-5.6.4.jar org.gradle.launcher.daemon.bootstrap.GradleDaemon 5.6.4
Successfully started process 'Gradle build daemon'
An attempt to start the daemon took 0.413 secs.
The client will now receive all logging from the daemon (pid: 800467). The daemon log file: /home/tim/.gradle/daemon/5.6.4/daemon-800467.out.log
Starting build in new daemon [memory: 536.9 MB]
Using 20 worker leases.
Starting Build
Settings evaluated using settings file '/tmp/cli/spring-petclinic/settings.gradle'.
Projects loaded. Root project using build file '/tmp/cli/spring-petclinic/build.gradle'.
Included projects: [root project 'spring-petclinic']

> Configure project :
Evaluating root project 'spring-petclinic' using build file '/tmp/cli/spring-petclinic/build.gradle'.
Applying dependency management to configuration 'bootArchives' in project 'spring-petclinic'
Applying dependency management to configuration 'rewrite' in project 'spring-petclinic'
Applying dependency management to configuration 'archives' in project 'spring-petclinic'
Applying dependency management to configuration 'default' in project 'spring-petclinic'
Applying dependency management to configuration 'compile' in project 'spring-petclinic'
Applying dependency management to configuration 'implementation' in project 'spring-petclinic'
Applying dependency management to configuration 'runtime' in project 'spring-petclinic'
Applying dependency management to configuration 'compileOnly' in project 'spring-petclinic'
Applying dependency management to configuration 'compileClasspath' in project 'spring-petclinic'
Applying dependency management to configuration 'annotationProcessor' in project 'spring-petclinic'
Applying dependency management to configuration 'runtimeOnly' in project 'spring-petclinic'
Applying dependency management to configuration 'runtimeClasspath' in project 'spring-petclinic'
Applying dependency management to configuration 'testCompile' in project 'spring-petclinic'
Applying dependency management to configuration 'testImplementation' in project 'spring-petclinic'
Applying dependency management to configuration 'testRuntime' in project 'spring-petclinic'
Applying dependency management to configuration 'testCompileOnly' in project 'spring-petclinic'
Applying dependency management to configuration 'testCompileClasspath' in project 'spring-petclinic'
Applying dependency management to configuration 'testAnnotationProcessor' in project 'spring-petclinic'
Applying dependency management to configuration 'testRuntimeOnly' in project 'spring-petclinic'
Applying dependency management to configuration 'testRuntimeClasspath' in project 'spring-petclinic'
Applying dependency management to configuration 'apiElements' in project 'spring-petclinic'
Applying dependency management to configuration 'runtimeElements' in project 'spring-petclinic'
Applying dependency management to configuration 'developmentOnly' in project 'spring-petclinic'
Applying dependency management to configuration 'productionRuntimeClasspath' in project 'spring-petclinic'
Applying dependency management to configuration 'webjarsRuntime' in project 'spring-petclinic'
Applying dependency management to configuration 'webjars' in project 'spring-petclinic'
Applying dependency management to configuration 'webjarsTest' in project 'spring-petclinic'
Resolving global dependency management for project 'spring-petclinic'
Excluding []
Excluding []
All projects evaluated.
Selected primary task 'rewriteRun' from project :
Tasks to be executed: [task ':compileJava', task ':processResources', task ':prepareAssets', task ':prepareWebjars', task ':compileWebPetclinic', task ':processWebResources', task ':classes', task ':compileTestJava', task ':rewriteResolveDependencies', task ':rewriteRun']
:compileJava (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :compileJava
Excluding [ognl:ognl]
Excluding []
Caching disabled for task ':compileJava' because:
Build cache is disabled
Task ':compileJava' is not up-to-date because:
Task has failed previously.
All input files are considered out-of-date for incremental task ':compileJava'.
Full recompilation is required because no incremental change information is available. This is usually caused by clean builds or changing compiler arguments.
Compiling with JDK Java compiler API.
Created classpath snapshot for incremental compilation in 0.068 secs. 1 duplicate classes found in classpath (see all with --debug).
:compileJava (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.939 secs.
:processResources (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :processResources
Caching disabled for task ':processResources' because:
Build cache is disabled
Task ':processResources' is not up-to-date because:
No history is available.
:processResources (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.036 secs.
:prepareAssets (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :prepareAssets
Deleting stale output file: /tmp/cli/spring-petclinic/build/wro
Caching disabled for task ':prepareAssets' because:
Build cache is disabled
Task ':prepareAssets' is not up-to-date because:
No history is available.
:prepareAssets (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.018 secs.
:prepareWebjars (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :prepareWebjars
Caching disabled for task ':prepareWebjars' because:
Build cache is disabled
Task ':prepareWebjars' is not up-to-date because:
No history is available.
:prepareWebjars (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.177 secs.
:compileWebPetclinic (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :compileWebPetclinic
Caching disabled for task ':compileWebPetclinic' because:
Build cache is disabled
Task ':compileWebPetclinic' is not up-to-date because:
No history is available.
compileWebPetclinic.WroModel 'petclinic' {
/webjars/bootstrap/3.3.6/less/bootstrap.less
}
Processing group 'petclinic.css'...
Less warnings are:
10:1 Cannot link source map. Css result location is not know and could not be deduced from input less source..
petclinic.css => /tmp/cli/spring-petclinic/build/resources/main/static/resources/css/petclinic.css / 145146B
:compileWebPetclinic (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 1.631 secs.
:processWebResources (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :processWebResources NO-SOURCE
Skipping task ':processWebResources' as it has no source files and no previous output files.
:processWebResources (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.001 secs.
:classes (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :classes
Skipping task ':classes' as it has no actions.
:classes (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.0 secs.
:compileTestJava (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :compileTestJava
Excluding []
Excluding []
Caching disabled for task ':compileTestJava' because:
Build cache is disabled
Task ':compileTestJava' is not up-to-date because:
No history is available.
All input files are considered out-of-date for incremental task ':compileTestJava'.
Full recompilation is required because no incremental change information is available. This is usually caused by clean builds or changing compiler arguments.
Compiling with JDK Java compiler API.
Created classpath snapshot for incremental compilation in 0.021 secs. 1 duplicate classes found in classpath (see all with --debug).
:compileTestJava (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.609 secs.
:rewriteResolveDependencies (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :rewriteResolveDependencies
Caching disabled for task ':rewriteResolveDependencies' because:
Build cache is disabled
Task ':rewriteResolveDependencies' is not up-to-date because:
Task has not declared any outputs despite executing actions.
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{375} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=2}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{372} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=1}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{400} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=41}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
:rewriteResolveDependencies (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 0.095 secs.
:rewriteRun (Thread[Execution worker for ':' Thread 4,5,main]) started.

> Task :rewriteRun
Caching disabled for task ':rewriteRun' because:
Build cache is disabled
Task ':rewriteRun' is not up-to-date because:
Task has not declared any outputs despite executing actions.
Validating active recipes
Scanning sources in project spring-petclinic
Applying dependency management to configuration 'rewriteimplementation' in project 'spring-petclinic'
Excluding []
Scanned 25 Java sources in spring-petclinic/main
Applying dependency management to configuration 'rewritetestImplementation' in project 'spring-petclinic'
Excluding []
Scanned 11 Java sources in spring-petclinic/test
Excluding []
Excluding []
Excluding []
Excluding [com.google.protobuf:protobuf-java]
Excluding []
Excluding []
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{400} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=81}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{400} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=121}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
Cache entries evicted. In-memory cache of /home/tim/.gradle/caches/journal-1/file-access.bin: Size{400} MaxSize{400}, CacheStats{hitCount=0, missCount=0, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCount=161}
Performance may suffer from in-memory cache misses. Increase max heap size of Gradle build process to reduce cache misses.
Excluding [org.codehaus.groovy:groovy]
Excluding []
Excluding []
Excluding []
Excluding []
Excluding []
Excluding []
Excluding []
All sources parsed, running active recipes: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Specialty.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Vet.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
org.openrewrite.java.ChangePackage: {oldPackageName=javax.xml.bind, newPackageName=jakarta.xml.bind, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Vets.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
org.openrewrite.java.ChangePackage: {oldPackageName=javax.xml.bind, newPackageName=jakarta.xml.bind, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
org.openrewrite.java.spring.ImplicitWebAnnotationNames
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetType.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
org.openrewrite.java.spring.ImplicitWebAnnotationNames
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
org.openrewrite.java.spring.NoAutowiredOnConstructor
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Pet.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
org.openrewrite.java.spring.ImplicitWebAnnotationNames
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CrashController.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.java.migrate.lang.UseTextBlocks: {convertStringsWithoutNewlines=true}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to application-postgres.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.initialization-mode, newPropertyKey=spring.sql.init.mode}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to application-mysql.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.initialization-mode, newPropertyKey=spring.sql.init.mode}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to application.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.resources.cache.cachecontrol.max-age, newPropertyKey=spring.web.resources.cache.cachecontrol.max-age}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
org.openrewrite.java.testing.junit5.JUnit5BestPractices
org.openrewrite.java.testing.junit5.StaticImports
org.openrewrite.java.UseStaticImport: {methodPattern=org.junit.jupiter.api.Assertions *(..)}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
Changes have been made to build.gradle by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=2.4.x}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=2.5.x}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=io.spring.dependency-management, newVersion=1.0.x}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=2.6.x}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=2.7.x}
org.openrewrite.java.dependencies.ChangeDependency: {oldGroupId=mysql, oldArtifactId=mysql-connector-java, newGroupId=com.mysql, newArtifactId=mysql-connector-j, newVersion=8.0.x}
org.openrewrite.gradle.ChangeDependency: {oldGroupId=mysql, oldArtifactId=mysql-connector-java, newGroupId=com.mysql, newArtifactId=mysql-connector-j, newVersion=8.0.x}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.java.migrate.Java8toJava11
org.openrewrite.java.migrate.javax.AddJaxwsDependencies
org.openrewrite.java.migrate.javax.AddJaxwsRuntime
org.openrewrite.java.migrate.javax.AddJaxwsRuntime$AddJaxwsRuntimeGradle
org.openrewrite.java.migrate.JavaVersion11
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
org.openrewrite.java.migrate.JavaVersion17
org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=3.0.x}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=io.spring.dependency-management, newVersion=1.1.x}
org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs
org.openrewrite.java.dependencies.UpgradeDependencyVersion: {groupId=com.sun.xml.ws, artifactId=jaxws-rt, newVersion=latest.release}
org.openrewrite.gradle.UpgradeDependencyVersion: {groupId=com.sun.xml.ws, artifactId=jaxws-rt, newVersion=latest.release}
org.openrewrite.gradle.plugins.UpgradePluginVersion: {pluginIdPattern=org.springframework.boot, newVersion=3.1.x}
Changes have been made to .github/workflows/maven-build.yml by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.migrate.UpgradeToJava17
org.openrewrite.github.SetupJavaUpgradeJavaVersion
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/main/resources/application-postgres.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.initialization-mode, newPropertyKey=spring.sql.init.mode}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/main/resources/application-mysql.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.initialization-mode, newPropertyKey=spring.sql.init.mode}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to src/main/resources/application.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.resources.cache.cachecontrol.max-age, newPropertyKey=spring.web.resources.cache.cachecontrol.max-age}
org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to gradlew by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to gradlew.bat by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to gradle/wrapper/gradle-wrapper.properties by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Changes have been made to gradle/wrapper/gradle-wrapper.jar by:
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.3, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^6.8, addIfMissing=false}
org.openrewrite.gradle.UpdateGradleWrapper: {version=^7.4, addIfMissing=false}
Please review and commit the results.
:rewriteRun (Thread[Execution worker for ':' Thread 4,5,main]) completed. Took 50.215 secs.

BUILD SUCCESSFUL in 56s
8 actionable tasks: 8 executed
```

</details>

Notice how each change is listed in the output, along with the `org.openrewrite` recipe that made the change.

### Explore the results

You can compare the changes made through OpenRewrite in your favorite IDE or by running:

```bash
git diff
```

<details>

<summary>You should see output similar to the following.</summary>

```diff
diff --git a/.github/workflows/maven-build.yml b/.github/workflows/maven-build.yml
index f7ad114..fde5e28 100644
--- a/.github/workflows/maven-build.yml
+++ b/.github/workflows/maven-build.yml
@@ -19,7 +19,7 @@ jobs:
       - name: Set up JDK 11
         uses: actions/setup-java@v2
         with:
-          java-version: '11'
+          java-version: '17'
           distribution: 'adopt'
           cache: maven
       - name: Build with Maven Wrapper
diff --git a/build.gradle b/build.gradle
index c517cfc..3598ae2 100644
--- a/build.gradle
+++ b/build.gradle
@@ -5,8 +5,8 @@ buildscript {
 }
 
 plugins {
-  id 'org.springframework.boot' version '2.4.5'
-  id 'io.spring.dependency-management' version '1.0.11.RELEASE'
+  id 'org.springframework.boot' version '3.1.5'
+  id 'io.spring.dependency-management' version '1.1.3'
   id 'java'
 }
 
@@ -15,7 +15,7 @@ apply plugin: 'wro4j'
 
 group = 'org.springframework.samples'
 version = '2.4.5'
-sourceCompatibility = '11'
+sourceCompatibility = '17'
 
 repositories {
   mavenCentral()
@@ -26,6 +26,8 @@ ext.webjarsJqueryUiVersion = "1.11.4"
 ext.webjarsBootstrapVersion = "3.3.6"
 
 dependencies {
+    compileOnly "com.sun.xml.ws:jaxws-rt:4.0.1"
+
   implementation 'org.springframework.boot:spring-boot-starter-cache'
   implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
   implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
@@ -38,8 +40,9 @@ dependencies {
   webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
   webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
   runtimeOnly 'org.ehcache:ehcache'
-  runtimeOnly 'com.h2database:h2'
-  runtimeOnly 'mysql:mysql-connector-java'
+  testImplementation "com.sun.xml.ws:jaxws-rt:4.0.1"
+    runtimeOnly 'com.h2database:h2'
+  runtimeOnly 'com.mysql:mysql-connector-j'
   developmentOnly 'org.springframework.boot:spring-boot-devtools'
   testImplementation 'org.springframework.boot:spring-boot-starter-test'
 }
diff --git a/gradle/wrapper/gradle-wrapper.jar b/gradle/wrapper/gradle-wrapper.jar
index e708b1c..afba109 100644
Binary files a/gradle/wrapper/gradle-wrapper.jar and b/gradle/wrapper/gradle-wrapper.jar differ
diff --git a/gradle/wrapper/gradle-wrapper.properties b/gradle/wrapper/gradle-wrapper.properties
index 442d913..8fd50d7 100644
--- a/gradle/wrapper/gradle-wrapper.properties
+++ b/gradle/wrapper/gradle-wrapper.properties
@@ -1,5 +1,6 @@
 distributionBase=GRADLE_USER_HOME
 distributionPath=wrapper/dists
-distributionUrl=https\://services.gradle.org/distributions/gradle-6.8.3-bin.zip
+distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.2-bin.zip
 zipStoreBase=GRADLE_USER_HOME
 zipStorePath=wrapper/dists
+distributionSha256Sum=a01b6587e15fe7ed120a0ee299c25982a1eee045abd6a9dd5e216b2f628ef9ac
diff --git a/gradlew b/gradlew
index 4f906e0..65dcd68 100755
--- a/gradlew
+++ b/gradlew
@@ -1,7 +1,7 @@
-#!/usr/bin/env sh
+#!/bin/sh
 
 #
-# Copyright 2015 the original author or authors.
+# Copyright © 2015-2021 the original authors.
 #
 # Licensed under the Apache License, Version 2.0 (the "License");
 # you may not use this file except in compliance with the License.
@@ -17,67 +17,101 @@
 #
 
 ##############################################################################
-##
-##  Gradle start up script for UN*X
-##
+#
+#   Gradle start up script for POSIX generated by Gradle.
+#
+#   Important for running:
+#
+#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
+#       noncompliant, but you have some other compliant shell such as ksh or
+#       bash, then to run this script, type that shell name before the whole
+#       command line, like:
+#
+#           ksh Gradle
+#
+#       Busybox and similar reduced shells will NOT work, because this script
+#       requires all of these POSIX shell features:
+#         * functions;
+#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
+#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
+#         * compound commands having a testable exit status, especially «case»;
+#         * various built-in commands including «command», «set», and «ulimit».
+#
+#   Important for patching:
+#
+#   (2) This script targets any POSIX shell, so it avoids extensions provided
+#       by Bash, Ksh, etc; in particular arrays are avoided.
+#
+#       The "traditional" practice of packing multiple parameters into a
+#       space-separated string is a well documented source of bugs and security
+#       problems, so this is (mostly) avoided, by progressively accumulating
+#       options in "$@", and eventually passing that to Java.
+#
+#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
+#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
+#       see the in-line comments for details.
+#
+#       There are tweaks for specific operating systems such as AIX, CygWin,
+#       Darwin, MinGW, and NonStop.
+#
+#   (3) This script is generated from the Groovy template
+#       https://github.com/gradle/gradle/blob/HEAD/subprojects/plugins/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
+#       within the Gradle project.
+#
+#       You can find Gradle at https://github.com/gradle/gradle/.
+#
 ##############################################################################
 
 # Attempt to set APP_HOME
+
 # Resolve links: $0 may be a link
-PRG="$0"
-# Need this for relative symlinks.
-while [ -h "$PRG" ] ; do
-    ls=`ls -ld "$PRG"`
-    link=`expr "$ls" : '.*-> \(.*\)$'`
-    if expr "$link" : '/.*' > /dev/null; then
-        PRG="$link"
-    else
-        PRG=`dirname "$PRG"`"/$link"
-    fi
+app_path=$0
+
+# Need this for daisy-chained symlinks.
+while
+    APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
+    [ -h "$app_path" ]
+do
+    ls=$( ls -ld "$app_path" )
+    link=${ls#*' -> '}
+    case $link in             #(
+      /*)   app_path=$link ;; #(
+      *)    app_path=$APP_HOME$link ;;
+    esac
 done
-SAVED="`pwd`"
-cd "`dirname \"$PRG\"`/" >/dev/null
-APP_HOME="`pwd -P`"
-cd "$SAVED" >/dev/null
 
-APP_NAME="Gradle"
-APP_BASE_NAME=`basename "$0"`
+# This is normally unused
+# shellcheck disable=SC2034
+APP_BASE_NAME=${0##*/}
+APP_HOME=$( cd "${APP_HOME:-./}" && pwd -P ) || exit
 
 # Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
 DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'
 
 # Use the maximum available, or set MAX_FD != -1 to use that value.
-MAX_FD="maximum"
+MAX_FD=maximum
 
 warn () {
     echo "$*"
-}
+} >&2
 
 die () {
     echo
     echo "$*"
     echo
     exit 1
-}
+} >&2
 
 # OS specific support (must be 'true' or 'false').
 cygwin=false
 msys=false
 darwin=false
 nonstop=false
-case "`uname`" in
-  CYGWIN* )
-    cygwin=true
-    ;;
-  Darwin* )
-    darwin=true
-    ;;
-  MINGW* )
-    msys=true
-    ;;
-  NONSTOP* )
-    nonstop=true
-    ;;
+case "$( uname )" in                #(
+  CYGWIN* )         cygwin=true  ;; #(
+  Darwin* )         darwin=true  ;; #(
+  MSYS* | MINGW* )  msys=true    ;; #(
+  NONSTOP* )        nonstop=true ;;
 esac
 
 CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar
@@ -87,9 +121,9 @@ CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar
 if [ -n "$JAVA_HOME" ] ; then
     if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
         # IBM's JDK on AIX uses strange locations for the executables
-        JAVACMD="$JAVA_HOME/jre/sh/java"
+        JAVACMD=$JAVA_HOME/jre/sh/java
     else
-        JAVACMD="$JAVA_HOME/bin/java"
+        JAVACMD=$JAVA_HOME/bin/java
     fi
     if [ ! -x "$JAVACMD" ] ; then
         die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME
@@ -98,7 +132,7 @@ Please set the JAVA_HOME variable in your environment to match the
 location of your Java installation."
     fi
 else
-    JAVACMD="java"
+    JAVACMD=java
     which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
 
 Please set the JAVA_HOME variable in your environment to match the
@@ -106,80 +140,105 @@ location of your Java installation."
 fi
 
 # Increase the maximum file descriptors if we can.
-if [ "$cygwin" = "false" -a "$darwin" = "false" -a "$nonstop" = "false" ] ; then
-    MAX_FD_LIMIT=`ulimit -H -n`
-    if [ $? -eq 0 ] ; then
-        if [ "$MAX_FD" = "maximum" -o "$MAX_FD" = "max" ] ; then
-            MAX_FD="$MAX_FD_LIMIT"
-        fi
-        ulimit -n $MAX_FD
-        if [ $? -ne 0 ] ; then
-            warn "Could not set maximum file descriptor limit: $MAX_FD"
-        fi
-    else
-        warn "Could not query maximum file descriptor limit: $MAX_FD_LIMIT"
-    fi
+if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
+    case $MAX_FD in #(
+      max*)
+        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
+        # shellcheck disable=SC3045 
+        MAX_FD=$( ulimit -H -n ) ||
+            warn "Could not query maximum file descriptor limit"
+    esac
+    case $MAX_FD in  #(
+      '' | soft) :;; #(
+      *)
+        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
+        # shellcheck disable=SC3045 
+        ulimit -n "$MAX_FD" ||
+            warn "Could not set maximum file descriptor limit to $MAX_FD"
+    esac
 fi
 
-# For Darwin, add options to specify how the application appears in the dock
-if $darwin; then
-    GRADLE_OPTS="$GRADLE_OPTS \"-Xdock:name=$APP_NAME\" \"-Xdock:icon=$APP_HOME/media/gradle.icns\""
-fi
+# Collect all arguments for the java command, stacking in reverse order:
+#   * args from the command line
+#   * the main class name
+#   * -classpath
+#   * -D...appname settings
+#   * --module-path (only if needed)
+#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.
 
 # For Cygwin or MSYS, switch paths to Windows format before running java
-if [ "$cygwin" = "true" -o "$msys" = "true" ] ; then
-    APP_HOME=`cygpath --path --mixed "$APP_HOME"`
-    CLASSPATH=`cygpath --path --mixed "$CLASSPATH"`
-
-    JAVACMD=`cygpath --unix "$JAVACMD"`
-
-    # We build the pattern for arguments to be converted via cygpath
-    ROOTDIRSRAW=`find -L / -maxdepth 1 -mindepth 1 -type d 2>/dev/null`
-    SEP=""
-    for dir in $ROOTDIRSRAW ; do
-        ROOTDIRS="$ROOTDIRS$SEP$dir"
-        SEP="|"
-    done
-    OURCYGPATTERN="(^($ROOTDIRS))"
-    # Add a user-defined pattern to the cygpath arguments
-    if [ "$GRADLE_CYGPATTERN" != "" ] ; then
-        OURCYGPATTERN="$OURCYGPATTERN|($GRADLE_CYGPATTERN)"
-    fi
+if "$cygwin" || "$msys" ; then
+    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
+    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )
+
+    JAVACMD=$( cygpath --unix "$JAVACMD" )
+
     # Now convert the arguments - kludge to limit ourselves to /bin/sh
-    i=0
-    for arg in "$@" ; do
-        CHECK=`echo "$arg"|egrep -c "$OURCYGPATTERN" -`
-        CHECK2=`echo "$arg"|egrep -c "^-"`                                 ### Determine if an option
-
-        if [ $CHECK -ne 0 ] && [ $CHECK2 -eq 0 ] ; then                    ### Added a condition
-            eval `echo args$i`=`cygpath --path --ignore --mixed "$arg"`
-        else
-            eval `echo args$i`="\"$arg\""
+    for arg do
+        if
+            case $arg in                                #(
+              -*)   false ;;                            # don't mess with options #(
+              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
+                    [ -e "$t" ] ;;                      #(
+              *)    false ;;
+            esac
+        then
+            arg=$( cygpath --path --ignore --mixed "$arg" )
         fi
-        i=`expr $i + 1`
+        # Roll the args list around exactly as many times as the number of
+        # args, so each arg winds up back in the position where it started, but
+        # possibly modified.
+        #
+        # NB: a `for` loop captures its iteration list before it begins, so
+        # changing the positional parameters here affects neither the number of
+        # iterations, nor the values presented in `arg`.
+        shift                   # remove old arg
+        set -- "$@" "$arg"      # push replacement arg
     done
-    case $i in
-        0) set -- ;;
-        1) set -- "$args0" ;;
-        2) set -- "$args0" "$args1" ;;
-        3) set -- "$args0" "$args1" "$args2" ;;
-        4) set -- "$args0" "$args1" "$args2" "$args3" ;;
-        5) set -- "$args0" "$args1" "$args2" "$args3" "$args4" ;;
-        6) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" ;;
-        7) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" ;;
-        8) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" "$args7" ;;
-        9) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" "$args7" "$args8" ;;
-    esac
 fi
 
-# Escape application args
-save () {
-    for i do printf %s\\n "$i" | sed "s/'/'\\\\''/g;1s/^/'/;\$s/\$/' \\\\/" ; done
-    echo " "
-}
-APP_ARGS=`save "$@"`
+# Collect all arguments for the java command;
+#   * $DEFAULT_JVM_OPTS, $JAVA_OPTS, and $GRADLE_OPTS can contain fragments of
+#     shell script including quotes and variable substitutions, so put them in
+#     double quotes to make sure that they get re-expanded; and
+#   * put everything else in single quotes, so that it's not re-expanded.
+
+set -- \
+        "-Dorg.gradle.appname=$APP_BASE_NAME" \
+        -classpath "$CLASSPATH" \
+        org.gradle.wrapper.GradleWrapperMain \
+        "$@"
+
+# Stop when "xargs" is not available.
+if ! command -v xargs >/dev/null 2>&1
+then
+    die "xargs is not available"
+fi
+
+# Use "xargs" to parse quoted args.
+#
+# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
+#
+# In Bash we could simply go:
+#
+#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
+#   set -- "${ARGS[@]}" "$@"
+#
+# but POSIX shell has neither arrays nor command substitution, so instead we
+# post-process each arg (as a line of input to sed) to backslash-escape any
+# character that might be a shell metacharacter, then use eval to reverse
+# that process (while maintaining the separation between arguments), and wrap
+# the whole thing up as a single "set" statement.
+#
+# This will of course break if any of these variables contains a newline or
+# an unmatched quote.
+#
 
-# Collect all arguments for the java command, following the shell quoting and substitution rules
-eval set -- $DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS "\"-Dorg.gradle.appname=$APP_BASE_NAME\"" -classpath "\"$CLASSPATH\"" org.gradle.wrapper.GradleWrapperMain "$APP_ARGS"
+eval "set -- $(
+        printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
+        xargs -n1 |
+        sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
+        tr '\n' ' '
+    )" '"$@"'
 
 exec "$JAVACMD" "$@"
diff --git a/gradlew.bat b/gradlew.bat
old mode 100644
new mode 100755
index ac1b06f..6689b85
--- a/gradlew.bat
+++ b/gradlew.bat
@@ -14,7 +14,7 @@
 @rem limitations under the License.
 @rem
 
-@if "%DEBUG%" == "" @echo off
+@if "%DEBUG%"=="" @echo off
 @rem ##########################################################################
 @rem
 @rem  Gradle startup script for Windows
@@ -25,7 +25,8 @@
 if "%OS%"=="Windows_NT" setlocal
 
 set DIRNAME=%~dp0
-if "%DIRNAME%" == "" set DIRNAME=.
+if "%DIRNAME%"=="" set DIRNAME=.
+@rem This is normally unused
 set APP_BASE_NAME=%~n0
 set APP_HOME=%DIRNAME%
 
@@ -40,7 +41,7 @@ if defined JAVA_HOME goto findJavaFromJavaHome
 
 set JAVA_EXE=java.exe
 %JAVA_EXE% -version >NUL 2>&1
-if "%ERRORLEVEL%" == "0" goto execute
+if %ERRORLEVEL% equ 0 goto execute
 
 echo.
 echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
@@ -75,13 +76,15 @@ set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar
 
 :end
 @rem End local scope for the variables with windows NT shell
-if "%ERRORLEVEL%"=="0" goto mainEnd
+if %ERRORLEVEL% equ 0 goto mainEnd
 
 :fail
 rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
 rem the _cmd.exe /c_ return code!
-if  not "" == "%GRADLE_EXIT_CONSOLE%" exit 1
-exit /b 1
+set EXIT_CODE=%ERRORLEVEL%
+if %EXIT_CODE% equ 0 set EXIT_CODE=1
+if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
+exit /b %EXIT_CODE%
 
 :mainEnd
 if "%OS%"=="Windows_NT" endlocal
diff --git a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
index 3b47a95..5580bd4 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
@@ -15,10 +15,10 @@
  */
 package org.springframework.samples.petclinic.model;
 
-import javax.persistence.GeneratedValue;
-import javax.persistence.GenerationType;
-import javax.persistence.Id;
-import javax.persistence.MappedSuperclass;
+import jakarta.persistence.GeneratedValue;
+import jakarta.persistence.GenerationType;
+import jakarta.persistence.Id;
+import jakarta.persistence.MappedSuperclass;
 import java.io.Serializable;
 
 /**
diff --git a/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java b/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
index 088e52e..7c2ccb2 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.model;
 
-import javax.persistence.Column;
-import javax.persistence.MappedSuperclass;
+import jakarta.persistence.Column;
+import jakarta.persistence.MappedSuperclass;
 
 /**
  * Simple JavaBean domain object adds a name property to <code>BaseEntity</code>. Used as
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 15fabac..e41b6ba 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -15,9 +15,9 @@
  */
 package org.springframework.samples.petclinic.model;
 
-import javax.persistence.Column;
-import javax.persistence.MappedSuperclass;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.Column;
+import jakarta.persistence.MappedSuperclass;
+import jakarta.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/Owner.java b/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
index 7f2ef90..9f5411e 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
@@ -21,14 +21,14 @@ import java.util.HashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.CascadeType;
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.FetchType;
-import javax.persistence.OneToMany;
-import javax.persistence.Table;
-import javax.validation.constraints.Digits;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.CascadeType;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.FetchType;
+import jakarta.persistence.OneToMany;
+import jakarta.persistence.Table;
+import jakarta.validation.constraints.Digits;
+import jakarta.validation.constraints.NotEmpty;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
index 781184a..a43aacf 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
@@ -18,7 +18,7 @@ package org.springframework.samples.petclinic.owner;
 import java.util.List;
 import java.util.Map;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 
 import org.springframework.data.domain.Page;
 import org.springframework.data.domain.PageRequest;
@@ -132,7 +132,7 @@ class OwnerController {
    }
 
    @GetMapping("/owners/{ownerId}/edit")
-   public String initUpdateOwnerForm(@PathVariable("ownerId") int ownerId, Model model) {
+   public String initUpdateOwnerForm(@PathVariable int ownerId, Model model) {
        Owner owner = this.owners.findById(ownerId);
        model.addAttribute(owner);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
@@ -140,7 +140,7 @@ class OwnerController {
 
    @PostMapping("/owners/{ownerId}/edit")
    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result,
-           @PathVariable("ownerId") int ownerId) {
+           @PathVariable int ownerId) {
        if (result.hasErrors()) {
            return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        }
@@ -157,7 +157,7 @@ class OwnerController {
     * @return a ModelMap with the model attributes for the view
     */
    @GetMapping("/owners/{ownerId}")
-   public ModelAndView showOwner(@PathVariable("ownerId") int ownerId) {
+   public ModelAndView showOwner(@PathVariable int ownerId) {
        ModelAndView mav = new ModelAndView("owners/ownerDetails");
        Owner owner = this.owners.findById(ownerId);
        for (Pet pet : owner.getPets()) {
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
index 2b68005..4042030 100755
--- a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
@@ -24,12 +24,12 @@ import java.util.LinkedHashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.JoinColumn;
-import javax.persistence.ManyToOne;
-import javax.persistence.Table;
-import javax.persistence.Transient;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.JoinColumn;
+import jakarta.persistence.ManyToOne;
+import jakarta.persistence.Table;
+import jakarta.persistence.Transient;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index a55e599..2eebf02 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -22,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Collection;
 
 /**
@@ -51,7 +51,7 @@ class PetController {
    }
 
    @ModelAttribute("owner")
-   public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+   public Owner findOwner(@PathVariable int ownerId) {
        return this.owners.findById(ownerId);
    }
 
@@ -90,7 +90,7 @@ class PetController {
    }
 
    @GetMapping("/pets/{petId}/edit")
-   public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+   public String initUpdateForm(@PathVariable int petId, ModelMap model) {
        Pet pet = this.pets.findById(petId);
        model.put("pet", pet);
        return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
index 3cb9fc1..eeea6a7 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
@@ -17,8 +17,8 @@ package org.springframework.samples.petclinic.owner;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 /**
  * @author Juergen Hoeller Can be Cat, Dog, Hamster...
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
index c97107f..e7ece3e 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.format.Formatter;
 import org.springframework.stereotype.Component;
 
@@ -38,7 +37,6 @@ public class PetTypeFormatter implements Formatter<PetType> {
 
    private final PetRepository pets;
 
-   @Autowired
    public PetTypeFormatter(PetRepository pets) {
        this.pets = pets;
    }
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
index 135497f..79535ae 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
@@ -22,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Map;
 
 /**
@@ -57,7 +57,7 @@ class VisitController {
     * @return Pet
     */
    @ModelAttribute("visit")
-   public Visit loadPetWithVisit(@PathVariable("petId") int petId, Map<String, Object> model) {
+   public Visit loadPetWithVisit(@PathVariable int petId, Map<String, Object> model) {
        Pet pet = this.pets.findById(petId);
        pet.setVisitsInternal(this.visits.findByPetId(petId));
        model.put("pet", pet);
@@ -68,7 +68,7 @@ class VisitController {
 
    // Spring MVC calls method loadPetWithVisit(...) before initNewVisitForm is called
    @GetMapping("/owners/*/pets/{petId}/visits/new")
-   public String initNewVisitForm(@PathVariable("petId") int petId, Map<String, Object> model) {
+   public String initNewVisitForm(@PathVariable int petId, Map<String, Object> model) {
        return "pets/createOrUpdateVisitForm";
    }
 
diff --git a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
index 2b28600..8fc8758 100644
--- a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
+++ b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
@@ -31,7 +31,10 @@ class CrashController {
    @GetMapping("/oups")
    public String triggerException() {
        throw new RuntimeException(
-               "Expected: controller used to showcase what " + "happens when an exception is thrown");
+               """
+               Expected: controller used to showcase what \
+               happens when an exception is thrown\
+               """);
    }
 
 }
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
index 3a7347f..21f38c3 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
index 7f61931..92a8570 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
@@ -19,8 +19,8 @@ import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
 import org.springframework.samples.petclinic.model.Person;
 
-import javax.persistence.*;
-import javax.xml.bind.annotation.XmlElement;
+import jakarta.persistence.*;
+import jakarta.xml.bind.annotation.XmlElement;
 import java.util.*;
 
 /**
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
index 961e5c0..f85d30b 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import javax.xml.bind.annotation.XmlElement;
-import javax.xml.bind.annotation.XmlRootElement;
+import jakarta.xml.bind.annotation.XmlElement;
+import jakarta.xml.bind.annotation.XmlRootElement;
 import java.util.ArrayList;
 import java.util.List;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
index 239d605..7644fbe 100755
--- a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
+++ b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
@@ -18,10 +18,10 @@ package org.springframework.samples.petclinic.visit;
 import org.springframework.format.annotation.DateTimeFormat;
 import org.springframework.samples.petclinic.model.BaseEntity;
 
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.Table;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
+import jakarta.validation.constraints.NotEmpty;
 import java.time.LocalDate;
 
 /**
diff --git a/src/main/resources/application-mysql.properties b/src/main/resources/application-mysql.properties
index d388c9e..e23dfa6 100644
--- a/src/main/resources/application-mysql.properties
+++ b/src/main/resources/application-mysql.properties
@@ -4,4 +4,4 @@ spring.datasource.url=${MYSQL_URL:jdbc:mysql://localhost/petclinic}
 spring.datasource.username=${MYSQL_USER:petclinic}
 spring.datasource.password=${MYSQL_PASS:petclinic}
 # SQL is written to be idempotent so this is safe
-spring.datasource.initialization-mode=always
+spring.sql.init.mode=always
diff --git a/src/main/resources/application-postgres.properties b/src/main/resources/application-postgres.properties
index 80bd3e1..60889b4 100644
--- a/src/main/resources/application-postgres.properties
+++ b/src/main/resources/application-postgres.properties
@@ -3,4 +3,4 @@ spring.datasource.url=${POSTGRES_URL:jdbc:postgresql://localhost/petclinic}
 spring.datasource.username=${POSTGRES_USER:petclinic}
 spring.datasource.password=${POSTGRES_PASS:petclinic}
 # SQL is written to be idempotent so this is safe
-spring.datasource.initialization-mode=always
+spring.sql.init.mode=always
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index 4d4784e..6ed9856 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=h2
-spring.datasource.schema=classpath*:db/${database}/schema.sql
-spring.datasource.data=classpath*:db/${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
@@ -22,4 +22,4 @@ logging.level.org.springframework=INFO
 # logging.level.org.springframework.context.annotation=TRACE
 
 # Maximum time static resources should be cached
-spring.resources.cache.cachecontrol.max-age=12h
+spring.web.resources.cache.cachecontrol.max-age=12h
diff --git a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
index 5fee819..7d3453d 100644
--- a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
@@ -20,8 +20,8 @@ import org.junit.jupiter.api.Test;
 import org.springframework.context.i18n.LocaleContextHolder;
 import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
 
-import javax.validation.ConstraintViolation;
-import javax.validation.Validator;
+import jakarta.validation.ConstraintViolation;
+import jakarta.validation.Validator;
 import java.util.Locale;
 import java.util.Set;
 
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index 1c0c01b..9cb2e1f 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -16,7 +16,6 @@
 
 package org.springframework.samples.petclinic.owner;
 
-import org.junit.jupiter.api.Assertions;
 import org.junit.jupiter.api.BeforeEach;
 import org.junit.jupiter.api.Test;
 import org.junit.jupiter.api.extension.ExtendWith;
@@ -30,6 +29,7 @@ import java.util.List;
 import java.util.Locale;
 
 import static org.assertj.core.api.Assertions.assertThat;
+import static org.junit.jupiter.api.Assertions.assertThrows;
 import static org.mockito.BDDMockito.given;
 
 /**
@@ -68,7 +68,7 @@ class PetTypeFormatterTests {
    @Test
    void shouldThrowParseException() throws ParseException {
        given(this.pets.findPetTypes()).willReturn(makePetTypes());
-       Assertions.assertThrows(ParseException.class, () -> {
+       assertThrows(ParseException.class, () -> {
            petTypeFormatter.parse("Fish", Locale.ENGLISH);
        });
    }
```

</details>

If you look at the results, you should see that:

* The `@Autowired` annotation was removed
* JUnit 4 has been replaced with JUnit 5
* `javax` has been replaced with `jakarta`
* The code has been migrated to Java 17, and text blocks are used
* Some best practices are applied (such as adding the `public` test method modifier)

After all of that, unfortunately, the build for this repository is broken as the commit we started from is using `Wro4j` - which has some [slight dependency conflicts](https://github.com/wro4j/wro4j/issues/1129). We've decided not to cover `Wro4j` with recipes for now, as [Spring PetClinic has dropped Wro4J as well](https://github.com/spring-projects/spring-petclinic/pull/868).

### (Optional) Fix static code analysis issues

If you have time, we recommend trying out one of the showcase recipes in OpenRewrite: [common static analysis](https://docs.openrewrite.org/recipes/staticanalysis/commonstaticanalysis). This recipe is composed of 50+ recipes that find and fix common mistakes people make.

To demonstrate this recipe, we'll revert the Spring Boot migration changes to show a variety of errors that need to be fixed.

1. Revert the Spring Boot migration changes:

```bash
cd spring-petclinic
git reset --hard
git checkout 4df621b41ed3013e527d4037d83a6cf756efd784
```

2. We'll change things up a bit by modifying the build file rather than using an `init.gradle` file. Download the `configure-build.patch` file to the root of the Spring PetClinic repository.

{% file src="../../.gitbook/assets/configure-build.patch" %}

<details>

<summary>configure-build.patch</summary>

```diff
diff --git a/build.gradle b/build.gradle
index c517cfc..c040d7d 100644
--- a/build.gradle
+++ b/build.gradle
@@ -1,17 +1,18 @@
-buildscript {
-    dependencies {
-        classpath 'ro.isdc.wro4j.gradle:wro4j-gradle-plugin:1.8.0.Beta4'
-    }
-}
+//buildscript {
+//    dependencies {
+//        classpath 'ro.isdc.wro4j.gradle:wro4j-gradle-plugin:1.8.0.Beta4'
+//    }
+//}

 plugins {
   id 'org.springframework.boot' version '2.4.5'
   id 'io.spring.dependency-management' version '1.0.11.RELEASE'
   id 'java'
+  id 'org.openrewrite.rewrite' version '6.4.3'
 }

 apply plugin: 'java'
-apply plugin: 'wro4j'
+//apply plugin: 'wro4j'

 group = 'org.springframework.samples'
 version = '2.4.5'
@@ -32,29 +33,35 @@ dependencies {
   implementation 'org.springframework.boot:spring-boot-starter-web'
   implementation 'org.springframework.boot:spring-boot-starter-validation'
   implementation 'javax.cache:cache-api'
-  webjarsRuntime 'org.webjars:webjars-locator-core'
-  webjarsRuntime "org.webjars:jquery:${webjarsJqueryVersion}"
-  webjarsRuntime "org.webjars:jquery-ui:${webjarsJqueryUiVersion}"
-  webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
-  webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
+//  webjarsRuntime 'org.webjars:webjars-locator-core'
+//  webjarsRuntime "org.webjars:jquery:${webjarsJqueryVersion}"
+//  webjarsRuntime "org.webjars:jquery-ui:${webjarsJqueryUiVersion}"
+//  webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
+//  webjarsRuntime "org.webjars:bootstrap:${webjarsBootstrapVersion}"
   runtimeOnly 'org.ehcache:ehcache'
   runtimeOnly 'com.h2database:h2'
   runtimeOnly 'mysql:mysql-connector-java'
   developmentOnly 'org.springframework.boot:spring-boot-devtools'
   testImplementation 'org.springframework.boot:spring-boot-starter-test'
+
+  rewrite 'org.openrewrite.recipe:rewrite-static-analysis:latest.release'
+}
+
+rewrite {
+    activeRecipe 'org.openrewrite.staticanalysis.CommonStaticAnalysis'
 }

 test {
   useJUnitPlatform()
 }

-webResources {
-    srcMainDir = layout.projectDirectory.dir('src/main').asFile
-    dstStaticFolder = 'static/resources/css'
-    bundle ('petclinic') {
-        css 'webjars/bootstrap/3.3.6/less/bootstrap.less'
-        css 'less/petclinic.less'
-        preProcessor 'lessCssImport'
-        postProcessor 'less4j'
-    }
-}
+//webResources {
+//    srcMainDir = layout.projectDirectory.dir('src/main').asFile
+//    dstStaticFolder = 'static/resources/css'
+//    bundle ('petclinic') {
+//        css 'webjars/bootstrap/3.3.6/less/bootstrap.less'
+//        css 'less/petclinic.less'
+//        preProcessor 'lessCssImport'
+//        postProcessor 'less4j'
+//    }
+//}
diff --git a/gradle/wrapper/gradle-wrapper.properties b/gradle/wrapper/gradle-wrapper.properties
index 442d913..98debb8 100644
--- a/gradle/wrapper/gradle-wrapper.properties
+++ b/gradle/wrapper/gradle-wrapper.properties
@@ -1,5 +1,5 @@
 distributionBase=GRADLE_USER_HOME
 distributionPath=wrapper/dists
-distributionUrl=https\://services.gradle.org/distributions/gradle-6.8.3-bin.zip
+distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.2-bin.zip
 zipStoreBase=GRADLE_USER_HOME
 zipStorePath=wrapper/dists

```

</details>

3. Apply the patch file to automatically configure the rewrite Gradle plugin. We recommend that you look at the differences to understand how it is configured:

```bash
git apply configure-build.patch
```

You'll notice that we both upgrade Gradle and disable Wro4j, again due to the issue we mentioned above.

4. With the patch applied, you can now run OpenRewrite:

```bash
./gradlew rewriteRun
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
> Task :rewriteRun
Validating active recipes
Scanning sources in project spring-petclinic
All sources parsed, running active recipes: org.openrewrite.staticanalysis.CommonStaticAnalysis
Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
    org.openrewrite.staticanalysis.CommonStaticAnalysis
        org.openrewrite.staticanalysis.UseDiamondOperator
Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
    org.openrewrite.staticanalysis.CommonStaticAnalysis
        org.openrewrite.staticanalysis.SimplifyBooleanReturn
        org.openrewrite.staticanalysis.UseDiamondOperator
Please review and commit the results.
```

</details>

5. Check out all of the changes that were made by running:

```bash
git checkout build.gradle
git checkout gradle/wrapper/gradle-wrapper.properties
git diff
```

While this recipe only shows limited results for the Spring PetClinic repository, at scale, this immediately resolves a lot of technical debt.
