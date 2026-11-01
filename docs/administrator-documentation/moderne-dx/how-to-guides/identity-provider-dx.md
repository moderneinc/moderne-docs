---
sidebar_label: Connecting your identity provider
description: How to sign Moderne DX's users in through your identity provider over SAML or OIDC.
---

# Connecting your identity provider to Moderne DX

DX signs users in through Keycloak, as the Moderne Platform does. Until you connect your identity provider, you sign in as the `moderne` administrator. Keycloak brokers your identity provider over Security Assertion Markup Language (SAML) or OpenID Connect (OIDC). You will configure it in Keycloak's admin console:

1. Open `https://login.moderne.acme.com/auth/admin/`. On a laptop, open `https://login.moderne.localhost:8443/auth/admin/`.
2. Sign in as `admin`, with the password in `data/permanent/dx/secrets/keycloak-admin-password`.
3. Switch to the `dx` realm.
4. Under **Identity providers**, add a **SAML v2.0** or **OpenID Connect v1.0** provider. Give it an alias, such as `corporate-sso`.
5. Add the mappers in the Platform's [Keycloak IdP mapping table](../../moderne-platform/references/authentication.md#keycloak-idp-mapping). The `admin` mapper gives your administrators DX's `admin` role.

Your identity provider will need DX's values for the new application:

| Protocol | Field                       | Value                                                                          |
|----------|-----------------------------|--------------------------------------------------------------------------------|
| SAML     | Single sign-on URL          | `https://login.moderne.acme.com/auth/realms/dx/broker/corporate-sso/endpoint` |
| SAML     | Audience URI (SP Entity ID) | `https://login.moderne.acme.com/auth/realms/dx`                               |
| OIDC     | Redirect URI                | `https://login.moderne.acme.com/auth/realms/dx/broker/corporate-sso/endpoint` |

Replace `moderne.acme.com` with DX's host and `corporate-sso` with your provider's alias. Once your administrators can sign in through your identity provider, disable the `moderne` user under **Users**.

## Keeping the realm in PostgreSQL

Keycloak keeps its realm in a database file under DX's permanent directory. To keep it in a PostgreSQL database instead, name the database in `moderne.yml`:

```yaml title="moderne.yml"
spring:
  datasource:
    url: jdbc:postgresql://db.acme.com:5432/keycloak
    username: keycloak
    password: ${KEYCLOAK_DB_PASSWORD}
```

Choose the database before you configure the realm. Moving a realm between databases is a Keycloak export and import.
