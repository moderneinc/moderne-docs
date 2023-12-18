# Layered configuration in the Moderne CLI

One big challenge that comes with building [LSTs](/administrator-documentation/references/concepts/lossless-semantic-trees.md) for many repositories on many different machines is configuration. What arguments do you need to build each repository? Are there Maven specific ones? Gradle specific ones? Do they change depending on the group of projects? How do you share these configurations with new people on the team?

To meet all of these needs, the Moderne CLI offers a few options for how you can include global or project-specific build arguments. In this guide, we'll walk through each of them and explain when you should use one over another.

* [Global configuration](#global-configuration)
* [Local configuration (user-specific)](#local-configuration-user-specific)
* [Local configuration (shared)](#local-configuration-shared)

## Global configuration

If your company has some configuration that will apply to most, if not all, projects, you should use global configuration. This will allow you to set arguments for any LST build for any project on the machine (which can be overridden by local configuration).

{% hint style="info" %}
Please note that these arguments will not be saved in the individual projects. If someone else were to try and build these projects on a different machine, they would need to configure these arguments themselves. If you want to save arguments for a specific project, please see the [local configuration (shared) section](#local-configuration-shared).
{% endhint %}

Below are two examples that demonstrate global configuration. If you run either of these commands, the arguments will be added to any Maven or Gradle build being run through the Moderne CLI.

```shell
mod config build maven arguments edit "-Pmdep.skip"
mod config build gradle arguments edit "--refresh-dependencies --some-additional-args"
```

You can see what arguments exist for specific commands by running:

```shell
mod config build maven arguments show
mod config build gradle arguments show
```

Or, you can navigate to the `~/.moderne/cli/moderne.properties` file and see all of your configuration options for all commands there.

If you want to delete the global arguments, you can run the commands:

```shell
mod config build maven arguments delete
mod config build gradle arguments delete
```

## Local configuration (user-specific)

When building repositories, there may come a time when you want to edit build arguments for some projects, but you don't want to check those changes in as they could cause harm or trigger unnecessary builds. In these situations, you can use the `--local` flag such as in the following command:

```shell
mod config build maven arguments edit "-Pmdep.skip" --local ./working-set
```

After running that, when you go to build the LST artifacts for any project in the specified directory/directories, these arguments will be used – but no files that will be checked in with Git will be updated. Please note that this will **override** any arguments that you've [provided globally](#global-configuration). If you want those arguments to apply to the local project(s) you're specifying, please make sure that you include them in this command.

Also note that this applies **recursively**. If the directory you specify contains many Git repositories, this will apply to all of them. For example, if your directory structure looks like:

```
working-set/
  spring-projects/
    spring-boot/
      .git/
    spring-framework/
      .git/
```

Then, after running this command, both the `spring-boot` and `spring-framework` projects will use the arguments you included whenever LSTs are built.

You can see the list of arguments exist for any command by running the following command:

```shell
mod config build maven arguments show --local ./path/to/your/project
mod config build gradle arguments show --local ./path/to/your/project
```

You can also see the local arguments by looking in the `.moderne/moderne.properties` directory in each repository such as in:

```
working-set/
  spring-projects/
    spring-boot/
      .git/
      .moderne/
        moderne.properties <-- arguments will be saved here
    spring-framework/
      .git/
      .moderne/
        moderne.properties <-- arguments will be saved here
```

The Moderne CLI will add the `.moderne` directory to the `.git/info/exclude` in each repository (which is then added to the repository's `.gitignore` and global `.gitignore` to decide what to ignore). This prevents this file and these arguments from being checked in. However, when you go to build LSTs, the arguments specified here will be used.

If you want to delete the local arguments, please run one of the following commands:

```shell
mod config build maven arguments delete --local ./path/to/your/project
mod config build gradle arguments delete --local ./path/to/your/project
```

## Local configuration (shared)

In order to build some projects, you may find that there are certain arguments that need to be added or included. Rather than having to tell every person to add these specific arguments and running into issues when they don't, you can save the specific build arguments you need by including the `--save` parameter at the end of your commands such as in the following example:

```shell
mod config build maven arguments edit "-Pmdep.skip" --local ./working-set --save
```

After running that, a `.modernecfg` file will be created that includes the arguments you specified. You can check these files in by running:

```shell
mod add ./working-set
mod commit ./working-set -m "Add Moderne configuration"
mod push ./working-set
```

Then, when you go to build the LST artifacts for any project in these directory/directories, these arguments will be used.

Please note that this will **override** any arguments that you've [provided globally](#global-configuration). If you want those arguments to apply to the local project(s) you're specifying, please make sure that you include them in this command.

Also note that this applies **recursively**. If the directory you specify contains many Git repositories, this will apply to all of them. For example, if your directory structure looks like:

```
working-set/
  spring-projects/
    spring-boot/
      .git/
    spring-framework/
      .git/
```

Then, after running this command, both the `spring-boot` and `spring-framework` projects will use the arguments you included whenever LSTs are built.

You can see the list of arguments exist for any command by running the following command:

```shell
mod config build maven arguments show --local ./path/to/your/project
mod config build gradle arguments show --local ./path/to/your/project 
```

You can also see the local arguments by looking in the `.modernecfg` file in each repository such as in:

```
working-set/
  spring-projects/
    spring-boot/
      .git/
      .modernecfg <-- arguments will be saved here
    spring-framework/
      .git/
      .modernecfg <-- arguments will be saved here
```

If you want to delete the local arguments, please run one of the following commands:

```shell
mod config build maven arguments delete --local ./path/to/your/project
mod config build gradle arguments delete --local ./path/to/your/project
```
