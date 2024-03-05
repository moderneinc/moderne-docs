# How to upgrade transitive dependencies

It's a good practice for developers to routinely check if there are any security vulnerabilities in their repositories and ensure that their dependencies are up-to-date. Unfortunately, many tools cannot see dependencies beyond the first level. If you have a dependency that has a dependency that is insecure, most tools will not warn you or update said dependency.

Fortunately, Moderne offers the ability to find and fix dependencies that are many levels deep. Let's walk through how you might discover these problems and then how you could go about fixing them.

{% embed url="https://www.youtube.com/watch?v=xicPgKzgz-M" %}

## Finding vulnerable dependencies

Moderne offers a [find and fix vulnerable dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck) that will recursively search through all dependencies on all repositories in your organization for ones that have security issues. Feel free to run that recipe on the `Default` organization to see what shows up.

After the recipe runs, you can download a CSV file that contains all of the security issues by going to the `Data tables` tab and pressing the download button for the type of file you wish to download:

![](/.gitbook/assets/vuln-report-download.png)

In there, you can find key information such as what CVE a particular repository is affected by, what the current version is, what version is the minimum one needed to fix it, a clear summary of what is wrong, and how many levels deep the dependency is. In the below example, you can see that this recipe found a security issue in a dependency 8 levels deep!

![](/.gitbook/assets/vuln-1.png)
![](/.gitbook/assets/vuln-2.png)

## Fixing the security issues by upgrading the transitive dependencies

You can use the [upgrade transitive Gradle dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.gradle.UpgradeTransitiveDependencyVersion) to update the dependencies that have security issues that we found above. Let's specify the group, artifact, and fixed version found in the CSV file from above (`org.eclipse.jetty`, `jetty-http`, and `9.4.52`). Let's also specify a reason for this change by combining the CVE with a summary (`CVE-2023-40167: Jetty accepts "+" prefixed value in Content-Length`):

![](/.gitbook/assets/upgrade-trans-gradle-dep.png)

Press `Dry Run` to begin the recipe run. After this runs, if we take a look at the code changes, you can see that a `constraints` section was added that ensures the transitive dependency is secure. You can also see that there is a clear explanation in the code for why this happened:

![](/.gitbook/assets/upgraded-dep.png)

## Next steps

Congratulations on successfully updating transitive dependencies in your project! If you're looking for other security issues to solve, consider checking out [how to use Moderne to find personally identifiable information and secrets exposed by your APIs](/user-documentation/moderne-platform/how-to-guides/find-pii.md).