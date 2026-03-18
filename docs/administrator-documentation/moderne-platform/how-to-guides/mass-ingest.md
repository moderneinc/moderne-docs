---
sidebar_label: Setting up mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../references/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

For detailed instructions on how to set up ingestion, please follow the directions in the [Moderne mass ingest example repository](https://github.com/moderneinc/mass-ingest-example/blob/main/README.md). You may also find it useful to check out our [documentation on creating a repos.csv file](../../../user-documentation/moderne-cli/references/repos-csv.md).

## Choosing a deployment approach

Mass ingest is a CPU and memory-intensive workload. Each repository goes through a full Java build, resolves all dependencies, and produces an LST artifact. The right deployment approach depends on the number of repositories you need to ingest.

The [mass ingest example repository](https://github.com/moderneinc/mass-ingest-example) provides three progressive deployment stages. Each stage is completely independent — start at whichever stage fits your needs.

### Small scale (fewer than 1,000 repositories)

A single Docker container is all you need. Run it manually or on a cron schedule:

* **2 CPU cores, 16 GB RAM, 32+ GB disk**
* Manual or cron-based execution
* Basic monitoring via the CLI metrics endpoint

See [1-quickstart](https://github.com/moderneinc/mass-ingest-example/tree/main/1-quickstart) in the mass ingest example repository.

### Medium scale (1,000 to 10,000 repositories)

Add observability with Docker Compose and optionally scale by running multiple containers manually:

* **3 CPU cores, 18 GB RAM, 50+ GB disk** (includes monitoring overhead)
* Docker Compose orchestration with integrated Grafana dashboards and Prometheus
* Automated restarts and scheduling

See [2-observability](https://github.com/moderneinc/mass-ingest-example/tree/main/2-observability) in the mass ingest example repository.

### Large scale (more than 10,000 repositories)

For large repository counts, we recommend VM-based batch services that provision dedicated VMs on demand and run workers in parallel:

* **AWS Batch** — provisions EC2 instances on demand
* **Google Cloud Batch** — provisions Compute Engine VMs on demand
* **Azure Batch** — provisions Azure VMs on demand

These services run your container on a dedicated VM where it gets the full CPU and memory you allocate. VMs are provisioned on demand and deleted when the job completes, so you only pay for actual compute time. The same Docker image works on all three platforms.

See [3-scalability](https://github.com/moderneinc/mass-ingest-example/tree/main/3-scalability) in the mass ingest example repository.

### A note on Kubernetes

While Kubernetes works well for many workloads, mass ingest is not one of them. LST builds are uniquely demanding — they require sustained, guaranteed CPU and memory for full Java builds and dependency resolution. Based on customer experience, running mass ingest on Kubernetes introduces several challenges:

* **Unreliable resource guarantees** — Kubernetes does not always give pods the CPU and memory they request. Under resource pressure, pods may be throttled or evicted, causing builds to fail intermittently.
* **Mysterious build failures** — Repositories that build successfully on a standalone machine may hang or fail silently in a Kubernetes pod due to memory pressure from co-located workloads.
* **Out-of-memory issues at scale** — Customers running mass ingest on Kubernetes with hundreds of repositories have encountered OOM kills that are difficult to diagnose and resolve.
* **Container environment quirks** — Container environments with random uid/gid assignments can cause filesystem issues, and a long-standing `user.home` bug in JDKs 8–18 creates unexpected behavior in containerized environments.
* **Debugging becomes infrastructure work** — Troubleshooting shifts from "why did this repository fail to build?" to "is this a Kubernetes scheduling, networking, or resource issue?" — time that could be spent getting value from Moderne.

VM-based batch services avoid these issues because your container runs on a dedicated VM with the full allocated resources, no pod evictions or noisy-neighbor effects, and simpler debugging when builds fail.

:::info
Some customers have successfully run mass ingest on Kubernetes, but it typically requires significant tuning of resource requests, limits, and node affinity rules. If Kubernetes is your only option, allocate generous resource requests with limits equal to requests (guaranteed QoS class) and use dedicated node pools to avoid noisy-neighbor effects.
:::

## Next steps

* [Configure the Moderne agent](./agent-configuration/agent-config.md)
