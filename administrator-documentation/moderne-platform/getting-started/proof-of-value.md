# Proof of value process

With Moderne, you can automate maintenance processes such as framework migrations, security vulnerability fixes, and code quality standardization. Code refactoring work that used to take months and teams of developers can be done in minutes, closing vulnerabilities and saving millions of dollars in software maintenance costs while giving developers substantially more time to focus on delivering business value.

We are often asked how to introduce the power of Moderne to an organization in order to build confidence in the tooling and facilitate a successful paradigm shift for their teams. To start, it's best to focus on lower risk, lower effort, and lower complexity tasks for developers. This might include tasks such as cleaning up code quality issues or addressing isolated CVEs. Once success is shown in these areas, you can build up to more substantial updates, such as minor framework updates or patches, and eventually to more complex code migration work.

The idea is for all of these types of updates to become a continuous process for your organization. Gradually phasing them in over time helps to achieve both technological and cultural change, which ultimately drives adoption.

![](../../../.gitbook/assets/pov-example.png)

## Proof of value (POV) Steps

1. To begin the process, please fill out [this questionnaire](https://lq7oxv9ggnm.typeform.com/to/r1ib8ecu?typeform-source=www.google.com) so that we can provision the appropriate services for your organization.
2. Once you've filled out the form, we will provision an isolated Moderne platform in the cloud provider and region of your choice. Deployment is fully automated and takes approximately one hour. Please let us know which cloud provider and region you prefer.
3. Please follow the instructions in our [on-premise agent configuration doc](../how-to-guides/agent-configuration/agent-configuration.md). The agent is a single docker image or JAR that can run on a Virtual Machine, Kubernetes, or Cloud Foundry. It controls the encryption key and connects to on-prem systems such as your source code manager (SCM) and artifact repository. To ensure the agent functions correctly, you will need to create a read-only service account for your artifact repository and your SCM. This will allow developers to authenticate with your SCM for access control and commits/PRs (if commits are enabled for your tenant). The installation process typically takes less than an hour once the service accounts and SCM configurations are in place.
4. To enable SSO for Moderne, you will need to connect to your Identity Provider (IdP). This is done in a 30-minute meeting with Moderne to exchange metadata. If requested, a username/password can also be used during the POV process instead of SSO.
5. Next, you'll need to [set up the ingestion pipeline](../how-to-guides/integrating-private-code.md). This pipeline will build and publish LST artifacts for the repositories you specify to your artifact repository. From there, the Moderne agent will find these LST artifacts, encrypt them, and ship them to the Moderne cloud.
   * The more repositories you add and the more diverse they are, the easier it is to demonstrate value. Customers typically start with 50-100 repositories.
   * No changes are required to the repositories themselves (such as installing build plugins).
6. With all of that done, you're now ready to run some recipes. Below, we'll provide some suggestions for recipes to run. The links will take you to the [Moderne SaaS](https://app.moderne.io) where you can run the recipes on a variety of open-source repositories. You will need to sign in to view and run recipes.
7. After you run recipes, you'll generate some [data tables](../../../user-documentation/moderne-platform/getting-started/data-tables.md) and some [visualizations](../../../user-documentation/moderne-platform/getting-started/visualizations.md).

### Recipes to run

_Ordered from least complex to most complex_

* [Common static analysis fixes](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis)
  * Improve code quality and readability
  * Fix common mistakes
  * Eliminate legacy patterns and minor performance issues
* SLF4J Logging best practices
  * [Improve performance](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.ParameterizedLogging) by preferring parameterized logging to string concatenation
  * [Improve error reporting](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.CompleteExceptionLogging) by using exception-specialized logging invocations where applicable
*   Maven dependency management

    * [Upgrade Maven dependencies](https://app.moderne.io/recipes/org.openrewrite.maven.UpgradeDependencyVersion) to keep dependencies patched and up-to-date
    * [Exclude test dependencies](https://app.moderne.io/recipes/org.openrewrite.maven.ExcludeDependency) like JUnit from the compile scope
    * [Remove redundant explicit dependency versions](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions) to clean up Maven POMs
    * [Dependency insight for Gradle and Maven](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyInsight)

    ![](../../../.gitbook/assets/dep-insight.png)
* Gradle wrapper and plugin upgrades
  * [Update Gradle Wrapper](https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper) to keep Gradle itself up to date
  * [Update Gradle Plugin](https://app.moderne.io/recipes/org.openrewrite.gradle.plugins.UpgradePluginVersion) to keep build plugins up to date
*   Security enhancements and discovery

    * [Find secrets](https://app.moderne.io/marketplace/org.openrewrite.java.security.secrets) like passwords, encryption keys, access tokens
    * [Use secure random number generation](https://app.moderne.io/recipes/org.openrewrite.java.security.SecureRandom)
    * [Java security best practices](https://app.moderne.io/recipes/org.openrewrite.java.security.JavaSecurityBestPractices)
    * [OWASP Top 10](https://app.moderne.io/recipes/org.openrewrite.java.security.OwaspTopTen)
    * [Find and fix vulnerable dependencies](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck)

    ![](../../../.gitbook/assets/vuln-dep.png)
* Modernize test frameworks
  * [Junit 4 to 5 migration](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit4to5Migration)
  * [Mockito 1 to 4 migration](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to4Migration)
  * [Migrate JUnit assertions to AssertJ](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.JUnitToAssertj) improved readability and consistency over stock JUnit assertions
* Major migrations
  * [Java 8 to 11](https://app.moderne.io/recipes/org.openrewrite.java.migrate.Java8toJava11)
  * [Java 11 to 17](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17)
  * [Spring Boot 1 to 2](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_7)
  * [Spring Boot 2 to 3](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0)
* Custom migrations. Custom recipes can be developed to help with internal platform API management, EJB to Spring migrations, etc.

Major migrations are complex transformations consisting of multiple individual recipes. At some point, these transformations represent one-off use cases and there are diminishing returns from trying to automate them fully. Mostly, they will lift your applications 80-90% of the way to completion with the remainder requiring some manual actions expected to be taken by developers.
