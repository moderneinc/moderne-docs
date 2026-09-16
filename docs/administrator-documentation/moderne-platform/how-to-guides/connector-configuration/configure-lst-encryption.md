---
title: Configure LST encryption
sidebar_label: LST encryption
description: How the Moderne Connector encrypts LST artifacts before they reach Moderne.
---

# Configure LST encryption

By default, the Connector encrypts every LST with a key that you generate and configure. Once encrypted, the LST is uploaded to Moderne and Moderne stores only the encrypted bytes. The Connector also sends the key to Moderne's services, where it is used to decrypt an LST when a recipe runs against it.

Encryption is controlled per organization source through its `encrypt` property, which defaults to `true`. With it enabled, the Connector fetches each LST from that source, encrypts it with `moderne.connector.crypto.symmetric-key`, and uploads it to Moderne.

## Providing the key

The key is a hex-encoded 256-bit AES key, set as `moderne.connector.crypto.symmetric-key`. If you followed [Step 1 of the Connector configuration guide](./connector-config.md#step-1-generate-your-symmetric-key), you already have one.

The Connector checks for the key at startup. If any source still has encryption on and no key is configured, the Connector refuses to start and the log names the affected sources. You can either set the key or turn encryption off for those sources.

## Turning encryption off

When you set `encrypt` to `false` on a source, the Connector stops uploading encrypted copies of its LSTs. What happens instead depends on whether the source also has a `poll` block.

Without a `poll` block, the source is pass-through. The Connector leaves it alone, and Moderne reads the source itself through the Connector's tunnel. Whether that works depends on the source type.

| Source type | Pass-through        | Behavior                                                                                                           |
|-------------|---------------------|--------------------------------------------------------------------------------------------------------------------|
| `http`      | Supported           | Moderne reads the endpoint through the Connector's tunnel.                                                         |
| `s3`        | Supported           | Moderne reads the bucket through the Connector's tunnel.                                                           |
| `gcs`       | Rejected at startup | Cloud Storage sources cannot be tunneled.                                                                          |
| `file`      | Reaches nothing     | A file on the Connector's disk is not reachable from Moderne. Use a `poll` block instead, and leave encryption on. |

With a `poll` block, the source is not pass-through. The Connector still polls the configured repositories to discover LSTs, but it publishes their locations to Moderne instead of uploading encrypted copies.

## File sources

A `file` source with the default `encrypt: true` also needs a `poll` block. A local CSV carries no credentials the Connector could use to fetch the artifacts its rows name, so it has no way to retrieve them for encryption. The Connector fails to start if a file source encrypts without one.

Configure the poll repositories through the [Artifactory](./configure-a-connector-with-artifactory-access.md) or [Maven repository](./configure-a-connector-with-maven-repository-access.md) guides.

## Where encryption is set

`encrypt` is a property of each organization source, so it is set per source rather than once for the Connector. The full list of source properties is in the [All Connector configuration variables](./connector-variables.md) reference.
