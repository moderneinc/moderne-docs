---
sidebar_label: Reference manual
description: Auto-generated documentation for all Moderne CLI commands.
---

# Moderne CLI reference

## Table of contents

* [**mod**](#mod)
* [**mod agent**](#mod-agent)
* [**mod agent sessions**](#mod-agent-sessions)
* [**mod agent send**](#mod-agent-send)
* [**mod agent stop**](#mod-agent-stop)
* [**mod amp**](#mod-amp)
* [**mod amp chat**](#mod-amp-chat)
* [**mod audit**](#mod-audit)
* [**mod audit builds**](#mod-audit-builds)
* [**mod audit builds list**](#mod-audit-builds-list)
* [**mod audit runs**](#mod-audit-runs)
* [**mod audit runs list**](#mod-audit-runs-list)
* [**mod build**](#mod-build)
* [**mod claude**](#mod-claude)
* [**mod claude chat**](#mod-claude-chat)
* [**mod clean**](#mod-clean)
* [**mod clean builds**](#mod-clean-builds)
* [**mod clean runs**](#mod-clean-runs)
* [**mod clean repos**](#mod-clean-repos)
* [**mod codex**](#mod-codex)
* [**mod codex chat**](#mod-codex-chat)
* [**mod config**](#mod-config)
* [**mod config agents**](#mod-config-agents)
* [**mod config agents mcp**](#mod-config-agents-mcp)
* [**mod config agents amp**](#mod-config-agents-amp)
* [**mod config agents amp launcher**](#mod-config-agents-amp-launcher)
* [**mod config agents amp launcher delete**](#mod-config-agents-amp-launcher-delete)
* [**mod config agents amp launcher edit**](#mod-config-agents-amp-launcher-edit)
* [**mod config agents amp launcher show**](#mod-config-agents-amp-launcher-show)
* [**mod config agents claude**](#mod-config-agents-claude)
* [**mod config agents claude launcher**](#mod-config-agents-claude-launcher)
* [**mod config agents claude launcher delete**](#mod-config-agents-claude-launcher-delete)
* [**mod config agents claude launcher edit**](#mod-config-agents-claude-launcher-edit)
* [**mod config agents claude launcher show**](#mod-config-agents-claude-launcher-show)
* [**mod config agents codex**](#mod-config-agents-codex)
* [**mod config agents codex launcher**](#mod-config-agents-codex-launcher)
* [**mod config agents codex launcher delete**](#mod-config-agents-codex-launcher-delete)
* [**mod config agents codex launcher edit**](#mod-config-agents-codex-launcher-edit)
* [**mod config agents codex launcher show**](#mod-config-agents-codex-launcher-show)
* [**mod config agents copilot**](#mod-config-agents-copilot)
* [**mod config agents copilot launcher**](#mod-config-agents-copilot-launcher)
* [**mod config agents copilot launcher delete**](#mod-config-agents-copilot-launcher-delete)
* [**mod config agents copilot launcher edit**](#mod-config-agents-copilot-launcher-edit)
* [**mod config agents copilot launcher show**](#mod-config-agents-copilot-launcher-show)
* [**mod config agents cursor**](#mod-config-agents-cursor)
* [**mod config agents cursor launcher**](#mod-config-agents-cursor-launcher)
* [**mod config agents cursor launcher delete**](#mod-config-agents-cursor-launcher-delete)
* [**mod config agents cursor launcher edit**](#mod-config-agents-cursor-launcher-edit)
* [**mod config agents cursor launcher show**](#mod-config-agents-cursor-launcher-show)
* [**mod config agents kiro**](#mod-config-agents-kiro)
* [**mod config agents kiro launcher**](#mod-config-agents-kiro-launcher)
* [**mod config agents kiro launcher delete**](#mod-config-agents-kiro-launcher-delete)
* [**mod config agents kiro launcher edit**](#mod-config-agents-kiro-launcher-edit)
* [**mod config agents kiro launcher show**](#mod-config-agents-kiro-launcher-show)
* [**mod config agents opencode**](#mod-config-agents-opencode)
* [**mod config agents opencode launcher**](#mod-config-agents-opencode-launcher)
* [**mod config agents opencode launcher delete**](#mod-config-agents-opencode-launcher-delete)
* [**mod config agents opencode launcher edit**](#mod-config-agents-opencode-launcher-edit)
* [**mod config agents opencode launcher show**](#mod-config-agents-opencode-launcher-show)
* [**mod config agents pi**](#mod-config-agents-pi)
* [**mod config agents pi launcher**](#mod-config-agents-pi-launcher)
* [**mod config agents pi launcher delete**](#mod-config-agents-pi-launcher-delete)
* [**mod config agents pi launcher edit**](#mod-config-agents-pi-launcher-edit)
* [**mod config agents pi launcher show**](#mod-config-agents-pi-launcher-show)
* [**mod config agents vscode**](#mod-config-agents-vscode)
* [**mod config agents vscode launcher**](#mod-config-agents-vscode-launcher)
* [**mod config agents vscode launcher delete**](#mod-config-agents-vscode-launcher-delete)
* [**mod config agents vscode launcher edit**](#mod-config-agents-vscode-launcher-edit)
* [**mod config agents vscode launcher show**](#mod-config-agents-vscode-launcher-show)
* [**mod config agents windsurf**](#mod-config-agents-windsurf)
* [**mod config agents windsurf launcher**](#mod-config-agents-windsurf-launcher)
* [**mod config agents windsurf launcher delete**](#mod-config-agents-windsurf-launcher-delete)
* [**mod config agents windsurf launcher edit**](#mod-config-agents-windsurf-launcher-edit)
* [**mod config agents windsurf launcher show**](#mod-config-agents-windsurf-launcher-show)
* [**mod config agent-tools**](#mod-config-agent-tools)
* [**mod config agent-tools install**](#mod-config-agent-tools-install)
* [**mod config agent-tools uninstall**](#mod-config-agent-tools-uninstall)
* [**mod config agent-tools skills**](#mod-config-agent-tools-skills)
* [**mod config agent-tools skills install**](#mod-config-agent-tools-skills-install)
* [**mod config agent-tools skills uninstall**](#mod-config-agent-tools-skills-uninstall)
* [**mod config agent-tools claude**](#mod-config-agent-tools-claude)
* [**mod config agent-tools claude install**](#mod-config-agent-tools-claude-install)
* [**mod config agent-tools claude uninstall**](#mod-config-agent-tools-claude-uninstall)
* [**mod config agent-tools windsurf**](#mod-config-agent-tools-windsurf)
* [**mod config agent-tools windsurf install**](#mod-config-agent-tools-windsurf-install)
* [**mod config agent-tools windsurf uninstall**](#mod-config-agent-tools-windsurf-uninstall)
* [**mod config agent-tools cursor**](#mod-config-agent-tools-cursor)
* [**mod config agent-tools cursor install**](#mod-config-agent-tools-cursor-install)
* [**mod config agent-tools cursor uninstall**](#mod-config-agent-tools-cursor-uninstall)
* [**mod config agent-tools copilot**](#mod-config-agent-tools-copilot)
* [**mod config agent-tools copilot install**](#mod-config-agent-tools-copilot-install)
* [**mod config agent-tools copilot uninstall**](#mod-config-agent-tools-copilot-uninstall)
* [**mod config agent-tools amp**](#mod-config-agent-tools-amp)
* [**mod config agent-tools amp install**](#mod-config-agent-tools-amp-install)
* [**mod config agent-tools amp uninstall**](#mod-config-agent-tools-amp-uninstall)
* [**mod config agent-tools codex**](#mod-config-agent-tools-codex)
* [**mod config agent-tools codex install**](#mod-config-agent-tools-codex-install)
* [**mod config agent-tools codex uninstall**](#mod-config-agent-tools-codex-uninstall)
* [**mod config agent-tools opencode**](#mod-config-agent-tools-opencode)
* [**mod config agent-tools opencode install**](#mod-config-agent-tools-opencode-install)
* [**mod config agent-tools opencode uninstall**](#mod-config-agent-tools-opencode-uninstall)
* [**mod config agent-tools kiro**](#mod-config-agent-tools-kiro)
* [**mod config agent-tools kiro install**](#mod-config-agent-tools-kiro-install)
* [**mod config agent-tools kiro uninstall**](#mod-config-agent-tools-kiro-uninstall)
* [**mod config agent-tools pi**](#mod-config-agent-tools-pi)
* [**mod config agent-tools pi install**](#mod-config-agent-tools-pi-install)
* [**mod config agent-tools pi uninstall**](#mod-config-agent-tools-pi-uninstall)
* [**mod config agent-tools prethink**](#mod-config-agent-tools-prethink)
* [**mod config agent-tools prethink edit**](#mod-config-agent-tools-prethink-edit)
* [**mod config agent-tools prethink show**](#mod-config-agent-tools-prethink-show)
* [**mod config agent-tools prethink disable**](#mod-config-agent-tools-prethink-disable)
* [**mod config build**](#mod-config-build)
* [**mod config build bazel**](#mod-config-build-bazel)
* [**mod config build bazel arguments**](#mod-config-build-bazel-arguments)
* [**mod config build bazel arguments delete**](#mod-config-build-bazel-arguments-delete)
* [**mod config build bazel arguments edit**](#mod-config-build-bazel-arguments-edit)
* [**mod config build bazel arguments show**](#mod-config-build-bazel-arguments-show)
* [**mod config build bazel executable**](#mod-config-build-bazel-executable)
* [**mod config build bazel executable delete**](#mod-config-build-bazel-executable-delete)
* [**mod config build bazel executable edit**](#mod-config-build-bazel-executable-edit)
* [**mod config build bazel executable show**](#mod-config-build-bazel-executable-show)
* [**mod config build bazel timeout**](#mod-config-build-bazel-timeout)
* [**mod config build bazel timeout delete**](#mod-config-build-bazel-timeout-delete)
* [**mod config build bazel timeout edit**](#mod-config-build-bazel-timeout-edit)
* [**mod config build bazel timeout show**](#mod-config-build-bazel-timeout-show)
* [**mod config build dotnet**](#mod-config-build-dotnet)
* [**mod config build dotnet nuget-config**](#mod-config-build-dotnet-nuget-config)
* [**mod config build dotnet nuget-config delete**](#mod-config-build-dotnet-nuget-config-delete)
* [**mod config build dotnet nuget-config edit**](#mod-config-build-dotnet-nuget-config-edit)
* [**mod config build dotnet nuget-config show**](#mod-config-build-dotnet-nuget-config-show)
* [**mod config build dotnet timeout**](#mod-config-build-dotnet-timeout)
* [**mod config build dotnet timeout delete**](#mod-config-build-dotnet-timeout-delete)
* [**mod config build dotnet timeout edit**](#mod-config-build-dotnet-timeout-edit)
* [**mod config build dotnet timeout show**](#mod-config-build-dotnet-timeout-show)
* [**mod config build environment**](#mod-config-build-environment)
* [**mod config build environment delete**](#mod-config-build-environment-delete)
* [**mod config build environment edit**](#mod-config-build-environment-edit)
* [**mod config build environment show**](#mod-config-build-environment-show)
* [**mod config build go**](#mod-config-build-go)
* [**mod config build go gomemlimit**](#mod-config-build-go-gomemlimit)
* [**mod config build go gomemlimit delete**](#mod-config-build-go-gomemlimit-delete)
* [**mod config build go gomemlimit edit**](#mod-config-build-go-gomemlimit-edit)
* [**mod config build go gomemlimit show**](#mod-config-build-go-gomemlimit-show)
* [**mod config build go timeout**](#mod-config-build-go-timeout)
* [**mod config build go timeout delete**](#mod-config-build-go-timeout-delete)
* [**mod config build go timeout edit**](#mod-config-build-go-timeout-edit)
* [**mod config build go timeout show**](#mod-config-build-go-timeout-show)
* [**mod config build gradle**](#mod-config-build-gradle)
* [**mod config build gradle arguments**](#mod-config-build-gradle-arguments)
* [**mod config build gradle arguments delete**](#mod-config-build-gradle-arguments-delete)
* [**mod config build gradle arguments edit**](#mod-config-build-gradle-arguments-edit)
* [**mod config build gradle arguments show**](#mod-config-build-gradle-arguments-show)
* [**mod config build gradle installation**](#mod-config-build-gradle-installation)
* [**mod config build gradle installation edit**](#mod-config-build-gradle-installation-edit)
* [**mod config build gradle installation delete**](#mod-config-build-gradle-installation-delete)
* [**mod config build gradle installation list**](#mod-config-build-gradle-installation-list)
* [**mod config build gradle timeout**](#mod-config-build-gradle-timeout)
* [**mod config build gradle timeout delete**](#mod-config-build-gradle-timeout-delete)
* [**mod config build gradle timeout edit**](#mod-config-build-gradle-timeout-edit)
* [**mod config build gradle timeout show**](#mod-config-build-gradle-timeout-show)
* [**mod config build gradle version**](#mod-config-build-gradle-version)
* [**mod config build gradle version edit**](#mod-config-build-gradle-version-edit)
* [**mod config build gradle version delete**](#mod-config-build-gradle-version-delete)
* [**mod config build gradle version show**](#mod-config-build-gradle-version-show)
* [**mod config build javascript**](#mod-config-build-javascript)
* [**mod config build javascript nodeoptions**](#mod-config-build-javascript-nodeoptions)
* [**mod config build javascript nodeoptions delete**](#mod-config-build-javascript-nodeoptions-delete)
* [**mod config build javascript nodeoptions edit**](#mod-config-build-javascript-nodeoptions-edit)
* [**mod config build javascript nodeoptions show**](#mod-config-build-javascript-nodeoptions-show)
* [**mod config build mainframe**](#mod-config-build-mainframe)
* [**mod config build mainframe timeout**](#mod-config-build-mainframe-timeout)
* [**mod config build mainframe timeout delete**](#mod-config-build-mainframe-timeout-delete)
* [**mod config build mainframe timeout edit**](#mod-config-build-mainframe-timeout-edit)
* [**mod config build mainframe timeout show**](#mod-config-build-mainframe-timeout-show)
* [**mod config build maven**](#mod-config-build-maven)
* [**mod config build maven arguments**](#mod-config-build-maven-arguments)
* [**mod config build maven arguments delete**](#mod-config-build-maven-arguments-delete)
* [**mod config build maven arguments edit**](#mod-config-build-maven-arguments-edit)
* [**mod config build maven arguments show**](#mod-config-build-maven-arguments-show)
* [**mod config build maven installation**](#mod-config-build-maven-installation)
* [**mod config build maven installation edit**](#mod-config-build-maven-installation-edit)
* [**mod config build maven installation delete**](#mod-config-build-maven-installation-delete)
* [**mod config build maven installation list**](#mod-config-build-maven-installation-list)
* [**mod config build maven settings**](#mod-config-build-maven-settings)
* [**mod config build maven settings delete**](#mod-config-build-maven-settings-delete)
* [**mod config build maven settings edit**](#mod-config-build-maven-settings-edit)
* [**mod config build maven settings show**](#mod-config-build-maven-settings-show)
* [**mod config build maven timeout**](#mod-config-build-maven-timeout)
* [**mod config build maven timeout delete**](#mod-config-build-maven-timeout-delete)
* [**mod config build maven timeout edit**](#mod-config-build-maven-timeout-edit)
* [**mod config build maven timeout show**](#mod-config-build-maven-timeout-show)
* [**mod config build maven version**](#mod-config-build-maven-version)
* [**mod config build maven version edit**](#mod-config-build-maven-version-edit)
* [**mod config build maven version delete**](#mod-config-build-maven-version-delete)
* [**mod config build maven version show**](#mod-config-build-maven-version-show)
* [**mod config build node**](#mod-config-build-node)
* [**mod config build node timeout**](#mod-config-build-node-timeout)
* [**mod config build node timeout delete**](#mod-config-build-node-timeout-delete)
* [**mod config build node timeout edit**](#mod-config-build-node-timeout-edit)
* [**mod config build node timeout show**](#mod-config-build-node-timeout-show)
* [**mod config build parsers**](#mod-config-build-parsers)
* [**mod config build parsers add**](#mod-config-build-parsers-add)
* [**mod config build parsers delete**](#mod-config-build-parsers-delete)
* [**mod config build parsers show**](#mod-config-build-parsers-show)
* [**mod config build python**](#mod-config-build-python)
* [**mod config build python timeout**](#mod-config-build-python-timeout)
* [**mod config build python timeout delete**](#mod-config-build-python-timeout-delete)
* [**mod config build python timeout edit**](#mod-config-build-python-timeout-edit)
* [**mod config build python timeout show**](#mod-config-build-python-timeout-show)
* [**mod config build resource**](#mod-config-build-resource)
* [**mod config build resource timeout**](#mod-config-build-resource-timeout)
* [**mod config build resource timeout delete**](#mod-config-build-resource-timeout-delete)
* [**mod config build resource timeout edit**](#mod-config-build-resource-timeout-edit)
* [**mod config build resource timeout show**](#mod-config-build-resource-timeout-show)
* [**mod config build ruby**](#mod-config-build-ruby)
* [**mod config build ruby timeout**](#mod-config-build-ruby-timeout)
* [**mod config build ruby timeout delete**](#mod-config-build-ruby-timeout-delete)
* [**mod config build ruby timeout edit**](#mod-config-build-ruby-timeout-edit)
* [**mod config build ruby timeout show**](#mod-config-build-ruby-timeout-show)
* [**mod config build style**](#mod-config-build-style)
* [**mod config build style checkstyle**](#mod-config-build-style-checkstyle)
* [**mod config build style checkstyle delete**](#mod-config-build-style-checkstyle-delete)
* [**mod config build style checkstyle edit**](#mod-config-build-style-checkstyle-edit)
* [**mod config build style checkstyle show**](#mod-config-build-style-checkstyle-show)
* [**mod config build style openrewrite**](#mod-config-build-style-openrewrite)
* [**mod config build style openrewrite delete**](#mod-config-build-style-openrewrite-delete)
* [**mod config build style openrewrite edit**](#mod-config-build-style-openrewrite-edit)
* [**mod config build style openrewrite show**](#mod-config-build-style-openrewrite-show)
* [**mod config clone**](#mod-config-clone)
* ~~[**mod config clone protocol**](#mod-config-clone-protocol-deprecated)~~ (deprecated)
* ~~[**mod config clone protocol delete**](#mod-config-clone-protocol-delete-deprecated)~~ (deprecated)
* ~~[**mod config clone protocol edit**](#mod-config-clone-protocol-edit-deprecated)~~ (deprecated)
* ~~[**mod config clone protocol show**](#mod-config-clone-protocol-show-deprecated)~~ (deprecated)
* [**mod config clone timeout**](#mod-config-clone-timeout)
* [**mod config clone timeout delete**](#mod-config-clone-timeout-delete)
* [**mod config clone timeout edit**](#mod-config-clone-timeout-edit)
* [**mod config clone timeout show**](#mod-config-clone-timeout-show)
* [**mod config dotnet**](#mod-config-dotnet)
* [**mod config dotnet installation**](#mod-config-dotnet-installation)
* [**mod config dotnet installation edit**](#mod-config-dotnet-installation-edit)
* [**mod config dotnet installation delete**](#mod-config-dotnet-installation-delete)
* [**mod config dotnet installation list**](#mod-config-dotnet-installation-list)
* [**mod config dotnet version**](#mod-config-dotnet-version)
* [**mod config dotnet version edit**](#mod-config-dotnet-version-edit)
* [**mod config dotnet version delete**](#mod-config-dotnet-version-delete)
* [**mod config dotnet version show**](#mod-config-dotnet-version-show)
* [**mod config environment**](#mod-config-environment)
* [**mod config environment show**](#mod-config-environment-show)
* [**mod config exec**](#mod-config-exec)
* [**mod config exec timeout**](#mod-config-exec-timeout)
* [**mod config exec timeout delete**](#mod-config-exec-timeout-delete)
* [**mod config exec timeout edit**](#mod-config-exec-timeout-edit)
* [**mod config exec timeout show**](#mod-config-exec-timeout-show)
* [**mod config features**](#mod-config-features)
* [**mod config features agent-tools**](#mod-config-features-agent-tools)
* [**mod config features agent-tools tray**](#mod-config-features-agent-tools-tray)
* [**mod config features build**](#mod-config-features-build)
* [**mod config features build git-blame**](#mod-config-features-build-git-blame)
* [**mod config features index-recipes**](#mod-config-features-index-recipes)
* [**mod config features inline-diff**](#mod-config-features-inline-diff)
* [**mod config features lst**](#mod-config-features-lst)
* ~~[**mod config features no-maven-central**](#mod-config-features-no-maven-central-deprecated)~~ (deprecated)
* [**mod config features pre-study**](#mod-config-features-pre-study)
* [**mod config go**](#mod-config-go)
* [**mod config go installation**](#mod-config-go-installation)
* [**mod config go installation edit**](#mod-config-go-installation-edit)
* [**mod config go installation delete**](#mod-config-go-installation-delete)
* [**mod config go installation list**](#mod-config-go-installation-list)
* [**mod config http**](#mod-config-http)
* [**mod config http proxy**](#mod-config-http-proxy)
* [**mod config http proxy delete**](#mod-config-http-proxy-delete)
* [**mod config http proxy edit**](#mod-config-http-proxy-edit)
* [**mod config http proxy show**](#mod-config-http-proxy-show)
* [**mod config http trust-store**](#mod-config-http-trust-store)
* [**mod config http trust-store delete**](#mod-config-http-trust-store-delete)
* [**mod config http trust-store edit**](#mod-config-http-trust-store-edit)
* [**mod config http trust-store edit system**](#mod-config-http-trust-store-edit-system)
* [**mod config http trust-store edit file**](#mod-config-http-trust-store-edit-file)
* ~~[**mod config http trust-store edit java-home**](#mod-config-http-trust-store-edit-java-home-deprecated)~~ (deprecated)
* [**mod config http trust-store show**](#mod-config-http-trust-store-show)
* [**mod config http key-store**](#mod-config-http-key-store)
* [**mod config http key-store delete**](#mod-config-http-key-store-delete)
* [**mod config http key-store edit**](#mod-config-http-key-store-edit)
* [**mod config http key-store edit file**](#mod-config-http-key-store-edit-file)
* [**mod config http key-store show**](#mod-config-http-key-store-show)
* [**mod config java**](#mod-config-java)
* [**mod config java installation**](#mod-config-java-installation)
* [**mod config java installation edit**](#mod-config-java-installation-edit)
* [**mod config java installation delete**](#mod-config-java-installation-delete)
* [**mod config java installation list**](#mod-config-java-installation-list)
* ~~[**mod config java jdk**](#mod-config-java-jdk-deprecated)~~ (deprecated)
* ~~[**mod config java jdk edit**](#mod-config-java-jdk-edit-deprecated)~~ (deprecated)
* ~~[**mod config java jdk delete**](#mod-config-java-jdk-delete-deprecated)~~ (deprecated)
* ~~[**mod config java jdk list**](#mod-config-java-jdk-list-deprecated)~~ (deprecated)
* [**mod config java options**](#mod-config-java-options)
* [**mod config java options edit**](#mod-config-java-options-edit)
* [**mod config java options delete**](#mod-config-java-options-delete)
* [**mod config java options show**](#mod-config-java-options-show)
* [**mod config java version**](#mod-config-java-version)
* [**mod config java version edit**](#mod-config-java-version-edit)
* [**mod config java version delete**](#mod-config-java-version-delete)
* [**mod config java version show**](#mod-config-java-version-show)
* [**mod config license**](#mod-config-license)
* [**mod config license delete**](#mod-config-license-delete)
* [**mod config license edit**](#mod-config-license-edit)
* [**mod config license generate**](#mod-config-license-generate)
* [**mod config license show**](#mod-config-license-show)
* [**mod config license moderne**](#mod-config-license-moderne)
* [**mod config license moderne sync**](#mod-config-license-moderne-sync)
* [**mod config lsts**](#mod-config-lsts)
* [**mod config lsts artifacts**](#mod-config-lsts-artifacts)
* [**mod config lsts artifacts artifactory**](#mod-config-lsts-artifacts-artifactory)
* [**mod config lsts artifacts artifactory add**](#mod-config-lsts-artifacts-artifactory-add)
* ~~[**mod config lsts artifacts artifactory edit**](#mod-config-lsts-artifacts-artifactory-edit-deprecated)~~ (deprecated)
* [**mod config lsts artifacts artifactory delete**](#mod-config-lsts-artifacts-artifactory-delete)
* [**mod config lsts artifacts artifactory show**](#mod-config-lsts-artifacts-artifactory-show)
* [**mod config lsts artifacts show**](#mod-config-lsts-artifacts-show)
* [**mod config lsts artifacts azure-blob**](#mod-config-lsts-artifacts-azure-blob)
* [**mod config lsts artifacts azure-blob edit**](#mod-config-lsts-artifacts-azure-blob-edit)
* [**mod config lsts artifacts azure-blob delete**](#mod-config-lsts-artifacts-azure-blob-delete)
* [**mod config lsts artifacts azure-blob show**](#mod-config-lsts-artifacts-azure-blob-show)
* [**mod config lsts artifacts gcs**](#mod-config-lsts-artifacts-gcs)
* [**mod config lsts artifacts gcs edit**](#mod-config-lsts-artifacts-gcs-edit)
* [**mod config lsts artifacts gcs delete**](#mod-config-lsts-artifacts-gcs-delete)
* [**mod config lsts artifacts gcs show**](#mod-config-lsts-artifacts-gcs-show)
* [**mod config lsts artifacts maven**](#mod-config-lsts-artifacts-maven)
* [**mod config lsts artifacts maven add**](#mod-config-lsts-artifacts-maven-add)
* ~~[**mod config lsts artifacts maven edit**](#mod-config-lsts-artifacts-maven-edit-deprecated)~~ (deprecated)
* [**mod config lsts artifacts maven delete**](#mod-config-lsts-artifacts-maven-delete)
* [**mod config lsts artifacts maven show**](#mod-config-lsts-artifacts-maven-show)
* [**mod config lsts artifacts s3**](#mod-config-lsts-artifacts-s3)
* [**mod config lsts artifacts s3 edit**](#mod-config-lsts-artifacts-s3-edit)
* [**mod config lsts artifacts s3 delete**](#mod-config-lsts-artifacts-s3-delete)
* [**mod config lsts artifacts s3 show**](#mod-config-lsts-artifacts-s3-show)
* [**mod config lsts cache-dir**](#mod-config-lsts-cache-dir)
* [**mod config lsts cache-dir edit**](#mod-config-lsts-cache-dir-edit)
* [**mod config lsts cache-dir show**](#mod-config-lsts-cache-dir-show)
* [**mod config lsts cache-dir delete**](#mod-config-lsts-cache-dir-delete)
* [**mod config metrics**](#mod-config-metrics)
* [**mod config metrics atlas**](#mod-config-metrics-atlas)
* [**mod config metrics atlas edit**](#mod-config-metrics-atlas-edit)
* [**mod config metrics atlas show**](#mod-config-metrics-atlas-show)
* [**mod config metrics atlas delete**](#mod-config-metrics-atlas-delete)
* [**mod config moderne**](#mod-config-moderne)
* [**mod config moderne delete**](#mod-config-moderne-delete)
* [**mod config moderne edit**](#mod-config-moderne-edit)
* [**mod config moderne local**](#mod-config-moderne-local)
* [**mod config moderne login**](#mod-config-moderne-login)
* [**mod config moderne show**](#mod-config-moderne-show)
* [**mod config moderne organizations**](#mod-config-moderne-organizations)
* [**mod config moderne organizations show**](#mod-config-moderne-organizations-show)
* [**mod config node**](#mod-config-node)
* [**mod config node installation**](#mod-config-node-installation)
* [**mod config node installation edit**](#mod-config-node-installation-edit)
* [**mod config node installation delete**](#mod-config-node-installation-delete)
* [**mod config node installation list**](#mod-config-node-installation-list)
* [**mod config node version**](#mod-config-node-version)
* [**mod config node version edit**](#mod-config-node-version-edit)
* [**mod config node version delete**](#mod-config-node-version-delete)
* [**mod config node version show**](#mod-config-node-version-show)
* [**mod config python**](#mod-config-python)
* [**mod config python installation**](#mod-config-python-installation)
* [**mod config python installation edit**](#mod-config-python-installation-edit)
* [**mod config python installation delete**](#mod-config-python-installation-delete)
* [**mod config python installation list**](#mod-config-python-installation-list)
* [**mod config python version**](#mod-config-python-version)
* [**mod config python version edit**](#mod-config-python-version-edit)
* [**mod config python version delete**](#mod-config-python-version-delete)
* [**mod config python version show**](#mod-config-python-version-show)
* [**mod config recipes**](#mod-config-recipes)
* [**mod config recipes active**](#mod-config-recipes-active)
* [**mod config recipes active set**](#mod-config-recipes-active-set)
* [**mod config recipes active show**](#mod-config-recipes-active-show)
* [**mod config recipes active delete**](#mod-config-recipes-active-delete)
* [**mod config recipes artifacts**](#mod-config-recipes-artifacts)
* [**mod config recipes artifacts artifactory**](#mod-config-recipes-artifacts-artifactory)
* [**mod config recipes artifacts artifactory add**](#mod-config-recipes-artifacts-artifactory-add)
* ~~[**mod config recipes artifacts artifactory edit**](#mod-config-recipes-artifacts-artifactory-edit-deprecated)~~ (deprecated)
* [**mod config recipes artifacts artifactory delete**](#mod-config-recipes-artifacts-artifactory-delete)
* [**mod config recipes artifacts artifactory show**](#mod-config-recipes-artifacts-artifactory-show)
* [**mod config recipes artifacts show**](#mod-config-recipes-artifacts-show)
* [**mod config recipes artifacts maven**](#mod-config-recipes-artifacts-maven)
* [**mod config recipes artifacts maven add**](#mod-config-recipes-artifacts-maven-add)
* ~~[**mod config recipes artifacts maven edit**](#mod-config-recipes-artifacts-maven-edit-deprecated)~~ (deprecated)
* [**mod config recipes artifacts maven delete**](#mod-config-recipes-artifacts-maven-delete)
* [**mod config recipes artifacts maven show**](#mod-config-recipes-artifacts-maven-show)
* [**mod config recipes artifacts npm**](#mod-config-recipes-artifacts-npm)
* [**mod config recipes artifacts npm add**](#mod-config-recipes-artifacts-npm-add)
* [**mod config recipes artifacts npm delete**](#mod-config-recipes-artifacts-npm-delete)
* [**mod config recipes artifacts npm show**](#mod-config-recipes-artifacts-npm-show)
* [**mod config recipes artifacts pip**](#mod-config-recipes-artifacts-pip)
* [**mod config recipes artifacts pip add**](#mod-config-recipes-artifacts-pip-add)
* [**mod config recipes artifacts pip delete**](#mod-config-recipes-artifacts-pip-delete)
* [**mod config recipes artifacts pip show**](#mod-config-recipes-artifacts-pip-show)
* [**mod config recipes artifacts nuget**](#mod-config-recipes-artifacts-nuget)
* [**mod config recipes artifacts nuget add**](#mod-config-recipes-artifacts-nuget-add)
* [**mod config recipes artifacts nuget delete**](#mod-config-recipes-artifacts-nuget-delete)
* [**mod config recipes artifacts nuget show**](#mod-config-recipes-artifacts-nuget-show)
* [**mod config recipes artifacts go**](#mod-config-recipes-artifacts-go)
* [**mod config recipes artifacts go add**](#mod-config-recipes-artifacts-go-add)
* [**mod config recipes artifacts go delete**](#mod-config-recipes-artifacts-go-delete)
* [**mod config recipes artifacts go show**](#mod-config-recipes-artifacts-go-show)
* [**mod config recipes bundle**](#mod-config-recipes-bundle)
* [**mod config recipes bundle push**](#mod-config-recipes-bundle-push)
* [**mod config recipes bundle check**](#mod-config-recipes-bundle-check)
* [**mod config recipes csv**](#mod-config-recipes-csv)
* [**mod config recipes csv sync**](#mod-config-recipes-csv-sync)
* [**mod config recipes export**](#mod-config-recipes-export)
* [**mod config recipes export json**](#mod-config-recipes-export-json)
* [**mod config recipes export csv**](#mod-config-recipes-export-csv)
* [**mod config recipes import**](#mod-config-recipes-import)
* [**mod config recipes import csv**](#mod-config-recipes-import-csv)
* [**mod config recipes go**](#mod-config-recipes-go)
* [**mod config recipes go install**](#mod-config-recipes-go-install)
* [**mod config recipes go retrieve**](#mod-config-recipes-go-retrieve)
* [**mod config recipes go delete**](#mod-config-recipes-go-delete)
* [**mod config recipes jar**](#mod-config-recipes-jar)
* [**mod config recipes jar install**](#mod-config-recipes-jar-install)
* [**mod config recipes jar retrieve**](#mod-config-recipes-jar-retrieve)
* [**mod config recipes jar delete**](#mod-config-recipes-jar-delete)
* [**mod config recipes npm**](#mod-config-recipes-npm)
* [**mod config recipes npm install**](#mod-config-recipes-npm-install)
* [**mod config recipes npm retrieve**](#mod-config-recipes-npm-retrieve)
* [**mod config recipes npm delete**](#mod-config-recipes-npm-delete)
* [**mod config recipes nuget**](#mod-config-recipes-nuget)
* [**mod config recipes nuget install**](#mod-config-recipes-nuget-install)
* [**mod config recipes nuget retrieve**](#mod-config-recipes-nuget-retrieve)
* [**mod config recipes nuget delete**](#mod-config-recipes-nuget-delete)
* [**mod config recipes pip**](#mod-config-recipes-pip)
* [**mod config recipes pip install**](#mod-config-recipes-pip-install)
* [**mod config recipes pip retrieve**](#mod-config-recipes-pip-retrieve)
* [**mod config recipes pip delete**](#mod-config-recipes-pip-delete)
* [**mod config recipes moderne**](#mod-config-recipes-moderne)
* [**mod config recipes moderne install**](#mod-config-recipes-moderne-install)
* [**mod config recipes moderne sync**](#mod-config-recipes-moderne-sync)
* [**mod config recipes delete**](#mod-config-recipes-delete)
* [**mod config recipes list**](#mod-config-recipes-list)
* [**mod config recipes search**](#mod-config-recipes-search)
* [**mod config recipes source**](#mod-config-recipes-source)
* [**mod config recipes source checkout**](#mod-config-recipes-source-checkout)
* [**mod config recipes source new**](#mod-config-recipes-source-new)
* [**mod config recipes tree**](#mod-config-recipes-tree)
* [**mod config recipes upgrade**](#mod-config-recipes-upgrade)
* [**mod config recipes yaml**](#mod-config-recipes-yaml)
* [**mod config recipes yaml install**](#mod-config-recipes-yaml-install)
* [**mod config recipes yaml delete**](#mod-config-recipes-yaml-delete)
* [**mod config run**](#mod-config-run)
* [**mod config run polyglot-parallel**](#mod-config-run-polyglot-parallel)
* [**mod config run polyglot-parallel delete**](#mod-config-run-polyglot-parallel-delete)
* [**mod config run polyglot-parallel edit**](#mod-config-run-polyglot-parallel-edit)
* [**mod config run polyglot-parallel show**](#mod-config-run-polyglot-parallel-show)
* [**mod config run stall-threshold**](#mod-config-run-stall-threshold)
* [**mod config run stall-threshold delete**](#mod-config-run-stall-threshold-delete)
* [**mod config run stall-threshold edit**](#mod-config-run-stall-threshold-edit)
* [**mod config run stall-threshold show**](#mod-config-run-stall-threshold-show)
* [**mod config run timeout**](#mod-config-run-timeout)
* [**mod config run timeout delete**](#mod-config-run-timeout-delete)
* [**mod config run timeout edit**](#mod-config-run-timeout-edit)
* [**mod config run timeout show**](#mod-config-run-timeout-show)
* ~~[**mod config scm**](#mod-config-scm-deprecated)~~ (deprecated)
* ~~[**mod config scm moderne**](#mod-config-scm-moderne-deprecated)~~ (deprecated)
* ~~[**mod config scm moderne sync**](#mod-config-scm-moderne-sync-deprecated)~~ (deprecated)
* ~~[**mod config scm add**](#mod-config-scm-add-deprecated)~~ (deprecated)
* ~~[**mod config scm remove**](#mod-config-scm-remove-deprecated)~~ (deprecated)
* ~~[**mod config scm show**](#mod-config-scm-show-deprecated)~~ (deprecated)
* [**mod config secrets**](#mod-config-secrets)
* [**mod config secrets store**](#mod-config-secrets-store)
* [**mod config secrets store delete**](#mod-config-secrets-store-delete)
* [**mod config secrets store edit**](#mod-config-secrets-store-edit)
* [**mod config secrets store show**](#mod-config-secrets-store-show)
* [**mod config telemetry**](#mod-config-telemetry)
* [**mod config telemetry wait-for-upload**](#mod-config-telemetry-wait-for-upload)
* [**mod copilot**](#mod-copilot)
* [**mod copilot chat**](#mod-copilot-chat)
* [**mod cursor**](#mod-cursor)
* [**mod cursor chat**](#mod-cursor-chat)
* [**mod doctor**](#mod-doctor)
* [**mod devcenter**](#mod-devcenter)
* [**mod exec**](#mod-exec)
* [**mod git**](#mod-git)
* [**mod git add**](#mod-git-add)
* [**mod git apply**](#mod-git-apply)
* [**mod git checkout**](#mod-git-checkout)
* [**mod git commit**](#mod-git-commit)
* [**mod git compare**](#mod-git-compare)
* [**mod git pull**](#mod-git-pull)
* [**mod git push**](#mod-git-push)
* [**mod git reset**](#mod-git-reset)
* [**mod git rev-parse**](#mod-git-rev-parse)
* [**mod git rm**](#mod-git-rm)
* [**mod git stashset**](#mod-git-stashset)
* [**mod git stashset apply**](#mod-git-stashset-apply)
* [**mod git stashset push**](#mod-git-stashset-push)
* [**mod git sync**](#mod-git-sync)
* [**mod git sync csv**](#mod-git-sync-csv)
* [**mod git sync moderne**](#mod-git-sync-moderne)
* [**mod git status**](#mod-git-status)
* [**mod graphql**](#mod-graphql)
* [**mod kiro**](#mod-kiro)
* [**mod kiro chat**](#mod-kiro-chat)
* [**mod log**](#mod-log)
* [**mod log builds**](#mod-log-builds)
* [**mod log builds add**](#mod-log-builds-add)
* [**mod log execs**](#mod-log-execs)
* [**mod log execs add**](#mod-log-execs-add)
* [**mod log runs**](#mod-log-runs)
* [**mod log runs add**](#mod-log-runs-add)
* [**mod log syncs**](#mod-log-syncs)
* [**mod log syncs add**](#mod-log-syncs-add)
* [**mod list**](#mod-list)
* [**mod login**](#mod-login)
* [**mod monitor**](#mod-monitor)
* [**mod opencode**](#mod-opencode)
* [**mod opencode chat**](#mod-opencode-chat)
* [**mod pi**](#mod-pi)
* [**mod pi chat**](#mod-pi-chat)
* [**mod prebuild**](#mod-prebuild)
* [**mod publish**](#mod-publish)
* [**mod run**](#mod-run)
* [**mod run-history**](#mod-run-history)
* [**mod search**](#mod-search)
* [**mod study**](#mod-study)
* [**mod telemetry**](#mod-telemetry)
* [**mod telemetry publish**](#mod-telemetry-publish)
* [**mod trace**](#mod-trace)
* [**mod trace builds**](#mod-trace-builds)
* [**mod trace builds analyze**](#mod-trace-builds-analyze)
* [**mod trace execs**](#mod-trace-execs)
* [**mod trace execs analyze**](#mod-trace-execs-analyze)
* [**mod trace runs**](#mod-trace-runs)
* [**mod trace runs analyze**](#mod-trace-runs-analyze)
* [**mod trace syncs**](#mod-trace-syncs)
* [**mod trace syncs analyze**](#mod-trace-syncs-analyze)
* [**mod vscode**](#mod-vscode)
* [**mod vscode chat**](#mod-vscode-chat)
* [**mod windsurf**](#mod-windsurf)
* [**mod windsurf chat**](#mod-windsurf-chat)
* [**mod wrapper**](#mod-wrapper)

## mod


**mod** is a tool for large scale code transformation, analysis and search. It operates across many repositories at once. That can mean a whole team's or business unit's code. It is used for application modernization, vulnerability repair, tech stack consolidation and other cross-cutting coding tasks.

**mod** operates on working sets. A working set is a directory of git repositories. **mod git sync** acts like **rsync** from a source of repositories into a working set. **mod** builds Lossless Semantic Trees (https://docs.moderne.io/user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees) and uses them for deterministic code transformation, search and analysis at scale.

**mod search** finds code by text and by resolved type: the calls of a
method, the uses of a type, the usages of a dependency. **mod run** runs an
OpenRewrite recipe. Both work on the repositories in a directory once
**mod build** has built their LSTs.

A changeset is a set of changes across repositories in Moderne. Recipe runs and saved searches in Moderne are changesets.

**mod run** and **mod search** can do their work in Moderne. Give them **moderne://\<organization>** in place of a working set. **mod study** can read a changeset in Moderne as **moderne://changeset/\<changesetId>**.

### Usage

```
mod [subcommands]
```

### Options

| Name | Description |
| ---- | ----------- |
| `--version` |  Display version info. |

### Subcommands

* `agent`: Lists, messages and stops coding agent sessions.
* `amp`: (INCUBATING) Launches an Amp session configured to use **mod** for deterministic multi-repository work.
* `audit`: (INCUBATING) Perform an audit of recent activity.
* `build`: Generates LST artifacts for one or more repositories.
* `claude`: (INCUBATING) Launches a Claude Code session configured to use **mod** for deterministic multi-repository work.
* `clean`: Clean build and run artifacts produced by the CLI.
* `codex`: (INCUBATING) Launches a Codex session configured to use **mod** for deterministic multi-repository work.
* `config`: Global configuration options that are required by some CLI commands.
* `copilot`: (INCUBATING) Launches a GitHub Copilot session configured to use **mod** for deterministic multi-repository work.
* `cursor`: (INCUBATING) Launches a Cursor session configured to use **mod** for deterministic multi-repository work.
* `doctor`: Checks that this machine and the CLI's configuration can build and publish LSTs.
* `devcenter`: Generate DevCenter dashboards.
* `exec`: Execute an arbitrary shell command on selected repositories and partitions.
* `git`: Multi-repository git operations.
* `graphql`: Send a GraphQL query or mutation to Moderne and print the response.
* `kiro`: (INCUBATING) Launches a Kiro session configured to use **mod** for deterministic multi-repository work.
* `log`: Manages a log aggregate.
* `list`: Lists locally checked-out repositories.
* `login`: Logs the CLI into Moderne
* `monitor`: (INCUBATING) Launches an HTTP server used to monitor the CLI.
* `opencode`: (INCUBATING) Launches an opencode session configured to use **mod** for deterministic multi-repository work.
* `pi`: (INCUBATING) Launches a Pi session configured to use **mod** for deterministic multi-repository work.
* `prebuild`: Extracts build metadata without parsing source files.
* `publish`: Publishes the LST artifacts for one or more projects.
* `run`: Runs an OpenRewrite recipe on a working set or an organization in Moderne.
* `run-history`: Get information about the most recent recipe runs. This will be transitioning to **mod audit runs list** eventually. A deprecation notice will be added here when we suggest adopting the alternative.
* `search`: Do a fast, sophisticated code search across a working set.
* `study`: Exports a recipe data table from a working set or a changeset in Moderne.
* `telemetry`: Manage CLI telemetry pushed to the configured Moderne tenant.
* `trace`: Manages trace analysis tools.
* `vscode`: (INCUBATING) Launches a Visual Studio Code Chat session configured to use **mod** for deterministic multi-repository work.
* `windsurf`: (INCUBATING) Launches a Windsurf session configured to use **mod** for deterministic multi-repository work.
* `wrapper`: Create or configure a Moderne wrapper.

## mod agent

Lists, messages and stops coding agent sessions.




### Usage

```
mod agent [subcommands]
```


### Subcommands

* `sessions`: Lists coding agent sessions on a changeset in Moderne, or on this machine.
* `send`: Sends a message to a coding agent session.
* `stop`: Stops a coding agent session.

## mod agent sessions

Lists coding agent sessions on a changeset in Moderne, or on this machine.




### Usage

```
mod agent sessions [parameters]
```

### Examples

```
mod agent sessions 20261027120000-AbCdE

mod agent sessions --json
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `changeset` |  The changeset whose sessions are listed. Without one, this machine's sessions are listed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the sessions as JSON. |


## mod agent send

Sends a message to a coding agent session.


The agent reads it as its next turn, whatever it is doing.

### Usage

```
mod agent send [parameters]
```

### Examples

```
mod agent send 20261027120000-AbCdE/20261027121500-FgHiJ "Rebase on the changeset before you push again"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `session` |  The session as **mod agent sessions** lists it. A session on this machine also goes by its own id. |
| `message` |  What the agent is told. |



## mod agent stop

Stops a coding agent session.




### Usage

```
mod agent stop [parameters]
```

### Examples

```
mod agent stop 20261027120000-AbCdE/20261027121500-FgHiJ
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `session` |  The session as **mod agent sessions** lists it. A session on this machine also goes by its own id. |



## mod amp

(INCUBATING) Launches an Amp session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod amp [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches an Amp session configured to use **mod** for deterministic multi-repository work.

## mod amp chat

(INCUBATING) Launches an Amp session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod amp chat [parameters]
```

### Examples

```
mod amp chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod audit

(INCUBATING) Perform an audit of recent activity.


Sources information from the activity log kept locally to provide reports in various forms.

### Usage

```
mod audit [subcommands]
```


### Subcommands

* `builds`: (INCUBATING) Perform an audit of recent build activity.
* `runs`: (INCUBATING) Perform an audit of recent recipe running activity.

## mod audit builds

(INCUBATING) Perform an audit of recent build activity.


Sources information from the activity log kept locally to provide reports on LST building activity.

### Usage

```
mod audit builds [subcommands]
```


### Subcommands

* `list`: (INCUBATING) Prints build activity to standard output.

## mod audit builds list

(INCUBATING) Prints build activity to standard output.


Provides a form of build activity that can be directly consumed by reading standard output.

### Usage

```
mod audit builds list [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--streaming` |  (INCUBATING) Stream results from the audit to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like usage search in the IDE. |


## mod audit runs

(INCUBATING) Perform an audit of recent recipe running activity.


Sources information from the activity log kept locally to provide reports on recipe running activity.

### Usage

```
mod audit runs [subcommands]
```


### Subcommands

* `list`: (INCUBATING) Prints recipe run activity to standard output.

## mod audit runs list

(INCUBATING) Prints recipe run activity to standard output.


Provides a form of recipe run activity that can be directly consumed by reading standard output.

### Usage

```
mod audit runs list [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--streaming` |  (INCUBATING) Stream results from the audit to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like usage search in the IDE. |


## mod build

Generates LST artifacts for one or more repositories.


Once generated, the artifacts can be uploaded to your artifact management tool so that Moderne can ingest them or they can be used to run recipes locally.

While it is possible to manually build and publish your artifacts, we strongly recommend automating this. Please see the **moderneinc/mass-ingest-example** repository on GitHub for an idea of how to do that.

If the path itself is not a Git repository, then this command will recursively look through the directories to find Git repositories that match the **repository-\*** options.

If this command executes successfully, the LST artifact for each project will be stored in a **.moderne/build** directory inside of each repository that is built.

This command always builds LSTs locally. To download the LSTs that Moderne has for an organization, use **mod git sync moderne \<path> --organization \<name>** instead (add **--with-sources** to also clone the source code).

### Usage

```
mod build [parameters]
```

### Examples

```
mod build /path/to/project
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--dry-run` |  Do not actually build the LST(s), but list the steps that would be required to do so. |
| `--full` |  Force a full prebuild and parse, ignoring any cached prebuild metadata. |
| `--incremental` |  (INCUBATING) Update the most recent build in place, rebuilding only what changed since it, instead of producing a fresh full build. Falls back to a full build when no build tool supports it. |
| `--offline` |  When an underlying build tool has an offline mode, enable it. |
| `--parallel` |  (INCUBATING) Run the command in parallel. Setting this option to 2 or more causes the command to run with a fixed-size thread pool with that many threads. Setting this to 1 causes the command to run sequentially. Setting this to 0 runs the command with a thread pool sized to the number of CPU cores on your machine. Setting this to a negative number runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads. |
| `--streaming` |  (INCUBATING) Stream results from the build to the console as they are produced. This is intended to be machine readable for the creation of incremental experiences like in the IDE. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod claude

(INCUBATING) Launches a Claude Code session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod claude [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Claude Code session configured to use **mod** for deterministic multi-repository work.

## mod claude chat

(INCUBATING) Launches a Claude Code session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod claude chat [parameters]
```

### Examples

```
mod claude chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod clean

Clean build and run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean [subcommands]
```

### Examples

```
mod clean builds /path/to/project --keep 1
```


### Subcommands

* `builds`: Clean build artifacts produced by the CLI.
* `runs`: Clean run artifacts produced by the CLI.
* `repos`: Clean repositories left in a partial-success state by past sync runs.

## mod clean builds

Clean build artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean builds [parameters]
```

### Examples

```
mod clean builds /path/to/project --keep 1
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--keep` |  Keep this many run artifacts and clean all others. |


## mod clean runs

Clean run artifacts produced by the CLI.


Can be filtered to only clean certain artifacts.

### Usage

```
mod clean runs [parameters]
```

### Examples

```
mod clean runs /path/to/project --keep 1
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--keep` |  Keep this many run artifacts and clean all others. |


## mod clean repos

Clean repositories left in a partial-success state by past sync runs.


Removes repositories whose latest sync failed (sync-failed), that completed syncing but never built an LST (no-lst), or that exist on disk but are no longer present in the organization structure (not-in-org). These otherwise show up as partial successes in subsequent operations.

### Usage

```
mod clean repos [parameters]
```

### Examples

```
mod clean repos /path/to/project

mod clean repos /path/to/project --dry-run
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `-l`, `--no-lst` |  Remove repositories that completed sync but never built an LST. |
| `-n`, `--dry-run` |  List what would be deleted without deleting anything. |
| `-o`, `--not-in-org` |  Remove directories on disk that are not in the current organization structure. |
| `-s`, `--sync-failed` |  Remove repositories whose latest sync failed or was canceled. |


## mod codex

(INCUBATING) Launches a Codex session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod codex [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Codex session configured to use **mod** for deterministic multi-repository work.

## mod codex chat

(INCUBATING) Launches a Codex session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod codex chat [parameters]
```

### Examples

```
mod codex chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"

mod codex chat /path/to/working-set --model gpt-5.5-codex --effort high --resume
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--effort` |  How hard the model reasons, such as medium, high or xhigh. |  |
| `-m`, `--model` |  The model Codex runs with. |  |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--resume` |  Resume the newest Codex session in the directory, or the one named by id or name. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod config

Global configuration options that are required by some CLI commands.


Configuration set here is used as needed in all subsequent commands.

### Usage

```
mod config [subcommands]
```

### Examples

```
mod config moderne edit --api <tenant-api-gateway> --token <token>
```


### Subcommands

* `agents`: Configures the coding agent sessions **mod \<agent>** starts.
* `agent-tools`: Manage Moderne agent tools for coding agents.
* `build`: Configures build tools used to produce LSTs.
* `clone`: Configures cloning behavior.
* `dotnet`: Configures DotNet options used for building LSTs and running recipes.
* `environment`: The build environment that the CLI is running in.
* `exec`: Configures shell command execution behavior.
* `features`: Configures experimental features.
* `go`: Configures Go options used for building LSTs and running recipes.
* `http`: Configures HTTP options that will be used throughout the CLI.
* `java`: Configures Java options used for building LSTs and running recipes.
* `license`: Configure a license key.
* `lsts`: Configures LSTs production and publishing. 
* `metrics`: Configures metrics publishing.
* `moderne`: Configures the connection to a Moderne tenant.
* `node`: Configures Node options used for building LSTs and running recipes.
* `python`: Configures Python options used for building LSTs and running recipes.
* `recipes`: Find recipes and configure the recipe catalog available to the CLI.
* `run`: Configures recipe run behavior.
* `scm`: (DEPRECATED) Configures source code management.
* `secrets`: Configures how secrets in the configuration are kept.
* `telemetry`: Configures CLI telemetry.

## mod config agents

Configures the coding agent sessions **mod \<agent>** starts.




### Usage

```
mod config agents [subcommands]
```


### Subcommands

* `mcp`: Configure whether agent sessions are given Moderne's MCP server.
* `amp`: Configures how Amp is started.
* `claude`: Configures how Claude Code is started.
* `codex`: Configures how Codex is started.
* `copilot`: Configures how GitHub Copilot is started.
* `cursor`: Configures how Cursor is started.
* `kiro`: Configures how Kiro is started.
* `opencode`: Configures how opencode is started.
* `pi`: Configures how Pi is started.
* `vscode`: Configures how Visual Studio Code Chat is started.
* `windsurf`: Configures how Windsurf is started.

## mod config agents mcp

Configure whether agent sessions are given Moderne's MCP server.


**mod \<agent> chat** gives Claude Code, Codex and the Copilot CLI Moderne's remote MCP server. Turn it off where MCP is not approved. **MOD\_AGENTS\_MCP=false** also turns it off.

### Usage

```
mod config agents mcp
```

### Examples

```
mod config agents mcp --enabled=false
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  Whether sessions are given Moderne's MCP server. |


## mod config agents amp

Configures how Amp is started.


### Usage

```
mod config agents amp [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents amp launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents amp launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents amp launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents amp launcher delete
```



## mod config agents amp launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents amp launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents amp launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents amp launcher show
```



## mod config agents claude

Configures how Claude Code is started.


### Usage

```
mod config agents claude [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents claude launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents claude launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents claude launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents claude launcher delete
```



## mod config agents claude launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents claude launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents claude launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents claude launcher show
```



## mod config agents codex

Configures how Codex is started.


### Usage

```
mod config agents codex [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents codex launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents codex launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents codex launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents codex launcher delete
```



## mod config agents codex launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents codex launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents codex launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents codex launcher show
```



## mod config agents copilot

Configures how GitHub Copilot is started.


### Usage

```
mod config agents copilot [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents copilot launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents copilot launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents copilot launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents copilot launcher delete
```



## mod config agents copilot launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents copilot launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents copilot launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents copilot launcher show
```



## mod config agents cursor

Configures how Cursor is started.


### Usage

```
mod config agents cursor [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents cursor launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents cursor launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents cursor launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents cursor launcher delete
```



## mod config agents cursor launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents cursor launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents cursor launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents cursor launcher show
```



## mod config agents kiro

Configures how Kiro is started.


### Usage

```
mod config agents kiro [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents kiro launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents kiro launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents kiro launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents kiro launcher delete
```



## mod config agents kiro launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents kiro launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents kiro launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents kiro launcher show
```



## mod config agents opencode

Configures how opencode is started.


### Usage

```
mod config agents opencode [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents opencode launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents opencode launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents opencode launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents opencode launcher delete
```



## mod config agents opencode launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents opencode launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents opencode launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents opencode launcher show
```



## mod config agents pi

Configures how Pi is started.


### Usage

```
mod config agents pi [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents pi launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents pi launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents pi launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents pi launcher delete
```



## mod config agents pi launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents pi launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents pi launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents pi launcher show
```



## mod config agents vscode

Configures how Visual Studio Code Chat is started.


### Usage

```
mod config agents vscode [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents vscode launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents vscode launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents vscode launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents vscode launcher delete
```



## mod config agents vscode launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents vscode launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents vscode launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents vscode launcher show
```



## mod config agents windsurf

Configures how Windsurf is started.


### Usage

```
mod config agents windsurf [subcommands]
```


### Subcommands

* `launcher`: Configures a script that starts the agent in place of its executable.

## mod config agents windsurf launcher

Configures a script that starts the agent in place of its executable.


### Usage

```
mod config agents windsurf launcher [subcommands]
```


### Subcommands

* `delete`: Removes the launcher of the agent.
* `edit`: Configures the script that starts the agent in place of its executable.
* `show`: Displays the launcher of the agent.

## mod config agents windsurf launcher delete

Removes the launcher of the agent.


### Usage

```
mod config agents windsurf launcher delete
```



## mod config agents windsurf launcher edit

Configures the script that starts the agent in place of its executable.


The script is started with the agent's arguments, including **--version**, and must pass them on to the agent.

On Linux and macOS, end it with **exec \<agent> "$@"**. On Windows, end a batch file with **\<agent> %%\*** or a PowerShell script with **& \<agent> @args; exit $LASTEXITCODE**, or use a program.

### Usage

```
mod config agents windsurf launcher edit [parameters]
```

### Examples

```
mod config agents claude launcher edit ~/bin/claude-launcher.sh

mod config agents claude launcher edit C:\tools\claude-launcher.cmd
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `launcher` |  The script that starts the agent. |



## mod config agents windsurf launcher show

Displays the launcher of the agent.


### Usage

```
mod config agents windsurf launcher show
```



## mod config agent-tools

Manage Moderne agent tools for coding agents.


Install and update Moderne agent tools (skills and MCP servers) for Claude Code, Windsurf, Cursor, GitHub Copilot, GitHub Copilot CLI, Sourcegraph Amp, OpenAI Codex, opencode, Kiro, and Pi.

### Usage

```
mod config agent-tools [subcommands]
```

### Examples

```
mod config agent-tools install
```


### Subcommands

* `install`: Creates or updates Moderne agent tools for coding agents.
* `uninstall`: Removes Moderne agent tools from coding agents.
* `skills`: Manage Moderne skills for coding agents.
* `claude`: Manage Moderne agent tools for Claude Code.
* `windsurf`: Manage Moderne agent tools for Windsurf.
* `cursor`: Manage Moderne agent tools for Cursor.
* `copilot`: Manage Moderne agent tools for GitHub Copilot.
* `amp`: Manage Moderne agent tools for Sourcegraph Amp.
* `codex`: Manage Moderne agent tools for OpenAI Codex.
* `opencode`: Manage Moderne agent tools for opencode.
* `kiro`: Manage Moderne agent tools for Kiro.
* `pi`: Manage Moderne agent tools for Pi.
* `prethink`: Configures the Prethink context refreshed live by the Moderne MCP server.

## mod config agent-tools install

Creates or updates Moderne agent tools for coding agents.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) and registers the Moderne MCP server for all detected coding agents (Claude Code, Windsurf, Cursor, GitHub Copilot, GitHub Copilot CLI, Sourcegraph Amp, OpenAI Codex, opencode, Kiro). Installs the skills for Pi. Safe to run multiple times — existing installations are updated in place.

### Usage

```
mod config agent-tools install
```

### Examples

```
mod config agent-tools install
```



## mod config agent-tools uninstall

Removes Moderne agent tools from coding agents.


Removes skills and unregisters the Moderne MCP server from all detected coding agents (Claude Code, Windsurf, Cursor, GitHub Copilot, GitHub Copilot CLI, Sourcegraph Amp, OpenAI Codex, opencode, Kiro). Removes the skills from Pi.

### Usage

```
mod config agent-tools uninstall
```

### Examples

```
mod config agent-tools uninstall
```



## mod config agent-tools skills

Manage Moderne skills for coding agents.


Install or remove only the Moderne skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) for all detected coding agents, without modifying MCP server registrations. Use 'mod config agent-tools install' to install both skills and the MCP server together.

### Usage

```
mod config agent-tools skills [subcommands]
```

### Examples

```
mod config agent-tools skills install
```


### Subcommands

* `install`: Install Moderne skills to all detected coding agents.
* `uninstall`: Remove Moderne skills from all detected coding agents.

## mod config agent-tools skills install

Install Moderne skills to all detected coding agents.


Installs only the skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) to all detected coding agents without registering the MCP server. Use 'mod config agent-tools install' to install both skills and the MCP server together.

### Usage

```
mod config agent-tools skills install
```

### Examples

```
mod config agent-tools skills install
```



## mod config agent-tools skills uninstall

Remove Moderne skills from all detected coding agents.


Removes only the skills from all detected coding agents without unregistering the MCP server.

### Usage

```
mod config agent-tools skills uninstall
```

### Examples

```
mod config agent-tools skills uninstall
```



## mod config agent-tools claude

Manage Moderne agent tools for Claude Code.


Installs skills as a Claude Code plugin under \~/.claude/marketplaces/moderne/ and registers the MCP server via the 'claude' CLI.

### Usage

```
mod config agent-tools claude [subcommands]
```

### Examples

```
mod config agent-tools claude install
```


### Subcommands

* `install`: Install Moderne agent tools for Claude Code.
* `uninstall`: Remove Moderne agent tools from Claude Code.

## mod config agent-tools claude install

Install Moderne agent tools for Claude Code.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) as a Claude Code plugin and registers the Moderne MCP server via the 'claude' CLI. Safe to run multiple times.

### Usage

```
mod config agent-tools claude install
```

### Examples

```
mod config agent-tools claude install
```



## mod config agent-tools claude uninstall

Remove Moderne agent tools from Claude Code.


Removes skills and unregisters the Moderne MCP server from Claude Code.

### Usage

```
mod config agent-tools claude uninstall
```

### Examples

```
mod config agent-tools claude uninstall
```



## mod config agent-tools windsurf

Manage Moderne agent tools for Windsurf.


Installs skills under \~/.codeium/windsurf/skills/ and registers the MCP server in \~/.codeium/windsurf/mcp\_config.json.

### Usage

```
mod config agent-tools windsurf [subcommands]
```

### Examples

```
mod config agent-tools windsurf install
```


### Subcommands

* `install`: Install Moderne agent tools for Windsurf.
* `uninstall`: Remove Moderne agent tools from Windsurf.

## mod config agent-tools windsurf install

Install Moderne agent tools for Windsurf.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.codeium/windsurf/skills/ and registers the Moderne MCP server in \~/.codeium/windsurf/mcp\_config.json. Safe to run multiple times.

### Usage

```
mod config agent-tools windsurf install
```

### Examples

```
mod config agent-tools windsurf install
```



## mod config agent-tools windsurf uninstall

Remove Moderne agent tools from Windsurf.


Removes skills and unregisters the Moderne MCP server from Windsurf.

### Usage

```
mod config agent-tools windsurf uninstall
```

### Examples

```
mod config agent-tools windsurf uninstall
```



## mod config agent-tools cursor

Manage Moderne agent tools for Cursor.


Installs skills as .mdc rule files in .cursor/rules/ and registers the MCP server in \~/.cursor/mcp.json.

### Usage

```
mod config agent-tools cursor [subcommands]
```

### Examples

```
mod config agent-tools cursor install
```


### Subcommands

* `install`: Install Moderne agent tools for Cursor.
* `uninstall`: Remove Moderne agent tools from Cursor.

## mod config agent-tools cursor install

Install Moderne agent tools for Cursor.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) as .mdc rule files in .cursor/rules/ and registers the Moderne MCP server in \~/.cursor/mcp.json. Safe to run multiple times.

### Usage

```
mod config agent-tools cursor install
```

### Examples

```
mod config agent-tools cursor install
```



## mod config agent-tools cursor uninstall

Remove Moderne agent tools from Cursor.


Removes skills and unregisters the Moderne MCP server from Cursor.

### Usage

```
mod config agent-tools cursor uninstall
```

### Examples

```
mod config agent-tools cursor uninstall
```



## mod config agent-tools copilot

Manage Moderne agent tools for GitHub Copilot.


Installs skills via .github/instructions/ and registers the MCP server in both .vscode/mcp.json and \~/.copilot/mcp-config.json.

### Usage

```
mod config agent-tools copilot [subcommands]
```

### Examples

```
mod config agent-tools copilot install
```


### Subcommands

* `install`: Install Moderne agent tools for GitHub Copilot.
* `uninstall`: Remove Moderne agent tools from GitHub Copilot.

## mod config agent-tools copilot install

Install Moderne agent tools for GitHub Copilot.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) as instruction files in .github/instructions/ and registers the Moderne MCP server in both .vscode/mcp.json and \~/.copilot/mcp-config.json. Safe to run multiple times.

### Usage

```
mod config agent-tools copilot install
```

### Examples

```
mod config agent-tools copilot install
```



## mod config agent-tools copilot uninstall

Remove Moderne agent tools from GitHub Copilot.


Removes skills and unregisters the Moderne MCP server from GitHub Copilot.

### Usage

```
mod config agent-tools copilot uninstall
```

### Examples

```
mod config agent-tools copilot uninstall
```



## mod config agent-tools amp

Manage Moderne agent tools for Sourcegraph Amp.


Installs skills under \~/.config/agents/skills/ and registers the MCP server via the 'amp' CLI.

### Usage

```
mod config agent-tools amp [subcommands]
```

### Examples

```
mod config agent-tools amp install
```


### Subcommands

* `install`: Install Moderne agent tools for Sourcegraph Amp.
* `uninstall`: Remove Moderne agent tools from Sourcegraph Amp.

## mod config agent-tools amp install

Install Moderne agent tools for Sourcegraph Amp.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.config/agents/skills/ and registers the Moderne MCP server via the 'amp' CLI. Safe to run multiple times.

### Usage

```
mod config agent-tools amp install
```

### Examples

```
mod config agent-tools amp install
```



## mod config agent-tools amp uninstall

Remove Moderne agent tools from Sourcegraph Amp.


Removes skills and unregisters the Moderne MCP server from Sourcegraph Amp.

### Usage

```
mod config agent-tools amp uninstall
```

### Examples

```
mod config agent-tools amp uninstall
```



## mod config agent-tools codex

Manage Moderne agent tools for OpenAI Codex.


Installs skills under \~/.agents/skills/ and registers the MCP server via the 'codex' CLI.

### Usage

```
mod config agent-tools codex [subcommands]
```

### Examples

```
mod config agent-tools codex install
```


### Subcommands

* `install`: Install Moderne agent tools for OpenAI Codex.
* `uninstall`: Remove Moderne agent tools from OpenAI Codex.

## mod config agent-tools codex install

Install Moderne agent tools for OpenAI Codex.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.agents/skills/ and registers the Moderne MCP server via the 'codex' CLI. Safe to run multiple times.

### Usage

```
mod config agent-tools codex install
```

### Examples

```
mod config agent-tools codex install
```



## mod config agent-tools codex uninstall

Remove Moderne agent tools from OpenAI Codex.


Removes skills and unregisters the Moderne MCP server from OpenAI Codex.

### Usage

```
mod config agent-tools codex uninstall
```

### Examples

```
mod config agent-tools codex uninstall
```



## mod config agent-tools opencode

Manage Moderne agent tools for opencode.


Installs skills under \~/.config/opencode/skills/ (auto-discovered by opencode) and registers the Moderne MCP server in \~/.config/opencode/opencode.json(c).

### Usage

```
mod config agent-tools opencode [subcommands]
```

### Examples

```
mod config agent-tools opencode install
```


### Subcommands

* `install`: Install Moderne agent tools for opencode.
* `uninstall`: Remove Moderne agent tools from opencode.

## mod config agent-tools opencode install

Install Moderne agent tools for opencode.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.config/opencode/skills/ and registers the Moderne MCP server in \~/.config/opencode/opencode.json. Safe to run multiple times.

### Usage

```
mod config agent-tools opencode install
```

### Examples

```
mod config agent-tools opencode install
```



## mod config agent-tools opencode uninstall

Remove Moderne agent tools from opencode.


Removes skills and unregisters the Moderne MCP server from opencode.

### Usage

```
mod config agent-tools opencode uninstall
```

### Examples

```
mod config agent-tools opencode uninstall
```



## mod config agent-tools kiro

Manage Moderne agent tools for Kiro.


Installs skills under \~/.kiro/skills/ and registers the MCP server in \~/.kiro/settings/mcp.json.

### Usage

```
mod config agent-tools kiro [subcommands]
```

### Examples

```
mod config agent-tools kiro install
```


### Subcommands

* `install`: Install Moderne agent tools for Kiro.
* `uninstall`: Remove Moderne agent tools from Kiro.

## mod config agent-tools kiro install

Install Moderne agent tools for Kiro.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.kiro/skills/ and registers the Moderne MCP server in \~/.kiro/settings/mcp.json. Safe to run multiple times.

### Usage

```
mod config agent-tools kiro install
```

### Examples

```
mod config agent-tools kiro install
```



## mod config agent-tools kiro uninstall

Remove Moderne agent tools from Kiro.


Removes skills and unregisters the Moderne MCP server from Kiro.

### Usage

```
mod config agent-tools kiro uninstall
```

### Examples

```
mod config agent-tools kiro uninstall
```



## mod config agent-tools pi

Manage Moderne agent tools for Pi.


Installs skills under \~/.agents/skills/.

### Usage

```
mod config agent-tools pi [subcommands]
```

### Examples

```
mod config agent-tools pi install
```


### Subcommands

* `install`: Install Moderne agent tools for Pi.
* `uninstall`: Remove Moderne agent tools from Pi.

## mod config agent-tools pi install

Install Moderne agent tools for Pi.


Installs skills (edit-code, analyze-code, search-code, find-symbols, pattern-replace, inspect-status, change-symbols, query-datatable, create-recipe) under \~/.agents/skills/. Safe to run multiple times.

### Usage

```
mod config agent-tools pi install
```

### Examples

```
mod config agent-tools pi install
```



## mod config agent-tools pi uninstall

Remove Moderne agent tools from Pi.


Removes the skills from Pi.

### Usage

```
mod config agent-tools pi uninstall
```

### Examples

```
mod config agent-tools pi uninstall
```



## mod config agent-tools prethink

Configures the Prethink context refreshed live by the Moderne MCP server.


While the LST (re)compiles in the background, **mod mcp** re-runs the configured Prethink recipe to keep **.moderne/context/** fresh for coding agents. The recipe is identified by name; its artifact and version are managed via **mod config recipes**.

### Usage

```
mod config agent-tools prethink [subcommands]
```

### Examples

```
mod config agent-tools prethink edit --recipe io.moderne.prethink.UpdatePrethinkContextStarter --enabled
```

### Subcommands

* `edit`: Configures the Prethink recipe refreshed live by the Moderne MCP server.
* `show`: Displays the configured Prethink context recipe.
* `disable`: Disables the live Prethink context refresh.

## mod config agent-tools prethink edit

Configures the Prethink recipe refreshed live by the Moderne MCP server.


The recipe must already be resolvable in the recipe marketplace; install it with **mod config recipes** first.

### Usage

```
mod config agent-tools prethink edit
```

### Examples

```
mod config agent-tools prethink edit --recipe io.moderne.prethink.UpdatePrethinkContextStarter --enabled
```

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--enabled` |  Enables the live Prethink context refresh. Disabled by default. |  |
| `--option` |  A recipe option as **key=value**. May be repeated to supply multiple options. |  |
| `--recipe` |  The fully-qualified name of the Prethink recipe to run on refresh. | `io.moderne.prethink.UpdatePrethinkContextStarter` |


## mod config agent-tools prethink show

Displays the configured Prethink context recipe.


Shows the recipe the Moderne MCP server runs to refresh **.moderne/context/** and whether the refresh is enabled.

### Usage

```
mod config agent-tools prethink show
```



## mod config agent-tools prethink disable

Disables the live Prethink context refresh.


Removes the configured Prethink context recipe so the Moderne MCP server no longer refreshes **.moderne/context/**.

### Usage

```
mod config agent-tools prethink disable
```



## mod config build

Configures build tools used to produce LSTs.




### Usage

```
mod config build [subcommands]
```


### Subcommands

* `bazel`: Configures Bazel as it is used for LST production.
* `dotnet`: Configures dotnet as it is used for LST production.
* `environment`: Configure environment variables to apply to build tool when building LSTs.
* `go`: Configures Go as it is used to produce LSTs and run recipes.
* `gradle`: Configures Gradle as it is used to resolve recipe dependencies and when running recipes.
* `javascript`: Configures JavaScript/TypeScript as it is used to produce LSTs.
* `mainframe`: Configures the mainframe parsers (Cobol, JCL, Control-M) as they are used for LST production.
* `maven`: Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.
* `node`: Configures Node as it is used for LST production.
* `parsers`: Configure custom file-extension-to-parser mappings.
* `python`: Configures Python as it is used for LST production.
* `resource`: Configures the parsing of files no other build step claimed.
* `ruby`: Configures Ruby as it is used for LST production.
* `style`: Configures style settings used for LST production.

## mod config build bazel

Configures Bazel as it is used for LST production.




### Usage

```
mod config build bazel [subcommands]
```


### Subcommands

* `arguments`: Configure Bazel build arguments.
* `executable`: Configure Bazel executable.
* `timeout`: Configure the build timeout.

## mod config build bazel arguments

Configure Bazel build arguments.


Build arguments are added to the end of the Bazel command line when building LSTs.

### Usage

```
mod config build bazel arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Bazel.
* `edit`: Configure Bazel build arguments.
* `show`: Displays the configured Bazel additional build arguments.

## mod config build bazel arguments delete

Removes additional build arguments for Bazel.


### Usage

```
mod config build bazel arguments delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel arguments edit

Configure Bazel build arguments.


Build arguments are added to the end of the Bazel command line when building LSTs.

### Usage

```
mod config build bazel arguments edit
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel arguments show

Displays the configured Bazel additional build arguments.


### Usage

```
mod config build bazel arguments show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel executable

Configure Bazel executable.


Allows you to specify the location of a Bazel _settings.xml_ file that should be used when Bazel is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **`${ENV_VAR}`** syntax.

### Usage

```
mod config build bazel executable [subcommands]
```

### Subcommands

* `delete`: Removes the configured Bazel executable.
* `edit`: Configure the Bazel executable.
* `show`: Displays the configured Bazel executable.

## mod config build bazel executable delete

Removes the configured Bazel executable.


The CLI will revert to its default mode of detecting the Bazel executable.

### Usage

```
mod config build bazel executable delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel executable edit

Configure the Bazel executable.


Determines whether _bazelisk_ or _bazel_ will be used.

### Usage

```
mod config build bazel executable edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `executable` |  The bazel executable to use. This can be just _bazelisk_ or _bazel_ if either is on PATH or a fully qualified executable name if not. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel executable show

Displays the configured Bazel executable.




### Usage

```
mod config build bazel executable show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build bazel timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build bazel timeout delete

Removes the configured build timeout.


### Usage

```
mod config build bazel timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build bazel timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build bazel timeout show

Displays the configured build timeout.


### Usage

```
mod config build bazel timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet

Configures dotnet as it is used for LST production.




### Usage

```
mod config build dotnet [subcommands]
```


### Subcommands

* `nuget-config`: Configure the nuget.config whose package sources dependency packages are fetched from.
* `timeout`: Configure the build timeout.

## mod config build dotnet nuget-config

Configure the nuget.config whose package sources dependency packages are fetched from.


Converting an LST to version 3 builds a type table for each NuGet dependency from its published package, fetched from the package sources of this _nuget.config_, or of the user profile's when none is configured. You can also use an environment variable that points to the location of the file with **`${ENV_VAR}`** syntax.

### Usage

```
mod config build dotnet nuget-config [subcommands]
```

### Examples

```
mod config build dotnet nuget-config edit <path-to-nuget.config>
```


### Subcommands

* `delete`: Removes the configured nuget.config.
* `edit`: Configure the nuget.config whose package sources dependency packages are fetched from.
* `show`: Displays the configured nuget.config.

## mod config build dotnet nuget-config delete

Removes the configured nuget.config.




### Usage

```
mod config build dotnet nuget-config delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet nuget-config edit

Configure the nuget.config whose package sources dependency packages are fetched from.


### Usage

```
mod config build dotnet nuget-config edit [parameters]
```

### Examples

```
mod config build dotnet nuget-config edit <path-to-nuget.config>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `nugetConfig` |  The location of a _nuget.config_ file to use. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet nuget-config show

Displays the configured nuget.config.




### Usage

```
mod config build dotnet nuget-config show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build dotnet timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build dotnet timeout delete

Removes the configured build timeout.


### Usage

```
mod config build dotnet timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build dotnet timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build dotnet timeout show

Displays the configured build timeout.


### Usage

```
mod config build dotnet timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build environment

Configure environment variables to apply to build tool when building LSTs.


Manages environment variables applied to build tool's execution environment.

### Usage

```
mod config build environment [subcommands]
```


### Subcommands

* `delete`: Removes configured build environment variables.
* `edit`: Configure environment variables to use when building LSTs.
* `show`: Displays the configured build environment variables.

## mod config build environment delete

Removes configured build environment variables.


### Usage

```
mod config build environment delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build environment edit

Configure environment variables to use when building LSTs.


Edits environment variables applied to build tool's execution environment.

### Usage

```
mod config build environment edit [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `environmentKeyPairs` |  Environment variables in KEY=VALUE format. | `MAVEN_OPTS=-Xmx2g NPM_TOKEN=secret123` |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build environment show

Displays the configured build environment variables.


### Usage

```
mod config build environment show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go

Configures Go as it is used to produce LSTs and run recipes.




### Usage

```
mod config build go [subcommands]
```

### Examples

```
mod config build go gomemlimit edit "8GiB"
```


### Subcommands

* `gomemlimit`: Configure the Go runtime memory limit.
* `timeout`: Configure the build timeout.

## mod config build go gomemlimit

Configure the Go runtime memory limit.


Sets the GOMEMLIMIT environment variable for the Go engine when building LSTs and running recipes. Accepts a Go memory limit such as '4GiB', '512MiB', or 'off'. Defaults to 4GiB.

### Usage

```
mod config build go gomemlimit [subcommands]
```


### Subcommands

* `delete`: Removes the configured Go memory limit.
* `edit`: Configure the Go runtime memory limit.
* `show`: Displays the configured Go memory limit.

## mod config build go gomemlimit delete

Removes the configured Go memory limit.


### Usage

```
mod config build go gomemlimit delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go gomemlimit edit

Configure the Go runtime memory limit.


Sets the GOMEMLIMIT environment variable for the Go engine when building LSTs and running recipes.

### Usage

```
mod config build go gomemlimit edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `value` |  The Go memory limit, e.g. '4GiB', '512MiB', or 'off' to disable it. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go gomemlimit show

Displays the configured Go memory limit.


### Usage

```
mod config build go gomemlimit show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build go timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build go timeout delete

Removes the configured build timeout.


### Usage

```
mod config build go timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build go timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build go timeout show

Displays the configured build timeout.


### Usage

```
mod config build go timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle

Configures Gradle as it is used to resolve recipe dependencies and when running recipes.




### Usage

```
mod config build gradle [subcommands]
```

### Examples

```
mod config build gradle arguments edit --refresh-dependencies
```


### Subcommands

* `arguments`: Configure Gradle build arguments.
* `installation`: Configures locations of Gradle installations that can be used by build tools.
* `timeout`: Configure the build timeout.
* `version`: Configures the Gradle version to use.

## mod config build gradle arguments

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Gradle.
* `edit`: Configure Gradle build arguments.
* `show`: Displays the configured Gradle additional build arguments.

## mod config build gradle arguments delete

Removes additional build arguments for Gradle.


### Usage

```
mod config build gradle arguments delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle arguments edit

Configure Gradle build arguments.


Build arguments are added to the end of the Gradle command line when building LSTs.

### Usage

```
mod config build gradle arguments edit
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle arguments show

Displays the configured Gradle additional build arguments.


### Usage

```
mod config build gradle arguments show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle installation

Configures locations of Gradle installations that can be used by build tools.


Must be configured before you can run the build command if Gradle is installed in non-standard locations.

### Usage

```
mod config build gradle installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of Gradle installations that can be used by build tools.
* `delete`: Removes the configured Gradle installations. The CLI will revert to using only detectable Gradle installations.
* `list`: Displays the detected and configured Gradle installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config build gradle installation edit

Configures locations of Gradle installations that can be used by build tools.


Must be configured before you can run the build command if Gradle is installed in non-standard locations.

### Usage

```
mod config build gradle installation edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `gradleHomes` |  The paths on disk where Gradle installations (GRADLE\_HOME directories) can be found. |



## mod config build gradle installation delete

Removes the configured Gradle installations. The CLI will revert to using only detectable Gradle installations.


### Usage

```
mod config build gradle installation delete
```



## mod config build gradle installation list

Displays the detected and configured Gradle installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config build gradle installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of Gradle installations to . |


## mod config build gradle timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build gradle timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build gradle timeout delete

Removes the configured build timeout.


### Usage

```
mod config build gradle timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build gradle timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle timeout show

Displays the configured build timeout.


### Usage

```
mod config build gradle timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle version

Configures the Gradle version to use.


Configure a version like "4.5", "8", or "8.1.1" depending on the degree of control needed.

### Usage

```
mod config build gradle version [subcommands]
```


### Subcommands

* `edit`: Configures the Gradle version to use.
* `delete`: Reverts to auto-detection of a Gradle version to use when building a repository.
* `show`: Displays the configured Gradle version.

## mod config build gradle version edit

Configures the Gradle version to use.


Configure a version like "4.5", "8", or "8.1.1" depending on the degree of control needed.

### Usage

```
mod config build gradle version edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedGradle` |  The named Gradle version to use. If set to "auto", the CLI will revert to detecting the correct Gradle to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle version delete

Reverts to auto-detection of a Gradle version to use when building a repository.


### Usage

```
mod config build gradle version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build gradle version show

Displays the configured Gradle version.


### Usage

```
mod config build gradle version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build javascript

Configures JavaScript/TypeScript as it is used to produce LSTs.




### Usage

```
mod config build javascript [subcommands]
```

### Examples

```
mod config build javascript nodeoptions edit "--max-old-space-size=8192"
```


### Subcommands

* `nodeoptions`: Configure Node.js options.

## mod config build javascript nodeoptions

Configure Node.js options.


Node options are set via the NODE\_OPTIONS environment variable when building LSTs and running recipes.

### Usage

```
mod config build javascript nodeoptions [subcommands]
```


### Subcommands

* `delete`: Removes configured Node.js options.
* `edit`: Configure Node.js options.
* `show`: Displays the configured Node.js options.

## mod config build javascript nodeoptions delete

Removes configured Node.js options.


### Usage

```
mod config build javascript nodeoptions delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build javascript nodeoptions edit

Configure Node.js options.


Node options are set via the NODE\_OPTIONS environment variable when building LSTs and running recipes.

### Usage

```
mod config build javascript nodeoptions edit
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build javascript nodeoptions show

Displays the configured Node.js options.


### Usage

```
mod config build javascript nodeoptions show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build mainframe

Configures the mainframe parsers (Cobol, JCL, Control-M) as they are used for LST production.




### Usage

```
mod config build mainframe [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build mainframe timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build mainframe timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build mainframe timeout delete

Removes the configured build timeout.


### Usage

```
mod config build mainframe timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build mainframe timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build mainframe timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build mainframe timeout show

Displays the configured build timeout.


### Usage

```
mod config build mainframe timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven

Configures Maven as it is used for LST production, resolving recipe dependencies, and when running recipes.




### Usage

```
mod config build maven [subcommands]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```


### Subcommands

* `arguments`: Configure Maven build arguments.
* `installation`: Configures locations of Maven installations that can be used by build tools.
* `settings`: Configure Maven settings.
* `timeout`: Configure the build timeout.
* `version`: Configures the Maven version to use.

## mod config build maven arguments

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments [subcommands]
```


### Subcommands

* `delete`: Removes additional build arguments for Maven.
* `edit`: Configure Maven build arguments.
* `show`: Displays the configured Maven additional build arguments.

## mod config build maven arguments delete

Removes additional build arguments for Maven.


### Usage

```
mod config build maven arguments delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven arguments edit

Configure Maven build arguments.


Build arguments are added to the end of the Maven command line when building LSTs.

### Usage

```
mod config build maven arguments edit
```

### Examples

```
mod config build maven arguments edit -Dexec.skip=true
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven arguments show

Displays the configured Maven additional build arguments.


### Usage

```
mod config build maven arguments show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven installation

Configures locations of Maven installations that can be used by build tools.


Must be configured before you can run the build command if Maven is installed in non-standard locations.

### Usage

```
mod config build maven installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of Maven installations that can be used by build tools.
* `delete`: Removes the configured Maven installations. The CLI will revert to using only detectable Maven installations.
* `list`: Displays the detected and configured Maven installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config build maven installation edit

Configures locations of Maven installations that can be used by build tools.


Must be configured before you can run the build command if Maven is installed in non-standard locations.

### Usage

```
mod config build maven installation edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `mavenHomes` |  The paths on disk where Maven installations (MAVEN\_HOME directories) can be found. |



## mod config build maven installation delete

Removes the configured Maven installations. The CLI will revert to using only detectable Maven installations.


### Usage

```
mod config build maven installation delete
```



## mod config build maven installation list

Displays the detected and configured Maven installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config build maven installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of Maven installations to those matching this version. |


## mod config build maven settings

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes. You can also use an environment variable that points to location of the file with **`${ENV_VAR}`** syntax.

### Usage

```
mod config build maven settings [subcommands]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```


### Subcommands

* `delete`: Removes the configured Maven settings.
* `edit`: Configure Maven settings.
* `show`: Displays the configured Maven settings.

## mod config build maven settings delete

Removes the configured Maven settings.




### Usage

```
mod config build maven settings delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven settings edit

Configure Maven settings.


Allows you to specify the location of a Maven _settings.xml_ file that should be used when Maven is being used to resolve recipe dependencies or run recipes.

### Usage

```
mod config build maven settings edit [parameters]
```

### Examples

```
mod config build maven settings edit <path-to-settings.xml>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `settingsXml` |  The location of a Maven _settings.xml_ file to use. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven settings show

Displays the configured Maven settings.




### Usage

```
mod config build maven settings show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build maven timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build maven timeout delete

Removes the configured build timeout.


### Usage

```
mod config build maven timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build maven timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven timeout show

Displays the configured build timeout.


### Usage

```
mod config build maven timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven version

Configures the Maven version to use.


Configure an exact version like "3.9.6" to use ahead of the project's Maven wrapper.

### Usage

```
mod config build maven version [subcommands]
```


### Subcommands

* `edit`: Configures the Maven version to use.
* `delete`: Reverts to auto-detection of a Maven version to use when building a repository.
* `show`: Displays the configured Maven version.

## mod config build maven version edit

Configures the Maven version to use.


Configure an exact version like "3.9.6" to use ahead of the project's Maven wrapper.

### Usage

```
mod config build maven version edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedMaven` |  The named Maven version to use. If set to "auto", the CLI will revert to detecting the correct Maven to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven version delete

Reverts to auto-detection of a Maven version to use when building a repository.


### Usage

```
mod config build maven version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build maven version show

Displays the configured Maven version.


### Usage

```
mod config build maven version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build node

Configures Node as it is used for LST production.




### Usage

```
mod config build node [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build node timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build node timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build node timeout delete

Removes the configured build timeout.


### Usage

```
mod config build node timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build node timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build node timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build node timeout show

Displays the configured build timeout.


### Usage

```
mod config build node timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build parsers

Configure custom file-extension-to-parser mappings.


Manages which file extensions are parsed by which parser type when building LSTs. Supports resource/structural file types such as XML, JSON, and YAML. File extensions for compiled language types (Java, Kotlin, etc.) are enforced by their respective toolchains and cannot be customized here.

### Usage

```
mod config build parsers [subcommands]
```


### Subcommands

* `add`: Add a parser mapping for a file type.
* `delete`: Removes configured parser mappings.
* `show`: Displays configured parser mappings.

## mod config build parsers add

Add a parser mapping for a file type.


Associates glob patterns with a parser type so matching files are parsed accordingly.

### Usage

```
mod config build parsers add [parameters]
```

### Examples

```
mod config build parsers add xml "**/*.mst" "**/*.xbind"

mod config build parsers add json "**/*.cfg"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `type` |  The parser type. Supported: docker, gradle, groovy, hcl, json, plaintext, properties, proto, toml, xml, yaml. |
| `patterns` |  Glob patterns for files to parse with this type (e.g. \*\*/\*.mst \*\*/\*.xbind). |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build parsers delete

Removes configured parser mappings.


### Usage

```
mod config build parsers delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `type` |  Optional parser type to delete. If omitted, all mappings are removed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build parsers show

Displays configured parser mappings.


### Usage

```
mod config build parsers show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build python

Configures Python as it is used for LST production.




### Usage

```
mod config build python [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build python timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build python timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build python timeout delete

Removes the configured build timeout.


### Usage

```
mod config build python timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build python timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build python timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build python timeout show

Displays the configured build timeout.


### Usage

```
mod config build python timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build resource

Configures the parsing of files no other build step claimed.




### Usage

```
mod config build resource [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build resource timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build resource timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build resource timeout delete

Removes the configured build timeout.


### Usage

```
mod config build resource timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build resource timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build resource timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build resource timeout show

Displays the configured build timeout.


### Usage

```
mod config build resource timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build ruby

Configures Ruby as it is used for LST production.




### Usage

```
mod config build ruby [subcommands]
```


### Subcommands

* `timeout`: Configure the build timeout.

## mod config build ruby timeout

Configure the build timeout.


Limits the amount of time the CLI will wait for a single execution of the build tool.

### Usage

```
mod config build ruby timeout [subcommands]
```


### Subcommands

* `delete`: Removes the configured build timeout.
* `edit`: Configure the timeout for build operations.
* `show`: Displays the configured build timeout.

## mod config build ruby timeout delete

Removes the configured build timeout.


### Usage

```
mod config build ruby timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build ruby timeout edit

Configure the timeout for build operations.


Limits the amount of time the CLI will wait for a single execution of the build tool. Setting this to too high of a value may cause mass ingestion to hang or appear to hang.

### Usage

```
mod config build ruby timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build ruby timeout show

Displays the configured build timeout.


### Usage

```
mod config build ruby timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style

Configures style settings used for LST production.


Allows you to specify style configuration files (e.g., Checkstyle) that should be included in LSTs so that recipe results respect the configured code style.

### Usage

```
mod config build style [subcommands]
```

### Examples

```
mod config build style checkstyle edit <path-to-checkstyle.xml>
```


### Subcommands

* `checkstyle`: Configure Checkstyle style.
* `openrewrite`: Configure OpenRewrite style.

## mod config build style checkstyle

Configure Checkstyle style.


Allows you to specify the location of a Checkstyle configuration XML file that should be included in LSTs. When set, the Checkstyle rules will be parsed into OpenRewrite styles and attached to LSTs so that recipe results respect the configured code style.

### Usage

```
mod config build style checkstyle [subcommands]
```

### Examples

```
mod config build style checkstyle edit <path-to-checkstyle.xml>
```


### Subcommands

* `delete`: Removes the configured Checkstyle configuration.
* `edit`: Configure Checkstyle style.
* `show`: Displays the configured Checkstyle configuration.

## mod config build style checkstyle delete

Removes the configured Checkstyle configuration.




### Usage

```
mod config build style checkstyle delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style checkstyle edit

Configure Checkstyle style.


Allows you to specify the location of a Checkstyle configuration XML file that should be included in LSTs so that recipe results respect the configured code style.

### Usage

```
mod config build style checkstyle edit [parameters]
```

### Examples

```
mod config build style checkstyle edit <path-to-checkstyle.xml>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `checkstyleXml` |  The location of a Checkstyle configuration XML file to use. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style checkstyle show

Displays the configured Checkstyle configuration.




### Usage

```
mod config build style checkstyle show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style openrewrite

Configure OpenRewrite style.


Allows you to specify the location of an OpenRewrite style YAML file that should be included in LSTs. The YAML file may contain zero or more named styles These styles take precedence over any other styles.https://docs.openrewrite.org/concepts-and-explanations/styles

### Usage

```
mod config build style openrewrite [subcommands]
```

### Examples

```
mod config build style openrewrite edit <path-to-rewrite.yml>
```


### Subcommands

* `delete`: Removes the configured OpenRewrite style.
* `edit`: Configure OpenRewrite style.
* `show`: Displays the configured OpenRewrite style.

## mod config build style openrewrite delete

Removes the configured OpenRewrite style.




### Usage

```
mod config build style openrewrite delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style openrewrite edit

Configure OpenRewrite style.


Allows you to specify the location of an OpenRewrite style YAML file that should be included in LSTs so that recipe results respect the configured code style.

### Usage

```
mod config build style openrewrite edit [parameters]
```

### Examples

```
mod config build style openrewrite edit <path-to-rewrite.yml>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `rewriteYaml` |  The location of an OpenRewrite style YAML file to use. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config build style openrewrite show

Displays the configured OpenRewrite style.




### Usage

```
mod config build style openrewrite show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config clone

Configures cloning behavior.


All subsequent clones will use these settings.

### Usage

```
mod config clone [subcommands]
```


### Subcommands

* `protocol`: (DEPRECATED) Configures the wire protocol(s) that are used for cloning. This option is ignored now, and clone URLs are driven from repos.csv.
* `timeout`: Configures the timeout for clone operations.

## mod config clone protocol (deprecated)

(DEPRECATED) Configures the wire protocol(s) that are used for cloning. This option is ignored now, and clone URLs are driven from repos.csv.


All subsequent clones from Moderne organizations will use these settings. Clones from JSON or CSV use the explicitly provided clone URL without attempting to change the protocol.

### Usage

```
mod config clone protocol [subcommands]
```


### Subcommands

* `delete`: Restores the default clone protocols.
* `edit`: Configures the wire protocols that are used for cloning.
* `show`: Displays the wire protocols that are used for cloning.

## mod config clone protocol delete (deprecated)

Restores the default clone protocols.


The default is to attempt SSH and then HTTPS clones.

### Usage

```
mod config clone protocol delete
```



## mod config clone protocol edit (deprecated)

Configures the wire protocols that are used for cloning.


All subsequent clones will use these settings. The default is SSH and then HTTPS.

### Usage

```
mod config clone protocol edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `protocols` |  The protocol(s) to use for cloning. Must be one or both of 'ssh' or 'https' (case insensitive). The order in which they are provided establishes the order of precedence for subsequent clones. |



## mod config clone protocol show (deprecated)

Displays the wire protocols that are used for cloning.


This set governs all subsequent clone attempts.

### Usage

```
mod config clone protocol show
```



## mod config clone timeout

Configures the timeout for clone operations.


All subsequent clones will use these settings.

### Usage

```
mod config clone timeout [subcommands]
```


### Subcommands

* `delete`: Restores the default clone timeout.
* `edit`: Configures the timeout for clone operations.
* `show`: Displays the timeouts configured for cloning.

## mod config clone timeout delete

Restores the default clone timeout.


The default is to time out after 10 minutes.

### Usage

```
mod config clone timeout delete
```



## mod config clone timeout edit

Configures the timeout for clone operations.


All subsequent clones will use these settings. The default is 10 minutes.

### Usage

```
mod config clone timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `timeout` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |



## mod config clone timeout show

Displays the timeouts configured for cloning.


This timeout governs all subsequent clone attempts.

### Usage

```
mod config clone timeout show
```



## mod config dotnet

Configures DotNet options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard DotNet configurations.

### Usage

```
mod config dotnet [subcommands]
```


### Subcommands

* `installation`: Configures locations of DotNet that can be used by build tools.
* `version`: Configures the .NET version to use.

## mod config dotnet installation

Configures locations of DotNet that can be used by build tools.


Must be configured before you can run the build command if DotNet is installed in non-standard locations.

### Usage

```
mod config dotnet installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of DotNet that can be used by build tools.
* `delete`: Removes the configured DotNet installations. The CLI will revert to using only detectable DotNet installations.
* `list`: Displays the detected and configured DotNet installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config dotnet installation edit

Configures locations of DotNet that can be used by build tools.


Must be configured before you can run the build command if DotNet is installed in non-standard locations.

### Usage

```
mod config dotnet installation edit [parameters]
```

### Examples

```
mod config dotnet installation edit "C:\Program Files\dotnet"

mod config dotnet installation edit /usr/share/dotnet/dotnet
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `dotnetInstallations` |  Paths to DotNet installations, given as either the installation directory (e.g. "C:\Program Files\dotnet") or the dotnet executable itself (e.g. /usr/share/dotnet/dotnet). Quote any path that contains spaces. |



## mod config dotnet installation delete

Removes the configured DotNet installations. The CLI will revert to using only detectable DotNet installations.


### Usage

```
mod config dotnet installation delete
```



## mod config dotnet installation list

Displays the detected and configured DotNet installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config dotnet installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of DotNet installations to . |


## mod config dotnet version

Configures the .NET version to use.


Configure a name like "10", "10.0", or "10.0.100" depending on the degree of control needed.

### Usage

```
mod config dotnet version [subcommands]
```


### Subcommands

* `edit`: Configures the .NET version to use.
* `delete`: Reverts to auto-detection of a .NET version to use when building a repository.
* `show`: Displays the configured .NET version.

## mod config dotnet version edit

Configures the .NET version to use.


Configure a name like "10", "10.0", or "10.0.100" depending on the degree of control needed.

### Usage

```
mod config dotnet version edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedDotnet` |  The named .NET version to use. If set to "auto", the CLI will revert to detecting the correct .NET version to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config dotnet version delete

Reverts to auto-detection of a .NET version to use when building a repository.


### Usage

```
mod config dotnet version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config dotnet version show

Displays the configured .NET version.


### Usage

```
mod config dotnet version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config environment

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment [subcommands]
```


### Subcommands

* `show`: The build environment that the CLI is running in.

## mod config environment show

The build environment that the CLI is running in.


Will output information about the environment the CLI is running in (e.g., a local developer machine vs. Gitlab CI).

### Usage

```
mod config environment show
```



## mod config exec

Configures shell command execution behavior.


All subsequent executions will use these settings.

### Usage

```
mod config exec [subcommands]
```


### Subcommands

* `timeout`: Configure the exec timeout.

## mod config exec timeout

Configure the exec timeout.


Limits the amount of time the CLI will wait for a repository's command to complete.

### Usage

```
mod config exec timeout [subcommands]
```


### Subcommands

* `delete`: Restores the default exec timeout.
* `edit`: Configure the timeout for shell command execution.
* `show`: Displays the configured exec timeout.

## mod config exec timeout delete

Restores the default exec timeout.


The default is to time out after one hour.

### Usage

```
mod config exec timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config exec timeout edit

Configure the timeout for shell command execution.


Limits the amount of time the CLI will wait for a repository's command to complete. The default is one hour.

### Usage

```
mod config exec timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config exec timeout show

Displays the configured exec timeout.


### Usage

```
mod config exec timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config features

Configures experimental features.


Experimental features are not guaranteed to be stable and may change in future releases.

### Usage

```
mod config features [subcommands]
```


### Subcommands

* `agent-tools`: Configure agent tools features.
* `build`: Configure what LST builds record.
* `index-recipes`
* `inline-diff`: Configure inline diff rendering in the terminal.
* `lst`: Configure the LST serialization format version.
* `no-maven-central`: (DEPRECATED) Use mod config build maven settings edit instead.
* `pre-study`: Configure data table aggregation during recipe runs.

## mod config features agent-tools

Configure agent tools features.


### Usage

```
mod config features agent-tools [subcommands]
```


### Subcommands

* `tray`: Configure the agent tools system tray icon.

## mod config features agent-tools tray

Configure the agent tools system tray icon.


When enabled, the MCP server launches a system tray icon with a browser-based dashboard for monitoring LST builds, tool calls, and executing tools. Disabled by default.

### Usage

```
mod config features agent-tools tray
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config features build

Configure what LST builds record.


### Usage

```
mod config features build [subcommands]
```


### Subcommands

* `git-blame`: Configure cloning repositories with the history line blame needs.

## mod config features build git-blame

Configure cloning repositories with the history line blame needs.


When enabled, **mod git sync** makes full clones instead of treeless ones, so that **mod build** records for every line of a source file the commit that last changed it, as **git blame** would. A build records what the clone on disk has the history for: every line's commit in a full clone, each file's commits in a clone with its trees, and otherwise the commits alone. Repositories already cloned keep the clone they have. Disabled by default.

### Usage

```
mod config features build git-blame
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config features index-recipes


(DEPRECATED) Index recipes to avoid classloading expense on every repository. This experimental feature does not change the command line for running a recipe, but since recipes are instantiated differently, is considered experimental initially.

### Usage

```
mod config features index-recipes
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config features inline-diff

Configure inline diff rendering in the terminal.


When enabled, diffs are rendered inline in the terminal during recipe runs when the terminal supports UTF-8 extended characters. Inline diffs are enabled by default.

### Usage

```
mod config features inline-diff
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config features lst

Configure the LST serialization format version.


Controls the on-disk LST format. Version 3 is a partition-backed binary format with lazy deserialization and Zstd compression: JDK and library types are pre-built into partitions and shared across parsers and template engines, reducing parse time and serialization size. When set to 3, v2 LSTs downloaded by mod git sync are automatically converted before recipe runs, and mod build produces LSTs in the configured format.

### Usage

```
mod config features lst
```

### Options

| Name | Description |
| ---- | ----------- |
| `--version` |  LST format version (2 or 3) |


## mod config features no-maven-central (deprecated)

(DEPRECATED) Use mod config build maven settings edit instead.


Deprecated and a no-op. Maven Central resolves as it does in Maven, after the repositories in a Maven _settings.xml_. A mirror of **central,sonatype-central** in that file redirects it, and is configured with **mod config build maven settings edit**.

### Usage

```
mod config features no-maven-central
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config features pre-study

Configure data table aggregation during recipe runs.


When enabled, **mod run** folds each repository's data tables into an aggregate for its organization and every organization above it as the run goes, so **mod study** can serve a completed run's tables without reading the organization from disk. Disabled by default.

### Usage

```
mod config features pre-study
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod config go

Configures Go options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Go configurations.

### Usage

```
mod config go [subcommands]
```


### Subcommands

* `installation`: Configures locations of Go that can be used by build tools.

## mod config go installation

Configures locations of Go that can be used by build tools.


Must be configured before you can run the build command if Go is installed in non-standard locations.

### Usage

```
mod config go installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of Go that can be used by build tools.
* `delete`: Removes the configured Go installations. The CLI will revert to using only detectable Go installations.
* `list`: Displays the detected and configured Go installations in the order in which they will be selected.

## mod config go installation edit

Configures locations of Go that can be used by build tools.


Must be configured before you can run the build command if Go is installed in non-standard locations.

### Usage

```
mod config go installation edit [parameters]
```

### Examples

```
mod config go installation edit "C:\Program Files\Go"

mod config go installation edit /usr/local/go/bin/go
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `goInstallations` |  Paths to Go installations, given as either the installation directory (e.g. "C:\Program Files\Go") or the go executable itself (e.g. /usr/local/go/bin/go). Quote any path that contains spaces. |



## mod config go installation delete

Removes the configured Go installations. The CLI will revert to using only detectable Go installations.


### Usage

```
mod config go installation delete
```



## mod config go installation list

Displays the detected and configured Go installations in the order in which they will be selected.


### Usage

```
mod config go installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of Go installations. |


## mod config http

Configures HTTP options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http [subcommands]
```


### Subcommands

* `proxy`: Configures HTTP proxy settings that will be used for every HTTP request.
* `trust-store`: Configures truststore options that will be used throughout the CLI.
* `key-store`: Configures keystore options that will be used throughout the CLI for mTLS.

## mod config http proxy

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy [subcommands]
```


### Subcommands

* `delete`: Removes HTTP proxy settings from global configuration.
* `edit`: Configures HTTP proxy settings that will be used for every HTTP request.
* `show`: Displays the proxy settings from global configuration.

## mod config http proxy delete

Removes HTTP proxy settings from global configuration.


Proxy settings will no longer be used for HTTP requests.

### Usage

```
mod config http proxy delete
```



## mod config http proxy edit

Configures HTTP proxy settings that will be used for every HTTP request.


All subsequent commands will use these settings.

### Usage

```
mod config http proxy edit
```

### Options

| Name | Description |
| ---- | ----------- |
| `--host`, `--proxy-host` |  |
| `--non-proxy-hosts` |  A list of hosts that should be reached directly, bypassing the proxy. This is a list of patterns separated by '\|'. The patterns may start or end with a '\*' for wildcards. Any host matching one of these patterns will be reached through a direct connection instead of through a proxy. 'localhost' is always reached directly. <br/>Example: "\*.company.com\|10.30.2.4" |
| `--password` |  The password to authenticate with. |
| `--port`, `--proxy-port` |  |
| `--user` |  The user to authenticate with. |


## mod config http proxy show

Displays the proxy settings from global configuration.


Shows the currently configured proxy settings, if any.

### Usage

```
mod config http proxy show
```



## mod config http trust-store

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store [subcommands]
```


### Subcommands

* `delete`: Removes truststore settings from global configuration.
* `edit`: Configures truststore options that will be used throughout the CLI.
* `show`: Displays the truststore setting from global configuration.

## mod config http trust-store delete

Removes truststore settings from global configuration.


Truststore settings will no longer be used for HTTP requests.

### Usage

```
mod config http trust-store delete
```



## mod config http trust-store edit

Configures truststore options that will be used throughout the CLI.


All subsequent commands will use these settings.

### Usage

```
mod config http trust-store edit [subcommands]
```

### Subcommands

* `system`: Configures trust store to use the Operating System specific default trust store.
On Mac the system trust store is accessed via the Keychain Access app.
On Windows the system trust store is accessed via the Microsoft Management Console.
On Linux, the default Java trust store location will typically be symlinked to the distribution's system trust store which is based on the system's cacerts IF using a JVM installed via the package manager, otherwise the trust store packaged with the JVM will be used.
* `file`: Configures truststore to point to a file.
* `java-home`: (DEPRECATED) Configures truststore to use the cacerts file in **`${JAVA_HOME}/lib/security/cacerts`**.

## mod config http trust-store edit system

Configures trust store to use the Operating System specific default trust store.
On Mac the system trust store is accessed via the Keychain Access app.
On Windows the system trust store is accessed via the Microsoft Management Console.
On Linux, the default Java trust store location will typically be symlinked to the distribution's system trust store which is based on the system's cacerts IF using a JVM installed via the package manager, otherwise the trust store packaged with the JVM will be used.


### Usage

```
mod config http trust-store edit system
```

### Options

| Name | Description |
| ---- | ----------- |
| `--password` |  The password used to access the truststore. |
| `--stacktrace` |  Print the full stack trace on validation error |


## mod config http trust-store edit file

Configures truststore to point to a file.


All subsequent commands will use this truststore.

### Usage

```
mod config http trust-store edit file [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `file` |  The absolute path to the truststore file. |

### Options

| Name | Description |
| ---- | ----------- |
| `--password` |  The password used to access the truststore. |
| `--provider` |  The provider of the truststore. |
| `--stacktrace` |  Print the full stack trace on validation error |
| `--type` |  The type of the truststore file. |


## mod config http trust-store edit java-home (deprecated)

(DEPRECATED) Configures truststore to use the cacerts file in **`${JAVA_HOME}/lib/security/cacerts`**.


Instead, use the `file` subcommand to set the trust store to an arbitrary location.The $JAVA\_HOME variable is resolved once at configuration time, the path won't be updated at runtime if JAVA\_HOME has changed.

### Usage

```
mod config http trust-store edit java-home
```

### Options

| Name | Description |
| ---- | ----------- |
| `--stacktrace` |  Print the full stack trace on validation error |


## mod config http trust-store show

Displays the truststore setting from global configuration.


Shows the currently configured truststore setting, if any.

### Usage

```
mod config http trust-store show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--stacktrace` |  Print the full stack trace on validation error |


## mod config http key-store

Configures keystore options that will be used throughout the CLI for mTLS.


Configures a keystore containing client private key(s) and client certificate(s) for mutual TLS. All subsequent commands will use these settings.

### Usage

```
mod config http key-store [subcommands]
```


### Subcommands

* `delete`: Removes keystore settings from global configuration.
* `edit`: Configures keystore options that will be used throughout the CLI for mTLS.
* `show`: Displays the keystore setting from global configuration.

## mod config http key-store delete

Removes keystore settings from global configuration.


Keystore settings will no longer be used for HTTP requests.

### Usage

```
mod config http key-store delete
```



## mod config http key-store edit

Configures keystore options that will be used throughout the CLI for mTLS.


Configures a keystore containing client private key(s) and client certificate(s) for mutual TLS. All subsequent commands will use these settings.

### Usage

```
mod config http key-store edit [subcommands]
```

### Subcommands

* `file`: Configures keystore to point to a file.

## mod config http key-store edit file

Configures keystore to point to a file.


All subsequent commands will use this keystore.

### Usage

```
mod config http key-store edit file [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `file` |  The absolute path to the keystore file. |

### Options

| Name | Description |
| ---- | ----------- |
| `--password` |  The password used to access the keystore. |
| `--provider` |  The provider of the keystore. |
| `--stacktrace` |  Print the full stack trace on validation error |
| `--type` |  The type of the keystore file. |


## mod config http key-store show

Displays the keystore setting from global configuration.


Shows the currently configured keystore setting, if any.

### Usage

```
mod config http key-store show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--stacktrace` |  Print the full stack trace on validation error |


## mod config java

Configures Java options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Java configurations.

### Usage

```
mod config java [subcommands]
```


### Subcommands

* `installation`: Configures locations of JDKs that can be used by build tools.
* `jdk`: (DEPRECATED) Use `installation` instead. Configures locations of JDKs that can be used by build tools.
* `options`: Configures JVM options for use building LSTs and running recipes.
* `version`: Configures the JDK to use.

## mod config java installation

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of JDKs that can be used by build tools.
* `delete`: Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.
* `list`: Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config java installation edit

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java installation edit [parameters]
```

### Examples

```
mod config java installation edit /path/to/jdk1 /path/to/jdk2
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `javaHomes` |  The paths on disk where JDK installations can be found. |



## mod config java installation delete

Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.


### Usage

```
mod config java installation delete
```



## mod config java installation list

Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config java installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of JDKs to . |


## mod config java jdk (deprecated)

(DEPRECATED) Use `installation` instead. Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java jdk [subcommands]
```


### Subcommands

* `edit`: Configures locations of JDKs that can be used by build tools.
* `delete`: Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.
* `list`: Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config java jdk edit (deprecated)

Configures locations of JDKs that can be used by build tools.


Must be configured before you can run the build command if JDKs are in non-standard locations.

### Usage

```
mod config java jdk edit [parameters]
```

### Examples

```
mod config java installation edit /path/to/jdk1 /path/to/jdk2
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `javaHomes` |  The paths on disk where JDK installations can be found. |



## mod config java jdk delete (deprecated)

Removes the configured JDK installations. The CLI will revert to using only detectable JDKs.


### Usage

```
mod config java jdk delete
```



## mod config java jdk list (deprecated)

Displays the detected and configured JDK installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config java jdk list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of JDKs to . |


## mod config java options

Configures JVM options for use building LSTs and running recipes.


Must be configured before you can run the build command if non-standard VM options are required.

### Usage

```
mod config java options [subcommands]
```


### Subcommands

* `edit`: Configures JVM options for use building LSTs and running recipes.
* `delete`: Removes configured JVM options. The CLI will no longer use custom JVM options.
* `show`: Displays the configured JVM options.

## mod config java options edit

Configures JVM options for use building LSTs and running recipes.


Must be configured before you can run the build command if non-standard VM options are required.

### Usage

```
mod config java options edit
```

### Examples

```
mod config java options edit "\-Xmx4G"
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config java options delete

Removes configured JVM options. The CLI will no longer use custom JVM options.


### Usage

```
mod config java options delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config java options show

Displays the configured JVM options.


### Usage

```
mod config java options show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config java version

Configures the JDK to use.


Configure a name like "17", "17-tem", or "17.0.6-tem" depending on the degree of control needed.

### Usage

```
mod config java version [subcommands]
```


### Subcommands

* `edit`: Configures the JDK to use.
* `delete`: Reverts to auto-detection of a JDK to use when building a repository.
* `show`: Displays the configured JDK version.

## mod config java version edit

Configures the JDK to use.


Configure a name like "17", "17-tem", or "17.0.6-tem" depending on the degree of control needed.

### Usage

```
mod config java version edit [parameters]
```

### Examples

```
mod config java version edit "17-tem"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedJdk` |  The named JDK to use. If set to "auto", the CLI will revert to detecting the correct JDK to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config java version delete

Reverts to auto-detection of a JDK to use when building a repository.


### Usage

```
mod config java version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config java version show

Displays the configured JDK version.


### Usage

```
mod config java version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config license

Configure a license key.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license [subcommands]
```


### Subcommands

* `delete`: Removes the configured license key.
* `edit`: Configure the active user.
* `generate`: Generate a license key.
* `show`: Displays information about the configured license key.
* `moderne`: Synchronizes a Moderne license key with the CLI.

## mod config license delete

Removes the configured license key.


### Usage

```
mod config license delete
```



## mod config license edit

Configure the active user.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `license` |  The license key, provided by Moderne support. |



## mod config license generate

Generate a license key.


Generates a signed license key for the given licensee and expiration date and prints it. The Ed25519 private key is read from the **--private-key** option, which is interactive: pass the flag with no value to read the Base64-encoded raw 32 bytes from stdin (masked when on a TTY). This keeps the key off argv and out of process listings.
By default the license is printed but NOT persisted to the active configuration — convenient when issuing a license for a prospect without overwriting your own. Pass **--save** to also persist (equivalent to running **mod config license edit** with the generated key).

### Usage

```
mod config license generate [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `licensee` |  The licensee name. |
| `expirationDate` |  The expiration date in **yyyyMMdd** format, e.g. 20270101. |

### Options

| Name | Description |
| ---- | ----------- |
| `--private-key` |  Base64-encoded raw 32-byte Ed25519 private key. Pass the flag with no value to read from stdin (masked on a TTY). |
| `--save` |  Persist the generated license as the active configuration. |


## mod config license show

Displays information about the configured license key.


### Usage

```
mod config license show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  (INCUBATING) Output license information in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |


## mod config license moderne

Synchronizes a Moderne license key with the CLI.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license moderne [subcommands]
```

### Examples

```
mod config license moderne sync
```


### Subcommands

* `sync`: Synchronizes a Moderne license key with the CLI.

## mod config license moderne sync

Synchronizes a Moderne license key with the CLI.


A license key allows for running recipes on private repositories without a connection to a Moderne tenant.

### Usage

```
mod config license moderne sync
```

### Examples

```
mod config license moderne sync
```



## mod config lsts

Configures LSTs production and publishing. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts [subcommands]
```


### Subcommands

* `artifacts`: Configures the storage layer for LSTs to be published to and downloaded from. 
* `cache-dir`: (INCUBATING) Configures the directory for caching LSTs on disk.

## mod config lsts artifacts

Configures the storage layer for LSTs to be published to and downloaded from. 


Must be configured before you can run the publish command.

### Usage

```
mod config lsts artifacts [subcommands]
```


### Subcommands

* `artifactory`: Configures the Artifactory repository that LSTs will be published to and downloaded from.
* `show`: Displays the LST artifacts repository configuration.
* `azure-blob`: Configures the Azure Blob Storage container that LSTs will be published to and downloaded from.
* `gcs`: Configures the Google Cloud Storage bucket that LSTs will be published to and downloaded from.
* `maven`: Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.
* `s3`: Configures the S3 repository that LSTs will be published to and downloaded from.

## mod config lsts artifacts artifactory

Configures the Artifactory repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Artifactory repository.

### Usage

```
mod config lsts artifacts artifactory [subcommands]
```


### Subcommands

* `add`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `edit`: (DEPRECATED) Use mod config lsts artifacts artifactory add instead.
* `delete`: Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Artifactory repository configuration.

## mod config lsts artifacts artifactory add

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config lsts artifacts artifactory add [parameters]
```

### Examples

```
mod config lsts artifacts artifactory add https://artifactory.company.com --user lstuser --password secret1
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that LSTs will be published to. | `https://artifactory.company-name.com/artifactory/moderne-ingest` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--jfrog-api-token` |  The JFrog API token to use. |  |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config lsts artifacts artifactory edit (deprecated)

(DEPRECATED) Use mod config lsts artifacts artifactory add instead.


This command is deprecated. Use **mod config lsts artifacts artifactory add** instead.

### Usage

```
mod config lsts artifacts artifactory edit [parameters]
```

### Examples

```
mod config lsts artifacts artifactory add https://artifactory.company.com --user lstuser --password secret1
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that LSTs will be published to. | `https://artifactory.company-name.com/artifactory/moderne-ingest` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--jfrog-api-token` |  The JFrog API token to use. |  |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config lsts artifacts artifactory delete

Removes the Artifactory repository configuration. The publish command will no longer function until another artifact source is configured.


If a URL is provided, only that repository is removed. Otherwise, all Artifactory repositories are removed.

### Usage

```
mod config lsts artifacts artifactory delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the Artifactory repository to remove. If not provided, all Artifactory repositories are removed. |



## mod config lsts artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config lsts artifacts artifactory show
```



## mod config lsts artifacts show

Displays the LST artifacts repository configuration.




### Usage

```
mod config lsts artifacts show
```



## mod config lsts artifacts azure-blob

Configures the Azure Blob Storage container that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Azure Blob Storage container. If neither --connection-string nor --sas-token is provided, DefaultAzureCredential is used (managed identity, workload identity, environment variables, or Azure CLI login).

### Usage

```
mod config lsts artifacts azure-blob [subcommands]
```


### Subcommands

* `edit`: Configures the Azure Blob Storage container that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Azure Blob LST repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Azure Blob LST repository configuration.

## mod config lsts artifacts azure-blob edit

Configures the Azure Blob Storage container that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this Azure Blob Storage container.

### Usage

```
mod config lsts artifacts azure-blob edit [parameters]
```

### Examples

```
mod config lsts artifacts azure-blob edit https://myaccount.blob.core.windows.net/mycontainer --sas-token 'sv=...'
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `uri` |  The Azure Blob container URL that LSTs will be published to. Must be of the form `https://{account}.blob.core.windows.net/{container}`. | `https://myaccount.blob.core.windows.net/mycontainer` |

### Options

| Name | Description |
| ---- | ----------- |
| `--connection-string` |  Azure Storage connection string (from the storage account's Access keys page). |
| `--sas-token` |  Shared Access Signature token granting read+write+list access to the container. Provide the query-string portion only (without leading '?'). |


## mod config lsts artifacts azure-blob delete

Removes the Azure Blob LST repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts azure-blob delete
```



## mod config lsts artifacts azure-blob show

Displays the Azure Blob LST repository configuration.




### Usage

```
mod config lsts artifacts azure-blob show
```



## mod config lsts artifacts gcs

Configures the Google Cloud Storage bucket that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Cloud Storage bucket. If --credentials-file is not provided, Application Default Credentials are used (workload identity, the GCE/GKE metadata server, GOOGLE\_APPLICATION\_CREDENTIALS, or `gcloud auth application-default login`).

### Usage

```
mod config lsts artifacts gcs [subcommands]
```


### Subcommands

* `edit`: Configures the Cloud Storage bucket that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the Google Cloud Storage LST repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Google Cloud Storage LST repository configuration.

## mod config lsts artifacts gcs edit

Configures the Cloud Storage bucket that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this Cloud Storage bucket.

### Usage

```
mod config lsts artifacts gcs edit [parameters]
```

### Examples

```
mod config lsts artifacts gcs edit gs://bucket
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `uri` |  The Cloud Storage bucket that LSTs will be published to. Must be of the form `gs://{bucket}`. | `gs://bucket` |

### Options

| Name | Description |
| ---- | ----------- |
| `--credentials-file` |  Path to a service account JSON key file. Defaults to Application Default Credentials. |
| `--endpoint-url` |  Override the default storage.googleapis.com endpoint, e.g. a Private Service Connect endpoint. An http (not https) endpoint is treated as an emulator and is called without credentials. |
| `--project` |  The project to bill requests to. Only needed for requester-pays buckets. |


## mod config lsts artifacts gcs delete

Removes the Google Cloud Storage LST repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts gcs delete
```



## mod config lsts artifacts gcs show

Displays the Google Cloud Storage LST repository configuration.




### Usage

```
mod config lsts artifacts gcs show
```



## mod config lsts artifacts maven

Configures a Maven-formatted artifact repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this Maven repository.

### Usage

```
mod config lsts artifacts maven [subcommands]
```


### Subcommands

* `add`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `edit`: (DEPRECATED) Use mod config lsts artifacts maven add instead.
* `delete`: Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the Maven artifact repository repository configuration.

## mod config lsts artifacts maven add

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifact repository.

### Usage

```
mod config lsts artifacts maven add [parameters]
```

### Examples

```
mod config lsts artifacts maven add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that LSTs will be published to. | `https://repo.company-name.com/repository/moderne-ingest` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |  |
| `--password` |  The password to authenticate with. |  |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config lsts artifacts maven edit (deprecated)

(DEPRECATED) Use mod config lsts artifacts maven add instead.


This command is deprecated. Use **mod config lsts artifacts maven add** instead.

### Usage

```
mod config lsts artifacts maven edit [parameters]
```

### Examples

```
mod config lsts artifacts maven add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that LSTs will be published to. | `https://repo.company-name.com/repository/moderne-ingest` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |  |
| `--password` |  The password to authenticate with. |  |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config lsts artifacts maven delete

Removes the Maven artifact repository repository configuration. The publish command will no longer function until another artifact source is configured.


If a URL is provided, only that repository is removed. Otherwise, all Maven repositories are removed.

### Usage

```
mod config lsts artifacts maven delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the Maven repository to remove. If not provided, all Maven repositories are removed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config lsts artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config lsts artifacts maven show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config lsts artifacts s3

Configures the S3 repository that LSTs will be published to and downloaded from.


All subsequent publish and download commands will use this S3 repository.

### Usage

```
mod config lsts artifacts s3 [subcommands]
```


### Subcommands

* `edit`: Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.
* `delete`: Removes the S3 repository configuration. The publish command will no longer function until another artifact source is configured.
* `show`: Displays the S3 repository configuration.

## mod config lsts artifacts s3 edit

Configures the repository that LSTs will be published to and downloaded from. Must be configured before you can run the publish command.


All subsequent publish and download commands will use this artifactory repository.

### Usage

```
mod config lsts artifacts s3 edit [parameters]
```

### Examples

```
mod config lsts artifacts s3 edit s3://bucket
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `uri` |  The URL of the artifact repository that LSTs will be published to. | `s3://bucket` |

### Options

| Name | Description |
| ---- | ----------- |
| `--endpoint-url` |  Override command's default URL with the given URL. |
| `--profile` |  Use a specific profile from your credential file. |
| `--region` |  The region to use. Overrides config/env settings. |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |


## mod config lsts artifacts s3 delete

Removes the S3 repository configuration. The publish command will no longer function until another artifact source is configured.




### Usage

```
mod config lsts artifacts s3 delete
```



## mod config lsts artifacts s3 show

Displays the S3 repository configuration.




### Usage

```
mod config lsts artifacts s3 show
```



## mod config lsts cache-dir

(INCUBATING) Configures the directory for caching LSTs on disk.


When configured, LSTs will be downloaded to this cache directory and symlinked to organization directories.

### Usage

```
mod config lsts cache-dir [subcommands]
```


### Subcommands

* `edit`: (INCUBATING) Configures the LST cache directory.
* `show`: (INCUBATING) Displays the LST cache directory configuration.
* `delete`: (INCUBATING) Removes the LST cache directory configuration.

## mod config lsts cache-dir edit

(INCUBATING) Configures the LST cache directory.


All subsequent operations will use this cache directory for storing LSTs.

### Usage

```
mod config lsts cache-dir edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `cacheDir` |  The path to the directory where LSTs should be cached. Can be an absolute path or start with \~ for home directory. |



## mod config lsts cache-dir show

(INCUBATING) Displays the LST cache directory configuration.


Shows the currently configured cache directory for LSTs.

### Usage

```
mod config lsts cache-dir show
```



## mod config lsts cache-dir delete

(INCUBATING) Removes the LST cache directory configuration.


LSTs will be stored directly in repository build folders instead of being cached centrally.

### Usage

```
mod config lsts cache-dir delete
```



## mod config metrics

Configures metrics publishing.


Configure where and how the CLI publishes metrics.

### Usage

```
mod config metrics [subcommands]
```


### Subcommands

* `atlas`: Configures Netflix Atlas metrics publishing.

## mod config metrics atlas

Configures Netflix Atlas metrics publishing.


When configured, the CLI pushes metrics to an Atlas endpoint at a configurable interval. Common tags are added to every metric.

### Usage

```
mod config metrics atlas [subcommands]
```


### Subcommands

* `edit`: Configures the Atlas metrics publishing endpoint.
* `show`: Displays the configured Atlas metrics publishing settings.
* `delete`: Removes Atlas metrics publishing configuration.

## mod config metrics atlas edit

Configures the Atlas metrics publishing endpoint.


Sets the Atlas publish URL, push interval, and optional common tags.

### Usage

```
mod config metrics atlas edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The Atlas publish endpoint URL (e.g., https://localhost:7101/api/publish/v2). |

### Options

| Name | Description |
| ---- | ----------- |
| `--interval` |  How often to push metrics, as an ISO-8601 duration (default: PT1M). |
| `--tag` |  Common tag as key=value. Repeatable (e.g., --tag stack=main --tag serverGroup=sg-1). |


## mod config metrics atlas show

Displays the configured Atlas metrics publishing settings.


### Usage

```
mod config metrics atlas show
```



## mod config metrics atlas delete

Removes Atlas metrics publishing configuration.


The CLI will no longer push metrics to Atlas.

### Usage

```
mod config metrics atlas delete
```



## mod config moderne

Configures the connection to a Moderne tenant.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne [subcommands]
```

### Examples

```
mod config moderne edit <host>
```


### Subcommands

* `delete`: Removes the configured Moderne tenant.
* `edit`: Configures the connection to a Moderne tenant.
* `local`: (DEPRECATED) Configures a connection to a Moderne DX instance running locally on the same machine.
* `login`: Logs the CLI into Moderne
* `show`: Displays the Moderne tenant configuration.
* `organizations`: (INCUBATING) The organizational hierarchy of repository ownership.

## mod config moderne delete

Removes the configured Moderne tenant.




### Usage

```
mod config moderne delete
```



## mod config moderne edit

Configures the connection to a Moderne tenant.


All subsequent commands will use this Moderne tenant.

### Usage

```
mod config moderne edit [parameters]
```

### Examples

```
mod config moderne edit <host> --token <token>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `host` |  The URL of the Moderne UI. | `https://app.moderne.io` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--api` |  The URL of the tenant API gateway. | `https://api.app.moderne.io` |
| `--password` |  (DEPRECATED) The password to authenticate with. Use the web-based flow or with-token with the login sub-command instead. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--token` |  (DEPRECATED) The Moderne personal access token to use. Use 'login --with-token' instead. |  |
| `--user` |  (DEPRECATED) The user to authenticate with. Use the web-based flow or with-token with the login sub-command instead. |  |


## mod config moderne local

(DEPRECATED) Configures a connection to a Moderne DX instance running locally on the same machine.


All subsequent commands will use this instance.

### Usage

```
mod config moderne local
```



## mod config moderne login

Logs the CLI into Moderne


The default authorization mode is a web-based browser flow. After login and consent, a PAT (personal access token) will be created and stored in the configuration file.

Alternatively, use **--with-token** to pass in an existing token on standard input.

After a successful login, the local CLI recipe marketplace is synchronized from Moderne.

### Usage

```
mod config moderne login
```

### Options

| Name | Description |
| ---- | ----------- |
| `--expiration` |  The time to expiration for the token to be created, as an ISO-8601 duration string. Example: P180D for 180 days. |
| `--with-token` |  The Moderne personal access token to use. |
| `-y`, `--yes` |  Automatic yes to prompts when synchronizing the recipe marketplace. |


## mod config moderne show

Displays the Moderne tenant configuration.


Shows where requests to Moderne e.g., for recipe and organization information, will be directed.

### Usage

```
mod config moderne show
```



## mod config moderne organizations

(INCUBATING) The organizational hierarchy of repository ownership.


Each of these organizations is cloneable.

### Usage

```
mod config moderne organizations [subcommands]
```


### Subcommands

* `show`: Displays the Moderne view of organizational hierarchy.

## mod config moderne organizations show

Displays the Moderne view of organizational hierarchy.




### Usage

```
mod config moderne organizations show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  |


## mod config node

Configures Node options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Node configurations.

### Usage

```
mod config node [subcommands]
```


### Subcommands

* `installation`: Configures locations of Node that can be used by build tools.
* `version`: Configures the Node.js version to use.

## mod config node installation

Configures locations of Node that can be used by build tools.


Must be configured before you can run the build command if Node is installed in non-standard locations.

### Usage

```
mod config node installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of Node that can be used by build tools.
* `delete`: Removes the configured Node installations. The CLI will revert to using only detectable Node installations.
* `list`: Displays the detected and configured Node installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config node installation edit

Configures locations of Node that can be used by build tools.


Must be configured before you can run the build command if Node is installed in non-standard locations.

### Usage

```
mod config node installation edit [parameters]
```

### Examples

```
mod config node installation edit "C:\Program Files\nodejs"

mod config node installation edit /usr/local/bin/node
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `nodeInstallations` |  Paths to Node installations, given as either the installation directory (e.g. "C:\Program Files\nodejs") or the node executable itself (e.g. /usr/local/bin/node). Quote any path that contains spaces. |



## mod config node installation delete

Removes the configured Node installations. The CLI will revert to using only detectable Node installations.


### Usage

```
mod config node installation delete
```



## mod config node installation list

Displays the detected and configured Node installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config node installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of Node installations to . |


## mod config node version

Configures the Node.js version to use.


Configure a name like "18", "18.0.0", or "22" depending on the degree of control needed.

### Usage

```
mod config node version [subcommands]
```


### Subcommands

* `edit`: Configures the Node.js version to use.
* `delete`: Reverts to auto-detection of a Node.js version to use when building a repository.
* `show`: Displays the configured Node.js version.

## mod config node version edit

Configures the Node.js version to use.


Configure a name like "18", "18.0.0", or "22" depending on the degree of control needed.

### Usage

```
mod config node version edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedNode` |  The named Node.js version to use. If set to "auto", the CLI will revert to detecting the correct Node.js version to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config node version delete

Reverts to auto-detection of a Node.js version to use when building a repository.


### Usage

```
mod config node version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config node version show

Displays the configured Node.js version.


### Usage

```
mod config node version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config python

Configures Python options used for building LSTs and running recipes.


Must be configured before you can run the commands that involve non-standard Python configurations.

### Usage

```
mod config python [subcommands]
```


### Subcommands

* `installation`: Configures locations of Python that can be used by build tools.
* `version`: Configures the Python version to use.

## mod config python installation

Configures locations of Python that can be used by build tools.


Must be configured before you can run the build command if Python is installed in non-standard locations.

### Usage

```
mod config python installation [subcommands]
```


### Subcommands

* `edit`: Configures locations of Python that can be used by build tools.
* `delete`: Removes the configured Python installations. The CLI will revert to using only detectable Python installations.
* `list`: Displays the detected and configured Python installations in the order in which they will be selected, constrained by versions detected from a particular repository.

## mod config python installation edit

Configures locations of Python that can be used by build tools.


Must be configured before you can run the build command if Python is installed in non-standard locations.

### Usage

```
mod config python installation edit [parameters]
```

### Examples

```
mod config python installation edit "C:\Program Files\Python314"

mod config python installation edit /usr/local/bin/python3
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `pythonInstallations` |  Paths to Python installations, given as either the installation directory (e.g. "C:\Program Files\Python314") or the Python executable itself (e.g. /usr/local/bin/python3). Quote any path that contains spaces. |



## mod config python installation delete

Removes the configured Python installations. The CLI will revert to using only detectable Python installations.


### Usage

```
mod config python installation delete
```



## mod config python installation list

Displays the detected and configured Python installations in the order in which they will be selected, constrained by versions detected from a particular repository.


### Usage

```
mod config python installation list
```

### Options

| Name | Description |
| ---- | ----------- |
| `--named` |  Filter the list of Python installations to a specific version. |


## mod config python version

Configures the Python version to use.


Configure a name like "3", "3.12", or "3.12.1" depending on the degree of control needed.

### Usage

```
mod config python version [subcommands]
```


### Subcommands

* `edit`: Configures the Python version to use.
* `delete`: Reverts to auto-detection of a Python version to use when building a repository.
* `show`: Displays the configured Python version.

## mod config python version edit

Configures the Python version to use.


Configure a name like "3", "3.12", or "3.12.1" depending on the degree of control needed.

### Usage

```
mod config python version edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `selectedPython` |  The named Python version to use. If set to "auto", the CLI will revert to detecting the correct Python version to use from signals available in the repository. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config python version delete

Reverts to auto-detection of a Python version to use when building a repository.


### Usage

```
mod config python version delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config python version show

Displays the configured Python version.


### Usage

```
mod config python version show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config recipes

Find recipes and configure the recipe catalog available to the CLI.


**mod config recipes search** finds a recipe in the catalog, with its id and
options. With --json it prints what it finds rather than asking whether to make
one the active recipe:

```
mod config recipes search '<words>' --json=id,description,options
```

The commands below install recipes into the catalog, from Moderne or from
artifact repositories.

### Usage

```
mod config recipes [subcommands]
```

### Examples

```
mod config recipes moderne sync
```


### Subcommands

* `active`: Manage the active recipe configuration.
* `artifacts`: Configures artifact repositories to resolve recipes from.
* `bundle`: Pack the build of a recipe project into a zip that runs as it is wherever it is put.
* `csv`: Manage the recipe marketplace via a Recipe Marketplace CSV.
* `export`: Export the recipe catalog for study by different tools.
* `import`: Import recipes into the marketplace from different formats.
* `go`: Adds or updates a Go module that contains recipes that should be added to the recipe marketplace in the CLI.
* `jar`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `npm`: Adds or updates an npm package that contain recipes that should be added to the recipe marketplace in the CLI.
* `nuget`: Adds or updates a NuGet package that contains recipes that should be added to the recipe marketplace in the CLI.
* `pip`: Adds or updates a pip package that contains recipes that should be added to the recipe marketplace in the CLI.
* `moderne`: Configures which Moderne recipes should be installed and used in the local CLI marketplace.
* `delete`: Clear the whole recipe marketplace.
* `list`: List the artifacts that are contributing recipes to the marketplace.
* `search`: Finds recipes based on free form text search.
* `source`: Work on the source of recipes in a working set.
* `tree`: Show what a composite recipe is made of.
* `upgrade`: Upgrades all installed recipe artifacts to the latest available version.
* `yaml`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.

## mod config recipes active

Manage the active recipe configuration.


The active recipe is a recipe under development that can be run with `mod run --active-recipe`.

### Usage

```
mod config recipes active [subcommands]
```

### Examples

```
mod config recipes active set src/main/java/com/example/MyRecipe.java
```


### Subcommands

* `set`: Sets a recipe source file as the active recipe.
* `show`: Shows the current active recipe configuration.
* `delete`: Clears the active recipe configuration.

## mod config recipes active set

Sets a recipe source file as the active recipe.


Accepts a Java source file (.java), a Kotlin source file (.kt), or a YAML recipe file (.yml/.yaml). Detects the build tool (Gradle or Maven), extracts the classpath, and configures the recipe to be run with `mod run --active-recipe`.

### Usage

```
mod config recipes active set [parameters]
```

### Examples

```
mod config recipes active set src/main/java/com/example/MyRecipe.java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `recipeSourceFile` |  Path to a recipe source file (.java, .kt, .yml, or .yaml) |

### Options

| Name | Description |
| ---- | ----------- |
| `--recipe` |  Recipe name to select (useful for source files or multi-document YAML files declaring several recipes) |


## mod config recipes active show

Shows the current active recipe configuration.


Displays the recipe ID and classpath from the active.recipe file.

### Usage

```
mod config recipes active show
```



## mod config recipes active delete

Clears the active recipe configuration.


Removes the active.recipe file.

### Usage

```
mod config recipes active delete
```



## mod config recipes artifacts

Configures artifact repositories to resolve recipes from.


Defaults to resolving recipes from Maven Central and Nexus Snapshots.

### Usage

```
mod config recipes artifacts [subcommands]
```


### Subcommands

* `artifactory`: Configures the artifact repository to resolve recipes from.
* `show`: Displays the recipe artifacts repository configuration.
* `maven`: Configures a Maven-formatted artifact repository that recipes will be resolved from.
* `npm`: Configures an npm registry that recipes will be resolved from.
* `pip`: Configures a pip index that recipes will be resolved from.
* `nuget`: Configures a NuGet feed that recipes will be resolved from.
* `go`: Configures a Go module proxy that recipes will be resolved from.

## mod config recipes artifacts artifactory

Configures the artifact repository to resolve recipes from.


All subsequent recipe installation commands will use this Artifactory repository.

### Usage

```
mod config recipes artifacts artifactory [subcommands]
```


### Subcommands

* `add`: Configures the artifact repository to resolve recipes from.
* `edit`: (DEPRECATED) Use mod config recipes artifacts artifactory add instead.
* `delete`: Removes the Artifactory repository configuration.
* `show`: Displays the Artifactory repository configuration.

## mod config recipes artifacts artifactory add

Configures the artifact repository to resolve recipes from.


All subsequent recipe installation commands will use this artifact repository.

### Usage

```
mod config recipes artifacts artifactory add [parameters]
```

### Examples

```
mod config recipes artifacts artifactory add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. | `https://artifactory.company-name.com/artifactory/moderne-recipes` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--jfrog-api-token` |  The JFrog API token to use. |  |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts artifactory edit (deprecated)

(DEPRECATED) Use mod config recipes artifacts artifactory add instead.


This command is deprecated. Use **mod config recipes artifacts artifactory add** instead.

### Usage

```
mod config recipes artifacts artifactory edit [parameters]
```

### Examples

```
mod config recipes artifacts artifactory add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. | `https://artifactory.company-name.com/artifactory/moderne-recipes` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--jfrog-api-token` |  The JFrog API token to use. |  |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts artifactory delete

Removes the Artifactory repository configuration.


If a URL is provided, only that repository is removed. Otherwise, all Artifactory repositories are removed.

### Usage

```
mod config recipes artifacts artifactory delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the Artifactory repository to remove. If not provided, all Artifactory repositories are removed. |



## mod config recipes artifacts artifactory show

Displays the Artifactory repository configuration.




### Usage

```
mod config recipes artifacts artifactory show
```



## mod config recipes artifacts show

Displays the recipe artifacts repository configuration.




### Usage

```
mod config recipes artifacts show
```



## mod config recipes artifacts maven

Configures a Maven-formatted artifact repository that recipes will be resolved from.


All subsequent recipe installation commands will use this Maven repository.

### Usage

```
mod config recipes artifacts maven [subcommands]
```


### Subcommands

* `add`: Configures a repository that recipes will be resolved from.
* `edit`: (DEPRECATED) Use mod config recipes artifacts maven add instead.
* `delete`: Removes the Maven artifact repository repository configuration.
* `show`: Displays the Maven artifact repository repository configuration.

## mod config recipes artifacts maven add

Configures a repository that recipes will be resolved from.


If a repository with the same URL already exists, it will be updated. Otherwise, the repository will be added to the list of Maven repositories.

### Usage

```
mod config recipes artifacts maven add [parameters]
```

### Examples

```
mod config recipes artifacts maven add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts maven edit (deprecated)

(DEPRECATED) Use mod config recipes artifacts maven add instead.


This command is deprecated. Use **mod config recipes artifacts maven add** instead.

### Usage

```
mod config recipes artifacts maven edit [parameters]
```

### Examples

```
mod config recipes artifacts maven add <artifact-repository-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts maven delete

Removes the Maven artifact repository repository configuration.


If a URL is provided, only that repository is removed. Otherwise, all Maven repositories are removed.

### Usage

```
mod config recipes artifacts maven delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the repository to remove. If not provided, all repositories of this type are removed. |



## mod config recipes artifacts maven show

Displays the Maven artifact repository repository configuration.




### Usage

```
mod config recipes artifacts maven show
```



## mod config recipes artifacts npm

Configures an npm registry that recipes will be resolved from.


All subsequent `recipes npm install` commands will use the configured registries.

### Usage

```
mod config recipes artifacts npm [subcommands]
```


### Subcommands

* `add`: Configures an npm registry that recipes will be resolved from.
* `delete`: Removes an npm registry from the recipe artifact repository configuration.
* `show`: Displays the configured npm recipe artifact registries.

## mod config recipes artifacts npm add

Configures an npm registry that recipes will be resolved from.


If a registry with the same URL already exists, it will be updated. Otherwise, the registry will be appended to the list of npm registries.

### Usage

```
mod config recipes artifacts npm add [parameters]
```

### Examples

```
mod config recipes artifacts npm add <registry-url> --scope @myorg --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--password` |  The password to authenticate with. |  |
| `--scope` |  The npm package scope (e.g. @myorg) that this registry serves. If omitted, this registry is configured as the default for unscoped packages. | `@myorg` |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts npm delete

Removes an npm registry from the recipe artifact repository configuration.


If a URL is provided, only that registry is removed. Otherwise, all npm registries are removed.

### Usage

```
mod config recipes artifacts npm delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the repository to remove. If not provided, all repositories of this type are removed. |



## mod config recipes artifacts npm show

Displays the configured npm recipe artifact registries.




### Usage

```
mod config recipes artifacts npm show
```



## mod config recipes artifacts pip

Configures a pip index that recipes will be resolved from.


All subsequent `recipes pip install` commands will use the configured indices.

### Usage

```
mod config recipes artifacts pip [subcommands]
```


### Subcommands

* `add`: Configures a pip index that recipes will be resolved from.
* `delete`: Removes a pip index from the recipe artifact repository configuration.
* `show`: Displays the configured pip recipe artifact indices.

## mod config recipes artifacts pip add

Configures a pip index that recipes will be resolved from.


If an index with the same URL already exists, it will be updated. Otherwise, the index will be appended to the list of pip indices.

### Usage

```
mod config recipes artifacts pip add [parameters]
```

### Examples

```
mod config recipes artifacts pip add <index-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts pip delete

Removes a pip index from the recipe artifact repository configuration.


If a URL is provided, only that index is removed. Otherwise, all pip indices are removed.

### Usage

```
mod config recipes artifacts pip delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the repository to remove. If not provided, all repositories of this type are removed. |



## mod config recipes artifacts pip show

Displays the configured pip recipe artifact indices.




### Usage

```
mod config recipes artifacts pip show
```



## mod config recipes artifacts nuget

Configures a NuGet feed that recipes will be resolved from.


All subsequent `recipes nuget install` commands will use the configured feeds.

### Usage

```
mod config recipes artifacts nuget [subcommands]
```


### Subcommands

* `add`: Configures a NuGet feed that recipes will be resolved from.
* `delete`: Removes a NuGet feed from the recipe artifact repository configuration.
* `show`: Displays the configured NuGet recipe artifact feeds.

## mod config recipes artifacts nuget add

Configures a NuGet feed that recipes will be resolved from.


If a feed with the same URL already exists, it will be updated. Otherwise, the feed will be appended to the list of NuGet feeds. NuGet.config requires unique feed names; if --name is omitted, the URL host is used as a fallback at install time.

### Usage

```
mod config recipes artifacts nuget add [parameters]
```

### Examples

```
mod config recipes artifacts nuget add <feed-url> --name myfeed --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--name` |  The feed name used in the generated NuGet.config. Defaults to the URL host. | `internal` |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts nuget delete

Removes a NuGet feed from the recipe artifact repository configuration.


If a URL is provided, only that feed is removed. Otherwise, all NuGet feeds are removed.

### Usage

```
mod config recipes artifacts nuget delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the repository to remove. If not provided, all repositories of this type are removed. |



## mod config recipes artifacts nuget show

Displays the configured NuGet recipe artifact feeds.




### Usage

```
mod config recipes artifacts nuget show
```



## mod config recipes artifacts go

Configures a Go module proxy that recipes will be resolved from.


All subsequent `recipes go install` commands will use the configured feeds.

### Usage

```
mod config recipes artifacts go [subcommands]
```


### Subcommands

* `add`: Configures a Go module proxy that recipes will be resolved from.
* `delete`: Removes a Go feed from the recipe artifact repository configuration.
* `show`: Displays the configured Go recipe artifact feeds.

## mod config recipes artifacts go add

Configures a Go module proxy that recipes will be resolved from.


If a feed with the same URL already exists, it will be updated. Otherwise, the feed will be appended to the list of Go feeds.

### Usage

```
mod config recipes artifacts go add [parameters]
```

### Examples

```
mod config recipes artifacts go add <feed-url> --user <user> --password <password>
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the artifact repository that recipes will be resolved from. |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--authorization` |  The authorization header value to use. | `Bearer XXXXX` |
| `--password` |  The password to authenticate with. |  |
| `--skip-ssl` |  If this parameter is included, SSL verification will be skipped. |  |
| `--user` |  The user to authenticate with. |  |


## mod config recipes artifacts go delete

Removes a Go feed from the recipe artifact repository configuration.


If a URL is provided, only that feed is removed. Otherwise, all Go feeds are removed.

### Usage

```
mod config recipes artifacts go delete [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `url` |  The URL of the repository to remove. If not provided, all repositories of this type are removed. |



## mod config recipes artifacts go show

Displays the configured Go recipe artifact feeds.




### Usage

```
mod config recipes artifacts go show
```



## mod config recipes bundle

Pack the build of a recipe project into a zip that runs as it is wherever it is put.


The zip holds the project's jars and everything they run with, the recipes they provide, and what built them. Put it in another working set's **.moderne/recipes/** to run its recipes there in place of any published under the same names, or push it to Moderne to run it once. Only the build of a Gradle or Maven recipe project can be bundled.

### Usage

```
mod config recipes bundle [parameters] [subcommands]
```

### Examples

```
mod config recipes bundle .moderne/recipes/rewrite-spring

mod config recipes bundle push .moderne/recipes/rewrite-spring
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `project` |  The directory of a Gradle or Maven recipe project. It is built first when its source changed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--output` |  Where to write the zip. By default, the project's name with .zip, in the current directory. |

### Subcommands

* `push`: Upload the build of a recipe project to Moderne, to run once.
* `check`: List the recipes a bundle's zip holds, and its size.

## mod config recipes bundle push

Upload the build of a recipe project to Moderne, to run once.


Packs the project as **bundle** does and uploads the zip, which Moderne keeps for a day and installs in no marketplace. A recipe run that names its id as **bundleId** runs its recipes in place of any published under the same names. Only an administrator can push a bundle, and only whoever pushed it can run it.

### Usage

```
mod config recipes bundle push [parameters]
```

### Examples

```
mod config recipes bundle push .moderne/recipes/rewrite-spring
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `project` |  The directory of a Gradle or Maven recipe project. It is built first when its source changed. |



## mod config recipes bundle check

List the recipes a bundle's zip holds, and its size.


Reads only the zip, so it can be checked before it is pushed.

### Usage

```
mod config recipes bundle check [parameters]
```

### Examples

```
mod config recipes bundle check rewrite-spring.zip
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `zip` |  The zip that bundle wrote. |



## mod config recipes csv

Manage the recipe marketplace via a Recipe Marketplace CSV.




### Usage

```
mod config recipes csv [subcommands]
```


### Subcommands

* `sync`: Synchronizes the local CLI recipe marketplace from a Recipe Marketplace CSV.

## mod config recipes csv sync

Synchronizes the local CLI recipe marketplace from a Recipe Marketplace CSV.


Downloads or copies a Recipe Marketplace CSV from the given URI and installs it as the local CLI marketplace, replacing any existing marketplace state. See https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/#csv-format.

### Usage

```
mod config recipes csv sync [parameters]
```

### Examples

```
mod config recipes csv sync /path/to/recipes.csv

mod config recipes csv sync https://example.com/recipes.csv
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `csv` |  The URI (local file or remote URL) of the recipes CSV. | `/path/to/recipes.csv` |



## mod config recipes export

Export the recipe catalog for study by different tools.




### Usage

```
mod config recipes export [subcommands]
```


### Subcommands

* `json`: (DEPRECATED) Export recipe details as JSON.
* `csv`: Export recipe details as CSV.

## mod config recipes export json

(DEPRECATED) Export recipe details as JSON.


This format has been superseded by the standard Recipe Marketplace CSV format.

### Usage

```
mod config recipes export json [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `output` |  The path to the output JSON file. |



## mod config recipes export csv

Export recipe details as CSV.




### Usage

```
mod config recipes export csv [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `output` |  The path to the output CSV file. |



## mod config recipes import

Import recipes into the marketplace from different formats.




### Usage

```
mod config recipes import [subcommands]
```


### Subcommands

* `csv`: Import recipes from a CSV file into the marketplace.

## mod config recipes import csv

Import recipes from a CSV file into the marketplace.


Reads recipes from the specified CSV file and merges them into the existing recipe marketplace. Recipes with the same name will be replaced by the imported version. See https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/#csv-format for the CSV format.

### Usage

```
mod config recipes import csv [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `input` |  The path to the CSV file to import. |



## mod config recipes go

Adds or updates a Go module that contains recipes that should be added to the recipe marketplace in the CLI.


Allows installing and deleting recipes from Go modules.

### Usage

```
mod config recipes go [subcommands]
```


### Subcommands

* `install`: Adds or updates a Go module that contains recipes that should be added to the recipe marketplace in the CLI.
* `retrieve`: Reports where an installed Go recipe module is on disk.
* `delete`: Removes a Go module supplying recipes from the marketplace.

## mod config recipes go install

Adds or updates a Go module that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this Go module will then be available to run.

### Usage

```
mod config recipes go install [parameters]
```

### Examples

```
mod config recipes go install github.com/openrewrite/rewrite-go-recipes@v1.0.0
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `MODULE[@VERSION]` |  The Go module path with an optional version in the format module@version, where @version is optional. |



## mod config recipes go retrieve

Reports where an installed Go recipe module is on disk.


Locates an installed Go module in the module cache and prints its directory. A Go recipe sidecar can load the recipes from that directory without contacting a module proxy.

### Usage

```
mod config recipes go retrieve [parameters]
```

### Examples

```
mod config recipes go retrieve github.com/openrewrite/rewrite-go-recipes
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `MODULE` |  The Go module path as it was installed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the result as JSON rather than for reading. Nothing else is written to stdout. |


## mod config recipes go delete

Removes a Go module supplying recipes from the marketplace.


The recipes defined by this Go module will then no longer be available to run.

### Usage

```
mod config recipes go delete [parameters]
```

### Examples

```
mod config recipes go delete github.com/openrewrite/rewrite-go-recipes
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `modulePath` |  A Go module path. | `github.com/openrewrite/rewrite-go-recipes` |



## mod config recipes jar

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar [subcommands]
```

### Examples

```
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
```


### Subcommands

* `install`: Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.
* `retrieve`: Retrieves an installed recipe artifact's dependencies and records its classpath.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes jar install

Adds or updates an artifact that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes jar install [parameters]
```

### Examples

```
mod config recipes jar install org.openrewrite:rewrite-java:LATEST
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `GAV` |  The group, artifact, and version of the artifact to install in the format groupId:artifactId:version. The version may be a fixed version, LATEST, or RELEASE.
The dependency will be resolved from the artifact source defined in **mod config recipes artifacts** |



## mod config recipes jar retrieve

Retrieves an installed recipe artifact's dependencies and records its classpath.


Downloads the dependencies of an installed recipe artifact and records its classpath so that later runs do not resolve it again. Prints the recipe JAR and the number of dependencies retrieved.

### Usage

```
mod config recipes jar retrieve [parameters]
```

### Examples

```
mod config recipes jar retrieve org.openrewrite:rewrite-java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `GA` |  The group and artifact of an installed recipe artifact, in the format groupId:artifactId. The version is the one **mod config recipes jar install** selected.
The dependencies will be resolved from the artifact source defined in **mod config recipes artifacts** |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the result as JSON rather than for reading. Nothing else is written to stdout. |


## mod config recipes jar delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes jar delete [parameters]
```

### Examples

```
mod config recipes jar delete rewrite-java
```

### Parameters

| Name | Description | Examples |
| ---- | ----------- | ---------- |
| `artifact` |  An artifact name or group and artifact name. | • `rewrite-java`<br/>• `org.openrewrite:rewrite-java` |



## mod config recipes npm

Adds or updates an npm package that contain recipes that should be added to the recipe marketplace in the CLI.


Allows installing and deleting recipes from npm packages.

### Usage

```
mod config recipes npm [subcommands]
```


### Subcommands

* `install`: Adds or updates an npm package that contain recipes that should be added to the recipe marketplace in the CLI.
* `retrieve`: Reports where an installed npm recipe package is on disk.
* `delete`: Removes an npm package supplying recipes from the marketplace.

## mod config recipes npm install

Adds or updates an npm package that contain recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this npm package will then be available to run.

### Usage

```
mod config recipes npm install [parameters]
```

### Examples

```
mod config recipes npm install my-recipe-package@latest
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE[@VERSION]` |  The npm package name with an optional version in the format package@version, where @version is optional. Alternatively,a path to a compiled recipe on disk that provides an OpenRewrite activate function. |



## mod config recipes npm retrieve

Reports where an installed npm recipe package is on disk.


Verifies that an installed npm package is still on disk and prints its directory. A JavaScript recipe sidecar can load the recipes from that directory without contacting the registry.

### Usage

```
mod config recipes npm retrieve [parameters]
```

### Examples

```
mod config recipes npm retrieve @openrewrite/recipes-nodejs
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE` |  The npm package name as it was installed, with its @scope if it has one. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the result as JSON rather than for reading. Nothing else is written to stdout. |


## mod config recipes npm delete

Removes an npm package supplying recipes from the marketplace.


The recipes defined by this npm package will then no longer be available to run.

### Usage

```
mod config recipes npm delete [parameters]
```

### Examples

```
mod config recipes npm delete my-recipe-package
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `packageName` |  An npm package name or a compiled JavaScript file containing an OpenRewrite activate function. | `@openrewrite/recipes-nodejs` |



## mod config recipes nuget

Adds or updates a NuGet package that contains recipes that should be added to the recipe marketplace in the CLI.


Allows installing and deleting recipes from NuGet packages.

### Usage

```
mod config recipes nuget [subcommands]
```


### Subcommands

* `install`: Adds or updates a NuGet package that contains recipes that should be added to the recipe marketplace in the CLI.
* `retrieve`: Reports where an installed NuGet recipe package's publish output is on disk.
* `delete`: Removes a NuGet package supplying recipes from the marketplace.

## mod config recipes nuget install

Adds or updates a NuGet package that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this NuGet package will then be available to run.

### Usage

```
mod config recipes nuget install [parameters]
```

### Examples

```
mod config recipes nuget install OpenRewrite.Recipes@1.0.0
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE[@VERSION]` |  The NuGet package name with an optional version in the format package@version, where @version is optional. |



## mod config recipes nuget retrieve

Reports where an installed NuGet recipe package's publish output is on disk.


Verifies that an installed NuGet package's publish output is still on disk and prints its directory. A C# recipe sidecar can load the recipes from that directory without contacting a feed.

### Usage

```
mod config recipes nuget retrieve [parameters]
```

### Examples

```
mod config recipes nuget retrieve OpenRewrite.Recipes
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE` |  The NuGet package id as it was installed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the result as JSON rather than for reading. Nothing else is written to stdout. |


## mod config recipes nuget delete

Removes a NuGet package supplying recipes from the marketplace.


The recipes defined by this NuGet package will then no longer be available to run.

### Usage

```
mod config recipes nuget delete [parameters]
```

### Examples

```
mod config recipes nuget delete OpenRewrite.Recipes
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `packageName` |  A NuGet package name. | `OpenRewrite.Recipes` |



## mod config recipes pip

Adds or updates a pip package that contains recipes that should be added to the recipe marketplace in the CLI.


Allows installing and deleting recipes from pip packages.

### Usage

```
mod config recipes pip [subcommands]
```


### Subcommands

* `install`: Adds or updates a pip package that contains recipes that should be added to the recipe marketplace in the CLI.
* `retrieve`: Reports where an installed pip recipe package is on disk.
* `delete`: Removes a pip package supplying recipes from the marketplace.

## mod config recipes pip install

Adds or updates a pip package that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined by this pip package will then be available to run.

### Usage

```
mod config recipes pip install [parameters]
```

### Examples

```
mod config recipes pip install rewrite-recipe-example==1.0.0
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE[==VERSION]` |  The pip package name or local path with an optional version in the format package==version, where ==version is optional. |



## mod config recipes pip retrieve

Reports where an installed pip recipe package is on disk.


Verifies that an installed pip package is still on disk and prints the directory it was installed into. A Python recipe sidecar given that directory as its recipe install directory can import the recipes without contacting the index.

### Usage

```
mod config recipes pip retrieve [parameters]
```

### Examples

```
mod config recipes pip retrieve rewrite-recipe-example
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `PACKAGE` |  The pip distribution name as it was installed. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the result as JSON rather than for reading. Nothing else is written to stdout. |


## mod config recipes pip delete

Removes a pip package supplying recipes from the marketplace.


The recipes defined by this pip package will then no longer be available to run.

### Usage

```
mod config recipes pip delete [parameters]
```

### Examples

```
mod config recipes pip delete rewrite-recipe-example
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `packageName` |  A pip package name. | `rewrite-recipe-example` |



## mod config recipes moderne

Configures which Moderne recipes should be installed and used in the local CLI marketplace.


The recipes installed will then be available to run locally.

### Usage

```
mod config recipes moderne [subcommands]
```

### Examples

```
mod config recipes moderne install <SEARCH_TERM>

mod config recipes moderne sync
```


### Subcommands

* `install`: Allows you to find and install recipes from Moderne.
* `sync`: Synchronizes the local CLI recipe marketplace with Moderne.

## mod config recipes moderne install

Allows you to find and install recipes from Moderne.


After providing a search term, the Moderne API will be queried to find recipes that match it. You will be provided with up to 10 possible matches and the option to select one to install. If you select to install one, the appropriate JAR will be downloaded and added to your local CLI marketplace. The recipes defined by this artifact will then be available to run.

### Usage

```
mod config recipes moderne install [parameters]
```

### Examples

```
mod config recipes moderne install <SEARCH_TERM>

mod config recipes moderne install FindTypes

mod config recipes moderne install "Migrate Java"
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `searchTerm` |  The search term to use to find recipes to install. |



## mod config recipes moderne sync

Synchronizes the local CLI recipe marketplace with Moderne.


Destroys all recipes in the local CLI marketplace and replaces them with the latest recipes available in Moderne. The recipes defined by these artifacts will then be available to run.

### Usage

```
mod config recipes moderne sync
```

### Options

| Name | Description |
| ---- | ----------- |
| `-y`, `--yes` |  Automatically confirm replacing an existing local marketplace. Required when there is no console to prompt on. |


## mod config recipes delete

Clear the whole recipe marketplace.


No recipes will be available to run until they are installed again.

### Usage

```
mod config recipes delete
```



## mod config recipes list

List the artifacts that are contributing recipes to the marketplace.




### Usage

```
mod config recipes list
```



## mod config recipes search

Finds recipes based on free form text search.


The found recipes may then be set as the active recipe. Multiple word searches may, but don't need to surrounded by quotes on the command line.

### Usage

```
mod config recipes search [parameters]
```

### Examples

```
mod config recipes search owasp
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `query` |  |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the results as JSON rather than asking which one you want. Defaults to **displayName**, **id** and **recipeCount**; any of **id**, **displayName**, **description**, **recipeCount**, **ecosystem**, **package**, **version**, **options** and **dataTables** may be named instead. |
| `--limit` |  The maximum total number of results that will be returned. |


## mod config recipes source

Work on the source of recipes in a working set.


A recipe project kept under **.moderne/recipes/** of a working set is built from its source whenever it changed and its recipes run in place of the published ones of the same names, in every **mod run** on a path inside that working set. Nothing is published or installed. On a working set checked out to a changeset, each is a git repository whose commits are pushed to the changeset for the other sessions to pull.

### Usage

```
mod config recipes source [subcommands]
```

### Examples

```
mod config recipes source checkout . --recipe org.openrewrite.java.migrate.UpgradeToJava25
```


### Subcommands

* `checkout`: Check out the source of a recipe into the working set.
* `new`: Start a new recipe project in the working set.

## mod config recipes source checkout

Check out the source of a recipe into the working set.


Finds the repository the recipe's package was built from, in the package's own metadata, and clones it to **.moderne/recipes/\<name>**. On a working set checked out to a changeset that already holds the repository, the changeset's copy is cloned, which has the commits other sessions pushed. Otherwise the upstream default branch is cloned with its whole history.

### Usage

```
mod config recipes source checkout [parameters]
```

### Examples

```
mod config recipes source checkout . --recipe org.openrewrite.java.migrate.UpgradeToJava25

mod config recipes source checkout . --url https://github.com/openrewrite/rewrite-migrate-java
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `path` |  The working set to check the recipe's source out into. |

### Options

| Name | Description |
| ---- | ----------- |
| `--recipe` |  The ID of a recipe whose source to check out. A trailing portion of the ID is accepted when it matches only one recipe. |
| `--url` |  The git repository to clone, for a package that does not say where its source is kept, or to check out a repository no installed recipe came from. |


## mod config recipes source new

Start a new recipe project in the working set.


Writes a recipe project to **.moderne/recipes/\<name>** and makes it a git repository. On a working set checked out to a changeset its branch is the changeset's and its commits are pushed there. It builds as it stands, so a recipe added to it runs on the next **mod run**.

### Usage

```
mod config recipes source new [parameters]
```

### Examples

```
mod config recipes source new . rewrite-acme

mod config recipes source new . recipes-acme --ecosystem npm
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `path` |  The working set to start the recipe project in. |
| `name` |  The name of the project and of its repository, for example **rewrite-acme**. |

### Options

| Name | Description |
| ---- | ----------- |
| `--ecosystem` |  What builds the project, which settles the language of its recipes: **gradle** for recipes written in Java, **npm** for recipes written in TypeScript, which is how a recipe for JavaScript or TypeScript code is written. Default: gradle. |
| `--group` |  The group the project's artifact is published under, which also begins its package. |


## mod config recipes tree

Show what a composite recipe is made of.


A migration recipe composes hundreds or thousands of others, and its description cannot say what all of them do. This expands one level at a time so that the size of the answer does not depend on the size of the recipe. Drill in by running this again on the ID of any line that shows a child count.

### Usage

```
mod config recipes tree [parameters]
```

### Examples

```
mod config recipes tree org.openrewrite.java.migrate.UpgradeToJava25
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `recipe` |  The recipe ID to expand. A trailing portion of the ID is accepted when it matches only one recipe. |

### Options

| Name | Description |
| ---- | ----------- |
| `--depth` |  How many levels below the recipe to expand. |
| `--json` |  Print the tree as JSON rather than for reading. Defaults to **id** and **instanceName**; any of **id**, **instanceName**, **displayName**, **description**, **distinctRecipes**, **ecosystem**, **package** and **version** may be named instead. |


## mod config recipes upgrade

Upgrades all installed recipe artifacts to the latest available version.


For each installed recipe artifact with a dynamic requested version, re-resolves the latest version from the configured artifact source and reinstalls it.

### Usage

```
mod config recipes upgrade
```

### Examples

```
mod config recipes upgrade
```



## mod config recipes yaml

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml [subcommands]
```

### Examples

```
mod config recipes yaml install /path/to/yaml
```


### Subcommands

* `install`: Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.
* `delete`: Removes an artifact supplying recipes to the marketplace.

## mod config recipes yaml install

Adds or updates a YAML file that contains recipes that should be added to the recipe marketplace in the CLI.


The recipes defined in this YAML file will then be available to run.

### Usage

```
mod config recipes yaml install [parameters]
```

### Examples

```
mod config recipes yaml install /path/to/yaml
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `paths` |  The path(s) to the YAML file to install. Each YAML file will be copied, so if further modifications to them are made, make sure to reinstall. |

### Options

| Name | Description |
| ---- | ----------- |
| `--category` |  The name of the category to install these recipes into. |


## mod config recipes yaml delete

Removes an artifact supplying recipes to the marketplace.


The recipes defined by this artifact will then no longer be available to run.

### Usage

```
mod config recipes yaml delete [parameters]
```

### Examples

```
mod config recipes yaml delete /path/to/yml
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `path` |  The path to the YAML file to uninstall. |



## mod config run

Configures recipe run behavior.


All subsequent runs will use these settings

### Usage

```
mod config run [subcommands]
```


### Subcommands

* `polyglot-parallel`: Configure how many polyglot rewrite-rpc requests may run concurrently.
* `stall-threshold`: Configure how long a run may go without any repository finishing.
* `timeout`: Configure the run timeout.

## mod config run polyglot-parallel

Configure how many polyglot rewrite-rpc requests may run concurrently.


Caps the number of in-flight visit/parse/generate calls to Python, JavaScript, .NET, and Go rewrite-rpc subprocesses across a single recipe run. Each subprocess is unbounded in memory; this knob caps how many can be actively executing at the same time so the host running the CLI does not exhaust RAM. Pure-Java recipes are unaffected.

### Usage

```
mod config run polyglot-parallel [subcommands]
```


### Subcommands

* `delete`: Restore the polyglot rewrite-rpc concurrency cap to the default value.
* `edit`: Configure the polyglot rewrite-rpc concurrency cap.
* `show`: Display the configured polyglot rewrite-rpc concurrency cap.

## mod config run polyglot-parallel delete

Restore the polyglot rewrite-rpc concurrency cap to the default value.


### Usage

```
mod config run polyglot-parallel delete
```



## mod config run polyglot-parallel edit

Configure the polyglot rewrite-rpc concurrency cap.


### Usage

```
mod config run polyglot-parallel edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `parallel` |  Maximum number of polyglot rewrite-rpc requests in flight at once. Sized to host memory headroom. Allowed range: 1-64. |



## mod config run polyglot-parallel show

Display the configured polyglot rewrite-rpc concurrency cap.


### Usage

```
mod config run polyglot-parallel show
```



## mod config run stall-threshold

Configure how long a run may go without any repository finishing.


When no repository in a run has finished for this long, the CLI gives up on the repository that has been running the longest and lets the rest of the run continue, rather than the whole run being killed with nothing to show for it. The clock is relative to the run as a whole, so a legitimately slow repository is never given up on while other repositories are still finishing. Set to PT0S to disable.

### Usage

```
mod config run stall-threshold [subcommands]
```


### Subcommands

* `delete`: Restores the configured run stall threshold to the default value.
* `edit`: Configure how long a run may go without any repository finishing.
* `show`: Displays the configured run stall threshold.

## mod config run stall-threshold delete

Restores the configured run stall threshold to the default value.


### Usage

```
mod config run stall-threshold delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config run stall-threshold edit

Configure how long a run may go without any repository finishing.


### Usage

```
mod config run stall-threshold edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration expressed as an ISO-8601 duration. For example: 'PT15M' for fifteen minutes, 'PT1H' for one hour. 'PT0S' disables giving up on a repository entirely. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config run stall-threshold show

Displays the configured run stall threshold.


### Usage

```
mod config run stall-threshold show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config run timeout

Configure the run timeout.


Limits the amount of time the CLI will wait for a single execution of a recipe run.

### Usage

```
mod config run timeout [subcommands]
```


### Subcommands

* `delete`: Restores the configured run timeout to the default value.
* `edit`: Configure the timeout for recipe runs.
* `show`: Displays the configured run timeout.

## mod config run timeout delete

Restores the configured run timeout to the default value.


### Usage

```
mod config run timeout delete
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config run timeout edit

Configure the timeout for recipe runs.


Limits the amount of time the CLI will wait for a single execution of a recipe run.

### Usage

```
mod config run timeout edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `duration` |  The duration of the timeout expressed as an ISO-8601 duration. For example: 'PT1H' for one hour, 'PT30M' for 30 minutes, 'PT1H30M' for one hour and 30 minutes. |

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config run timeout show

Displays the configured run timeout.


### Usage

```
mod config run timeout show
```

### Options

| Name | Description |
| ---- | ----------- |
| `--local` |  Apply this command recursively to all repositories found within the specified directory path, modifying each repository's git-ignored file **.moderne/moderne-uncommitted.yml**<br/>Has no impact on the global configuration. |
| `--save` |  Apply the operation to the file **.moderne/moderne.yml** which can be committed to source control as opposed to the git-ignored variant.<br/>Can only be used with `--local`.<br/>Has no effect on the global configuration. |


## mod config scm (deprecated)

(DEPRECATED) Configures source code management.




### Usage

```
mod config scm [subcommands]
```


### Subcommands

* `moderne`: (DEPRECATED) Configures the SCM configuration with Moderne
* `add`
* `remove`
* `show`: (DEPRECATED) Displays the configured SCMs

## mod config scm moderne (deprecated)

(DEPRECATED) Configures the SCM configuration with Moderne




### Usage

```
mod config scm moderne [subcommands]
```

### Examples

```
mod config scm moderne sync
```


### Subcommands

* `sync`: Synchronizes the SCM configuration with your Moderne instance

## mod config scm moderne sync (deprecated)

Synchronizes the SCM configuration with your Moderne instance




### Usage

```
mod config scm moderne sync
```



## mod config scm add (deprecated)


(DEPRECATED) Add an SCM configuration

### Usage

```
mod config scm add [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `type` |  The SCM type |
| `baseUrl` |  The primary SCM URL |

### Options

| Name | Description |
| ---- | ----------- |
| `--alternate-url` |  Alternate SCM URLs |


## mod config scm remove (deprecated)


(DEPRECATED) Remove an SCM configuration by type and URL

### Usage

```
mod config scm remove [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `type` |  |
| `baseUrl` |  |



## mod config scm show (deprecated)

(DEPRECATED) Displays the configured SCMs


### Usage

```
mod config scm show
```



## mod config secrets

Configures how secrets in the configuration are kept.


Tokens and passwords are written to moderne.yml as $\{secret:name} placeholders, so that reading the configuration does not reveal them.

### Usage

```
mod config secrets [subcommands]
```


### Subcommands

* `store`: Configures where the secrets of the global configuration are kept.

## mod config secrets store

Configures where the secrets of the global configuration are kept.


Either the OS keychain (the macOS keychain, Windows Credential Manager, or the Secret Service of a Linux desktop through secret-tool) or a secrets.properties file beside moderne.yml. The keychain is the default on macOS and Windows, the file on Linux.

### Usage

```
mod config secrets store [subcommands]
```


### Subcommands

* `delete`: Keeps secrets in the default store for this OS, moving every secret in moderne.yml there.
* `edit`: Chooses where secrets are kept, moving every secret in moderne.yml there.
* `show`: Displays where secrets are kept.

## mod config secrets store delete

Keeps secrets in the default store for this OS, moving every secret in moderne.yml there.


### Usage

```
mod config secrets store delete
```



## mod config secrets store edit

Chooses where secrets are kept, moving every secret in moderne.yml there.


Secrets still in plain text move too, and one that can't be moved is reported.

### Usage

```
mod config secrets store edit [parameters]
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `store` |  Either 'keychain' or 'file'. |



## mod config secrets store show

Displays where secrets are kept.


### Usage

```
mod config secrets store show
```



## mod config telemetry

Configures CLI telemetry.


Configure how the CLI uploads telemetry to the configured Moderne tenant.

### Usage

```
mod config telemetry [subcommands]
```


### Subcommands

* `wait-for-upload`: Waits for queued telemetry to upload before exiting.

## mod config telemetry wait-for-upload

Waits for queued telemetry to upload before exiting.


Telemetry uploads in the background as each command finishes. Enable this on CI runners and containers, whose filesystem does not outlive the command and so never retries the upload. Disabled by default.

### Usage

```
mod config telemetry wait-for-upload
```

### Options

| Name | Description |
| ---- | ----------- |
| `--enabled` |  |


## mod copilot

(INCUBATING) Launches a GitHub Copilot session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod copilot [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a GitHub Copilot session configured to use **mod** for deterministic multi-repository work.

## mod copilot chat

(INCUBATING) Launches a GitHub Copilot session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod copilot chat [parameters]
```

### Examples

```
mod copilot chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod cursor

(INCUBATING) Launches a Cursor session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod cursor [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Cursor session configured to use **mod** for deterministic multi-repository work.

## mod cursor chat

(INCUBATING) Launches a Cursor session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod cursor chat [parameters]
```

### Examples

```
mod cursor chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod doctor

Checks that this machine and the CLI's configuration can build and publish LSTs.


Reports on the host, the CLI's own configuration, the toolchains it found, git and its credentials, and then the services a mass-ingest run depends on: Maven settings, the LST artifact store, the Moderne tenant, the license to run on private code, and the SCM origins listed in a repos.csv. Each section lists facts first, then its checks as what was found against what a run needs. A check that says must fails the command when it is not met; one that says should only warns. What to do about each is listed at the end. Every check is read-only, and nothing is written to any remote.

### Usage

```
mod doctor [parameters]
```

### Examples

```
mod doctor /path/to/project

mod doctor --sync-csv --skip-remote
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `path` |  The directory a run works in. Its free space is checked, and its _.moderne/repos-lock.csv_ is the default list of SCM origins to probe. |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Output the report in JSON. Each row says whether its fix lies with the host, the setup or a remote service. |
| `--skip-remote` |  Do not contact any network service. Remote sections report a single skipped row. |
| `--sync-csv` |  A repos.csv whose rows are summarized and whose SCM origins are probed. Without a value, the central repos.csv of the configured LST artifact store is read, as **mod publish --sync-csv** would. |


## mod devcenter

Generate DevCenter dashboards.


Generate a dashboard from a DevCenter recipe run for each organization.

### Usage

```
mod devcenter [parameters]
```

### Examples

```
mod devcenter /path/to/organization
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |


## mod exec

Execute an arbitrary shell command on selected repositories and partitions.


If you want to execute a command that contains positional parameters, please ensure that you use the end-of-options POSIX delimiter (**--**) before your command.

When a repository has a detected build tool (Maven, Gradle, Bazel, npm, Yarn, pnpm, Bun or uv), the command is executed from the build tool's project directory. For partitioned repositories, the command runs once per partition in each partition's build tool directory. Partitions without a detected build tool are skipped in multi-partition repositories, they lack an execution directory.

Commands can use a set of precomputed environment variables specific to each repository or partition: **JAVA\_HOME**, **MODERNE\_JAVA\_HOME**, **MODERNE\_JAVA\_VERSION**, **MODERNE\_JAVA\_JDK**, **MODERNE\_BUILD\_TOOL**, **MODERNE\_BUILD\_TOOL\_COMPILE**, **MODERNE\_BUILD\_TOOL\_CHECK**, **MODERNE\_BUILD\_TOOL\_DIR** and **MODERNE\_BUILD\_TOOL\_EXECUTABLE**.These variables can be used as literal command arguments (they will be substituted) or as standalone commands that expand to a full build tool invocation. For Maven and Gradle that invocation is the one the build makes, with style, license and static analysis checks turned off, and it runs in each build root of the repository in turn. A JavaScript project's dependencies are installed before its test or build script runs, and a Python project's tests run with pytest in an environment uv provisions.

Open a GitHub Pull Request

```
mod exec /path/to/project -- gh pr create --title "Test PR" --body "Test PR"
```

Open a GitLab Merge Request

```
mod exec /path/to/project -- glab mr create --title "Test PR" --description "Test PR"
```

Execute build tool compilation tasks

```
mod exec /path/to/project MODERNE_BUILD_TOOL_COMPILE
```

Execute build tool verification tasks

```
mod exec /path/to/project MODERNE_BUILD_TOOL_CHECK
```

List what would run, without running it

```
mod exec /path/to/project MODERNE_BUILD_TOOL_CHECK --dry-run --json
```

### Usage

```
mod exec [parameters]
```

### Examples

```
mod exec /path/to/project rm *.hprof
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `cmd` |  The shell command that you wish to run on the selected repository roots. |  |
| `args` |  Arguments for the command, if any exist. |  |

### Options

| Name | Description |
| ---- | ----------- |
| `--dry-run` |  Do not run the command, but list what would run in each repository, resolved to that repository's build tool, execution directory and JDK. Detecting the build tool still invokes it, exactly as a real run would. |
| `--json` |  (INCUBATING) Print the result as JSON rather than as progress. The format of this JSON is unsettled at this point, and the data structure may change. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `-o`, `--out`, `--output` |  The output type for the command. Accepts `Console` and `File`. If not specified, the output will be printed to a file. |
| `--parallel` |  (INCUBATING) Run the command in parallel. Setting this option to 2 or more causes the command to run with a fixed-size thread pool with that many threads. Setting this to 1 causes the command to run sequentially. Setting this to 0 runs the command with a thread pool sized to the number of CPU cores on your machine. Setting this to a negative number runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod git

Multi-repository git operations.




### Usage

```
mod git [subcommands]
```


### Subcommands

* `add`: Performs the equivalent of **git add** on multiple repositories.
* `apply`: Performs the equivalent of **git apply** on multiple repositories.
* `checkout`: Performs the equivalent of **git checkout** on multiple repositories.
* `commit`: Performs the equivalent of **git commit** on multiple repositories.
* `compare`: Compares a recipe run with what a changeset already holds.
* `pull`: Performs the equivalent of **git pull** on multiple repositories.
* `push`: Performs the equivalent of **git push** on multiple repositories.
* `reset`: Performs the equivalent of **git reset** on multiple repositories.
* `rev-parse`: Performs the equivalent of **git rev-parse** on multiple repositories.
* `rm`: Performs the equivalent of **git rm** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
* `stashset`: Performs the equivalent of **git stash** on multiple repositories.
* `sync`: Acts like **rsync** for a working set from a repos.csv or from Moderne.
* `status`: Performs the equivalent of **git status** on multiple repositories.

## mod git add

Performs the equivalent of **git add** on multiple repositories.


Rather than applying **git add** one at a time, this operates on multiple repositories.

### Usage

```
mod git add [parameters]
```

### Examples

```
mod git add /path/to/project --recipe-run <recipe-run-id>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod git apply

Performs the equivalent of **git apply** on multiple repositories.


Rather than applying one patch at a time, this operates on multiple repositories.

### Usage

```
mod git apply [parameters]
```

### Examples

```
mod git apply /path/to/project --recipe-run 20230903164310-2qVRM
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod git checkout

Performs the equivalent of **git checkout** on multiple repositories.




### Usage

```
mod git checkout [parameters]
```

### Examples

```
mod git checkout /path/to/project

mod git checkout /path/to/project --changeset --name "Java 25"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `branch` |  The branch to checkout. | `main` |

### Options

| Name | Description |
| ---- | ----------- |
| `-b`, `-B` |  Causes a new branch to be created as if git-branch were called and then checked out. |
| `--changeset` |  Check out to a changeset in Moderne. Give an id to join an existing changeset. Each repository's git remote is set to its slot in the changeset. Changes already on the changeset appear as commits on a branch based on the commit the LST was built from. Pushes from that branch go to the changeset rather than the origin. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `-n`, `--name` |  The name of a new changeset. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod git commit

Performs the equivalent of **git commit** on multiple repositories.


Rather than applying one commit at a time, this operates on multiple repositories.

### Usage

```
mod git commit [parameters]
```

### Examples

```
mod git commit /path/to/project -m "commit message"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `-a`, `--all` |  Stage the changes the recipe run made before committing, as **mod git add** would. |
| `--allow-empty` |  Whether or not to allow making empty commits. |
| `--gpg-passphrase-path` |  Path to a file containing the passphrase for the GPG private key. |
| `--gpg-private-key-path` |  Path to an armored PGP private key file for signing. Implies **--gpg-sign**. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `-m`, `--message` |  The commit message to use. |
| `--no-gpg-sign` |  Override **commit.gpgsign** configuration and create an unsigned commit. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `-S`, `--gpg-sign` |  GPG sign the commit. Uses the local GPG keyring, or a key file if **--gpg-private-key-path** is provided. |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod git compare

Compares a recipe run with what a changeset already holds.


On a working set checked out to a changeset, a recipe run cannot be applied to the branch: the run works from each repository as it was before the changeset, and the branch already holds the recipe run the changeset started from and what was committed since. For each repository this puts the run's result on the commit the changeset started from, to the side, and says how it differs from the original run's commit and from the branch as it stands. The checkout, its index and its branch are left as they are. This is how to judge a change to a recipe: run the changed recipe, then compare.

### Usage

```
mod git compare [parameters]
```

### Examples

```
mod git compare /path/to/project --last-recipe-run
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  Print the comparison of every repository as JSON rather than for reading. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |


## mod git pull

Performs the equivalent of **git pull** on multiple repositories.


Rather than pulling one repository at a time, this operates on multiple repositories.

### Usage

```
mod git pull [parameters]
```

### Examples

```
mod git pull /path/to/project
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--gpg-passphrase-path` |  Path to a file containing the passphrase for the GPG private key. |  |
| `--gpg-private-key-path` |  Path to an armored PGP private key file for signing. Implies **--gpg-sign**. |  |
| `--no-gpg-sign` |  Override **commit.gpgsign** configuration and create an unsigned commit. |  |
| `--rebase` |  Pull with rebase or not. | `github.com` |
| `-S`, `--gpg-sign` |  GPG sign the commit. Uses the local GPG keyring, or a key file if **--gpg-private-key-path** is provided. |  |


## mod git push

Performs the equivalent of **git push** on multiple repositories.


On a working set checked out to a changeset the push goes to the changeset in Moderne.

### Usage

```
mod git push [parameters]
```

### Examples

```
mod git push /path/to/project -u origin feature-branch
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `repository` |  |  |
| `refspec` |  Specify what destination ref to update with what source object. |  |

### Options

| Name | Description |
| ---- | ----------- |
| `-f`, `--force` |  Same as corresponding flag in `git`. Overwrites the remote branch with your local branch, even if it would result in losing commits that exist on the remote. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `-m`, `--message` |  A message for the change. Recorded in Moderne when pushing to a changeset. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--search` |  A search run ID to filter repositories to only those with matches. |
| `--tool` |  The tool that made the change. Recorded in Moderne when pushing to a changeset. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |
| `-u`, `--set-upstream` |  For every branch that is up to date or successfully pushed, add upstream (tracking) reference. |


## mod git reset

Performs the equivalent of **git reset** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

### Usage

```
mod git reset [parameters]
```

### Examples

```
mod git reset /path/to/project
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--hard` |  Resets the index and working tree. |


## mod git rev-parse

Performs the equivalent of **git rev-parse** on multiple repositories.


Rather than applying one rev-parse at a time, this operates on multiple repositories. Arguments passed to **git rev-parse** must be specified after the end-of-options POSIX delimiter (**--**).

### Usage

```
mod git rev-parse [parameters]
```

### Examples

```
mod git rev-parse /path/to/project -- --show-toplevel
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `args` |  |  |



## mod git rm

Performs the equivalent of **git rm** on multiple repositories.


Rather than applying **git rm** one at a time, this operates on multiple repositories.

### Usage

```
mod git rm [parameters]
```

### Examples

```
mod git rm /path/to/project .DS_Store
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `file` |  File patterns to remove. |  |

### Options

| Name | Description |
| ---- | ----------- |
| `--cached` |  Only remove from the index, leaving working tree files in place. |


## mod git stashset

Performs the equivalent of **git stash** on multiple repositories.


Rather than applying one stash at a time, this operates on multiple repositories.

This command does not affect the stash log of the repository, but rather stores the otherwise untracked commit in a multi-repository stash file in Moderne configuration, so the whole 'stashset' can be applied at once atomically.

### Usage

```
mod git stashset [subcommands]
```

### Examples

```
mod git stashset /path/to/project
```


### Subcommands

* `apply`: Performs the equivalent of **git stash apply** on multiple repositories.
* `push`: Performs the equivalent of **git stash push** on multiple repositories.

## mod git stashset apply

Performs the equivalent of **git stash apply** on multiple repositories.




### Usage

```
mod git stashset apply [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `ref` |  The stash ref to apply. |  |

### Options

| Name | Description |
| ---- | ----------- |
| `--force` |  Pop the stash after applying it, regardless of whether it made a change. |


## mod git stashset push

Performs the equivalent of **git stash push** on multiple repositories.




### Usage

```
mod git stashset push [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `-u`, `--include-untracked` |  Include untracked files. |


## mod git sync

Acts like **rsync** for a working set from a repos.csv or from Moderne.


Brings each repository to the branch and commit its source names.

### Usage

```
mod git sync [subcommands]
```


### Subcommands

* `csv`: Synchronizes the repositories and metadata of an organization from a local repos.csv file.
* `moderne`: Synchronizes an organization or a changeset from Moderne.

## mod git sync csv

Synchronizes the repositories and metadata of an organization from a local repos.csv file.


Synchronize repositories and metadata to **path** using a local repos.csv **csv** file. The file need not be named repos.csv. The name is shorthand for a CSV in the format described at https://docs.moderne.io/user-documentation/moderne-cli/references/repos-csv/. The CSV must include a **cloneUrl** column. A flat directory structure is used unless one or more **orgN** columns are present. By default, repositories do not include source code. Use **--with-sources** to clone sources. If a **publishUri** column is present, associated LSTs will also be downloaded.

### Usage

```
mod git sync csv [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set to sync into. It is created if missing. | `/path/to/project` |
| `csv` |  A repos.csv file or URL. A **moderne://** URI syncs from Moderne instead. |  |

### Options

| Name | Description |
| ---- | ----------- |
| `--depth` |  Equivalent to the **git clone --depth** option. |
| `--filter` |  Equivalent to the **git clone --filter** option. Defaults to **tree:0**, or to a full clone while **mod config features build git-blame** is enabled. |
| `--limit` |  (DEPRECATED) Has no effect. |
| `--organization`, `--org` |  Only the repositories of this organization. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. **mod config moderne organizations show** lists them. |
| `--parallel` |  (INCUBATING) Run the command in parallel. Setting this option to 2 or more causes the command to run with a fixed-size thread pool with that many threads. Setting this to 1 causes the command to run sequentially. Setting this to 0 runs the command with a thread pool sized to the number of CPU cores on your machine. Setting this to a negative number runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads. |
| `--save` |  If the CSV has per repository configuration like custom build tool options, JVM configuration, etc. save that configuration in a **.moderne/moderne.yml** which can be committed to source control. |
| `--shard` |  Sync only shard i of M. For example 3/8. This splits the repositories across M working sets. Each repository always lands in the same shard. i counts from 1. |
| `--single-branch` |  Equivalent to the **git clone --single-branch** option. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |
| `--with-lsts` |  Download each repository's LST. |
| `--with-sources` |  Clone or pull every repository at the commit of its LST. With a changeset they are checked out to its branch. Repositories with local changes or on another branch are skipped. |


## mod git sync moderne

Synchronizes an organization or a changeset from Moderne.


A directory is created for every repository. The LST is downloaded too. Many code transformations and analyses can be done with just the LST since it is a superset of the text of the repository.

**--organization** limits the sync to one organization. **--changeset** limits it to the repositories with results in a changeset. With sources they are checked out to the changeset's branch. Pushes then go to the changeset. With LSTs only the changes go to **.moderne/run** for **mod git apply**.

### Usage

```
mod git sync moderne [parameters]
```

### Examples

```
mod git sync moderne /path/to/organization --organization <ORG_NAME>

mod git sync moderne /path/to/working-set --changeset 20260924153000-Ab1cD --with-sources

mod git sync moderne /path/to/working-set --changeset 20260924153000-Ab1cD --organization ALL/Payments --with-sources
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set to sync into. It is created if missing. | `/path/to/project` |
| `organizationNameOrId` |  (DEPRECATED) The name of an organization in Moderne. All repositories in that organization will be cloned at the branch and commit of their current LSTs. Use **--organization** instead. |  |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--changeset` |  Sync only the repositories with results in this changeset. The id is the changeset's id in Moderne. | `20260924153000-Ab1cD` |
| `--depth` |  Equivalent to the **git clone --depth** option. |  |
| `--filter` |  Equivalent to the **git clone --filter** option. Defaults to **tree:0**, or to a full clone while **mod config features build git-blame** is enabled. |  |
| `--limit` |  (DEPRECATED) Has no effect. |  |
| `--organization`, `--org` |  Only the repositories of this organization. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. **mod config moderne organizations show** lists them. |  |
| `--parallel` |  (INCUBATING) Run the command in parallel. Setting this option to 2 or more causes the command to run with a fixed-size thread pool with that many threads. Setting this to 1 causes the command to run sequentially. Setting this to 0 runs the command with a thread pool sized to the number of CPU cores on your machine. Setting this to a negative number runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads. |  |
| `--save` |  If the CSV has per repository configuration like custom build tool options, JVM configuration, etc. save that configuration in a **.moderne/moderne.yml** which can be committed to source control. |  |
| `--shard` |  Sync only shard i of M. For example 3/8. This splits the repositories across M working sets. Each repository always lands in the same shard. i counts from 1. |  |
| `--single-branch` |  Equivalent to the **git clone --single-branch** option. |  |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |  |
| `--with-lsts` |  Download each repository's LST. |  |
| `--with-sources` |  Clone or pull every repository at the commit of its LST. With a changeset they are checked out to its branch. Repositories with local changes or on another branch are skipped. |  |


## mod git status

Performs the equivalent of **git status** on multiple repositories.


Rather than applying **git status** one at a time, this operates on multiple repositories.

### Usage

```
mod git status [parameters]
```

### Examples

```
mod git status /path/to/project

mod git status /path/to/project --remote
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--remote` |  Also show what the changeset in Moderne holds of each repository and its data tables. |


## mod graphql

Send a GraphQL query or mutation to Moderne and print the response.


Sends the document to the GraphQL API of the configured tenant, as the user its token is, and prints the response as Moderne sent it. A response can hold data and errors both, so one with errors is printed all the same, and the command then fails. The schema is large: look up the type you need with **\_\_type(name: "...")** rather than introspecting all of it.

### Usage

```
mod graphql [parameters]
```

### Examples

```
mod graphql '{ organizations { edges { node { id name } } } }'

mod graphql -f id=ALL 'query($id: ID!) { organization(id: $id) { name } }'

mod graphql -F input=@commit.json - < commit.graphql
```

### Parameters

| Name | Description |
| ---- | ----------- |
| `query` |  The query or mutation, or - to read it from standard input. |

### Options

| Name | Description |
| ---- | ----------- |
| `-f`, `--raw-field` |  A variable whose value is the string given, whatever it looks like. |
| `-F`, `--field` |  A variable. Its value is read as JSON when all of it is JSON (a number, true, false, null, an object, an array or a quoted string) and as a string otherwise; @\<file> reads it from a file. |


## mod kiro

(INCUBATING) Launches a Kiro session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod kiro [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Kiro session configured to use **mod** for deterministic multi-repository work.

## mod kiro chat

(INCUBATING) Launches a Kiro session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod kiro chat [parameters]
```

### Examples

```
mod kiro chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod log

Manages a log aggregate.


Used to understand holistically how a build performed on many repositories. In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log [subcommands]
```


### Subcommands

* `builds`: Adds a set of build logs to a log aggregate.
* `execs`: Adds a set of exec logs to a log aggregate.
* `runs`: Adds a set of run logs to a log aggregate.
* `syncs`: Adds a set of sync logs to a log aggregate.

## mod log builds

Adds a set of build logs to a log aggregate.


In contrast to a CI build log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of the ingestion process.

### Usage

```
mod log builds [subcommands]
```


### Subcommands

* `add`: Adds a set of build logs to a log aggregate.

## mod log builds add

Adds a set of build logs to a log aggregate.


For each repository that has a matching build, add its build log to the aggregate.

### Usage

```
mod log builds add [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `logPath` |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. | `log.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--build` |  A build ID for a build that has completed previously. |
| `--last-build` |  Select whatever the last build was, whether the build ran fully to completion or terminated early. |


## mod log execs

Adds a set of exec logs to a log aggregate.


In contrast to a CI log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of an exec operation.

### Usage

```
mod log execs [subcommands]
```


### Subcommands

* `add`: Adds a set of exec logs to a log aggregate.

## mod log execs add

Adds a set of exec logs to a log aggregate.


For each repository that has a matching exec, add its exec log to the aggregate.

### Usage

```
mod log execs add [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `logPath` |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. | `log.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--exec` |  An exec ID for an exec that has completed previously. |
| `--last-exec` |  Select whatever the last exec was, whether the exec ran fully to completion or terminated early. |


## mod log runs

Adds a set of run logs to a log aggregate.


In contrast to a CI log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of a recipe run.

### Usage

```
mod log runs [subcommands]
```


### Subcommands

* `add`: Adds a set of run logs to a log aggregate.

## mod log runs add

Adds a set of run logs to a log aggregate.


For each repository that has a matching run, add its run log to the aggregate.

### Usage

```
mod log runs add [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `logPath` |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. | `log.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `--last-run` |  (DEPRECATED) use (DEPRECATED) use @\|--last-recipe-run\|@ instead. |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--run` |  (DEPRECATED) use (DEPRECATED) use @\|--recipe-run\|@ instead. |
| `--search` |  A search run ID to filter repositories to only those with matches. |


## mod log syncs

Adds a set of sync logs to a log aggregate.


In contrast to a CI log which is designed to look at one repository at a time, a log aggregate is designed to look at many repositories at once, illuminating the common causes of failure (or success) and the overall health of a sync operation.

### Usage

```
mod log syncs [subcommands]
```


### Subcommands

* `add`: Adds a set of sync logs to a log aggregate.

## mod log syncs add

Adds a set of sync logs to a log aggregate.


For each repository that has a matching sync, add its sync log to the aggregate.

### Usage

```
mod log syncs add [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |
| `logPath` |  The absolute or relative path on disk to a log aggregate (a zip file). The file need not exist, though its containing directory is expected to exist. | `log.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-sync` |  Select whatever the last sync was, whether the sync ran fully to completion or terminated early. |
| `--sync` |  A sync ID for a sync that has completed previously. |


## mod list

Lists locally checked-out repositories.




### Usage

```
mod list [parameters]
```

### Examples

```
mod list /path/to/project
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  (INCUBATING) Output the repository listing in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |


## mod login

Logs the CLI into Moderne


The default authorization mode is a web-based browser flow. After login and consent, a PAT (personal access token) will be created and stored in the configuration file.

Alternatively, use **--with-token** to pass in an existing token on standard input.

After a successful login, the local CLI recipe marketplace is synchronized from Moderne.

### Usage

```
mod login
```

### Options

| Name | Description |
| ---- | ----------- |
| `--expiration` |  The time to expiration for the token to be created, as an ISO-8601 duration string. Example: P180D for 180 days. |
| `--with-token` |  The Moderne personal access token to use. |
| `-y`, `--yes` |  Automatic yes to prompts when synchronizing the recipe marketplace. |


## mod monitor

(INCUBATING) Launches an HTTP server used to monitor the CLI.


This command will launch an HTTP server and block, so should be used in combination with backgrounding the process and redirecting its output as needed. The server will respond to GET requests on `http://localhost:<PORT>/prometheus` in the Prometheus exposition format.

### Usage

```
mod monitor
```

### Options

| Name | Description |
| ---- | ----------- |
| `--port` |  The port to listen on. Default is 8080. |


## mod opencode

(INCUBATING) Launches an opencode session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod opencode [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches an opencode session configured to use **mod** for deterministic multi-repository work.

## mod opencode chat

(INCUBATING) Launches an opencode session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod opencode chat [parameters]
```

### Examples

```
mod opencode chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod pi

(INCUBATING) Launches a Pi session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod pi [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Pi session configured to use **mod** for deterministic multi-repository work.

## mod pi chat

(INCUBATING) Launches a Pi session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod pi chat [parameters]
```

### Examples

```
mod pi chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |
| `--unattended` |  Run the prompt to completion and exit. Requires **--prompt**. |  |


## mod prebuild

Extracts build metadata without parsing source files.


Populates .moderne/prebuild/ — a directory tree (mirroring the V3 LST shape)
where each BuildStep writes whatever files it needs. A subsequent 'mod build'
walks that tree and parses sources without re-running the build tool.

This command is useful for:
  - Diagnosing build issues (inspect what each step discovered)
  - Pre-warming builds (run prebuild on CI, then build locally)
  - Custom build tools (populate the prebuild tree yourself, then run 'mod build')

### Usage

```
mod prebuild [parameters]
```

### Examples

```
mod prebuild /path/to/project
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--offline` |  When an underlying build tool has an offline mode, enable it. |
| `--refresh` |  Force a rebuild of prebuild results, ignoring any cached metadata. |


## mod publish

Publishes the LST artifacts for one or more projects.


Once published to your artifact repository, Moderne will be able to ingest them and they will, in turn, be usable inside of Moderne.

You must run **mod build** before you can run this command. You also must set up an artifact repository connection by running **mod config lsts artifacts** before this command will work.

### Usage

```
mod publish [parameters]
```

### Examples

```
mod publish /path/to/project

mod publish /path/to/ws --sync-csv --organization Payments
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--full`, `--rebuild` |  (INCUBATING) Build and publish every repository, even one whose repos-lock.csv row already records the remote HEAD, this CLI version and a reproducible build. The row does not record how the repository was built, so a run after the build steps change needs this to build again what they now read differently. |
| `--organization`, `--org` |  Only the repositories of this organization. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. **mod config moderne organizations show** lists them. |
| `--shard` |  Work through only shard i of M of the repository list, for example 3/8 (i counts from 1, and 0 is read as M, so a job index that counts from 0 still covers the list), so M tasks split one repos.csv without coordinating. A repository's shard is the SHA-256 of `origin\|path\|branch` (origin and path lowercased, any partition removed, the branch blank when the row has none), leading 8 bytes as an unsigned number, modulo M, plus 1. It depends on that row alone and is the same on every machine. Applied after --organization. |
| `--sync-csv` |  Work through a repos.csv one repository at a time: clone, build, publish, record the result in the artifact store's repos-lock.csv, and delete the repository directory before moving to the next, so the workspace never holds more than the repository in flight. A repository is skipped when its repos-lock.csv row already records the remote HEAD, was built by this CLI version, and was a reproducible build, unless --full. A repository listed under several organizations is built once, and every one of its rows records that publish. Without a value, the csv is the repos.csv in the configured artifact store, which must exist either way. Put the path before this option. |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |


## mod run

Runs an OpenRewrite recipe on a working set or an organization in Moderne.


On a working set the recipe runs on each repository's LST. LSTs come from
**mod build** or **mod git sync**.

**Finding a recipe**

**mod config recipes search** finds a recipe in the catalog, with its id and
options. With --json it prints what it finds rather than asking whether to make
one the active recipe:

```
mod config recipes search 'update Gradle wrapper' \
  --json=id,description,options
```

A recipe's id as the query finds that recipe, and dataTables among the fields
adds the data tables it produces:

```
mod config recipes search \
  org.openrewrite.gradle.UpdateGradleWrapper --json=id,options,dataTables
```

Pass the id to --recipe and each option as -P name=value.

**Local runs**

A local run needs the LSTs **mod build** makes and a recipe in the catalog.
It leaves each repository's changes as a patch, which **mod git apply**
applies, and its data tables, which **mod study** reads:

```
mod run . --recipe org.openrewrite.gradle.UpdateGradleWrapper \
  -P version=9.1.0
mod git apply . --last-recipe-run
mod study . --last-recipe-run --data-table <name> --csv
```

**Runs in Moderne**

When the working set is **moderne://\<organization>** the recipe runs in Moderne.
The run is saved as a Moderne changeset. Only **--recipe**, **-P**, **--bundle**,
**--patches** and **--max-files** apply.

```
mod run moderne://ALL/Default \
  --recipe org.openrewrite.gradle.UpdateGradleWrapper -P version=9.1.0
```

When it is **moderne://changeset/\<changesetId>** the recipe runs in Moderne over
the repositories that changeset has results in, such as the ones a saved search
matched. They run in the organization the changeset was made in, at their
current LSTs.

The same command run again while its run in Moderne is still going rejoins that
run instead of queueing another.

### Usage

```
mod run [parameters]
```

### Examples

```
mod run /path/to/project \
  --recipe=org.openrewrite.gradle.UpdateGradleWrapper \
  -P version=9.1.0

mod run "moderne://ALL/Financial Services" \
  --recipe=org.openrewrite.gradle.UpdateGradleWrapper -P version=9.1.0

mod run moderne://changeset/<changesetId> \
  --recipe=<recipe> --bundle <BUNDLE_ID>
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `directory\|organization` |  A working set, **moderne://\<organization>** or **moderne://changeset/\<changesetId>**. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `/path/to/project` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--active-recipe` |  Run the recipe that is active in the Moderne IDE plugin. |  |
| `--bundle` |  Use the recipe from this bundle instead of the marketplace. **mod config recipes bundle push** prints the id. For runs in Moderne. | `mod run "moderne://ALL/Financial Services" --recipe=<recipe> --bundle <BUNDLE_ID>` |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |  |
| `--last-search` |  Select the ID of the last search run to filter repositories. Only repositories that had search matches will be processed. |  |
| `--max-files` |  How many files of each repository's diff print. For runs in Moderne. |  |
| `--no-patch` |  (INCUBATING) Skip the patch files. Useful when you only need the data tables. |  |
| `-P`, `--recipe-option` |  A recipe option as **name=value**. | `mod run . --recipe=<recipe> -P methodPattern='java.util.List add(..)' -P moreOptions='moreOptions'` |
| `--parallel` |  (INCUBATING) Run the command in parallel. Setting this option to 2 or more causes the command to run with a fixed-size thread pool with that many threads. Setting this to 1 causes the command to run sequentially. Setting this to 0 runs the command with a thread pool sized to the number of CPU cores on your machine. Setting this to a negative number runs the command with a fixed-size thread pool equal to the number of CPU cores minus the absolute value of that number. For example, `-1` runs the command with (cores-1) threads. |  |
| `--patches` |  Write each repository's whole patch under **.moderne/run/\<changesetId>**. For runs in Moderne. |  |
| `--recipe` |  The id of the recipe to run. A short name works when only one recipe has it. For example **org.openrewrite.java.ChangeMethodName** or **ChangeMethodName**. Recipes aren't as fast as searches but can do vastly more complex things. | `org.openrewrite.java.search.FindMethods` |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |  |
| `--search` |  A search run ID to filter repositories to only those with matches. |  |
| `--shard` |  Sync only shard i of M. For example 3/8. This splits the repositories across M working sets. Each repository always lands in the same shard. i counts from 1. Takes effect with **--sync-csv**. |  |
| `--streaming` |  (INCUBATING) Print machine-readable results as they are produced. |  |
| `--sync-csv` |  Sync the LSTs in this repos.csv before the run. Syncing is interleaved with running. Repositories complete incrementally instead of waiting for a full sync of a large organization. Repositories without a published LST are skipped. | `mod run ./ws --sync-csv ./repos.csv --recipe=<recipe>` |
| `--trace-tag` |  Tags to add as extra columns to the trace.csv emitted by this command. Each tag becomes a column with header `tag.<key>` and the supplied value. Repeat the option to add multiple tags. |  |


## mod run-history

Get information about the most recent recipe runs. This will be transitioning to **mod audit runs list** eventually. A deprecation notice will be added here when we suggest adopting the alternative.




### Usage

```
mod run-history [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A git repository or a working set directory of git repositories. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--json` |  (INCUBATING) Output the run history in JSON. The format of this JSON is unsettled at this point, and the data structuremay change. |
| `--most-recent` |  Only show the most recent run of each recipe. |


## mod search

Do a fast, sophisticated code search across a working set.


Unlike all other code search tools, **mod search** is based on Moderne Trigrep.
That is a trigram index of the text of the code and also of every piece of
type attribution, dependency and author information in the LST.

On a working set the search uses the Trigrep index in each repository's LST.
Repositories without an index are skipped.

In place of a directory, **moderne://\<organization>** searches that organization's
repositories in Moderne without cloning them, and prints what it finds as a
search of a directory does. Prefer the smallest organization that holds the
repositories you care about; repo: in the query narrows its repositories by
path. Only repositories you can read are searched, so an empty result can mean
no access as well as no match. List organizations with
**mod config moderne organizations show --json**.

**Examples**

```
mod search . 'call:java.util.List.add -file:src/test' --output=plain
mod search moderne://ALL/Default 'dependency:guava:29.x' --output=summary
mod search moderne://ALL/Default --syntax=sql \
  "SELECT origin, path, branch, count(*) AS files
   FROM search('dependency:guava:29.x select:file')
   GROUP BY ALL ORDER BY files DESC"
```

**Query syntax**

Queries use Sourcegraph syntax by default. Plain words match literally and must
all appear in a file (AND is implied). OR, NOT and parentheses combine terms.
"two words" is a phrase, /pattern/ is a regular expression, and case:no ignores
case. Quote the whole query for the shell, so that a phrase keeps its quotes:

```
mod search . '"two words"'
```

file:src/test matches part of a file's path, repo:payments part of a
repository's origin/path, and lang:java or lang:cobol a file's language.
select:file returns matching files without their lines. Beside a text or
symbol term, file: only says which files to search, so CLMREC file:cbl/ finds
the CLMREC lines in cbl/; alone, or with only other filters, it matches each
file's path, which counts as a file and not a match.

**Resolved symbols**

Use resolved symbols to find code by what it calls, uses or declares. These
filters skip comments, strings and unrelated types with the same simple name:

```
call:java.util.List.add               calls, including calls on subtypes
call:java.util.List.remove(int)       calls of one overload
ref:java.util.List                    written uses of a type
ref.new:java.util.ArrayList           constructor uses
ref.call:java.util.List               calls whose receiver has that type
ref.field:java.lang.System            accesses to fields owned by that type
sym:UserService                       declarations of a name
implements:java.io.Serializable       implementing declarations
extends:java.lang.Exception           subclass declarations
annotated:org.junit.jupiter.api.Test  annotated declarations
returns:java.lang.String              declarations returning a type
throws:java.lang.Exception            declarations throwing a type
```

An argument list tells overloads apart. In it \* is any one argument and .. is
any number, so call:java.util.List.add(int, \*) is the two-argument add. It
matches parameter types as the call instantiates them, so add on a List\<String>
takes String.

Bare ref: includes written type uses, constructor uses and documentation links.
Use ref.call: or ref.field: for member references, ref.any: for all reference
kinds, ref.[type,call]: for a set, or ref.owner: for members declared in a type.
Names may be qualified, simple (List) or patterns (java.util.\* or \*..List), and
are case-sensitive except mainframe names. select:symbol.class,
select:symbol.method and select:symbol.field keep one kind of declaration;
select:symbol.\<path> also narrows the targets of ref: and call:.

```
mod search . 'sym:User* select:symbol.class' --output=plain
```

Several declaration filters describe the same declaration:
annotated:Test throws:Exception finds test methods that throw Exception.

A symbol filter combines with text, file:, lang:, OR and NOT:

```
mod search . 'call:java.sql.DriverManager.getConnection -file:src/test'
```

Two call:, ref: or sym: filters side by side, or a call: or ref: beside a
declaration filter, would have to match a single symbol, so the search finds
nothing. Search for each with select:file and intersect the files.
dependency: is the exception: beside a call: or ref: it keeps the ones that
resolved to that dependency.

**Dependency usages and versions**

dependency: finds calls and references whose targets come from a dependency,
whichever of its types is used. It finds attributed usages, not an inventory
of every installed or resolved package. A transitive dependency is found under
its own name. The JDK and a module's own code belong to no dependency; another
module of the same repository can count as one under its own coordinates.

Name a dependency by artifact, group or both. A \* can appear anywhere in a name:

```
dependency:guava
dependency:com.fasterxml.*
dependency:com.google.guava:guava
dependency:com.fasterxml.*:jackson*:2.15.x
```

A version last keeps usages that resolved that version. 2.15 and 2.15.x match
every 2.15 release; ^2.15 and \~2.15.1 are version ranges. Quote a Maven range
inside the query, and quote the whole query for the shell:

```
mod search . 'dependency:"log4j-core:[2.0,2.17.1)"' --output=summary
```

An npm package uses @ before its version: dependency:lodash@4.x.
A kind after the dot narrows usages: dependency.call: and dependency.new:.
A dependency filter also combines with a resolved call or reference:

```
mod search . 'dependency:guava:29.x call:*..ImmutableList.of'
```

For npm, an unversioned runtime name also recognizes its declaration package:
dependency:react includes @types/react, dependency:lodash includes
@types/lodash, and dependency:@babel/core includes @types/babel\_\_core. An
explicit dependency:@types/react@18.x asks about declaration versions, while
dependency:react@19.x uses the recorded React runtime identity and version,
never the declaration version. Missing, ambiguous, aliased-to-another-package
or older package metadata leaves that identity unknown, so an empty version
search does not establish the absence of vulnerable runtime dependencies.

**Structural patterns**

struct:"catch (:[type] :[e]) \{ }" matches a shape of code, where a :[name] hole
respects balanced brackets. Keep a literal token in the pattern. A hole
repeated in a pattern matches the same text, not the same variable. Beside
other terms, struct: keeps the files that match them all, and the matches
shown may be another term's; search the struct: term alone when its matches
are what you need.

**Search or a recipe**

Use a recipe instead to list the dependencies a repository resolves, to
aggregate a data table, or to change code. mod config recipes search
finds one, and mod run --help shows how to run it.

**Reading results**

--output=plain lists each repository, then each matching file's path in it,
then the file's numbered lines, with a : after the number of a matching line.
A match sits under the lines that declare its enclosing classes and methods,
and ... stands for lines left out. When a line does not show what matched, a
note after ℹ on the line below it does: the full name a glob matched, the
program a dynamic call reaches, a dependency's coordinates and version, or
what a statement does to a DB2 table. A file select:file found carries the
coordinates of the dependencies it uses below its path, so
dependency:org.springframework\*:\*:5.x select:file names each file's artifact
and version.

When a search did not cover everything, it says so after its results: the
repositories it skipped and why, and the matching files --max kept out.

**Mainframe sources and symbol kinds**

Mainframe analysis tools split search in two, and both are here. A search in
the source is a text search, except that text is case-sensitive here unless
the query says case:no. A search by name is sym: for where a program,
copybook, data item, paragraph, job, step, map or DB2 table is declared, and
ref:, or call: for a program, for where a statement names it. Filtering by
application is repo: or a smaller organization, and filtering by type is lang:
and select:symbol.\<path>.

Members are typed by language whether or not they parsed: lang:cobol (programs
and copybooks), lang:jcl (jobs and procedures), lang:bms, lang:controlm,
lang:controlcard (sort, IDCAMS, DB2 utility and DSN decks, and parm members),
lang:bind (DB2 bind decks), lang:linkedit, lang:listload (what AMBLIST and the
binder printed), lang:sql (DB2 DDL), lang:ims (DBDs, PSBs, MFS and gen decks),
lang:assembler, lang:rexx, lang:clist, lang:sas, lang:doc (run books),
lang:pli and lang:c. Names are read from COBOL programs and copybooks, their
EXEC SQL included, JCL, BMS, Control-M, assembler, link-edit decks and module
listings, IDCAMS and sort decks, IMS gen decks, and DB2 DDL, bind and DSN RUN
decks and utility control cards; the IDCAMS, sort, link-edit and DB2 decks a
job writes in its own stream are read as their members are. Where text finds a
name in a repository and sym: and ref: find nothing there, the repository was
indexed without its mainframe members parsed: search the text until it is
indexed again.

sym: finds declarations. Every mainframe kind is a path under mainframe: a
declaration's is its node (mainframe.cobol.procedure.paragraph), and a
reference's the node it names, a slash and how it names it
(mainframe.program/call, mainframe.program/exec,
mainframe.cobol.data.item/ref). COBOL declares the program (mainframe.program:
sym:CLMU010) and the copybook (mainframe.cobol.copybook: sym:CLMREC), each
division and its sections by their first word (mainframe.cobol.division,
mainframe.cobol.division.section: sym:CLMB010.WORKING-STORAGE), each procedure
section and paragraph (mainframe.cobol.procedure.section, .paragraph:
sym:2100-READ-MASTER), the file (mainframe.cobol.file: the FD, never the
SELECT or OPEN naming the file), and each data item and condition name
(mainframe.cobol.data.item, .condition at level 88), qualified by its program.
A copybook's items are qualified by the copybook (sym:CLMREC.CLM-STATUS), and
a copied item is declared in the copybook, not in the programs that copy it.
sym:CLM-STATUS matches the name wherever it is declared, sym:\*AMT-RESERVED
every name ending so, and ? is one character of a name, as in
select:symbol.mainframe.jcl.job sym:CLMJ0??. JCL declares jobs, procedures,
steps and DDs (mainframe.jcl.job, .proc, .step, .dd) by name field, qualified
by position (sym:CLMJ030.REPORT), and BMS declares map sets, maps and fields
(mainframe.cics.mapset, .map, .field: sym:CLMS01.CLMM01). select:symbol.\<path>
keeps every kind under the path, so lang:cobol sym:\*
select:symbol.mainframe.program lists the programs and sym:\*
select:symbol.mainframe.cobol.procedure every paragraph and section.

What a statement names is a reference, and every kind below is in bare ref:.
In COBOL, call:CLMU010, or ref.call:CLMU010, is each CALL, EXEC CICS LINK and
XCTL that transfers to the program, written as a literal or through the one
literal its data name is known to hold, so CALL WS-EDIT-PGM is call:CLMU040
where WS-EDIT-PGM has VALUE 'CLMU040', and the match says so with the note ℹ
mainframe.program/call CLMU040 below it. A PERFORM is never a call.
ref.perform:2100-READ-MASTER is a PERFORM target, and the section qualifying
it in PERFORM 0200-READ OF 0000-MAIN; ref.goto: a GO TO or ALTER target;
ref.copy:CLMREC a COPY or EXEC SQL INCLUDE; ref.data:CLM-STATUS a data name
where it is used, a use of a condition name under it, as IF CLM-OPEN or SET
CLM-OPEN TO TRUE, being a use of it too, and a host variable or CICS operand
counts when the program declares it; ref.file:CLAIM-MASTER a file a SELECT,
OPEN, READ, CLOSE or SORT names; and ref.dd:CLMMAST the ddname SELECT ...
ASSIGN TO binds a file to, which sym:CLMMAST finds as a JCL DD. In JCL,
ref.pgm:IDCAMS is the program a step runs (EXEC PGM=), ref.proc:CLMDB2 the
procedure a step invokes, ref.dsn: the data set a DD names (the library, for
DSN=LIB(MEMBER)) and ref.member: the member, as LIB.MEMBER. A use is qualified
like its declaration: ref:CLMREC.CLM-STATUS is every use of the copied field,
and ref:CLM-STATUS the uses of any item of that name. sym:CLMB010 and then
ref:CLMB010 walk from a program to the statements and the JCL that name it.
Beside ref: a select:symbol.\<path> keeps the references to what they name:
ref:\* select:symbol.mainframe.cobol.data.condition is every use of a level-88
name. A reference that cannot tell which kind it names, as a name the program
declares nowhere, sits on the group above (mainframe.cobol.data/ref) and
answers for every kind under it, and a value with a relation keeps that one:
ref:CLMU010 select:symbol.mainframe.program/exec is ref.pgm:CLMU010.

The other members declare and name their own kinds, each under its technology.
Control-M, in its panel and its XML export alike, declares each job as
FOLDER.JOB (mainframe.controlm.job: sym:CLMNIGHT.CLMJ010), its folders
(ref.owner:CLMNIGHT lists a folder's jobs), calendars and the conditions a job
adds (mainframe.controlm.condition), and refers to the member a job submits
(ref:CLMJ010 select:symbol.mainframe.member/schedule), the conditions it waits
for and deletes (ref:CLMNIGHT\_CLMJ030\_OK
select:symbol.mainframe.controlm.condition/in, and /delete), its calendars and
its run book. A link-edit deck declares the load module its NAME builds and
each ALIAS (mainframe.module.load, .alias: sym:CLMRESV), and refers to what
INCLUDE binds in as DD.MEMBER (ref:OBJLIB.CLMU010
select:symbol.mainframe.module.load) and its ENTRY; an AMBLIST or binder
listing declares the modules it reports, an AMBLIST one qualified by its
library (sym:CLM.PROD.LOADLIB.CLMB010), and refers to each control section and
entry point (ref:IGZCBSO select:symbol.mainframe.module.csect). JCL refers to
a data set both as written and as its symbols resolve, a procedure's own cards
against its defaults and a calling step's literal overrides deciding names at
the override, so ref.dsn:CLM.PROD.CLMMAST finds DSN=&HLQ..CLMMAST; a
generation is a name of its own, quoted (ref.dsn:"CLM.PROD.EXTRACT(+1)");
INCLUDE MEMBER= is a mainframe.jcl.include/ref; and a job is indexed with its
own cards, a procedure's steps in the procedure, an override DD as
JOB.STEP.PROCSTEP.DD. An IDCAMS DEFINE, in a control-card member or written in
a job, declares the data set it defines (mainframe.dataset.cluster, .gdg,
.aix, .path, .nonvsam, .component: sym:CLM.PROD.CLMMAST), and DELETE, REPRO,
LISTCAT and the rest refer to it. IMS gen decks declare databases, segments as
DBD.SEGM, their fields, PSBs, named PCBs, transactions, MFS formats, device
pages and fields, and messages (mainframe.ims.dbd, .segment, .field.segment,
.psb, .pcb, .transaction, .format, .dpage, .dfld, .message), and refer to the
database a PCB names (ref:CLMDBD01 select:symbol.mainframe.ims.dbd), the
segments and fields a PSB is sensitive to and the PSB a transaction runs; a
DL/I region step's MBR= and PSB= are a ref.pgm: and a PSB reference. In COBOL
an EXEC CICS command refers to the file, queue, transaction, map and map set
it names (ref:CLMMAST select:symbol.mainframe.cics.file; mainframe.cics.tsq,
.tdq, .transaction, .map as MAPSET.MAP, .mapset), a DL/I call to the segment
each search argument names (ref:CLMROOT select:symbol.mainframe.ims.segment)
and an ISRT's MOD (mainframe.ims.message), and EXEC DLI SCHD to the PSB it
schedules. No CSD is in a repository, so a CICS file, queue or transaction has
references and no declaration. A COBOL match is held by its program, section
and paragraph as a Java match is by its class and method, so a match shows the
PROGRAM-ID and paragraph lines above it.

DB2 objects are named both by the programs that use them and by the members
that define and bind them. In COBOL each table an EXEC SQL statement names is
a mainframe.db2.table/ref over its whole name, on the group because a
statement cannot tell a base table from a view or an alias (ref:CLM.POLICY
select:symbol.mainframe.db2.table), and its note gives what the statement does
to the table as C, R, U and D: ℹ mainframe.db2.table/ref CLM.POLICY R under a
cursor's FROM CLM.POLICY, U under UPDATE CLM.POLICY. A DCLGEN copybook's
DECLARE TABLE is one too, in the copybook and not in the programs that include
it. A table matches relative to its schema, since static SQL that writes a
table bare takes the schema from the bind's QUALIFIER: ref:CLM.POLICY
select:symbol.mainframe.db2.table also finds FROM POLICY, whatever qualifier
the program was bound with, ref:POLICY select:symbol.mainframe.db2.table finds
POLICY in any schema, and a glob or regex matches the name as written, so
ref:CLM.\* select:symbol.mainframe.db2.table is every table written with the
schema CLM. DECLARE POLCSR CURSOR declares the cursor CLMD020.POLCSR
(mainframe.db2.cursor: sym:POLCSR), and OPEN, FETCH and CLOSE refer to it
(ref:POLCSR select:symbol.mainframe.db2.cursor). A DDL member declares storage
groups, databases, table spaces as DATABASE.TABLESPACE, and tables, views and
aliases (mainframe.db2.stogroup, .database, .tablespace, .table.base,
.table.view, .table.alias: sym:CLM.POLICY, and
select:symbol.mainframe.db2.table sym:\* every one of them), and under each
table its columns as TABLE.COLUMN, its indexes and its named foreign keys
(mainframe.db2.column, .index, .foreign-key: sym:CLM.POLICY.POLICY\_NO), so
ref.owner:CLM.POLICY lists a table's columns, indexes and keys; a name written
without its schema takes the last SET CURRENT SQLID's. It refers to the table
an index, a foreign key, a GRANT, an ALTER or a DROP is about, the tables a
view's or a catalog query's FROM reads, the table space or database a table is
created IN (ref:CLMDB01.CLMTSPOL select:symbol.mainframe.db2.tablespace) and
the storage group an index or table space uses (ref:CLMSG01
select:symbol.mainframe.db2.stogroup); the catalog is declared nowhere, so its
tables have references only (ref:SYSIBM.\* select:symbol.mainframe.db2.table).
A bind deck declares the package BIND PACKAGE(CLMPKG) MEMBER(CLMD010) binds,
as CLMPKG.CLMD010 (mainframe.db2.package), and the plan a BIND PLAN binds
(mainframe.db2.plan: sym:CLMPLAN), and refers to the collection (ref:CLMPKG
select:symbol.mainframe.db2.collection), the DBRM (ref:CLMD010
select:symbol.mainframe.db2.dbrm), the LIBRARY (lang:bind
ref.dsn:CLM.PROD.DBRMLIB), each PKLIST entry as written and what a REBIND or
FREE names. A PKLIST entry CLMPKG.\* or \*.\* answers for every package it
covers, so ref:CLMPKG.CLMC040 select:symbol.mainframe.db2.package is every
plan that may run that package. A DSN deck's RUN refers to the program it runs
as EXEC PGM= does (ref.pgm:CLMD010), to its plan and to its LIB, and DSN
SYSTEM() to the subsystem (ref:DB2P select:symbol.mainframe.db2.subsystem). A
utility deck refers to the table space an UNLOAD, RUNSTATS, COPY or REORG
works on, the tables an unload's SELECT ... FROM or FROM TABLE reads, and each
DD a ...DDN keyword names (ref.dd:HSTUNL, which sym:HSTUNL finds as a JCL DD),
and a TEMPLATE declares the name such a keyword may use instead
(mainframe.db2.template: sym:HSTCARD). A job's own stream is read the same
way: its DDL, a bind or DSN deck under SYSTSIN and a utility deck under any DD
each name what their member would, on the job's cards (lang:jcl ref:CLM.POLICY
select:symbol.mainframe.db2.table), and a deck a procedure writes is found in
the procedure. Of the SQL a job writes in its stream only DDL is read, so a
SELECT it gives DSNTIAUL or DSNTEP2 there names no table.

An assembler member with an END is a program (mainframe.program: sym:CLMU030,
and lang:assembler select:symbol.mainframe.program sym:\* lists them), named by
its END operand and declared at the first statement labelled with that name,
which is often the shop's entry macro rather than a CSECT, and a member
without an END is a copy member, its labels owned by its name. A member
declares its control sections (mainframe.module.csect) and DSECTs
(mainframe.asm.dsect: sym:CLMRECD), in them its constants, equates, DCBs and
other labels as OWNER.LABEL (mainframe.asm.data, .equate, .dcb, .label:
sym:CLMRECD.\* select:symbol.mainframe.asm.data), the macros it defines
(mainframe.asm.macro: select:symbol.mainframe.asm.macro sym:\*) and the names
an ENTRY offers (mainframe.module.entry). What a member names is a reference:
a COPY, which ref.copy: finds in assembler as in COBOL (ref.copy:CLMREGS);
every macro it invokes, IBM's and the shop's alike (ref:CLMRTRN
select:symbol.mainframe.asm.macro); the program a CALL, LINK, XCTL, ATTACH or
V-con reaches, so call:CLMU030 finds the assembler caller beside the COBOL one
and call:ASMTDLI the DL/I calls; the segment each SSA of a DL/I call names
(ref:CLMROOT select:symbol.mainframe.ims.segment); and the DD a DCB reads
(ref.dd:PURGCARD). An instruction's operands name nothing, so sym:CLMRAMR
finds the field and ref:CLMRAMR nothing.

scope:comments, scope:code and scope:strings keep every text term, phrase and
regular expression of the query to comments, to everything but comments (a
string literal is code), or to string literals: scope:comments RESERVE reads
only what people wrote for people. COBOL records its comments and string
literals, assembler its comment lines and the remarks after an operand, and
JCL and IMS gen decks their comment lines (//\*, and \* or .\* in column 1); in
any other language scope:comments finds nothing and scope:code finds
everything.

A text term, quoted or bare, also matches across the lines a COBOL member
writes it on: a comment box's words read on from one line to the next, its
borders and the sequence, indicator and identification areas left out, a
literal continued in column 7 reads as one, and a statement's code reads on
past the end of a line and past a comment line between its words, while a
comment phrase stops at code. "NOT IN THE LIST" finds a sentence that ends one
comment line and starts the next, and "WHEN OTHER DISPLAY" a WHEN OTHER whose
DISPLAY starts the next line. The comment lines of JCL, assembler and IMS gen
decks read the same way, the //\* cards and the \* and .\* lines, columns 72 to
80 left out, and their code does not: "FIRST JOB OF THE NIGHTLY CLAIMS STREAM"
finds a job's comment block across two cards, "SERIAL MODULO ELEVEN" an
assembler program's and "THE SEVEN SENFLDS" a PSB's. A run of whitespace in a
phrase is one space, so "WHEN  OTHER" finds the two words however a line
spaces them. Each occurrence is one match, on the line it starts on, with the
lines it continues onto after it. scope: holds each part of it to where it was
printed. A regular expression, struct: and every other language read the
printed text only.

Mainframe names match in any case, so call:clmu010 is call:CLMU010; Java and
the other languages keep exact names, and text keeps its default.

**SQL search syntax and schemas (moderne:// organizations only)**

With --syntax=sql the query is a DuckDB SELECT over the tables below. It runs
in Moderne and the answer comes back as CSV. Use it when the answer is a
number, a distribution, a list of repositories or a combination of several
searches, and a plain search to read the matching lines. The SQL can read
nothing but these tables, and its rows come in no particular order without an
ORDER BY. A search streams its rows into the SQL as it finds them, so a LIMIT
stops it early, while --max only caps the rows that come back. Count in the
SQL, with count(\*) and GROUP BY; --output=summary does not apply.

**File, line and occurrence tables**

Each table takes a query written as for a plain search and covers the
organization's repositories that you can read. origin, path and branch name a
repository and file a path in it, so files join USING (origin, path, branch,
file) and repositories USING (origin, path, branch).

search('\<query>'): one row per matching file.

```
origin, path, branch, file, language, matches
matches counts matching lines, not individual occurrences.
```

search\_lines('\<query>'): one row per matching line.

```
origin, path, branch, file, language, line_number, line
```

search\_matches('\<query>'): one row per occurrence.

```
origin, path, branch, file, language, commit, snapshot, match_id,
match_kind, range_precision, start_line, start_column, end_line, end_column,
start_offset, end_offset, matched_text, captures, notes, capture_identity,
ast_node_kind, symbol_kind, symbol_id, symbol_parent, symbol_access,
enclosing_method_id, enclosing_class_id
```

Count files with search(), lines with search\_lines() and occurrences with
search\_matches(). select:file and metadata-only searches give file rows and no
line or occurrence rows.

**Occurrence positions, symbols and captures**

Regex, structural, phrase and symbol ranges are exact, including multiline
spans. Lines and columns are one-based, offsets are zero-based UTF-16 code
units, and ends are exclusive. Other searches give line fragments, marked
range\_precision='line\_fragment', whose absolute offsets are unknown. A phrase
that runs across lines has match\_kind phrase, and its end\_line and end\_column
are where it ends.

For sym:, ref: and call: matches, symbol\_kind is the kind as the index spells
it (method-call, type-ref, mainframe.program/call, ...) and symbol\_id the
qualified name those filters take, which for a reference is its resolved
target: CALL WS-EDIT-PGM can have symbol\_id='CLMU040'. symbol\_parent and
symbol\_access are NULL when the symbol has none. Text, regex and structural
matches have NULL symbol columns, as do matches an attribute filter (extends:,
annotated:, ...) or dependency: decided without a name filter.

A span that names several symbols, as CALL WS-EDIT-PGM names a data item and a
program, is a row for each, with the same range and its own match\_id, so a
count of rows can exceed the matches a plain search reports. match\_id is fixed
for a range, its captures and its symbol within one snapshot and commit, and
can change when the repository is indexed again.

enclosing\_class\_id is the innermost type holding the match: a class,
interface, enum, record or COBOL program. enclosing\_method\_id is the innermost
method, constructor, paragraph or section inside it, or the innermost of those
when no type holds the match. Both are NULL for a file whose index records no
declarations. ast\_node\_kind is NULL.

For a mainframe.db2.table/ref symbol, symbol\_access holds C, R, U and D, in
that order, for what the statement does to the table: INSERT, SELECT or a
cursor, UPDATE and DELETE. A DCLGEN's DECLARE TABLE has none.

captures and notes are JSON text. Read a captured hole with
json\_extract\_string(captures, '$.name'), and JOIN a struct: search's rows to
another search's rather than combining the terms in one query, which keeps
only one term's matches. notes holds what the filters that matched the span
knew, as an array of objects with source, text and shown fields, plus fields
by source:

```
symbol: kind, name, parent, parentKind, access
dependency: group, artifact, version
capture: hole, value
```

It holds every note, including those the line display leaves out.
json\_extract\_string(notes, '$[0].version') reads the version a dependency:
glob matched when the dependency note comes first; unnest the notes when a
match has notes of several kinds.

**Organization membership, depth and percentages**

organizations(): one row for each repository and each organization at or
below the selected one that holds it, directly or through a child.

```
origin, path, branch, organization, name, depth, indexed
organization is the organization's id. depth is relative to the organization
the command names: 0 for it, 1 for its children, and so on. indexed says
whether the index holds the repository at its current commit, whether or
not you can read it.
```

Join organizations() USING (origin, path, branch). A repository in several
organizations counts in each. The table includes repositories you cannot read
or whose access could not be checked, so a percentage with its indexed
repositories as the denominator is the matching repositories you can see over
all indexed ones: a lower bound on adoption across the organization, not a
share of the repositories you can read. Coverage counts likewise describe the
whole organization.

The share of each child organization's indexed repositories in which you can
see Guava 29 used:

```
WITH users AS MATERIALIZED (
  SELECT DISTINCT origin, path, branch
  FROM search('dependency:guava:29.x select:file')
)
SELECT o.organization, o.name,
  count(DISTINCT (s.origin, s.path, s.branch))
    FILTER (WHERE s.path IS NOT NULL) AS users,
  count(DISTINCT (o.origin, o.path, o.branch)) AS repositories,
  round(100.0 * users / repositories, 1) AS pct
FROM organizations() o
LEFT JOIN users s USING (origin, path, branch)
WHERE o.depth = 1 AND o.indexed
GROUP BY o.organization, o.name ORDER BY pct DESC
```

**Recipe data tables**

recipe('\<recipe>', '\<data table>'): a recipe's data table as its newest runs
in the organization left it, repository by repository. It runs no recipe.
Each row leads with origin, path, branch, file and line\_number, so it joins a
search USING (origin, path, branch, file).

**Combining searches**

Give each search its own alias. A JOIN keeps the files matching both, and an
anti-join or EXCEPT the files matching one but not the other. A WHERE on
origin, path or branch narrows the repositories. A search named twice is run
twice; name it once in WITH x AS MATERIALIZED (...) and read x instead.

Files with calls to both methods:

```
SELECT a.origin, a.path, a.branch, a.file
FROM search('call:java.util.List.add select:file') a
JOIN search('call:java.util.List.clear select:file') b
USING (origin, path, branch, file)
```

Percentiles of how many files in each repository use Guava 29:

```
SELECT quantile_cont(n, [0.5, 0.9, 0.99]) AS p50_p90_p99,
  max(n), count(*) AS repositories
FROM (
  SELECT origin, path, branch, count(*) AS n
  FROM search('dependency:guava:29.x select:file') GROUP BY ALL
)
```

Calls grouped by their containing declarations:

```
SELECT enclosing_class_id, enclosing_method_id, count(*) AS calls
FROM search_matches('call:java.util.List.add')
GROUP BY ALL ORDER BY calls DESC
```

File languages in the selected organization:

```
SELECT language, count(*) AS files
FROM search('file:. select:file') GROUP BY language
```

**Mainframe SQL examples**

Programs that copy a copybook and call another program:

```
SELECT a.path, a.file
FROM search('ref.copy:CLMREC select:file') a
JOIN search('call:CLMU010 select:file') b
USING (origin, path, branch, file)
```

How many statements per file call a program whose name starts CLMU:

```
SELECT path, file, count(*) AS calls
FROM search_lines('lang:cobol call:CLMU*')
GROUP BY path, file ORDER BY calls DESC
```

Program calls by resolved target:

```
SELECT symbol_kind, symbol_id, count(*) AS calls
FROM search_matches('lang:cobol call:*') GROUP BY ALL ORDER BY ALL
```

Program/table CRUD matrix:

```
SELECT enclosing_class_id AS program, symbol_id AS db2_table,
  symbol_access, count(*) AS statements
FROM search_matches('lang:cobol ref:* select:symbol.mainframe.db2.table')
GROUP BY ALL ORDER BY ALL
```

An ASOF join on start\_line places a match in what comes before it, as the
section each COPY lands in:

```
SELECT c.file, c.symbol_id AS copybook,
  regexp_extract(s.symbol_id, '[^.]+$') AS section
FROM search_matches('lang:cobol ref.copy:*') c
ASOF LEFT JOIN search_matches(
  'lang:cobol select:symbol.mainframe.cobol.division.section sym:*') s
ON c.origin = s.origin AND c.path = s.path AND c.branch = s.branch
  AND c.file = s.file AND c.start_line >= s.start_line
ORDER BY ALL
```

**Waiting and completeness**

The CLI waits for a long query and prints its rows as CSV. Below them it says
when the answer may be incomplete and why: a LIMIT or --max cut it short,
access to a repository could not be checked, the query raised warnings, or a
file reached the per-file match cap.

**Saving a search**

A search keeps nothing unless --save makes it a changeset, named by --name or
for its query. Save the search that names work someone is to act on, such as
the repositories a team should change; counts and exploration need no save.

```
mod search moderne://<organization> '<query>' --save --name '<name>'
```

A saved search covers the whole organization, whatever --max says: every
repository the query matches, each with the files and lines it matched. The
CLI prints the changeset's id and link and waits until Moderne has searched
the whole organization; stopping the CLI does not stop the search. A team
works within the changeset, syncing only the repositories it holds:

```
mod git sync moderne <directory> --changeset <id> --with-sources
```

A saved search keeps each file it matched, with each match marked, and each
match as a row of the data table org.openrewrite.table.SearchResults. A saved
SQL query keeps every row of its result, not only the first --max, as
io.moderne.codesearch.SqlResults, and marks the line each row names, so its
SELECT must have origin, path, branch, file and either line\_number (from
search\_lines) or start\_line (from search\_matches, whose other position
columns then mark the exact range). A query without them is refused before it
runs:

```
mod search moderne://<organization> --syntax=sql \
  "SELECT origin, path, branch, file, line_number
   FROM search_lines('call:java.util.List.add')" \
  --save --name 'List.add calls'
```

Read a saved search's table without cloning its repositories:

```
mod study moderne://changeset/<id> \
  --data-table io.moderne.codesearch.SqlResults --csv
```

### Usage

```
mod search [parameters]
```

### Examples

```
mod search /path/to/working-set "@Autowired"

mod search "moderne://ALL/Financial Services" "@Autowired" --output=summary

mod search "moderne://ALL/Financial Services" "dependency:org.springframework.boot:spring-boot:3.x" --save --name "Boot 3"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `directory\|organization` |  A working set or **moderne://\<organization>**. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `/path/to/project` |
| `queryParts` |  Search query, or SQL with --syntax=sql |  |

### Options

| Name | Description |
| ---- | ----------- |
| `-m`, `--max` |  Maximum number of matching files to show across the whole search, 100 by default. An explicit **count:** filter in the query overrides it, and **count:all** lifts it. It does not apply to **--output=summary**, which counts every match. With **--syntax=sql** it is the maximum number of rows to keep. |
| `--name` |  The name of the changeset **--save** makes. Defaults to the query. |
| `--output` |  How to show what the search finds. **rich**, the default, shows highlighted diffs and, for a working set, writes a run directory. **plain** is fast text output. **summary** counts every match over the whole search, with the files and repositories they are in, and lists neither the matches nor the repositories. |
| `--save` |  Save the search as a changeset in Moderne. The command waits until the whole organization is searched. For **moderne://** only. |
| `--syntax` |  The language the query is written in. **sourcegraph**, the default, is Sourcegraph's syntax, and **zoekt** is zoekt's. **sql** is DuckDB SQL, as Moderne's code search runs it, over **search('\<query>')**, **search\_lines('\<query>')**, **search\_matches('\<query>')**, **organizations()** and **recipe('\<recipe>', '\<data table>')**, a recipe's data table as its newest runs in the organization left it, so it is for a moderne:// organization only. |
| `-y`, `--yes` |  Proceed without confirmation for a search that cannot use the trigram index and must scan every file. Required when there is no console to prompt on. |


## mod study

Exports a recipe data table from a working set or a changeset in Moderne.


Data tables are created by recipe runs for each repository. **mod study** builds an aggregated data table. CSV by default. It adds columns that identify the repository and organization of each row. The aggregate then shows each repository's contribution across the working set.

On **moderne://changeset/\<changesetId>** the table is read from Moderne.

### Usage

```
mod study [parameters]
```

### Examples

```
mod study /path/to/project --last-recipe-run --data-table <DATA-TABLE-NAME>

mod study moderne://changeset/<CHANGESET_ID> --data-table SourcesFileResults --sql "SELECT repositoryPath, count(*) AS files FROM data_table GROUP BY ALL"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  A working set or **moderne://changeset/\<changesetId>**. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--csv` |  Output in CSV format |
| `--data-table` |  The name of the data table to study. |
| `--group` |  When multiple data tables share a fully-qualified name, disambiguate by group. A null/absent value matches ungrouped tables. |
| `--gzip` |  Gzip-compress the CSV output (.csv.gz). |
| `--json` |  Output the data table in JSON format with the specified fields. If no value is provided, all columns from the data table will be kept. |
| `--last-recipe-run` |  Select the ID of the last recipe run. The last recipe run is determined from the whole repository group, not on an individual repository basis. |
| `-m`, `--max` |  The most rows to print. Up to 10,000. For changesets in Moderne. |
| `-o`, `--output-file` |  Where to write the data table. The extension picks the format. For example **.xlsx** for Excel. |
| `--patches` |  Write each repository's whole patch under **.moderne/run/\<changesetId>**. For changesets in Moderne. |
| `--recipe-run` |  A recipe run ID listed by **mod run-history** |
| `--repositories` |  Export each repository's outcome instead of a data table. The columns are its state, files with results, files changed, errors, sync status, start and finish. For changesets in Moderne. |
| `--sql` |  DuckDB SQL over the data table. The table is named **data\_table**. For example **SELECT repositoryPath, count(\*) FROM data\_table GROUP BY ALL**. For changesets in Moderne. |
| `--template` |  |


## mod telemetry

Manage CLI telemetry pushed to the configured Moderne tenant.


Telemetry pushes automatically when the CLI refreshes its license lease. Use subcommands to flush the local queue on demand.

### Usage

```
mod telemetry [subcommands]
```


### Subcommands

* `publish`: Push queued CLI telemetry to the configured Moderne tenant.

## mod telemetry publish

Push queued CLI telemetry to the configured Moderne tenant.


Drains the local telemetry queue at **\~/.moderne/cli/trace/** to the tenant gateway. Telemetry normally pushes automatically when the CLI refreshes its license lease — use this command to flush on demand.

Exits non-zero if the gateway permanently rejects any traces (moved to **rejected/** as unpublishable).

### Usage

```
mod telemetry publish
```

### Examples

```
mod telemetry publish
```



## mod trace

Manages trace analysis tools.


Analyze build and run traces with failure classification using ML-powered techniques (not AI or LLM based) and interactive visualization.

### Usage

```
mod trace [subcommands]
```


### Subcommands

* `builds`: Build trace analysis tools.
* `execs`: Exec trace analysis tools.
* `runs`: Run trace analysis tools.
* `syncs`: Sync trace analysis tools.

## mod trace builds

Build trace analysis tools.


Analyze build traces to understand common failure patterns and build health metrics.

### Usage

```
mod trace builds [subcommands]
```


### Subcommands

* `analyze`: Launch interactive build trace analyzer.

## mod trace builds analyze

Launch interactive build trace analyzer.


Launches a web-based trace analyzer with ML-powered failure classification. The analyzer pre-processes all build failures, clusters similar issues, and provides an interactive interface to explore build patterns and failure root causes.

### Usage

```
mod trace builds analyze [parameters]
```

### Parameters

| Name | Description | Examples |
| ---- | ----------- | ---------- |
| `paths` |  A project directory, or one or more log.zip files containing trace data. | • `/path/to/project`<br/>• `log.zip`<br/>• `log-1.zip log-2.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--build` |  A build ID for a build that has completed previously. |
| `--last-build` |  Select whatever the last build was, whether the build ran fully to completion or terminated early. |


## mod trace execs

Exec trace analysis tools.


Analyze exec traces to understand command execution patterns and results.

### Usage

```
mod trace execs [subcommands]
```


### Subcommands

* `analyze`: Launch interactive exec trace analyzer.

## mod trace execs analyze

Launch interactive exec trace analyzer.


Launches a web-based trace analyzer for exec results. The analyzer provides an interactive interface to explore exec patterns, command operations, and execution metrics.

### Usage

```
mod trace execs analyze [parameters]
```

### Parameters

| Name | Description | Examples |
| ---- | ----------- | ---------- |
| `paths` |  A project directory, or one or more log.zip files containing trace data. | • `/path/to/project`<br/>• `log.zip`<br/>• `log-1.zip log-2.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--exec` |  An exec ID for an exec that has completed previously. |
| `--last-exec` |  Select whatever the last exec was, whether the exec ran fully to completion or terminated early. |


## mod trace runs

Run trace analysis tools.


Analyze run traces to understand recipe execution patterns and results.

### Usage

```
mod trace runs [subcommands]
```


### Subcommands

* `analyze`: Launch interactive run trace analyzer.

## mod trace runs analyze

Launch interactive run trace analyzer.


Launches a web-based trace analyzer for recipe run results. The analyzer provides an interactive interface to explore run patterns, recipe distributions, and execution metrics.

### Usage

```
mod trace runs analyze [parameters]
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  Path to a project directory containing run trace data. | `/path/to/project` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-run` |  Select whatever the last run was, whether the run completed fully or terminated early. |
| `--run` |  A run ID for a run that has completed previously. |


## mod trace syncs

Sync trace analysis tools.


Analyze sync traces to understand repository synchronization patterns and results.

### Usage

```
mod trace syncs [subcommands]
```


### Subcommands

* `analyze`: Launch interactive sync trace analyzer.

## mod trace syncs analyze

Launch interactive sync trace analyzer.


Launches a web-based trace analyzer for sync results. The analyzer provides an interactive interface to explore sync patterns, clone operations, and synchronization metrics.

### Usage

```
mod trace syncs analyze [parameters]
```

### Parameters

| Name | Description | Examples |
| ---- | ----------- | ---------- |
| `paths` |  A project directory, or one or more log.zip files containing trace data. | • `/path/to/project`<br/>• `log.zip`<br/>• `log-1.zip log-2.zip` |

### Options

| Name | Description |
| ---- | ----------- |
| `--last-sync` |  Select whatever the last sync was, whether the sync ran fully to completion or terminated early. |
| `--sync` |  A sync ID for a sync that has completed previously. |


## mod vscode

(INCUBATING) Launches a Visual Studio Code Chat session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod vscode [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Visual Studio Code Chat session configured to use **mod** for deterministic multi-repository work.

## mod vscode chat

(INCUBATING) Launches a Visual Studio Code Chat session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod vscode chat [parameters]
```

### Examples

```
mod vscode chat /path/to/working-set --org <ORG_NAME> --prompt "<PROMPT>"
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |
| `--prompt` |  The prompt the session starts with. Say what the work is and when it is done. |  |


## mod windsurf

(INCUBATING) Launches a Windsurf session configured to use **mod** for deterministic multi-repository work.




### Usage

```
mod windsurf [subcommands]
```


### Subcommands

* `chat`: (INCUBATING) Launches a Windsurf session configured to use **mod** for deterministic multi-repository work.

## mod windsurf chat

(INCUBATING) Launches a Windsurf session configured to use **mod** for deterministic multi-repository work.


The agent works on what the directory holds. All its tool use is approved up front. With a Moderne login it can also search and run recipes in Moderne. It syncs a changeset when it needs to build or test. Moderne lists the agent on any changeset it checks out.

### Usage

```
mod windsurf chat [parameters]
```

### Examples

```
mod windsurf chat /path/to/working-set
```

### Parameters

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `path` |  The working set the agent works in. The directory is created if missing. | `/path/to/working-set` |

### Options

| Name | Description | Example |
| ---- | ----------- | ---------- |
| `--no-preflight` |  Skip the readiness checks that run before the agent starts. |  |
| `--organization`, `--org` |  The organization in Moderne the agent works on. An organization is named by its id or its name. For example **ALL/Financial Services** or **Financial Services**. | `ALL/Financial Services` |


## mod wrapper

Create or configure a Moderne wrapper.


Creates a project-local wrapper (modw, modw.cmd, moderne/wrapper/moderne-wrapper.properties) or configures the global CLI installation with --global.

### Usage

```
mod wrapper
```

### Options

| Name | Description |
| ---- | ----------- |
| `--auto-update` |  Set version to RELEASE (track the latest stable release from the Code Genome Project). |
| `--auto-update-snapshot` |  Set version to LATEST (track the latest snapshot from the Code Genome Project). |
| `--distribution-password` |  Password for authenticated distribution downloads (stored in plaintext in moderne/wrapper/moderne-wrapper.properties, or \~/.moderne/cli/dist/moderne-wrapper.properties with --global). |
| `--distribution-token` |  Bearer token for authenticated distribution downloads (stored in plaintext in moderne/wrapper/moderne-wrapper.properties, or \~/.moderne/cli/dist/moderne-wrapper.properties with --global). |
| `--distribution-url` |  Where to download the CLI distribution from: the root of a Maven repository, which RELEASE is then also resolved against, or a URL template. A template supports $\{directory}, $\{version}, $\{platform} and $\{extension} placeholders. $\{directory} is the Maven directory, which for a snapshot keeps the -SNAPSHOT suffix while $\{version} is the timestamped file version. |
| `--distribution-url-cache-ttl` |  How long the wrapper caches the resolved RELEASE version before re-checking the distribution repository, as an ISO-8601 duration (e.g. PT1H, PT10M). PT0S disables caching. Avoids a metadata lookup on every invocation. |
| `--distribution-url-early-access-cache-ttl` |  How long the wrapper caches the resolved LATEST/snapshot version before re-checking the early-access repository, as an ISO-8601 duration (e.g. PT1H, PT10M). PT0S disables caching. |
| `--distribution-username` |  Username for authenticated distribution downloads (stored in moderne/wrapper/moderne-wrapper.properties, or \~/.moderne/cli/dist/moderne-wrapper.properties with --global). |
| `--global` |  Configure the global CLI installation instead of creating a project-local wrapper. |
| `--jdk-url` |  URL template for a JDK archive, used when no bundled JRE or system JDK is found. Supports $\{os} and $\{arch} placeholders. Set to 'skip' to disable JDK auto-download (useful for air-gapped environments where Java is available via MODERNE\_JAVA\_HOME or PATH). |
| `--version` |  CLI version to pin in the wrapper properties. Defaults to the currently-running CLI version. |


