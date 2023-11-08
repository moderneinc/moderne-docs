# Maven plugin exercise

In this exercise, you will migrate an old version of the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic/) (that uses Spring Boot 2) to Spring Boot 3 using Maven.

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

You will need to switch to Java 8 in order to build the Spring PetClinic repository. You might need to download Java 8 and update your `JAVA_HOME` environment variable. If you are on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```sh
sdk install java 8.0.392-zulu
sdk use java 8.0.392-zulu
```

{% hint style="info" %}
If you aren't on a Unix-based system or you don't want to install SDKMan, you'll need to install Java 8 and run something like:

```bash
export JAVA_HOME=REPLACE_WITH_LOCATION_OF_JAVA_8 
```
{% endhint %}

1. Clone the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic):

```sh
git clone https://github.com/spring-projects/spring-petclinic
```

2. Check out the last Spring Boot 2.0 commit:

```bash
cd spring-petclinic
git checkout b527de52f5fd19f9fe550372c017d145a3b2a809
```

3. Make sure it runs on your machine:

```bash
./mvnw verify -DskipTests
```

### Migrate to SpringBoot 3 with OpenRewrite

For Maven projects, you can choose to update the `pom.xml` to add the OpenRewrite dependencies, or you can run a more complex command in the command line that includes all of the information needed to run the recipe.

#### Option 1: Update the pom.xml

