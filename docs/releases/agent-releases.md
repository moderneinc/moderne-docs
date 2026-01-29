---
sidebar_label: Agent releases
description: The current version of the Moderne Agent and where to download it.
---

# Agent releases

| Component                             | Current version |
| ------------------------------------- | --------------- |
| Agent (recommended to use **latest**) | 0.244.0         |

### Maven download

[Agent download link](https://repo1.maven.org/maven2/io/moderne/moderne-agent/0.244.0/moderne-agent-0.244.0.jar)


## Changelog

### v0.244.0 - 2026-01-29

* Fix logback configuration with nested if elements
* Fix ByteBuf memory leak in GitSshController and GitSshClient
* Don't follow redirects when request body has been consumed
* Add proxy HTTP request metrics
### v0.243.0 - 2025-12-20

* Expose better exception when tool is not found
* Add support for loading `repos.csv` from S3 directly
### v0.242.0 - 2025-12-05

* Use "builder" pattern for configuration classes in tests
### v0.241.0 - 2025-11-26

* Add support for S3 as an LST source
### v0.240.1 - 2025-11-19

* Fix doc location for crypto symmetric key instructions
* Fix Azure ACR authentication for gradle-docker-plugin v10.0.0
### v0.240.2 - 2025-11-18

## Changes

- Fix Azure ACR authentication in publish workflow (#596)

This patch release fixes the publish workflow failure caused by gradle-docker-plugin v10.0.0 upgrade, which changed how registry credentials are handled.
### v0.240.0 - 2025-11-18

* Use `actions/setup-node@v6`
* Update Gradle wrapper
* Expose health probes and set agent nickname as display name in metrics
* Revert "Update Gradle wrapper"
### v0.239.0 - 2025-11-04

* Add `moderne.agent.llm.adminOnly` to be able to limit Moddy usage to only admins

### v0.238.0 - 2025-10-30

* Use `actions/setup-node@v6`
* Update Gradle wrapper
* Expose health probes and set agent nickname as display name in metrics
* Revert "Update Gradle wrapper"
 
### v0.237.0 - 2025-10-15

* Allow relative URL redirects in ProxyController - Fixes an issue with GAR redirects

### v0.236.0 - 2025-10-14

* Upgrade to SB3.5
* Add changelog to agent releases page
* Specify version in workflow dispatch for agent docs
* Upgrade to Spring Boot 3.5 platform

### v0.235.0 - 2025-09-19

* Add kafka and elastic to repos.csv
* chore: comment out bitbucket stash in dev by default
* Integrate OAuth 2.0 request filtering for Bitbucket