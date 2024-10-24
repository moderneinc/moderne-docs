# Build partitions

Partitions allow for splitting a large repository into multiple LSTs. They are designed for large monorepos for which building an LST could trigger tens of thousands of build steps and take hours to days to run. In these scenarios, we are able to divide the repository into multiple named partitions which each define their own set of [build steps](./build-steps.md).

As an example, we can divide [moderneinc/bazel-examples](https://github.com/moderneinc/bazel-examples) repository into two build partitions, one of which contains the bazel-managed code and the other contains documentation code (the README).

## Defining build partitions

To add partitions, add or edit the `.moderne/moderne.yml` in the root of the repository:

```yaml
build:
  partitions:
    - name: docs
      steps:
        - type: resource
          inclusion: |-
            *.md
    - name: bazel-java-maven
      steps:
        - type: bazel
          targetExpression: //:java-maven-lib
```

## The effect of partitions when building

When performing a `mod build`, notice that the Moderne CLI still selects one repository (i.e. there is only one Git root), but there are separate entries in the output for each partition. The partition name is appended to the repository's path with a `!`.

<figure>
  ![](./assets/mod-build-partition.png)
  <figcaption>_`mod build` on a repository with two defined partitions_</figcaption>
</figure>

## Running recipes on partitions

When executing a recipe with `mod run`, you will similarly see a separate entry for each partition:

```bash
mod run . --recipe org.openrewrite.java.search.FindMethods \
  -P "methodPattern=java.io.PrintStream#println(java.lang.String)"
```

<figure>
  ![](./assets/mod-run-partition.png)
  <figcaption>_`mod run` on a partitioned repository without specifying a partition_</figcaption>
</figure>

By specifying one or more partitions with `--partition` you can limit the partitions that the recipe runs on. The `--partition` options need to correspond to one of the partition names after the `!` in the repository path.
