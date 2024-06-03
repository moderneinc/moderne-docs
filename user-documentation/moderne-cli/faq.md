# FAQ

## Invalid entry compressed size exception

We've seen this a few times and suspect it's the result of [an underlying bug in the JDK](https://bugs.openjdk.org/browse/JDK-8244053).

There are two paths that you can take to try and get around this:

1. Ensure that you're running a more recent JDK (or, at least, the latest patch release of your JDK of choice).
2. Removing the `~/.m2/repository/io/moderne` directory and re-running the command.

## Could not find artifact `io.moderne:modmaven:jar` in Artifactory

We suspect this is the same issue as the [invalid entry compressed size exception](#invalid-entry-compressed-size-exception) and suggest performing the same steps to try and resolve.

If you look in your Maven home directory (`~/.m2/repository/io/moderne/modmaven`), you will likely see a `modmaven-*.jar` file. However, it is likely that the JAR is corrupted due to the JDK bug mentioned above.

## Issues with cloning repositories with deep file paths

On Windows machines, you may [run into issues cloning repositories with deep file paths](https://gist.github.com/leodutra/a25bc1f51e8779943df0a95d5a4839d1). To fix this, try running the following command:

```bash
git config --system core.longpaths true
```