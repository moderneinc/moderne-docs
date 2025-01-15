# How to speed up the Moderne CLI with parallelism

Depending on the number of repositories you have, it can take a long time to clone the repositories or run recipes against them.

To help improve this experience, we've introduced a `--parallel` flag on a variety of commands in the CLI. Adding this option to the end of a supported command will allow you to configure how many threads the command should use. More threads dedicated to the command will result in significant speed improvements.

## `--parallel` flag options

* Setting this option to **2 or more** causes the command to run with a fixed-size thread pool with that many threads.

* Setting this to **1** causes the command to run sequentially.

* Setting this to **0** runs the command with a thread pool sized to the number of CPU cores on your machine.

* Setting this to a **negative number** runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads.

## Examples

The following command will clone all of the repositories in the `Default` org to your local machine using the _number of threads available on your computer_:

```bash
mod git clone moderne . "Default" --parallel 0
```

The following command will run the `DependencyVulnerabilityCheck` recipe against all of the repositories in your current directory using a thread pool with the number of threads _equal to the number of cores available on your computer minus 1_:

```bash
mod run . --recipe DependencyVulnerabilityCheck --parallel -1
```