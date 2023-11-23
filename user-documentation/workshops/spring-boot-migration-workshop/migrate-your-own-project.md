# Migrate your own project

### Support timelines

[OSS support for Spring Boot](https://spring.io/projects/spring-boot#support) 2.7 ended on November 18th, 2023, while support for Spring Boot 3.0 ended on November 24th, 2023. So if you haven't already, now's the time to migrate your project to Spring Boot 3.2!

<figure><img src="../../../.gitbook/assets/support-timelines.png" alt=""><figcaption></figcaption></figure>

### Leap to Spring Boot 3.2

This guide will help you migrate your own project to Spring Boot 3.2. You've already seen how to run OpenRewrite recipes. If you need a recap and want to see detailed instructions, jump back to the [Moderne CLI exercise](moderne-cli-exercise.md).

To get started, you will want to run the [migrate to Spring Boot 3.2 recipe](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2), which runs you through all the steps of migrating to Spring Boot 3.2, no matter what version you're coming from.

### Migrate in steps

If you'd rather migrate in steps, you can also run recipes individually. This can be helpful if you'd like to review and build confidence in the changes, or need to troubleshoot a particular aspect.

Let's use the [migrate to Spring Boot 3.2 recipe](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2) as an example:

![](/.gitbook/assets/spring-boot-3-1.png)

This recipe is composed of 7 recipes. You can uncheck the recipes you don't want to run to reduce the scope of the changes. Or, if you want to learn more and reduce the scope further, you can click on one of the recipes.

For instance, if you click on the [migrate to Spring Boot 3.0 recipe](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0), you can see that it's composed of many recipes such as [migrate to Spring Boot 2.7](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7) and [migrate to Java 17](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17).

You can continue down this chain as much as you want. You can also pick out specific migrations that target specific components you're not up-to-date with, such as:

* [Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration)
* [Migrate to Java 17](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17), which of course includes [Migrate to Java 11](https://app.moderne.io/recipes/org.openrewrite.java.migrate.Java8toJava11)
* [Migrate to Spring Security 5.8](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8)
* [Spring Boot 2.x best practices](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBoot2BestPractices)

### Best practices after you migrate

After you've migrated to Spring Boot 3.2, you might want to consider some of the following best practices:

* [Common static analysis issues](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis)
* [JUnit Jupiter best practices](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit5BestPractices)
* [AssertJ best practices](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj)
* [SLF4J best practices](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Slf4jBestPractices)
* [Java security best practices](https://app.moderne.io/recipes/org.openrewrite.java.security.JavaSecurityBestPractices)
* [Find and fix vulnerable dependencies](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck)

You might even want to run some of these recipes periodically, to keep your projects up-to-date continuously.

### Helpful resources

Here's a number of links that might be helpful in case you encounter edge cases not yet covered:

* [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
* [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1-Release-Notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1-Release-Notes)
* [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes)
* [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes)
* [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes)
* [https://docs.spring.io/spring-security/reference/migration/index.html](https://docs.spring.io/spring-security/reference/migration/index.html)
* [https://github.com/spring-projects/spring-data-commons/wiki/](https://github.com/spring-projects/spring-data-commons/wiki/)
* [https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2022.0-Release-Notes](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2022.0-Release-Notes)
