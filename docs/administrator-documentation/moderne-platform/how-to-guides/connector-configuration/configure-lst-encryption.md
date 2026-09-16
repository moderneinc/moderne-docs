---
title: Configure LST encryption
sidebar_label: LST encryption
description: How the Moderne Connector encrypts LST artifacts before they reach Moderne.
---

# Configure LST encryption

LST artifacts describe your source code, so the Connector encrypts them before they leave your network. Moderne stores the encrypted bytes and cannot read them without the key, which stays with you.

Every organization source has an `encrypt` property that defaults to `true`. With it enabled, the Connector fetches each LST from that source, encrypts it with `moderne.connector.crypto.symmetric-key`, and uploads it to Moderne.

## Providing the key

Generate a hex-encoded 256-bit AES key and set it as `moderne.connector.crypto.symmetric-key`. [Step 1 of the Configuring the Moderne Connector guide](./connector-config.md#step-1-generate-your-symmetric-key) covers how to produce one.

A source that encrypts requires the key. If any source would encrypt and no key is set, the Connector fails to start rather than shipping your LSTs unencrypted.

## Turning encryption off

Setting `encrypt` to `false` on a source makes it pass-through. The Connector no longer fetches that source's LSTs, and Moderne reads the source directly through the Connector's tunnel. A pass-through source with a `poll` block still discovers LSTs by polling, but publishes their locations rather than uploading encrypted copies.

Whether pass-through works depends on the source type.

| Source type | `encrypt: false`      | Behavior                                                                                                          |
|-------------|-----------------------|-------------------------------------------------------------------------------------------------------------------|
| `http`      | Supported             | Moderne reads the endpoint through the Connector's tunnel.                                                        |
| `s3`        | Supported             | Moderne reads the bucket through the Connector's tunnel.                                                          |
| `gcs`       | Rejected at startup   | Cloud Storage sources cannot be tunneled, so a pass-through source would be silently inert.                       |
| `file`      | Reaches nothing       | A file on the Connector's disk is not reachable by Moderne. Use a `poll` block instead, and leave encryption on.  |

## File sources

A `file` source with the default `encrypt: true` also needs a `poll` block. A local CSV carries no credentials the Connector could use to fetch the artifacts its rows name, so it has no way to retrieve them for encryption. The Connector fails to start if a file source encrypts without one.

Configure the poll repositories through the [Artifactory](./configure-a-connector-with-artifactory-access.md) or [Maven repository](./configure-a-connector-with-maven-repository-access.md) guides.

## Where encryption is set

`encrypt` is a property of each organization source, so it is set per source rather than once for the Connector. The full list of source properties is in the [All Connector configuration variables](./connector-variables.md) reference.
