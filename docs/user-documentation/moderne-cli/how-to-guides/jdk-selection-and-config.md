---
sidebar_label: JDK configuration
description: How to configure the JDK in the Moderne CLI.
---

# JDK configuration in the Moderne CLI

By default, the Moderne CLI will try and detect what version of Java applies to a specific project and where the JDK is for said version. It will then pick the most optimal one when it goes to build each project.

In some situations, however, this may not be desirable. Perhaps you have a special location where the JDKs are saved, or perhaps the CLI detected the wrong version of Java for a project. In those instances, you can run certain `mod config java` commands to tell the CLI what version of Java a project should use and where the JDKs are.

Let's walk through how to see what the defaults are and how you can add change them if desired.

## JDK Defaults

By default, the Moderne CLI will look for JDKs in these locations (with the first one representing the one given the highest priority):

* `$PATH`
* `$JAVA_HOME`
* Predictable OS installation paths
* SDKMAN directories
* Brew directories
* Gradle toolchains
* Environment variables

You can see the exact versions and their priority by running the following command:

```bash
mod config java jdk list
```

<details>

<summary>Here is what the output of that command might look like:</summary>

```bash
➜  moderne-cli git:(main) ✗ mod config java jdk list

Moderne CLI 3.38.0

> Listing available JDKs

> Set globally for all repositories
17.0.7-tem       $PATH         java
17.0.7-tem       $JAVA_HOME    /Users/mikesol/.sdkman/candidates/java/17.0.7-tem/bin/java
21.0.1-oracle    OS directory  /Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home/bin/java
11.0.21-other    OS directory  /Users/mikesol/Library/Java/JavaVirtualMachines/corretto-11.0.21/Contents/Home/bin/java
17.0.7-tem       SDKMAN        /Users/mikesol/.sdkman/candidates/java/current/bin/java
17.0.7-tem       SDKMAN        /Users/mikesol/.sdkman/candidates/java/current/bin/java
17.0.7-tem       SDKMAN        /Users/mikesol/.sdkman/candidates/java/17.0.7-tem/bin/java
17.0.8-graalce   SDKMAN        /Users/mikesol/.sdkman/candidates/java/17.0.8-graalce/bin/java
1.8.0_392-other  SDKMAN        /Users/mikesol/.sdkman/candidates/java/8.0.392-amzn/bin/java
1.8.0_382-other  SDKMAN        /Users/mikesol/.sdkman/candidates/java/8.0.382-amzn/bin/java

* What to do next
    > Run mod config java jdk edit to change this configuration
    > Add --local <path-to-local-repos> to see repository-specific values
    > Run mod config java jdk delete to delete global configuration

MOD SUCCEEDED in (0.62s)
```

</details>

## Adding additional JDK locations

If you have JDKs installed in other places, you can add those by running the following command:

```bash
mod config java jdk edit /path/to/jdk
```

After running that, when a project is being built, it will prioritize looking for JDKs in the directory you specified over any other location.

Please note, though, that projects will only use this location if that appropriate version of Java exists there. This means, for instance, that if a project uses Java 17, but you specify a location that only has a Java 11 JDK, that the CLI will look elsewhere for the JDK. If it finds a Java 17 JDK anywhere else, it will use that one. If it can't find a JDK for the appropriate version of Java then it will error and the CLI commands won't work.

## Specifying different Java versions

If you want to force the CLI to use a specific version of Java when building anything, you can run a command like:

```bash
mod config java version edit 17
```

`17` can be more specific if you want a higher degree of control. For instance, it could be `17-tem` or `17.0.6-tem`.

If you want this version of Java to only apply to a specific group of repositories, you can add the `--local <path>` parameter to the end of the command such as in:

```bash
mod config java version edit 17 --local ./working-set
```

If you want to revert to auto-detection for the Java version you can run one of the following commands:

```bash
mod config java version delete
mod config java version edit auto
```

If you want to see what Java version the CLI is currently using, you can run the following command:

```bash
mod config java version show
```

## Explicitly specifying Java version in CSV

When cloning using `mod git clone csv`, it is possible to add a `"java"` column to the CSV to explicitly specify the version for certain repositories.

In the below configuration, `rewrite-maven-plugin` is explicitly configured to use Java 8. Because the `"java"` column is blank for `rewrite-spring`, that repository will use the JDK auto-detection logic.

```csv
"cloneUrl","branch","java"
"https://github.com/openrewrite/rewrite-maven-plugin","main",8
"https://github.com/openrewrite/rewrite-spring","main"
```

The CLI uses `mod config java version edit <VERSION> --local <REPO>` for each row in the repository that has a value for that column, so it is possible to verify that the column was enforced by subsequently running:

```bash
mod config java version show --local <REPO>
```

## Additional reading

For more information about each of the commands listed here, please see our [CLI reference docs](../cli-reference.md).
