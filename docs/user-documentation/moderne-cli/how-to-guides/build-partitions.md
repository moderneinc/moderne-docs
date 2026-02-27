# Build partitions

Partitions allow for splitting a large repository into multiple LSTs. They are designed for large monorepos for which building an LST could trigger tens of thousands of build steps and take hours to days to run. In these scenarios, we are able to divide the repository into multiple named partitions which each define their own set of [build steps](./build-steps.md).

Please see our [example repository](https://github.com/moderneinc/partition-example) for a complete example of how to set up partitions.

## Defining build partitions

To add partitions, add or edit the `.moderne/moderne.yml` in the root of the repository:

```yaml
build:
  partitions:
    - name: service
      steps:
        - type: gradle
          inclusion: |-
            modules/service/**
        - type: resource
          inclusion: |-
            modules/service/**
    - name: client
      steps:
        - type: gradle
          inclusion: |-
            modules/client/**
        - type: resource
          inclusion: |-
            modules/client/**
    - name: everything-else
      steps:
        - type: resource
          inclusion: |-
            *
            !modules/**
```

## Choosing a partitioning strategy

When defining partitions for a monorepo, there are two fundamental approaches to consider. Both are valid, and the right choice depends on your goals.

### Isolated partitions

With isolated partitions, each source file belongs to exactly one partition. Shared dependencies are resolved from pre-built artifacts rather than being included directly.

```yaml
build:
  partitions:
    - name: catalog
      steps:
        - type: gradle
          inclusion: catalog/**
        - type: resource
          inclusion: catalog/**
    - name: checkout
      steps:
        - type: gradle
          inclusion: checkout/**
        - type: resource
          inclusion: checkout/**
    - name: common
      steps:
        - type: gradle
          inclusion: common/**
        - type: resource
          inclusion: common/**
```

This approach gives the highest recipe execution efficiency:

* Smaller LST files per partition.
* No overlapping code between LSTs, so each file is only modified by a single recipe run.

The trade-off is that when a recipe modifies shared code, the resulting changes from each partition may not be complete on their own. For example, if a recipe updates an API in `common`, the callers in `catalog` and `checkout` won't be updated in the same recipe run. Once all partition changes are merged, the repository should build again, but individual partition diffs may not compile in isolation.

### Self-contained partitions

With self-contained partitions, each partition includes its own code plus all of its local project dependencies. This means some source files appear in multiple partitions.

```yaml
build:
  partitions:
    - name: catalog
      steps:
        - type: gradle
          inclusion: |-
            catalog/**
            common/**
            domain-models/**
        - type: resource
          inclusion: |-
            catalog/**
            common/**
            domain-models/**
    - name: checkout
      steps:
        - type: gradle
          inclusion: |-
            checkout/**
            common/**
            domain-models/**
        - type: resource
          inclusion: |-
            checkout/**
            common/**
            domain-models/**
```

This approach is better when you need full visibility into the impact of changes:

* Each partition is fully buildable on its own.
* A single recipe run shows the full impact across all code that a partition depends on.
* Changes to shared code are visible in every partition that includes it.

The trade-off is larger LST files and longer build times due to duplicate compilation. Additionally, since shared files appear in multiple partitions, a recipe may produce different changes to the same file depending on the partition context it runs in.

### Identifying local project dependencies

When using self-contained partitions, you need to know which local modules each partition depends on. For Gradle projects, you can use the built-in `dependencies` task to list project dependencies for a given module:

```bash
./gradlew :<module-path>:dependencies --configuration compileClasspath | grep "project :"
```

Replace `<module-path>` with the Gradle project path of the module you want to inspect, using colons as separators. For example, if your module is at `catalog/api`, the command would be:

```bash
./gradlew :catalog:api:dependencies --configuration compileClasspath | grep "project :"
```

Each `project :...` line in the output is a local dependency that should be included in that partition's `inclusion` pattern.

### How partitions affect pull requests

When running recipes with `mod run`, the Moderne CLI applies changes from all partitions to the same repository checkout. This means that even when using isolated partitions, changes across partitions combine into a single commit and pull request per repository.

:::note
On the Moderne Platform, recipe results from different partitions are currently committed to separate branches with the partition name appended as a suffix. This means each partition produces its own pull request.
:::

## The effect of partitions when building

When performing a `mod build`, notice that the Moderne CLI still selects one repository (i.e. there is only one Git root), but there are separate entries in the output for each partition. The partition name is appended to the repository's path with a `!`.

<figure>
  ![CLI output showing mod build with three partitions: client, everything-else, and service, each built separately](./assets/mod-build-partition.png)
  <figcaption>_`mod build` on a repository with two defined partitions_</figcaption>
</figure>

## Running recipes on partitions

When executing a recipe with `mod run`, you will similarly see a separate entry for each partition:

```bash
mod run . --recipe org.openrewrite.java.search.FindMethods \
  -P "methodPattern=java.io.PrintStream#println(java.lang.String)"
```

<figure>
  ![CLI output showing mod run executing FindMethods recipe on three partitions with completion status](./assets/mod-run-partition.png)
  <figcaption>_`mod run` on a partitioned repository_</figcaption>
</figure>

## Frequently asked questions

### Is there a way to see what's happening when we run `mod build`?

Please see the `build.log` file

### Can you run recipes on individual partitions?

You can comment out the partitions you don't want to run on in your `moderne.yml` file. This is mainly useful for troubleshooting and shouldn't be something you commonly do.
