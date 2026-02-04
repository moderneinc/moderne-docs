---
sidebar_label: Layered configuration
description: How to set global or project-specific build arguments in the Moderne CLI.
---

# Layered configuration in the Moderne CLI

One big challenge that comes with building [LSTs](../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) for many repositories on many machines is configuration. What arguments do you need to build each repository? Are there Maven specific ones? Gradle specific ones? Do they change depending on the group of projects? How do you share these configurations with new people on the team?

To meet all of these needs, the Moderne CLI offers a few options for how you can include global or project-specific build arguments. In this guide, we'll walk through each of them and explain when you should use one over another.

* [Configuration precedence](#configuration-precedence)
* [Global configuration](#global-configuration)
* [Local configuration (user-specific)](#local-configuration-user-specific)
* [Local configuration (shared)](#local-configuration-shared)

## Configuration precedence

Build arguments can come from multiple sources. The CLI uses a **precedence-based** approach where the first non-null value wins. Arguments from different sources are **not merged or concatenated**.

The precedence order during build (highest to lowest):

1. **Repository-local transient** (`.moderne/moderne-uncommitted.yml`) – user-specific, not committed
2. **Repository-local saved** (`.moderne/moderne.yml`) – shared, can be committed
3. **Global config** (`~/.moderne/cli/moderne.yml`) – applies to all repositories

:::info
**`repos.csv` and configuration**: When you run `mod git sync csv`, build arguments from `repos.csv` are written directly into each repository's `.moderne` directory.

If you provide a `--save` flag they will go to `moderne.yml`. If you don't provide one, they will go to `moderne-uncommitted.yml`.

This means `repos.csv` values will **overwrite** any existing values for those settings on every sync.

**Recommendation**: We recommend managing all build argument overrides centrally in your `repos.csv` file rather than in individual repositories. The `.moderne` directory in each repository serves as a delivery mechanism for centrally-configured overrides from `repos.csv`, not as a place for individual repository customization (with the exception of [build partitions](./build-partitions.md), which are repo-specific by nature).

If a specific repository needs different build arguments than what's defined organization-wide, update that repository's row in `repos.csv` with the appropriate `mavenArgs` or `gradleArgs` values.
:::

:::warning
By default, the Moderne CLI will write configuration files to `~/.moderne/cli`. If your company has a home directory that is not local (such as a network share), you can set the `MODERNE_CLI_HOME` environment variable to point to a local directory. This can drastically increase the speed of the Moderne CLI.

```bash
export MODERNE_CLI_HOME=/space/moderne/cli
```
:::

## Global configuration

If your company has some configuration that will apply to most, if not all, projects, you should use global configuration. This will allow you to set arguments for any LST build for any project on the machine (which can be overridden by local configuration).

:::info
Please note that these arguments will not be saved in the individual projects. If someone else were to try and build these projects on a different machine, they would need to configure these arguments themselves. If you want to save arguments for a specific project, please see the [local configuration (shared) section](#local-configuration-shared).
:::

Below are two examples that demonstrate global configuration. If you run either of these commands, the arguments will be added to any Maven or Gradle build being run through the Moderne CLI.

```bash
mod config build maven arguments edit "-Pmdep.skip"
mod config build gradle arguments edit "--refresh-dependencies --some-additional-args"
```

You can see what arguments exist for specific commands by running:

```bash
mod config build maven arguments show
mod config build gradle arguments show
```

Or, you can navigate to the `~/.moderne/cli/moderne.yml` file and see all of your configuration options for all commands there.

If you want to delete the global arguments, you can run the commands:

```bash
mod config build maven arguments delete
mod config build gradle arguments delete
```

## Local configuration (user-specific)

When building repositories, there may come a time when you want to edit build arguments for some projects, but you don't want to check those changes in as they could cause harm or trigger unnecessary builds. In these situations, you can use the `--local` flag such as in the following command:

```bash
mod config build maven arguments edit "-Pmdep.skip" --local ./working-set
```

After running that, when you go to build the LST artifacts for any project in the specified directory/directories, these arguments will be used – but no files that will be checked in with Git will be updated. Please note that this will **override** any arguments that you've [provided globally](#global-configuration). If you want those arguments to apply to the local project(s) you're specifying, please make sure that you include them in this command.

Also note that this applies **recursively**. If the directory you specify contains many Git repositories, this will apply to all of them. For example, if your directory structure looks like:

```bash
working-set/
  spring-projects/
    spring-boot/
      .git/
    spring-framework/
      .git/
```

Then, after running this command, both the `spring-boot` and `spring-framework` projects will use the arguments you included whenever LSTs are built.

You can see the list of arguments exist for any command by running the following command:

```bash
mod config build maven arguments show --local ./path/to/your/project
mod config build gradle arguments show --local ./path/to/your/project
```

You can also see the local arguments by looking in the `.moderne/moderne-uncommitted.yml` file in each repository such as in:

```bash
working-set/
  spring-projects/
    spring-boot/
      .git/
      .moderne/
        moderne-uncommited.yml <-- arguments will be saved here
    spring-framework/
      .git/
      .moderne/
        moderne-uncommited.yml <-- arguments will be saved here
```

The Moderne CLI will add the `.moderne` directory to the `.git/info/exclude` in each repository (which is then added by Git to the repository's `.gitignore` and global `.gitignore` to decide what to ignore). This prevents this file and these arguments from being checked in. However, when you go to build LSTs, the arguments specified here will be used.

If you want to delete the local arguments, please run one of the following commands:

```bash
mod config build maven arguments delete --local ./path/to/your/project
mod config build gradle arguments delete --local ./path/to/your/project
```

## Local configuration (shared)

:::tip
If you're using `repos.csv` for mass ingest, we recommend managing build arguments centrally in `repos.csv` using the `mavenArgs` and `gradleArgs` columns rather than committing `.moderne/moderne.yml` files to individual repositories. See [configuration precedence](#configuration-precedence) for details.
:::

In order to build some projects, you may find that there are certain arguments that need to be added or included. Rather than having to tell every person to add these specific arguments and running into issues when they don't, you can save the specific build arguments you need by including the `--save` parameter at the end of your commands such as in the following example:

```bash
mod config build maven arguments edit "-Pmdep.skip" --local ./working-set --save
```

After running that, a `.moderne/moderne.yml` file will be created that includes the arguments you specified. The CLI will add `!.moderne/moderne.yml` to `.git/info/exclude` so that this single file in the `.moderne` folder is eligible for commiting to the repository. You can check these files in by running:

```bash
mod add ./working-set
mod commit ./working-set -m "Add Moderne configuration"
mod push ./working-set
```

Then, when you go to build the LST artifacts for any project in these directory/directories, these arguments will be used.

Please note that this will **override** any arguments that you've [provided globally](#global-configuration). If you want those arguments to apply to the local project(s) you're specifying, please make sure that you include them in this command.

Also note that this applies **recursively**. If the directory you specify contains many Git repositories, this will apply to all of them. For example, if your directory structure looks like:

```bash
working-set/
  spring-projects/
    spring-boot/
      .git/
    spring-framework/
      .git/
```

Then, after running this command, both the `spring-boot` and `spring-framework` projects will use the arguments you included whenever LSTs are built.

You can see the list of arguments exist for any command by running the following command:

```bash
mod config build maven arguments show --local ./path/to/your/project
mod config build gradle arguments show --local ./path/to/your/project 
```

You can also see the local arguments by looking in the `.moderne/moderne.yml` file in each repository such as in:

```bash
working-set/
  spring-projects/
    spring-boot/
      .git/
      .moderne/
        moderne.yml <-- arguments will be saved here
    spring-framework/
      .git/
      .moderne/
        moderne.yml <-- arguments will be saved here
```

If you want to delete the local arguments, please run one of the following commands:

```bash
mod config build maven arguments delete --local ./path/to/your/project
mod config build gradle arguments delete --local ./path/to/your/project
```