Modify the `pom.xml` file and add the following information:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project>
    ...
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>5.10.0</version>
                <configuration>
                    <activeRecipes>
                        <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1</recipe>
                    </activeRecipes>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>org.openrewrite.recipe</groupId>
                        <artifactId>rewrite-spring</artifactId>
                        <version>5.0.12</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```

Once you've done that, you can run the [Migrate to Spring Boot 3.1 recipe](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot\_3\_1) by running the following command:

```bash
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run
```

{% hint style="info" %}
Running OpenRewrite [can take a while](../../introduction.md) as we analyze the project and run recipes to make code changes. You should see results within a couple of minutes, depending on the size of your project and your project.
{% endhint %}

### Option 2: Use the command line

You can run a recipe without editing the `pom.xml` file by including all of the details in the command line. Below is the command for running the `UpgradeSpringBoot_3_1` recipe:

```bash
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1 -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
[INFO] Scanning for projects...
Downloading: https://repo.maven.apache.org/maven2/org/openrewrite/maven/rewrite-maven-plugin/maven-metadata.xml
Downloaded: https://repo.maven.apache.org/maven2/org/openrewrite/maven/rewrite-maven-plugin/maven-metadata.xml (5 KB at 19.1 KB/sec)
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building petclinic 2.0.0.BUILD-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] >>> rewrite-maven-plugin:5.5.0:run (default-cli) > process-test-classes @ spring-petclinic >>>
[INFO] 
[INFO] --- git-commit-id-plugin:2.2.3:revision (default) @ spring-petclinic ---
[INFO] dotGitDirectory /tmp/cli/spring-petclinic/.git
[INFO] git.build.user.name Tim te Beek
[INFO] git.build.user.email tim@moderne.io
[INFO] git.branch b527de52f5fd19f9fe550372c017d145a3b2a809
[INFO] --always = true
[INFO] --dirty = -dirty
[INFO] --abbrev = 7
[INFO] Tag refs [[Ref[refs/tags/1.5.x=c36452a2c34443ae26b4ecbba4f149906af14717]]]
[INFO] Created map: [{}]
[INFO] HEAD is [b527de52f5fd19f9fe550372c017d145a3b2a809]
[INFO] git.commit.id.describe b527de5
[INFO] git.commit.id b527de52f5fd19f9fe550372c017d145a3b2a809
[INFO] git.commit.id.abbrev b527de5
[INFO] git.dirty false
[INFO] git.commit.user.name Stephane Nicoll
[INFO] git.commit.user.email snicoll@pivotal.io
[INFO] git.commit.message.full Upgrade to Spring Boot 2.0.0.RELEASE
[INFO] git.commit.message.short Upgrade to Spring Boot 2.0.0.RELEASE
[INFO] git.commit.time 2018-03-14T21:32:27+0100
[INFO] git.remote.origin.url https://github.com/spring-projects/spring-petclinic
[INFO] git.tags 
[INFO] Tag refs [[Ref[refs/tags/1.5.x=c36452a2c34443ae26b4ecbba4f149906af14717]]]
[INFO] Including lightweight tag [refs/tags/1.5.x]
[INFO] key [AnyObjectId[c36452a2c34443ae26b4ecbba4f149906af14717]], tags => [[DatedRevTag{id=c36452a2c34443ae26b4ecbba4f149906af14717, tagName='refs/tags/1.5.x', date=September 1, 0023 12:48:47 PM CET}]] 
[INFO] git.closest.tag.name 1.5.x
[INFO] Tag refs [[Ref[refs/tags/1.5.x=c36452a2c34443ae26b4ecbba4f149906af14717]]]
[INFO] Including lightweight tag [refs/tags/1.5.x]
[INFO] key [AnyObjectId[c36452a2c34443ae26b4ecbba4f149906af14717]], tags => [[DatedRevTag{id=c36452a2c34443ae26b4ecbba4f149906af14717, tagName='refs/tags/1.5.x', date=September 1, 0023 12:48:47 PM CET}]] 
[INFO] git.closest.tag.commit.count 15
[INFO] git.build.time 2023-09-01T12:48:47+0200
[INFO] git.build.version 2.0.0.BUILD-SNAPSHOT
[INFO] git.build.host tim-xps-15-9520
[INFO] git.commit.id.describe-short b527de5
[INFO] found property git.build.user.email
[INFO] found property git.build.host
[INFO] found property git.dirty
[INFO] found property git.remote.origin.url
[INFO] found property git.closest.tag.name
[INFO] found property git.commit.id.describe-short
[INFO] found property git.commit.user.email
[INFO] found property git.commit.time
[INFO] found property git.commit.message.full
[INFO] found property git.build.version
[INFO] found property git.commit.message.short
[INFO] found property git.commit.id.abbrev
[INFO] found property git.branch
[INFO] found property git.build.user.name
[INFO] found property git.closest.tag.commit.count
[INFO] found property git.commit.id.describe
[INFO] found property git.commit.id
[INFO] found property git.tags
[INFO] found property git.build.time
[INFO] found property git.commit.user.name
[INFO] Reading existing properties file [/tmp/cli/spring-petclinic/target/classes/git.properties] (for module petclinic)...
[INFO] Properties file [/tmp/cli/spring-petclinic/target/classes/git.properties] is up-to-date (for module petclinic)...
[INFO] 
[INFO] --- spring-boot-maven-plugin:2.0.0.RELEASE:build-info (default) @ spring-petclinic ---
[INFO] 
[INFO] --- wro4j-maven-plugin:1.8.0:run (default) @ spring-petclinic ---
Downloading: https://repo.maven.apache.org/maven2/me/n4u/sass/sass-gems/maven-metadata.xml
Downloading: https://oss.sonatype.org/content/repositories/snapshots/me/n4u/sass/sass-gems/maven-metadata.xml
Downloaded: https://repo.maven.apache.org/maven2/me/n4u/sass/sass-gems/maven-metadata.xml (518 B at 15.3 KB/sec)
[INFO] /tmp/cli/spring-petclinic/src/main/less
[INFO] Executing the mojo: 
[INFO] Wro4j Model path: /tmp/cli/spring-petclinic/src/main/wro/wro.xml
[INFO] targetGroups: null
[INFO] minimize: true
[INFO] ignoreMissingResources: null
[INFO] parallelProcessing: false
[INFO] buildDirectory: /tmp/cli/spring-petclinic/target
[INFO] destinationFolder: /tmp/cli/spring-petclinic/target
[INFO] cssDestinationFolder: /tmp/cli/spring-petclinic/target/classes/static/resources/css
[INFO] The following groups will be processed: [petclinic]
[INFO] folder: /tmp/cli/spring-petclinic/target/classes/static/resources/css
[INFO] processing group: petclinic.css
[WARNING] Less warnings are:
[WARNING] 10:1 Cannot link source map. Css result location is not know and could not be deduced from input less source..
[INFO] file size: petclinic.css -> 152399 bytes
[INFO] /tmp/cli/spring-petclinic/target/classes/static/resources/css/petclinic.css (152399 bytes)
[INFO] folder: /tmp/cli/spring-petclinic/target
[INFO] processing group: petclinic.js
[INFO] 
[INFO] --- maven-resources-plugin:3.0.1:resources (default-resources) @ spring-petclinic ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 2 resources
[INFO] Copying 35 resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.7.0:compile (default-compile) @ spring-petclinic ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 25 source files to /tmp/cli/spring-petclinic/target/classes
[INFO] 
[INFO] --- maven-resources-plugin:3.0.1:testResources (default-testResources) @ spring-petclinic ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /tmp/cli/spring-petclinic/src/test/resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.7.0:testCompile (default-testCompile) @ spring-petclinic ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 11 source files to /tmp/cli/spring-petclinic/target/test-classes
[INFO] 
[INFO] <<< rewrite-maven-plugin:5.5.0:run (default-cli) < process-test-classes @ spring-petclinic <<<
[INFO] 
[INFO] --- rewrite-maven-plugin:5.5.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1]
[INFO] Using active styles(s) []
Downloading: https://dl.bintray.com/rabbitmq/maven-milestones/org/openrewrite/recipe/rewrite-spring/maven-metadata.xml
Downloading: https://repo.spring.io/milestone/org/openrewrite/recipe/rewrite-spring/maven-metadata.xml
Downloading: https://repo.maven.apache.org/maven2/org/openrewrite/recipe/rewrite-spring/maven-metadata.xml
Downloading: https://repo.spring.io/snapshot/org/openrewrite/recipe/rewrite-spring/maven-metadata.xml
Downloaded: https://repo.maven.apache.org/maven2/org/openrewrite/recipe/rewrite-spring/maven-metadata.xml (3 KB at 64.5 KB/sec)
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing source files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.0.x}
[WARNING]                                             org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
[WARNING]                                                 org.openrewrite.java.dependencies.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.*}
[WARNING]                                                     org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.*}
[WARNING]                                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                                 org.openrewrite.java.dependencies.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.3.x, onlyIfUsing=javax.validation.constraints.*, acceptTransitive=true}
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.3.x, onlyIfUsing=javax.validation.constraints.*, acceptTransitive=true}
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                                     org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                             org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                             org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.6.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.7.x, retainVersions=[mysql:mysql-connector-java]}
[WARNING]                 org.openrewrite.java.dependencies.ChangeDependency: {oldGroupId=mysql, oldArtifactId=mysql-connector-java, newGroupId=com.mysql, newArtifactId=mysql-connector-j, newVersion=8.0.x}
[WARNING]                     org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId: {oldGroupId=mysql, oldArtifactId=mysql-connector-java, newGroupId=com.mysql, newArtifactId=mysql-connector-j, newVersion=8.0.x}
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
[WARNING]                         org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}
[WARNING]                     org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
[WARNING]                         org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                     org.openrewrite.java.migrate.javax.AddJaxbDependencies
[WARNING]                         org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=glassfish}
[WARNING]                             org.openrewrite.java.migrate.javax.AddJaxbRuntime$AddJaxbRuntimeMaven
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=3.0.x, retainVersions=[org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.dependencies.RemoveDependency: {groupId=javax.validation, artifactId=validation-api}
[WARNING]                         org.openrewrite.maven.RemoveDependency: {groupId=javax.validation, artifactId=validation-api}
[WARNING]                 org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta
[WARNING]                     org.openrewrite.maven.ChangeDependencyClassifier: {groupId=org.ehcache, artifactId=ehcache, newClassifier=jakarta}
[WARNING]         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=3.1.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Specialty.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Vet.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.xml.bind, newPackageName=jakarta.xml.bind, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]                                                 org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/Vets.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.xml.bind, newPackageName=jakarta.xml.bind, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]                                                 org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING]                                                 org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetType.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]                                                 org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING]                                                 org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]                                                 org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Pet.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]                                             org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]                                                 org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING]                                                 org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.persistence, newPackageName=jakarta.persistence, recursive=true}
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CrashController.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]                 org.openrewrite.java.migrate.lang.UseTextBlocks: {convertStringsWithoutNewlines=true}
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
[WARNING]                     org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                     org.openrewrite.java.spring.ChangeSpringPropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                     org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING]             org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
[WARNING]                 org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
[WARNING]                     org.openrewrite.java.ChangePackage: {oldPackageName=javax.validation, newPackageName=jakarta.validation, recursive=true}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
[WARNING]         org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                             org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                                 org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                                     org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                                         org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                                     org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                                     org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                                 org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING]                                 org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
[WARNING]                                     org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                                         org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
[WARNING]             org.openrewrite.java.migrate.UpgradeToJava17
[WARNING]                 org.openrewrite.java.migrate.Java8toJava11
[WARNING]                     org.openrewrite.java.migrate.JavaVersion11
[WARNING]                         org.openrewrite.java.migrate.UpgradeJavaVersion: {version=11}
[WARNING]                 org.openrewrite.java.migrate.JavaVersion17
[WARNING]                     org.openrewrite.java.migrate.UpgradeJavaVersion: {version=17}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:14 min
[INFO] Finished at: 2023-09-01T12:50:00+02:00
[INFO] Final Memory: 194M/3278M
[INFO] ------------------------------------------------------------------------
```

</details>

Notice how each change is listed in the output, along with the `org.openrewrite` recipe that made the change.

### Explore the results

You can compare the changes made through OpenRewrite in your favorite IDE, or by running:

```bash
git diff
```

<details>

<summary>You should see output similar to the following.</summary>

```diff
diff --git a/pom.xml b/pom.xml
index 0b8f9c2..738ff94 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,14 +10,14 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>2.0.0.RELEASE</version>
+    <version>3.1.5</version>
   </parent>
   <name>petclinic</name>
 
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -53,6 +53,10 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -66,8 +70,8 @@
       <scope>runtime</scope>
     </dependency>
     <dependency>
