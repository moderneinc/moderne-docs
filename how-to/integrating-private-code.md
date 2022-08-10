# Integrating private code with Moderne SaaS

Having your build publish AST files to an artifact repository under your control is part of setting up the Moderne SaaS in your company's environment. This guide will show you how to set up your Maven and Gradle builds accordingly.

{% hint style="info" %}
Connecting your private code to the Moderne SaaS is the only reason to use these plugins instead of the [OpenRewrite plugins](https://docs.openrewrite.org/getting-started/getting-started). If you are not connecting private code to the Moderne SaaS you should use the OpenRewrite plugins instead.
{% endhint %}

## Step 1: Apply moderne-maven-plugin or moderne-gradle-plugin

In the pom.xml or build.gradle, add this entry to the `plugins` section to apply the moderne plugin to the project.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>io.moderne</groupId>
        <artifactId>moderne-maven-plugin</artifactId>
        <version>0.18.3</version>
        <configuration>
          <!-- Supports all of the same functionality as the OpenRewrite plugin -->
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.CommonStaticAnalysis</recipe>
          </activeRecipes>
        </configuration>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>ast</goal></goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("io.moderne.rewrite") version("0.18.1")
}

// OpenRewrite and recipe modules are published to Maven Central
// This repository, or a mirror, must be available
repositories {
    mavenCentral()
}

rewrite {
    // Supports all of the same functionality as the OpenRewrite plugin
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="success" %}
The Moderne build plugins offer all the functionality and configuration options of their OpenRewrite counterparts. If you were previously applying the OpenRewrite plugins, you can remove those declarations from your build files.
{% endhint %}

{% hint style="warning" %}
If you're a Maven user used to command line invocations such as `mvn rewrite:dryRun` or `mvn rewrite:run`, note that these invocations become `mvn moderne:dryRun` and `mvn moderne:run`. If you wish to continue invoking these commands with the "rewrite" prefix, such as to avoid having to alter CI workflows invoking `mvn rewrite:dryRun`, you can apply both plugins without conflict.

Gradle users can continue invoking `gradlew rewriteDryRun` and `gradlew rewriteRun` as the names of those tasks remain the same in the moderne-gradle-plugin.
{% endhint %}

## Step 2: Configure Publishing

The Moderne SaaS requires that the AST artifacts produced by the build plugin be published to your artifact repository. This may require you to publish AST artifacts from projects that do not currently publish anything.

{% tabs %}
{% tab title="Maven" %}
Typically, no additional publishing configuration is required for Maven builds.
{% endtab %}

{% tab title="Gradle" %}
Each project the plugin is applied to will have a `Jar` task named `moderneJar` which produces the AST jar in the project's build folder. This is the file that needs to be published to your artifact repository to enable Moderne SaaS integration.

{% code title="single project build" %}
```groovy
plugins {
    id("io.moderne.rewrite") version("0.8.1")
    id("maven-publish")
}

publishing {
    repositories {
        // your repository configuration
    }
    publishing {
        publications {
            create("moderne", MavenPublication.class) {
                artifact(tasks.named("moderneJar"))
            }
        }
    }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Step 3: Build and publish the next version of your project

Now whenever your project is published there will be a file with a "jar" extension and an "ast" classifier published alongside any other publications. So for a project named "example" publishing version "1.0", you can expect to see a file named `example-1.0-ast.jar` alongside the normal `example-1.0.jar`.

## See Also

* [OpenRewrite Maven Plugin Configuration](https://docs.openrewrite.org/reference/maven-plugin-configuration)
* [OpenRewrite Gradle Plugin Configuration](https://docs.openrewrite.org/reference/gradle-plugin-configuration)
