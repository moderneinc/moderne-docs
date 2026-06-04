---
sidebar_label: Connector releases
description: The current version of the Moderne Connector and where to download it.
---

# Connector releases

| Component | Current version |
| --------- | --------------- |
| Connector | 0.150.17 |

[Download latest](https://repo1.maven.org/maven2/io/moderne/connector/0.150.17/connector-0.150.17.jar)

## Changelog

## June 2026

### v0.150.17 – 2026-06-04

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.150.17/connector-0.150.17.jar)

* Add `software.amazon.awssdk:sts` so IRSA can assume the configured role (#1107)

### v0.150.10 – 2026-06-01

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.150.10/connector-0.150.10.jar)

* Re-ingest LSTs on rebuild by keying freshness on publish time, not changeset (#1039)
* Scope lock-mode LST fetch to the source host, not the CSV's parent path (#1040)
* Gateway+connector: bootstrap repos.csv from gateway, drop EBS persistent volume (#832)
* Scope lock-mode LST fetch to the source's declared repo bases (#994)
* Emit enrichFailedReason on encrypt-mode rows that fail (#979)
* Validate organization source configuration at startup (#1011)
* Fail fast when a file organization source has no path (#1010)
* Gateway: carry sourceUri on per-source push payloads (#976)
* Route legacy agent CLI/UI properties to moderne.ui (#926)
* Spool ciphertext to disk, decouple encrypt from upload (#831)
* Route tmpdir to EBS, drop Maven encrypt-path spool (#830)

## May 2026

### v0.148.107 – 2026-05-14

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.107/connector-0.148.107.jar)

* Short-circuit encrypt+upload before opening source when prev already encrypted (#804)

### v0.148.106 – 2026-05-14

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.106/connector-0.148.106.jar)

* Require explicit isSkipSsl/isSkipValidateConnectivity on HttpToolConfiguration

### v0.148.102 – 2026-05-12

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.102/connector-0.148.102.jar)

* Build(deps): upgrade Netty 4.2.13.Final and plexus-utils 3.6.1 for CVE-2026-42582/3/4
* Log error on 404 handshake from API gateway (#792)
* Don't start enrichment until gateway is connected; aggregate per-row failures into one summary

### v0.148.100 – 2026-05-12

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.100/connector-0.148.100.jar)

* Fix: disable private pypi for devaz connector
* Revert "connector: log gateway URI on connect and on channel close (#779)" (#780)
* Log gateway URI on connect and on channel close (#779)
* Fix: disable private pypi for app connector

### v0.148.74 – 2026-05-06

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.74/connector-0.148.74.jar)

* Preserve URL path/query encoding for GitLab tools only (#721)
* Revert "connector: preserve URL path/query encoding in scheme filter (#719)" (#720)
* Preserve URL path/query encoding in scheme filter (#719)
* Exclude SecretsManagerAutoConfiguration so non-AWS hosts can start

### v0.148.65 – 2026-05-04

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.65/connector-0.148.65.jar)

* Time all three repos.csv routes on push and receipt

### v0.148.59 – 2026-05-04

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.59/connector-0.148.59.jar)

* Initial release
