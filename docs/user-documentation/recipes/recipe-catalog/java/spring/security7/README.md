---
description: Spring Security 7.x OpenRewrite recipes.
---

# Spring Security 7.x

_Recipes for migrating to [Spring Security 7](https://spring.io/projects/spring-security)._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `OAuth2AccessTokenResponseClient` from `RestOperations` to `RestClient` based implementations](./migrateoauth2accesstokenresponseclient.md)
* [Migrate to Spring Security 7.0](./upgradespringsecurity_7_0.md)
* [Remove throws exception in `SecurityConfigurer` methods `init` and `configure`](./securityconfigurerremovethrowsexception.md)
* [Spring Security 7 modularization](./modularizespringsecurity7.md)

## Recipes

* [Comment on Kotlin usages of `SecurityContext.getAuthentication()`](./commentonsecuritycontextauthenticationinkotlin.md)
* [Migrate `MvcRequestMatcher` to `PathPatternRequestMatcher`](./migratemvcrequestmatcher.md)
* [Migrate OAuth2 token response client from `RestOperations` to `RestClient`](./migrateoauth2restoperationstorestclient.md)
* [Migrate `requiresChannel()` to `redirectToHttps()`](./migraterequireschanneltoredirecttohttps.md)
* [Use constructor injection for `DaoAuthenticationProvider`](./migratedaoauthenticationproviderconstructor.md)


