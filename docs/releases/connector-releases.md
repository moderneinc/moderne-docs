---
sidebar_label: Connector releases
description: The current version of the Moderne Connector and where to download it.
---

# Connector releases

| Component | Current version |
| --------- | --------------- |
| Connector | 0.148.74 |

[Download latest](https://repo1.maven.org/maven2/io/moderne/connector/0.148.74/connector-0.148.74.jar)

## Changelog

### v0.148.74 – 2026-05-06

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.74/connector-0.148.74.jar)

* Preserve URL path/query encoding for GitLab tools only (#721)
* Revert "connector: preserve URL path/query encoding in scheme filter (#719)" (#720)
* Preserve URL path/query encoding in scheme filter (#719)
* Exclude SecretsManagerAutoConfiguration so non-AWS hosts can start


### v0.148.65 – 2026-05-04

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.65/connector-0.148.65.jar)

* Time all three repos.csv routes on push and receipt


## May 2026

### v0.148.59 – 2026-05-04

[Download](https://repo1.maven.org/maven2/io/moderne/connector/0.148.59/connector-0.148.59.jar)

* Emit enrichment.queue.depth gauge from lock mode
* Per-source enrichment strategies; functional lock mode
* Re-add ConnectorController to HttpToolConnectivityController
* Add per-device disk I/O metrics, watch permanent volume
* Drop redundant proxy HTTP timer
* Gateway,connector: prune dead RSocket routes and supporting code
* Report Spring Boot build version to gateway
* Pin nickname to sparky for end-to-end verification
* Revert "connector(dev): httptool creds for artifactory.moderne.io/moderne-lsts (#675)" (#679)
* Httptool creds for artifactory.moderne.io/moderne-lsts (#675)
* Gateway: disk-stage artifact uploads via S3TransferManager
* Drain CD + EOCD past ZipInputStream into the encrypt spool
* Fix repository published ordering (#651)
* Fix(connector) Missing secrets manager credential import
* Prefer ninja moderne-ingest source; rename prod LST cred
* Incremental /enrich + heartbeat during long cycles
* Per-source poll/encrypt with multi-connector union (#646)
* Infra: plumb per-service Spinnaker application metadata through render
* Route EBS-backed caches through StorageProperties.permanentDir
* Recipe-marketplace: always set CLI feature.noMavenCentral and remove implicit Maven Central / Sonatype Snapshots defaults (#630)
* Shape-aware merge of per-source repos.csv via moderne-organizations-format
* Improve monitoring book and changelog blob sync (#642)
* App connector is configured to use moderne-ingest repos-locks.csv and not do AQL polling
* Remove moderne-ingest/repos-lock.csv from dev connector and allow those repos to come through AQL enrichment
* Bump instance type m8g.medium → m8g.large
* Organization: gateway 200s empty instead of 503; connector re-pushes on reconnect
* Monitoring/book: triage-flow rewrite + USE/RED instrumentation gaps (#635)
* Add artifactory.moderne.io/moderne-lsts/repos-lock.csv as a dev-tenant HTTP org source and commit to the tip of main
* Split deploy.jsonnet's tenant properties into dev.yml/app.yml so the IDE highlights them as YAML
* Cap row encrypt-and-upload at 5 min so a dropped RSocket can't wedge enrichment workers
* Migrate ${sm://} placeholders to spring.config.import: aws-secretsmanager:
* Route changelog GitHub App config through the moderne-operated connector
* Bake CLI license into mod-cli-base image; per-instance license generation (#623)
* Infra(v2): contract test for cloud-init ↔ Pulumi tag/secret drift (#622)
* Connector subsystem split, EBS-backed cache, public-subnet placement
* Close v2 infra gaps from the v1→v2 audit
* Use canonical moderne.moddy.anthropic.api-key shape
* Connector config and aws secrets
* V2 coexistence: dedicated internal NLB + UI cookie routing
* Fix(connector) Enable authenticated organization HTTP sources
* Feat(deploy) Jsonnet-based Spinnaker pipeline generation + tenant onboarding (#606)
* Polish
* Feat(connector) Migrate Maven Indexer 6.2.2 to 7.1.6 (#591)
* Fix(connector) Synthesize alternatePublishUri1 and emit prev on lock predicate-abort
* Feat(connector) Add uploads WAL for resume across interrupted polling passes
* Fix(connector) Close writer pipe when streaming pipeline errors
* Fix(connector) Spool LST plaintext to disk during encryption
* Allow Changelog credentials to be provided through connector (#553)
* Preserve query strings when the connector rewrites tunneled URLs (#562)
* Fix(all) Enable the ExitOnOutOfMemory JVM option
* Fix(connector) Close the output stream on exception
* Fix(connector): canonicalize Maven cache fetch request (#550)
* Fix encrypted LST enrichment path from connector through gateway (#545)
* Collapse organization:indexer into connector; Range-based describe + WAL (#540)
* Cache LST downloads between describe and encrypt to eliminate double download (#514)
* Improve indexer throughput through connector. (#513)
* Fix(connector): restore application tag on published metrics
* Fix(connector): publish metrics through the RSocket tunnel
* Feat(connector): rename application tag from moderneconnector to connector
* Remove alternateUris from all tool configurations
* Remove SSH support from all SCM providers
* Fix(connector) Remove Redis connection factory, so that health check passes
* Expose missing connector tools via GraphQL and remove dead valid field
* Revert CBOR-first codec ordering in RSocket strategies (#505)
* Fix(connector) align agent to connector property migrations with model
* Fix connector RSocket deserialization failure caused by CBORMapper bean injection (#501)
* Clean up connector metric tags and sortable book legend (#498)
* Tunnel connector Atlas metrics over RSocket instead of hand-rolled JSON (#496)
* Refactor: extract OrganizationSources from ConnectorOrganizationIndexerConfig
* Feat(connector): thread organization reader config through connector pipeline
* Refactor: migrate HttpToolConfiguration from URL to URI (#486)
* Feat(connector) Push connector metrics to Atlas over RSocket tunnel
* Feat(connector) Validate HTTP tool connectivity at startup
* Feat(connector+moddy) Align Moddy LLM configuration across connector, gateway, and moddy (#451)
* Remove Loki and Prometheus — Atlas is the sole monitoring stack
* Logging improvements: reduce noise, enrich charts, fix log levels
* Feat/bitbucket data center oauth1.0a (#436)
* Fix(connector): exclude ConnectorPropertySourceAutoConfiguration from connector service
* Fix(connector): Change /http-tool/can-connect RSocket contract from java.net.URL to String
* Fix(connector): stop derived getUri() from leaking into binding and serialization
* Fix private repo CSV ingestion failing with 400 Bad Request (#420)
* Feat(connector) Auto-migrate /rsocket URI path to /connector
* Fix(connector) Relay HTTP tools through gateway config and remove RSocket server
* Convert all @ConfigurationProperties records to @Data classes so Spring Boot can rebind them during context refresh
* Feat: default server.port to 8080 and storage to /data for cloud deployment (#394)
* Split MavenConfiguration into base (recipe marketplace) and MavenPollConfiguration (LST polling), remove vestigial astSource/recipeSource flags, validate org sources non-empty
* Add @ToString.Exclude to all @ConfigSecret fields missing it (#392)
* Feat: connector config migration, LST artifact polling, and organization indexer
* Feat(connector) Disable Spring Boot internal default atlas publishing
* Fix(connector) The system environment variable property source uses standard uppercase with underscore notation which breaks the property migration
* Feat(connector) Map organization sources through connector
* Feat(connector) Fix and implement mapping from moderne.agent.maven to moderne.recipe.marketplace.repositories.maven
* Feat(connector) Fix broken test
* Treat blank and LATEST pip version the same as null to avoid invalid package== specifier
* Feat(connector+recipe:marketplace) Remap properties directly to recipe marketplace
* Remove tenantDomain from connector and all downstream flows, simplify LST encryption S3 key structure and cleanup, add ADR-005
* Add connect and response timeout configuration to proxy WebClient (#272)
* Add observability book and monitoring infrastructure
* Feat(connector) Use a separate endpoint for connector to establish its connection with
* Rewrite LstEncryptionEnricher to mirror v1 Artifact Storage pattern
* Add LST encryption/decryption sidecar for transparent encrypted LST delivery
* Remove unused /encryption-key RSocket endpoint
* Add symmetricKey to Connector connect payload
* Feat(connector) Add jib and maven-central publishing logic
* Redesign organization sources with shared config, auth support, and multi-consumer sync (#286)
* Feat(auth) More authorization cleanup. Fix Bitbucket DC OAuth2 support
* Feat(*:connector) Simplify ScmTypeResolver to be single instance with dynamic discovery
* Feat(*:connector) Clean up connector configuration and cache http clients for improved performance
* Remove stale port 8080 references and fix RSocket port
* Fix(connector) ConnectorConfigMigrationPostProcessor wasn't being invoked and couldn't output logs
* Switch to next available port for connector (8094)
* Move connector service to port 8093
* WIP
* Fix ConnectorConfigMigrationPostProcessor agent→connector property mapping
* Update crypto symmetric key doc URL (#224)
* Enable Kubernetes health probes (#222)
* Use webClientBuilder.clone() for repos.csv HTTP fetch (#221)
* Allow organization service and reposCsv to coexist (#220)
* Wire PAT, CLI, and UI configuration fields in connector (#219)
* Add proxy HTTP metrics, Bitbucket OAuth2 support, and tool-not-found error (#218)
* Fix proxy redirect handling for relative URLs and body replay (#217)
* Add stale Maven index recovery and transfer metrics (#215)
* Merge pull request #210 from moderneinc/pstreef/connector-port-maven-cache
* Merge pull request #209 from moderneinc/pstreef/port-s3-lst-source
* Merge pull request #211 from moderneinc/pstreef/connector-port-rsocket-auth
* Add 256MB weight limit to InMemoryMavenCache and route Artifactory through /maven
* Refactor Maven cache: replace PomCache with async MavenCache
* Fix DataBuffer leaks in GitSsh with doOnDiscard and try/finally
* Add RSocket basic auth, connection metrics, and instance display name tag
* Port S3 LST source from moderne-agent to connector
* Implement Moddy AI chat assistant with MCP server and GraphQL interface
* Restore ServiceUrlDefaultsPostProcessor, rename service configs back to application.yml
* Add @ConditionalOnDatabase annotations, derive postgres mode from datasource URL
* Fix connector test build errors
* Remove references to obsoleted types in Connector
* Polish
* Polish
* Remove Reactor dependencies from core:connector, route connector-tunneled traffic through gateway HTTP/WebSocket proxy
* Gateway rename bean cborMapper to connectorCborMapper to avoid conflict
* Remove connector-side dev center fetching (now managed in SaaS)
* Rename Agent to Connector across codebase
* Rename bridge to connector, io.moderne.agent to io.moderne.connector
* Moderne connector
* Restore RandomNameGenerator default for nickname


