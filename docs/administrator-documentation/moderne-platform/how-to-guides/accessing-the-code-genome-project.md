---
title: Accessing the Code Genome Project
sidebar_label: Accessing the Code Genome Project
description: How to obtain Code Genome Project credentials and mirror the repository in your Artifactory or Nexus.
---

{/*
Interim page: this pulls the admin-facing essentials for enabling Code Genome Project access so
customer admins are unblocked now. Move or supersede it once the canonical Code Genome Project
documentation is published.
*/}

# Accessing the Code Genome Project

The Moderne CLI and recipe artifacts are hosted in the Code Genome Project repository at `https://artifacts.codegenomeproject.org/maven`. You can reach it by mirroring it in your own Artifactory or Nexus, so the CLI and recipes resolve through your internal repository, exactly as before.

This guide covers what the repository hosts, how you get credentials, and how to onboard it as a remote repository.

## What the repository hosts

Access to each kind of content depends on your entitlement:

* **OpenRewrite open-source recipes** (Apache 2.0) and the **Moderne CLI**: available to any authenticated user.
* **Moderne Source Available License (MSAL) recipes**: available to customers only.
* **Moderne proprietary recipes**: available to customers only.

Your entitlement is checked on every request, so access that Moderne grants or revokes takes effect on your next download without needing a new credential.

## Getting credentials

If you're a Moderne customer, you'll receive the following directly from Moderne:

* A **username**.
* A **password**.
* A **download token** to get started immediately.

These credentials carry your customer entitlement, so they can pull MSAL and proprietary recipes in addition to the open-source recipes and the CLI. Use the credentials Moderne provides rather than creating your own account, because the entitlement is attached to the Moderne-provided identity.

## Onboarding the repository in Artifactory or Nexus

Add `https://artifacts.codegenomeproject.org/maven` as a new remote (proxy) repository in your Artifactory or Nexus, using your Code Genome Project credentials. Authenticate with HTTP Basic auth, using the token as the password. The username is not validated for token credentials, so any value works, though your Moderne-provided username keeps things clear.

:::info
Use the repository URL exactly as shown. Do not append a storage prefix such as `/oss`. The gateway adds the correct prefix for you, and an extra one causes the request to be rejected.
:::

Once the remote repository is in place, your developers install and run the CLI and recipes through your internal repository exactly as before, with no per-developer changes. See [Deploying the CLI from an internal artifact repository](../../../user-documentation/moderne-cli/getting-started/cli-internal-mirror.md) for the CLI-side setup.

## Troubleshooting

* **`401 Unauthorized`**: your request had no credentials, or the token is invalid or revoked. Confirm your mirror is sending the token, and generate a new one if needed.
* **`403 Forbidden`**: your request is authenticated, but your identity is not entitled to that artifact. Open-source recipes and the CLI are available to any authenticated user; MSAL and proprietary recipes require a customer entitlement. Confirm your mirror is configured with your Moderne-provided credentials rather than a personal account.
