---
sidebar_label: Agent releases
description: The current version of the Moderne Agent and where to download it.
---

# Agent releases

| Component                             | Current version |
| ------------------------------------- | --------------- |
| Agent (recommended to use **latest**) | 0.235.0         |

### Maven download

[Agent download link](https://repo1.maven.org/maven2/io/moderne/moderne-agent/0.235.0/moderne-agent-0.235.0.jar)


## Changelog

### v0.235.0 - 2025-09-19

* Add kafka and elastic to repos.csv
* chore: comment out bitbucket stash in dev by default
* Integrate OAuth 2.0 request filtering for Bitbucket

### v0.234.0 - 2025-08-28

* Use unique docker image snapshot version
* feat: add support for UI help links override
* Use latest MavenConfiguration constructor in test

### v0.233.0 - 2025-08-27

* Use unique docker image snapshot version
* feat: add support for UI help links override
* Use latest MavenConfiguration constructor in test

### v0.232.0 - 2025-08-08

* fix: enable gemini llm provider

### v0.231.0 - 2025-08-06

* feat: add configuration for cli download instructions

### v0.230.0 - 2025-08-01

* Attempt to fix auto update agent version workflow

### v0.229.0 - 2025-07-08

* Increase max in memory size for OrganizationController `/devcenters`

### v0.228.0 - 2025-07-08

* Use new Sonatype credentials
* Update to use new sonatype credentials in publish.yml

### v0.227.0 - 2025-07-08

* Update GraphiQL backup
* refactor: org.openrewrite.mavencentral

### v0.226.0 - 2025-07-08

* Update GraphiQL backup
* refactor: org.openrewrite.mavencentral

### v0.225.0 - 2025-07-04

* Update GraphiQL backup
* refactor: org.openrewrite.mavencentral

### v0.224.0 - 2025-06-20

* chore: Move repos.csv

### v0.223.1 - 2025-06-13

* Ensure download path exists

### v0.223.0 - 2025-06-12

* Attempt to automate publishing
* Metrics for LST download concurrency and LST deletion failures.

### v0.222.0 - 2025-06-07

* Fix agent version update command
* Attempt to fix agent update workflow again
* Attempt 3 at fixing docs workflow
* refactor: Update Gradle wrapper to 8.14
* Add agent metrics for:
* feat: Allow both org service and repos.csv for userOrganizations

### v0.221.0 - 2025-05-09

* Add Application.main run script
* Add a workflow to automatically update docs with agent releases
* Update Agent to use the new `moderne-agent-model`.

### v0.220.0 - 2025-04-23

* Bring back Azure CR publishing for certain customers
* fix: do not overwrite doBeforeRetry
* Add new arguments MODERNE_AGENT_ORGANIZATION_REPOSCSV and MODERNE_AGENT_ORGANIZATION_DEVCENTER ahead of being able to simplify customers

### v0.219.0 - 2025-04-17

* chore: update local.properties to use new organization config
* Add timer and metric for the source of the repos.csv
* refactor: Remove out-of-date OWASP suppressions
* refactor: Moderne best practices
* Update metric for determining where repos.csv comes from
* feat: Add boolean flag to block admins from downloading data table rows

### v0.218.0 - 2025-03-19

* refactor: Moderne best practices
* Delete temp files on failures

### v0.216.0 - 2025-03-08

* fix: throw ResponseStatusException

### v0.215.0 - 2025-03-08

* fix: we want to capture the metric on the reactor connectors

### v0.214.0 - 2025-03-07

* Stream databuffers to avoid problems with file size on `repo.csv`

### v0.213.0 - 2025-03-06

* updating endpoint in the agent to either get the devcenter details for the organization or the provided json

### v0.212.0 - 2025-03-04

* chore: update lucene suppression
* Use Moderne Anthropic token

### v0.211.0 - 2025-02-24

* Null checks for org config

### v0.210.0 - 2025-02-22

* Adding controller to manage the traffic which is looking for the repos.csv, the commitOptions.txt, or the id-mapping.txt

### v0.209.0 - 2025-02-22

* chore: update suppressions 02052025130053
* refactor: Moderne best practices
* feat(mod-agent): Add config required for LLM integration

### v0.208.0 - 2025-02-02

* Revert "feat: adding tags to the agents logs (#503)"

### v0.207.1 - 2025-02-01

* Revert "feat: adding tags to the agents logs (#503)"

### v0.205.0 - 2025-01-31

* refactor: Moderne best practices
* refactor: Migrate to Spring Boot 3.4

### v0.204.0 - 2025-01-24

* feat: add http tool diagnostic endpoint

### v0.203.0 - 2025-01-18

* fix: register SshURLStreamHandlerProvider

### v0.202.0 - 2025-01-18

* Add pip install debug/trace logs
* Create venv under username
* mkdir

### v0.201.0 - 2025-01-17

* Pip, zip & ship from `~/.moderne/venv`

### v0.200.0 - 2025-01-17

* Set `maxFragmentWeight` on `DescribeAstArtifactResponse`

### v0.199.0 - 2025-01-13

* migrate to rewrite-csharp:rewrite-csharp-remote-server

### v0.198.0 - 2025-01-09

* refactor: Refaster rules related to expressions dealing with time
* chore: update surpression
* refactor: Moderne best practices
* chore(ci): bump gradle/actions from 3 to 4
* chore: updating suppression
* Fixing github actions

### v0.197.3 - 2024-12-03

* Use check connectivity from config classes

### v0.197.2 - 2024-12-03

* Use check connectivity from config classes

### v0.197.1 - 2024-12-02

* Use check connectivity from config classes

### v0.197.0 - 2024-11-29

* Use check connectivity from config classes

### v0.195.0 - 2024-11-22

* chore: bye, bye, Azure Container Registry
* chore: bye bye azure for real

### v0.193.0 - 2024-10-25

* chore: add suppression for lucene
* Update gitlab OAuth secret for Moderne (Dev) in local.properties

### v0.192.0 - 2024-10-25

* chore: update-groovy-namespace
* fix: validation was not applied on fields
* Support bearer tokens for agent artifactory authentication
* fix: null http tools should not cause validation error

### v0.191.0 - 2024-10-09

* refactor: Order imports
* refactor: Moderne best practices
* Add nuget configuration
* Install nuget on agent
* refactor: Moderne best practices
* Use agent HttpTool readTimeout