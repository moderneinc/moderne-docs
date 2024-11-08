# FAQ

## Invalid entry compressed size exception

We've seen this a few times and suspect it's the result of [an underlying bug in the JDK](https://bugs.openjdk.org/browse/JDK-8244053).

To fix this, please:

1. Ensure that you're running a more recent JDK (or, at least, the latest patch release of your JDK of choice).
2. Remove the `~/.m2/repository/io/moderne` directory.

After you've done both, re-run the command you were attempting.

## Could not find artifact `io.moderne:modmaven:jar` in Artifactory

We suspect this is the same issue as the [invalid entry compressed size exception](#invalid-entry-compressed-size-exception) and suggest performing the same steps to try and resolve.

If you look in your Maven home directory (`~/.m2/repository/io/moderne/modmaven`), you will likely see a `modmaven-*.jar` file. However, it is likely that the JAR is corrupted due to the JDK bug mentioned above.

## Issues with cloning repositories with deep file paths

On Windows machines, you may [run into issues cloning repositories with deep file paths](https://gist.github.com/leodutra/a25bc1f51e8779943df0a95d5a4839d1). To fix this, try running the following command:

```bash
git config --system core.longpaths true
```

## Parse errors while building

If you run into parse errors while building, please run the [org.openrewrite.FindParseFailures recipe](https://docs.openrewrite.org/recipes/core/findparsefailures). This will produce a data table that contains a row for each parse failure. 

To run this recipe and generate this data table with the CLI, please run the following command:

```bash
mod run . --recipe FindParseFailures
mod study . --last-recipe-run --data-table org.openrewrite.table.ParseFailures
```

## Failed to apply patch: Cannot apply: HunkHeader

If you experience this issue when running `mod git apply`, please try committing/stashing/reverting the unsaved changes before running `mod git apply` again.

If that doesn't work, and you keep running into issues with this, please contact [support@moderne.io](mailto:support@moderne.io) and provide us with the `fix.patch` file and the target files (ideally reduced to the minimum need to replicate the issues).

## My project only builds resources, not my Maven or other build

If you see `Step 1 - build resources`, then we did not detect any other build tools. Your output would look something like:

```bash
> some-org/some-repository@develop
Build output will be written to file:///Users/you/Documents/some-repository/.moderne/build/20240917092838-mt6Ew/build.log
> Step 1 - build resources
+ Built LST file:///Users/you/Documents/some-repository/.moderne/build/20240917092838-mt6Ew/some-repository-20240917092845-ast.jar
+ Reported build metrics to Moderne
+ Cleaned 1 older builds.
```

If your project _does_ contain a `pom.xml` file (or similar), then you might want to double-check that your `.gitignore` file does not exclude it.

The CLI skips any resources marked as Git ignored during project discovery, and remove the matching entry from `.gitignore` if present.

## I need to enter an SSH passphrase to check out repositories – how does the CLI handle this?

Check out our [SSH keys with passphrases guide](./how-to-guides/ssh-key.md).