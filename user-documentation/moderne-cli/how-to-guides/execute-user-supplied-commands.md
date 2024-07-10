# How to execute user-supplied commands on a list of repositories

The Moderne CLI allows users to execute arbitrary commands on a list of repositories using the **mod exec** command. For example, the following CLI command will execute **git status** on each repository it finds under the current directory:
```bash
mod exec . -- git status
```

{% hint style="info" %}
When supplying **mod exec** with a command with arguments, the POSIX _end-of-options_ delimiter `--` must precede the command.
{% endhint %}

## Restricting command execution on repositories with recipe run results

After running a recipe on a set of repositories you may wish to execute a command on those repositories but only if the recipe run produced results. To restrict the Moderne CLI to only execute the command on repositories with results from the last recipe run, the following command can be used:
```bash
mod exec . --last-recipe-run -- <command>
``` 

## Computed variables

User-supplied commands can take advantage of a set of variables computed by the Moderne CLI specific to the repository the command is executed on. For example, when parsing the command

```bash
mod exec . -- MODERNE_BUILD_TOOL_CHECK
```

the Moderne CLI will substitute `MODERNE_BUILD_TOOL_CHECK` with the
build tool command to run verification tasks specific to the repository. This
would expand to **gradle check** and **mvn verify** for Gradle and Maven projects
respectively. Additionally, each computed variable is added to the environment
the command is run in.

Variables computed by the Moderne CLI:
- `MODERNE_JAVA_HOME` the path to the JDK detected to build the repository
- `MODERNE_JAVA_VERSION` the version of the detected JDK
- `MODERNE_JAVA_JDK` the path to the **java** binary of the detected JDK
- `MODERNE_BUILD_TOOL` the build tool detected for the repository
- `MODERNE_BUILD_TOOL_COMPILE` the build tool command used to compile the repository
- `MODERNE_BUILD_TOOL_CHECK` the build tool command used to verify the repository
