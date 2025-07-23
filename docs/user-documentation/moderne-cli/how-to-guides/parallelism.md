---
sidebar_label: Speed up the CLI with parallelism
description: How to speed up the Moderne CLI with parallelism.
---

# How to speed up the Moderne CLI with parallelism

Depending on the number of repositories you have, it can take a long time to clone the repositories or run recipes against them.

To help improve this experience, we've introduced a `--parallel` flag on a variety of commands in the CLI. Adding this option to the end of a supported command will allow you to configure how many threads the command should use. By default, this option is automatically enabled for some commands without the need to explicitly setting the `--parallel` flag ([see below](#defaults)). More threads dedicated to the command will result in significant speed improvements.

## `--parallel` flag options

* Setting this option to **2 or more** causes the command to run with a fixed-size thread pool with that many threads.

* Setting this to **1** causes the command to run sequentially.

* Setting this to **0** runs the command with a thread pool sized to the number of CPU cores on your machine.

* Setting this to a **negative number** runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads.

## Examples

The following command will clone all of the repositories in the `Default` org to your local machine using the _number of threads available on your computer_:

```bash
mod git sync moderne . "Default" --parallel 0
```

The following command will run the `DependencyVulnerabilityCheck` recipe against all of the repositories in your current directory using a thread pool with the number of threads _equal to the number of cores available on your computer minus 1_:

```bash
mod run . --recipe DependencyVulnerabilityCheck --parallel -1
```

## Defaults

Below is a table showing what the default parallelization setting is for various commands:

| CLI command                       | Default behavior without explicit `--parallel` |
|-----------------------------------|------------------------------------------------|
| `mod build`                       | Sequential                                     |
| `mod build --download-only`       | Parallel                                       |
| `mod config recipes moderne sync` | Parallel                                       |
| `mod config recipes jar install`  | Sequential                                     |
| `mod devcenter run`               | Parallel                                       |
| `mod git sync`                    | Sequential                                     |
| `mod run --recipe`                | Sequential                                     |
| `mod run --active-recipe`         | Parallel                                       |
| `mod run --streaming`             | Parallel                                       |

In a future release, the `Sequential` defaults will likely change to opt-out.