-      <groupId>mysql</groupId>
-      <artifactId>mysql-connector-java</artifactId>
+      <groupId>com.mysql</groupId>
+      <artifactId>mysql-connector-j</artifactId>
       <scope>runtime</scope>
     </dependency>
 
@@ -79,6 +83,7 @@
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
+      <classifier>jakarta</classifier>
     </dependency>
 
     <!-- webjars -->
@@ -133,22 +138,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -204,17 +193,6 @@
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
 
diff --git a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
index 86cc210..d45134c 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
@@ -17,10 +17,10 @@ package org.springframework.samples.petclinic.model;
 
 import java.io.Serializable;
 
-import javax.persistence.GeneratedValue;
-import javax.persistence.GenerationType;
-import javax.persistence.Id;
-import javax.persistence.MappedSuperclass;
+import jakarta.persistence.GeneratedValue;
+import jakarta.persistence.GenerationType;
+import jakarta.persistence.Id;
+import jakarta.persistence.MappedSuperclass;
 
 /**
  * Simple JavaBean domain object with an id property. Used as a base class for objects
diff --git a/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java b/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
index d66c97a..83bb717 100644
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
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 5d23523..7294998 100644
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
index 89aad2c..063c750 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
@@ -21,13 +21,13 @@ import java.util.HashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.CascadeType;
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.OneToMany;
-import javax.persistence.Table;
-import javax.validation.constraints.Digits;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.CascadeType;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.OneToMany;
+import jakarta.persistence.Table;
+import jakarta.validation.constraints.Digits;
+import jakarta.validation.constraints.NotEmpty;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
index d914ed7..a25870b 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.Model;
 import org.springframework.validation.BindingResult;
@@ -26,7 +25,7 @@ import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.servlet.ModelAndView;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Collection;
 import java.util.Map;
 
@@ -43,7 +42,6 @@ class OwnerController {
     private final OwnerRepository owners;
 
 
-    @Autowired
     public OwnerController(OwnerRepository clinicService) {
         this.owners = clinicService;
     }
@@ -102,14 +100,14 @@ class OwnerController {
     }
 
     @GetMapping("/owners/{ownerId}/edit")
-    public String initUpdateOwnerForm(@PathVariable("ownerId") int ownerId, Model model) {
+    public String initUpdateOwnerForm(@PathVariable int ownerId, Model model) {
         Owner owner = this.owners.findById(ownerId);
         model.addAttribute(owner);
         return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
     }
 
     @PostMapping("/owners/{ownerId}/edit")
-    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable("ownerId") int ownerId) {
+    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable int ownerId) {
         if (result.hasErrors()) {
             return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
         } else {
@@ -126,7 +124,7 @@ class OwnerController {
      * @return a ModelMap with the model attributes for the view
      */
     @GetMapping("/owners/{ownerId}")
