# Selecting and configuring JDKs

By default, the Moderne CLI will try and detect JDKs installed on your local machine and then pick the most optimal one when it goes to build each project. You can, however, specify additional locations that the CLI should prioritize to look at for JDKs.

Let's walk through how to see what the defaults are and how you can add additional JDK locations.

## Defaults

By default, the Moderne CLI will look for JDKs in these locations (with the first one representing the one given the highest priority):

* $PATH
* $JAVA_HOME
* Predictable OS installation paths
* SDKMAN directories
* Brew directories
* Gradle toolchains
* Environment variables

You can see the exact versions and their priority by running the following command:

```shell
mod config java jdk list
```

<details>

<summary>Here is what the output of that command might look like:</summary>

```shell
➜  moderne-cli git:(main) ✗ mod config java jdk list
        ▛▀▀▚▖  ▗▄▟▜
        ▌   ▜▄▟▀  ▐
        ▛▀▀█▀▛▀▀▀▀▜
        ▌▟▀  ▛▀▀▀▀▜
        ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 1.8.0-SNAPSHOT

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


MOD SUCCEEDED in (0.62s)
```

</details>

## Adding additional JDK locations

If you have JDKs installed in other places, you can add those by running the following command:

```shell
mod config java jdk edit /path/to/jdk
```

After running that, when a project is being built, it will prioritize looking for JDKs in the directory you specified over any other location.

Please note, though, that projects will only use this location if that appropriate version of Java exists there. This means, for instance, that if a project uses Java 17, but you specify a location that only has a Java 11 JDK, that the CLI will look elsewhere for the JDK. If it finds a Java 17 JDK anywhere else, it will use that one. If it can't find a JDK for the appropriate version of Java then it will error and the CLI commands won't work.


