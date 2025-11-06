---
sidebar_label: Agent releases
description: The current version of the Moderne Agent and where to download it.
---

# Agent releases

| Component                             | Current version |
| ------------------------------------- | --------------- |
| Agent (recommended to use **latest**) | 0.238.0         |

### Maven download

[Agent download link](https://repo1.maven.org/maven2/io/moderne/moderne-agent/0.238.0/moderne-agent-0.238.0.jar)


## Changelog

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