-    public ModelAndView showOwner(@PathVariable("ownerId") int ownerId) {
+    public ModelAndView showOwner(@PathVariable int ownerId) {
         ModelAndView mav = new ModelAndView("owners/ownerDetails");
         mav.addObject(this.owners.findById(ownerId));
         return mav;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
index 5e226a1..106934b 100755
--- a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
@@ -23,16 +23,16 @@ import java.util.LinkedHashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.CascadeType;
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.FetchType;
-import javax.persistence.JoinColumn;
-import javax.persistence.ManyToOne;
-import javax.persistence.OneToMany;
-import javax.persistence.Table;
-import javax.persistence.Temporal;
-import javax.persistence.TemporalType;
+import jakarta.persistence.CascadeType;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.FetchType;
+import jakarta.persistence.JoinColumn;
+import jakarta.persistence.ManyToOne;
+import jakarta.persistence.OneToMany;
+import jakarta.persistence.Table;
+import jakarta.persistence.Temporal;
+import jakarta.persistence.TemporalType;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index 9c52e03..8694be1 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.ModelMap;
 import org.springframework.util.StringUtils;
@@ -23,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Collection;
 
 /**
@@ -39,7 +38,6 @@ class PetController {
     private final PetRepository pets;
     private final OwnerRepository owners;
 
-    @Autowired
     public PetController(PetRepository pets, OwnerRepository owners) {
         this.pets = pets;
         this.owners = owners;
@@ -51,7 +49,7 @@ class PetController {
     }
 
     @ModelAttribute("owner")
-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+    public Owner findOwner(@PathVariable int ownerId) {
         return this.owners.findById(ownerId);
     }
 
@@ -89,7 +87,7 @@ class PetController {
     }
 
     @GetMapping("/pets/{petId}/edit")
-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
index ac827b3..e6a7271 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
index 78451ca..8ad364f 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
@@ -20,7 +20,6 @@ import java.text.ParseException;
 import java.util.Collection;
 import java.util.Locale;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.format.Formatter;
 import org.springframework.stereotype.Component;
 
@@ -41,7 +40,6 @@ public class PetTypeFormatter implements Formatter<PetType> {
     private final PetRepository pets;
 
 
-    @Autowired
     public PetTypeFormatter(PetRepository pets) {
         this.pets = pets;
     }
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
index d7afed1..c7e6109 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.samples.petclinic.visit.Visit;
 import org.springframework.samples.petclinic.visit.VisitRepository;
 import org.springframework.stereotype.Controller;
@@ -23,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Map;
 
 /**
@@ -40,7 +39,6 @@ class VisitController {
     private final PetRepository pets;
 
 
-    @Autowired
     public VisitController(VisitRepository visits, PetRepository pets) {
         this.visits = visits;
         this.pets = pets;
@@ -62,7 +60,7 @@ class VisitController {
      * @return Pet
      */
     @ModelAttribute("visit")
-    public Visit loadPetWithVisit(@PathVariable("petId") int petId, Map<String, Object> model) {
+    public Visit loadPetWithVisit(@PathVariable int petId, Map<String, Object> model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         Visit visit = new Visit();
@@ -72,7 +70,7 @@ class VisitController {
 
     // Spring MVC calls method loadPetWithVisit(...) before initNewVisitForm is called
     @GetMapping("/owners/*/pets/{petId}/visits/new")
-    public String initNewVisitForm(@PathVariable("petId") int petId, Map<String, Object> model) {
+    public String initNewVisitForm(@PathVariable int petId, Map<String, Object> model) {
         return "pets/createOrUpdateVisitForm";
     }
 
diff --git a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
index 2f5e7a3..29f4fd5 100644
--- a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
+++ b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
@@ -30,8 +30,10 @@ class CrashController {
 
     @GetMapping("/oups")
     public String triggerException() {
-        throw new RuntimeException("Expected: controller used to showcase what "
-                + "happens when an exception is thrown");
+        throw new RuntimeException("""
+                Expected: controller used to showcase what \
+                happens when an exception is thrown\
+                """);
     }
 
 }
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
index 5691c24..7727e21 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
@@ -17,8 +17,8 @@ package org.springframework.samples.petclinic.vet;
 
 import java.io.Serializable;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
index 43aecc4..d2841dd 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
@@ -21,13 +21,13 @@ import java.util.HashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.Entity;
-import javax.persistence.FetchType;
-import javax.persistence.JoinColumn;
-import javax.persistence.JoinTable;
-import javax.persistence.ManyToMany;
-import javax.persistence.Table;
-import javax.xml.bind.annotation.XmlElement;
+import jakarta.persistence.Entity;
+import jakarta.persistence.FetchType;
+import jakarta.persistence.JoinColumn;
+import jakarta.persistence.JoinTable;
+import jakarta.persistence.ManyToMany;
+import jakarta.persistence.Table;
+import jakarta.xml.bind.annotation.XmlElement;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
index 7ce8374..ddaa364 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.ResponseBody;
@@ -33,7 +32,6 @@ class VetController {
 
     private final VetRepository vets;
 
-    @Autowired
     public VetController(VetRepository clinicService) {
         this.vets = clinicService;
     }
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
index f5b24c3..c90b652 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
@@ -18,8 +18,8 @@ package org.springframework.samples.petclinic.vet;
 import java.util.ArrayList;
 import java.util.List;
 
-import javax.xml.bind.annotation.XmlElement;
-import javax.xml.bind.annotation.XmlRootElement;
+import jakarta.xml.bind.annotation.XmlElement;
+import jakarta.xml.bind.annotation.XmlRootElement;
 
 /**
  * Simple domain object representing a list of veterinarians. Mostly here to be used for the 'vets' {@link
diff --git a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
index ce10d7b..2a5e854 100755
--- a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
+++ b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
@@ -17,12 +17,12 @@ package org.springframework.samples.petclinic.visit;
 
 import java.util.Date;
 
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.Table;
-import javax.persistence.Temporal;
-import javax.persistence.TemporalType;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
+import jakarta.persistence.Temporal;
+import jakarta.persistence.TemporalType;
+import jakarta.validation.constraints.NotEmpty;
 
 import org.springframework.format.annotation.DateTimeFormat;
 import org.springframework.samples.petclinic.model.BaseEntity;
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index c8d5a5c..0616806 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/${database}/schema.sql
-spring.datasource.data=classpath*:db/${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
diff --git a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
index 7da0d3d..cfafd31 100644
--- a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
@@ -3,8 +3,8 @@ package org.springframework.samples.petclinic.model;
 import java.util.Locale;
 import java.util.Set;
 
-import javax.validation.ConstraintViolation;
-import javax.validation.Validator;
+import jakarta.validation.ConstraintViolation;
+import jakarta.validation.Validator;
 
 import org.junit.Test;
 
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
index 7fccb3b..7b2edef 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
@@ -12,14 +12,12 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import org.assertj.core.util.Lists;
 import org.junit.Before;
 import org.junit.Test;
-import org.junit.runner.RunWith;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
 import org.springframework.samples.petclinic.owner.Owner;
 import org.springframework.samples.petclinic.owner.OwnerController;
 import org.springframework.samples.petclinic.owner.OwnerRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -27,7 +25,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(OwnerController.class)
 public class OwnerControllerTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
index f95d7c8..19ea9c1 100755
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
@@ -10,7 +10,6 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import org.assertj.core.util.Lists;
 import org.junit.Before;
 import org.junit.Test;
-import org.junit.runner.RunWith;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -23,7 +22,6 @@ import org.springframework.samples.petclinic.owner.PetController;
 import org.springframework.samples.petclinic.owner.PetRepository;
 import org.springframework.samples.petclinic.owner.PetType;
 import org.springframework.samples.petclinic.owner.PetTypeFormatter;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -31,7 +29,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(value = PetController.class,
     includeFilters = @ComponentScan.Filter(
                             value = PetTypeFormatter.class,
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index 4e8e36c..387f918 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -7,20 +7,20 @@ import java.util.List;
 import java.util.Locale;
 
 import org.junit.Before;
+
+import static org.junit.jupiter.api.Assertions.assertEquals;
 import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.extension.ExtendWith;
 import org.mockito.Mock;
 import org.mockito.Mockito;
-import org.mockito.junit.MockitoJUnitRunner;
-
-import static org.junit.Assert.assertEquals;
+import org.mockito.junit.jupiter.MockitoExtension;
 
 /**
  * Test class for {@link PetTypeFormatter}
  *
  * @author Colin But
  */
-@RunWith(MockitoJUnitRunner.class)
+@ExtendWith(MockitoExtension.class)
 public class PetTypeFormatterTests {
 
     @Mock
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
index 08d6136..f77c9a7 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
@@ -9,7 +9,6 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 
 import org.junit.Before;
 import org.junit.Test;
-import org.junit.runner.RunWith;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -17,7 +16,6 @@ import org.springframework.samples.petclinic.owner.Pet;
 import org.springframework.samples.petclinic.owner.PetRepository;
 import org.springframework.samples.petclinic.owner.VisitController;
 import org.springframework.samples.petclinic.visit.VisitRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -25,7 +23,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(VisitController.class)
 public class VisitControllerTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java b/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
index 7ed5bf8..276ed65 100644
--- a/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
@@ -6,7 +6,6 @@ import java.util.Collection;
 import java.util.Date;
 
 import org.junit.Test;
-import org.junit.runner.RunWith;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
 import org.springframework.context.annotation.ComponentScan;
@@ -20,7 +19,6 @@ import org.springframework.samples.petclinic.vet.VetRepository;
 import org.springframework.samples.petclinic.visit.Visit;
 import org.springframework.samples.petclinic.visit.VisitRepository;
 import org.springframework.stereotype.Service;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.transaction.annotation.Transactional;
 
 /**
@@ -44,7 +42,6 @@ import org.springframework.transaction.annotation.Transactional;
  * @author Dave Syer
  */
 
-@RunWith(SpringRunner.class)
 @DataJpaTest(includeFilters = @ComponentScan.Filter(Service.class))
 public class ClinicServiceTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java b/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
index 3f108bf..27701e9 100644
--- a/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
@@ -2,11 +2,9 @@ package org.springframework.samples.petclinic.system;
 
 import org.junit.Ignore;
 import org.junit.Test;
-import org.junit.runner.RunWith;
 
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
@@ -20,8 +18,6 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
-// Waiting https://github.com/spring-projects/spring-boot/issues/5574
 @Ignore
 @WebMvcTest(controllers = CrashController.class)
 public class CrashControllerTests {
diff --git a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
index 9636e36..026635f 100644
--- a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
@@ -1,14 +1,11 @@
 package org.springframework.samples.petclinic.system;
 
 import org.junit.Test;
-import org.junit.runner.RunWith;
 
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.context.SpringBootTest;
 import org.springframework.samples.petclinic.vet.VetRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 
-@RunWith(SpringRunner.class)
 @SpringBootTest
 public class ProductionConfigurationTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
index ce6adf8..0464dcb 100644
--- a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
@@ -12,7 +12,6 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import org.assertj.core.util.Lists;
 import org.junit.Before;
 import org.junit.Test;
-import org.junit.runner.RunWith;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -21,14 +20,12 @@ import org.springframework.samples.petclinic.vet.Specialty;
 import org.springframework.samples.petclinic.vet.Vet;
 import org.springframework.samples.petclinic.vet.VetController;
 import org.springframework.samples.petclinic.vet.VetRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 import org.springframework.test.web.servlet.ResultActions;
 
 /**
  * Test class for the {@link VetController}
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(VetController.class)
 public class VetControllerTests {
```

</details>

If you look at the results, you should see that:

* The `@Autowired` annotation was removed
* JUnit 4 has been replaced with JUnit 5
* `javax` has been replaced with `jakarta`
* The code has been migrated to Java 17 and text blocks are used
* Some best practices are applied (such as adding the `public` test method modifier)

After all of that, unfortunately, the build for this repository is broken as the commit we started from is using `Wro4j` - which has some [slight dependency conflicts](https://github.com/wro4j/wro4j/issues/1129). We've decided not to cover `Wro4j` with recipes for now, as [Spring PetClinic has dropped Wro4J as well](https://github.com/spring-projects/spring-petclinic/pull/868).

### (Optional) Fix static code analysis issues

If you have time, we recommend trying out one of the showcase recipes in OpenRewrite: [common static analysis](https://docs.openrewrite.org/recipes/staticanalysis/commonstaticanalysis). This recipe is composed of 50+ recipes that find and fix common mistakes people make.

To demonstrate this recipe, we'll use a different Maven repository that has a variety of errors that need to be fixed.

1. Switch to Java 17:

```bash
 sdk install java 17.0.9-tem
 sdk use java 17.0.9-tem
```

2. Clone the [Spring WS](https://github.com/spring-projects/spring-ws) repository:

```bash
git clone https://github.com/spring-projects/spring-ws
```

3. Test that you can build it:

```bash
cd spring-ws
./mvnw verify -DskipTests
```

4. Run the common static analysis recipe:

```bash
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonStaticAnalysis
```

5. Check out all of the changes that were made by running:

```bash
git diff
```

6. Verify the project after the changes were made:

```bash
./mvnw verify
```

You can probably imagine that this recipe resolves a lot of technical debt when run at scale throughout an organization.
