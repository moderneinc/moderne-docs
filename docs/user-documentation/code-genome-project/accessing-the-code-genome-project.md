---
description: How to sign in, get a token, and configure Maven, Gradle, and MCP clients to download from the Code Genome Project.
---

# Accessing the Code Genome Project

The [Code Genome Project](https://codegenomeproject.org) hosts a Maven-compatible repository of OpenRewrite recipes and the Moderne CLI. To download from it, you need an identity (so the project knows who you are) and, for licensed content, an entitlement (so the project knows what you are allowed to download).

This guide walks you through getting a download token, and then configuring Maven, Gradle, and Model Context Protocol (MCP) clients to use it. Customers should read the [section for customers](#accessing-licensed-content-as-a-customer), because your sign-in path is different from the open source one.

## What the repository hosts

The repository serves three kinds of content, and your entitlement decides which you can download:

* **OpenRewrite OSS recipes** (Apache 2.0) and the **Moderne CLI**: available to any signed-in user.
* **Moderne Source Available License (MSAL) recipes**: available to customers only.
* **Moderne proprietary recipes**: available to customers only.

Your entitlement is checked live on every request, so access granted or revoked by Moderne takes effect on your next download without you needing a new token.

## Getting a token as an open source user

If you only need the OSS recipes and the Moderne CLI, you can sign in with a social account:

1. Go to [codegenomeproject.org](https://codegenomeproject.org) and open the sign-in page.
2. Choose **Continue with GitHub** or **Continue with Google**.
3. Copy the download token that is shown. The token is tied to your verified email address and is permanent until you stop using it.

:::warning
Your token is displayed only once, when it is created. Copy it before you leave the page. If you lose it, sign in again to generate a new one.
:::

The token page also gives you a **Download setup guide** button that produces a `codegenome-setup.md` file with every configuration snippet below already filled in with your token.

:::info
Signing in with GitHub or Google grants access to OSS recipes and the Moderne CLI only. It does not grant access to MSAL or proprietary recipes, even if your email belongs to a customer organization. Customers should use the credentials Moderne provides instead, as described below.
:::

## Accessing licensed content as a customer

If your organization has a commercial relationship with Moderne, you will receive three things directly from Moderne:

* A **username**.
* A **password**.
* A **first download token** to get you started immediately.

:::warning
Use the username and password that Moderne provides. Do not create your own account with GitHub or Google sign-in. A self-created social account is treated as an open source user and will not have access to MSAL or proprietary recipes. Your entitlement is attached to the Moderne-provided credentials, not to a personal account.
:::

### Signing in and managing your tokens

Use your Moderne-provided credentials to sign in and manage tokens:

1. Go to [codegenomeproject.org](https://codegenomeproject.org) and open the sign-in page.
2. Enter the **username** and **password** Moderne gave you and select **Sign in**.
3. You will land on your token management page, where you can:
   * **Generate a download token**: mint a new token to use as a credential. Copy it when it is shown, because, like all tokens, it appears only once.
   * **Revoke**: revoke any existing token by its short id. Revoked tokens stop working immediately.

This management page is how you rotate credentials over time. Generate a separate token for each place you use it (for example, one per CI pipeline) so you can revoke one without affecting the others.

### Choosing a credential

As a customer you have two working credentials, and either can authenticate your downloads:

* Any **download token** you generate (including the first one Moderne sent you).
* Your **username and password** directly.

Using a generated token is recommended for automation, because you can hand a single token to a CI system and revoke just that token later. Keep your account username and password for signing in to the management page.

## Configuring your build tools

The repository lives at `https://artifacts.codegenomeproject.org/maven`. Authenticate with HTTP Basic auth, using a token as the password. For the username, use your email address (open source users) or your Moderne-provided username (customers); the username is not validated for token credentials, so any value works, but using your identity keeps things clear.

### Configuring Maven

Add the repository credentials to your `~/.m2/settings.xml` file:

```xml
<settings>
  <servers>
    <server>
      <id>codegenome</id>
      <username>you@example.com</username>
      <password>YOUR_TOKEN</password>
    </server>
  </servers>
</settings>
```

Then declare the repository in your `pom.xml` file, referencing the same `id`:

```xml
<repositories>
  <repository>
    <id>codegenome</id>
    <url>https://artifacts.codegenomeproject.org/maven</url>
  </repository>
</repositories>
```

:::info
Use the repository URL exactly as shown. Do not append a storage prefix such as `/oss` to the URL. The gateway adds the correct prefix for you, and an extra one causes the request to be rejected.
:::

### Configuring Gradle

For Kotlin build scripts (`build.gradle.kts`):

```kotlin
repositories {
    maven {
        url = uri("https://artifacts.codegenomeproject.org/maven")
        credentials {
            username = "you@example.com"
            password = "YOUR_TOKEN"
        }
    }
}
```

For Groovy build scripts (`build.gradle`):

```groovy
repositories {
    maven {
        url = 'https://artifacts.codegenomeproject.org/maven'
        credentials {
            username = 'you@example.com'
            password = 'YOUR_TOKEN'
        }
    }
}
```

## Connecting an MCP client

The Code Genome Project also exposes a Model Context Protocol (MCP) endpoint at `https://api.codegenomeproject.org/mcp`, authenticated with a bearer token.

For clients that read an `.mcp.json` file (such as Claude Code, Cursor, and VS Code):

```json
{
  "mcpServers": {
    "codegenome": {
      "type": "http",
      "url": "https://api.codegenomeproject.org/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

For the Claude Code CLI:

```shell
claude mcp add --transport http codegenome https://api.codegenomeproject.org/mcp --header "Authorization: Bearer YOUR_TOKEN"
```

:::tip
Cursor, VS Code, Windsurf, Cline, and Zed take the same URL with an `Authorization: Bearer` header. For clients that only speak stdio, bridge with `npx mcp-remote`.
:::

## Troubleshooting

* **`401 Unauthorized`**: your request had no credentials, or the token is invalid or revoked. Check that your build tool is sending the token, and generate a new one if needed.
* **`403 Forbidden`**: you are authenticated, but your identity is not entitled to that artifact. OSS recipes and the CLI are available to everyone; MSAL and proprietary recipes require a customer entitlement. If you are a customer seeing this, confirm you signed in with your Moderne-provided credentials rather than a personal GitHub or Google account.
